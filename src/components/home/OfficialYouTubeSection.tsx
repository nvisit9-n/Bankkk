import React, { useState, useEffect } from 'react';
import { 
  Youtube, 
  Play, 
  ExternalLink, 
  RotateCw, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  X, 
  Flame, 
  Tv, 
  Share2,
  Check
} from 'lucide-react';
import { 
  fetchOfficialChannelVideos, 
  YouTubeVideoItem, 
  OFFICIAL_CHANNEL, 
  formatVideoDateNepali 
} from '../../services/youtubeService';

interface OfficialYouTubeSectionProps {
  onViewAll?: () => void;
  maxDisplay?: number;
}

export const OfficialYouTubeSection: React.FC<OfficialYouTubeSectionProps> = ({ 
  onViewAll,
  maxDisplay = 6
}) => {
  const [videos, setVideos] = useState<YouTubeVideoItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [activePlayerVideo, setActivePlayerVideo] = useState<YouTubeVideoItem | null>(null);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [lastSyncTime, setLastSyncTime] = useState<string>('भर्खरै');

  // Load videos on mount and automatically sync with channel feed
  const loadVideos = async (force = false) => {
    if (force) setIsRefreshing(true);
    else setIsLoading(true);

    try {
      const result = await fetchOfficialChannelVideos(force);
      setVideos(result.videos);
      setLastSyncTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    } catch (error) {
      console.error('Error fetching YouTube videos for @bankingtayarinepal:', error);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    loadVideos(false);

    // Auto-sync polling every 5 minutes while user is on dashboard
    const interval = setInterval(() => {
      loadVideos(true);
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const handleShareVideo = (video: YouTubeVideoItem, e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(video.link);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const displayedVideos = videos.slice(0, maxDisplay);

  return (
    <section 
      id="official-youtube-section" 
      className="space-y-4 pt-2"
      aria-label="Official YouTube Channel Feed"
    >
      {/* SECTION HEADER WITH OFFICIAL CHANNEL BRANDING & DIRECT SUBSCRIBE LINK */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-red-600/10 via-slate-900/5 to-red-950/10 dark:from-red-950/40 dark:via-slate-900/60 dark:to-red-900/20 border border-red-500/20 dark:border-red-900/50 shadow-sm backdrop-blur-sm">
        
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-[#DC2626] text-white flex items-center justify-center shadow-md shadow-red-600/30 shrink-0">
            <Youtube className="w-6 h-6 fill-current" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <span>भिडियो कक्षाहरू</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-950/70 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800">
                  Video Classes
                </span>
              </h2>
            </div>
            
            <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-600 dark:text-slate-400">
              <span className="font-semibold text-red-600 dark:text-red-400 flex items-center gap-1">
                {OFFICIAL_CHANNEL.handle}
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 fill-blue-500/20" />
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-[11px] text-slate-500">
                <RotateCw className={`w-3 h-3 ${isRefreshing ? 'animate-spin text-red-600' : ''}`} />
                <span>अटो-सिङ्क ({lastSyncTime})</span>
              </span>
            </div>
          </div>
        </div>

        {/* OFFICIAL ACTION BUTTONS: DIRECT SUBSCRIBE & REFRESH */}
        <div className="flex items-center gap-2 sm:self-center">
          <button
            type="button"
            onClick={() => loadVideos(true)}
            disabled={isRefreshing}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-red-600 hover:border-red-300 transition cursor-pointer disabled:opacity-50"
            title="नयाँ भिडियोहरू सिङ्क गर्नुहोस् (Sync Latest Videos)"
          >
            <RotateCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          </button>

          {/* REQUIRED DIRECT SUBSCRIBE LINK */}
          <a
            href={OFFICIAL_CHANNEL.channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="youtube-subscribe-header-btn"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold shadow-md shadow-red-600/25 transition-all transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer whitespace-nowrap"
            title="युट्युब च्यानल सब्स्क्राइब गर्नुहोस्"
          >
            <Youtube className="w-4 h-4 fill-white" />
            <span>युट्युब च्यानल सब्स्क्राइब गर्नुहोस्</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>
      </div>

      {/* VIDEO GRID */}
      {isLoading && videos.length === 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((n) => (
            <div 
              key={n} 
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 space-y-3 animate-pulse"
            >
              <div className="aspect-video bg-slate-200 dark:bg-slate-800 rounded-xl" />
              <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-3/4" />
              <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded w-1/2" />
            </div>
          ))}
        </div>
      ) : displayedVideos.length === 0 ? (
        <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-3">
          <Tv className="w-10 h-10 text-slate-400 mx-auto" />
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            {OFFICIAL_CHANNEL.name} का भिडियोहरू सिङ्क गरिँदैछ...
          </p>
          <button
            onClick={() => loadVideos(true)}
            className="px-4 py-2 rounded-xl bg-red-600 text-white text-xs font-bold"
          >
            पुनः प्रयास गर्नुहोस्
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setActivePlayerVideo(video)}
              className="group relative flex flex-col rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-400 dark:hover:border-red-500 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer hover:-translate-y-1"
            >
              {/* VIDEO THUMBNAIL CONTAINER */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback to high-res or standard resolution thumbnail
                    const target = e.currentTarget;
                    if (!target.src.includes('hqdefault')) {
                      target.src = `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;
                    }
                  }}
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* REQUIRED "नयाँ" (NEW) BADGE (Published within last 7 days) */}
                {video.isNew && (
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1 px-2.5 py-1 rounded-lg bg-gradient-to-r from-red-600 to-rose-600 text-white text-[11px] font-black uppercase tracking-wider shadow-lg shadow-red-600/50 border border-white/20 animate-pulse">
                    <Flame className="w-3 h-3 fill-amber-300 text-amber-300" />
                    <span>नयाँ (NEW)</span>
                  </div>
                )}

                {/* Published Date Tag (Bottom Right) */}
                {video.timeAgoNepali && (
                  <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-xs text-white text-[10px] font-medium flex items-center gap-1">
                    <Clock className="w-2.5 h-2.5 text-slate-300" />
                    <span>{video.timeAgoNepali}</span>
                  </div>
                )}

                {/* Centered Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#DC2626]/90 group-hover:bg-[#DC2626] group-hover:scale-110 text-white flex items-center justify-center shadow-xl shadow-red-950/40 transition-all duration-200">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              {/* VIDEO DETAILS */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] font-bold text-red-600 dark:text-red-400">
                    <span className="flex items-center gap-1">
                      <Youtube className="w-3.5 h-3.5 fill-current" />
                      <span>{OFFICIAL_CHANNEL.name}</span>
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {video.pubDate ? video.pubDate.split(' ')[0] : ''}
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white line-clamp-2 leading-snug group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {video.title}
                  </h3>
                </div>

                {/* ACTION BAR */}
                <div className="pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <button
                    type="button"
                    onClick={(e) => handleShareVideo(video, e)}
                    className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 flex items-center gap-1 transition"
                    title="भिडियो लिंक कपी गर्नुहोस्"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span className="text-[11px]">{copiedLink ? 'कपी भयो!' : 'साझेदारी'}</span>
                  </button>

                  <span className="font-bold text-red-600 dark:text-red-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>भिडियो हेर्नुहोस्</span>
                    <Play className="w-3 h-3 fill-current" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* FOOTER ACTION BAR */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
        <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 text-center sm:text-left">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
          <span>सबै कक्षाहरू आधिकारिक <strong>@bankingtayarinepal</strong> युट्युब च्यानलसँग प्रत्यक्ष सिङ्क छन्।</span>
        </p>

        {onViewAll && (
          <button
            type="button"
            onClick={onViewAll}
            className="text-xs font-bold text-red-600 dark:text-red-400 hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>थप सबै भिडियो कक्षाहरू हेर्नुहोस्</span>
            <span>→</span>
          </button>
        )}
      </div>

      {/* INLINE EMBED VIDEO PLAYER MODAL */}
      {activePlayerVideo && (
        <div 
          id="youtube-player-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActivePlayerVideo(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 text-white flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* MODAL HEADER */}
            <div className="p-4 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 truncate">
                <div className="p-2 rounded-xl bg-red-600 text-white shrink-0">
                  <Youtube className="w-5 h-5 fill-current" />
                </div>
                <div className="truncate">
                  <h3 className="text-sm sm:text-base font-bold text-white truncate">
                    {activePlayerVideo.title}
                  </h3>
                  <p className="text-xs text-red-400 flex items-center gap-1">
                    <span>{OFFICIAL_CHANNEL.name}</span>
                    <span className="text-slate-400">• {activePlayerVideo.timeAgoNepali}</span>
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActivePlayerVideo(null)}
                className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition cursor-pointer shrink-0"
                title="बन्द गर्नुहोस्"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* RESPONSIVE 16:9 YOUTUBE IFRAME PLAYER */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${activePlayerVideo.id}?autoplay=1&rel=0&modestbranding=1`}
                title={activePlayerVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* MODAL FOOTER WITH DIRECT SUBSCRIBE BUTTON & ACTIONS */}
            <div className="p-4 bg-slate-950/90 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <span>प्रकाशित: <strong className="text-white">{activePlayerVideo.pubDate || 'हालसालै'}</strong></span>
                {activePlayerVideo.isNew && (
                  <span className="px-2 py-0.5 rounded bg-red-600 text-white font-bold text-[10px]">
                    नयाँ
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                {/* DIRECT SUBSCRIBE BUTTON IN MODAL */}
                <a
                  href={OFFICIAL_CHANNEL.channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-red-700/40 transition cursor-pointer"
                  title="युट्युब च्यानल सब्स्क्राइब गर्नुहोस्"
                >
                  <Youtube className="w-4 h-4 fill-white" />
                  <span>युट्युब च्यानल सब्स्क्राइब गर्नुहोस्</span>
                </a>

                {/* DIRECT LINK TO WATCH ON YOUTUBE */}
                <a
                  href={activePlayerVideo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs flex items-center gap-1.5 transition cursor-pointer border border-white/15"
                  title="YouTube मा खोल्नुहोस्"
                >
                  <span>YouTube मा खोल्नुहोस्</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default OfficialYouTubeSection;
