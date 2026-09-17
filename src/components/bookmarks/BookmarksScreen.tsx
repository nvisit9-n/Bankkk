import React, { useState } from 'react';
import { Bookmark, Trash2, ArrowRight, BookOpen, CheckSquare, Newspaper } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { BookmarkItem, QuizSet } from '../../types';
import { MOCK_QUESTIONS, MOCK_STUDY_NOTES } from '../../data/mockData';

export const BookmarksScreen: React.FC = () => {
  const { bookmarks, toggleBookmark, openNoteReader, startQuiz, setActiveTab } = useApp();
  const [filterType, setFilterType] = useState<'all' | 'question' | 'note' | 'current-affair'>('all');

  const bookmarksList = bookmarks || [];
  const filtered = bookmarksList.filter(b => filterType === 'all' || b.type === filterType);

  const handleOpenItem = (item: BookmarkItem) => {
    if (item.type === 'note') {
      openNoteReader(item.targetId);
    } else if (item.type === 'question') {
      const q = MOCK_QUESTIONS.find(question => question.id === item.targetId);
      if (q) {
        const quizSet: QuizSet = {
          id: `bookmarked-quiz-${Date.now()}`,
          title: `बुकमार्क गरिएको प्रश्न अभ्यास`,
          description: `तपाईंले सुरक्षित गर्नुभएको प्रश्नको प्रत्यक्ष अभ्यास`,
          category: q.category,
          difficulty: q.difficulty,
          mode: 'practice',
          timeLimitMinutes: 3,
          questions: [q],
          badge: 'Bookmarked'
        };
        startQuiz(quizSet);
      }
    } else if (item.type === 'current-affair') {
      setActiveTab('current-affairs');
    }
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 text-xs font-bold mb-2">
          <Bookmark className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
          <span>सुरक्षित संग्रह (Saved Items)</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          बुकमार्क गरिएका सामग्रीहरू (Bookmarks)
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
          पुनरावलोकन तथा द्रुत रिभिजनका लागि तपाईंले सुरक्षित गर्नुभएका प्रश्न, नोट्स र समसामयिक लेखहरू।
        </p>
      </div>

      {/* Type Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {[
          { id: 'all', label: 'सबै (All)', count: bookmarksList.length },
          { id: 'question', label: 'प्रश्नहरू (Questions)', count: bookmarksList.filter(b => b.type === 'question').length },
          { id: 'note', label: 'नोट्स (Notes)', count: bookmarksList.filter(b => b.type === 'note').length },
          { id: 'current-affair', label: 'समसामयिक (Current Affairs)', count: bookmarksList.filter(b => b.type === 'current-affair').length }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setFilterType(tab.id as any)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap flex items-center gap-1.5 ${
              filterType === tab.id
                ? 'bg-amber-500 text-slate-950 shadow-sm'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
          >
            <span>{tab.label}</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-200/60 dark:bg-slate-700">
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Bookmarks List */}
      {filtered.length === 0 ? (
        <div className="p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <Bookmark className="w-12 h-12 mx-auto text-slate-300 dark:text-slate-600" />
          <h3 className="font-bold text-base text-slate-700 dark:text-slate-300">
            कुनै पनि सामग्री सुरक्षित गरिएको छैन
          </h3>
          <p className="text-xs text-slate-400">
            क्विज खेल्दा वा अध्ययन नोट्स पढ्दा Bookmark बटनमा थिची सामग्रीहरू सुरक्षित राख्न सक्नुहुन्छ।
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map(item => {
            let Icon = BookOpen;
            let typeLabel = 'Note';
            let badgeBg = 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300';

            if (item.type === 'question') {
              Icon = CheckSquare;
              typeLabel = 'Question';
              badgeBg = 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300';
            } else if (item.type === 'current-affair') {
              Icon = Newspaper;
              typeLabel = 'Current Affair';
              badgeBg = 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300';
            }

            return (
              <div
                key={item.id}
                className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between gap-4 hover:border-amber-500/50 transition group"
              >
                <div 
                  onClick={() => handleOpenItem(item)}
                  className="flex items-center gap-3.5 cursor-pointer flex-1 min-w-0"
                >
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-amber-50 dark:group-hover:bg-amber-950/60 group-hover:text-amber-600 transition">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${badgeBg}`}>
                        {typeLabel}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white truncate group-hover:text-amber-600 transition-colors mt-0.5">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => handleOpenItem(item)}
                    className="p-2 rounded-xl text-slate-400 hover:text-emerald-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                    title="Open"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => toggleBookmark(item.type, item.targetId, item.title, item.category)}
                    className="p-2 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition"
                    title="Remove Bookmark"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};
