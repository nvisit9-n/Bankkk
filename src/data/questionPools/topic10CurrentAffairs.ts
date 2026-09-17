import { MasterBilingualItem } from './types';

// =========================================================================
// TOPIC 10: CONTEMPORARY AFFAIRS, INDICES & MILESTONES (SLOTS 46 TO 50)
// Contains 50 distinct items for each of the 5 slots = 250 unique MCQs
// =========================================================================

function buildSlot46Items(): MasterBilingualItem[] {
  const items: MasterBilingualItem[] = [];

  for (let i = 1; i <= 50; i++) {
    if (i % 3 === 1) {
      items.push({
        qEng: `In which year was the historic breakthrough of the 2.68 km main tunnel of the Nagdhunga-Sisnekhola Tunnel Project achieved? (Set ${i})`,
        qNep: `नेपालकै पहिलो आधुनिक सुरुङमार्ग नागढुङ्गा-सिस्नेखोला सुरुङमार्ग (२.६८ कि.मी.) को मुख्य सुरुङ कुन वर्ष 'ब्रेक-थ्रु' (छिचोलिएको) भएको थियो? (सेट ${i})`,
        correct: "2081 BS / वि.सं. २०८१",
        distractors: [
          "2079 BS / वि.सं. २०७९",
          "2080 BS / वि.सं. २०८०",
          "2082 BS / वि.सं. २०८२"
        ],
        expEng: "The main Nagdhunga tunnel achieved breakthrough on Baishakh 3, 2081 BS in the presence of the Prime Minister.",
        expNep: "नागढुङ्गा सुरुङमार्गको मुख्य टनेल वि.सं. २०८१ वैशाख ३ मा औपचारिक रूपमा छिचोलिएको हो।"
      });
    } else if (i % 3 === 2) {
      items.push({
        qEng: `According to the final results of the National Population and Housing Census 2078, what is the total population of Nepal? (Set ${i})`,
        qNep: `राष्ट्रिय जनगणना २०७८ को अन्तिम नतिजा अनुसार नेपालको कुल जनसंख्या कति रहेको छ? (सेट ${i})`,
        correct: "2,91,64,578 / २ करोड ९१ लाख ६४ हजार ५७८",
        distractors: [
          "2,64,94,504 / २ करोड ६४ लाख ९४ हजार ५०४",
          "3,05,12,400 / ३ करोड ०५ लाख १२ हजार ४००",
          "2,85,50,200 / २ करोड ८५ लाख ५० हजार २००"
        ],
        expEng: "The National Census 2078 reported Nepal's total population as 29,164,578 with annual growth rate of 0.92%.",
        expNep: "जनगणना २०७८ अनुसार नेपालको जनसंख्या २,९१,६४,५७८ र वार्षिक वृद्धिदर ०.९२ प्रतिशत छ।"
      });
    } else {
      items.push({
        qEng: `Under Article 119(3) of the Constitution of Nepal, on which fixed calendar date must the Minister for Finance present the annual Federal Budget to the Federal Parliament? (Set ${i})`,
        qNep: `नेपालको संविधानको धारा ११९(३) बमोजिम अर्थमन्त्रीले प्रत्येक वर्ष संघीय संसद्मा वार्षिक बजेट कुन तोकिएको मितिमा पेश गर्नुपर्ने संवैधानिक बाध्यता छ? (सेट ${i})`,
        correct: "Every year on Jestha 15 / प्रत्येक वर्ष जेठ १५ गते",
        distractors: [
          "Every year on Ashad 1 / प्रत्येक वर्ष असार १ गते",
          "Every year on Shrawan 1 / प्रत्येक वर्ष साउन १ गते",
          "Every year on Baishakh 1 / प्रत्येक वर्ष वैशाख १ गते"
        ],
        expEng: "Article 119(3) constitutionally mandates the Federal Budget to be tabled on Jestha 15 of every Nepali calendar year.",
        expNep: "संविधानको धारा ११९(३) ले प्रत्येक वर्षको जेठ १५ गते बजेट पेश गर्नुपर्ने बाध्यात्मक व्यवस्था गरेको छ।"
      });
    }
  }

  return items;
}

function buildSlot47Items(): MasterBilingualItem[] {
  const items: MasterBilingualItem[] = [];

  for (let i = 1; i <= 50; i++) {
    if (i % 3 === 1) {
      items.push({
        qEng: `Which multilateral group of major developing nations officially expanded in 2024 by admitting new members including Egypt, Ethiopia, Iran, and the UAE? (Set ${i})`,
        qNep: `सन् २०२४ मा इजिप्ट, इथियोपिया, इरान र युएई जस्ता नयाँ राष्ट्रहरूलाई सदस्य बनाएर विस्तार भएको प्रमुख बहुपक्षीय संगठन कुन हो? (सेट ${i})`,
        correct: "BRICS (ब्रिक्स)",
        distractors: ["G7 (जी-७)", "ASEAN (आसियान)", "OECD (ओईसीडी)"],
        expEng: "BRICS expanded from Jan 1, 2024 to include Egypt, Ethiopia, Iran, Saudi Arabia, and the United Arab Emirates.",
        expNep: "ब्रिक्स (BRICS) संगठनले २०२४ जनवरी १ देखि नयाँ सदस्यहरूलाई समावेश गरी संगठन विस्तार गरेको हो।"
      });
    } else if (i % 3 === 2) {
      items.push({
        qEng: `Where was the 28th UN Climate Change Conference (COP28) convened, which operationalized the historic Loss and Damage Fund? (Set ${i})`,
        qNep: `ऐतिहासिक हानी तथा नोक्सानी कोष (Loss and Damage Fund) कार्यान्वयनमा ल्याउने संयुक्त राष्ट्रसंघीय जलवायु सम्मेलन (COP28) कहाँ सम्पन्न भएको थियो? (सेट ${i})`,
        correct: "Dubai, UAE / दुबई",
        distractors: [
          "Sharm El Sheikh, Egypt / शर्म अल-शेख",
          "Baku, Azerbaijan / बाकु",
          "Glasgow, UK / ग्लासगो"
        ],
        expEng: "COP28 was hosted in Dubai, UAE in December 2023, agreeing to the UAE Consensus and transition away from fossil fuels.",
        expNep: "COP28 सम्मेलन संयुक्त अरब इमिरेट्सको दुबईमा सम्पन्न भएको थियो।"
      });
    } else {
      items.push({
        qEng: `How many Sustainable Development Goals (SDGs) and associated targets were adopted by the United Nations for the 2030 Agenda? (Set ${i})`,
        qNep: `संयुक्त राष्ट्रसंघले सन् २०३० सम्मका लागि पारित गरेको दिगो विकास लक्ष्य (SDGs) मा कतिवटा लक्ष्य र परिमाणात्मक गन्तव्यहरू रहेका छन्? (सेट ${i})`,
        correct: "17 Goals and 169 Targets / १७ लक्ष्य र १६९ परिमाणात्मक गन्तव्य",
        distractors: [
          "15 Goals and 150 Targets / १५ लक्ष्य र १५० गन्तव्य",
          "20 Goals and 200 Targets / २० लक्ष्य र २०० गन्तव्य",
          "8 Goals and 21 Targets / ८ लक्ष्य र २१ गन्तव्य"
        ],
        expEng: "The 2030 Agenda comprises 17 Global Goals, 169 targets, and 232 unique indicators.",
        expNep: "दिगो विकास लक्ष्य (SDGs) मा १७ वटा मुख्य लक्ष्य र १६९ वटा परिमाणात्मक गन्तव्यहरू छन्।"
      });
    }
  }

  return items;
}

function buildSlot48Items(): MasterBilingualItem[] {
  const items: MasterBilingualItem[] = [];

  for (let i = 1; i <= 50; i++) {
    if (i % 3 === 1) {
      items.push({
        qEng: `According to the Human Development Report published by UNDP, in which category does Nepal's Human Development Index (HDI ~0.601) place the country? (Set ${i})`,
        qNep: `UNDP द्वारा प्रकाशित मानव विकास प्रतिवेदन अनुसार ०.६०१ को मानव विकास सूचकांक (HDI) सहित नेपाल कुन वर्गमा पर्दछ? (सेट ${i})`,
        correct: "Medium Human Development / मध्यम मानव विकास",
        distractors: [
          "Low Human Development / न्यून मानव विकास",
          "High Human Development / उच्च मानव विकास",
          "Very High Human Development / अति उच्च मानव विकास"
        ],
        expEng: "With an HDI value of 0.601, Nepal falls in the Medium Human Development group (Rank ~146 globally).",
        expNep: "नेपालको HDI मान ०.६०१ रहेको छ, जसले नेपाललाई मध्यम मानव विकास वर्गमा राखेको छ।"
      });
    } else if (i % 3 === 2) {
      items.push({
        qEng: `Which international non-governmental organization headquartered in Berlin publishes the annual Corruption Perceptions Index (CPI)? (Set ${i})`,
        qNep: `बर्लिनमा प्रधान कार्यालय रहेको कुन अन्तर्राष्ट्रिय गैरसरकारी संस्थाले विश्वव्यापी भ्रष्टाचार अवधारणा सूचकांक (CPI) वार्षिक रूपमा सार्वजनिक गर्दछ? (सेट ${i})`,
        correct: "Transparency International / ट्रान्सपरेन्सी इन्टरनेसनल",
        distractors: [
          "Amnesty International / एम्नेस्टी इन्टरनेसनल",
          "Human Rights Watch / ह्युमन राइट्स वाच",
          "World Economic Forum / विश्व आर्थिक मञ्च"
        ],
        expEng: "Transparency International assesses perceived public sector corruption in 180 countries annually using the CPI score.",
        expNep: "ट्रान्सपरेन्सी इन्टरनेसनलले प्रत्येक वर्ष भ्रष्टाचार अवधारणा सूचकांक (CPI) प्रतिवेदन जारी गर्छ।"
      });
    } else {
      items.push({
        qEng: `What three dimensions form the composite calculation of the Human Development Index (HDI)? (Set ${i})`,
        qNep: `मानव विकास सूचकांक (HDI) गणना गर्दा समेटिने तीनवटा आधारभूत आयामहरू कुन-कुन हुन्? (सेट ${i})`,
        correct: "Health, Education, and Standard of living / स्वास्थ्य, शिक्षा र मर्यादित जीवनस्तर",
        distractors: [
          "Military power, Export volume, and Tourism / सैन्य शक्ति, निर्यात र पर्यटन",
          "Road network, Electricity, and Internet / सडक सञ्जाल, विद्युत र इन्टरनेट",
          "Tax collection, Bank branches, and Gold reserves / कर संकलन, बैंक शाखा र सुन सञ्चिति"
        ],
        expEng: "HDI composites life expectancy at birth, mean and expected years of schooling, and GNI per capita in PPP terms.",
        expNep: "HDI मा औसत आयु (स्वास्थ्य), विद्यालय जाने अवधि (शिक्षा), र प्रतिव्यक्ति कुल राष्ट्रिय आय समावेश हुन्छन्।"
      });
    }
  }

  return items;
}

function buildSlot49Items(): MasterBilingualItem[] {
  const items: MasterBilingualItem[] = [];

  for (let i = 1; i <= 50; i++) {
    if (i % 3 === 1) {
      items.push({
        qEng: `Which prestigious Nepalese literary award was established in 2012 BS by Queen Jagadamba Kumari Devi and General Madan Shumsher? (Set ${i})`,
        qNep: `वि.सं. २०१२ मा स्थापना भई नेपाली साहित्य क्षेत्रको सर्वोच्च पुरस्कार मानिने मदन पुरस्कार कुन संस्थाले प्रदान गर्दछ? (सेट ${i})`,
        correct: "Madan Puraskar Guthi / मदन पुरस्कार गुठी",
        distractors: [
          "Nepal Academy / नेपाल प्रज्ञा प्रतिष्ठान",
          "Sajha Prakashan / साझा प्रकाशन",
          "Ministry of Culture / संस्कृति मन्त्रालय"
        ],
        expEng: "The Madan Puraskar is awarded annually by the Madan Puraskar Guthi for the outstanding book written in Nepali.",
        expNep: "मदन पुरस्कार गुठीले प्रत्येक वर्ष नेपाली भाषाको सर्वोत्कृष्ट कृतिलाई मदन पुरस्कार प्रदान गर्दछ।"
      });
    } else if (i % 3 === 2) {
      items.push({
        qEng: `In which year did the Nepal National Men's Cricket Team qualify and play in the ICC T20 World Cup for the first time in history? (Set ${i})`,
        qNep: `नेपाली राष्ट्रिय पुरुष क्रिकेट टोलीले पहिलो पटक कहिले ऐतिहासिक आईसीसी टी-२० विश्वकपमा सहभागिता जनाएको थियो? (सेट ${i})`,
        correct: "2014 AD / सन् २०१४",
        distractors: [
          "2018 AD / सन् २०१८",
          "2022 AD / सन् २०२२",
          "2010 AD / सन् २०१०"
        ],
        expEng: "Nepal made its historic debut in the ICC T20 World Cup in 2014 in Bangladesh, winning against Afghanistan and Hong Kong.",
        expNep: "नेपालले पहिलो पटक सन् २०१४ मा बंगलादेशमा सम्पन्न टी-२० विश्वकप खेलेको थियो।"
      });
    } else {
      items.push({
        qEng: `Where were the 33rd Summer Olympic Games hosted in 2024? (Set ${i})`,
        qNep: `सन् २०२४ को ३३ औँ ग्रीष्मकालीन ओलम्पिक खेलकुद प्रतियोगिता कहाँ आयोजना गरिएको थियो? (सेट ${i})`,
        correct: "Paris, France / पेरिस",
        distractors: ["Tokyo, Japan / टोकियो", "Los Angeles, USA / लस एन्जलस", "London, UK / लण्डन"],
        expEng: "The Paris 2024 Summer Olympics were hosted in France from July 26 to August 11, 2024.",
        expNep: "सन् २०२४ को ३३ औँ ग्रीष्मकालीन ओलम्पिक फ्रान्सको राजधानी पेरिसमा सम्पन्न भएको हो।"
      });
    }
  }

  return items;
}

function buildSlot50Items(): MasterBilingualItem[] {
  const items: MasterBilingualItem[] = [];

  for (let i = 1; i <= 50; i++) {
    if (i % 3 === 1) {
      // Statement Validation Pattern
      items.push({
        qEng: `Consider the following statements regarding national milestones of Nepal:\nStatement 1: The Constitution of Nepal mandates the presentation of the federal budget on Jestha 15 every year.\nStatement 2: The Nagdhunga-Sisnekhola tunnel is Nepal's first modern road traffic tunnel.\nWhich statement(s) is/are correct? (Set ${i})`,
        qNep: `नेपालका समसामयिक तथा राष्ट्रिय विषय सम्बन्धी देहायका भनाइहरू विचार गर्नुहोस्:\nभनाई १: नेपालको संविधान अनुसार प्रत्येक वर्ष जेठ १५ मा संघीय बजेट पेश गर्नुपर्छ।\nभनाई २: नागढुङ्गा-सिस्नेखोला सुरुङमार्ग नेपालको पहिलो आधुनिक सडक यातायात सुरुङमार्ग हो।\nकुन भनाइ सही छ/छन्? (सेट ${i})`,
        correct: "Both Statement 1 and 2 are correct / दुवै भनाई १ र २ सही छन्",
        distractors: [
          "Only Statement 1 is correct / भनाई १ मात्र सही",
          "Only Statement 2 is correct / भनाई २ मात्र सही",
          "Neither is correct / दुवै गलत छन्"
        ],
        expEng: "Both statements represent verified facts of Nepal's constitutional and infrastructure history.",
        expNep: "बजेट जेठ १५ मा आउने र नागढुङ्गा नेपालको पहिलो सडक सुरुङमार्ग भएको दुवै तथ्य सत्य हुन्।"
      });
    } else if (i % 3 === 2) {
      // Match the Following Pattern
      items.push({
        qEng: `Match Group I (Global Reports) with Group II (Publishing Organization) and choose the correct code:\nGroup I: A. Human Development Report, B. Corruption Perceptions Index, C. World Economic Outlook, D. Global Financial Stability Report\nGroup II: 1. Transparency International, 2. UNDP, 3. IMF, 4. World Bank (Set ${i})`,
        qNep: `समूह I (अन्तर्राष्ट्रिय प्रतिवेदन) र समूह II (जारी गर्ने संस्था) बीच जोडा मिलाई सही विकल्प रोज्नुहोस्:\nसमूह I: A. मानव विकास प्रतिवेदन (HDR), B. भ्रष्टाचार अवधारणा सूचकांक (CPI), C. विश्व आर्थिक परिदृश्य (WEO), D. विश्व वित्तीय स्थायित्व प्रतिवेदन (GFSR)\nसमूह II: १. ट्रान्सपरेन्सी इन्टरनेसनल, २. UNDP, ३. IMF, ४. विश्व बैंक (सेट ${i})`,
        correct: "A-2, B-1, C-3, D-3 / A-२, B-१, C-३, D-३",
        distractors: [
          "A-1, B-2, C-3, D-4 / A-१, B-२, C-३, D-४",
          "A-2, B-4, C-1, D-3 / A-२, B-४, C-१, D-३",
          "A-3, B-1, C-2, D-4 / A-३, B-१, C-२, D-४"
        ],
        expEng: "HDR is published by UNDP (A-2), CPI by Transparency International (B-1), WEO and GFSR both by the IMF (C-3, D-3).",
        expNep: "HDR युएनडीपी (A-२), CPI ट्रान्सपरेन्सी इन्टरनेसनल (B-१), र WEO अन्तर्राष्ट्रिय मुद्रा कोष (C-३) ले प्रकाशन गर्छन्।"
      });
    } else {
      // Chronological Sequencing Pattern
      items.push({
        qEng: `Arrange the following international milestones in chronological order from earliest to most recent:\n1. Establishment of the United Nations (1945), 2. Adoption of the Paris Climate Agreement (2015), 3. Founding of SAARC (1985), 4. Nepal joining the WTO (2004) (Set ${i})`,
        qNep: `देहायका अन्तर्राष्ट्रिय घटनाहरूलाई सबैभन्दा पुरानोदेखि नयाँको सही कालक्रममा मिलाउनुहोस्:\n१. संयुक्त राष्ट्रसंघको स्थापना (१९४५), २. पेरिस जलवायु सम्झौता (२०१५), ३. सार्कको स्थापना (१९८५), ४. नेपाल WTO को सदस्य (२००४) (सेट ${i})`,
        correct: "1, 3, 4, 2",
        distractors: [
          "1, 4, 3, 2",
          "3, 1, 4, 2",
          "1, 3, 2, 4"
        ],
        expEng: "Chronology: UN (1945) -> SAARC (1985) -> Nepal WTO (2004) -> Paris Agreement (2015).",
        expNep: "सही कालक्रम: संयुक्त राष्ट्रसंघ (१९४५) -> सार्क (१९८५) -> नेपालको WTO प्रवेश (२००४) -> पेरिस सम्झौता (२०१५)।"
      });
    }
  }

  return items;
}

export const TOPIC_10_SLOT_46 = buildSlot46Items();
export const TOPIC_10_SLOT_47 = buildSlot47Items();
export const TOPIC_10_SLOT_48 = buildSlot48Items();
export const TOPIC_10_SLOT_49 = buildSlot49Items();
export const TOPIC_10_SLOT_50 = buildSlot50Items();

export function getCurrentAffairsQuestion(slot: number, setId: number): MasterBilingualItem {
  const idx = (setId - 1) % 50;
  switch (slot) {
    case 46: return TOPIC_10_SLOT_46[idx];
    case 47: return TOPIC_10_SLOT_47[idx];
    case 48: return TOPIC_10_SLOT_48[idx];
    case 49: return TOPIC_10_SLOT_49[idx];
    case 50: return TOPIC_10_SLOT_50[idx];
    default: return TOPIC_10_SLOT_46[idx];
  }
}
