import React, { useState } from 'react';
import { 
  Sparkles, 
  Star, 
  BookOpen, 
  CheckCircle2, 
  Lock, 
  Eye, 
  ShoppingBag, 
  ShieldCheck, 
  Search, 
  ArrowRight,
  FileCheck2,
  Users
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { PremiumNote } from '../../types';
import { MOCK_PREMIUM_NOTES } from '../../data/mockData';
import { PurchaseModal } from './PurchaseModal';
import { DocumentReaderModal } from './DocumentReaderModal';

export const PremiumMarketplace: React.FC = () => {
  const { hasPurchased } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [purchasingNote, setPurchasingNote] = useState<PremiumNote | null>(null);
  const [readingNote, setReadingNote] = useState<PremiumNote | null>(null);

  const categories = ['All', 'Banking', 'Loksewa', 'NRB', 'Management', 'Economics'];

  const filteredNotes = MOCK_PREMIUM_NOTES.filter(note => {
    const matchesCat = selectedCategory === 'All' || note.category === selectedCategory;
    const authorName = typeof note.author === 'string' ? note.author : (note.author?.name || '');
    const desc = note.shortDescription || note.fullDescription || note.description || '';
    const matchesSearch = note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          authorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });


  return (
    <div className="space-y-8 pb-12">
      
      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white p-6 sm:p-10 border border-indigo-900/50 shadow-xl">
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>नेपालका वरिष्ठ प्रशिक्षकहरूद्वारा प्रमाणित</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
            प्रिमियम हस्तलिखित & रिभिजन नोट्स 💎
          </h1>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            नेपाल राष्ट्र बैंक, वाणिज्य बैंकहरू र लोकसेवा आयोगका प्रथम तथा द्वितीय पत्रका लागि सम्पूर्ण पाठ्यक्रम समेटिएका उच्च गुणस्तरीय प्रिमियम स्टडी मेटेरियल्स।
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400">
            <span className="flex items-center gap-1 text-amber-400">
              <Star className="w-4 h-4 fill-amber-400" /> औसत ४.९/५ रेटिङ
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" /> पहिलो ३ पृष्ठ निःशुल्क रिडिङ (Free Preview)
            </span>
          </div>
        </div>
      </div>

      {/* Filter Chips & Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="प्रिमियम नोट्स खोज्नुहोस्..."
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-amber-500"
          />
        </div>
      </div>

      {/* Premium Notes Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNotes.map((note) => {
          const isPurchased = hasPurchased(note.id);

          return (
            <div
              key={note.id}
              className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 transition-all flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl group"
            >
              {/* Card Banner / Tag */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[11px] font-bold text-slate-700 dark:text-slate-300">
                    {note.category}
                  </span>
                  
                  {isPurchased ? (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[11px] font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Purchased
                    </span>
                  ) : (
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 text-[11px] font-bold flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> Premium Pack
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors leading-snug">
                    {note.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                    लेखक: {typeof note.author === 'string' ? note.author : (note.author?.name || 'विज्ञ')}
                  </p>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                  {note.shortDescription || note.fullDescription || note.description}
                </p>

                {/* Rating & Pages Meta */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1 text-amber-500 font-bold">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span>{note.rating}</span>
                    <span className="text-slate-400 font-normal">({note.reviewCount || note.reviewsCount || 100})</span>
                  </div>

                  <div className="flex items-center gap-1 font-semibold">
                    <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                    <span>{note.pageCount || note.pages || 120} Pages</span>
                  </div>
                </div>

                {/* Highlights list */}
                <div className="space-y-1 pt-1">
                  {(note.whatYouWillGet || note.highlights || []).slice(0, 3).map((hl, hIdx) => (
                    <div key={hIdx} className="text-[11px] text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                      <span className="truncate">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & Action CTA */}
              <div className="p-6 bg-slate-50/70 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xl font-black text-emerald-600 dark:text-emerald-400">
                      रु. {note.discountPrice || note.price || note.originalPrice}
                    </span>
                    {note.originalPrice && (
                      <span className="text-xs text-slate-400 line-through">
                        रु. {note.originalPrice}
                      </span>
                    )}
                  </div>

                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold block">
                    Life-time Access
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setReadingNote(note)}
                    className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold transition flex items-center gap-1"
                    title="Free Preview"
                  >
                    <Eye className="w-4 h-4" />
                    <span className="hidden sm:inline">Preview</span>
                  </button>

                  {isPurchased ? (
                    <button
                      onClick={() => setReadingNote(note)}
                      className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs transition flex items-center gap-1.5 shadow-md shadow-emerald-600/20"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>पढ्नुहोस् (Read)</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => setPurchasingNote(note)}
                      className="px-4 py-2.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-black text-xs transition-all flex items-center gap-1.5 shadow-md shadow-red-600/20 active:scale-95 cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Buy Now</span>
                    </button>
                  )}
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Active Purchase Modal */}
      {purchasingNote && (
        <PurchaseModal
          note={purchasingNote}
          onClose={() => setPurchasingNote(null)}
          onSuccess={() => {
            const bought = purchasingNote;
            setPurchasingNote(null);
            setReadingNote(bought);
          }}
        />
      )}

      {/* Active Document/PDF Reader */}
      {readingNote && (
        <DocumentReaderModal
          note={readingNote}
          onClose={() => setReadingNote(null)}
          onOpenPurchase={() => {
            const target = readingNote;
            setReadingNote(null);
            setPurchasingNote(target);
          }}
        />
      )}

    </div>
  );
};
