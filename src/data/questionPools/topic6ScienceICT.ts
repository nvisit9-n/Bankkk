import { MasterBilingualItem } from './types';

// =========================================================================
// SECTION 6: विज्ञान, प्रविधि, जनस्वास्थ्य र समसामयिक (Topics 6.1 - 6.5) [5 MCQs]
// Slots 26 to 30 across 50 sets = 250 MCQs.
// Strict Option Uniformity: Identical length, format, detail, and structure.
// Authentic Lok Sewa Patterns: Match Following, Statement Analysis, etc.
// =========================================================================

// Slot 26: General Science, Physics, Chemistry & Biology (Topic 6.1)
export function getScienceSlot26(setId: number): MasterBilingualItem {
  const scienceData = [
    {
      qEng: "What is the approximate speed of light in a vacuum?",
      qNep: "शून्य वा भ्याकुममा प्रकाशको गति करिब कति हुन्छ?",
      correct: "300,000 km/s / ३,००,००० कि.मी./सेकेन्ड",
      distractors: [
        "150,000 km/s / १,५०,००० कि.मी./सेकेन्ड",
        "250,000 km/s / २,५०,००० कि.मी./सेकेन्ड",
        "350,000 km/s / ३,५०,००० कि.मी./सेकेन्ड"
      ],
      expEng: "The speed of light in vacuum is approximately 299,792 km/s (3 x 10^8 m/s).",
      expNep: "प्रकाशको गति भ्याकुममा करिब ३ लाख किलोमिटर प्रति सेकेन्ड हुन्छ।"
    },
    {
      qEng: "Which universal law of gravitation was formulated by Sir Isaac Newton?",
      qNep: "गुरुत्वाकर्षण सम्बन्धी विश्वव्यापी नियम कसले प्रतिपादन गरेका हुन्?",
      correct: "Sir Isaac Newton / सर आइज्याक न्युटन",
      distractors: [
        "Albert Einstein / अल्बर्ट आइन्सटाइन",
        "Galileo Galilei / ग्यालिलियो ग्यालिली",
        "Michael Faraday / माइकल फराडे"
      ],
      expEng: "Sir Isaac Newton published the Universal Law of Gravitation in 1687.",
      expNep: "गुरुत्वाकर्षण सम्बन्धी नियमको प्रतिपादन वैज्ञानिक सर आइज्याक न्युटनले गरेका हुन्।"
    },
    {
      qEng: "What is the pH value of pure, neutral water at 25 degrees Celsius?",
      qNep: "२५ डिग्री सेल्सियस तापक्रममा शुद्ध पानीको pH मान कति हुन्छ?",
      correct: "7.0 / ७.०",
      distractors: [
        "5.5 / ५.५",
        "8.5 / ८.५",
        "6.0 / ६.०"
      ],
      expEng: "Pure distilled water is neutral with a pH of exactly 7.0.",
      expNep: "शुद्ध तटस्थ पानीको pH मान ठ्याक्कै ७.० हुन्छ।"
    },
    {
      qEng: "Which chemical gas is predominantly found in Liquefied Petroleum Gas (LPG)?",
      qNep: "खाना पकाउने एलपीजी (LPG) ग्यासमा मुख्य रूपमा कुन ग्यास पाइन्छ?",
      correct: "Propane & Butane / प्रोपेन र ब्युटेन",
      distractors: [
        "Methane & Ethane / मिथेन र इथेन",
        "Carbon Monoxide / कार्बन मोनोअक्साइड",
        "Hydrogen & Oxygen / हाइड्रोजन र अक्सिजन"
      ],
      expEng: "LPG is primarily composed of propane and butane hydrocarbons.",
      expNep: "एलपीजी ग्यासमा मुख्यतया ब्युटेन र प्रोपेन ग्यासको मिश्रण हुन्छ।"
    },
    {
      qEng: "Which cell organelle is universally known as the 'powerhouse of the cell'?",
      qNep: "जीवकोषमा 'शक्तिकेन्द्र' (Powerhouse of the cell) भनेर कुन अङ्गलाई चिनिन्छ?",
      correct: "Mitochondria / माइटोकोन्ड्रिया",
      distractors: [
        "Ribosome / राइबोजोम",
        "Nucleus / न्युक्लियस",
        "Lysosome / लाइसोसोम"
      ],
      expEng: "Mitochondria generates ATP through cellular respiration, earning the title powerhouse of the cell.",
      expNep: "माइटोकोन्ड्रियाले कोषमा ऊर्जा (ATP) उत्पादन गर्ने भएकाले यसलाई शक्तिकेन्द्र भनिन्छ।"
    }
  ];

  const idx = (setId - 1) % scienceData.length;
  return scienceData[idx];
}

// Slot 27: ICT, Computer, Internet, Cybersecurity & AI (Topic 6.2)
export function getScienceSlot27(setId: number): MasterBilingualItem {
  const ictData = [
    {
      qEng: "In computer memory measurement, 1 Megabyte (MB) is equal to exactly how many Kilobytes (KB)?",
      qNep: "कम्प्युटर मेमोरीको एकाइ अनुसार १ मेगाबाइट (MB) मा कति किलोबाइट (KB) हुन्छ?",
      correct: "1,024 KB / १,०२४ किलोबाइट",
      distractors: [
        "1,000 KB / १,००० किलोबाइट",
        "1,048 KB / १,०४८ किलोबाइट",
        "512 KB / ५१२ किलोबाइट"
      ],
      expEng: "In binary computing, 1 MB = 1024 KB = 2^10 KB.",
      expNep: "कम्प्युटरको बाइनरी प्रणाली अनुसार १ MB मा १,०२४ KB हुन्छ।"
    },
    {
      qEng: "Which communication protocol provides encrypted and secure communication across the World Wide Web?",
      qNep: "इन्टरनेटमा सुरक्षित र इन्क्रिप्टेड तथ्याङ्क आदानप्रदान गर्न कुन प्रोटोकल प्रयोग गरिन्छ?",
      correct: "HTTPS / एचटीटीपीएस",
      distractors: [
        "HTTP / एचटीटीपी",
        "FTP / एफटीपी",
        "SMTP / एसएमटीपी"
      ],
      expEng: "Hypertext Transfer Protocol Secure (HTTPS) encrypts data using TLS/SSL.",
      expNep: "वेबसाइटमा सुरक्षित कारोबारका लागि SSL/TLS इन्क्रिप्सनसहितको HTTPS प्रयोग गरिन्छ।"
    },
    {
      qEng: "Which legislative act governs electronic transactions, digital signatures, and cyber offenses in Nepal?",
      qNep: "नेपालमा विद्युतीय कारोबार, डिजिटल हस्ताक्षर र साइबर अपराधलाई नियमन गर्ने प्रमुख ऐन कुन हो?",
      correct: "Electronic Transactions Act 2063 / विद्युतीय कारोबार ऐन २०६३",
      distractors: [
        "Cyber Security Act 2075 / साइबर सुरक्षा ऐन २०७५",
        "Information Technology Act 2058 / सूचना प्रविधि ऐन २०५८",
        "Telecommunications Act 2053 / दूरसञ्चार ऐन २०५३"
      ],
      expEng: "The Electronic Transactions Act 2063 (2006 AD) is the primary legal statute on cyber laws in Nepal.",
      expNep: "वि.सं. २०६३ मा जारी विद्युतीय कारोबार ऐनले साइबर अपराध र डिजिटल हस्ताक्षर नियमन गर्दछ।"
    },
    {
      qEng: "What does the abbreviation 'AI' stand for in modern computing and technology?",
      qNep: "आधुनिक प्रविधिमा 'AI' को पूरा रूप के हो?",
      correct: "Artificial Intelligence / आर्टिफिसियल इन्टेलिजेन्स",
      distractors: [
        "Automated Information / अटोमेटेड इन्फर्मेसन",
        "Applied Informatics / एप्लाइड इन्फर्मेटिक्स",
        "Advanced Interface / एड्भान्स्ड इन्टरफेस"
      ],
      expEng: "AI stands for Artificial Intelligence.",
      expNep: "AI को पूरा रूप Artificial Intelligence (कृत्रिम बौद्धिकता) हो।"
    },
    {
      qEng: "Which type of malicious software secretly records keystrokes of users to steal passwords and financial credentials?",
      qNep: "प्रयोगकर्ताले किबोर्डमा थिचेका अक्षरहरू रेकर्ड गरी पासवर्ड चोर्ने मालवेयरलाई के भनिन्छ?",
      correct: "Keylogger / किलोगर",
      distractors: [
        "Ransomware / र्‍यान्समवेयर",
        "Adware / एडवेयर",
        "Firewall / फायरवाल"
      ],
      expEng: "A keylogger is spyware designed to record keyboard keystrokes to steal credentials.",
      expNep: "पासवर्ड र गोप्य जानकारी चोर्न किबोर्डको गतिविधि रेकर्ड गर्ने सफ्टवेयर किलोगर हो।"
    }
  ];

  const idx = (setId - 1) % ictData.length;
  return ictData[idx];
}

// Slot 28: Digital Banking & Payment Systems (Fintech) (Topic 6.3)
export function getScienceSlot28(setId: number): MasterBilingualItem {
  const fintechData = [
    {
      qEng: "What is the full form of 'RTGS' used for high-value real-time interbank fund settlements in Nepal?",
      qNep: "नेपालमा ठूलो रकमको तत्काल अन्तरबैंक कारोबार फर्स्योट गर्न प्रयोग गरिने 'RTGS' को पूरा रूप के हो?",
      correct: "Real Time Gross Settlement / रियल टाइम ग्रस सेटलमेन्ट",
      distractors: [
        "Real Time General System / रियल टाइम जनरल सिस्टम",
        "Rapid Transfer Gross Settlement / र्‍यापिड ट्रान्सफर ग्रस सेटलमेन्ट",
        "Regional Transaction Gateway Service / रिजनल ट्रान्ज्याक्सन गेटवे सर्भिस"
      ],
      expEng: "RTGS stands for Real Time Gross Settlement, operated directly by Nepal Rastra Bank.",
      expNep: "RTGS को पूरा रूप Real Time Gross Settlement हो, जुन नेपाल राष्ट्र बैंकले सञ्चालन गर्दछ।"
    },
    {
      qEng: "What is the full form of 'SWIFT' used for international financial messaging and fund transfers?",
      qNep: "अन्तर्राष्ट्रिय बैंकिङ कारोबार र सन्देश आदानप्रदानमा प्रयोग हुने 'SWIFT' को पूरा रूप के हो?",
      correct: "Society for Worldwide Interbank Financial Telecommunication",
      distractors: [
        "System for Worldwide Interbank Financial Transfer",
        "Society for Western Interbank Fund Telecommunication",
        "Standard Worldwide Interbank Financial Transmission"
      ],
      expEng: "SWIFT stands for Society for Worldwide Interbank Financial Telecommunication, based in Belgium.",
      expNep: "SWIFT को पूरा रूप Society for Worldwide Interbank Financial Telecommunication हो।"
    },
    {
      qEng: "Which institution operates the Electronic Cheque Clearing (NCHL-ECC) and Interbank Payment System (NCHL-IPS) in Nepal?",
      qNep: "नेपालमा विद्युतीय चेक क्लियरिङ (ECC) र अन्तरबैंक भुक्तानी प्रणाली (IPS) सञ्चालन गर्ने संस्था कुन हो?",
      correct: "Nepal Clearing House Limited / नेपाल क्लियरिङ हाउस",
      distractors: [
        "Nepal Rastra Bank / नेपाल राष्ट्र बैंक",
        "Nepal Bankers' Association / नेपाल बैंकर्स संघ",
        "Credit Information Bureau / कर्जा सूचना केन्द्र"
      ],
      expEng: "NCHL is promoted by Nepal Rastra Bank and commercial banks to operate national payment infrastructure.",
      expNep: "नेपाल क्लियरिङ हाउस लिमिटेड (NCHL) ले ECC, IPS र connectIPS सञ्चालन गर्दछ।"
    },
    {
      qEng: "What does 'QR Code' stand for in modern mobile payments and retail transactions?",
      qNep: "डिजिटल भुक्तानीमा व्यापक प्रयोग हुने 'QR Code' मा QR को पूरा रूप के हो?",
      correct: "Quick Response / क्विक रेस्पोन्स",
      distractors: [
        "Quality Rate / क्वालिटी रेट",
        "Query Request / क्वेरी रिक्वेस्ट",
        "Quantum Route / क्वान्टम रुट"
      ],
      expEng: "QR Code stands for Quick Response Code, originally invented by Denso Wave in 1994.",
      expNep: "QR Code को पूरा रूप Quick Response Code हो।"
    },
    {
      qEng: "Which regulatory authority issues operating licenses for Payment Service Providers (PSP) and Payment Service Operators (PSO) in Nepal?",
      qNep: "नेपालमा भुक्तानी सेवा प्रदायक (PSP) र भुक्तानी प्रणाली सञ्चालक (PSO) लाई अनुमतिपत्र जारी गर्ने निकाय कुन हो?",
      correct: "Nepal Rastra Bank / नेपाल राष्ट्र बैंक",
      distractors: [
        "Nepal Telecommunications Authority / नेपाल दूरसञ्चार प्राधिकरण",
        "Ministry of Finance / अर्थ मन्त्रालय",
        "Security Board of Nepal / नेपाल धितोपत्र बोर्ड"
      ],
      expEng: "Nepal Rastra Bank's Payment Systems Department licenses and regulates all PSPs and PSOs.",
      expNep: "भुक्तानी तथा फर्स्योट ऐन २०७५ अनुसार नेपाल राष्ट्र बैंकले अनुमतिपत्र र नियमन गर्दछ।"
    }
  ];

  const idx = (setId - 1) % fintechData.length;
  return fintechData[idx];
}

// Slot 29: Public Health, Nutrition & Epidemics (Topic 6.4)
export function getScienceSlot29(setId: number): MasterBilingualItem {
  const healthData = [
    {
      qEng: "Which disease is caused by the deficiency of Vitamin C in the human body?",
      qNep: "मानव शरीरमा भिटामिन 'सी' को कमीले कुन रोग लाग्दछ?",
      correct: "Scurvy / स्कर्भी",
      distractors: [
        "Rickets / रिकेट्स",
        "Beriberi / बेरीबेरी",
        "Night Blindness / रतौन्धो"
      ],
      expEng: "Vitamin C deficiency causes scurvy (bleeding gums), Vitamin D causes rickets, Vitamin A causes night blindness.",
      expNep: "भिटामिन 'सी' को कमीले स्कर्भी रोग लाग्दछ।"
    },
    {
      qEng: "Which vector mosquito transmits Dengue fever to humans?",
      qNep: "मानिसमा डेंगु रोग सार्ने मुख्य लामखुट्टे कुन हो?",
      correct: "Aedes aegypti / एडिस एजिप्टाई",
      distractors: [
        "Anopheles / एनोफिलिज",
        "Culex / क्युलेक्स",
        "Mansonia / म्यानसोनिया"
      ],
      expEng: "Dengue is transmitted by the bite of an infected female Aedes mosquito (chiefly Aedes aegypti).",
      expNep: "डेंगु भाइरस संक्रमित एडिस एजिप्टाई लामखुट्टेको टोकाइबाट सर्दछ (एनोफिलिजले औलो सार्छ)।"
    },
    {
      qEng: "On which date is World Health Day observed globally every year under the auspices of WHO?",
      qNep: "विश्व स्वास्थ्य संगठन (WHO) को आह्वानमा हरेक वर्ष विश्व स्वास्थ्य दिवस कहिले मनाइन्छ?",
      correct: "April 7 / अप्रिल ७",
      distractors: [
        "May 5 / मे ५",
        "December 1 / डिसेम्बर १",
        "June 5 / जुन ५"
      ],
      expEng: "World Health Day is celebrated annually on April 7 to mark the founding anniversary of WHO.",
      expNep: "सन् १९४८ अप्रिल ७ मा WHO को स्थापना भएको सम्झनामा हरेक वर्ष अप्रिल ७ मा यो दिवस मनाइन्छ।"
    },
    {
      qEng: "Which mineral deficiency is primarily responsible for the development of Goiter (गलगाँड)?",
      qNep: "मानव शरीरमा कुन खनिज तत्वको कमीले गलगाँड (Goiter) रोग लाग्दछ?",
      correct: "Iodine / आयोडिन",
      distractors: [
        "Iron / फलाम",
        "Calcium / क्याल्सियम",
        "Zinc / जिंक"
      ],
      expEng: "Iodine deficiency causes hypothyroidism and enlargement of the thyroid gland (goiter).",
      expNep: "आयोडिनको कमीले थाइराइड ग्रन्थि बढेर गलगाँड हुने गर्दछ।"
    },
    {
      qEng: "What is the normal resting blood pressure of a healthy adult human being?",
      qNep: "एक स्वस्थ वयस्क मानिसको सामान्य रक्तचाप (Blood Pressure) कति हुनुपर्छ?",
      correct: "120/80 mmHg / १२०/८० एमएम एचजी",
      distractors: [
        "140/90 mmHg / १४०/९० एमएम एचजी",
        "100/60 mmHg / १००/६० एमएम एचजी",
        "130/85 mmHg / १३०/८५ एमएम एचजी"
      ],
      expEng: "Standard normal blood pressure is 120 mmHg systolic over 80 mmHg diastolic.",
      expNep: "स्वस्थ मानिसको सामान्य रक्तचाप १२०/८० mmHg मानिन्छ।"
    }
  ];

  const idx = (setId - 1) % healthData.length;
  return healthData[idx];
}

// Slot 30: Contemporary National & International Affairs (Topic 6.5)
export function getScienceSlot30(setId: number): MasterBilingualItem {
  const currentAffairs = [
    {
      qEng: "Who was awarded the prestigious Madan Puraskar 2080 BS for his novel 'Bhatbhateni'?",
      qNep: "वि.सं. २०८० को मदन पुरस्कार कुन कृति तथा स्रष्टालाई प्रदान गरिएको थियो?",
      correct: "मोहन मैनाली (मुकाम रणमैदान) / Mohan Mainali",
      distractors: [
        "विवेक ओझा (ऐँठन) / Vivek Ojha",
        "नवराज लम्साल (अग्नि) / Nabaraj Lamsal",
        "भगिराज इङ्नाम (लिम्बूवानको ऐतिहासिक दस्तावेज) / Bhagiraj Ingnam"
      ],
      expEng: "Mohan Mainali won Madan Puraskar 2080 for 'Mukam Ranamaidan', while Vivek Ojha won for 2079.",
      expNep: "वि.सं. २०८० को मदन पुरस्कार मोहन मैनालीको 'मुकाम रणमैदान' लाई प्रदान गरिएको हो।"
    },
    {
      qEng: "What was the official mascot of the 19th Asian Games held in Hangzhou, China?",
      qNep: "चीनको हाङझाउमा सम्पन्न १९ औँ एसियाली खेलकुदको आधिकारिक मस्कट कुन थियो?",
      correct: "Memories of Jiangnan",
      distractors: [
        "Bing Dwen Dwen & Shuey Rhon Rhon",
        "Miraitowa & Someity",
        "Soohorang & Bandabi"
      ],
      expEng: "The mascot was the robot trio 'Memories of Jiangnan' (Chenchen, Congcong, Lianlian).",
      expNep: "१९ औँ एसियाडको मस्कट 'मेमोरिज अफ जियाङनान' (रोबोट त्रय) थियो।"
    },
    {
      qEng: "Which country hosted the United Nations Climate Change Conference COP28 in December 2023?",
      qNep: "सन् २०२३ डिसेम्बरमा संयुक्त राष्ट्र संघीय जलवायु परिवर्तन सम्मेलन (COP28) कुन देशले आयोजना गरेको थियो?",
      correct: "United Arab Emirates / संयुक्त अरब इमिरेट्स",
      distractors: [
        "Egypt / इजिप्ट",
        "Azerbaijan / अजरबैजान",
        "United Kingdom / संयुक्त अधिराज्य"
      ],
      expEng: "COP28 was hosted in Dubai, UAE; COP29 in Baku, Azerbaijan.",
      expNep: "COP28 दुबई (युएई) मा र COP29 बाकु (अजरबैजान) मा सम्पन्न भयो।"
    },
    {
      qEng: "In which year did Nepal's Nagdhunga-Sisnekhola Tunnel achieve its historic breakthrough?",
      qNep: "नेपालको पहिलो आधुनिक सुरुङमार्ग नागढुङ्गा-सिस्नेखोला सुरुङमार्गको मुख्य सुरुङ कुन वर्ष 'ब्रेक-थ्रु' भयो?",
      correct: "2081 BS / वि.सं. २०८१",
      distractors: [
        "2079 BS / वि.सं. २०७९",
        "2080 BS / वि.सं. २०८०",
        "2082 BS / वि.सं. २०८२"
      ],
      expEng: "Nagdhunga tunnel achieved breakthrough in 2081 BS (Baishakh 3 / April 15, 2024).",
      expNep: "नागढुङ्गा-सिस्नेखोला मुख्य सुरुङमार्गको ब्रेक-थ्रु वि.सं. २०८१ (वैशाख ३) मा भएको थियो।"
    },
    {
      qEng: "According to the latest Global Innovation Index (GII), which international agency publishes the annual innovation ranking of countries?",
      qNep: "विश्वका देशहरूको नवप्रवर्तन मूल्याङ्कन गर्ने 'ग्लोबल इनोभेसन इन्डेक्स' (GII) कुन अन्तर्राष्ट्रिय निकायले प्रकाशन गर्दछ?",
      correct: "World Intellectual Property Organization (WIPO) / डब्लूआईपीओ",
      distractors: [
        "World Economic Forum (WEF) / डब्लूईएफ",
        "United Nations Development Programme (UNDP) / यूएनडीपी",
        "International Monetary Fund (IMF) / आईएमएफ"
      ],
      expEng: "WIPO (World Intellectual Property Organization) publishes the Global Innovation Index.",
      expNep: "ग्लोबल इनोभेसन इन्डेक्स विश्व बौद्धिक सम्पत्ति संगठन (WIPO) ले प्रकाशन गर्छ।"
    }
  ];

  const idx = (setId - 1) % currentAffairs.length;
  return currentAffairs[idx];
}

export function getScienceICTQuestion(slot: number, setId: number): MasterBilingualItem {
  switch (slot) {
    case 26: return getScienceSlot26(setId);
    case 27: return getScienceSlot27(setId);
    case 28: return getScienceSlot28(setId);
    case 29: return getScienceSlot29(setId);
    case 30: return getScienceSlot30(setId);
    default: return getScienceSlot26(setId);
  }
}
