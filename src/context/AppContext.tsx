import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { 
  NavigationTab, 
  QuizSubCategory,
  UserProfile, 
  BookmarkItem, 
  PurchaseRecord, 
  QuizSet, 
  QuizResultData, 
  StudyNote, 
  PremiumNote,
  AppNotification
} from '../types';
import { StorageService } from '../services/storageService';
import { safeStorage } from '../utils/safeHelpers';
import { MOCK_STUDY_NOTES, MOCK_PREMIUM_NOTES, MOCK_NOTIFICATIONS } from '../data/mockData';
import { isUserAdmin, OFFICIAL_ADMIN_EMAIL, MASTER_ADMIN_PIN, sanitizeUserProfile } from '../utils/sanitizer';
import { fetchOfficialChannelVideos } from '../services/youtubeService';
import { AnalyticsService } from '../services/analyticsService';
import { ActivityTrackingService } from '../services/activityTrackingService';
import { FirebaseAuthService } from '../services/firebaseAuthService';

interface AppContextType {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  user: UserProfile;
  setUser: (user: UserProfile) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (loggedIn: boolean) => void;
  isLoginModalOpen: boolean;
  setIsLoginModalOpen: (open: boolean) => void;
  loginModalMessage: string;
  openLoginModal: (customMsg?: string) => void;
  closeLoginModal: () => void;
  requireAuth: (actionCallback?: () => void, customMsg?: string) => boolean;
  logout: () => void;
  refreshUser: () => void;
  bookmarks: BookmarkItem[];
  toggleBookmark: (type: 'question' | 'note' | 'current-affair', targetId: string, title: string, category: string) => boolean;
  isBookmarked: (type: 'question' | 'note' | 'current-affair', targetId: string) => boolean;
  purchases: PurchaseRecord[];
  hasPurchased: (noteId: string) => boolean;
  recordPurchase: (record: PurchaseRecord) => void;
  activeNote: StudyNote | null;
  openNoteReader: (note: StudyNote | string) => void;
  closeNoteReader: () => void;
  activePremiumNote: PremiumNote | null;
  openPremiumDetail: (note: PremiumNote | string) => void;
  closePremiumDetail: () => void;
  activeQuiz: QuizSet | null;
  startQuiz: (quiz: QuizSet) => void;
  exitQuiz: () => void;
  quizResult: QuizResultData | null;
  setQuizResult: (result: QuizResultData | null) => void;
  quizSubCategory: QuizSubCategory;
  setQuizSubCategory: (subCat: QuizSubCategory) => void;
  selectQuizSubCategory: (subCat: QuizSubCategory) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isAiModalOpen: boolean;
  setIsAiModalOpen: (open: boolean) => void;
  isAdminModalOpen: boolean;
  setIsAdminModalOpen: (open: boolean) => void;
  isAdminPinModalOpen: boolean;
  setIsAdminPinModalOpen: (open: boolean) => void;
  isAdminAuthenticated: boolean;
  isCurrentUserAdmin: boolean;
  openAdminWithSecurityCheck: () => void;
  verifyAdminPin: (pin: string) => boolean;
  logoutAdmin: () => void;
  isProfileModalOpen: boolean;
  setIsProfileModalOpen: (open: boolean) => void;
  isNotificationsOpen: boolean;
  setIsNotificationsOpen: (open: boolean) => void;
  notifications: AppNotification[];
  unreadNotificationsCount: number;
  markNotificationRead: (id: string) => void;
  markAllNotificationsRead: () => void;
  clearAllNotifications: () => void;
  addNotification: (notif: Omit<AppNotification, 'id'>) => void;
  activeReaderPage: number;
  setActiveReaderPage: (page: number) => void;
  addToast: (message: string, type?: 'success' | 'error' | 'info' | 'warning') => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode; initialUser?: UserProfile | null }> = ({ children, initialUser }) => {
  const getInitialTab = (): NavigationTab => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase().replace(/\/+$/, '');
      const hash = window.location.hash.toLowerCase();
      if (path === '/about' || hash === '#/about' || hash === '#about') {
        return 'about';
      }
    }
    return 'home';
  };

  const [activeTab, setActiveTabState] = useState<NavigationTab>(getInitialTab);

  const setActiveTab = useCallback((tab: NavigationTab) => {
    setActiveTabState(tab);
    if (typeof window !== 'undefined') {
      try {
        if (tab === 'about') {
          if (window.location.pathname !== '/about') {
            window.history.pushState({ tab: 'about' }, '', '/about');
          }
        } else {
          if (window.location.pathname === '/about') {
            window.history.pushState({ tab }, '', '/');
          }
        }
      } catch (err) {
        console.warn('History navigation sync warning:', err);
      }
    }
  }, []);

  // Listen to browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase().replace(/\/+$/, '');
      const hash = window.location.hash.toLowerCase();
      if (path === '/about' || hash === '#/about' || hash === '#about') {
        setActiveTabState('about');
      } else {
        setActiveTabState('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const [theme, setThemeState] = useState<'light' | 'dark'>('light');
  const [user, setUserState] = useState<UserProfile>(() => {
    if (initialUser) return sanitizeUserProfile(initialUser);
    return StorageService.getUserProfile();
  });

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    const u = initialUser ? sanitizeUserProfile(initialUser) : StorageService.getUserProfile();
    return Boolean(u && !u.isGuest && !!u.email && u.email.includes('@'));
  });

  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>(StorageService.getBookmarks());
  const [purchases, setPurchases] = useState<PurchaseRecord[]>(StorageService.getPurchases());
  const [notifications, setNotifications] = useState<AppNotification[]>(() => StorageService.getNotifications());
  const [toasts, setToasts] = useState<Array<{ id: string; message: string; type: 'success' | 'error' | 'info' | 'warning' }>>([]);

  // Admin Security States
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('btn_admin_session_auth') === 'true';
    } catch {
      return false;
    }
  });
  const [isAdminPinModalOpen, setIsAdminPinModalOpen] = useState(false);

  const isCurrentUserAdmin = Boolean(user && isUserAdmin(user.email));

  // Sync initialUser if updated from parent
  useEffect(() => {
    if (initialUser) {
      const sanitized = sanitizeUserProfile(initialUser);
      setUserState(sanitized);
      setIsLoggedIn(Boolean(sanitized && !sanitized.isGuest && !!sanitized.email));
    }
  }, [initialUser]);

  // Keep isLoggedIn in sync with user state
  useEffect(() => {
    setIsLoggedIn(Boolean(user && !user.isGuest && !!user.email && user.email.includes('@')));
  }, [user]);

  // Listen to Firebase Auth state changes and synchronize user profile immediately
  useEffect(() => {
    const unsubscribe = FirebaseAuthService.onAuthStateChanged((fbProfile) => {
      if (fbProfile && fbProfile.email && fbProfile.email.includes('@')) {
        setUserState(fbProfile);
        setIsLoggedIn(true);
        setIsLoginModalOpen(false);
      } else {
        const stored = StorageService.getUserProfile();
        if (stored && !stored.isGuest && stored.email && stored.email.includes('@')) {
          setUserState(stored);
          setIsLoggedIn(true);
        } else {
          const guest = StorageService.getGuestProfile();
          setUserState(guest);
          setIsLoggedIn(false);
        }
      }
    });
    return () => unsubscribe();
  }, []);

  // Listen to profile updates & login events across the app to update state immediately
  useEffect(() => {
    const handleProfileUpdated = (e: Event) => {
      const customEvt = e as CustomEvent<UserProfile>;
      if (customEvt.detail) {
        const sanitized = sanitizeUserProfile(customEvt.detail);
        setUserState(sanitized);
        const loggedIn = Boolean(sanitized && !sanitized.isGuest && !!sanitized.email);
        setIsLoggedIn(loggedIn);
        if (loggedIn) {
          setIsLoginModalOpen(false);
        }
      } else {
        const u = StorageService.getUserProfile();
        setUserState(u);
        const loggedIn = Boolean(u && !u.isGuest && !!u.email);
        setIsLoggedIn(loggedIn);
        if (loggedIn) {
          setIsLoginModalOpen(false);
        }
      }
    };

    const handleUserLogin = (e: Event) => {
      const customEvt = e as CustomEvent<UserProfile>;
      if (customEvt.detail) {
        const sanitized = sanitizeUserProfile(customEvt.detail);
        setUserState(sanitized);
        setIsLoggedIn(true);
        setIsLoginModalOpen(false);
      }
    };

    window.addEventListener('btn:profile-updated', handleProfileUpdated);
    window.addEventListener('btn:user-login', handleUserLogin);
    return () => {
      window.removeEventListener('btn:profile-updated', handleProfileUpdated);
      window.removeEventListener('btn:user-login', handleUserLogin);
    };
  }, []);

  // Modals & Active Viewers
  const [activeNote, setActiveNote] = useState<StudyNote | null>(null);
  const [activePremiumNote, setActivePremiumNote] = useState<PremiumNote | null>(null);
  const [activeQuiz, setActiveQuiz] = useState<QuizSet | null>(null);
  const [quizResult, setQuizResult] = useState<QuizResultData | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [loginModalMessage, setLoginModalMessage] = useState<string>('सामग्री पढ्न, पीडीएफ डाउनलोड गर्न र परीक्षा दिन लगइन गर्नुहोस्।');
  const [activeReaderPage, setActiveReaderPage] = useState(1);

  const openLoginModal = useCallback((customMsg?: string) => {
    if (customMsg) {
      setLoginModalMessage(customMsg);
    } else {
      setLoginModalMessage('सामग्री पढ्न, पीडीएफ डाउनलोड गर्न र परीक्षा दिन लगइन गर्नुहोस्।');
    }
    setIsLoginModalOpen(true);
  }, []);

  const closeLoginModal = useCallback(() => setIsLoginModalOpen(false), []);

  const requireAuth = useCallback((actionCallback?: () => void, customMsg?: string): boolean => {
    const isGuestUser = !user || user.isGuest || !user.email;
    if (isGuestUser) {
      const msg = customMsg || 'सामग्री पढ्न, पीडीएफ डाउनलोड गर्न र परीक्षा दिन लगइन गर्नुहोस्।';
      setLoginModalMessage(msg);
      if (actionCallback) {
        setPendingCallback(() => actionCallback);
      }
      setIsLoginModalOpen(true);
      addToast(msg, 'warning');
      return false;
    }
    return true;
  }, [user]);

  // Dynamic Notification Real-Time Sync (Official YouTube uploads + Practice Sets)
  useEffect(() => {
    fetchOfficialChannelVideos(false).then((res) => {
      if (res && res.videos && res.videos.length > 0) {
        setNotifications((currentNotifs) => {
          let updated = [...currentNotifs];
          let addedCount = 0;

          // Check the top recent videos from @bankingtayarinepal
          for (const vid of res.videos.slice(0, 3)) {
            const notifId = `yt-${vid.id}`;
            const exists = updated.some(n => n.id === notifId);
            if (!exists) {
              const newNotif: AppNotification = {
                id: notifId,
                title: `🎬 नयाँ भिडियो: ${vid.title.slice(0, 48)}...`,
                description: `युट्युब च्यानल @bankingtayarinepal मा आधिकारिक कक्षा भिडियो उपलब्ध छ।`,
                timestamp: vid.timeAgoNepali || (vid.isNew ? 'नयाँ (NEW)' : 'हालसालै'),
                read: false,
                type: 'youtube',
                targetTab: 'video-lectures',
                videoUrl: vid.link,
                badge: vid.isNew ? 'नयाँ' : undefined
              };
              updated.unshift(newNotif);
              addedCount++;
            }
          }

          if (addedCount > 0) {
            StorageService.saveNotifications(updated);
            return updated;
          }
          return currentNotifs;
        });
      }
    }).catch(() => {
      // Offline or network restricted - silent fallback
    });
  }, []);

  // Route Guard for /admin or #admin
  useEffect(() => {
    const enforceAdminRouteGuard = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();

      if (path === '/admin' || path.startsWith('/admin/') || hash === '#admin' || hash.startsWith('#admin/')) {
        const isAdmin = isUserAdmin(user?.email);
        if (!isAdmin) {
          // Immediately redirect to /dashboard and warn
          window.history.replaceState(null, '', '/dashboard');
          setActiveTab('home');
          addToast('Unauthorized Access: यो पृष्ठ हेर्न प्रशासक (Admin) अनुमति चाहिन्छ।', 'error');
        } else {
          // Authorized email: check PIN authentication
          if (isAdminAuthenticated) {
            setIsAdminModalOpen(true);
          } else {
            setIsAdminPinModalOpen(true);
          }
        }
      }
    };

    enforceAdminRouteGuard();
    window.addEventListener('popstate', enforceAdminRouteGuard);
    window.addEventListener('hashchange', enforceAdminRouteGuard);

    return () => {
      window.removeEventListener('popstate', enforceAdminRouteGuard);
      window.removeEventListener('hashchange', enforceAdminRouteGuard);
    };
  }, [user?.email, isAdminAuthenticated]);

  // Open Admin with Security & PIN Check
  const openAdminWithSecurityCheck = useCallback(() => {
    if (!isUserAdmin(user?.email)) {
      addToast(`Unauthorized Access: यो सुविधा केवल प्रशासक (${OFFICIAL_ADMIN_EMAIL}) का लागि मात्र हो।`, 'error');
      if (window.location.pathname.includes('/admin')) {
        window.history.replaceState(null, '', '/dashboard');
      }
      return;
    }

    if (isAdminAuthenticated) {
      setIsAdminModalOpen(true);
    } else {
      setIsAdminPinModalOpen(true);
    }
  }, [user?.email, isAdminAuthenticated]);

  // Verify Master PIN
  const verifyAdminPin = useCallback((enteredPin: string): boolean => {
    if (enteredPin === MASTER_ADMIN_PIN) {
      setIsAdminAuthenticated(true);
      try {
        sessionStorage.setItem('btn_admin_session_auth', 'true');
      } catch {}
      setIsAdminPinModalOpen(false);
      setIsAdminModalOpen(true);
      addToast('प्रशासक प्रमाणीकरण सफल भयो! (Admin Access Granted)', 'success');
      return true;
    }
    return false;
  }, []);

  // Logout Admin
  const logoutAdmin = useCallback(() => {
    setIsAdminAuthenticated(false);
    try {
      sessionStorage.removeItem('btn_admin_session_auth');
    } catch {}
    setIsAdminModalOpen(false);
    setIsAdminPinModalOpen(false);
    if (window.location.pathname.includes('/admin')) {
      window.history.replaceState(null, '', '/dashboard');
    }
    addToast('प्रशासक सत्र सुरक्षित रूपमा बन्द भयो (Admin Logged Out)', 'info');
  }, []);

  // Initialize theme on mount
  useEffect(() => {
    const saved = StorageService.getTheme();
    setThemeState(saved);
    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Real-Time Visitor Analytics & Heartbeat
  useEffect(() => {
    AnalyticsService.initGoogleAnalytics();
    AnalyticsService.startHeartbeat(() => user);
    const path = activeTab === 'home' ? '/' : `/${activeTab}`;
    AnalyticsService.trackPageView(path, `Banking Tayari - ${activeTab}`, user);

    return () => {
      AnalyticsService.stopHeartbeat();
    };
  }, [activeTab, user?.id, user?.email]);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setThemeState(next);
    StorageService.setTheme(next);
  };

  const [pendingCallback, setPendingCallback] = useState<(() => void) | null>(null);

  const setUser = (newUser: UserProfile) => {
    const sanitized = sanitizeUserProfile(newUser);
    setUserState(sanitized);
    StorageService.saveUserProfile(sanitized);
    const loggedIn = Boolean(sanitized && !sanitized.isGuest && !!sanitized.email);
    setIsLoggedIn(loggedIn);
    try {
      localStorage.setItem('isLoggedIn', loggedIn ? 'true' : 'false');
      localStorage.setItem('user', JSON.stringify(sanitized));
      localStorage.setItem('user_profile', JSON.stringify(sanitized));
    } catch {}
    if (loggedIn) {
      setIsLoginModalOpen(false);
    }
    if (loggedIn && pendingCallback) {
      const cb = pendingCallback;
      setPendingCallback(null);
      setTimeout(() => {
        cb();
      }, 150);
    }
  };

  const logout = () => {
    try {
      FirebaseAuthService.signOutUser().catch(() => {});
      StorageService.clearUserProfile();
      localStorage.setItem('isLoggedIn', 'false');
      localStorage.removeItem('user');
      localStorage.removeItem('btn_user_session_token');
    } catch (e) {
      console.error('Logout error', e);
    }
    const guest = StorageService.getGuestProfile();
    setUserState(guest);
    setIsLoggedIn(false);
    window.dispatchEvent(new CustomEvent('btn:logout'));
    window.dispatchEvent(new CustomEvent('btn:profile-updated', { detail: guest }));
    addToast('सफलतापूर्वक लगआउट भयो। तपाईं अतिथि (Guest) मोडमा हुनुहुन्छ।', 'info');
  };

  const refreshUser = () => {
    setUserState(StorageService.getUserProfile());
  };

  const toggleBookmark = (
    type: 'question' | 'note' | 'current-affair', 
    targetId: string, 
    title: string, 
    category: string
  ): boolean => {
    const added = StorageService.toggleBookmark({ type, targetId, title, category });
    setBookmarks(StorageService.getBookmarks());
    return added;
  };

  const isBookmarked = (type: 'question' | 'note' | 'current-affair', targetId: string) => {
    return bookmarks.some(b => b.type === type && b.targetId === targetId);
  };

  const hasPurchased = (noteId: string): boolean => {
    return purchases.some(p => p.noteId === noteId && p.status === 'Purchased');
  };

  const recordPurchase = (record: PurchaseRecord) => {
    StorageService.recordPurchase(record);
    setPurchases(StorageService.getPurchases());
    // Also award completion/purchase XP
    const updated = StorageService.addXp(100);
    setUser(updated);
  };

  const openNoteReader = (note: StudyNote | string) => {
    if (!requireAuth(() => openNoteReader(note), 'सामग्री पढ्न, पीडीएफ डाउनलोड गर्न र परीक्षा दिन लगइन गर्नुहोस्।')) {
      return;
    }

    let foundNote: StudyNote | null = null;
    if (typeof note === 'string') {
      const allNotes = StorageService.getAllNotes();
      const found = allNotes.find(n => n.id === note || 
        (note === 'top-01' && n.id === 'note-banking-history') ||
        (note === 'top-02' && n.id === 'note-banking-functions') ||
        (note === 'top-03' && n.id === 'note-deposit-credit') ||
        (note === 'top-04' && n.id === 'note-trade-finance-lc-bg') ||
        (note === 'top-05' && n.id === 'note-aml-kyc') ||
        (note === 'note-accounting-basics' && (n.id === 'note-accounting-2-1' || n.id === 'note-accounting-basics')) ||
        (note === 'top-p1-b-01' && (n.id === 'note-accounting-2-1' || n.id === 'note-accounting-basics')));
      if (found) {
        foundNote = found;
        setActiveNote(found);
        setActiveReaderPage(1);
      }
    } else {
      foundNote = note;
      setActiveNote(note);
      setActiveReaderPage(1);
    }

    if (foundNote && user && !user.isGuest) {
      ActivityTrackingService.logActivity({
        user,
        activityType: 'reading',
        targetId: foundNote.id,
        targetTitle: foundNote.title,
        details: `नोट अध्ययन: ${foundNote.title}`,
        metadata: { category: foundNote.category, subject: foundNote.subject }
      }).catch(() => {});
    }
  };

  const closeNoteReader = () => {
    setActiveNote(null);
  };

  const openPremiumDetail = (note: PremiumNote | string) => {
    if (!requireAuth(() => openPremiumDetail(note), 'सामग्री पढ्न, पीडीएफ डाउनलोड गर्न र परीक्षा दिन लगइन गर्नुहोस्।')) {
      return;
    }

    let foundNote: PremiumNote | null = null;
    if (typeof note === 'string') {
      const found = StorageService.getAllPremiumNotes().find(n => n.id === note);
      if (found) {
        foundNote = found;
        setActivePremiumNote(found);
      }
    } else {
      foundNote = note;
      setActivePremiumNote(note);
    }

    if (foundNote && user && !user.isGuest) {
      ActivityTrackingService.logActivity({
        user,
        activityType: 'reading',
        targetId: foundNote.id,
        targetTitle: foundNote.title,
        details: `विस्तृत नोट अध्ययन: ${foundNote.title}`,
        metadata: { category: foundNote.category }
      }).catch(() => {});
    }
  };

  const closePremiumDetail = () => {
    setActivePremiumNote(null);
  };

  const startQuiz = (quiz: QuizSet) => {
    if (!requireAuth(() => startQuiz(quiz), 'सामग्री पढ्न, पीडीएफ डाउनलोड गर्न र परीक्षा दिन लगइन गर्नुहोस्।')) {
      return;
    }

    setQuizResult(null);
    setActiveQuiz(quiz);
    setActiveTab('quiz');

    if (user && !user.isGuest) {
      ActivityTrackingService.logActivity({
        user,
        activityType: 'exam_start',
        targetId: quiz.id,
        targetTitle: quiz.title,
        details: `नमुना वस्तुगत परीक्षा सुरु: ${quiz.title}`,
        metadata: { totalQuestions: (quiz as any).totalQuestions || quiz.questions?.length || 0 }
      }).catch(() => {});
    }
  };

  const exitQuiz = () => {
    setActiveQuiz(null);
  };

  const [quizSubCategory, setQuizSubCategoryState] = useState<QuizSubCategory>(() => {
    try {
      const saved = localStorage.getItem('btn_quiz_subcategory');
      if (saved === 'banking' || saved === 'loksewa' || saved === 'sangathit') {
        return saved;
      }
    } catch {}
    return 'sangathit';
  });

  const setQuizSubCategory = useCallback((subCat: QuizSubCategory) => {
    setQuizSubCategoryState(subCat);
    try {
      localStorage.setItem('btn_quiz_subcategory', subCat);
    } catch {}
  }, []);

  const selectQuizSubCategory = useCallback((subCat: QuizSubCategory) => {
    setQuizSubCategory(subCat);
    setActiveTab('quiz');
    setQuizResult(null);
    setActiveQuiz(null);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('btn:quiz-subcategory-changed', { detail: { subCategory: subCat } }));
    }
  }, [setActiveTab, setQuizSubCategory]);

  const unreadNotificationsCount = notifications.filter(n => !n.read).length;

  const markNotificationRead = (id: string) => {
    setNotifications(prev => {
      const updated = prev.map(n => n.id === id ? { ...n, read: true } : n);
      StorageService.saveNotifications(updated);
      return updated;
    });
  };

  const markAllNotificationsRead = () => {
    setNotifications(prev => {
      const updated = prev.map(n => ({ ...n, read: true }));
      StorageService.saveNotifications(updated);
      return updated;
    });
    addToast('सबै सूचनाहरू पढेको चिन्ह लगाइयो।', 'info');
  };

  const clearAllNotifications = () => {
    setNotifications([]);
    StorageService.saveNotifications([]);
    addToast('सबै सूचनाहरू हटाइयो।', 'info');
  };

  const addNotification = (newNotif: Omit<AppNotification, 'id'>) => {
    const item: AppNotification = {
      ...newNotif,
      id: `notif-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`
    };
    setNotifications(prev => {
      const updated = [item, ...prev];
      StorageService.saveNotifications(updated);
      return updated;
    });
  };

  const addToast = (message: string, type: 'success' | 'error' | 'info' | 'warning' = 'info') => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3200);
  };

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        theme,
        toggleTheme,
        user,
        setUser,
        isLoggedIn,
        setIsLoggedIn,
        isLoginModalOpen,
        setIsLoginModalOpen,
        loginModalMessage,
        openLoginModal,
        closeLoginModal,
        requireAuth,
        logout,
        refreshUser,
        bookmarks,
        toggleBookmark,
        isBookmarked,
        purchases,
        hasPurchased,
        recordPurchase,
        activeNote,
        openNoteReader,
        closeNoteReader,
        activePremiumNote,
        openPremiumDetail,
        closePremiumDetail,
        activeQuiz,
        startQuiz,
        exitQuiz,
        quizResult,
        setQuizResult,
        quizSubCategory,
        setQuizSubCategory,
        selectQuizSubCategory,
        isSearchOpen,
        setIsSearchOpen,
        isAiModalOpen,
        setIsAiModalOpen,
        isAdminModalOpen,
        setIsAdminModalOpen,
        isAdminPinModalOpen,
        setIsAdminPinModalOpen,
        isAdminAuthenticated,
        isCurrentUserAdmin,
        openAdminWithSecurityCheck,
        verifyAdminPin,
        logoutAdmin,
        isProfileModalOpen,
        setIsProfileModalOpen,
        isNotificationsOpen,
        setIsNotificationsOpen,
        notifications,
        unreadNotificationsCount,
        markNotificationRead,
        markAllNotificationsRead,
        clearAllNotifications,
        addNotification,
        activeReaderPage,
        setActiveReaderPage,
        addToast
      }}
    >
      {/* Global Toast Alert Notifications */}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 max-w-sm pointer-events-none">
        {toasts.map(toast => (
          <div
            key={toast.id}
            className={`pointer-events-auto px-4 py-3 rounded-2xl shadow-lg text-sm font-semibold flex items-center gap-2.5 transition-all duration-300 border ${
              toast.type === 'success'
                ? 'bg-emerald-600 text-white border-emerald-500'
                : toast.type === 'error'
                ? 'bg-red-600 text-white border-red-500'
                : toast.type === 'warning'
                ? 'bg-amber-500 text-white border-amber-400'
                : 'bg-[#0B2046] text-white border-blue-900'
            }`}
          >
            <span>{toast.message}</span>
          </div>
        ))}
      </div>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
