import React from 'react';
import { 
  Building2, 
  Landmark, 
  Scale, 
  Newspaper, 
  Globe, 
  TrendingUp, 
  Users, 
  Calculator, 
  Laptop, 
  BookOpen, 
  Languages, 
  Play, 
  Clock, 
  Award, 
  Sparkles, 
  ChevronRight, 
  Flame, 
  Flame as FireIcon,
  Search, 
  ArrowRight,
  CheckCircle2,
  CheckCircle2 as CheckCircleIcon,
  Lock,
  Compass,
  CheckSquare,
  Sparkles as SparklesIcon,
  Youtube,
  Trophy,
  Zap,
  Target,
  FileCheck2,
  HelpCircle
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { SubjectCategory, QuizSet } from '../../types';
import { DbService } from '../../services/dbService';
import { MOCK_QUESTIONS, MOCK_CURRENT_AFFAIRS, MOCK_PREMIUM_NOTES } from '../../data/mockData';
import { getQuestionsByCategory, convertQuizQuestionToQuestion } from '../../data/quizData';
import { UserProfileBanner } from '../UserProfileBanner';
import { QuickAccess } from '../QuickAccess';
import { OfficialYouTubeSection } from './OfficialYouTubeSection';

export const HomeScreen: React.FC = () => {
  const { 
    user, 
    setActiveTab, 
    setIsSearchOpen, 
    startQuiz, 
    openNoteReader, 
    openPremiumDetail,
    setIsProfileModalOpen 
  } = useApp();

  const quickAccessCategories: { 
    label: string; 
    nepali: string; 
    icon: React.ComponentType<{ className?: string }>; 
    category: SubjectCategory;
    color: string;
    bg: string;
  }[] = [
    { label: 'Banking', nepali: 'बैंकिङ', icon: Building2, category: 'Banking', color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-900/50' },
    { label: 'Loksewa', nepali: 'लोकसेवा', icon: Scale, category: 'Loksewa', color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900/50' },
    { label: 'NRB', nepali: 'राष्ट्र बैंक', icon: Landmark, category: 'NRB', color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900/50' },
    { label: 'Current Affairs', nepali: 'समसामयिक', icon: Newspaper, category: 'Current Affairs', color: 'text-indigo-600 dark:text-indigo-400', bg: 'bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-900/50' },
    { label: 'General Knowledge', nepali: 'सामान्य ज्ञान', icon: Globe, category: 'GK', color: 'text-teal-600 dark:text-teal-400', bg: 'bg-teal-50 dark:bg-teal-950/40 border-teal-200 dark:border-teal-900/50' },
    { label: 'Economics', nepali: 'अर्थशास्त्र', icon: TrendingUp, category: 'Economics', color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-900/50' },
    { label: 'Management', nepali: 'व्यवस्थापन', icon: Users, category: 'Management', color: 'text-cyan-600 dark:text-cyan-400', bg: 'bg-cyan-50 dark:bg-cyan-950/40 border-cyan-200 dark:border-cyan-900/50' },
    { label: 'Accounting', nepali: 'लेखाविधि', icon: Calculator, category: 'Accounting', color: 'text-rose-600 dark:text-rose-400', bg: 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-900/50' },
    { label: 'Computer', nepali: 'कम्प्युटर', icon: Laptop, category: 'Computer', color: 'text-violet-600 dark:text-violet-400', bg: 'bg-violet-50 dark:bg-violet-950/40 border-violet-200 dark:border-violet-900/50' },
    { label: 'English', nepali: 'अंग्रेजी', icon: Languages, category: 'English', color: 'text-sky-600 dark:text-sky-400', bg: 'bg-sky-50 dark:bg-sky-950/40 border-sky-200 dark:border-sky-900/50' },
    { label: 'नेपाली', nepali: 'नेपाली भाषा', icon: BookOpen, category: 'Nepali', color: 'text-red-600 dark:text-red-400', bg: 'bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-900/50' }
  ];

  // Helper to start Today's Challenge Quiz from 5,000+ Mega Repository
  const handleStartTodayChallenge = () => {
    const pulled = getQuestionsByCategory('All', 10, 'Medium');
    const todayQuestions = pulled.map(convertQuizQuestionToQuestion);
    const quizSet: QuizSet = {
      id: `challenge-today-${Date.now()}`,
      title: 'आजको 10 प्रश्न Challenge',
      description: '५,०००+ मेगा रिपोजिटरीबाट दैनिक परीक्षा चुनौती: १० मिश्रित प्रश्नहरू हल गर्नुहोस् र +५० XP कमाउनुहोस्।',
      category: 'Banking',
      difficulty: 'Medium',
      mode: 'daily',
      timeLimitMinutes: 6,
      questions: todayQuestions,
      badge: 'Challenge'
    };
    startQuiz(quizSet);
  };

  // Helper to start Daily Quiz #25 from 5,000+ Mega Repository
  const handleStartDailyQuiz = () => {
    const pulled = getQuestionsByCategory('Banking', 10, 'Medium');
    const bankingQuiz = pulled.map(convertQuizQuestionToQuestion);
    const quizSet: QuizSet = {
      id: `daily-banking-${Date.now()}`,
      title: 'Banking Daily Quiz #25',
      description: 'नेपाल राष्ट्र बैंक तथा वाणिज्य बैंकहरू विशेष १० महत्वपूर्ण प्रश्नहरू (५,०००+ भण्डार)',
      category: 'Banking',
      difficulty: 'Medium',
      mode: 'practice',
      timeLimitMinutes: 5,
      questions: bankingQuiz,
      badge: 'Daily #25'
    };
    startQuiz(quizSet);
  };

  const profileStats = DbService.calculateProfileCompletion(user);
  const targetExam = user?.targetExam || 'नेपाल राष्ट्र बैंक (NRB) - सहायक ४';

  // Dynamic Exam Modules based on user's target exam
  const getExamTailoredContent = () => {
    const lower = targetExam.toLowerCase();
    if (lower.includes('rbb') || lower.includes('वाणिज्य')) {
      return {
        title: 'राष्ट्रिय वाणिज्य बैंक (RBB) विशेष अध्ययन फिड',
        badge: 'RBB Level 4/5 Syllabi',
        acts: ['BAFIA २०७३', 'बैंकिङ कसूर तथा सजाय ऐन २०६४', 'RBB कर्मचारी सेवा विनियमावली'],
        modules: ['नगद व्यवस्थापन & विप्रेषण', 'ग्राहक पहिचान (KYC/AML)', 'बैंक वित्तीय विवरण विश्लेषण'],
        actionText: 'RBB विशेष अभ्यास सुरु गर्नुहोस्'
      };
    } else if (lower.includes('adbl') || lower.includes('कृषि')) {
      return {
        title: 'कृषि विकास बैंक (ADBL) विशेष अध्ययन फिड',
        badge: 'ADBL Level 4/5 Syllabi',
        acts: ['कृषि विकास बैंक ऐन २०३१', 'सहकारी तथा साना किसान कर्जा', 'BAFIA २०७३'],
        modules: ['ग्रामीण बैंकिङ र कृषि वित्त', 'परियोजना कर्जा मूल्याङ्कन', 'धितो मूल्याङ्कन र रिकभरी'],
        actionText: 'ADBL विशेष अभ्यास सुरु गर्नुहोस्'
      };
    } else if (lower.includes('nbl') || lower.includes('नेपाल बैंक')) {
      return {
        title: 'नेपाल बैंक लिमिटेड (NBL) विशेष अध्ययन फिड',
        badge: 'NBL Level 3/4 Syllabi',
        acts: ['नेपाल बैंक इतिहास & संरचना', 'कम्पनी ऐन २०६३', 'विदेशी विनिमय नियमित गर्ने ऐन'],
        modules: ['कर्जा नीति & जोखिम व्यवस्थापन', 'अन्तर्राष्ट्रिय व्यापार & L/C', 'लेखापरीक्षण र आन्तरिक नियन्त्रण'],
        actionText: 'NBL विशेष अभ्यास सुरु गर्नुहोस्'
      };
    }
    // Default NRB / Central Banking
    return {
      title: 'नेपाल राष्ट्र बैंक (NRB) उच्च प्राथमिकता अध्ययन फिड',
      badge: 'NRB Level 4/5 Syllabi',
      acts: ['नेपाल राष्ट्र बैंक ऐन २०५८', 'मौद्रिक नीति २०८१/८२', 'विदेशी विनिमय (नियमित गर्ने) ऐन'],
      modules: ['केन्द्रीय बैंकिङ कार्य & सुपरिवेक्षण', 'शोधनान्तर & विदेशी मुद्रा सञ्चिती', 'वित्तीय स्थायित्व & तरलता व्यवस्थापन'],
      actionText: 'NRB विशेष अभ्यास सुरु गर्नुहोस्'
    };
  };

  const tailoredFeed = getExamTailoredContent();

  return (
    <div className="space-y-8 pb-12">
      
      {/* Dynamic User Profile Banner with Green Theme, Photo Upload, Streak & XP */}
      <UserProfileBanner 
        onStartChallenge={handleStartTodayChallenge}
        onOpenNotes={() => setActiveTab('free-notes')}
      />

      {/* Gamified Profile Completion Reminder Banner (Non-blocking) */}
      {!profileStats.isComplete && (
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
          <div className="space-y-1.5 flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-slate-950 font-black text-xs">
                {profileStats.percentage}% पूर्ण
              </span>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                प्रोफाइल पूर्ण गरी +५० बोनस XP प्राप्त गर्नुहोस्!
              </h4>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              आफ्नो लक्षित परीक्षा, प्रदेश र जिल्ला चयन गरी आफ्नो तयारीलाई व्यक्तिगत (Personalized) बनाउनुहोस्।
            </p>
            {/* Progress line */}
            <div className="w-full max-w-md bg-amber-200/60 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden mt-1">
              <div 
                className="h-full bg-amber-500 rounded-full transition-all duration-500"
                style={{ width: `${profileStats.percentage}%` }}
              />
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setIsProfileModalOpen(true)}
              className="w-full sm:w-auto px-4 py-2 rounded-xl bg-[#0B2046] hover:bg-slate-800 text-white font-bold text-xs shadow-xs transition flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
            >
              <Zap className="w-3.5 h-3.5 fill-current text-amber-400" />
              <span>अहिले विवरण भर्नुहोस् (+५० XP)</span>
            </button>
          </div>
        </div>
      )}

      {/* Dynamic Personalized Feed Based on Target Exam */}
      <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-[#2563EB] dark:text-blue-400">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                  {tailoredFeed.title}
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/40 text-[#2563EB] dark:text-blue-300 text-[10px] font-bold border border-blue-200 dark:border-blue-800">
                  {targetExam}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                तपाईंको प्रोफाइल अनुसार प्राथमिकता दिइएका मुख्य ऐन, पाठ्यक्रम र अभ्यास सेटहरू
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('leaderboard')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 text-xs font-bold hover:bg-amber-100 dark:hover:bg-amber-900/60 transition cursor-pointer"
            >
              <Trophy className="w-3.5 h-3.5 text-amber-600" />
              <span>प्रदेश वरियता (Leaderboard)</span>
            </button>
          </div>
        </div>

        {/* Priority Acts & Key Modules Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {tailoredFeed.acts.map((act, idx) => (
            <div 
              key={idx}
              onClick={() => setActiveTab('free-notes')}
              className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between hover:border-blue-400 dark:hover:border-blue-500 cursor-pointer transition"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <FileCheck2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                  {act}
                </span>
              </div>
              <span className="text-[10px] px-2 py-0.5 bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-300 rounded font-semibold shrink-0">
                पढ्नुहोस्
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Access & Sangathit Sastha Pre-Test */}
      <QuickAccess />

      {/* Dual Column Section: Flattened Learning & Resource Widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Cols: Continue Learning (Flattened list design, no nested cards) */}
        <div className="lg:col-span-2 space-y-6 min-w-0">
          
          {/* Continue Learning Card */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs">
            <div className="flex justify-between items-center mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <h3 className="font-bold text-slate-800 dark:text-white text-sm">
                  भर्खरै पढिएको (Continue Learning)
                </h3>
              </div>
              <button 
                type="button"
                onClick={() => setActiveTab('courses')}
                className="text-blue-600 dark:text-blue-400 text-xs font-bold hover:underline cursor-pointer"
              >
                सबै विषय हेर्नुहोस् &rarr;
              </button>
            </div>

            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {/* Item 1 */}
              <div className="py-3 flex items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/40 px-2 rounded-xl transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-base shrink-0">
                    🏛️
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="px-1.5 py-0.2 text-[9px] font-black bg-emerald-600 text-white rounded">
                        Master
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white truncate">
                        बैंकिङ विकासक्रम र इतिहास (Banking History)
                      </h4>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-24 sm:w-32 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full w-[85%]"></div>
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400">८५%</span>
                    </div>
                  </div>
                </div>

                <button 
                  type="button"
                  onClick={() => openNoteReader('note-banking-history')}
                  className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors shrink-0 cursor-pointer"
                >
                  Read Note
                </button>
              </div>

              {/* Item 2 */}
              <div className="py-3 flex items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/40 px-2 rounded-xl transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center text-base shrink-0">
                    👔
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white truncate">
                      Public Management (सार्वजनिक व्यवस्थापन)
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-24 sm:w-32 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full w-[65%]"></div>
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400">६५%</span>
                    </div>
                  </div>
                </div>

                <button 
                  type="button"
                  onClick={() => openNoteReader('note-reengineering')}
                  className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-colors shrink-0 cursor-pointer"
                >
                  Continue
                </button>
              </div>

              {/* Item 3 */}
              <div className="py-3 flex items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/40 px-2 rounded-xl transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center text-base shrink-0">
                    ⚖️
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white truncate">
                      Banking Laws & NRB Act (बैंकिंग ऐन-नियम)
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-24 sm:w-32 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full w-[30%]"></div>
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400">३०%</span>
                    </div>
                  </div>
                </div>

                <button 
                  type="button"
                  onClick={() => setActiveTab('courses')}
                  className="px-3.5 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold rounded-lg transition-colors shrink-0 cursor-pointer"
                >
                  Resume
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Right Col: Premium Notes Widget & Current Affairs Snippet (Clean flattened cards) */}
        <div className="space-y-6 flex flex-col min-w-0">
          
          {/* Premium Notes Widget - Unified Card */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-amber-200/80 dark:border-amber-900/40 p-5 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>प्रिमियम नोट्स (Premium)</span>
              </h3>
              <span className="bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200 text-[10px] px-2 py-0.5 rounded font-bold uppercase">
                Hot
              </span>
            </div>
            
            <div 
              onClick={() => openPremiumDetail(MOCK_PREMIUM_NOTES[0])}
              className="p-3 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/30 hover:border-amber-300 transition-all cursor-pointer group"
            >
              <div className="flex space-x-3">
                <div className="w-14 h-16 bg-amber-100 dark:bg-amber-900/40 rounded-lg flex items-center justify-center text-xl shadow-2xs shrink-0">
                  📄
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold leading-tight text-slate-800 dark:text-white truncate group-hover:text-amber-700 dark:group-hover:text-amber-300 transition">
                    {MOCK_PREMIUM_NOTES[0].title}
                  </h4>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">
                    {MOCK_PREMIUM_NOTES[0].pageCount || 120} पृष्ठहरू • PDF
                  </p>
                  <div className="flex items-center mt-1.5">
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      Rs. {MOCK_PREMIUM_NOTES[0].discountPrice || 149}
                    </span>
                    <span className="text-[10px] text-slate-400 line-through ml-2">
                      Rs. {MOCK_PREMIUM_NOTES[0].originalPrice || 299}
                    </span>
                  </div>
                </div>
              </div>
              <button 
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  openPremiumDetail(MOCK_PREMIUM_NOTES[0]);
                }}
                className="mt-3 w-full py-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold rounded-lg transition-all shadow-xs cursor-pointer active:scale-95"
              >
                Buy Now
              </button>
            </div>

            <p 
              onClick={() => setActiveTab('premium')}
              className="mt-3 text-center text-xs text-amber-700 dark:text-amber-400 font-semibold cursor-pointer hover:underline"
            >
              सबै प्रिमियम सामग्री हेर्नुहोस् &rarr;
            </p>
          </div>

          {/* Current Affairs Widget */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 flex-1 overflow-hidden flex flex-col shadow-xs">
            <h3 className="font-bold text-slate-800 dark:text-white mb-3 text-sm flex items-center gap-1.5">
              <Newspaper className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>समसामयिक (Current Affairs)</span>
            </h3>
            <div className="space-y-3 overflow-y-auto pr-1 flex-1">
              {MOCK_CURRENT_AFFAIRS.slice(0, 3).map((affair, idx) => (
                <div 
                  key={affair.id}
                  onClick={() => setActiveTab('current-affairs')}
                  className={`pl-3 py-1 cursor-pointer group ${
                    idx === 0 
                      ? 'border-l-2 border-blue-500' 
                      : 'border-l-2 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <span className={`text-[9px] font-bold uppercase tracking-widest ${
                    idx === 0 ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400'
                  }`}>
                    {affair.category} • {affair.date}
                  </span>
                  <h4 className="text-xs font-bold leading-tight mt-0.5 text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                    {affair.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                    {affair.summary}
                  </p>
                </div>
              ))}
            </div>

            <button 
              type="button"
              onClick={() => setActiveTab('current-affairs')}
              className="mt-4 w-full py-2 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer"
            >
              सबै समाचार हेर्नुहोस् &rarr;
            </button>
          </div>

        </div>

      </div>


      {/* Important Topics Section */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
            महत्वपूर्ण अध्ययन शीर्षकहरू (Important Topics)
          </h2>
          <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold cursor-pointer hover:underline" onClick={() => setActiveTab('courses')}>
            सबै विषय हेर्नुहोस्
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {[
            { title: 'BAFIA २०७३ का मुख्य दफाहरू', count: '12 Topics', icon: Scale },
            { title: 'नेपाल राष्ट्र बैंक ऐन २०५८', count: '9 Topics', icon: Landmark },
            { title: 'मौद्रिक नीति उपकरणहरू (CRR/SLR)', count: '14 Topics', icon: TrendingUp },
            { title: 'सार्वजनिक प्रशासन र सुशासन', count: '8 Topics', icon: Users },
            { title: 'लरेन्ज वक्र र आय असमानता', count: '6 Topics', icon: TrendingUp },
            { title: 'बासेल ३ फ्रेमवर्क र पूँजी कोष', count: '11 Topics', icon: Building2 },
            { title: 'बैंक हिसाब मिलान (BRS)', count: '7 Topics', icon: Calculator },
            { title: 'संविधानका ३१ मौलिक हकहरू', count: '15 Topics', icon: Globe }
          ].map((topic, i) => {
            const Icon = topic.icon;
            return (
              <div
                key={i}
                onClick={() => setActiveTab('courses')}
                className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 cursor-pointer transition-all shadow-xs flex items-center gap-3"
              >
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-slate-800 dark:text-white truncate">
                    {topic.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 dark:text-slate-500">
                    {topic.count}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Dedicated YouTube Section Locked Strictly to @bankingtayarinepal */}
      <OfficialYouTubeSection 
        onViewAll={() => setActiveTab('video-lectures')} 
        maxDisplay={6} 
      />

      {/* Premium Notes Teaser Banner */}
      <section className="relative overflow-hidden rounded-2xl bg-[#0B2046] dark:bg-slate-900 text-white p-6 sm:p-7 border border-slate-800 shadow-md">
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-bold border border-red-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Premium Marketplace</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              परीक्षामा सफलताका लागि प्रिमियम हस्तलिखित & रिभिजन नोट्स
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              NRB, RBB, Loksewa उत्कृष्ट विद्यार्थी तथा विषयविज्ञहरूद्वारा तयार पारिएका पूर्ण पाठ्यक्रम समेटिएका उच्च गुणस्तरीय Study Materials।
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={() => setActiveTab('premium')}
              className="px-5 py-3 rounded-2xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-black text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-950/40 cursor-pointer active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              <span>Explore Premium Notes</span>
            </button>
            <button
              onClick={() => setActiveTab('free-notes')}
              className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm transition border border-white/20 flex items-center justify-center gap-2 cursor-pointer backdrop-blur-sm"
            >
              <span>निःशुल्क नोट्स हेर्नुहोस्</span>
            </button>
          </div>
        </div>
      </section>

      {/* World-Class Platform Story Teaser Banner */}
      <section 
        onClick={() => setActiveTab('about')}
        className="rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-6 sm:p-7 border border-blue-900/50 shadow-md cursor-pointer group hover:border-blue-700/60 transition-all"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[11px] font-bold border border-blue-400/30">
                Our Story & Vision 2030
              </span>
              <span className="text-xs text-slate-400">77 Districts Covered</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-200 transition-colors">
              नेपालको पहिलो विश्वस्तरीय AI-संचालित बैंकिङ तथा लोकसेवा तयारी प्लेटफर्म
            </h3>
            <p className="text-xs text-slate-300 line-clamp-2">
              परम्परागत महँगो इन्स्टिच्युटको विकल्प: आफ्नै घरबाट शून्य शुल्कमा ५० सेट अनलाइन परीक्षा, तत्काल व्याख्या र AI नोट जेनेरेटर।
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 group-hover:bg-blue-500 text-white font-bold text-xs shadow-md transition shrink-0">
            <span>हाम्रो बारेमा विस्तृत हेर्नुहोस्</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </section>


    </div>
  );
};
