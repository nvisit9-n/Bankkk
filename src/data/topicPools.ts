/**
 * Official Topic Question Pools for Public Enterprises (सङ्गठित संस्था L4 & L5)
 * Conforms strictly to Loksewa Commission's 10 Syllabus Modules
 * Updated to 2083/84 BS facts, NRB rates, 16th Periodic Plan, and Constitution of Nepal
 */

export interface MasterBilingualItem {
  qEng: string;
  qNep: string;
  correct: string;
  distractors: [string, string, string];
  expEng: string;
  expNep: string;
  syllabusModule: string;
  actSection?: string;
}

export interface MasterSingleLanguageItem {
  question: string;
  correct: string;
  distractors: [string, string, string];
  explanation: string;
}

// =========================================================================
// TOPIC 1: Geography, Population & Environment (भूगोल, जनसङ्ख्या र वातावरण)
// Target: Q1–Q5 in every set
// =========================================================================
export const TOPIC_1_GEOGRAPHY_POOL: MasterBilingualItem[] = [
  {
    qEng: "According to the Constitution of Nepal, what is the total number of Local Levels (स्थानीय तह) in Nepal?",
    qNep: "नेपालको संविधान अनुसार नेपालमा हाल कुल कतिवटा स्थानीय तहहरू रहेका छन्?",
    correct: "753 / ७५३ स्थानीय तह",
    distractors: ["744 / ७४४ स्थानीय तह", "761 / ७६१ स्थानीय तह", "750 / ७५० स्थानीय तह"],
    expEng: "Nepal has a total of 753 local levels comprising 6 Metropolitan Cities, 11 Sub-metropolitan Cities, 276 Municipalities, and 460 Rural Municipalities.",
    expNep: "नेपालमा ६ महानगरपालिका, ११ उपमहानगरपालिका, २७६ नगरपालिका र ४६० गाउँपालिका गरी कुल ७५३ स्थानीय तहहरू रहेका छन्।",
    syllabusModule: "भूगोल, वातावरण र जनसङ्ख्या"
  },
  {
    qEng: "What is the official total geographical area of Nepal as gazetted by the Government of Nepal?",
    qNep: "नेपाल सरकारको राजपत्रमा प्रकाशित आधिकारिक विवरण अनुसार नेपालको कुल क्षेत्रफल कति वर्ग किलोमिटर छ?",
    correct: "147,516 sq. km / १,४७,५१६ वर्ग कि.मी.",
    distractors: ["147,181 sq. km / १,४७,१८१ वर्ग कि.मी.", "147,850 sq. km / १,४७,८५० वर्ग कि.मी.", "148,000 sq. km / १,४८,००० वर्ग कि.मी."],
    expEng: "With the updated administrative map of Nepal including Limpiyadhura, Lipulekh, and Kalapani, the official geographical area is 147,516 sq. km.",
    expNep: "लिम्पियाधुरा, लिपुलेक र कालापानी समेटिएको नेपालको अद्यावधिक नक्सा अनुसार कुल क्षेत्रफल १,४७,५१६ वर्ग किलोमिटर कायम छ।",
    syllabusModule: "भूगोल, वातावरण र जनसङ्ख्या"
  },
  {
    qEng: "According to the National Population Census 2078, what is the total population and annual population growth rate of Nepal?",
    qNep: "राष्ट्रिय जनगणना २०७८ को अन्तिम नतिजा अनुसार नेपालको कुल जनसङ्ख्या र वार्षिक जनसङ्ख्या वृद्धिदर कति रहेको छ?",
    correct: "29,164,578 (0.92% growth rate) / २,९१,६४,५७८ (०.९२% वृद्धिदर)",
    distractors: [
      "26,494,504 (1.35% growth rate) / २,६४,९४,५०४ (१.३५% वृद्धिदर)",
      "30,150,000 (1.10% growth rate) / ३,०१,५०,००० (१.१०% वृद्धिदर)",
      "28,500,000 (0.85% growth rate) / २,८५,००,००० (०.८५% वृद्धिदर)"
    ],
    expEng: "Census 2078 recorded Nepal's population as 29,164,578 with an annual growth rate of 0.92% and a sex ratio of 95.59.",
    expNep: "जनगणना २०७८ अनुसार नेपालको जनसङ्ख्या २ करोड ९१ लाख ६४ हजार ५७८, वार्षिक वृद्धिदर ०.९२% तथा लैंगिक अनुपात ९५.५९ रहेको छ।",
    syllabusModule: "भूगोल, वातावरण र जनसङ्ख्या"
  },
  {
    qEng: "Which is the largest National Park in Nepal by geographical area?",
    qNep: "क्षेत्रफलको आधारमा नेपालको सबैभन्दा ठूलो राष्ट्रिय निकुञ्ज कुन हो?",
    correct: "Shey Phoksundo National Park (3,555 sq. km) / शे-फोक्सुण्डो राष्ट्रिय निकुञ्ज (३,५५५ वर्ग कि.मी.)",
    distractors: [
      "Chitwan National Park (952.63 sq. km) / चितवन राष्ट्रिय निकुञ्ज",
      "Makalu Barun National Park (1,500 sq. km) / मकालु वरुण राष्ट्रिय निकुञ्ज",
      "Sagarmatha National Park (1,148 sq. km) / सगरमाथा राष्ट्रिय निकुञ्ज"
    ],
    expEng: "Shey Phoksundo National Park located in Dolpa and Mugu districts is Nepal's largest national park with an area of 3,555 sq. km.",
    expNep: "डोल्पा र मुगु जिल्लामा फैलिएको शे-फोक्सुण्डो राष्ट्रिय निकुञ्ज ३,५५५ वर्ग कि.मी. क्षेत्रफलसहित नेपालको सबैभन्दा ठूलो राष्ट्रिय निकुञ्ज हो।",
    syllabusModule: "भूगोल, वातावरण र जनसङ्ख्या"
  },
  {
    qEng: "Which lake in Nepal is situated at the highest altitude in the world (~4,919 meters)?",
    qNep: "संसारकै सबैभन्दा अग्लो स्थानमा अवस्थित तालहरूमध्ये पर्ने मनाङ जिल्लाको ताल कुन हो (उचाइ करिब ४,९१९ मिटर)?",
    correct: "Tilicho Lake / तिलिचो ताल",
    distractors: ["Rara Lake / रारा ताल", "Shey Phoksundo Lake / शे-फोक्सुण्डो ताल", "Gosaikunda Lake / गोसाइँकुण्ड"],
    expEng: "Tilicho Lake is located in Manang district at an altitude of 4,919 meters in the Annapurna range.",
    expNep: "मनाङ जिल्लामा अवस्थित तिलिचो ताल ४,९१९ मिटर उचाइमा रहेको विश्वकै प्रख्यात उच्च हिमाली ताल हो।",
    syllabusModule: "भूगोल, वातावरण र जनसङ्ख्या"
  },
  {
    qEng: "Which river is recognized as the longest river running completely within Nepal (approx. 507 km)?",
    qNep: "नेपालभित्र मात्र बग्ने सबैभन्दा लामो नदी कुन हो (लम्बाइ करिब ५०७ कि.मी.)?",
    correct: "Karnali River / कर्णाली नदी",
    distractors: ["Koshi River / कोशी नदी", "Narayani / Gandaki River / नारायणी (गण्डकी) नदी", "Mahakali River / महाकाली नदी"],
    expEng: "The Karnali river is Nepal's longest river with a length of 507 km within Nepalese territory.",
    expNep: "नेपालको भूगोलभित्र ५०७ कि.मी. लम्बाइ भएको कर्णाली नदी नेपालको सबैभन्दा लामो नदी हो।",
    syllabusModule: "भूगोल, वातावरण र जनसङ्ख्या"
  },
  {
    qEng: "What is the officially declared height of Mt. Sagarmatha (Everest) jointly surveyed by Nepal and China?",
    qNep: "नेपाल र चीनद्वारा संयुक्त रूपमा मापन गरी सार्वजनिक गरिएको सगरमाथाको आधिकारिक नयाँ उचाइ कति हो?",
    correct: "8,848.86 meters / ८,८४८.८६ मिटर",
    distractors: ["8,848.00 meters / ८,८४८.०० मिटर", "8,850.00 meters / ८,८५०.०० मिटर", "8,846.86 meters / ८,८४६.८६ मिटर"],
    expEng: "On December 8, 2020, Nepal and China officially announced the joint measured height of Mt. Everest as 8,848.86 meters.",
    expNep: "वि.सं. २०७७ मङ्सिर २३ (८ डिसेम्बर २०२०) मा नेपाल र चीनले संयुक्त रूपमा सगरमाथाको उचाइ ८,८४८.८६ मिटर घोषणा गरेका हुन्।",
    syllabusModule: "भूगोल, वातावरण र जनसङ्ख्या"
  },
  {
    qEng: "Which wetland in Nepal was first enlisted as a Ramsar Site of International Importance in 1987?",
    qNep: "सन् १९८७ मा अन्तर्राष्ट्रिय महत्त्वको रामसार सूचीमा सूचीकृत हुने नेपालको पहिलो सिमसार क्षेत्र कुन हो?",
    correct: "Koshi Tappu Wildlife Reserve / कोशी टप्पु वन्यजन्तु आरक्ष",
    distractors: ["Bishazari Lake / बीसहजारी ताल", "Ghodaghodi Lake / घोडाघोडी ताल", "Rara Lake / रारा ताल"],
    expEng: "Koshi Tappu was designated as Nepal's first Ramsar site on 17 December 1987, famous for wild water buffaloes (Arna).",
    expNep: "कोशी टप्पु वन्यजन्तु आरक्ष सन् १९८७ डिसेम्बर १७ मा नेपालको पहिलो रामसार सूचीकृत सिमसार क्षेत्र घोषित भएको हो।",
    syllabusModule: "भूगोल, वातावरण र जनसङ्ख्या"
  },
  {
    qEng: "According to Nepal's National Census 2078, which district has the lowest population density and lowest total population in Nepal?",
    qNep: "राष्ट्रिय जनगणना २०७८ अनुसार नेपालमा सबैभन्दा कम जनसङ्ख्या भएको जिल्ला कुन हो?",
    correct: "Manang (5,658 population) / मनाङ (५,६५८ जनसङ्ख्या)",
    distractors: ["Mustang / मुस्ताङ", "Dolpa / डोल्पा", "Rasuwa / रसुवा"],
    expEng: "Manang is the least populated district of Nepal with a total recorded population of 5,658 in Census 2078.",
    expNep: "राष्ट्रिय जनगणना २०७८ अनुसार मनाङ जिल्लाको जनसङ्ख्या जम्मा ५,६५८ जना रही सबैभन्दा कम जनसङ्ख्या भएको जिल्ला बनेको छ।",
    syllabusModule: "भूगोल, वातावरण र जनसङ्ख्या"
  },
  {
    qEng: "Nepal's standard time is determined based on which meridian and landmark mountain peak?",
    qNep: "नेपालको प्रमाणिक समय कुन हिमाललाई आधार मानी निर्धारण गरिएको ८६ डिग्री १५ मिनेट पूर्वी देशान्तर रेखा अनुसार तय गरिएको छ?",
    correct: "Mt. Gaurishankar (Dolakha) / गौरीशङ्कर हिमाल (दोलखा)",
    distractors: ["Mt. Everest / सगरमाथा हिमाल", "Mt. Annapurna / अन्नपूर्ण हिमाल", "Mt. Machhapuchhre / माछापुच्छ्रे हिमाल"],
    expEng: "Nepal Standard Time (UTC+5:45) is calculated from the 86°15' E longitude meridian passing through Mt. Gaurishankar (7,134 m) in Dolakha.",
    expNep: "दोलखा जिल्लामा पर्ने गौरीशङ्कर हिमाल (७,१३४ मिटर) लाई काटेर जाने ८६°१५' पूर्वी देशान्तरलाई आधार मानी वि.सं. २०४२ वैशाख १ देखि नेपालको प्रमाणिक समय (UTC+5:45) लागु गरिएको हो।",
    syllabusModule: "भूगोल, वातावरण र जनसङ्ख्या"
  }
];

// =========================================================================
// TOPIC 2: History, Culture & Social System (इतिहास, संस्कृति र सामाजिक व्यवस्था)
// Target: Q6–Q10 in every set
// =========================================================================
export const TOPIC_2_HISTORY_POOL: MasterBilingualItem[] = [
  {
    qEng: "In his Divyopadesh, King Prithvi Narayan Shah described Nepal as a 'yam between two stones'. Which two entities was he referring to?",
    qNep: "पृथ्वीनारायण शाहको दिव्योपदेशमा 'नेपाल दुई ढुङ्गाबीचको तरुल जस्तै हो' भन्नाले कुन दुई देशलाई सङ्केत गरिएको छ?",
    correct: "China & India / चीन र भारत (तत्कालीन ब्रिटिस भारत र तिब्बत/चीन)",
    distractors: [
      "Bhutan & Sikkim / भूटान र सिक्किम",
      "Myanmar & Afghanistan / म्यानमार र अफगानिस्तान",
      "Tibet & Ladakh / तिब्बत र लद्दाख"
    ],
    expEng: "Prithvi Narayan Shah characterized Nepal's geopolitical position as a 'yam between two stones', referring to the giant neighbors China and India (then British India and Tibet/Qing China).",
    expNep: "पृथ्वीनारायण शाहले नेपालको भूराजनीतिक संवेदनशीलता औंल्याउँदै उत्तरको चीन र दक्षिणको ब्रिटिस भारतलाई 'दुई ढुङ्गा' र नेपाललाई बीचको 'तरुल' सँग तुलना गरेका हुन्।",
    syllabusModule: "इतिहास, कला, संस्कृति र सम्पदा"
  },
  {
    qEng: "Which historical dynasty is regarded as the first ruling dynasty in the recorded history of Nepal?",
    qNep: "नेपालको प्रामाणिक इतिहासमा शासन गर्ने पहिलो राजवंश कुन मानिन्छ?",
    correct: "Gopal Dynasty (King Bhuktaman) / गोपाल वंश (राजा भुक्तमान)",
    distractors: [
      "Mahispala (Abhir) Dynasty / महिषपाल (आभीर) वंश",
      "Kirat Dynasty / किरात वंश",
      "Lichchhavi Dynasty / लिच्छवि वंश"
    ],
    expEng: "The Gopal dynasty, also known as the Cowherd dynasty, is traditionally regarded as the first ruling dynasty of Kathmandu Valley, with Bhuktaman as the first king.",
    expNep: "काठमाडौं उपत्यकामा शासन गर्ने पहिलो वंश गोपाल वंश हो, जसका प्रथम राजा भुक्तमान (भूमिगुप्त) थिए।",
    syllabusModule: "इतिहास, कला, संस्कृति र सम्पदा"
  },
  {
    qEng: "Which period in Nepalese history is famously celebrated as the 'Golden Age' (स्वर्ण युग) due to great development in art, culture, and architecture?",
    qNep: "कला, संस्कृति, लिपि र वास्तुकलाको अभूतपूर्व विकास भएको कारणले नेपालको इतिहासमा कुन काललाई 'स्वर्ण युग' भनिन्छ?",
    correct: "Lichchhavi Period / लिच्छविकाल",
    distractors: ["Malla Period / मल्लकाल", "Kirat Period / किरातकाल", "Shah Period / शाहकाल"],
    expEng: "The Lichchhavi period is universally known as the Golden Age of Nepal because of flourishing trade, inscriptions, stone architecture, and harmonious culture.",
    expNep: "लिच्छविकाललाई नेपालको इतिहासमा धर्म, कला, संस्कृति, अभिलेख र वास्तुकलाको उन्नत विकासका कारण 'स्वर्ण युग' मानिन्छ।",
    syllabusModule: "इतिहास, कला, संस्कृति र सम्पदा"
  },
  {
    qEng: "On what date was the historic Sugauli Treaty (सुगौली सन्धि) formally ratified between Nepal and the British East India Company?",
    qNep: "नेपाल र इस्ट इन्डिया कम्पनीबीच भएको ऐतिहासिक सुगौली सन्धि कहिलेदेखि औपचारिक रूपमा लागु भएको थियो?",
    correct: "March 3, 1816 AD (वि.सं. १८७२ फागुन २१)",
    distractors: ["December 2, 1815 AD", "April 14, 1816 AD", "November 28, 1814 AD"],
    expEng: "The Treaty of Sugauli was signed on 2 December 1815 and formally exchanged and ratified on 3 March 1816 AD.",
    expNep: "सुगौली सन्धि सन् १८१५ डिसेम्बर २ मा हस्ताक्षर भई सन् १८१६ मार्च ३ (वि.सं. १८७२ फागुन २१) मा औपचारिक रूपमा लागु भएको थियो।",
    syllabusModule: "इतिहास, कला, संस्कृति र सम्पदा"
  },
  {
    qEng: "Which Malla King introduced the division of society into 4 Varnas and 18 Castes, along with standard measurement units (Mano, Pathi)?",
    qNep: "नेपालमा चार वर्ण अठार जातको सामाजिक व्यवस्था र माना-पाथी नाप-तौलको प्रचलन बसाल्ने मल्ल राजा को हुन्?",
    correct: "Jayasthiti Malla / स्थिति मल्ल",
    distractors: ["Yaksha Malla / यक्ष मल्ल", "Pratap Malla / प्रताप मल्ल", "Bhupatindra Malla / भूपतीन्द्र मल्ल"],
    expEng: "King Jayasthiti Malla codified the civil and social code (Nyayabikashini/Manavnyayashastra) and standardized units of measurement.",
    expNep: "राजा जयस्थिति मल्लले सामाजिक सुधार गर्दै मानव न्यायशास्त्रको तर्जुमा गरी चार वर्ण अठार जातको विभाजन र मानापाथी प्रणाली लागु गरेका थिए।",
    syllabusModule: "इतिहास, कला, संस्कृति र सम्पदा"
  },
  {
    qEng: "In which year of the Bikram Sambat was the Kot Parva (कोत पर्व) staged, marking the rise of Jung Bahadur Rana and the 104-year Rana regime?",
    qNep: "जंगबहादुर राणाको उदय र १०४ वर्षे जहानियाँ राणा शासनको जग बसाल्ने 'कोत पर्व' वि.सं. कहिले घटेको थियो?",
    correct: "1903 BS Ashwin 2 / वि.सं. १९०३ असोज २",
    distractors: ["1903 BS Kartik 17 / वि.सं. १९०३ कात्तिक १७", "1907 BS Falgun 7 / वि.सं. १९०७ फागुन ७", "1910 BS Poush 1 / वि.सं. १९१० पुस १"],
    expEng: "The Kot massacre occurred on September 14, 1846 (Ashwin 2, 1903 BS), leading to the massacre of prominent courtiers and Jung Bahadur's appointment as Prime Minister.",
    expNep: "वि.सं. १९०३ असोज २ गते राति काठमाडौंको कोतमा भएको नरसंहारपछि जंगबहादुर राणा नेपालको मुख्तियार तथा प्रधानमन्त्री बनेका हुन्।",
    syllabusModule: "इतिहास, कला, संस्कृति र सम्पदा"
  },
  {
    qEng: "On which date did the First Constituent Assembly declare Nepal as a Federal Democratic Republic?",
    qNep: "नेपाललाई पहिलो संविधान सभाको पहिलो बैठकले कहिले औपचारिक रूपमा संघीय लोकतान्त्रिक गणतन्त्र घोषणा गरेको थियो?",
    correct: "2065 BS Jestha 15 (May 28, 2008) / २०६५ जेठ १५",
    distractors: ["2063 BS Baishakh 11 / २०६३ वैशाख ११", "2064 BS Chaitra 28 / २०६४ चैत २८", "2072 BS Ashwin 3 / २०७२ असोज ३"],
    expEng: "On 15 Jestha 2065 BS (28 May 2008), the historic first meeting of the Constituent Assembly abolished the 240-year-old monarchy and proclaimed Nepal a republic.",
    expNep: "२०६५ साल जेठ १५ गते पहिलो संविधान सभाको ऐतिहासिक पहिलो बैठकले २४० वर्ष लामो राजतन्त्रको अन्त्य गरी नेपाललाई संघीय लोकतान्त्रिक गणतन्त्र घोषणा गरेको थियो।",
    syllabusModule: "इतिहास, कला, संस्कृति र सम्पदा"
  },
  {
    qEng: "How many cultural and natural sites of Nepal are enlisted in the UNESCO World Heritage Sites list?",
    qNep: "नेपालका कुल कतिवटा सम्पदाहरू युनेस्कोको विश्व सम्पदा सूची (UNESCO World Heritage Sites) मा सूचीकृत छन्?",
    correct: "4 Sites (Kathmandu Valley, Lumbini, Chitwan, Sagarmatha) / ४ वटा सम्पदा क्षेत्र",
    distractors: ["10 Sites / १० वटा", "7 Sites / ७ वटा", "8 Sites / ८ वटा"],
    expEng: "Nepal has 4 UNESCO World Heritage properties: 2 Cultural (Kathmandu Valley with 7 monument zones, and Lumbini) and 2 Natural (Chitwan National Park and Sagarmatha National Park).",
    expNep: "नेपालका ४ वटा सम्पदा युनेस्कोमा सूचीकृत छन्: २ वटा सांस्कृतिक (काठमाडौं उपत्यका र लुम्बिनी) तथा २ वटा प्राकृतिक (चितवन र सगरमाथा राष्ट्रिय निकुञ्ज)।",
    syllabusModule: "इतिहास, कला, संस्कृति र सम्पदा"
  },
  {
    qEng: "The traditional Newari festival 'Bisket Jatra' is predominantly celebrated in which ancient city of Nepal?",
    qNep: "प्रसिद्ध ऐतिहासिक एवं सांस्कृतिक 'बिस्केट जात्रा' मुख्यतया नेपालको कुन शहरमा नयाँ वर्षको अवसरमा मनाइन्छ?",
    correct: "Bhaktapur / भक्तपुर",
    distractors: ["Patan (Lalitpur) / पाटन", "Kathmandu / काठमाडौँ", "Kirtipur / कीर्तिपुर"],
    expEng: "Bisket Jatra is the world-renowned annual festival celebrated with chariot pulling of Bhairavnath in Bhaktapur around Nepalese New Year.",
    expNep: "भक्तपुरमा नयाँ वर्षको अवसरमा भैरव र भद्रकालीको रथ तानेर आठ रात नौ दिनसम्म भव्य रूपमा बिस्केट जात्रा मनाइन्छ।",
    syllabusModule: "इतिहास, कला, संस्कृति र सम्पदा"
  },
  {
    qEng: "Who was the first elected Prime Minister in the history of Nepal following the 2015 BS General Elections?",
    qNep: "वि.सं. २०१५ सालको आम निर्वाचनपछि गठित जननिर्वाचित सरकारका प्रथम जननिर्वाचित प्रधानमन्त्री को हुन्?",
    correct: "B.P. Koirala (Bishweshwar Prasad Koirala) / विश्वेश्वरप्रसाद कोइराला",
    distractors: ["Matrika Prasad Koirala / मातृकाप्रसाद कोइराला", "Subarna Shamsher / सुवर्ण शमशेर", "Tanka Prasad Acharya / टंकप्रसाद आचार्य"],
    expEng: "B.P. Koirala took office on 27 May 1959 (2016 BS Jestha 13) as Nepal's first democratically elected Prime Minister following Nepali Congress's two-thirds victory in 2015 BS.",
    expNep: "वि.सं. २०१५ को आम निर्वाचनपछि वि.सं. २०१६ जेठ १३ मा विश्वेश्वरप्रसाद कोइराला नेपालको प्रथम जननिर्वाचित प्रधानमन्त्री बन्नुभएको थियो।",
    syllabusModule: "इतिहास, कला, संस्कृति र सम्पदा"
  }
];

// =========================================================================
// TOPIC 3: Economic Development & Indicators (नेपालको आर्थिक विकास, योजना र सूचक)
// Target: Q11–Q15 in every set
// =========================================================================
export const TOPIC_3_ECONOMY_POOL: MasterBilingualItem[] = [
  {
    qEng: "Under Nepal's 16th Periodic Plan (१६ औँ पञ्चवर्षीय योजना २०८१/८२ - २०८५/८६), what is the targeted average economic growth rate?",
    qNep: "नेपालको १६ औँ पञ्चवर्षीय योजना (२०८१/८२ - २०८५/८६) को अवधिमा औसत आर्थिक वृद्धिदर कति पुर्याउने लक्ष्य राखिएको छ?",
    correct: "7.3% / ७.३ प्रतिशत",
    distractors: ["6.5% / ६.५ प्रतिशत", "8.0% / ८.० प्रतिशत", "5.8% / ५.८ प्रतिशत"],
    expEng: "The 16th Periodic Plan targets an average economic growth rate of 7.3% with primary focus on structural transformation, good governance, and social justice.",
    expNep: "१६ औँ योजनाले सुशासन, सामाजिक न्याय र समृद्धिलाई मुख्य स्तम्भ मानी औसत ७.३% को आर्थिक वृद्धिदर हासिल गर्ने लक्ष्य लिएको छ।",
    syllabusModule: "आर्थिक विकास, सूचक र मौद्रिक नीति"
  },
  {
    qEng: "Under Nepal Rastra Bank's updated Monetary Policy, what is the current Policy Rate (नीतिगत दर) under the interest rate corridor?",
    qNep: "नेपाल राष्ट्र बैंकको अद्यावधिक मौद्रिक नीति अनुसार ब्याजदर करिडोर अन्तर्गत नीतिगत दर (Policy Rate) कति प्रतिशत कायम गरिएको छ?",
    correct: "5.0% / ५.० प्रतिशत",
    distractors: ["6.5% / ६.५ प्रतिशत", "5.5% / ५.५ प्रतिशत", "4.0% / ४.० प्रतिशत"],
    expEng: "Under NRB's interest rate corridor, the Policy Rate (Repo rate) is maintained at 5.0%, Bank Rate at 6.5%, and Deposit Collection Rate at 3.0%.",
    expNep: "नेपाल राष्ट्र बैंकको अद्यावधिक मौद्रिक नीति अनुसार नीतिगत दर ५.०%, बैंक दर ६.५% र निक्षेप सङ्कलन दर ३.०% कायम गरिएको छ।",
    syllabusModule: "आर्थिक विकास, सूचक र मौद्रिक नीति"
  },
  {
    qEng: "What is the mandatory Cash Reserve Ratio (CRR) required to be maintained by Commercial Banks ('A' Class) with Nepal Rastra Bank?",
    qNep: "नेपाल राष्ट्र बैंकको निर्देशिका अनुसार 'क' वर्गका वाणिज्य बैंकहरूले अनिवार्य रूपमा कायम गर्नुपर्ने नगद मौज्दात अनुपात (CRR) कति छ?",
    correct: "4.0% / ४.० प्रतिशत",
    distractors: ["3.5% / ३.५ प्रतिशत", "5.0% / ५.० प्रतिशत", "6.0% / ६.० प्रतिशत"],
    expEng: "NRB Monetary Policy mandates a uniform Cash Reserve Ratio (CRR) of 4.0% for Class A, B, and C financial institutions.",
    expNep: "नेपाल राष्ट्र बैंकले 'क', 'ख' र 'ग' वर्गका सम्पूर्ण बैंक तथा वित्तीय संस्थाहरूका लागि अनिवार्य नगद अनुपात (CRR) ४.०% तोकेको छ।",
    syllabusModule: "आर्थिक विकास, सूचक र मौद्रिक नीति"
  },
  {
    qEng: "What is the minimum Statutory Liquidity Ratio (SLR) mandated for 'A' Class Commercial Banks in Nepal?",
    qNep: "नेपालका 'क' वर्गका वाणिज्य बैंकहरूले कायम गर्नुपर्ने वैधानिक तरलता अनुपात (SLR) न्यूनतम कति प्रतिशत हुनुपर्छ?",
    correct: "12.0% / १२.० प्रतिशत",
    distractors: ["10.0% / १०.० प्रतिशत", "8.0% / ८.० प्रतिशत", "14.0% / १४.० प्रतिशत"],
    expEng: "Commercial banks ('A' Class) are required to maintain a Statutory Liquidity Ratio (SLR) of at least 12.0%, while development banks ('B' Class) and finance companies ('C' Class) maintain 10.0%.",
    expNep: "नेपाल राष्ट्र बैंकको निर्देशन अनुसार 'क' वर्गका वाणिज्य बैंकहरूले कुल निक्षेपको १२.०% तथा 'ख' र 'ग' वर्गका वित्तीय संस्थाहरूले कम्तीमा १०.०% वैधानिक तरलता अनुपात (SLR) कायम गर्नुपर्छ।",
    syllabusModule: "आर्थिक विकास, सूचक र मौद्रिक नीति"
  },
  {
    qEng: "According to the National Accounts statistics, which economic sector contributes the largest share to Nepal's Gross Domestic Product (GDP)?",
    qNep: "नेपालको कुल गार्हस्थ्य उत्पादन (GDP) मा हाल सबैभन्दा बढी योगदान कुन क्षेत्रको रहेको छ?",
    correct: "Service Sector (approx. 62-63%) / सेवा क्षेत्र (करिब ६२-६३ प्रतिशत)",
    distractors: [
      "Agriculture & Forestry (approx. 24%) / कृषि तथा वन क्षेत्र",
      "Industrial Sector (approx. 13-14%) / उद्योग क्षेत्र",
      "Remittance Sector only / विप्रेषण मात्र"
    ],
    expEng: "The service sector contributes over 62% of Nepal's GDP, followed by agriculture (~24%) and industry (~13-14%).",
    expNep: "नेपालको कुल गार्हस्थ्य उत्पादनमा सेवा क्षेत्रको योगदान सबैभन्दा धेरै करिब ६२.४% रहेको छ, त्यसपछि कृषि क्षेत्रको करिब २४% र उद्योग क्षेत्रको करिब १३% रहेको छ।",
    syllabusModule: "आर्थिक विकास, सूचक र मौद्रिक नीति"
  },
  {
    qEng: "In which year is Nepal officially scheduled to graduate from the Least Developed Country (LDC) category to Developing Country status?",
    qNep: "संयुक्त राष्ट्रसङ्घको निर्णय अनुसार नेपाल अति कम विकसित राष्ट्र (LDC) बाट कहिलेसम्म विकासोन्मुख राष्ट्रमा स्तरोन्नति हुने कार्यतालिका छ?",
    correct: "November 2026 AD / सन् २०२६ नोभेम्बर",
    distractors: ["2024 AD / सन् २०२४", "2030 AD / सन् २०३०", "2028 AD / सन् २०२८"],
    expEng: "The UN General Assembly endorsed Nepal's graduation from LDC to Developing Country status with a preparatory transition period until November 2026.",
    expNep: "संयुक्त राष्ट्रसंघीय महासभाको निर्णय अनुसार नेपाललाई ५ वर्षको तयारी समय दिई सन् २०२६ नोभेम्बरसम्म विकासोन्मुख राष्ट्रमा स्तरोन्नति गर्ने निर्णय भएको छ।",
    syllabusModule: "आर्थिक विकास, सूचक र मौद्रिक नीति"
  },
  {
    qEng: "What does a 'Surplus Balance of Payments' (शोधानान्तर बचत) indicate in a nation's macroeconomic health?",
    qNep: "कुनै पनि देशको शोधानान्तर स्थिति बचतमा (BOP Surplus) रहनुले के कुरालाई सङ्केत गर्दछ?",
    correct: "Total foreign inflows exceed total foreign outflows / बाह्य मुलुकबाट भित्रिने कुल रकम बाहिरिने रकमभन्दा बढी हुनु",
    distractors: [
      "Imports exceed total exports / आयात निर्यातभन्दा धेरै हुनु",
      "Fiscal budget deficit is zero / बजेट घाटा शून्य हुनु",
      "Public debt has been paid off completely / सम्पूर्ण राष्ट्रिय ऋण चुक्ता हुनु"
    ],
    expEng: "A BOP surplus occurs when total economic receipts from abroad (exports, remittances, foreign loans/grants, FDI) exceed total payments to the rest of the world.",
    expNep: "कुनै निश्चित अवधिमा देशमा भित्रिने कुल विदेशी मुद्राको प्रवाह बाहिरिने रकमभन्दा बढी हुँदा शोधानान्तर बचत (BOP Surplus) कायम हुन्छ।",
    syllabusModule: "आर्थिक विकास, सूचक र मौद्रिक नीति"
  },
  {
    qEng: "What is the standard Value Added Tax (VAT) rate enforced in Nepal under the Value Added Tax Act 2052?",
    qNep: "मूल्य अभिवृद्धि कर ऐन २०५२ अनुसार नेपालमा लागु गरिएको एकल भ्याट (VAT) दर कति प्रतिशत छ?",
    correct: "13.0% / १३.० प्रतिशत",
    distractors: ["10.0% / १०.० प्रतिशत", "15.0% / १५.० प्रतिशत", "12.0% / १२.० प्रतिशत"],
    expEng: "Nepal applies a single standard VAT rate of 13% on taxable goods and services.",
    expNep: "नेपालमा वि.सं. २०५४ मङ्सिर १ देखि लागु भएको मूल्य अभिवृद्धि करको एकल दर १३ प्रतिशत कायम रहेको छ।",
    syllabusModule: "आर्थिक विकास, सूचक र मौद्रिक नीति"
  },
  {
    qEng: "Under Nepal Rastra Bank directives, what is the maximum regulatory Credit-to-Deposit (CD) Ratio permitted for commercial banks?",
    qNep: "नेपाल राष्ट्र बैंकको निर्देशन अनुसार बैंक तथा वित्तीय संस्थाहरूले कायम गर्नुपर्ने अधिकतम कर्जा-निक्षेप अनुपात (CD Ratio) कति प्रतिशत तोकिएको छ?",
    correct: "90.0% / ९०.० प्रतिशत",
    distractors: ["85.0% / ८५.० प्रतिशत", "80.0% / ८०.० प्रतिशत", "95.0% / ९५.० प्रतिशत"],
    expEng: "NRB prudential regulation limits the Credit to Deposit (CD) ratio to a maximum of 90.0% to ensure banking solvency and liquidity.",
    expNep: "बैंकहरूले निक्षेप र प्राथमिक पुँजीको आधारमा प्रवाह गर्न पाउने कर्जाको सीमा (CD Ratio) अधिकतम ९०% कायम गरिएको छ।",
    syllabusModule: "आर्थिक विकास, सूचक र मौद्रिक नीति"
  },
  {
    qEng: "Which institution is the supreme central accounting body in Nepal responsible for auditing all government revenues and expenditures?",
    qNep: "नेपाल सरकार, प्रदेश सरकार, स्थानीय तह र ५० प्रतिशतभन्दा बढी स्वामित्व भएका सार्वजनिक संस्थानहरूको लेखापरीक्षण गर्ने संवैधानिक निकाय कुन हो?",
    correct: "Office of the Auditor General / महालेखा परीक्षकको कार्यालय",
    distractors: [
      "Financial Comptroller General Office / महालेखा नियन्त्रक कार्यालय",
      "Public Accounts Committee / सार्वजनिक लेखा समिति",
      "Ministry of Finance / अर्थ मन्त्रालय"
    ],
    expEng: "Under Article 241 of the Constitution of Nepal, the Auditor General audits all accounts of federal, provincial, local levels, and public enterprises.",
    expNep: "नेपालको संविधानको धारा २४१ बमोजिम संघीय, प्रादेशिक, स्थानीय तह र सरकारी संस्थानहरूको अन्तिम लेखापरीक्षण गर्ने अधिकार महालेखा परीक्षकलाई छ।",
    syllabusModule: "आर्थिक विकास, सूचक र मौद्रिक नीति"
  }
];

// =========================================================================
// TOPIC 4: Governance & Constitution (संविधान, कानून र सङ्घीय शासन)
// Target: Q16–Q20 in every set
// =========================================================================
export const TOPIC_4_GOVERNANCE_POOL: MasterBilingualItem[] = [
  {
    qEng: "On which date was the current Constitution of Nepal promulgated by the Constituent Assembly?",
    qNep: "संविधान सभाबाट पारित नेपालको वर्तमान संविधान कहिले जारी (प्रमाणीकरण) भएको थियो?",
    correct: "2072 BS Ashwin 3 (September 20, 2015) / २०७२ असोज ३",
    distractors: ["2072 BS Bhadra 30 / २०७२ भदौ ३०", "2071 BS Magh 8 / २०७१ माघ ८", "2072 BS Kartik 1 / २०७२ कात्तिक १"],
    expEng: "The Constitution of Nepal was formally promulgated on 20 September 2015 (3 Ashwin 2072 BS) comprising 35 Parts, 308 Articles, and 9 Schedules.",
    expNep: "नेपालको संविधान वि.सं. २०७२ असोज ३ गते राष्ट्रपति डा. रामवरण यादवबाट औपचारिक रूपमा जारी गरिएको थियो, जसमा ३५ भाग, ३०८ धारा र ९ अनुसूची छन्।",
    syllabusModule: "संविधान, कानुन र सुशासन"
  },
  {
    qEng: "How many Fundamental Rights (मौलिक हकहरू) are guaranteed in Part 3 (Articles 16 to 46) of the Constitution of Nepal?",
    qNep: "नेपालको संविधानको भाग ३ (धारा १६ देखि ४६ सम्म) मा कुल कतिवटा मौलिक हकहरूको व्यवस्था गरिएको छ?",
    correct: "31 Fundamental Rights / ३१ वटा मौलिक हकहरू",
    distractors: ["21 Fundamental Rights / २१ वटा", "25 Fundamental Rights / २५ वटा", "35 Fundamental Rights / ३५ वटा"],
    expEng: "Part 3 of the Constitution guarantees 31 distinct fundamental rights ranging from Right to Live with Dignity (Art 16) to Constitutional Remedies (Art 46).",
    expNep: "नेपालको संविधानको भाग ३ मा धारा १६ देखि ४६ सम्म नागरिकका लागि ३१ वटा मौलिक हकहरूको प्रत्याभूति गरिएको छ।",
    syllabusModule: "संविधान, कानुन र सुशासन"
  },
  {
    qEng: "Under which Article of the Constitution of Nepal is the Right to Information (सूचनाको हक) guaranteed as a fundamental right?",
    qNep: "नेपालको संविधानको कुन धारामा नागरिकको 'सूचनाको हक' सम्बन्धी मौलिक हकको व्यवस्था गरिएको छ?",
    correct: "Article 27 / धारा २७",
    distractors: ["Article 24 / धारा २४", "Article 19 / धारा १९", "Article 32 / धारा ३२"],
    expEng: "Article 27 of the Constitution ensures every citizen has the right to demand and receive information on any matter of their interest or public interest.",
    expNep: "नेपालको संविधानको धारा २७ मा प्रत्येक नागरिकलाई आफ्नो वा सार्वजनिक सरोकारको कुनै पनि विषयको सूचना माग्ने र पाउने हक हुने व्यवस्था छ।",
    syllabusModule: "संविधान, कानुन र सुशासन"
  },
  {
    qEng: "Under Section 3(c) of the Banking Offence and Punishment Act 2064, issuing an overdraft cheque without sufficient balance (Cheque Bounce) is classified as what?",
    qNep: "बैंकिङ कसुर तथा सजाय ऐन २०६४ को दफा ३(ग) अनुसार खातामा पर्याप्त मौज्दात नभई चेक जारी गर्ने (Cheque Bounce) कार्यलाई के मानिन्छ?",
    correct: "Banking Offence / बैंकिङ कसुर (बिगो भराई बिगो बमोजिम जरिवाना र कैद)",
    distractors: [
      "Simple Civil Dispute / सामान्य देवानी विवाद मात्र",
      "Breach of Contract / सामान्य करार उल्लंघन मात्र",
      "Internal Bank Disciplinary Issue / बैंकको आन्तरिक मामिला"
    ],
    expEng: "Issuing a cheque without funds is a criminal Banking Offence under Section 3(c) of the Banking Offence Act 2064, punishable with recovery of amount, equal fine, and imprisonment.",
    expNep: "बैंकिङ कसुर तथा सजाय ऐन २०६४ को दफा ३(ग) बमोजिम खातामा पर्याप्त रकम नभएको जानीजानी चेक काट्नु बैंकिङ कसुर हो, जसमा बिगो असुल, बिगो बमोजिम जरिवाना र कैद सजाय हुन्छ।",
    syllabusModule: "संविधान, कानुन र सुशासन",
    actSection: "दफा ३(ग), बैंकिङ कसुर ऐन २०६४"
  },
  {
    qEng: "Which Article of the Constitution of Nepal provides for the establishment and powers of the Commission for the Investigation of Abuse of Authority (CIAA)?",
    qNep: "नेपालको संविधानको कुन धारामा अख्तियार दुरुपयोग अनुसन्धान आयोग (CIAA) को गठन र काम, कर्तव्य तथा अधिकारको व्यवस्था गरिएको छ?",
    correct: "Article 238 & 239 / धारा २३८ र २३९",
    distractors: ["Article 240 & 241 / धारा २४० र २४१", "Article 242 & 243 / धारा २४२ र २४३", "Article 245 & 246 / धारा २४५ र २४६"],
    expEng: "Article 238 establishes the CIAA and Article 239 defines its powers to investigate corruption and abuse of authority by public post holders.",
    expNep: "नेपालको संविधानको धारा २३८ मा अख्तियार दुरुपयोग अनुसन्धान आयोगको गठन र धारा २३९ मा यसको काम, कर्तव्य र अधिकारको व्यवस्था छ।",
    syllabusModule: "संविधान, कानुन र सुशासन"
  },
  {
    qEng: "According to Nepal Rastra Bank Act 2058, what is the official tenure of the Governor and Deputy Governors of NRB?",
    qNep: "नेपाल राष्ट्र बैंक ऐन २०५८ अनुसार नेपाल राष्ट्र बैंकका गभर्नर र डेपुटी गभर्नरको पदावधि कति वर्षको हुन्छ?",
    correct: "5 Years / ५ वर्ष",
    distractors: ["4 Years / ४ वर्ष", "6 Years / ६ वर्ष", "3 Years / ३ वर्ष"],
    expEng: "Section 15 of Nepal Rastra Bank Act 2058 specifies that the tenure of the Governor, Deputy Governors, and Directors is 5 years.",
    expNep: "नेपाल राष्ट्र बैंक ऐन २०५८ को दफा १५ बमोजिम नेपाल सरकारद्वारा नियुक्त हुने गभर्नर, डेपुटी गभर्नर तथा सञ्चालकहरूको पदावधि ५ वर्षको हुनेछ।",
    syllabusModule: "संविधान, कानुन र सुशासन",
    actSection: "दफा १५, नेपाल राष्ट्र बैंक ऐन २०५८"
  },
  {
    qEng: "Under the Public Procurement Act 2063, which method is the default and preferred method for standard public procurement above the threshold?",
    qNep: "सार्वजनिक खरिद ऐन २०६३ अनुसार सार्वजनिक निकायहरूले खरिद गर्दा अपनाउनुपर्ने मूल र प्राथमिक विधि कुन हो?",
    correct: "Open Competitive Bidding (खुल्ला बोलपत्र)",
    distractors: ["Direct Procurement (सोझै खरिद)", "Sealed Quotation (शिलबन्दी दरभाउपत्र)", "Consumer Committee (उपभोक्ता समिति)"],
    expEng: "Under Section 8 of the Public Procurement Act 2063, Open Competitive Bidding is the mandatory default method to ensure maximum competition, transparency, and economy.",
    expNep: "सार्वजनिक खरिद ऐन २०६३ को दफा ८ ले सार्वजनिक खरिद गर्दा खुला र स्वच्छ प्रतिस्पर्धाका लागि खुल्ला बोलपत्र आह्वानलाई प्राथमिक विधिको रूपमा तोकेको छ।",
    syllabusModule: "संविधान, कानुन र सुशासन",
    actSection: "दफा ८, सार्वजनिक खरिद ऐन २०६३"
  },
  {
    qEng: "Which Schedule of the Constitution of Nepal enumerates the Exclusive Powers of the Federal Level (सङ्घको अधिकार सूची)?",
    qNep: "नेपालको संविधानको कुन अनुसूचीमा सङ्घको एकल अधिकारको सूची (Schedule of Federal Powers - ३५ वटा विषय) समावेश गरिएको छ?",
    correct: "Schedule 5 / अनुसूची ५",
    distractors: ["Schedule 6 / अनुसूची ६", "Schedule 7 / अनुसूची ७", "Schedule 8 / अनुसूची ८"],
    expEng: "Schedule 5 lists the 35 exclusive federal powers, including defense, foreign affairs, central banking, currency, and federal police.",
    expNep: "नेपालको संविधानको अनुसूची ५ मा रक्षा, परराष्ट्र, मुद्रा तथा बैंकिङ लगायत सङ्घको ३५ वटा एकल अधिकारको सूची व्यवस्था गरिएको छ।",
    syllabusModule: "संविधान, कानुन र सुशासन"
  },
  {
    qEng: "Under the Right to Information Act 2064, within what maximum timeframe must a Public Information Officer provide requested information (if readily available)?",
    qNep: "सूचनाको हक सम्बन्धी ऐन २०६४ अनुसार सूचना अधिकारीले माग गरिएको सूचना सामान्यतया तत्काल र नसकेमा बढीमा कति दिनभित्र उपलब्ध गराउनुपर्छ?",
    correct: "Immediately or within 15 Days / तत्काल वा बढीमा १५ दिनभित्र",
    distractors: ["7 Days / ७ दिनभित्र", "30 Days / ३० दिनभित्र", "3 Days / ३ दिनभित्र"],
    expEng: "Section 7 of the RTI Act 2064 stipulates that the Information Officer must provide information immediately or at most within 15 days from application.",
    expNep: "सूचनाको हक सम्बन्धी ऐन २०६४ को दफा ७ बमोजिम माग भएको सूचना तत्काल र तत्काल दिन नसकिने भए निवेदन परेको मितिले १५ दिनभित्र उपलब्ध गराउनुपर्छ।",
    syllabusModule: "संविधान, कानुन र सुशासन"
  },
  {
    qEng: "Under Article 243 of the Constitution of Nepal, which constitutional body conducts written examinations for permanent recruitment in Public Enterprises?",
    qNep: "नेपालको संविधानको धारा २४३ बमोजिम सार्वजनिक संस्थानहरू (Public Enterprises) को स्थायी पदपूर्तिका लागि लिखित परीक्षा सञ्चालन गर्ने जिम्मेवारी कुन निकायलाई तोकिएको छ?",
    correct: "Public Service Commission (लोक सेवा आयोग)",
    distractors: [
      "Ministry of General Administration / संघीय मामिला तथा सामान्य प्रशासन मन्त्रालय",
      "Respective Enterprise Management / सम्बन्धित संस्थानको व्यवस्थापन मात्र",
      "Labour Department / श्रम तथा रोजगार विभाग"
    ],
    expEng: "Article 243(2) mandates that the Public Service Commission (PSC) conducts written examinations for appointments to permanent service in organized institutions (Public Enterprises).",
    expNep: "नेपालको संविधानको धारा २४३(२) अनुसार सङ्गठित संस्थाको कर्मचारी सेवाका पदमा स्थायी पदपूर्तिका लागि लिइने लिखित परीक्षा लोक सेवा आयोगले सञ्चालन गर्नेछ।",
    syllabusModule: "संविधान, कानुन र सुशासन"
  }
];

// =========================================================================
// TOPIC 5: International Affairs & Institutions (अन्तर्राष्ट्रिय सम्बन्ध र संस्थाहरू)
// Target: Q21–Q25 in every set
// =========================================================================
export const TOPIC_5_INTERNATIONAL_POOL: MasterBilingualItem[] = [
  {
    qEng: "In which city and year was the SAARC (South Asian Association for Regional Cooperation) officially established?",
    qNep: "दक्षिण एसियाली क्षेत्रीय सहयोग सङ्गठन (सार्क / SAARC) को स्थापना कहिले र कहाँ भएको थियो?",
    correct: "December 8, 1985 (Dhaka, Bangladesh) / सन् १९८५ डिसेम्बर ८ (ढाका)",
    distractors: [
      "January 16, 1987 (Kathmandu, Nepal)",
      "November 25, 1983 (New Delhi, India)",
      "August 15, 1990 (Islamabad, Pakistan)"
    ],
    expEng: "SAARC was founded in Dhaka on 8 December 1985 by seven South Asian nations. Its Secretariat was established in Kathmandu on 16 January 1987.",
    expNep: "सार्कको स्थापना सन् १९८५ डिसेम्बर ८ मा ढाकामा भएको थियो भने यसको स्थायी सचिवालय सन् १९८७ जनवरी १६ मा काठमाडौंमा स्थापना भएको हो।",
    syllabusModule: "अन्तर्राष्ट्रिय सङ्घसंस्था र मामिला"
  },
  {
    qEng: "Which country joined SAARC as its 8th official member state during the 14th SAARC Summit in New Delhi (2007)?",
    qNep: "सन् २००७ मा नयाँ दिल्लीमा सम्पन्न १४ औँ सार्क शिखर सम्मेलनबाट सार्कको आठौँ सदस्य राष्ट्रको रूपमा कुन देश सामेल भएको थियो?",
    correct: "Afghanistan / अफगानिस्तान",
    distractors: ["Myanmar / म्यानमार", "Iran / इरान", "Mauritius / मरिसस"],
    expEng: "Afghanistan was admitted as the eighth member of SAARC at the 14th summit held in New Delhi in April 2007.",
    expNep: "सन् २००७ अप्रिलमा भारतको नयाँ दिल्लीमा सम्पन्न १४ औँ शिखर सम्मेलनबाट अफगानिस्तान सार्कको आठौँ सदस्य राष्ट्र बनेको थियो।",
    syllabusModule: "अन्तर्राष्ट्रिय सङ्घसंस्था र मामिला"
  },
  {
    qEng: "Where is the permanent Secretariat of BIMSTEC (Bay of Bengal Initiative for Multi-Sectoral Technical and Economic Cooperation) located?",
    qNep: "बहुक्षेत्रीय प्राविधिक तथा आर्थिक सहयोगका लागि बङ्गालको खाडीको प्रयास (बिम्सटेक / BIMSTEC) को स्थायी सचिवालय कहाँ अवस्थित छ?",
    correct: "Dhaka, Bangladesh / ढाका, बङ्गलादेश",
    distractors: ["Bangkok, Thailand / बैंकक, थाइल्याण्ड", "Colombo, Sri Lanka / कोलम्बो, श्रीलंका", "New Delhi, India / नयाँ दिल्ली, भारत"],
    expEng: "The permanent Secretariat of BIMSTEC is situated in Dhaka, Bangladesh, inaugurated in 2014.",
    expNep: "बिम्सटेकको स्थायी सचिवालय सन् २०१४ मा बङ्गलादेशको राजधानी ढाकामा स्थापना गरिएको हो।",
    syllabusModule: "अन्तर्राष्ट्रिय सङ्घसंस्था र मामिला"
  },
  {
    qEng: "On which date was the United Nations (UN) Charter signed and formally enforced (United Nations Day)?",
    qNep: "संयुक्त राष्ट्रसङ्घ (UN) को बडापत्र कहिलेदेखि औपचारिक रूपमा लागु भई स्थापना भएको मानिन्छ (संयुक्त राष्ट्रसङ्घ दिवस)?",
    correct: "October 24, 1945 AD / २४ अक्टोबर १९४५",
    distractors: ["January 1, 1945 AD", "June 26, 1945 AD", "December 14, 1955 AD"],
    expEng: "The UN officially came into existence on 24 October 1945 when the Charter was ratified by the majority of signatories.",
    expNep: "संयुक्त राष्ट्रसङ्घको बडापत्र २४ अक्टोबर १९४५ मा अनुमोदन भई औपचारिक रूपमा संयुक्त राष्ट्रसङ्घको स्थापना भएको हो।",
    syllabusModule: "अन्तर्राष्ट्रिय सङ्घसंस्था र मामिला"
  },
  {
    qEng: "When did Nepal officially become a member state of the United Nations (UN)?",
    qNep: "नेपालले कहिले औपचारिक रूपमा संयुक्त राष्ट्रसङ्घ (UN) को सदस्यता प्राप्त गरेको थियो?",
    correct: "December 14, 1955 AD (वि.सं. २०१२ मङ्सिर २९)",
    distractors: ["April 25, 1945 AD", "September 20, 1960 AD", "November 1, 1950 AD"],
    expEng: "Nepal was admitted to the United Nations on 14 December 1955 under the UN General Assembly 'Package Deal' along with 15 other countries.",
    expNep: "नेपालले १४ डिसेम्बर १९५५ (वि.सं. २०१२ मङ्सिर २९) मा १६ देशहरूसँगै 'प्याकेज डिल' अन्तर्गत संयुक्त राष्ट्रसङ्घको सदस्यता पाएको हो।",
    syllabusModule: "अन्तर्राष्ट्रिय सङ्घसंस्था र मामिला"
  },
  {
    qEng: "Where are the headquarters of the World Bank (WB) and the International Monetary Fund (IMF) located?",
    qNep: "अन्तर्राष्ट्रिय मुद्रा कोष (IMF) र विश्व बैंक (World Bank) को केन्द्रीय मुख्यालय कहाँ अवस्थित छ?",
    correct: "Washington, D.C., USA / वासिङ्टन डि.सी., अमेरिका",
    distractors: ["Geneva, Switzerland / जेनेभा, स्वीट्जरल्याण्ड", "New York, USA / न्युयोर्क, अमेरिका", "London, UK / लन्डन, बेलायत"],
    expEng: "Both the World Bank and the IMF were established at the Bretton Woods Conference in 1944 and are headquartered in Washington, D.C.",
    expNep: "सन् १९४४ को ब्रेटन वुड्स सम्मेलनबाट स्थापित विश्व बैंक र अन्तर्राष्ट्रिय मुद्रा कोष (IMF) दुवैको मुख्यालय अमेरिकाको वासिङ्टन डि.सी. मा रहेको छ।",
    syllabusModule: "अन्तर्राष्ट्रिय सङ्घसंस्था र मामिला"
  },
  {
    qEng: "On which date did Nepal officially become the 147th member state of the World Trade Organization (WTO)?",
    qNep: "नेपाल कहिले औपचारिक रूपमा विश्व व्यापार सङ्गठन (WTO) को १४७ औँ सदस्य राष्ट्र बनेको थियो?",
    correct: "April 23, 2004 AD (वि.सं. २०६१ वैशाख ११)",
    distractors: ["January 1, 1995 AD", "September 11, 2003 AD", "December 1, 2005 AD"],
    expEng: "Nepal officially joined the WTO on 23 April 2004 as its 147th member, making it the first Least Developed Country (LDC) to accede through the full negotiation process.",
    expNep: "नेपाल सन् २००४ अप्रिल २३ (वि.सं. २०६१ वैशाख ११) मा वार्ता प्रक्रिया पूरा गरी विश्व व्यापार सङ्गठन (WTO) को सदस्यता पाउने पहिलो अतिकम विकसित राष्ट्र बनेको थियो।",
    syllabusModule: "अन्तर्राष्ट्रिय सङ्घसंस्था र मामिला"
  },
  {
    qEng: "Where is the headquarters of the Asian Development Bank (ADB) located?",
    qNep: "एसियाली विकास बैंक (Asian Development Bank - ADB) को केन्द्रीय मुख्यालय कहाँ अवस्थित छ?",
    correct: "Manila, Philippines / मनिला, फिलिपिन्स",
    distractors: ["Tokyo, Japan / टोकियो, जापान", "Beijing, China / बेइजिङ, चीन", "Singapore / सिङ्गापुर"],
    expEng: "The Asian Development Bank (ADB) was founded on 19 December 1966 and is headquartered in Mandaluyong, Metro Manila, Philippines.",
    expNep: "सन् १९६६ डिसेम्बर १९ मा स्थापित एसियाली विकास बैंक (ADB) को मुख्यालय फिलिपिन्सको मनिलामा रहेको छ, जसमा नेपाल संस्थापक सदस्य हो।",
    syllabusModule: "अन्तर्राष्ट्रिय सङ्घसंस्था र मामिला"
  },
  {
    qEng: "How many principal organs comprise the United Nations according to Article 7 of the UN Charter?",
    qNep: "संयुक्त राष्ट्रसङ्घको बडापत्रको धारा ७ अनुसार संयुक्त राष्ट्रसङ्घका कतिवटा प्रमुख अङ्गहरू रहेका छन्?",
    correct: "6 Principal Organs / ६ वटा प्रमुख अङ्गहरू",
    distractors: ["5 Organs / ५ वटा", "7 Organs / ७ वटा", "8 Organs / ८ वटा"],
    expEng: "The UN has 6 principal organs: General Assembly, Security Council, Economic and Social Council (ECOSOC), Trusteeship Council, International Court of Justice (ICJ), and the Secretariat.",
    expNep: "संयुक्त राष्ट्रसङ्घका ६ प्रमुख अङ्गहरू छन्: महासभा, सुरक्षा परिषद्, आर्थिक तथा सामाजिक परिषद्, जिम्मा जमानी परिषद्, अन्तर्राष्ट्रिय न्यायालय र सचिवालय।",
    syllabusModule: "अन्तर्राष्ट्रिय सङ्घसंस्था र मामिला"
  },
  {
    qEng: "How many non-permanent member countries are elected to serve on the UN Security Council (UNSC) for a 2-year term?",
    qNep: "संयुक्त राष्ट्रसङ्घको सुरक्षा परिषद् (UNSC) मा २ वर्षको पदावधिका लागि कतिवटा अस्थायी सदस्य राष्ट्रहरू निर्वाचित हुन्छन्?",
    correct: "10 Non-permanent Members / १० अस्थायी सदस्य राष्ट्रहरू",
    distractors: ["5 Members / ५ सदस्य", "15 Members / १५ सदस्य", "12 Members / १२ सदस्य"],
    expEng: "The UN Security Council consists of 15 members: 5 permanent veto-wielding members (USA, UK, France, Russia, China) and 10 non-permanent members elected for two-year terms.",
    expNep: "सुरक्षा परिषद्मा ५ स्थायी (भिटो शक्तिप्राप्त) र महासभाबाट २ वर्षका लागि निर्वाचित हुने १० अस्थायी गरी कुल १५ सदस्य राष्ट्रहरू हुन्छन्।",
    syllabusModule: "अन्तर्राष्ट्रिय सङ्घसंस्था र मामिला"
  }
];

// =========================================================================
// TOPIC 6: Science, ICT, Public Health & Current Affairs (विज्ञान, प्रविधि र समसामयिक)
// Target: Q26–Q30 in every set
// =========================================================================
export const TOPIC_6_ICT_SCIENCE_POOL: MasterBilingualItem[] = [
  {
    qEng: "Which type of computer memory is Volatile, meaning all stored data is immediately lost when the computer power is switched off?",
    qNep: "कम्प्युटरमा विद्युत् आपूर्ति बन्द हुनासाथ भण्डारण गरिएको सम्पूर्ण डाटा नष्ट हुने अस्थायी (Volatile) मेमोरी कुन हो?",
    correct: "RAM (Random Access Memory)",
    distractors: ["ROM (Read Only Memory)", "Hard Disk Drive (HDD)", "Flash Storage / SSD"],
    expEng: "RAM is primary volatile semiconductor memory that requires continuous electric power to retain data.",
    expNep: "र्याम (RAM) एक प्राथमिक अस्थायी (Volatile) मेमोरी हो, जसमा कम्प्युटर बन्द हुँदा वा लाइन जाँदा डाटा नष्ट हुन्छ।",
    syllabusModule: "विज्ञान, प्रविधि र कम्प्युटर"
  },
  {
    qEng: "In digital banking in Nepal, what does the abbreviation 'RTGS' stand for?",
    qNep: "नेपालको आधुनिक विद्युतीय बैंकिङ प्रणालीमा 'RTGS' को पूर्ण रूप (Full Form) के हो?",
    correct: "Real Time Gross Settlement / रियल टाइम ग्रस सेटलमेन्ट",
    distractors: [
      "Rapid Transmission of Government Securities",
      "Real Transfer of General Savings",
      "Remote Transaction Guarantee System"
    ],
    expEng: "RTGS is a specialist funds transfer system operated by Nepal Rastra Bank where transfer of money takes place on a continuous, individual gross order basis in real time.",
    expNep: "RTGS (Real Time Gross Settlement) नेपाल राष्ट्र बैंकले सञ्चालन गरेको तत्काल ठूला रकमहरूको एक खाताबाट अर्को खातामा फर्छ्यौट गर्ने विद्युतीय प्रणाली हो।",
    syllabusModule: "विज्ञान, प्रविधि र कम्प्युटर"
  },
  {
    qEng: "Who won Nepal's first-ever historic Paralympic medal (Bronze Medal) at the Paris 2024 Paralympic Games?",
    qNep: "पेरिस २०२४ पारालिम्पिक खेलकुदमा नेपालका लागि ऐतिहासिक पहिलो पदक (कांस्य पदक) जित्ने खेलाडी को हुन्?",
    correct: "Palesha Goverdhan (Taekwondo) / पलेशा गोवर्धन (पारा तेक्वान्दो)",
    distractors: ["Deepak Bista / दीपक विष्ट", "Gaurika Singh / गौरिका सिंह", "Tej Bahadur Bhandari / तेज बहादुर भण्डारी"],
    expEng: "Palesha Goverdhan made history by winning the Bronze medal in women's K44 under 57kg Taekwondo at the Paris 2024 Paralympics, Nepal's first official Olympic/Paralympic medal.",
    expNep: "पलेशा गोवर्धनले पेरिस २०२४ पारालिम्पिकमा के-४४ विधाको ५७ केजी मुनि पारा तेक्वान्दोमा कांस्य पदक जित्दै नेपालका लागि ऐतिहासिक पहिलो ओलम्पिक/पारालिम्पिक पदक दिलाएकी हुन्।",
    syllabusModule: "विज्ञान, प्रविधि र कम्प्युटर"
  },
  {
    qEng: "What is an IPv4 (Internet Protocol Version 4) address length in bits?",
    qNep: "इन्टरनेट प्रोटोकल भर्सन ४ (IPv4) मा IP Address कति बिट (Bits) को हुन्छ?",
    correct: "32 Bits (4 Octets) / ३२ बिट",
    distractors: ["64 Bits / ६४ बिट", "128 Bits (IPv6) / १२८ बिट", "16 Bits / १६ बिट"],
    expEng: "An IPv4 address is 32 bits long, divided into four 8-bit octets separated by dots (e.g. 192.168.1.1).",
    expNep: "IPv4 ठेगाना ३२ बिट (४ अक्टेट) को हुन्छ, जसमा प्रत्येक भागलाई डट (.) ले छुट्याइएको हुन्छ।",
    syllabusModule: "विज्ञान, प्रविधि र कम्प्युटर"
  },
  {
    qEng: "In cybersecurity and banking systems, what fraudulent technique involves sending deceptive emails or messages disguised as legitimate institutions to steal credentials?",
    qNep: "बैंकिङ तथा कम्प्युटर सुरक्षामा वैधानिक बैंक वा संस्थाको भेष धरेर प्रयोगकर्ताको गोप्य पासवर्ड, पिन वा व्यक्तिगत विवरण चोर्ने अपराधलाई के भनिन्छ?",
    correct: "Phishing / फिसिङ",
    distractors: ["Spamming / स्पामिङ", "Firewalling / फायरवालिङ", "De-fragmentation / डि-फ्रेग्मेन्टेसन"],
    expEng: "Phishing is a social engineering cybercrime where targets are contacted by email, phone, or text by someone posing as a legitimate institution to lure individuals into providing sensitive data.",
    expNep: "फिसिङ (Phishing) भन्नाले नक्कली वेबसाइट वा इमेलमार्फत आधिकारिक संस्थाको नाममा प्रयोगकर्तालाई झुक्याएर पासवर्ड, पिन वा कार्ड नम्बर चोरी गर्ने साइबर अपराध हो।",
    syllabusModule: "विज्ञान, प्रविधि र कम्प्युटर"
  },
  {
    qEng: "What is the primary greenhouse gas primarily responsible for anthropogenic global warming and climate change?",
    qNep: "मानव गतिविधिबाट उत्सर्जन हुने र विश्वव्यापी तापक्रम वृद्धि (ग्लोबल वार्मिङ) मा सबैभन्दा बढी योगदान पुर्याउने हरितगृह ग्यास कुन हो?",
    correct: "Carbon Dioxide (CO2) / कार्बन डाइअक्साइड",
    distractors: ["Oxygen (O2) / अक्सिजन", "Argon (Ar) / आर्गन", "Helium (He) / हिलियम"],
    expEng: "Carbon dioxide (CO2) accounted for over 75% of global human greenhouse gas emissions primarily produced by burning fossil fuels.",
    expNep: "जीवाश्म इन्धनको अत्यधिक प्रयोगबाट निस्कने कार्बन डाइअक्साइड (CO2) ग्लोबल वार्मिङको लागि जिम्मेवार प्रमुख हरितगृह ग्यास हो।",
    syllabusModule: "विज्ञान, प्रविधि र कम्प्युटर"
  },
  {
    qEng: "In the field of Artificial Intelligence, what does the acronym 'LLM' stand for?",
    qNep: "आर्टिफिसियल इन्टेलिजेन्स (AI) को क्षेत्रमा 'LLM' को पूर्ण रूप के हो?",
    correct: "Large Language Model / लार्ज ल्याङ्ग्वेज मोडल",
    distractors: [
      "Low Level Machine",
      "Linear Logic Method",
      "Logical Learning Module"
    ],
    expEng: "A Large Language Model (LLM) is an AI model trained on massive text datasets using deep learning techniques to understand and generate human-like text.",
    expNep: "LLM (Large Language Model) भन्नाले विशाल डेटासेटमा तालिम प्राप्त गरी मानव भाषा बुझ्न र नयाँ सामग्री सिर्जना गर्न सक्ने उन्नत एआई मोडेल हो।",
    syllabusModule: "विज्ञान, प्रविधि र कम्प्युटर"
  },
  {
    qEng: "Which component inside the Central Processing Unit (CPU) executes all arithmetic calculations (addition, subtraction) and logical comparisons?",
    qNep: "कम्प्युटरको केन्द्रीय प्रशोधन एकाइ (CPU) भित्र सम्पूर्ण अङ्कगणितीय हिसाब र तार्किक तुलना गर्ने एकाइ कुन हो?",
    correct: "ALU (Arithmetic Logic Unit) / अङ्कगणितीय तार्किक एकाइ",
    distractors: ["CU (Control Unit)", "Cache Memory", "Motherboard"],
    expEng: "The Arithmetic Logic Unit (ALU) performs all arithmetic calculations (+, -, *, /) and logical operations (AND, OR, NOT, comparisons).",
    expNep: "CPU भित्रको ALU ले सम्पूर्ण गणितीय जोड-घटाउ र तुलनात्मक तार्किक कार्यहरू सम्पादन गर्दछ।",
    syllabusModule: "विज्ञान, प्रविधि र कम्प्युटर"
  },
  {
    qEng: "Which vector-borne infectious disease is transmitted to humans by the bite of infected female Aedes mosquitoes (Aedes aegypti)?",
    qNep: "नेपालमा विशेषगरी वर्षातको मौसममा एडिस एजिप्टाई जातको पोथी लामखुट्टेको टोकाइबाट सर्ने सङ्क्रामक रोग कुन हो?",
    correct: "Dengue Fever / डेंगु ज्वरो",
    distractors: ["Malaria / औलो (मलेरिया)", "Kala-azar / कालाजार", "Filariasis / हात्तीपाइले"],
    expEng: "Dengue is transmitted by female mosquitoes mainly of the species Aedes aegypti and Aedes albopictus.",
    expNep: "डेंगु भाइरस संक्रमित एडिस एजिप्टाई (Aedes aegypti) लामखुट्टेको टोकाइबाट मानिसमा डेंगु ज्वरो सर्दछ।",
    syllabusModule: "विज्ञान, प्रविधि र कम्प्युटर"
  },
  {
    qEng: "In computer keyboard shortcuts, which key combination is universally used to 'Paste' copied content in Windows?",
    qNep: "कम्प्युटर किबोर्डमा कुनै पनि कपी (Copy) गरिएको फाइल वा अक्षरलाई चाहेको ठाउँमा टाँस्न (Paste गर्न) कुन सर्टकट की प्रयोग गरिन्छ?",
    correct: "Ctrl + V",
    distractors: ["Ctrl + C", "Ctrl + P", "Ctrl + X"],
    expEng: "In Windows, Ctrl + V pastes clipboard content, whereas Ctrl + C copies and Ctrl + X cuts.",
    expNep: "कम्प्युटरमा कपी गरेको वस्तु टाँस्न Ctrl + V, कपी गर्न Ctrl + C र कट गर्न Ctrl + X प्रयोग हुन्छ।",
    syllabusModule: "विज्ञान, प्रविधि र कम्प्युटर"
  }
];

// =========================================================================
// TOPIC 7: Office & Public Management (कार्यालय सञ्चालन र सार्वजनिक व्यवस्थापन)
// Target: Q31–Q35 in every set
// =========================================================================
export const TOPIC_7_OFFICE_MGMT_POOL: MasterBilingualItem[] = [
  {
    qEng: "In government and public enterprise office administration in Nepal, what is the primary purpose of 'Darta' (दर्ता - Registration)?",
    qNep: "नेपालका सरकारी तथा सार्वजनिक संस्थान कार्यालयहरूमा 'दर्ता' (Darta) गर्नुको मुख्य उद्देश्य के हो?",
    correct: "To record all incoming official letters and documents with an official serial number and date / बाहिरबाट प्राप्त भएका सबै चिठीपत्रहरूको विवरण र मिति अभिलेख राख्नु",
    distractors: [
      "To dispatch outgoing letters to other offices / बाहिर पठाइने चिठीपत्र पठाउनु",
      "To calculate annual employee salary increments / कर्मचारीको तलब वृद्धि हिसाब गर्नु",
      "To destroy outdated audit vouchers / पुराना भौचर नष्ट गर्नु"
    ],
    expEng: "Darta is the mandatory chronological registry of incoming official documents recording sender, subject, date, and assigned registration number.",
    expNep: "दर्ता भन्नाले कार्यालयमा बाहिरबाट प्राप्त हुने चिठीपत्र, प्रतिवेदन तथा कागजातहरूलाई सुरक्षित र व्यवस्थित रूपमा आधिकारिक अभिलेख पुस्तिकामा चढाउने कार्य हो।",
    syllabusModule: "कार्यालय सञ्चालन र सार्वजनिक व्यवस्थापन"
  },
  {
    qEng: "What is 'Chalani' (चलानी - Dispatch) in official Nepalese office procedures?",
    qNep: "कार्यालय कार्यविधिमा 'चलानी' (Chalani) भन्नाले के बुझिन्छ?",
    correct: "Registering and dispatching outgoing letters/documents to external offices / कार्यालयबाट बाहिर जाने चिठीपत्रलाई नम्बर दिई पठाउने कार्य",
    distractors: [
      "Auditing financial balance sheets / वित्तीय नाफा नोक्सान हिसाब",
      "Registering incoming tenders / कार्यालयमा आएका बोलपत्र दर्ता गर्नु",
      "Drafting employee job descriptions / कार्यविवरण तयार गर्नु"
    ],
    expEng: "Chalani is the formal numbering, logging, and dispatching of outward correspondence from an organization to external recipients.",
    expNep: "कार्यालयबाट अन्य निकाय वा व्यक्तिलाई पठाइने चिठीपत्रहरूलाई आधिकारिक चलानी नम्बर र मिति चढाएर पठाउने विधिलाई चलानी भनिन्छ।",
    syllabusModule: "कार्यालय सञ्चालन र सार्वजनिक व्यवस्थापन"
  },
  {
    qEng: "In Nepalese administrative decision-making, what is a 'Tippani' (टिप्पणी - Note Sheet / Minute)?",
    qNep: "नेपालको प्रशासनिक कार्यविधिमा 'टिप्पणी' (Tippani) भन्नाले के बुझिन्छ?",
    correct: "A structured administrative proposal initiated from lower staff to higher decision-making authority for official policy or operational decisions / निर्णयका लागि तल्लो तहबाट तथ्य, कानुन र रायसहित माथिल्लो तहमा पेश गरिने लिखित प्रस्ताव",
    distractors: [
      "A complaint letter written by a customer / सेवाग्राहीले लेखेको उजुरी पत्र",
      "An annual financial budget statement / वार्षिक बजेट विवरण",
      "A casual conversation between colleagues / अनौपचारिक छलफल"
    ],
    expEng: "A Tippani is an administrative note presented through proper channels containing the subject background, legal provisions, precedent, and recommended options for final decision by authorized officers.",
    expNep: "कुनै अस्पष्ट वा नीतिगत विषयमा निर्णय गर्न तथ्य, प्रमाण, कानुन र आफ्नो स्पष्ट राय खुलाई अधिकारप्राप्त अधिकारीसमक्ष निर्णयका लागि पेश गरिने लिखित टिप्पणी हो।",
    syllabusModule: "कार्यालय सञ्चालन र सार्वजनिक व्यवस्थापन"
  },
  {
    qEng: "Under the Good Governance (Management and Operation) Act 2064, which tool must every public office prominently display for public awareness?",
    qNep: "सुशासन (व्यवस्थापन तथा सञ्चालन) ऐन २०६४ अनुसार प्रत्येक सार्वजनिक निकायले सेवाग्राहीले देख्ने गरी अनिवार्य राख्नुपर्ने बडापत्र कुन हो?",
    correct: "Citizen Charter (नागरिक बडापत्र)",
    distractors: ["Audit Report (लेखापरीक्षण प्रतिवेदन)", "Staff Hierarchy Chart (कर्मचारी तालिका)", "Tax Exemption List (कर छुट सूची)"],
    expEng: "Section 25 of the Good Governance Act 2064 mandates that every public office delivering public services must maintain a visible Citizen Charter specifying services, time, fees, and responsible officers.",
    expNep: "सुशासन ऐन २०६४ को दफा २५ बमोजिम सार्वजनिक सेवा प्रवाह गर्ने प्रत्येक कार्यालयले सेवाको किसिम, लाग्ने समय, दस्तुर र जिम्मेवार अधिकारी खुलाई नागरिक बडापत्र अनिवार्य राख्नुपर्छ।",
    syllabusModule: "कार्यालय सञ्चालन र सार्वजनिक व्यवस्थापन",
    actSection: "दफा २५, सुशासन ऐन २०६४"
  },
  {
    qEng: "In Luther Gulick's classic administrative management acronym 'POSDCORB', what do the letters 'CO' represent?",
    qNep: "लुथर गुलिकद्वारा प्रतिपादित व्यवस्थापकीय सिद्धान्त 'POSDCORB' मा 'CO' ले कुन प्रशासनिक कार्यलाई सङ्केत गर्दछ?",
    correct: "Coordinating / समन्वय (समन्वय गर्ने कार्य)",
    distractors: ["Controlling / नियन्त्रण", "Cooperating / सहकार्य", "Commanding / आदेश"],
    expEng: "In POSDCORB (Planning, Organizing, Staffing, Directing, COordinating, Reporting, Budgeting), 'CO' stands for Coordinating.",
    expNep: "POSDCORB मा P-Planning, O-Organizing, S-Staffing, D-Directing, CO-Coordinating (समन्वय), R-Reporting, B-Budgeting हुन्छ।",
    syllabusModule: "कार्यालय सञ्चालन र सार्वजनिक व्यवस्थापन"
  },
  {
    qEng: "According to Abraham Maslow's Need Hierarchy Theory, which is the foundational (lowest level) need of human beings?",
    qNep: "अब्राहम मास्लोको आवश्यकताको सोपान सिद्धान्त (Need Hierarchy Theory) अनुसार मानवको सबैभन्दा आधारभूत (पहिलो तहको) आवश्यकता कुन हो?",
    correct: "Physiological Needs (शारीरिक आवश्यकता - खाना, पानी, बास)",
    distractors: [
      "Safety and Security Needs (सुरक्षाको आवश्यकता)",
      "Social / Belonging Needs (सामाजिक आवश्यकता)",
      "Self-Actualization Needs (आत्मबोधको आवश्यकता)"
    ],
    expEng: "Maslow's hierarchy begins with basic Physiological needs (food, water, shelter, rest) which must be satisfied before higher needs emerge.",
    expNep: "मास्लोको पिरामिडको पहिलो र आधारभूत तहमा शारीरिक आवश्यकता (गाँस, बास, कपास, आराम) पर्दछ।",
    syllabusModule: "कार्यालय सञ्चालन र सार्वजनिक व्यवस्थापन"
  },
  {
    qEng: "Which management theorist formulated 'Theory X' (authoritarian view of employees as inherently lazy) and 'Theory Y' (participative view)?",
    qNep: "कर्मचारीहरू स्वभावैले काम छल्न खोज्ने (Theory X) र अवसर पाए स्व-उत्प्रेरित हुने (Theory Y) सिद्धान्तका प्रतिपादक को हुन्?",
    correct: "Douglas McGregor / डगलस म्याकग्रेगर",
    distractors: ["Frederick Herzberg / फ्रेडरिक हर्जवर्ग", "Elton Mayo / एल्टन मायो", "Peter Drucker / पिटर ड्रकर"],
    expEng: "Douglas McGregor proposed Theory X and Theory Y in his 1960 book 'The Human Side of Enterprise'.",
    expNep: "डगलस म्याकग्रेगरले मानव संसाधन व्यवस्थापनमा थ्योरी एक्स र थ्योरी वाई को अवधारणा प्रतिपादन गरेका हुन्।",
    syllabusModule: "कार्यालय सञ्चालन र सार्वजनिक व्यवस्थापन"
  },
  {
    qEng: "Who is universally recognized as the 'Father of Scientific Management'?",
    qNep: "व्यवस्थापनको इतिहासमा 'वैज्ञानिक व्यवस्थापनका पिता' (Father of Scientific Management) भनेर कसलाई चिनिन्छ?",
    correct: "Frederick Winslow Taylor (F.W. Taylor) / एफ. डब्ल्यु. टेलर",
    distractors: ["Henri Fayol / हेनरी फेयोल", "Max Weber / म्याक्स वेबर", "Chester Barnard / चेस्टर बर्नार्ड"],
    expEng: "F.W. Taylor is known as the Father of Scientific Management for his work study, time and motion study, and standard wage systems.",
    expNep: "कार्य अध्ययन, समय तथा गति अध्ययन र वैज्ञानिक कार्यविधि प्रतिपादन गरेबापत एफ. डब्ल्यु. टेलरलाई वैज्ञानिक व्यवस्थापनका पिता मानिन्छ।",
    syllabusModule: "कार्यालय सञ्चालन र सार्वजनिक व्यवस्थापन"
  },
  {
    qEng: "How many general Principles of Management were propounded by Henri Fayol in administrative management theory?",
    qNep: "प्रशासनिक व्यवस्थापनका सिद्धान्तकार हेनरी फेयोल (Henri Fayol) ले व्यवस्थापनका कतिवटा सिद्धान्तहरू प्रतिपादन गरेका छन्?",
    correct: "14 Principles / १४ वटा सिद्धान्तहरू",
    distractors: ["10 Principles / १० वटा", "12 Principles / १२ वटा", "7 Principles / ७ वटा"],
    expEng: "Henri Fayol propounded 14 Principles of Management, including Division of Work, Authority and Responsibility, Discipline, Unity of Command, and Unity of Direction.",
    expNep: "हेनरी फेयोलले कार्य विभाजन, अधिकार र उत्तरदायित्व, आदेशको एकता लगायत व्यवस्थापनका १४ वटा सिद्धान्तहरू प्रतिपादन गरेका छन्।",
    syllabusModule: "कार्यालय सञ्चालन र सार्वजनिक व्यवस्थापन"
  },
  {
    qEng: "Which type of filing system arranges files and records based on the subject matter or topic of documents?",
    qNep: "कार्यालयमा कागजातहरूलाई तिनीहरूको विषयवस्तु वा शीर्षकको आधारमा वर्गीकरण गरी सुरक्षित राख्ने फाइलिङ विधिलाई के भनिन्छ?",
    correct: "Subject Filing (विषयगत फाइलिङ)",
    distractors: [
      "Alphabetical Filing (वर्णानुक्रम फाइलिङ)",
      "Chronological Filing (कालक्रमानुसार फाइलिङ)",
      "Geographical Filing (भौगोलिक फाइलिङ)"
    ],
    expEng: "Subject filing arranges records and folders alphabetically or hierarchically by the primary subject matter of the documents.",
    expNep: "कागजातहरूलाई तिनीहरूको विषय वा शीर्षक अनुसार छुट्याएर फाइल खडा गरी राख्ने विधिलाई विषयगत फाइलिङ भनिन्छ।",
    syllabusModule: "कार्यालय सञ्चालन र सार्वजनिक व्यवस्थापन"
  }
];

// =========================================================================
// TOPIC 8: Knowledge about Public Enterprises (सार्वजनिक संस्थान सम्बन्धी ज्ञान)
// Target: Q36–Q40 in every set
// =========================================================================
export const TOPIC_8_PUBLIC_ENTERPRISES_POOL: MasterBilingualItem[] = [
  {
    qEng: "Which is the first commercial bank established in the history of Nepal, inaugurated on 1994 BS Kartik 30?",
    qNep: "वि.सं. १९९४ कात्तिक ३० गते स्थापना भई नेपालको आधुनिक बैंकिङ इतिहास प्रारम्भ गर्ने पहिलो बैंक कुन हो?",
    correct: "Nepal Bank Limited (NBL) / नेपाल बैंक लिमिटेड",
    distractors: [
      "Rastriya Banijya Bank (RBB) / राष्ट्रिय वाणिज्य बैंक",
      "Agricultural Development Bank (ADBL) / कृषि विकास बैंक",
      "Nepal Rastra Bank (NRB) / नेपाल राष्ट्र बैंक"
    ],
    expEng: "Nepal Bank Limited was inaugurated on 30 Kartik 1994 BS by King Tribhuvan and Prime Minister Juddha Shamsher, marking the beginning of organized banking in Nepal.",
    expNep: "वि.सं. १९९४ कात्तिक ३० मा जुद्ध शमशेरको पालामा स्थापित नेपाल बैंक लिमिटेड नेपालको पहिलो वाणिज्य बैंक हो।",
    syllabusModule: "सार्वजनिक संस्थान व्यवस्थापन"
  },
  {
    qEng: "On what date was Rastriya Banijya Bank (RBB) officially established as a fully state-owned commercial bank?",
    qNep: "नेपाल सरकारको पूर्ण स्वामित्वमा राष्ट्रिय वाणिज्य बैंक (RBB) को स्थापना वि.सं. कहिले भएको थियो?",
    correct: "2022 BS Magh 10 (January 23, 1966) / २०२२ माघ १०",
    distractors: ["2024 BS Magh 7 / २०२४ माघ ७", "2013 BS Baishakh 14 / २०१३ वैशाख १४", "2031 BS Ashwin 1 / २०३१ असोज १"],
    expEng: "Rastriya Banijya Bank was established on 10 Magh 2022 BS under the Rastriya Banijya Bank Act 2021 as a fully government-owned commercial bank.",
    expNep: "राष्ट्रिय वाणिज्य बैंक ऐन २०२१ बमोजिम नेपाल सरकारको शतप्रतिशत स्वामित्वमा वि.सं. २०२२ माघ १० मा यसको स्थापना भएको हो।",
    syllabusModule: "सार्वजनिक संस्थान व्यवस्थापन"
  },
  {
    qEng: "When was the Agricultural Development Bank (ADBL / कृषि विकास बैंक) established to finance agricultural modernization?",
    qNep: "नेपालमा कृषि क्षेत्रको विकास र आधुनिकीकरणका लागि वित्तीय सहयोग पुर्याउन कृषि विकास बैंकको स्थापना कहिले भएको थियो?",
    correct: "2024 BS Magh 7 (January 21, 1968) / २०२४ माघ ७",
    distractors: ["2022 BS Magh 10 / २०२२ माघ १०", "2019 BS Ashwin 1 / २०१९ असोज १", "2031 BS Poush 26 / २०३१ पुस २६"],
    expEng: "Agricultural Development Bank Limited (ADBL) was established on 7 Magh 2024 BS under the ADBN Act 2024, later converted into an 'A' class bank.",
    expNep: "कृषि विकास बैंक ऐन २०२४ अन्तर्गत वि.सं. २०२४ माघ ७ गते कृषि विकास बैंकको स्थापना भएको थियो।",
    syllabusModule: "सार्वजनिक संस्थान व्यवस्थापन"
  },
  {
    qEng: "When was the Nepal Electricity Authority (NEA / नेपाल विद्युत प्राधिकरण) established under the NEA Act 2041?",
    qNep: "नेपाल विद्युत प्राधिकरण ऐन २०४१ अनुसार तत्कालीन विद्युत विभाग र नेपाल विद्युत कर्पोरेसन गाभिएर नेपाल विद्युत प्राधिकरणको स्थापना कहिले भयो?",
    correct: "2042 BS Bhadra 1 (August 17, 1985) / २०४२ भदौ १",
    distractors: ["2041 BS Poush 1 / २०४१ पुस १", "2045 BS Baishakh 1 / २०४५ वैशाख १", "2039 BS Magh 15 / २०३९ माघ १५"],
    expEng: "Nepal Electricity Authority (NEA) was established on 1 Bhadra 2042 BS under the NEA Act 2041 to generate, transmit, and distribute electricity in Nepal.",
    expNep: "नेपाल विद्युत प्राधिकरण ऐन २०४१ बमोजिम वि.सं. २०४२ भदौ १ गते नेपाल विद्युत प्राधिकरण (NEA) को औपचारिक स्थापना भएको हो।",
    syllabusModule: "सार्वजनिक संस्थान व्यवस्थापन"
  },
  {
    qEng: "Under which statutory Act was the Employees Provident Fund (EPF / कर्मचारी सञ्चय कोष) officially established in Nepal?",
    qNep: "कर्मचारी सञ्चय कोष (EPF) को स्थापना वि.सं. २०१९ असोज १ मा कुन ऐन बमोजिम भएको थियो?",
    correct: "Employees Provident Fund Act 2019 (कर्मचारी सञ्चय कोष ऐन २०१९)",
    distractors: [
      "Company Act 2063 / कम्पनी ऐन २०६३",
      "Civil Service Act 2049 / निजामती सेवा ऐन २०४९",
      "Social Security Act 2075 / सामाजिक सुरक्षा ऐन २०७५"
    ],
    expEng: "The Employees Provident Fund was established on 1 Ashwin 2019 BS under the Employees Provident Fund Act 2019 to manage provident funds for civil, military, police, and institutional personnel.",
    expNep: "कर्मचारी सञ्चय कोष ऐन २०१९ बमोजिम वि.सं. २०१९ असोज १ मा कर्मचारी सञ्चय कोषको स्थापना भएको हो।",
    syllabusModule: "सार्वजनिक संस्थान व्यवस्थापन"
  },
  {
    qEng: "When was the Citizen Investment Trust (CIT / नागरिक लगानी कोष) established in Nepal?",
    qNep: "नेपालमा सर्वसाधारणको बचत परिचालन गर्न नागरिक लगानी कोष (CIT) को स्थापना कहिले भएको थियो?",
    correct: "2047 BS Chaitra 4 (March 18, 1991) / २०४७ चैत ४",
    distractors: ["2042 BS Bhadra 1 / २०४२ भदौ १", "2050 BS Magh 10 / २०५० माघ १०", "2031 BS Poush 26 / २०३१ पुस २६"],
    expEng: "Citizen Investment Trust (CIT) was established on 4 Chaitra 2047 BS under the Citizen Investment Trust Act 2047 to mobilize public savings and promote capital investment.",
    expNep: "नागरिक लगानी कोष ऐन २०४७ अन्तर्गत वि.सं. २०४७ चैत ४ मा नागरिक लगानी कोष (CIT) को स्थापना भएको हो।",
    syllabusModule: "सार्वजनिक संस्थान व्यवस्थापन"
  },
  {
    qEng: "Which regulatory authority governs, supervises, and regulates the insurance sector in Nepal under the Insurance Act 2079?",
    qNep: "बीमा ऐन २०७९ अनुसार नेपालको बीमा व्यवसायलाई व्यवस्थित, नियमित, विकसित तथा नियन्त्रण गर्ने सर्वोच्च नियमनकारी निकाय कुन हो?",
    correct: "Nepal Insurance Authority (नेपाल बीमा प्राधिकरण - पूर्व बीमा समिति)",
    distractors: [
      "Nepal Rastra Bank (NRB) / नेपाल राष्ट्र बैंक",
      "Securities Board of Nepal (SEBON) / नेपाल धितोपत्र बोर्ड",
      "Ministry of Industry / उद्योग मन्त्रालय"
    ],
    expEng: "Under the Insurance Act 2079, the former Insurance Board (Beema Samiti) was upgraded to the autonomous Nepal Insurance Authority (NIA) as the supreme insurance regulator.",
    expNep: "बीमा ऐन २०७९ लागु भएसँगै तत्कालीन बीमा समितिलाई स्तरोन्नति गरी नेपाल बीमा प्राधिकरण (NIA) को रूपमा नियमनकारी अधिकार दिइएको छ।",
    syllabusModule: "सार्वजनिक संस्थान व्यवस्थापन"
  },
  {
    qEng: "Which regulatory body regulates the securities market, stock exchanges, and listed corporate entities in Nepal under the Securities Act 2063?",
    qNep: "धितोपत्र सम्बन्धी ऐन २०६३ अनुसार नेपालको पुँजी बजार, स्टक एक्सचेन्ज र धितोपत्र निष्कासनको नियमन गर्ने निकाय कुन हो?",
    correct: "Securities Board of Nepal (SEBON / नेपाल धितोपत्र बोर्ड)",
    distractors: [
      "Nepal Stock Exchange (NEPSE) / नेपाल स्टक एक्सचेन्ज",
      "Company Registrar Office / कम्पनी रजिष्ट्रारको कार्यालय",
      "Credit Rating Agency / क्रेडिट रेटिङ एजेन्सी"
    ],
    expEng: "The Securities Board of Nepal (SEBON) was established on 7 June 1993 and is the apex capital market regulator in Nepal.",
    expNep: "धितोपत्र सम्बन्धी ऐन २०६३ बमोजिम नेपाल धितोपत्र बोर्ड (SEBON) नेपालको धितोपत्र बजार तथा पुँजी बजारको नियमनकारी निकाय हो।",
    syllabusModule: "सार्वजनिक संस्थान व्यवस्थापन"
  },
  {
    qEng: "According to the annual Performance Review of Public Enterprises published by the Ministry of Finance, into how many sectors are Public Enterprises (PEs) categorized in Nepal?",
    qNep: "अर्थ मन्त्रालयको सार्वजनिक संस्थानहरूको वार्षिक स्थिति समीक्षा (पहेँलो पुस्तक) अनुसार सार्वजनिक संस्थानहरूलाई कतिवटा क्षेत्रमा वर्गीकरण गरिएको छ?",
    correct: "6 Sectors (Industrial, Commercial, Financial, Public Utility, Social, Service) / ६ वटा क्षेत्र",
    distractors: ["4 Sectors / ४ वटा", "5 Sectors / ५ वटा", "8 Sectors / ८ वटा"],
    expEng: "Nepal's public enterprises are grouped into 6 sectors: Industrial (औद्योगिक), Commercial (व्यापारिक), Financial (वित्तीय), Public Utility (जनोपयोगी), Social (सामाजिक), and Service (सेवामूलक).",
    expNep: "नेपालमा सार्वजनिक संस्थानहरूलाई औद्योगिक, व्यापारिक, वित्तीय, जनोपयोगी, सामाजिक र सेवा गरी ६ वटा मुख्य क्षेत्रमा वर्गीकरण गरिएको छ।",
    syllabusModule: "सार्वजनिक संस्थान व्यवस्थापन"
  },
  {
    qEng: "What is the primary Public-Private Partnership (PPP) infrastructure delivery model where a private developer Builds, Owns, Operates, and later Transfers the project to the government?",
    qNep: "सार्वजनिक निजी साझेदारी (PPP) अन्तर्गत निजी क्षेत्रले पूर्वाधार निर्माण गरी निश्चित अवधि सञ्चालन गरेर सरकारलाई हस्तान्तरण गर्ने मोडल कुन हो?",
    correct: "BOOT Model (Build, Own, Operate and Transfer)",
    distractors: [
      "BOO Model (Build, Own, Operate)",
      "EPC Model (Engineering, Procurement, Construction)",
      "Turnkey Contract"
    ],
    expEng: "Under the BOOT (Build, Own, Operate, and Transfer) model, the concessionaire finances, builds, owns, and operates the facility for a concession period (e.g. 30 years) before handing it over to the government.",
    expNep: "BOOT (Build, Own, Operate, and Transfer) मोडलमा प्रवर्धकले आफ्नै लगानीमा पूर्वाधार निर्माण गरी तोकिएको अवधि सञ्चालन गरेपछि चालु अवस्थामा सरकारलाई हस्तान्तरण गर्दछ।",
    syllabusModule: "सार्वजनिक संस्थान व्यवस्थापन"
  }
];

// =========================================================================
// TOPIC 9: Applied Mathematics (व्यावहारिक गणित तथा वित्तीय गणना)
// Target: Q41–Q45 in every set
// =========================================================================
export const TOPIC_9_APPLIED_MATH_POOL: MasterBilingualItem[] = [
  {
    qEng: "A trader purchases an article for Rs. 4,000 and sells it for Rs. 5,000. What is the profit percentage earned?",
    qNep: "एक व्यापारीले एउटा सामान रु. ४,००० मा किनेर रु. ५,००० मा बिक्री गर्छ भने उसलाई कति प्रतिशत नाफा हुन्छ?",
    correct: "25% / २५ प्रतिशत",
    distractors: ["20% / २० प्रतिशत", "30% / ३० प्रतिशत", "22.5% / २२.५ प्रतिशत"],
    expEng: "Profit = SP - CP = 5000 - 4000 = Rs. 1000. Profit % = (Profit / CP) * 100 = (1000 / 4000) * 100 = 25%.",
    expNep: "नाफा = वि.मु. - क्रि.मु. = ५००० - ४००० = रु. १०००। नाफा % = (नाफा / क्रि.मु.) × १०० = (१००० / ४०००) × १०० = २५%।",
    syllabusModule: "व्यावहारिक गणित तथा वित्तीय गणना"
  },
  {
    qEng: "What is the Simple Interest earned on a principal of Rs. 50,000 invested at 8% per annum for 3 years?",
    qNep: "रु. ५०,००० को ८ प्रतिशत वार्षिक ब्याजदरले ३ वर्षमा हुने साधारण ब्याज कति हुन्छ?",
    correct: "Rs. 12,000 / रु. १२,०००",
    distractors: ["Rs. 10,000 / रु. १०,०००", "Rs. 15,000 / रु. १५,०००", "Rs. 14,400 / रु. १४,४००"],
    expEng: "Simple Interest I = (P * T * R) / 100 = (50,000 * 3 * 8) / 100 = Rs. 12,000.",
    expNep: "साधारण ब्याज = (P × T × R) ÷ १०० = (५०,००० × ३ × ८) ÷ १०० = रु. १२,०००।",
    syllabusModule: "व्यावहारिक गणित तथा वित्तीय गणना"
  },
  {
    qEng: "If 12 workers can complete a construction project in 20 days, how many days will 15 workers take to complete the exact same project at the same pace?",
    qNep: "यदि १२ जना कामदारले कुनै काम २० दिनमा पूरा गर्न सक्छन् भने सोही गतिमा १५ जना कामदारले उक्त काम कति दिनमा सम्पन्न गर्लान्?",
    correct: "16 Days / १६ दिन",
    distractors: ["18 Days / १८ दिन", "15 Days / १५ दिन", "14 Days / १४ दिन"],
    expEng: "Total Man-days = 12 workers * 20 days = 240 man-days. Days for 15 workers = 240 / 15 = 16 days.",
    expNep: "कुल काम = १२ × २० = २४० कामदार-दिन। १५ जनाले सो काम पूरा गर्न लाग्ने समय = २४० ÷ १५ = १६ दिन।",
    syllabusModule: "व्यावहारिक गणित तथा वित्तीय गणना"
  },
  {
    qEng: "The ratio of boys to girls in a training institute is 5:3. If there are 120 girls, what is the total number of students in the institute?",
    qNep: "एउटा तालिम केन्द्रमा छात्र र छात्राको अनुपात ५:३ छ। यदि छात्राको सङ्ख्या १२० जना भए उक्त केन्द्रमा कुल विद्यार्थी सङ्ख्या कति होला?",
    correct: "320 Students / ३२० जना",
    distractors: ["300 Students / ३०० जना", "200 Students / २०० जना", "350 Students / ३५० जना"],
    expEng: "Let ratio multiplier be x. 3x = 120 => x = 40. Total students = 5x + 3x = 8x = 8 * 40 = 320 students.",
    expNep: "३ भाग = १२० => १ भाग = ४०। कुल विद्यार्थी = ५ भाग + ३ भाग = ८ भाग = ८ × ४० = ३२० जना।",
    syllabusModule: "व्यावहारिक गणित तथा वित्तीय गणना"
  },
  {
    qEng: "What is the average of the five numbers: 45, 55, 65, 75, and 85?",
    qNep: "संख्याहरू ४५, ५५, ६५, ७५ र ८५ को औसत (Average) कति हुन्छ?",
    correct: "65 / ६५",
    distractors: ["60 / ६०", "70 / ७०", "62.5 / ६२.५"],
    expEng: "Sum = 45 + 55 + 65 + 75 + 85 = 325. Average = 325 / 5 = 65.",
    expNep: "जम्मा योगफल = ४५ + ५५ + ६५ + ७५ + ८५ = ३२५। औसत = ३२५ ÷ ५ = ६५।",
    syllabusModule: "व्यावहारिक गणित तथा वित्तीय गणना"
  },
  {
    qEng: "What is the Compound Interest on Rs. 20,000 for 2 years at an annual interest rate of 10% compounded annually?",
    qNep: "रु. २०,००० को १० प्रतिशत वार्षिक चक्रिय ब्याजदरले २ वर्षमा हुने चक्रिय ब्याज (Compound Interest) कति हुन्छ?",
    correct: "Rs. 4,200 / रु. ४,२००",
    distractors: ["Rs. 4,000 / रु. ४,०००", "Rs. 4,400 / रु. ४,४००", "Rs. 2,100 / रु. २,१००"],
    expEng: "A = P(1 + r/100)^t = 20,000 * (1.1)^2 = 20,000 * 1.21 = Rs. 24,200. CI = A - P = 24,200 - 20,000 = Rs. 4,200.",
    expNep: "मिश्रधन = २०,००० × (१ + १०/१००)^२ = २४,२००। चक्रिय ब्याज = २४,२०० - २०,००० = रु. ४,२००।",
    syllabusModule: "व्यावहारिक गणित तथा वित्तीय गणना"
  },
  {
    qEng: "A mobile phone marked at Rs. 20,000 is sold with a 10% discount. If a 13% Value Added Tax (VAT) is charged on the discounted price, what is the final selling price?",
    qNep: "रु. २०,००० अङ्कित मूल्य भएको मोबाइलमा १०% छुट दिई बाँकी मूल्यमा १३% भ्याट (VAT) जोड्दा अन्तिम बिक्री मूल्य कति हुन्छ?",
    correct: "Rs. 20,340 / रु. २०,३४०",
    distractors: ["Rs. 20,000 / रु. २०,०००", "Rs. 18,000 / रु. १८,०००", "Rs. 20,600 / रु. २०,६००"],
    expEng: "Discounted Price = 20,000 - 2,000 = Rs. 18,000. VAT amount = 13% of 18,000 = Rs. 2,340. Final SP = 18,000 + 2,340 = Rs. 20,340.",
    expNep: "छुटपछिको मूल्य = २०,००० - २,००० = रु. १८,०००। १३% भ्याट = १८,००० को १३% = रु. २,३४०। अन्तिम मूल्य = १८,००० + २,३४० = रु. २०,३४०।",
    syllabusModule: "व्यावहारिक गणित तथा वित्तीय गणना"
  },
  {
    qEng: "When a single fair 6-sided die is rolled once, what is the probability of rolling an even prime number?",
    qNep: "एउटा निष्पक्ष ६ पाटा भएको लुडोको गोटी (Dice) एक पटक गुडाउँदा जोर रुढ संख्या (Even Prime Number) आउने सम्भाव्यता कति हुन्छ?",
    correct: "1/6 / १/६ (Number 2 only)",
    distractors: ["1/2 / १/२", "1/3 / १/३", "2/3 / २/३"],
    expEng: "Sample space S = {1, 2, 3, 4, 5, 6} (6 outcomes). The only even prime number is 2 (1 outcome). P = 1/6.",
    expNep: "सम्भाव्य परिणामहरू = ६ वटा। जोर रुढ संख्या '२' मात्र एउटा हुन्छ। अतः सम्भाव्यता = १/६ हुन्छ।",
    syllabusModule: "व्यावहारिक गणित तथा वित्तीय गणना"
  },
  {
    qEng: "If the salary of an employee is first increased by 20% and then subsequently decreased by 20%, what is the net overall percentage change?",
    qNep: "कुनै कर्मचारीको तलब पहिले २० प्रतिशतले बढाइयो र पछि पुनः २० प्रतिशतले घटाइयो भने उसको तलबमा कुल कति प्रतिशत परिवर्तन हुन्छ?",
    correct: "4% Decrease / ४ प्रतिशत घट्छ",
    distractors: ["No change (0%) / कुनै परिवर्तन हुँदैन", "2% Decrease / २ प्रतिशत घट्छ", "4% Increase / ४ प्रतिशत बढ्छ"],
    expEng: "Formula: Net Change = a + b + (ab/100) = +20 - 20 + [(+20)(-20)/100] = -400/100 = -4% (4% Decrease).",
    expNep: "मानौँ प्रारम्भिक तलब १०० थियो। २०% वृद्धि हुँदा १२० भयो। १२० को २०% (२४) घट्दा ९६ भयो। अर्थात् १०० बाट ९६ हुँदा ४% ले घट्छ।",
    syllabusModule: "व्यावहारिक गणित तथा वित्तीय गणना"
  },
  {
    qEng: "Pipe A can fill a water tank in 6 hours, while Pipe B can fill the same tank in 12 hours. How many hours will both pipes take to fill the tank together?",
    qNep: "धारा 'क' ले एउटा ट्याङ्की ६ घण्टामा र धारा 'ख' ले सोही ट्याङ्की १२ घण्टामा भर्न सक्छ। दुवै धारा एकैसाथ खोल्दा ट्याङ्की भर्न कति घण्टा लाग्छ?",
    correct: "4 Hours / ४ घण्टा",
    distractors: ["6 Hours / ६ घण्टा", "8 Hours / ८ घण्टा", "5 Hours / ५ घण्टा"],
    expEng: "Combined rate = 1/6 + 1/12 = (2 + 1)/12 = 3/12 = 1/4 tank per hour. Total time = 4 hours.",
    expNep: "१ घण्टामा दुवैले भर्ने भाग = १/६ + १/१२ = ३/१२ = १/४ भाग। अतः पूरा ट्याङ्की भर्न ४ घण्टा लाग्दछ।",
    syllabusModule: "व्यावहारिक गणित तथा वित्तीय गणना"
  }
];

// =========================================================================
// TOPIC 10A: English Language Competence (भाषा सक्षमता - अङ्ग्रेजी)
// Target: Q46–Q48 in every set
// =========================================================================
export const TOPIC_10_ENGLISH_POOL: MasterSingleLanguageItem[] = [
  {
    question: "Choose the correct Synonym for the word 'ABUNDANT':",
    correct: "Plentiful",
    distractors: ["Scarce", "Meager", "Deficient"],
    explanation: "ENG: 'Abundant' means existing or available in large quantities; overflowing. Hence, 'Plentiful' is the exact synonym."
  },
  {
    question: "Choose the correct Antonym for the word 'DILIGENT':",
    correct: "Lazy",
    distractors: ["Industrious", "Attentive", "Conscientious"],
    explanation: "ENG: 'Diligent' means having or showing care and conscientiousness in work. Its direct opposite is 'Lazy' or 'Indolent'."
  },
  {
    question: "Select the appropriate preposition: 'The auditor insisted ______ inspecting all original voucher receipts.'",
    correct: "on",
    distractors: ["in", "for", "with"],
    explanation: "ENG: The verb 'insist' is strictly followed by the preposition 'on' ('insist on doing something')."
  },
  {
    question: "Identify the correctly spelled English word:",
    correct: "Bureaucracy",
    distractors: ["Burocracy", "Beurocracy", "Bureaucrasy"],
    explanation: "ENG: The standard, authoritative spelling is 'Bureaucracy' (derived from French 'bureau' + Greek 'kratos')."
  },
  {
    question: "Complete the sentence: 'Neither the managing director nor the board members ______ present at the emergency briefing.'",
    correct: "were",
    distractors: ["was", "is", "has been"],
    explanation: "ENG: When subjects are connected by 'neither...nor', the verb agrees in number with the closest subject ('board members' - plural), requiring 'were'."
  },
  {
    question: "What is the true figurative meaning of the English idiom 'To read between the lines'?",
    correct: "To perceive an unexpressed or hidden meaning",
    distractors: ["To read text aloud quickly", "To skip alternate sentences", "To correct typographical errors"],
    explanation: "ENG: 'To read between the lines' means to discover the implicit or hidden meaning not explicitly stated in words."
  },
  {
    question: "Choose the correct Synonym for the financial verb 'SCRUTINIZE':",
    correct: "Examine closely",
    distractors: ["Overlook", "Endorse blindly", "Neglect"],
    explanation: "ENG: 'Scrutinize' means to inspect or examine minutely, closely, and critically."
  },
  {
    question: "Choose the correct Antonym for the adjective 'TRANSPARENT':",
    correct: "Opaque",
    distractors: ["Lucid", "Pellucid", "Clear"],
    explanation: "ENG: 'Transparent' means allowing light to pass through clearly without hindrance; its antonym is 'Opaque' (impenetrable to light)."
  },
  {
    question: "Select the correct phrase: 'The bank branch manager is very good ______ dealing with difficult corporate clients.'",
    correct: "at",
    distractors: ["in", "with", "for"],
    explanation: "ENG: The idiomatic English construction for expressing proficiency or skill is 'good at' (e.g., 'good at mathematics', 'good at dealing')."
  },
  {
    question: "Choose the word closest in meaning to 'MITIGATE':",
    correct: "Alleviate",
    distractors: ["Aggravate", "Intensify", "Fabricate"],
    explanation: "ENG: 'Mitigate' means to make less severe, serious, or painful; therefore, 'Alleviate' is its synonym."
  },
  {
    question: "Complete the conditional sentence: 'If the government ______ interest rates, borrowing will surge.'",
    correct: "lowers",
    distractors: ["lowered", "will lower", "had lowered"],
    explanation: "ENG: In a first conditional sentence expressing a realistic future condition, the if-clause uses the simple present tense ('lowers')."
  },
  {
    question: "Choose the correct spelling of the word denoting a business founder:",
    correct: "Entrepreneur",
    distractors: ["Enterpreneur", "Entreprenuer", "Entreprenure"],
    explanation: "ENG: The correct standard spelling is 'Entrepreneur' (derived from French 'entreprendre')."
  }
];

// =========================================================================
// TOPIC 10B: Nepali Language Competence (भाषा सक्षमता - नेपाली)
// Target: Q49–Q50 in every set
// =========================================================================
export const TOPIC_10_NEPALI_POOL: MasterSingleLanguageItem[] = [
  {
    question: "नेपाली व्याकरण अनुसार 'कृतज्ञ' (उपकार मान्ने) शब्दको ठिक विपरीतार्थक शब्द कुन हो?",
    correct: "कृतघ्न",
    distractors: ["अकृतज्ञ", "विश्वासघाती", "अपराधी"],
    explanation: "NEP: कृतज्ञ (अरूले गरेको उपकार सम्झने) को ठिक उल्टो वा विपरीतार्थक शब्द 'कृतघ्न' (उपकार बिर्सने वा उपकार नमान्ने) हुन्छ।"
  },
  {
    question: "तल दिइएका शब्दहरूमध्ये कुन शब्दको हिज्जे (वर्तनी) व्याकरणिक रूपमा शुद्ध छ?",
    correct: "समसामयिक",
    distractors: ["समसामहिक", "समासामयिक", "समसामयीक"],
    explanation: "NEP: 'समय + समय + इक' मिलेर बनेको शुद्ध रूप 'समसामयिक' हो।"
  },
  {
    question: "'आकाशको फल आँखा तरी मर' भन्ने नेपाली उखानको सही अर्थ कुन हो?",
    correct: "प्राप्त गर्न असम्भव कुराको व्यर्थ आशा गर्नु",
    distractors: ["परिश्रम नगरी धनी बन्नु", "फलफूलको बगैँचा हेर्नु", "सधैँ आशावादी बन्नु"],
    explanation: "NEP: आफ्नो पहुँच वा क्षमताभन्दा निकै टाढा रहेको असम्भव वस्तु पाउने व्यर्थ आशामा समय खेर फाल्नुलाई यो उखानले जनाउँछ।"
  },
  {
    question: "'उज्ज्वल' शब्दको शुद्ध हिज्जे (वर्तनी) कुन हो?",
    correct: "उज्ज्वल",
    distractors: ["उज्वल", "उज्जवल", "उज्वल्य"],
    explanation: "NEP: 'उत् + ज्वल' सन्धि भई दुईवटा आधा 'ज्' (ज् + ज् + व + ल) मिलेर 'उज्ज्वल' बन्दछ।"
  },
  {
    question: "'अनुराग' शब्दको ठिक विपरीतार्थक शब्द कुन हो?",
    correct: "विराग",
    distractors: ["नफरत", "द्वेष", "अराग"],
    explanation: "NEP: अनुराग (प्रेम, स्नेह) को विपरीतार्थक शब्द 'विराग' वा 'विरागता' हुन्छ।"
  },
  {
    question: "तलका मध्ये कुन शब्द 'तत्पुरुष समास' को उदाहरण हो?",
    correct: "राजपुत्र (राजाको पुत्र)",
    distractors: ["दशानन (दश छन् आनन जसका)", "प्रत्येक (एक एक)", "रातदिन (रात र दिन)"],
    explanation: "NEP: पूर्वपदको विभक्ति लोप भई उत्तरपदको अर्थ प्रधान हुने समास तत्पुरुष समास हो; जस्तै: राजाको पुत्र = राजपुत्र।"
  },
  {
    question: "'आँखामा छारो हाल्नु' भन्ने टुक्काको वास्तविक अर्थ के हो?",
    correct: "धोका दिनु वा छल्नु",
    distractors: ["आँखा सफा गर्नु", "आँखा दुखाउनु", "सत्य कुरा बोल्नु"],
    explanation: "NEP: 'आँखामा छारो हाल्नु' भन्नाले कसैलाई भ्रममा पारी झुक्याउनु वा धोका दिनु भन्ने बुझाउँछ।"
  },
  {
    question: "व्याकरण अनुसार 'कवयित्री' शब्दको शुद्ध रूप कुन हो?",
    correct: "कवयित्री",
    distractors: ["कवियित्री", "कविइत्री", "कवयत्री"],
    explanation: "NEP: 'कवि' को स्त्रीलिंगी रूप व्याकरणिक रूपमा 'कवयित्री' (क + व + यि + त्री) शुद्ध मानिन्छ।"
  },
  {
    question: "नेपाली व्याकरणमा 'पानी' शब्द कुन नाम अन्तर्गत पर्दछ?",
    correct: "द्रव्यवाचक नाम",
    distractors: ["व्यक्तिवाचक नाम", "जातिवाचक नाम", "भाववाचक नाम"],
    explanation: "NEP: गन्न नसकिने, नाप्न वा जोख्न सकिने तरल पदार्थ, धातु वा वस्तुलाई जनाउने शब्द द्रव्यवाचक नाम हो; जस्तै: पानी, सुन, दूध।"
  },
  {
    question: "'शाश्वत' (सधैँ रहिरहने) शब्दको ठिक विपरीतार्थक शब्द कुन हो?",
    correct: "नश्वर",
    distractors: ["अमर", "स्थायी", "अनन्त"],
    explanation: "NEP: शाश्वत (सदाकाल कायम रहने) को विपरीतार्थक शब्द 'नश्वर' (नाश भएर जाने) हुन्छ।"
  }
];
