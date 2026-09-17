import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { 
  Clock, 
  Bookmark, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  X, 
  Award,
  Sparkles,
  BookOpen,
  RotateCcw,
  Check,
  ShieldCheck,
  Percent,
  Layers,
  Hash,
  Volume2,
  VolumeX,
  LayoutGrid,
  SkipForward,
  HelpCircle
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { QuizSet, QuizResultData, Question } from '../types';
import { StorageService } from '../services/storageService';
import { DbService } from '../services/dbService';
import { ActivityTrackingService } from '../services/activityTrackingService';
import { 
  getUniqueRandomQuestions, 
  convertQuizQuestionToQuestion,
  generateQuestionHash,
  getSeenQuestionIds,
  markQuestionsAsSeen,
  getPoolExhaustionStatus
} from '../data/quizData';
import { 
  getSangathitSasthaSet, 
  SANGATHIT_SASTHA_SETS 
} from '../data/questionBank';
import { FormattedQuestionContent } from './quiz/FormattedQuestionContent';

export interface QuizEngineProps {
  quiz?: QuizSet;
  selectedSetId?: string | number;
  category?: string;
  onExit: () => void;
  onRestartWithNewSet?: () => void;
}

/**
 * Contextual Lok Sewa exam tip generator for NRB Level 4 & 5
 */
function getExamTip(question: Question): string {
  if (question.examTip) {
    return question.examTip;
  }
  const text = `${question.questionNepali} ${question.questionEnglish || ''} ${question.topic || ''} ${question.explanationNepali}`.toLowerCase();
  
  if (text.includes('सिन्धुपाल्चोक') || text.includes('भोटेकोशी') || text.includes('रसुवा') || text.includes('त्रिशूली')) {
    return '💡 Lok Sewa Exam Tip (भौगोलिक तथ्य निष्ठा): सिन्धुपाल्चोक = भोटेकोशी नदी (अरनिको राजमार्ग / तातोपानी नाका / ४५MW माथिल्लो भोटेकोशी); रसुवा = त्रिशूली नदी (पासाङ ल्हामु राजमार्ग / रसुवागढी नाका / ६०MW त्रिशूली-३ए)। यी दुई नदी र जिल्ला कहिल्यै नमिसाउनुहोस्!';
  }
  if (text.includes('सार्वजनिक संस्थान') || text.includes('public enterprise') || text.includes('पहेँलो किताब')) {
    return '💡 Lok Sewa Exam Tip (सार्वजनिक संस्थान): नेपालमा कुल ४४ सार्वजनिक संस्थानमध्ये २६ नाफामा र १५ घाटामा छन्। निजीकरण ऐन २०५० अनुसार निजीकरण समितिको अध्यक्ष अर्थमन्त्री रहने व्यवस्था छ।';
  }
  if (text.includes('ppp') || text.includes('साझेदारी') || text.includes('लगानी बोर्ड') || text.includes('bot') || text.includes('boot')) {
    return '💡 Lok Sewa Exam Tip (PPP तथा लगानी ऐन २०७५): रु. ६ अर्बभन्दा माथि वा २०० मेगावाटभन्दा माथिका पूर्वाधार आयोजना लगानी बोर्ड (अध्यक्ष: प्रधानमन्त्री) को क्षेत्राधिकारमा पर्दछन्।';
  }
  if (text.includes('नीतिगत दर') || text.includes('policy rate') || text.includes('बैंक दर') || text.includes('crr') || text.includes('slr')) {
    return '💡 Lok Sewa Exam Tip (मौद्रिक नीति दरहरू): Policy Rate = ५.५%, Bank Rate = ६.५%, CRR = ४.०%, SLR = १२.०% (क वर्ग) र CD Ratio Ceiling = ९०.०%।';
  }
  if (text.includes('पलेशा') || text.includes('paralympic') || text.includes('ओलम्पिक')) {
    return '💡 Lok Sewa Exam Tip (समसामयिक खेलकुद): पेरिस पारालम्पिक २०२४ मा पलेशा गोवर्धनले पारा-तेक्वान्दो (K44-५७ केजी) मा नेपालका लागि ऐतिहासिक पहिलो कास्य पदक जितेकी हुन्।';
  }
  if (text.includes('is audit') || text.includes('cbs') || text.includes('pumori') || text.includes('finacle') || text.includes('2fa')) {
    return '💡 Lok Sewa Exam Tip (IT Guidelines): NRB IT Guidelines अनुसार वाणिज्य बैंकहरूले वार्षिक रूपमा अनिवार्य IS Audit सम्पन्न गर्नुपर्छ र Disaster Recovery Site फरक भूकम्पीय क्षेत्रमा हुनुपर्छ।';
  }
  
  return '💡 Lok Sewa Exam Tip: प्रत्येक गलत उत्तर बापत २०% अङ्क कट्टा गरिनेछ (Negative Marking: 20%)। विश्वस्त नभएका प्रश्नहरूमा विकल्प उन्मूलन विधि (Elimination Method) प्रयोग गर्नुहोस्।';
}

/**
 * Web Audio API and Speech Synthesis Sound System for Gamified Feedback
 */
function playQuizFeedbackSound(isCorrect: boolean, soundEnabled: boolean) {
  if (!soundEnabled) return;

  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioCtx) {
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      if (isCorrect) {
        // Energetic positive chime (C5, E5, G5, C6 arpeggio)
        const now = ctx.currentTime;
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.075);

          gain.gain.setValueAtTime(0, now + idx * 0.075);
          gain.gain.linearRampToValueAtTime(0.24, now + idx * 0.075 + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.075 + 0.38);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(now + idx * 0.075);
          osc.stop(now + idx * 0.075 + 0.42);
        });
      } else {
        // Subtle "Oops!" error buzz / soft low tone
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(155, now);
        osc.frequency.exponentialRampToValueAtTime(105, now + 0.22);

        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.24);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.26);
      }
    }

    // Voice feedback via Web Speech API
    if ('speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
        const text = isCorrect ? 'Wow! उत्कृष्ट!' : 'Oops!';
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = isCorrect ? 1.15 : 1.0;
        utterance.pitch = isCorrect ? 1.2 : 0.9;
        utterance.volume = isCorrect ? 0.8 : 0.45;
        
        const voices = window.speechSynthesis.getVoices();
        const nepaliVoice = voices.find(v => v.lang.startsWith('ne') || v.lang.startsWith('hi'));
        if (nepaliVoice) utterance.voice = nepaliVoice;
        
        window.speechSynthesis.speak(utterance);
      } catch {
        // fallback smoothly
      }
    }
  } catch (err) {
    console.debug('Quiz audio playback error:', err);
  }
}

/**
 * Strict Deduplication Validator: Ensures that every single question
 * in the active quiz set has a unique ID and unique text hash.
 */
function sanitizeQuizQuestions(
  incomingQuestions: Question[], 
  countNeeded: number = 10,
  category?: string,
  syllabusModule?: string
): Question[] {
  const seenIds = new Set<string>();
  const seenHashes = new Set<string>();
  const uniqueQuestions: Question[] = [];

  for (const q of incomingQuestions) {
    if (!q || !q.id || !q.questionNepali) continue;
    const hash = generateQuestionHash(q.questionNepali);
    if (!seenIds.has(q.id) && !seenHashes.has(hash)) {
      seenIds.add(q.id);
      seenHashes.add(hash);
      uniqueQuestions.push(q);
    }
  }

  // If any duplicates were filtered out, replenish using getUniqueRandomQuestions for the exact category/module
  if (uniqueQuestions.length < countNeeded) {
    const needed = countNeeded - uniqueQuestions.length;
    const additional = getUniqueRandomQuestions({
      category: category || 'All',
      syllabusModule: syllabusModule,
      count: needed * 2,
      excludeIds: Array.from(seenIds)
    });

    for (const addQ of additional) {
      if (uniqueQuestions.length >= countNeeded) break;
      const converted = convertQuizQuestionToQuestion(addQ);
      const hash = generateQuestionHash(converted.questionNepali);
      if (!seenIds.has(converted.id) && !seenHashes.has(hash)) {
        seenIds.add(converted.id);
        seenHashes.add(hash);
        uniqueQuestions.push(converted);
      }
    }
  }

  return uniqueQuestions;
}

/**
 * Dynamic Option Shuffler
 * Randomly shuffles options A, B, C, D on runtime without breaking the evaluation logic.
 * Correctly reassigns the new key to 'correctAnswer' based on the text of the correct option.
 */
export function shuffleQuestionOptions(question: Question): Question {
  if (!question || !question.options || question.options.length <= 1) {
    return question;
  }

  const originalCorrectKey = question.correctAnswer;

  // Clone options and retain their original key
  const cloned = question.options.map(opt => ({
    ...opt,
    _origKey: opt.key
  }));

  // Fisher-Yates shuffle
  for (let i = cloned.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = cloned[i];
    cloned[i] = cloned[j];
    cloned[j] = temp;
  }

  const keys: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];
  let newCorrectKey: 'A' | 'B' | 'C' | 'D' = 'A';

  const updatedOptions = cloned.map((opt, idx) => {
    const key = keys[idx] || 'A';
    if (opt._origKey === originalCorrectKey) {
      newCorrectKey = key;
    }
    const { _origKey, ...rest } = opt;
    return {
      ...rest,
      key
    };
  });

  return {
    ...question,
    options: updatedOptions,
    correctAnswer: newCorrectKey
  };
}

export function shuffleQuizQuestions(questions: Question[]): Question[] {
  return (questions || []).map(shuffleQuestionOptions);
}

export const QuizEngine: React.FC<QuizEngineProps> = ({ 
  quiz, 
  selectedSetId, 
  category, 
  onExit, 
  onRestartWithNewSet 
}) => {
  const { toggleBookmark, isBookmarked, setQuizResult, refreshUser, user, addToast, requireAuth } = useApp();

  const isUserAuthenticated = !!user && !user.isGuest && !!user.email;

  useEffect(() => {
    if (!isUserAuthenticated) {
      requireAuth(() => {}, 'सामग्री पढ्न, पीडीएफ डाउनलोड गर्न र परीक्षा दिन लगइन गर्नुहोस्।');
    }
  }, [isUserAuthenticated, requireAuth]);

  // Dynamically resolve target quiz set from selectedSetId, category, or quiz prop
  const activeQuiz = React.useMemo<QuizSet>(() => {
    if (selectedSetId !== undefined && selectedSetId !== null && selectedSetId !== '') {
      const setNum = typeof selectedSetId === 'number'
        ? selectedSetId
        : parseInt(String(selectedSetId).replace(/\D/g, ''), 10) || 1;
      return getSangathitSasthaSet(setNum);
    }
    if (quiz) {
      return quiz;
    }
    return getSangathitSasthaSet(1);
  }, [quiz, selectedSetId, category]);

  const isSangathit = category === 'sangathit-sastha' || (selectedSetId !== undefined && selectedSetId !== null && selectedSetId !== '');

  // Deduplicate and sanitize or load exact 50 questions for Sangathit Sastha, with dynamic runtime option shuffling
  const [questions, setQuestions] = useState<Question[]>(() => {
    if (isSangathit) {
      const qs = activeQuiz?.questions || [];
      if (qs.length > 0) {
        markQuestionsAsSeen(qs.map(q => q.id));
      }
      return shuffleQuizQuestions(qs);
    }
    const raw = activeQuiz?.questions || [];
    const sanitized = sanitizeQuizQuestions(raw, raw.length || 10, activeQuiz?.category, activeQuiz?.syllabusModule);
    if (sanitized.length > 0) {
      markQuestionsAsSeen(sanitized.map(q => q.id));
    }
    return shuffleQuizQuestions(sanitized);
  });

  // Ensure attempted questions are recorded for session deduplication
  useEffect(() => {
    if (questions && questions.length > 0) {
      markQuestionsAsSeen(questions.map(q => q.id));
    }
  }, [questions]);

  // Synchronize when a new quiz set or selectedSetId is loaded
  useEffect(() => {
    if (activeQuiz) {
      let qList: Question[] = [];
      if (isSangathit) {
        qList = activeQuiz.questions || [];
      } else {
        const raw = activeQuiz.questions || [];
        qList = sanitizeQuizQuestions(raw, raw.length || 10, activeQuiz.category, activeQuiz.syllabusModule);
      }
      const randomizedList = shuffleQuizQuestions(qList);
      setQuestions(randomizedList);
      setCurrentIndex(0);
      setSelectedAnswers({});
      setSkippedQuestions({});
      setShowPalette(false);
      setShowSubmitModal(false);
      setTimeLeft((activeQuiz.timeLimitMinutes || 45) * 60);
      startTimeRef.current = Date.now();
      if (randomizedList.length > 0) {
        markQuestionsAsSeen(randomizedList.map(q => q.id));
      }
    }
  }, [activeQuiz?.id, selectedSetId, isSangathit]);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D' | null>>({});
  const [skippedQuestions, setSkippedQuestions] = useState<Record<string, boolean>>({});
  const [showPalette, setShowPalette] = useState<boolean>(false);
  const [showSubmitModal, setShowSubmitModal] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>((activeQuiz?.timeLimitMinutes || 45) * 60);
  
  // Real-time dynamic stats
  const [sessionStreak, setSessionStreak] = useState<number>(0);
  const [sessionXp, setSessionXp] = useState<number>(0);
  const [confirmExit, setConfirmExit] = useState<boolean>(false);

  // Gamified Audio & Voice Toggle State
  const [soundEnabled, setSoundEnabled] = useState<boolean>(() => {
    return localStorage.getItem('quiz_sound_enabled') !== 'false';
  });

  const toggleSound = () => {
    setSoundEnabled(prev => {
      const next = !prev;
      localStorage.setItem('quiz_sound_enabled', String(next));
      addToast(next ? 'ध्वनि सक्रिय गरियो (Sound On)' : 'ध्वनि बन्द गरियो (Sound Muted)', 'info');
      return next;
    });
  };

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  const currentQuestion = questions[currentIndex] || questions[0];
  const isLastQuestion = questions.length > 0 && currentIndex === questions.length - 1;
  const currentSelection = currentQuestion ? selectedAnswers[currentQuestion.id] : null;
  const isAnswered = currentSelection !== undefined && currentSelection !== null;
  const questionBookmarked = currentQuestion ? isBookmarked('question', currentQuestion.id) : false;

  // Option text map
  const correctOption = currentQuestion?.options?.find(o => o.key === currentQuestion.correctAnswer);

  // Real-time negative marking metrics
  const totalQuestions = questions.length;
  const answeredCount = Object.keys(selectedAnswers).length;

  // Real-time Attempted, Skipped & Remaining counters
  const attemptedCount = questions.filter(q => selectedAnswers[q.id] !== undefined && selectedAnswers[q.id] !== null).length;
  const skippedCount = questions.filter(q => !selectedAnswers[q.id] && skippedQuestions[q.id]).length;
  const remainingCount = Math.max(0, questions.length - attemptedCount - skippedCount);

  // Lists for pre-submission quick jumps
  const skippedList = questions
    .map((q, idx) => ({ q, idx, num: idx + 1 }))
    .filter(item => !selectedAnswers[item.q.id] && skippedQuestions[item.q.id]);

  const unvisitedList = questions
    .map((q, idx) => ({ q, idx, num: idx + 1 }))
    .filter(item => !selectedAnswers[item.q.id] && !skippedQuestions[item.q.id]);
  
  let calculatedCorrect = 0;
  let calculatedIncorrect = 0;
  let calculatedUnattempted = 0;

  questions.forEach(q => {
    const userAns = selectedAnswers[q.id];
    if (!userAns) {
      calculatedUnattempted += 1;
    } else if (userAns === q.correctAnswer) {
      calculatedCorrect += 1;
    } else {
      calculatedIncorrect += 1;
    }
  });

  // Lok Sewa 20% negative deduction calculation:
  // For 50-question pre-test (100 full marks, 2 marks per question), each wrong question incurs 20% of 2 marks = -0.4 marks penalty.
  const isFiftyQuestionExam = questions.length === 50;
  const markPerCorrect = isFiftyQuestionExam ? 2 : 1;
  const penaltyPerIncorrect = isFiftyQuestionExam ? 0.4 : 0.2;

  const negativeDeductions = Number((calculatedIncorrect * penaltyPerIncorrect).toFixed(2));
  const currentNetScore = Math.max(0, Number(((calculatedCorrect * markPerCorrect) - negativeDeductions).toFixed(2)));

  // Pool exhaustion info for transparency
  const poolStats = getPoolExhaustionStatus(currentQuestion?.category || 'All');

  // Countdown timer
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          handleSubmitQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Anti-cheating & copy prevention security protection
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent copy, cut, paste, select-all, view-source, save, print
      if (
        (e.ctrlKey || e.metaKey) && 
        ['c', 'C', 'x', 'X', 'v', 'V', 'u', 'U', 's', 'S', 'a', 'A', 'p', 'P'].includes(e.key)
      ) {
        e.preventDefault();
        addToast('सुरक्षा सतर्कता: लोक सेवा परीक्षा प्रणालीमा कपी (Copy) तथा अन्य सर्टकट निषेध गरिएको छ।', 'warning');
      } else if (e.key === 'F12') {
        e.preventDefault();
        addToast('सुरक्षा सतर्कता: परीक्षा अवधिमा इन्स्पेक्ट/डेभलपर टुल निषेध गरिएको छ।', 'warning');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [addToast]);

  // Strict Authentication Guard: Lock practice sets if user is not signed in
  if (!isUserAuthenticated) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
        <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl text-center space-y-5 max-w-md w-full border border-slate-200 dark:border-slate-800 shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/80 flex items-center justify-center mx-auto text-amber-600 dark:text-amber-400">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
              वस्तुगत परीक्षा लक गरिएको छ
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
              लोक सेवा तथा बैंकिङ परीक्षा अभ्यास सेटहरू, वास्तविक समय टाइमिङ, नेगेटिभ मार्किङ र प्रतिवेदनका लागि कृपया आफ्नो खातामा लगइन गर्नुहोस्।
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
              onClick={onExit}
              className="py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-sm transition"
            >
              फर्कनुहोस्
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl text-center space-y-4 max-w-sm border border-slate-200 dark:border-slate-800 shadow-2xl">
          <AlertCircle className="w-12 h-12 text-amber-500 mx-auto" />
          <p className="text-slate-700 dark:text-slate-300 font-bold">कुनै प्रश्न उपलब्ध छैन।</p>
          <button 
            onClick={onExit} 
            className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition"
          >
            फर्कनुहोस्
          </button>
        </div>
      </div>
    );
  }

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  /**
   * Interactive Instant Answer Validation with Red/Green Feedback
   */
  const handleSelectOption = (key: 'A' | 'B' | 'C' | 'D') => {
    if (isAnswered) return;

    const isCorrect = key === currentQuestion.correctAnswer;

    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: key
    }));

    // If question was previously skipped, clear skipped status now that answer is chosen
    if (skippedQuestions[currentQuestion.id]) {
      setSkippedQuestions(prev => {
        const next = { ...prev };
        delete next[currentQuestion.id];
        return next;
      });
    }

    // Gamified Sound & Voice Feedback
    playQuizFeedbackSound(isCorrect, soundEnabled);

    if (isCorrect) {
      const newStreak = sessionStreak + 1;
      setSessionStreak(newStreak);
      
      const bonus = newStreak >= 3 ? 5 : 0;
      setSessionXp(prev => prev + 10 + bonus);

      if (newStreak >= 3 || (currentIndex + 1) === totalQuestions) {
        try {
          confetti({
            particleCount: 28,
            spread: 55,
            origin: { y: 0.65 }
          });
        } catch {
          // fallback
        }
      }
    } else {
      setSessionStreak(0);
    }
  };

  /**
   * Dedicated Skip Functionality:
   * Marks current question as skipped without deduction, allowing easy return.
   */
  const handleSkip = () => {
    if (!currentQuestion) return;
    if (!isAnswered) {
      setSkippedQuestions(prev => ({
        ...prev,
        [currentQuestion.id]: true
      }));
      addToast(`प्रश्न ${currentIndex + 1} छाडियो (Skipped for Review)`, 'info');
    }

    if (!isLastQuestion) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setShowSubmitModal(true);
    }
  };

  const handleNext = () => {
    if (!isLastQuestion) {
      if (!isAnswered && !skippedQuestions[currentQuestion?.id]) {
        // Auto mark as skipped if moving ahead without an answer
        setSkippedQuestions(prev => ({ ...prev, [currentQuestion.id]: true }));
      }
      setCurrentIndex(prev => prev + 1);
    } else {
      setShowSubmitModal(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleInitiateSubmit = () => {
    setShowSubmitModal(true);
  };

  const handleSubmitQuiz = () => {
    if (timerRef.current) clearInterval(timerRef.current);

    const totalSecondsSpent = Math.min(
      (activeQuiz.timeLimitMinutes || 45) * 60,
      Math.floor((Date.now() - startTimeRef.current) / 1000)
    );

    let finalCorrect = 0;
    let finalIncorrect = 0;
    let finalUnattempted = 0;

    questions.forEach(q => {
      const userAns = selectedAnswers[q.id];
      if (!userAns) {
        finalUnattempted += 1;
      } else if (userAns === q.correctAnswer) {
        finalCorrect += 1;
      } else {
        finalIncorrect += 1;
      }
    });

    const accuracy = questions.length > 0
      ? Math.round((finalCorrect / questions.length) * 100)
      : 0;

    // Mode-specific XP bonus
    const modeBonus = activeQuiz.mode === 'daily' ? 50 : (activeQuiz.mode === 'exam' ? 40 : 20);
    const finalXp = sessionXp + modeBonus;

    // Lok Sewa 20% Negative Marking formula
    const finalNegativeDeduction = Number((finalIncorrect * penaltyPerIncorrect).toFixed(2));
    const netFinalScore = Math.max(0, Number(((finalCorrect * markPerCorrect) - finalNegativeDeduction).toFixed(2)));

    const resultData: QuizResultData = {
      quizId: activeQuiz.id,
      quizTitle: activeQuiz.title,
      mode: activeQuiz.mode,
      totalQuestions: questions.length,
      score: netFinalScore, // Net score factoring in 20% negative marking
      correctAnswers: finalCorrect,
      incorrectAnswers: finalIncorrect,
      unattempted: finalUnattempted,
      accuracy,
      timeSpentSeconds: totalSecondsSpent,
      userAnswers: selectedAnswers,
      xpEarned: finalXp,
      completedAt: new Date().toISOString()
    };

    // Save stats to persistent storage
    StorageService.saveQuizResult(resultData);
    StorageService.updateQuizStats(finalCorrect, questions.length);

    // Record in Admin Analytics Tracker via DbService
    try {
      DbService.recordQuizAnalytics({
        userId: user.id || 'std-unknown',
        userName: user.name || 'विद्यार्थी',
        district: user.district || 'काठमाडौँ',
        targetExam: user.targetExam || 'General Banking',
        quizId: activeQuiz.id,
        quizTitle: activeQuiz.title,
        category: activeQuiz.category || currentQuestion?.category || 'General Banking',
        syllabusModule: activeQuiz.syllabusModule || currentQuestion?.syllabusModule,
        totalQuestions: questions.length,
        attemptedCount: finalCorrect + finalIncorrect,
        skippedCount: finalUnattempted,
        correctAnswers: finalCorrect,
        incorrectAnswers: finalIncorrect,
        negativeDeduction: finalNegativeDeduction,
        netScore: netFinalScore,
        accuracy,
        timeElapsedSeconds: totalSecondsSpent
      });
    } catch (e) {
      console.error('Failed to log admin analytics', e);
    }

    // Persist authenticated exam score & activity to Firestore / Server tracking
    if (user && !user.isGuest) {
      ActivityTrackingService.logExamScore({
        user,
        quizId: activeQuiz.id,
        quizTitle: activeQuiz.title,
        category: activeQuiz.category || currentQuestion?.category || 'General Banking',
        totalQuestions: questions.length,
        attempted: finalCorrect + finalIncorrect,
        correct: finalCorrect,
        incorrect: finalIncorrect,
        skipped: finalUnattempted,
        netScore: netFinalScore,
        accuracy: Math.round(accuracy * 10) / 10,
        timeTakenSeconds: totalSecondsSpent
      }).catch(() => {});

      ActivityTrackingService.logActivity({
        user,
        activityType: 'exam_complete',
        targetId: activeQuiz.id,
        targetTitle: activeQuiz.title,
        details: `परीक्षा सम्पन्न: प्राप्ताङ्क ${netFinalScore}/${questions.length} (${Math.round(accuracy)}% शुद्धता)`,
        metadata: {
          netScore: netFinalScore,
          total: questions.length,
          correct: finalCorrect,
          incorrect: finalIncorrect,
          accuracy
        }
      }).catch(() => {});
    }

    refreshUser();

    // Route to result screen
    setQuizResult(resultData);
    onExit();
  };

  const currentTip = getExamTip(currentQuestion);
  const progressPercent = ((currentIndex + 1) / totalQuestions) * 100;

  return (
    <div 
      className="fixed inset-0 z-50 bg-slate-950 text-slate-100 flex flex-col justify-between overflow-hidden select-none"
      style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
      onContextMenu={(e) => {
        e.preventDefault();
        addToast('सुरक्षा सतर्कता: क्विज परीक्षा अवधिमा राइट-क्लिक निषेध गरिएको छ।', 'warning');
      }}
    >
      
      {/* Background ambient accents */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Bar */}
      <header className="h-16 px-4 sm:px-8 bg-slate-900/90 backdrop-blur-xl border-b border-slate-800 flex items-center justify-between shrink-0 z-20">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setConfirmExit(true)}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
            title="Exit Quiz"
          >
            <X className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                {activeQuiz.mode === 'practice' ? 'अभ्यास मोड (Practice)' : activeQuiz.mode === 'daily' ? 'दैनिक चुनौती (Daily)' : 'परीक्षा मोड (Exam)'}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-cyan-400 font-bold">
                <ShieldCheck className="w-3 h-3" />
                १०,०००+ अद्वितीय प्रश्न (Zero Duplicates)
              </span>
            </div>
            <h2 className="font-extrabold text-xs sm:text-sm text-slate-100 truncate max-w-[200px] sm:max-w-md">
              {activeQuiz.title}
            </h2>
          </div>
        </div>

        {/* Top Controls: Live Counter, Palette, Audio, Timer & Bookmark */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Live Header Counter [Attempted: X | Skipped: Y | Remaining: Z] */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800/90 border border-slate-700/80 font-mono text-xs font-bold shadow-inner">
            <span className="text-emerald-400 flex items-center gap-1" title="हल गरिएको प्रश्नहरू (Attempted)">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Attempted: {attemptedCount}</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-amber-400 flex items-center gap-1" title="छाडिएका प्रश्नहरू (Skipped)">
              <SkipForward className="w-3.5 h-3.5 text-amber-400" />
              <span>Skipped: {skippedCount}</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400 flex items-center gap-1" title="बाँकी प्रश्नहरू (Remaining)">
              <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
              <span>Remaining: {remainingCount}</span>
            </span>
          </div>

          {/* Question Palette Toggle Button */}
          <button
            type="button"
            onClick={() => setShowPalette(prev => !prev)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition cursor-pointer ${
              showPalette 
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 shadow-sm' 
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700 hover:text-white'
            }`}
            title="प्रश्न ग्रिड हेर्नुहोस् (Toggle 1-50 Question Palette)"
          >
            <LayoutGrid className="w-4 h-4 text-cyan-400" />
            <span className="hidden sm:inline">ग्रिड (Palette)</span>
            <span className="px-1.5 py-0.5 rounded bg-slate-900 text-cyan-300 text-[10px] font-mono border border-cyan-500/30">
              {currentIndex + 1}/{totalQuestions}
            </span>
          </button>

          {/* Audio Toggle (🔊/🔇) */}
          <button
            type="button"
            onClick={toggleSound}
            className={`p-2 rounded-xl border transition cursor-pointer ${
              soundEnabled 
                ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40 hover:bg-emerald-500/30' 
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
            }`}
            title={soundEnabled ? 'ध्वनि बन्द गर्नुहोस् (Mute Audio)' : 'ध्वनि सुरु गर्नुहोस् (Unmute Audio)'}
            aria-label={soundEnabled ? 'Mute sound' : 'Unmute sound'}
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-emerald-400" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-400" />
            )}
          </button>

          <button
            onClick={() => toggleBookmark('question', currentQuestion.id, currentQuestion.questionNepali, currentQuestion.category)}
            className={`p-2 rounded-xl border transition ${
              questionBookmarked 
                ? 'bg-amber-500/20 text-amber-400 border-amber-500/40' 
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
            }`}
            title={questionBookmarked ? 'बुकमार्क हटाइयो' : 'बुकमार्क गर्नुहोस्'}
          >
            <Bookmark className={`w-4 h-4 ${questionBookmarked ? 'fill-current' : ''}`} />
          </button>

          {/* Timer Clock */}
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border font-mono font-bold text-xs sm:text-sm transition ${
            timeLeft < 180 
              ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 animate-pulse' 
              : 'bg-slate-800 text-slate-200 border-slate-700'
          }`}>
            <Clock className="w-4 h-4 text-emerald-400" />
            <span>{formatTimer(timeLeft)}</span>
          </div>

          <button
            onClick={handleInitiateSubmit}
            className="hidden sm:inline-flex px-3.5 py-1.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-xs shadow-lg shadow-red-950/40 transition cursor-pointer"
          >
            समाप्त (Submit)
          </button>
        </div>
      </header>

      {/* Mobile Live Counter Strip */}
      <div className="md:hidden w-full bg-slate-900/95 border-b border-slate-800 px-4 py-1.5 flex items-center justify-between text-[11px] font-mono font-bold shrink-0 z-15">
        <span className="text-emerald-400 flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
          Att: {attemptedCount}
        </span>
        <span className="text-amber-400 flex items-center gap-1">
          <SkipForward className="w-3 h-3 text-amber-400" />
          Skip: {skippedCount}
        </span>
        <span className="text-slate-400 flex items-center gap-1">
          <HelpCircle className="w-3 h-3 text-slate-400" />
          Rem: {remainingCount}
        </span>
      </div>

      {/* Expandable Question Palette Grid (1 to 50) */}
      {showPalette && (
        <div className="w-full bg-slate-900/98 border-b border-slate-800 p-3 sm:p-4 backdrop-blur-xl z-30 shadow-2xl animate-in fade-in slide-in-from-top-1 duration-150 shrink-0">
          <div className="max-w-4xl mx-auto space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-2">
              <div className="flex items-center gap-2">
                <LayoutGrid className="w-4 h-4 text-cyan-400" />
                <h3 className="text-xs sm:text-sm font-bold text-slate-100">
                  प्रश्न सङ्केत ग्रिड (Question Palette: १ – {totalQuestions})
                </h3>
              </div>

              {/* Status Color Legend */}
              <div className="flex items-center gap-3 text-[11px] font-medium">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-md bg-emerald-600 border border-emerald-500 inline-block" />
                  <span className="text-emerald-300">हल गरिएको ({attemptedCount})</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-md bg-amber-500 border border-amber-400 inline-block" />
                  <span className="text-amber-300">छाडिएको ({skippedCount})</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-md bg-slate-800 border border-slate-700 inline-block" />
                  <span className="text-slate-400">नहेरिएको ({remainingCount})</span>
                </div>
                <button
                  onClick={() => setShowPalette(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition ml-2"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 50-grid buttons */}
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5 sm:gap-2 max-h-48 overflow-y-auto pr-1">
              {questions.map((q, idx) => {
                const isCurr = currentIndex === idx;
                const isAtt = Boolean(selectedAnswers[q.id]);
                const isSkip = Boolean(!selectedAnswers[q.id] && skippedQuestions[q.id]);

                let btnStyle = 'bg-slate-800/90 text-slate-400 border-slate-700/80 hover:bg-slate-700 hover:text-slate-200';
                if (isAtt) {
                  btnStyle = 'bg-emerald-600 hover:bg-emerald-500 text-white font-bold border-emerald-500 shadow-sm shadow-emerald-950/40';
                } else if (isSkip) {
                  btnStyle = 'bg-amber-500 hover:bg-amber-400 text-slate-950 font-black border-amber-400 shadow-sm shadow-amber-950/40';
                }

                return (
                  <button
                    key={q.id || idx}
                    type="button"
                    onClick={() => {
                      setCurrentIndex(idx);
                      if (window.innerWidth < 640) setShowPalette(false);
                    }}
                    className={`h-8 sm:h-9 rounded-xl border text-xs flex items-center justify-center transition-all cursor-pointer font-mono ${btnStyle} ${
                      isCurr ? 'ring-2 ring-cyan-400 ring-offset-2 ring-offset-slate-900 scale-105 z-10 font-black' : ''
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Progress & Real-time Live Negative Marking Bar */}
      <div className="w-full bg-slate-900 border-b border-slate-800/80 px-4 sm:px-8 py-2 shrink-0 z-10">
        <div className="flex items-center justify-between text-xs mb-1.5">
          <div className="flex items-center gap-3">
            <span className="font-extrabold text-slate-300">
              प्रश्न <span className="text-emerald-400 font-mono">{currentIndex + 1}</span> / {totalQuestions}
            </span>
            
            {/* Unique Question ID pill */}
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-800/90 text-cyan-300 font-mono text-[11px] border border-cyan-500/30">
              <Hash className="w-3 h-3 text-cyan-400" />
              ID: {currentQuestion.id}
            </span>

            {/* Negative Marking Tag */}
            <span className="hidden md:inline-flex items-center gap-1 text-[11px] text-rose-400/90 font-medium">
              <Percent className="w-3 h-3" />
              नेगेटिभ मार्किङ: -२०% (प्रत्येक गलत उत्तर)
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono font-bold">
            <span className="text-emerald-400">सही: {calculatedCorrect}</span>
            <span className="text-rose-400">गलत: {calculatedIncorrect} (-{negativeDeductions})</span>
            <span className="text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
              खुद: {currentNetScore}
            </span>
          </div>
        </div>

        {/* Dynamic Progress Bar */}
        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Main Interactive Question Canvas */}
      <main className="flex-1 overflow-y-auto px-4 sm:px-8 py-4 sm:py-6 flex flex-col items-center">
        <div className="w-full max-w-3xl space-y-4">

          {/* Question Metadata Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                {currentQuestion.category}
              </span>
              {currentQuestion.difficulty && (
                <span className={`px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase border ${
                  currentQuestion.difficulty === 'Easy'
                    ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                    : currentQuestion.difficulty === 'Medium'
                    ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                    : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                }`}>
                  {currentQuestion.difficulty}
                </span>
              )}
              {currentQuestion.syllabusModule && (
                <span className="inline-flex items-center px-2 py-0.5 rounded-lg bg-slate-800/90 text-blue-300 dark:text-blue-300 text-[10px] sm:text-[11px] font-semibold border border-blue-500/30 max-w-[280px] sm:max-w-none truncate">
                  {currentQuestion.syllabusModule}
                </span>
              )}
            </div>

            {/* Non-repeating guarantee badge */}
            <div className="flex items-center gap-1.5 text-[11px] text-emerald-400/90 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>१००% अद्वितीय (१ पटक मात्र सोधिने)</span>
            </div>
          </div>

          {/* Question Card with Strict 2-Column Table & Vertical Bulleted Formatter */}
          <div className="p-5 sm:p-6 bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl">
            <FormattedQuestionContent
              questionNepali={currentQuestion.questionNepali}
              questionEnglish={currentQuestion.questionEnglish}
              theme="dark"
              fontSize="base"
            />
          </div>

          {/* Options Grid (A, B, C, D) with Distinct Vertical Boxes and Subtle Hover Effects */}
          <div className="grid grid-cols-1 gap-2.5 sm:gap-3">
            {currentQuestion.options?.map(opt => {
              const isChosen = currentSelection === opt.key;
              const isCorrectAnswer = opt.key === currentQuestion.correctAnswer;

              let btnClasses = "w-full p-3.5 sm:p-4 rounded-2xl border text-left flex items-start gap-3.5 transition-all duration-200 cursor-pointer ";
              let badgeClasses = "w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center font-bold text-sm sm:text-base shrink-0 transition font-mono ";
              let iconElement = null;

              if (!isAnswered) {
                // Unanswered state - distinct vertical options with clear borders and subtle hover effects
                btnClasses += "bg-slate-900/80 border-slate-800 hover:border-cyan-500/60 hover:bg-slate-800/90 text-slate-100 hover:shadow-md hover:translate-x-0.5";
                badgeClasses += "bg-slate-800 text-slate-300 border border-slate-700 group-hover:border-cyan-400 group-hover:text-cyan-300";
              } else if (isCorrectAnswer) {
                // Correct Answer (Green)
                btnClasses += "bg-emerald-950/50 border-emerald-500 text-emerald-100 shadow-lg shadow-emerald-950/60 ring-2 ring-emerald-500/40";
                badgeClasses += "bg-emerald-500 text-slate-950 font-black shadow-md";
                iconElement = <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 ml-auto mt-1" />;
              } else if (isChosen && !isCorrectAnswer) {
                // Incorrect Selection (Red)
                btnClasses += "bg-rose-950/50 border-rose-500 text-rose-100 shadow-lg shadow-rose-950/60 ring-2 ring-rose-500/40";
                badgeClasses += "bg-rose-500 text-white font-black shadow-md";
                iconElement = <XCircle className="w-5 h-5 text-rose-400 shrink-0 ml-auto mt-1" />;
              } else {
                // Unselected wrong options
                btnClasses += "bg-slate-900/40 border-slate-800/60 text-slate-500 opacity-60";
                badgeClasses += "bg-slate-800/50 text-slate-500 border border-slate-800";
              }

              return (
                <button
                  key={opt.key}
                  disabled={isAnswered}
                  onClick={() => handleSelectOption(opt.key)}
                  className={`group ${btnClasses}`}
                >
                  <span className={badgeClasses}>{opt.key}</span>
                  <div className="flex-1 pt-0.5">
                    <span className="text-base sm:text-[17px] font-medium leading-relaxed font-mukta text-slate-100 block">
                      {opt.textNepali}
                    </span>
                    {opt.textEnglish && (
                      <p className="text-xs sm:text-sm text-slate-400 font-medium italic mt-1 leading-normal font-sans">
                        {opt.textEnglish}
                      </p>
                    )}
                  </div>
                  {iconElement}
                </button>
              );
            })}
          </div>

          {/* Auto-Expanding Detailed Step-by-Step Nepali Explanation Drawer */}
          {isAnswered && (
            <div className="p-4 sm:p-5 bg-slate-900/95 rounded-2xl border border-slate-800 shadow-2xl space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
              
              {/* Answer Status Banner */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  {currentSelection === currentQuestion.correctAnswer ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-500/20 text-emerald-400 font-extrabold text-xs border border-emerald-500/30">
                      <Check className="w-4 h-4" /> सही उत्तर! (+{markPerCorrect} अङ्क, +10 XP)
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-rose-500/20 text-rose-400 font-extrabold text-xs border border-rose-500/30">
                      <X className="w-4 h-4" /> गलत उत्तर (-२०% नेगेटिभ कट्टा: -{penaltyPerIncorrect} mark penalty / -{penaltyPerIncorrect} अङ्क)
                    </span>
                  )}
                  
                  <span className="text-xs text-slate-300 font-semibold">
                    सहि विकल्प: <strong className="text-emerald-400 font-mono font-black">{currentQuestion.correctAnswer}</strong>
                  </span>
                </div>

                {currentQuestion.actSection && (
                  <span className="px-2.5 py-0.5 rounded-lg bg-blue-500/10 text-blue-300 font-mono text-[11px] border border-blue-500/20">
                    ऐन / दफा: {currentQuestion.actSection}
                  </span>
                )}
              </div>

              {/* Detailed Nepali Explanation Body */}
              <div className="space-y-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <div className="flex items-center gap-1.5 font-bold text-slate-200">
                  <BookOpen className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>विस्तृत नेपाली व्याख्या (Detailed Explanation):</span>
                </div>
                <p className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 text-slate-200">
                  {currentQuestion.explanationNepali || 'यस प्रश्नको आधिकारिक स्रोत अनुसार सहि उत्तर माथि उल्लेख गरिएको विकल्प हो।'}
                </p>
              </div>

              {/* Lok Sewa Contextual Exam Tip */}
              <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-200/90 text-xs leading-relaxed">
                {currentTip}
              </div>
            </div>
          )}

        </div>
      </main>

      {/* Bottom Sticky Action Bar */}
      <footer className="h-16 px-3 sm:px-8 bg-slate-900/90 backdrop-blur-xl border-t border-slate-800 flex items-center justify-between shrink-0 z-20">
        {/* Previous Question */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
            currentIndex === 0 
              ? 'text-slate-600 bg-slate-900/40 cursor-not-allowed' 
              : 'text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white cursor-pointer'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden xs:inline">अघिल्लो</span> (Prev)
        </button>

        {/* Center: Dedicated Skip Button & Palette Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Dedicated Skip / छाड्नुहोस् Button */}
          <button
            type="button"
            onClick={handleSkip}
            className="flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/40 hover:border-amber-400 transition cursor-pointer shadow-sm active:scale-95"
            title="यस प्रश्नलाई बिना उत्तर छाड्नुहोस् (Skip question for review later)"
          >
            <SkipForward className="w-4 h-4 text-amber-400" />
            <span>छाड्नुहोस् (Skip)</span>
          </button>

          {/* Quick Palette toggle on mobile */}
          <button
            type="button"
            onClick={() => setShowPalette(prev => !prev)}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition sm:hidden"
            title="प्रश्न ग्रिड हेर्नुहोस्"
          >
            <LayoutGrid className="w-4 h-4 text-cyan-400" />
          </button>

          {/* Answered Progress Counter */}
          <span className="text-xs text-slate-400 font-medium hidden sm:inline-block">
            {attemptedCount}/{totalQuestions} हल गरियो
          </span>
        </div>

        {/* Next / Finish Button */}
        <div className="flex items-center gap-2">
          {isLastQuestion ? (
            <button
              onClick={handleInitiateSubmit}
              className="flex items-center gap-1.5 px-5 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-black bg-[#DC2626] hover:bg-[#B91C1C] text-white shadow-lg shadow-red-950/40 transition cursor-pointer active:scale-95"
            >
              नतिजा हेर्नुहोस् (Finish)
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-cyan-600 hover:bg-cyan-500 text-white shadow-md shadow-cyan-950/40 transition cursor-pointer active:scale-95"
            >
              <span>पछिल्लो (Next)</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </footer>

      {/* Pre-Submission Review Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-slate-900 p-5 sm:p-7 rounded-3xl max-w-lg w-full border border-slate-800 shadow-2xl space-y-5">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-white text-base sm:text-lg">
                    परीक्षा बुझाउने पूर्व-समीक्षा
                  </h3>
                  <p className="text-xs text-slate-400">Pre-Submission Status Review</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowSubmitModal(false)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Live Count Summary Cards */}
            <div className="grid grid-cols-3 gap-2.5">
              <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-2xl p-3 text-center">
                <div className="text-xs font-bold text-emerald-400 mb-0.5 flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> हल गरिएको
                </div>
                <div className="text-xl sm:text-2xl font-black text-emerald-300 font-mono">
                  {attemptedCount}
                </div>
                <div className="text-[10px] text-emerald-400/80 font-medium">Attempted</div>
              </div>

              <div className="bg-amber-950/30 border border-amber-500/30 rounded-2xl p-3 text-center">
                <div className="text-xs font-bold text-amber-400 mb-0.5 flex items-center justify-center gap-1">
                  <SkipForward className="w-3.5 h-3.5" /> छाडिएको
                </div>
                <div className="text-xl sm:text-2xl font-black text-amber-300 font-mono">
                  {skippedCount}
                </div>
                <div className="text-[10px] text-amber-400/80 font-medium">Skipped</div>
              </div>

              <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-3 text-center">
                <div className="text-xs font-bold text-slate-400 mb-0.5 flex items-center justify-center gap-1">
                  <HelpCircle className="w-3.5 h-3.5" /> बाँकी
                </div>
                <div className="text-xl sm:text-2xl font-black text-slate-300 font-mono">
                  {remainingCount}
                </div>
                <div className="text-[10px] text-slate-400 font-medium">Remaining</div>
              </div>
            </div>

            {/* Skipped Questions Quick Jump List */}
            {skippedList.length > 0 && (
              <div className="space-y-2 bg-amber-500/10 border border-amber-500/25 rounded-2xl p-3.5">
                <div className="flex items-center justify-between text-xs font-bold text-amber-300">
                  <span className="flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-amber-400" />
                    छाडिएका प्रश्नहरू ({skippedList.length} वटा - Quick Jump):
                  </span>
                  <span className="text-[11px] text-amber-400/80 font-normal">क्लिक गरी हल गर्नुहोस्</span>
                </div>
                <div className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto pr-1">
                  {skippedList.map(item => (
                    <button
                      key={item.q.id}
                      type="button"
                      onClick={() => {
                        setCurrentIndex(item.idx);
                        setShowSubmitModal(false);
                      }}
                      className="px-2.5 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono font-black text-xs transition cursor-pointer shadow-sm"
                      title={`प्रश्न ${item.num} मा जानुहोस्`}
                    >
                      Q.{item.num}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Unvisited Questions Quick Jump */}
            {unvisitedList.length > 0 && (
              <div className="space-y-2 bg-slate-800/40 border border-slate-700/60 rounded-2xl p-3">
                <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
                    नहेरिएका प्रश्नहरू ({unvisitedList.length} वटा):
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentIndex(unvisitedList[0].idx);
                      setShowSubmitModal(false);
                    }}
                    className="text-[11px] text-cyan-400 hover:underline font-bold cursor-pointer"
                  >
                    पहिलो नहेरिएकोमा जानुहोस् (Q.{unvisitedList[0].num})
                  </button>
                </div>
                <div className="flex flex-wrap gap-1.5 max-h-20 overflow-y-auto pr-1">
                  {unvisitedList.slice(0, 15).map(item => (
                    <button
                      key={item.q.id}
                      type="button"
                      onClick={() => {
                        setCurrentIndex(item.idx);
                        setShowSubmitModal(false);
                      }}
                      className="px-2 py-0.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono text-[11px] border border-slate-700 transition cursor-pointer"
                    >
                      Q.{item.num}
                    </button>
                  ))}
                  {unvisitedList.length > 15 && (
                    <span className="text-[10px] text-slate-500 self-center">
                      +{unvisitedList.length - 15} थप
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Negative Marking Rule Advisory */}
            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
              <p>
                <strong className="text-rose-400">नेगेटिभ मार्किङ नीति:</strong> गलत उत्तरमा २०% (-०.४ अङ्क) कट्टा हुनेछ। छाडिएका प्रश्नहरूमा कुनै अङ्क काटिने छैन।
              </p>
            </div>

            {/* Modal Action Buttons */}
            <div className="flex gap-2.5 pt-1">
              <button
                type="button"
                onClick={() => setShowSubmitModal(false)}
                className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs sm:text-sm transition cursor-pointer"
              >
                समीक्षा जारी राख्नुहोस्
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowSubmitModal(false);
                  handleSubmitQuiz();
                }}
                className="flex-1 py-2.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-red-950/40 transition cursor-pointer"
              >
                निश्चय नै बुझाउनुहोस् (Submit)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Exit Modal */}
      {confirmExit && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 p-6 rounded-3xl max-w-sm w-full border border-slate-800 shadow-2xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">क्विज छोड्न चाहनुहुन्छ?</h3>
                <p className="text-xs text-slate-400">हालसम्मको प्रगति सुरक्षित गरिने छैन।</p>
              </div>
            </div>
            <div className="flex gap-2.5 pt-2">
              <button
                onClick={() => setConfirmExit(false)}
                className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition"
              >
                होइन, जारी राख्नुहोस्
              </button>
              <button
                onClick={onExit}
                className="flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs transition"
              >
                छोड्नुहोस् (Exit)
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export { QuizEngine as ActiveQuiz };
export default QuizEngine;
