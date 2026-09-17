import React, { useState } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut, 
  Lock, 
  Sparkles, 
  Bookmark, 
  Share2, 
  FileText, 
  Download, 
  Check, 
  Layers,
  ArrowLeft
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { PremiumNote } from '../../types';
import { MarkdownRenderer } from '../common/MarkdownRenderer';

interface DocumentReaderModalProps {
  note: PremiumNote;
  onClose: () => void;
  onOpenPurchase: () => void;
}

export const DocumentReaderModal: React.FC<DocumentReaderModalProps> = ({
  note,
  onClose,
  onOpenPurchase
}) => {
  const { user, hasPurchased, toggleBookmark, isBookmarked, requireAuth } = useApp();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [copied, setCopied] = useState<boolean>(false);
  const [showToc, setShowToc] = useState<boolean>(false);

  const isUserAuthenticated = !!user && !user.isGuest && !!user.email;

  React.useEffect(() => {
    if (!isUserAuthenticated) {
      requireAuth(() => {}, 'सामग्री पढ्न, पीडीएफ डाउनलोड गर्न र परीक्षा दिन लगइन गर्नुहोस्।');
    }
  }, [isUserAuthenticated, requireAuth]);

  if (!note) return null;

  if (!isUserAuthenticated) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
        <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl text-center space-y-5 max-w-md w-full border border-slate-200 dark:border-slate-800 shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/80 flex items-center justify-center mx-auto text-amber-600 dark:text-amber-400">
            <Sparkles className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
              प्रिमियम अध्ययन सामग्री लक गरिएको छ
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
              विस्तृत परीक्षा तयारी नोट्स, आधिकारिक अध्ययन सामग्री तथा पीडीएफ पहुँचका लागि कृपया आफ्नो खातामा लगइन गर्नुहोस्।
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => requireAuth(() => {}, 'सामग्री पढ्न, पीडीएफ डाउनलोड गर्न र परीक्षा दिन लगइन गर्नुहोस्।')}
              className="flex-1 py-3 px-4 rounded-xl bg-[#0B2046] hover:bg-[#153366] text-white font-bold text-sm shadow-md transition flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>लगइन गर्नुहोस्</span>
            </button>
            <button
              onClick={onClose}
              className="py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-sm transition"
            >
              बन्द गर्नुहोस्
            </button>
          </div>
        </div>
      </div>
    );
  }

  const isPurchased = hasPurchased(note.id);

  // Derive document pages safely from fullDocumentPages, previewPages, or samplePages
  const rawPages: Array<{ pageNumber: number; title: string; content: string; isLocked?: boolean; notes?: string[] }> = 
    (isPurchased && note.fullDocumentPages && note.fullDocumentPages.length > 0)
      ? note.fullDocumentPages
      : (note.previewPages && note.previewPages.length > 0)
        ? note.previewPages.map((p, idx) => ({ ...p, isLocked: !isPurchased && idx >= 2 }))
        : (note as any).samplePages && (note as any).samplePages.length > 0
          ? (note as any).samplePages
          : [
              {
                pageNumber: 1,
                title: note.title,
                content: note.fullDescription || note.shortDescription || note.description || 'विस्तृत बैंकिङ तथा लोकसेवा अध्ययन सामग्री।',
                isLocked: false
              },
              {
                pageNumber: 2,
                title: 'मुख्य सिकाइ तथा परीक्षा तयारी बुँदाहरू (Key Learning & Exam Points)',
                content: (note.whatYouWillGet || []).join('\n') || 'नेपालका बैंकिङ तथा वित्तीय संस्थाहरूको परीक्षा पाठ्यक्रममा आधारित विशेष टिपोट।',
                isLocked: false
              },
              {
                pageNumber: 3,
                title: 'अध्याय १: विस्तृत विश्लेषणात्मक खण्ड (Comprehensive Analytical Chapter)',
                content: 'यो खण्ड प्रिमियम प्रयोगकर्ताहरूका लागि मात्र पूर्ण रूपमा उपलब्ध छ। कृपया पूर्ण पहुँचका लागि प्याक अनलक गर्नुहोस्।',
                isLocked: !isPurchased
              }
            ];

  const totalPages = Math.max(1, rawPages.length);
  const activePageData = rawPages[currentPage - 1] || rawPages[0];
  const isPageLocked = !isPurchased && !!activePageData?.isLocked;
  const bookmarked = isBookmarked('note', note.id);

  const authorDisplayName = typeof note.author === 'string' 
    ? note.author 
    : (note.author?.name || 'बैंकिङ तयारी विशेषज्ञ');

  const pageCountDisplay = note.pages || note.pageCount || totalPages;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex flex-col justify-between overflow-hidden animate-fadeIn">
      
      {/* Top Document Toolbar */}
      <header className="h-16 px-4 sm:px-6 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between text-slate-900 dark:text-white shrink-0">
        
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm sm:text-base truncate">
                {note.title}
              </span>
              {isPurchased ? (
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold">
                  ✓ Full Unlocked
                </span>
              ) : (
                <span className="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 text-[10px] font-bold">
                  Free Preview (Sample)
                </span>
              )}
            </div>
            <p className="text-xs text-slate-400">
              लेखक: {authorDisplayName} • कुल {pageCountDisplay} पृष्ठहरू
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          
          {/* Zoom Controls */}
          <div className="hidden sm:flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-xl text-xs text-slate-600 dark:text-slate-300">
            <button 
              onClick={() => setZoomLevel(prev => Math.max(80, prev - 10))} 
              className="p-1 hover:text-emerald-600"
              title="Zoom out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="w-10 text-center font-mono font-bold">{zoomLevel}%</span>
            <button 
              onClick={() => setZoomLevel(prev => Math.min(130, prev + 10))} 
              className="p-1 hover:text-emerald-600"
              title="Zoom in"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Bookmark Button */}
          <button
            onClick={() => toggleBookmark('note', note.id, note.title, note.category)}
            className={`p-2 rounded-xl border transition ${
              bookmarked
                ? 'bg-amber-500 text-white border-amber-500'
                : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-white' : ''}`} />
          </button>

          {/* Share */}
          <button
            onClick={handleShare}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
          </button>

          {/* Unlock Button if not purchased */}
          {!isPurchased && (
            <button
              onClick={onOpenPurchase}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-xs font-black shadow-sm transition hover:scale-105"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Unlock Full (रु. {note.price})</span>
            </button>
          )}

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-800 dark:hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

      </header>

      {/* Document View Canvas */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-8 flex justify-center bg-slate-900/60 relative">
        
        {/* Document Page Canvas */}
        <div 
          className="w-full max-w-3xl min-h-[700px] bg-white text-slate-900 rounded-2xl shadow-2xl p-6 sm:p-12 relative flex flex-col justify-between transition-all select-none"
          style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
        >
          {/* Official Security Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5 rotate-[-25deg]">
            <div className="text-center font-black text-4xl sm:text-6xl text-slate-900 leading-tight">
              Banking Tayari Nepal<br />
              {user.name} • {user.email}
            </div>
          </div>

          {/* Header of Paper */}
          <div className="border-b-2 border-emerald-600/30 pb-4 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                {note.category} • Official Study Notes
              </span>
              <h1 className="text-xl sm:text-2xl font-black text-slate-900">
                {note.title}
              </h1>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-slate-500">
                पृष्ठ: {activePageData ? activePageData.pageNumber : currentPage} / {note.pages}
              </span>
            </div>
          </div>

          {/* Page Body Content */}
          <div className="py-6 flex-1 relative">
            {isPageLocked ? (
              /* Locked Page Overlay */
              <div className="absolute inset-0 backdrop-blur-md bg-white/80 rounded-xl flex flex-col items-center justify-center p-6 text-center space-y-4">
                <div className="w-16 h-16 rounded-3xl bg-amber-500/20 text-amber-600 flex items-center justify-center shadow-inner">
                  <Lock className="w-8 h-8" />
                </div>

                <div className="max-w-md space-y-1">
                  <h3 className="text-xl font-black text-slate-900">
                    यो पृष्ठ प्रिमियम खरिदकर्ताहरूका लागि मात्र उपलब्ध छ
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    यस पुस्तकका बाँकी {note.pages - 3} वटा सबै पृष्ठहरू, हस्तलिखित सुत्रहरू, चार्टहरू र सम्पूर्ण मोड्युल अध्ययन गर्न प्याक अनलक गर्नुहोस्।
                  </p>
                </div>

                <button
                  onClick={onOpenPurchase}
                  className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black text-sm shadow-lg shadow-amber-500/30 transition transform hover:scale-105 flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>रु. {note.price} मा तत्काल पूर्ण प्याक अनलक गर्नुहोस्</span>
                </button>
              </div>
            ) : (
              /* Unlocked Content */
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-emerald-800 border-l-4 border-emerald-600 pl-3">
                  {activePageData?.title || `अध्याय १: सामान्य सिद्धान्त र पृष्ठभूमि`}
                </h3>
                <div className="text-sm sm:text-base leading-relaxed text-slate-700">
                  <MarkdownRenderer content={activePageData?.content || ''} />
                </div>

                {/* Decorative handwritten formula box simulation */}
                <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 text-xs sm:text-sm text-amber-900 font-sans space-y-1">
                  <span className="font-bold flex items-center gap-1 text-amber-800">
                    📌 लोकसेवा तथा बैंकिङ परीक्षा मुख्य टिप्स:
                  </span>
                  <p>
                    मौद्रिक उपकरण तथा नियामकीय अनुपातहरू (CRR: 4%, SLR: 12% for Commercial Banks) सम्बन्धी तथ्यहरूलाई बुँदागत रूपमा परीक्षा पुस्तिकामा उल्लेख गर्दा थप नम्बर प्राप्त हुन्छ।
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Footer of Paper */}
          <div className="border-t border-slate-200 pt-3 flex items-center justify-between text-[11px] text-slate-500 font-mono">
            <span>Banking Tayari Nepal Publication</span>
            <span>पृष्ठ {activePageData ? activePageData.pageNumber : currentPage}</span>
            <span>All Rights Reserved</span>
          </div>

        </div>

      </div>

      {/* Bottom Paging Controller */}
      <footer className="h-16 px-4 sm:px-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0">
        <button
          onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs disabled:opacity-40 hover:bg-slate-100 dark:hover:bg-slate-800 transition flex items-center gap-1"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>अघिल्लो पृष्ठ</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
            Page {currentPage} of {totalPages}
          </span>
          {!isPurchased && (
            <span className="text-[11px] text-amber-600 dark:text-amber-400 font-semibold hidden sm:inline">
              (Free Sample Pages)
            </span>
          )}
        </div>

        <button
          onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs disabled:opacity-40 hover:bg-slate-100 dark:hover:bg-slate-800 transition flex items-center gap-1"
        >
          <span>पछिल्लो पृष्ठ</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </footer>

    </div>
  );
};
