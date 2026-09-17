import React, { useState, useMemo } from 'react';
import { 
  Building2, 
  Search, 
  X, 
  Play, 
  FileText, 
  Timer, 
  Sparkles, 
  Layers,
  Filter,
  CheckCircle2,
  Award
} from 'lucide-react';
import { 
  getAllSangathitSasthaSetMetas, 
  getSangathitTotalQuestionCount,
  SangathitSetMeta 
} from '../data/questionBank';
import { useApp } from '../context/AppContext';

export interface SetSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSet?: (setId: string) => void;
  onStartSet?: (setId: string) => void;
  handleStartSet?: (setId: string) => void;
}

export const SetSelectionModal: React.FC<SetSelectionModalProps> = ({
  isOpen,
  onClose,
  onSelectSet,
  onStartSet,
  handleStartSet: externalHandleStartSet
}) => {
  const { addToast, requireAuth } = useApp();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterDifficulty, setFilterDifficulty] = useState<string>('All');

  const allSetMetas = useMemo(() => getAllSangathitSasthaSetMetas(), []);
  const totalQuestionsCount = useMemo(() => getSangathitTotalQuestionCount(), []);

  // Filtered sets for the 50-set browser
  const filteredSets = useMemo(() => {
    return allSetMetas.filter((set) => {
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch = 
        q === '' || 
        set.title.toLowerCase().includes(q) ||
        set.nepaliTitle.toLowerCase().includes(q) ||
        `set ${set.setNumber}`.includes(q) ||
        `सेट ${set.setNumber}`.includes(q) ||
        String(set.setNumber) === q;

      const matchesDifficulty = filterDifficulty === 'All' || set.difficulty === filterDifficulty;

      return matchesSearch && matchesDifficulty;
    });
  }, [allSetMetas, searchQuery, filterDifficulty]);

  /**
   * Universal handler for launching a selected set with strict auth protection
   */
  const handleStartSet = (setId: string) => {
    if (!requireAuth(() => handleStartSet(setId), 'परीक्षा अभ्यास सेट सुरु गर्न कृपया पहिले लगइन गर्नुहोस्।')) {
      return;
    }
    if (externalHandleStartSet) {
      externalHandleStartSet(setId);
    }
    if (onStartSet) {
      onStartSet(setId);
    }
    if (onSelectSet) {
      onSelectSet(setId);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-5 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="set-selection-modal-title"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-[94%] sm:max-w-4xl max-h-[85vh] bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-3.5 sm:p-6 bg-royal-gradient border-b border-blue-400/30 text-white flex items-center justify-between shrink-0 shadow-soft-blue">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 text-white">
              <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <h3 id="set-selection-modal-title" className="text-sm sm:text-lg font-black text-white">
                  सङ्गठित संस्था ५० पूर्ण सेट हब
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-[#DC2626] text-white text-[9px] sm:text-[10px] font-black">
                  ५० सेट • {totalQuestionsCount.toLocaleString()} MCQs
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-blue-100 mt-0.5">
                तह ४ र तह ५ पाठ्यक्रम: प्रत्येक सेटमा ५० प्रश्न, ४५ मिनेट र नेगेटिभ मार्किङ।
              </p>
            </div>
          </div>

          <button
            type="button"
            id="close-set-selection-modal-btn"
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition cursor-pointer shrink-0"
            title="बन्द गर्नुहोस्"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-2.5 sm:p-4 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3 shrink-0">
          {/* Search input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              id="search-set-input"
              placeholder="सेट खोज्नुहोस् (उदा: Set 1, Set 25)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 sm:pl-9 pr-3 py-1.5 sm:py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-100 focus:outline-none focus:border-red-500 transition"
            />
            {searchQuery && (
              <button 
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs"
              >
                ✕
              </button>
            )}
          </div>

          {/* Difficulty filter tabs */}
          <div className="flex items-center gap-1 sm:gap-1.5 self-start sm:self-auto overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            {['All', 'Easy', 'Medium', 'Hard'].map((diff) => (
              <button
                key={diff}
                type="button"
                id={`filter-difficulty-${diff.toLowerCase()}`}
                onClick={() => setFilterDifficulty(diff)}
                className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold transition cursor-pointer whitespace-nowrap ${
                  filterDifficulty === diff
                    ? 'bg-[#DC2626] text-white shadow-sm'
                    : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                }`}
              >
                {diff === 'All' ? 'सबै सेटहरू' : diff === 'Easy' ? 'सजिलो' : diff === 'Medium' ? 'मध्यम' : 'कठिन'}
              </button>
            ))}
          </div>
        </div>

        {/* Sets Grid */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3.5">
          {filteredSets.length === 0 ? (
            <div className="col-span-full py-12 text-center text-slate-500 dark:text-slate-400 space-y-2">
              <Layers className="w-10 h-10 mx-auto opacity-40 text-red-500" />
              <p className="text-sm font-bold">खोजिएको सेट फेला परेन।</p>
              <button
                type="button"
                onClick={() => { setSearchQuery(''); setFilterDifficulty('All'); }}
                className="text-xs text-red-600 dark:text-red-400 font-bold underline"
              >
                सबै ५० सेटहरू रिसेट गर्नुहोस्
              </button>
            </div>
          ) : (
            filteredSets.map((set) => (
              <div
                key={set.id}
                id={`card-${set.id}`}
                className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 hover:border-red-400 dark:hover:border-red-500 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-black text-xs">
                      सेट {set.setNumber}
                    </span>
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                      set.difficulty === 'Easy' 
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300'
                        : set.difficulty === 'Medium'
                        ? 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300'
                        : 'bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300'
                    }`}>
                      {set.difficulty}
                    </span>
                  </div>

                  <h4 className="text-sm font-black text-slate-800 dark:text-slate-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {set.nepaliTitle}
                  </h4>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {set.description}
                  </p>

                  <div className="flex items-center gap-3 text-[11px] font-semibold text-slate-600 dark:text-slate-300 pt-1">
                    <span className="flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5 text-red-500" />
                      <span>५० प्रश्नहरू</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Timer className="w-3.5 h-3.5 text-red-500" />
                      <span>४५ मिनेट</span>
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  id={`btn-start-${set.id}`}
                  onClick={() => handleStartSet(set.id)}
                  className="mt-3 w-full py-2.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-md shadow-red-950/20 transition cursor-pointer active:scale-95"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>सेट {set.setNumber} सुरु गर्नुहोस्</span>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 sm:p-4 bg-slate-50 dark:bg-slate-800/80 border-t border-slate-200 dark:border-slate-700/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 shrink-0">
          <span>देखाउँदै: {filteredSets.length} / ५० सेटहरू (कुल {totalQuestionsCount.toLocaleString()} MCQs)</span>
          <button
            type="button"
            id="dismiss-set-selection-modal-btn"
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold hover:bg-slate-300 dark:hover:bg-slate-600 transition cursor-pointer"
          >
            बन्द गर्नुहोस्
          </button>
        </div>
      </div>
    </div>
  );
};
