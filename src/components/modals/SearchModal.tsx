import React, { useState, useEffect } from 'react';
import { Search, X, BookOpen, CheckSquare, Newspaper, Sparkles, ChevronRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { MOCK_QUESTIONS, MOCK_STUDY_NOTES, MOCK_PREMIUM_NOTES, MOCK_CURRENT_AFFAIRS } from '../../data/mockData';
import { QuizSet } from '../../types';

export const SearchModal: React.FC = () => {
  const { 
    isSearchOpen, 
    setIsSearchOpen, 
    openNoteReader, 
    openPremiumDetail, 
    startQuiz, 
    setActiveTab 
  } = useApp();
  
  const [query, setQuery] = useState('');

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsSearchOpen(false);
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setIsSearchOpen]);

  if (!isSearchOpen) return null;

  const trimmed = query.trim().toLowerCase();

  const matchedNotes = trimmed 
    ? MOCK_STUDY_NOTES.filter(n => n.title.toLowerCase().includes(trimmed) || n.subject.toLowerCase().includes(trimmed))
    : [];

  const matchedQuestions = trimmed
    ? MOCK_QUESTIONS.filter(q => q.questionNepali.toLowerCase().includes(trimmed) || (q.questionEnglish && q.questionEnglish.toLowerCase().includes(trimmed)))
    : [];

  const matchedPremium = trimmed
    ? MOCK_PREMIUM_NOTES.filter(p => {
        const authorName = typeof p.author === 'string' ? p.author : (p.author?.name || '');
        return p.title.toLowerCase().includes(trimmed) || authorName.toLowerCase().includes(trimmed);
      })
    : [];


  const matchedAffairs = trimmed
    ? MOCK_CURRENT_AFFAIRS.filter(a => a.title.toLowerCase().includes(trimmed) || a.summary.toLowerCase().includes(trimmed))
    : [];

  const totalResults = matchedNotes.length + matchedQuestions.length + matchedPremium.length + matchedAffairs.length;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-20 animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="खोज्नुहोस् (e.g. BAFIA, मौद्रिक नीति, BRS, Re-engineering, NRB Act)..."
            autoFocus
            className="flex-1 text-sm sm:text-base bg-transparent text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
          >
            ESC
          </button>
        </div>

        {/* Results Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {!trimmed ? (
            <div className="py-8 text-center text-xs text-slate-400 space-y-3">
              <p>खोज्नका लागि शब्द टाइप गर्नुहोस्।</p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {['BAFIA २०७३', 'मौद्रिक नीति', 'राष्ट्र बैंक ऐन', 'Re-engineering', 'CRR / SLR'].map(tag => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-emerald-950 transition text-slate-600 dark:text-slate-300 font-medium"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-8 text-center text-xs text-slate-400">
              "{query}" सँग सम्बन्धित कुनै परिणाम फेला परेन।
            </div>
          ) : (
            <div className="space-y-4">
              
              {/* Matched Study Notes */}
              {matchedNotes.length > 0 && (
                <div className="space-y-2">
                  <span className="text-[11px] font-extrabold uppercase text-slate-400 tracking-wider">
                    अध्ययन नोट्स ({matchedNotes.length})
                  </span>
                  {matchedNotes.map(n => (
                    <div
                      key={n.id}
                      onClick={() => {
                        setIsSearchOpen(false);
                        openNoteReader(n);
                      }}
                      className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 cursor-pointer transition flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <BookOpen className="w-4 h-4 text-emerald-600 shrink-0" />
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-slate-900 dark:text-white truncate">{n.title}</p>
                          <p className="text-[10px] text-slate-400">{n.subject} • {n.readTime}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                    </div>
                  ))}
                </div>
              )}

              {/* Matched Questions */}
              {matchedQuestions.length > 0 && (
                <div className="space-y-2">
                  <span className="text-[11px] font-extrabold uppercase text-slate-400 tracking-wider">
                    क्विज प्रश्नहरू ({matchedQuestions.length})
                  </span>
                  {matchedQuestions.slice(0, 4).map(q => (
                    <div
                      key={q.id}
                      onClick={() => {
                        setIsSearchOpen(false);
                        const singleSet: QuizSet = {
                          id: `search-q-${q.id}`,
                          title: 'खोजिएको प्रश्न अभ्यास',
                          description: 'चयन गरिएको प्रश्नको अभ्यास',
                          category: q.category,
                          difficulty: q.difficulty,
                          mode: 'practice',
                          timeLimitMinutes: 3,
                          questions: [q],
                          badge: 'Question'
                        };
                        startQuiz(singleSet);
                      }}
                      className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-blue-50 dark:hover:bg-blue-950/40 cursor-pointer transition flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <CheckSquare className="w-4 h-4 text-blue-600 shrink-0" />
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-slate-900 dark:text-white truncate">{q.questionNepali}</p>
                          <p className="text-[10px] text-slate-400">{q.category} • {q.difficulty}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                    </div>
                  ))}
                </div>
              )}

              {/* Matched Premium Books */}
              {matchedPremium.length > 0 && (
                <div className="space-y-2">
                  <span className="text-[11px] font-extrabold uppercase text-slate-400 tracking-wider">
                    प्रिमियम सामग्री ({matchedPremium.length})
                  </span>
                  {matchedPremium.map(p => (
                    <div
                      key={p.id}
                      onClick={() => {
                        setIsSearchOpen(false);
                        openPremiumDetail(p);
                      }}
                      className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-amber-50 dark:hover:bg-amber-950/40 cursor-pointer transition flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-slate-900 dark:text-white truncate">{p.title}</p>
                          <p className="text-[10px] text-slate-400">
                            {typeof p.author === 'string' ? p.author : (p.author?.name || 'विशेषज्ञ')} • रु. {p.discountPrice || p.price || p.originalPrice}
                          </p>
                        </div>

                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                    </div>
                  ))}
                </div>
              )}

              {/* Matched Current Affairs */}
              {matchedAffairs.length > 0 && (
                <div className="space-y-2">
                  <span className="text-[11px] font-extrabold uppercase text-slate-400 tracking-wider">
                    समसामयिक घटनाक्रम ({matchedAffairs.length})
                  </span>
                  {matchedAffairs.map(a => (
                    <div
                      key={a.id}
                      onClick={() => {
                        setIsSearchOpen(false);
                        setActiveTab('current-affairs');
                      }}
                      className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 cursor-pointer transition flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <Newspaper className="w-4 h-4 text-indigo-500 shrink-0" />
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-slate-900 dark:text-white truncate">{a.title}</p>
                          <p className="text-[10px] text-slate-400">{a.category} • {a.date}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                    </div>
                  ))}
                </div>
              )}

            </div>
          )}
        </div>

      </div>
    </div>
  );
};
