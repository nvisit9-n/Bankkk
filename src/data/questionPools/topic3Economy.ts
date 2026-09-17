import { MasterBilingualItem } from './types';

// =========================================================================
// SECTION 3: नेपालको आर्थिक विकास (Topics 3.1 - 3.5) [5 MCQs]
// Slots 11 to 15 across 50 sets = 250 MCQs.
// Strict Option Uniformity: Identical length, format, detail, and structure.
// Authentic Lok Sewa Patterns: Match Following, Statement Analysis, etc.
// =========================================================================

// Slot 11: Structure of Nepalese Economy & Indicators (Topic 3.1)
export function getEconomySlot11(setId: number): MasterBilingualItem {
  const indicatorsData = [
    {
      qEng: "According to the Economic Survey and National Statistics Office, which sector contributes the highest share to Nepal's Gross Domestic Product (GDP)?",
      qNep: "आर्थिक सर्वेक्षण अनुसार नेपालको कुल गार्हस्थ्य उत्पादन (GDP) मा सबैभन्दा बढी योगदान कुन क्षेत्रको रहेको छ?",
      correct: "Service Sector / सेवा क्षेत्र",
      distractors: [
        "Agriculture Sector / कृषि क्षेत्र",
        "Industrial Sector / उद्योग क्षेत्र",
        "Foreign Trade Sector / वैदेशिक व्यापार क्षेत्र"
      ],
      expEng: "The service sector contributes over 62% of GDP, agriculture approx 24%, and industry approx 13%.",
      expNep: "नेपालको कुल गार्हस्थ्य उत्पादनमा सेवा क्षेत्रको योगदान सबैभन्दा बढी (करिब ६२.४ प्रतिशत) रहेको छ।"
    },
    {
      qEng: "According to the Economic Survey, what is the per capita Gross National Income (GNI) of Nepal approximately?",
      qNep: "आर्थिक सर्वेक्षण अनुसार नेपालको प्रतिव्यक्ति कुल राष्ट्रिय आय (GNI Per Capita) करिब कति अमेरिकी डलर पुगेको छ?",
      correct: "USD 1,456 / १,४५६ अमेरिकी डलर",
      distractors: [
        "USD 1,215 / १,२१५ अमेरिकी डलर",
        "USD 1,320 / १,३२० अमेरिकी डलर",
        "USD 1,580 / १,५८० अमेरिकी डलर"
      ],
      expEng: "Economic Survey estimates Nepal's per capita GNI at approximately USD 1,456.",
      expNep: "आर्थिक सर्वेक्षण अनुसार नेपालको प्रतिव्यक्ति कुल राष्ट्रिय आय १,४५६ अमेरिकी डलर पुगेको छ।"
    },
    {
      qEng: "What is the standard base year currently utilized by the National Statistics Office for national accounts calculation in Nepal?",
      qNep: "नेपालमा राष्ट्रिय लेखा गणनाका लागि राष्ट्रिय तथ्याङ्क कार्यालयले हाल प्रयोग गरेको आधार वर्ष कुन हो?",
      correct: "FY 2010/11 (2067/68 BS) / आ.व. २०१०/११",
      distractors: [
        "FY 2000/01 (2057/58 BS) / आ.व. २०००/०१",
        "FY 2015/16 (2072/73 BS) / आ.व. २०१५/१६",
        "FY 2020/21 (2077/78 BS) / आ.व. २०२०/२१"
      ],
      expEng: "The revised base year for national account statistics in Nepal is FY 2010/11.",
      expNep: "राष्ट्रिय लेखा गणनाको नयाँ आधार वर्ष आर्थिक वर्ष २०१०/११ (२०६७/६८) हो।"
    },
    {
      qEng: "According to recent economic indicators, what percentage of the total population lives below the absolute poverty line in Nepal?",
      qNep: "नेपाल जीवनस्तर सर्वेक्षण अनुसार नेपालमा निरपेक्ष गरिबीको रेखामुनि रहेको जनसङ्ख्या कति प्रतिशत रहेको छ?",
      correct: "20.27% / २०.२७ प्रतिशत",
      distractors: [
        "15.15% / १५.१५ प्रतिशत",
        "18.70% / १८.७० प्रतिशत",
        "25.16% / २५.१६ प्रतिशत"
      ],
      expEng: "Nepal Living Standards Survey IV (NLSS-IV) reported absolute poverty at 20.27%.",
      expNep: "नेपाल जीवनस्तर सर्वेक्षण चौथो अनुसार निरपेक्ष गरिबीको रेखामुनि रहेको जनसङ्ख्या २०.२७ प्रतिशत छ।"
    },
    {
      qEng: "Which institution is constitutionally and legally designated as the sole official agency for compiling and releasing official statistics in Nepal?",
      qNep: "तथ्याङ्क ऐन २०७९ अनुसार नेपालमा आधिकारिक तथ्याङ्क सङ्कलन र प्रकाशन गर्ने केन्द्रीय निकाय कुन हो?",
      correct: "National Statistics Office / राष्ट्रिय तथ्याङ्क कार्यालय",
      distractors: [
        "National Planning Commission / राष्ट्रिय योजना आयोग",
        "Nepal Rastra Bank / नेपाल राष्ट्र बैंक",
        "Ministry of Finance / अर्थ मन्त्रालय"
      ],
      expEng: "National Statistics Office (NSO) under the Office of Prime Minister is the apex statistical body.",
      expNep: "तथ्याङ्क ऐन २०७९ अनुसार केन्द्रीय तथ्याङ्क विभागलाई 'राष्ट्रिय तथ्याङ्क कार्यालय' बनाइएको हो।"
    }
  ];

  const idx = (setId - 1) % indicatorsData.length;
  return indicatorsData[idx];
}

// Slot 12: Periodic Plans - 16th Plan (२०८१/८२ - २०८५/८६) (Topic 3.2)
export function getEconomySlot12(setId: number): MasterBilingualItem {
  const planData = [
    {
      qEng: "What is the overarching main theme (सोच) of the 16th Periodic Plan (FY 2081/82 - 2085/86) of Nepal?",
      qNep: "नेपालको १६ औँ आवधिक योजना (आ.व. २०८१/८२ - २०८५/८६) को मुख्य सोच के रहेको छ?",
      correct: "सुशासन, सामाजिक न्याय र समृद्धि / Good Governance, Social Justice and Prosperity",
      distractors: [
        "समृद्ध नेपाल, सुखी नेपाली / Prosperous Nepal, Happy Nepali",
        "दिगो आर्थिक विकास र समावेशी समाज / Sustainable Economic Development",
        "उत्पादन र रोजगारी अभिवृद्धि / Production and Employment Growth"
      ],
      expEng: "The vision of the 16th Periodic Plan is 'Good Governance, Social Justice and Prosperity'.",
      expNep: "१६ औँ योजनाको मुख्य सोच 'सुशासन, सामाजिक न्याय र समृद्धि' रहेको छ।"
    },
    {
      qEng: "What is the targeted average annual economic growth rate set for the end of the 16th Periodic Plan?",
      qNep: "१६ औँ आवधिक योजनाको अन्त्य (आ.व. २०८५/८६) सम्ममा हासिल गर्ने लक्ष्य राखिएको वार्षिक औसत आर्थिक वृद्धिदर कति हो?",
      correct: "7.1% / ७.१ प्रतिशत",
      distractors: [
        "6.5% / ६.५ प्रतिशत",
        "8.0% / ८.० प्रतिशत",
        "9.2% / ९.२ प्रतिशत"
      ],
      expEng: "The 16th plan targets an average economic growth rate of 7.1% by FY 2085/86.",
      expNep: "१६ औँ योजनाले योजना अवधिको अन्त्यसम्ममा औसत ७.१ प्रतिशतको आर्थिक वृद्धिदरको लक्ष्य राखेको छ।"
    },
    {
      qEng: "What is the target set for reducing absolute poverty by the end of the 16th Periodic Plan?",
      qNep: "१६ औँ आवधिक योजनाको अन्त्यसम्ममा निरपेक्ष गरिबीलाई कति प्रतिशतमा झार्ने लक्ष्य लिइएको छ?",
      correct: "12.0% / १२.० प्रतिशत",
      distractors: [
        "10.5% / १०.५ प्रतिशत",
        "14.0% / १४.० प्रतिशत",
        "9.5% / ९.५ प्रतिशत"
      ],
      expEng: "The 16th plan targets to bring absolute poverty down to 12% by FY 2085/86.",
      expNep: "१६ औँ योजनाले निरपेक्ष गरिबीलाई १२ प्रतिशतमा झार्ने लक्ष्य लिएको छ।"
    },
    {
      qEng: "When did the implementation of the First Periodic Five-Year Plan officially commence in Nepal?",
      qNep: "नेपालमा प्रथम पञ्चवर्षीय आवधिक योजनाको कार्यान्वयन कहिलेदेखि सुरु भएको थियो?",
      correct: "2013 BS / वि.सं. २०१३",
      distractors: [
        "2007 BS / वि.सं. २००७",
        "2010 BS / वि.सं. २०१०",
        "2017 BS / वि.सं. २०१७"
      ],
      expEng: "The First Five-Year Plan was implemented from 2013 BS (1956 AD) under Prime Minister Tanka Prasad Acharya.",
      expNep: "नेपालमा योजनाबद्ध विकासको थालनी वि.सं. २०१३ असोज १ गतेदेखि भएको थियो।"
    },
    {
      qEng: "How many periodic plans in Nepal's history were Three-Year (त्रिवर्षीय) interim plans?",
      qNep: "नेपालको योजनाबद्ध विकासको इतिहासमा हालसम्म कतिवटा त्रिवर्षीय योजनाहरू कार्यान्वयन भएका छन्?",
      correct: "6 Plans / ६ वटा योजनाहरू",
      distractors: [
        "4 Plans / ४ वटा योजनाहरू",
        "5 Plans / ५ वटा योजनाहरू",
        "7 Plans / ७ वटा योजनाहरू"
      ],
      expEng: "Nepal has executed 6 Three-Year plans (Second, Eleventh, Twelfth, Thirteenth, Fourteenth, and Fifteenth was 5-year).",
      expNep: "नेपालमा दोस्रो, एघारौँ, बाह्रौँ, तेह्रौँ, चौधौँ योजनाहरू त्रिवर्षीय योजनाका रूपमा लागू भएका हुन्।"
    }
  ];

  const idx = (setId - 1) % planData.length;
  return planData[idx];
}

// Slot 13: Agriculture, Industry, Trade, Tourism & Energy (Topic 3.3)
export function getEconomySlot13(setId: number): MasterBilingualItem {
  const tradeData = [
    {
      qEng: "With which country does Nepal have the largest bilateral trade volume and largest trade deficit?",
      qNep: "नेपालको सबैभन्दा ठूलो वैदेशिक व्यापार हिस्सा र सबैभन्दा धेरै व्यापार घाटा कुन देशसँग रहेको छ?",
      correct: "India / भारत",
      distractors: [
        "China / चीन",
        "United States / संयुक्त राज्य अमेरिका",
        "United Arab Emirates / संयुक्त अरब इमिरेट्स"
      ],
      expEng: "India accounts for more than 60% of Nepal's total international trade.",
      expNep: "नेपालको कुल वैदेशिक व्यापारको ६० प्रतिशतभन्दा बढी हिस्सा भारतसँग रहेको छ।"
    },
    {
      qEng: "What is the total installed electricity generation capacity in Nepal according to the latest Economic Survey?",
      qNep: "आर्थिक सर्वेक्षण अनुसार नेपालको कुल जडित विद्युत् उत्पादन क्षमता कति मेगावाट पुगेको छ?",
      correct: "3,100 MW / ३,१०० मेगावाट",
      distractors: [
        "2,200 MW / २,२०० मेगावाट",
        "2,600 MW / २,६०० मेगावाट",
        "3,500 MW / ३,५०० मेगावाट"
      ],
      expEng: "The installed generation capacity has exceeded 3,100 MW.",
      expNep: "नेपालमा कुल जडित विद्युत् उत्पादन क्षमता ३,१०० मेगावाट नाघेको छ।"
    },
    {
      qEng: "Which crop is recognized as the leading food grain crop of Nepal in terms of production volume and cultivated area?",
      qNep: "उत्पादन र क्षेत्रफलको आधारमा नेपालको प्रमुख मुख्य खाद्यान्न बाली कुन हो?",
      correct: "Paddy / धान",
      distractors: [
        "Maize / मकै",
        "Wheat / गहुँ",
        "Millet / कोदो"
      ],
      expEng: "Paddy is Nepal's primary agricultural crop, followed by maize and wheat.",
      expNep: "नेपालमा सबैभन्दा बढी क्षेत्रफलमा लगाइने र उत्पादन हुने मुख्य खाद्यान्न बाली धान हो।"
    },
    {
      qEng: "What is the standard VAT (Value Added Tax) rate applicable in Nepal according to the Value Added Tax Act 2052?",
      qNep: "मूल्य अभिवृद्धि कर ऐन २०५२ बमोजिम नेपालमा हाल लागू रहेको मूल्य अभिवृद्धि कर (VAT) को एकल दर कति हो?",
      correct: "13% / १३ प्रतिशत",
      distractors: [
        "10% / १० प्रतिशत",
        "15% / १५ प्रतिशत",
        "12% / १२ प्रतिशत"
      ],
      expEng: "Value Added Tax in Nepal is levied at a single uniform rate of 13%.",
      expNep: "नेपालमा मूल्य अभिवृद्धि करको एकल दर १३ प्रतिशत कायम गरिएको छ।"
    },
    {
      qEng: "On which date did the Value Added Tax (VAT) system officially come into implementation in Nepal?",
      qNep: "नेपालमा मूल्य अभिवृद्धि कर (VAT) प्रणाली कहिलेदेखि औपचारिक रूपमा लागू भएको हो?",
      correct: "2054 Mangsir 1 BS / २०५४ मङ्सिर १",
      distractors: [
        "2052 Baishakh 1 BS / २०५२ वैशाख १",
        "2055 Shrawan 1 BS / २०५५ साउन १",
        "2053 Chaitra 1 BS / २०५३ चैत १"
      ],
      expEng: "VAT was introduced in Nepal on November 16, 1997 (2054 Mangsir 1 BS).",
      expNep: "वि.सं. २०५४ मङ्सिर १ गतेदेखि नेपालमा मूल्य अभिवृद्धि कर औपचारिक रूपमा लागू भएको हो।"
    }
  ];

  const idx = (setId - 1) % tradeData.length;
  return tradeData[idx];
}

// Slot 14: Nepal Rastra Bank, Monetary Policy & BFIs (Topic 3.4)
export function getEconomySlot14(setId: number): MasterBilingualItem {
  const nrbData = [
    {
      qEng: "According to the NRB Act 2058, what is the tenure of the Governor of Nepal Rastra Bank?",
      qNep: "नेपाल राष्ट्र बैंक ऐन २०५८ अनुसार नेपाल राष्ट्र बैंकको गभर्नरको पदावधि कति वर्षको हुन्छ?",
      correct: "5 Years / ५ वर्ष",
      distractors: [
        "4 Years / ४ वर्ष",
        "6 Years / ६ वर्ष",
        "3 Years / ३ वर्ष"
      ],
      expEng: "Under Section 15 of NRB Act 2058, the Governor's term of office is 5 years.",
      expNep: "नेपाल राष्ट्र बैंक ऐन २०५८ को दफा १५ अनुसार गभर्नरको पदावधि ५ वर्षको हुनेछ।"
    },
    {
      qEng: "What is the statutory minimum Cash Reserve Ratio (CRR) mandated by Nepal Rastra Bank for Commercial Banks (Class A)?",
      qNep: "नेपाल राष्ट्र बैंकको मौद्रिक नीति अनुसार वाणिज्य बैंक (क वर्ग) हरूले कायम गर्नुपर्ने अनिवार्य नगद मौज्दात (CRR) कति प्रतिशत हो?",
      correct: "4.0% / ४.० प्रतिशत",
      distractors: [
        "3.0% / ३.० प्रतिशत",
        "4.5% / ४.५ प्रतिशत",
        "5.0% / ५.० प्रतिशत"
      ],
      expEng: "The statutory CRR for Class A commercial banks is maintained at 4.0%.",
      expNep: "वाणिज्य बैंकहरूको लागि अनिवार्य नगद अनुपात (CRR) ४.० प्रतिशत तोकिएको छ।"
    },
    {
      qEng: "What is the minimum Statutory Liquidity Ratio (SLR) required for Commercial Banks (Class A) in Nepal?",
      qNep: "नेपाल राष्ट्र बैंकको निर्देशन अनुसार वाणिज्य बैंकहरूले कायम गर्नुपर्ने वैधानिक तरलता अनुपात (SLR) कति प्रतिशत हो?",
      correct: "12% / १२ प्रतिशत",
      distractors: [
        "10% / १० प्रतिशत",
        "11% / ११ प्रतिशत",
        "13% / १३ प्रतिशत"
      ],
      expEng: "SLR is 12% for Class A commercial banks, and 10% for Class B & C institutions.",
      expNep: "वाणिज्य बैंकहरूले १२ प्रतिशत र विकास बैंक तथा वित्त कम्पनीहरूले १० प्रतिशत SLR कायम गर्नुपर्दछ।"
    },
    {
      qEng: "What is the minimum paid-up capital required to establish a National Level Commercial Bank (Class A) in Nepal?",
      qNep: "नेपालमा राष्ट्रिय स्तरको वाणिज्य बैंक (क वर्ग) स्थापना गर्न आवश्यक न्यूनतम चुक्ता पूँजी कति हो?",
      correct: "Rs. 8 Billion / ८ अर्ब रुपैयाँ",
      distractors: [
        "Rs. 2.5 Billion / २.५ अर्ब रुपैयाँ",
        "Rs. 5 Billion / ५ अर्ब रुपैयाँ",
        "Rs. 10 Billion / १० अर्ब रुपैयाँ"
      ],
      expEng: "Class A commercial banks must have a minimum paid-up capital of Rs. 8 billion.",
      expNep: "क वर्गको वाणिज्य बैंकका लागि न्यूनतम चुक्ता पूँजी ८ अर्ब रुपैयाँ तोकिएको छ।"
    },
    {
      qEng: "In which year was Nepal Rastra Bank established as the central bank of Nepal?",
      qNep: "नेपालको केन्द्रीय बैंकको रूपमा नेपाल राष्ट्र बैंकको स्थापना कुन वर्ष भएको थियो?",
      correct: "2013 BS / वि.सं. २०१३",
      distractors: [
        "2011 BS / वि.सं. २०११",
        "2012 BS / वि.सं. २०१२",
        "2014 BS / वि.सं. २०१४"
      ],
      expEng: "Nepal Rastra Bank was established on 2013 Baishakh 14 BS (April 26, 1956 AD).",
      expNep: "नेपाल राष्ट्र बैंक ऐन २०१२ अन्तर्गत वि.सं. २०१३ वैशाख १४ मा राष्ट्र बैंक स्थापना भयो।"
    }
  ];

  const idx = (setId - 1) % nrbData.length;
  return nrbData[idx];
}

// Slot 15: Government Budget, Fiscal Policy & Debt (Topic 3.5)
export function getEconomySlot15(setId: number): MasterBilingualItem {
  const budgetData = [
    {
      qEng: "According to the Constitution of Nepal, on which date must the Government of Nepal present the annual federal budget to the Federal Parliament?",
      qNep: "नेपालको संविधान अनुसार अर्थमन्त्रीले प्रत्येक वर्ष कुन मितिमा संघीय संसद्मा वार्षिक बजेट पेस गर्नुपर्ने संवैधानिक व्यवस्था छ?",
      correct: "Jestha 15 / जेठ १५ गते",
      distractors: [
        "Ashad 1 / असार १ गते",
        "Shrawan 1 / साउन १ गते",
        "Baishakh 1 / वैशाख १ गते"
      ],
      expEng: "Article 119(3) of the Constitution mandates budget presentation on Jestha 15 every year.",
      expNep: "नेपालको संविधानको धारा ११९ को उपधारा (३) बमोजिम जेठ १५ गते बजेट प्रस्तुत गर्नुपर्छ।"
    },
    {
      qEng: "Who presented the first national budget in the history of Nepal on 2008 Magh 21 BS?",
      qNep: "नेपालको इतिहासमा वि.सं. २००८ माघ २१ गते पहिलो राष्ट्रिय बजेट कसले प्रस्तुत गरेका थिए?",
      correct: "Subarna Shumsher Rana / सुवर्ण शमशेर राणा",
      distractors: [
        "Matrika Prasad Koirala / मातृका प्रसाद कोइराला",
        "B.P. Koirala / बी.पी. कोइराला",
        "Kirti Nidhi Bista / कीर्तिनिधि विष्ट"
      ],
      expEng: "Finance Minister Subarna Shumsher Rana presented Nepal's first national budget (Rs. 5.25 crore).",
      expNep: "नेपालको पहिलो बजेट २००८ माघ २१ मा अर्थमन्त्री सुवर्ण शमशेरले प्रस्तुत गरेका थिए।"
    },
    {
      qEng: "According to the Intergovernmental Fiscal Arrangement Act, on which date must the Provincial Governments present their annual budget?",
      qNep: "अन्तरसरकारी वित्त व्यवस्थापन ऐन २०७४ अनुसार प्रदेश सरकारहरूले प्रत्येक वर्ष कुन मितिमा बजेट पेस गर्नुपर्छ?",
      correct: "Ashad 1 / असार १ गते",
      distractors: [
        "Jestha 15 / जेठ १५ गते",
        "Ashad 10 / असार १० गते",
        "Shrawan 1 / साउन १ गते"
      ],
      expEng: "Provincial governments must present their budget on Ashad 1 every year.",
      expNep: "प्रदेश सरकारहरूले प्रत्येक वर्ष असार १ गते प्रदेश सभामा बजेट प्रस्तुत गर्नुपर्छ।"
    },
    {
      qEng: "According to the Intergovernmental Fiscal Arrangement Act, on which date must Local Levels present their annual budget?",
      qNep: "स्थानीय सरकार सञ्चालन ऐन २०७४ अनुसार स्थानीय तहहरूले प्रत्येक वर्ष कुन मितिमा बजेट पेस गर्नुपर्छ?",
      correct: "Ashad 10 / असार १० गते",
      distractors: [
        "Ashad 1 / असार १ गते",
        "Jestha 15 / जेठ १५ गते",
        "Shrawan 1 / साउन १ गते"
      ],
      expEng: "Local governments must present their budget before the municipal/village assembly by Ashad 10.",
      expNep: "स्थानीय तहहरूले प्रत्येक वर्ष असार १० गतेभित्र सभामा बजेट पेस गर्नुपर्छ।"
    },
    {
      qEng: "Which constitutional commission recommends the distribution of federal divisible funds and fiscal equalization grants among federation, provinces, and local levels?",
      qNep: "संघ, प्रदेश र स्थानीय तहबीच राजस्व बाँडफाँड र वित्तीय समानीकरण अनुदानको सिफारिस गर्ने संवैधानिक आयोग कुन हो?",
      correct: "National Natural Resources and Fiscal Commission / राष्ट्रिय प्राकृतिक स्रोत तथा वित्त आयोग",
      distractors: [
        "National Planning Commission / राष्ट्रिय योजना आयोग",
        "Public Service Commission / लोक सेवा आयोग",
        "Finance Committee of Parliament / संसद्को अर्थ समिति"
      ],
      expEng: "NNRFC (Part 26, Article 250-251 of Constitution) recommends revenue sharing.",
      expNep: "संविधानको धारा २५० बमोजिम गठित राष्ट्रिय प्राकृतिक स्रोत तथा वित्त आयोगले सिफारिस गर्दछ।"
    }
  ];

  const idx = (setId - 1) % budgetData.length;
  return budgetData[idx];
}

export function getEconomyQuestion(slot: number, setId: number): MasterBilingualItem {
  switch (slot) {
    case 11: return getEconomySlot11(setId);
    case 12: return getEconomySlot12(setId);
    case 13: return getEconomySlot13(setId);
    case 14: return getEconomySlot14(setId);
    case 15: return getEconomySlot15(setId);
    default: return getEconomySlot11(setId);
  }
}
