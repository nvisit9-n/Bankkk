import { MasterBilingualItem } from './types';

// =========================================================================
// SECTION 2: इतिहास, संस्कृति र सामाजिक व्यवस्था (Topics 2.1 - 2.3) [5 MCQs]
// Slots 6 to 10 across 50 sets = 250 MCQs.
// Strict Option Uniformity: Identical length, format, detail, and structure.
// Authentic Lok Sewa Patterns: Match Following, Statement Analysis, Chronology.
// =========================================================================

// Slot 6: Ancient, Medieval & Modern Political History (Topic 2.1)
export function getHistorySlot6(setId: number): MasterBilingualItem {
  const historyData = [
    {
      qEng: "In his Divyopadesh, King Prithvi Narayan Shah described Nepal as a 'yam between two stones'. Which two countries was he referring to?",
      qNep: "राजा पृथ्वीनारायण शाहले दिव्योपदेशमा 'नेपाल दुई ढुङ्गाबीचको तरुल जस्तै हो' भनी कुन दुई देशलाई सङ्केत गरेका थिए?",
      correct: "China & India / चीन र भारत",
      distractors: [
        "Tibet & Bhutan / तिब्बत र भूटान",
        "India & Britain / भारत र बेलायत",
        "China & Myanmar / चीन र म्यानमार"
      ],
      expEng: "Prithvi Narayan Shah characterized Nepal as situated between China (Qing) and India (British India).",
      expNep: "दिव्योपदेशमा उत्तरको चीन र दक्षिणको ब्रिटिस भारतलाई दुई ढुङ्गा र नेपाललाई तरुलको उपमा दिइएको हो।"
    },
    {
      qEng: "Who was the first king of the Kirat dynasty in the ancient history of Nepal?",
      qNep: "नेपालको प्राचीन इतिहासमा किरात वंशका प्रथम राजा को हुन्?",
      correct: "Yalamber / यलम्बर",
      distractors: [
        "Humati / हुमती",
        "Gasti / गस्ती",
        "Jitedasti / जितेदास्ती"
      ],
      expEng: "King Yalamber was the founder and first king of the Kirat dynasty in Nepal.",
      expNep: "किरात वंशका प्रथम राजा यलम्बर हुन् र अन्तिम राजा गस्ती हुन्।"
    },
    {
      qEng: "Which Lichchhavi king introduced the famous Mananka coin in Nepal?",
      qNep: "नेपालमा 'मानाङ्क' नामक मुद्रा निष्कासन गर्ने लिच्छवि राजा को हुन्?",
      correct: "Mandev / मानदेव",
      distractors: [
        "Amshuverma / अंशुवर्मा",
        "Gunakamadev / गुणकामदेव",
        "Shivadev I / शिवदेव प्रथम"
      ],
      expEng: "King Mandev issued the first historical coin of Nepal called 'Mananka' (circa 464 AD).",
      expNep: "नेपालको पहिलो प्रामाणिक मुद्रा मानिने 'मानाङ्क' राजा मानदेवले चलाएका हुन्।"
    },
    {
      qEng: "Which Lichchhavi ruler adopted the sovereign title 'Maharajadhiraja'?",
      qNep: "लिच्छविकालमा सर्वप्रथम 'महाराजाधिराज' पदवी धारण गर्ने शासक को हुन्?",
      correct: "Amshuverma / अंशुवर्मा",
      distractors: [
        "Mandev / मानदेव",
        "Vasantadev / वसन्तदेव",
        "Narendradev / नरेन्द्रदेव"
      ],
      expEng: "Amshuverma elevated his royal status by adopting the title 'Maharajadhiraja'.",
      expNep: "महामहिषामन्तबाट पछि 'महाराजाधिराज' पदवी धारण गर्ने लिच्छविकालीन विशिष्ट शासक अंशुवर्मा हुन्।"
    },
    {
      qEng: "In which year was the historic Sugauli Treaty signed between the Government of Nepal and the British East India Company?",
      qNep: "नेपाल र ब्रिटिस इस्ट इन्डिया कम्पनीबीच ऐतिहासिक सुगौली सन्धि कुन वर्ष सम्पन्न भएको थियो?",
      correct: "1816 AD / सन् १८१६",
      distractors: [
        "1814 AD / सन् १८१४",
        "1815 AD / सन् १८१५",
        "1817 AD / सन् १८१७"
      ],
      expEng: "The Sugauli Treaty was ratified in 1816 AD (formal exchange in March 1816).",
      expNep: "सुगौली सन्धि औपचारिक रूपमा सन् १८१६ (वि.सं. १८७२) मा लागू भएको थियो।"
    }
  ];

  const idx = (setId - 1) % historyData.length;
  return historyData[idx];
}

// Slot 7: Match the Following (जोडा मिलाउने) - Kings, Titles, Treaties & Heritage (Topic 2.1 - 2.3)
export function getHistorySlot7(setId: number): MasterBilingualItem {
  const matchData = [
    {
      qEng: "Match Group I (Rulers) with Group II (Historic Titles):\nGroup I: 1. Mandev, 2. Amshuverma, 3. Narendradev, 4. Shivadev II\nGroup II: a. Maharajadhiraja, b. Paramabhattaraka, c. Parakramanka, d. Bhattarakapadadvaya",
      qNep: "समूह I (शासक) र समूह II (ऐतिहासिक पदवी) बीच जोडा मिलाउनुहोस्:\nसमूह I: १. मानदेव, २. अंशुवर्मा, ३. नरेन्द्रदेव, ४. शिवदेव द्वितीय\nसमूह II: क. महाराजाधिराज, ख. परमभट्टारक, ग. पराक्रमाङ्क, घ. भट्टारकपादाद्वय",
      correct: "1-c, 2-a, 3-b, 4-d",
      distractors: [
        "1-a, 2-b, 3-c, 4-d",
        "1-c, 2-d, 3-a, 4-b",
        "1-b, 2-a, 3-d, 4-c"
      ],
      expEng: "Mandev was Parakramanka, Amshuverma was Maharajadhiraja, Narendradev was Paramabhattaraka.",
      expNep: "मानदेवलाई पराक्रमाङ्क, अंशुवर्मालाई महाराजाधिराज र नरेन्द्रदेवलाई परमभट्टारक भनिन्थ्यो।"
    },
    {
      qEng: "Match Group I (Events) with Group II (Historic Years BS):\nGroup I: 1. Kot Parva, 2. Bhandarkhal Parva, 3. Alau Parva, 4. 2007 Revolution\nGroup II: a. 1903 BS, b. 1903 BS (Kartik), c. 1904 BS, d. 2007 BS",
      qNep: "समूह I (ऐतिहासिक घटना) र समूह II (घटना वर्ष वि.सं.) बीच जोडा मिलाउनुहोस्:\nसमूह I: १. कोत पर्व, २. भण्डारखाल पर्व, ३. अलौ पर्व, ४. प्रजातन्त्र घोषणा\nसमूह II: क. १९०३ (असोज), ख. १९०३ (कात्तिक), ग. १९०४, घ. २००७",
      correct: "1-a, 2-b, 3-c, 4-d",
      distractors: [
        "1-b, 2-a, 3-c, 4-d",
        "1-a, 2-c, 3-b, 4-d",
        "1-c, 2-d, 3-a, 4-b"
      ],
      expEng: "Kot Parva (1903 Ashoj 2), Bhandarkhal (1903 Kartik 12), Alau (1904), Democracy (2007 Falgun 7).",
      expNep: "कोत पर्व १९०३ असोज २, भण्डारखाल १९०३ कात्तिक १२, अलौ पर्व १९०४ र प्रजातन्त्र २००७ फागुन ७ मा भएको हो।"
    },
    {
      qEng: "Match Group I (UNESCO World Heritage Sites) with Group II (Enlistment Year AD):\nGroup I: 1. Kathmandu Valley, 2. Sagarmatha National Park, 3. Chitwan National Park, 4. Lumbini\nGroup II: a. 1979 AD, b. 1979 AD, c. 1984 AD, d. 1997 AD",
      qNep: "समूह I (युनेस्को विश्व सम्पदा) र समूह II (सूचीकृत वर्ष सन्) बीच जोडा मिलाउनुहोस्:\nसमूह I: १. काठमाडौँ उपत्यका, २. सगरमाथा राष्ट्रिय निकुञ्ज, ३. चितवन राष्ट्रिय निकुञ्ज, ४. लुम्बिनी\nसमूह II: क. १९७९, ख. १९७९, ग. १९८४, घ. १९९७",
      correct: "1-a, 2-b, 3-c, 4-d",
      distractors: [
        "1-b, 2-a, 3-d, 4-c",
        "1-a, 2-c, 3-b, 4-d",
        "1-c, 2-d, 3-a, 4-b"
      ],
      expEng: "Kathmandu Valley & Sagarmatha (1979), Chitwan (1984), Lumbini (1997).",
      expNep: "काठमाडौँ र सगरमाथा १९७९ मा, चितवन १९८४ मा र लुम्बिनी १९९७ मा सूचीकृत भएका हुन्।"
    },
    {
      qEng: "Match Group I (Folk Dances) with Group II (Communities):\nGroup I: 1. Chandi Dance, 2. Sakela (Chandi), 3. Deuda, 4. Jhimriya\nGroup II: a. Rai, b. Kirat (Rai/Limbu), c. Khas (Karnali/Far-West), d. Tharu",
      qNep: "समूह I (परम्परागत नृत्य) र समूह II (सम्बन्धित समुदाय) बीच जोडा मिलाउनुहोस्:\nसमूह I: १. चण्डी नाच, २. साकेला नाच, ३. देउडा, ४. झिमरिया नाच\nसमूह II: क. राई, ख. किरात, ग. खस (कर्णाली/सुदूरपश्चिम), घ. थारू",
      correct: "1-a, 2-b, 3-c, 4-d",
      distractors: [
        "1-b, 2-a, 3-c, 4-d",
        "1-c, 2-d, 3-a, 4-b",
        "1-a, 2-c, 3-b, 4-d"
      ],
      expEng: "Sakela is Kirat/Rai, Deuda is Khas of western Nepal, Jhimriya is Tharu folk dance.",
      expNep: "चण्डी/साकेला किरात राई समुदाय, देउडा कर्णाली/सुदूरपश्चिम र झिमरिया थारू समुदायमा प्रचलित छ।"
    },
    {
      qEng: "Match Group I (Historic Treaties) with Group II (Partner Countries/Entities):\nGroup I: 1. Sugauli Treaty, 2. Treaty of Betrawati, 3. Treaty of Thapathali, 4. 1950 Peace & Friendship Treaty\nGroup II: a. British East India Company, b. Tibet/China, c. Tibet, d. Republic of India",
      qNep: "समूह I (ऐतिहासिक सन्धि) र समूह II (पक्ष राष्ट्र/सत्ता) बीच जोडा मिलाउनुहोस्:\nसमूह I: १. सुगौली सन्धि, २. बेत्रावती सन्धि, ३. थापाथली सन्धि, ४. शान्ति तथा मैत्री सन्धि\nसमूह II: क. ब्रिटिस इस्ट इन्डिया कम्पनी, ख. तिब्बत/चीन, ग. तिब्बत, घ. भारत",
      correct: "1-a, 2-b, 3-c, 4-d",
      distractors: [
        "1-b, 2-a, 3-c, 4-d",
        "1-a, 2-c, 3-b, 4-d",
        "1-c, 2-d, 3-a, 4-b"
      ],
      expEng: "Sugauli with British (1816), Betrawati with Tibet/China (1792), Thapathali with Tibet (1856), 1950 Treaty with India.",
      expNep: "सुगौली ब्रिटिससँग, बेत्रावती तिब्बत/चीनसँग, थापाथली तिब्बतसँग र १९५० को सन्धि भारतसँग भएको हो।"
    }
  ];

  const idx = (setId - 1) % matchData.length;
  return matchData[idx];
}

// Slot 8: Statement Analysis (भनाइ विश्लेषण) - History & Reforms (Topic 2.1)
export function getHistorySlot8(setId: number): MasterBilingualItem {
  const statementData = [
    {
      qEng: "Analyze the following statements regarding Prime Minister Jung Bahadur Rana:\nStatement 1: Jung Bahadur Rana introduced the first written legal code 'Muluki Ain' of Nepal in 1910 BS.\nStatement 2: He traveled to Britain and France in the year 1906 BS (1850 AD).",
      qNep: "जङ्गबहादुर राणा सम्बन्धी निम्न भनाइहरू विश्लेषण गर्नुहोस्:\nभनाइ १: जङ्गबहादुर राणाले वि.सं. १९१० मा नेपालको पहिलो लिखित कानुन 'मुलुकी ऐन' जारी गरेका थिए।\nभनाइ २: उनले वि.सं. १९०६ (सन् १८५०) मा बेलायत र फ्रान्सको ऐतिहासिक भ्रमण गरेका थिए।",
      correct: "दुवै भनाइ ठीक छन् / Both statements are correct",
      distractors: [
        "भनाइ १ ठीक र भनाइ २ बेठिक छ / Statement 1 correct, 2 incorrect",
        "भनाइ १ बेठिक र भनाइ २ ठीक छ / Statement 1 incorrect, 2 correct",
        "दुवै भनाइ बेठिक छन् / Both statements are incorrect"
      ],
      expEng: "Both statements are historically verified: Muluki Ain was enacted in 1910 BS and his Europe tour started in 1906 BS.",
      expNep: "दुवै भनाइ ऐतिहासिक रूपमा सत्य छन्: मुलुकी ऐन १९१० र युरोप भ्रमण १९०६ वि.सं. मा भएको हो।"
    },
    {
      qEng: "Analyze the following statements regarding the unification of Nepal:\nStatement 1: Nuwakot was the first territory conquered by Prithvi Narayan Shah in 1801 BS.\nStatement 2: Kathmandu (Kantipur) was annexed into the Gorkha kingdom in 1825 BS on the day of Indra Jatra.",
      qNep: "नेपालको एकीकरण अभियान सम्बन्धी निम्न भनाइहरू विश्लेषण गर्नुहोस्:\nभनाइ १: पृथ्वीनारायण शाहले वि.सं. १८०१ मा नुवाकोटमाथि ऐतिहासिक विजय हासिल गरेका थिए।\nभनाइ २: वि.सं. १८२५ मा इन्द्रजात्राको दिन काठमाडौँ (कान्तिपुर) गोर्खा राज्यमा गाभिएको थियो।",
      correct: "दुवै भनाइ ठीक छन् / Both statements are correct",
      distractors: [
        "भनाइ १ ठीक र भनाइ २ बेठिक छ / Statement 1 correct, 2 incorrect",
        "भनाइ १ बेठिक र भनाइ २ ठीक छ / Statement 1 incorrect, 2 correct",
        "दुवै भनाइ बेठिक छन् / Both statements are incorrect"
      ],
      expEng: "Nuwakot fell in 1801 BS and Kantipur was conquered on Indra Jatra in 1825 BS (Ashwin 13).",
      expNep: "नुवाकोट विजय १८०१ मा र कान्तिपुर विजय १८२५ को इन्द्रजात्राका दिन भएको थियो।"
    },
    {
      qEng: "Analyze the following statements regarding the Malla period:\nStatement 1: Jayasthiti Malla codified the caste system and introduced land measurement systems in the Kathmandu Valley.\nStatement 2: Yaksha Malla divided the Kathmandu valley kingdom among his sons into Kantipur, Patan, and Bhaktapur.",
      qNep: "मल्लकाल सम्बन्धी निम्न भनाइहरू विश्लेषण गर्नुहोस्:\nभनाइ १: जयस्थिति मल्लले काठमाडौँ उपत्यकामा जात व्यवस्था र जग्गा नापजाँचको व्यवस्था गरेका थिए।\nभनाइ २: यक्ष मल्लले काठमाडौँ उपत्यकाको राज्य आफ्ना छोराहरूबीच कान्तिपुर, पाटन र भक्तपुरमा विभाजन गरेका थिए।",
      correct: "दुवै भनाइ ठीक छन् / Both statements are correct",
      distractors: [
        "भनाइ १ ठीक र भनाइ २ बेठिक छ / Statement 1 correct, 2 incorrect",
        "भनाइ १ बेठिक र भनाइ २ ठीक छ / Statement 1 incorrect, 2 correct",
        "दुवै भनाइ बेठिक छन् / Both statements are incorrect"
      ],
      expEng: "Jayasthiti Malla reformed social and land structures; Yaksha Malla divided the kingdom.",
      expNep: "जयस्थिति मल्लले सामाजिक र नापजाँच सुधार गरे भने यक्ष मल्लले राज्य विभाजन गरेका थिए।"
    },
    {
      qEng: "Analyze the following statements regarding the Rana regime:\nStatement 1: Chandra Shumsher officially abolished the practice of Sati in Nepal in 1977 BS.\nStatement 2: He officially abolished the slavery (कमारा-कमारी) system in 1981 BS.",
      qNep: "राणा शासन सम्बन्धी निम्न भनाइहरू विचार गर्नुहोस्:\nभनाइ १: चन्द्र शमशेरले वि.सं. १९७७ मा नेपालमा सती प्रथाको अन्त्य गरेका थिए।\nभनाइ २: उनले वि.सं. १९८१ मा दास प्रथा (कमारा-कमारी प्रथा) को अन्त्य गरेका थिए।",
      correct: "दुवै भनाइ ठीक छन् / Both statements are correct",
      distractors: [
        "भनाइ १ ठीक र भनाइ २ बेठिक छ / Statement 1 correct, 2 incorrect",
        "भनाइ १ बेठिक र भनाइ २ ठीक छ / Statement 1 incorrect, 2 correct",
        "दुवै भनाइ बेठिक छन् / Both statements are incorrect"
      ],
      expEng: "Sati was banned on Ashar 25, 1977 BS and Slavery on Baishakh 1, 1982 BS (declared 1981 BS).",
      expNep: "चन्द्र शमशेरले वि.सं. १९७७ मा सती प्रथा र १९८१ मा दास प्रथा अन्त्यको घोषणा गरेका थिए।"
    },
    {
      qEng: "Analyze the following statements regarding the democratic movement:\nStatement 1: The Delhi Accord was agreed in February 1951 (Falgun 2007 BS).\nStatement 2: King Tribhuvan returned to Nepal and proclaimed democracy on Falgun 7, 2007 BS.",
      qNep: "प्रजातान्त्रिक आन्दोलन सम्बन्धी निम्न भनाइहरू विश्लेषण गर्नुहोस्:\nभनाइ १: त्रिपक्षीय दिल्ली सम्झौता सन् १९५१ फेब्रुअरी (२००७ वि.सं.) मा भएको थियो।\nभनाइ २: राजा त्रिभुवनले नेपाल फर्केर २००७ साल फागुन ७ गते प्रजातन्त्रको ऐतिहासिक घोषणा गरेका थिए।",
      correct: "दुवै भनाइ ठीक छन् / Both statements are correct",
      distractors: [
        "भनाइ १ ठीक र भनाइ २ बेठिक छ / Statement 1 correct, 2 incorrect",
        "भनाइ १ बेठिक र भनाइ २ ठीक छ / Statement 1 incorrect, 2 correct",
        "दुवै भनाइ बेठिक छन् / Both statements are incorrect"
      ],
      expEng: "Delhi Accord facilitated the return of King Tribhuvan and the royal proclamation on Falgun 7, 2007 BS.",
      expNep: "दिल्ली सम्झौतापछि २००७ फागुन ७ मा राजा त्रिभुवनद्वारा प्रजातन्त्र घोषणा भयो।"
    }
  ];

  const idx = (setId - 1) % statementData.length;
  return statementData[idx];
}

// Slot 9: Chronological Sequencing (कालक्रम मिलाउने) (Topic 2.1)
export function getHistorySlot9(setId: number): MasterBilingualItem {
  const chronoData = [
    {
      qEng: "Arrange the following historic massacres/parvas in chronological order:\n(i) Kot Parva, (ii) Bhandarkhal Parva, (iii) Alau Parva, (iv) 38 Saal Parva",
      qNep: "निम्न ऐतिहासिक पर्वहरूलाई कालक्रम अनुसार पहिलोदेखि पछिल्लो क्रममा मिलाउनुहोस्:\n(i) कोत पर्व, (ii) भण्डारखाल पर्व, (iii) अलौ पर्व, (iv) ३८ सालको पर्व",
      correct: "i, ii, iii, iv",
      distractors: [
        "ii, i, iii, iv",
        "i, iii, ii, iv",
        "iv, i, ii, iii"
      ],
      expEng: "Kot Parva (1903 BS Ashoj), Bhandarkhal (1903 BS Kartik), Alau (1904 BS), 38 Saal Parva (1938 BS).",
      expNep: "कोत पर्व (१९०३ असोज), भण्डारखाल (१९०३ कात्तिक), अलौ पर्व (१९०४) र ३८ सालको पर्व (१९३८ वि.सं.)।"
    },
    {
      qEng: "Arrange the following Prime Ministers in chronological order of their governance:\n(i) Jung Bahadur Rana, (ii) Ranodip Singh, (iii) Bir Shumsher, (iv) Dev Shumsher",
      qNep: "निम्न प्रधानमन्त्रीहरूलाई शासनकालको आधारमा सही कालक्रममा मिलाउनुहोस्:\n(i) जङ्गबहादुर राणा, (ii) रणोद्दीप सिंह, (iii) वीर शमशेर, (iv) देव शमशेर",
      correct: "i, ii, iii, iv",
      distractors: [
        "i, iii, ii, iv",
        "ii, i, iv, iii",
        "i, ii, iv, iii"
      ],
      expEng: "Jung Bahadur (1903), Ranodip Singh (1933), Bir Shumsher (1942), Dev Shumsher (1957 BS).",
      expNep: "जङ्गबहादुर (१९०३), रणोद्दीप सिंह (१९३३), वीर शमशेर (१९४२) र देव शमशेर (१९५७ वि.सं.)।"
    },
    {
      qEng: "Arrange the following ancient dynasties of Nepal in chronological sequence:\n(i) Gopal, (ii) Mahispal, (iii) Kirat, (iv) Lichchhavi",
      qNep: "नेपालका प्राचीन राजवंशहरूलाई सही कालक्रम अनुसार मिलाउनुहोस्:\n(i) गोपाल वंश, (ii) महिषपाल वंश, (iii) किरात वंश, (iv) लिच्छवि वंश",
      correct: "i, ii, iii, iv",
      distractors: [
        "ii, i, iii, iv",
        "i, iii, ii, iv",
        "iii, i, ii, iv"
      ],
      expEng: "Gopal dynasty -> Mahispal (Abhir) dynasty -> Kirat dynasty -> Lichchhavi dynasty.",
      expNep: "गोपाल वंश -> महिषपाल वंश -> किरात वंश -> लिच्छवि वंश।"
    },
    {
      qEng: "Arrange the following constitutions of Nepal in chronological order of promulgation:\n(i) Government of Nepal Act 2004, (ii) Interim Government Act 2007, (iii) Constitution of the Kingdom of Nepal 2015, (iv) Constitution of Nepal 2019",
      qNep: "नेपालका निम्न संवैधानिक दस्तावेजहरूलाई जारी भएको सही कालक्रम अनुसार मिलाउनुहोस्:\n(i) नेपाल सरकार वैधानिक कानुन २००४, (ii) नेपाल अन्तरिम शासन विधान २००७, (iii) नेपाल अधिराज्यको संविधान २०१५, (iv) नेपालको संविधान २०१९",
      correct: "i, ii, iii, iv",
      distractors: [
        "ii, i, iii, iv",
        "i, iii, ii, iv",
        "i, ii, iv, iii"
      ],
      expEng: "2004 BS -> 2007 BS -> 2015 BS -> 2019 BS.",
      expNep: "२००४ -> २००७ -> २०१५ -> २०१९ वि.सं.।"
    },
    {
      qEng: "Arrange the following territorial conquests of Prithvi Narayan Shah in chronological order:\n(i) Nuwakot, (ii) Makwanpur, (iii) Kirtipur, (iv) Kantipur",
      qNep: "पृथ्वीनारायण शाहका निम्न भूभाग विजयहरूलाई सही कालक्रम अनुसार मिलाउनुहोस्:\n(i) नुवाकोट, (ii) मकवानपुर, (iii) कीर्तिपुर, (iv) कान्तिपुर",
      correct: "i, ii, iii, iv",
      distractors: [
        "i, iii, ii, iv",
        "ii, i, iv, iii",
        "i, ii, iv, iii"
      ],
      expEng: "Nuwakot (1801 BS), Makwanpur (1819 BS), Kirtipur (1822 BS), Kantipur (1825 BS).",
      expNep: "नुवाकोट (१८०१), मकवानपुर (१८१९), कीर्तिपुर (१८२२), कान्तिपुर (१८२५ वि.सं.)।"
    }
  ];

  const idx = (setId - 1) % chronoData.length;
  return chronoData[idx];
}

// Slot 10: Castes, Languages, Religion, Art & Culture (Topics 2.2 - 2.3)
export function getHistorySlot10(setId: number): MasterBilingualItem {
  const cultureData = [
    {
      qEng: "According to the National Population Census 2078, how many distinct mother tongues (मातृभाषा) are spoken in Nepal?",
      qNep: "राष्ट्रिय जनगणना २०७८ अनुसार नेपालमा कतिवटा मातृभाषाहरू बोलिन्छन्?",
      correct: "124 / १२४ वटा",
      distractors: [
        "123 / १२३ वटा",
        "129 / १२९ वटा",
        "125 / १२५ वटा"
      ],
      expEng: "Census 2078 recorded 124 mother tongues spoken in Nepal.",
      expNep: "जनगणना २०७८ अनुसार नेपालमा १२४ वटा मातृभाषाहरू बोलिन्छन्।"
    },
    {
      qEng: "According to the National Population Census 2078, how many distinct caste and ethnic groups (जातजाति) are identified in Nepal?",
      qNep: "राष्ट्रिय जनगणना २०७८ अनुसार नेपालमा कतिवटा जातजातिहरू पहिचान भएका छन्?",
      correct: "142 / १४२ वटा",
      distractors: [
        "125 / १२५ वटा",
        "140 / १४० वटा",
        "135 / १३५ वटा"
      ],
      expEng: "Census 2078 recognized 142 distinct caste and ethnic communities in Nepal.",
      expNep: "२०७८ को जनगणना अनुसार नेपालमा १४२ जातजातिहरू रहेका छन्।"
    },
    {
      qEng: "According to Census 2078, what percentage of Nepal's population adheres to Hinduism?",
      qNep: "राष्ट्रिय जनगणना २०७८ अनुसार नेपालमा हिन्दु धर्मावलम्बीहरूको प्रतिशत कति रहेको छ?",
      correct: "81.19% / ८१.१९ प्रतिशत",
      distractors: [
        "80.50% / ८०.५० प्रतिशत",
        "82.10% / ८२.१० प्रतिशत",
        "83.30% / ८३.३० प्रतिशत"
      ],
      expEng: "Hindus constitute 81.19%, Buddhists 8.21%, Muslims 5.09%, Kirats 3.17%, Christians 1.76%.",
      expNep: "जनगणना २०७८ अनुसार हिन्दु ८१.१९%, बौद्ध ८.२१%, इस्लाम ५.०९% र किरात ३.१७% रहेका छन्।"
    },
    {
      qEng: "Which ethnic community celebrates the famous festival 'Udhauli' and 'Ubhauli'?",
      qNep: "उधौली र उभौली चाड कुन जातिले मुख्य रूपमा मनाउने गर्दछन्?",
      correct: "Kirat / किरात जाति",
      distractors: [
        "Tharu / थारू जाति",
        "Gurung / गुरुङ जाति",
        "Magar / मगर जाति"
      ],
      expEng: "Udhauli and Ubhauli are the major traditional cultural festivals of the Kirat community.",
      expNep: "उधौली र उभौली किरात (राई, लिम्बू, याक्खा, सुनुवार) समुदायको महान् चाड हो।"
    },
    {
      qEng: "Which ancient architectural style is characterized by multiple tiered roofs supported by carved wooden struts (टुँडाल)?",
      qNep: "काष्ठकलायुक्त टुँडालहरूले टेकाइएका तह-तह परेका छाना भएको नेपाली परम्परागत वास्तुकला शैलीलाई के भनिन्छ?",
      correct: "Pagoda Style / प्यागोडा शैली",
      distractors: [
        "Shikhara Style / शिखर शैली",
        "Stupa Style / स्तूपा शैली",
        "Mughal Style / मुगल शैली"
      ],
      expEng: "Pagoda style (tiered roofs with wooden struts) is exemplified by Nyatapola and Pashupatinath temples.",
      expNep: "तह-तह परेका छाना र टुँडालको प्रयोग प्यागोडा शैलीको मुख्य विशेषता हो।"
    }
  ];

  const idx = (setId - 1) % cultureData.length;
  return cultureData[idx];
}

export function getHistoryQuestion(slot: number, setId: number): MasterBilingualItem {
  switch (slot) {
    case 6: return getHistorySlot6(setId);
    case 7: return getHistorySlot7(setId);
    case 8: return getHistorySlot8(setId);
    case 9: return getHistorySlot9(setId);
    case 10: return getHistorySlot10(setId);
    default: return getHistorySlot6(setId);
  }
}
