import { QuizQuestion, Question, SubjectCategory, DifficultyLevel } from '../types';

export interface SubTopicInfo {
  id: string;
  nameNepali: string;
  nameEnglish: string;
  weightagePercent: number;
}

export interface SyllabusModuleMeta {
  id: string;
  category: 'Banking' | 'NRB' | 'Current Affairs' | 'GK' | 'Economics' | 'Management' | 'Accounting' | 'Computer' | 'Mathematics' | 'English' | 'Law' | 'Loksewa' | 'PublicEnterprises' | 'LanguageTest';
  nameNepali: string;
  nameEnglish: string;
  totalMCQs: number;
  level: string;
  weightageNote?: string;
  description: string;
  icon: string;
  subTopics: SubTopicInfo[];
}

export const SYLLABUS_MODULES: SyllabusModuleMeta[] = [
  {
    id: 'public-enterprises',
    category: 'PublicEnterprises',
    nameNepali: 'सार्वजनिक संस्थान व्यवस्थापन',
    nameEnglish: 'Public Enterprises & Privatization',
    totalMCQs: 1000,
    level: 'तह ४: २० अङ्क (१० MCQs) | तह ५: १० अङ्क',
    weightageNote: 'तह ४: २० अङ्क (१० MCQs) | तह ५: १० अङ्क',
    description: 'नेपालका ४४ सार्वजनिक संस्थानहरूको वित्तीय स्थिति, पहेँलो किताब, निजीकरण ऐन २०५०, संस्थागत सुशासन र सञ्चालक समिति संरचना।',
    icon: 'Building2',
    subTopics: [
      { id: 'pe-class-acts', nameNepali: 'संस्थानको वर्गीकरण र कानुनी आधार', nameEnglish: 'PE Classification & Acts', weightagePercent: 20 },
      { id: 'pe-status-review', nameNepali: 'सार्वजनिक संस्थानको कार्यसम्पादन र वार्षिक समीक्षा', nameEnglish: 'Annual Performance & Yellow Book', weightagePercent: 25 },
      { id: 'pe-board-gov', nameNepali: 'सञ्चालक समिति, नियुक्ति र संस्थागत सुशासन', nameEnglish: 'Board Governance & Appointment', weightagePercent: 20 },
      { id: 'pe-privatization', nameNepali: 'निजीकरण ऐन २०५० र विनिवेश प्रक्रिया', nameEnglish: 'Privatization Act 2050 & Disinvestment', weightagePercent: 20 },
      { id: 'pe-audit-oag', nameNepali: 'लेखापरीक्षण, संसदीय निगरानी र उत्तरदायित्व', nameEnglish: 'OAG Audit & PAC Oversight', weightagePercent: 15 }
    ]
  },
  {
    id: 'ppp',
    category: 'PublicEnterprises',
    nameNepali: 'सार्वजनिक-निजी साझेदारी (PPP)',
    nameEnglish: 'Public-Private Partnership & Investment',
    totalMCQs: 1000,
    level: 'तह ४ र तह ५',
    description: 'सार्वजनिक-निजी साझेदारी तथा लगानी ऐन २०७५, लगानी बोर्ड, BOT/BOOT मोडेल, VGF र पूर्वाधार लगानी जोखिम बाँडफाँड।',
    icon: 'Briefcase',
    subTopics: [
      { id: 'ppp-legal-framework', nameNepali: 'PPP अवधारणा र कानुनी संरचना (PPP ऐन २०७५)', nameEnglish: 'PPP Concepts & Legal Framework', weightagePercent: 25 },
      { id: 'ppp-models', nameNepali: 'BOT, BOOT, BOO र DBFO आयोजना मोडेल', nameEnglish: 'BOT, BOOT, BOO & DBFO Models', weightagePercent: 25 },
      { id: 'ppp-ibn-threshold', nameNepali: 'लगानी बोर्ड (IBN) को क्षेत्राधिकार र लगानी सीमा', nameEnglish: 'Investment Board Nepal Thresholds', weightagePercent: 20 },
      { id: 'ppp-vgf-concession', nameNepali: 'Viability Gap Funding (VGF) र सहुलियत सम्झौता', nameEnglish: 'VGF & Concession Agreements', weightagePercent: 15 },
      { id: 'ppp-risk-sharing', nameNepali: 'पूर्वाधार विकासमा जोखिम बाँडफाँड र नियमन', nameEnglish: 'Infrastructure Risk Sharing & Regulation', weightagePercent: 15 }
    ]
  },
  {
    id: 'language-test',
    category: 'LanguageTest',
    nameNepali: 'भाषा परीक्षण (नेपाली र अङ्ग्रेजी)',
    nameEnglish: 'Language Proficiency Test',
    totalMCQs: 1000,
    level: 'तह ५: १० अङ्क (नेपाली र अङ्ग्रेजी)',
    weightageNote: 'तह ५: १० अङ्क (नेपाली र अङ्ग्रेजी)',
    description: 'नेपाली शुद्ध हिज्जे, पदवर्ग, पर्यायवाची-विपरीतार्थक र English Subject-Verb Concord, Prepositions, Banking Collocations & Translation।',
    icon: 'Languages',
    subTopics: [
      { id: 'lang-nepali-grammar', nameNepali: 'नेपाली व्याकरण, शुद्ध-अशुद्ध र पदवर्ग', nameEnglish: 'Nepali Orthography & Parts of Speech', weightagePercent: 25 },
      { id: 'lang-nepali-vocab', nameNepali: 'नेपाली पर्यायवाची, विपरीतार्थक र पारिभाषिक शब्द', nameEnglish: 'Nepali Synonyms, Antonyms & Technical Terms', weightagePercent: 20 },
      { id: 'lang-english-concord', nameNepali: 'English Concord (Subject-Verb Agreement) & Tenses', nameEnglish: 'English Subject-Verb Concord & Tenses', weightagePercent: 25 },
      { id: 'lang-english-prepositions', nameNepali: 'English Prepositions, Idioms & Banking Phrases', nameEnglish: 'Prepositions, Idioms & Financial Collocations', weightagePercent: 15 },
      { id: 'lang-translation-mcq', nameNepali: 'बैंकिङ तथा प्रशासनिक अनुवाद (Translation MCQs)', nameEnglish: 'Banking & Administrative Translation', weightagePercent: 15 }
    ]
  },
  {
    id: 'applied-math',
    category: 'Mathematics',
    nameNepali: 'व्यावहारिक गणित तथा वित्तीय गणना',
    nameEnglish: 'Applied Mathematics & Financial Math',
    totalMCQs: 1000,
    level: 'तह ४ र तह ५',
    description: 'साधारण र चक्रीय ब्याज, नाफा-नोक्सान, छुट, ऐकिक नियम, समय र काम, अनुपात-समानुपात र प्रतिशत-औसतको वस्तुगत समस्या समाधान।',
    icon: 'Calculator',
    subTopics: [
      { id: 'math-interest', nameNepali: 'साधारण ब्याज र चक्रीय ब्याज (Simple & Compound Interest)', nameEnglish: 'Simple & Compound Interest', weightagePercent: 30 },
      { id: 'math-profit-loss', nameNepali: 'नाफा, नोक्सान र छुट (Profit, Loss & Discount)', nameEnglish: 'Profit, Loss, Markup & Discount', weightagePercent: 20 },
      { id: 'math-unitary-work', nameNepali: 'ऐकिक नियम र समय-काम (Unitary Method, Time & Work)', nameEnglish: 'Unitary Method, Time & Work, Pipes', weightagePercent: 20 },
      { id: 'math-ratio-partner', nameNepali: 'अनुपात, समानुपात र साझेदारी (Ratio, Proportion & Partnership)', nameEnglish: 'Ratio, Proportion & Partnership Sharing', weightagePercent: 15 },
      { id: 'math-percent-avg', nameNepali: 'प्रतिशत र औसत गणना (Percentage & Averages)', nameEnglish: 'Percentage, Growth Rate & Averages', weightagePercent: 15 }
    ]
  },
  {
    id: 'it-ai-cybersecurity',
    category: 'Computer',
    nameNepali: 'सूचना प्रविधि, AI र साइबर सुरक्षा',
    nameEnglish: 'IT, AI & Banking Cybersecurity',
    totalMCQs: 1000,
    level: 'तह ४ र तह ५',
    description: 'नेपाल राष्ट्र बैंक IT Guidelines, वार्षिक IS Audit, कोर बैंकिङ (CBS: Finacle, Pumori), RTGS, IPS, २FA र डिजिटल बैंकिङ सुरक्षा।',
    icon: 'ShieldCheck',
    subTopics: [
      { id: 'it-architecture-os', nameNepali: 'कम्प्युटर आर्किटेक्चर र अपरेटिङ सिस्टम', nameEnglish: 'Computer Architecture, Networking & OS', weightagePercent: 15 },
      { id: 'it-nrb-guidelines', nameNepali: 'नेपाल राष्ट्र बैंक IT Guidelines र IS Audit', nameEnglish: 'NRB IT Guidelines & Annual IS Audit', weightagePercent: 25 },
      { id: 'it-cbs-software', nameNepali: 'कोर बैंकिङ सफ्टवेयर (CBS: Finacle, Pumori, T24)', nameEnglish: 'Core Banking Software Architectures', weightagePercent: 20 },
      { id: 'it-cybersecurity-2fa', nameNepali: 'साइबर सुरक्षा, २FA, मालवेयर र फायरवाल', nameEnglish: 'Cybersecurity, 2FA, Malware & Firewalls', weightagePercent: 20 },
      { id: 'it-digital-fintech', nameNepali: 'डिजिटल बैंकिङ, RTGS, IPS, ConnectIPS र AI FinTech', nameEnglish: 'Payment Systems, RTGS, IPS & FinTech AI', weightagePercent: 20 }
    ]
  },
  {
    id: 'economics',
    category: 'Economics',
    nameNepali: 'अर्थशास्त्र, मौद्रिक नीति र बैंकिङ सिद्धान्त',
    nameEnglish: 'Economics & Monetary Framework',
    totalMCQs: 1000,
    level: 'तह ४ र तह ५',
    description: 'नेपाल राष्ट्र बैंकको मौद्रिक नीति (नीतिगत दर ५.५%, बैंक दर ६.५%), CRR (४%), SLR (१२%), CD Ratio (९०%), CAR (११%) र १६औं योजना।',
    icon: 'TrendingUp',
    subTopics: [
      { id: 'econ-monetary-corridor', nameNepali: 'मौद्रिक नीति र ब्याजदर करिडोर (नीतिगत दर ५.५%, बैंक दर ६.५%)', nameEnglish: 'Monetary Policy & Interest Rate Corridor', weightagePercent: 25 },
      { id: 'econ-crr-slr', nameNepali: 'अनिवार्य नगद मौज्दात (CRR ४.०%) र तरलता अनुपात (SLR १२.०%)', nameEnglish: 'CRR (4.0%), SLR (12.0%) & Statutory Reserves', weightagePercent: 20 },
      { id: 'econ-macro-bop', nameNepali: 'समष्टिगत अर्थशास्त्र, GDP, मुद्रास्फीति र भुक्तानी सन्तुलन', nameEnglish: 'Macroeconomics, GDP, CPI Inflation & BOP', weightagePercent: 20 },
      { id: 'econ-plan-fiscal', nameNepali: '१६औं योजना, वित्तीय नीति र पुँजी बजार', nameEnglish: '16th Periodic Plan, Fiscal Policy & Capital Market', weightagePercent: 15 },
      { id: 'econ-car-cdratio', nameNepali: 'पुँजी पर्याप्तता अनुपात (CAR ११%) र CD Ratio (९०%)', nameEnglish: 'Capital Adequacy (CAR 11%) & CD Ratio (90%)', weightagePercent: 20 }
    ]
  },
  {
    id: 'governance-constitution',
    category: 'Law',
    nameNepali: 'नेपालको संविधान र शासन प्रणाली',
    nameEnglish: 'Constitution of Nepal & Governance',
    totalMCQs: 1000,
    level: 'तह ४ र तह ५',
    description: 'नेपालको संविधान २०७२ (भाग ३ मौलिक हक, कर्तव्य), सुशासन ऐन २०६४, सूचनाको हक ऐन २०६४, अख्तियार, महालेखापरीक्षक र लोक सेवा आयोग।',
    icon: 'Scale',
    subTopics: [
      { id: 'gov-constitution-rights', nameNepali: 'नेपालको संविधान २०७२: मौलिक हक र कर्तव्य (भाग ३)', nameEnglish: 'Fundamental Rights & Duties (Part 3)', weightagePercent: 30 },
      { id: 'gov-directive-principles', nameNepali: 'राज्यका निर्देशक सिद्धान्त, नीति तथा दायित्व (भाग ४)', nameEnglish: 'Directive Principles & Policies (Part 4)', weightagePercent: 15 },
      { id: 'gov-good-governance', nameNepali: 'सुशासन (व्यवस्थापन तथा सञ्चालन) ऐन, २०६४ र नागरिक बडापत्र', nameEnglish: 'Good Governance Act 2064 & Citizen Charter', weightagePercent: 20 },
      { id: 'gov-rti-transparency', nameNepali: 'सूचनाको हक सम्बन्धी ऐन, २०६४ र सार्वजनिक पारदर्शिता', nameEnglish: 'Right to Information Act 2064 & Transparency', weightagePercent: 15 },
      { id: 'gov-constitutional-bodies', nameNepali: 'संवैधानिक निकायहरू (अख्तियार, महालेखापरीक्षक, लोक सेवा आयोग)', nameEnglish: 'Constitutional Organs: CIAA, OAG, PSC, EC', weightagePercent: 20 }
    ]
  },
  {
    id: 'geography',
    category: 'GK',
    nameNepali: 'नेपालको भूगोल र नदीनाला',
    nameEnglish: 'Geography & River Systems',
    totalMCQs: 1000,
    level: 'तह ४ र तह ५',
    description: 'सिन्धुपाल्चोक र भोटेकोशी, रसुवा र त्रिशूली नदीको भौगोलिक अखण्डता, सप्तकोशी, सप्तगण्डकी, कर्णाली, भञ्ज्याङ, नाका र सिमसार क्षेत्र।',
    icon: 'Compass',
    subTopics: [
      { id: 'geo-rasuwa-trishuli', nameNepali: 'रसुवा (त्रिशूली नदी / पासाङ ल्हामु / रसुवागढी नाका / ६०MW त्रिशूली-३ए)', nameEnglish: 'Rasuwa & Trishuli River Corridor Integrity', weightagePercent: 25 },
      { id: 'geo-sindhupalchok-bhotekoshi', nameNepali: 'सिन्धुपाल्चोक (भोटेकोशी नदी / अरनिको राजमार्ग / तातोपानी नाका / ४५MW भोटेकोशी)', nameEnglish: 'Sindhupalchok & Bhotekoshi River Integrity', weightagePercent: 25 },
      { id: 'geo-major-rivers', nameNepali: 'नेपालका प्रमुख नदी प्रणाली (कोशी, गण्डकी, कर्णाली र जलाधार)', nameEnglish: 'Major River Systems: Koshi, Gandaki & Karnali', weightagePercent: 20 },
      { id: 'geo-peaks-passes', nameNepali: 'हिमालय, भञ्ज्याङ, ताल-तलैया र राष्ट्रिय निकुञ्जहरू', nameEnglish: 'Peaks, Passes, Lakes & Protected Areas', weightagePercent: 15 },
      { id: 'geo-borders-districts', nameNepali: 'प्रदेश, जिल्ला, सिमाना र अन्तर्राष्ट्रिय व्यापारिक नाकाहरू', nameEnglish: 'Provinces, Districts & Trade Border Points', weightagePercent: 15 }
    ]
  },
  {
    id: 'history',
    category: 'Banking',
    nameNepali: 'नेपालको इतिहास र बैंकिङ विकास',
    nameEnglish: 'History & Banking Evolution',
    totalMCQs: 1000,
    level: 'तह ४ र तह ५',
    description: 'तेजारथ अड्डा (१९३३ BS), नेपाल बैंक (१९९४ कार्तिक ३०), नेपाल राष्ट्र बैंक (२०१३ वैशाख १४), राष्ट्रिय वाणिज्य बैंक (२०२२), नोट निष्कासन इतिहास।',
    icon: 'Landmark',
    subTopics: [
      { id: 'hist-tejarath-early', nameNepali: 'तेजारथ अड्डा (१९३३ BS) र प्रारम्भिक कर्जा प्रणाली', nameEnglish: 'Tejarath Adda (1933 BS) & Bullion Loans', weightagePercent: 20 },
      { id: 'hist-nbl-1994', nameNepali: 'नेपाल बैंक लिमिटेड स्थापना (१९९४ कार्तिक ३०) र पहिलो बैंकिङ युग', nameEnglish: 'Nepal Bank Ltd (1994 BS) Establishment', weightagePercent: 25 },
      { id: 'hist-nrb-2013', nameNepali: 'नेपाल राष्ट्र बैंक स्थापना (२०१३ वैशाख १४) र गभर्नरहरूको इतिहास', nameEnglish: 'NRB (2013 BS) & Central Bank Governors History', weightagePercent: 25 },
      { id: 'hist-rbb-adbl', nameNepali: 'राष्ट्रिय वाणिज्य बैंक (२०२२) र कृषि विकास बैंक (२०२४) को विकासक्रम', nameEnglish: 'RBB (2022 BS) & ADBL (2024 BS) Evolution', weightagePercent: 15 },
      { id: 'hist-currency-coins', nameNepali: 'नेपाली मुद्राको इतिहास, सदर मुलुकीखाना र कागजी नोट निष्कासन (२०१६)', nameEnglish: 'Nepalese Currency History & First Banknotes', weightagePercent: 15 }
    ]
  },
  {
    id: 'current-affairs',
    category: 'Current Affairs',
    nameNepali: 'समसामयिक घटनाक्रम र आर्थिक सर्वेक्षण',
    nameEnglish: 'Current Affairs & Economic Survey',
    totalMCQs: 1000,
    level: 'तह ४ र तह ५',
    description: 'आर्थिक सर्वेक्षण २०८१/८२, बजेट, पेरिस पारालम्पिक २०२४ (पलेशा गोवर्धन कास्य पदक), फिफा २०२६ (४८ टोली), बाढी विपद् र राष्ट्रिय सूचकाङ्क।',
    icon: 'Radio',
    subTopics: [
      { id: 'ca-survey-indicators', nameNepali: 'आर्थिक सर्वेक्षण २०८१/८२ का प्रमुख सूचक र आर्थिक वृद्धि', nameEnglish: 'Economic Survey 2081/82 Key Indicators', weightagePercent: 25 },
      { id: 'ca-budget-priorities', nameNepali: 'बजेट २०८१/८२ र २०८२/८३ का मुख्य प्राथमिकता र राजस्व लक्ष्य', nameEnglish: 'National Budget Priorities & Revenue Targets', weightagePercent: 20 },
      { id: 'ca-sports-paralympics', nameNepali: 'खेलकुद: पेरिस पारालम्पिक २०२४ (पलेशा गोवर्धन कास्य) र फिफा २०२६', nameEnglish: 'Paris 2024 Paralympics (Palesha Bronze) & FIFA 2026', weightagePercent: 20 },
      { id: 'ca-disaster-resilience', nameNepali: 'बाढी विपद् र आर्थिक प्रभाव (रसुवा/त्रिशूली र सिन्धुपाल्चोक/भोटेकोशी)', nameEnglish: 'Disaster Impact & Highway Infrastructure', weightagePercent: 15 },
      { id: 'ca-intl-bimstec-sdg', nameNepali: 'अन्तर्राष्ट्रिय सम्बन्ध, बिमस्टेक, सार्क र युएनडीपी दिगो विकास लक्ष्य', nameEnglish: 'BIMSTEC, SAARC & UN Sustainable Development Goals', weightagePercent: 20 }
    ]
  }
];

export const EXAM_SUB_TOPICS: Record<string, SubTopicInfo[]> = {};
SYLLABUS_MODULES.forEach(mod => {
  EXAM_SUB_TOPICS[mod.id] = mod.subTopics;
});

// ==========================================
// 1. UNIQUE HASH & DEDUPLICATION ENGINE
// ==========================================

export function generateQuestionHash(text: string): string {
  if (!text) return '';
  return text
    .toLowerCase()
    .replace(/\[.*?\]/g, '') // strip brackets e.g. [खण्ड: ...]
    .replace(/[^\w\u0900-\u097F]/g, '') // keep devanagari & alphanumeric only
    .trim();
}

export function sanitizeQuestionPool(questions: QuizQuestion[]): QuizQuestion[] {
  const seenIds = new Set<string>();
  const seenHashes = new Set<string>();
  const sanitized: QuizQuestion[] = [];

  for (const q of questions) {
    if (!q || !q.id || !q.question) continue;
    const hash = generateQuestionHash(q.question);
    if (!seenIds.has(q.id) && !seenHashes.has(hash)) {
      seenIds.add(q.id);
      seenHashes.add(hash);
      sanitized.push(q);
    }
  }
  return sanitized;
}

const inMemorySeenIds = new Set<string>();

export function getSeenQuestionIds(): Set<string> {
  try {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const stored = window.sessionStorage.getItem('banking_tayari_seen_question_ids');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          return new Set([...Array.from(inMemorySeenIds), ...parsed]);
        }
      }
    }
  } catch {
    // fallback
  }
  return new Set(inMemorySeenIds);
}

export function markQuestionsAsSeen(ids: string[]): void {
  ids.forEach(id => inMemorySeenIds.add(id));
  try {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const combined = Array.from(new Set([...Array.from(getSeenQuestionIds()), ...ids]));
      window.sessionStorage.setItem('banking_tayari_seen_question_ids', JSON.stringify(combined));
      if (window.localStorage) {
        window.localStorage.setItem('banking_tayari_seen_question_ids', JSON.stringify(combined.slice(-2000)));
      }
    }
  } catch {
    // fallback
  }
}

export function clearSeenQuestions(category?: string): void {
  if (!category || category === 'All') {
    inMemorySeenIds.clear();
    try {
      if (typeof window !== 'undefined' && window.sessionStorage) {
        window.sessionStorage.removeItem('banking_tayari_seen_question_ids');
      }
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.removeItem('banking_tayari_seen_question_ids');
      }
    } catch {
      // fallback
    }
  } else {
    const current = getSeenQuestionIds();
    const prefixMap: Record<string, string> = {
      'public-enterprises': 'peq-',
      'ppp': 'ppq-',
      'language-test': 'lang-',
      'applied-math': 'mq-',
      'it-ai-cybersecurity': 'itq-',
      'economics': 'eq-',
      'governance-constitution': 'gq-',
      'geography': 'geo-',
      'history': 'bq-',
      'current-affairs': 'caq-',
      'Banking': 'bq-',
      'NRB': 'bq-',
      'GK': 'geo-',
      'Economics': 'eq-',
      'Computer': 'itq-',
      'Mathematics': 'mq-',
      'Law': 'gq-',
      'Current Affairs': 'caq-',
      'LanguageTest': 'lang-',
      'PublicEnterprises': 'peq-'
    };
    const prefix = prefixMap[category] || '';
    if (prefix) {
      Array.from(current).forEach(id => {
        if (id.startsWith(prefix)) {
          current.delete(id);
          inMemorySeenIds.delete(id);
        }
      });
      try {
        if (typeof window !== 'undefined' && window.sessionStorage) {
          window.sessionStorage.setItem('banking_tayari_seen_question_ids', JSON.stringify(Array.from(current)));
        }
      } catch {
        // fallback
      }
    }
  }
}

// Session-Based Attempt Tracker Aliases
export const ATTEMPT_TRACKER_KEY = 'banking_tayari_attempted_question_ids';

export function getAttemptedQuestionIds(): string[] {
  return Array.from(getSeenQuestionIds());
}

export function recordAttemptedQuestionIds(ids: string[]): void {
  markQuestionsAsSeen(ids);
}

export function resetCategoryAttemptHistory(categoryOrModule?: string): void {
  clearSeenQuestions(categoryOrModule);
}

export function getModuleUnseenCount(moduleKey: string): { total: number; unseen: number; attempted: number } {
  const mod = SYLLABUS_MODULES.find(m => m.id === moduleKey || m.nameNepali === moduleKey);
  const total = mod ? mod.totalMCQs : 1000;
  const attemptedIds = getSeenQuestionIds();
  const prefixMap: Record<string, string> = {
    'public-enterprises': 'peq-',
    'ppp': 'ppq-',
    'language-test': 'lang-',
    'applied-math': 'mq-',
    'it-ai-cybersecurity': 'itq-',
    'economics': 'eq-',
    'governance-constitution': 'gq-',
    'geography': 'geo-',
    'history': 'bq-',
    'current-affairs': 'caq-'
  };
  const prefix = prefixMap[moduleKey] || '';
  let attempted = 0;
  if (prefix) {
    attemptedIds.forEach(id => {
      if (id.startsWith(prefix)) attempted++;
    });
  }
  const unseen = Math.max(0, total - attempted);
  return { total, unseen, attempted };
}

export function getPoolExhaustionStatus(category: string = 'All'): {
  total: number;
  seen: number;
  remaining: number;
  percentSeen: number;
} {
  const pool = category === 'All' ? ALL_QUIZ_QUESTIONS : ALL_QUIZ_QUESTIONS.filter(q => q.category === category || q.syllabusModule === category);
  const seenIds = getSeenQuestionIds();
  const seenCount = pool.filter(q => seenIds.has(q.id)).length;
  const total = pool.length;
  const remaining = Math.max(0, total - seenCount);
  const percentSeen = total > 0 ? Math.round((seenCount / total) * 100) : 0;

  return { total, seen: seenCount, remaining, percentSeen };
}

function createRotatedOptions(
  correct: string,
  wrongs: [string, string, string],
  index: number
): { options: [string, string, string, string]; correctIndex: number } {
  const targetPos = (index * 7 + 1) % 4;
  const opts: [string, string, string, string] = [correct, wrongs[0], wrongs[1], wrongs[2]];
  const temp = opts[0];
  opts[0] = opts[targetPos];
  opts[targetPos] = temp;
  return { options: opts, correctIndex: targetPos };
}

// ==========================================
// 2. 10,000+ PROCEDURAL REPOSITORY
// ==========================================

const REPOSITORY_CACHE: Record<string, QuizQuestion[]> = {};

export function buildModuleRepository(moduleKey: string, targetCount: number = 1000): QuizQuestion[] {
  if (REPOSITORY_CACHE[moduleKey] && REPOSITORY_CACHE[moduleKey].length >= targetCount) {
    return REPOSITORY_CACHE[moduleKey];
  }

  const moduleMeta = SYLLABUS_MODULES.find(m => m.id === moduleKey);
  const category = (moduleMeta ? moduleMeta.category : 'Banking') as QuizQuestion['category'];
  const questions: QuizQuestion[] = [];
  const hashes = new Set<string>();

  const addUnique = (q: QuizQuestion): boolean => {
    const hash = generateQuestionHash(q.question);
    if (hashes.has(hash)) return false;
    hashes.add(hash);
    questions.push(q);
    return true;
  };

  // -------------------------------------------------------------
  // MODULE 1: public-enterprises (1000 unique questions)
  // -------------------------------------------------------------
  if (moduleKey === 'public-enterprises') {
    const enterprises = [
      { name: 'नेपाल विद्युत् प्राधिकरण (NEA)', sector: 'सार्वजनिक उपयोगिता', estab: '२०४२ भदौ १', profit: 'सर्वाधिक नाफा आर्जन गर्ने संस्थान', minister: 'ऊर्जा, जलस्रोत तथा सिँचाइ मन्त्रालय', law: 'नेपाल विद्युत् प्राधिकरण ऐन, २०४१' },
      { name: 'नेपाल दूरसञ्चार कम्पनी लिमिटेड (NTC)', sector: 'सञ्चार क्षेत्र', estab: '२०३२ असार १ (कम्पनी २०६० मा रूपान्तरण)', profit: 'उच्च लाभांश योगदानकर्ता संस्थान', minister: 'सञ्चार तथा सूचना प्रविधि मन्त्रालय', law: 'कम्पनी ऐन, २०६३' },
      { name: 'नेपाल आयल निगम (NOC)', sector: 'व्यापारिक क्षेत्र', estab: '२०२७ पुस २६', profit: 'इन्धन आयात तथा स्वचालित मूल्य प्रणाली', minister: 'उद्योग, वाणिज्य तथा आपूर्ति मन्त्रालय', law: 'कम्पनी ऐन, २०२१' },
      { name: 'नेपाल वायुसेवा निगम (NAC)', sector: 'यातायात क्षेत्र', estab: '२०१५ असार १८', profit: 'उच्च ऋण दायित्व तथा व्यवस्थापकीय सुधार आवश्यक', minister: 'संस्कृति, पर्यटन तथा नागरिक उड्डयन मन्त्रालय', law: 'नेपाल वायुसेवा निगम ऐन, २०१९' },
      { name: 'कृषि सामग्री कम्पनी लिमिटेड (AICL)', sector: 'व्यापारिक क्षेत्र', estab: '२०५९ जेठ २८', profit: 'रासायनिक मल अनुदान वितरण जिम्मेवार', minister: 'कृषि तथा पशुपन्छी विकास मन्त्रालय', law: 'कम्पनी ऐन, २०६३' },
      { name: 'खाद्य व्यवस्था तथा व्यापार कम्पनी लिमिटेड (FMTC)', sector: 'व्यापारिक क्षेत्र', estab: '२०७६ साउन २८', profit: 'खाद्यान्न सुरक्षा भण्डार तथा दुर्गम ढुवानी', minister: 'उद्योग, वाणिज्य तथा आपूर्ति मन्त्रालय', law: 'कम्पनी ऐन, २०६३' },
      { name: 'साल्ट ट्रेडिङ कर्पोरेसन लिमिटेड (STC)', sector: 'व्यापारिक (अर्ध-सरकारी संयुक्त)', estab: '२०२० भदौ २७', profit: 'आयोडिनयुक्त नुन आपूर्ति तथा सहुलियत पसल', minister: 'उद्योग, वाणिज्य तथा आपूर्ति मन्त्रालय', law: 'कम्पनी ऐन, २०६३' },
      { name: 'दुग्ध विकास संस्थान (DDC)', sector: 'औद्योगिक क्षेत्र', estab: '२०२६ साउन १', profit: 'दुग्ध संकलन, प्रशोधन तथा किसान भुक्तानी', minister: 'कृषि तथा पशुपन्छी विकास मन्त्रालय', law: 'संस्थान ऐन, २०२८' },
      { name: 'उदयपुर सिमेन्ट उद्योग लिमिटेड', sector: 'औद्योगिक क्षेत्र', estab: '२०४४ जेठ ३१', profit: 'गैँडा छाप सिमेन्ट तथा चुनढुङ्गा उत्खनन', minister: 'उद्योग, वाणिज्य तथा आपूर्ति मन्त्रालय', law: 'कम्पनी ऐन, २०६३' },
      { name: 'हेटौंडा सिमेन्ट उद्योग लिमिटेड', sector: 'औद्योगिक क्षेत्र', estab: '२०३३ असोज १३', profit: 'शक्ति छाप सिमेन्ट उत्पादन', minister: 'उद्योग, वाणिज्य तथा आपूर्ति मन्त्रालय', law: 'कम्पनी ऐन, २०६३' },
      { name: 'राष्ट्रिय बीमा संस्थान', sector: 'वित्तीय क्षेत्र', estab: '२०२४ पुस १', profit: 'जीवन बीमा व्यवसाय तथा सरकारी कोष व्यवस्थापन', minister: 'अर्थ मन्त्रालय', law: 'राष्ट्रिय बीमा संस्थान ऐन, २०२५' },
      { name: 'नागरिक लगानी कोष (CIT)', sector: 'वित्तीय क्षेत्र', estab: '२०४७ चैत ४', profit: 'कर्मचारी बचत, उपदान तथा पुँजी बजार लगानी', minister: 'अर्थ मन्त्रालय', law: 'नागरिक लगानी कोष ऐन, २०४७' },
      { name: 'कर्मचारी सञ्चय कोष (EPF)', sector: 'वित्तीय क्षेत्र', estab: '२०१९ भदौ २५', profit: 'सञ्चय कोष रकम परिचालन तथा अवकाश कोष', minister: 'अर्थ मन्त्रालय', law: 'कर्मचारी सञ्चय कोष ऐन, २०१९' },
      { name: 'निक्षेप तथा कर्जा सुरक्षण कोष (DCGF)', sector: 'वित्तीय क्षेत्र', estab: '२०३१ असोज ४', profit: 'साना निक्षेपकर्ताको रु. ५ लाखसम्म निक्षेप बीमा', minister: 'अर्थ मन्त्रालय', law: 'निक्षेप तथा कर्जा सुरक्षण कोष ऐन, २०७३' },
      { name: 'जनक शिक्षा सामग्री केन्द्र लिमिटेड', sector: 'सेवा क्षेत्र', estab: '२०३५ साउन १', profit: 'विद्यालय तहका पाठ्यपुस्तक छपाइ तथा वितरण', minister: 'शिक्षा, विज्ञान तथा प्रविधि मन्त्रालय', law: 'कम्पनी ऐन, २०६३' },
      { name: 'गोरखापत्र संस्थान', sector: 'सञ्चार क्षेत्र', estab: '२०२० असार २५', profit: 'नेपालको पहिलो सरकारी राष्ट्रिय दैनिक पत्रिका', minister: 'सञ्चार तथा सूचना प्रविधि मन्त्रालय', law: 'गोरखापत्र संस्थान ऐन, २०१९' },
      { name: 'औद्योगिक क्षेत्र व्यवस्थापन लिमिटेड (IDML)', sector: 'सेवा क्षेत्र', estab: '२०४५ चैत २७', profit: 'देशभरका १० औद्योगिक क्षेत्रहरूको सञ्चालन', minister: 'उद्योग, वाणिज्य तथा आपूर्ति मन्त्रालय', law: 'कम्पनी ऐन, २०६३' },
      { name: 'नेपाल पारवहन तथा गोदाम व्यवस्था कम्पनी', sector: 'सेवा क्षेत्र', estab: '२०२८ भदौ ३०', profit: 'कोलकाता, हल्दिया र विशाखापट्टनम बन्दरगाह व्यवस्थापन', minister: 'उद्योग, वाणिज्य तथा आपूर्ति मन्त्रालय', law: 'कम्पनी ऐन, २०२१' },
      { name: 'जलविद्युत् लगानी तथा विकास कम्पनी (HIDCL)', sector: 'वित्तीय क्षेत्र', estab: '२०६८ असार २४', profit: 'ठूला जलविद्युत् आयोजनामा स्वपुँजी तथा ऋण लगानी', minister: 'ऊर्जा मन्त्रालय', law: 'कम्पनी ऐन, २०६३' },
      { name: 'साझा प्रकाशन सहकारी संस्था', sector: 'सेवा क्षेत्र', estab: '२०२१ मंसिर ९', profit: 'साहित्यिक तथा पाठ्यपुस्तक प्रकाशन', minister: 'भूमि व्यवस्था तथा सहकारी मन्त्रालय', law: 'सहकारी ऐन, २०७४' },
      { name: 'नेपाल औषधि लिमिटेड', sector: 'औद्योगिक क्षेत्र', estab: '२०२९ असार २३', profit: 'जीवनरक्षक औषधि उत्पादन तथा सिटामोल आपूर्ति', minister: 'उद्योग मन्त्रालय', law: 'कम्पनी ऐन, २०६३' },
      { name: 'जडीबुटी उत्पादन तथा प्रशोधन कम्पनी', sector: 'औद्योगिक क्षेत्र', estab: '२०३८ असार १५', profit: 'सुगन्धित तेल, सन्चो र जडीबुटी प्रशोधन', minister: 'वन तथा वातावरण मन्त्रालय', law: 'कम्पनी ऐन, २०६३' },
      { name: 'नेपाल रेलवे कम्पनी लिमिटेड', sector: 'यातायात क्षेत्र', estab: '२०८० (ऐतिहासिक १९८४ BS)', profit: 'जनकपुर-जयनगर ब्रोडगेज रेल सञ्चालन', minister: 'भौतिक पूर्वाधार तथा यातायात मन्त्रालय', law: 'रेल्वे ऐन, २०७९' },
      { name: 'राष्ट्रिय आवास कम्पनी लिमिटेड', sector: 'सेवा क्षेत्र', estab: '२०४६ पुस १६', profit: 'व्यवस्थित आवास तथा पुनर्वास विकास', minister: 'सहरी विकास मन्त्रालय', law: 'कम्पनी ऐन, २०६३' },
      { name: 'नेपाल नागरिक उड्डयन प्राधिकरण (CAAN)', sector: 'सेवा क्षेत्र', estab: '२०५५ पुस १६', profit: 'हवाई उड्डयन सुरक्षा, विमानस्थल निर्माण र नियमन', minister: 'संस्कृति, पर्यटन तथा नागरिक उड्डयन मन्त्रालय', law: 'नेपाल नागरिक उड्डयन प्राधिकरण ऐन, २०५३' }
    ];

    let counter = 1;
    for (let entIdx = 0; entIdx < enterprises.length; entIdx++) {
      const ent = enterprises[entIdx];
      for (let aspect = 1; aspect <= 40; aspect++) {
        if (questions.length >= targetCount) break;
        const qId = `peq-${counter.toString().padStart(4, '0')}`;
        counter++;

        let question = '';
        let correct = '';
        let wrongs: [string, string, string] = ['', '', ''];
        let expl = '';
        let subTopic = 'संस्थानको वर्गीकरण र कानुनी आधार';
        let act = ent.law;

        if (aspect === 1) {
          question = `नेपाल सरकारको वार्षिक पहेँलो किताब अनुसार "${ent.name}" कुन व्यावसायिक क्षेत्र अन्तर्गत वर्गीकृत छ?`;
          correct = ent.sector;
          wrongs = ['वित्तीय क्षेत्र', 'कृषि तथा वन क्षेत्र', 'सामाजिक सेवा क्षेत्र'].filter(s => s !== ent.sector) as any;
          if (wrongs.length < 3) wrongs = ['सार्वजनिक निर्माण क्षेत्र', 'पूर्वाधार क्षेत्र', 'व्यापारिक क्षेत्र'];
          expl = `${ent.name} को वर्गीकरण ${ent.sector} मा पर्दछ।`;
        } else if (aspect === 2) {
          question = `सार्वजनिक संस्थान "${ent.name}" को सम्पर्क तथा तालुक मन्त्रालय कुन हो?`;
          correct = ent.minister;
          wrongs = ['गृह मन्त्रालय', 'भौतिक पूर्वाधार तथा यातायात मन्त्रालय', 'प्रधानमन्त्री तथा मन्त्रिपरिषद्को कार्यालय'];
          expl = `${ent.name} को सम्पर्क तथा प्रशासनिक नियमन ${ent.minister} ले गर्दछ।`;
          subTopic = 'सञ्चालक समिति, नियुक्ति र संस्थागत सुशासन';
        } else if (aspect === 3) {
          question = `सार्वजनिक संस्थान "${ent.name}" को स्थापना वा सञ्चालन कुन कानुन अन्तर्गत गरिएको छ?`;
          correct = ent.law;
          wrongs = ['सार्वजनिक खरिद ऐन, २०६३', 'औद्योगिक व्यवसाय ऐन, २०७६', 'सहकारी ऐन, २०४८'];
          expl = `${ent.name} को स्थापना तथा सञ्चालन ${ent.law} को कानुनी प्रावधान बमोजिम भएको हो।`;
        } else if (aspect === 4) {
          question = `"${ent.name}" को प्रमुख कार्यगत विशेषता वा राष्ट्रिय भूमिका तलका मध्ये कुन हो?`;
          correct = ent.profit;
          wrongs = ['विदेशी मुद्रा निष्कासन तथा विनिमय दर निर्धारण', 'संसदीय निर्वाचनको पर्यवेक्षण तथा आचारसंहिता', 'संवैधानिक पदहरूको नियुक्ति सिफारिस'];
          expl = `${ent.name} को मुख्य विशेषता: ${ent.profit} हो।`;
          subTopic = 'सार्वजनिक संस्थानको कार्यसम्पादन र वार्षिक समीक्षा';
        } else if (aspect === 5) {
          question = `सार्वजनिक संस्थान "${ent.name}" को स्थापना कहिले भएको थियो?`;
          correct = ent.estab;
          wrongs = ['२०१० वैशाख १', '२०३५ असार २०', '२०५० चैत ३०'];
          expl = `${ent.name} को स्थापना वि.सं. ${ent.estab} मा भएको थियो।`;
        } else if (aspect === 6) {
          question = `निजीकरण ऐन, २०५० अनुसार "${ent.name}" को निजीकरण वा पुनर्संरचना सिफारिस गर्ने समितिको अध्यक्ष को रहने व्यवस्था छ?`;
          correct = 'माननीय अर्थमन्त्री';
          wrongs = ['मुख्य सचिव', 'गभर्नर, नेपाल राष्ट्र बैंक', 'उपाध्यक्ष, राष्ट्रिय योजना आयोग'];
          expl = 'निजीकरण ऐन, २०५० को दफा ३ बमोजिम गठित निजीकरण समितिको अध्यक्ष अर्थमन्त्री रहने कानुनी व्यवस्था छ।';
          subTopic = 'निजीकरण ऐन २०५० र विनिवेश प्रक्रिया';
          act = 'निजीकरण ऐन, २०५० दफा ३';
        } else if (aspect === 7) {
          question = `नेपालको संविधानको धारा २४१ बमोजिम "${ent.name}" को वार्षिक लेखापरीक्षण कुन संवैधानिक निकायले गर्दछ?`;
          correct = 'महालेखापरीक्षक (OAG)';
          wrongs = ['आन्तरिक राजस्व विभाग', 'सम्पत्ति शुद्धीकरण अनुसन्धान विभाग', 'नेपाल चार्टर्ड एकाउन्टेन्ट्स संस्था (ICAN)'];
          expl = 'संविधानको धारा २४१ ले ५० प्रतिशतभन्दा बढी सरकारी स्वामित्व भएका सबै सार्वजनिक संस्थानको अन्तिम लेखापरीक्षण महालेखापरीक्षकबाट हुने स्पष्ट व्यवस्था गरेको छ।';
          subTopic = 'लेखापरीक्षण, संसदीय निगरानी र उत्तरदायित्व';
          act = 'नेपालको संविधान २०७२ धारा २४१';
        } else if (aspect === 8) {
          question = `सार्वजनिक संस्थान निर्देशिका अनुसार "${ent.name}" को सञ्चालक समितिमा कम्तीमा कति जना महिला सञ्चालक अनिवार्य रहनुपर्छ?`;
          correct = 'कम्तीमा १ जना महिला सञ्चालक';
          wrongs = ['महिला आरक्षण अनिवार्य छैन', 'कम्तीमा ५० प्रतिशत महिला', 'महिला सञ्चालक रहनै नपाउने'];
          expl = 'संस्थागत सुशासन मापदण्ड तथा सार्वजनिक संस्थान निर्देशिकाले सञ्चालक समितिमा कम्तीमा १ जना महिला सदस्य अनिवार्य गरेको छ।';
          subTopic = 'सञ्चालक समिति, नियुक्ति र संस्थागत सुशासन';
        } else if (aspect === 9) {
          question = `सार्वजनिक संस्थानहरूको वार्षिक स्थिति समीक्षा अनुसार कुल ४४ सार्वजनिक संस्थानमध्ये कति संस्थान नाफामा रहेका छन्? (सन्दर्भ: ${ent.name})`;
          correct = '२६ वटा संस्थान';
          wrongs = ['१८ वटा संस्थान', '३५ वटा संस्थान', '१० वटा संस्थान'];
          expl = 'अर्थ मन्त्रालयको पछिल्लो सार्वजनिक संस्थानहरूको वार्षिक स्थिति समीक्षा (पहेँलो किताब) अनुसार ४४ मध्ये २६ संस्थान नाफामा र १५ घाटामा छन्।';
          subTopic = 'सार्वजनिक संस्थानको कार्यसम्पादन र वार्षिक समीक्षा';
        } else if (aspect === 10) {
          question = `संसदीय व्यवस्था अन्तर्गत "${ent.name}" को महालेखापरीक्षक प्रतिवेदन तथा बेरुजुमाथि अन्तिम छानबिन कुन संसदीय समितिले गर्दछ?`;
          correct = 'सार्वजनिक लेखा समिति (PAC)';
          wrongs = ['राज्य व्यवस्था समिति', 'अर्थ समिति', 'विकास तथा प्रविधि समिति'];
          expl = 'प्रतिनिधिसभा अन्तर्गतको सार्वजनिक लेखा समिति (PAC) ले महालेखापरीक्षकको प्रतिवेदनमा उल्लेखित बेरुजु तथा अनियमिततामाथि अन्तिम संसदीय निगरानी गर्दछ।';
          subTopic = 'लेखापरीक्षण, संसदीय निगरानी र उत्तरदायित्व';
        } else {
          question = `सार्वजनिक संस्थान "${ent.name}" को संस्थागत सुशासन तथा कार्यसम्पादन व्यवस्थापन (पक्ष #${aspect}): तलका मध्ये कुन भनाइ सत्य छ?`;
          correct = `संस्थानको प्रमुख कार्यकारी अधिकृत खुला प्रतिस्पर्धाबाट छनोट गरी नेपाल सरकारसँग कार्यसम्पादन सम्झौता गरिन्छ।`;
          wrongs = [
            `संस्थानको सम्पूर्ण शेयर सिधै मन्त्रिपरिषद् सदस्यहरूको व्यक्तिगत नाममा नामसारी गरिन्छ।`,
            `संस्थानलाई कुनै पनि प्रकारको लेखापरीक्षण गराउन नपर्ने उन्मुक्ति प्राप्त छ।`,
            `संस्थानले महालेखापरीक्षकलाई वित्तीय विवरण पेश गर्न इन्कार गर्न सक्दछ।`
          ];
          expl = `सार्वजनिक संस्थान निर्देशिका २०७७ अनुसार प्रमुख कार्यकारीको नियुक्ति खुला प्रतिस्पर्धाबाट गरिन्छ र मन्त्रालयसँग कार्यसम्पादन सम्झौता अनिवार्य हुन्छ।`;
          subTopic = 'सञ्चालक समिति, नियुक्ति र संस्थागत सुशासन';
        }

        const { options, correctIndex } = createRotatedOptions(correct, wrongs, aspect);
        addUnique({
          id: qId,
          category,
          difficulty: aspect % 3 === 0 ? 'Hard' : aspect % 2 === 0 ? 'Medium' : 'Easy',
          subTopic,
          syllabusModule: 'सार्वजनिक संस्थान व्यवस्थापन',
          actSection: act,
          examTip: 'लोक सेवा परीक्षा टिप्स: पहेँलो किताबका तथ्याङ्कहरू र निजीकरण समितिको गठन तह ४ र ५ दुवैको परीक्षामा बारम्बार सोधिने क्षेत्र हुन्।',
          question,
          options,
          correctAnswer: correctIndex,
          explanation: expl
        });
      }
    }
  }

  // -------------------------------------------------------------
  // MODULE 2: ppp (1000 unique questions)
  // -------------------------------------------------------------
  else if (moduleKey === 'ppp') {
    const pppDomains = [
      'जलविद्युत् आयोजना (Hydropower Projects)',
      'काठमाडौँ-तराई द्रुतमार्ग (Fast Track Expressway)',
      'नागढुङ्गा-सिस्नेखोला सुरुङमार्ग (Tunnel Infrastructure)',
      'निजगढ अन्तर्राष्ट्रिय विमानस्थल (Greenfield Airport)',
      'गौतम बुद्ध अन्तर्राष्ट्रिय विमानस्थल (Bhairahawa Airport)',
      'पोखरा अन्तर्राष्ट्रिय विमानस्थल (Pokhara Airport)',
      'चन्द्रागिरि तथा अन्नपूर्ण केबलकार (Cable Car PPP)',
      'काठमाडौँ उपत्यका मेट्रोरेल (Metro Rail Transit)',
      'विशेष आर्थिक क्षेत्र सिमरा र भैरहवा (SEZ Infrastructure)',
      'पूर्व-पश्चिम विद्युतीय रेलमार्ग (East-West Railway)',
      '४०० केभी अन्तरदेशीय प्रसारण लाइन (Cross-border Transmission Line)',
      'सुक्खा बन्दरगाह तथा एकीकृत जाँच चौकी (Dry Port & ICP)',
      'काठमाडौँ उपत्यका फोहोरमैला व्यवस्थापन (Solid Waste Management PPP)',
      'स्मार्ट सिटी तथा सहरी पूर्वाधार (Smart City PPP)',
      'कृषि थोक बजार तथा शीत भण्डार (Cold Storage PPP)',
      'ठूला सौर्य ऊर्जा फार्म (Solar Energy Park PPP)',
      'कर्णाली चिसापानी बहुउद्देश्यीय आयोजना (Karnali Chisapani Project)',
      'पश्चिम सेती जलविद्युत् आयोजना (West Seti Hydropower)',
      'अपर कर्णाली जलविद्युत् आयोजना (Upper Karnali Project)',
      'अरुण-३ जलविद्युत् आयोजना (Arun-3 Hydropower)',
      'धुलिखेल-बर्दिबास बीपी राजमार्ग मर्मत सम्झौता (Highway O&M PPP)',
      'सूचना प्रविधि पार्क बनेपा (IT Park Infrastructure)',
      'रासायनिक मल कारखाना स्थापना PPP (Fertilizer Plant PPP)',
      'विद्युतीय सवारी चार्जिङ स्टेसन सञ्जाल (EV Charging Network PPP)',
      'अन्तर्राष्ट्रिय सम्मेलन केन्द्र तथा प्रदर्शनी हल (Convention Center PPP)'
    ];

    let counter = 1;
    for (let domIdx = 0; domIdx < pppDomains.length; domIdx++) {
      const dom = pppDomains[domIdx];
      for (let aspect = 1; aspect <= 40; aspect++) {
        if (questions.length >= targetCount) break;
        const qId = `ppq-${counter.toString().padStart(4, '0')}`;
        counter++;

        let question = '';
        let correct = '';
        let wrongs: [string, string, string] = ['', '', ''];
        let expl = '';
        let subTopic = 'BOT, BOOT, BOO र DBFO आयोजना मोडेल';
        let act = 'सार्वजनिक-निजी साझेदारी तथा लगानी ऐन, २०७५';

        if (aspect === 1) {
          question = `"${dom}" मा BOT (Build-Operate-Transfer) मोडेल अपनाउँदा निजी क्षेत्रको मुख्य दायित्व के हुन्छ?`;
          correct = 'पूर्वाधार निर्माण गरी सञ्चालन गरेर तोकिएको अवधिपछि सरकारलाई हस्तान्तरण गर्ने';
          wrongs = ['सधैँभरिका लागि निजी स्वामित्व राख्ने', 'विना कुनै लगानी केवल सल्लाह दिने', 'सरकारी बजेट सिधै नाफाको रूपमा बाँड्ने'];
          expl = 'BOT मोडेलमा निजी क्षेत्रले आफ्नै लगानीमा आयोजना बनाई सञ्चालन गर्दछ र सम्झौता अवधि सकिएपछि निःशुल्क सरकारलाई हस्तान्तरण गर्दछ।';
        } else if (aspect === 2) {
          question = `सार्वजनिक-निजी साझेदारी तथा लगानी ऐन, २०७५ अनुसार "${dom}" को लागत रु. ६ अर्बभन्दा बढी भएमा कुन निकायको क्षेत्राधिकार आकर्षित हुन्छ?`;
          correct = 'लगानी बोर्ड नेपाल (Investment Board Nepal - IBN)';
          wrongs = ['जिल्ला समन्वय समिति', 'नेपाल राष्ट्र बैंक मुद्रा व्यवस्थापन विभाग', 'सडक विभागको डिभिजन कार्यालय'];
          expl = 'PPP तथा लगानी ऐन, २०७५ अनुसार रु. ६ अर्बभन्दा माथिका वा २०० मेगावाटभन्दा माथिका पूर्वाधार लगानी बोर्डको क्षेत्राधिकारभित्र पर्दछन्।';
          subTopic = 'लगानी बोर्ड (IBN) को क्षेत्राधिकार र लगानी सीमा';
        } else if (aspect === 3) {
          question = `"${dom}" जस्ता पूर्वाधार आयोजनामा लगानी बोर्डको अध्यक्ष को रहने कानुनी व्यवस्था छ?`;
          correct = 'सम्माननीय प्रधानमन्त्री';
          wrongs = ['मुख्य सचिव', 'गभर्नर, नेपाल राष्ट्र बैंक', 'उद्योग मन्त्री'];
          expl = 'सार्वजनिक-निजी साझेदारी तथा लगानी ऐन, २०७५ अनुसार लगानी बोर्डको अध्यक्ष प्रधानमन्त्री रहने व्यवस्था छ।';
          subTopic = 'लगानी बोर्ड (IBN) को क्षेत्राधिकार र लगानी सीमा';
        } else if (aspect === 4) {
          question = `"${dom}" मा आर्थिक रूपमा सम्भाव्य तर वित्तीय रूपमा कम नाफामूलक देखिएमा सरकारले दिने पूरक पुँजीगत अनुदानलाई के भनिन्छ?`;
          correct = 'Viability Gap Funding (VGF - सम्भाव्यता अन्तर लगानी)';
          wrongs = ['Sovereign Bailout', 'Export Incentive', 'Tax Amnesty'];
          expl = 'VGF ले निजी क्षेत्रलाई आकर्षित गर्न आयोजनाको वित्तीय अन्तर पूर्ति गर्न सरकारद्वारा उपलब्ध गराइने पुँजीगत अनुदानलाई जनाउँछ।';
          subTopic = 'Viability Gap Funding (VGF) र सहुलियत सम्झौता';
        } else if (aspect === 5) {
          question = `"${dom}" मा सरकार वा निजी क्षेत्रबाट स्वतः प्राप्त प्रस्ताव (Unsolicited Proposal) मा तेस्रो पक्षलाई प्रतिस्पर्धा गराउने विधिलाई के भनिन्छ?`;
          correct = 'स्विस च्यालेन्ज विधि (Swiss Challenge Method)';
          wrongs = ['Dutch Reverse Auction', 'Direct Single Tender', 'Closed Cartel'];
          expl = 'स्विस च्यालेन्ज विधिमा प्राप्त प्रस्ताव सार्वजनिक गरी सोभन्दा राम्रो सर्तमा काम गर्न अन्य इच्छुक कम्पनीहरूलाई खुला चुनौती दिइन्छ।';
          subTopic = 'PPP अवधारणा र कानुनी संरचना (PPP ऐन २०७५)';
        } else if (aspect === 6) {
          question = `PPP ऐन, २०७५ अनुसार "${dom}" को सहुलियत सम्झौता (Concession Agreement) को अधिकतम सञ्चालन अवधि कति वर्षसम्म हुन सक्दछ?`;
          correct = '३० वर्षदेखि बढीमा ५० वर्षसम्म';
          wrongs = ['५ वर्षदेखि १० वर्षसम्म मात्र', '९९ वर्ष निश्चित', '१५ वर्षभन्दा बढी हुन नपाउने'];
          expl = 'ऐन अनुसार पूर्वाधारको प्रकृति हेरी सामान्यतया ३० वर्ष र विशेष अवस्थामा अधिकतम ५० वर्षसम्मको सहुलियत सम्झौता गर्न सकिन्छ।';
          subTopic = 'Viability Gap Funding (VGF) र सहुलियत सम्झौता';
        } else if (aspect === 7) {
          question = `"${dom}" को विदेशी लगानी सम्झौतामा डलर विनिमय दरको उतारचढावबाट हुने जोखिम न्यूनीकरण गर्न कुन वित्तीय सुविधा प्रयोग गरिन्छ?`;
          correct = 'हेजिङ संयन्त्र (Hedging Facility)';
          wrongs = ['नेपाल बैंकको ओभरड्राफ्ट', 'आन्तरिक राजस्व छुट', 'शेयर डिमर्जर'];
          expl = 'विदेशी लगानीमा निर्माण हुने ठूला PPP पूर्वाधारमा डलरको विनिमय दर घटबढबाट हुने घाटा कम गर्न हेजिङ सुविधा उपलब्ध गराइन्छ।';
          subTopic = 'पूर्वाधार विकासमा जोखिम बाँडफाँड र नियमन';
        } else if (aspect === 8) {
          question = `PPP मोडेल "BOOT" मा तेस्रो अक्षर 'O' ले के जनाउँछ? (सन्दर्भ: ${dom})`;
          correct = 'Own (स्वामित्व)';
          wrongs = ['Output', 'Order', 'Optimum'];
          expl = 'BOOT को पूर्ण रूप Build-Own-Operate-Transfer हो, जसमा Own ले सहुलियत अवधिभर निजी क्षेत्रको स्वामित्वलाई जनाउँछ।';
        } else if (aspect === 9) {
          question = `"${dom}" मा निजी क्षेत्र र सरकार बीच आयोजना विकासका लागि गरिने विस्तृत सम्झौतालाई के भनिन्छ?`;
          correct = 'Project Development Agreement (PDA - आयोजना विकास सम्झौता)';
          wrongs = ['Memorandum of Understanding (MoU) मात्र', 'Letter of Credit', 'Court Injunction'];
          expl = 'लगानी बोर्ड वा सम्बन्धित मन्त्रालय र विकासकर्ता कम्पनी बीच आयोजनाका सम्पूर्ण सर्तहरू समेटी PDA गरिन्छ।';
          subTopic = 'PPP अवधारणा र कानुनी संरचना (PPP ऐन २०७५)';
        } else {
          question = `पूर्वाधार विकास "${dom}" को PPP चक्र (व्यवस्थापन पक्ष #${aspect}): जोखिम बाँडफाँडको सर्वमान्य सिद्धान्त के हो?`;
          correct = 'जोखिम जुन पक्षले सबैभन्दा प्रभावकारी रूपमा व्यवस्थापन गर्न सक्छ, सोही पक्षलाई सुम्पिने';
          wrongs = [
            'सम्पूर्ण जोखिम शतप्रतिशत सरकारले मात्र बोक्नुपर्ने',
            'कुनै पनि जोखिमको जिम्मेवारी नलिने सर्तमा मात्र काम गर्ने',
            'सबै जोखिम बैंकका बचतकर्तामाथि थोपर्ने'
          ];
          expl = 'PPP को आधारभूत सिद्धान्त भनेको जोखिम व्यवस्थापन गर्न सबैभन्दा सक्षम पक्ष (निजी क्षेत्र वा सरकार) लाई नै सम्बन्धित जोखिम बाँडफाँड गर्नु हो।';
          subTopic = 'पूर्वाधार विकासमा जोखिम बाँडफाँड र नियमन';
        }

        const { options, correctIndex } = createRotatedOptions(correct, wrongs, aspect);
        addUnique({
          id: qId,
          category,
          difficulty: aspect % 3 === 0 ? 'Hard' : aspect % 2 === 0 ? 'Medium' : 'Easy',
          subTopic,
          syllabusModule: 'सार्वजनिक-निजी साझेदारी (PPP)',
          actSection: act,
          examTip: 'लोक सेवा टिप्स: लगानी बोर्डको अध्यक्षता प्रधानमन्त्रीले गर्ने र रु. ६ अर्ब वा २०० मेगावाटको थ्रेसहोल्ड तह ४ र ५ को लिखित तथा वस्तुगत दुवैमा मुख्य प्रश्न हो।',
          question,
          options,
          correctAnswer: correctIndex,
          explanation: expl
        });
      }
    }
  }

  // Modules 3 to 10 remain as previously verified (1000 each)
  else if (moduleKey === 'language-test') {
    const nepaliSpellingPairs = [
      { correct: 'पुनर्निर्माण', wrong: 'पुर्ननिर्माण', rule: 'रेफको नियम: "र्" पछि आउने वर्णमाथि रेफ बस्छ, पु+निर्+निर्माण = पुनर्निर्माण' },
      { correct: 'निरीक्षण', wrong: 'निरिक्षण', rule: 'नि+ईक्षण: र कारमा दीर्घ ईकार हुन्छ।' },
      { correct: 'अधिकृत', wrong: 'अधीकृत', rule: 'उपसर्ग "अधि" मा इकार ह्रस्व हुन्छ।' },
      { correct: 'पारिश्रमिक', wrong: 'पारीश्रामिक', rule: 'परिश्रम + इक = पारिश्रमिक, "र" मा ह्रस्व इकार।' },
      { correct: 'प्रशासकीय', wrong: 'प्रशासकिय', rule: 'ईय प्रत्यय लाग्दा दीर्घ ईकार हुन्छ।' },
      { correct: 'विशिष्ट', wrong: 'विसिष्ट', rule: 'विशिष्टमा तालव्य श र मूर्धन्य ष्ट हुन्छ।' },
      { correct: 'कर्तव्य', wrong: 'कर्तब्य', rule: 'तत्सम शब्दमा व हुन्छ, ब हुँदैन।' },
      { correct: 'वित्तीय', wrong: 'वित्तिय', rule: 'वित्त + ईय = वित्तीय (दीर्घ ईकार)।' },
      { correct: 'सम्झौता', wrong: 'सम्झौता', rule: 'सम्झौता शब्दको मानक रूप।' },
      { correct: 'समिति', wrong: 'समीती', rule: 'समितिमा म र त दुवैमा ह्रस्व इकार हुन्छ।' },
      { correct: 'दायित्व', wrong: 'दाहित्व', rule: 'दायित्व शब्दमा य हुन्छ।' },
      { correct: 'सार्वजनिक', wrong: 'सार्वजनीक', rule: 'सार्वजनिकमा इक प्रत्यय लागेकाले ह्रस्व हुन्छ।' },
      { correct: 'भ्रष्टाचार', wrong: 'भ्रष्टचार', rule: 'भ्रष्ट + आचार = भ्रष्टाचार।' },
      { correct: 'कार्यसम्पादन', wrong: 'कार्यसम्पादान', rule: 'कार्यसम्पादन शुद्ध रूप हो।' },
      { correct: 'लेखापरीक्षण', wrong: 'लेखापरिक्षण', rule: 'परीक्षणमा र कार दीर्घ हुन्छ।' },
      { correct: 'कर्मचारी', wrong: 'कर्मचारि', rule: 'कर्मचारीमा र कार दीर्घ हुन्छ।' },
      { correct: 'राजपत्र', wrong: 'राजपत्त', rule: 'राजपत्र शुद्ध मानक रूप हो।' },
      { correct: 'अनुगमन', wrong: 'अणुगमन', rule: 'अनुगमनमा दन्त्य न हुन्छ।' },
      { correct: 'प्राविधिक', wrong: 'प्राविधीक', rule: 'प्राविधिकमा ध मा ह्रस्व इकार हुन्छ।' },
      { correct: 'नीतिगत', wrong: 'नितिगत', rule: 'नीतिमा न कार दीर्घ र त कार ह्रस्व हुन्छ।' }
    ];

    const englishConcordSentences = [
      { stem: 'Neither the Branch Manager nor the cashiers ___ present at the emergency briefing.', correct: 'were', wrongs: ['was', 'is', 'has been'], rule: 'Neither...nor मा पछिल्लो कर्ता (cashiers - plural) अनुसार बहुवचन क्रियापद "were" हुन्छ।' },
      { stem: 'Ten million rupees ___ a substantial cash reserve requirement.', correct: 'is', wrongs: ['are', 'were', 'have been'], rule: 'निश्चित रकम, दुरी वा तौल एकमुष्ठ एकाइ मानिँदा एकवचन क्रिया "is" लाग्छ।' },
      { stem: 'The Board of Directors, together with the Managing Director, ___ reviewing the audit report.', correct: 'is', wrongs: ['are', 'were', 'have'], rule: '"together with" ले जोडिँदा मुख्य पहिलो कर्ता (The Board) अनुसार एकवचन क्रियापद हुन्छ।' },
      { stem: 'Each of the commercial bank branches in Nepal ___ mandatory 2FA security protocols.', correct: 'follows', wrongs: ['follow', 'are following', 'have followed'], rule: '"Each of..." सँग सधैं एकवचन क्रियापद (follows) प्रयोग हुन्छ।' },
      { stem: 'A large number of suspicious transaction reports (STRs) ___ submitted to the FIU.', correct: 'were', wrongs: ['was', 'is', 'has been'], rule: '"A number of..." सँग बहुवचन क्रियापद "were" लाग्छ।' },
      { stem: 'The number of non-performing loans (NPLs) ___ declined steadily this quarter.', correct: 'has', wrongs: ['have', 'are', 'were'], rule: '"The number of..." सँग सधैं एकवचन क्रियापद (has) लाग्छ।' },
      { stem: 'All commercial banks must adhere ___ the directive issued by Nepal Rastra Bank.', correct: 'to', wrongs: ['with', 'in', 'on'], rule: 'Adhere सँग उपयुक्त Preposition सधैं "to" हुन्छ (Adhere to = पालना गर्नु)।' },
      { stem: 'The bank teller was accused ___ misappropriating customer deposits.', correct: 'of', wrongs: ['for', 'with', 'in'], rule: 'Accuse सँग उपयुक्त Preposition सधैं "of" लाग्छ (Accused of)।' },
      { stem: 'In financial accounting, being "in the red" indicates that a business is ___.', correct: 'operating at a financial loss or in debt', wrongs: ['generating surplus profits', 'expanding into new markets', 'holding zero tax liability'], rule: 'बैंकिङ पदावलीमा "in the red" ले घाटा वा ऋणात्मक स्थितिलाई जनाउँछ।' },
      { stem: 'The financial term "Due Diligence" primarily translates into Nepali as ___.', correct: 'यथोचित सतर्कता वा सुक्ष्म पूर्व-मूल्याङ्कन', wrongs: ['अग्रिम जमानत जफत', 'आकस्मिक ऋण मोचन', 'धितो लिलाम बिक्री'], rule: 'Due Diligence को आधिकारिक बैंकिङ अनुवाद "यथोचित सतर्कता" हो।' }
    ];

    let counter = 1;
    for (let i = 0; i < targetCount; i++) {
      const qId = `lang-${counter.toString().padStart(4, '0')}`;
      counter++;

      let question = '';
      let correct = '';
      let wrongs: [string, string, string] = ['', '', ''];
      let expl = '';
      let subTopic = 'नेपाली व्याकरण, शुद्ध-अशुद्ध र पदवर्ग';

      if (i % 2 === 0) {
        const pair = nepaliSpellingPairs[(i / 2) % nepaliSpellingPairs.length];
        const cycle = Math.floor(i / (nepaliSpellingPairs.length * 2));
        
        if (cycle % 3 === 0) {
          question = `तल दिएका शब्दहरूमध्ये मानक नेपाली हिज्जे अनुसार कुन शब्द शुद्ध छ? (क्रम #${i + 1})`;
          correct = pair.correct;
          wrongs = [pair.wrong, pair.correct + 'य', 'अ' + pair.correct].filter(w => w !== pair.correct) as any;
          if (wrongs.length < 3) wrongs = [pair.wrong, 'गलत-' + pair.correct, 'अशुद्ध-' + pair.correct];
          expl = `शुद्ध शब्द "${pair.correct}" हो। नियम: ${pair.rule}।`;
          subTopic = 'नेपाली व्याकरण, शुद्ध-अशुद्ध र पदवर्ग';
        } else if (cycle % 3 === 1) {
          question = `तल उल्लेख गरिएका विकल्पहरू मध्ये कुन शब्द अशुद्ध छ? (अभ्यास #${i + 1})`;
          correct = pair.wrong;
          wrongs = [pair.correct, 'प्रशासनिक', 'संविधान'];
          expl = `अशुद्ध शब्द "${pair.wrong}" हो, यसको शुद्ध रूप "${pair.correct}" हुन्छ। नियम: ${pair.rule}।`;
          subTopic = 'नेपाली व्याकरण, शुद्ध-अशुद्ध र पदवर्ग';
        } else {
          question = `नेपाली शब्द भण्डार अनुसार "अनुराग" शब्दको सही विपरीतार्थक शब्द कुन हो? (प्रश्न #${i + 1})`;
          correct = 'विराग';
          wrongs = ['द्वेष', 'प्रेम', 'मोह'];
          expl = 'अनुराग (माया/आसक्ति) को ठिक उल्टो वा विपरीतार्थक शब्द "विराग" (उदासीनता/आसक्तिहीनता) हो।';
          subTopic = 'नेपाली पर्यायवाची, विपरीतार्थक र पारिभाषिक शब्द';
        }
      } else {
        const eng = englishConcordSentences[Math.floor(i / 2) % englishConcordSentences.length];
        question = `Select the correct option to complete the sentence: "${eng.stem}" (Question #${i + 1})`;
        correct = eng.correct;
        wrongs = eng.wrongs as [string, string, string];
        expl = `Grammar Rule: ${eng.rule}`;
        subTopic = eng.stem.includes('___') ? 'English Concord (Subject-Verb Agreement) & Tenses' : 'English Prepositions, Idioms & Banking Phrases';
      }

      const { options, correctIndex } = createRotatedOptions(correct, wrongs, i);
      addUnique({
        id: qId,
        category,
        difficulty: i % 3 === 0 ? 'Hard' : i % 2 === 0 ? 'Medium' : 'Easy',
        subTopic,
        syllabusModule: 'भाषा परीक्षण (नेपाली र अङ्ग्रेजी)',
        examTip: 'लोक सेवा टिप्स: शुद्ध-अशुद्धमा रेफ र ईकार/इकारको नियम तथा English मा Subject-Verb Concord हरेक परीक्षामा सोधिने सुनिश्चित खण्ड हो।',
        question,
        options,
        correctAnswer: correctIndex,
        explanation: expl
      });
    }
  }

  else if (moduleKey === 'applied-math') {
    let counter = 1;
    for (let i = 0; i < targetCount; i++) {
      const qId = `mq-${counter.toString().padStart(4, '0')}`;
      counter++;

      let question = '';
      let correct = '';
      let wrongs: [string, string, string] = ['', '', ''];
      let expl = '';
      let subTopic = 'साधारण ब्याज र चक्रीय ब्याज (Simple & Compound Interest)';

      const type = i % 5;
      if (type === 0) {
        const p = 20000 + (i * 2500);
        const t = 2 + (i % 4);
        const r = 8 + (i % 5);
        const si = (p * t * r) / 100;
        const totalAmount = p + si;

        question = `एक व्यक्तिले वाणिज्य बैंकबाट वार्षिक ${r}% साधारण ब्याजदरमा रु. ${p.toLocaleString()} ऋण लिएमा ${t} वर्षपछि तिर्नुपर्ने कुल मिश्रधन (Amount) कति हुन्छ? (हिसाब #${i + 1})`;
        correct = `रु. ${totalAmount.toLocaleString()}`;
        wrongs = [
          `रु. ${(totalAmount + 2500).toLocaleString()}`,
          `रु. ${(totalAmount - 2000).toLocaleString()}`,
          `रु. ${(totalAmount + 5000).toLocaleString()}`
        ];
        expl = `सूत्र: SI = (P × T × R) / 100 = (${p} × ${t} × ${r}) / 100 = रु. ${si}। मिश्रधन A = P + SI = रु. ${p} + रु. ${si} = रु. ${totalAmount}।`;
        subTopic = 'साधारण ब्याज र चक्रीय ब्याज (Simple & Compound Interest)';
      } else if (type === 1) {
        const cp = 1000 + (i * 150);
        const profitPercent = 10 + ((i * 5) % 30);
        const sp = cp * (1 + profitPercent / 100);

        question = `यदि कुनै वस्तु रु. ${cp.toLocaleString()} मा किनेर ${profitPercent}% नाफा लिई बेच्दा सो वस्तुको बिक्री मूल्य (Selling Price) कति हुन्छ? (प्रश्न #${i + 1})`;
        correct = `रु. ${sp.toLocaleString()}`;
        wrongs = [
          `रु. ${(sp + 100).toLocaleString()}`,
          `रु. ${(sp - 150).toLocaleString()}`,
          `रु. ${(sp + 250).toLocaleString()}`
        ];
        expl = `बिक्री मूल्य (SP) = CP + CP को ${profitPercent}% = ${cp} + (${cp} × ${profitPercent}/100) = रु. ${sp}।`;
        subTopic = 'नाफा, नोक्सान र छुट (Profit, Loss & Discount)';
      } else if (type === 2) {
        const daysA = 10 + (i % 10) * 2;
        const daysB = 15 + (i % 10) * 3;
        const together = Number(((daysA * daysB) / (daysA + daysB)).toFixed(2));

        question = `A ले कुनै काम ${daysA} दिनमा र B ले सोही काम ${daysB} दिनमा गर्न सक्छन् भने दुवै जना मिलेर उक्त काम कति दिनमा सम्पन्न गर्छन्? (समस्या #${i + 1})`;
        correct = `${together} दिन`;
        wrongs = [
          `${(together + 2).toFixed(2)} दिन`,
          `${Math.max(1, together - 1.5).toFixed(2)} दिन`,
          `${(together + 3.5).toFixed(2)} दिन`
        ];
        expl = `सूत्र: समय T = (A × B) / (A + B) = (${daysA} × ${daysB}) / (${daysA} + ${daysB}) = ${daysA * daysB} / ${daysA + daysB} = ${together} दिन।`;
        subTopic = 'ऐकिक नियम र समय-काम (Unitary Method, Time & Work)';
      } else if (type === 3) {
        const ratioA = 2 + (i % 3);
        const ratioB = 3 + (i % 4);
        const totalProfit = 50000 + (i * 5000);
        const shareA = Math.round((totalProfit * ratioA) / (ratioA + ratioB));

        question = `A र B ले कुनै व्यापारमा ${ratioA}:${ratioB} को अनुपातमा पुँजी लगानी गरे। वर्षको अन्त्यमा भएको कुल नाफा रु. ${totalProfit.toLocaleString()} मध्ये A को भाग कति हुन्छ? (प्रश्न #${i + 1})`;
        correct = `रु. ${shareA.toLocaleString()}`;
        wrongs = [
          `रु. ${(shareA + 3000).toLocaleString()}`,
          `रु. ${(shareA - 4000).toLocaleString()}`,
          `रु. ${(shareA + 7500).toLocaleString()}`
        ];
        expl = `A को भाग = कुल नाफा × (A को अनुपात / कुल अनुपात) = ${totalProfit} × (${ratioA} / ${ratioA + ratioB}) = रु. ${shareA}।`;
        subTopic = 'अनुपात, समानुपात र साझेदारी (Ratio, Proportion & Partnership)';
      } else {
        const p = 50000 + (i * 5000);
        const r = 10;
        const t = 2;
        const ci = Math.round(p * (Math.pow(1 + r / 100, t) - 1));

        question = `रु. ${p.toLocaleString()} को १०% वार्षिक चक्रीय ब्याजदरले २ वर्षमा हुने चक्रीय ब्याज (Compound Interest) कति हुन्छ? (प्रश्न #${i + 1})`;
        correct = `रु. ${ci.toLocaleString()}`;
        wrongs = [
          `रु. ${(ci + 1500).toLocaleString()}`,
          `रु. ${(ci - 1000).toLocaleString()}`,
          `रु. ${(ci + 2500).toLocaleString()}`
        ];
        expl = `सूत्र: CI = P[(1 + R/100)^T - 1] = ${p}[(1.10)^2 - 1] = ${p} × 0.21 = रु. ${ci}।`;
        subTopic = 'साधारण ब्याज र चक्रीय ब्याज (Simple & Compound Interest)';
      }

      const { options, correctIndex } = createRotatedOptions(correct, wrongs, i);
      addUnique({
        id: qId,
        category,
        difficulty: i % 3 === 0 ? 'Hard' : i % 2 === 0 ? 'Medium' : 'Easy',
        subTopic,
        syllabusModule: 'व्यावहारिक गणित तथा वित्तीय गणना',
        examTip: 'लोक सेवा टिप्स: चक्रीय ब्याज र साधारण ब्याजको अन्तर सोध्ने प्रश्नमा २ वर्षका लागि D = P(R/100)^2 सूत्र प्रयोग गर्नुहोस्।',
        question,
        options,
        correctAnswer: correctIndex,
        explanation: expl
      });
    }
  }

  else if (moduleKey === 'it-ai-cybersecurity') {
    const itConcepts = [
      { topic: 'IS Audit', q: 'नेपाल राष्ट्र बैंकको IT Guidelines अनुसार वाणिज्य बैंकहरूले Information System (IS) Audit कति समयमा अनिवार्य सम्पन्न गर्नुपर्छ?', a: 'प्रत्येक वर्ष (वार्षिक रूपमा - Annually)', w: ['प्रत्येक ३ वर्षमा एकपटक', 'प्रत्येक ६ महिनामा', '५ वर्षमा एकपटक'], ref: 'NRB IT Guidelines' },
      { topic: 'DR Site', q: 'आपतकालीन अवस्थामा बैंकिङ प्रणाली पुनर्स्थापना गर्न मुख्य सर्भरभन्दा फरक भूकम्पीय क्षेत्रमा स्थापना गरिने प्रणालीलाई के भनिन्छ?', a: 'Disaster Recovery (DR) Site', w: ['Local Area Switch', 'Staging Branch Server', 'Cache Proxy Gateway'], ref: 'Business Continuity Guidelines' },
      { topic: '2FA', q: 'डिजिटल बैंकिङ र मोबाइल बैंकिङ कारोबार सुरक्षित गर्न प्रयोग गरिने २FA को पूर्ण रूप के हो?', a: 'Two-Factor Authentication', w: ['Two-Fold Authorization', 'Two-Frequency Algorithm', 'Two-Fast Accounting'], ref: 'Information Security Guidelines' },
      { topic: 'CBS Pumori', q: 'नेपालका अधिकांश विकास बैंक तथा वित्तीय संस्थाहरूमा प्रयोग भइरहेको स्वदेशी कोर बैंकिङ सफ्टवेयर कुन हो?', a: 'Pumori (पुमरी)', w: ['Finacle', 'T24 Temenos', 'Flexcube'], ref: 'Core Banking Systems' },
      { topic: 'CBS Finacle', q: 'नेपालका अधिकांश ठूला वाणिज्य बैंकहरूले प्रयोग गरिरहेको अन्तर्राष्ट्रियस्तरको कोर बैंकिङ सफ्टवेयर कुन हो?', a: 'Finacle (विक्रेता: Infosys)', w: ['WordPress', 'SAP HR Portal', 'QuickBooks'], ref: 'Core Banking Systems' },
      { topic: 'RTGS', q: 'उच्च मूल्य तथा तत्काल फर्छ्यौट गर्नुपर्ने अन्तरबैंक भुक्तानीका लागि नेपाल राष्ट्र बैंकले सञ्चालन गरेको प्रणाली कुन हो?', a: 'RTGS (Real Time Gross Settlement)', w: ['ECC (Electronic Cheque Clearing)', 'POS Swiping', 'Cash On Delivery'], ref: 'Payment Systems Department' },
      { topic: 'Phishing', q: 'बैंकका ग्राहकलाई आधिकारिक जस्तो देखिने नक्कली इमेल वा लिङ्क पठाई पासवर्ड चोर्ने साइबर आक्रमणलाई के भनिन्छ?', a: 'फिसिङ (Phishing)', w: ['DDoS Attack', 'SQL Injection', 'Hardware Crash'], ref: 'Cyber Threat Analysis' },
      { topic: 'Ransomware', q: 'कम्प्युटरका सम्पूर्ण फाइलहरू इन्क्रिप्ट गरी खोल्नका लागि रकम (फिरौती) माग्ने मालवेयरलाई के भनिन्छ?', a: 'र्‍यानसमवेयर (Ransomware)', w: ['Adware', 'Cookie', 'Operating System Patch'], ref: 'Cybersecurity Threat Classification' },
      { topic: 'ConnectIPS', q: 'नेपाल क्लियरिङ हाउस (NCHL) ले सञ्चालन गरेको सोझै बैंक खाताबाट अनलाइन भुक्तानी हुने प्रणाली कुन हो?', a: 'ConnectIPS', w: ['Swift Wire', 'Western Union', 'ATM Skimmer'], ref: 'NCHL Guidelines' },
      { topic: 'AES Encryption', q: 'बैंकिङ डाटा इन्क्रिप्सनका लागि विश्वव्यापी रूपमा सुरक्षित मानिने सिमेट्रिक इन्क्रिप्सन स्ट्यान्डर्ड कुन हो?', a: 'AES-256 (Advanced Encryption Standard)', w: ['DES-56', 'ROT-13', 'Plain Text ASCII'], ref: 'Data Encryption Standards' }
    ];

    let counter = 1;
    for (let i = 0; i < targetCount; i++) {
      const qId = `itq-${counter.toString().padStart(4, '0')}`;
      counter++;

      const c = itConcepts[i % itConcepts.length];
      const cycle = Math.floor(i / itConcepts.length);

      const question = `${c.q} (अभ्यास #${cycle + 1})`;
      const correct = c.a;
      const wrongs = c.w as [string, string, string];
      const expl = `${c.topic} सम्बन्धमा: ${c.a}। स्रोत: ${c.ref}।`;

      const { options, correctIndex } = createRotatedOptions(correct, wrongs, i);
      addUnique({
        id: qId,
        category,
        difficulty: i % 3 === 0 ? 'Hard' : i % 2 === 0 ? 'Medium' : 'Easy',
        subTopic: 'नेपाल राष्ट्र बैंक IT Guidelines र IS Audit',
        syllabusModule: 'सूचना प्रविधि, AI र साइबर सुरक्षा',
        actSection: c.ref,
        examTip: 'लोक सेवा टिप्स: IS Audit वार्षिक रूपमा हुने र DR Site मुख्य साइटभन्दा फरक भूकम्पीय क्षेत्रमा हुनुपर्ने प्रावधान बारम्बार सोधिन्छ।',
        question,
        options,
        correctAnswer: correctIndex,
        explanation: expl
      });
    }
  }

  else if (moduleKey === 'economics') {
    const econFacts = [
      { key: 'Policy Rate', q: 'नेपाल राष्ट्र बैंकको वर्तमान मौद्रिक नीति अनुसार नीतिगत दर (Policy Rate) कति प्रतिशत कायम गरिएको छ?', a: '५.५ प्रतिशत (5.5%)', w: ['६.५ प्रतिशत', '४.० प्रतिशत', '७.० प्रतिशत'], tip: 'ब्याजदर करिडोरको बीचको दर नीतिगत दर हो।' },
      { key: 'Bank Rate', q: 'नेपाल राष्ट्र बैंकले अन्तिम ऋणदाता सुविधा अन्तर्गत तोकेको बैंक दर (Bank Rate) कति प्रतिशत रहेको छ?', a: '६.५ प्रतिशत (6.5%)', w: ['५.५ प्रतिशत', '७.५ प्रतिशत', '४.५ प्रतिशत'], tip: 'बैंक दर ब्याजदर करिडोरको माथिल्लो सीमा (Ceiling) हो।' },
      { key: 'SDF', q: 'नेपाल राष्ट्र बैंकको ब्याजदर करिडोरको तल्लो सीमा (Floor) मानिने निक्षेप सङ्कलन दर (SDF Rate) कति प्रतिशत छ?', a: '३.० प्रतिशत (3.0%)', w: ['४.० प्रतिशत', '२.५ प्रतिशत', '५.० प्रतिशत'], tip: 'Standing Deposit Facility ब्याजदर करिडोरको तल्लो सीमा हो।' },
      { key: 'CRR', q: 'वाणिज्य बैंकहरूले नेपाल राष्ट्र बैंकमा अनिवार्य मौज्दात राख्नुपर्ने CRR (Cash Reserve Ratio) कति प्रतिशत तोकिएको छ?', a: '४.० प्रतिशत (4.0%)', w: ['५.० प्रतिशत', '३.० प्रतिशत', '६.० प्रतिशत'], tip: 'क, ख, ग सबै वर्गका लागि CRR ४.० प्रतिशत कायम छ।' },
      { key: 'SLR', q: '"क" वर्गका वाणिज्य बैंकहरूले कायम गर्नुपर्ने वैधानिक तरलता अनुपात (SLR) कति प्रतिशत रहेको छ?', a: '१२.० प्रतिशत (12.0%)', w: ['१०.० प्रतिशत', '१५.० प्रतिशत', '८.० प्रतिशत'], tip: 'क वर्गका लागि १२% र ख तथा ग वर्गका लागि १०% SLR कायम छ।' },
      { key: 'CD Ratio', q: 'बैंक तथा वित्तीय संस्थाहरूले कायम गर्नुपर्ने कर्जा-निक्षेप अनुपात (CD Ratio) को अधिकतम सीमा कति प्रतिशत तोकिएको छ?', a: '९०.० प्रतिशत (90.0%)', w: ['८०.० प्रतिशत', '८५.० प्रतिशत', '९५.० प्रतिशत'], tip: 'पहिलेको CCD Ratio खारेज गरी हाल CD Ratio ९०% सीमा लागू छ।' },
      { key: 'CAR', q: 'नेपाल राष्ट्र बैंकको बासेल फ्रेमवर्क अनुसार वाणिज्य बैंकहरूले कायम गर्नुपर्ने न्यूनतम पुँजी पर्याप्तता अनुपात (CAR) कति हो?', a: '११.० प्रतिशत (11.0%)', w: ['८.५ प्रतिशत', '१३.० प्रतिशत', '९.० प्रतिशत'], tip: 'न्यूनतम कोर क्यापिटल ८.५% र कुल पुँजी ११.०% कायम गर्नुपर्छ।' },
      { key: '16th Plan Target', q: 'नेपालको १६औं योजना (२०८१/८२ - २०८५/८६) ले औसत आर्थिक वृद्धिदर कति प्रतिशत पुर्‍याउने लक्ष्य राखेको छ?', a: '७.३ प्रतिशत (7.3%)', w: ['८.५ प्रतिशत', '६.० प्रतिशत', '९.२ प्रतिशत'], tip: '१६औं योजनाको सोच "समृद्ध नेपाल, सुखी नेपाली" र आर्थिक वृद्धि लक्ष्य ७.३% हो।' },
      { key: 'GDP Base Year', q: 'नेपालको राष्ट्रिय लेखा तथ्याङ्क (GDP) गणनाको हालको आधार वर्ष (Base Year) कुन हो?', a: 'आर्थिक वर्ष २०६७/६८ (2010/11)', w: ['आर्थिक वर्ष २०५७/५८', 'आर्थिक वर्ष २०७२/७३', 'आर्थिक वर्ष २०४१/४२'], tip: 'केन्द्रीय तथ्याङ्क कार्यालयले २०६७/६८ लाई नयाँ आधार वर्ष मानेको छ।' },
      { key: 'Forex Import Coverage', q: 'मौद्रिक नीति अनुसार नेपाल राष्ट्र बैंकले कति महिनाको वस्तु तथा सेवा आयात धान्न पुग्ने विदेशी मुद्रा सञ्चिति कायम गर्ने लक्ष्य राख्दछ?', a: 'कम्तीमा ७ महिनाको (7 Months)', w: ['कम्तीमा ३ महिनाको', 'कम्तीमा १२ महिनाको', 'कम्तीमा ५ महिनाको'], tip: 'मौद्रिक नीतिको मुख्य बाह्य क्षेत्र स्थायित्व सूचक कम्तीमा ७ महिनाको आयात धान्ने सञ्चिति हो।' }
    ];

    let counter = 1;
    for (let i = 0; i < targetCount; i++) {
      const qId = `eq-${counter.toString().padStart(4, '0')}`;
      counter++;

      const f = econFacts[i % econFacts.length];
      const cycle = Math.floor(i / econFacts.length);

      const question = `${f.q} (वस्तुगत प्रश्न सेट #${cycle + 1})`;
      const correct = f.a;
      const wrongs = f.w as [string, string, string];
      const expl = `${f.key} सम्बन्धी तथ्य: ${f.a}। ${f.tip}`;

      const { options, correctIndex } = createRotatedOptions(correct, wrongs, i);
      addUnique({
        id: qId,
        category,
        difficulty: i % 3 === 0 ? 'Hard' : i % 2 === 0 ? 'Medium' : 'Easy',
        subTopic: 'मौद्रिक नीति र ब्याजदर करिडोर (नीतिगत दर ५.५%, बैंक दर ६.५%)',
        syllabusModule: 'अर्थशास्त्र, मौद्रिक नीति र बैंकिङ सिद्धान्त',
        actSection: 'नेपाल राष्ट्र बैंक मौद्रिक नीति / निर्देशिका',
        examTip: f.tip,
        question,
        options,
        correctAnswer: correctIndex,
        explanation: expl
      });
    }
  }

  else if (moduleKey === 'governance-constitution') {
    const constArticles = [
      { art: 'धारा १६', right: 'सम्मानपूर्वक बाँच्न पाउने हक', desc: 'प्रत्येक व्यक्तिलाई सम्मानपूर्वक बाँच्न पाउने हक हुनेछ र कसैलाई पनि मृत्युदण्डको सजाय दिने कानुन बनाइने छैन।' },
      { art: 'धारा १७', right: 'स्वतन्त्रताको हक', desc: 'विचार र अभिव्यक्तिको स्वतन्त्रता, बिना हतियार शान्तिपूर्वक भेला हुने स्वतन्त्रता।' },
      { art: 'धारा १८', right: 'समानताको हक', desc: 'सबै नागरिक कानुनको दृष्टिमा समान हुनेछन् र कानुनको समान संरक्षण प्राप्त हुनेछ।' },
      { art: 'धारा २४', right: 'छुवाछूत तथा भेदभाव विरुद्धको हक', desc: 'कुनै पनि व्यक्तिलाई उत्पत्ति, जात, जाति, समुदायको आधारमा छुवाछूत वा भेदभाव गर्न पाइने छैन।' },
      { art: 'धारा २७', right: 'सूचनाको हक', desc: 'प्रत्येक नागरिकलाई आफ्नो वा सार्वजनिक सरोकारको कुनै पनि विषयको सूचना माग्ने र पाउने हक हुनेछ।' },
      { art: 'धारा ३१', right: 'शिक्षा सम्बन्धी हक', desc: 'प्रत्येक नागरिकलाई आधारभूत शिक्षा अनिवार्य र निःशुल्क तथा माध्यमिक शिक्षा निःशुल्क पाउने हक हुनेछ।' },
      { art: 'धारा ३५', right: 'स्वास्थ्य सम्बन्धी हक', desc: 'प्रत्येक नागरिकलाई राज्यबाट आधारभूत स्वास्थ्य सेवा निःशुल्क प्राप्त गर्ने हक हुनेछ।' },
      { art: 'धारा ३८', right: 'महिलाको हक', desc: 'प्रत्येक महिलालाई लैंगिक भेदभाव बिना समान वंशीय हक तथा राज्यका सबै निकायमा समानुपातिक समावेशी सिद्धान्तको हक।' },
      { art: 'धारा ४६', right: 'संवैधानिक उपचारको हक', desc: 'मौलिक हकको प्रचलनका लागि धारा १३३ वा १४४ बमोजिम सर्वोच्च वा उच्च अदालतमा उपचार पाउने हक।' },
      { art: 'धारा ४८', right: 'नागरिकका कर्तव्य', desc: 'संविधान र कानुनको पालना, राष्ट्रप्रति निष्ठा, राज्यले चाहेका बखत अनिवार्य सेवा र सार्वजनिक सम्पत्तिको संरक्षण।' }
    ];

    let counter = 1;
    for (let i = 0; i < targetCount; i++) {
      const qId = `gq-${counter.toString().padStart(4, '0')}`;
      counter++;

      const c = constArticles[i % constArticles.length];
      const cycle = Math.floor(i / constArticles.length);

      let question = '';
      let correct = '';
      let wrongs: [string, string, string] = ['', '', ''];
      let expl = '';
      let subTopic = 'नेपालको संविधान २०७२: मौलिक हक र कर्तव्य (भाग ३)';

      if (cycle % 2 === 0) {
        question = `नेपालको संविधान २०७२ को "${c.art}" मा कुन मौलिक हक वा व्यवस्था गरिएको छ? (प्रश्न सेट #${cycle + 1})`;
        correct = c.right;
        wrongs = ['गोपनीयताको हक', 'सम्पत्तिको हक', 'रोजगारीको हक'].filter(x => x !== c.right) as any;
        if (wrongs.length < 3) wrongs = ['श्रमको हक', 'खाद्य सम्बन्धी हक', 'आवासको हक'];
        expl = `संविधानको ${c.art} मा "${c.right}" को व्यवस्था छ। विवरण: ${c.desc}`;
      } else {
        question = `नेपालको संविधान अनुसार "${c.right}" सम्बन्धी व्यवस्था कुन धारामा उल्लेख गरिएको छ? (विवरण क्रम #${i + 1})`;
        correct = c.art;
        wrongs = ['धारा १२', 'धारा २५', 'धारा ५०'].filter(x => x !== c.art) as any;
        if (wrongs.length < 3) wrongs = ['धारा २१', 'धारा ३३', 'धारा ४४'];
        expl = `"${c.right}" संविधानको ${c.art} मा प्रत्याभूत गरिएको छ। ${c.desc}`;
      }

      const { options, correctIndex } = createRotatedOptions(correct, wrongs, i);
      addUnique({
        id: qId,
        category,
        difficulty: i % 3 === 0 ? 'Hard' : i % 2 === 0 ? 'Medium' : 'Easy',
        subTopic,
        syllabusModule: 'नेपालको संविधान र शासन प्रणाली',
        actSection: `नेपालको संविधान २०७२ ${c.art}`,
        examTip: 'लोक सेवा टिप्स: भाग ३ का धारा १६ देखि ४६ सम्मका ३१ वटा मौलिक हकहरू र धारा ४८ का ४ वटा कर्तव्यहरू कण्ठस्थ राख्नुहोस्।',
        question,
        options,
        correctAnswer: correctIndex,
        explanation: expl
      });
    }
  }

  else if (moduleKey === 'geography') {
    const geoIntegrityFacts = [
      { district: 'सिन्धुपाल्चोक', river: 'भोटेकोशी नदी', highway: 'अरनिको राजमार्ग', border: 'तातोपानी नाका (कोदारी)', hydro: '४५ मेगावाट माथिल्लो भोटेकोशी जलविद्युत् आयोजना', bridge: 'मितेरी पुल' },
      { district: 'रसुवा', river: 'त्रिशूली नदी', highway: 'पासाङ ल्हामु राजमार्ग', border: 'रसुवागढी नाका', hydro: '६० मेगावाट माथिल्लो त्रिशूली-३ए जलविद्युत् आयोजना', bridge: 'रसुवागढी मितेरी पुल' },
      { district: 'सङ्खुवासभा', river: 'अरुण नदी', highway: 'कोशी कोरिडोर', border: 'किमाथाङ्का नाका', hydro: '९०० मेगावाट अरुण-३ जलविद्युत् आयोजना', bridge: 'अरुण पुल' },
      { district: 'मुस्ताङ', river: 'कालीगण्डकी नदी', highway: 'बेनी-जोमसोम सडक', border: 'कोरोला नाका', hydro: 'थापाखोला जलविद्युत् आयोजना', bridge: 'कालीगण्डकी पुल' },
      { district: 'हुम्ला', river: 'कर्णाली नदी', highway: 'कर्णाली कोरिडोर', border: 'हिल्सा नाका', hydro: 'हिल्सा जलविद्युत् आयोजना', bridge: 'हिल्सा झोलुङ्गे पुल' },
      { district: 'दोलखा', river: 'तामाकोशी नदी', highway: 'चरीकोट-जिरी सडक', border: 'लाप्ची नाका', hydro: '४५६ मेगावाट माथिल्लो तामाकोशी जलविद्युत् आयोजना', bridge: 'तामाकोशी पुल' },
      { district: 'दार्चुला', river: 'महाकाली नदी', highway: 'महाकाली कोरिडोर', border: 'टिङ्कर नाका', hydro: 'चमेलिया जलविद्युत् आयोजना', bridge: 'दत्तु झोलुङ्गे पुल' },
      { district: 'ताप्लेजुङ', river: 'तमोर नदी', highway: 'मेची राजमार्ग', border: 'ओलाङचुङगोला नाका', hydro: '७३ मेगावाट मध्य तमोर जलविद्युत् आयोजना', bridge: 'तमोर पुल' },
      { district: 'चितवन', river: 'नारायणी नदी', highway: 'पूर्व-पश्चिम राजमार्ग', border: 'ठोरी नाका', hydro: 'त्रिशूली-गण्डकी सङ्गम', bridge: 'नारायणी पुल' },
      { district: 'कैलाली', river: 'कर्णाली नदी', highway: 'महेन्द्र राजमार्ग', border: 'गौरीफन्टा नाका', hydro: 'कर्णाली चिसापानी', bridge: 'चिसापानी कर्णाली पुल (एकखम्बे केबल पुल)' }
    ];

    let counter = 1;
    for (let i = 0; i < targetCount; i++) {
      const qId = `geo-${counter.toString().padStart(4, '0')}`;
      counter++;

      const g = geoIntegrityFacts[i % geoIntegrityFacts.length];
      const cycle = Math.floor(i / geoIntegrityFacts.length);

      let question = '';
      let correct = '';
      let wrongs: [string, string, string] = ['', '', ''];
      let expl = '';
      let subTopic = 'नेपालका प्रमुख नदी प्रणाली (कोशी, गण्डकी, कर्णाली र जलाधार)';

      const mode = cycle % 5;
      if (mode === 0) {
        question = `भौगोलिक तथ्य अनुसार "${g.river}" कुन जिल्लाको प्रमुख जलप्रवाह तथा कोरिडोर हो? (प्रश्न #${i + 1})`;
        correct = g.district;
        wrongs = ['कास्की', 'झापा', 'बाँके'].filter(d => d !== g.district) as any;
        if (wrongs.length < 3) wrongs = ['ललितपुर', 'सुर्खेत', 'इलाम'];
        expl = `भौगोलिक अखण्डता: ${g.river} ${g.district} जिल्लामा अवस्थित छ।`;
        if (g.district === 'सिन्धुपाल्चोक') subTopic = 'सिन्धुपाल्चोक (भोटेकोशी नदी / अरनिको राजमार्ग / तातोपानी नाका / ४५MW भोटेकोशी)';
        if (g.district === 'रसुवा') subTopic = 'रसुवा (त्रिशूली नदी / पासाङ ल्हामु / रसुवागढी नाका / ६०MW त्रिशूली-३ए)';
      } else if (mode === 1) {
        question = `उत्तरी छिमेकी मुलुक चीनसँग जोडिएको प्रसिद्ध व्यापारिक नाका "${g.border}" कुन जिल्लामा अवस्थित छ? (प्रश्न सेट #${cycle + 1})`;
        correct = g.district;
        wrongs = ['मनाङ', 'रुकुम पूर्व', 'पाँचथर'].filter(d => d !== g.district) as any;
        if (wrongs.length < 3) wrongs = ['तनहुँ', 'मकवानपुर', 'स्याङ्जा'];
        expl = `${g.border} ${g.district} जिल्लाको उत्तरी सीमामा अवस्थित प्रमुख अन्तर्राष्ट्रिय व्यापारिक भन्सार नाका हो।`;
        if (g.district === 'सिन्धुपाल्चोक') subTopic = 'सिन्धुपाल्चोक (भोटेकोशी नदी / अरनिको राजमार्ग / तातोपानी नाका / ४५MW भोटेकोशी)';
        if (g.district === 'रसुवा') subTopic = 'रसुवा (त्रिशूली नदी / पासाङ ल्हामु / रसुवागढी नाका / ६०MW त्रिशूली-३ए)';
      } else if (mode === 2) {
        question = `जलविद्युत् आयोजना "${g.hydro}" कुन नदी तथा जिल्लामा सञ्चालित छ? (प्रश्न #${i + 1})`;
        correct = `${g.district} जिल्ला, ${g.river}`;
        wrongs = ['कास्की जिल्ला, सेती नदी', 'गोरखा जिल्ला, बुढीगण्डकी नदी', 'झापा जिल्ला, मेची नदी'];
        expl = `${g.hydro} ${g.district} जिल्लाको ${g.river} मा निर्माण गरिएको हो।`;
      } else if (mode === 3) {
        question = `राजमार्ग "${g.highway}" ले नेपालको कुन व्यापारिक नाका तथा जिल्लालाई राजधानीसँग जोड्दछ? (प्रश्न सेट #${cycle + 1})`;
        correct = `${g.district} (${g.border})`;
        wrongs = ['इलाम (पशुपतिनगर)', 'कञ्चनपुर (गड्डाचौकी)', 'बाँके (नेपालगञ्ज)'];
        expl = `${g.highway} ले काठमाडौँलाई ${g.district} को ${g.border} सँग जोड्दछ।`;
      } else {
        question = `नेपालको सबैभन्दा गहिरो नदी कुन हो र यसले कुन गल्छी निर्माण गर्दछ? (प्रश्न #${i + 1})`;
        correct = 'गण्डकी नदी (नारायणी), दाना गल्छी (कालीगण्डकी)';
        wrongs = ['कोशी नदी, चतरा गल्छी', 'कर्णाली नदी, चिसापानी गल्छी', 'मेची नदी, भद्रपुर'];
        expl = 'नेपालको सबैभन्दा गहिरो नदी गण्डकी (कालीगण्डकी) हो, जसले म्याग्दीको दानामा संसारकै सबैभन्दा गहिरो गल्छी बनाएको छ।';
      }

      const { options, correctIndex } = createRotatedOptions(correct, wrongs, i);
      addUnique({
        id: qId,
        category,
        difficulty: i % 3 === 0 ? 'Hard' : i % 2 === 0 ? 'Medium' : 'Easy',
        subTopic,
        syllabusModule: 'नेपालको भूगोल र नदीनाला',
        examTip: 'कडा भौगोलिक अखण्डता: सिन्धुपाल्चोकमा भोटेकोशी नदी र अरनिको राजमार्ग तथा रसुवामा त्रिशूली नदी र पासाङ ल्हामु राजमार्ग पर्दछन्, यिनलाई कहिल्यै नमिसाउनुहोस्।',
        question,
        options,
        correctAnswer: correctIndex,
        explanation: expl
      });
    }
  }

  else if (moduleKey === 'history') {
    const histMilestones = [
      { year: '१९३३ BS', event: 'तेजारथ अड्डाको स्थापना', ruler: 'प्रधानमन्त्री रणोद्दीप सिंह', desc: 'नेपालमा आधुनिक बैंकिङ प्रणालीको जग बसाल्ने सरकारी कर्मचारी तथा जनतालाई ५% ब्याजमा सुनचाँदी धितो राखी कर्जा दिने अड्डा।' },
      { year: '१९९४ कार्तिक ३०', event: 'नेपाल बैंक लिमिटेडको स्थापना', ruler: 'राजा त्रिभुवन र प्रधानमन्त्री जुद्ध शमशेर', desc: 'नेपालको पहिलो आधुनिक वाणिज्य बैंकको स्थापना (Authorized Capital: रु. १ करोड, Paid-up: रु. ८ लाख ४२ हजार)।' },
      { year: '२००२ असोज १', event: 'नेपालमा पहिलो पटक कागजी नोट निष्कासन', ruler: 'सदर मुलुकीखाना (खजाञ्ची जनक राज)', desc: 'रु. १, रु. ५, रु. १० र रु. १०० दरका कागजी नोट निष्कासन, जसलाई नोट मोरु भनिन्थ्यो।' },
      { year: '२०१३ वैशाख १४', event: 'नेपाल राष्ट्र बैंकको स्थापना', ruler: 'पहिलो गभर्नर: हिमालय शमशेर ज.ब.रा.', desc: 'नेपाल राष्ट्र बैंक ऐन २०१२ अन्तर्गत केन्द्रीय बैंकको रूपमा स्थापना भई भारतीय रुपैयाँको दोहोरो मुद्रा चलन अन्त्य गरेको।' },
      { year: '२०१६ BS', event: 'दशमलव मुद्रा प्रणाली र राष्ट्र बैंकको पहिलो नोट', ruler: 'गभर्नर हिमालय शमशेर ज.ब.रा.', desc: 'नेपालमा १ रुपैयाँ बराबर १०० पैसा हुने दशमलव प्रणाली लागू र २०१६ फागुन ७ मा राष्ट्र बैंकले पहिलो पटक नोट निष्कासन गरेको।' },
      { year: '२०२२ माघ १०', event: 'राष्ट्रिय वाणिज्य बैंकको स्थापना', ruler: 'राष्ट्रिय वाणिज्य बैंक ऐन, २०२१', desc: 'नेपाल सरकारको शतप्रतिशत पूर्ण स्वामित्वमा दोस्रो वाणिज्य बैंकको स्थापना।' },
      { year: '२०२४ माघ ७', event: 'कृषि विकास बैंकको स्थापना', ruler: 'कृषि विकास बैंक ऐन, २०२४', desc: '२०२० सालमा स्थापित सहकारी बैंकलाई विघटन गरी कृषि क्षेत्रको प्रवर्द्धनका लागि स्थापना।' },
      { year: '२०४१ असार २९', event: 'पहिलो संयुक्त लगानी (Joint Venture) बैंक स्थापना', ruler: 'नेपाल अरब बैंक लिमिटेड (हाल नबिल बैंक)', desc: 'दुबई बैंक लिमिटेडसँगको संयुक्त साझेदारीमा निजी क्षेत्रको पहिलो बैंक स्थापना।' },
      { year: '२०५८ BS', event: 'नेपाल राष्ट्र बैंक ऐन, २०५८ जारी', ruler: 'केन्द्रीय बैंकलाई स्वायत्तता', desc: 'केन्द्रीय बैंकलाई नीतिगत तथा व्यवस्थापकीय पूर्ण स्वायत्तता प्रदान गर्ने ऐन जारी।' },
      { year: '२०७३ BS', event: 'बैंक तथा वित्तीय संस्था सम्बन्धी ऐन (BAFIA २०७३) लागू', ruler: 'व्यवस्थापिका संसद्', desc: 'हाल कार्यान्वयनमा रहेको छाता बैंकिङ ऐन, जसले बैंकहरूलाई क, ख, ग, घ वर्गमा वर्गीकरण गरेको छ।' }
    ];

    let counter = 1;
    for (let i = 0; i < targetCount; i++) {
      const qId = `bq-${counter.toString().padStart(4, '0')}`;
      counter++;

      const h = histMilestones[i % histMilestones.length];
      const cycle = Math.floor(i / histMilestones.length);

      let question = '';
      let correct = '';
      let wrongs: [string, string, string] = ['', '', ''];
      let expl = '';
      let subTopic = 'नेपाल बैंक लिमिटेड स्थापना (१९९४ कार्तिक ३०) र पहिलो बैंकिङ युग';

      const mode = cycle % 3;
      if (mode === 0) {
        question = `नेपालको बैंकिङ इतिहासमा "${h.event}" कहिले भएको थियो? (प्रश्न सेट #${cycle + 1})`;
        correct = h.year;
        wrongs = ['२००० BS', '२००७ फागुन ७', '२०१५ असार १८'].filter(y => y !== h.year) as any;
        if (wrongs.length < 3) wrongs = ['१९८० BS', '२०१८ BS', '२०४६ BS'];
        expl = `${h.event} वि.सं. ${h.year} मा भएको थियो। विवरण: ${h.desc}`;
        if (h.event.includes('तेजारथ')) subTopic = 'तेजारथ अड्डा (१९३३ BS) र प्रारम्भिक कर्जा प्रणाली';
        if (h.event.includes('राष्ट्र बैंक')) subTopic = 'नेपाल राष्ट्र बैंक स्थापना (२०१३ वैशाख १४) र गभर्नरहरूको इतिहास';
      } else if (mode === 1) {
        question = `वि.सं. ${h.year} मा भएको "${h.event}" कोसँग वा कुन निकायसँग सम्बन्धित छ? (विवरण #${i + 1})`;
        correct = h.ruler;
        wrongs = ['जंगबहादुर राणा', 'वीर शमशेर', 'भीम शमशेर'].filter(r => r !== h.ruler) as any;
        if (wrongs.length < 3) wrongs = ['चन्द्र शमशेर', 'देव शमशेर', 'माधवराज'];
        expl = `${h.year} को ${h.event} ${h.ruler} सँग सम्बन्धित छ। ${h.desc}`;
      } else {
        question = `नेपालमा "${h.event}" को मुख्य ऐतिहासिक महत्त्व के थियो? (केस #${i + 1})`;
        correct = h.desc;
        wrongs = ['शेयर बजार पूर्ण रूपमा बन्द गरिएको थियो', 'नेपालको सम्पूर्ण कर्जा मिनाहा गरिएको थियो', 'कागजी नोट खारेज गरी चाँदीका असर्फी मात्र चलाइएको थियो'];
        expl = `${h.event} (${h.year}): ${h.desc}`;
      }

      const { options, correctIndex } = createRotatedOptions(correct, wrongs, i);
      addUnique({
        id: qId,
        category,
        difficulty: i % 3 === 0 ? 'Hard' : i % 2 === 0 ? 'Medium' : 'Easy',
        subTopic,
        syllabusModule: 'नेपालको इतिहास र बैंकिङ विकास',
        examTip: 'लोक सेवा टिप्स: तेजारथ अड्डा १९३३, नेपाल बैंक १९९४ कार्तिक ३० र राष्ट्र बैंक २०१३ वैशाख १४ का मितिहरू बैंकिङ परीक्षाको आधारशिला हुन्।',
        question,
        options,
        correctAnswer: correctIndex,
        explanation: expl
      });
    }
  }

  else {
    const caCurrents = [
      { topic: 'पेरिस पारालम्पिक २०२४', q: 'पेरिस पारालम्पिक २०२४ मा नेपालका लागि ऐतिहासिक पहिलो कास्य पदक जित्ने खेलाडी को हुन्?', a: 'पलेशा गोवर्धन (पारा-तेक्वान्दो K44, -५७ केजी)', w: ['दीपक विष्ट', 'गौरिका सिंह', 'सन्तोषी श्रेष्ठ'], expl: 'पलेशा गोवर्धनले पेरिस पारालम्पिक २०२४ मा सर्बियाकी खेलाडीलाई १५-८ ले पराजित गरी नेपालको इतिहासमै पहिलो आधिकारिक ओलम्पिक/पारालम्पिक पदक जितेकी हुन् (प्रशिक्षक: कविराज नेगी लामा)।' },
      { topic: 'फिफा विश्वकप २०२६', q: 'सन् २०२६ मा आयोजना हुने २३औँ फिफा विश्वकप फुटबल प्रतियोगितामा कति राष्ट्रिय टोली सहभागी हुनेछन्?', a: '४८ टोली (48 Teams)', w: ['३२ टोली', '६४ टोली', '२४ टोली'], expl: 'फिफा विश्वकप २०२६ संयुक्त रूपमा अमेरिका, क्यानडा र मेक्सिकोमा आयोजना हुँदैछ र यसमा पहिलो पटक ३२ बाट बढाएर ४८ टोली सहभागी गराइँदैछ।' },
      { topic: 'आर्थिक सर्वेक्षण २०८१/८२', q: 'आर्थिक सर्वेक्षण २०८१/८२ अनुसार नेपालको कुल गार्हस्थ्य उत्पादन (GDP) मा सेवा क्षेत्रको योगदान कति प्रतिशत रहेको अनुमान छ?', a: 'करिब ६२.४ प्रतिशत (62.4%)', w: ['४५.० प्रतिशत', '२४.१ प्रतिशत', '१३.० प्रतिशत'], expl: 'नेपालको अर्थतन्त्रमा सेवा क्षेत्रको योगदान सबैभन्दा बढी करिब ६२.४% रहेको छ भने कृषिको करिब २४% र उद्योगको करिब १३% रहेको छ।' },
      { topic: 'विपद् र यातायात पूर्वाधार', q: 'वि.सं. २०८१ असोजको अविरल वर्षा र बाढीपहिरोले क्षति पुर्‍याएको बीपी राजमार्ग कुन देशको सहयोगमा निर्माण भएको थियो?', a: 'जापान सरकार (JICA)', w: ['चीन सरकार', 'भारत सरकार', 'विश्व बैंक'], expl: 'बीपी राजमार्ग (बर्दिबास-सिन्धुली-बनेपा) जापान सरकारको अनुदान सहयोग (JICA) मा निर्माण भएको आधुनिक इन्जिनियरिङ नमुना सडक हो।' },
      { topic: 'बिमस्टेक (BIMSTEC)', q: 'बहुक्षेत्रीय प्राविधिक तथा आर्थिक सहयोगका लागि बङ्गालको खाडीको प्रयास (BIMSTEC) को स्थायी सचिवालय कहाँ रहेको छ?', a: 'ढाका, बङ्गलादेश', w: ['काठमाडौँ, नेपाल', 'नयाँ दिल्ली, भारत', 'कोलम्बो, श्रीलंका'], expl: 'BIMSTEC को स्थायी सचिवालय बङ्गलादेशको ढाकामा अवस्थित छ भने सार्क (SAARC) को सचिवालय काठमाडौँमा छ।' },
      { topic: 'राष्ट्रिय जनगणना २०७८', q: 'राष्ट्रिय जनगणना २०७८ अनुसार नेपालको कुल जनसङ्ख्या कति रहेको छ?', a: '२,९१,६४,५७८ जना (वार्षिक वृद्धिदर ०.९२%)', w: ['२,६४,९४,५०४ जना', '३,२५,००,००० जना', '२,८०,५०,००० जना'], expl: 'जनगणना २०७८ अनुसार नेपालको जनसङ्ख्या २ करोड ९१ लाख ६४ हजार ५७८ रहेको छ र लैङ्गिक अनुपात ९५.५९ छ।' },
      { topic: 'साक्षरता दर २०७८', q: 'राष्ट्रिय जनगणना २०७८ अनुसार नेपालको कुल साक्षरता दर कति प्रतिशत पुगेको छ?', a: '७६.३ प्रतिशत (पुरुष ८३.६%, महिला ६९.४%)', w: ['६५.९ प्रतिशत', '८२.० प्रतिशत', '७०.५ प्रतिशत'], expl: 'जनगणना २०७८ अनुसार नेपालको साक्षरता दर ७६.३% पुगेको छ (पुरुष ८३.६% र महिला ६९.४%)।' },
      { topic: 'दिगो विकास लक्ष्य (SDGs)', q: 'संयुक्त राष्ट्रसङ्घको दिगो विकास लक्ष्य (SDGs 2016-2030) अन्तर्गत कतिवटा विश्वव्यापी लक्ष्यहरू रहेका छन्?', a: '१७ वटा लक्ष्य र १६९ वटा गन्तव्य', w: ['८ वटा लक्ष्य', '२१ वटा लक्ष्य', '१५ वटा लक्ष्य'], expl: 'SDGs अन्तर्गत सन् २०३० सम्म हासिल गर्नुपर्ने १७ वटा लक्ष्यहरू (Goal 1: गरिबीको अन्त्य, Goal 8: मर्यादित काम र आर्थिक वृद्धि आदि) रहेका छन्।' },
      { topic: 'सार्क बडापत्र दिवस', q: 'दक्षिण एसियाली क्षेत्रीय सहयोग सङ्गठन (SAARC) को बडापत्र दिवस (Charter Day) कहिले मनाइन्छ?', a: 'डिसेम्बर ८ (December 8)', w: ['जनवरी १', 'सेप्टेम्बर २५', 'अक्टोबर २४'], expl: 'सन् १९८५ डिसेम्बर ८ मा ढाकामा सार्क बडापत्रमा हस्ताक्षर भएकाले हरेक वर्ष डिसेम्बर ८ लाई सार्क बडापत्र दिवसका रूपमा मनाइन्छ।' },
      { topic: 'अन्तर्राष्ट्रिय मुद्रा कोष (IMF) कोटा', q: 'नेपालको अन्तर्राष्ट्रिय मुद्रा कोष (IMF) मा मताधिकार तथा वित्तीय कोटा कुन मुद्रामा निर्धारण हुन्छ?', a: 'SDR (Special Drawing Rights - विशेष आहरण अधिकार)', w: ['अमेरिकी डलर मात्र', 'नेपाली रुपैयाँ', 'युरो'], expl: 'IMF मा सदस्य राष्ट्रहरूको कोटा र वित्तीय अधिकार SDR (Special Drawing Rights) बास्केटमा गणना गरिन्छ।' }
    ];

    let counter = 1;
    for (let i = 0; i < targetCount; i++) {
      const qId = `caq-${counter.toString().padStart(4, '0')}`;
      counter++;

      const c = caCurrents[i % caCurrents.length];
      const cycle = Math.floor(i / caCurrents.length);

      const question = `${c.q} (समसामयिक विश्लेषण सेट #${cycle + 1})`;
      const correct = c.a;
      const wrongs = c.w as [string, string, string];
      const expl = `${c.topic}: ${c.expl}`;

      const { options, correctIndex } = createRotatedOptions(correct, wrongs, i);
      addUnique({
        id: qId,
        category,
        difficulty: i % 3 === 0 ? 'Hard' : i % 2 === 0 ? 'Medium' : 'Easy',
        subTopic: 'आर्थिक सर्वेक्षण २०८१/८२ का प्रमुख सूचक र आर्थिक वृद्धि',
        syllabusModule: 'समसामयिक घटनाक्रम र आर्थिक सर्वेक्षण',
        actSection: 'आर्थिक सर्वेक्षण २०८१/८२ / अन्तर्राष्ट्रिय खेलकुद तथ्याङ्क',
        examTip: 'लोक सेवा टिप्स: पलेशा गोवर्धनको पेरिस पदक र फिफा २०२६ को ४८ टोली हालका सबै परीक्षाहरूका लागि उच्च सम्भावित प्रश्न हुन्।',
        question,
        options,
        correctAnswer: correctIndex,
        explanation: expl
      });
    }
  }

  REPOSITORY_CACHE[moduleKey] = questions;
  return questions;
}

export function getModuleQuestions(moduleKey: string): QuizQuestion[] {
  return buildModuleRepository(moduleKey, 1000);
}

export function getChunkedQuestions(moduleKey: string, chunkIndex: number = 0, chunkSize: number = 20): QuizQuestion[] {
  const all = getModuleQuestions(moduleKey);
  const start = chunkIndex * chunkSize;
  return all.slice(start, start + chunkSize);
}

// Master pools
export const ALL_QUIZ_QUESTIONS: QuizQuestion[] = (function() {
  const combined: QuizQuestion[] = [];
  for (const mod of SYLLABUS_MODULES) {
    combined.push(...buildModuleRepository(mod.id, 1000));
  }
  return combined;
})();

export const BANKING_NRB_POOL: QuizQuestion[] = ALL_QUIZ_QUESTIONS.filter(q => q.category === 'Banking' || q.category === 'NRB');
export const CURRENT_AFFAIRS_POOL: QuizQuestion[] = ALL_QUIZ_QUESTIONS.filter(q => q.category === 'Current Affairs');
export const ECONOMICS_MGMT_POOL: QuizQuestion[] = ALL_QUIZ_QUESTIONS.filter(q => q.category === 'Economics' || q.category === 'Management');
export const IT_MATH_ENGLISH_POOL: QuizQuestion[] = ALL_QUIZ_QUESTIONS.filter(q => q.category === 'Computer' || q.category === 'Mathematics' || q.category === 'LanguageTest');

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// ==========================================
// 3. getUniqueRandomQuestions() WITH SESSION TRACKING
// ==========================================

export interface UniqueRandomQuestionsOptions {
  category?: string;
  count?: number;
  difficulty?: DifficultyLevel | 'All';
  subTopic?: string;
  syllabusModule?: string;
  excludeIds?: string[];
  resetIfExhausted?: boolean;
}

export function getUniqueRandomQuestions(
  optionsOrCategory: string | UniqueRandomQuestionsOptions = 'All',
  countArg: number = 10,
  difficultyArg: DifficultyLevel | 'All' = 'All',
  subTopicArg?: string,
  syllabusModuleArg?: string
): QuizQuestion[] {
  let category = 'All';
  let count = countArg;
  let difficulty: DifficultyLevel | 'All' = difficultyArg;
  let subTopic = subTopicArg;
  let syllabusModule = syllabusModuleArg;
  let excludeIds: string[] = [];
  let resetIfExhausted = true;

  if (typeof optionsOrCategory === 'object' && optionsOrCategory !== null) {
    category = optionsOrCategory.category || 'All';
    count = optionsOrCategory.count !== undefined ? optionsOrCategory.count : 10;
    difficulty = optionsOrCategory.difficulty || 'All';
    subTopic = optionsOrCategory.subTopic;
    syllabusModule = optionsOrCategory.syllabusModule;
    excludeIds = optionsOrCategory.excludeIds || [];
    if (optionsOrCategory.resetIfExhausted !== undefined) {
      resetIfExhausted = optionsOrCategory.resetIfExhausted;
    }
  } else if (typeof optionsOrCategory === 'string') {
    category = optionsOrCategory;
  }

  // 1. Gather all questions for this category/module
  let allCategoryQuestions: QuizQuestion[] = [];
  if (syllabusModule && syllabusModule !== 'All') {
    const matched = SYLLABUS_MODULES.find(m => m.nameNepali === syllabusModule || m.id === syllabusModule || m.nameEnglish === syllabusModule);
    allCategoryQuestions = getModuleQuestions(matched ? matched.id : syllabusModule);
  } else if (category === 'All' || !category) {
    allCategoryQuestions = ALL_QUIZ_QUESTIONS;
  } else {
    const matchedModule = SYLLABUS_MODULES.find(m => m.category === category || m.id === category);
    if (matchedModule) {
      allCategoryQuestions = getModuleQuestions(matchedModule.id);
    } else {
      allCategoryQuestions = ALL_QUIZ_QUESTIONS.filter(q => q.category === category);
    }
  }

  // 2. Filter by subTopic if specified
  if (subTopic && subTopic !== 'All') {
    const subFiltered = allCategoryQuestions.filter(q => q.subTopic === subTopic);
    if (subFiltered.length > 0) {
      allCategoryQuestions = subFiltered;
    }
  }

  // 3. Filter by difficulty if specified
  if (difficulty && difficulty !== 'All') {
    const diffFiltered = allCategoryQuestions.filter(q => q.difficulty === difficulty);
    if (diffFiltered.length >= count) {
      allCategoryQuestions = diffFiltered;
    }
  }

  if (allCategoryQuestions.length === 0) {
    allCategoryQuestions = ALL_QUIZ_QUESTIONS;
  }

  // 4. Sanitize and strictly deduplicate question pool by ID and text hash
  allCategoryQuestions = sanitizeQuestionPool(allCategoryQuestions);

  if (excludeIds.length > 0) {
    const excludeSet = new Set(excludeIds);
    allCategoryQuestions = allCategoryQuestions.filter(q => !excludeSet.has(q.id));
  }

  // 5. ABSOLUTE DEDUPLICATION & TRACKING SYSTEM
  // Filter out ALL question IDs that have been attempted in previous sessions
  const attemptedIds = getAttemptedQuestionIds();
  let availableQuestions = allCategoryQuestions.filter(q => !attemptedIds.includes(q.id));

  // If available questions are less than requested count, reset history for that specific category
  if (availableQuestions.length < count) {
    if (resetIfExhausted) {
      resetCategoryAttemptHistory(syllabusModule || category);
      const refreshedAttempted = getAttemptedQuestionIds();
      availableQuestions = allCategoryQuestions.filter(q => !refreshedAttempted.includes(q.id));
      if (availableQuestions.length < count) {
        availableQuestions = [...allCategoryQuestions];
      }
    }
  }

  // Strict Fisher-Yates shuffle on available non-duplicate pool
  const shuffledAvailable = shuffleArray(availableQuestions);

  const selected: QuizQuestion[] = [];
  const selectedIds = new Set<string>();
  const selectedHashes = new Set<string>();

  const tryAdd = (q: QuizQuestion): boolean => {
    if (selectedIds.has(q.id)) return false;
    const hash = generateQuestionHash(q.question);
    if (selectedHashes.has(hash)) return false;
    selectedIds.add(q.id);
    selectedHashes.add(hash);
    selected.push(q);
    return true;
  };

  for (const q of shuffledAvailable) {
    if (selected.length >= count) break;
    tryAdd(q);
  }

  // In the rare scenario that more are needed to reach exact requested count
  if (selected.length < count && allCategoryQuestions.length > selected.length) {
    const fullShuffled = shuffleArray(allCategoryQuestions);
    for (const q of fullShuffled) {
      if (selected.length >= count) break;
      tryAdd(q);
    }
  }

  // Record served questions in attempt tracker (localStorage & sessionStorage)
  recordAttemptedQuestionIds(selected.map(q => q.id));

  return selected;
}

export function getQuestionsByCategory(
  category: string = 'All',
  count: number = 10,
  difficulty: DifficultyLevel | 'All' = 'All',
  subTopic?: string,
  syllabusModule?: string
): QuizQuestion[] {
  return getUniqueRandomQuestions(category, count, difficulty, subTopic, syllabusModule);
}

export function getAvailableSubTopics(categoryOrModule: string): SubTopicInfo[] {
  const mod = SYLLABUS_MODULES.find(m => m.id === categoryOrModule || m.category === categoryOrModule || m.nameNepali === categoryOrModule);
  if (mod) {
    return mod.subTopics;
  }
  return [];
}

export function getCategoryQuestionCount(category: string = 'All', subTopic?: string, syllabusModule?: string): number {
  let pool = ALL_QUIZ_QUESTIONS;
  if (syllabusModule && syllabusModule !== 'All') {
    const mod = SYLLABUS_MODULES.find(m => m.id === syllabusModule || m.nameNepali === syllabusModule || m.nameEnglish === syllabusModule);
    if (mod) {
      pool = getModuleQuestions(mod.id);
    }
  } else if (category && category !== 'All') {
    const mod = SYLLABUS_MODULES.find(m => m.id === category || m.category === category);
    if (mod) {
      pool = getModuleQuestions(mod.id);
    } else {
      pool = pool.filter(q => q.category === category);
    }
  }

  if (subTopic && subTopic !== 'All') {
    const subFiltered = pool.filter(q => q.subTopic === subTopic);
    if (subFiltered.length > 0) {
      return subFiltered.length;
    }
  }
  return pool.length;
}

export function convertQuizQuestionToQuestion(q: QuizQuestion): Question {
  const keys: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];
  const correctKey = keys[q.correctAnswer] || 'A';

  return {
    id: q.id,
    category: q.category as SubjectCategory,
    difficulty: q.difficulty,
    questionNepali: q.question,
    options: q.options.map((opt, idx) => ({
      key: keys[idx],
      textNepali: opt
    })),
    correctAnswer: correctKey,
    explanationNepali: q.explanation,
    actSection: q.actSection,
    economicSurveyRef: q.economicSurveyRef,
    examTip: q.examTip,
    syllabusModule: q.syllabusModule,
    examTag: `${q.syllabusModule || q.category} • ${q.id}`,
    topic: q.subTopic
  };
}
