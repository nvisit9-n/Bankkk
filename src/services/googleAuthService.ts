/**
 * Production-ready Google Identity Services (GSI) OAuth 2.0 Integration
 * 
 * Capabilities:
 * 1. Dynamic loading of official GSI script (https://accounts.google.com/gsi/client)
 * 2. Native Google OAuth 2.0 Popup Window using google.accounts.oauth2.initTokenClient
 * 3. Official Google UserInfo API retrieval (https://www.googleapis.com/oauth2/v3/userinfo)
 * 4. Google Identity Services ID Token (JWT) parsing
 * 5. Official Rendered Google Sign-In Button via google.accounts.id.renderButton
 * 6. Zero dummy modals or mock account choosers
 */

export interface GoogleUserProfilePayload {
  sub: string;
  name: string;
  email: string;
  picture?: string;
  given_name?: string;
  family_name?: string;
  email_verified?: boolean;
}

export class GoogleAuthService {
  private static scriptLoadingPromise: Promise<boolean> | null = null;

  /**
   * Dynamically loads the official Google Identity Services SDK script
   */
  static loadGsiScript(): Promise<boolean> {
    if (typeof window === 'undefined') return Promise.resolve(false);

    if ((window as any).google?.accounts) {
      return Promise.resolve(true);
    }

    if (this.scriptLoadingPromise) {
      return this.scriptLoadingPromise;
    }

    this.scriptLoadingPromise = new Promise((resolve) => {
      // Check if script tag already exists in the document
      const existing = document.querySelector('script[src*="accounts.google.com/gsi/client"]');
      if (existing) {
        if ((window as any).google?.accounts) {
          resolve(true);
          return;
        }
        existing.addEventListener('load', () => resolve(Boolean((window as any).google?.accounts)));
        existing.addEventListener('error', () => resolve(false));
        // Fallback timer check
        setTimeout(() => {
          resolve(Boolean((window as any).google?.accounts));
        }, 1500);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        resolve(Boolean((window as any).google?.accounts));
      };
      script.onerror = () => {
        console.warn('Google Identity Services script failed to load');
        resolve(false);
      };
      document.head.appendChild(script);
    });

    return this.scriptLoadingPromise;
  }

  /**
   * Safely decodes a Google JWT Credential string into its JSON payload
   */
  static parseJwt(token: string): GoogleUserProfilePayload | null {
    try {
      const parts = token.split('.');
      if (parts.length < 2) return null;
      const base64Url = parts[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        window.atob(base64)
          .split('')
          .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      const parsed = JSON.parse(jsonPayload);
      if (!parsed.email) return null;
      return {
        sub: parsed.sub || '',
        name: parsed.name || parsed.given_name || parsed.email.split('@')[0],
        email: parsed.email.trim().toLowerCase(),
        picture: parsed.picture,
        given_name: parsed.given_name,
        family_name: parsed.family_name,
        email_verified: parsed.email_verified
      };
    } catch (e) {
      console.error('Failed to parse Google JWT payload:', e);
      return null;
    }
  }

  /**
   * Retrieves the configured Google Client ID from environment or storage
   */
  static getClientId(): string {
    const fromMeta = (import.meta as any).env?.VITE_GOOGLE_CLIENT_ID;
    if (fromMeta && typeof fromMeta === 'string' && fromMeta.trim()) {
      return fromMeta.trim();
    }
    try {
      const customId = localStorage.getItem('btn_custom_google_client_id');
      if (customId && customId.trim()) {
        return customId.trim();
      }
    } catch {
      // ignore
    }
    return '';
  }

  /**
   * Allows setting/updating the custom Google Client ID
   */
  static setCustomClientId(clientId: string): void {
    try {
      if (clientId && clientId.trim()) {
        localStorage.setItem('btn_custom_google_client_id', clientId.trim());
      } else {
        localStorage.removeItem('btn_custom_google_client_id');
      }
    } catch {
      // ignore
    }
  }

  /**
   * Initializes Google Identity Services (One Tap & rendered button)
   */
  static async initializeGsiId(options: {
    clientId: string;
    onCredential: (credential: string) => void;
    buttonContainer?: HTMLElement | null;
  }): Promise<boolean> {
    await this.loadGsiScript();
    const gAccounts = (window as any).google?.accounts;
    if (!gAccounts?.id || !options.clientId) return false;

    try {
      gAccounts.id.initialize({
        client_id: options.clientId,
        callback: (res: any) => {
          if (res?.credential) {
            options.onCredential(res.credential);
          }
        },
        auto_select: false,
        cancel_on_tap_outside: true
      });

      if (options.buttonContainer) {
        gAccounts.id.renderButton(options.buttonContainer, {
          type: 'standard',
          theme: 'outline',
          size: 'large',
          text: 'continue_with',
          shape: 'pill',
          width: 320
        });
      }
      return true;
    } catch (err) {
      console.warn('Error during GSI id.initialize:', err);
      return false;
    }
  }

  /**
   * Triggers the official Native Google OAuth 2.0 Popup Window directly
   * using google.accounts.oauth2.initTokenClient
   */
  static async triggerNativeOAuth(options: {
    clientId: string;
    onSuccess: (profile: GoogleUserProfilePayload) => void;
    onError: (errorMessage: string) => void;
  }): Promise<void> {
    const loaded = await this.loadGsiScript();
    if (!loaded) {
      options.onError('Google Identity Services SDK लोड हुन सकेन। कृपया इन्टरनेट जडान जाँच्नुहोस्।');
      return;
    }

    const gAccounts = (window as any).google?.accounts;
    if (!gAccounts) {
      options.onError('Google Identity Services उपलब्ध छैन।');
      return;
    }

    if (!options.clientId || !options.clientId.trim()) {
      options.onError('Google OAuth Client ID उपलब्ध छैन।');
      return;
    }

    try {
      if (gAccounts.oauth2?.initTokenClient) {
        const tokenClient = gAccounts.oauth2.initTokenClient({
          client_id: options.clientId,
          scope: 'email profile openid',
          prompt: 'select_account',
          callback: async (tokenResponse: any) => {
            if (tokenResponse.error) {
              if (tokenResponse.error === 'access_denied') {
                options.onError('Google लगइन प्रक्रिया रद्द गरियो।');
              } else {
                options.onError(`Google OAuth त्रुटि: ${tokenResponse.error_description || tokenResponse.error}`);
              }
              return;
            }

            if (tokenResponse.access_token) {
              try {
                // Fetch authentic profile details directly from Google UserInfo
                const userInfoRes = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                  headers: {
                    Authorization: `Bearer ${tokenResponse.access_token}`
                  }
                });

                if (!userInfoRes.ok) {
                  throw new Error(`Google UserInfo API HTTP ${userInfoRes.status}`);
                }

                const userInfo = await userInfoRes.json();
                if (!userInfo.email) {
                  throw new Error('Google खाताबाट इमेल फेला परेन।');
                }

                options.onSuccess({
                  sub: userInfo.sub || '',
                  name: userInfo.name || userInfo.given_name || userInfo.email.split('@')[0],
                  email: userInfo.email.trim().toLowerCase(),
                  picture: userInfo.picture,
                  given_name: userInfo.given_name,
                  family_name: userInfo.family_name,
                  email_verified: userInfo.email_verified
                });
              } catch (fetchErr: any) {
                console.error('Failed to fetch userinfo from Google:', fetchErr);
                options.onError('Google खाताको विवरण प्राप्त गर्न सकिएन। कृपया पुनः प्रयास गर्नुहोस्।');
              }
            }
          },
          error_callback: (err: any) => {
            console.error('Google OAuth popup error:', err);
            const msg = err?.message || err?.type || 'OAuth प्रमाणीकरण रद्द गरियो वा असफल भयो।';
            options.onError(msg);
          }
        });

        // Trigger Google's NATIVE popup dialog!
        tokenClient.requestAccessToken({ prompt: 'select_account' });
        return;
      }

      // Fallback: One Tap prompt
      if (gAccounts.id?.prompt) {
        gAccounts.id.prompt((notification: any) => {
          if (notification.isNotDisplayed()) {
            options.onError('Google One Tap प्रदर्शन गर्न सकिएन। ब्राउजर पपअप अनुमति दिनुहोस्।');
          } else if (notification.isSkippedMoment()) {
            options.onError('Google लगइन प्रक्रिया रद्द गरियो।');
          }
        });
        return;
      }

      options.onError('तपाईंको ब्राउजरमा Google OAuth 2.0 समर्थन भेटिएन।');
    } catch (err: any) {
      console.error('Error triggering native Google OAuth popup:', err);
      options.onError(err?.message || 'Google लगइन सुरु गर्दा त्रुटि भयो।');
    }
  }
}
