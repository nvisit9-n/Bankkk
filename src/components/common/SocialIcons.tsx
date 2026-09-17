import React from 'react';
import { SOCIAL_CHANNELS, SocialChannel } from '../../data/socialLinks';
import { ExternalLink } from 'lucide-react';

export const SocialBrandIcon: React.FC<{ id: SocialChannel['id']; className?: string }> = ({ 
  id, 
  className = 'w-5 h-5' 
}) => {
  if (id === 'youtube') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="YouTube">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    );
  }

  if (id === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Facebook">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    );
  }

  if (id === 'tiktok') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="TikTok">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
      </svg>
    );
  }

  if (id === 'whatsapp') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="WhatsApp">
        <path d="M17.472 14.382c-.301-.15-1.776-.876-2.05-.976-.275-.1-.475-.15-.675.15-.2.3-.775.976-.95 1.176-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.414-1.49-1.02-.91-1.708-2.035-1.908-2.38-.2-.35-.02-.538.13-.688.136-.135.301-.35.451-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.585-.492-.506-.675-.515-.175-.008-.375-.01-.575-.01s-.525.075-.8.375c-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.115 3.23 5.124 4.53.715.31 1.273.495 1.708.633.718.228 1.371.196 1.888.118.577-.087 1.776-.725 2.025-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35zM12.04 21.78a9.8 9.8 0 0 1-4.996-1.37l-.358-.212-3.716.974.992-3.621-.233-.371A9.782 9.782 0 0 1 2.25 12.02C2.25 6.634 6.64 2.25 12.03 2.25c2.61 0 5.068 1.018 6.915 2.868A9.73 9.73 0 0 1 21.81 12.02c0 5.388-4.39 9.76-9.77 9.76zM12.03 0C5.397 0 0 5.393 0 12.02c0 2.115.553 4.18 1.603 6.002L0 24l6.155-1.614A11.968 11.968 0 0 0 12.03 24c6.632 0 12.03-5.393 12.03-12.02C24.06 5.393 18.662 0 12.03 0z"/>
      </svg>
    );
  }

  // Telegram
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Telegram">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  );
};

// Compact Bar of Icons (for Sidebar or Headers)
export const SocialLinksBar: React.FC<{ 
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
}> = ({ size = 'md', className = '' }) => {
  const iconSize = size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5';
  const btnPadding = size === 'sm' ? 'p-1.5' : size === 'lg' ? 'p-2.5' : 'p-2';

  return (
    <div className={`flex items-center gap-1.5 flex-wrap ${className}`}>
      {SOCIAL_CHANNELS.map(ch => (
        <a
          key={ch.id}
          href={ch.url}
          target="_blank"
          rel="noopener noreferrer"
          title={`${ch.name} (${ch.nepaliName}) - ${ch.badge}`}
          className={`${btnPadding} rounded-xl transition-all duration-200 text-slate-500 hover:text-white dark:text-slate-400 hover:scale-110 shadow-2xs ${
            ch.id === 'youtube' ? 'hover:bg-[#FF0000]' :
            ch.id === 'facebook' ? 'hover:bg-[#1877F2]' :
            ch.id === 'tiktok' ? 'hover:bg-black dark:hover:bg-white dark:hover:text-black' :
            ch.id === 'whatsapp' ? 'hover:bg-[#25D366]' :
            'hover:bg-[#229ED9]'
          } bg-slate-100 dark:bg-slate-800/80 hover:shadow-sm`}
        >
          <SocialBrandIcon id={ch.id} className={iconSize} />
          <span className="sr-only">{ch.name}</span>
        </a>
      ))}
    </div>
  );
};

// Rich Interactive Grid / List Cards (for Profile & Video Screens)
export const SocialCommunityCards: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 ${className}`}>
      {SOCIAL_CHANNELS.map(ch => (
        <a
          key={ch.id}
          href={ch.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs hover:shadow-md transition-all hover:-translate-y-0.5 flex flex-col justify-between relative overflow-hidden"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white transition-transform group-hover:scale-105 shadow-sm ${
                ch.id === 'youtube' ? 'bg-[#FF0000]' :
                ch.id === 'facebook' ? 'bg-[#1877F2]' :
                ch.id === 'tiktok' ? 'bg-black text-white' :
                ch.id === 'whatsapp' ? 'bg-[#25D366]' :
                'bg-[#229ED9]'
              }`}>
                <SocialBrandIcon id={ch.id} className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-black text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                  {ch.name}
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors" />
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
                  {ch.handle}
                </p>
              </div>
            </div>

            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${ch.bgLight}`}>
              {ch.badge}
            </span>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            {ch.description}
          </p>

          <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
            <span>जोडिनुहोस् (Join Channel)</span>
            <span className="text-sm transition-transform group-hover:translate-x-1">→</span>
          </div>
        </a>
      ))}
    </div>
  );
};
