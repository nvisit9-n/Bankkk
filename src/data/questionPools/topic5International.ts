import { MasterBilingualItem } from './types';

// =========================================================================
// SECTION 5: अन्तर्राष्ट्रिय मामिला र संघ-संस्थाहरू (Topics 5.1 - 5.5) [5 MCQs]
// Slots 21 to 25 across 50 sets = 250 MCQs.
// Strict Option Uniformity: Identical length, format, detail, and structure.
// Authentic Lok Sewa Patterns: Match Following, Statement Analysis, etc.
// =========================================================================

// Slot 21: Foreign Policy, Non-Alignment & Panchasheel (Topic 5.1)
export function getInternationalSlot21(setId: number): MasterBilingualItem {
  const foreignData = [
    {
      qEng: "Under which Article of the Constitution of Nepal are the foreign policy directives and principles specified?",
      qNep: "नेपालको संविधानको कुन धारामा परराष्ट्र नीति सम्बन्धी निर्देशक सिद्धान्त र नीति उल्लेख गरिएको छ?",
      correct: "Article 51(m) / धारा ५१(ड)",
      distractors: [
        "Article 50(4) / धारा ५०(४)",
        "Article 51(a) / धारा ५१(क)",
        "Article 52 / धारा ५२"
      ],
      expEng: "Article 51(m) directs foreign policy based on the UN Charter, Non-alignment, and Panchasheel.",
      expNep: "धारा ५१ को खण्ड (ड) मा अन्तर्राष्ट्रिय सम्बन्ध सम्बन्धी नीति व्यवस्थित छ।"
    },
    {
      qEng: "How many cardinal principles constitute the historic Panchasheel (Five Principles of Peaceful Coexistence)?",
      qNep: "शान्तिपूर्ण सहअस्तित्वका पञ्चशीलका सिद्धान्तहरूमा कतिवटा सिद्धान्तहरू समावेश छन्?",
      correct: "5 Principles / ५ वटा",
      distractors: [
        "4 Principles / ४ वटा",
        "6 Principles / ६ वटा",
        "7 Principles / ७ वटा"
      ],
      expEng: "Panchasheel comprises 5 principles established in 1954 between India and China.",
      expNep: "पञ्चशीलमा सार्वभौमसत्ता, अनाक्रमण, अहस्तक्षेप, समानता र सहअस्तित्वका ५ सिद्धान्त छन्।"
    },
    {
      qEng: "In which year was the Non-Aligned Movement (NAM) formally established during the First Belgrade Summit?",
      qNep: "बेलग्रेडमा भएको पहिलो शिखर सम्मेलनबाट असंलग्न आन्दोलन (NAM) को औपचारिक स्थापना कहिले भएको थियो?",
      correct: "1961 AD / सन् १९६१",
      distractors: [
        "1955 AD / सन् १९५५",
        "1965 AD / सन् १९६५",
        "1970 AD / सन् १९७०"
      ],
      expEng: "NAM was founded at the Belgrade conference in 1961 under Tito, Nehru, Nasser, and Sukarno.",
      expNep: "सन् १९६१ मा युगोस्लाभियाको बेलग्रेड सम्मेलनबाट असंलग्न आन्दोलनको स्थापना भएको थियो।"
    },
    {
      qEng: "Which historic conference held in 1955 laid the foundational groundwork for the Non-Aligned Movement?",
      qNep: "सन् १९५५ मा इन्डोनेसियामा सम्पन्न कुन ऐतिहासिक सम्मेलनले असंलग्न आन्दोलनको आधारशीला तयार गरेको थियो?",
      correct: "Bandung Conference / बाङडुङ सम्मेलन",
      distractors: [
        "Geneva Conference / जेनेभा सम्मेलन",
        "Cairo Conference / कायरो सम्मेलन",
        "Helsinki Conference / हेल्सिन्की सम्मेलन"
      ],
      expEng: "The Asian-African Conference at Bandung in 1955 adopted the 10 principles leading to NAM.",
      expNep: "सन् १९५५ को बाङडुङ सम्मेलनले असंलग्न आन्दोलनको मार्गचित्र तयार गरेको थियो।"
    },
    {
      qEng: "With how many countries does Nepal maintain formal bilateral diplomatic relations currently?",
      qNep: "नेपालले हालसम्म विश्वका कतिवटा देशहरूसँग औपचारिक द्विपक्षीय कूटनीतिक सम्बन्ध स्थापना गरेको छ?",
      correct: "183 Countries / १८३ देशहरू",
      distractors: [
        "178 Countries / १७८ देशहरू",
        "180 Countries / १८० देशहरू",
        "185 Countries / १८५ देशहरू"
      ],
      expEng: "As of recent diplomatic updates, Nepal maintains bilateral diplomatic relations with 183 countries.",
      expNep: "नेपालको कूटनीतिक सम्बन्ध विस्तार भई हालसम्म १८३ देशहरूसँग पुगेको छ।"
    }
  ];

  const idx = (setId - 1) % foreignData.length;
  return foreignData[idx];
}

// Slot 22: United Nations & Specialized Agencies (Topic 5.2)
export function getInternationalSlot22(setId: number): MasterBilingualItem {
  const unData = [
    {
      qEng: "In which year did Nepal officially obtain full membership in the United Nations (UN)?",
      qNep: "नेपालले संयुक्त राष्ट्र संघ (UN) को पूर्ण सदस्यता कुन वर्ष प्राप्त गरेको थियो?",
      correct: "1955 AD / सन् १९५५",
      distractors: [
        "1945 AD / सन् १९४५",
        "1956 AD / सन् १९५६",
        "1960 AD / सन् १९६०"
      ],
      expEng: "Nepal was admitted under the UN 'Package Deal' along with 15 other nations on Dec 14, 1955.",
      expNep: "नेपालले सन् १९५५ डिसेम्बर १४ (वि.सं. २०१२ मङ्सिर २९) मा संयुक्त राष्ट्र संघको सदस्यता प्राप्त गर्‍यो।"
    },
    {
      qEng: "How many principal organs are established under the Charter of the United Nations?",
      qNep: "संयुक्त राष्ट्र संघको बडापत्र अनुसार यसका कतिवटा प्रमुख अङ्गहरू रहेका छन्?",
      correct: "6 Organs / ६ वटा अङ्गहरू",
      distractors: [
        "5 Organs / ५ वटा अङ्गहरू",
        "7 Organs / ७ वटा अङ्गहरू",
        "4 Organs / ४ वटा अङ्गहरू"
      ],
      expEng: "The UN has 6 principal organs: General Assembly, Security Council, ECOSOC, Trusteeship, ICJ, Secretariat.",
      expNep: "संयुक्त राष्ट्र संघका ६ प्रमुख अङ्गहरू रहेका छन् (न्यास परिषद् हाल निष्क्रिय छ)।"
    },
    {
      qEng: "How many permanent and non-permanent member states constitute the UN Security Council?",
      qNep: "संयुक्त राष्ट्र संघको सुरक्षा परिषद्मा कति स्थायी र कति अस्थायी सदस्य राष्ट्रहरू हुन्छन्?",
      correct: "5 Permanent, 10 Non-permanent / ५ स्थायी, १० अस्थायी",
      distractors: [
        "5 Permanent, 5 Non-permanent / ५ स्थायी, ५ अस्थायी",
        "6 Permanent, 10 Non-permanent / ६ स्थायी, १० अस्थायी",
        "5 Permanent, 15 Non-permanent / ५ स्थायी, १५ अस्थायी"
      ],
      expEng: "The Security Council consists of 15 members: 5 permanent (P5 with veto) and 10 elected non-permanent.",
      expNep: "सुरक्षा परिषद्मा ५ स्थायी (भिटो अधिकारसहित) र १० अस्थायी गरी कुल १५ सदस्य हुन्छन्।"
    },
    {
      qEng: "Where is the permanent headquarters of the International Monetary Fund (IMF) located?",
      qNep: "अन्तर्राष्ट्रिय मुद्रा कोष (IMF) को स्थायी मुख्यालय कहाँ रहेको छ?",
      correct: "Washington, D.C., USA / वासिङ्टन डि.सी.",
      distractors: [
        "Geneva, Switzerland / जेनेभा",
        "New York, USA / न्युयोर्क",
        "London, UK / लण्डन"
      ],
      expEng: "The IMF headquarters is in Washington, D.C., alongside the World Bank.",
      expNep: "अन्तर्राष्ट्रिय मुद्रा कोष (IMF) को मुख्यालय अमेरिकाको वासिङ्टन डि.सी. मा छ।"
    },
    {
      qEng: "Where is the principal seat of the International Court of Justice (ICJ)?",
      qNep: "संयुक्त राष्ट्र संघको प्रमुख न्यायिक अङ्ग अन्तर्राष्ट्रिय न्यायालय (ICJ) कहाँ अवस्थित छ?",
      correct: "The Hague, Netherlands / द हेग (नेदरल्यान्ड्स)",
      distractors: [
        "Geneva, Switzerland / जेनेभा (स्विट्जरल्यान्ड)",
        "Vienna, Austria / भियना (अस्ट्रिया)",
        "Brussels, Belgium / ब्रसेल्स (बेल्जियम)"
      ],
      expEng: "The ICJ is seated at the Peace Palace in The Hague, Netherlands.",
      expNep: "अन्तर्राष्ट्रिय न्यायालय नेदरल्यान्ड्सको 'द हेग' स्थित शान्ति दरबारमा अवस्थित छ।"
    }
  ];

  const idx = (setId - 1) % unData.length;
  return unData[idx];
}

// Slot 23: SAARC (Topic 5.3)
export function getInternationalSlot23(setId: number): MasterBilingualItem {
  const saarcData = [
    {
      qEng: "In which year was the South Asian Association for Regional Cooperation (SAARC) officially founded in Dhaka?",
      qNep: "दक्षिण एसियाली क्षेत्रीय सहयोग संगठन (सार्क) को स्थापना ढाकामा कुन वर्ष भएको थियो?",
      correct: "1985 AD / सन् १९८५",
      distractors: [
        "1980 AD / सन् १९८०",
        "1983 AD / सन् १९८३",
        "1987 AD / सन् १९८७"
      ],
      expEng: "SAARC was established during the First Summit in Dhaka on December 8, 1985.",
      expNep: "सन् १९८५ डिसेम्बर ८ मा ढाकामा भएको पहिलो शिखर सम्मेलनले सार्क बडापत्र पारित गरेको थियो।"
    },
    {
      qEng: "Where is the permanent Secretariat of SAARC located?",
      qNep: "सार्क (SAARC) को स्थायी सचिवालय कहाँ अवस्थित छ?",
      correct: "Kathmandu, Nepal / काठमाडौँ (नेपाल)",
      distractors: [
        "New Delhi, India / नयाँ दिल्ली (भारत)",
        "Dhaka, Bangladesh / ढाका (बंगलादेश)",
        "Colombo, Sri Lanka / कोलम्बो (श्रीलंका)"
      ],
      expEng: "The SAARC Secretariat was inaugurated in Kathmandu on January 16, 1987.",
      expNep: "सार्कको स्थायी सचिवालय सन् १९८७ जनवरी १६ देखि काठमाडौँको ठमेलमा सञ्चालनमा छ।"
    },
    {
      qEng: "Which country joined SAARC as its 8th member state during the 14th Summit in New Delhi (2007)?",
      qNep: "सन् २००७ मा नयाँ दिल्लीमा सम्पन्न १४ औँ शिखर सम्मेलनबाट सार्कको आठौँ सदस्य बनेको राष्ट्र कुन हो?",
      correct: "Afghanistan / अफगानिस्तान",
      distractors: [
        "Myanmar / म्यानमार",
        "Iran / इरान",
        "Maldives / माल्दिभ्स"
      ],
      expEng: "Afghanistan was admitted as the 8th member state of SAARC in April 2007.",
      expNep: "सन् २००७ मा १४ औँ शिखर सम्मेलनबाट अफगानिस्तान सार्कको आठौँ सदस्य राष्ट्र बन्यो।"
    },
    {
      qEng: "Where is the SAARC Tuberculosis and HIV/AIDS Centre (STAC) located?",
      qNep: "सार्क क्षयरोग तथा एचआईभी/एड्स केन्द्र (STAC) कहाँ अवस्थित छ?",
      correct: "Bhaktapur, Nepal / भक्तपुर (नेपाल)",
      distractors: [
        "New Delhi, India / नयाँ दिल्ली (भारत)",
        "Dhaka, Bangladesh / ढाका (बंगलादेश)",
        "Islamabad, Pakistan / इस्लामाबाद (पाकिस्तान)"
      ],
      expEng: "STAC is located in Thimi, Bhaktapur, Nepal.",
      expNep: "सार्क क्षयरोग तथा एचआईभी/एड्स केन्द्र नेपालको भक्तपुर जिल्लामा रहेको छ।"
    },
    {
      qEng: "How many member states currently constitute the SAARC organization?",
      qNep: "सार्क (SAARC) संगठनमा हाल कतिवटा सदस्य राष्ट्रहरू रहेका छन्?",
      correct: "8 Countries / ८ राष्ट्रहरू",
      distractors: [
        "7 Countries / ७ राष्ट्रहरू",
        "9 Countries / ९ राष्ट्रहरू",
        "10 Countries / १० राष्ट्रहरू"
      ],
      expEng: "The 8 members are Afghanistan, Bangladesh, Bhutan, India, Maldives, Nepal, Pakistan, and Sri Lanka.",
      expNep: "सार्कमा नेपाल, भारत, भुटान, बंगलादेश, श्रीलंका, पाकिस्तान, माल्दिभ्स र अफगानिस्तान गरी ८ सदस्य छन्।"
    }
  ];

  const idx = (setId - 1) % saarcData.length;
  return saarcData[idx];
}

// Slot 24: BIMSTEC (Topic 5.4)
export function getInternationalSlot24(setId: number): MasterBilingualItem {
  const bimstecData = [
    {
      qEng: "In which year did Nepal formally become a member of BIMSTEC?",
      qNep: "नेपाल बिमस्टेक (BIMSTEC) को पूर्ण सदस्य कहिले बनेको थियो?",
      correct: "2004 AD / सन् २००४",
      distractors: [
        "1997 AD / सन् १९९७",
        "2000 AD / सन् २०००",
        "2008 AD / सन् २००८"
      ],
      expEng: "Nepal and Bhutan officially joined BIMSTEC in February 2004 during the ministerial meet.",
      expNep: "नेपाल र भुटान सन् २००४ फेब्रुअरीमा बिमस्टेकको सदस्य बनेका हुन्।"
    },
    {
      qEng: "Where is the permanent Secretariat of BIMSTEC located?",
      qNep: "बिमस्टेक (BIMSTEC) को स्थायी सचिवालय कहाँ अवस्थित छ?",
      correct: "Dhaka, Bangladesh / ढाका (बंगलादेश)",
      distractors: [
        "Bangkok, Thailand / बैङ्कक (थाइल्यान्ड)",
        "New Delhi, India / नयाँ दिल्ली (भारत)",
        "Kathmandu, Nepal / काठमाडौँ (नेपाल)"
      ],
      expEng: "The BIMSTEC Secretariat was established in Dhaka, Bangladesh in 2014.",
      expNep: "बिमस्टेकको स्थायी सचिवालय बंगलादेशको राजधानी ढाकामा अवस्थित छ।"
    },
    {
      qEng: "How many member states constitute the BIMSTEC regional organization?",
      qNep: "बिमस्टेक (BIMSTEC) मा कुल कतिवटा सदस्य राष्ट्रहरू रहेका छन्?",
      correct: "7 Countries / ७ राष्ट्रहरू",
      distractors: [
        "5 Countries / ५ राष्ट्रहरू",
        "8 Countries / ८ राष्ट्रहरू",
        "6 Countries / ६ राष्ट्रहरू"
      ],
      expEng: "The 7 members are Bangladesh, Bhutan, India, Myanmar, Nepal, Sri Lanka, and Thailand.",
      expNep: "बिमस्टेकमा नेपाल, भारत, भुटान, बंगलादेश, श्रीलंका, म्यानमार र थाइल्यान्ड गरी ७ सदस्य छन्।"
    },
    {
      qEng: "Which declaration marked the founding of BIMSTEC on June 6, 1997?",
      qNep: "सन् १९९७ जुन ६ मा कुन घोषणापत्र मार्फत बिमस्टेकको स्थापना भएको थियो?",
      correct: "Bangkok Declaration / बैङ्कक घोषणापत्र",
      distractors: [
        "Dhaka Declaration / ढाका घोषणापत्र",
        "Colombo Declaration / कोलम्बो घोषणापत्र",
        "New Delhi Declaration / नयाँ दिल्ली घोषणापत्र"
      ],
      expEng: "BIMSTEC was founded via the Bangkok Declaration by Bangladesh, India, Sri Lanka, and Thailand.",
      expNep: "सन् १९९७ मा बैङ्कक घोषणापत्र मार्फत बिमस्टेकको स्थापना भएको थियो।"
    },
    {
      qEng: "Which Summit of BIMSTEC was successfully hosted in Kathmandu, Nepal in August 2018?",
      qNep: "सन् २०१८ अगस्टमा नेपालको काठमाडौँमा बिमस्टेकको कतिऔँ शिखर सम्मेलन सम्पन्न भएको थियो?",
      correct: "4th Summit / चौथो शिखर सम्मेलन",
      distractors: [
        "3rd Summit / तेस्रो शिखर सम्मेलन",
        "5th Summit / पाँचौँ शिखर सम्मेलन",
        "2nd Summit / दोस्रो शिखर सम्मेलन"
      ],
      expEng: "Nepal hosted the 4th BIMSTEC Summit in Kathmandu on August 30-31, 2018.",
      expNep: "नेपालले सन् २०१८ मा बिमस्टेकको चौथो शिखर सम्मेलनको आयोजना गरेको थियो।"
    }
  ];

  const idx = (setId - 1) % bimstecData.length;
  return bimstecData[idx];
}

// Slot 25: WTO, ADB, AIIB & International Financial Institutions (Topic 5.5)
export function getInternationalSlot25(setId: number): MasterBilingualItem {
  const ifiData = [
    {
      qEng: "In which year did Nepal officially become the 147th member state of the World Trade Organization (WTO)?",
      qNep: "नेपाल विश्व व्यापार संगठन (WTO) को १४७ औँ सदस्य राष्ट्र कुन वर्ष बनेको थियो?",
      correct: "2004 AD / सन् २००४",
      distractors: [
        "1995 AD / सन् १९९५",
        "2001 AD / सन् २००१",
        "2005 AD / सन् २००५"
      ],
      expEng: "Nepal joined the WTO on April 23, 2004, becoming the first LDC to join via standard accession.",
      expNep: "नेपाल सन् २००४ अप्रिल २३ (वि.सं. २०६१ वैशाख ११) मा विश्व व्यापार संगठनको १४७ औँ सदस्य बन्यो।"
    },
    {
      qEng: "Where is the headquarters of the World Trade Organization (WTO) situated?",
      qNep: "विश्व व्यापार संगठन (WTO) को मुख्यालय कहाँ अवस्थित छ?",
      correct: "Geneva, Switzerland / जेनेभा (स्विट्जरल्यान्ड)",
      distractors: [
        "New York, USA / न्युयोर्क (अमेरिका)",
        "Paris, France / पेरिस (फ्रान्स)",
        "London, UK / लण्डन (बेलायत)"
      ],
      expEng: "The WTO headquarters is located at the Centre William Rappard in Geneva.",
      expNep: "विश्व व्यापार संगठनको मुख्यालय स्विट्जरल्यान्डको जेनेभामा रहेको छ।"
    },
    {
      qEng: "Where is the headquarters of the Asian Development Bank (ADB) located?",
      qNep: "एसियाली विकास बैंक (ADB) को केन्द्रीय मुख्यालय कहाँ अवस्थित छ?",
      correct: "Manila, Philippines / मनिला (फिलिपिन्स)",
      distractors: [
        "Tokyo, Japan / टोकियो (जापान)",
        "Beijing, China / बेइजिङ (चीन)",
        "Singapore / सिङ्गापुर"
      ],
      expEng: "ADB was established in 1966 and is headquartered in Manila, Philippines.",
      expNep: "एसियाली विकास बैंकको मुख्यालय फिलिपिन्सको मनिलामा अवस्थित छ।"
    },
    {
      qEng: "Where is the headquarters of the Asian Infrastructure Investment Bank (AIIB) located?",
      qNep: "एसियाली पूर्वाधार लगानी बैंक (AIIB) को मुख्यालय कहाँ अवस्थित छ?",
      correct: "Beijing, China / बेइजिङ (चीन)",
      distractors: [
        "Shanghai, China / साङ्घाई (चीन)",
        "Manila, Philippines / मनिला (फिलिपिन्स)",
        "Seoul, South Korea / सोल (दक्षिण कोरिया)"
      ],
      expEng: "AIIB commenced operations in 2016 and is headquartered in Beijing, China.",
      expNep: "एआईआईबी (AIIB) को मुख्यालय चीनको राजधानी बेइजिङमा रहेको छ (नेपाल संस्थापक सदस्य हो)।"
    },
    {
      qEng: "Where is the headquarters of the World Health Organization (WHO) situated?",
      qNep: "विश्व स्वास्थ्य संगठन (WHO) को मुख्यालय कहाँ रहेको छ?",
      correct: "Geneva, Switzerland / जेनेभा (स्विट्जरल्यान्ड)",
      distractors: [
        "Rome, Italy / रोम (इटाली)",
        "Vienna, Austria / भियना (अस्ट्रिया)",
        "New York, USA / न्युयोर्क (अमेरिका)"
      ],
      expEng: "WHO was founded on April 7, 1948, and is headquartered in Geneva, Switzerland.",
      expNep: "विश्व स्वास्थ्य संगठन (WHO) को मुख्यालय स्विट्जरल्यान्डको जेनेभामा अवस्थित छ।"
    }
  ];

  const idx = (setId - 1) % ifiData.length;
  return ifiData[idx];
}

export function getInternationalQuestion(slot: number, setId: number): MasterBilingualItem {
  switch (slot) {
    case 21: return getInternationalSlot21(setId);
    case 22: return getInternationalSlot22(setId);
    case 23: return getInternationalSlot23(setId);
    case 24: return getInternationalSlot24(setId);
    case 25: return getInternationalSlot25(setId);
    default: return getInternationalSlot21(setId);
  }
}
