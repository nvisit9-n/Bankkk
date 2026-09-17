export type NavigationTab = 
  | 'home' 
  | 'courses' 
  | 'quiz' 
  | 'current-affairs' 
  | 'profile' 
  | 'leaderboard'
  | 'premium' 
  | 'purchases' 
  | 'bookmarks' 
  | 'free-notes'
  | 'video-lectures'
  | 'about';

export type QuizSubCategory = 'sangathit' | 'banking' | 'loksewa';

export type SubjectCategory = 
  | 'Banking'
  | 'Loksewa'
  | 'NRB'
  | 'Current Affairs'
  | 'GeneralAwareness'
  | 'GK'
  | 'Economics'
  | 'Management'
  | 'Accounting'
  | 'Law'
  | 'Computer'
  | 'Mathematics'
  | 'English'
  | 'Nepali'
  | 'PublicEnterprises'
  | 'LanguageTest';

export type DifficultyLevel = 'Easy' | 'Medium' | 'Hard';

export type QuizMode = 'practice' | 'exam' | 'daily' | 'mock';

export interface QuizQuestion {
  id: string;
  category: 'Banking' | 'NRB' | 'Current Affairs' | 'GK' | 'Economics' | 'Management' | 'Accounting' | 'Computer' | 'Mathematics' | 'English' | 'Law' | 'Loksewa' | 'PublicEnterprises' | 'LanguageTest';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  subTopic?: string;
  syllabusModule?: string;
  actSection?: string;
  economicSurveyRef?: string;
  examTip?: string;
  question: string;
  options: [string, string, string, string];
  correctAnswer: number; // 0, 1, 2, or 3
  explanation: string; // High-yield explanation in Nepali for Practice Mode
}

export interface UserProfile {
  id: string;
  authUid?: string;
  authProvider?: 'google' | 'email' | 'guest';
  isGoogleUser?: boolean;
  name: string;
  displayName?: string;
  email: string;
  phone?: string;
  province?: string;
  district?: string;
  avatarUrl?: string;
  photoURL?: string;
  xp: number;
  streak: number;
  lastActiveDate: string;
  lastLoginAt?: string;
  totalLogins?: number;
  questionsSolved: number;
  quizzesCompleted: number;
  accuracy: number;
  rank: string;
  level?: number;
  targetExam?: string;
  totalQuestionsAnswered?: number;
  notesRead?: number;
  registeredAt?: string;
  isRegistered?: boolean;
  isGuest?: boolean;
  sessionToken?: string;
  profileCompletion?: number;
  hasReceivedCompletionBonus?: boolean;
  isPro?: boolean;
  isProUser?: boolean;
  proStatus?: 'active' | 'inactive';
  proExpiresAt?: string;
  role?: 'admin' | 'student' | 'user';
}

export interface LeaderboardEntry {
  rank: number;
  authUid: string;
  name: string;
  email?: string;
  avatarUrl: string;
  province: string;
  district: string;
  targetExam: string;
  xp: number;
  level: number;
  accuracy: number;
  quizzesCompleted: number;
  isCurrentUser?: boolean;
}

export interface AdminAnalyticsRecord {
  id: string;
  userId: string;
  userName: string;
  province?: string;
  district: string;
  targetExam: string;
  quizId: string;
  quizTitle: string;
  category: string;
  syllabusModule?: string;
  totalQuestions: number;
  attemptedCount: number;
  skippedCount: number;
  correctAnswers: number;
  incorrectAnswers: number;
  negativeDeduction: number; // 20% negative marking
  netScore: number;
  accuracy: number;
  timeElapsedSeconds: number;
  timestamp: string;
}

export interface Question {
  id: string;
  category: SubjectCategory;
  difficulty: DifficultyLevel;
  questionNepali: string;
  questionEnglish?: string;
  options: {
    key: 'A' | 'B' | 'C' | 'D';
    textNepali: string;
    textEnglish?: string;
  }[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanationNepali: string;
  actSection?: string;
  economicSurveyRef?: string;
  examTip?: string;
  syllabusModule?: string;
  examTag?: string; // e.g. "NRB 2080", "RBB Level 4", "Loksewa Kharidar"
  topic?: string;
}

export interface RawSangathitQuestion {
  id: number | string;
  question: string;
  questionEnglish?: string;
  options: string[];
  correctAnswer: number | string;
  explanation: string;
}

export interface RawSangathitSet {
  setId: number;
  setName: string;
  totalQuestions: number;
  timeLimitMinutes: number;
  questions: RawSangathitQuestion[];
}

export interface QuizSet {
  id: string;
  title: string;
  description: string;
  category: SubjectCategory;
  difficulty: DifficultyLevel;
  mode: QuizMode;
  timeLimitMinutes: number;
  questions: Question[];
  badge?: string;
  syllabusModule?: string;
  setId?: number;
  setName?: string;
}

export interface QuizResultData {
  quizId: string;
  quizTitle: string;
  mode: QuizMode;
  totalQuestions: number;
  score: number;
  correctAnswers: number;
  incorrectAnswers: number;
  unattempted: number;
  accuracy: number;
  timeSpentSeconds: number;
  userAnswers: Record<string, 'A' | 'B' | 'C' | 'D' | null>;
  xpEarned: number;
  completedAt: string;
}

export interface ComparisonItem {
  attribute: string;
  traditional?: string;
  reengineering?: string;
  columns?: string[];
  [key: string]: any;
}

export interface LawSectionItem {
  id: string;
  sectionNumber: string; // e.g., "दफा १", "Section 1"
  titleNepali: string;
  titleEnglish?: string;
  bareLawText: string; // Complete untruncated bare act text
  subSections?: string[]; // Detailed sub-clauses (१), (२), (३)...
  commentary: string; // In-depth textbook commentary, legal doctrine & analysis
  practicalApplication?: string; // Real-world banking procedure & exam relevance
  keyTakeaways?: string[];
}

export interface LawChapterItem {
  chapterNumber: number | string;
  chapterTitleNepali: string;
  chapterTitleEnglish: string;
  description?: string;
  sections: LawSectionItem[];
}

export interface BankingActData {
  actId: string;
  actTitleNepali: string;
  actTitleEnglish: string;
  shortName: string;
  promulgationDate: string;
  amendments?: string[];
  totalChapters: number;
  totalSections: number;
  preambleNepali: string;
  preambleEnglish?: string;
  chapters: LawChapterItem[];
}

export interface StudyNote {
  id: string;
  title: string;
  subject: SubjectCategory;
  category: 'Banking' | 'Loksewa' | 'NRB' | 'General';
  readTime: string;
  sections: {
    heading: string;
    content: string;
    bulletPoints?: string[];
  }[];
  comparisonTable?: {
    title: string;
    headers: string[];
    rows: ComparisonItem[];
  };
  examTip?: string;
  relatedQuizId?: string;
  relatedQuestionsCount?: number;
  isPremium?: boolean;
  pdfUrl?: string;
  videoUrl?: string;
  authorName?: string;
  isLocked?: boolean;
  actData?: BankingActData;
}

export interface PremiumNote {
  id: string;
  title: string;
  subject?: SubjectCategory | string;
  category: 'Banking' | 'Loksewa' | 'NRB' | 'General' | string;
  shortDescription?: string;
  fullDescription?: string;
  description?: string;
  coverImage?: string;
  pageCount?: number;
  pages?: number;
  rating: number;
  reviewCount?: number;
  reviewsCount?: number;
  buyersCount?: number;
  originalPrice?: number;
  discountPrice?: number;
  price?: number;
  isPremium?: boolean;
  author: {
    name: string;
    qualification?: string;
  } | string | any;
  lastUpdated?: string;
  whatYouWillGet?: string[];
  highlights?: string[];
  previewPages?: {
    pageNumber: number;
    title: string;
    content: string;
    notes?: string[];
  }[];
  fullDocumentPages?: {
    pageNumber: number;
    title: string;
    content: string;
  }[];
  samplePages?: {
    pageNumber: number;
    title: string;
    content: string;
    isLocked?: boolean;
    notes?: string[];
  }[];
  tags?: string[];
  isPublished?: boolean;
}

export type CurrentAffairCategory = 
  | 'Banking & Monetary' 
  | 'Economy & Budget' 
  | 'National & Disaster' 
  | 'Sports & International';

export interface CurrentAffairItem {
  id: string;
  category: 'Banking & Monetary' | 'Economy & Budget' | 'National & Disaster' | 'Sports & International';
  title: string;
  date: string;
  quickExamFact: string;
  points: string[];
  tags: string[];
}

export type CurrentAffairsCategoryType = 
  | 'National & Governance'
  | 'Economy & Banking'
  | 'Science, Tech & Environment'
  | 'Sports & Awards'
  | 'International & Affairs'
  | 'Banking & Monetary' 
  | 'Economy & Budget' 
  | 'National & Disaster' 
  | 'Sports & International';

export type CurrentAffairsTopic = 
  | 'Economic'
  | 'Appointments'
  | 'Sports'
  | 'Awards'
  | 'Legislation'
  | 'National'
  | 'International';

export interface CurrentAffairsMCQ {
  id: string;
  dateStr: string;            // e.g. "2026-09-16"
  dateFormattedNep: string;   // e.g. "२०८३ भदौ ३१ गते (16 September 2026)"
  monthLabel: string;         // e.g. "September 2026"
  topic: CurrentAffairsTopic;
  topicLabelNep: string;      // e.g. "आर्थिक तथा मौद्रिक"
  qNep: string;
  qEng?: string;
  options: {
    key: 'A' | 'B' | 'C' | 'D';
    text: string;             // with strict option uniformity / granularity parity
    textEng?: string;
  }[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  correctAnswerText: string;
  explanationNep: string;
  explanationEng?: string;
  difficulty?: DifficultyLevel;
  sourceOrActRef?: string;
}

export interface DailyChallengeSetRecord {
  dateStr: string;            // e.g. "2026-09-16"
  dateFormattedNep: string;   // e.g. "२०८३ भदौ ३१ गते"
  monthLabel: string;         // e.g. "September 2026"
  title: string;              // "दैनिक ३० प्रश्न समसामयिक चुनौती - १६ सेप्टेम्बर २०२६"
  totalQuestions: number;     // 30
  questions: CurrentAffairsMCQ[];
  createdAt: string;
}

export interface CurrentAffairArticle {
  id: string;
  category: CurrentAffairsCategoryType | string;
  categoryNepali?: string;
  title: string;
  date: string;
  summary: string;
  content?: string;
  keyPoints?: string[];
  importantFacts: string[];
  examRelevance: string;
  examPoint: string;
  relatedQuizCategory?: SubjectCategory;
  imageUrl?: string;
  tags?: string[];
  figures?: { label: string; value: string; subtext?: string }[];
  keyDates?: { event: string; date: string }[];
  examQuestions?: string[];
  quickExamFact?: string;
  points?: string[];
}

export type CurrentAffair = CurrentAffairArticle;


export interface TopicItem {
  id: string;
  name: string;
  nameEnglish?: string;
  completed: boolean;
  isPremium?: boolean;
  noteId?: string;
  weightageMarks?: number;
}

export interface SyllabusSection {
  id: string;
  paperNumber: 1 | 2;
  sectionLetter: 'A' | 'B' | 'C' | 'D';
  titleNepali: string;
  titleEnglish: string;
  weightageMarks: number;
  icon: string;
  totalTopics: number;
  completedTopics: number;
  topics: TopicItem[];
}

export interface SyllabusPaper {
  id: 'paper-1' | 'paper-2';
  paperNumber: 1 | 2;
  titleNepali: string;
  titleEnglish: string;
  subtitle: string;
  fullMarks: number;
  passMarks: number;
  timeMinutes: number;
  sections: SyllabusSection[];
}

export interface CourseLevel {
  id: string;
  name: string;
  nameNepali: string;
  description?: string;
  badge?: string;
  subjects: SubjectModule[];
}

export interface SubjectModule {
  id: string;
  name: string;
  category: 'Banking' | 'Loksewa' | 'NRB' | 'Commercial' | 'EPF' | string;
  icon: string;
  totalTopics: number;
  completedTopics: number;
  topics: TopicItem[];
  paper?: 'Paper I' | 'Paper II' | string;
  section?: 'Section A' | 'Section B' | 'Section C' | 'Section D' | string;
  sectionLetter?: 'A' | 'B' | 'C' | 'D';
  weightageMarks?: number;
}

export interface CourseProgram {
  id: 'NRB' | 'Commercial' | 'Banking' | 'EPF' | 'Loksewa' | string;
  name: string;
  tagline: string;
  categoryGroup?: string;
  activeLevel?: string;
  levels?: CourseLevel[];
  subjects: SubjectModule[];
  papers?: SyllabusPaper[];
}

export interface BookmarkItem {
  id: string;
  type: 'question' | 'note' | 'current-affair';
  targetId: string;
  title: string;
  category: string;
  savedAt: string;
}

export interface AppNotification {
  id: string;
  title: string;
  description: string;
  message?: string;
  timestamp: string;
  time?: string;
  read: boolean;
  type: 'quiz' | 'affair' | 'streak' | 'note' | 'youtube' | 'announcement';
  targetTab?: NavigationTab;
  actionTab?: NavigationTab;
  videoUrl?: string;
  badge?: string;
}

export interface Coupon {
  code: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  expiryDate: string;
  active: boolean;
  minAmount?: number;
}

export interface PurchaseRecord {
  orderId: string;
  noteId: string;
  title: string;
  coverImage?: string;
  amountPaid: number;
  price?: number;
  purchaseDate: string;
  paymentMethod: 'esewa' | 'khalti' | 'bank_transfer' | string;
  transactionId: string;
  receiptUrl?: string;
  status: 'Purchased' | 'Pending' | 'Failed';
}

export interface AchievementBadge {
  id: string;
  title: string;
  nepaliTitle: string;
  description: string;
  icon: string;
  unlocked: boolean;
  progressPercent: number;
  xpReward?: number;
}

export interface UserActivityRecord {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  activityType: 'reading' | 'download' | 'exam_start' | 'exam_complete' | 'syllabus_view';
  details: string;
  timestamp: string;
  targetId?: string;
  targetTitle?: string;
  metadata?: Record<string, any>;
}

export interface DownloadEventRecord {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  resourceName: string;
  fileType: string;
  fileName?: string;
  fileId?: string;
  resourceCategory?: string;
  fileSize?: string;
  details?: string;
  timestamp: string;
}

export interface ExamScoreRecord {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  quizId: string;
  quizTitle: string;
  category: string;
  mode: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  negativeDeduction: number;
  accuracy: number;
  timeElapsedSeconds: number;
  timestamp: string;
}

export interface ExamSubmissionRecord {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  quizId: string;
  quizTitle: string;
  category?: string;
  score: number;
  totalQuestions: number;
  attemptedCount?: number;
  correctAnswers?: number;
  incorrectAnswers?: number;
  skippedCount?: number;
  negativeDeduction?: number;
  accuracy: number;
  timeTakenSeconds: number;
  timestamp: string;
  submittedAt?: string;
}


