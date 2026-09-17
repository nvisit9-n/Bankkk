import React, { useState } from 'react';
import { 
  Play, 
  Clock, 
  HelpCircle, 
  Award, 
  CheckCircle2, 
  Flame, 
  Filter, 
  Sparkles, 
  BookOpen, 
  Layers,
  ChevronRight,
  ShieldAlert,
  Database,
  Target,
  Check,
  BarChart3,
  Cpu,
  GraduationCap
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { SubjectCategory, DifficultyLevel, QuizMode, QuizSet } from '../../types';
import { 
  getQuestionsByCategory, 
  getCategoryQuestionCount, 
  getAvailableSubTopics,
  convertQuizQuestionToQuestion,
  ALL_QUIZ_QUESTIONS,
  BANKING_NRB_POOL,
  CURRENT_AFFAIRS_POOL,
  ECONOMICS_MGMT_POOL,
  IT_MATH_ENGLISH_POOL,
  EXAM_SUB_TOPICS,
  SYLLABUS_MODULES
} from '../../data/quizData';
import { CategoryGrid } from '../CategoryGrid';
import { ActiveQuiz } from './ActiveQuiz';
import { QuizResult } from './QuizResult';

export const QuizScreen: React.FC = () => {
  const { activeQuiz, startQuiz, exitQuiz, quizResult, setQuizResult, setActiveTab } = useApp();

  const [selectedModule, setSelectedModule] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<SubjectCategory | 'All'>('All');
  const [selectedSubTopic, setSelectedSubTopic] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel | 'All'>('All');
  const [selectedMode, setSelectedMode] = useState<QuizMode>('practice');
  const [selectedCount, setSelectedCount] = useState<10 | 20 | 50 | 100>(10);

  const categories: (SubjectCategory | 'All')[] = [
    'All', 
    'Banking', 
    'NRB', 
    'Current Affairs', 
    'GK', 
    'Economics', 
    'Management', 
    'Accounting', 
    'Computer',
    'Mathematics',
    'English'
  ];

  // If a quiz is active, show ActiveQuiz interface
  if (activeQuiz) {
    return <ActiveQuiz quiz={activeQuiz} onExit={exitQuiz} />;
  }

  // If a result is available, show QuizResult
  if (quizResult) {
    return (
      <QuizResult
        result={quizResult}
        onRetry={() => {
          const matchingSet = getCustomQuizSet(selectedCategory, selectedDifficulty, quizResult.mode, selectedCount, selectedSubTopic);
          startQuiz(matchingSet);
        }}
        onHome={() => {
          setQuizResult(null);
          setActiveTab('home');
        }}
      />
    );
  }

  // Helper to generate a tailored quiz set based on user filters
  const getCustomQuizSet = (
    cat: SubjectCategory | 'All', 
    diff: DifficultyLevel | 'All', 
    mode: QuizMode,
    questionCount: number = selectedCount,
    subTopic: string = selectedSubTopic,
    mod: string = selectedModule
  ): QuizSet => {
    // Dynamically retrieve randomized questions from the 10,000+ mega repository pool
    const quizQuestions = getQuestionsByCategory(cat, questionCount, diff, subTopic, mod);
    const questions = quizQuestions.map(convertQuizQuestionToQuestion);

    const titleMap: Record<QuizMode, string> = {
      practice: `${mod !== 'All' ? mod : subTopic !== 'All' ? subTopic : cat === 'All' ? 'एकीकृत १०,०००+' : cat} अभ्यास क्विज (${questions.length} प्रश्नहरू)`,
      exam: `${mod !== 'All' ? mod : subTopic !== 'All' ? subTopic : cat === 'All' ? 'Lok Sewa Pre-Test' : cat} नमुना परीक्षा (${questions.length} प्रश्नहरू)`,
      daily: `दैनिक ${questions.length} प्रश्न चुनौती (Daily Challenge)`,
      mock: `लोक सेवा एकीकृत पूर्ण नमुना परीक्षा (${questions.length} प्रश्नहरू - १०,०००+ भण्डार)`
    };

    // Standard timing: 100 Q = 90 mins, 50 Q = 45 mins, 20 Q = 18 mins, 10 Q = 10 mins
    const timeLimitMinutes = questionCount === 100 ? 90 : questionCount === 50 ? 45 : questionCount === 20 ? 18 : 10;

    return {
      id: `custom-quiz-${Date.now()}`,
      title: titleMap[mode],
      description: `${questions.length} वस्तुगत (MCQ) प्रश्नहरू - लोक सेवा आयोग एकीकृत पाठ्यक्रम (तह ४ र तह ५) १०,०००+ मेगा रिपोजिटरी ढाँचा`,
      category: cat === 'All' ? 'Banking' : cat,
      difficulty: diff === 'All' ? 'Medium' : diff,
      mode,
      timeLimitMinutes: mode === 'mock' ? (questionCount >= 50 ? (questionCount === 100 ? 90 : 45) : 20) : timeLimitMinutes,
      questions,
      badge: `${mode.toUpperCase()} • ${questionCount}Q`
    };
  };

  const handleLaunchQuiz = (mode: QuizMode) => {
    const quizSet = getCustomQuizSet(selectedCategory, selectedDifficulty, mode, selectedCount, selectedSubTopic, selectedModule);
    startQuiz(quizSet);
  };

  const handleLaunchCategoryQuiz = (categoryId: string, count: number = selectedCount) => {
    const mod = SYLLABUS_MODULES.find(m => m.id === categoryId || m.nameNepali === categoryId || m.category === categoryId);
    const targetModule = mod ? mod.nameNepali : categoryId;
    const targetCat = (mod ? mod.category : categoryId) as SubjectCategory;
    setSelectedModule(targetModule);
    setSelectedCategory(targetCat);

    const quizSet = getCustomQuizSet(
      targetCat,
      'All',
      selectedMode,
      count,
      'All',
      targetModule
    );
    startQuiz(quizSet);
  };

  const availableCount = getCategoryQuestionCount(selectedCategory, selectedSubTopic, selectedModule);
  const availableSubTopics = getAvailableSubTopics(selectedCategory);

  return (
    <div className="space-y-8 pb-12">
      
      {/* Header with 10,000+ Mega Repository Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            क्विज अभ्यास केन्द्र (Interactive Quiz Hub)
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            लोक सेवा आयोग एकीकृत पाठ्यक्रम (तह ४ र तह ५) १० वटै मोड्युल लक्षित १०,०००+ वस्तुगत (MCQ) प्रश्नहरूको विशाल भण्डार।
          </p>
        </div>

        {/* Dynamic Mega Repository Header Badge: कुल प्रश्न भण्डार: १०,०००+ */}
        <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-700 text-emerald-900 dark:text-emerald-200 self-start sm:self-auto shadow-sm">
          <Database className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <div className="text-left">
            <div className="text-[10px] font-black uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              १०,०००+ चङ्किङ आर्किटेक्चर
            </div>
            <div className="text-xs sm:text-sm font-black text-emerald-900 dark:text-emerald-100 flex items-center gap-1.5">
              <span>कुल प्रश्न भण्डार: १०,०००+ MCQs</span>
              <span className="text-[10px] bg-emerald-200 dark:bg-emerald-800 text-emerald-800 dark:text-emerald-100 px-1.5 py-0.5 rounded-full font-bold">
                Live
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 10,000+ MCQs Distribution Across 10 Syllabus Modules */}
      <div className="p-5 sm:p-6 rounded-3xl bg-royal-gradient text-white shadow-xl shadow-soft-blue border border-blue-400/30 space-y-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/15 pb-4">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-md bg-[#DC2626] text-white text-[11px] font-black tracking-wide uppercase shadow-sm">
                लोक सेवा एकीकृत पाठ्यक्रम (तह ४ र ५)
              </span>
              <span className="text-xs text-blue-100 font-bold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                तह ४: सार्वजनिक संस्थान २० अङ्क | तह ५: १० अङ्क + भाषा १० अङ्क
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-black tracking-tight text-white">
              १०,०००+ १०-मोड्युल चङ्किङ भण्डार (10 Modules Lazy Loading Architecture)
            </h2>
          </div>
          <div className="flex items-center gap-3 shrink-0 bg-white/15 px-4 py-2 rounded-2xl border border-white/20">
            <Target className="w-6 h-6 text-white" />
            <div>
              <span className="text-[10px] text-blue-100 font-bold block uppercase tracking-wider">१० वटै मोड्युल</span>
              <span className="text-xl font-black text-white">{ALL_QUIZ_QUESTIONS.length.toLocaleString()}+ MCQs</span>
            </div>
          </div>
        </div>

        {/* 10 Syllabus Modules Interactive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 pt-1">
          {SYLLABUS_MODULES.map((mod, idx) => {
            const isSelected = selectedModule === mod.nameNepali;
            return (
              <button
                key={mod.id}
                onClick={() => {
                  handleLaunchCategoryQuiz(mod.id, selectedCount);
                }}
                className={`p-3 rounded-2xl border text-left transition-all cursor-pointer group ${
                  isSelected
                    ? 'bg-emerald-500/20 border-emerald-400 shadow-md shadow-emerald-500/20 scale-[1.02]'
                    : 'bg-white/5 border-white/10 hover:border-emerald-500/50 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold text-slate-400">#{idx + 1}</span>
                  <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 group-hover:bg-emerald-500 group-hover:text-slate-950 transition">
                    ▶ सुरु ({selectedCount})
                  </span>
                </div>
                <h4 className="text-xs font-black text-white leading-snug line-clamp-1 group-hover:text-emerald-300 transition-colors">{mod.nameNepali}</h4>
                <p className="text-[10px] text-slate-300 line-clamp-1 mt-0.5">{mod.subTopics.slice(0, 2).map(s => s.nameNepali).join(', ')}</p>
                <div className="text-[9px] text-amber-300 font-semibold mt-1">
                  {mod.id === 'public-enterprises' 
                    ? 'L4: 20 अङ्क | L5: 10 अङ्क' 
                    : mod.id === 'language-test' 
                    ? 'L5: 10 अङ्क (नेपाली/अङ्ग्रेजी)' 
                    : 'एकीकृत पाठ्यक्रम'}
                </div>
              </button>
            );
          })}
        </div>

        {/* Strict Facts Integrity Ticker */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10 text-[11px] text-slate-300 font-medium">
          <span className="text-amber-400 font-bold">📌 प्रमाणित तथ्य नियम:</span>
          <span className="px-2 py-0.5 rounded bg-white/10">सिन्धुपाल्चोक = भोटेकोशी नदी (अरनिको/तातोपानी)</span>
          <span className="px-2 py-0.5 rounded bg-white/10">रसुवा = त्रिशूली नदी (पासाङ ल्हामु/रसुवागढी)</span>
          <span className="px-2 py-0.5 rounded bg-white/10">Policy Rate: ५.५% | Bank Rate: ६.५% | CRR: ४.०% | SLR: १२.०%</span>
          <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold">नेगेटिभ मार्किङ: २०%</span>
        </div>
      </div>

      {/* Comprehensive 10 Module Cards Category Grid Component with Zero Duplicate Tracker */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
            पाठ्यक्रम मोड्युल कार्डहरूबाट सोझै क्विज लन्च गर्नुहोस् (Direct Category Quiz)
          </h2>
        </div>
        <CategoryGrid
          selectedCategory={selectedModule}
          onSelectCategory={(catId) => {
            const m = SYLLABUS_MODULES.find(x => x.id === catId);
            if (m) setSelectedModule(m.nameNepali);
          }}
          onLaunchQuiz={handleLaunchCategoryQuiz}
          defaultCount={selectedCount === 100 ? 50 : selectedCount}
        />
      </div>

      {/* 4 Quiz Modes Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Practice Mode */}
        <div 
          onClick={() => {
            setSelectedMode('practice');
            handleLaunchQuiz('practice');
          }}
          className="p-5 rounded-3xl bg-white dark:bg-slate-900 border-2 border-emerald-500/80 hover:border-emerald-500 cursor-pointer transition-all hover:scale-[1.02] shadow-sm hover:shadow-md flex flex-col justify-between group"
        >
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-base text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
              अभ्यास मोड (Practice Mode)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              प्रत्येक प्रश्नको उत्तर छानेलगत्तै सही/गलत जानकारी र विस्तृत नेपाली व्याख्या हेर्नुहोस्।
            </p>
          </div>

          <div className="pt-4 flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400">
            <span>Start Practice ({selectedCount}Q)</span>
            <Play className="w-4 h-4 fill-emerald-600" />
          </div>
        </div>

        {/* Exam Mode */}
        <div 
          onClick={() => {
            setSelectedMode('exam');
            handleLaunchQuiz('exam');
          }}
          className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 cursor-pointer transition-all hover:scale-[1.02] shadow-sm hover:shadow-md flex flex-col justify-between group"
        >
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 flex items-center justify-center font-bold">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-base text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
              परीक्षा मोड (Exam Mode)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              अन्त्यमा मात्र नतिजा हेर्न पाइने वास्तविक लोकसेवा तथा बैंकिङ परीक्षाको माहोल।
            </p>
          </div>

          <div className="pt-4 flex items-center justify-between text-xs font-bold text-blue-600 dark:text-blue-400">
            <span>Start Exam ({selectedCount}Q)</span>
            <Play className="w-4 h-4 fill-blue-600" />
          </div>
        </div>

        {/* Daily Challenge */}
        <div 
          onClick={() => {
            setSelectedMode('daily');
            handleLaunchQuiz('daily');
          }}
          className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500 cursor-pointer transition-all hover:scale-[1.02] shadow-sm hover:shadow-md flex flex-col justify-between group"
        >
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400 flex items-center justify-center font-bold">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-base text-slate-900 dark:text-white group-hover:text-amber-600 transition-colors">
              दैनिक चुनौती (Daily Challenge)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              आजको १० प्रश्न पूरा गरी +५० XP बोनस र दैनिक Streak कायम राख्नुहोस्।
            </p>
          </div>

          <div className="pt-4 flex items-center justify-between text-xs font-bold text-amber-600 dark:text-amber-400">
            <span>Play Daily (+50 XP)</span>
            <Play className="w-4 h-4 fill-amber-600" />
          </div>
        </div>

        {/* Mock Test */}
        <div 
          onClick={() => {
            setSelectedMode('mock');
            handleLaunchQuiz('mock');
          }}
          className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-purple-500 cursor-pointer transition-all hover:scale-[1.02] shadow-sm hover:shadow-md flex flex-col justify-between group"
        >
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-400 flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-base text-slate-900 dark:text-white group-hover:text-purple-600 transition-colors">
              मक टेस्ट (Mock Test)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              पूर्ण ५,०००+ पाठ्यक्रम समेटिएको समयबद्ध विस्तृत नमुना परीक्षा (+१०० XP)।
            </p>
          </div>

          <div className="pt-4 flex items-center justify-between text-xs font-bold text-purple-600 dark:text-purple-400">
            <span>Start Mock Test ({selectedCount}Q)</span>
            <Play className="w-4 h-4 fill-purple-600" />
          </div>
        </div>

      </div>

      {/* Category, Sub-Topic, Count & Difficulty Smart Filter Panel */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6 shadow-sm">
        
        {/* Syllabus Module Filter Chips */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              पाठ्यक्रम मोड्युल (१० Syllabus Modules Filter):
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-amber-600 dark:text-amber-400 font-semibold">
                {selectedModule === 'All' ? 'सबै १० मोड्युल' : selectedModule}
              </span>
              {selectedModule !== 'All' && (
                <button
                  onClick={() => setSelectedModule('All')}
                  className="text-[11px] text-indigo-600 dark:text-indigo-400 font-bold hover:underline"
                >
                  सबै देखाउनुहोस्
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setSelectedModule('All')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedModule === 'All'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              सबै मोड्युल (१०,०००+)
            </button>
            {SYLLABUS_MODULES.map((mod) => {
              const isSelected = selectedModule === mod.nameNepali;
              return (
                <button
                  key={mod.id}
                  onClick={() => setSelectedModule(mod.nameNepali)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-amber-600 text-white shadow-sm scale-105'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <span>{mod.nameNepali}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-amber-800 text-amber-100' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}`}>
                    {mod.totalMCQs}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="space-y-2.5 pt-3 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-emerald-600" />
              विषय छान्नुहोस् (Choose Category):
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                चयन गरिएको: {selectedCategory}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-[10px] font-black">
                {availableCount.toLocaleString()}+ MCQs
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => {
              const catCount = getCategoryQuestionCount(cat);
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setSelectedSubTopic('All');
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-emerald-600 text-white shadow-sm scale-105'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-emerald-800 text-emerald-100' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}`}>
                    {catCount}+
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Sub-Topic Filter Selection */}
        <div className="space-y-2.5 pt-3 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
              उप-विषय छान्नुहोस् (Sub-Topic Filter):
            </span>
            {selectedSubTopic !== 'All' && (
              <button 
                onClick={() => setSelectedSubTopic('All')}
                className="text-[11px] text-indigo-600 dark:text-indigo-400 font-bold hover:underline"
              >
                सबै उप-विषयहरू देखाउनुहोस्
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedSubTopic('All')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedSubTopic === 'All'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              सबै उप-विषयहरू ({availableCount}+)
            </button>

            {availableSubTopics.map((subItem) => {
              const subName = typeof subItem === 'string' ? subItem : subItem.nameNepali;
              const subKey = typeof subItem === 'string' ? subItem : subItem.id || subItem.nameNepali;
              const isSelected = selectedSubTopic === subName;
              return (
                <button
                  key={subKey}
                  onClick={() => setSelectedSubTopic(subName)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    isSelected
                      ? 'bg-indigo-600 text-white font-bold shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {subName}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Question Count Selector (10, 20, 50, 100 MCQs) */}
        <div className="space-y-2.5 pt-3 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <BarChart3 className="w-3.5 h-3.5 text-blue-600" />
              प्रश्न संख्या छान्नुहोस् (Number of Questions):
            </span>
            <span className="text-xs text-indigo-600 dark:text-indigo-400 font-bold">
              {selectedCount === 100 
                ? 'मेगा म्याराथन नमुना (१०० प्रश्न, ९० मिनेट)'
                : selectedCount === 50 
                ? 'NRB Pre-Test पूर्ण परीक्षा (५० प्रश्न, ४५ मिनेट)' 
                : `${selectedCount} प्रश्नहरू`}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {([10, 20, 50, 100] as (10 | 20 | 50 | 100)[]).map((count) => (
              <button
                key={count}
                onClick={() => setSelectedCount(count)}
                className={`px-3.5 py-3 rounded-2xl text-xs font-bold transition-all flex flex-col items-center justify-center gap-1 ${
                  selectedCount === count
                    ? 'bg-indigo-600 text-white shadow-md scale-[1.02]'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-black">{count}</span>
                  <span>प्रश्नहरू</span>
                </div>
                <span className={`text-[10px] ${selectedCount === count ? 'text-indigo-200' : 'text-slate-400'}`}>
                  {count === 10 && '१० मिनेट • Quick'}
                  {count === 20 && '१८ मिनेट • Standard'}
                  {count === 50 && '४५ मिनेट • Full NRB'}
                  {count === 100 && '९० मिनेट • Mega Mock'}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty Filter */}
        <div className="space-y-2.5 pt-3 border-t border-slate-100 dark:border-slate-800">
          <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-amber-500" />
            कठिनाई स्तर (Difficulty Level):
          </span>

          <div className="flex items-center gap-2">
            {(['All', 'Easy', 'Medium', 'Hard'] as (DifficultyLevel | 'All')[]).map((level) => (
              <button
                key={level}
                onClick={() => setSelectedDifficulty(level)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedDifficulty === level
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {level === 'All' ? 'सबै स्तर' : level === 'Easy' ? 'सरल (Easy)' : level === 'Medium' ? 'मध्यम (Medium)' : 'कठिन (Hard)'}
              </button>
            ))}
          </div>
        </div>

        {/* Start Customized Quiz CTA */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 dark:border-slate-800">
          <div className="text-xs text-slate-500 dark:text-slate-400 space-y-0.5">
            <p className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>
                {selectedSubTopic !== 'All' ? selectedSubTopic : selectedCategory} विधाका {availableCount}+ प्रश्नहरूको भण्डारबाट अद्वितीय {selectedCount} प्रश्नहरू निकालिनेछ।
              </span>
            </p>
            <p className="text-[11px] text-slate-400 pl-5">
              {selectedCount === 100 
                ? 'समय सीमा: ९० मिनेट (मेगा म्याराथन नमुना परीक्षा)'
                : selectedCount === 50 
                ? 'समय सीमा: ४५ मिनेट (NRB Level 4 Pre-Test आधिकारिक मापदण्ड)' 
                : `समय सीमा: ${selectedCount === 20 ? '१८' : '१०'} मिनेट`}
            </p>
          </div>

          <button
            id="btn-start-selected-quiz"
            onClick={() => handleLaunchQuiz(selectedMode)}
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-black text-xs sm:text-sm shadow-lg shadow-red-950/40 flex items-center justify-center gap-2.5 transition-all transform active:scale-98 cursor-pointer"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>छानिएको क्विज सुरु गर्नुहोस् ({selectedCount} प्रश्न)</span>
          </button>
        </div>

      </div>

    </div>
  );
};
