import { MasterBilingualItem } from './types';

// =========================================================================
// SECTION 1: भूगोल, जनसङ्ख्या र वातावरण (Topics 1.1 - 1.4) [5 MCQs]
// Strictly 5 questions per set (Slots 1 to 5) across 50 sets = 250 MCQs.
// Strict Option Uniformity: Identical length, format, detail, and structure.
// Authentic Lok Sewa Patterns: Match Following, Statement Analysis, etc.
// =========================================================================

// Slot 1: Geography, Coordinates, Peaks & Rivers (Topics 1.1)
export function getGeographySlot1(setId: number): MasterBilingualItem {
  const geographyData = [
    {
      qEng: "What is the official total geographical area of Nepal according to the official political and administrative map?",
      qNep: "नेपालको आधिकारिक राजनीतिक तथा प्रशासनिक नक्सा अनुसार नेपालको कुल क्षेत्रफल कति रहेको छ?",
      correct: "147,516 sq. km / १,४७,५१६ वर्ग कि.मी.",
      distractors: [
        "147,181 sq. km / १,४७,१८१ वर्ग कि.मी.",
        "147,850 sq. km / १,४७,८५० वर्ग कि.मी.",
        "148,000 sq. km / १,४८,००० वर्ग कि.मी."
      ],
      expEng: "The official total geographical area of Nepal including Limpiyadhura, Lipulekh, and Kalapani is 147,516 sq. km.",
      expNep: "लिम्पियाधुरा, लिपुलेक र कालापानी समेटिएको नेपालको आधिकारिक क्षेत्रफल १,४७,५१६ वर्ग कि.मी. रहेको छ।"
    },
    {
      qEng: "What is the officially measured and bilaterally declared height of Mt. Sagarmatha (Everest)?",
      qNep: "नेपाल र चीनद्वारा संयुक्त रूपमा मापन गरी सार्वजनिक गरिएको सगरमाथाको आधिकारिक उचाइ कति हो?",
      correct: "8,848.86 meters / ८,८४८.८६ मिटर",
      distractors: [
        "8,848.00 meters / ८,८४८.०० मिटर",
        "8,850.00 meters / ८,८५०.०० मिटर",
        "8,846.86 meters / ८,८४६.८६ मिटर"
      ],
      expEng: "On December 8, 2020 (2077 Mangsir 23 BS), the height was declared as 8,848.86 m.",
      expNep: "वि.सं. २०७७ मङ्सिर २३ गते सगरमाथाको नयाँ उचाइ ८,८४८.८६ मिटर आधिकारिक रूपमा घोषणा गरियो।"
    },
    {
      qEng: "What is the latitudinal extension of Nepal?",
      qNep: "नेपालको अक्षांशीय विस्तार (Latitudinal Extension) कति रहेको छ?",
      correct: "26°22' N to 30°27' N / २६°२२' उत्तरदेखि ३०°२७' उत्तर",
      distractors: [
        "25°20' N to 29°30' N / २५°२०' उत्तरदेखि २९°३०' उत्तर",
        "27°00' N to 31°15' N / २७°००' उत्तरदेखि ३१°१५' उत्तर",
        "26°10' N to 30°50' N / २६°१०' उत्तरदेखि ३०°५०' उत्तर"
      ],
      expEng: "Nepal extends between 26°22' North to 30°27' North latitude.",
      expNep: "नेपालको अक्षांशीय फैलावट २६°२२' उत्तरी अक्षांशदेखि ३०°२७' उत्तरी अक्षांशसम्म रहेको छ।"
    },
    {
      qEng: "What is the longitudinal extension of Nepal?",
      qNep: "नेपालको देशान्तरीय विस्तार (Longitudinal Extension) कति रहेको छ?",
      correct: "80°04' E to 88°12' E / ८०°०४' पूर्वदेखि ८८°१२' पूर्व",
      distractors: [
        "80°00' E to 87°50' E / ८०°००' पूर्वदेखि ८७°५०' पूर्व",
        "79°50' E to 88°20' E / ७९°५०' पूर्वदेखि ८८°२०' पूर्व",
        "81°05' E to 89°10' E / ८१°०५' पूर्वदेखि ८९°१०' पूर्व"
      ],
      expEng: "Nepal extends between 80°04' East to 88°12' East longitude.",
      expNep: "नेपाल ८०°०४' पूर्वी देशान्तरदेखि ८८°१२' पूर्वी देशान्तरसम्म फैलिएको छ।"
    },
    {
      qEng: "What is the average east-west length of Nepal?",
      qNep: "नेपालको पूर्व-पश्चिम औसत लम्बाइ कति रहेको छ?",
      correct: "885 kilometers / ८८५ किलोमिटर",
      distractors: [
        "845 kilometers / ८४५ किलोमिटर",
        "900 kilometers / ९०० किलोमिटर",
        "865 kilometers / ८६५ किलोमिटर"
      ],
      expEng: "The average east-west length of Nepal is 885 km.",
      expNep: "नेपालको पूर्व-पश्चिम औसत लम्बाइ करिब ८८५ किलोमिटर रहेको छ।"
    },
    {
      qEng: "What is the average north-south width of Nepal?",
      qNep: "नेपालको उत्तर-दक्षिण औसत चौडाइ कति रहेको छ?",
      correct: "193 kilometers / १९३ किलोमिटर",
      distractors: [
        "180 kilometers / १८० किलोमिटर",
        "205 kilometers / २०५ किलोमिटर",
        "190 kilometers / १९० किलोमिटर"
      ],
      expEng: "The average north-south width of Nepal is 193 km (maximum 241 km, minimum 145 km).",
      expNep: "नेपालको उत्तर-दक्षिण औसत चौडाइ १९३ कि.मी. (अधिकतम २४१ कि.मी., न्यूनतम १४५ कि.मी.) छ।"
    },
    {
      qEng: "Nepal Standard Time (NST) is determined based on which meridian longitude passing through Gaurishankar Himal?",
      qNep: "गौरीशङ्कर हिमाललाई आधार मानी निर्धारण गरिएको नेपालको प्रमाणिक समय कुन देशान्तर रेखामा आधारित छ?",
      correct: "86°15' East / ८६°१५' पूर्वी देशान्तर",
      distractors: [
        "85°15' East / ८५°१५' पूर्वी देशान्तर",
        "87°20' East / ८७°२०' पूर्वी देशान्तर",
        "84°45' East / ८४°४५' पूर्वी देशान्तर"
      ],
      expEng: "Nepal Standard Time is based on 86°15' E longitude passing through Gaurishankar Himal (GMT + 5:45).",
      expNep: "दोलखाको गौरीशङ्कर हिमाल भएर जाने ८६°१५' पूर्वी देशान्तरलाई वि.सं. २०४२ वैशाख १ देखि प्रमाणिक समय मानिएको छ।"
    },
    {
      qEng: "How many Indian states share an international border with Nepal?",
      qNep: "भारतका कतिवटा राज्यहरूको सिमाना नेपालसँग जोडिएको छ?",
      correct: "5 States / ५ राज्यहरू",
      distractors: [
        "4 States / ४ राज्यहरू",
        "6 States / ६ राज्यहरू",
        "3 States / ३ राज्यहरू"
      ],
      expEng: "Nepal shares borders with 5 Indian states: Uttarakhand, UP, Bihar, West Bengal, and Sikkim.",
      expNep: "नेपालको सिमाना भारतका ५ राज्यहरू (उत्तराखण्ड, उत्तर प्रदेश, बिहार, पश्चिम बंगाल र सिक्किम) सँग जोडिएको छ।"
    },
    {
      qEng: "Which is the easternmost point of Nepal?",
      qNep: "नेपालको सबैभन्दा पूर्वी विन्दु कुन जिल्लामा पर्दछ?",
      correct: "Jhapa / झापा जिल्ला",
      distractors: [
        "Ilam / इलाम जिल्ला",
        "Taplejung / ताप्लेजुङ जिल्ला",
        "Panchthar / पाँचथर जिल्ला"
      ],
      expEng: "The easternmost point is Lodabari in Jhapa district (88°12' E).",
      expNep: "नेपालको सबैभन्दा पूर्वी विन्दु झापाको लोदाबारी हो।"
    },
    {
      qEng: "Which is the westernmost point of Nepal?",
      qNep: "नेपालको सबैभन्दा पश्चिमी विन्दु कुन जिल्लामा पर्दछ?",
      correct: "Kanchanpur / कञ्चनपुर जिल्ला",
      distractors: [
        "Baitadi / बैतडी जिल्ला",
        "Darchula / दार्चुला जिल्ला",
        "Dadeldhura / डडेलधुरा जिल्ला"
      ],
      expEng: "The westernmost point is Dodhara Chandani in Kanchanpur district (80°04' E).",
      expNep: "नेपालको सबैभन्दा पश्चिमी विन्दु कञ्चनपुरको दोधारा चाँदनी हो।"
    }
  ];

  const idx = (setId - 1) % geographyData.length;
  return geographyData[idx];
}

// Slot 2: Match the Following (जोडा मिलाउने) - Peaks, Lakes, Rivers & Passes (Topic 1.1)
export function getGeographySlot2(setId: number): MasterBilingualItem {
  const matchQuestions = [
    {
      qEng: "Match Group I (Peaks) with Group II (Mountain Ranges/Himal):\nGroup I: 1. Sagarmatha, 2. Kanchenjunga, 3. Manaslu, 4. Annapurna\nGroup II: a. Kanchenjunga, b. Mahalangur, c. Mansiri, d. Annapurna",
      qNep: "समूह I (हिमाल) र समूह II (हिमशृङ्खला) बीच जोडा मिलाउनुहोस्:\nसमूह I: १. सगरमाथा, २. कञ्चनजङ्घा, ३. मनास्लु, ४. अन्नपूर्ण\nसमूह II: क. कञ्चनजङ्घा, ख. महालङ्गूर, ग. मनसिरी, घ. अन्नपूर्ण",
      correct: "1-b, 2-a, 3-c, 4-d",
      distractors: [
        "1-a, 2-b, 3-c, 4-d",
        "1-c, 2-d, 3-a, 4-b",
        "1-b, 2-c, 3-a, 4-d"
      ],
      expEng: "Sagarmatha is in Mahalangur, Kanchenjunga in Kanchenjunga, Manaslu in Mansiri, and Annapurna in Annapurna range.",
      expNep: "सगरमाथा महालङ्गूर, कञ्चनजङ्घा कञ्चनजङ्घा, मनास्लु मनसिरी र अन्नपूर्ण अन्नपूर्ण हिमशृङ्खलामा पर्दछन्।"
    },
    {
      qEng: "Match Group I (Lakes) with Group II (Districts):\nGroup I: 1. Tilicho, 2. Rara, 3. Phoksundo, 4. Gosainkunda\nGroup II: a. Mugu, b. Manang, c. Rasuwa, d. Dolpa",
      qNep: "समूह I (तालहरू) र समूह II (जिल्लाहरू) बीच जोडा मिलाउनुहोस्:\nसमूह I: १. तिलिचो, २. रारा, ३. फोक्सुण्डो, ४. गोसाइँकुण्ड\nसमूह II: क. मुगु, ख. मनाङ, ग. रसुवा, घ. डोल्पा",
      correct: "1-b, 2-a, 3-d, 4-c",
      distractors: [
        "1-a, 2-b, 3-c, 4-d",
        "1-b, 2-d, 3-a, 4-c",
        "1-d, 2-a, 3-b, 4-c"
      ],
      expEng: "Tilicho is in Manang, Rara in Mugu, Phoksundo in Dolpa, and Gosainkunda in Rasuwa.",
      expNep: "तिलिचो मनाङ, रारा मुगु, शे-फोक्सुण्डो डोल्पा र गोसाइँकुण्ड रसुवा जिल्लामा पर्दछन्।"
    },
    {
      qEng: "Match Group I (Rivers) with Group II (Origin Points):\nGroup I: 1. Koshi (Saptakoshi), 2. Gandaki (Trishuli), 3. Karnali, 4. Mahakali\nGroup II: a. Tibet (Tsarang), b. Tibet (Gosaithan), c. Tibet (Mansarovar), d. Api Himal",
      qNep: "समूह I (नदीहरू) र समूह II (उत्पत्ति स्थल) बीच जोडा मिलाउनुहोस्:\nसमूह I: १. सप्तकोशी, २. त्रिशूली, ३. कर्णाली, ४. महाकाली\nसमूह II: क. तिब्बत, ख. गोसाइँथान (तिब्बत), ग. मानसरोवर (तिब्बत), घ. अपी हिमाल",
      correct: "1-b, 2-a, 3-c, 4-d",
      distractors: [
        "1-a, 2-b, 3-c, 4-d",
        "1-c, 2-d, 3-a, 4-b",
        "1-b, 2-c, 3-d, 4-a"
      ],
      expEng: "Arun (Koshi) originates near Gosaithan/Tibet, Trishuli in Tibet, Karnali south of Mansarovar, Mahakali near Api Himal/Milam.",
      expNep: "कोशीको मुख्य सहायक अरुण तिब्बत, त्रिशूली तिब्बत, कर्णाली मानसरोवर र महाकाली अपी हिमाल क्षेत्रबाट उत्पत्ति हुन्छन्।"
    },
    {
      qEng: "Match Group I (National Parks) with Group II (Established Year BS):\nGroup I: 1. Chitwan, 2. Sagarmatha, 3. Bardiya, 4. Banke\nGroup II: a. 2030 BS, b. 2032 BS, c. 2045 BS, d. 2067 BS",
      qNep: "समूह I (राष्ट्रिय निकुञ्ज) र समूह II (स्थापना वर्ष वि.सं.) बीच जोडा मिलाउनुहोस्:\nसमूह I: १. चितवन, २. सगरमाथा, ३. बर्दिया, ४. बाँके\nसमूह II: क. २०३०, ख. २०३२, ग. २०४५, घ. २०६७",
      correct: "1-a, 2-b, 3-c, 4-d",
      distractors: [
        "1-b, 2-a, 3-c, 4-d",
        "1-a, 2-c, 3-b, 4-d",
        "1-c, 2-d, 3-a, 4-b"
      ],
      expEng: "Chitwan (2030 BS), Sagarmatha (2032 BS), Bardiya (2045 BS), Banke (2067 BS).",
      expNep: "चितवन (२०३०), सगरमाथा (२०३२), बर्दिया (२०४५) र बाँके (२०६७) मा स्थापित भएका हुन्।"
    },
    {
      qEng: "Match Group I (Border Passes) with Group II (Districts):\nGroup I: 1. Korala, 2. Rasuwagadhi, 3. Kimathanka, 4. Olangchung Gola\nGroup II: a. Mustang, b. Rasuwa, c. Sankhuwasabha, d. Taplejung",
      qNep: "समूह I (हिमाली नाका) र समूह II (जिल्लाहरू) बीच जोडा मिलाउनुहोस्:\nसमूह I: १. कोराला, २. रसुवागढी, ३. किमाथाङ्का, ४. ओलाङचुङगोला\nसमूह II: क. मुस्ताङ, ख. रसुवा, ग. सङ्खुवासभा, घ. ताप्लेजुङ",
      correct: "1-a, 2-b, 3-c, 4-d",
      distractors: [
        "1-b, 2-a, 3-c, 4-d",
        "1-a, 2-c, 3-b, 4-d",
        "1-c, 2-d, 3-a, 4-b"
      ],
      expEng: "Korala is in Mustang, Rasuwagadhi in Rasuwa, Kimathanka in Sankhuwasabha, and Olangchung Gola in Taplejung.",
      expNep: "कोराला मुस्ताङ, रसुवागढी रसुवा, किमाथाङ्का सङ्खुवासभा र ओलाङचुङगोला ताप्लेजुङ जिल्लामा पर्दछन्।"
    }
  ];

  const idx = (setId - 1) % matchQuestions.length;
  return matchQuestions[idx];
}

// Slot 3: Statement Analysis (भनाइ विश्लेषण) - Demography & Environment (Topics 1.2 - 1.4)
export function getGeographySlot3(setId: number): MasterBilingualItem {
  const statementQuestions = [
    {
      qEng: "Analyze the following statements regarding the National Population Census 2078:\nStatement 1: The total population of Nepal reached 29,164,578.\nStatement 2: The average annual population growth rate was recorded at 0.92% per annum.",
      qNep: "राष्ट्रिय जनगणना २०७८ सम्बन्धी निम्न भनाइहरू विश्लेषण गर्नुहोस्:\nभनाइ १: नेपालको कुल जनसङ्ख्या २ करोड ९१ लाख ६४ हजार ५७८ पुगेको छ।\nभनाइ २: वार्षिक औसत जनसङ्ख्या वृद्धिदर ०.९२ प्रतिशत रहेको छ।",
      correct: "दुवै भनाइ ठीक छन् / Both statements are correct",
      distractors: [
        "भनाइ १ ठीक र भनाइ २ बेठिक छ / Statement 1 correct, 2 incorrect",
        "भनाइ १ बेठिक र भनाइ २ ठीक छ / Statement 1 incorrect, 2 correct",
        "दुवै भनाइ बेठिक छन् / Both statements are incorrect"
      ],
      expEng: "Census 2078 recorded Nepal's population as 29,164,578 with an annual growth rate of 0.92%.",
      expNep: "जनगणना २०७८ अनुसार कुल जनसङ्ख्या २,९१,६४,५७८ र वार्षिक औसत वृद्धिदर ०.९२ प्रतिशत रहेको छ।"
    },
    {
      qEng: "Analyze the following statements regarding Nepal's geographic belts:\nStatement 1: The Terai region covers approximately 17% of the country's total land area.\nStatement 2: According to Census 2078, more than 53% of Nepal's total population resides in the Terai region.",
      qNep: "नेपालको भौगोलिक प्रदेश सम्बन्धी निम्न भनाइहरू विचार गर्नुहोस्:\nभनाइ १: तराई प्रदेशले देशको कुल क्षेत्रफलको करिब १७ प्रतिशत भूभाग ओगटेको छ।\nभनाइ २: राष्ट्रिय जनगणना २०७८ अनुसार देशको कुल जनसङ्ख्याको ५३ प्रतिशतभन्दा बढी जनसङ्ख्या तराई प्रदेशमा बसोबास गर्दछ।",
      correct: "दुवै भनाइ ठीक छन् / Both statements are correct",
      distractors: [
        "भनाइ १ ठीक र भनाइ २ बेठिक छ / Statement 1 correct, 2 incorrect",
        "भनाइ १ बेठिक र भनाइ २ ठीक छ / Statement 1 incorrect, 2 correct",
        "दुवै भनाइ बेठिक छन् / Both statements are incorrect"
      ],
      expEng: "Terai covers 17% area and houses 53.61% of Nepal's population according to Census 2078.",
      expNep: "तराईले १७ प्रतिशत क्षेत्रफल ओगटेको छ भने यहाँ ५३.६१ प्रतिशत जनसङ्ख्या बसोबास गर्दछ।"
    },
    {
      qEng: "Analyze the following statements regarding sex ratio and density in Census 2078:\nStatement 1: The population density of Nepal is 198 persons per square kilometer.\nStatement 2: The sex ratio (males per 100 females) is 95.59.",
      qNep: "राष्ट्रिय जनगणना २०७८ सम्बन्धी निम्न भनाइहरू विश्लेषण गर्नुहोस्:\nभनाइ १: नेपालको जनघनत्व १९८ जना प्रति वर्ग किलोमिटर रहेको छ।\nभनाइ २: नेपालको लैङ्गिक अनुपात (प्रति १०० महिलामा पुरुषको सङ्ख्या) ९५.५९ रहेको छ।",
      correct: "दुवै भनाइ ठीक छन् / Both statements are correct",
      distractors: [
        "भनाइ १ ठीक र भनाइ २ बेठिक छ / Statement 1 correct, 2 incorrect",
        "भनाइ १ बेठिक र भनाइ २ ठीक छ / Statement 1 incorrect, 2 correct",
        "दुवै भनाइ बेठिक छन् / Both statements are incorrect"
      ],
      expEng: "Census 2078 confirmed population density as 198 per sq. km and sex ratio as 95.59.",
      expNep: "२०७८ को जनगणना अनुसार जनघनत्व १९८ जना/वर्ग कि.मी. र लैङ्गिक अनुपात ९५.५९ रहेको छ।"
    },
    {
      qEng: "Analyze the following statements regarding protected areas in Nepal:\nStatement 1: Shey Phoksundo National Park is the largest national park in Nepal by area.\nStatement 2: Rara National Park is the smallest national park in Nepal by area.",
      qNep: "नेपालका संरक्षित क्षेत्र सम्बन्धी निम्न भनाइहरू विश्लेषण गर्नुहोस्:\nभनाइ १: क्षेत्रफलको आधारमा नेपालको सबैभन्दा ठूलो राष्ट्रिय निकुञ्ज शे-फोक्सुण्डो राष्ट्रिय निकुञ्ज हो।\nभनाइ २: क्षेत्रफलको आधारमा नेपालको सबैभन्दा सानो राष्ट्रिय निकुञ्ज रारा राष्ट्रिय निकुञ्ज हो।",
      correct: "दुवै भनाइ ठीक छन् / Both statements are correct",
      distractors: [
        "भनाइ १ ठीक र भनाइ २ बेठिक छ / Statement 1 correct, 2 incorrect",
        "भनाइ १ बेठिक र भनाइ २ ठीक छ / Statement 1 incorrect, 2 correct",
        "दुवै भनाइ बेठिक छन् / Both statements are incorrect"
      ],
      expEng: "Shey Phoksundo (3,555 sq. km) is the largest and Rara (106 sq. km) is the smallest national park.",
      expNep: "शे-फोक्सुण्डो (३,५५५ वर्ग कि.मी.) सबैभन्दा ठूलो र रारा (१०६ वर्ग कि.मी.) सबैभन्दा सानो राष्ट्रिय निकुञ्ज हुन्।"
    },
    {
      qEng: "Analyze the following statements regarding wetland conservation:\nStatement 1: Koshi Tappu Wildlife Reserve was the first Ramsar site declared in Nepal.\nStatement 2: Nepal currently has 10 wetlands included in the Ramsar list of international importance.",
      qNep: "नेपालको सिमसार क्षेत्र सम्बन्धी निम्न भनाइहरू विचार गर्नुहोस्:\nभनाइ १: कोशी टप्पु वन्यजन्तु आरक्ष नेपालको पहिलो रामसार सूचीकृत सिमसार क्षेत्र हो।\nभनाइ २: नेपालका हालसम्म १० वटा सिमसार क्षेत्रहरू रामसार सूचीमा सूचीकृत छन्।",
      correct: "दुवै भनाइ ठीक छन् / Both statements are correct",
      distractors: [
        "भनाइ १ ठीक र भनाइ २ बेठिक छ / Statement 1 correct, 2 incorrect",
        "भनाइ १ बेठिक र भनाइ २ ठीक छ / Statement 1 incorrect, 2 correct",
        "दुवै भनाइ बेठिक छन् / Both statements are incorrect"
      ],
      expEng: "Koshi Tappu was listed on Dec 17, 1987, and Nepal has a total of 10 Ramsar sites.",
      expNep: "कोशी टप्पु सन् १९८७ मा पहिलो रामसार सूचीकृत क्षेत्र बन्यो र नेपालमा हाल १० रामसार क्षेत्र छन्।"
    }
  ];

  const idx = (setId - 1) % statementQuestions.length;
  return statementQuestions[idx];
}

// Slot 4: Administrative Divisions, Provinces & Local Levels (Topic 1.2)
export function getGeographySlot4(setId: number): MasterBilingualItem {
  const adminData = [
    {
      qEng: "According to the Constitution of Nepal, what is the total number of Local Levels (स्थानीय तह)?",
      qNep: "नेपालको संविधान बमोजिम नेपालमा हाल कुल कतिवटा स्थानीय तहहरू रहेका छन्?",
      correct: "753 / ७५३ वटा",
      distractors: [
        "744 / ७४४ वटा",
        "761 / ७६१ वटा",
        "750 / ७५० वटा"
      ],
      expEng: "Nepal has 753 Local Levels (6 Metros, 11 Sub-metros, 276 Municipalities, and 460 Rural Municipalities).",
      expNep: "नेपालमा ६ महानगर, ११ उपमहानगर, २७६ नगरपालिका र ४६० गाउँपालिका गरी कुल ७५३ स्थानीय तह छन्।"
    },
    {
      qEng: "Which province of Nepal has the highest number of local levels?",
      qNep: "नेपालको कुन प्रदेशमा सबैभन्दा बढी स्थानीय तहहरू रहेका छन्?",
      correct: "Koshi Province / कोशी प्रदेश",
      distractors: [
        "Madhesh Province / मधेस प्रदेश",
        "Bagmati Province / बागमती प्रदेश",
        "Lumbini Province / लुम्बिनी प्रदेश"
      ],
      expEng: "Koshi Province has 137 local levels, the highest among all seven provinces.",
      expNep: "कोशी प्रदेशमा सबैभन्दा बढी १३७ वटा स्थानीय तह रहेका छन् (मधेसमा १३६ छन्)।"
    },
    {
      qEng: "Which province of Nepal has the lowest number of districts?",
      qNep: "नेपालको कुन प्रदेशमा सबैभन्दा कम जिल्लाहरू रहेका छन्?",
      correct: "Madhesh Province / मधेस प्रदेश",
      distractors: [
        "Gandaki Province / गण्डकी प्रदेश",
        "Karnali Province / कर्णाली प्रदेश",
        "Sudurpashchim Province / सुदूरपश्चिम प्रदेश"
      ],
      expEng: "Madhesh Province has 8 districts, the least among the provinces along with Karnali having 10, Gandaki 11, Sudurpashchim 9.",
      expNep: "मधेस प्रदेशमा सबैभन्दा कम ८ वटा जिल्लाहरू रहेका छन्।"
    },
    {
      qEng: "Which is the largest district of Nepal in terms of geographical area?",
      qNep: "क्षेत्रफलको आधारमा नेपालको सबैभन्दा ठूलो जिल्ला कुन हो?",
      correct: "Dolpa / डोल्पा",
      distractors: [
        "Humla / हुम्ला",
        "Taplejung / ताप्लेजुङ",
        "Mugu / मुगु"
      ],
      expEng: "Dolpa is the largest district with an area of 7,889 square kilometers.",
      expNep: "७,८८९ वर्ग किलोमिटर क्षेत्रफलसहित डोल्पा नेपालको सबैभन्दा ठूलो जिल्ला हो।"
    },
    {
      qEng: "Which is the smallest district of Nepal in terms of geographical area?",
      qNep: "क्षेत्रफलको आधारमा नेपालको सबैभन्दा सानो जिल्ला कुन हो?",
      correct: "Bhaktapur / भक्तपुर",
      distractors: [
        "Lalitpur / ललितपुर",
        "Kathmandu / काठमाडौँ",
        "Parbat / पर्वत"
      ],
      expEng: "Bhaktapur is the smallest district covering 119 square kilometers.",
      expNep: "११९ वर्ग किलोमिटर क्षेत्रफलसहित भक्तपुर नेपालको सबैभन्दा सानो जिल्ला हो।"
    }
  ];

  const idx = (setId - 1) % adminData.length;
  return adminData[idx];
}

// Slot 5: Demography, Environment & Climate (Topics 1.3 - 1.4)
export function getGeographySlot5(setId: number): MasterBilingualItem {
  const envData = [
    {
      qEng: "According to the National Population Census 2078, what is the national literacy rate of Nepal?",
      qNep: "राष्ट्रिय जनगणना २०७८ अनुसार नेपालको कुल साक्षरता दर कति प्रतिशत रहेको छ?",
      correct: "76.3% / ७६.३ प्रतिशत",
      distractors: [
        "65.9% / ६५.९ प्रतिशत",
        "71.2% / ७१.२ प्रतिशत",
        "79.5% / ७९.५ प्रतिशत"
      ],
      expEng: "National Census 2078 recorded Nepal's overall literacy rate at 76.3% (Male: 83.6%, Female: 69.4%).",
      expNep: "जनगणना २०७८ अनुसार कुल साक्षरता दर ७६.३% (पुरुष: ८३.६%, महिला: ६९.४%) रहेको छ।"
    },
    {
      qEng: "According to Census 2078, which district has the highest population growth rate?",
      qNep: "राष्ट्रिय जनगणना २०७८ अनुसार सबैभन्दा बढी जनसङ्ख्या वृद्धिदर भएको जिल्ला कुन हो?",
      correct: "Bhaktapur / भक्तपुर",
      distractors: [
        "Kathmandu / काठमाडौँ",
        "Lalitpur / ललितपुर",
        "Rupandehi / रूपन्देही"
      ],
      expEng: "Bhaktapur recorded the highest annual population growth rate at 3.35%.",
      expNep: "भक्तपुर जिल्लामा सबैभन्दा बढी वार्षिक ३.३५ प्रतिशत जनसङ्ख्या वृद्धिदर देखिएको छ।"
    },
    {
      qEng: "According to Census 2078, which district has the lowest (most negative) population growth rate?",
      qNep: "राष्ट्रिय जनगणना २०७८ अनुसार सबैभन्दा कम (ऋणात्मक) जनसङ्ख्या वृद्धिदर भएको जिल्ला कुन हो?",
      correct: "Ramechhap / रामेछाप",
      distractors: [
        "Khotang / खोटाङ",
        "Manang / मनाङ",
        "Bhojpur / भोजपुर"
      ],
      expEng: "Ramechhap recorded the lowest annual population growth rate at -1.67%.",
      expNep: "रामेछाप जिल्लामा सबैभन्दा कम (-१.६७ प्रतिशत) जनसङ्ख्या वृद्धिदर रहेको छ।"
    },
    {
      qEng: "Which district of Nepal has the lowest population according to Census 2078?",
      qNep: "राष्ट्रिय जनगणना २०७८ अनुसार नेपालको सबैभन्दा कम जनसङ्ख्या भएको जिल्ला कुन हो?",
      correct: "Manang / मनाङ",
      distractors: [
        "Mustang / मुस्ताङ",
        "Dolpa / डोल्पा",
        "Rasuwa / रसुवा"
      ],
      expEng: "Manang has the lowest population with 5,658 persons according to Census 2078.",
      expNep: "मनाङ जिल्लामा सबैभन्दा कम ५,६५८ जना मात्र बसोबास गर्दछन्।"
    },
    {
      qEng: "What is the lowest altitude point in Nepal located at 58 meters above sea level?",
      qNep: "समुन्द्र सतहबाट करिब ५८ मिटर उचाइमा रहेको नेपालको सबैभन्दा होचो भूभाग कुन हो?",
      correct: "Kachankawal, Jhapa / कचनकवल (झापा)",
      distractors: [
        "Jaleshwar, Mahottari / जलेश्वर (महोत्तरी)",
        "Birgunj, Parsa / वीरगन्ज (पर्सा)",
        "Rangeli, Morang / रङ्गेली (मोरङ)"
      ],
      expEng: "Kachankawal in Jhapa district is the lowest point of Nepal at 58 m altitude.",
      expNep: "नेपालको सबैभन्दा होचो विन्दु झापाको कचनकवल (५८ मिटर) हो।"
    }
  ];

  const idx = (setId - 1) % envData.length;
  return envData[idx];
}

export function getGeographyQuestion(slot: number, setId: number): MasterBilingualItem {
  switch (slot) {
    case 1: return getGeographySlot1(setId);
    case 2: return getGeographySlot2(setId);
    case 3: return getGeographySlot3(setId);
    case 4: return getGeographySlot4(setId);
    case 5: return getGeographySlot5(setId);
    default: return getGeographySlot1(setId);
  }
}
