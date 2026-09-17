import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Trophy, 
  RotateCcw, 
  Home, 
  Eye, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Award, 
  Zap, 
  ChevronDown,
  Sparkles,
  Check
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { QuizResultData, Question } from '../../types';
import { MOCK_QUESTIONS } from '../../data/mockData';
import { ALL_QUIZ_QUESTIONS, convertQuizQuestionToQuestion } from '../../data/quizData';
import { FormattedQuestionContent } from './FormattedQuestionContent';

interface QuizResultProps {
  result: QuizResultData;
  onRetry: () => void;
  onHome: () => void;
}

export const QuizResult: React.FC<QuizResultProps> = ({ result, onRetry, onHome }) => {
  const [showReview, setShowReview] = useState<boolean>(false);

  // Trigger celebratory confetti on high scores
  useEffect(() => {
    if (result.accuracy >= 60) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // canvas-confetti fallback
      }
    }
  }, [result.accuracy]);

  const formatSeconds = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Performance message
  let feedbackMessage = 'राम्रो प्रयास! कमजोरी भएका खण्डहरू पुनः दोहोर्याएर पढ्नुहोस्।';
  if (result.accuracy >= 80) {
    feedbackMessage = '🎉 उत्कृष्ट नतिजा! तपाईंको बैंकिङ र लोकसेवा तयारी उच्च स्तरको छ। यही निरन्तरता कायम राख्नुहोस्!';
  } else if (result.accuracy >= 50) {
    feedbackMessage = '👍 सन्तोषजनक नतिजा! गलत भएका प्रश्नहरूको व्याख्या अध्ययन गर्नुहोस् र पुनः प्रयास गर्नुहोस्।';
  } else {
    feedbackMessage = '📚 निरन्तर अभ्यास आवश्यक छ! कृपया सम्बन्धित विषयका अध्ययन नोट्सहरू राम्ररी पुनरावलोकन गर्नुहोस्।';
  }

  // Get question objects for review
  const allQuestionsMap = new Map<string, Question>();
  MOCK_QUESTIONS.forEach(q => allQuestionsMap.set(q.id, q));
  ALL_QUIZ_QUESTIONS.forEach(q => {
    if (!allQuestionsMap.has(q.id)) {
      allQuestionsMap.set(q.id, convertQuizQuestionToQuestion(q));
    }
  });

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-16 animate-fadeIn">
      
      {/* Top Completion Trophy Card */}
      <div className="p-8 rounded-3xl bg-gradient-to-b from-white to-emerald-50/50 dark:from-slate-900 dark:to-emerald-950/20 border border-emerald-200/60 dark:border-emerald-800/60 text-center space-y-4 shadow-xl">
        <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
          <Trophy className="w-10 h-10" />
        </div>

        <div>
          <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
            Quiz Completed 🎉
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-2">
            {result.quizTitle}
          </h1>
          <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 font-medium max-w-lg mx-auto mt-2">
            {feedbackMessage}
          </p>
        </div>

        {/* Primary Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
          
          <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">प्राप्ताङ्क (Score)</p>
            <p className="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-0.5">
              {result.score} <span className="text-xs text-slate-400 font-medium">/ {result.totalQuestions}</span>
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">शुद्धता (Accuracy)</p>
            <p className="text-2xl font-black text-blue-600 dark:text-blue-400 mt-0.5">
              {result.accuracy}%
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">लागेको समय (Time)</p>
            <p className="text-2xl font-black text-slate-800 dark:text-slate-200 mt-0.5 flex items-center justify-center gap-1 font-mono">
              <Clock className="w-4 h-4 text-slate-400" />
              {formatSeconds(result.timeSpentSeconds)}
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">XP आर्जन (Reward)</p>
            <p className="text-2xl font-black text-amber-500 mt-0.5 flex items-center justify-center gap-1">
              <Zap className="w-5 h-5 fill-amber-500" />
              +{result.xpEarned}
            </p>
          </div>

        </div>

        {/* Detailed Breakdown Pill Counts */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-bold pt-2">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
            <CheckCircle2 className="w-4 h-4" /> सही (Gross): {result.correctAnswers}
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800">
            <XCircle className="w-4 h-4" /> गलत (-२०%): {result.incorrectAnswers} (-{(result.incorrectAnswers * 0.2).toFixed(2)})
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
            छोडेको: {result.unattempted}
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-700">
            खुद प्राप्ताङ्क (Net Score): {result.score}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => setShowReview(!showReview)}
            className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2"
          >
            <Eye className="w-4 h-4" />
            <span>{showReview ? 'समीक्षा बन्द गर्नुहोस्' : 'उत्तर समीक्षा हेर्नुहोस् (Review Answers)'}</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${showReview ? 'rotate-180' : ''}`} />
          </button>

          <button
            onClick={onRetry}
            className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold text-xs sm:text-sm shadow-md shadow-red-600/20 transition flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Retry Quiz (पुनः खेल्नुहोस्)</span>
          </button>

          <button
            onClick={onHome}
            className="w-full sm:w-auto px-5 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs sm:text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
        </div>

      </div>

      {/* Review Answers Accordion View */}
      {showReview && (
        <div className="space-y-4 pt-4 animate-fadeIn">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
              सम्पूर्ण प्रश्न तथा उत्तर विश्लेषण (Detailed Question Review):
            </h3>
            <span className="text-xs text-slate-500">
              कुल {result.totalQuestions} प्रश्न
            </span>
          </div>

          <div className="space-y-4">
            {Object.entries(result.userAnswers).map(([qId, userSelectedOption], idx) => {
              const q = allQuestionsMap.get(qId);
              if (!q) return null;

              const isCorrect = userSelectedOption === q.correctAnswer;
              const isUnattempted = !userSelectedOption;

              return (
                <div 
                  key={qId}
                  className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-400">
                      प्रश्न {idx + 1}
                    </span>
                    {isCorrect && (
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> सही (+१० XP)
                      </span>
                    )}
                    {!isCorrect && !isUnattempted && (
                      <span className="px-2.5 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300 font-bold flex items-center gap-1">
                        <XCircle className="w-3.5 h-3.5" /> गलत उत्तर
                      </span>
                    )}
                    {isUnattempted && (
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-bold">
                        छोडिएको
                      </span>
                    )}
                  </div>

                  <div className="py-1">
                    <FormattedQuestionContent
                      questionNepali={q.questionNepali}
                      questionEnglish={q.questionEnglish}
                      theme="auto"
                      fontSize="sm"
                    />
                  </div>

                  {/* Options status */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
                    {(q.options || []).map(opt => {
                      const isOptionCorrect = opt.key === q.correctAnswer;
                      const wasSelectedByUser = userSelectedOption === opt.key;

                      let style = 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-transparent';

                      if (isOptionCorrect) {
                        style = 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 border-emerald-500 font-bold';
                      } else if (wasSelectedByUser && !isOptionCorrect) {
                        style = 'bg-rose-50 dark:bg-rose-950/60 text-rose-900 dark:text-rose-200 border-rose-500 line-through';
                      }

                      return (
                        <div
                          key={opt.key}
                          className={`p-2.5 rounded-xl border flex items-center justify-between ${style}`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-bold w-5">{opt.key}.</span>
                            <span>{opt.textNepali}</span>
                          </div>
                          {isOptionCorrect && <Check className="w-4 h-4 text-emerald-600" />}
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation */}
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    <span className="font-bold text-emerald-700 dark:text-emerald-400">व्याख्या: </span>
                    {q.explanationNepali}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
};
