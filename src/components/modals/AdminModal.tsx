import React, { useState, useEffect } from 'react';
import { 
  X, 
  ShieldCheck, 
  Database, 
  BarChart3, 
  PlusCircle, 
  FileText, 
  CheckSquare, 
  DollarSign, 
  Server,
  Layers,
  ArrowRight,
  TrendingUp,
  Users,
  Cloud,
  RefreshCw,
  Download,
  MapPin,
  Clock,
  AlertTriangle,
  Award,
  LogOut,
  Lock,
  Search,
  Trash2,
  Edit3,
  CheckCircle2,
  Video,
  Crown,
  Sparkles,
  Eye,
  Check,
  ToggleLeft,
  ToggleRight,
  Filter,
  Save,
  Mail
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Question, StudyNote, UserProfile, SubjectCategory } from '../../types';
import { VideoLecture } from '../../data/videoLectures';
import { DbService, AdminAnalyticsSummary, SyncConfig, PaymentVerificationRequest } from '../../services/dbService';
import { AnalyticsService, VisitorAnalyticsStats } from '../../services/analyticsService';
import { OFFICIAL_ADMIN_EMAIL } from '../../utils/sanitizer';
import { 
  ActivityTrackingService, 
  ActivityLogRecord, 
  DownloadEventRecord, 
  ExamScoreRecord 
} from '../../services/activityTrackingService';

export const AdminModal: React.FC = () => {
  const { isAdminModalOpen, setIsAdminModalOpen, logoutAdmin, purchases, addToast, user } = useApp();
  const [activeTab, setActiveTab] = useState<'analytics' | 'questions' | 'notes' | 'videos' | 'students' | 'cloudSync'>('analytics');

  const [summary, setSummary] = useState<AdminAnalyticsSummary>(() => DbService.getAnalyticsSummary());
  const [syncConfig, setSyncConfig] = useState<SyncConfig>(() => DbService.getSyncConfig());
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [customEndpoint, setCustomEndpoint] = useState<string>(syncConfig.cloudEndpoint);

  // Real-Time Visitor Analytics State
  const [visitorStats, setVisitorStats] = useState<VisitorAnalyticsStats | null>(null);
  const [gaMeasurementId, setGaMeasurementId] = useState<string>(() => AnalyticsService.getGaMeasurementId());

  // CMS State
  const [questions, setQuestions] = useState<Question[]>([]);
  const [questionSearch, setQuestionSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [editingQuestion, setEditingQuestion] = useState<Question | null>(null);
  const [isAddingQuestion, setIsAddingQuestion] = useState<boolean>(false);

  // Notes State
  const [notes, setNotes] = useState<StudyNote[]>([]);
  const [noteSearch, setNoteSearch] = useState('');
  const [isAddingNote, setIsAddingNote] = useState<boolean>(false);

  // Videos State
  const [videos, setVideos] = useState<VideoLecture[]>([]);
  const [videoSearch, setVideoSearch] = useState('');
  const [isAddingVideo, setIsAddingVideo] = useState<boolean>(false);

  // Students & Pro Licenses State
  const [students, setStudents] = useState<UserProfile[]>([]);
  const [studentSearch, setStudentSearch] = useState('');
  const [proEmailInput, setProEmailInput] = useState('');
  const [paymentVerifications, setPaymentVerifications] = useState<PaymentVerificationRequest[]>([]);

  // Persistent User Activity & Download Tracking State
  const [recentActivities, setRecentActivities] = useState<ActivityLogRecord[]>([]);
  const [recentDownloads, setRecentDownloads] = useState<DownloadEventRecord[]>([]);
  const [recentExamScores, setRecentExamScores] = useState<ExamScoreRecord[]>([]);
  const [isLoadingTracking, setIsLoadingTracking] = useState<boolean>(false);

  // Load real-time visitor metrics from backend
  const loadVisitorStats = async () => {
    try {
      const stats = await AnalyticsService.getRealTimeStats();
      if (stats) setVisitorStats(stats);
    } catch (e) {
      console.warn('Failed to load visitor stats:', e);
    }
  };

  const loadTrackingRecords = async () => {
    setIsLoadingTracking(true);
    try {
      const [acts, dls, scores] = await Promise.all([
        ActivityTrackingService.getRecentActivities(30),
        ActivityTrackingService.getRecentDownloads(30),
        ActivityTrackingService.getRecentExamScores(30)
      ]);
      setRecentActivities(acts);
      setRecentDownloads(dls);
      setRecentExamScores(scores);
    } catch (e) {
      console.warn('Failed to load tracking records:', e);
    } finally {
      setIsLoadingTracking(false);
    }
  };

  // Reload data whenever modal opens
  const reloadData = () => {
    setSummary(DbService.getAnalyticsSummary());
    setSyncConfig(DbService.getSyncConfig());
    setQuestions(DbService.getAllQuestions());
    setNotes(DbService.getAllStudyNotes());
    setVideos(DbService.getAllVideos());
    setStudents(DbService.getAllRegisteredStudents());
    setPaymentVerifications(DbService.getPaymentVerifications());
    loadVisitorStats();
    loadTrackingRecords();
  };

  useEffect(() => {
    if (isAdminModalOpen) {
      reloadData();
      // Auto-poll visitor statistics every 10 seconds
      const pollTimer = setInterval(loadVisitorStats, 10000);
      return () => clearInterval(pollTimer);
    }
  }, [isAdminModalOpen]);

  if (!isAdminModalOpen) return null;

  const totalRevenue = (purchases || []).reduce((acc, p) => acc + (p.amountPaid || p.price || 0), 0);

  // Question form state
  const handleSaveQuestionForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const id = (formData.get('id') as string) || `q-cms-${Date.now()}`;
    const questionNepali = formData.get('questionNepali') as string;
    const questionEnglish = (formData.get('questionEnglish') as string) || '';
    const category = formData.get('category') as string;
    const difficulty = (formData.get('difficulty') as 'Easy' | 'Medium' | 'Hard') || 'Medium';
    const correctAnswer = (formData.get('correctAnswer') as 'A' | 'B' | 'C' | 'D') || 'A';
    const explanationNepali = formData.get('explanationNepali') as string;
    const actSection = (formData.get('actSection') as string) || '';

    const newQuestion: Question = {
      id,
      category: category as SubjectCategory,
      difficulty,
      questionNepali,
      questionEnglish,
      options: [
        { key: 'A', textNepali: formData.get('optA_np') as string, textEnglish: (formData.get('optA_en') as string) || '' },
        { key: 'B', textNepali: formData.get('optB_np') as string, textEnglish: (formData.get('optB_en') as string) || '' },
        { key: 'C', textNepali: formData.get('optC_np') as string, textEnglish: (formData.get('optC_en') as string) || '' },
        { key: 'D', textNepali: formData.get('optD_np') as string, textEnglish: (formData.get('optD_en') as string) || '' }
      ],
      correctAnswer,
      explanationNepali,
      actSection
    };

    DbService.saveQuestion(newQuestion);
    setQuestions(DbService.getAllQuestions());
    setEditingQuestion(null);
    setIsAddingQuestion(false);
    addToast('प्रश्न सफलतापूर्वक सुरक्षित गरियो!', 'success');
  };

  const handleDeleteQuestion = (id: string) => {
    if (confirm('के तपाईं यो प्रश्न हटाउन निश्चित हुनुहुन्छ?')) {
      DbService.deleteQuestion(id);
      setQuestions(DbService.getAllQuestions());
      addToast('प्रश्न हटाइयो!', 'info');
    }
  };

  // Note actions
  const handleToggleNoteAccess = (id: string, currentPremium?: boolean) => {
    const nextState = !currentPremium;
    DbService.toggleNoteAccessLevel(id, nextState);
    setNotes(DbService.getAllStudyNotes());
    addToast(`नोटको पहुँच स्तर: ${nextState ? '[PREMIUM 🔒]' : '[FREE 🟢]'} गरियो।`, 'success');
  };

  const handleDeleteNote = (id: string) => {
    if (confirm('के तपाईं यो नोट हटाउन निश्चित हुनुहुन्छ?')) {
      DbService.deleteStudyNote(id);
      setNotes(DbService.getAllStudyNotes());
      addToast('नोट हटाइयो!', 'info');
    }
  };

  const handleSaveNoteForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get('title') as string;
    const category = formData.get('category') as string;
    const subject = formData.get('subject') as string;
    const readTime = formData.get('readTime') as string;
    const content = formData.get('content') as string;
    const pdfUrl = (formData.get('pdfUrl') as string) || '';
    const isPremium = formData.get('isPremium') === 'on';

    const newNote: StudyNote = {
      id: `note-${Date.now()}`,
      title,
      category: (category as "Banking" | "General" | "NRB" | "Loksewa") || 'Banking',
      subject: subject as SubjectCategory,
      readTime: readTime || '10 min read',
      isPremium,
      pdfUrl: pdfUrl || undefined,
      sections: [
        {
          heading: title,
          content: content || 'नोटको विस्तृत विवरण...'
        }
      ]
    };

    DbService.saveStudyNote(newNote);
    setNotes(DbService.getAllStudyNotes());
    setIsAddingNote(false);
    addToast('नयाँ नोट सफलतापूर्वक थपियो!', 'success');
  };

  // Video actions
  const handleToggleVideoAccess = (id: string, currentPremium?: boolean) => {
    const nextState = !currentPremium;
    DbService.toggleVideoAccessLevel(id, nextState);
    setVideos(DbService.getAllVideos());
    addToast(`भिडियो पहुँच स्तर: ${nextState ? '[PREMIUM 🔒]' : '[FREE 🟢]'} गरियो।`, 'success');
  };

  const handleDeleteVideo = (id: string) => {
    if (confirm('के तपाईं यो भिडियो हटाउन निश्चित हुनुहुन्छ?')) {
      DbService.deleteVideo(id);
      setVideos(DbService.getAllVideos());
      addToast('भिडियो हटाइयो!', 'info');
    }
  };

  const handleSaveVideoForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get('title') as string;
    const titleEnglish = (formData.get('titleEnglish') as string) || '';
    const youtubeId = (formData.get('youtubeId') as string) || '';
    const instructorName = formData.get('instructorName') as string;
    const instructorTitle = (formData.get('instructorTitle') as string) || 'बैंकिङ प्रशिक्षक';
    const category = formData.get('category') as any;
    const duration = (formData.get('duration') as string) || '45:00';
    const isPremium = formData.get('isPremium') === 'on';

    const newVideo: VideoLecture = {
      id: `vid-${Date.now()}`,
      title,
      nepaliTitle: title,
      instructor: instructorName || 'विज्ञ प्रशिक्षक',
      instructorTitle,
      category: (category as any) || 'Banking',
      duration,
      views: '१,२००+ हेराई',
      publishedDate: '२०८१/११/२५',
      description: 'बैंकिङ तथा संगठित संस्था परीक्षा विशेष भिडियो कक्षा।',
      youtubeVideoId: youtubeId || 'dQw4w9WgXcQ',
      youtubeUrl: youtubeId ? `https://www.youtube.com/watch?v=${youtubeId}` : '',
      thumbnailUrl: youtubeId ? `https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg` : undefined,
      examTags: ['NRB', 'RBB', 'NBL', 'ADBL'],
      keyTakeaways: ['दफागत विश्लेषण', 'परीक्षा लेखन शैली'],
      isPremium
    };

    DbService.saveVideo(newVideo);
    setVideos(DbService.getAllVideos());
    setIsAddingVideo(false);
    addToast('नयाँ भिडियो कक्षा सफलतापूर्वक थपियो!', 'success');
  };

  // Pro Student Actions
  const handleToggleStudentPro = (student: UserProfile) => {
    const isCurrentlyPro = DbService.isUserPro(student);
    const nextState = !isCurrentlyPro;
    const target = student.email || student.authUid || student.id;
    DbService.upgradeStudentToPro(target, nextState);
    setStudents(DbService.getAllRegisteredStudents());
    addToast(`${student.displayName || student.name || 'विद्यार्थी'}लाई प्रो पहुँच ${nextState ? 'प्रदान गरियो (PRO 👑)' : 'फिर्ता गरियो (FREE)'}`, 'success');
  };

  const handleGrantProByEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!proEmailInput.trim()) return;
    DbService.upgradeStudentToPro(proEmailInput.trim(), true);
    setStudents(DbService.getAllRegisteredStudents());
    addToast(`${proEmailInput} लाई प्रो सदस्यता प्रदान गरियो!`, 'success');
    setProEmailInput('');
  };

  const handleApprovePayment = (id: string) => {
    DbService.approvePaymentVerification(id);
    setPaymentVerifications(DbService.getPaymentVerifications());
    setStudents(DbService.getAllRegisteredStudents());
    addToast('भुक्तानी प्रमाण स्वीकृत भयो र विद्यार्थीलाई प्रो लाइसेन्स प्रदान गरियो!', 'success');
  };

  // Cloud sync handlers
  const handleManualSync = async () => {
    setIsSyncing(true);
    addToast('क्लाउड डाटाबेससँग MCQs र नोट्स सिङ्क्रोनाइज गरिँदैछ...', 'info');
    try {
      const result = await DbService.syncDynamicMCQs();
      await DbService.syncDynamicNotes();
      setSyncConfig(DbService.getSyncConfig());
      setSummary(DbService.getAnalyticsSummary());
      addToast(`सफलतापूर्वक सिङ्क भयो! ${result.count} नयाँ प्रश्न तथा नोट्स अद्यावधिक भए।`, 'success');
    } catch {
      addToast('सिङ्क्रोनाइजेसनमा समस्या आयो। स्थानीय अफलाइन डाटा सुरक्षित छ।', 'error');
    } finally {
      setIsSyncing(false);
    }
  };

  const handleExportCSV = () => {
    const csvContent = DbService.exportAnalyticsCSV();
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `banking_tayari_analytics_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    addToast('एनालिटिक्स CSV सफलतापूर्वक डाउनलोड भयो।', 'success');
  };

  // Filtered queries
  const filteredQuestions = questions.filter(q => {
    const matchesCategory = selectedCategory === 'all' || q.category === selectedCategory;
    const matchesSearch = !questionSearch.trim() || 
      q.questionNepali.toLowerCase().includes(questionSearch.toLowerCase()) ||
      (q.questionEnglish && q.questionEnglish.toLowerCase().includes(questionSearch.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const filteredNotes = notes.filter(n => {
    return !noteSearch.trim() || 
      n.title.toLowerCase().includes(noteSearch.toLowerCase()) ||
      (n.subject && n.subject.toLowerCase().includes(noteSearch.toLowerCase()));
  });

  const filteredVideos = videos.filter(v => {
    const instName = typeof v.instructor === 'string' ? v.instructor : (v.instructor as any)?.name || '';
    return !videoSearch.trim() ||
      v.title.toLowerCase().includes(videoSearch.toLowerCase()) ||
      instName.toLowerCase().includes(videoSearch.toLowerCase());
  });

  const filteredStudents = students.filter(s => {
    const term = studentSearch.toLowerCase().trim();
    if (!term) return true;
    return (s.displayName && s.displayName.toLowerCase().includes(term)) ||
      (s.email && s.email.toLowerCase().includes(term)) ||
      (s.district && s.district.toLowerCase().includes(term));
  });

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 lg:p-6 animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-6xl w-full h-[94vh] border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <header className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-900 text-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-black text-base sm:text-lg text-white">
                  प्रशासन तथा सामग्री केन्द्र (Admin CMS & SaaS Engine)
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/30 text-emerald-300 text-[10px] font-bold">
                  SaaS CMS
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Authorized Admin: <strong className="text-emerald-400">{user?.email || OFFICIAL_ADMIN_EMAIL}</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={logoutAdmin}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition"
              title="Admin Mode बाट बाहिर निस्कनुहोस्"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">लआउट</span>
            </button>

            <button
              onClick={() => setIsAdminModalOpen(false)}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
              title="बन्द गर्नुहोस्"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Tab Navigation (SaaS Mobile-First Scrollable) */}
        <div className="flex items-center gap-1 p-2 px-3 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 overflow-x-auto text-xs shrink-0 no-scrollbar">
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-3.5 py-2 rounded-xl font-bold flex items-center gap-2 transition shrink-0 cursor-pointer ${
              activeTab === 'analytics'
                ? 'bg-slate-900 text-white dark:bg-emerald-600 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>एनालिटिक्स (Analytics)</span>
          </button>

          <button
            onClick={() => setActiveTab('questions')}
            className={`px-3.5 py-2 rounded-xl font-bold flex items-center gap-2 transition shrink-0 cursor-pointer ${
              activeTab === 'questions'
                ? 'bg-slate-900 text-white dark:bg-emerald-600 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
          >
            <CheckSquare className="w-4 h-4" />
            <span>प्रश्न भण्डार ({questions.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('notes')}
            className={`px-3.5 py-2 rounded-xl font-bold flex items-center gap-2 transition shrink-0 cursor-pointer ${
              activeTab === 'notes'
                ? 'bg-slate-900 text-white dark:bg-emerald-600 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>नोट्स र PDF ({notes.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('videos')}
            className={`px-3.5 py-2 rounded-xl font-bold flex items-center gap-2 transition shrink-0 cursor-pointer ${
              activeTab === 'videos'
                ? 'bg-slate-900 text-white dark:bg-emerald-600 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
          >
            <Video className="w-4 h-4" />
            <span>भिडियो कक्षा ({videos.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('students')}
            className={`px-3.5 py-2 rounded-xl font-bold flex items-center gap-2 transition shrink-0 cursor-pointer ${
              activeTab === 'students'
                ? 'bg-slate-900 text-white dark:bg-emerald-600 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
          >
            <Crown className="w-4 h-4 text-amber-500" />
            <span>विद्यार्थी तथा प्रो ({students.length})</span>
            {paymentVerifications.filter(p => p.status === 'pending').length > 0 && (
              <span className="px-1.5 py-0.2 text-[9px] bg-red-600 text-white rounded-full animate-pulse">
                {paymentVerifications.filter(p => p.status === 'pending').length}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('cloudSync')}
            className={`px-3.5 py-2 rounded-xl font-bold flex items-center gap-2 transition shrink-0 cursor-pointer ${
              activeTab === 'cloudSync'
                ? 'bg-slate-900 text-white dark:bg-emerald-600 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
          >
            <Cloud className="w-4 h-4" />
            <span>क्लाउड सिङ्क</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200">
          
          {/* TAB 1: ANALYTICS */}
          {activeTab === 'analytics' && (
            <div className="space-y-6 animate-fadeIn">
              {/* REAL-TIME VISITOR ANALYTICS & WEBSITE TRAFFIC WIDGET */}
              <div className="p-5 rounded-3xl bg-gradient-to-br from-[#0B2046] via-slate-900 to-[#071329] text-white border border-blue-900/60 shadow-xl space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                    </span>
                    <h3 className="font-black text-sm sm:text-base text-white tracking-tight flex items-center gap-2">
                      <span>प्रत्यक्ष आगन्तुक तथा ट्राफिक (Real-Time Website Visitors & Analytics)</span>
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/30 font-semibold text-[11px]">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                      <span>लाइभ अपडेट (Auto-Sync 10s)</span>
                    </span>
                    <button
                      type="button"
                      onClick={loadVisitorStats}
                      className="p-1.5 hover:bg-white/10 rounded-lg text-slate-300 hover:text-white transition cursor-pointer"
                      title="रिफ्रेस गर्नुहोस्"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* 4 PRIMARY METRICS: Total Registered Users, Active Today, Live Website Visitors, Total Page Views */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {/* Card 1: Total Registered Users */}
                  <div className="p-4 rounded-2xl bg-white/10 border border-white/15">
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span>कुल दर्ता विद्यार्थी</span>
                      <Users className="w-4 h-4 text-blue-400" />
                    </div>
                    <p className="text-2xl sm:text-3xl font-black text-white mt-1">
                      {visitorStats?.totalRegisteredUsers || summary.totalStudents || students.length}
                    </p>
                    <p className="text-[10px] text-blue-200 mt-0.5">Total Registered Users</p>
                  </div>

                  {/* Card 2: Live Website Visitors */}
                  <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40">
                    <div className="flex items-center justify-between text-xs text-emerald-300 font-bold">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>लाइभ अनलाइन आगन्तुक</span>
                      </span>
                      <Eye className="w-4 h-4 text-emerald-400" />
                    </div>
                    <p className="text-2xl sm:text-3xl font-black text-emerald-300 mt-1">
                      {visitorStats?.liveVisitors || 1}
                    </p>
                    <p className="text-[10px] text-emerald-400/80 mt-0.5">Live Online Right Now</p>
                  </div>

                  {/* Card 3: Active Today */}
                  <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/40">
                    <div className="flex items-center justify-between text-xs text-purple-300 font-bold">
                      <span>आजका सक्रिय प्रयोगकर्ता</span>
                      <TrendingUp className="w-4 h-4 text-purple-400" />
                    </div>
                    <p className="text-2xl sm:text-3xl font-black text-purple-300 mt-1">
                      {visitorStats?.activeToday || 1}
                    </p>
                    <p className="text-[10px] text-purple-300/80 mt-0.5">Active Today (Unique Visitors)</p>
                  </div>

                  {/* Card 4: Total Page Views */}
                  <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/40">
                    <div className="flex items-center justify-between text-xs text-amber-300 font-bold">
                      <span>कुल पृष्ठ अवलोकन</span>
                      <BarChart3 className="w-4 h-4 text-amber-400" />
                    </div>
                    <p className="text-2xl sm:text-3xl font-black text-amber-300 mt-1">
                      {visitorStats?.totalPageViews?.toLocaleString() || '1,420+'}
                    </p>
                    <p className="text-[10px] text-amber-300/80 mt-0.5">Total Page Views Tracked</p>
                  </div>
                </div>

                {/* Google Analytics GA4 Management Bar */}
                <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="font-semibold text-slate-200">Google Analytics (GA4):</span>
                    <span className="font-mono bg-black/40 px-2.5 py-0.5 rounded-lg border border-white/10 text-amber-300 text-[11px]">
                      {gaMeasurementId || 'Not Configured (Default Queue Active)'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <input
                      type="text"
                      placeholder="G-XXXXXXXXXX"
                      value={gaMeasurementId}
                      onChange={(e) => setGaMeasurementId(e.target.value)}
                      className="px-3 py-1.5 text-xs rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:ring-1 focus:ring-blue-500 font-mono w-full sm:w-36"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        AnalyticsService.setCustomGaMeasurementId(gaMeasurementId);
                        addToast(`GA4 Measurement ID सुरक्षित भयो!`, 'success');
                      }}
                      className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition shrink-0 cursor-pointer"
                    >
                      सुरक्षित गर्नुहोस्
                    </button>
                  </div>
                </div>

                {/* Recent Visitor Activity Log */}
                {visitorStats?.recentVisits && visitorStats.recentVisits.length > 0 && (
                  <div className="pt-2 border-t border-white/10">
                    <p className="text-xs font-bold text-slate-300 mb-2">हालैका आगन्तुक गतिविधिहरू (Recent Visitors Stream)</p>
                    <div className="max-h-36 overflow-y-auto space-y-1.5 pr-1">
                      {visitorStats.recentVisits.slice(0, 5).map((v) => (
                        <div key={v.id} className="flex items-center justify-between text-[11px] p-2 rounded-xl bg-white/5 border border-white/10">
                          <div className="flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full ${v.isGuest ? 'bg-amber-400' : 'bg-emerald-400'}`} />
                            <span className="font-bold text-white">{v.userName || (v.isGuest ? 'Guest User' : 'Student')}</span>
                            {v.userEmail && <span className="text-slate-400 font-mono">({v.userEmail})</span>}
                            <span className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono text-[10px]">{v.path}</span>
                          </div>
                          <span className="text-slate-400 text-[10px] font-mono">
                            {new Date(v.timestamp).toLocaleTimeString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                  <p className="text-xs text-slate-500">कुल विद्यार्थी</p>
                  <p className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
                    {summary.totalStudents || students.length}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                  <p className="text-xs text-slate-500">कुल क्विज हल</p>
                  <p className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-1">
                    {summary.totalAttempts}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                  <p className="text-xs text-slate-500">औसत शुद्धता (Accuracy)</p>
                  <p className="text-xl sm:text-2xl font-black text-purple-600 dark:text-purple-400 mt-1">
                    {summary.averageAccuracy}%
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                  <p className="text-xs text-slate-500">कुल आम्दानी (Revenue)</p>
                  <p className="text-xl sm:text-2xl font-black text-amber-600 dark:text-amber-400 mt-1">
                    रु. {totalRevenue || (paymentVerifications.filter(p => p.status === 'approved').length * 499)}
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  हालैका परीक्षा सहभागिता रेकर्डहरू ({summary.recentRecords.length})
                </h3>
                <button
                  onClick={handleExportCSV}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-xs font-bold flex items-center gap-1.5 transition"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>CSV डाउनलोड</span>
                </button>
              </div>

              {/* Table */}
              <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden overflow-x-auto text-xs">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 dark:bg-slate-800/80 text-slate-500 font-bold border-b border-slate-200 dark:border-slate-800">
                    <tr>
                      <th className="p-3">विद्यार्थी</th>
                      <th className="p-3">जिल्ला / परीक्षा</th>
                      <th className="p-3">विषय</th>
                      <th className="p-3">सही / गलत</th>
                      <th className="p-3">नेगेटिभ अङ्क</th>
                      <th className="p-3">प्राप्ताङ्क</th>
                      <th className="p-3">समय</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {summary.recentRecords.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="p-6 text-center text-slate-400">
                          अहिलेसम्म कुनै परीक्षा रेकर्ड छैन।
                        </td>
                      </tr>
                    ) : (
                      summary.recentRecords.slice(0, 15).map(r => (
                        <tr key={r.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                          <td className="p-3 font-bold text-slate-900 dark:text-white">{r.userName}</td>
                          <td className="p-3">{r.district} • {r.targetExam}</td>
                          <td className="p-3">{r.category || r.quizTitle}</td>
                          <td className="p-3">
                            <span className="text-emerald-600 font-bold">{r.correctAnswers} सही</span> / <span className="text-rose-500 font-bold">{r.incorrectAnswers} गलत</span>
                          </td>
                          <td className="p-3 font-mono text-rose-500 font-bold">-{r.negativeDeduction}</td>
                          <td className="p-3 font-bold text-emerald-600 dark:text-emerald-400">{r.netScore} / {r.totalQuestions}</td>
                          <td className="p-3 text-slate-400 font-mono">{Math.floor(r.timeElapsedSeconds / 60)}m {r.timeElapsedSeconds % 60}s</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              {/* FIRESTORE / SERVER PERSISTENT ACTIVITY & DOWNLOAD LOGS */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                {/* Section A: Live User Activity Stream */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span>प्रयोगकर्ता क्रियाकलाप ट्र्याकिङ ({recentActivities.length})</span>
                    </h4>
                    <button
                      onClick={loadTrackingRecords}
                      disabled={isLoadingTracking}
                      className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                    >
                      <RefreshCw className={`w-3 h-3 ${isLoadingTracking ? 'animate-spin' : ''}`} />
                      <span>ताजा गर्नुहोस्</span>
                    </button>
                  </div>

                  <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-slate-50/50 dark:bg-slate-800/40 max-h-64 overflow-y-auto">
                    {recentActivities.length === 0 ? (
                      <div className="p-6 text-center text-xs text-slate-400">
                        अहिलेसम्म कुनै गतिविधि रेकर्ड भएको छैन।
                      </div>
                    ) : (
                      <div className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
                        {recentActivities.slice(0, 20).map((act) => (
                          <div key={act.id} className="p-3 hover:bg-white dark:hover:bg-slate-800 flex items-start justify-between gap-2 transition">
                            <div className="space-y-0.5 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                  act.activityType === 'download' 
                                    ? 'bg-red-100 text-red-700 dark:bg-red-950/60 dark:text-red-300' 
                                    : act.activityType === 'exam_complete'
                                    ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300'
                                    : act.activityType === 'exam_start'
                                    ? 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300'
                                    : 'bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300'
                                }`}>
                                  {act.activityType === 'download' ? '📥 PDF Download' :
                                   act.activityType === 'exam_complete' ? '🎯 Exam Finish' :
                                   act.activityType === 'exam_start' ? '📝 Exam Start' :
                                   act.activityType === 'reading' ? '📖 Reading' : '👀 Syllabus'}
                                </span>
                                <span className="font-bold text-slate-900 dark:text-white truncate">
                                  {act.userName || act.userEmail || 'विद्यार्थी'}
                                </span>
                              </div>
                              <p className="text-slate-600 dark:text-slate-300 truncate">
                                {act.details || act.targetTitle || act.targetId}
                              </p>
                              {act.userEmail && (
                                <p className="text-[10px] text-slate-400 font-mono">{act.userEmail}</p>
                              )}
                            </div>
                            <span className="text-[10px] text-slate-400 whitespace-nowrap font-mono shrink-0">
                              {act.timestamp ? new Date(act.timestamp).toLocaleTimeString('ne-NP') : 'हालै'}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Section B: Resource & PDF Downloads Log */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                      <Download className="w-4 h-4 text-red-500" />
                      <span>डाउनलोड गरिएको PDF अभिलेख ({recentDownloads.length})</span>
                    </h4>
                  </div>

                  <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-slate-50/50 dark:bg-slate-800/40 max-h-64 overflow-y-auto">
                    {recentDownloads.length === 0 ? (
                      <div className="p-6 text-center text-xs text-slate-400">
                        कुनै PDF डाउनलोड रेकर्ड गरिएको छैन।
                      </div>
                    ) : (
                      <div className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
                        {recentDownloads.slice(0, 20).map((dl) => (
                          <div key={dl.id} className="p-3 hover:bg-white dark:hover:bg-slate-800 flex items-start justify-between gap-2 transition">
                            <div className="space-y-0.5 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="px-1.5 py-0.5 rounded bg-red-500 text-white font-mono text-[9px] font-bold">
                                  {dl.fileType || 'PDF'}
                                </span>
                                <span className="font-bold text-slate-900 dark:text-white truncate">
                                  {dl.fileName}
                                </span>
                              </div>
                              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                                डाउनलोडकर्ता: <strong className="text-slate-700 dark:text-slate-200">{dl.userName}</strong> ({dl.userEmail})
                              </p>
                              <span className="inline-block text-[10px] bg-slate-200 dark:bg-slate-700 px-1.5 py-0.2 rounded text-slate-700 dark:text-slate-300">
                                {dl.resourceCategory || 'General'}
                              </span>
                            </div>
                            <span className="text-[10px] text-slate-400 whitespace-nowrap font-mono shrink-0">
                              {dl.timestamp ? new Date(dl.timestamp).toLocaleTimeString('ne-NP') : 'हालै'}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: QUESTION BANK CMS */}
          {activeTab === 'questions' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2 flex-1 max-w-md">
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      value={questionSearch}
                      onChange={(e) => setQuestionSearch(e.target.value)}
                      placeholder="प्रश्न खोज्नुहोस्..."
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="py-2 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-semibold text-slate-900 dark:text-white focus:outline-none"
                  >
                    <option value="all">सबै विधा</option>
                    <option value="बैंकिङ">बैंकिङ</option>
                    <option value="कानुन">कानुन</option>
                    <option value="लेखा">लेखा</option>
                    <option value="व्यवस्थापन">व्यवस्थापन</option>
                    <option value="अर्थशास्त्र">अर्थशास्त्र</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setEditingQuestion(null);
                      setIsAddingQuestion(true);
                    }}
                    className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-sm cursor-pointer"
                  >
                    <PlusCircle className="w-4 h-4" />
                    <span>नयाँ प्रश्न थप्नुहोस् (Add MCQ)</span>
                  </button>
                </div>
              </div>

              {/* Add/Edit Question Form Drawer */}
              {(isAddingQuestion || editingQuestion) && (
                <form 
                  onSubmit={handleSaveQuestionForm}
                  className="p-4 sm:p-5 rounded-2xl border border-emerald-500/40 bg-emerald-50/20 dark:bg-emerald-950/20 space-y-3 text-xs"
                >
                  <div className="flex items-center justify-between border-b pb-2 border-emerald-200 dark:border-emerald-800">
                    <h4 className="font-extrabold text-sm text-emerald-800 dark:text-emerald-300">
                      {editingQuestion ? 'प्रश्न सम्पादन गर्नुहोस्' : 'नयाँ वस्तुगत प्रश्न (MCQ) थप्नुहोस्'}
                    </h4>
                    <button
                      type="button"
                      onClick={() => {
                        setIsAddingQuestion(false);
                        setEditingQuestion(null);
                      }}
                      className="text-slate-400 hover:text-slate-700 dark:hover:text-white"
                    >
                      ✕ रद्द गर्नुहोस्
                    </button>
                  </div>

                  <input type="hidden" name="id" defaultValue={editingQuestion?.id || ''} />

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-2">
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">प्रश्न (नेपाली):</label>
                      <input
                        type="text"
                        name="questionNepali"
                        required
                        defaultValue={editingQuestion?.questionNepali || ''}
                        placeholder="उदा: नेपाल राष्ट्र बैंक ऐन, २०५८ कहिले जारी भएको हो?"
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">विधा (Category):</label>
                      <input
                        type="text"
                        name="category"
                        required
                        defaultValue={editingQuestion?.category || 'बैंकिङ'}
                        placeholder="उदा: बैंकिङ / कानुन"
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                      />
                    </div>
                  </div>

                  {/* 4 Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">विकल्प (A):</label>
                      <input
                        type="text"
                        name="optA_np"
                        required
                        defaultValue={editingQuestion?.options.find(o => o.key === 'A')?.textNepali || ''}
                        placeholder="विकल्प A को उत्तर"
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">विकल्प (B):</label>
                      <input
                        type="text"
                        name="optB_np"
                        required
                        defaultValue={editingQuestion?.options.find(o => o.key === 'B')?.textNepali || ''}
                        placeholder="विकल्प B को उत्तर"
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">विकल्प (C):</label>
                      <input
                        type="text"
                        name="optC_np"
                        required
                        defaultValue={editingQuestion?.options.find(o => o.key === 'C')?.textNepali || ''}
                        placeholder="विकल्प C को उत्तर"
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">विकल्प (D):</label>
                      <input
                        type="text"
                        name="optD_np"
                        required
                        defaultValue={editingQuestion?.options.find(o => o.key === 'D')?.textNepali || ''}
                        placeholder="विकल्प D को उत्तर"
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">सही उत्तर (Correct):</label>
                      <select
                        name="correctAnswer"
                        defaultValue={editingQuestion?.correctAnswer || 'A'}
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold text-emerald-600"
                      >
                        <option value="A">विकल्प A</option>
                        <option value="B">विकल्प B</option>
                        <option value="C">विकल्प C</option>
                        <option value="D">विकल्प D</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">कठिनाई तह:</label>
                      <select
                        name="difficulty"
                        defaultValue={editingQuestion?.difficulty || 'Medium'}
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                      >
                        <option value="Easy">Easy (सजिलो)</option>
                        <option value="Medium">Medium (मध्यम)</option>
                        <option value="Hard">Hard (कठिन)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">सम्बन्धित दफा / स्रोत:</label>
                      <input
                        type="text"
                        name="actSection"
                        defaultValue={editingQuestion?.actSection || ''}
                        placeholder="उदा: दफा ३(१)"
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">विस्तृत व्याख्या (Explanation):</label>
                    <textarea
                      name="explanationNepali"
                      rows={2}
                      defaultValue={editingQuestion?.explanationNepali || ''}
                      placeholder="विद्यार्थीले बुझ्ने गरी व्याख्या लेख्नुहोस्..."
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                    />
                  </div>

                  <div className="flex justify-end gap-2 pt-1">
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition flex items-center gap-1.5"
                    >
                      <Save className="w-4 h-4" />
                      <span>{editingQuestion ? 'परिवर्तन सेभ गर्नुहोस्' : 'प्रश्न थप्नुहोस्'}</span>
                    </button>
                  </div>
                </form>
              )}

              {/* Question list */}
              <div className="space-y-2.5">
                {filteredQuestions.length === 0 ? (
                  <p className="text-center py-8 text-slate-400">कुनै प्रश्न फेला परेन।</p>
                ) : (
                  filteredQuestions.map((q, idx) => (
                    <div
                      key={q.id}
                      className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex items-start justify-between gap-3 text-xs"
                    >
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-slate-400">#{idx + 1}</span>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold text-[10px]">
                            {q.category}
                          </span>
                          <span className="text-slate-400 text-[10px]">{q.difficulty}</span>
                          {q.actSection && (
                            <span className="text-purple-600 dark:text-purple-400 text-[10px] font-semibold">
                              📜 {q.actSection}
                            </span>
                          )}
                        </div>
                        <p className="font-bold text-slate-800 dark:text-white leading-relaxed">
                          {q.questionNepali}
                        </p>
                        <p className="text-emerald-600 dark:text-emerald-400 font-semibold text-[11px]">
                          सही उत्तर: ({q.correctAnswer}) {q.options.find(o => o.key === q.correctAnswer)?.textNepali}
                        </p>
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => {
                            setIsAddingQuestion(false);
                            setEditingQuestion(q);
                          }}
                          className="p-2 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition"
                          title="सम्पादन गर्नुहोस्"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteQuestion(q.id)}
                          className="p-2 rounded-xl hover:bg-rose-100 dark:hover:bg-rose-950 text-rose-600 transition"
                          title="हटाउनुहोस्"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* TAB 3: NOTES & PDF CMS */}
          {activeTab === 'notes' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="relative flex-1 max-w-md">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={noteSearch}
                    onChange={(e) => setNoteSearch(e.target.value)}
                    placeholder="स्टडी नोट खोज्नुहोस्..."
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => setIsAddingNote(true)}
                  className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>नयाँ PDF / नोट थप्नुहोस् (Add Note)</span>
                </button>
              </div>

              {/* Add Note Form */}
              {isAddingNote && (
                <form 
                  onSubmit={handleSaveNoteForm}
                  className="p-4 sm:p-5 rounded-2xl border border-emerald-500/40 bg-emerald-50/20 dark:bg-emerald-950/20 space-y-3 text-xs"
                >
                  <div className="flex items-center justify-between border-b pb-2 border-emerald-200 dark:border-emerald-800">
                    <h4 className="font-extrabold text-sm text-emerald-800 dark:text-emerald-300">
                      नयाँ अध्ययन सामग्री / PDF नोट थप्नुहोस्
                    </h4>
                    <button type="button" onClick={() => setIsAddingNote(false)} className="text-slate-400 hover:text-slate-700">
                      ✕ बन्द
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">शीर्षक (Title):</label>
                      <input
                        type="text"
                        name="title"
                        required
                        placeholder="उदा: नेपाल राष्ट्र बैंक ऐन, २०५८ विशेष व्याख्या"
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">विषय (Subject):</label>
                      <input
                        type="text"
                        name="subject"
                        required
                        placeholder="उदा: बैंकिङ कानुन तथा नियमन"
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">विधा (Category):</label>
                      <input
                        type="text"
                        name="category"
                        defaultValue="बैंकिङ"
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">पढ्ने समय:</label>
                      <input
                        type="text"
                        name="readTime"
                        defaultValue="15 min read"
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">PDF Download Link (URL):</label>
                      <input
                        type="url"
                        name="pdfUrl"
                        placeholder="https://drive.google.com/..."
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">विस्तृत नोट सामग्री (Content):</label>
                    <textarea
                      name="content"
                      rows={4}
                      placeholder="नोटको मुख्य बुँदाहरू र दफागत विवरण यहाँ राख्नुहोस्..."
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 font-sans"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" name="isPremium" className="w-4 h-4 text-emerald-600 rounded" />
                      <span className="font-bold text-amber-600 dark:text-amber-400">
                        🔒 प्रिमियम सामग्री (Premium Lock Required)
                      </span>
                    </label>

                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition"
                    >
                      सुरक्षित गर्नुहोस्
                    </button>
                  </div>
                </form>
              )}

              {/* Notes Grid with Access Toggles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredNotes.map(note => (
                  <div
                    key={note.id}
                    className="p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 space-y-2 text-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                          {note.title}
                        </h4>
                        <button
                          type="button"
                          onClick={() => handleToggleNoteAccess(note.id, note.isPremium)}
                          className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold transition flex items-center gap-1 shrink-0 ${
                            note.isPremium
                              ? 'bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/40 hover:bg-amber-500/30'
                              : 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/30'
                          }`}
                          title="पहुँच स्तर परिवर्तन गर्न क्लिक गर्नुहोस्"
                        >
                          {note.isPremium ? <Lock className="w-3 h-3" /> : <CheckCircle2 className="w-3 h-3" />}
                          <span>{note.isPremium ? 'PREMIUM 🔒' : 'FREE 🟢'}</span>
                        </button>
                      </div>

                      <p className="text-slate-500 dark:text-slate-400 mt-1">
                        {note.subject} • {note.readTime}
                      </p>

                      {note.pdfUrl && (
                        <p className="text-purple-600 dark:text-purple-400 text-[11px] truncate mt-1">
                          📄 PDF: {note.pdfUrl}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                      <span className="text-[11px] text-slate-400">
                        Sections: {note.sections?.length || 1}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleDeleteNote(note.id)}
                        className="text-rose-500 hover:text-rose-700 font-semibold text-xs flex items-center gap-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>हटाउनुहोस्</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: VIDEOS CMS */}
          {activeTab === 'videos' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="relative flex-1 max-w-md">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={videoSearch}
                    onChange={(e) => setVideoSearch(e.target.value)}
                    placeholder="भिडियो कक्षा खोज्नुहोस्..."
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => setIsAddingVideo(true)}
                  className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>नयाँ भिडियो कक्षा थप्नुहोस् (Add Video)</span>
                </button>
              </div>

              {/* Add Video Form */}
              {isAddingVideo && (
                <form
                  onSubmit={handleSaveVideoForm}
                  className="p-4 sm:p-5 rounded-2xl border border-emerald-500/40 bg-emerald-50/20 dark:bg-emerald-950/20 space-y-3 text-xs"
                >
                  <div className="flex items-center justify-between border-b pb-2 border-emerald-200 dark:border-emerald-800">
                    <h4 className="font-extrabold text-sm text-emerald-800 dark:text-emerald-300">
                      नयाँ अनलाइन भिडियो कक्षा थप्नुहोस्
                    </h4>
                    <button type="button" onClick={() => setIsAddingVideo(false)} className="text-slate-400">
                      ✕ बन्द
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">कक्षा शीर्षक (Title):</label>
                      <input
                        type="text"
                        name="title"
                        required
                        placeholder="उदा: बाफिया (BAFIA) २०७३ का मुख्य प्रावधानहरू"
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">YouTube Video ID वा URL:</label>
                      <input
                        type="text"
                        name="youtubeId"
                        required
                        placeholder="उदा: dQw4w9WgXcQ"
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">प्रशिक्षकको नाम:</label>
                      <input
                        type="text"
                        name="instructorName"
                        required
                        placeholder="उदा: विमल कार्की"
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">प्रशिक्षक पद:</label>
                      <input
                        type="text"
                        name="instructorTitle"
                        defaultValue="वरिष्ठ अधिकृत / बैंकिङ विज्ञ"
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">विधा (Category):</label>
                      <select name="category" className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                        <option value="banking_law">बैंकिङ कानुन (Banking Law)</option>
                        <option value="monetary_policy">मौद्रिक नीति (Monetary Policy)</option>
                        <option value="accounting">लेखा प्रणाली (Accounting)</option>
                        <option value="subjective_masterclass">विषयगत लेखन (Subjective Writing)</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" name="isPremium" className="w-4 h-4 text-emerald-600 rounded" />
                      <span className="font-bold text-amber-600 dark:text-amber-400">
                        🔒 प्रिमियम भिडियो कक्षा (Only for PRO Students)
                      </span>
                    </label>

                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition"
                    >
                      सुरक्षित गर्नुहोस्
                    </button>
                  </div>
                </form>
              )}

              {/* Videos Grid with Access Toggles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredVideos.map(video => (
                  <div
                    key={video.id}
                    className="p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 space-y-2 text-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                          {video.title}
                        </h4>
                        <button
                          type="button"
                          onClick={() => handleToggleVideoAccess(video.id, video.isPremium)}
                          className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold transition flex items-center gap-1 shrink-0 ${
                            video.isPremium
                              ? 'bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/40'
                              : 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/40'
                          }`}
                          title="पहुँच स्तर परिवर्तन गर्नुहोस्"
                        >
                          {video.isPremium ? <Lock className="w-3 h-3" /> : <CheckCircle2 className="w-3 h-3" />}
                          <span>{video.isPremium ? 'PREMIUM 🔒' : 'FREE 🟢'}</span>
                        </button>
                      </div>

                      <p className="text-slate-500 dark:text-slate-400 mt-1">
                        प्रशिक्षक: {typeof video.instructor === 'string' ? video.instructor : (video.instructor as any)?.name} ({video.instructorTitle || (video.instructor as any)?.title || 'प्रशिक्षक'}) • {video.duration}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                      <span className="text-[11px] text-slate-400">
                        {video.examTags?.join(', ') || 'NRB, RBB'}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleDeleteVideo(video.id)}
                        className="text-rose-500 hover:text-rose-700 font-semibold text-xs flex items-center gap-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>हटाउनुहोस्</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: STUDENTS & PRO LICENSES */}
          {activeTab === 'students' && (
            <div className="space-y-6 animate-fadeIn text-xs">
              
              {/* Manual Pro Grant Bar */}
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Crown className="w-5 h-5 text-amber-500 shrink-0" />
                  <div>
                    <h4 className="font-extrabold text-slate-900 dark:text-white">
                      विद्यार्थीलाई सोझै प्रो लाइसेन्स प्रदान गर्नुहोस् (Grant Pro License)
                    </h4>
                    <p className="text-slate-500 dark:text-slate-400 text-[11px]">
                      इमेल वा आइडी प्रविष्ट गरी कुनै पनि विद्यार्थीलाई तत्काल १ वर्षको निःशुल्क वा सशुल्क प्रो अनुमति दिनुहोस्।
                    </p>
                  </div>
                </div>

                <form onSubmit={handleGrantProByEmail} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={proEmailInput}
                    onChange={(e) => setProEmailInput(e.target.value)}
                    placeholder="student@example.com"
                    className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black shrink-0 transition"
                  >
                    प्रो दिनुहोस्
                  </button>
                </form>
              </div>

              {/* Pending Payment Verification Queue */}
              {paymentVerifications.length > 0 && (
                <div className="space-y-3">
                  <h4 className="font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-emerald-500" />
                    <span>पेश गरिएका eSewa / Khalti भुक्तानी प्रमाणहरू ({paymentVerifications.length})</span>
                  </h4>

                  <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
                    <table className="w-full text-left">
                      <thead className="bg-slate-50 dark:bg-slate-800 text-slate-500 font-bold border-b border-slate-200 dark:border-slate-800">
                        <tr>
                          <th className="p-3">विद्यार्थी</th>
                          <th className="p-3">गेटवे / रकम</th>
                          <th className="p-3">Transaction ID</th>
                          <th className="p-3">मिति</th>
                          <th className="p-3">स्थिति</th>
                          <th className="p-3">कार्य</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {paymentVerifications.map(p => (
                          <tr key={p.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                            <td className="p-3">
                              <p className="font-bold text-slate-900 dark:text-white">{p.userName}</p>
                              <p className="text-slate-400 text-[10px]">{p.userEmail}</p>
                            </td>
                            <td className="p-3">
                              <span className="uppercase font-bold text-emerald-600">{p.gateway}</span>
                              <p className="text-slate-400 font-mono">रु. {p.amount}</p>
                            </td>
                            <td className="p-3 font-mono font-bold text-purple-600 dark:text-purple-400">
                              {p.transactionId}
                            </td>
                            <td className="p-3 text-slate-400">
                              {new Date(p.submittedAt).toLocaleDateString()}
                            </td>
                            <td className="p-3">
                              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                p.status === 'approved' 
                                  ? 'bg-emerald-500/20 text-emerald-600' 
                                  : 'bg-amber-500/20 text-amber-600'
                              }`}>
                                {p.status === 'approved' ? 'स्वीकृत (PRO)' : 'पेन्डिङ (Pending)'}
                              </span>
                            </td>
                            <td className="p-3">
                              {p.status === 'pending' ? (
                                <button
                                  type="button"
                                  onClick={() => handleApprovePayment(p.id)}
                                  className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition flex items-center gap-1"
                                >
                                  <Check className="w-3.5 h-3.5" />
                                  <span>स्वीकृत गर्नुहोस्</span>
                                </button>
                              ) : (
                                <span className="text-emerald-500 font-semibold">✓ स्वीकृत भइसकेको</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Students List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-500" />
                    <span>दर्ता भएका विद्यार्थीहरू ({students.length})</span>
                  </h4>

                  <input
                    type="text"
                    value={studentSearch}
                    onChange={(e) => setStudentSearch(e.target.value)}
                    placeholder="नाम वा इमेल खोज्नुहोस्..."
                    className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs"
                  />
                </div>

                <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-x-auto shadow-2xs">
                  <table className="w-full text-left min-w-[780px] border-collapse text-xs">
                    <thead className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800 text-[11px] uppercase tracking-wider">
                      <tr>
                        <th className="p-3">प्रयोगकर्ता</th>
                        <th className="p-3">इमेल (Email)</th>
                        <th className="p-3">प्रमाणीकरण</th>
                        <th className="p-3">पछिल्लो लगइन</th>
                        <th className="p-3 text-center">कुल लगइन</th>
                        <th className="p-3">क्विज प्रयास</th>
                        <th className="p-3">XP / तह</th>
                        <th className="p-3">लाइसेन्स स्तर</th>
                        <th className="p-3 text-right">कार्य (1-Click)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {filteredStudents.map(student => {
                        const isStudentPro = DbService.isUserPro(student);
                        const isGoogle = student.isGoogleUser || student.authProvider === 'google';
                        const lastLogin = student.lastLoginAt 
                          ? new Date(student.lastLoginAt).toLocaleString('ne-NP', { dateStyle: 'short', timeStyle: 'short' })
                          : student.lastActiveDate 
                            ? new Date(student.lastActiveDate).toLocaleDateString()
                            : 'आज';

                        return (
                          <tr key={student.id || student.email} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                            {/* 1. User Name */}
                            <td className="p-3">
                              <div className="flex items-center gap-2.5">
                                <img
                                  src={student.photoURL || student.avatarUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(student.displayName || student.name || 'User')}`}
                                  alt=""
                                  className="w-7 h-7 rounded-full object-cover shrink-0 border border-slate-200 dark:border-slate-700"
                                />
                                <div className="min-w-0">
                                  <p className="font-bold text-slate-900 dark:text-white truncate">
                                    {student.displayName || student.name || 'परीक्षार्थी'}
                                  </p>
                                  <p className="text-[10px] text-slate-400 truncate">
                                    {student.targetExam || 'बैंकिङ्ग तयारी'}
                                  </p>
                                </div>
                              </div>
                            </td>

                            {/* 2. Email */}
                            <td className="p-3 font-mono text-slate-600 dark:text-slate-300">
                              {student.email || 'इमेल उपलब्ध छैन'}
                            </td>

                            {/* 3. Auth Provider */}
                            <td className="p-3">
                              {isGoogle ? (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-[#0052FF] dark:text-blue-400 font-bold text-[10px] border border-blue-200/60 dark:border-blue-800/60">
                                  <svg className="w-3 h-3 shrink-0" viewBox="0 0 24 24">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                                  </svg>
                                  Google
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-[10px]">
                                  <Mail className="w-3 h-3 text-slate-400" />
                                  Email/Pass
                                </span>
                              )}
                            </td>

                            {/* 4. Last Login Timestamp */}
                            <td className="p-3 text-slate-600 dark:text-slate-300 whitespace-nowrap text-[11px]">
                              {lastLogin}
                            </td>

                            {/* 5. Total Logins */}
                            <td className="p-3 text-center">
                              <span className="font-mono font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                                {student.totalLogins || 1}
                              </span>
                            </td>

                            {/* 6. Quizzes Attempted */}
                            <td className="p-3">
                              <span className="font-bold text-slate-800 dark:text-slate-200">
                                {student.quizzesCompleted || 0} सेट
                              </span>
                              <p className="text-[10px] text-slate-400">
                                {student.questionsSolved || 0} प्रश्न हल
                              </p>
                            </td>

                            {/* 7. XP Score & Level */}
                            <td className="p-3">
                              <span className="font-bold text-purple-600 dark:text-purple-400">
                                Lvl {student.level || 1}
                              </span>
                              <p className="font-mono text-slate-400 text-[10px]">
                                {student.xp || 0} XP
                              </p>
                            </td>

                            {/* 8. Pro Status */}
                            <td className="p-3">
                              <span className={`px-2.5 py-0.5 rounded-full font-bold text-[10px] whitespace-nowrap ${
                                isStudentPro
                                  ? 'bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30'
                                  : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                              }`}>
                                {isStudentPro ? 'PRO ACTIVE 👑' : 'FREE'}
                              </span>
                            </td>

                            {/* 9. 1-Click Action */}
                            <td className="p-3 text-right">
                              <button
                                type="button"
                                onClick={() => handleToggleStudentPro(student)}
                                className={`px-2.5 py-1 rounded-xl text-[11px] font-bold transition inline-flex items-center gap-1 cursor-pointer ${
                                  isStudentPro
                                    ? 'bg-rose-50 dark:bg-rose-950/40 text-rose-600 hover:bg-rose-100'
                                    : 'bg-amber-500 hover:bg-amber-600 text-slate-950 font-black shadow-xs'
                                }`}
                              >
                                {isStudentPro ? (
                                  <>
                                    <ToggleRight className="w-3.5 h-3.5 text-rose-500" />
                                    <span>Revoke</span>
                                  </>
                                ) : (
                                  <>
                                    <Crown className="w-3.5 h-3.5" />
                                    <span>Grant Pro</span>
                                  </>
                                )}
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* TAB 6: CLOUD SYNC */}
          {activeTab === 'cloudSync' && (
            <div className="space-y-6 animate-fadeIn text-xs sm:text-sm">
              <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-3 border border-slate-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Cloud className="w-5 h-5 text-emerald-400" />
                    <h3 className="font-extrabold text-base text-white">
                      स्वतः अद्यावधिक क्लाउड सिङ्क इन्जिन (Auto-Update Engine)
                    </h3>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[11px] font-bold border border-emerald-500/30">
                    Live Sync Active
                  </span>
                </div>

                <p className="text-slate-300 leading-relaxed">
                  यस इन्जिनले नयाँ वस्तुगत प्रश्न (MCQs) तथा अध्ययन नोट्सहरू कोड पुन: डिप्लाई नगरिकन क्लाउडबाट सोझै डाउनलोड तथा अपडेट गर्दछ।
                </p>
              </div>

              {/* Endpoint Config Card */}
              <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4">
                <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Server className="w-4 h-4 text-purple-500" />
                  <span>क्लाउड एपीआई एन्डपोइन्ट कन्फिगरेसन:</span>
                </h4>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <input
                    type="text"
                    value={customEndpoint}
                    onChange={(e) => setCustomEndpoint(e.target.value)}
                    placeholder="https://api.bankingtayari.np.internal वा https://your-project.supabase.co"
                    className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <button
                    onClick={() => {
                      const updated = DbService.updateSyncConfig({ cloudEndpoint: customEndpoint });
                      setSyncConfig(updated);
                      addToast('क्लाउड एन्डपोइन्ट सुरक्षित गरियो!', 'success');
                    }}
                    className="px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-700 text-white font-bold hover:bg-slate-800 transition"
                  >
                    एन्डपोइन्ट सेभ गर्नुहोस्
                  </button>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-slate-600 dark:text-slate-300 font-medium">
                      अन्तिम सिङ्क: {syncConfig.lastSyncTimestamp ? new Date(syncConfig.lastSyncTimestamp).toLocaleString() : 'भर्खरै'}
                    </span>
                  </div>

                  <button
                    onClick={handleManualSync}
                    disabled={isSyncing}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold flex items-center gap-2 transition disabled:opacity-50"
                  >
                    <RefreshCw className={`w-4 h-4 ${isSyncing ? 'animate-spin' : ''}`} />
                    <span>{isSyncing ? 'सिङ्क्रोनाइज हुँदैछ...' : 'अहिले नै सिङ्क गर्नुहोस् (Sync Now)'}</span>
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
