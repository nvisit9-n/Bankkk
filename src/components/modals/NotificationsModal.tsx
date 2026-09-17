import React, { useState } from 'react';
import { 
  X, 
  Bell, 
  Check, 
  CheckCheck, 
  Trash2, 
  Play, 
  FileText, 
  Trophy, 
  Sparkles, 
  ExternalLink,
  Megaphone
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { AppNotification } from '../../types';

export const NotificationsModal: React.FC = () => {
  const { 
    isNotificationsOpen, 
    setIsNotificationsOpen, 
    notifications, 
    markNotificationRead,
    markAllNotificationsRead,
    clearAllNotifications,
    setActiveTab 
  } = useApp();

  const [activeFilter, setActiveFilter] = useState<'all' | 'unread' | 'youtube' | 'quiz'>('all');

  if (!isNotificationsOpen) return null;

  const unreadCount = notifications.filter(n => !n.read).length;

  const filteredNotifications = notifications.filter(item => {
    if (activeFilter === 'unread') return !item.read;
    if (activeFilter === 'youtube') return item.type === 'youtube';
    if (activeFilter === 'quiz') return item.type === 'quiz';
    return true;
  });

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'youtube':
        return (
          <div className="w-8 h-8 rounded-xl bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0">
            <Play className="w-4 h-4 fill-red-600 text-red-600" />
          </div>
        );
      case 'quiz':
        return (
          <div className="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
            <Trophy className="w-4 h-4" />
          </div>
        );
      case 'note':
        return (
          <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
            <FileText className="w-4 h-4" />
          </div>
        );
      default:
        return (
          <div className="w-8 h-8 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
            <Megaphone className="w-4 h-4" />
          </div>
        );
    }
  };

  const handleItemClick = (item: AppNotification) => {
    markNotificationRead(item.id);
    
    // If video URL exists, open it or navigate to video lectures
    if (item.type === 'youtube') {
      setActiveTab('video-lectures');
      setIsNotificationsOpen(false);
      return;
    }

    const target = item.actionTab || item.targetTab;
    if (target) {
      setActiveTab(target);
      setIsNotificationsOpen(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-start justify-center p-4 pt-16 sm:pt-20 animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-xl w-full border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/40">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-red-600 text-white shadow-md shadow-red-600/20">
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-black text-base sm:text-lg text-slate-900 dark:text-white">
                  सूचना केन्द्र (Notification Center)
                </h2>
                {unreadCount > 0 && (
                  <span className="px-2 py-0.5 rounded-full bg-red-600 text-white text-[11px] font-mono font-bold">
                    {unreadCount} नयाँ
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                युट्युब कक्षा, नयाँ प्रश्न सेट र आधिकारिक सूचनाहरू
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsNotificationsOpen(false)}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Tabs & Batch Actions */}
        <div className="px-4 py-2.5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2 flex-wrap bg-white dark:bg-slate-900 text-xs">
          <div className="flex items-center gap-1.5 overflow-x-auto py-1">
            {[
              { id: 'all', label: 'सबै (All)' },
              { id: 'unread', label: `नपढिएका (${unreadCount})` },
              { id: 'youtube', label: '📺 युट्युब भिडियो' },
              { id: 'quiz', label: '🏆 क्विज सेट' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-3 py-1.5 rounded-xl font-bold transition whitespace-nowrap cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {unreadCount > 0 && (
              <button
                onClick={markAllNotificationsRead}
                className="flex items-center gap-1 text-[11px] font-bold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                title="सबै सूचनाहरू पढेको चिन्ह लगाउनुहोस्"
              >
                <CheckCheck className="w-3.5 h-3.5" />
                <span>सबै पढियो</span>
              </button>
            )}
            {notifications.length > 0 && (
              <button
                onClick={clearAllNotifications}
                className="p-1.5 text-slate-400 hover:text-red-500 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30 transition cursor-pointer"
                title="सबै सूचनाहरू खाली गर्नुहोस्"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Notifications List */}
        <div className="p-4 divide-y divide-slate-100 dark:divide-slate-800/60 overflow-y-auto space-y-2 flex-1">
          {filteredNotifications.length === 0 ? (
            <div className="py-12 text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
                <Bell className="w-6 h-6" />
              </div>
              <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
                कुनै सूचना छैन
              </p>
              <p className="text-xs text-slate-400">
                यहाँ नयाँ युट्युब भिडियो, परीक्षा सूचना र क्विज अपडेट देखिनेछन्।
              </p>
            </div>
          ) : (
            filteredNotifications.map(item => (
              <div
                key={item.id}
                onClick={() => handleItemClick(item)}
                className={`p-3.5 rounded-2xl cursor-pointer transition-all flex items-start gap-3 relative ${
                  item.read 
                    ? 'bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800/40 opacity-80' 
                    : 'bg-blue-50/50 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-800/60 shadow-xs'
                }`}
              >
                {getNotificationIcon(item.type)}

                <div className="flex-1 space-y-1 min-w-0">
                  <div className="flex items-center gap-2 justify-between">
                    <div className="flex items-center gap-2 truncate">
                      <h4 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white truncate">
                        {item.title}
                      </h4>
                      {item.badge && (
                        <span className="px-1.5 py-0.2 rounded bg-red-600 text-white text-[9px] font-bold shrink-0 animate-pulse">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    {!item.read && (
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0" />
                    )}
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                    {item.message || item.description}
                  </p>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[10px] text-slate-400 font-medium">
                      {item.time || item.timestamp}
                    </span>
                    <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                      {item.type === 'youtube' ? 'भिडियो हेर्नुहोस्' : 'खोल्नुहोस्'}
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Notice */}
        <div className="p-3 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-200 dark:border-slate-800 text-center text-[11px] text-slate-500">
          <span>आधिकारिक युट्युब: </span>
          <span className="font-mono font-bold text-red-600">@bankingtayarinepal</span>
          <span> सँग प्रत्यक्ष सिङ्क गरिएको</span>
        </div>

      </div>
    </div>
  );
};
