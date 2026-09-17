import React, { useState } from 'react';
import { 
  Search, 
  Bell, 
  Moon, 
  Sun, 
  Sparkles, 
  Flame, 
  Zap, 
  ShieldCheck,
  Edit3,
  Menu,
  X,
  Home,
  BookOpen,
  Building2,
  FileText,
  Youtube,
  Newspaper,
  ShoppingBag,
  Bookmark,
  Trophy,
  User as UserIcon,
  LogOut,
  Crown,
  Info,
  ChevronDown,
  Landmark,
  Scale
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { isUserAdmin, OFFICIAL_ADMIN_EMAIL } from '../../utils/sanitizer';
import { NavigationTab } from '../../types';
import { DbService } from '../../services/dbService';

// =========================================================================
// Official Banking Tayari Nepal Inline SVG Component
// Rendered directly inline to guarantee 0ms latency, no broken image assets,
// and exact Navy Blue (#0B2046) & Crimson Red (#C8102E) branding.
// =========================================================================
export const BankingTayariLogoSvg: React.FC<{ 
  className?: string; 
  showMotto?: boolean;
}> = ({ 
  className = 'h-10 md:h-12 w-auto object-contain',
  showMotto = true
}) => {
  return (
    <svg 
      viewBox={showMotto ? "0 0 980 320" : "0 0 980 240"} 
      fill="none" 
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Banking Tayari Nepal Logo"
    >
      {/* ===== 1. LEFT EMBLEM: Stylized 'B' with Book, Pen, and Red Flourish ===== */}
      <g id="emblem-group" transform="translate(10, 8)">
        <path 
          d="M 28 6 L 176 6 C 220 6, 256 30, 256 74 C 256 110, 226 134, 184 142 C 228 152, 258 184, 258 226 C 258 244, 250 260, 238 274 C 228 266, 214 260, 196 258 C 226 244, 238 226, 238 208 C 238 174, 210 152, 166 152 L 76 152 L 76 248 L 28 248 Z" 
          fill="#0B2046" 
        />
        <path 
          d="M 76 40 L 168 40 C 190 40, 208 52, 208 72 C 208 92, 190 106, 168 106 L 76 106 Z" 
          fill="#FFFFFF" 
        />
        <path d="M 12 306 C 45 286, 86 276, 128 274 C 128 264, 128 256, 128 248 C 76 252, 38 266, 12 306 Z" fill="#0B2046" />
        <path d="M 20 282 C 52 262, 90 252, 130 249 C 130 241, 130 234, 130 226 C 84 230, 48 244, 20 282 Z" fill="#0B2046" />
        <path d="M 32 258 C 62 238, 98 228, 132 224 C 132 216, 132 210, 132 202 C 90 206, 56 218, 32 258 Z" fill="#0B2046" />
        <path d="M 136 302 C 178 282, 222 260, 260 216 C 260 242, 246 272, 218 292 C 190 308, 160 308, 136 302 Z" fill="#C8102E" />
        <path d="M 138 281 C 170 263, 206 244, 238 216 C 238 232, 228 254, 208 270 C 184 284, 160 286, 138 281 Z" fill="#C8102E" />
        <g transform="translate(94, 142)">
          <path 
            d="M 42 0 L 12 74 C 12 106, 24 133, 42 153 C 60 133, 72 106, 72 74 L 42 0 Z" 
            fill="#FFFFFF" 
            stroke="#0B2046" 
            strokeWidth="3.5" 
            strokeLinejoin="round" 
          />
          <circle cx="42" cy="74" r="6.5" fill="#0B2046" />
          <line x1="42" y1="67" x2="42" y2="4" stroke="#0B2046" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M 26 76 C 26 96, 33 114, 42 128 C 51 114, 58 96, 58 76" fill="none" stroke="#0B2046" strokeWidth="2.5" />
        </g>
      </g>

      {/* ===== 2. RIGHT BRAND TYPOGRAPHY ===== */}
      <g transform="translate(295, 12)">
        <text 
          x="0" 
          y="126" 
          fill="#0B2046" 
          fontSize="136" 
          fontWeight="900" 
          letterSpacing="1"
          style={{ fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" }}
        >
          BANKING
        </text>
        <rect x="0" y="150" width="670" height="82" rx="4" fill="#C8102E" />
        <text 
          x="335" 
          y="210" 
          fill="#FFFFFF" 
          fontSize="46" 
          fontWeight="800" 
          textAnchor="middle" 
          letterSpacing="11"
          style={{ fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" }}
        >
          TAYARI NEPAL
        </text>

        {showMotto && (
          <g transform="translate(6, 256)">
            <g transform="translate(0, 0)">
              <circle cx="26" cy="26" r="26" fill="none" stroke="#0B2046" strokeWidth="4.5" />
              <path d="M 14 18 C 19 16, 24 17, 26 19 C 28 17, 33 16, 38 18 L 38 34 C 33 32, 28 33, 26 35 C 24 33, 19 32, 14 34 Z" fill="#0B2046" />
              <line x1="26" y1="19" x2="26" y2="35" stroke="#FFFFFF" strokeWidth="2" />
              <text x="66" y="35" fill="#0B2046" fontSize="23" fontWeight="800" letterSpacing="2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                PREPARE
              </text>
            </g>
            <line x1="218" y1="6" x2="218" y2="48" stroke="#0B2046" strokeWidth="2.5" />
            <g transform="translate(242, 0)">
              <circle cx="26" cy="26" r="26" fill="none" stroke="#C8102E" strokeWidth="4.5" />
              <path d="M 36 15 L 39 18 L 25 32 L 18 35 L 21 28 Z" fill="#0B2046" />
              <path d="M 16 36 C 22 34, 30 36, 36 31" fill="none" stroke="#C8102E" strokeWidth="2.5" strokeLinecap="round" />
              <text x="66" y="35" fill="#0B2046" fontSize="23" fontWeight="800" letterSpacing="2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                PRACTICE
              </text>
            </g>
            <line x1="472" y1="6" x2="472" y2="48" stroke="#C8102E" strokeWidth="2.5" />
            <g transform="translate(496, 0)">
              <circle cx="26" cy="26" r="26" fill="none" stroke="#0B2046" strokeWidth="4.5" />
              <rect x="17" y="29" width="4.5" height="9" fill="#0B2046" rx="1" />
              <rect x="24" y="23" width="4.5" height="15" fill="#0B2046" rx="1" />
              <rect x="31" y="17" width="4.5" height="21" fill="#0B2046" rx="1" />
              <path d="M 17 23 L 26 15 L 37 11 M 32 11 L 37 11 L 37 16" fill="none" stroke="#0B2046" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <text x="66" y="35" fill="#0B2046" fontSize="23" fontWeight="800" letterSpacing="2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                SUCCEED
              </text>
            </g>
          </g>
        )}
      </g>
    </svg>
  );
};

export const Header: React.FC = () => {
  const { 
    user, 
    theme, 
    toggleTheme, 
    setIsSearchOpen, 
    setIsAiModalOpen,
    setIsNotificationsOpen,
    notifications,
    unreadNotificationsCount,
    activeTab,
    setActiveTab,
    setIsProfileModalOpen,
    openAdminWithSecurityCheck,
    isAdminAuthenticated,
    purchases,
    bookmarks,
    logout,
    openLoginModal,
    quizSubCategory,
    selectQuizSubCategory
  } = useApp();

  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState<boolean>(false);
  const [isMobileSangathitOpen, setIsMobileSangathitOpen] = useState<boolean>(true);

  const isGuest = !user?.email || Boolean(user?.isGuest);

  // Visibility logic for the Admin button: ONLY when the authorized admin is logged in
  const isAdmin = Boolean(user && isUserAdmin(user.email));
  const isPro = DbService.isUserPro(user);

  const unreadCount = typeof unreadNotificationsCount === 'number' 
    ? unreadNotificationsCount 
    : (notifications || []).filter(n => !n.read).length;

  // Dynamic user session bindings:
  const emailPrefix = user?.email ? user.email.split('@')[0] : '';
  const displayName = isGuest
    ? 'अतिथि'
    : (user?.displayName || (user?.name && user.name !== 'विद्यार्थी' ? user.name : (emailPrefix || 'परीक्षार्थी')));
  const userEmail = isGuest ? '' : (user?.email || '');
  const photoURL = user?.photoURL || user?.avatarUrl || (isGuest ? '/default-avatar.png' : `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=0B2046&color=fff&size=256`);

  const drawerNavItems: { tab: NavigationTab; label: string; icon: React.ComponentType<{ className?: string }>; badge?: string | number; badgeColor?: string }[] = [
    { tab: 'home', label: 'गृहपृष्ठ (Home)', icon: Home },
    { tab: 'courses', label: 'पाठ्यक्रम (Courses)', icon: BookOpen },
    { tab: 'quiz', label: 'संगठित संस्था (Public Enterprises)', icon: Building2, badge: '५० सेट', badgeColor: 'bg-[#DC2626]' },
    { tab: 'free-notes', label: 'अध्ययन / AI नोट्स (Notes)', icon: FileText, badge: 'AI' },
    { tab: 'leaderboard', label: 'वरियता (Leaderboard)', icon: Trophy, badge: 'Rank' },
    { tab: 'video-lectures', label: 'भिडियो कक्षाहरू (Videos)', icon: Youtube, badge: 'HD', badgeColor: 'bg-red-600' },
    { tab: 'current-affairs', label: 'समसामयिक (Current Affairs)', icon: Newspaper },
    { tab: 'premium', label: 'प्रिमियम नोट्स (Premium)', icon: Sparkles, badge: 'Pro' },
    { tab: 'purchases', label: 'मेरो खरिद (My Purchases)', icon: ShoppingBag, badge: (purchases || []).length },
    { tab: 'bookmarks', label: 'बुकमार्क (Bookmarks)', icon: Bookmark, badge: (bookmarks || []).length },
    { tab: 'profile', label: 'मेरो प्रोफाइल (Profile)', icon: UserIcon },
    { tab: 'about', label: 'हाम्रो बारेमा (About Us)', icon: Info, badge: 'Story', badgeColor: 'bg-blue-600' }
  ];

  const handleDrawerNavigate = (tab: NavigationTab) => {
    setActiveTab(tab);
    setIsMobileDrawerOpen(false);
  };

  const handleLogout = () => {
    if (window.confirm('के तपाईं लगआउट गर्न चाहनुहुन्छ?')) {
      setIsMobileDrawerOpen(false);
      logout();
    }
  };

  return (
    <>
      <header className="sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
        <div className="w-full px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-2 sm:gap-4">
            
            {/* Left section: Mobile Hamburger Drawer Trigger */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Mobile Hamburger Toggle Button (44px min touch target) */}
              <button
                type="button"
                id="mobile-drawer-toggle-btn"
                onClick={() => setIsMobileDrawerOpen(true)}
                className="md:hidden min-h-[44px] min-w-[44px] p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl flex items-center justify-center cursor-pointer transition active:scale-95"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Desktop Search Bar (⌘K) */}
            <div className="flex-1 max-w-lg hidden md:block">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="w-full flex items-center justify-between px-3.5 py-2 text-xs sm:text-sm bg-slate-100 hover:bg-slate-200/70 dark:bg-slate-800 dark:hover:bg-slate-700/70 text-slate-500 dark:text-slate-400 rounded-xl border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all text-left"
              >
                <div className="flex items-center gap-2.5">
                  <Search className="w-4 h-4 text-slate-400" />
                  <span>के खोज्दै हुनुहुन्छ? (Search Notes, Quiz...)</span>
                </div>
                <kbd className="hidden lg:inline-block px-2 py-0.5 text-[10px] font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded text-slate-400">
                  ⌘K
                </kbd>
              </button>
            </div>

            {/* Right Action Controls */}
            <div className="flex items-center gap-1 sm:gap-2">
              
              {/* Mobile Search Button (44px touch target) */}
              <button
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search"
                className="md:hidden min-h-[44px] min-w-[44px] p-2.5 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl flex items-center justify-center transition active:scale-95"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* AI Study Assistant Button - Desktop & Tablet */}
              <button
                onClick={() => setIsAiModalOpen(true)}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 hover:bg-amber-100 dark:hover:bg-amber-900/60 transition"
                title="AI Study Assistant"
              >
                <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
                <span>AI साथी</span>
              </button>

              {/* About Us Platform Story Button */}
              <button
                onClick={() => setActiveTab('about')}
                className={`hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl border transition cursor-pointer ${
                  activeTab === 'about'
                    ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700'
                    : 'bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800 dark:hover:bg-slate-700/80 text-slate-700 dark:text-slate-300 border-transparent'
                }`}
                title="हाम्रो बारेमा (About Platform Story)"
              >
                <Info className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>हाम्रो बारेमा</span>
              </button>

              {/* Streak Badge - Compact and visible on mobile & desktop */}
              <div 
                className="flex items-center gap-1 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-amber-700 dark:text-amber-300 px-2 py-1 rounded-xl text-xs font-bold"
                title={`${user.streak} Days Continuous Study Streak`}
              >
                <Flame className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
                <span>{user.streak}d</span>
              </div>

              {/* Theme Toggle - Desktop only (available in drawer on mobile) */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle Dark Mode"
                className="hidden md:flex p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition"
                title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-amber-400" />
                ) : (
                  <Moon className="w-5 h-5 text-slate-700" />
                )}
              </button>

              {/* Notification Bell with Dynamic Counter Badge (44px touch target) */}
              <button
                id="header-notification-btn"
                onClick={() => setIsNotificationsOpen(true)}
                aria-label="Notifications"
                className="min-h-[44px] min-w-[44px] p-2.5 relative text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full flex items-center justify-center cursor-pointer transition focus:outline-none active:scale-95"
                title={`सूचनाहरू (${unreadCount} नपढिएका)`}
              >
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <span 
                    id="header-notification-badge"
                    className="absolute top-1.5 right-1.5 flex items-center justify-center min-w-[18px] h-[18px] px-1 text-[10px] font-black font-mono text-white bg-red-600 rounded-full border-2 border-white dark:border-slate-900 shadow-sm animate-pulse"
                  >
                    {unreadCount > 9 ? '9+' : unreadCount}
                  </span>
                )}
              </button>

              {/* Admin PIN Button - Desktop only when authorized */}
              {isAdmin && (
                <button
                  id="header-admin-btn"
                  onClick={openAdminWithSecurityCheck}
                  className={`hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold transition border cursor-pointer ${
                    isAdminAuthenticated 
                      ? 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-300 dark:border-red-800/60 hover:bg-red-500/20'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                  title={`प्रशासक प्यानल (${OFFICIAL_ADMIN_EMAIL})`}
                >
                  <ShieldCheck className="w-4 h-4 text-red-600 dark:text-red-400" />
                  <span>प्रशासक (PIN)</span>
                </button>
              )}

              {/* Header Profile Section & Trigger (Min 44px touch target on mobile) */}
              {isGuest ? (
                <div className="flex items-center gap-1.5 pl-2 sm:pl-3 border-l border-slate-200 dark:border-slate-800">
                  <button
                    type="button"
                    onClick={() => openLoginModal()}
                    id="header-login-btn"
                    className="min-h-[40px] px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs font-bold shadow-xs flex items-center gap-1.5 transition cursor-pointer"
                    title="Google वा इमेलबाट लगइन गर्नुहोस्"
                  >
                    <UserIcon className="w-3.5 h-3.5" />
                    <span>लगइन</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsProfileModalOpen(true)}
                    className="p-1 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                    title="अतिथि प्रोफाइल हेर्नुहोस्"
                  >
                    <img 
                      src={photoURL} 
                      alt={displayName} 
                      referrerPolicy="no-referrer"
                      className="w-8 h-8 rounded-full border border-slate-300 dark:border-slate-700 object-cover shadow-xs"
                    />
                  </button>
                </div>
              ) : (
                <button 
                  type="button"
                  onClick={() => setIsProfileModalOpen(true)}
                  id="header-profile-btn"
                  className="min-h-[44px] flex items-center gap-2 p-1 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border-l pl-2 sm:pl-3 ml-0.5 sm:ml-1 border-slate-200 dark:border-slate-800 group text-left cursor-pointer active:scale-95"
                  title={`${displayName} - प्रोफाइल सम्पादन`}
                >
                  <div className="text-right hidden sm:block max-w-[140px]">
                    <div className="flex items-center justify-end gap-1.5">
                      <p className="text-xs text-slate-800 dark:text-slate-200 font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition truncate" title={displayName}>
                        {displayName}
                      </p>
                      {isPro && (
                        <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-600 dark:text-amber-400 text-[9px] font-black tracking-wider border border-amber-500/30 flex items-center gap-0.5 shadow-2xs" title="Banking Tayari Pro Active">
                          <Crown className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
                          <span>PRO</span>
                        </span>
                      )}
                    </div>
                    <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400 truncate" title={userEmail || 'विद्यार्थी'}>
                      {userEmail || user?.targetExam?.split(' ')[0] || 'विद्यार्थी'}
                    </p>
                  </div>
                  
                  <div className="relative">
                    <img 
                      src={photoURL} 
                      alt={displayName} 
                      referrerPolicy="no-referrer"
                      className="w-8 h-8 sm:w-8 sm:h-8 rounded-full border border-slate-300 dark:border-slate-700 object-cover shadow-sm transition-transform group-hover:scale-105"
                    />
                    {user && (
                      <span className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full" />
                    )}
                  </div>
                </button>
              )}

            </div>
          </div>
        </div>
      </header>

      {/* =========================================================================
          SLEEK COLLAPSIBLE MOBILE SLIDE-OVER DRAWER (SaaS Level)
          Provides quick, clean navigation on mobile screens without header clutter.
          ========================================================================= */}
      {isMobileDrawerOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex animate-in fade-in duration-200">
          
          {/* Backdrop blur overlay */}
          <div 
            onClick={() => setIsMobileDrawerOpen(false)}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm" 
          />

          {/* Sliding Drawer Container */}
          <div className="relative w-4/5 max-w-xs bg-white dark:bg-slate-900 h-full shadow-2xl flex flex-col z-10 border-r border-slate-200 dark:border-slate-800 animate-in slide-in-from-left duration-200">
            
            {/* Drawer Top Bar: Brand Logo & Close Button */}
            <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div className="bg-white px-2 py-1 rounded-xl border border-slate-200 shadow-2xs">
                <img 
                  src="/logo.svg" 
                  alt="Banking Tayari Nepal" 
                  className="h-8 w-auto object-contain"
                />
              </div>
              <button
                type="button"
                onClick={() => setIsMobileDrawerOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Active User Identity Card inside Mobile Drawer */}
            <div className="p-4 bg-gradient-to-r from-blue-50/70 to-indigo-50/70 dark:from-slate-800/60 dark:to-blue-950/30 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <img 
                  src={photoURL} 
                  alt={displayName} 
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-slate-700 shadow-sm"
                />
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-extrabold text-slate-900 dark:text-white truncate">
                    {displayName}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono truncate">
                    {userEmail || 'विद्यार्थी खाता'}
                  </p>
                  <div className="flex items-center gap-1.5 mt-1">
                    {isPro ? (
                      <span className="px-1.5 py-0.2 text-[10px] font-black bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 rounded flex items-center gap-1 shadow-xs">
                        <Crown className="w-2.5 h-2.5 fill-slate-950 text-slate-950" />
                        <span>PRO</span>
                      </span>
                    ) : (
                      <span className="px-1.5 py-0.2 text-[10px] font-black bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded">
                        FREE
                      </span>
                    )}
                    <span className="px-1.5 py-0.2 text-[10px] font-black bg-amber-500 text-slate-950 rounded">
                      Lvl {user.level || 1}
                    </span>
                    <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300">
                      {user.xp} XP
                    </span>
                  </div>
                </div>
              </div>

              {isGuest ? (
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileDrawerOpen(false);
                    openLoginModal();
                  }}
                  className="w-full mt-3 py-2 px-3 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md hover:bg-blue-500 transition cursor-pointer"
                >
                  <UserIcon className="w-3.5 h-3.5" />
                  <span>लगइन / खाता खोल्नुहोस्</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileDrawerOpen(false);
                    setIsProfileModalOpen(true);
                  }}
                  className="w-full mt-3 py-1.5 px-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center justify-center gap-1.5 shadow-2xs hover:bg-slate-50 dark:hover:bg-slate-750 transition"
                >
                  <Edit3 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>प्रोफाइल सम्पादन गर्नुहोस्</span>
                </button>
              )}
            </div>

            {/* Navigation List */}
            <div className="flex-1 overflow-y-auto p-3 space-y-1 custom-scrollbar">
              {drawerNavItems.map(item => {
                const Icon = item.icon;
                const isActive = activeTab === item.tab;

                if (item.tab === 'quiz') {
                  return (
                    <div key={item.tab} className="space-y-1">
                      <div className="flex items-center w-full">
                        <button
                          type="button"
                          id="mobile-drawer-sangathit-parent"
                          onClick={() => {
                            if (activeTab !== 'quiz') {
                              selectQuizSubCategory(quizSubCategory || 'sangathit');
                              setIsMobileSangathitOpen(true);
                              setIsMobileDrawerOpen(false);
                            } else {
                              setIsMobileSangathitOpen(!isMobileSangathitOpen);
                            }
                          }}
                          className={`w-full flex items-center justify-between p-3 rounded-xl text-xs font-bold transition ${
                            isActive 
                              ? 'bg-[#0B2046] text-white shadow-sm' 
                              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                          }`}
                        >
                          <div className="flex items-center gap-3 min-w-0 pr-1">
                            <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-blue-600 dark:text-blue-400'}`} />
                            <span className="truncate">संगठित संस्था (Public Enterprises)</span>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0">
                            <span className="text-[10px] font-black px-1.5 py-0.5 rounded-md bg-red-600 text-white">
                              ५० सेट
                            </span>
                            <span
                              role="button"
                              aria-label="टगल गर्नुहोस्"
                              onClick={(e) => {
                                e.stopPropagation();
                                setIsMobileSangathitOpen(!isMobileSangathitOpen);
                              }}
                              className="p-1 rounded-md hover:bg-white/20 text-slate-300"
                            >
                              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMobileSangathitOpen ? 'rotate-180' : ''}`} />
                            </span>
                          </div>
                        </button>
                      </div>

                      {/* Mobile Collapsible Sub-menu Structure */}
                      <div
                        id="mobile-sangathit-submenu"
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isMobileSangathitOpen ? 'max-h-96 opacity-100 py-1 space-y-1' : 'max-h-0 opacity-0 pointer-events-none'
                        }`}
                      >
                        {/* 1. संगठित संस्था Pre-Test */}
                        <button
                          type="button"
                          id="mobile-submenu-sangathit"
                          onClick={() => {
                            selectQuizSubCategory('sangathit');
                            setIsMobileDrawerOpen(false);
                          }}
                          className={`w-full flex items-center justify-between py-2 px-3 pl-6 rounded-lg text-xs transition ${
                            isActive && quizSubCategory === 'sangathit'
                              ? 'bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 font-bold border-l-4 border-blue-600 dark:border-blue-400'
                              : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 hover:bg-slate-100/60 dark:hover:bg-slate-800/40 font-medium border-l-4 border-transparent'
                          }`}
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <Building2 className="w-3.5 h-3.5 shrink-0" />
                            <div className="text-left truncate">
                              <p className="truncate font-semibold">१. संगठित संस्था Pre-Test</p>
                              <p className="text-[10px] opacity-75 font-normal">Public Enterprises Pre-Test</p>
                            </div>
                          </div>
                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-blue-600 text-white shrink-0">
                            ५० सेट
                          </span>
                        </button>

                        {/* 2. बैंकिङ्ग परीक्षा तयारी */}
                        <button
                          type="button"
                          id="mobile-submenu-banking"
                          onClick={() => {
                            selectQuizSubCategory('banking');
                            setIsMobileDrawerOpen(false);
                          }}
                          className={`w-full flex items-center justify-between py-2 px-3 pl-6 rounded-lg text-xs transition ${
                            isActive && quizSubCategory === 'banking'
                              ? 'bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 font-bold border-l-4 border-emerald-600 dark:border-emerald-400'
                              : 'text-slate-600 dark:text-slate-400 hover:text-emerald-600 hover:bg-slate-100/60 dark:hover:bg-slate-800/40 font-medium border-l-4 border-transparent'
                          }`}
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <Landmark className="w-3.5 h-3.5 shrink-0" />
                            <div className="text-left truncate">
                              <p className="truncate font-semibold">२. बैंकिङ्ग परीक्षा तयारी</p>
                              <p className="text-[10px] opacity-75 font-normal">NRB, NBL, RBB, ADBL</p>
                            </div>
                          </div>
                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-600 text-white shrink-0">
                            ४ बैंक
                          </span>
                        </button>

                        {/* 3. निजामती/लोकसेवा तयारी */}
                        <button
                          type="button"
                          id="mobile-submenu-loksewa"
                          onClick={() => {
                            selectQuizSubCategory('loksewa');
                            setIsMobileDrawerOpen(false);
                          }}
                          className={`w-full flex items-center justify-between py-2 px-3 pl-6 rounded-lg text-xs transition ${
                            isActive && quizSubCategory === 'loksewa'
                              ? 'bg-amber-50 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 font-bold border-l-4 border-amber-600 dark:border-amber-400'
                              : 'text-slate-600 dark:text-slate-400 hover:text-amber-600 hover:bg-slate-100/60 dark:hover:bg-slate-800/40 font-medium border-l-4 border-transparent'
                          }`}
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <Scale className="w-3.5 h-3.5 shrink-0" />
                            <div className="text-left truncate">
                              <p className="truncate font-semibold">३. निजामती/लोकसेवा तयारी</p>
                              <p className="text-[10px] opacity-75 font-normal">Loksewa Exam Prep</p>
                            </div>
                          </div>
                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-600 text-white shrink-0">
                            लोकसेवा
                          </span>
                        </button>
                      </div>
                    </div>
                  );
                }

                return (
                  <button
                    key={item.tab}
                    type="button"
                    onClick={() => handleDrawerNavigate(item.tab)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl text-xs font-bold transition ${
                      isActive 
                        ? 'bg-[#0B2046] text-white shadow-sm' 
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                      <span>{item.label}</span>
                    </div>

                    {item.badge !== undefined && (
                      <span className={`text-[10px] font-black px-1.5 py-0.5 rounded-md ${
                        isActive 
                          ? 'bg-red-600 text-white' 
                          : item.badgeColor ? `${item.badgeColor} text-white` : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}

              {/* Admin Button inside Drawer */}
              {isAdmin && (
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileDrawerOpen(false);
                    openAdminWithSecurityCheck();
                  }}
                  className="w-full flex items-center gap-3 p-3 rounded-xl text-xs font-bold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 transition mt-2 border border-red-200 dark:border-red-900/50"
                >
                  <ShieldCheck className="w-4 h-4 text-red-600" />
                  <span>प्रशासक प्यानल (Admin PIN)</span>
                </button>
              )}
            </div>

            {/* Drawer Bottom Controls: Theme Switch & Logout */}
            <div className="p-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 space-y-2">
              <div className="flex items-center justify-between px-2 py-1">
                <span className="text-xs font-bold text-slate-600 dark:text-slate-400">डार्क मोड (Dark Mode)</span>
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="p-1.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
                </button>
              </div>

              <button
                type="button"
                onClick={handleLogout}
                className="w-full py-2.5 px-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 dark:hover:bg-rose-900/50 text-rose-600 dark:text-rose-400 font-bold text-xs flex items-center justify-center gap-2 transition"
              >
                <LogOut className="w-4 h-4" />
                <span>खाता लगआउट गर्नुहोस्</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
