import { 
  UserProfile, 
  BookmarkItem, 
  PurchaseRecord, 
  QuizResultData, 
  StudyNote, 
  PremiumNote,
  AppNotification
} from '../types';
import { 
  INITIAL_USER, 
  MOCK_STUDY_NOTES, 
  MOCK_PREMIUM_NOTES,
  MOCK_NOTIFICATIONS
} from '../data/mockData';
import { safeStorage, safeJsonParse } from '../utils/safeHelpers';
import { sanitizeUserProfile, sanitizeNumber } from '../utils/sanitizer';

const STORAGE_KEYS = {
  USER_PROFILE: 'btn_user_profile_v1',
  BOOKMARKS: 'btn_bookmarks_v1',
  PURCHASES: 'btn_purchases_v1',
  QUIZ_HISTORY: 'btn_quiz_history_v1',
  THEME: 'btn_theme_mode_v1',
  CUSTOM_NOTES: 'btn_custom_notes_v1',
  CUSTOM_PREMIUM: 'btn_custom_premium_v1',
  NOTIFICATIONS: 'btn_notifications_v2'
};

export const GUEST_USER_PROFILE: UserProfile = {
  id: 'guest_user',
  authUid: 'guest_user',
  authProvider: 'guest',
  name: 'अतिथि (Guest User)',
  displayName: 'अतिथि (Guest User)',
  email: '',
  phone: '',
  province: 'बागमती प्रदेश',
  district: 'काठमाडौं',
  avatarUrl: '/default-avatar.png',
  photoURL: '/default-avatar.png',
  xp: 0,
  streak: 0,
  lastActiveDate: new Date().toISOString().split('T')[0],
  questionsSolved: 0,
  quizzesCompleted: 0,
  accuracy: 100,
  rank: 'अतिथि परीक्षार्थी (Guest)',
  level: 1,
  targetExam: 'नेपाल राष्ट्र बैंक - सहायक (तह ४)',
  registeredAt: new Date().toISOString(),
  isRegistered: false,
  isGuest: true,
  profileCompletion: 20
};

export class StorageService {
  // --- User Profile ---
  static getGuestProfile(): UserProfile {
    return { ...GUEST_USER_PROFILE, lastActiveDate: new Date().toISOString().split('T')[0] };
  }

  static isUserLoggedIn(): boolean {
    try {
      const raw = typeof localStorage !== 'undefined' ? (localStorage.getItem('btn_authenticated_user') || localStorage.getItem('user_profile') || localStorage.getItem('user')) : null;
      if (!raw) return false;
      const parsed = JSON.parse(raw);
      if (!parsed || !parsed.email || !parsed.email.includes('@') || parsed.isGuest) {
        return false;
      }
      if (parsed.email === 'student.tayari@gmail.com' || parsed.email === 'student.aspirant@gmail.com' || parsed.name === 'Student Tayari' || parsed.displayName === 'Student Tayari') {
        this.clearUserProfile();
        return false;
      }
      return true;
    } catch {
      return false;
    }
  }

  static clearUserProfile(): void {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.removeItem('user_profile');
        localStorage.removeItem('user');
        localStorage.removeItem('btn_authenticated_user');
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem(STORAGE_KEYS.USER_PROFILE);
        localStorage.removeItem('btn_registration_completed_v1');
        localStorage.removeItem('btn_student_profile_v2');
        localStorage.removeItem('btn_user_profile_v1');
        localStorage.removeItem('btn_user_session_token');
        localStorage.removeItem('btn_auth_uid');
        localStorage.removeItem('btn_last_auth_provider');
        localStorage.removeItem('btn_last_auth_email');
        localStorage.removeItem('btn_last_auth_name');
      }
      safeStorage.removeItem('user_profile');
      safeStorage.removeItem('user');
      safeStorage.removeItem('btn_authenticated_user');
      safeStorage.removeItem(STORAGE_KEYS.USER_PROFILE);
      safeStorage.removeItem('btn_registration_completed_v1');
      safeStorage.removeItem('btn_student_profile_v2');
      safeStorage.removeItem('btn_user_profile_v1');
      safeStorage.removeItem('btn_user_session_token');
      if (typeof sessionStorage !== 'undefined') {
        sessionStorage.removeItem('btn_admin_session_auth');
      }
    } catch (e) {
      console.error('Error clearing profile', e);
    }
  }

  static getUserProfile(): UserProfile {
    try {
      const authData = (typeof localStorage !== 'undefined' ? (localStorage.getItem('btn_authenticated_user') || localStorage.getItem('user_profile') || localStorage.getItem('user')) : null) || safeStorage.getItem('user_profile');
      if (authData) {
        const parsed = safeJsonParse(authData, null);
        if (parsed && typeof parsed === 'object') {
          // Purge legacy demo profiles if any remain in client storage
          if (parsed.email === 'student.tayari@gmail.com' || parsed.email === 'student.aspirant@gmail.com' || parsed.name === 'Student Tayari' || parsed.displayName === 'Student Tayari') {
            this.clearUserProfile();
            return this.getGuestProfile();
          }
          // If valid logged in user with real email
          if (parsed.email && parsed.email.includes('@') && !parsed.isGuest) {
            return sanitizeUserProfile(parsed);
          }
        }
      }
      const data = safeStorage.getItem(STORAGE_KEYS.USER_PROFILE) || (typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEYS.USER_PROFILE) : null);
      if (data) {
        const parsed = safeJsonParse(data, null);
        if (parsed && typeof parsed === 'object') {
          if (parsed.email === 'student.tayari@gmail.com' || parsed.email === 'student.aspirant@gmail.com' || parsed.name === 'Student Tayari' || parsed.displayName === 'Student Tayari') {
            this.clearUserProfile();
            return this.getGuestProfile();
          }
          if (parsed.email && parsed.email.includes('@') && !parsed.isGuest) {
            return sanitizeUserProfile(parsed);
          }
        }
      }
      return this.getGuestProfile();
    } catch {
      return this.getGuestProfile();
    }
  }

  static saveUserProfile(profile: UserProfile): void {
    try {
      const clean = sanitizeUserProfile(profile);
      safeStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(clean));
      safeStorage.setItem('user_profile', JSON.stringify(clean));
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(clean));
        localStorage.setItem('user_profile', JSON.stringify(clean));
        localStorage.setItem('user', JSON.stringify(clean));
        if (!clean.isGuest && clean.email) {
          localStorage.setItem('btn_authenticated_user', JSON.stringify(clean));
          localStorage.setItem('isLoggedIn', 'true');
        }
      }
    } catch (e) {
      console.error('Failed to save profile', e);
    }
  }

  static addXp(amount: number): UserProfile {
    const profile = this.getUserProfile();
    const safeAmount = sanitizeNumber(amount, 0, 0, 10000);
    profile.xp = sanitizeNumber(profile.xp + safeAmount, 0, 0, 10000000);
    this.saveUserProfile(profile);
    return profile;
  }

  static updateQuizStats(correctCount: number, totalQuestions: number): UserProfile {
    const profile = this.getUserProfile();
    const safeCorrect = sanitizeNumber(correctCount, 0, 0, 1000);
    const safeTotal = sanitizeNumber(totalQuestions, 0, 0, 1000);

    profile.quizzesCompleted = sanitizeNumber(profile.quizzesCompleted + 1, 1, 0, 100000);
    profile.questionsSolved = sanitizeNumber(profile.questionsSolved + safeTotal, safeTotal, 0, 1000000);
    
    // Recalculate rolling accuracy
    const prevTotal = Math.max(1, profile.questionsSolved - safeTotal);
    const prevCorrect = (profile.accuracy / 100) * prevTotal;
    const newTotalCorrect = prevCorrect + safeCorrect;
    profile.accuracy = Math.min(100, Math.max(0, Math.round((newTotalCorrect / Math.max(1, profile.questionsSolved)) * 100)));

    // Award XP
    profile.xp = sanitizeNumber(profile.xp + (safeCorrect * 10 + 20), 0, 0, 10000000);
    this.saveUserProfile(profile);
    return profile;
  }

  // --- Bookmarks ---
  static getBookmarks(): BookmarkItem[] {
    try {
      const data = safeStorage.getItem(STORAGE_KEYS.BOOKMARKS);
      if (data) return JSON.parse(data);
    } catch {
      // ignore
    }
    // Default sample bookmarks
    const defaults: BookmarkItem[] = [
      {
        id: 'bm-01',
        type: 'note',
        targetId: 'note-banking-history',
        title: 'बैंकिङ विकासक्रम र इतिहास (Banking Evolution & History Master Chapter)',
        category: 'Banking',
        savedAt: '२०८१ भाद्र १५'
      },
      {
        id: 'bm-04',
        type: 'note',
        targetId: 'note-trade-finance-lc-bg',
        title: 'बैंक जमानत (Bank Guarantee) र प्रतीतपत्र (Letter of Credit) - Master Chapter',
        category: 'Banking',
        savedAt: '२०८१ भाद्र १६'
      },
      {
        id: 'bm-05',
        type: 'note',
        targetId: 'note-aml-kyc',
        title: 'सम्पत्ति शुद्धीकरण र ग्राहक पहिचान (AML & KYC - Master Chapter)',
        category: 'Banking',
        savedAt: '२०८१ भाद्र १७'
      },
      {
        id: 'bm-02',
        type: 'question',
        targetId: 'b-01',
        title: 'नेपालको केन्द्रीय बैंक कुन हो?',
        category: 'Banking',
        savedAt: '२०८१ भाद्र १४'
      },
      {
        id: 'bm-03',
        type: 'current-affair',
        targetId: 'ca-art-01',
        title: 'नेपाल राष्ट्र बैंकद्वारा आर्थिक वर्ष २०८१/८२ को मौद्रिक नीति सार्वजनिक',
        category: 'Banking & Finance',
        savedAt: '२०८१ भाद्र १२'
      }
    ];
    this.saveBookmarks(defaults);
    return defaults;
  }

  static saveBookmarks(items: BookmarkItem[]): void {
    try {
      safeStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(items));
    } catch (e) {
      console.error('Failed to save bookmarks', e);
    }
  }

  static toggleBookmark(item: Omit<BookmarkItem, 'id' | 'savedAt'>): boolean {
    const current = this.getBookmarks();
    const existingIndex = current.findIndex(
      b => b.type === item.type && b.targetId === item.targetId
    );

    if (existingIndex >= 0) {
      current.splice(existingIndex, 1);
      this.saveBookmarks(current);
      return false; // Removed
    } else {
      let savedDate = '२०८१ भाद्र १८';
      try {
        savedDate = new Date().toLocaleDateString('ne-NP');
      } catch {}
      const newItem: BookmarkItem = {
        ...item,
        id: `bm-${Date.now()}`,
        savedAt: savedDate
      };
      current.unshift(newItem);
      this.saveBookmarks(current);
      return true; // Added
    }
  }

  static isBookmarked(type: 'question' | 'note' | 'current-affair', targetId: string): boolean {
    const current = this.getBookmarks();
    return current.some(b => b.type === type && b.targetId === targetId);
  }

  // --- Purchases / Premium Materials ---
  static getPurchases(): PurchaseRecord[] {
    try {
      const data = safeStorage.getItem(STORAGE_KEYS.PURCHASES);
      if (data) return JSON.parse(data);
    } catch {
      // ignore
    }
    // Default: User has already purchased prem-01 as an initial showcase
    const defaultPurchases: PurchaseRecord[] = [
      {
        orderId: 'ORD-BTN-2081-9921',
        noteId: 'prem-01',
        title: 'Banking Complete Revision Notes (Special Edition)',
        coverImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80',
        amountPaid: 149,
        purchaseDate: '२०८१ भाद्र १०',
        paymentMethod: 'esewa',
        transactionId: 'TXN-ESEWA-8831920',
        status: 'Purchased'
      }
    ];
    this.savePurchases(defaultPurchases);
    return defaultPurchases;
  }

  static savePurchases(records: PurchaseRecord[]): void {
    try {
      safeStorage.setItem(STORAGE_KEYS.PURCHASES, JSON.stringify(records));
    } catch (e) {
      console.error('Failed to save purchases', e);
    }
  }

  static hasPurchased(userId: string, noteId: string): boolean {
    // In production, this calls a secure server API with JWT auth
    const purchases = this.getPurchases();
    return purchases.some(p => p.noteId === noteId && p.status === 'Purchased');
  }

  static recordPurchase(record: PurchaseRecord): void {
    const purchases = this.getPurchases();
    purchases.unshift(record);
    this.savePurchases(purchases);
  }

  // --- Quiz History ---
  static getQuizHistory(): QuizResultData[] {
    try {
      const data = safeStorage.getItem(STORAGE_KEYS.QUIZ_HISTORY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  static saveQuizResult(result: QuizResultData): void {
    try {
      const history = this.getQuizHistory();
      history.unshift(result);
      safeStorage.setItem(STORAGE_KEYS.QUIZ_HISTORY, JSON.stringify(history.slice(0, 50)));
    } catch (e) {
      console.error('Failed to save quiz history', e);
    }
  }

  // --- Theme preference ---
  static getTheme(): 'light' | 'dark' {
    try {
      const theme = safeStorage.getItem(STORAGE_KEYS.THEME);
      if (theme === 'dark' || theme === 'light') return theme;
    } catch {
      // ignore
    }
    return 'light';
  }

  static setTheme(theme: 'light' | 'dark'): void {
    try {
      safeStorage.setItem(STORAGE_KEYS.THEME, theme);
      if (typeof document !== 'undefined') {
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    } catch (e) {
      console.error('Failed to save theme', e);
    }
  }

  // --- Study Notes & Premium Notes (with Admin extensions) ---
  static getAllNotes(): StudyNote[] {
    try {
      const custom = safeStorage.getItem(STORAGE_KEYS.CUSTOM_NOTES);
      const customNotes: StudyNote[] = custom ? JSON.parse(custom) : [];
      return [...MOCK_STUDY_NOTES, ...customNotes];
    } catch {
      return MOCK_STUDY_NOTES;
    }
  }

  static getAllPremiumNotes(): PremiumNote[] {
    try {
      const custom = safeStorage.getItem(STORAGE_KEYS.CUSTOM_PREMIUM);
      const customNotes: PremiumNote[] = custom ? JSON.parse(custom) : [];
      return [...MOCK_PREMIUM_NOTES, ...customNotes];
    } catch {
      return MOCK_PREMIUM_NOTES;
    }
  }

  static addCustomPremiumNote(note: PremiumNote): void {
    try {
      const custom = safeStorage.getItem(STORAGE_KEYS.CUSTOM_PREMIUM);
      const list: PremiumNote[] = custom ? JSON.parse(custom) : [];
      list.unshift(note);
      safeStorage.setItem(STORAGE_KEYS.CUSTOM_PREMIUM, JSON.stringify(list));
    } catch (e) {
      console.error('Failed to save custom premium note', e);
    }
  }

  // --- Notifications ---
  static getNotifications(): AppNotification[] {
    try {
      const data = safeStorage.getItem(STORAGE_KEYS.NOTIFICATIONS);
      if (data) {
        const parsed = safeJsonParse<AppNotification[]>(data, []);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
      return MOCK_NOTIFICATIONS;
    } catch {
      return MOCK_NOTIFICATIONS;
    }
  }

  static saveNotifications(notifs: AppNotification[]): void {
    try {
      safeStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(notifs));
    } catch (e) {
      console.error('Failed to save notifications', e);
    }
  }

  static resetAllProgress(): void {
    try {
      safeStorage.removeItem(STORAGE_KEYS.USER_PROFILE);
      safeStorage.removeItem(STORAGE_KEYS.BOOKMARKS);
      safeStorage.removeItem(STORAGE_KEYS.QUIZ_HISTORY);
      safeStorage.removeItem('btn_student_profile_v2');
      safeStorage.removeItem('btn_registration_completed_v1');
    } catch (e) {
      console.error('Failed to reset progress', e);
    }
  }
}

