import React, { useState, useMemo } from 'react';
import {
  Building2,
  Briefcase,
  Languages,
  Calculator,
  ShieldCheck,
  TrendingUp,
  Scale,
  Compass,
  Landmark,
  Radio,
  Play,
  CheckCircle2,
  RotateCcw,
  Sparkles,
  Info,
  ChevronRight,
  Layers,
  Award,
  BookOpen
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import {
  SYLLABUS_MODULES,
  getUniqueRandomQuestions,
  convertQuizQuestionToQuestion,
  getModuleUnseenCount,
  resetCategoryAttemptHistory,
  getAttemptedQuestionIds,
  SyllabusModuleMeta
} from '../data/quizData';
import { QuizSet, SubjectCategory } from '../types';

export interface CategoryGridProps {
  selectedCategory?: string;
  onSelectCategory?: (categoryId: string) => void;
  onLaunchQuiz?: (categoryId: string, questionCount: number) => void;
  defaultCount?: 10 | 20 | 50;
  className?: string;
}

// Icon mapper for the 10 syllabus modules
const MODULE_ICONS: Record<string, React.ReactNode> = {
  'public-enterprises': <Building2 className="w-5 h-5 text-indigo-400" />,
  'ppp': <Briefcase className="w-5 h-5 text-amber-400" />,
  'language-test': <Languages className="w-5 h-5 text-emerald-400" />,
  'applied-math': <Calculator className="w-5 h-5 text-purple-400" />,
  'it-ai-cybersecurity': <ShieldCheck className="w-5 h-5 text-cyan-400" />,
  'economics': <TrendingUp className="w-5 h-5 text-rose-400" />,
  'governance-constitution': <Scale className="w-5 h-5 text-blue-400" />,
  'geography': <Compass className="w-5 h-5 text-teal-400" />,
  'history': <Landmark className="w-5 h-5 text-orange-400" />,
  'current-affairs': <Radio className="w-5 h-5 text-fuchsia-400" />
};

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  selectedCategory,
  onSelectCategory,
  onLaunchQuiz,
  defaultCount = 10,
  className = ''
}) => {
  const { startQuiz } = useApp();
  const [internalSelected, setInternalSelected] = useState<string>(selectedCategory || 'public-enterprises');
  const [questionCount, setQuestionCount] = useState<10 | 20 | 50>(defaultCount);
  const [notification, setNotification] = useState<string | null>(null);
  const [updateKey, setUpdateKey] = useState<number>(0);

  // Synchronize internal selection if parent provides selectedCategory
  const activeCategoryId = selectedCategory || internalSelected;

  // Track unseen counts for each module dynamically
  const moduleCounts = useMemo(() => {
    const counts: Record<string, { total: number; unseen: number; attempted: number }> = {};
    SYLLABUS_MODULES.forEach(mod => {
      counts[mod.id] = getModuleUnseenCount(mod.id);
    });
    return counts;
    // updateKey triggers recomputation when a quiz finishes or history is reset
  }, [updateKey]);

  const handleCardClick = (mod: SyllabusModuleMeta) => {
    setInternalSelected(mod.id);
    if (onSelectCategory) {
      onSelectCategory(mod.id);
    }

    // Launch Quiz for this specific category
    if (onLaunchQuiz) {
      onLaunchQuiz(mod.id, questionCount);
    } else {
      launchCategoryQuiz(mod.id, questionCount);
    }
  };

  const launchCategoryQuiz = (moduleId: string, count: number) => {
    const mod = SYLLABUS_MODULES.find(m => m.id === moduleId) || SYLLABUS_MODULES[0];
    
    // Retrieve strictly unique questions for this category via the Deduplication & Attempt Tracker
    const uniqueRawQuestions = getUniqueRandomQuestions({
      syllabusModule: mod.id,
      category: mod.category,
      count
    });

    const questions = uniqueRawQuestions.map(convertQuizQuestionToQuestion);

    const quizSet: QuizSet = {
      id: `category-quiz-${mod.id}-${Date.now()}`,
      title: `${mod.nameNepali}`,
      description: `${mod.description} • ${questions.length} प्रश्नहरू (१००% अनौठा प्रश्नहरू, शून्य दोहोरिने)`,
      category: mod.category as SubjectCategory,
      difficulty: 'Medium',
      mode: 'practice',
      timeLimitMinutes: Math.max(5, Math.ceil(questions.length * 1.2)),
      questions,
      syllabusModule: mod.nameNepali,
      badge: `${mod.nameNepali}`
    };

    startQuiz(quizSet);
    setUpdateKey(prev => prev + 1);
  };

  const handleResetModuleHistory = (e: React.MouseEvent, moduleId: string, modName: string) => {
    e.stopPropagation();
    resetCategoryAttemptHistory(moduleId);
    setUpdateKey(prev => prev + 1);
    setNotification(`"${modName}" का लागि अघिल्लो प्रयास इतिहास सफलतापूर्वक रिसेट गरियो। अब सबै १,००० प्रश्न पुनः उपलब्ध छन्।`);
    setTimeout(() => setNotification(null), 4000);
  };

  return (
    <div className={`space-y-6 ${className}`} id="category-grid-container">
      {/* Header Bar with Question Count Selector & Absolute Deduplication Badge */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 sm:p-5 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-800 shadow-xl">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              १० वटा पाठ्यक्रम मोड्युल (Syllabus Modules)
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-xs text-cyan-400 font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              सत्र-आधारित अद्वितीय ट्र्याकिङ (Zero Duplicate System)
            </span>
          </div>
          <h2 className="text-base sm:text-lg font-bold text-slate-100 mt-1">
            कुनै पनि मोड्युल कार्ड छानेर सोझै क्विज सुरु गर्नुहोस्
          </h2>
          <p className="text-xs text-slate-400">
            कार्ड क्लिक गर्दा सम्बन्धित विषयका मात्र नयाँ र नहेरिएका प्रश्नहरू छानिनेछन्।
          </p>
        </div>

        {/* Question Count Pills (10, 20, 50 questions) */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <span className="text-xs font-bold text-slate-400 mr-1">प्रश्न सङ्ख्या:</span>
          {([10, 20, 50] as const).map(count => (
            <button
              key={count}
              type="button"
              onClick={() => setQuestionCount(count)}
              className={`px-3 py-1.5 rounded-xl font-bold text-xs transition border ${
                questionCount === count
                  ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-lg shadow-emerald-500/20'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
              }`}
            >
              {count} प्रश्न
            </button>
          ))}
        </div>
      </div>

      {/* Notification toast if history reset */}
      {notification && (
        <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-300 text-xs flex items-center justify-between animate-in fade-in">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{notification}</span>
          </div>
          <button onClick={() => setNotification(null)} className="text-slate-400 hover:text-white">✕</button>
        </div>
      )}

      {/* All 10 Module Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="module-cards-grid">
        {SYLLABUS_MODULES.map((mod, idx) => {
          const isSelected = activeCategoryId === mod.id;
          const stats = moduleCounts[mod.id] || { total: mod.totalMCQs, unseen: mod.totalMCQs, attempted: 0 };
          const icon = MODULE_ICONS[mod.id] || <BookOpen className="w-5 h-5 text-emerald-400" />;

          return (
            <div
              key={mod.id}
              id={`module-card-${mod.id}`}
              onClick={() => handleCardClick(mod)}
              className={`group relative p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between overflow-hidden text-left ${
                isSelected
                  ? 'bg-slate-800/90 border-emerald-500/80 ring-2 ring-emerald-500/30 shadow-2xl shadow-emerald-950/40'
                  : 'bg-slate-900/70 border-slate-800 hover:border-slate-700 hover:bg-slate-800/60 hover:shadow-lg'
              }`}
            >
              {/* Card Header: Module index & weightage badge */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-black text-slate-300">
                      #{idx + 1}
                    </span>
                    <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60">
                      {icon}
                    </div>
                  </div>

                  {mod.weightageNote ? (
                    <span className="px-2.5 py-1 rounded-xl text-[10px] font-black bg-amber-500/15 text-amber-300 border border-amber-500/30">
                      {mod.weightageNote}
                    </span>
                  ) : (
                    <span className="px-2.5 py-1 rounded-xl text-[10px] font-bold bg-slate-800 text-slate-400 border border-slate-700">
                      {mod.level}
                    </span>
                  )}
                </div>

                {/* Module Title */}
                <h3 className="font-extrabold text-base text-slate-100 group-hover:text-emerald-400 transition-colors leading-snug">
                  {mod.nameNepali}
                </h3>
                <p className="text-xs text-slate-400 font-medium mb-3 mt-0.5 truncate">
                  {mod.nameEnglish}
                </p>

                {/* Module Description / Core Focus */}
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4">
                  {mod.description}
                </p>
              </div>

              {/* Card Footer: Unseen counter + Action button */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2 mt-auto">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <strong className="text-slate-200 font-bold">{stats.unseen}</strong>
                  <span>/ {stats.total} प्रश्न बाँकी</span>
                </div>

                <div className="flex items-center gap-1.5">
                  {/* Reset attempt history button if some questions were attempted */}
                  {stats.attempted > 0 && (
                    <button
                      type="button"
                      title="यस मोड्युलको इतिहास रिसेट गर्नुहोस्"
                      onClick={(e) => handleResetModuleHistory(e, mod.id, mod.nameNepali)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-slate-800 transition"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  )}

                  {/* Launch Quiz Button */}
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-emerald-500 text-slate-950 font-black text-xs group-hover:bg-emerald-400 transition shadow">
                    <Play className="w-3.5 h-3.5 fill-current" />
                    सुरु ({questionCount})
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
