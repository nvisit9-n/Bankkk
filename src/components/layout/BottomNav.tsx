import React from 'react';
import { 
  Home, 
  BookOpen, 
  FileText, 
  Award, 
  User as UserIcon,
  Sparkles 
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { NavigationTab } from '../../types';

export const BottomNav: React.FC = () => {
  const { activeTab, setActiveTab, user } = useApp();

  const emailPrefix = user?.email ? user.email.split('@')[0] : '';
  const displayName = user?.displayName || (user?.name && user.name !== 'विद्यार्थी' ? user.name : (emailPrefix || 'परीक्षार्थी'));
  const photoURL = user?.photoURL || user?.avatarUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=0B2046&color=fff&size=128`;

  const navItems: { 
    tab: NavigationTab; 
    label: string; 
    icon: React.ComponentType<{ className?: string }>;
    badge?: string;
  }[] = [
    { tab: 'home', label: 'Home', icon: Home },
    { tab: 'courses', label: 'Courses', icon: BookOpen },
    { tab: 'free-notes', label: 'Notes', icon: FileText, badge: 'AI' },
    { tab: 'quiz', label: 'Quiz', icon: Award, badge: '५०' },
    { tab: 'profile', label: 'Profile', icon: UserIcon }
  ];

  return (
    <div 
      id="mobile-bottom-navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200/80 dark:border-slate-800/80 shadow-2xl safe-bottom transition-colors"
    >
      <nav className="flex items-center justify-around h-16 max-w-lg mx-auto px-1.5">
        {navItems.map(item => {
          const Icon = item.icon;
          const isActive = activeTab === item.tab;

          return (
            <button
              key={item.tab}
              type="button"
              id={`bottom-nav-${item.tab}`}
              onClick={() => setActiveTab(item.tab)}
              className={`flex-1 min-h-[48px] flex flex-col items-center justify-center py-1 transition-all relative cursor-pointer group active:scale-95 ${
                isActive 
                  ? 'text-[#DC2626] font-bold' 
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 font-medium'
              }`}
            >
              {/* Active Pill Accent Background */}
              <div className={`relative px-3 py-1 rounded-2xl transition-all duration-200 flex items-center justify-center ${
                isActive 
                  ? 'bg-red-50 dark:bg-red-950/40 scale-105 shadow-2xs' 
                  : 'group-hover:bg-slate-100 dark:group-hover:bg-slate-800/50'
              }`}>
                {item.tab === 'profile' && user ? (
                  <div className="relative">
                    <img 
                      src={photoURL} 
                      alt={displayName} 
                      referrerPolicy="no-referrer"
                      className={`w-5 h-5 rounded-full object-cover transition-all ${
                        isActive 
                          ? 'ring-2 ring-red-600 dark:ring-red-500' 
                          : 'ring-1 ring-slate-300 dark:ring-slate-700'
                      }`}
                    />
                    <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 bg-emerald-500 rounded-full ring-1 ring-white dark:ring-slate-900" />
                  </div>
                ) : (
                  <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5] text-[#DC2626]' : 'stroke-2'}`} />
                )}

                {/* Optional Badge */}
                {item.badge && !isActive && (
                  <span className="absolute -top-1 -right-1 px-1 py-0.2 text-[8px] font-black bg-red-600 text-white rounded-full">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Label */}
              <span className={`text-[10px] mt-0.5 tracking-tight font-semibold truncate ${
                isActive ? 'text-[#DC2626] font-extrabold' : ''
              }`}>
                {item.label}
              </span>

              {/* Bottom Dot Indicator */}
              {isActive && (
                <span className="absolute bottom-1 w-1 h-1 bg-[#DC2626] rounded-full" />
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
};
