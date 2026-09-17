export interface VideoLecture {
  id: string;
  title: string;
  nepaliTitle: string;
  instructor: string;
  instructorTitle: string;
  category: 'Banking' | 'Loksewa' | 'Accounting' | 'Economy' | 'CurrentAffairs' | 'Custom';
  youtubeVideoId: string; // YouTube 11-char video ID or playlist embed
  youtubeUrl: string;
  duration: string;
  views: string;
  publishedDate: string;
  description: string;
  isPlaylist?: boolean;
  playlistId?: string;
  timestamps?: { time: string; seconds: number; title: string }[];
  keyTakeaways: string[];
  examTags: string[];
  thumbnailUrl?: string;
  isPremium?: boolean;
  isPrivateVimeo?: boolean;
}

export const CURATED_VIDEO_LECTURES: VideoLecture[] = [
  {
    id: 'vid-01',
    title: 'Nepal Rastra Bank Act, 2058 - Complete Section Analysis & Loksewa Questions',
    nepaliTitle: 'नेपाल राष्ट्र बैंक ऐन, २०५८ - दफागत विश्लेषण र लिखित परीक्षा तयारी',
    instructor: 'सुभाष शर्मा',
    instructorTitle: 'उप-निर्देशक, नेपाल राष्ट्र बैंक',
    category: 'Banking',
    youtubeVideoId: 'yq7hWqG1510',
    youtubeUrl: 'https://www.youtube.com/watch?v=yq7hWqG1510',
    duration: '48:30',
    views: '34.2K',
    publishedDate: '२०८० फागुन',
    description: 'नेपाल राष्ट्र बैंक ऐन, २०५८ को उद्देश्य, काम, कर्तव्य र अधिकार, सञ्चालक समितिको गठन र गभर्नरको नियुक्ति/बर्खास्ती प्रक्रियाको गहन विश्लेषण।',
    timestamps: [
      { time: '00:00', seconds: 0, title: 'परिचय तथा ऐनको ऐतिहासिक पृष्ठभूमि' },
      { time: '07:20', seconds: 440, title: 'दफा ४: बैंकको उद्देश्य र स्वायत्तता' },
      { time: '18:45', seconds: 1125, title: 'दफा ५: काम, कर्तव्य र अधिकारको व्याख्या' },
      { time: '31:10', seconds: 1870, title: 'दफा १४ र २१: सञ्चालक समिति र गभर्नर बर्खास्ती' },
      { time: '41:00', seconds: 2460, title: 'विगतमा सोधिएका १० वटा मोडल प्रश्न र उत्तर ढाँचा' }
    ],
    keyTakeaways: [
      'दफा ४ का मुख्य ४ उद्देश्यहरू कण्ठस्थ गर्ने सूत्र',
      'गभर्नर बर्खास्तीका ५ आधारहरू र सर्वोच्च अदालतका नजिरहरू',
      'लिखित परीक्षामा १० अङ्कको उत्तर प्रस्तुत गर्ने मानक तरिका'
    ],
    examTags: ['NRB Level 4', 'NRB Level 6', 'RBB Officer']
  },
  {
    id: 'vid-02',
    title: 'BAFIA 2073 - Bank Categories, Lending Directives & Good Governance',
    nepaliTitle: 'बैंक तथा वित्तीय संस्था सम्बन्धी ऐन, २०७३ (BAFIA) - क, ख, ग, घ वर्गीकरण',
    instructor: 'सीए. मनिष पौडेल',
    instructorTitle: 'चार्टर्ड एकाउन्टेन्ट तथा बैंकिङ प्रशिक्षक',
    category: 'Banking',
    youtubeVideoId: 't4zB4xLz3_c',
    youtubeUrl: 'https://www.youtube.com/watch?v=t4zB4xLz3_c',
    duration: '52:10',
    views: '29.8K',
    publishedDate: '२०८० चैत',
    description: 'बैंक तथा वित्तीय संस्थाहरूको इजाजतपत्र, पुँजी कोष आवश्यकता, वर्गीकरण र सञ्चालक तथा प्रमुख कार्यकारी अधिकृतको योग्यता/अयोग्यता सम्बन्धी प्रावधान।',
    timestamps: [
      { time: '00:00', seconds: 0, title: 'BAFIA २०७३ को प्रस्तावना र दायरा' },
      { time: '12:15', seconds: 735, title: 'दफा ३१: क, ख, ग, घ वर्गको कार्यक्षेत्र तुलना' },
      { time: '26:40', seconds: 1600, title: 'दफा ४९: इजाजतपत्रप्राप्त संस्थाको कारोबार' },
      { time: '40:20', seconds: 2420, title: 'सञ्चालक र CEO को Fit and Proper Test' }
    ],
    keyTakeaways: [
      'चारवटै वर्गका बैंकहरूको तुलनात्मक तालिका',
      'संस्थागत सुशासन (Corporate Governance) का आधारभूत सिद्धान्त'
    ],
    examTags: ['RBB Level 4', 'NBL Assistant', 'ADBL']
  },
  {
    id: 'vid-03',
    title: 'New Public Management (NPM) & Good Governance in Nepal',
    nepaliTitle: 'नयाँ सार्वजनिक व्यवस्थापन (NPM) र नेपालमा सुशासन - लोकसेवा विशेष',
    instructor: 'ईश्वर घिमिरे',
    instructorTitle: 'सह-सचिव, नेपाल सरकार',
    category: 'Loksewa',
    youtubeVideoId: '9G06gQd17W8',
    youtubeUrl: 'https://www.youtube.com/watch?v=9G06gQd17W8',
    duration: '44:15',
    views: '41.5K',
    publishedDate: '२०८१ वैशाख',
    description: 'सार्वजनिक प्रशासन, NPM को उद्भव, परम्परागत नोकरशाहीसँगको तुलना र नेपालको निजामती सेवामा यसको प्रयोग र चुनौतीहरू।',
    timestamps: [
      { time: '00:00', seconds: 0, title: 'NPM को उत्पत्ति र पृष्ठभूमि (१९८०s)' },
      { time: '10:30', seconds: 630, title: 'NPM का ७ मुख्य स्तम्भहरू (Hood, 1991)' },
      { time: '24:00', seconds: 1440, title: 'नेपालको सार्वजनिक सेवामा NPM को प्रयोग' },
      { time: '36:15', seconds: 2175, title: 'परीक्षामा सोधिने सम्भावित विवेचनात्मक प्रश्न' }
    ],
    keyTakeaways: [
      '3Es (Economy, Efficiency, Effectiveness) को अवधारणा',
      'नागरिक बडापत्र, ई-गभर्नेन्स र नतिजामूलक बजेटिङको अन्तरसम्बन्ध'
    ],
    examTags: ['Loksewa Section Officer', 'Nayab Subba', 'NRB Level 6']
  },
  {
    id: 'vid-04',
    title: 'Financial Management: Ratio Analysis (Current, Quick, ROE, NPL Ratio)',
    nepaliTitle: 'अनुपात विश्लेषण (Ratio Analysis) - बैंक हिसाब र वित्तीय व्यवस्थापन',
    instructor: 'प्रा. डा. रमेश ढकाल',
    instructorTitle: 'अर्थशास्त्र तथा वित्त विभाग',
    category: 'Accounting',
    youtubeVideoId: 'dD8u_d6m1oM',
    youtubeUrl: 'https://www.youtube.com/watch?v=dD8u_d6m1oM',
    duration: '39:50',
    views: '26.1K',
    publishedDate: '२०८० माघ',
    description: 'तरलता अनुपात (Liquidity), नाफा आर्जन क्षमता (Profitability) र जोखिम मापन (NPL, CAR) का गणितीय हिसाब र परीक्षामा आउने न्यूमेरिकल समस्याको समाधान।',
    timestamps: [
      { time: '00:00', seconds: 0, title: 'वित्तीय अनुपातको महत्त्व र वर्गीकरण' },
      { time: '08:45', seconds: 525, title: 'Current Ratio & Quick Ratio को हिसाब' },
      { time: '20:10', seconds: 1210, title: 'ROA, ROE र NIM (Net Interest Margin)' },
      { time: '30:30', seconds: 1830, title: 'Non-Performing Loan (NPL) र Loan Loss Provision' }
    ],
    keyTakeaways: [
      'सवै अनुपातका गणितीय सूत्रहरू एकै पानामा',
      'बैंकिङ परीक्षाका न्यूमेरिकल प्रश्नहरू समाधान गर्ने सरल तरिका'
    ],
    examTags: ['Banking Level 5', 'Accounting Special', 'CA Foundation']
  },
  {
    id: 'vid-05',
    title: 'Current Monetary Policy of Nepal: Repo, Reverse Repo, SLR & CRR',
    nepaliTitle: 'चालु मौद्रिक नीति र यसका औजारहरू - बैंकदर, नीतिगत दर, CRR र SLR',
    instructor: 'डा. सञ्जय पन्त',
    instructorTitle: 'वरिष्ठ आर्थिक अनुसन्धानकर्ता',
    category: 'Economy',
    youtubeVideoId: 'zR7c0Bq0tQc',
    youtubeUrl: 'https://www.youtube.com/watch?v=zR7c0Bq0tQc',
    duration: '46:00',
    views: '38.9K',
    publishedDate: '२०८१ असार',
    description: 'नेपाल राष्ट्र बैंकले जारी गर्ने मौद्रिक नीतिका प्रत्यक्ष तथा अप्रत्यक्ष औजारहरू, मुद्रास्फीति नियन्त्रण र आर्थिक वृद्धिबीचको सन्तुलन।',
    timestamps: [
      { time: '00:00', seconds: 0, title: 'मौद्रिक नीतिको प्राथमिक उद्देश्य' },
      { time: '11:20', seconds: 680, title: 'परिमाणात्मक औजार: CRR, SLR, Bank Rate' },
      { time: '25:40', seconds: 1540, title: 'खुला बजार कारोबार (OMO) र स्थायी तरलता सुविधा (SLF)' },
      { time: '37:50', seconds: 2270, title: 'विदेशी विनिमय र चालू खाता घाटा सन्तुलन' }
    ],
    keyTakeaways: [
      'मौद्रिक नीतिका चालु दरहरू (Current Rates)',
      'विस्तारकारी र संकुचनकारी मौद्रिक नीतिबीचको भिन्नता'
    ],
    examTags: ['NRB Officer', 'Macroeconomics', 'Loksewa']
  },
  {
    id: 'vid-06',
    title: 'Nepal Constitution 2072: Fundamental Rights & Federal Structure',
    nepaliTitle: 'नेपालको संविधान: मौलिक हक (दफा १६ देखि ४६) र राज्यका निर्देशक सिद्धान्त',
    instructor: 'कमल दाहाल',
    instructorTitle: 'कानुनविद् तथा शाखा अधिकृत',
    category: 'Loksewa',
    youtubeVideoId: 'VnE8tP8wL8w',
    youtubeUrl: 'https://www.youtube.com/watch?v=VnE8tP8wL8w',
    duration: '55:20',
    views: '45.3K',
    publishedDate: '२०८० मंसिर',
    description: 'नेपालको संविधानका ३१ वटा मौलिक हकलाई सम्झने सजिला सुत्रहरू, संवैधानिक उपचारको हक र संघ, प्रदेश र स्थानीय तहको अधिकार बाँडफाँड।',
    timestamps: [
      { time: '00:00', seconds: 0, title: 'संविधानको प्रस्तावना र विशेषता' },
      { time: '14:30', seconds: 870, title: '३१ वटा मौलिक हक सजिलै कण्ठ पार्ने सुत्र' },
      { time: '32:00', seconds: 1920, title: 'धारा ४६ र १३३: संवैधानिक उपचार र रिट अधिकार' },
      { time: '45:10', seconds: 2710, title: 'अनुसूची ५, ६, ७, ८, ९ को अधिकार बाँडफाँड' }
    ],
    keyTakeaways: [
      'मौलिक हकका ३१ वटा धारा याद गर्ने एक्रोनिक्स (Acronyms)',
      'रिट क्षेत्राधिकार (बन्दीप्रत्यक्षीकरण, परमादेश, प्रतिषेध, उत्प्रेषण, अधिकारपृच्छा)'
    ],
    examTags: ['Loksewa All Exams', 'NRB Special', 'Banking Law']
  },
  {
    id: 'vid-07',
    title: 'AML/CFT & Banking Offence Act 2064: Suspicious Transaction Reporting (STR)',
    nepaliTitle: 'सम्पत्ति शुद्धीकरण (AML/CFT) तथा बैंकिङ कसूर र सजाय ऐन, २०६४',
    instructor: 'रोशन पौडेल',
    instructorTitle: 'कानुनी सल्लाहकार तथा पूर्व बैंकिङ अधिकृत',
    category: 'Banking',
    youtubeVideoId: 'k7KxXjE9j0s',
    youtubeUrl: 'https://www.youtube.com/watch?v=k7KxXjE9j0s',
    duration: '42:15',
    views: '31.4K',
    publishedDate: '२०८१ जेठ',
    description: 'सम्पत्ति शुद्धीकरण निवारण ऐन, २०६४ का मुख्य प्रावधान, वित्तीय जानकारी एकाइ (FIU), TTR र STR प्रतिवेदन सम्बन्धी बैंकिङ प्रक्रिया।',
    timestamps: [
      { time: '00:00', seconds: 0, title: 'सम्पत्ति शुद्धीकरण (Money Laundering) का ३ चरणहरू' },
      { time: '11:40', seconds: 700, title: 'दफा ७: ग्राहक पहिचान (KYC/CDD) सम्बन्धी व्यवस्था' },
      { time: '22:15', seconds: 1335, title: 'FIU-Nepal, STR र TTR को सीमा' },
      { time: '34:00', seconds: 2040, title: 'बैंकिङ कसूर ऐन २०६४ अन्तर्गत चेक अनादर र सजाय' }
    ],
    keyTakeaways: [
      'Placement, Layering, Integration का व्यावहारिक उदाहरण',
      'विगत ५ वर्षमा सोधिएका AML सम्बन्धी प्रश्नहरूको ढाँचा'
    ],
    examTags: ['NRB Assistant', 'RBB Cash Officer', 'ADBL Level 4']
  },
  {
    id: 'vid-08',
    title: 'Accounting Standards & Double Entry Bookkeeping for Banking Exams',
    nepaliTitle: 'लेखा प्रणाली र दोहोरो लेखा प्रणाली - गोश्वारा भौचर, खाता र सन्तुलन परीक्षण',
    instructor: 'सीए. दिपक शर्मा',
    instructorTitle: 'चार्टर्ड एकाउन्टेन्ट',
    category: 'Accounting',
    youtubeVideoId: 'm3X8P2vF1Qw',
    youtubeUrl: 'https://www.youtube.com/watch?v=m3X8P2vF1Qw',
    duration: '50:30',
    views: '28.9K',
    publishedDate: '२०८१ असोज',
    description: 'लेखाका सुनौला नियमहरू (Golden Rules of Accounting), जर्नल भौचर, लेजर, ट्रायल ब्यालेन्स र नेपाल वित्तीय प्रतिवेदन मान (NFRS) को परिचय।',
    timestamps: [
      { time: '00:00', seconds: 0, title: 'लेखाका ३ सुनौला नियमहरू र वर्गीकरण' },
      { time: '13:20', seconds: 800, title: 'सरकारी लेखा प्रणाली र बैंकिङ लेखाको भिन्नता' },
      { time: '27:45', seconds: 1665, title: 'Trial Balance तयार गर्दा आउने गल्ती र सुधार' },
      { time: '41:10', seconds: 2470, title: 'NFRS/NAS को बैंकिङ क्षेत्रमा कार्यान्वयन' }
    ],
    keyTakeaways: [
      'डेबिट र क्रेडिट छुट्याउने सजिला नियमहरू',
      'अन्तिम हिसाब (Final Accounts) र वासलात बनाउने ढाँचा'
    ],
    examTags: ['Banking Level 4', 'RBB Level 5 Accounting', 'Loksewa Lekha']
  },
  {
    id: 'vid-09',
    title: 'Nepal Geography, History & General Knowledge for Loksewa & Banking',
    nepaliTitle: 'नेपालको भूगोल, इतिहास, बैंकिङ इतिहास र समसामयिक सामान्य ज्ञान',
    instructor: 'गोपाल खनाल',
    instructorTitle: 'लोकसेवा सामान्य ज्ञान विशेषज्ञ',
    category: 'CurrentAffairs',
    youtubeVideoId: 'L8p3Q7v10oA',
    youtubeUrl: 'https://www.youtube.com/watch?v=L8p3Q7v10oA',
    duration: '58:40',
    views: '52.1K',
    publishedDate: '२०८१ साउन',
    description: 'नेपालमा बैंकिङ प्रणालीको विकास (तेजरथ अड्डा देखि डिजिटल बैंकिङसम्म), राष्ट्रिय निकुञ्ज, नदीनाला र लोकसेवा प्रथम पत्रमा सोधिने १०० महत्वपूर्ण तथ्य।',
    timestamps: [
      { time: '00:00', seconds: 0, title: 'नेपालको बैंकिङ इतिहास (१९९३ वि.सं. - हाल)' },
      { time: '15:20', seconds: 920, title: 'नेपालको भूगोल र प्रशासनिक विभाजन' },
      { time: '33:10', seconds: 1990, title: 'हालैका राष्ट्रिय तथा अन्तर्राष्ट्रिय समसामयिक घटना' },
      { time: '48:00', seconds: 2880, title: '५० वटा वस्तुगत बहुवैकल्पिक (MCQs) छलफल' }
    ],
    keyTakeaways: [
      'नेपालका बैंकहरूको स्थापना मिति र पहिलो गभर्नर सम्बन्धी तथ्य',
      'प्रथम चरणको MCQ परीक्षामा उच्च अंक प्राप्त गर्ने तरिका'
    ],
    examTags: ['Loksewa Paper 1', 'NRB Level 4 MCQs', 'RBB Assistant']
  }
];
