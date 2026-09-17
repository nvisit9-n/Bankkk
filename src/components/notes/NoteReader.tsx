import React, { useState } from 'react';
import { 
  X, 
  Bookmark, 
  Share2, 
  CheckSquare, 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  BookOpen, 
  ArrowLeft, 
  ArrowRight,
  Award,
  Sparkles,
  Check,
  ExternalLink,
  Download,
  Printer
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { StudyNote, QuizSet } from '../../types';
import { MOCK_QUESTIONS } from '../../data/mockData';
import { BareActReader } from './BareActReader';
import { MarkdownRenderer } from '../common/MarkdownRenderer';
import { safeCopyToClipboard } from '../../utils/safeHelpers';
import { PaidContentLock } from '../premium/PaidContentLock';
import { ActivityTrackingService } from '../../services/activityTrackingService';

interface NoteReaderProps {
  note: StudyNote;
  onClose: () => void;
}

export const NoteReader: React.FC<NoteReaderProps> = ({ note, onClose }) => {
  const { toggleBookmark, isBookmarked, startQuiz, requireAuth, user } = useApp();
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [copiedShare, setCopiedShare] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const isUserAuthenticated = !!user && !user.isGuest && !!user.email;

  React.useEffect(() => {
    if (!isUserAuthenticated) {
      requireAuth(() => {}, 'सामग्री पढ्न, पीडीएफ डाउनलोड गर्न र परीक्षा दिन लगइन गर्नुहोस्।');
    }
  }, [isUserAuthenticated, requireAuth]);

  if (!note) return null;

  if (!isUserAuthenticated) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
        <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl text-center space-y-5 max-w-md w-full border border-slate-200 dark:border-slate-800 shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/80 flex items-center justify-center mx-auto text-[#0B2046] dark:text-blue-300">
            <BookOpen className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
              अध्ययन सामग्री लक गरिएको छ
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
              विस्तृत परीक्षा तयारी नोट्स, आधिकारिक ऐन तथा पीडीएफ डाउनलोड गर्नका लागि कृपया आफ्नो खातामा लगइन गर्नुहोस्।
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
              onClick={onClose}
              className="py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-sm transition"
            >
              बन्द गर्नुहोस्
            </button>
          </div>
        </div>
      </div>
    );
  }

  const sectionsList = note.sections || [];
  const totalPages = Math.max(2, sectionsList.length);

  const bookmarked = isBookmarked('note', note.id);

  const handleToggleBookmark = () => {
    toggleBookmark('note', note.id, note.title, note.subject);
  };

  const handleDownloadPdf = () => {
    if (!requireAuth(() => handleDownloadPdf(), 'सामग्री पढ्न, पीडीएफ डाउनलोड गर्न र परीक्षा दिन लगइन गर्नुहोस्।')) {
      return;
    }
    if (user && !user.isGuest) {
      ActivityTrackingService.logDownload({
        user,
        fileId: note.id,
        fileName: `${note.title.replace(/\s+/g, '_')}.pdf`,
        fileType: 'PDF',
        resourceCategory: 'StudyNote',
        fileSize: 'Printable PDF'
      }).catch(() => {});
    }
    window.print();
  };

  const handleShare = async () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const success = await safeCopyToClipboard(url);
    if (success) {
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  const handleStartTopicQuiz = () => {
    if (!requireAuth(() => handleStartTopicQuiz(), 'सामग्री पढ्न, पीडीएफ डाउनलोड गर्न र परीक्षा दिन लगइन गर्नुहोस्।')) {
      return;
    }
    // Generate related quiz for this note's topic
    const relatedQuestions = MOCK_QUESTIONS.filter(
      q => q.category === note.subject || q.topic === 'Re-engineering'
    ).slice(0, 10);

    const questionsToUse = relatedQuestions.length > 0 ? relatedQuestions : MOCK_QUESTIONS.slice(0, 10);

    const quizSet: QuizSet = {
      id: `quiz-topic-${note.id}`,
      title: `${note.title} - विशेष अभ्यास क्विज`,
      description: `${note.title} सम्बन्धी विषयगत तथा वस्तुगत परीक्षाका लागि १० अभ्यास प्रश्नहरू`,
      category: note.subject,
      difficulty: 'Medium',
      mode: 'practice',
      timeLimitMinutes: 5,
      questions: questionsToUse,
      badge: 'Topic Quiz'
    };

    onClose();
    startQuiz(quizSet);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex flex-col justify-between overflow-hidden animate-fadeIn">
      
      {/* Top Header Controls Bar */}
      <header className="h-16 px-4 sm:px-6 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between text-slate-800 dark:text-white shrink-0">
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            title="Close Note"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="min-w-0">
            <h2 className="font-extrabold text-sm sm:text-base truncate">
              {note.title}
            </h2>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span>{note.subject}</span>
              <span>•</span>
              <span>{note.readTime}</span>
            </div>
          </div>
        </div>

        {/* Reader Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          
          {/* Zoom controls */}
          <div className="hidden sm:flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300">
            <button 
              onClick={() => setZoomLevel(prev => Math.max(80, prev - 10))}
              className="p-1 hover:text-emerald-600"
              title="Zoom out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="w-10 text-center">{zoomLevel}%</span>
            <button 
              onClick={() => setZoomLevel(prev => Math.min(130, prev + 10))}
              className="p-1 hover:text-emerald-600"
              title="Zoom in"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Bookmark Button */}
          <button
            onClick={handleToggleBookmark}
            className={`p-2 rounded-xl border transition ${
              bookmarked
                ? 'bg-amber-500 text-white border-amber-500'
                : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
            title="Bookmark Note"
          >
            <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-white' : ''}`} />
          </button>

          {/* PDF Download / Print Button */}
          <button
            onClick={handleDownloadPdf}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            title="Download / Print Note as PDF"
          >
            <Download className="w-4 h-4" />
          </button>

          {/* Share Button */}
          <button
            onClick={handleShare}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition relative"
            title="Share"
          >
            {copiedShare ? (
              <Check className="w-4 h-4 text-emerald-500" />
            ) : (
              <Share2 className="w-4 h-4" />
            )}
            {copiedShare && (
              <span className="absolute -bottom-8 right-0 bg-slate-900 text-white text-[10px] px-2 py-1 rounded shadow whitespace-nowrap">
                लिङ्क कपी भयो!
              </span>
            )}
          </button>

          {/* Take Quiz from Note Header */}
          <button
            onClick={handleStartTopicQuiz}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition"
          >
            <CheckSquare className="w-3.5 h-3.5" />
            <span>Take Quiz</span>
          </button>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Reader Body / Content Canvas */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-8 flex justify-center bg-slate-100 dark:bg-slate-950">
        <div className="w-full max-w-5xl transition-all duration-150">
          {note.isPremium ? (
            <PaidContentLock resourceTitle={note.title} resourceType="note">
              <div 
                className="w-full bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-10 text-slate-800 dark:text-slate-100 space-y-8"
                style={{ fontSize: `${zoomLevel}%` }}
              >
                <div className="border-b border-slate-100 dark:border-slate-800 pb-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 text-xs font-bold">
                      PRO Note
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium">
                      {note.subject}
                    </span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-snug">
                    {note.title}
                  </h1>
                </div>

                <div className="space-y-6">
                  {(note.sections || []).map((sec, idx) => (
                    <section key={idx} className="space-y-3">
                      <h3 className="text-lg sm:text-xl font-bold text-emerald-700 dark:text-emerald-400 border-l-4 border-emerald-600 pl-3">
                        {sec.heading}
                      </h3>
                      <div className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
                        <MarkdownRenderer content={sec.content} />
                      </div>
                    </section>
                  ))}
                </div>
              </div>
            </PaidContentLock>
          ) : note.actData ? (
            <BareActReader 
              act={note.actData} 
              zoomLevel={zoomLevel} 
              onStartQuiz={handleStartTopicQuiz}
            />
          ) : (
            <div 
              className="w-full bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-10 text-slate-800 dark:text-slate-100 space-y-8"
              style={{ fontSize: `${zoomLevel}%` }}
            >
              {/* Note Banner Header */}
              <div className="border-b border-slate-100 dark:border-slate-800 pb-6 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
                    {note.category} Note
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium">
                    {note.subject}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-snug">
                  {note.title}
                </h1>

                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  बैंकिङ तथा लोकसेवा परीक्षाको प्रथम र द्वितीय पत्रका लागि विषयगत विशेष टिपोट
                </p>
              </div>

              {/* Exam Tip Callout */}
              {note.examTip && (
                <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-amber-900 dark:text-amber-200 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Exam Preparation Point:</p>
                    <p className="mt-0.5">{note.examTip}</p>
                  </div>
                </div>
              )}

              {/* Sections */}
              <div className="space-y-8">
                {(note.sections || []).map((sec, idx) => (
                  <section key={idx} className="space-y-3">
                    <h3 className="text-lg sm:text-xl font-bold text-emerald-700 dark:text-emerald-400 border-l-4 border-emerald-600 pl-3">
                      {sec.heading}
                    </h3>
                    <div className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
                      <MarkdownRenderer content={sec.content} />
                    </div>

                    {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                      <ul className="space-y-2 mt-2 pl-2">
                        {(sec.bulletPoints || []).map((pt, pidx) => (
                          <li key={pidx} className="text-sm sm:text-base text-slate-700 dark:text-slate-300 flex items-start gap-2.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-2" />
                            <div className="flex-1">
                              <MarkdownRenderer content={pt} />
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>

              {/* Comparison Cards / Table */}
              {note.comparisonTable && note.comparisonTable.rows && note.comparisonTable.rows.length > 0 && (
                <section className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Award className="w-5 h-5 text-emerald-600" />
                    <span>{note.comparisonTable.title}</span>
                  </h3>

                  <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
                    <table className="w-full text-left border-collapse text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-white font-extrabold border-b border-slate-200 dark:border-slate-700">
                          {note.comparisonTable.headers?.map((hdr, hIdx) => (
                            <th key={hIdx} className="p-3.5 sm:p-4 whitespace-nowrap">
                              {hdr}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {(note.comparisonTable.rows || []).map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                            {row.columns && row.columns.length > 0 ? (
                              row.columns.map((colVal: string, cIdx: number) => (
                                <td 
                                  key={cIdx} 
                                  className={`p-3.5 sm:p-4 ${
                                    cIdx === 0 
                                      ? 'font-bold text-slate-900 dark:text-white bg-slate-50/50 dark:bg-slate-800/20' 
                                      : 'text-slate-700 dark:text-slate-300'
                                  }`}
                                >
                                  {colVal}
                                </td>
                              ))
                            ) : (
                              <>
                                <td className="p-3.5 sm:p-4 font-bold text-slate-900 dark:text-white bg-slate-50/50 dark:bg-slate-800/20">
                                  {row.attribute}
                                </td>
                                <td className="p-3.5 sm:p-4 text-slate-700 dark:text-slate-300">
                                  {row.traditional}
                                </td>
                                <td className="p-3.5 sm:p-4 text-emerald-950 dark:text-emerald-200 font-medium bg-emerald-50/30 dark:bg-emerald-950/20">
                                  {row.reengineering}
                                </td>
                              </>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              )}

              {/* Bottom Callout: यस Topic बाट Quiz खेल्नुहोस् */}
              <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white text-center space-y-4 shadow-xl">
                <h3 className="text-xl sm:text-2xl font-black">
                  यस Topic बाट Quiz खेल्नुहोस्
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100 max-w-md mx-auto">
                  तपाईंले भर्खरै पढेका सिद्धान्त, कानुन र तथ्याङ्कहरूको आधारमा तयार पारिएका वस्तुगत प्रश्नहरू हल गरी आफ्नो ज्ञान परीक्षण गर्नुहोस्।
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleStartTopicQuiz}
                    className="px-6 py-3.5 bg-white hover:bg-emerald-50 text-emerald-800 font-extrabold text-sm sm:text-base rounded-2xl shadow-lg hover:scale-105 transition-all inline-flex items-center gap-2"
                  >
                    <CheckSquare className="w-5 h-5 text-emerald-600" />
                    <span>१० प्रश्नको Quiz सुरु गर्नुहोस्</span>
                  </button>
                </div>
              </div>

            </div>
          )}
        </div>
      </div>

      {/* Reader Bottom Navigation Bar */}
      <footer className="h-14 px-6 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 shrink-0">
        <div className="flex items-center gap-2">
          {note.actData ? (
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              {note.actData.shortName} • {note.actData.totalChapters} परिच्छेद • {note.actData.totalSections} दफा
            </span>
          ) : (
            <span>पृष्ठ १ / {totalPages}</span>
          )}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleStartTopicQuiz}
            className="md:hidden flex items-center gap-1 font-bold text-emerald-600"
          >
            <CheckSquare className="w-4 h-4" />
            <span>Quiz खेल्नुहोस्</span>
          </button>
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 font-semibold text-slate-700 dark:text-slate-300"
          >
            बन्द गर्नुहोस्
          </button>
        </div>
      </footer>

    </div>
  );
};
