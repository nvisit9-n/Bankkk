import { 
  Question, 
  StudyNote, 
  PremiumNote, 
  CurrentAffairArticle, 
  CurrentAffairItem,
  CourseProgram, 
  SubjectModule,
  SyllabusPaper,
  SyllabusSection,
  AppNotification, 
  AchievementBadge,
  Coupon
} from '../types';
import { BILINGUAL_STUDY_NOTES } from './bilingualStudyNotes';
import { MASTER_STUDY_CHAPTERS } from './masterStudyChapters';
import { COMPREHENSIVE_EXAM_NOTES } from './comprehensiveExamNotes';
import { BANKING_ACTS_MANUAL } from './bankingActsManual';
import { BANKING_BYLAWS_MANUAL } from './bankingBylawsManual';
import { NRB_UNIFIED_DIRECTIVES_MANUAL } from './nrbUnifiedDirectivesManual';
import { ALL_BANKING_LAWS_NOTES } from './laws';
import { BANKING_HISTORY_MASTER_CHAPTER } from './bankingHistoryChapter';
import { BANKING_FUNCTIONS_MASTER_CHAPTER } from './bankingFunctionsChapter';
import { DEPOSIT_CREDIT_MASTER_CHAPTER } from './depositCreditChapter';
import { TRADE_FINANCE_LC_BG_MASTER_CHAPTER } from './tradeFinanceLcBgChapter';
import { AML_KYC_MASTER_CHAPTER } from './amlKycChapter';
import { ACCOUNTING_BASICS_MASTER_CHAPTER } from './accountingBasicsChapter';
import { ACCOUNTING_SYLLABUS_CARDS, ACCOUNTING_SECTION_B_TOPICS } from './accountingSyllabusCards';
import { 
  NRB_MATH_MASTER_CHAPTER, 
  NRB_IT_MASTER_CHAPTER, 
  NRB_CONSTITUTION_GOVERNANCE_CHAPTER 
} from './nrbMathItSyllabusChapters';
import { CURRENT_AFFAIRS_MASTER_DATA } from './currentAffairsData';
import { 
  ALL_QUIZ_QUESTIONS, 
  convertQuizQuestionToQuestion,
  BANKING_NRB_POOL,
  CURRENT_AFFAIRS_POOL,
  ECONOMICS_MGMT_POOL,
  IT_MATH_ENGLISH_POOL,
  getQuestionsByCategory,
  getCategoryQuestionCount,
  getAvailableSubTopics
} from './quizData';

export {
  ALL_QUIZ_QUESTIONS,
  BANKING_NRB_POOL,
  CURRENT_AFFAIRS_POOL,
  ECONOMICS_MGMT_POOL,
  IT_MATH_ENGLISH_POOL,
  getQuestionsByCategory,
  getCategoryQuestionCount,
  getAvailableSubTopics,
  convertQuizQuestionToQuestion
};

// ============================================================================
// LOK SEWA COMMISSION 100% VERIFIED OFFICIAL FACTS & SYLLABUS WEIGHTAGE
// ============================================================================

export const FINANCIAL_RATES_MASTER = {
  policyRate: '5.5%',
  bankRate: '6.5%',
  crr: '4.0%', // Cash Reserve Ratio (Class A, B, C)
  slrClassA: '12.0%', // Statutory Liquidity Ratio (Class A Commercial Banks)
  slrClassBC: '10.0%', // Class B & C
  standingDepositFacility: '3.0%',
  cdRatioCeiling: '90.0%',
  minimumCAR: '11.0%', // Capital Adequacy Ratio (Tier 1 + Tier 2)
  verifiedRef: 'नेपाल राष्ट्र बैंक मौद्रिक नीति तथा एकीकृत निर्देशन'
};

export const GEOGRAPHY_RIVER_INTEGRITY = {
  rasuwa: {
    district: 'रसुवा (Rasuwa)',
    river: 'त्रिशूली नदी (Trishuli River)',
    highway: 'पासाङ ल्हामु राजमार्ग (Pasang Lhamu Highway)',
    borderCustoms: 'रसुवागढी भन्सार नाका (Rasuwagadhi Border)',
    hydroProject: 'माथिल्लो त्रिशूली-३ ए (६० MW) र चिलिमे जलविद्युत',
    rule: 'रसुवा जिल्ला = त्रिशूली नदी (कदापि भोटेकोशीसँग मिसाउनु हुँदैन)'
  },
  sindhupalchok: {
    district: 'सिन्धुपाल्चोक (Sindhupalchok)',
    river: 'भोटेकोशी नदी (Bhotekoshi River)',
    highway: 'अरनिको राजमार्ग (Araniko Highway)',
    borderCustoms: 'तातोपानी भन्सार नाका (Tatopani / Khasa Border)',
    hydroProject: 'उपल्लो भोटेकोशी जलविद्युत (४५ MW)',
    rule: 'सिन्धुपाल्चोक जिल्ला = भोटेकोशी नदी (कदापि त्रिशूलीसँग मिसाउनु हुँदैन)'
  }
};

export const LOK_SEWA_UNIFIED_SYLLABUS_WEIGHTAGE = [
  {
    level: 'तह ४ (Level 4: Assistant / सहायक)',
    publicEnterprisesMarks: 20,
    publicEnterprisesMCQs: 10,
    languageTestMarks: 0,
    languageTestMCQs: 0,
    negativeMarkingPercent: 20,
    negativeMarkingRule: '*प्रत्येक गलत उत्तर बापत २०% अङ्क कट्टा गरिनेछ (Negative Marking: 20%)',
    summaryNepali: 'तह ४ प्रथम पत्र: सार्वजनिक संस्थान (Public Enterprises) = २० अङ्क (१० MCQs) समावेश गरिएको छ।'
  },
  {
    level: 'तह ५ (Level 5: Senior Assistant / वरिष्ठ सहायक)',
    publicEnterprisesMarks: 10,
    publicEnterprisesMCQs: 5,
    languageTestMarks: 10,
    languageTestMCQs: 5,
    negativeMarkingPercent: 20,
    negativeMarkingRule: '*प्रत्येक गलत उत्तर बापत २०% अङ्क कट्टा गरिनेछ (Negative Marking: 20%)',
    summaryNepali: 'तह ५ प्रथम पत्र: सार्वजनिक संस्थान = १० अङ्क (५ MCQs) + भाषा परीक्षण (English & Nepali Language Test) = १० अङ्क (५ MCQs) विभाजन गरिएको छ।'
  }
];

export const INITIAL_USER = {
  id: 'guest_user',
  name: 'अतिथि (Guest User)',
  displayName: 'अतिथि (Guest User)',
  email: '',
  avatarUrl: '/default-avatar.png',
  photoURL: '/default-avatar.png',
  xp: 0,
  streak: 0,
  lastActiveDate: new Date().toISOString().split('T')[0],
  questionsSolved: 0,
  quizzesCompleted: 0,
  accuracy: 100,
  rank: 'अतिथि परीक्षार्थी (Guest)',
  level: 1,
  targetExam: 'नेपाल राष्ट्र बैंक - सहायक (तह ४)',
  totalQuestionsAnswered: 0,
  notesRead: 0,
  isGuest: true,
  isRegistered: false
};

export const MOCK_QUESTIONS: Question[] = [
  // --- BANKING QUESTIONS (10+) ---
  {
    id: 'b-01',
    category: 'Banking',
    difficulty: 'Easy',
    questionNepali: 'नेपालको केन्द्रीय बैंक कुन हो?',
    questionEnglish: 'Which is the central bank of Nepal?',
    options: [
      { key: 'A', textNepali: 'नेपाल बैंक लिमिटेड', textEnglish: 'Nepal Bank Limited' },
      { key: 'B', textNepali: 'नेपाल राष्ट्र बैंक', textEnglish: 'Nepal Rastra Bank' },
      { key: 'C', textNepali: 'राष्ट्रिय वाणिज्य बैंक', textEnglish: 'Rastriya Banijya Bank' },
      { key: 'D', textNepali: 'कृषि विकास बैंक', textEnglish: 'Agricultural Development Bank' }
    ],
    correctAnswer: 'B',
    explanationNepali: 'नेपाल राष्ट्र बैंक नेपालको केन्द्रीय बैंक हो, जसको स्थापना वि.सं. २०१३ वैशाख १४ गते नेपाल राष्ट्र बैंक ऐन २०१२ अन्तर्गत भएको थियो।',
    examTag: 'NRB / RBB Level 4',
    topic: 'Central Banking'
  },
  {
    id: 'b-02',
    category: 'Banking',
    difficulty: 'Medium',
    questionNepali: 'बैंक तथा वित्तीय संस्था सम्बन्धी ऐन (बाफिया - BAFIA) हाल कुन सालको कार्यान्वयनमा रहेको छ?',
    options: [
      { key: 'A', textNepali: 'BAFIA २०६३' },
      { key: 'B', textNepali: 'BAFIA २०७३' },
      { key: 'C', textNepali: 'BAFIA २०७५' },
      { key: 'D', textNepali: 'BAFIA २०७०' }
    ],
    correctAnswer: 'B',
    explanationNepali: 'नेपालमा हाल बैंक तथा वित्तीय संस्था सम्बन्धी ऐन, २०७३ (BAFIA 2073) कार्यान्वयनमा रहेको छ।',
    examTag: 'Banking Laws',
    topic: 'BAFIA 2073'
  },
  {
    id: 'b-03',
    category: 'Banking',
    difficulty: 'Easy',
    questionNepali: 'नेपालको पहिलो बैंक "नेपाल बैंक लिमिटेड" को स्थापना कहिले भएको थियो?',
    options: [
      { key: 'A', textNepali: 'वि.सं. १९९० कार्तिक ३०' },
      { key: 'B', textNepali: 'वि.सं. १९९४ कार्तिक ३०' },
      { key: 'C', textNepali: 'वि.सं. २००२ चैत १०' },
      { key: 'D', textNepali: 'वि.सं. २०१३ वैशाख १४' }
    ],
    correctAnswer: 'B',
    explanationNepali: 'नेपाल बैंक लिमिटेडको स्थापना वि.सं. १९९४ कार्तिक ३० (15 November 1937) मा राजा त्रिभुवन र प्रधानमन्त्री जुद्ध शमशेरको पालामा भएको हो।',
    examTag: 'Banking History',
    topic: 'Commercial Banks'
  },
  {
    id: 'b-04',
    category: 'Banking',
    difficulty: 'Hard',
    questionNepali: 'बासेल (BASEL) फ्रेमवर्कको मुख्य उद्देश्य के हो?',
    options: [
      { key: 'A', textNepali: 'बैंकहरूलाई कर छुट दिलाउनु' },
      { key: 'B', textNepali: 'बैंकिङ प्रणालीको पुँजी पर्याप्तता र जोखिम व्यवस्थापन सुदृढ गर्नु' },
      { key: 'C', textNepali: 'नयाँ नोट निष्कासनको नीति बनाउनु' },
      { key: 'D', textNepali: 'विदेशमा शाखा विस्तार गर्न अनुमति दिनु' }
    ],
    correctAnswer: 'B',
    explanationNepali: 'बासेल फ्रेमवर्क (Basel Accords) ले बैंकहरूको पूँजी पर्याप्तता (Capital Adequacy), बजार जोखिम र तरलता जोखिम सुपरिवेक्षण गर्ने मापदण्ड तोक्दछ।',
    examTag: 'NRB Level 5/6',
    topic: 'Basel Framework'
  },
  {
    id: 'b-05',
    category: 'Banking',
    difficulty: 'Medium',
    questionNepali: 'बैंकहरूले ग्राहक पहिचान (KYC) अध्यावधिक गर्नुको मुख्य कारण के हो?',
    options: [
      { key: 'A', textNepali: 'सम्पत्ति शुद्धीकरण तथा आतंकवादी क्रियाकलापमा वित्तीय लगानी नियन्त्रण (AML/CFT)' },
      { key: 'B', textNepali: 'ग्राहकलाई कर्जा ब्याजदर बढाउन' },
      { key: 'C', textNepali: 'नयाँ खाता खोल्न रोक लगाउन' },
      { key: 'D', textNepali: 'बैंकको विज्ञापन गर्न' }
    ],
    correctAnswer: 'A',
    explanationNepali: 'KYC (Know Your Customer) को मुख्य उद्देश्य AML/CFT ऐन अनुसार गैरकानूनी कारोबार तथा सम्पत्ति शुद्धीकरण रोकथाम गर्नु हो।',
    examTag: 'General Banking',
    topic: 'AML / KYC'
  },
  {
    id: 'b-06',
    category: 'Banking',
    difficulty: 'Medium',
    questionNepali: 'नेपालमा वाणिज्य बैंकहरूलाई कुन वर्गको वित्तीय संस्था मानिन्छ?',
    options: [
      { key: 'A', textNepali: '"क" वर्ग' },
      { key: 'B', textNepali: '"ख" वर्ग' },
      { key: 'C', textNepali: '"ग" वर्ग' },
      { key: 'D', textNepali: '"घ" वर्ग' }
    ],
    correctAnswer: 'A',
    explanationNepali: 'नेपाल राष्ट्र बैंक ऐन तथा BAFIA अनुसार: "क" वर्ग - वाणिज्य बैंक, "ख" वर्ग - विकास बैंक, "ग" वर्ग - वित्त कम्पनी, "घ" वर्ग - लघुवित्त वित्तीय संस्था।',
    examTag: 'BAFIA Classification',
    topic: 'Financial Institutions'
  },
  {
    id: 'b-07',
    category: 'Banking',
    difficulty: 'Hard',
    questionNepali: 'नेपाल राष्ट्र बैंकले जारी गर्ने "मौद्रिक नीति" (Monetary Policy) कुन आर्थिक ऐन अन्तर्गत जारी गरिन्छ?',
    options: [
      { key: 'A', textNepali: 'कम्पनी ऐन २०६३' },
      { key: 'B', textNepali: 'नेपाल राष्ट्र बैंक ऐन, २०५८' },
      { key: 'C', textNepali: 'बैंकिङ कसूर तथा सजाय ऐन २०६४' },
      { key: 'D', textNepali: 'धितोपत्र ऐन २०६३' }
    ],
    correctAnswer: 'B',
    explanationNepali: 'नेपाल राष्ट्र बैंक ऐन, २०५८ को दफा ४४ ले राष्ट्र बैंकलाई प्रत्येक वर्ष मौद्रिक नीति तर्जुमा गरी सार्वजनिक गर्ने अधिकार प्रदान गरेको छ।',
    examTag: 'NRB Special',
    topic: 'Monetary Policy'
  },
  {
    id: 'b-08',
    category: 'Banking',
    difficulty: 'Easy',
    questionNepali: 'अन्तर्राष्ट्रिय वित्तीय सन्देश आदानप्रदान गर्न प्रयोग हुने स्विफ्ट (SWIFT) को पूर्ण रूप के हो?',
    options: [
      { key: 'A', textNepali: 'Society for Worldwide Interbank Financial Telecommunication' },
      { key: 'B', textNepali: 'Standard Worldwide Investment Financial Telecom' },
      { key: 'C', textNepali: 'System for Wholesale International Financial Transfer' },
      { key: 'D', textNepali: 'Secure Worldwide Interbank Funds Transmission' }
    ],
    correctAnswer: 'A',
    explanationNepali: 'SWIFT को पूर्ण रूप Society for Worldwide Interbank Financial Telecommunication हो। यसको मुख्यालय बेल्जियमको ला हुल्पेमा छ।',
    examTag: 'Banking Tech',
    topic: 'Electronic Banking'
  },
  {
    id: 'b-09',
    category: 'Banking',
    difficulty: 'Medium',
    questionNepali: 'बैंकमा राखिने अनिवार्य नगद मौज्दात अनुपात (CRR - Cash Reserve Ratio) कसले निर्धारण गर्छ?',
    options: [
      { key: 'A', textNepali: 'अर्थ मन्त्रालय' },
      { key: 'B', textNepali: 'नेपाल राष्ट्र बैंक' },
      { key: 'C', textNepali: 'नेपाल बैंकर्स संघ' },
      { key: 'D', textNepali: 'धितोपत्र बोर्ड' }
    ],
    correctAnswer: 'B',
    explanationNepali: 'CRR केन्द्रीय बैंकको प्रत्यक्ष मौद्रिक उपकरण हो। नेपालमा यो नेपाल राष्ट्र बैंकले निर्धारण गर्दछ।',
    examTag: 'Monetary Instruments',
    topic: 'Liquidity Management'
  },
  {
    id: 'b-10',
    category: 'Banking',
    difficulty: 'Hard',
    questionNepali: 'नेपालमा बैंकिङ कसूर तथा सजाय ऐन, २०६४ कहिले प्रमाणीकरण भयो?',
    options: [
      { key: 'A', textNepali: 'वि.सं. २०६४ माघ २३' },
      { key: 'B', textNepali: 'वि.सं. २०६४ चैत २८' },
      { key: 'C', textNepali: 'वि.सं. २०६५ जेठ १५' },
      { key: 'D', textNepali: 'वि.सं. २०६३ पौष १' }
    ],
    correctAnswer: 'A',
    explanationNepali: 'बैंकिङ कसूर तथा सजाय ऐन, २०६४ वि.सं. २०६४ माघ २३ गते प्रमाणीकरण भएको हो। चेक बाउन्स, गैरकानुनी कर्जा प्रवाह जस्ता कसूर यस ऐनमा समेटिएका छन्।',
    examTag: 'Banking Law',
    topic: 'Banking Offences Act'
  },

  // --- GENERAL KNOWLEDGE (GK) QUESTIONS (10+) ---
  {
    id: 'gk-01',
    category: 'GK',
    difficulty: 'Easy',
    questionNepali: 'नेपालको वर्तमान संविधान कहिले जारी भएको हो?',
    options: [
      { key: 'A', textNepali: 'वि.सं. २०७२ असोज ३' },
      { key: 'B', textNepali: 'वि.सं. २०७२ भदौ २४' },
      { key: 'C', textNepali: 'वि.सं. २०६३ माघ १' },
      { key: 'D', textNepali: 'वि.सं. २०४७ कार्तिक २३' }
    ],
    correctAnswer: 'A',
    explanationNepali: 'नेपालको संविधान (२०७२) संविधान सभाबाट वि.सं. २०७२ साल असोज ३ गते राष्ट्रपति रामवरण यादवद्वारा जारी गरिएको हो।',
    examTag: 'Constitution',
    topic: 'Constitution of Nepal'
  },
  {
    id: 'gk-02',
    category: 'GK',
    difficulty: 'Easy',
    questionNepali: 'नेपालको सबैभन्दा गहिरो ताल कुन हो?',
    options: [
      { key: 'A', textNepali: 'रारा ताल' },
      { key: 'B', textNepali: 'फोक्सुन्डो ताल' },
      { key: 'C', textNepali: 'फेवा ताल' },
      { key: 'D', textNepali: 'तिलिचो ताल' }
    ],
    correctAnswer: 'B',
    explanationNepali: 'डोल्पा जिल्लामा अवस्थित शे-फोक्सुन्डो ताल नेपालको सबैभन्दा गहिरो (१४५ मिटर) मानिन्छ। रारा ताल सबैभन्दा ठूलो ताल हो।',
    examTag: 'Geography',
    topic: 'Lakes of Nepal'
  },
  {
    id: 'gk-03',
    category: 'GK',
    difficulty: 'Medium',
    questionNepali: 'नेपालको संविधानमा कति भाग, धारा र अनुसूचीहरू रहेका छन्?',
    options: [
      { key: 'A', textNepali: '३५ भाग, ३०८ धारा, ९ अनुसूची' },
      { key: 'B', textNepali: '३० भाग, २५० धारा, ८ अनुसूची' },
      { key: 'C', textNepali: '३५ भाग, ३२५ धारा, ७ अनुसूची' },
      { key: 'D', textNepali: '२५ भाग, २४० धारा, ६ अनुसूची' }
    ],
    correctAnswer: 'A',
    explanationNepali: 'नेपालको संविधानमा ३५ भाग, ३०८ धारा र ९ वटा अनुसूचीहरू रहेका छन्।',
    examTag: 'Constitution Facts',
    topic: 'Constitutional Law'
  },
  {
    id: 'gk-04',
    category: 'GK',
    difficulty: 'Medium',
    questionNepali: 'सप्तकोशी नदीको सबैभन्दा ठूलो सहायक नदी कुन हो?',
    options: [
      { key: 'A', textNepali: 'सुनकोशी' },
      { key: 'B', textNepali: 'अरुण' },
      { key: 'C', textNepali: 'तामाकोशी' },
      { key: 'D', textNepali: 'तमोर' }
    ],
    correctAnswer: 'B',
    explanationNepali: 'सप्तकोशी नदीको सबैभन्दा ठूलो सहायक नदी अरुण हो र सबैभन्दा सानो लिखु हो।',
    examTag: 'Rivers of Nepal',
    topic: 'Geography'
  },
  {
    id: 'gk-05',
    category: 'GK',
    difficulty: 'Hard',
    questionNepali: 'संयुक्त राष्ट्रसंघ (UN) को सदस्यता नेपालले कहिले प्राप्त गरेको हो?',
    options: [
      { key: 'A', textNepali: 'सन् १९४५ अक्टोबर २४' },
      { key: 'B', textNepali: 'सन् १९५५ डिसेम्बर १४' },
      { key: 'C', textNepali: 'सन् १९६० सेप्टेम्बर २०' },
      { key: 'D', textNepali: 'सन् १९५० जनवरी २६' }
    ],
    correctAnswer: 'B',
    explanationNepali: 'नेपालले १४ डिसेम्बर १९५५ (वि.सं. २०१२ मंसिर २९) मा प्याकेज डिल अन्तर्गत संयुक्त राष्ट्रसंघको सदस्यता प्राप्त गरेको थियो।',
    examTag: 'International Relations',
    topic: 'UN & Nepal'
  },
  {
    id: 'gk-06',
    category: 'GK',
    difficulty: 'Easy',
    questionNepali: 'नेपालको प्रमाणिक समय कुन हिमाललाई आधार मानेर निर्धारण गरिएको छ?',
    options: [
      { key: 'A', textNepali: 'सगरमाथा' },
      { key: 'B', textNepali: 'गौरीशंकर' },
      { key: 'C', textNepali: 'माछापुच्छ्रे' },
      { key: 'D', textNepali: 'मनास्लु' }
    ],
    correctAnswer: 'B',
    explanationNepali: 'दोलखा जिल्लाको गौरीशंकर हिमाल (८६° १५\' पूर्वी देशान्तर) लाई आधार मानेर वि.सं. २०४२ वैशाख १ गतेदेखि नेपालको प्रमाणिक समय लागु गरिएको हो।',
    examTag: 'Nepal Time',
    topic: 'Geography'
  },
  {
    id: 'gk-07',
    category: 'GK',
    difficulty: 'Medium',
    questionNepali: 'सार्क (SAARC) को स्थायी सचिवालय कहाँ अवस्थित छ?',
    options: [
      { key: 'A', textNepali: 'नयाँ दिल्ली, भारत' },
      { key: 'B', textNepali: 'ढाका, बंगलादेश' },
      { key: 'C', textNepali: 'काठमाडौँ, नेपाल' },
      { key: 'D', textNepali: 'कोलम्बो, श्रीलंका' }
    ],
    correctAnswer: 'C',
    explanationNepali: 'सार्कको स्थायी सचिवालय नेपालको राजधानी काठमाडौँ (ठमेल/पाटन नजिक) मा सन् १९८७ जनवरी १६ मा स्थापना भएको हो।',
    examTag: 'Regional Organizations',
    topic: 'SAARC'
  },
  {
    id: 'gk-08',
    category: 'GK',
    difficulty: 'Hard',
    questionNepali: 'लिच्छविकालमा गाउँस्तरको प्रशासनिक इकाइलाई के भनिन्थ्यो?',
    options: [
      { key: 'A', textNepali: 'ग्राम' },
      { key: 'B', textNepali: 'द्रङ्ग' },
      { key: 'C', textNepali: 'तला' },
      { key: 'D', textNepali: 'विषय' }
    ],
    correctAnswer: 'A',
    explanationNepali: 'लिच्छविकालमा गाउँस्तरको इकाइलाई "ग्राम", व्यापारिक केन्द्रयुक्त गाउँलाई "तल" र ठूलो व्यापारिक बस्तीलाई "द्रङ्ग" भनिन्थ्यो। जिल्लालाई "विषय" भनिन्थ्यो।',
    examTag: 'History',
    topic: 'Ancient Nepal'
  },
  {
    id: 'gk-09',
    category: 'GK',
    difficulty: 'Medium',
    questionNepali: 'विश्व सम्पदा सूची (UNESCO) मा सूचीकृत काठमाडौँ उपत्यका बाहिरको सांस्कृतिक सम्पदा कुन हो?',
    options: [
      { key: 'A', textNepali: 'चितवन राष्ट्रिय निकुञ्ज' },
      { key: 'B', textNepali: 'लुम्बिनी' },
      { key: 'C', textNepali: 'सगरमाथा राष्ट्रिय निकुञ्ज' },
      { key: 'D', textNepali: 'मुक्तिनाथ मन्दिर' }
    ],
    correctAnswer: 'B',
    explanationNepali: 'लुम्बिनी सन् १९९७ मा युनेस्कोको सांस्कृतिक सम्पदा सूचीमा सूचीकृत भएको हो। चितवन र सगरमाथा प्राकृतिक सम्पदा हुन्।',
    examTag: 'Culture & Heritage',
    topic: 'UNESCO Heritage'
  },
  {
    id: 'gk-10',
    category: 'GK',
    difficulty: 'Medium',
    questionNepali: 'नेपालमा स्थानीय तहको कुल संख्या कति रहेको छ?',
    options: [
      { key: 'A', textNepali: '७५३' },
      { key: 'B', textNepali: '७४४' },
      { key: 'C', textNepali: '७७' },
      { key: 'D', textNepali: '६७४३' }
    ],
    correctAnswer: 'A',
    explanationNepali: 'नेपालमा ६ महानगरपालिका, ११ उपमहानगरपालिका, २७६ नगरपालिका र ४६० गाउँपालिका गरी कुल ७५३ स्थानीय तह रहेका छन्। वडा संख्या ६७४३ छ।',
    examTag: 'Local Government',
    topic: 'Governance'
  },

  // --- ECONOMICS QUESTIONS (10+) ---
  {
    id: 'eco-01',
    category: 'Economics',
    difficulty: 'Easy',
    questionNepali: 'कुल गार्हस्थ उत्पादन (GDP) भन्नाले के बुझाउँछ?',
    options: [
      { key: 'A', textNepali: 'एक निश्चित समयमा देशको भौगोलिक सिमानाभित्र उत्पादित अन्तिम वस्तु तथा सेवाको कुल बजार मूल्य' },
      { key: 'B', textNepali: 'विदेशबाट नेपाली नागरिकले पठाएको कुल रेमिट्यान्स' },
      { key: 'C', textNepali: 'सरकारले उठाएको कुल राजस्व' },
      { key: 'D', textNepali: 'विदेशी मुद्रा सञ्चिति' }
    ],
    correctAnswer: 'A',
    explanationNepali: 'GDP (Gross Domestic Product) भन्नाले सामान्यतया एक वर्षभित्र देशभित्र उत्पादन गरिएका सम्पूर्ण अन्तिम वस्तु र सेवाहरूको बजार मूल्यलाई जनाउँछ।',
    examTag: 'Macroeconomics',
    topic: 'National Income'
  },
  {
    id: 'eco-02',
    category: 'Economics',
    difficulty: 'Medium',
    questionNepali: 'मुद्रास्फीति (Inflation) ले बजारमा कुन असर देखाउँछ?',
    options: [
      { key: 'A', textNepali: 'वस्तु तथा सेवाको मूल्य घट्ने' },
      { key: 'B', textNepali: 'पैसाको क्रयशक्ति (Purchasing Power) घट्ने र सामान्य मूल्यस्तर बढ्ने' },
      { key: 'C', textNepali: 'सबै सामान निःशुल्क पाइने' },
      { key: 'D', textNepali: 'बैंकको ऋण शून्य हुने' }
    ],
    correctAnswer: 'B',
    explanationNepali: 'मुद्रास्फीति भनेको समयसँगै सामान्य मूल्यस्तर निरन्तर बढ्नु र मुद्राको क्रयशक्ति घट्नु हो।',
    examTag: 'Economics NRB',
    topic: 'Inflation'
  },
  {
    id: 'eco-03',
    category: 'Economics',
    difficulty: 'Hard',
    questionNepali: 'केन्द्रीय बैंकले तरलता प्रशोचन (Liquidity Absorption) गर्न कुन मौद्रिक औजार प्रयोग गर्छ?',
    options: [
      { key: 'A', textNepali: 'रिपो (Repo)' },
      { key: 'B', textNepali: 'रिभर्स रिपो (Reverse Repo)' },
      { key: 'C', textNepali: 'पुनर्कर्जा प्रवाह' },
      { key: 'D', textNepali: 'बैंक दर घटाउने' }
    ],
    correctAnswer: 'B',
    explanationNepali: 'बजारमा अत्यधिक तरलता हुँदा राष्ट्र बैंकले रिभर्स रिपो (Reverse Repo) तथा निक्षेप संकलन उपकरणमार्फत बजारबाट रकम खिच्छ (प्रशोचन गर्दछ)।',
    examTag: 'Monetary Economics',
    topic: 'Open Market Operations'
  },
  {
    id: 'eco-04',
    category: 'Economics',
    difficulty: 'Medium',
    questionNepali: 'नेपालको अर्थतन्त्रमा विप्रेषण (Remittance) को योगदान कुल जीडीपीको करिब कति प्रतिशतको हाराहारीमा छ?',
    options: [
      { key: 'A', textNepali: '५ देखि १०%' },
      { key: 'B', textNepali: '१५ देखि २०%' },
      { key: 'C', textNepali: '२५ देखि २८%' },
      { key: 'D', textNepali: '५०%' }
    ],
    correctAnswer: 'C',
    explanationNepali: 'नेपालको अर्थतन्त्रमा औपचारिक माध्यमबाट भित्रिने विप्रेषण आप्रवाह जीडीपीको करिब २५ देखि २८ प्रतिशत हाराहारी रहेको छ।',
    examTag: 'Nepal Economy',
    topic: 'Remittance'
  },
  {
    id: 'eco-05',
    category: 'Economics',
    difficulty: 'Easy',
    questionNepali: 'नेपाल सरकारको आर्थिक वर्ष कहिले सुरु भई कहिले समाप्त हुन्छ?',
    options: [
      { key: 'A', textNepali: 'वैशाख १ देखि चैत मसान्त' },
      { key: 'B', textNepali: 'साउन १ देखि असार मसान्त' },
      { key: 'C', textNepali: 'माघ १ देखि पुस मसान्त' },
      { key: 'D', textNepali: 'असोज १ देखि भदौ मसान्त' }
    ],
    correctAnswer: 'B',
    explanationNepali: 'नेपालको आर्थिक वर्ष प्रत्येक वर्षको साउन १ गते सुरु भएर अर्को वर्षको असार मसान्तमा सकिन्छ। बजेट जेठ १५ गते संसद्मा पेश हुन्छ।',
    examTag: 'Public Finance',
    topic: 'Fiscal Year'
  },
  {
    id: 'eco-06',
    category: 'Economics',
    difficulty: 'Hard',
    questionNepali: 'फिस्कल पोलिसी (Fiscal Policy - वित्तीय नीति) कसले निर्माण तथा कार्यान्वयन गर्दछ?',
    options: [
      { key: 'A', textNepali: 'नेपाल राष्ट्र बैंक' },
      { key: 'B', textNepali: 'अर्थ मन्त्रालय (नेपाल सरकार)' },
      { key: 'C', textNepali: 'राष्ट्रिय योजना आयोग' },
      { key: 'D', textNepali: 'धितोपत्र बोर्ड' }
    ],
    correctAnswer: 'B',
    explanationNepali: 'वित्तीय नीति (बजेट, कर, सार्वजनिक खर्च) अर्थ मन्त्रालय/नेपाल सरकारले गर्दछ भने मौद्रिक नीति (ब्याजदर, मुद्रा आपूर्ति) केन्द्रीय बैंकले गर्दछ।',
    examTag: 'Macroeconomics',
    topic: 'Fiscal vs Monetary'
  },
  {
    id: 'eco-07',
    category: 'Economics',
    difficulty: 'Medium',
    questionNepali: 'शोधनान्तर स्थिति (Balance of Payments - BOP) बचतमा हुनुको अर्थ के हो?',
    options: [
      { key: 'A', textNepali: 'देशबाट बाहिरिने भन्दा देशमा भित्रिने विदेशी मुद्राको रकम बढी हुनु' },
      { key: 'B', textNepali: 'सरकारको आन्तरिक ऋण समाप्त हुनु' },
      { key: 'C', textNepali: 'व्यापार घाटा शून्य हुनु' },
      { key: 'D', textNepali: 'कर संकलन लक्ष्यभन्दा कम हुनु' }
    ],
    correctAnswer: 'A',
    explanationNepali: 'BOP Surplus हुनु भनेको कुनै निश्चित अवधिमा बाह्य जगतसँगको वित्तीय कारोबारमा नेपाल भित्रिने रकम बाहिरिने रकमभन्दा बढी हुनु हो।',
    examTag: 'External Sector',
    topic: 'Balance of Payments'
  },
  {
    id: 'eco-08',
    category: 'Economics',
    difficulty: 'Hard',
    questionNepali: 'लरेन्ज वक्र (Lorenz Curve) ले के नाप्न मद्दत गर्दछ?',
    options: [
      { key: 'A', textNepali: 'मुद्रास्फीति र बेरोजगारी' },
      { key: 'B', textNepali: 'आय तथा सम्पत्तिको असमानता' },
      { key: 'C', textNepali: 'जनसंख्या वृद्धिदर' },
      { key: 'D', textNepali: 'वैदेशिक व्यापार नाफा' }
    ],
    correctAnswer: 'B',
    explanationNepali: 'लरेन्ज वक्र (Lorenz Curve) ले समाजमा आय र सम्पत्तिको असमान वितरणको मापन गर्दछ, जसबाट गिनी गुणांक (Gini Coefficient) निकालिन्छ।',
    examTag: 'Economic Theories',
    topic: 'Income Inequality'
  },
  {
    id: 'eco-09',
    category: 'Economics',
    difficulty: 'Medium',
    questionNepali: 'नेपालमा हाल कुन पञ्चवर्षीय/आवधिक योजना कार्यान्वयनमा रहेको छ?',
    options: [
      { key: 'A', textNepali: '१५ औं योजना' },
      { key: 'B', textNepali: '१६ औं योजना' },
      { key: 'C', textNepali: '१४ औं योजना' },
      { key: 'D', textNepali: '१७ औं योजना' }
    ],
    correctAnswer: 'B',
    explanationNepali: 'नेपालमा आर्थिक वर्ष २०८१/८२ देखि २०८५/८६ सम्मका लागि सोह्रौं आवधिक योजना (16th Periodic Plan) कार्यान्वयनमा आएको छ।',
    examTag: 'Planning Commission',
    topic: 'Periodic Plans'
  },
  {
    id: 'eco-10',
    category: 'Economics',
    difficulty: 'Easy',
    questionNepali: 'मागको नियम (Law of Demand) अनुसार अन्य कुरा स्थिर रहेमा मूल्य बढ्दा मागमा के असर पर्छ?',
    options: [
      { key: 'A', textNepali: 'माग बढ्छ' },
      { key: 'B', textNepali: 'माग घट्छ' },
      { key: 'C', textNepali: 'माग स्थिर रहन्छ' },
      { key: 'D', textNepali: 'शून्य हुन्छ' }
    ],
    correctAnswer: 'B',
    explanationNepali: 'मागको नियम अनुसार वस्तुको मूल्य र मागको परिमाण बीच विपरित (Negative/Inverse) सम्बन्ध हुन्छ। मूल्य बढ्दा माग घट्दछ।',
    examTag: 'Microeconomics',
    topic: 'Demand Theory'
  },

  // --- MANAGEMENT QUESTIONS (10+) ---
  {
    id: 'mgt-01',
    category: 'Management',
    difficulty: 'Medium',
    questionNepali: 'व्यवसाय पुनःइन्जिनियरिङ (Business Process Re-engineering - BPR) को मुख्य अवधारणा के हो?',
    options: [
      { key: 'A', textNepali: 'क्रमिक र सानो सुधार मात्र गर्नु' },
      { key: 'B', textNepali: 'व्यापारिक प्रक्रियाको आधारभूत पुनर्विचार र आमूल (Radical) पुनर्संरचना गर्नु' },
      { key: 'C', textNepali: 'कर्मचारीहरूलाई कटौती गरी नयाँ सफ्टवेयर ल्याउनु मात्र' },
      { key: 'D', textNepali: 'कार्यालयको भवन र रंगरोगन फेर्नु' }
    ],
    correctAnswer: 'B',
    explanationNepali: 'माइकल ह्यामर र जेम्स च्याम्पीका अनुसार BPR भनेको लागत, गुणस्तर, सेवा र गतिमा नाटकीय सुधार ल्याउन व्यावसायिक प्रक्रियाको आधारभूत पुनर्विचार र आमूल पुनःडिजाइन हो।',
    examTag: 'Public Management',
    topic: 'Re-engineering'
  },
  {
    id: 'mgt-02',
    category: 'Management',
    difficulty: 'Easy',
    questionNepali: 'व्यवस्थापनको POSDCORB सूत्र कसले प्रतिपादन गरेका हुन्?',
    options: [
      { key: 'A', textNepali: 'लुथर गुलिक र लिन्डल उर्बिक' },
      { key: 'B', textNepali: 'हेनरी फेयोल' },
      { key: 'C', textNepali: 'एफ. डब्लु. टेलर' },
      { key: 'D', textNepali: 'पिटर ड्रकर' }
    ],
    correctAnswer: 'A',
    explanationNepali: 'POSDCORB (Planning, Organizing, Staffing, Directing, Coordinating, Reporting, Budgeting) सूत्र लुथर गुलिक (Luther Gulick) ले प्रतिपादन गरेका हुन्।',
    examTag: 'Loksewa Admin',
    topic: 'Functions of Management'
  },
  {
    id: 'mgt-03',
    category: 'Management',
    difficulty: 'Medium',
    questionNepali: 'अधिकार प्रत्यायोजन (Delegation of Authority) गर्दा कुन पक्ष प्रत्यायोजन गर्न सकिँदैन?',
    options: [
      { key: 'A', textNepali: 'कामको जिम्मेवारी (Responsibility)' },
      { key: 'B', textNepali: 'अधिकार (Authority)' },
      { key: 'C', textNepali: 'अन्तिम जवाफदेहिता (Accountability)' },
      { key: 'D', textNepali: 'दैनिक कार्यतालिका' }
    ],
    correctAnswer: 'C',
    explanationNepali: 'अधिकार र कार्य जिम्मेवारी मातहतका कर्मचारीलाई प्रत्यायोजन गर्न सकिए तापनि अन्तिम उत्तरदायित्व/जवाफदेहिता (Accountability) भने मूल अधिकारीमै रहन्छ।',
    examTag: 'Administration',
    topic: 'Delegation'
  },
  {
    id: 'mgt-04',
    category: 'Management',
    difficulty: 'Easy',
    questionNepali: 'आधुनिक व्यवस्थापनका पिता (Father of Modern Management) कसलाई मानिन्छ?',
    options: [
      { key: 'A', textNepali: 'पिटर ड्रकर (Peter Drucker)' },
      { key: 'B', textNepali: 'हेनरी फेयोल' },
      { key: 'C', textNepali: 'एल्टन मायो' },
      { key: 'D', textNepali: 'म्याक्स वेबर' }
    ],
    correctAnswer: 'A',
    explanationNepali: 'पिटर ड्रकरलाई आधुनिक व्यवस्थापनका पिता मानिन्छ भने हेनरी फेयोललाई प्रशासनिक व्यवस्थापनका पिता र एफ. डब्लु. टेलरलाई वैज्ञानिक व्यवस्थापनका पिता भनिन्छ।',
    examTag: 'Management Basics',
    topic: 'Management Thought'
  },
  {
    id: 'mgt-05',
    category: 'Management',
    difficulty: 'Medium',
    questionNepali: 'कर्मचारी उत्प्रेरणाको "आवश्यकताको सोपान सिद्धान्त" (Hierarchy of Needs Theory) का प्रतिपादक को हुन्?',
    options: [
      { key: 'A', textNepali: 'अब्राहम मास्लो' },
      { key: 'B', textNepali: 'फ्रेड्रिक हर्जबर्ग' },
      { key: 'C', textNepali: 'डगलस म्याकग्रेगर' },
      { key: 'D', textNepali: 'डेभिड म्याकक्लेल्याण्ड' }
    ],
    correctAnswer: 'A',
    explanationNepali: 'अब्राहम मास्लोले मानवीय आवश्यकतालाई ५ तहमा (शारीरिक, सुरक्षा, सामाजिक, आत्मसम्मान र आत्मसन्तुष्टि) विभाजन गरेका हुन्।',
    examTag: 'Organizational Behavior',
    topic: 'Motivation'
  },
  {
    id: 'mgt-06',
    category: 'Management',
    difficulty: 'Hard',
    questionNepali: 'सार्वजनिक सेवा प्रवाहमा "नागरिक बडापत्र" (Citizen Charter) को अवधारणा पहिलो पटक कुन देशबाट सुरु भएको हो?',
    options: [
      { key: 'A', textNepali: 'संयुक्त अधिराज्य (बेलायत)' },
      { key: 'B', textNepali: 'संयुक्त राज्य अमेरिका' },
      { key: 'C', textNepali: 'फ्रान्स' },
      { key: 'D', textNepali: 'भारत' }
    ],
    correctAnswer: 'A',
    explanationNepali: 'सन् १९९१ मा बेलायतका तत्कालीन प्रधानमन्त्री जोन मेजरको पालामा नागरिक बडापत्रको अवधारणा सर्वप्रथम सुरु भएको हो। नेपालमा वि.सं. २०५६ मा प्रवेश भयो।',
    examTag: 'Public Governance',
    topic: 'Citizen Charter'
  },
  {
    id: 'mgt-07',
    category: 'Management',
    difficulty: 'Medium',
    questionNepali: 'SWOT विश्लेषणमा "S" र "W" ले कुन वातावरणलाई जनाउँछन्?',
    options: [
      { key: 'A', textNepali: 'बाह्य वातावरण (External Environment)' },
      { key: 'B', textNepali: 'आन्तरिक वातावरण (Internal Environment)' },
      { key: 'C', textNepali: 'अन्तर्राष्ट्रिय वातावरण' },
      { key: 'D', textNepali: 'कानुनी वातावरण' }
    ],
    correctAnswer: 'B',
    explanationNepali: 'SWOT मा Strengths (सबलता) र Weaknesses (दुर्बलता) संस्थाको आन्तरिक वातावरण हुन् भने Opportunities (अवसर) र Threats (चुनौती) बाह्य वातावरण हुन्।',
    examTag: 'Strategic Management',
    topic: 'SWOT Analysis'
  },
  {
    id: 'mgt-08',
    category: 'Management',
    difficulty: 'Easy',
    questionNepali: 'हेनरी फेयोलले व्यवस्थापनका कतिवटा सिद्धान्तहरू प्रतिपादन गरेका थिए?',
    options: [
      { key: 'A', textNepali: '१० वटा' },
      { key: 'B', textNepali: '१२ वटा' },
      { key: 'C', textNepali: '१४ वटा' },
      { key: 'D', textNepali: '१६ वटा' }
    ],
    correctAnswer: 'C',
    explanationNepali: 'हेनरी फेयोलले आफ्नो पुस्तक "General and Industrial Management" मा १४ वटा प्रशासनिक सिद्धान्तहरू (Division of work, Authority, Unity of command आदि) उल्लेख गरेका छन्।',
    examTag: 'Classical Theory',
    topic: 'Fayol Principles'
  },
  {
    id: 'mgt-09',
    category: 'Management',
    difficulty: 'Hard',
    questionNepali: 'निर्णय प्रक्रियामा "सिमित विवेकशीलता" (Bounded Rationality) को अवधारणा कसले अघि सारेका हुन्?',
    options: [
      { key: 'A', textNepali: 'हर्बर्ट साइमन (Herbert Simon)' },
      { key: 'B', textNepali: 'चेस्टर बर्नार्ड' },
      { key: 'C', textNepali: 'विलियम ओउची' },
      { key: 'D', textNepali: 'विक्टर भ्रूम' }
    ],
    correctAnswer: 'A',
    explanationNepali: 'नोबेल पुरस्कार विजेता हर्बर्ट साइमनले मानिसको सोच्ने र सूचना प्रशोधन गर्ने क्षमता सीमित हुने भएकाले "सन्तोषजनक निर्णय" (Satisficing Decision) लिने विचार प्रस्तुत गरे।',
    examTag: 'Decision Making',
    topic: 'Simon Decision Model'
  },
  {
    id: 'mgt-10',
    category: 'Management',
    difficulty: 'Medium',
    questionNepali: 'नियन्त्रणको विस्तार (Span of Control) भन्नाले के बुझिन्छ?',
    options: [
      { key: 'A', textNepali: 'कार्यालयको भौगोलिक क्षेत्रफल' },
      { key: 'B', textNepali: 'एक व्यवस्थापकले प्रत्यक्ष रूपमा प्रभावकारी सुपरिवेक्षण गर्न सक्ने मातहत कर्मचारीको संख्या' },
      { key: 'C', textNepali: 'कम्पनीको शेयरधनीहरूको संख्या' },
      { key: 'D', textNepali: 'बजेट नियन्त्रण गर्ने समय' }
    ],
    correctAnswer: 'B',
    explanationNepali: 'Span of Control भन्नाले एकजना अधिकृत/सुपरिवेक्षकले दक्षतापूर्वक निर्देशन तथा नियन्त्रण गर्न सक्ने प्रत्यक्ष मातहतका कर्मचारीको संख्यालाई जनाउँछ।',
    examTag: 'Organizing',
    topic: 'Span of Control'
  },

  // --- CURRENT AFFAIRS QUESTIONS (10+) ---
  {
    id: 'ca-01',
    category: 'Current Affairs',
    difficulty: 'Medium',
    questionNepali: 'नेपाल सरकारले आर्थिक वर्ष २०८१/८२ को बजेट कहिले प्रस्तुत गरेको थियो?',
    options: [
      { key: 'A', textNepali: 'वि.सं. २०८१ जेठ १५' },
      { key: 'B', textNepali: 'वि.सं. २०८१ असार १' },
      { key: 'C', textNepali: 'वि.सं. २०८१ वैशाख ३०' },
      { key: 'D', textNepali: 'वि.सं. २०८० जेठ १५' }
    ],
    correctAnswer: 'A',
    explanationNepali: 'नेपालको संविधानको धारा ११९ बमोजिम अर्थमन्त्रीले प्रत्येक वर्ष जेठ १५ गते संघीय संसदको संयुक्त बैठकमा आगामी आर्थिक वर्षको बजेट पेश गर्नुपर्दछ।',
    examTag: 'Budget 2081/82',
    topic: 'National Budget'
  },
  {
    id: 'ca-02',
    category: 'Current Affairs',
    difficulty: 'Easy',
    questionNepali: 'नेपाल राष्ट्र बैंकको पछिल्लो मौद्रिक नीति तथा एकीकृत निर्देशन अनुसार नीतिगत दर (Policy Rate) कति प्रतिशत कायम गरिएको छ?',
    options: [
      { key: 'A', textNepali: '५.५%' },
      { key: 'B', textNepali: '६.५%' },
      { key: 'C', textNepali: '४.०%' },
      { key: 'D', textNepali: '१२.०%' }
    ],
    correctAnswer: 'A',
    explanationNepali: 'नेपाल राष्ट्र बैंकको मौद्रिक नीति अनुसार नीतिगत दर (Policy Rate) ५.५%, बैंक दर (Bank Rate) ६.५%, अनिवार्य नगद मौज्दात (CRR) ४.०% र वैधानिक तरलता अनुपात (SLR - Class A) १२.०% कायम गरिएको छ।',
    examTag: 'NRB Monetary Policy & Rates',
    topic: 'Interest Rates & Ratios'
  },
  {
    id: 'ca-03',
    category: 'Current Affairs',
    difficulty: 'Medium',
    questionNepali: 'नेपाल र भारतबीच भएको क्रसबोर्डर क्युआर भुक्तानी (Cross-Border QR Payment) मा नेपालतर्फबाट समन्वय गर्ने मुख्य प्रणाली कुन हो?',
    options: [
      { key: 'A', textNepali: 'नेपाल क्लियरिङ हाउस (NCHL / NepalPay)' },
      { key: 'B', textNepali: 'नेपाल टेलिकम' },
      { key: 'C', textNepali: 'धितोपत्र बोर्ड' },
      { key: 'D', textNepali: 'कर्मचारी संचय कोष' }
    ],
    correctAnswer: 'A',
    explanationNepali: 'नेपाल क्लियरिङ हाउस लिमिटेड (NCHL) र भारतको NPCI International Payments Ltd (NIPL) बीच अन्तरदेशीय क्युआर भुक्तानी सम्झौता भई कार्यान्वयनमा आएको छ।',
    examTag: 'Fintech Nepal',
    topic: 'Digital Payments'
  },
  {
    id: 'ca-04',
    category: 'Current Affairs',
    difficulty: 'Hard',
    questionNepali: 'नेपाल अल्पविकसित देश (LDC) बाट विकासशील देश (Developing Country) मा स्तरोन्नति हुने प्रस्तावित मिति कहिले तोकिएको छ?',
    options: [
      { key: 'A', textNepali: 'सन् २०२४ डिसेम्बर' },
      { key: 'B', textNepali: 'सन् २०२६ नोभेम्बर' },
      { key: 'C', textNepali: 'सन् २०३० जनवरी' },
      { key: 'D', textNepali: 'सन् २०२५ अक्टोबर' }
    ],
    correctAnswer: 'B',
    explanationNepali: 'संयुक्त राष्ट्रसंघीय महासभाको निर्णय अनुसार नेपाललाई सन् २०२६ को नोभेम्बर महिनामा LDC समूहबाट विकासशील राष्ट्रमा स्तरोन्नति गर्ने तयारी छ।',
    examTag: 'UN & Nepal Development',
    topic: 'Graduation from LDC'
  },
  {
    id: 'ca-05',
    category: 'Current Affairs',
    difficulty: 'Easy',
    questionNepali: 'हाल नेपाल राष्ट्र बैंकका गभर्नर को हुनुहुन्छ?',
    options: [
      { key: 'A', textNepali: 'महाप्रसाद अधिकारी' },
      { key: 'B', textNepali: 'डा. चिरञ्जीवी नेपाल' },
      { key: 'C', textNepali: 'युवराज खतिवडा' },
      { key: 'D', textNepali: 'दिपेन्द्र बहादुर क्षेत्री' }
    ],
    correctAnswer: 'A',
    explanationNepali: 'नेपाल राष्ट्र बैंकको १७ औं गभर्नरका रूपमा महाप्रसाद अधिकारी वि.सं. २०७६ चैत २४ गते नियुक्त हुनुभएको थियो।',
    examTag: 'Banking Personality',
    topic: 'NRB Leadership'
  },
  {
    id: 'ca-06',
    category: 'Current Affairs',
    difficulty: 'Medium',
    questionNepali: 'विश्व बैंकको प्रतिवेदन अनुसार विश्वव्यापी अर्थतन्त्रमा "रेमिट्यान्स आप्रवाह" (Remittance Inflow) का आधारमा नेपाल कुन शीर्ष सूचीमा पर्दछ?',
    options: [
      { key: 'A', textNepali: 'जीडीपीको अनुपातमा शीर्ष १० भित्र' },
      { key: 'B', textNepali: 'शीर्ष ५० भन्दा बाहिर' },
      { key: 'C', textNepali: 'विश्वमै प्रथम' },
      { key: 'D', textNepali: 'एसियाको अन्तिम' }
    ],
    correctAnswer: 'A',
    explanationNepali: 'विश्व बैंकको माइग्रेसन एण्ड डेभलपमेन्ट ब्रिफ अनुसार जीडीपीको आकारसँगको अनुपातमा नेपाल विश्वका शीर्ष १० विप्रेषण प्राप्त गर्ने मुलुकमा पर्दछ।',
    examTag: 'World Bank Nepal',
    topic: 'External Inflow'
  },
  {
    id: 'ca-07',
    category: 'Current Affairs',
    difficulty: 'Medium',
    questionNepali: 'हाल नेपालमा कतिवटा वाणिज्य बैंकहरू सञ्चालनमा रहेका छन्?',
    options: [
      { key: 'A', textNepali: '२० वटा' },
      { key: 'B', textNepali: '२७ वटा' },
      { key: 'C', textNepali: '३२ वटा' },
      { key: 'D', textNepali: '१५ वटा' }
    ],
    correctAnswer: 'A',
    explanationNepali: 'बिग मर्जर (Big Merger) नीति पश्चात नेपालमा वाणिज्य बैंक (क वर्ग) को संख्या घटेर हाल २० वटामा कायम भएको छ।',
    examTag: 'Banking Structure',
    topic: 'Commercial Banks Nepal'
  },
  {
    id: 'ca-08',
    category: 'Current Affairs',
    difficulty: 'Hard',
    questionNepali: 'पेरिस ओलम्पिक २०२४ मा नेपालका तर्फबाट ऐतिहासिक कास्य पदक जित्ने पारा तेक्वान्दो खेलाडी को हुन्?',
    options: [
      { key: 'A', textNepali: 'पलेशा गोवर्धन' },
      { key: 'B', textNepali: 'गौरीका सिंह' },
      { key: 'C', textNepali: 'प्रिन्स दाहाल' },
      { key: 'D', textNepali: 'सन्तोषी श्रेष्ठ' }
    ],
    correctAnswer: 'A',
    explanationNepali: 'पेरिस पारालिम्पिक २०२४ मा पलेशा गोवर्धनले के-४४ विधाअन्तर्गत महिला ५७ केजी तौल समूहमा ऐतिहासिक कास्य पदक जितेर नेपाललाई पहिलो ओलम्पिक/पारालिम्पिक पदक दिलाइन्।',
    examTag: 'Sports 2024',
    topic: 'National Pride'
  },
  {
    id: 'ca-09',
    category: 'Current Affairs',
    difficulty: 'Medium',
    questionNepali: 'नेपालमा व्यक्तिगत आयकर (Personal Income Tax) प्रयोजनका लागि हाल पहिलो स्ल्याब (१ प्रतिशत सामाजिक सुरक्षा कर) को सीमा कति छ?',
    options: [
      { key: 'A', textNepali: 'एकललाई रु ५ लाख र दम्पतीलाई रु ६ लाख' },
      { key: 'B', textNepali: 'एकललाई रु ४ लाख र दम्पतीलाई रु ४.५ लाख' },
      { key: 'C', textNepali: 'एकललाई रु ६ लाख र दम्पतीलाई रु ७ लाख' },
      { key: 'D', textNepali: 'सबैलाई रु १० लाख' }
    ],
    correctAnswer: 'A',
    explanationNepali: 'नेपाल सरकारको आयकर नियम अनुसार रोजगारीको आयमा पहिलो रु ५ लाख (अविवाहित) र रु ६ लाख (विवाहित) सम्म १ प्रतिशत सामाजिक सुरक्षा कर लाग्दछ।',
    examTag: 'Tax Law Nepal',
    topic: 'Income Tax'
  },
  {
    id: 'ca-10',
    category: 'Current Affairs',
    difficulty: 'Easy',
    questionNepali: 'सम्पत्ति शुद्धीकरण निवारण सम्बन्धी वित्तीय कारबाही कार्यदल (FATF) को "ग्रे लिस्ट" (Grey List) बाट जोगिन नेपालले हालै कुन कार्य गरेको छ?',
    options: [
      { key: 'A', textNepali: 'सम्पत्ति शुद्धीकरण सम्बन्धी केही नेपाल ऐन संशोधन गर्ने विधेयक पारित' },
      { key: 'B', textNepali: 'सबै बैंक विदेशीलाई बेच्ने निर्णय' },
      { key: 'C', textNepali: 'कालोधनलाई बैध बनाउने योजना' },
      { key: 'D', textNepali: 'विदेशी मुद्रा प्रतिबन्ध' }
    ],
    correctAnswer: 'A',
    explanationNepali: 'FATF र APG को सिफारिस अनुसार नेपाल संसदले सम्पत्ति शुद्धीकरण (मनी लाउन्डरिङ) निवारण तथा व्यावसायिक वातावरण प्रवर्द्धनसम्बन्धी १९ वटा ऐन संशोधन गरेको छ।',
    examTag: 'AML / CFT Law',
    topic: 'FATF Compliance'
  },
  {
    id: 'b-basel-01',
    category: 'Banking',
    difficulty: 'Hard',
    questionNepali: 'नेपाल राष्ट्र बैंकको बासेल III (Basel III) क्यापिटल फ्रेमवर्क बमोजिम वाणिज्य बैंकहरूले कायम गर्नुपर्ने न्यूनतम कुल पूँजी पर्याप्तता अनुपात (Total CAR) कति हो?',
    questionEnglish: 'What is the minimum Total Capital Adequacy Ratio (CAR) mandated by NRB under Basel III for Class A Commercial Banks?',
    options: [
      { key: 'A', textNepali: '८.० प्रतिशत', textEnglish: '8.0%' },
      { key: 'B', textNepali: '१०.० प्रतिशत', textEnglish: '10.0%' },
      { key: 'C', textNepali: '११.० प्रतिशत', textEnglish: '11.0%' },
      { key: 'D', textNepali: '१३.५ प्रतिशत', textEnglish: '13.5%' }
    ],
    correctAnswer: 'C',
    explanationNepali: 'नेपाल राष्ट्र बैंकको बासेल III निर्देशन अनुसार वाणिज्य बैंकहरूले न्यूनतम ११.०% कुल पूँजी पर्याप्तता अनुपात (CAR) र २.५% पूँजी संरक्षण बफर (CCB) सहित कायम गर्नुपर्दछ।',
    examTag: 'NRB Level 5/6',
    topic: 'Basel III Framework'
  },
  {
    id: 'b-bafia-01',
    category: 'Law',
    difficulty: 'Medium',
    questionNepali: 'बैंक तथा वित्तीय संस्था सम्बन्धी ऐन, २०७३ (BAFIA) को दफा ५० बमोजिम बैंकहरूलाई पूर्ण रूपमा प्रतिबन्ध गरिएको कार्य कुन हो?',
    questionEnglish: 'Which activity is strictly prohibited for BFIs under Section 50 of BAFIA 2073?',
    options: [
      { key: 'A', textNepali: 'विदेशी मुद्रा खरिदबिक्री गर्नु', textEnglish: 'Forex Trading' },
      { key: 'B', textNepali: 'आफ्नै सेयरको धितोमा कर्जा प्रवाह गर्नु', textEnglish: 'Lending against own shares' },
      { key: 'C', textNepali: 'लकर सुविधा प्रदान गर्नु', textEnglish: 'Offering locker facility' },
      { key: 'D', textNepali: 'प्रतीतपत्र (LC) जारी गर्नु', textEnglish: 'Issuing Letters of Credit' }
    ],
    correctAnswer: 'B',
    explanationNepali: 'बाफिया २०७३ को दफा ५० बमोजिम बैंक तथा वित्तीय संस्थाहरूले आफ्नै सेयरको धितोमा कर्जा दिन, सञ्चालक तथा आधारभूत सेयरधनीलाई कर्जा दिन पूर्ण बन्देज लगाइएको छ।',
    examTag: 'BAFIA 2073',
    topic: 'Prohibited Banking Activities'
  },
  {
    id: 'b-offence-01',
    category: 'Law',
    difficulty: 'Hard',
    questionNepali: 'बैंकिङ कसूर तथा सजाय ऐन, २०६४ को दफा १५ बमोजिम रु. ५० करोडभन्दा माथिको बिगो भएमा कसूरदारलाई कति वर्षसम्म कैद सजाय हुन सक्ने व्यवस्था छ?',
    questionEnglish: 'Under Section 15 of Banking Offence & Punishment Act 2064, what is the imprisonment term for embezzlement exceeding Rs. 50 Crores?',
    options: [
      { key: 'A', textNepali: '४ देखि ६ वर्ष', textEnglish: '4 to 6 years' },
      { key: 'B', textNepali: '६ देखि ८ वर्ष', textEnglish: '6 to 8 years' },
      { key: 'C', textNepali: '८ देखि १२ वर्ष', textEnglish: '8 to 12 years' },
      { key: 'D', textNepali: '१५ वर्षसम्म', textEnglish: 'Up to 15 years' }
    ],
    correctAnswer: 'C',
    explanationNepali: 'बैंकिङ कसूर तथा सजाय ऐन २०६४ अनुसार ५० करोड रुपैयाँभन्दा माथिको बिगो भएको कसूरमा ८ वर्षदेखि १२ वर्षसम्म कैद सजाय र बिगो असुल गरी बिगो बराबर जरिवाना हुने व्यवस्था छ।',
    examTag: 'Banking Law',
    topic: 'Banking Offence Act 2064'
  },
  {
    id: 'b-capbud-01',
    category: 'Accounting',
    difficulty: 'Medium',
    questionNepali: 'पूँजीगत बजेटिङ (Capital Budgeting) को कुन विधिले मध्यवर्ती नगद प्रवाहलाई "पूँजीको लागत" (Cost of Capital) मा पुनःलगानी गरिन्छ भन्ने व्यावहारिक मान्यता राख्दछ?',
    questionEnglish: 'Which capital budgeting technique assumes that cash flows are reinvested at the Cost of Capital?',
    options: [
      { key: 'A', textNepali: 'आन्तरिक प्रतिफल दर (IRR)', textEnglish: 'Internal Rate of Return (IRR)' },
      { key: 'B', textNepali: 'खुद वर्तमान मूल्य (NPV)', textEnglish: 'Net Present Value (NPV)' },
      { key: 'C', textNepali: 'भुक्तानी अवधि (Payback Period)', textEnglish: 'Payback Period' },
      { key: 'D', textNepali: 'लेखा प्रतिफल दर (ARR)', textEnglish: 'Accounting Rate of Return (ARR)' }
    ],
    correctAnswer: 'B',
    explanationNepali: 'NPV विधिले परियोजनाबाट प्राप्त नगद प्रवाहलाई पूँजीको लागत (Cost of Capital - k) मा पुनः लगानी गर्न सकिने यथार्थपरक मान्यता राख्छ, जबकि IRR ले अस्वाभाविक रूपमा उच्च IRR दरमै पुनः लगानी हुने मान्यता राख्छ।',
    examTag: 'Financial Management',
    topic: 'Capital Budgeting Techniques'
  },
  {
    id: 'b-dupont-01',
    category: 'Accounting',
    difficulty: 'Medium',
    questionNepali: 'डुपोन्ट विश्लेषण (Du-Pont Analysis) अनुसार स्वपूँजीमा प्रतिफल (ROE) कुन तीन तत्वहरूको गुणनफल हो?',
    questionEnglish: 'According to DuPont analysis, ROE is decomposed into which three components?',
    options: [
      { key: 'A', textNepali: 'Net Profit Margin × Asset Turnover × Equity Multiplier' },
      { key: 'B', textNepali: 'Gross Margin × Debt Ratio × Current Ratio' },
      { key: 'C', textNepali: 'EBITDA × Working Capital × Fixed Assets' },
      { key: 'D', textNepali: 'Operating Margin × Cash Flow × Book Value' }
    ],
    correctAnswer: 'A',
    explanationNepali: 'Du-Pont Analysis अनुसार: ROE = Net Profit Margin (नाफा क्षमता) × Total Asset Turnover (सम्पत्ति उपयोग) × Equity Multiplier (वित्तीय उत्तोलन) हुन्छ।',
    examTag: 'Accounting Analysis',
    topic: 'Ratio Analysis'
  },
  ...ALL_QUIZ_QUESTIONS.map(convertQuizQuestionToQuestion)
];

// --- MASTER STUDY NOTES & COMPREHENSIVE EXAM CHAPTERS ---
export { 
  BANKING_HISTORY_MASTER_CHAPTER, 
  BANKING_FUNCTIONS_MASTER_CHAPTER, 
  DEPOSIT_CREDIT_MASTER_CHAPTER, 
  TRADE_FINANCE_LC_BG_MASTER_CHAPTER, 
  AML_KYC_MASTER_CHAPTER,
  ACCOUNTING_BASICS_MASTER_CHAPTER,
  NRB_MATH_MASTER_CHAPTER,
  NRB_IT_MASTER_CHAPTER,
  NRB_CONSTITUTION_GOVERNANCE_CHAPTER
};

export const MOCK_STUDY_NOTES: StudyNote[] = [
  ...ACCOUNTING_SYLLABUS_CARDS,
  ACCOUNTING_BASICS_MASTER_CHAPTER,
  BANKING_HISTORY_MASTER_CHAPTER,
  BANKING_FUNCTIONS_MASTER_CHAPTER,
  DEPOSIT_CREDIT_MASTER_CHAPTER,
  TRADE_FINANCE_LC_BG_MASTER_CHAPTER,
  AML_KYC_MASTER_CHAPTER,
  NRB_MATH_MASTER_CHAPTER,
  NRB_IT_MASTER_CHAPTER,
  NRB_CONSTITUTION_GOVERNANCE_CHAPTER,
  ...ALL_BANKING_LAWS_NOTES,
  ...BANKING_ACTS_MANUAL,
  ...BANKING_BYLAWS_MANUAL,
  ...NRB_UNIFIED_DIRECTIVES_MANUAL,
  ...MASTER_STUDY_CHAPTERS,
  ...COMPREHENSIVE_EXAM_NOTES,
  ...BILINGUAL_STUDY_NOTES,
];

// --- PREMIUM NOTES / STUDY MATERIALS ---
export const MOCK_PREMIUM_NOTES: PremiumNote[] = [
  {
    id: 'prem-01',
    title: 'Banking Complete Revision Notes (Special Edition)',
    subject: 'Banking',
    category: 'Banking',
    shortDescription: 'नेपाल बैंक, राष्ट्रिय वाणिज्य बैंक र कृषि विकास बैंकको तह ४ र ५ का लागि सम्पूर्ण पाठ्यक्रम समेटिएको पूर्ण रिभिजन गाइड।',
    fullDescription: 'यो प्रिमियम गाइड बैंकिङ परीक्षा तयारी गर्ने सम्पूर्ण विद्यार्थीहरूका लागि विशेष रूपमा तयार पारिएको हो। यसमा बैंकिङ कानुनहरू (BAFIA, NRB Act, AML/CFT, Banking Offences), वित्तीय विवरण विश्लेषण, ग्राहक सेवा, कर्जा व्यवस्थापन तथा गत १० वर्षका सम्भावित प्रश्नोत्तरहरू सरल नेपाली भाषामा समावेश छन्।',
    coverImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80',
    pageCount: 148,
    rating: 4.9,
    reviewCount: 236,
    buyersCount: 1420,
    originalPrice: 299,
    discountPrice: 149,
    isPremium: true,
    author: {
      name: 'सुभाष शर्मा (उप-निर्देशक, वाणिज्य बैंक)',
      qualification: 'MBA Finance, Loksewa/Banking Topper 2076'
    },
    lastUpdated: '२०८१ भाद्र',
    whatYouWillGet: [
      '✓ सम्पूर्ण पाठ्यक्रम अनुसार तयार पारिएका Exam-oriented Notes',
      '✓ महत्वपूर्ण परिभाषाहरू र बुँदागत चार्टहरू',
      '✓ गत ५ वर्षका परीक्षामा सोधिएका प्रश्नोत्तरहरूको संग्रह',
      '✓ BAFIA २०७३ र NRB ऐन २०५८ को तुलनात्मक विश्लेषणात्मक सारांश',
      '✓ अभ्यासका लागि ५००+ MCQs र समाधान',
      '✓ परीक्षा हलमा समय व्यवस्थापन गर्ने टिक्स र ट्रिक्स'
    ],
    previewPages: [
      {
        pageNumber: 1,
        title: 'अध्याय १: बैंकिङ विकासक्रम र वर्तमान संरचना',
        content: 'नेपालमा आधुनिक बैंकिङको विकास वि.सं. १९९४ कार्तिक ३० मा नेपाल बैंक लिमिटेडको स्थापनासँगै भएको हो। यस अध्यायमा कौसी तोषखाना, तेजारथ अड्डादेखि हालको डिजिटल बैंकिङ युगसम्मका सम्पूर्ण कोसेढुङ्गाहरू कालक्रम अनुसार प्रस्तुत गरिएको छ।',
        notes: ['सम्झनु पर्ने मिति: तेजारथ अड्डा (वि.सं. १९३३), नेपाल बैंक (१९९४), राष्ट्र बैंक (२०१३)।']
      },
      {
        pageNumber: 2,
        title: 'अध्याय २: बैंक तथा वित्तीय संस्थाको वर्गीकरण मापदण्ड',
        content: 'BAFIA २०७३ अनुसार न्यूनतम चुक्ता पूँजी, कार्यक्षेत्र र व्यवसायिक प्रकृतिका आधारमा वित्तीय संस्थालाई क, ख, ग, घ वर्गमा विभाजन गरिएको छ। वाणिज्य बैंकहरूको न्यूनतम चुक्ता पूँजी रु. ८ अर्ब तोकिएको छ।',
        notes: ['पूँजीगत मापदण्ड र कर्जा निक्षेप अनुपात (CD Ratio ९०%) को सीमा।']
      },
      {
        pageNumber: 3,
        title: 'अध्याय ३: सम्पत्ति शुद्धीकरण (AML) तथा ग्राहक पहिचान (KYC)',
        content: 'वित्तीय संस्थाहरूले सम्पत्ति शुद्धीकरण निवारण ऐन, २०६४ अनुसार शंकास्पद कारोबार प्रतिवेदन (STR) र सीमा कारोबार प्रतिवेदन (TTR) वित्तीय जानकारी इकाइ (FIU) मा पठाउनु पर्ने कानुनी कर्तव्य रहन्छ।',
        notes: ['TTR को सीमा रु. १० लाख वा सोभन्दा बढीको नगद कारोबार।']
      }
    ],
    fullDocumentPages: [
      {
        pageNumber: 1,
        title: 'अध्याय १: बैंकिङ विकासक्रम र वर्तमान संरचना',
        content: 'नेपालमा आधुनिक बैंकिङको विकास वि.सं. १९९४ कार्तिक ३० मा नेपाल बैंक लिमिटेडको स्थापनासँगै भएको हो। यस अध्यायमा कौसी तोषखाना, तेजारथ अड्डादेखि हालको डिजिटल बैंकिङ युगसम्मका सम्पूर्ण कोसेढुङ्गाहरू कालक्रम अनुसार प्रस्तुत गरिएको छ।'
      },
      {
        pageNumber: 2,
        title: 'अध्याय २: बैंक तथा वित्तीय संस्थाको वर्गीकरण मापदण्ड',
        content: 'BAFIA २०७३ अनुसार न्यूनतम चुक्ता पूँजी, कार्यक्षेत्र र व्यवसायिक प्रकृतिका आधारमा वित्तीय संस्थालाई क, ख, ग, घ वर्गमा विभाजन गरिएको छ।'
      },
      {
        pageNumber: 3,
        title: 'अध्याय ३: सम्पत्ति शुद्धीकरण (AML) तथा ग्राहक पहिचान (KYC)',
        content: 'वित्तीय संस्थाहरूले सम्पत्ति शुद्धीकरण निवारण ऐन, २०६४ अनुसार शंकास्पद कारोबार प्रतिवेदन (STR) र सीमा कारोबार प्रतिवेदन (TTR) वित्तीय जानकारी इकाइ (FIU) मा पठाउनु पर्दछ।'
      },
      {
        pageNumber: 4,
        title: 'अध्याय ४: नेपाल राष्ट्र बैंकको सुपरिवेक्षकीय भूमिका (Supervisory Framework)',
        content: 'केन्द्रीय बैंकले वाणिज्य बैंकहरूको जोखिम मूल्याङ्कन गर्न CAMELS फ्रेमवर्क (Capital, Assets, Management, Earnings, Liquidity, Sensitivity) प्रयोग गर्दछ। स्थलगत र गैरस्थलगत निरीक्षणको कानुनी अधिकार ऐनले दिएको छ।'
      },
      {
        pageNumber: 5,
        title: 'अध्याय ५: कर्जा वर्गीकरण र नोक्सानी व्यवस्था (Loan Loss Provisioning)',
        content: 'सक्रिय कर्जा (असल र सूक्ष्म निगरानी) तथा निष्कृय कर्जा (कमसल, शंकास्पद र खराब) का आधारमा १.२५% देखि १००% सम्म प्रोभिजनिङ गर्नुपर्ने व्यवस्था छ।'
      }
    ],
    tags: ['Banking', 'Revision', 'RBB', 'NBL', 'ADBL'],
    isPublished: true
  },
  {
    id: 'prem-02',
    title: 'NRB Assistant Director & Officer Special Master Pack',
    subject: 'NRB',
    category: 'NRB',
    shortDescription: 'नेपाल राष्ट्र बैंक सहायक निर्देशक (अधिकृत तृतीय) पदको प्रथम र द्वितीय पत्रका लागि उच्चस्तरीय विश्लेषणात्मक सामग्री।',
    fullDescription: 'नेपाल राष्ट्र बैंकको अधिकृत तहको तयारी गर्ने उम्मेदवारहरूका लागि अर्थशास्त्र, मौद्रिक अर्थशास्त्र, वित्तीय बजार, अनुसन्धान विधि र समष्टिगत आर्थिक सूचकहरूको गहिरो विश्लेषणसहितको विशेष हस्तलिखित तथा कम्प्युटर कम्पोज गरिएको विस्तृत अध्ययन सामग्री।',
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
    pageCount: 195,
    rating: 4.95,
    reviewCount: 184,
    buyersCount: 890,
    originalPrice: 399,
    discountPrice: 199,
    isPremium: true,
    author: {
      name: 'प्रा. डा. रमेश ढकाल',
      qualification: 'पूर्व सल्लाहकार, नेपाल राष्ट्र बैंक'
    },
    lastUpdated: '२०८१ श्रावण',
    whatYouWillGet: [
      '✓ समष्टिगत अर्थशास्त्र र मौद्रिक अर्थशास्त्रका सैद्धान्तिक मोडेलहरू',
      '✓ खुला बजार सञ्चालन (OMO) र ब्याजदर करिडोरको व्यावहारिक व्याख्या',
      '✓ बाह्य क्षेत्र स्थायित्व र विदेशी मुद्रा व्यवस्थापन रणनीति',
      '✓ विषयगत उत्तर लेखन ढाँचा र नमुना उत्तरहरू',
      '✓ ३००+ कठिन स्तरका वस्तुगत प्रश्नहरू'
    ],
    previewPages: [
      {
        pageNumber: 1,
        title: 'भाग १: मौद्रिक नीति र यसको प्रसारण संयन्त्र',
        content: 'मौद्रिक नीतिका निर्णयहरूले ब्याजदर, कर्जा उपलब्धता, सम्पत्ति मूल्य र विनिमय दर च्यानलमार्फत वास्तविक अर्थतन्त्र (रोजगारी, उत्पादन र मूल्यस्तर) लाई कसरी प्रभावित गर्छन् भन्ने विस्तृत विश्लेषण।',
        notes: ['Interest Rate Channel vs Credit Channel.']
      },
      {
        pageNumber: 2,
        title: 'भाग २: ब्याजदर करिडोर (Interest Rate Corridor)',
        content: 'ब्याजदरमा आउने अस्वाभाविक उतारचढाव रोक्न राष्ट्र बैंकले बैंक दर (माथिल्लो सीमा), नीतिगत दर (मध्यम दर) र निक्षेप संकलन दर (तल्लो सीमा) तोकी करिडोर सञ्चालन गर्दछ।',
        notes: ['करिडोरको चौडाइ र तरलता व्यवस्थापन।']
      }
    ],
    fullDocumentPages: [
      {
        pageNumber: 1,
        title: 'भाग १: मौद्रिक नीति र यसको प्रसारण संयन्त्र',
        content: 'मौद्रिक नीतिका निर्णयहरूले ब्याजदर, कर्जा उपलब्धता, सम्पत्ति मूल्य र विनिमय दर च्यानलमार्फत वास्तविक अर्थतन्त्रलाई प्रभावित गर्छन्।'
      },
      {
        pageNumber: 2,
        title: 'भाग २: ब्याजदर करिडोर (Interest Rate Corridor)',
        content: 'ब्याजदरमा आउने अस्वाभाविक उतारचढाव रोक्न राष्ट्र बैंकले बैंक दर, नीतिगत दर र निक्षेप संकलन दर तोकी करिडोर सञ्चालन गर्दछ।'
      }
    ],
    tags: ['NRB', 'Officer', 'Economics', 'Monetary Policy'],
    isPublished: true
  },
  {
    id: 'prem-03',
    title: 'Loksewa GK & Constitution Ultimate Booster 2081',
    subject: 'GK',
    category: 'Loksewa',
    shortDescription: 'नेपालको भूगोल, इतिहास, संविधान, अन्तर्राष्ट्रिय सम्बन्ध र समसामयिक घटनाक्रमको १००% अद्यावधिक संग्रह।',
    fullDescription: 'नायब सुब्बा, खरिदार, शाखा अधिकृत तथा संस्थान सेवाका सम्पूर्ण प्रथम पत्रका लागि तयार पारिएको सर्वाधिक लोकप्रिय सामान्य ज्ञान ह्यान्डबुक। यसमा नेपालको नयाँ राजनीतिक नक्सा, १६ औं योजना, पछिल्ला राष्ट्रिय जनगणना २०७८ का अन्तिम आँकडाहरू समावेश छन्।',
    coverImage: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=80',
    pageCount: 160,
    rating: 4.85,
    reviewCount: 310,
    buyersCount: 2150,
    originalPrice: 249,
    discountPrice: 129,
    isPremium: true,
    author: {
      name: 'कमल दाहाल (शाखा अधिकृत)',
      qualification: 'Loksewa Multiple Exams Rank Holder'
    },
    lastUpdated: '२०८१ भाद्र',
    whatYouWillGet: [
      '✓ नेपालको संविधान २०७२ का महत्वपूर्ण धाराहरूको सरल व्याख्या',
      '✓ नेपालको भूगोल र नदी प्रणालीका स्मरण सूत्रहरू (Short Tricks)',
      '✓ राष्ट्रिय जनगणना २०७८ को आधिकारिक तथ्य र तथ्याङ्क',
      '✓ १५ औं र १६ औं आवधिक योजनाको तुलनात्मक विश्लेषण',
      '✓ १०००+ विषयगत सामान्य ज्ञान अभ्यास प्रश्नहरू'
    ],
    previewPages: [
      {
        pageNumber: 1,
        title: 'अध्याय १: नेपालको संविधान र मौलिक हक',
        content: 'भाग ३ धारा १६ देखि ४६ सम्म व्यवस्था गरिएका ३१ वटा मौलिक हकहरूलाई सजिलै याद गर्ने सूत्र र विगतका परीक्षाहरूमा सोधिएका महत्वपूर्ण संवैधानिक प्रश्नहरू।',
        notes: ['धारा ४६: संवैधानिक उपचारको हक (धारा १३३ र १४४)।']
      },
      {
        pageNumber: 2,
        title: 'अध्याय २: नेपालको धरातलीय स्वरूप र सीमाना',
        content: 'नेपालको पूर्व-पश्चिम लम्बाइ ८८५ किमी, औसत चौडाइ १९३ किमी र कुल क्षेत्रफल १,४७,१८१ वर्ग किमी (नयाँ नक्सा अनुसार १,४७,५१६ वर्ग किमी) को विस्तृत विवरण।',
        notes: ['चीन र भारतसँग सिमाना जोडिएका जिल्लाहरूको सुत्र।']
      }
    ],
    tags: ['Loksewa', 'GK', 'Constitution', 'Nasuba', 'Kharidar'],
    isPublished: true
  },
  {
    id: 'prem-04',
    title: 'Banking Accounting & Financial Math Masterclass',
    subject: 'Accounting',
    category: 'Banking',
    shortDescription: 'लेखा परीक्षण, वित्तीय अनुपात, नाफा-नोक्सान हिसाब र बैंकिङ गणितका सूत्र तथा व्यवहारिक हिसाबहरू।',
    fullDescription: 'धेरैजसो विद्यार्थीलाई अप्ठ्यारो लाग्ने वित्तीय अनुपात विश्लेषण (Ratio Analysis), बैंक हिसाब मिलान विवरण (BRS), ह्रासकट्टी (Depreciation), साझेदारी खाता र बैंकिङ गणित (साधारण ब्याज, चक्रवर्ती ब्याज, अनुपात र प्रतिशत) लाई चरणबद्ध रूपमा सिकाइएको छ।',
    coverImage: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=600&q=80',
    pageCount: 110,
    rating: 4.8,
    reviewCount: 95,
    buyersCount: 620,
    originalPrice: 249,
    discountPrice: 119,
    isPremium: true,
    author: {
      name: 'सीए. मनिष पौडेल',
      qualification: 'Chartered Accountant & Banking Trainer'
    },
    lastUpdated: '२०८१ असार',
    whatYouWillGet: [
      '✓ बैंक हिसाब मिलान विवरण (BRS) बनाउने सरल विधि',
      '✓ अनुपात विश्लेषण (Current Ratio, ROA, ROE, NPL Ratio)',
      '✓ दोहोरो लेखा प्रणालीका सैद्धान्तिक तथा व्यावहारिक प्रश्नहरू',
      '✓ बैंकिङ गणितका १००+ हल गरिएका नमुना प्रश्नहरू'
    ],
    previewPages: [
      {
        pageNumber: 1,
        title: 'अध्याय १: बैंक हिसाब मिलान विवरण (BRS)',
        content: 'पासबुक र क्यासबुक बीच मौज्दात फरक पर्नुका कारणहरू (चेक जारी तर भुक्तानी नभएको, बैंकले ब्याज जम्मा गरेको, बैंक शुल्क कट्टी आदि) र मिलान तालिका।',
        notes: ['Golden Formula: Start with Cash Book or Pass Book balance.']
      }
    ],
    tags: ['Accounting', 'BRS', 'Finance', 'Ratio Analysis'],
    isPublished: true
  },
  {
    id: 'prem-05',
    title: 'Public Management & Governance Comprehensive Guide',
    subject: 'Management',
    category: 'Loksewa',
    shortDescription: 'सार्वजनिक व्यवस्थापन, निर्णय प्रक्रिया, नागरिक बडापत्र, उत्प्रेरणा र नेतृत्वको उच्चस्तरीय टिपोट।',
    fullDescription: 'सार्वजनिक प्रशासन, नयाँ सार्वजनिक व्यवस्थापन (NPM), सुशासन, अख्तियार दुरुपयोग अनुसन्धान, पारदर्शिता र सार्वजनिक खरिद व्यवस्थापन सम्बन्धी सम्पूर्ण परीक्षा-उपयोगी सामग्री।',
    coverImage: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80',
    pageCount: 125,
    rating: 4.75,
    reviewCount: 110,
    buyersCount: 780,
    originalPrice: 219,
    discountPrice: 99,
    isPremium: true,
    author: {
      name: 'ईश्वर घिमिरे (सह-सचिव, नेपाल सरकार)',
      qualification: 'M.Phil Public Administration'
    },
    lastUpdated: '२०८१ जेठ',
    whatYouWillGet: [
      '✓ नयाँ सार्वजनिक व्यवस्थापन (New Public Management) को अवधारणा',
      '✓ निजामती सेवा ऐन र नियमावलीका मुख्य प्रावधानहरू',
      '✓ नागरिक बडापत्र र क्षतिपूर्तिसहितको नागरिक बडापत्र',
      '✓ सूचनाको हक (RTI) ऐन २०६४ का महत्वपूर्ण दफाहरू'
    ],
    previewPages: [
      {
        pageNumber: 1,
        title: 'अध्याय १: नयाँ सार्वजनिक व्यवस्थापन (NPM)',
        content: 'परम्परागत नोकरशाही (Bureaucracy) को विकल्पको रूपमा सन् १९८० को दशकमा विकसित भएको NPM ले सार्वजनिक क्षेत्रमा बजारमुखी, नतिजामूलक र ग्राहकमुखी दृष्टिकोण अपनाउन जोड दिन्छ।',
        notes: ['Reinventing Government (Osborne & Gaebler).']
      }
    ],
    tags: ['Public Admin', 'Loksewa', 'NPM', 'Governance'],
    isPublished: true
  },
  {
    id: 'prem-06',
    title: 'Macroeconomics & Fiscal Policy Deep Dive',
    subject: 'Economics',
    category: 'NRB',
    shortDescription: 'नेपालको समष्टिगत अर्थतन्त्र, बजेट निर्माण प्रक्रिया, भुक्तानी सन्तुलन र अन्तर्राष्ट्रिय व्यापार।',
    fullDescription: 'नेपालको अर्थतन्त्रका आधारभूत चुनौतीहरू (व्यापार घाटा, विप्रेषण निर्भरता, राजस्व परिचालन, पुँजीगत खर्चको समस्या) लाई तथ्य र तथ्याङ्कसहित विश्लेषण गरिएको विशेष संस्करण।',
    coverImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80',
    pageCount: 135,
    rating: 4.9,
    reviewCount: 140,
    buyersCount: 940,
    originalPrice: 280,
    discountPrice: 139,
    isPremium: true,
    author: {
      name: 'डा. सञ्जय पन्त',
      qualification: 'अर्थशास्त्री तथा अनुसन्धानकर्ता'
    },
    lastUpdated: '२०८१ भाद्र',
    whatYouWillGet: [
      '✓ बजेट चक्र र मध्यकालीन खर्च संरचना (MTEF)',
      '✓ वैदेशिक ऋण र अनुदानको प्रवृत्ति',
      '✓ प्रत्यक्ष वैदेशिक लगानी (FDI) का अवसर तथा चुनौती',
      '✓ पछिल्ला आर्थिक सर्वेक्षणका महत्वपूर्ण तथ्याङ्कहरू'
    ],
    previewPages: [
      {
        pageNumber: 1,
        title: 'अध्याय १: समष्टिगत आर्थिक सन्तुलन',
        content: 'आन्तरिक सन्तुलन (पूर्ण रोजगारी र मूल्य स्थिरता) र बाह्य सन्तुलन (दिगो भुक्तानी सन्तुलन) बीचको अन्तरसम्बन्ध।',
        notes: ['IS-LM Model र Mundell-Fleming Framework.']
      }
    ],
    tags: ['Economics', 'Budget', 'Fiscal Policy', 'NRB'],
    isPublished: true
  }
];

// --- CURRENT AFFAIRS ITEMS & ARTICLES ---
export const mockCurrentAffairs: CurrentAffairItem[] = [
  {
    id: "ca-001",
    category: "Sports & International",
    title: "[खेलकुद/FIFA] FIFA विश्वकप, दक्षिण एसियाली फुटबल र नेपाली फुटबलका अद्यावधिक तथ्याङ्क",
    date: "२०८२ - २०८३ भदौ",
    quickExamFact: "FIFA World Cup २०२६ को आयोजक राष्ट्रहरू (USA, Canada, Mexico) र AFC Qualification मा नेपालको प्रदर्शन।",
    points: [
      "**FIFA World Cup 2026:** इतिहासमै पहिलोपटक **४८ टोली** सहभागी हुने, संयुक्त आयोजक राष्ट्रहरू **अमेरिका, क्यानडा र मेक्सिको**।",
      "**FIFA World Cup 2022 विजेता:** **अर्जेन्टिना** (उपविजेता: फ्रान्स, Golden Ball: लियोनेल मेस्सी, Golden Boot: किलियान एमबाप्पे)।",
      "**नेपालको FIFA Ranking (२०८३ भदौ):** **१७५औँ स्थान** वरिपरि (दक्षिण एसियामा शीर्ष स्थान भारतको)।",
      "**FIFA/AFC क्वालिफायर:** नेपालले FIFA World Cup 2026 / AFC Asian Cup 2027 क्वालिफायरको दोस्रो चरणसम्म प्रतिस्पर्धा गरेको।",
      "**SAFF Women's Championship:** नेपालमा आयोजना भएको पछिल्लो महिला साफ च्याम्पियनसिप र नेपाली राष्ट्रिय महिला टोलीको प्रदर्शन।",
      "**ANFA र घरेलु फुटबल:** नेपाल सुपर लिग (NSL) र सहिद स्मारक 'ए' डिभिजन लिगका अद्यावधिक विजेता टोलीहरू।"
    ],
    tags: ["FIFA", "Football", "Sports", "Exam-High-Yield"]
  },
  {
    id: "ca-002",
    category: "National & Disaster",
    title: "[विपद्/बैंकिङ] रसुवा (त्रिशूली) र सिन्धुपाल्चोक (भोटेकोशी) बाढी: भौगोलिक र आर्थिक प्रभाव",
    date: "२०८३ भदौ १०",
    quickExamFact: "रसुवामा त्रिशूली र सिन्धुपाल्चोकमा भोटेकोशी नदीको बाढीले उत्तर-दक्षिण नाका, भन्सार राजस्व र LC भुक्तानी चक्र प्रभावित।",
    points: [
      "**रसुवा खण्ड (त्रिशूली नदी):** **त्रिशूली नदी** र चिलिमे खोलामा आएको बाढीले पासाङ ल्हामु राजमार्ग (राम्चे, स्याफ्रुबेँसी) कटान गर्दा **रसुवागढी भन्सार नाका** र **माथिल्लो त्रिशूली-३ ए (६० MW)**/चिलिमे आयोजना प्रभावित।",
      "**सिन्धुपाल्चोक खण्ड (भोटेकोशी नदी):** **भोटेकोशी नदी**को लेदो बाढीले अरनिको राजमार्ग (कोदारी, मितेरी पुल) कटान गरी **तातोपानी भन्सार नाका** र **उपल्लो भोटेकोशी (४५ MW)** मा क्षति।",
      "**भन्सार राजस्व र LC असर:** दसैँ/तिहार लक्षित करोडौँका आयातित सामान नाकामै रोकिँदा **भन्सार राजस्व सङ्कलन घट्नुका** साथै बैंकहरूमार्फत खोलिएका **प्रतीतपत्र (Letter of Credit - LC)** को भुक्तानी चक्र लम्बेको।",
      "**BFI कर्जा जोखिम:** नाका बन्द भई आयातकर्ता र व्यवसायीको कारोबार ठप्प हुँदा सीमा क्षेत्रका बैंक तथा वित्तीय संस्थाहरूको **कर्जा सावाँ-ब्याज असुली (NPL)** मा दबाब।"
    ],
    tags: ["Rasuwa", "Sindhupalchok", "Bhotekoshi", "Trishuli", "Disaster"]
  },
  {
    id: "ca-003",
    category: "National & Disaster",
    title: "[सुशासन/युवा आन्दोलन] नेपालमा Gen Z युवाहरूको प्रदर्शन र शासकीय सुधार",
    date: "२०८२ - २०८३",
    quickExamFact: "सुशासन, सरकारी सेवामा प्रविधि, निष्पक्ष परीक्षा र भ्रष्टाचार नियन्तरणका लागि युवाहरूको शान्तिपूर्ण दबाब।",
    points: [
      "**मुख्य मागहरू:** भ्रष्टाचार नियन्त्रण, सरकारी निकायमा E-Governance को शतप्रतिशत प्रयोग, निष्पक्ष लोकसेवा/बैंकिङ परीक्षा प्रणाली, र साना उद्यमीका लागि सहुलियतपूर्ण कर्जा।",
      "**डिजिटल तथा सडक अभियान:** सोसल मिडिया, ई-पिटिसन (e-Petitions) र सडकमा स्वतःस्फूर्त प्रदर्शनमार्फत नीतिगत तहमा दबाब।",
      "**नीतिगत उपलब्धि:** बैंकिङ तथा निजामती भर्ना प्रक्रियामा पारदर्शिता, सूचनाको हक (RTI) को कडाइका साथ कार्यान्वयन, र **नागरिक एप (Nagarik App)** मा ५०+ सेवा विस्तार।"
    ],
    tags: ["GenZ", "Governance", "National"]
  },
  {
    id: "ca-004",
    category: "Banking & Monetary",
    title: "[बैंकिङ] नेपाल राष्ट्र बैंकद्वारा मौद्रिक नीति २०८३/८४ का प्रमुख सूचकहरू",
    date: "२०८३ साउन",
    quickExamFact: "नीतिगत दर ५.५%, बैंक दर ६.५%, CRR ४.०% र निजी क्षेत्र कर्जा विस्तार लक्ष्य १२.५%।",
    points: [
      "**नीतिगत दर (Policy Rate):** **५.५%** | **बैंक दर (Bank Rate):** **६.५%** | **निक्षेप सङ्कलन दर:** **३.०%**।",
      "**अनिवार्य नगद मौज्दात (CRR):** **४.०%** (क, ख र ग वर्गका BFIs का लागि)।",
      "**वैधानिक तरलता अनुपात (SLR):** 'क' वर्ग **१२.०%**, 'ख' र 'ग' वर्ग **१०.०%**।",
      "**कर्जा तथा मुद्राप्रदाय लक्ष्य:** निजी क्षेत्रतर्फ कर्जा प्रवाह **१२.५%** र विस्तृत मुद्राप्रदाय (M2) **१२.५%**।"
    ],
    tags: ["NRB", "MonetaryPolicy", "Banking"]
  },
  {
    id: "ca-005",
    category: "Economy & Budget",
    title: "[अर्थतन्त्र] आव २०८३/८४ को सङ्घीय बजेट तथा समष्टिगत आर्थिक सूचकहरू",
    date: "२०८३ जेठ / भदौ",
    quickExamFact: "कुल बजेट आकार रु. १९ खर्ब ६० अर्ब, लक्षित आर्थिक वृद्धिदर ६.०% र मुद्रास्फीति सीमा ५.५%।",
    points: [
      "**कुल बजेट विनियोजन:** **रु. १९ खरब ६० अरब** (चालू, पूँजीगत र वित्तीय व्यवस्थापन)।",
      "**आर्थिक वृद्धि तथा मुद्रास्फीति लक्ष्य:** GDP वृद्धिदर **६.०%** र उपभोक्ता मुद्रास्फीति **५.५%** भित्र राख्ने लक्ष्य।",
      "**विदेशी विनिमय सञ्चिति:** **१४.५ महिनाभन्दा बढी** को वस्तु तथा सेवा आयात धान्न पर्याप्त।",
      "**रेमिट्यान्स (विप्रेषण):** वार्षिक **रु. १४ खर्ब+** भित्रिएको र शोधनान्तर स्थिति (BOP) बचतमा।"
    ],
    tags: ["Budget", "Economy", "GDP"]
  },
  {
    id: "ca-006",
    category: "Sports & International",
    title: "[पुरस्कार/अन्तर्राष्ट्रिय] पेरिस पारालम्पिक, मदन पुरस्कार र विश्वव्यापी सूचकाङ्क",
    date: "२०८२ - २०८३ भदौ",
    quickExamFact: "पलेशा गोवर्धनद्वारा पारालम्पिकमा ऐतिहासिक कांस्य पदक र HDI सूचकाङ्कमा नेपालको स्थान।",
    points: [
      "**पेरिस पारालम्पिक २०२४:** **पलेशा गोवर्धन**द्वारा महिला ५७ केजी (के-४४) तेक्वान्दोमा ऐतिहासिक **कांस्य पदक** (नेपालको पहिलो आधिकारिक पारालम्पिक पदक)।",
      "**मदन पुरस्कार (२०८२/२०८३):** साहित्य क्षेत्रको सर्वोच्च पुरस्कार प्राप्त कृति र स्रष्टा।",
      "**मानव विकास सूचकांक (HDI):** नेपालको सूचकाङ्क अंक **०.६०१** (मध्यम मानव विकास श्रेणी)।",
      "**भ्रष्टाचार अवधारणा सूचकाङ्क (CPI):** Transparency International को प्रतिवेदन अनुसार नेपालको अद्यावधिक स्थान।"
    ],
    tags: ["Palesha", "Paralympics", "MadanPuraskar", "International"]
  }
];

const formattedMockCurrentAffairs: CurrentAffairArticle[] = mockCurrentAffairs.map(item => ({
  id: item.id,
  category: item.category,
  categoryNepali: item.category === 'Banking & Monetary' ? 'बैंकिङ, मौद्रिक नीति र नियमन' :
                  item.category === 'Economy & Budget' ? 'अर्थतन्त्र, बजेट र GDP' :
                  item.category === 'National & Disaster' ? 'राष्ट्रिय, विपद् र सुशासन' : 'खेलकुद, पुरस्कार र अन्तर्राष्ट्रिय',
  title: item.title,
  date: item.date,
  summary: item.quickExamFact,
  quickExamFact: item.quickExamFact,
  points: item.points,
  importantFacts: item.points.map(p => p.replace(/\*\*/g, '')),
  examPoint: `🎯 Exam Fact: ${item.quickExamFact}`,
  examRelevance: `बैंकिङ, राष्ट्र बैंक तथा लोकसेवा परीक्षाको ${item.category} खण्डका लागि उच्च उपयोगी।`,
  tags: item.tags
}));

export const MOCK_CURRENT_AFFAIRS: CurrentAffairArticle[] = [
  ...formattedMockCurrentAffairs,
  ...CURRENT_AFFAIRS_MASTER_DATA
];

// --- COURSES DATA STRUCTURE & NRB LEVEL 4 OFFICIAL SYLLABUS ---
export const NRB_LEVEL_4_SYLLABUS_PAPERS: SyllabusPaper[] = [
  {
    id: 'paper-1',
    paperNumber: 1,
    titleNepali: 'प्रथम पत्र: बैंकिङ, लेखा, गणित तथा सूचना प्रविधि',
    titleEnglish: 'Paper I: Banking, Accounting, Mathematics & Information Technology',
    subtitle: 'पूर्णाङ्क: १०० | उत्तीर्णाङ्क: ४० | समय: २ घण्टा ३० मिनेट (वस्तुगत तथा विषयगत)',
    fullMarks: 100,
    passMarks: 40,
    timeMinutes: 150,
    sections: [
      {
        id: 'p1-sec-a',
        paperNumber: 1,
        sectionLetter: 'A',
        titleNepali: 'खण्ड (क): बैंकिङ (Banking Concepts & Operations)',
        titleEnglish: 'Section A: Banking',
        weightageMarks: 35,
        icon: 'Building2',
        totalTopics: 6,
        completedTopics: 5,
        topics: [
          { 
            id: 'top-p1-a-01', 
            name: 'बैंकिङ विकासक्रम, इतिहास र नेपालमा हालको बैंकिङ संरचना', 
            nameEnglish: 'Banking History, Evolution & Financial Structure in Nepal',
            completed: true, 
            noteId: 'note-banking-history',
            weightageMarks: 5
          },
          { 
            id: 'top-p1-a-02', 
            name: 'बैंक तथा वित्तीय संस्थाका काम, कर्तव्य, अधिकार तथा वर्गीकरण', 
            nameEnglish: 'Classification, Roles & Functions of Banks (Class A, B, C, D)',
            completed: true, 
            noteId: 'note-banking-functions',
            weightageMarks: 5
          },
          { 
            id: 'top-p1-a-03', 
            name: 'निक्षेप परिचालन, कर्जा व्यवस्थापन र लगानी नीति', 
            nameEnglish: 'Deposit Mobilization, Credit Appraisal & Investment Management',
            completed: true, 
            noteId: 'note-deposit-credit',
            weightageMarks: 10
          },
          { 
            id: 'top-p1-a-04', 
            name: 'बैंक जमानत, प्रतीतपत्र र वैदेशिक व्यापार वित्त', 
            nameEnglish: 'Bank Guarantee, Letter of Credit (LC) & Trade Finance',
            completed: true, 
            noteId: 'note-trade-finance-lc-bg',
            weightageMarks: 5
          },
          { 
            id: 'top-p1-a-05', 
            name: 'सम्पत्ति शुद्धीकरण (AML/CFT) तथा ग्राहक पहिचान (KYC) प्रणाली', 
            nameEnglish: 'Anti-Money Laundering (AML/CFT) & KYC Verification Process',
            completed: true, 
            noteId: 'note-aml-kyc',
            weightageMarks: 5
          },
          { 
            id: 'top-p1-a-06', 
            name: 'नेपाल राष्ट्र बैंक एकीकृत निर्देशनहरू (Directives 1 to 21)', 
            nameEnglish: 'NRB Unified Directives for BFIs (Prudential Regulations)',
            completed: false, 
            noteId: 'note-nrb-unified-directives-master',
            weightageMarks: 5
          }
        ]
      },
      {
        id: 'p1-sec-b',
        paperNumber: 1,
        sectionLetter: 'B',
        titleNepali: 'खण्ड (ख): लेखा प्रणाली (Accounting & Auditing)',
        titleEnglish: 'Section B: Accounting',
        weightageMarks: 30,
        icon: 'Calculator',
        totalTopics: 11,
        completedTopics: 1,
        topics: ACCOUNTING_SECTION_B_TOPICS
      },
      {
        id: 'p1-sec-c',
        paperNumber: 1,
        sectionLetter: 'C',
        titleNepali: 'खण्ड (ग): गणित (Elementary Mathematics & Formulas)',
        titleEnglish: 'Section C: Mathematics',
        weightageMarks: 20,
        icon: 'Percent',
        totalTopics: 4,
        completedTopics: 4,
        topics: [
          { 
            id: 'top-p1-c-01', 
            name: 'ऐकिक नियम (Unitary Method) तथा समय र काम (Time & Work)', 
            nameEnglish: 'Unitary Method and Time & Work Calculations',
            completed: true, 
            noteId: 'note-math-assistant-level4',
            weightageMarks: 5
          },
          { 
            id: 'top-p1-c-02', 
            name: 'साधारण तथा चक्रवर्ती ब्याज (Simple & Compound Interest Calculations)', 
            nameEnglish: 'Simple & Compound Interest (Annual & Semi-Annual compounding)',
            completed: true, 
            noteId: 'note-math-assistant-level4',
            weightageMarks: 5
          },
          { 
            id: 'top-p1-c-03', 
            name: 'प्रतिशत, नाफा र नोक्सान तथा छुट (Percentage, Profit, Loss & Discount)', 
            nameEnglish: 'Percentage, Profit & Loss, Marked Price & Discount Calculations',
            completed: true, 
            noteId: 'note-math-assistant-level4',
            weightageMarks: 5
          },
          { 
            id: 'top-p1-c-04', 
            name: 'अनुपात र समानुपात, औसत र तथ्यांक विश्लेषण (Ratio, Proportion & Average)', 
            nameEnglish: 'Ratio, Proportion, Average & Statistical Arithmetic',
            completed: true, 
            noteId: 'note-math-assistant-level4',
            weightageMarks: 5
          }
        ]
      },
      {
        id: 'p1-sec-d',
        paperNumber: 1,
        sectionLetter: 'D',
        titleNepali: 'खण्ड (घ): कम्प्युटर तथा सूचना प्रविधि (Information Technology & IT Guidelines)',
        titleEnglish: 'Section D: Information Technology',
        weightageMarks: 15,
        icon: 'Laptop',
        totalTopics: 4,
        completedTopics: 4,
        topics: [
          { 
            id: 'top-p1-d-01', 
            name: 'कम्प्युटर फन्डामेन्टल्स र अपरेटिङ सिस्टम (Computer Hardware & Operating Systems)', 
            nameEnglish: 'Computer Concepts, CPU, Memory, Operating Systems (Windows/Linux)',
            completed: true, 
            noteId: 'note-it-assistant-level4',
            weightageMarks: 3
          },
          { 
            id: 'top-p1-d-02', 
            name: 'MS Word, Excel, PowerPoint र बैंकिङ स्प्रेडसिट फर्मुला', 
            nameEnglish: 'MS Office Applications & Banking Spreadsheet Formulas',
            completed: true, 
            noteId: 'note-it-assistant-level4',
            weightageMarks: 4
          },
          { 
            id: 'top-p1-d-03', 
            name: 'इन्टरनेट, इमेल र साइबर सुरक्षा (Internet Security & Cyber Threats in Banking)', 
            nameEnglish: 'Internet, Email Protocols, Phishing, Malware & Cybersecurity',
            completed: true, 
            noteId: 'note-it-assistant-level4',
            weightageMarks: 4
          },
          { 
            id: 'top-p1-d-04', 
            name: 'नेपाल राष्ट्र बैंक IT Guidelines, Core Banking System (CBS) र डिजिटल भुक्तानी', 
            nameEnglish: 'NRB IT Guidelines, CBS (Finacle/Pumori), RTGS, NPS & FinTech',
            completed: true, 
            noteId: 'note-it-assistant-level4',
            weightageMarks: 4
          }
        ]
      }
    ]
  },
  {
    id: 'paper-2',
    paperNumber: 2,
    titleNepali: 'द्वितीय पत्र: अर्थशास्त्र, व्यवस्थापन तथा ऐन कानुन',
    titleEnglish: 'Paper II: Economics, Management & Banking Laws',
    subtitle: 'पूर्णाङ्क: १०० | उत्तीर्णाङ्क: ४० | समय: २ घण्टा ३० मिनेट (विषयगत विश्लेषणात्मक)',
    fullMarks: 100,
    passMarks: 40,
    timeMinutes: 150,
    sections: [
      {
        id: 'p2-sec-a',
        paperNumber: 2,
        sectionLetter: 'A',
        titleNepali: 'खण्ड (क): अर्थशास्त्र (Economics & Monetary Policy)',
        titleEnglish: 'Section A: Economics',
        weightageMarks: 30,
        icon: 'TrendingUp',
        totalTopics: 4,
        completedTopics: 3,
        topics: [
          { 
            id: 'top-p2-a-01', 
            name: 'चालु मौद्रिक नीति, मौद्रिक औजार र प्रसारण संयन्त्र', 
            nameEnglish: 'Current Monetary Policy, Quantitative/Qualitative Instruments & Transmission',
            completed: true, 
            noteId: 'note-monetary-policy',
            weightageMarks: 10
          },
          { 
            id: 'top-p2-a-02', 
            name: 'समष्टिगत अर्थशास्त्र, कुल गार्हस्थ्य उत्पादन (GDP) र राष्ट्रिय आय', 
            nameEnglish: 'Macroeconomic Aggregates, GDP, GNP & National Income Accounting',
            completed: true, 
            noteId: 'note-monetary-policy',
            weightageMarks: 10
          },
          { 
            id: 'top-p2-a-03', 
            name: 'मुद्रास्फीति (Inflation), मूल्य स्थायित्व र ब्याजदर निर्धारण', 
            nameEnglish: 'Inflation Dynamics, Price Stability & Interest Rate Determination',
            completed: true, 
            noteId: 'note-monetary-policy',
            weightageMarks: 5
          },
          { 
            id: 'top-p2-a-04', 
            name: 'भुक्तानी सन्तुलन (BOP), विप्रेषण र वैदेशिक मुद्रा सञ्चिति', 
            nameEnglish: 'Balance of Payments (BOP), Foreign Exchange Reserves & Remittances',
            completed: false, 
            noteId: 'note-monetary-policy',
            weightageMarks: 5
          }
        ]
      },
      {
        id: 'p2-sec-b',
        paperNumber: 2,
        sectionLetter: 'B',
        titleNepali: 'खण्ड (ख): व्यवस्थापन (Management & Office Administration)',
        titleEnglish: 'Section B: Management',
        weightageMarks: 25,
        icon: 'Users',
        totalTopics: 4,
        completedTopics: 3,
        topics: [
          { 
            id: 'top-p2-b-01', 
            name: 'व्यवस्थापनका सिद्धान्त, POSDCORB र संगठनात्मक योजना', 
            nameEnglish: 'Principles of Management, POSDCORB Functions & Organizational Planning',
            completed: true, 
            noteId: 'note-reengineering',
            weightageMarks: 10
          },
          { 
            id: 'top-p2-b-02', 
            name: 'अधिकार प्रत्यायोजन, उत्प्रेरणा, नेतृत्व र नियन्त्रण प्रणाली', 
            nameEnglish: 'Delegation of Authority, Motivation, Leadership Styles & Control',
            completed: true, 
            noteId: 'note-reengineering',
            weightageMarks: 5
          },
          { 
            id: 'top-p2-b-03', 
            name: 'व्यवसाय पुनःइन्जिनियरिङ (Business Process Re-engineering - BPR)', 
            nameEnglish: 'Business Process Re-engineering (BPR) in Banking Operations',
            completed: true, 
            noteId: 'note-reengineering',
            weightageMarks: 5
          },
          { 
            id: 'top-p2-b-04', 
            name: 'कार्यालय सञ्चालन, अभिलेख व्यवस्थापन, टिप्पणी लेखन र दर्ता-चलानी', 
            nameEnglish: 'Office Management, Record Keeping, Official Noting & Correspondence',
            completed: false, 
            noteId: 'note-public-admin',
            weightageMarks: 5
          }
        ]
      },
      {
        id: 'p2-sec-c',
        paperNumber: 2,
        sectionLetter: 'C',
        titleNepali: 'खण्ड (ग): ऐन, कानुन तथा निर्देशिकाहरू (Banking Laws & Acts)',
        titleEnglish: 'Section C: Laws & Acts',
        weightageMarks: 30,
        icon: 'Scale',
        totalTopics: 6,
        completedTopics: 5,
        topics: [
          { 
            id: 'top-p2-c-01', 
            name: 'नेपाल राष्ट्र बैंक ऐन, २०५८ (NRB Act 2058)', 
            nameEnglish: 'Nepal Rastra Bank Act 2058 (Objectives, Powers & Autonomy)',
            completed: true, 
            noteId: 'note-nrb-act-bare-act',
            weightageMarks: 8
          },
          { 
            id: 'top-p2-c-02', 
            name: 'बैंक तथा वित्तीय संस्था सम्बन्धी ऐन, २०७३ (BAFIA 2073)', 
            nameEnglish: 'Bank and Financial Institutions Act 2073 (BAFIA Directives)',
            completed: true, 
            noteId: 'note-bafia-bare-act',
            weightageMarks: 8
          },
          { 
            id: 'top-p2-c-03', 
            name: 'बैंकिङ कसूर तथा सजाय ऐन, २०६४ (Banking Offence & Punishment Act 2064)', 
            nameEnglish: 'Banking Offence and Punishment Act 2064 & Legal Procedures',
            completed: true, 
            noteId: 'note-banking-offence-act',
            weightageMarks: 5
          },
          { 
            id: 'top-p2-c-04', 
            name: 'सम्पत्ति शुद्धीकरण (निवारण) ऐन, २०६४ (Anti-Money Laundering Act 2064)', 
            nameEnglish: 'Anti-Money Laundering (Prevention) Act 2064 & FIU Guidelines',
            completed: true, 
            noteId: 'note-aml-act-bare-act',
            weightageMarks: 5
          },
          { 
            id: 'top-p2-c-05', 
            name: 'विनिमय अधिकारपत्र ऐन, २०३४ र भुक्तानी तथा फर्स्यौट ऐन, २०७५', 
            nameEnglish: 'Negotiable Instruments Act 2034 & Payment and Settlement Act 2075',
            completed: true, 
            noteId: 'note-negotiable-instruments-act',
            weightageMarks: 2
          },
          { 
            id: 'top-p2-c-06', 
            name: 'विदेशी विनिमय (नियमित गर्ने) ऐन, २०१९ र कम्पनी ऐन, २०६३', 
            nameEnglish: 'Foreign Exchange Regulation Act 2019 & Companies Act 2063',
            completed: false, 
            noteId: 'note-forex-regulation-act',
            weightageMarks: 2
          }
        ]
      },
      {
        id: 'p2-sec-d',
        paperNumber: 2,
        sectionLetter: 'D',
        titleNepali: 'खण्ड (घ): संविधान, सुशासन तथा सामान्य ज्ञान (Constitution & Governance)',
        titleEnglish: 'Section D: Constitution & Governance',
        weightageMarks: 15,
        icon: 'ShieldCheck',
        totalTopics: 4,
        completedTopics: 4,
        topics: [
          { 
            id: 'top-p2-d-01', 
            name: 'नेपालको संविधान (मौलिक हक, राज्यका निर्देशक सिद्धान्त र संघीय आर्थिक प्रणाली)', 
            nameEnglish: 'Constitution of Nepal (Fundamental Rights, Directive Principles & Financial Rules)',
            completed: true, 
            noteId: 'note-constitution-governance',
            weightageMarks: 5
          },
          { 
            id: 'top-p2-d-02', 
            name: 'सुशासन (व्यवस्थापन तथा सञ्चालन) ऐन, २०६४ र नागरिक बडापत्र (Citizen Charter)', 
            nameEnglish: 'Good Governance Act 2064 & Citizen Service Charter System',
            completed: true, 
            noteId: 'note-public-admin',
            weightageMarks: 4
          },
          { 
            id: 'top-p2-d-03', 
            name: 'सूचनाको हक सम्बन्धी ऐन, २०६४ र सार्वजनिक पारदर्शिता', 
            nameEnglish: 'Right to Information (RTI) Act 2064 & Public Transparency',
            completed: true, 
            noteId: 'note-public-admin',
            weightageMarks: 3
          },
          { 
            id: 'top-p2-d-04', 
            name: 'भ्रष्टाचार निवारण ऐन, २०५९ र अख्तियार दुरुपयोग अनुसन्धान आयोग', 
            nameEnglish: 'Prevention of Corruption Act 2059 & CIAA Governance Framework',
            completed: true, 
            noteId: 'note-public-admin',
            weightageMarks: 3
          }
        ]
      }
    ]
  }
];

export const MOCK_COURSES: CourseProgram[] = [
  {
    id: 'NRB',
    name: 'नेपाल राष्ट्र बैंक (NRB)',
    tagline: 'तह ४ (Assistant Level 4 - Active) | प्रथम पत्र (बैंकिङ, लेखा, गणित, IT) र द्वितीय पत्र (अर्थशास्त्र, व्यवस्थापन, कानुन)',
    categoryGroup: 'बैंक तथा वित्तीय संस्था',
    activeLevel: 'तह ४ (Assistant Level 4 - Active)',
    papers: NRB_LEVEL_4_SYLLABUS_PAPERS,
    subjects: [
      // Paper I Sections
      {
        id: 'nrb-p1-sec-a',
        name: 'Paper I - Section A: Banking (बैंकिङ विकासक्रम, निक्षेप, कर्जा र निर्देशन)',
        category: 'NRB',
        icon: 'Building2',
        paper: 'Paper I',
        section: 'Section A',
        sectionLetter: 'A',
        weightageMarks: 35,
        totalTopics: 6,
        completedTopics: 5,
        topics: NRB_LEVEL_4_SYLLABUS_PAPERS[0].sections[0].topics
      },
      {
        id: 'nrb-p1-sec-b',
        name: 'Paper I - Section B: Accounting (२.१ देखि २.११ बहिखाता, वित्तीय विवरण तथा लेखापरीक्षण)',
        category: 'NRB',
        icon: 'Calculator',
        paper: 'Paper I',
        section: 'Section B',
        sectionLetter: 'B',
        weightageMarks: 30,
        totalTopics: 11,
        completedTopics: 1,
        topics: NRB_LEVEL_4_SYLLABUS_PAPERS[0].sections[1].topics
      },
      {
        id: 'nrb-p1-sec-c',
        name: 'Paper I - Section C: Mathematics (ऐकिक नियम, ब्याज, नाफा-नोक्सान र अनुपात)',
        category: 'NRB',
        icon: 'Percent',
        paper: 'Paper I',
        section: 'Section C',
        sectionLetter: 'C',
        weightageMarks: 20,
        totalTopics: 4,
        completedTopics: 4,
        topics: NRB_LEVEL_4_SYLLABUS_PAPERS[0].sections[2].topics
      },
      {
        id: 'nrb-p1-sec-d',
        name: 'Paper I - Section D: Information Technology (कम्प्युटर, NRB IT Guidelines, CBS)',
        category: 'NRB',
        icon: 'Laptop',
        paper: 'Paper I',
        section: 'Section D',
        sectionLetter: 'D',
        weightageMarks: 15,
        totalTopics: 4,
        completedTopics: 4,
        topics: NRB_LEVEL_4_SYLLABUS_PAPERS[0].sections[3].topics
      },
      // Paper II Sections
      {
        id: 'nrb-p2-sec-a',
        name: 'Paper II - Section A: Economics (मौद्रिक नीति, GDP र मुद्रास्फीति)',
        category: 'NRB',
        icon: 'TrendingUp',
        paper: 'Paper II',
        section: 'Section A',
        sectionLetter: 'A',
        weightageMarks: 30,
        totalTopics: 4,
        completedTopics: 3,
        topics: NRB_LEVEL_4_SYLLABUS_PAPERS[1].sections[0].topics
      },
      {
        id: 'nrb-p2-sec-b',
        name: 'Paper II - Section B: Management (व्यवस्थापन सिद्धान्त, BPR र कार्यालय)',
        category: 'NRB',
        icon: 'Users',
        paper: 'Paper II',
        section: 'Section B',
        sectionLetter: 'B',
        weightageMarks: 25,
        totalTopics: 4,
        completedTopics: 3,
        topics: NRB_LEVEL_4_SYLLABUS_PAPERS[1].sections[1].topics
      },
      {
        id: 'nrb-p2-sec-c',
        name: 'Paper II - Section C: Laws & Acts (NRB Act, BAFIA, बैंकिङ कसूर र AML)',
        category: 'NRB',
        icon: 'Scale',
        paper: 'Paper II',
        section: 'Section C',
        sectionLetter: 'C',
        weightageMarks: 30,
        totalTopics: 6,
        completedTopics: 5,
        topics: NRB_LEVEL_4_SYLLABUS_PAPERS[1].sections[2].topics
      },
      {
        id: 'nrb-p2-sec-d',
        name: 'Paper II - Section D: Constitution & Governance (संविधान, सुशासन र RTI)',
        category: 'NRB',
        icon: 'ShieldCheck',
        paper: 'Paper II',
        section: 'Section D',
        sectionLetter: 'D',
        weightageMarks: 15,
        totalTopics: 4,
        completedTopics: 4,
        topics: NRB_LEVEL_4_SYLLABUS_PAPERS[1].sections[3].topics
      }
    ]
  },
  {
    id: 'Commercial',
    name: 'वाणिज्य बैंकहरू (Commercial Banks - RBB / ADBL / NBL)',
    tagline: 'राष्ट्रिय वाणिज्य बैंक (RBB), कृषि विकास बैंक (ADBL) र नेपाल बैंक (NBL) को लागि साझा एकीकृत पाठ्यक्रम (Common Syllabus)',
    categoryGroup: 'बैंक तथा वित्तीय संस्था',
    activeLevel: 'तह ४ र ५ (Assistant Level - Common Syllabus)',
    levels: [
      {
        id: 'level-4-5',
        name: 'Assistant Level',
        nameNepali: 'तह ४ र ५ (Assistant Level - Common Syllabus)',
        badge: 'RBB / ADBL / NBL Common',
        description: 'राष्ट्रिय वाणिज्य बैंक, कृषि विकास बैंक र नेपाल बैंक लिमिटेड तह ४ (सहायक) र तह ५ (वरिष्ठ सहायक) को साझा एकीकृत पाठ्यक्रम',
        subjects: [
          {
            id: 'comm-sub-01',
            name: 'बैंकिङ आधारभूत ज्ञान र विकासक्रम (Banking Fundamentals)',
            category: 'Commercial',
            icon: 'Building2',
            totalTopics: 5,
            completedTopics: 5,
            topics: [
              { id: 'cb-top-01', name: 'नेपालमा बैंकिङ विकासक्रम र इतिहास', completed: true, noteId: 'note-banking-history' },
              { id: 'cb-top-02', name: 'बैंकहरूको काम, कर्तव्य र अधिकार (BAFIA दफा ४९)', completed: true, noteId: 'note-banking-functions' },
              { id: 'cb-top-03', name: 'निक्षेप परिचालन, कर्जा वर्गीकरण र नोक्सानी व्यवस्था', completed: true, noteId: 'note-deposit-credit' },
              { id: 'cb-top-04', name: 'बैंक जमानत र प्रतीतपत्र (Letter of Credit & Bank Guarantee)', completed: true, noteId: 'note-trade-finance-lc-bg' },
              { id: 'cb-top-05', name: 'सम्पत्ति शुद्धीकरण निवारण तथा ग्राहक पहिचान (AML & KYC)', completed: true, noteId: 'note-aml-kyc' }
            ]
          },
          {
            id: 'comm-sub-02',
            name: 'बैंकिङ ऐन, नियम तथा राष्ट्र बैंक निर्देशनहरू (Acts & Directives)',
            category: 'Commercial',
            icon: 'Landmark',
            totalTopics: 10,
            completedTopics: 8,
            topics: [
              { id: 'cb-top-06', name: 'नेपाल राष्ट्र बैंक ऐन, २०५८ (NRB Act 2058)', completed: true, noteId: 'note-nrb-act-bare-act' },
              { id: 'cb-top-07', name: 'बैंक तथा वित्तीय संस्था सम्बन्धी ऐन, २०७३ (BAFIA 2073)', completed: true, noteId: 'note-bafia-bare-act' },
              { id: 'cb-top-08', name: 'विनिमय अधिकारपत्र ऐन, २०३४ (Negotiable Instruments Act)', completed: true, noteId: 'note-negotiable-instruments-act' },
              { id: 'cb-top-09', name: 'बैंकिङ कसूर तथा सजाय ऐन, २०६४', completed: true, noteId: 'note-banking-offence-act' },
              { id: 'cb-top-10', name: 'सम्पत्ति शुद्धीकरण (निवारण) ऐन, २०६४', completed: true, noteId: 'note-aml-act-bare-act' },
              { id: 'cb-top-11', name: 'भुक्तानी तथा फर्स्यौट ऐन, २०७५', completed: true, noteId: 'note-payment-settlement-act' },
              { id: 'cb-top-12', name: 'सुरक्षित कारोबार ऐन, २०६३', completed: true, noteId: 'note-secured-transactions-act' },
              { id: 'cb-top-13', name: 'ऋण असुली ऐन, २०५८ र नियमावली', completed: true, noteId: 'note-debt-recovery-act' },
              { id: 'cb-top-14', name: 'विदेशी विनिमय (नियमित गर्ने) ऐन, २०१९', completed: true, noteId: 'note-forex-regulation-act' },
              { id: 'cb-top-15', name: 'नेपाल राष्ट्र बैंक एकीकृत निर्देशनहरू १-२१ (Directives Master)', completed: false, noteId: 'note-nrb-unified-directives-master' }
            ]
          },
          {
            id: 'comm-sub-03',
            name: 'लेखा प्रणाली तथा वित्तीय विवरण विश्लेषण (Accounting & Analysis)',
            category: 'Commercial',
            icon: 'Calculator',
            totalTopics: 5,
            completedTopics: 4,
            topics: [
              { id: 'cb-top-16', name: 'दोहोरो लेखा प्रणाली, भौचर, लेजर र सन्तुलन परीक्षण', completed: true, noteId: 'note-accounting-basics' },
              { id: 'cb-top-17', name: 'बैंक हिसाब मिलान विवरण (Bank Reconciliation Statement - BRS)', completed: true, noteId: 'note-accounting-basics' },
              { id: 'cb-top-18', name: 'अन्तिम हिसाब, नाफा-नोक्सान हिसाब र वासलात विश्लेषण', completed: true, noteId: 'note-accounting-basics' },
              { id: 'cb-top-19', name: 'वित्तीय अनुपात विश्लेषण (Liquidity, Profitability, Solvency Ratios)', completed: false, noteId: 'note-accounting-basics' },
              { id: 'cb-top-20', name: 'नेपाल वित्तीय प्रतिवेदन मान (NFRS) का आधारभूत सिद्धान्तहरू', completed: true, noteId: 'note-accounting-basics' }
            ]
          },
          {
            id: 'comm-sub-04',
            name: 'व्यवस्थापन, संस्थागत सुशासन र कम्प्युटर/CBS (Management & IT)',
            category: 'Commercial',
            icon: 'Users',
            totalTopics: 5,
            completedTopics: 4,
            topics: [
              { id: 'cb-top-21', name: 'व्यवस्थापनका सिद्धान्त, नेतृत्व, उत्प्रेरणा र निर्णय प्रक्रिया', completed: true, noteId: 'note-reengineering' },
              { id: 'cb-top-22', name: 'Business Process Re-engineering (BPR) र संस्थागत पुनःसंरचना', completed: true, noteId: 'note-reengineering' },
              { id: 'cb-top-23', name: 'सार्वजनिक प्रशासन, सुशासन र नागरिक बडापत्र व्यवस्थापन', completed: true, noteId: 'note-public-admin' },
              { id: 'cb-top-24', name: 'Core Banking System (CBS) र साइबर सुरक्षा पूर्वाधार', completed: true, noteId: 'note-it-fundamentals' },
              { id: 'cb-top-25', name: 'ग्राहक सम्बन्ध व्यवस्थापन (CRM) र गुनासो व्यवस्थापन संयन्त्र', completed: true, noteId: 'note-public-admin' }
            ]
          },
          {
            id: 'comm-sub-05',
            name: 'गणित र नेपाली अर्थतन्त्र (Mathematics & Nepalese Economy)',
            category: 'Commercial',
            icon: 'Percent',
            totalTopics: 4,
            completedTopics: 4,
            topics: [
              { id: 'cb-top-26', name: 'ऐकिक नियम र प्रतिशत (Unitary Method & Percentage)', completed: true, noteId: 'note-math-unitary-system' },
              { id: 'cb-top-27', name: 'साधारण तथा चक्रीय ब्याज गणना (Simple & Compound Interest)', completed: true, noteId: 'note-math-unitary-system' },
              { id: 'cb-top-28', name: 'नाफा-नोक्सान र अनुपात (Profit & Loss, Ratio Analysis)', completed: true, noteId: 'note-math-unitary-system' },
              { id: 'cb-top-29', name: 'नेपाली अर्थतन्त्रका विशेषता, कृषि, उद्योग र बजेट प्रणाली', completed: true, noteId: 'note-macro-economics' }
            ]
          }
        ]
      },
      {
        id: 'level-6',
        name: 'Officer Level',
        nameNepali: 'तह ६ (Officer Level)',
        badge: 'अधिकृत तह विशेष',
        description: 'राष्ट्रिय वाणिज्य बैंक, कृषि विकास बैंक र नेपाल बैंक तह ६ (अधिकृत) का लागि उन्नत नीतिगत तथा विश्लेषणात्मक पाठ्यक्रम',
        subjects: [
          {
            id: 'comm-l6-sub-01',
            name: 'समष्टिगत अर्थशास्त्र, वित्तीय बजार र मौद्रिक नीति (Macroeconomics & Policy)',
            category: 'Commercial',
            icon: 'TrendingUp',
            totalTopics: 4,
            completedTopics: 3,
            topics: [
              { id: 'cb6-top-01', name: 'समष्टिगत आर्थिक सूचकहरू: GDP, GNP, मुद्रास्फीति र शोधनान्तर स्थिति', completed: true, noteId: 'note-macro-economics' },
              { id: 'cb6-top-02', name: 'नेपाल राष्ट्र बैंकको मौद्रिक नीति: लक्ष्य, उपकरण र वित्तीय प्रभावकारिता', completed: true, noteId: 'note-monetary-policy-analysis' },
              { id: 'cb6-top-03', name: 'वित्तीय बजार: मुद्रा बजार र पुँजी बजारको अन्तरसम्बन्ध', completed: true, noteId: 'note-macro-economics' },
              { id: 'cb6-top-04', name: 'नेपालको वैदेशिक व्यापार, विप्रेषण (Remittance) र सञ्चिति व्यवस्थापन', completed: true, noteId: 'note-macro-economics' }
            ]
          },
          {
            id: 'comm-l6-sub-02',
            name: 'उन्नत बैंकिङ, कर्जा विश्लेषण र जोखिम व्यवस्थापन (Advanced Banking & Risk)',
            category: 'Commercial',
            icon: 'ShieldCheck',
            totalTopics: 4,
            completedTopics: 3,
            topics: [
              { id: 'cb6-top-05', name: 'कर्जा जोखिम मूल्याङ्कन, क्रेडिट स्कोरिङ र धितो व्यवस्थापन', completed: true, noteId: 'note-deposit-credit' },
              { id: 'cb6-top-06', name: 'बासेल ३ (Basel III Framework) र पुँजी पर्याप्तता फ्रेमवर्क (CAR)', completed: true, noteId: 'note-nrb-unified-directives-master' },
              { id: 'cb6-top-07', name: 'खराब कर्जा (NPA) वर्गीकरण, कर्जा नोक्सानी व्यवस्था र ऋण असुली', completed: true, noteId: 'note-nrb-unified-directives-master' },
              { id: 'cb6-top-08', name: 'तरलता जोखिम, ब्याजदर जोखिम र तनाव परीक्षण (Stress Testing)', completed: false, noteId: 'note-nrb-unified-directives-master' }
            ]
          },
          {
            id: 'comm-l6-sub-03',
            name: 'वित्तीय कानुन, अनुपालन र संस्थागत सुशासन (Financial Law & Compliance)',
            category: 'Commercial',
            icon: 'Scale',
            totalTopics: 4,
            completedTopics: 4,
            topics: [
              { id: 'cb6-top-09', name: 'BAFIA तथा राष्ट्र बैंक ऐन अन्तर्गत सञ्चालक समिति र CEO को दायित्व', completed: true, noteId: 'note-bafia-bare-act' },
              { id: 'cb6-top-10', name: 'जोखिममा आधारित AML/CFT अनुपालन प्रणाली र FIU नेपाल समन्वय', completed: true, noteId: 'note-aml-act-bare-act' },
              { id: 'cb6-top-11', name: 'संस्थागत सुशासन निर्देशिका र आन्तरिक नियन्त्रण प्रणाली (Internal Audit)', completed: true, noteId: 'note-nrb-unified-directives-master' },
              { id: 'cb6-top-12', name: 'वित्तीय अपराध, बैंकिङ कसूर अनुसन्धान र कानुनी उपचार', completed: true, noteId: 'note-banking-offence-act' }
            ]
          },
          {
            id: 'comm-l6-sub-04',
            name: 'ट्रेजरी, विदेशी विनिमय र अन्तर्राष्ट्रिय व्यापार (Treasury & Trade Finance)',
            category: 'Commercial',
            icon: 'Globe',
            totalTopics: 4,
            completedTopics: 3,
            topics: [
              { id: 'cb6-top-13', name: 'ट्रेजरी व्यवस्थापन, सम्पत्ति तथा दायित्व व्यवस्थापन समिति (ALCO)', completed: true, noteId: 'note-trade-finance-lc-bg' },
              { id: 'cb6-top-14', name: 'अन्तर्राष्ट्रिय व्यापार वित्त: UCP 600, LC, Bank Guarantee र Incoterms', completed: true, noteId: 'note-trade-finance-lc-bg' },
              { id: 'cb6-top-15', name: 'विदेशी विनिमय जोखिम हेजिङ: Forward, Swap र Option कारोबार', completed: true, noteId: 'note-forex-regulation-act' },
              { id: 'cb6-top-16', name: 'स्विफ्ट (SWIFT), RTGS र अन्तर्राष्ट्रिय भुक्तानी प्रणाली', completed: true, noteId: 'note-payment-settlement-act' }
            ]
          }
        ]
      }
    ],
    // Default subjects array points to level-4-5 common modules
    subjects: [
      {
        id: 'comm-sub-01',
        name: 'बैंकिङ आधारभूत ज्ञान र विकासक्रम (Banking Fundamentals)',
        category: 'Commercial',
        icon: 'Building2',
        totalTopics: 5,
        completedTopics: 5,
        topics: [
          { id: 'cb-top-01', name: 'नेपालमा बैंकिङ विकासक्रम र इतिहास', completed: true, noteId: 'note-banking-history' },
          { id: 'cb-top-02', name: 'बैंकहरूको काम, कर्तव्य र अधिकार (BAFIA दफा ४९)', completed: true, noteId: 'note-banking-functions' },
          { id: 'cb-top-03', name: 'निक्षेप परिचालन, कर्जा वर्गीकरण र नोक्सानी व्यवस्था', completed: true, noteId: 'note-deposit-credit' },
          { id: 'cb-top-04', name: 'बैंक जमानत र प्रतीतपत्र (Letter of Credit & Bank Guarantee)', completed: true, noteId: 'note-trade-finance-lc-bg' },
          { id: 'cb-top-05', name: 'सम्पत्ति शुद्धीकरण निवारण तथा ग्राहक पहिचान (AML & KYC)', completed: true, noteId: 'note-aml-kyc' }
        ]
      },
      {
        id: 'comm-sub-02',
        name: 'बैंकिङ ऐन, नियम तथा राष्ट्र बैंक निर्देशनहरू (Acts & Directives)',
        category: 'Commercial',
        icon: 'Landmark',
        totalTopics: 10,
        completedTopics: 8,
        topics: [
          { id: 'cb-top-06', name: 'नेपाल राष्ट्र बैंक ऐन, २०५८ (NRB Act 2058)', completed: true, noteId: 'note-nrb-act-bare-act' },
          { id: 'cb-top-07', name: 'बैंक तथा वित्तीय संस्था सम्बन्धी ऐन, २०७३ (BAFIA 2073)', completed: true, noteId: 'note-bafia-bare-act' },
          { id: 'cb-top-08', name: 'विनिमय अधिकारपत्र ऐन, २०३४ (Negotiable Instruments Act)', completed: true, noteId: 'note-negotiable-instruments-act' },
          { id: 'cb-top-09', name: 'बैंकिङ कसूर तथा सजाय ऐन, २०६४', completed: true, noteId: 'note-banking-offence-act' },
          { id: 'cb-top-10', name: 'सम्पत्ति शुद्धीकरण (निवारण) ऐन, २०६४', completed: true, noteId: 'note-aml-act-bare-act' },
          { id: 'cb-top-11', name: 'भुक्तानी तथा फर्स्यौट ऐन, २०७५', completed: true, noteId: 'note-payment-settlement-act' },
          { id: 'cb-top-12', name: 'सुरक्षित कारोबार ऐन, २०६३', completed: true, noteId: 'note-secured-transactions-act' },
          { id: 'cb-top-13', name: 'ऋण असुली ऐन, २०५८ र नियमावली', completed: true, noteId: 'note-debt-recovery-act' },
          { id: 'cb-top-14', name: 'विदेशी विनिमय (नियमित गर्ने) ऐन, २०१९', completed: true, noteId: 'note-forex-regulation-act' },
          { id: 'cb-top-15', name: 'नेपाल राष्ट्र बैंक एकीकृत निर्देशनहरू १-२१ (Directives Master)', completed: false, noteId: 'note-nrb-unified-directives-master' }
        ]
      },
      {
        id: 'comm-sub-03',
        name: 'लेखा प्रणाली तथा वित्तीय विवरण विश्लेषण (Accounting & Analysis)',
        category: 'Commercial',
        icon: 'Calculator',
        totalTopics: 5,
        completedTopics: 4,
        topics: [
          { id: 'cb-top-16', name: 'दोहोरो लेखा प्रणाली, भौचर, लेजर र सन्तुलन परीक्षण', completed: true, noteId: 'note-accounting-basics' },
          { id: 'cb-top-17', name: 'बैंक हिसाब मिलान विवरण (Bank Reconciliation Statement - BRS)', completed: true, noteId: 'note-accounting-basics' },
          { id: 'cb-top-18', name: 'अन्तिम हिसाब, नाफा-नोक्सान हिसाब र वासलात विश्लेषण', completed: true, noteId: 'note-accounting-basics' },
          { id: 'cb-top-19', name: 'वित्तीय अनुपात विश्लेषण (Liquidity, Profitability, Solvency Ratios)', completed: false, noteId: 'note-accounting-basics' },
          { id: 'cb-top-20', name: 'नेपाल वित्तीय प्रतिवेदन मान (NFRS) का आधारभूत सिद्धान्तहरू', completed: true, noteId: 'note-accounting-basics' }
        ]
      },
      {
        id: 'comm-sub-04',
        name: 'व्यवस्थापन, संस्थागत सुशासन र कम्प्युटर/CBS (Management & IT)',
        category: 'Commercial',
        icon: 'Users',
        totalTopics: 5,
        completedTopics: 4,
        topics: [
          { id: 'cb-top-21', name: 'व्यवस्थापनका सिद्धान्त, नेतृत्व, उत्प्रेरणा र निर्णय प्रक्रिया', completed: true, noteId: 'note-reengineering' },
          { id: 'cb-top-22', name: 'Business Process Re-engineering (BPR) र संस्थागत पुनःसंरचना', completed: true, noteId: 'note-reengineering' },
          { id: 'cb-top-23', name: 'सार्वजनिक प्रशासन, सुशासन र नागरिक बडापत्र व्यवस्थापन', completed: true, noteId: 'note-public-admin' },
          { id: 'cb-top-24', name: 'Core Banking System (CBS) र साइबर सुरक्षा पूर्वाधार', completed: true, noteId: 'note-it-fundamentals' },
          { id: 'cb-top-25', name: 'ग्राहक सम्बन्ध व्यवस्थापन (CRM) र गुनासो व्यवस्थापन संयन्त्र', completed: true, noteId: 'note-public-admin' }
        ]
      },
      {
        id: 'comm-sub-05',
        name: 'गणित र नेपाली अर्थतन्त्र (Mathematics & Nepalese Economy)',
        category: 'Commercial',
        icon: 'Percent',
        totalTopics: 4,
        completedTopics: 4,
        topics: [
          { id: 'cb-top-26', name: 'ऐकिक नियम र प्रतिशत (Unitary Method & Percentage)', completed: true, noteId: 'note-math-unitary-system' },
          { id: 'cb-top-27', name: 'साधारण तथा चक्रीय ब्याज गणना (Simple & Compound Interest)', completed: true, noteId: 'note-math-unitary-system' },
          { id: 'cb-top-28', name: 'नाफा-नोक्सान र अनुपात (Profit & Loss, Ratio Analysis)', completed: true, noteId: 'note-math-unitary-system' },
          { id: 'cb-top-29', name: 'नेपाली अर्थतन्त्रका विशेषता, कृषि, उद्योग र बजेट प्रणाली', completed: true, noteId: 'note-macro-economics' }
        ]
      }
    ]
  },
  {
    id: 'EPF',
    name: 'कर्मचारी सञ्चय कोष (EPF)',
    tagline: 'कर्मचारी सञ्चय कोष तह ४, ५ र ६ का लागि एकीकृत पाठ्यक्रम तथा विशेष अध्ययन सामग्री',
    categoryGroup: 'बैंक तथा वित्तीय संस्था',
    activeLevel: 'तह ४, ५ र ६',
    levels: [
      {
        id: 'epf-level-4-5-6',
        name: 'Levels 4, 5 & 6',
        nameNepali: 'तह ४, ५ र ६',
        badge: 'तह ४, ५ र ६ विशेष',
        description: 'कर्मचारी सञ्चय कोष तह ४ (सहायक), तह ५ (वरिष्ठ सहायक) र तह ६ (अधिकृत) को लागि साझा एकीकृत पाठ्यक्रम',
        subjects: [
          {
            id: 'epf-sub-01',
            name: 'कर्मचारी सञ्चय कोष ऐन र विनियमावली (EPF Act & Bylaws)',
            category: 'EPF',
            icon: 'Landmark',
            totalTopics: 4,
            completedTopics: 4,
            topics: [
              { id: 'epf-top-01', name: 'कर्मचारी सञ्चय कोष ऐन, २०१९ को पृष्ठभूमि र उद्देश्य', completed: true, noteId: 'note-banking-acts-manual' },
              { id: 'epf-top-02', name: 'कोषको सञ्चालक समिति, गठन, काम, कर्तव्य र अधिकार', completed: true, noteId: 'note-banking-acts-manual' },
              { id: 'epf-top-03', name: 'सञ्चयकर्ताहरूको हक, अधिकार र कल्याणकारी योजनाहरू', completed: true, noteId: 'note-banking-acts-manual' },
              { id: 'epf-top-04', name: 'कोषको कर्मचारी सेवा सर्त विनियमावली र आचारसंहिता', completed: true, noteId: 'note-banking-bylaws-manual' }
            ]
          },
          {
            id: 'epf-sub-02',
            name: 'सामाजिक सुरक्षा र निवृत्तिभरण व्यवस्थापन (Social Security & Pension)',
            category: 'EPF',
            icon: 'ShieldCheck',
            totalTopics: 4,
            completedTopics: 4,
            topics: [
              { id: 'epf-top-05', name: 'नेपालमा सामाजिक सुरक्षाको अवधारणा र कर्मचारी सञ्चय कोषको भूमिका', completed: true, noteId: 'note-public-admin' },
              { id: 'epf-top-06', name: 'योगदानमा आधारित निवृत्तिभरण (Contributory Pension) प्रणाली', completed: true, noteId: 'note-public-admin' },
              { id: 'epf-top-07', name: 'सञ्चयकर्ता सापटी तथा कर्जा योजनाहरू (घर, शैक्षिक, विशेष सापटी)', completed: true, noteId: 'note-deposit-credit' },
              { id: 'epf-top-08', name: 'स्वास्थ्य उपचार तथा दुर्घटना बीमा सुविधा व्यवस्थापन', completed: true, noteId: 'note-public-admin' }
            ]
          },
          {
            id: 'epf-sub-03',
            name: 'कोषको लगानी विविधीकरण र जोखिम नियन्त्रण (Fund Investment & Risk)',
            category: 'EPF',
            icon: 'TrendingUp',
            totalTopics: 4,
            completedTopics: 3,
            topics: [
              { id: 'epf-top-09', name: 'कर्मचारी सञ्चय कोषको लगानी नीति र प्राथमिकताप्राप्त क्षेत्रहरू', completed: true, noteId: 'note-macro-economics' },
              { id: 'epf-top-10', name: 'पूर्वाधार तथा जलविद्युत आयोजनामा सहवित्तीयकरण लगानी', completed: true, noteId: 'note-trade-finance-lc-bg' },
              { id: 'epf-top-11', name: 'लगानीको जोखिम विश्लेषण, प्रतिफल दर र नाफा बाँडफाँड', completed: true, noteId: 'note-accounting-basics' },
              { id: 'epf-top-12', name: 'कोषको वित्तीय दिगोपना र सम्पत्ति दायित्व व्यवस्थापन (ALM)', completed: false, noteId: 'note-accounting-basics' }
            ]
          },
          {
            id: 'epf-sub-04',
            name: 'प्रशासन, लेखा र सूचना प्रविधि प्रणाली (Administration, Accounting & IT)',
            category: 'EPF',
            icon: 'Users',
            totalTopics: 4,
            completedTopics: 4,
            topics: [
              { id: 'epf-top-13', name: 'दोहोरो लेखा प्रणाली, आर्थिक कार्यविधि र लेखापरीक्षण (NFRS)', completed: true, noteId: 'note-accounting-basics' },
              { id: 'epf-top-14', name: 'सार्वजनिक प्रशासन, संस्थागत सुशासन र नागरिक बडापत्र', completed: true, noteId: 'note-public-admin' },
              { id: 'epf-top-15', name: 'कोषको सूचना प्रविधि प्रणाली, डिजिटल सेवा र डाटा सुरक्षा', completed: true, noteId: 'note-it-fundamentals' },
              { id: 'epf-top-16', name: 'भ्रष्टाचार निवारण ऐन, २०५९ र पारदर्शिता व्यवस्था', completed: true, noteId: 'note-public-admin' }
            ]
          }
        ]
      }
    ],
    subjects: [
      {
        id: 'epf-sub-01',
        name: 'कर्मचारी सञ्चय कोष ऐन र विनियमावली (EPF Act & Bylaws)',
        category: 'EPF',
        icon: 'Landmark',
        totalTopics: 4,
        completedTopics: 4,
        topics: [
          { id: 'epf-top-01', name: 'कर्मचारी सञ्चय कोष ऐन, २०१९ को पृष्ठभूमि र उद्देश्य', completed: true, noteId: 'note-banking-acts-manual' },
          { id: 'epf-top-02', name: 'कोषको सञ्चालक समिति, गठन, काम, कर्तव्य र अधिकार', completed: true, noteId: 'note-banking-acts-manual' },
          { id: 'epf-top-03', name: 'सञ्चयकर्ताहरूको हक, अधिकार र कल्याणकारी योजनाहरू', completed: true, noteId: 'note-banking-acts-manual' },
          { id: 'epf-top-04', name: 'कोषको कर्मचारी सेवा सर्त विनियमावली र आचारसंहिता', completed: true, noteId: 'note-banking-bylaws-manual' }
        ]
      },
      {
        id: 'epf-sub-02',
        name: 'सामाजिक सुरक्षा र निवृत्तिभरण व्यवस्थापन (Social Security & Pension)',
        category: 'EPF',
        icon: 'ShieldCheck',
        totalTopics: 4,
        completedTopics: 4,
        topics: [
          { id: 'epf-top-05', name: 'नेपालमा सामाजिक सुरक्षाको अवधारणा र कर्मचारी सञ्चय कोषको भूमिका', completed: true, noteId: 'note-public-admin' },
          { id: 'epf-top-06', name: 'योगदानमा आधारित निवृत्तिभरण (Contributory Pension) प्रणाली', completed: true, noteId: 'note-public-admin' },
          { id: 'epf-top-07', name: 'सञ्चयकर्ता सापटी तथा कर्जा योजनाहरू (घर, शैक्षिक, विशेष सापटी)', completed: true, noteId: 'note-deposit-credit' },
          { id: 'epf-top-08', name: 'स्वास्थ्य उपचार तथा दुर्घटना बीमा सुविधा व्यवस्थापन', completed: true, noteId: 'note-public-admin' }
        ]
      },
      {
        id: 'epf-sub-03',
        name: 'कोषको लगानी विविधीकरण र जोखिम नियन्त्रण (Fund Investment & Risk)',
        category: 'EPF',
        icon: 'TrendingUp',
        totalTopics: 4,
        completedTopics: 3,
        topics: [
          { id: 'epf-top-09', name: 'कर्मचारी सञ्चय कोषको लगानी नीति र प्राथमिकताप्राप्त क्षेत्रहरू', completed: true, noteId: 'note-macro-economics' },
          { id: 'epf-top-10', name: 'पूर्वाधार तथा जलविद्युत आयोजनामा सहवित्तीयकरण लगानी', completed: true, noteId: 'note-trade-finance-lc-bg' },
          { id: 'epf-top-11', name: 'लगानीको जोखिम विश्लेषण, प्रतिफल दर र नाफा बाँडफाँड', completed: true, noteId: 'note-accounting-basics' },
          { id: 'epf-top-12', name: 'कोषको वित्तीय दिगोपना र सम्पत्ति दायित्व व्यवस्थापन (ALM)', completed: false, noteId: 'note-accounting-basics' }
        ]
      },
      {
        id: 'epf-sub-04',
        name: 'प्रशासन, लेखा र सूचना प्रविधि प्रणाली (Administration, Accounting & IT)',
        category: 'EPF',
        icon: 'Users',
        totalTopics: 4,
        completedTopics: 4,
        topics: [
          { id: 'epf-top-13', name: 'दोहोरो लेखा प्रणाली, आर्थिक कार्यविधि र लेखापरीक्षण (NFRS)', completed: true, noteId: 'note-accounting-basics' },
          { id: 'epf-top-14', name: 'सार्वजनिक प्रशासन, संस्थागत सुशासन र नागरिक बडापत्र', completed: true, noteId: 'note-public-admin' },
          { id: 'epf-top-15', name: 'कोषको सूचना प्रविधि प्रणाली, डिजिटल सेवा र डाटा सुरक्षा', completed: true, noteId: 'note-it-fundamentals' },
          { id: 'epf-top-16', name: 'भ्रष्टाचार निवारण ऐन, २०५९ र पारदर्शिता व्यवस्था', completed: true, noteId: 'note-public-admin' }
        ]
      }
    ]
  },
  {
    id: 'Loksewa',
    name: 'लोकसेवा आयोग (Loksewa Aayog Open Exams)',
    tagline: 'शाखा अधिकृत, नायब सुब्बा र खरिदार प्रथम तथा द्वितीय पत्र',
    categoryGroup: 'खुला निजामती सेवा',
    activeLevel: 'तह ४, ५ र अधिकृत तह',
    subjects: [
      {
        id: 'ls-sub-01',
        name: 'नेपालको संविधान र कानुन (Constitution & Law)',
        category: 'Loksewa',
        icon: 'Scale',
        totalTopics: 3,
        completedTopics: 3,
        topics: [
          { id: 'top-ls-01', name: 'नेपालको संविधान र मौलिक हकहरू', completed: true, noteId: 'note-constitution-governance' },
          { id: 'top-ls-02', name: 'राज्यका निर्देशक सिद्धान्त, नीति तथा दायित्व', completed: true, noteId: 'note-constitution-governance' },
          { id: 'top-ls-03', name: 'संघीय आर्थिक कार्यप्रणाली र बजेट व्यवस्था', completed: true, noteId: 'note-constitution-governance' }
        ]
      },
      {
        id: 'ls-sub-02',
        name: 'सार्वजनिक प्रशासन र सुशासन (Public Administration & Governance)',
        category: 'Loksewa',
        icon: 'Briefcase',
        totalTopics: 3,
        completedTopics: 3,
        topics: [
          { id: 'top-ls-04', name: 'सुशासन ऐन, २०६४ र नागरिक बडापत्र', completed: true, noteId: 'note-public-admin' },
          { id: 'top-ls-05', name: 'सूचनाको हक सम्बन्धी ऐन, २०६४', completed: true, noteId: 'note-public-admin' },
          { id: 'top-ls-06', name: 'भ्रष्टाचार निवारण ऐन, २०५९ र पारदर्शिता', completed: true, noteId: 'note-public-admin' }
        ]
      },
      {
        id: 'ls-sub-03',
        name: 'समसामयिक घटनाक्रम तथा सामान्य ज्ञान (Current Affairs & GK)',
        category: 'Loksewa',
        icon: 'Globe',
        totalTopics: 3,
        completedTopics: 3,
        topics: [
          { id: 'top-ls-07', name: 'नेपालको भूगोल र प्राकृतिक स्रोत साधन', completed: true },
          { id: 'top-ls-08', name: 'नेपालको इतिहास, संस्कृति र सामाजिक व्यवस्था', completed: true },
          { id: 'top-ls-09', name: 'अन्तर्राष्ट्रिय संघ-संस्था (UN, SAARC, BIMSTEC)', completed: true }
        ]
      }
    ]
  }
];

// --- BADGES / GAMIFICATION ---
export const MOCK_ACHIEVEMENT_BADGES: AchievementBadge[] = [
  {
    id: 'badge-01',
    title: '7 Day Streak',
    nepaliTitle: '🔥 लगातार ७ दिन अध्ययन',
    description: 'लगातार ७ दिन दैनिक क्विज वा अध्ययन सम्पन्न गरेको।',
    icon: 'Flame',
    unlocked: true,
    progressPercent: 100
  },
  {
    id: 'badge-02',
    title: 'Quiz Master',
    nepaliTitle: '🏆 क्विज मास्टर',
    description: 'कम्तिमा १५ वटा विभिन्न क्विजहरू ८०% भन्दा बढी अङ्कसहित उत्तीर्ण गरेको।',
    icon: 'Trophy',
    unlocked: true,
    progressPercent: 100
  },
  {
    id: 'badge-03',
    title: 'Consistent Learner',
    nepaliTitle: '📚 समर्पित अध्येता',
    description: '१०० भन्दा बढी अध्ययन पृष्ठ वा नोट्सहरू अध्ययन सम्पन्न गरेको।',
    icon: 'BookOpen',
    unlocked: true,
    progressPercent: 100
  },
  {
    id: 'badge-04',
    title: '100 Questions Solved',
    nepaliTitle: '🎯 शतक प्रश्न हल',
    description: '१०० वटा भन्दा बढी वस्तुगत (MCQ) प्रश्नहरू सफलतापूर्वक हल गरेको।',
    icon: 'Target',
    unlocked: true,
    progressPercent: 100
  },
  {
    id: 'badge-05',
    title: 'Perfect Score',
    nepaliTitle: '💯 १००% पूर्ण स्कोर',
    description: 'कुनै पनि पूर्ण क्विजमा कुनै गल्ती नगरी १०/१० वा पूर्ण अङ्क प्राप्त गरेको।',
    icon: 'Sparkles',
    unlocked: true,
    progressPercent: 100
  },
  {
    id: 'badge-06',
    title: 'NRB Expert',
    nepaliTitle: '🏦 राष्ट्र बैंक विज्ञ',
    description: 'नेपाल राष्ट्र बैंक सम्बन्धित सबै ५०+ प्रश्नहरू हल गरेको।',
    icon: 'Landmark',
    unlocked: false,
    progressPercent: 68
  }
];

// --- NOTIFICATIONS ---
export const MOCK_NOTIFICATIONS: AppNotification[] = [
  {
    id: 'notif-01',
    title: '📝 आजको Daily Quiz तयार भयो!',
    description: 'बैंकिङ र राष्ट्र बैंक विशेष १० प्रश्नको नयाँ क्विज खेल्नुहोस् र +५० XP कमाउनुहोस्।',
    timestamp: '१० मिनेट अघि',
    read: false,
    type: 'quiz',
    targetTab: 'quiz'
  },
  {
    id: 'notif-02',
    title: '📰 नयाँ समसामयिक थपियो!',
    description: 'आ.व. २०८१/८२ को बजेट र मौद्रिक नीतिका मुख्य बुँदाहरू समेटिएको ताजा विश्लेषण प्रकाशित भयो।',
    timestamp: '२ घण्टा अघि',
    read: false,
    type: 'affair',
    targetTab: 'current-affairs'
  },
  {
    id: 'notif-03',
    title: '🔥 तपाईंको ७ दिने Streak सक्रिय छ!',
    description: 'बधाई छ! तपाईंले आफ्नो अध्ययन निरन्तरता कायम राख्नुभएको छ। आजको चुनौती पूरा गर्नुहोस्।',
    timestamp: '५ घण्टा अघि',
    read: true,
    type: 'streak',
    targetTab: 'profile'
  },
  {
    id: 'notif-04',
    title: '📚 नयाँ Banking Notes थपियो',
    description: '"Re-engineering को अवधारणा" र तुलनात्मक अध्ययन नोट्स प्रकाशित भएको छ।',
    timestamp: '१ दिन अघि',
    read: true,
    type: 'note',
    targetTab: 'courses'
  }
];

// --- COUPONS ---
export const MOCK_COUPONS: Coupon[] = [
  {
    code: 'BANKING20',
    discountType: 'percentage',
    discountValue: 20,
    expiryDate: '2026-12-31',
    active: true
  },
  {
    code: 'TAYARI10',
    discountType: 'percentage',
    discountValue: 10,
    expiryDate: '2026-12-31',
    active: true
  },
  {
    code: 'WELCOME50',
    discountType: 'fixed',
    discountValue: 50,
    expiryDate: '2026-12-31',
    active: true,
    minAmount: 140
  }
];

export const MOCK_ACHIEVEMENTS = MOCK_ACHIEVEMENT_BADGES;

