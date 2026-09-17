/**
 * Real-Time Analytics & Google Analytics 4 (GA4) Service
 * Banking Tayari Nepal
 */

import { UserProfile } from '../types';

export interface VisitorAnalyticsStats {
  totalRegisteredUsers: number;
  liveVisitors: number;
  activeToday: number;
  totalPageViews: number;
  recentVisits: Array<{
    id: string;
    path: string;
    title?: string;
    isGuest: boolean;
    userName?: string;
    userEmail?: string;
    timestamp: string;
  }>;
  dailyStats?: Record<string, { views: number; visitors: number }>;
}

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export class AnalyticsService {
  private static heartbeatTimer: any = null;
  private static lastPathTracked = '';

  /**
   * Retrieves or creates a persistent anonymous Visitor ID
   */
  static getVisitorId(): string {
    if (typeof window === 'undefined') return 'server_visitor';
    try {
      let vid = localStorage.getItem('btn_visitor_id');
      if (!vid) {
        vid = `vis_${Date.now().toString(36)}_${Math.random().toString(36).substring(2, 8)}`;
        localStorage.setItem('btn_visitor_id', vid);
      }
      return vid;
    } catch {
      return `vis_${Date.now()}`;
    }
  }

  /**
   * Gets the active Google Analytics 4 Measurement ID
   */
  static getGaMeasurementId(): string {
    const fromEnv = (import.meta as any).env?.VITE_GA_MEASUREMENT_ID;
    if (fromEnv && typeof fromEnv === 'string' && fromEnv.startsWith('G-')) {
      return fromEnv.trim();
    }
    try {
      const custom = localStorage.getItem('btn_custom_ga_measurement_id');
      if (custom && custom.startsWith('G-')) {
        return custom.trim();
      }
    } catch {}
    return '';
  }

  /**
   * Saves a custom GA4 Measurement ID
   */
  static setCustomGaMeasurementId(measurementId: string): void {
    try {
      const clean = measurementId.trim();
      if (clean && clean.startsWith('G-')) {
        localStorage.setItem('btn_custom_ga_measurement_id', clean);
        this.initGoogleAnalytics(clean);
      } else {
        localStorage.removeItem('btn_custom_ga_measurement_id');
      }
    } catch (e) {
      console.error('Failed to set custom GA measurement ID:', e);
    }
  }

  /**
   * Dynamically initializes official Google Analytics (gtag.js)
   */
  static initGoogleAnalytics(overrideId?: string): boolean {
    if (typeof window === 'undefined') return false;

    const measurementId = overrideId || this.getGaMeasurementId();
    if (!measurementId || !measurementId.startsWith('G-')) {
      // Safe fallback stub so window.gtag does not throw
      if (!window.gtag) {
        window.dataLayer = window.dataLayer || [];
        window.gtag = function () {
          window.dataLayer?.push(arguments);
        };
      }
      return false;
    }

    try {
      // Check if already injected
      const scriptId = 'google-analytics-gtag';
      let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = scriptId;
        scriptTag.async = true;
        scriptTag.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
        document.head.appendChild(scriptTag);
      }

      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        window.dataLayer?.push(arguments);
      };

      window.gtag('js', new Date());
      window.gtag('config', measurementId, {
        send_page_view: true,
        page_title: document.title,
        page_path: window.location.pathname
      });

      return true;
    } catch (err) {
      console.warn('GA4 initialization notice:', err);
      return false;
    }
  }

  /**
   * Dispatches a page view event to GA4 and to local backend visitor tracker
   */
  static async trackPageView(path: string, title?: string, user?: UserProfile | null): Promise<void> {
    if (typeof window === 'undefined') return;

    const currentTitle = title || document.title || 'Banking Tayari Nepal';
    const visitorId = this.getVisitorId();
    const isGuest = !user?.email || Boolean(user?.isGuest);

    // 1. Google Analytics
    if (window.gtag) {
      try {
        const gaId = this.getGaMeasurementId();
        if (gaId) {
          window.gtag('event', 'page_view', {
            page_path: path,
            page_title: currentTitle,
            user_type: isGuest ? 'guest' : 'registered_student'
          });
        }
      } catch {}
    }

    // Prevent duplicate consecutive requests for identical path within short window
    this.lastPathTracked = path;

    // 2. Local Backend Analytics API
    try {
      await fetch('/api/analytics/pageview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          visitorId,
          path,
          title: currentTitle,
          isGuest,
          userEmail: isGuest ? undefined : user?.email,
          userName: isGuest ? 'Guest User' : (user?.displayName || user?.name)
        })
      });
    } catch {
      // Offline fallback
    }
  }

  /**
   * Dispatches custom event to GA4
   */
  static trackEvent(eventName: string, params: Record<string, any> = {}): void {
    if (typeof window === 'undefined' || !window.gtag) return;
    try {
      window.gtag('event', eventName, params);
    } catch {}
  }

  /**
   * Sends heartbeat ping to backend to keep active visitor session alive
   */
  static async ping(user?: UserProfile | null, currentPath?: string): Promise<void> {
    if (typeof window === 'undefined') return;
    try {
      const visitorId = this.getVisitorId();
      const path = currentPath || window.location.pathname;
      const isGuest = !user?.email || Boolean(user?.isGuest);

      await fetch('/api/analytics/ping', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          visitorId,
          path,
          title: document.title,
          isGuest,
          userEmail: isGuest ? undefined : user?.email,
          userName: isGuest ? 'Guest User' : (user?.displayName || user?.name)
        })
      });
    } catch {
      // silent
    }
  }

  /**
   * Starts periodic heartbeat to server (every 25 seconds)
   */
  static startHeartbeat(getUserProfile: () => UserProfile | null): void {
    if (typeof window === 'undefined') return;
    if (this.heartbeatTimer) clearInterval(this.heartbeatTimer);

    // Initial ping
    this.ping(getUserProfile());

    // Schedule pings
    this.heartbeatTimer = setInterval(() => {
      this.ping(getUserProfile());
    }, 25000);
  }

  /**
   * Stops heartbeat
   */
  static stopHeartbeat(): void {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = null;
    }
  }

  /**
   * Fetches real-time visitor statistics from backend
   */
  static async getRealTimeStats(): Promise<VisitorAnalyticsStats | null> {
    try {
      const res = await fetch('/api/analytics/stats');
      if (!res.ok) return null;
      const data = await res.json();
      if (data && data.success && data.stats) {
        return data.stats;
      }
      return null;
    } catch (err) {
      console.warn('Could not fetch real-time analytics stats:', err);
      return null;
    }
  }
}
