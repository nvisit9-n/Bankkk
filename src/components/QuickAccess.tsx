import React, { useState, useMemo } from 'react';
import { 
  Building2, 
  Scale, 
  Landmark, 
  Newspaper, 
  Globe, 
  TrendingUp, 
  Users, 
  Calculator, 
  Laptop, 
  Languages, 
  BookOpen, 
  Briefcase,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Layers,
  CheckCircle,
  Timer,
  FileText,
  Search,
  X,
  Play
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SubjectCategory } from '../types';
import { 
  getAllSangathitSasthaSetMetas, 
  getSangathitSasthaSet, 
  getSangathitTotalQuestionCount,
  SangathitSetMeta 
} from '../data/questionBank';
import { SetSelectionModal } from './SetSelectionModal';
import { QuizEngine } from './QuizEngine';

export interface QuickAccessProps {
  onCategoryClick?: (category: SubjectCategory | 'current-affairs' | 'courses') => void;
}

export const QuickAccess: React.FC<QuickAccessProps> = ({ onCategoryClick }) => {
  const { setActiveTab, startQuiz, exitQuiz, addToast, requireAuth } = useApp();
  const [isSetModalOpen, setIsSetModalOpen] = useState<boolean>(false);
  const [selectedSetId, setSelectedSetId] = useState<string | null>(null);

  const totalQuestions = useMemo(() => getSangathitTotalQuestionCount(), []);

  /**
   * Launch a specific Sangathit Sastha Practice Set (Set 1 to 50) with strict auth protection
   */
  const handleStartSet = (setId: string | number) => {
    if (!requireAuth(() => handleStartSet(setId), 'परीक्षा अभ्यास सेट सुरु गर्न कृपया पहिले लगइन गर्नुहोस्।')) {
      return;
    }
    try {
      const setStr = String(setId);
      const setNumber = typeof setId === 'number' 
        ? setId 
        : parseInt(setStr.replace(/\D/g, ''), 10) || 1;
      const normalizedSetId = `sangathit-set-${setNumber}`;

      // Close modal and mount QuizEngine immediately
      setIsSetModalOpen(false);
      setSelectedSetId(normalizedSetId);

      const quizSet = getSangathitSasthaSet(setNumber);
      startQuiz(quizSet);
      addToast(`सङ्गठित संस्था सेट ${setNumber} सुरु भयो! ५० प्रश्नहरू, ४५ मिनेट।`, 'info');
    } catch (e) {
      console.error('Failed to launch Sangathit Sastha Set', e);
      addToast('क्विज सेट लोड गर्न सकिएन, कृपया पुन: प्रयास गर्नुहोस्।', 'error');
    }
  };

  const categories: { 
    label: string; 
    nepali: string; 
    icon: React.ComponentType<{ className?: string }>; 
    category: SubjectCategory | 'Special';
    color: string;
    bg: string;
    borderColor: string;
    description?: string;
  }[] = [
    { label: 'Banking', nepali: 'बैंकिङ', icon: Building2, category: 'Banking', color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-950/40', borderColor: 'border-blue-200 dark:border-blue-900/50' },
    { label: 'Loksewa', nepali: 'लोकसेवा', icon: Scale, category: 'Loksewa', color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-50 dark:bg-amber-950/40', borderColor: 'border-amber-200 dark:border-amber-900/50' },
    { label: 'NRB', nepali: 'राष्ट्र बैंक', icon: Landmark, category: 'NRB', color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-950/40', borderColor: 'border-emerald-200 dark:border-emerald-900/50' },
    { label: 'Current Affairs', nepali: 'समसामयिक', icon: Newspaper, category: 'Current Affairs', color: 'text-indigo-600 dark:text-indigo-400', bg: 'bg-indigo-50 dark:bg-indigo-950/40', borderColor: 'border-indigo-200 dark:border-indigo-900/50' },
    { label: 'Economics', nepali: 'अर्थशास्त्र', icon: TrendingUp, category: 'Economics', color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-50 dark:bg-purple-950/40', borderColor: 'border-purple-200 dark:border-purple-900/50' },
    { label: 'Management', nepali: 'व्यवस्थापन', icon: Users, category: 'Management', color: 'text-cyan-600 dark:text-cyan-400', bg: 'bg-cyan-50 dark:bg-cyan-950/40', borderColor: 'border-cyan-200 dark:border-cyan-900/50' },
    { label: 'Accounting', nepali: 'लेखाविधि', icon: Calculator, category: 'Accounting', color: 'text-rose-600 dark:text-rose-400', bg: 'bg-rose-50 dark:bg-rose-950/40', borderColor: 'border-rose-200 dark:border-rose-900/50' },
    { label: 'Computer', nepali: 'कम्प्युटर', icon: Laptop, category: 'Computer', color: 'text-violet-600 dark:text-violet-400', bg: 'bg-violet-50 dark:bg-violet-950/40', borderColor: 'border-violet-200 dark:border-violet-900/50' },
    { label: 'English', nepali: 'अंग्रेजी', icon: Languages, category: 'English', color: 'text-sky-600 dark:text-sky-400', bg: 'bg-sky-50 dark:bg-sky-950/40', borderColor: 'border-sky-200 dark:border-sky-900/50' },
    { label: 'Nepali', nepali: 'नेपाली भाषा', icon: BookOpen, category: 'Nepali', color: 'text-red-600 dark:text-red-400', bg: 'bg-red-50 dark:bg-red-950/40', borderColor: 'border-red-200 dark:border-red-900/50' },
    { label: 'GK', nepali: 'सामान्य ज्ञान', icon: Globe, category: 'GK', color: 'text-teal-600 dark:text-teal-400', bg: 'bg-teal-50 dark:bg-teal-950/40', borderColor: 'border-teal-200 dark:border-teal-900/50' }
  ];

  const handleCategorySelect = (item: typeof categories[0]) => {
    if (onCategoryClick) {
      if (item.category === 'Current Affairs') {
        onCategoryClick('current-affairs');
      } else {
        onCategoryClick('courses');
      }
      return;
    }

    if (item.category === 'Current Affairs') {
      setActiveTab('current-affairs');
    } else {
      setActiveTab('courses');
    }
  };

  return (
    <section className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <h2 className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
            Quick Access & Targeted Pre-Tests (शीघ्र पहुँच)
          </h2>
        </div>
        <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
          ५० सेटहरू • २,५००+ MCQs
        </span>
      </div>

      {/* Featured Sangathit Sastha 50-Set Hero Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 shadow-lg border border-blue-500/30 text-white p-5 sm:p-6 hover:border-blue-400/60 transition-all duration-300 group hover:shadow-2xl hover:shadow-blue-900/30">
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-inner shrink-0 group-hover:scale-105 transition-transform">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-[#DC2626] text-white shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  <span>५० पूर्ण सेट परीक्षा (50 Full Sets)</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/20 text-white border border-white/30">
                  L4 (२० अङ्क) • L5 (१० अङ्क)
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-950/50 text-blue-100 border border-blue-400/30">
                  २,५०० MCQs
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-black tracking-tight text-white group-hover:text-blue-100 transition-colors">
                सङ्गठित संस्था Pre-Test (Public Enterprises & PPP) ५० सेट इन्जिन
              </h3>

              <p className="text-xs sm:text-sm text-blue-50 max-w-2xl leading-relaxed">
                लोकसेवा आयोगको आधिकारिक पाठ्यक्रम अनुसार १० वटै खण्डहरू (भूगोल, इतिहास, अर्थतन्त्र, संविधान, सार्क/UN, IT/AI, कार्यालय व्यवस्थापन, संस्थान व्यवस्थापन, गणित र भाषा परीक्षण) समेटिएका ५० नमुना सेटहरू।
              </p>

              {/* Quick Set Selector Badges */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <span className="text-[11px] text-blue-100 font-bold mr-1">द्रुत सेट:</span>
                {[1, 2, 3, 4, 5].map((sNum) => (
                  <button
                    key={sNum}
                    type="button"
                    onClick={() => handleStartSet(`sangathit-set-${sNum}`)}
                    className="px-2.5 py-1 rounded-lg bg-white/15 hover:bg-[#DC2626] hover:text-white text-white font-bold text-xs border border-white/25 transition cursor-pointer"
                  >
                    सेट {sNum}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 w-full lg:w-auto shrink-0">
            <button
              type="button"
              onClick={() => handleStartSet('sangathit-set-1')}
              className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-950/40 transition-all group-hover:translate-x-0.5 cursor-pointer active:scale-95"
            >
              <Play className="w-4 h-4 fill-current text-white" />
              <span>सेट १ सुरु गर्नुहोस्</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('quiz')}
              className="w-full sm:w-auto px-5 py-2.5 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs flex items-center justify-center gap-2 border border-white/30 transition cursor-pointer backdrop-blur-sm"
            >
              <Layers className="w-4 h-4 text-white" />
              <span>सबै ५० सेटहरू हेर्नुहोस् (Browse 50 Sets)</span>
            </button>
          </div>
        </div>

        {/* Ambient background glow */}
        <div className="absolute -right-12 -bottom-12 w-56 h-56 bg-blue-400/20 rounded-full blur-2xl pointer-events-none" />
      </div>

      {/* Grid of Subject Categories */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {/* Sangathit Sastha Dedicated Grid Card */}
        <button
          type="button"
          onClick={() => setActiveTab('quiz')}
          className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700/60 p-4 rounded-2xl shadow-sm flex flex-col items-center hover:border-emerald-500 dark:hover:border-emerald-400 cursor-pointer transition-all hover:-translate-y-1 group relative overflow-hidden"
        >
          <div className="absolute top-1.5 right-1.5 px-1.5 py-0.2 rounded-md bg-emerald-600 text-[9px] font-black text-white">
            ५० सेट
          </div>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-2 shadow-sm bg-emerald-600 text-white group-hover:scale-105 transition-transform">
            <Building2 className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold text-slate-800 dark:text-slate-100 text-center line-clamp-1">
            सङ्गठित संस्था
          </span>
          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
            L4: २० / L5: १० अङ्क
          </span>
        </button>

        {/* Other Core Syllabus Categories */}
        {categories.slice(0, 5).map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              type="button"
              onClick={() => handleCategorySelect(item)}
              className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-center hover:border-emerald-500 dark:hover:border-emerald-500 cursor-pointer transition-all hover:-translate-y-0.5 group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 shadow-sm ${item.bg} ${item.color} group-hover:scale-105 transition-transform`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-100 text-center truncate w-full">
                {item.label}
              </span>
              <span className="text-[10px] text-slate-400 dark:text-slate-500 text-center truncate w-full">
                {item.nepali}
              </span>
            </button>
          );
        })}
      </div>

      {/* 50 SANGATHIT SASTHA PRACTICE SETS BROWSER MODAL */}
      <SetSelectionModal
        isOpen={isSetModalOpen}
        onClose={() => setIsSetModalOpen(false)}
        onSelectSet={handleStartSet}
        onStartSet={handleStartSet}
        handleStartSet={handleStartSet}
      />

      {/* Dynamic 50-Set Quiz Engine Mount */}
      {selectedSetId && (
        <QuizEngine
          selectedSetId={selectedSetId}
          category="sangathit-sastha"
          onExit={() => {
            setSelectedSetId(null);
            exitQuiz();
          }}
        />
      )}
    </section>
  );
};
