import React, { useState } from 'react';
import { 
  Mail, 
  ArrowRight, 
  User, 
  ShieldCheck, 
  X, 
  AlertCircle, 
  CheckCircle2, 
  UserCheck, 
  Sparkles,
  Key,
  Lock,
  Eye,
  EyeOff
} from 'lucide-react';
import { UserProfile } from '../../types';
import { DbService } from '../../services/dbService';
import { BrandLogo } from '../common/BrandLogo';
import { safeStorage } from '../../utils/safeHelpers';
import { StorageService } from '../../services/storageService';
import { FirebaseAuthService } from '../../services/firebaseAuthService';
import { ActivityTrackingService } from '../../services/activityTrackingService';
import { useApp } from '../../context/AppContext';

export interface LoginModalProps {
  isOpen?: boolean;
  onSuccess?: (user: UserProfile) => void;
  setUser?: (user: UserProfile) => void;
  setIsLoggedIn?: (loggedIn: boolean) => void;
  setShowAuthModal?: (show: boolean) => void;
  onClose?: () => void;
  customMessage?: string;
}

const POPULAR_TARGET_EXAMS = [
  'नेपाल राष्ट्र बैंक (NRB) - सहायक ४',
  'नेपाल राष्ट्र बैंक (NRB) - अधिकृत ३',
  'राष्ट्रिय वाणिज्य बैंक (RBB) - तह ४/५',
  'कृषि विकास बैंक (ADBL) - तह ४/५',
  'नेपाल बैंक लिमिटेड (NBL) - तह ३/४',
  'संगठित संस्था / लोकसेवा आयोग'
];

type AuthTab = 'signin' | 'signup' | 'forgot';

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen = true,
  onSuccess,
  setUser,
  setIsLoggedIn,
  setShowAuthModal: externalSetShowAuthModal,
  onClose,
  customMessage
}) => {
  const { 
    closeLoginModal, 
    setIsLoginModalOpen, 
    setUser: appSetUser, 
    setIsLoggedIn: appSetIsLoggedIn 
  } = useApp();

  const [activeTab, setActiveTab] = useState<AuthTab>('signin');
  const [isSigningIn, setIsSigningIn] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<'info' | 'success' | 'error'>('info');

  /**
   * Helper to ensure auth modal is closed immediately across all states and props
   */
  const setShowAuthModal = (show: boolean) => {
    if (externalSetShowAuthModal) {
      externalSetShowAuthModal(show);
    }
    if (!show) {
      setIsSigningIn(false);
      if (onClose) onClose();
      closeLoginModal();
      setIsLoginModalOpen(false);
    } else {
      setIsLoginModalOpen(true);
    }
  };

  const [fullName, setFullName] = useState<string>(() => {
    try {
      const stored = localStorage.getItem('btn_last_auth_name');
      if (stored) return stored;
      const rawUser = localStorage.getItem('user_profile');
      if (rawUser) {
        const parsed = JSON.parse(rawUser);
        if (parsed?.name && parsed.name !== 'अतिथि प्रयोगकर्ता' && parsed.name !== 'विद्यार्थी') {
          return parsed.name;
        }
      }
    } catch {}
    return '';
  });

  const [email, setEmail] = useState<string>(() => {
    try {
      const stored = localStorage.getItem('btn_last_auth_email');
      if (stored) return stored;
      const rawUser = localStorage.getItem('user_profile');
      if (rawUser) {
        const parsed = JSON.parse(rawUser);
        if (parsed?.email && parsed.email.includes('@')) {
          return parsed.email;
        }
      }
    } catch {}
    return '';
  });

  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [targetExam, setTargetExam] = useState<string>(POPULAR_TARGET_EXAMS[0]);

  const showToast = (message: string, type: 'info' | 'success' | 'error' = 'info') => {
    setToastMessage(message);
    setToastType(type);
    setTimeout(() => {
      setToastMessage((current) => (current === message ? null : current));
    }, 4500);
  };

  /**
   * Finalizes session authentication: updates storage, DB, and dispatches global events immediately.
   * If Firestore sync takes longer, session is saved in LocalStorage immediately and loading state is dismissed.
   */
  const finalizeAuthentication = (profileData: UserProfile) => {
    try {
      // 0. Force-close modal immediately so popup closes with 0ms delay
      setShowAuthModal(false);
      if (onClose) onClose();
      closeLoginModal();
      setIsLoginModalOpen(false);
      setIsSigningIn(false);

      const sessionToken = `btn_sess_${profileData.id || Date.now()}_${Date.now()}`;
      const derivedName = profileData.displayName || profileData.name || (profileData.email ? profileData.email.split('@')[0] : 'विद्यार्थी');
      const authenticAvatar = profileData.photoURL || profileData.avatarUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(derivedName)}&background=0052FF&color=fff&size=256`;

      const enrichedProfile: UserProfile = {
        ...profileData,
        displayName: derivedName,
        name: derivedName,
        photoURL: authenticAvatar,
        avatarUrl: authenticAvatar,
        sessionToken,
        isGuest: false,
        isRegistered: true
      };

      // 1. React App State Updates: Immediately update global auth state (setUser, isLoggedIn)
      // This immediately reflects DisplayName and Google Profile Photo on the header
      if (setUser) setUser(enrichedProfile);
      if (appSetUser) appSetUser(enrichedProfile);
      if (setIsLoggedIn) setIsLoggedIn(true);
      if (appSetIsLoggedIn) appSetIsLoggedIn(true);
      if (onSuccess) onSuccess(enrichedProfile);

      // 2. Save session in LocalStorage immediately
      const serialized = JSON.stringify(enrichedProfile);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('btn_authenticated_user', serialized);
      localStorage.setItem('user', serialized);
      localStorage.setItem('user_profile', serialized);
      safeStorage.setItem('user_profile', serialized);
      localStorage.setItem('btn_user_profile_v1', serialized);
      localStorage.setItem('btn_user_session_token', sessionToken);
      localStorage.setItem('btn_last_auth_provider', enrichedProfile.authProvider || 'google');
      localStorage.setItem('btn_last_auth_email', enrichedProfile.email || '');
      localStorage.setItem('btn_last_auth_name', enrichedProfile.displayName || enrichedProfile.name || '');
      localStorage.setItem('btn_auth_uid', enrichedProfile.id);

      // 3. Dispatch global window events for instant header/dashboard reactive updates
      window.dispatchEvent(new CustomEvent('btn:profile-updated', { detail: enrichedProfile }));
      window.dispatchEvent(new CustomEvent('btn:user-login', { detail: enrichedProfile }));

      showToast(`स्वागत छ, ${enrichedProfile.displayName || enrichedProfile.name}!`, 'success');

      // 4. DO NOT block UI or wait for Firestore async background sync (`saveUserToFirestore`).
      // Run Firestore profile creation asynchronously in the background.
      setTimeout(() => {
        FirebaseAuthService.saveUserToFirestore(enrichedProfile).catch(() => {});
        FirebaseAuthService.syncUserProfileToFirestore(enrichedProfile).catch(() => {});
        DbService.saveStudentProfile(enrichedProfile).catch(() => {});
      }, 0);

      // 5. Log authenticated user login event
      ActivityTrackingService.logActivity({
        user: enrichedProfile,
        activityType: 'reading',
        details: `प्रयोगकर्ता लगइन सम्पन्न (${enrichedProfile.authProvider || 'Google/Email'})`,
        metadata: { provider: enrichedProfile.authProvider }
      }).catch(() => {});
    } catch (err) {
      console.error('Authentication finalization error:', err);
      setShowAuthModal(false);
      if (onClose) onClose();
      closeLoginModal();
      setIsLoginModalOpen(false);
      setIsSigningIn(false);
      if (setUser) setUser(profileData);
      if (appSetUser) appSetUser(profileData);
      if (setIsLoggedIn) setIsLoggedIn(true);
      if (appSetIsLoggedIn) appSetIsLoggedIn(true);
      if (onSuccess) onSuccess(profileData);
    }
  };

  /**
   * Authentic Google OAuth Pop-up Sign-In
   */
  const handleGoogleSignIn = async () => {
    setError('');
    setIsSigningIn(true);

    try {
      const googleProfile = await FirebaseAuthService.signInWithGoogle();
      if (googleProfile && googleProfile.email) {
        setShowAuthModal(false);
        if (onClose) onClose();
        setIsSigningIn(false);
        finalizeAuthentication(googleProfile);
      } else {
        setIsSigningIn(false);
      }
    } catch (err: any) {
      setIsSigningIn(false);
      console.warn('Google sign-in popup notice:', err);
      if (err?.code === 'auth/popup-closed-by-user' || err?.code === 'auth/cancelled-popup-request') {
        return;
      }
      if (err?.code === 'auth/popup-blocked') {
        setError('ब्राउजरले गुगल लगइन पपअप ब्लक गर्यो। कृपया पपअप अनुमति दिनुहोस् र पुनः प्रयास गर्नुहोस्।');
        return;
      }
      setError(err?.message || 'गुगल मार्फत लगइन गर्दा समस्या आयो। कृपया पुनः प्रयास गर्नुहोस्।');
    }
  };

  /**
   * Email/Password Sign-In Handler
   */
  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail || !cleanEmail.includes('@') || !cleanEmail.includes('.')) {
      setError('कृपया मान्य इमेल ठेगाना प्रविष्ट गर्नुहोस् (उदा: yourname@gmail.com)।');
      return;
    }

    if (!password) {
      setError('कृपया पासवर्ड प्रविष्ट गर्नुहोस्।');
      return;
    }

    setIsSigningIn(true);

    try {
      const profile = await FirebaseAuthService.signInWithEmail(cleanEmail, password);
      if (profile && profile.email) {
        setIsSigningIn(false);
        setShowAuthModal(false);
        if (onClose) onClose();
        finalizeAuthentication(profile);
      }
    } catch (err: any) {
      console.error('Email sign in error:', err);
      if (err?.code === 'auth/user-not-found' || err?.code === 'auth/wrong-password' || err?.code === 'auth/invalid-credential') {
        setError('इमेल वा पासवर्ड मिलेन। कृपया सही विवरण राख्नुहोस् वा नयाँ खाता बनाउनुहोस्।');
      } else if (err?.code === 'auth/too-many-requests') {
        setError('धेरै पटक असफल प्रयास भयो। कृपया केही समयपछि पुनः प्रयास गर्नुहोस्।');
      } else {
        setError(err?.message || 'लगइन गर्न सकिएन। कृपया विवरण जाँच गर्नुहोस्।');
      }
    } finally {
      setIsSigningIn(false);
    }
  };

  /**
   * Email/Password Sign-Up Handler
   */
  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail || !cleanEmail.includes('@') || !cleanEmail.includes('.')) {
      setError('कृपया मान्य इमेल प्रविष्ट गर्नुहोस्।');
      return;
    }

    if (!fullName.trim()) {
      setError('कृपया आफ्नो पूरा नाम प्रविष्ट गर्नुहोस्।');
      return;
    }

    if (!password || password.length < 6) {
      setError('पासवर्ड कम्तिमा ६ अक्षरको हुनुपर्छ।');
      return;
    }

    setIsSigningIn(true);

    try {
      const newProfile = await FirebaseAuthService.signUpWithEmail(fullName, cleanEmail, password, targetExam);
      if (newProfile && newProfile.email) {
        setIsSigningIn(false);
        setShowAuthModal(false);
        if (onClose) onClose();
        finalizeAuthentication(newProfile);
      }
    } catch (err: any) {
      console.error('Sign up error:', err);
      if (err?.code === 'auth/email-already-in-use') {
        setError('यो इमेल पहिले नै दर्ता भइसकेको छ। कृपया "लगइन" गर्नुहोस्।');
      } else if (err?.code === 'auth/weak-password') {
        setError('पासवर्ड कम्तिमा ६ अक्षरको बलियो हुनुपर्छ।');
      } else {
        setError(err?.message || 'खाता सिर्जना गर्न सकिएन। कृपया पुनः प्रयास गर्नुहोस्।');
      }
    } finally {
      setIsSigningIn(false);
    }
  };

  /**
   * Password Reset Handler
   */
  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail || !cleanEmail.includes('@') || !cleanEmail.includes('.')) {
      setError('कृपया पासवर्ड रिसेट गर्न आफ्नो मान्य इमेल प्रविष्ट गर्नुहोस्।');
      return;
    }

    setIsSigningIn(true);
    try {
      await FirebaseAuthService.sendPasswordReset(cleanEmail);
      showToast(`पासवर्ड रिसेट लिंक ${cleanEmail} मा पठाइयो। कृपया आफ्नो इनबक्स जाँच गर्नुहोस्।`, 'success');
      setActiveTab('signin');
    } catch (err: any) {
      console.warn('Password reset notice:', err);
      showToast(`पासवर्ड रिसेट निर्देशन ${cleanEmail} मा पठाइयो।`, 'success');
      setActiveTab('signin');
    } finally {
      setIsSigningIn(false);
    }
  };

  /**
   * Continue as Guest
   */
  const handleContinueAsGuest = () => {
    setIsSigningIn(false);
    const guest = StorageService.getGuestProfile();
    StorageService.saveUserProfile(guest);
    if (setUser) setUser(guest);
    if (appSetUser) appSetUser(guest);
    if (setIsLoggedIn) setIsLoggedIn(false);
    if (appSetIsLoggedIn) appSetIsLoggedIn(false);
    if (onSuccess) onSuccess(guest);
    window.dispatchEvent(new CustomEvent('btn:profile-updated', { detail: guest }));
    showToast('अतिथि (Guest) मोड सक्रिय भयो।', 'info');
    setShowAuthModal(false);
    if (onClose) onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      id="login-auth-modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setShowAuthModal(false);
        }
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
    >
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-70 max-w-md w-[90%] sm:w-auto px-4 py-3 rounded-2xl shadow-xl border flex items-center gap-2.5 text-xs sm:text-sm font-medium animate-in fade-in slide-in-from-top-4 duration-200 bg-slate-900 text-white border-slate-700 backdrop-blur-md">
          {toastType === 'error' && <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />}
          {toastType === 'success' && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
          {toastType === 'info' && <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />}
          <span className="flex-1">{toastMessage}</span>
          <button 
            type="button" 
            onClick={() => setToastMessage(null)}
            className="p-1 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <div 
        id="login-auth-modal-card"
        className="relative w-full max-w-md bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden my-auto transition-all"
      >
        {/* Top Close Button */}
        <button
          type="button"
          onClick={() => setShowAuthModal(false)}
          className="absolute top-4 right-4 z-20 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
          title="बन्द गर्नुहोस्"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header */}
        <div className="pt-7 pb-4 px-6 sm:px-8 text-center bg-slate-50/70 border-b border-slate-100 relative">
          <div className="flex justify-center mb-3">
            <BrandLogo variant="full" className="h-10 sm:h-11 w-auto object-contain" />
          </div>
          <h2 className="text-xl font-black text-slate-900 tracking-tight">
            {activeTab === 'signin' && 'लगइन (Sign In)'}
            {activeTab === 'signup' && 'नयाँ खाता सिर्जना (Sign Up)'}
            {activeTab === 'forgot' && 'पासवर्ड रिसेट (Reset Password)'}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            {activeTab === 'signin' && 'बैंकिङ्ग तथा लोक सेवा तयारीको लागि स्वागत छ'}
            {activeTab === 'signup' && '५० पूर्ण सेट र व्यक्तिगत तयारीको लागि दर्ता हुनुहोस्'}
            {activeTab === 'forgot' && 'आफ्नो इमेल प्रविष्ट गरी रिसेट लिंक प्राप्त गर्नुहोस्'}
          </p>

          {/* Auth Mode Tabs with Sleek Red/Blue Indicator */}
          <div className="flex items-center justify-center p-1 bg-slate-200/80 rounded-xl mt-4 gap-1">
            <button
              type="button"
              onClick={() => { setActiveTab('signin'); setError(''); }}
              className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition ${
                activeTab === 'signin' 
                  ? 'bg-gradient-to-r from-[#0B2046] to-[#DC2626] text-white shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              साइन-इन
            </button>
            <button
              type="button"
              onClick={() => { setActiveTab('signup'); setError(''); }}
              className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition ${
                activeTab === 'signup' 
                  ? 'bg-gradient-to-r from-[#0B2046] to-[#DC2626] text-white shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              नयाँ दर्ता
            </button>
            <button
              type="button"
              onClick={() => { setActiveTab('forgot'); setError(''); }}
              className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition ${
                activeTab === 'forgot' 
                  ? 'bg-gradient-to-r from-[#0B2046] to-[#DC2626] text-white shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              रिसेट
            </button>
          </div>
        </div>

        {/* Sleek Red/Blue Interceptor Restriction Notice */}
        {customMessage && (
          <div 
            id="auth-interceptor-callout"
            className="mx-6 sm:mx-8 mt-4 p-3.5 rounded-2xl bg-gradient-to-r from-red-50 via-white to-blue-50 border-2 border-red-500/40 shadow-xs flex items-start gap-3 text-left animate-in fade-in slide-in-from-top-2 duration-200"
          >
            <div className="p-2 bg-gradient-to-br from-red-600 to-[#0B2046] text-white rounded-xl shadow-xs shrink-0 mt-0.5">
              <Lock className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-[10px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded bg-blue-900 text-white">
                  प्रमाणीकरण आवश्यक (Sign-In Required)
                </span>
              </div>
              <p className="text-xs sm:text-sm font-black text-slate-900 leading-snug">
                {customMessage}
              </p>
              <p className="text-[11px] text-slate-500 mt-1 font-medium leading-relaxed">
                गहिरो अध्ययन सामग्री, डाउनलोड योग्य पीडीएफ तथा ५० वटै नमुना वस्तुगत परीक्षा सेटहरूमा निःशुल्क पहुँच पाउन तुरुन्त लगइन गर्नुहोस्।
              </p>
            </div>
          </div>
        )}

        {/* Global Error Banner */}
        {error && (
          <div 
            id="login-error-alert"
            className="mx-6 sm:mx-8 mt-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2"
          >
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
            <span className="flex-1">{error}</span>
            <button 
              type="button" 
              onClick={() => setError('')} 
              className="p-1 hover:bg-rose-100 rounded-md"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Card Body */}
        <div className="p-6 sm:p-8 space-y-4">
          
          {/* Prominent Google OAuth Button */}
          {activeTab !== 'forgot' && (
            <>
              <button
                type="button"
                id="btn-google-auth-trigger"
                disabled={isSigningIn}
                onClick={handleGoogleSignIn}
                className="w-full min-h-[46px] py-2.5 px-4 flex items-center justify-center gap-3 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm rounded-xl border border-slate-300 shadow-2xs hover:shadow-xs transition active:scale-[0.99] cursor-pointer group disabled:opacity-50"
              >
                <GoogleGIcon className="w-4 h-4 group-hover:scale-110 transition-transform shrink-0" />
                <span>Google मार्फत जारी राख्नुहोस् (Continue with Google)</span>
              </button>

              <div className="relative flex py-1 items-center">
                <div className="flex-grow border-t border-slate-200" />
                <span className="flex-shrink mx-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  वा इमेल मार्फत
                </span>
                <div className="flex-grow border-t border-slate-200" />
              </div>
            </>
          )}

          {/* Form Content Based on Active Tab */}
          {activeTab === 'signin' && (
            <form onSubmit={handleEmailSignIn} className="space-y-3.5">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>इमेल (Email)</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="yourname@gmail.com"
                  className="w-full px-3.5 py-2.5 bg-slate-50 hover:bg-slate-100/70 focus:bg-white text-slate-900 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition"
                />
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    <span>पासवर्ड (Password)</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setActiveTab('forgot')}
                    className="text-[11px] font-semibold text-blue-600 hover:underline"
                  >
                    पासवर्ड बिर्सनुभयो?
                  </button>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-3.5 py-2.5 bg-slate-50 hover:bg-slate-100/70 focus:bg-white text-slate-900 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSigningIn}
                className="w-full min-h-[46px] py-3 px-5 bg-gradient-to-r from-[#0B2046] via-[#1E3A8A] to-[#DC2626] hover:from-[#06142E] hover:to-[#B91C1C] active:scale-[0.99] text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSigningIn ? (
                  <span>साइन-इन हुँदैछ...</span>
                ) : (
                  <>
                    <UserCheck className="w-4 h-4" />
                    <span>लगइन गर्नुहोस् (Sign In)</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

          {activeTab === 'signup' && (
            <form onSubmit={handleEmailSignUp} className="space-y-3.5">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  <span>पूरा नाम (Full Name)</span>
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="उदा: ऋषि राम थापा"
                  className="w-full px-3.5 py-2.5 bg-slate-50 hover:bg-slate-100/70 focus:bg-white text-slate-900 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>इमेल (Email)</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="yourname@gmail.com"
                  className="w-full px-3.5 py-2.5 bg-slate-50 hover:bg-slate-100/70 focus:bg-white text-slate-900 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-slate-400" />
                  <span>पासवर्ड (Password - कम्तिमा ६ अक्षर)</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    minLength={6}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-3.5 py-2.5 bg-slate-50 hover:bg-slate-100/70 focus:bg-white text-slate-900 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">लक्षित परीक्षा (Target Exam)</label>
                <select
                  value={targetExam}
                  onChange={(e) => setTargetExam(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 hover:bg-slate-100/70 focus:bg-white text-slate-900 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-blue-600 outline-none transition cursor-pointer"
                >
                  {POPULAR_TARGET_EXAMS.map(exam => (
                    <option key={exam} value={exam}>{exam}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={isSigningIn}
                className="w-full min-h-[46px] py-3 px-5 bg-gradient-to-r from-[#0B2046] via-[#1E3A8A] to-[#DC2626] hover:from-[#06142E] hover:to-[#B91C1C] active:scale-[0.99] text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSigningIn ? (
                  <span>दर्ता गर्दैछ...</span>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>नयाँ खाता बनाउनुहोस् (Sign Up)</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

          {activeTab === 'forgot' && (
            <form onSubmit={handlePasswordReset} className="space-y-3.5">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>तपाईंको दर्ता भएको इमेल</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="yourname@gmail.com"
                  className="w-full px-3.5 py-2.5 bg-slate-50 hover:bg-slate-100/70 focus:bg-white text-slate-900 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition"
                />
              </div>

              <button
                type="submit"
                disabled={isSigningIn}
                className="w-full min-h-[46px] py-3 px-5 bg-gradient-to-r from-[#0B2046] via-[#1E3A8A] to-[#DC2626] hover:from-[#06142E] hover:to-[#B91C1C] active:scale-[0.99] text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSigningIn ? (
                  <span>पठाउँदैछ...</span>
                ) : (
                  <>
                    <Key className="w-4 h-4" />
                    <span>पासवर्ड रिसेट लिंक पठाउनुहोस्</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('signin')}
                className="w-full py-2 text-xs font-bold text-slate-600 hover:text-slate-900 transition text-center"
              >
                ← लगइनमा फर्किनुहोस्
              </button>
            </form>
          )}

          {/* Continue as Guest User Option */}
          <button
            type="button"
            id="btn-continue-as-guest"
            onClick={handleContinueAsGuest}
            className="w-full py-2.5 px-3 text-xs font-semibold text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-100 transition flex items-center justify-center gap-2 cursor-pointer border border-dashed border-slate-300"
          >
            <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>अतिथि मोडमा पूर्वावलोकन (Preview as Guest)</span>
          </button>

          {/* Guarantee Badge */}
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>सुरक्षित लगइन • Banking Tayari Nepal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Full-color Official Google G Icon SVG
function GoogleGIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

export const AuthModal = LoginModal;
export default LoginModal;
