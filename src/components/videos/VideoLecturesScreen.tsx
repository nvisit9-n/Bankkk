import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Youtube, 
  Search, 
  Clock, 
  Eye, 
  Share2, 
  Bookmark, 
  PlusCircle, 
  CheckCircle2, 
  ExternalLink,
  BookOpen, 
  Sparkles, 
  Filter, 
  FileText,
  Copy, 
  Check, 
  Trash2,
  ListVideo,
  Lock,
  Crown
} from 'lucide-react';
import { CURATED_VIDEO_LECTURES, VideoLecture } from '../../data/videoLectures';
import { SocialBrandIcon } from '../common/SocialIcons';
import { SOCIAL_CHANNELS } from '../../data/socialLinks';
import { safeStorage, safeCopyToClipboard } from '../../utils/safeHelpers';
import { fetchOfficialChannelVideos, OFFICIAL_CHANNEL } from '../../services/youtubeService';
import { PaidContentLock } from '../premium/PaidContentLock';
import { DbService } from '../../services/dbService';
import { useApp } from '../../context/AppContext';

const STORAGE_CUSTOM_VIDEOS_KEY = 'banking_tayari_custom_videos';

export const VideoLecturesScreen: React.FC = () => {
  const { user } = useApp();
  const [videos, setVideos] = useState<VideoLecture[]>(() => DbService.getAllVideos());
  const [activeVideo, setActiveVideo] = useState<VideoLecture>(() => {
    const all = DbService.getAllVideos();
    return all[0] || CURATED_VIDEO_LECTURES[0];
  });
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Custom video embed modal
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [newVideoUrl, setNewVideoUrl] = useState<string>('');
  const [newVideoTitle, setNewVideoTitle] = useState<string>('');
  const [newInstructor, setNewInstructor] = useState<string>('');
  const [newCategory, setNewCategory] = useState<VideoLecture['category']>('Banking');
  const [inputError, setInputError] = useState<string>('');

  // Quick scratchpad notes for active video
  const [lectureNotes, setLectureNotes] = useState<string>('');
  const [notesCopied, setNotesCopied] = useState<boolean>(false);

  // Load official channel videos and custom videos from local storage
  useEffect(() => {
    let customVideos: VideoLecture[] = [];
    try {
      const stored = safeStorage.getItem(STORAGE_CUSTOM_VIDEOS_KEY);
      if (stored) {
        customVideos = JSON.parse(stored);
      }
    } catch (e) {
      console.error('Failed to load custom videos', e);
    }

    // Fetch official channel uploads from @bankingtayarinepal
    fetchOfficialChannelVideos(false).then((res) => {
      const officialLectures: VideoLecture[] = res.videos.map((ov) => ({
        id: `official-${ov.id}`,
        title: ov.title,
        nepaliTitle: ov.title,
        instructor: 'Banking Tayari Nepal',
        instructorTitle: 'Official YouTube Channel (@bankingtayarinepal)',
        category: 'Banking',
        youtubeVideoId: ov.id,
        youtubeUrl: ov.link,
        duration: 'Class',
        views: 'Official',
        publishedDate: ov.isNew ? 'नयाँ (NEW)' : (ov.timeAgoNepali || 'हालसालै'),
        description: ov.description || 'बैंकिङ तथा लोकसेवा आयोग विशेष भिडियो कक्षा।',
        keyTakeaways: [
          'आधिकारिक पाठ्यक्रममा आधारित विश्लेषण',
          'विगतका परीक्षा प्रश्नहरूको गहन समाधान',
          'लोकसेवा तथा बैंकिङ तयारीका लागि प्रमाणित सामग्री'
        ],
        examTags: ['NRB L4 & L6', 'RBB Officer', 'Loksewa']
      }));

      // Merge: official videos first, then curated, then custom
      const combined = [...officialLectures, ...CURATED_VIDEO_LECTURES, ...customVideos];
      setVideos(combined);
      if (combined.length > 0) {
        setActiveVideo(combined[0]);
      }
    }).catch(() => {
      setVideos([...CURATED_VIDEO_LECTURES, ...customVideos]);
    });
  }, []);

  // Helper to extract YouTube ID or Playlist ID from URL
  const extractYoutubeId = (url: string): { videoId: string; playlistId?: string } | null => {
    const trimmed = url.trim();
    
    // Check if user entered just an 11-char ID
    if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
      return { videoId: trimmed };
    }

    try {
      const parsed = new URL(trimmed);
      const playlistId = parsed.searchParams.get('list') || undefined;

      if (parsed.hostname.includes('youtu.be')) {
        const videoId = parsed.pathname.slice(1).split('?')[0];
        return { videoId, playlistId };
      }

      if (parsed.hostname.includes('youtube.com')) {
        const videoId = parsed.searchParams.get('v') || '';
        return { videoId, playlistId };
      }
    } catch {
      // Fallback regex search
      const match = trimmed.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
      if (match && match[1]) {
        return { videoId: match[1] };
      }
    }

    return null;
  };

  const handleAddVideo = (e: React.FormEvent) => {
    e.preventDefault();
    setInputError('');

    if (!newVideoUrl) {
      setInputError('कृपया युट्युब भिडियो वा प्लेलिस्टको लिंक राख्नुहोस्');
      return;
    }

    const extracted = extractYoutubeId(newVideoUrl);
    if (!extracted || !extracted.videoId) {
      setInputError('अमान्य युट्युब लिंक! कृपया valid YouTube URL (उदा: https://www.youtube.com/watch?v=...) राख्नुहोस्।');
      return;
    }

    const newEntry: VideoLecture = {
      id: `custom-vid-${Date.now()}`,
      title: newVideoTitle || 'Custom Video Lecture',
      nepaliTitle: newVideoTitle || 'थपिएको भिडियो कक्षा',
      instructor: newInstructor || 'प्रशिक्षक',
      instructorTitle: 'Banking Tayari Expert',
      category: newCategory,
      youtubeVideoId: extracted.videoId,
      playlistId: extracted.playlistId,
      youtubeUrl: newVideoUrl,
      duration: 'Full Class',
      views: 'Student Added',
      publishedDate: 'नयाँ',
      description: 'प्रयोगकर्ता वा शिक्षकद्वारा थपिएको विशेष भिडियो सामग्री।',
      keyTakeaways: ['विद्यार्थीद्वारा थपिएको कक्षा', 'लोकसेवा तथा बैंकिङ अध्ययन सामग्री'],
      examTags: ['Custom Study', newCategory]
    };

    const updated = [newEntry, ...videos];
    setVideos(updated);
    setActiveVideo(newEntry);

    // Save custom videos to local storage
    try {
      const stored = safeStorage.getItem(STORAGE_CUSTOM_VIDEOS_KEY);
      const existing: VideoLecture[] = stored ? JSON.parse(stored) : [];
      safeStorage.setItem(STORAGE_CUSTOM_VIDEOS_KEY, JSON.stringify([newEntry, ...existing]));
    } catch (err) {
      console.error('Failed to save custom video', err);
    }

    // Reset and close
    setNewVideoUrl('');
    setNewVideoTitle('');
    setNewInstructor('');
    setIsAddModalOpen(false);
  };

  const handleDeleteCustomVideo = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    let shouldDelete = true;
    try {
      if (typeof window !== 'undefined' && typeof window.confirm === 'function') {
        shouldDelete = window.confirm('के तपाईं यो भिडियो हटाउन चाहनुहुन्छ?');
      }
    } catch {
      shouldDelete = true;
    }
    if (shouldDelete) {
      const filtered = videos.filter(v => v.id !== id);
      setVideos(filtered);
      if (activeVideo.id === id) {
        setActiveVideo(filtered[0] || CURATED_VIDEO_LECTURES[0]);
      }
      try {
        const stored = safeStorage.getItem(STORAGE_CUSTOM_VIDEOS_KEY);
        if (stored) {
          const existing: VideoLecture[] = JSON.parse(stored);
          const updatedCustom = existing.filter(v => v.id !== id);
          safeStorage.setItem(STORAGE_CUSTOM_VIDEOS_KEY, JSON.stringify(updatedCustom));
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleCopyNotes = async () => {
    if (!lectureNotes) return;
    const success = await safeCopyToClipboard(lectureNotes);
    if (success) {
      setNotesCopied(true);
      setTimeout(() => setNotesCopied(false), 2000);
    }
  };

  // Filtered videos list
  const filteredVideos = videos.filter(v => {
    const matchesCat = selectedCategory === 'All' || v.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.nepaliTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-8 pb-16">
      
      {/* Top Banner & Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0B2046] via-[#152B52] to-[#1E3A8A] text-white shadow-xl relative overflow-hidden border-b-4 border-[#C8102E]">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/90 backdrop-blur text-white text-xs font-black shadow-sm">
              <Youtube className="w-3.5 h-3.5 fill-white" />
              <span>Video Lectures / युट्युब कक्षाहरू</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              बैंकिङ तथा लोकसेवा भिडियो कक्षाहरू
            </h1>

            <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed">
              अनुभवी निर्देशक, चार्टर्ड एकाउन्टेन्ट र उप-सचिवहरूद्वारा प्रस्तुत नेपाल राष्ट्र बैंक, BAFIA, मौद्रिक नीति र लोकसेवा प्रथम तथा द्वितीय पत्रका विस्तृत भिडियो कक्षाहरू।
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="px-4 py-2.5 rounded-2xl bg-[#C8102E] hover:bg-[#A50D24] text-white font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all hover:scale-[1.02]"
            >
              <PlusCircle className="w-4 h-4" />
              <span>भिडियो / प्लेलिस्ट लिंक थप्नुहोस्</span>
            </button>

            <a
              href="https://www.youtube.com/@bankingtayarinepal"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-2xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all hover:scale-[1.02] cursor-pointer"
              title="युट्युब च्यानल सब्स्क्राइब गर्नुहोस्"
            >
              <Youtube className="w-4 h-4 fill-white" />
              <span>युट्युब च्यानल सब्स्क्राइब गर्नुहोस्</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Video Viewing Framework */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Left Column: Active Video Player & Interactive Companion (2 Cols) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Responsive YouTube Player Card */}
          {activeVideo.isPremium ? (
            <PaidContentLock resourceTitle={activeVideo.nepaliTitle || activeVideo.title} resourceType="video">
              <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                {/* 16:9 Aspect Ratio Iframe */}
                <div className="relative w-full pb-[56.25%] bg-black">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeVideoId}?rel=0&modestbranding=1&enablejsapi=1`}
                    title={activeVideo.nepaliTitle}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full border-0"
                  />
                </div>
              </div>
            </PaidContentLock>
          ) : (
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
              {/* 16:9 Aspect Ratio Iframe */}
              <div className="relative w-full pb-[56.25%] bg-black">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeVideoId}?rel=0&modestbranding=1&enablejsapi=1`}
                  title={activeVideo.nepaliTitle}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full border-0"
                />
              </div>

              {/* Video Details Bar */}
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-[#C8102E] text-white text-[10px] font-black uppercase tracking-wider">
                      {activeVideo.category}
                    </span>
                    {(activeVideo.examTags || []).map(tag => (
                      <span key={tag} className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px] font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {activeVideo.duration}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" />
                      {activeVideo.views}
                    </span>
                  </div>
                </div>

                <div>
                  <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white leading-snug">
                    {activeVideo.nepaliTitle}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                    {activeVideo.title}
                  </p>
                </div>

                {/* Instructor Badge */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0B2046] flex items-center justify-center text-white font-bold text-sm shadow-sm">
                      {activeVideo.instructor.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">
                        {activeVideo.instructor}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {activeVideo.instructorTitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={activeVideo.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-red-50 dark:bg-red-950/50 text-red-600 dark:text-red-400 hover:bg-red-100 transition-colors flex items-center gap-1.5 text-xs font-bold"
                      title="Open on YouTube"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">YouTube मा खोल्नुहोस्</span>
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800">
                  {activeVideo.description}
                </p>

                {/* Timestamps / Chapters */}
                {activeVideo.timestamps && activeVideo.timestamps.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <ListVideo className="w-4 h-4 text-blue-600" />
                      <span>कक्षाका विषयगत समयसूचक (Lecture Timestamps):</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {(activeVideo.timestamps || []).map((ts, idx) => (
                        <div
                          key={idx}
                          className="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 text-xs flex items-center justify-between gap-2 hover:border-blue-400 transition-all"
                        >
                          <span className="text-slate-700 dark:text-slate-200 truncate font-medium">
                            {ts.title}
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950 text-[#0B2046] dark:text-blue-300 font-bold font-mono text-[11px] shrink-0">
                            {ts.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Takeaways */}
                {activeVideo.keyTakeaways && activeVideo.keyTakeaways.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      मुख्य सिकाइ बुँदाहरू (Key Takeaways):
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                      {(activeVideo.keyTakeaways || []).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            </div>
          )}

          {/* In-Lecture Notes Scratchpad */}
          <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-600" />
                <span>भिडियो हेर्दा नोट लेख्ने ठाउँ (Study Scratchpad)</span>
              </h3>
              {lectureNotes && (
                <button
                  onClick={handleCopyNotes}
                  className="text-xs font-bold px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 hover:bg-blue-100 transition flex items-center gap-1"
                >
                  {notesCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{notesCopied ? 'कपी गरियो!' : 'नोट कपी गर्नुहोस्'}</span>
                </button>
              )}
            </div>
            <textarea
              value={lectureNotes}
              onChange={(e) => setLectureNotes(e.target.value)}
              placeholder="यो भिडियो हेर्दै गर्दा महत्वपूर्ण दफा, तथ्यांक वा सूत्रहरू यहाँ टिपोट गर्नुहोस्..."
              className="w-full h-28 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

        </div>

        {/* Right Column: Playlist & Video Selector (1 Col) */}
        <div className="space-y-6">
          
          {/* Search & Category Filter Box */}
          <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
            
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                <ListVideo className="w-4 h-4 text-red-600" />
                <span>भिडियो कक्षाहरू सूची ({filteredVideos.length})</span>
              </h3>
              <button
                onClick={() => setIsAddModalOpen(true)}
                className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>नयाँ थप्नुहोस्</span>
              </button>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="भिडियो वा विषय खोज्नुहोस्..."
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 flex-wrap">
              {[
                { id: 'All', label: 'सबै (All)' },
                { id: 'Banking', label: 'बैंकिङ ऐन' },
                { id: 'Loksewa', label: 'लोकसेवा' },
                { id: 'Accounting', label: 'हिसाब/लेखा' },
                { id: 'Economy', label: 'मौद्रिक नीति' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-2.5 py-1 rounded-xl text-[11px] font-bold transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-[#0B2046] text-white shadow-2xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

          </div>

          {/* Videos Scrollable List */}
          <div className="space-y-3 max-h-[750px] overflow-y-auto custom-scrollbar pr-1">
            {filteredVideos.map((video) => {
              const isActive = activeVideo.id === video.id;

              return (
                <div
                  key={video.id}
                  onClick={() => setActiveVideo(video)}
                  className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                    isActive
                      ? 'bg-blue-50/80 dark:bg-blue-950/40 border-[#0B2046] dark:border-blue-500 shadow-sm'
                      : 'bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xs'
                  }`}
                >
                  <div className="flex gap-3">
                    {/* Video Thumbnail Preview */}
                    <div className="relative w-24 h-16 rounded-xl overflow-hidden bg-slate-900 shrink-0 shadow-2xs">
                      <img
                        src={`https://img.youtube.com/vi/${video.youtubeVideoId}/mqdefault.jpg`}
                        alt={video.nepaliTitle}
                        className="w-full h-full object-cover opacity-90"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isActive ? 'bg-[#C8102E] text-white' : 'bg-white/80 text-slate-900'}`}>
                          <Play className="w-3 h-3 fill-current ml-0.5" />
                        </div>
                      </div>
                      <span className="absolute bottom-1 right-1 px-1 py-0.2 rounded bg-black/80 text-white text-[9px] font-mono font-bold">
                        {video.duration}
                      </span>
                      {video.publishedDate?.includes('नयाँ') && (
                        <span className="absolute top-1 left-1 px-1 py-0.2 rounded bg-red-600 text-white text-[8px] font-bold">
                          नयाँ
                        </span>
                      )}
                    </div>

                    {/* Meta info */}
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-center justify-between gap-1">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-bold text-[#C8102E] uppercase">
                            {video.category}
                          </span>
                          {video.isPremium ? (
                            <span className="px-1.5 py-0.2 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 text-[9px] font-black flex items-center gap-0.5">
                              <Lock className="w-2.5 h-2.5" />
                              <span>PRO</span>
                            </span>
                          ) : (
                            <span className="px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[9px] font-bold">
                              FREE
                            </span>
                          )}
                          {video.publishedDate?.includes('नयाँ') && (
                            <span className="px-1.5 py-0.2 rounded-full bg-red-100 dark:bg-red-950/80 text-red-600 text-[9px] font-extrabold">
                              नयाँ (NEW)
                            </span>
                          )}
                        </div>
                        {video.id.startsWith('custom-') && (
                          <button
                            onClick={(e) => handleDeleteCustomVideo(video.id, e)}
                            className="text-slate-400 hover:text-rose-600 p-0.5"
                            title="Delete custom video"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        )}
                      </div>

                      <h4 className={`text-xs font-bold leading-tight line-clamp-2 ${isActive ? 'text-[#0B2046] dark:text-blue-300' : 'text-slate-900 dark:text-white'}`}>
                        {video.nepaliTitle}
                      </h4>

                      <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                        {video.instructor}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Social Community Callout Card */}
          <div className="p-5 rounded-3xl bg-royal-gradient text-white space-y-3.5 shadow-soft-blue border border-blue-400/30">
            <div className="flex items-center gap-2 text-amber-400">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">नयाँ भिडियो र PDF नोट्स</span>
            </div>

            <p className="text-xs text-blue-100 leading-relaxed">
              प्रत्येक नयाँ भिडियो कक्षाको आधिकारिक PDF नोट र अभ्यास प्रश्नपत्र हाम्रा सामाजिक सञ्जाल समूहहरूमा तुरुन्त उपलब्ध हुन्छ।
            </p>

            <div className="flex items-center gap-2 pt-1 flex-wrap">
              {SOCIAL_CHANNELS.map(ch => (
                <a
                  key={ch.id}
                  href={ch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-xl bg-white/10 hover:bg-white text-white hover:text-slate-950 transition-all shadow-xs`}
                  title={`${ch.name} - ${ch.nepaliName}`}
                >
                  <SocialBrandIcon id={ch.id} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Embed Custom YouTube Video Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-4">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-red-50 dark:bg-red-950 text-red-600">
                  <Youtube className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                    युट्युब भिडियो वा प्लेलिस्ट थप्नुहोस्
                  </h3>
                  <p className="text-xs text-slate-500">Embed Any YouTube Link or Playlist</p>
                </div>
              </div>
              <button 
                onClick={() => setIsAddModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddVideo} className="space-y-3.5">
              
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  YouTube Video / Playlist URL *
                </label>
                <input
                  type="text"
                  value={newVideoUrl}
                  onChange={(e) => setNewVideoUrl(e.target.value)}
                  placeholder="https://www.youtube.com/watch?v=... वा https://youtu.be/..."
                  className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
                <p className="text-[10px] text-slate-400 mt-1">
                  कुनै पनि युट्युब भिडियो, Shorts वा प्लेलिस्टको लिंक यहाँ राख्नुहोस्।
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  कक्षाको शीर्षक (Video Title)
                </label>
                <input
                  type="text"
                  value={newVideoTitle}
                  onChange={(e) => setNewVideoTitle(e.target.value)}
                  placeholder="उदा: नेपालको भूगोल तथा आर्थिक विकास"
                  className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    प्रशिक्षकको नाम (Instructor)
                  </label>
                  <input
                    type="text"
                    value={newInstructor}
                    onChange={(e) => setNewInstructor(e.target.value)}
                    placeholder="उदा: सुजन अधिकारी"
                    className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    विधा (Category)
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as any)}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Banking">Banking (बैंकिङ)</option>
                    <option value="Loksewa">Loksewa (लोकसेवा)</option>
                    <option value="Accounting">Accounting (हिसाब)</option>
                    <option value="Economy">Economy (अर्थतन्त्र)</option>
                    <option value="CurrentAffairs">Current Affairs</option>
                  </select>
                </div>
              </div>

              {inputError && (
                <p className="text-xs text-rose-600 dark:text-rose-400 font-semibold">
                  {inputError}
                </p>
              )}

              <div className="pt-2 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  रद्द गर्नुहोस्
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#C8102E] hover:bg-[#A50D24] text-white text-xs font-black shadow-md transition"
                >
                  भिडियो थप्नुहोस्
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
};
