import { MasterBilingualItem } from './types';

// =========================================================================
// SECTION 9: गणितीय क्षमता (Topics 9.1 - 9.5) [5 MCQs]
// Slots 41 to 45 across 50 sets = 250 MCQs.
// Strict Option Uniformity: Identical length, format, detail, and structure.
// Authentic Lok Sewa Mathematical Questions with verified solutions.
// =========================================================================

// Slot 41: Unitary Method & Time and Work (Topic 9.1)
export function getMathsSlot41(setId: number): MasterBilingualItem {
  const workData = [
    {
      qEng: "A can complete a piece of work in 10 days and B can complete the same work in 15 days. In how many days can they complete the work working together?",
      qNep: "A ले कुनै काम १० दिनमा र B ले सोही काम १५ दिनमा गर्न सक्छ। दुवै जना मिलेर उक्त काम कति दिनमा सम्पन्न गर्न सक्छन्?",
      correct: "6 Days / ६ दिन",
      distractors: [
        "5 Days / ५ दिन",
        "8 Days / ८ दिन",
        "7 Days / ७ दिन"
      ],
      expEng: "1/A + 1/B = 1/10 + 1/15 = 5/30 = 1/6. Hence, 6 days.",
      expNep: "दुवै मिलेर १ दिनमा गर्ने काम = १/१० + १/१५ = ५/३० = १/६। अतः पूरा काम गर्न ६ दिन लाग्छ।"
    },
    {
      qEng: "If 12 men can construct a wall in 8 days, how many days will 16 men take to construct the same wall?",
      qNep: "यदि १२ जना मानिसले एउटा पर्खाल ८ दिनमा बनाउन सक्छन् भने सोही पर्खाल बनाउन १६ जना मानिसलाई कति दिन लाग्ला?",
      correct: "6 Days / ६ दिन",
      distractors: [
        "4 Days / ४ दिन",
        "5 Days / ५ दिन",
        "7 Days / ७ दिन"
      ],
      expEng: "M1 * D1 = M2 * D2 => 12 * 8 = 16 * D2 => D2 = 96 / 16 = 6 days.",
      expNep: "M1 × D1 = M2 × D2 सूत्रबाट: १२ × ८ = १६ × D2 => D2 = ९६ / १६ = ६ दिन।"
    },
    {
      qEng: "A can finish a task in 12 days and B can finish it in 24 days. Working together, how many days will they take?",
      qNep: "A ले कुनै काम १२ दिनमा र B ले २४ दिनमा पूरा गर्न सक्छ। दुवै मिलेर काम गर्दा कति दिन लाग्ला?",
      correct: "8 Days / ८ दिन",
      distractors: [
        "6 Days / ६ दिन",
        "9 Days / ९ दिन",
        "10 Days / १० दिन"
      ],
      expEng: "1/12 + 1/24 = 3/24 = 1/8. Together they need 8 days.",
      expNep: "१/१२ + १/२४ = ३/२४ = १/८। अतः दुवै मिलेर गर्दा ८ दिन लाग्छ।"
    },
    {
      qEng: "If 15 workers can build a road in 20 days, how many workers are needed to complete it in 12 days?",
      qNep: "यदि १५ जना कामदारले २० दिनमा एउटा बाटो बनाउन सक्छन् भने सो बाटो १२ दिनमा सक्न कति जना कामदार चाहिन्छन्?",
      correct: "25 Workers / २५ जना",
      distractors: [
        "20 Workers / २० जना",
        "30 Workers / ३० जना",
        "22 Workers / २२ जना"
      ],
      expEng: "M1 * D1 = M2 * D2 => 15 * 20 = M2 * 12 => M2 = 300 / 12 = 25 workers.",
      expNep: "१५ × २० = M2 × १२ => M2 = ३०० / १२ = २५ जना कामदार।"
    },
    {
      qEng: "Pipe A fills a cistern in 6 hours and Pipe B empties it in 9 hours. If both pipes are opened together, in how many hours will the cistern be full?",
      qNep: "धारा A ले एउटा ट्याङ्की ६ घण्टामा भर्न सक्छ र धारा B ले ९ घण्टामा खाली गर्न सक्छ। दुवै धारा एकैपटक खोल्दा ट्याङ्की कति घण्टामा भरिएला?",
      correct: "18 Hours / १८ घण्टा",
      distractors: [
        "12 Hours / १२ घण्टा",
        "15 Hours / १५ घण्टा",
        "24 Hours / २४ घण्टा"
      ],
      expEng: "1/6 - 1/9 = (3 - 2)/18 = 1/18. Therefore, 18 hours.",
      expNep: "१ घण्टामा भरिने भाग = १/६ - १/९ = १/१८। अतः पूरै ट्याङ्की भरिन १८ घण्टा लाग्छ।"
    }
  ];

  const idx = (setId - 1) % workData.length;
  return workData[idx];
}

// Slot 42: Simple & Compound Interest (Topic 9.2)
export function getMathsSlot42(setId: number): MasterBilingualItem {
  const interestData = [
    {
      qEng: "What is the Simple Interest on a principal of Rs. 10,000 at an annual interest rate of 10% for 3 years?",
      qNep: "रु. १०,००० को वार्षिक १० प्रतिशतका दरले ३ वर्षको साधारण ब्याज कति हुन्छ?",
      correct: "Rs. 3,000 / रु. ३,०००",
      distractors: [
        "Rs. 2,500 / रु. २,५००",
        "Rs. 3,310 / रु. ३,३१०",
        "Rs. 2,000 / रु. २,०००"
      ],
      expEng: "SI = (P * T * R) / 100 = (10,000 * 3 * 10) / 100 = Rs. 3,000.",
      expNep: "साधारण ब्याज = (१०,००० × ३ × १०) / १०० = रु. ३,०००।"
    },
    {
      qEng: "What is the Compound Interest on Rs. 8,000 at 10% per annum compounded annually for 2 years?",
      qNep: "रु. ८,००० को वार्षिक १० प्रतिशतका दरले २ वर्षको चक्रीय ब्याज कति हुन्छ?",
      correct: "Rs. 1,680 / रु. १,६८०",
      distractors: [
        "Rs. 1,600 / रु. १,६००",
        "Rs. 1,720 / रु. १,७२०",
        "Rs. 1,800 / रु. १,८००"
      ],
      expEng: "CI = P[(1 + R/100)^T - 1] = 8,000[(1.1)^2 - 1] = 8,000 * 0.21 = Rs. 1,680.",
      expNep: "चक्रीय ब्याज = ८,००० × [(१.१)^२ - १] = ८,००० × ०.२१ = रु. १,६८०।"
    },
    {
      qEng: "In how many years will a sum of money double itself at 10% per annum simple interest?",
      qNep: "वार्षिक १० प्रतिशत साधारण ब्याजदरमा कुनै रकम कति वर्षमा दोब्बर हुन्छ?",
      correct: "10 Years / १० वर्ष",
      distractors: [
        "8 Years / ८ वर्ष",
        "12 Years / १२ वर्ष",
        "15 Years / १५ वर्ष"
      ],
      expEng: "T = (100 * (n - 1)) / R = (100 * 1) / 10 = 10 years.",
      expNep: "समय (T) = १०० / ब्याजदर = १०० / १० = १० वर्ष।"
    },
    {
      qEng: "What is the difference between Compound Interest and Simple Interest on Rs. 5,000 for 2 years at 10% per annum?",
      qNep: "रु. ५,००० को वार्षिक १० प्रतिशतका दरले २ वर्षको चक्रीय ब्याज र साधारण ब्याजको अन्तर कति हुन्छ?",
      correct: "Rs. 50 / रु. ५०",
      distractors: [
        "Rs. 40 / रु. ४०",
        "Rs. 60 / रु. ६०",
        "Rs. 100 / रु. १००"
      ],
      expEng: "Difference for 2 years = P * (R/100)^2 = 5,000 * (10/100)^2 = 5,000 * 0.01 = Rs. 50.",
      expNep: "२ वर्षको अन्तर = P × (R/१००)^२ = ५,००० × (१०/१००)^२ = रु. ५०।"
    },
    {
      qEng: "At what annual rate of simple interest will Rs. 4,000 yield an interest of Rs. 800 in 2 years?",
      qNep: "वार्षिक कति प्रतिशत साधारण ब्याजदरले रु. ४,००० को २ वर्षमा रु. ८०० ब्याज आउँछ?",
      correct: "10% / १० प्रतिशत",
      distractors: [
        "8% / ८ प्रतिशत",
        "12% / १२ प्रतिशत",
        "15% / १५ प्रतिशत"
      ],
      expEng: "R = (SI * 100) / (P * T) = (800 * 100) / (4,000 * 2) = 80,000 / 8,000 = 10%.",
      expNep: "ब्याजदर (R) = (ब्याज × १००) / (साँवा × समय) = (८०० × १००) / (४,००० × २) = १० प्रतिशत।"
    }
  ];

  const idx = (setId - 1) % interestData.length;
  return interestData[idx];
}

// Slot 43: Percentage, Profit & Loss, Discount (Topic 9.3)
export function getMathsSlot43(setId: number): MasterBilingualItem {
  const plData = [
    {
      qEng: "An article bought for Rs. 500 is sold for Rs. 600. What is the profit percentage?",
      qNep: "रु. ५०० मा किनेको सामान रु. ६०० मा बेच्दा कति प्रतिशत नाफा हुन्छ?",
      correct: "20% / २० प्रतिशत",
      distractors: [
        "15% / १५ प्रतिशत",
        "25% / २५ प्रतिशत",
        "18% / १८ प्रतिशत"
      ],
      expEng: "Profit = 600 - 500 = 100. Profit% = (100 / 500) * 100% = 20%.",
      expNep: "नाफा = ६०० - ५०० = १००। नाफा प्रतिशत = (१०० / ५००) × १०० = २० प्रतिशत।"
    },
    {
      qEng: "A shopkeeper allows a discount of 10% on the marked price of Rs. 1,000. What is the selling price?",
      qNep: "रु. १,००० अङ्कित मूल्य भएको सामानमा १० प्रतिशत छुट दिँदा बिक्री मूल्य कति हुन्छ?",
      correct: "Rs. 900 / रु. ९००",
      distractors: [
        "Rs. 850 / रु. ८५०",
        "Rs. 950 / रु. ९५०",
        "Rs. 800 / रु. ८००"
      ],
      expEng: "SP = MP - Discount = 1,000 - 100 = Rs. 900.",
      expNep: "बिक्री मूल्य = १,००० - (१,००० को १०%) = रु. ९००।"
    },
    {
      qEng: "If an article is sold at a loss of 20% for Rs. 400, what was its cost price?",
      qNep: "२० प्रतिशत नोक्सानमा कुनै सामान रु. ४०० मा बिक्री गर्दा उक्त सामानको क्रय मूल्य कति थियो?",
      correct: "Rs. 500 / रु. ५००",
      distractors: [
        "Rs. 480 / रु. ४८०",
        "Rs. 520 / रु. ५२०",
        "Rs. 600 / रु. ६००"
      ],
      expEng: "CP = SP / (1 - Loss%) = 400 / 0.8 = Rs. 500.",
      expNep: "क्रय मूल्य = (४०० × १००) / ८० = रु. ५००।"
    },
    {
      qEng: "What single discount is equivalent to two successive discounts of 20% and 10%?",
      qNep: "२० प्रतिशत र १० प्रतिशतका दुई क्रमिक छुटहरू बराबरको एकल छुट कति प्रतिशत हुन्छ?",
      correct: "28% / २८ प्रतिशत",
      distractors: [
        "30% / ३० प्रतिशत",
        "25% / २५ प्रतिशत",
        "26% / २६ प्रतिशत"
      ],
      expEng: "Equivalent Discount = d1 + d2 - (d1 * d2)/100 = 20 + 10 - 2 = 28%.",
      expNep: "एकल छुट = २० + १० - (२० × १०)/१०० = ३० - २ = २८ प्रतिशत।"
    },
    {
      qEng: "If 20% of a number is 80, what is 30% of that number?",
      qNep: "यदि कुनै संख्याको २० प्रतिशत ८० हुन्छ भने सो संख्याको ३० प्रतिशत कति होला?",
      correct: "120 / १२०",
      distractors: [
        "100 / १००",
        "140 / १४०",
        "160 / १६०"
      ],
      expEng: "Number = 80 / 0.2 = 400. 30% of 400 = 120.",
      expNep: "संख्या = ८० / ०.२ = ४००। ४०० को ३० प्रतिशत = १२०।"
    }
  ];

  const idx = (setId - 1) % plData.length;
  return plData[idx];
}

// Slot 44: Ratio, Proportion & Average (Topic 9.4)
export function getMathsSlot44(setId: number): MasterBilingualItem {
  const ratioData = [
    {
      qEng: "The ratio of two numbers is 3:5 and their sum is 80. What is the smaller number?",
      qNep: "दुई संख्याको अनुपात ३:५ छ र तिनीहरूको योगफल ८० छ भने सानो संख्या कुन हो?",
      correct: "30 / ३०",
      distractors: [
        "25 / २५",
        "35 / ३५",
        "50 / ५०"
      ],
      expEng: "3x + 5x = 80 => 8x = 80 => x = 10. Smaller number = 3 * 10 = 30.",
      expNep: "३x + ५x = ८० => ८x = ८० => x = १०। सानो संख्या = ३ × १० = ३०।"
    },
    {
      qEng: "The average of 5 consecutive odd numbers is 25. What is the smallest of these numbers?",
      qNep: "५ वटा क्रमागत बिजोर संख्याहरूको औसत २५ छ भने तीमध्ये सबैभन्दा सानो संख्या कुन हो?",
      correct: "21 / २१",
      distractors: [
        "19 / १९",
        "23 / २३",
        "25 / २५"
      ],
      expEng: "The numbers are 21, 23, 25, 27, 29. The smallest is 21.",
      expNep: "औसत २५ भएकाले संख्याहरू २१, २३, २५, २७ र २९ हुन्। सानो संख्या २१ हो।"
    },
    {
      qEng: "If A:B = 2:3 and B:C = 4:5, what is the combined ratio A:B:C?",
      qNep: "यदि A:B = २:३ र B:C = ४:५ भए A:B:C को मान कति हुन्छ?",
      correct: "8:12:15 / ८:१२:१५",
      distractors: [
        "6:9:15 / ६:९:१५",
        "8:10:15 / ८:१०:१५",
        "2:7:5 / २:७:५"
      ],
      expEng: "A:B = 8:12, B:C = 12:15 => A:B:C = 8:12:15.",
      expNep: "A:B = ८:१२ र B:C = १२:१५ हुँदा A:B:C = ८:१२:१५ हुन्छ।"
    },
    {
      qEng: "The average age of a class of 20 students is 15 years. If the teacher's age is included, the average increases by 1 year. What is the teacher's age?",
      qNep: "२० जना विद्यार्थीको औसत उमेर १५ वर्ष छ। शिक्षकको उमेर थप्दा औसत १ वर्षले बढ्छ भने शिक्षकको उमेर कति हो?",
      correct: "36 Years / ३६ वर्ष",
      distractors: [
        "32 Years / ३२ वर्ष",
        "35 Years / ३५ वर्ष",
        "40 Years / ४० वर्ष"
      ],
      expEng: "Total without teacher = 20 * 15 = 300. With teacher = 21 * 16 = 336. Teacher = 336 - 300 = 36.",
      expNep: "विद्यार्थीको कुल = ३००। शिक्षकसहित = २१ × १६ = ३३६। शिक्षकको उमेर = ३३६ - ३०० = ३६ वर्ष।"
    },
    {
      qEng: "Rs. 1,200 is divided among A, B, and C in the ratio 2:3:5. What is the share of B?",
      qNep: "रु. १,२०० लाई A, B र C बीच २:३:५ को अनुपातमा बाँड्दा B को भागमा कति पर्छ?",
      correct: "Rs. 360 / रु. ३६०",
      distractors: [
        "Rs. 240 / रु. २४०",
        "Rs. 400 / रु. ४००",
        "Rs. 600 / रु. ६००"
      ],
      expEng: "Total parts = 2 + 3 + 5 = 10. B's share = (3/10) * 1,200 = Rs. 360.",
      expNep: "कुल भाग = १०। B को भाग = (३ / १०) × १,२०० = रु. ३६०।"
    }
  ];

  const idx = (setId - 1) % ratioData.length;
  return ratioData[idx];
}

// Slot 45: Mensuration: Area, Perimeter & Volume (Topic 9.5)
export function getMathsSlot45(setId: number): MasterBilingualItem {
  const mensurationData = [
    {
      qEng: "What is the area of a rectangle whose length is 15 meters and breadth is 10 meters?",
      qNep: "लम्बाइ १५ मिटर र चौडाइ १० मिटर भएको आयताकार कोठाको क्षेत्रफल कति हुन्छ?",
      correct: "150 sq. m / १५० वर्ग मिटर",
      distractors: [
        "50 sq. m / ५० वर्ग मिटर",
        "100 sq. m / १०० वर्ग मिटर",
        "200 sq. m / २०० वर्ग मिटर"
      ],
      expEng: "Area = Length * Breadth = 15 * 10 = 150 sq. meters.",
      expNep: "क्षेत्रफल = लम्बाइ × चौडाइ = १५ × १० = १५० वर्ग मिटर।"
    },
    {
      qEng: "What is the perimeter of a square whose area is 64 square centimeters?",
      qNep: "६४ वर्ग सेन्टिमिटर क्षेत्रफल भएको वर्गको परिमिति कति हुन्छ?",
      correct: "32 cm / ३२ से.मी.",
      distractors: [
        "24 cm / २४ से.मी.",
        "28 cm / २८ से.मी.",
        "36 cm / ३६ से.मी."
      ],
      expEng: "Side = sqrt(64) = 8 cm. Perimeter = 4 * 8 = 32 cm.",
      expNep: "भुजा = √६४ = ८ से.मी.। परिमिति = ४ × ८ = ३२ से.मी.।"
    },
    {
      qEng: "What is the volume of a cube having a side length of 5 centimeters?",
      qNep: "५ सेन्टिमिटर भुजा भएको घन (Cube) को आयतन कति हुन्छ?",
      correct: "125 cu. cm / १२५ घन से.मी.",
      distractors: [
        "100 cu. cm / १०० घन से.मी.",
        "150 cu. cm / १५० घन से.मी.",
        "75 cu. cm / ७५ घन से.मी."
      ],
      expEng: "Volume of cube = a^3 = 5 * 5 * 5 = 125 cu. cm.",
      expNep: "आयतन = भुजा^३ = ५ × ५ × ५ = १२५ घन से.मी.।"
    },
    {
      qEng: "What is the circumference of a circle with a radius of 7 cm? (Take pi = 22/7)",
      qNep: "७ सेन्टिमिटर अर्धव्यास भएको वृत्तको परिधि कति हुन्छ?",
      correct: "44 cm / ४४ से.मी.",
      distractors: [
        "22 cm / २२ से.मी.",
        "88 cm / ८८ से.मी.",
        "154 cm / १५४ से.मी."
      ],
      expEng: "Circumference = 2 * pi * r = 2 * (22/7) * 7 = 44 cm.",
      expNep: "वृत्तको परिधि = २ × π × r = २ × (२२/७) × ७ = ४४ से.मी.।"
    },
    {
      qEng: "What is the area of a right-angled triangle with base 12 cm and height 5 cm?",
      qNep: "आधार १२ सेन्टिमिटर र उचाइ ५ सेन्टिमिटर भएको समकोणी त्रिभुजको क्षेत्रफल कति हुन्छ?",
      correct: "30 sq. cm / ३० वर्ग से.मी.",
      distractors: [
        "25 sq. cm / २५ वर्ग से.मी.",
        "35 sq. cm / ३५ वर्ग से.मी.",
        "60 sq. cm / ६० वर्ग से.मी."
      ],
      expEng: "Area = (1/2) * Base * Height = (1/2) * 12 * 5 = 30 sq. cm.",
      expNep: "त्रिभुजको क्षेत्रफल = (१/२) × आधार × उचाइ = (१/२) × १२ × ५ = ३० वर्ग से.मी.।"
    }
  ];

  const idx = (setId - 1) % mensurationData.length;
  return mensurationData[idx];
}

export function getMathsQuestion(slot: number, setId: number): MasterBilingualItem {
  switch (slot) {
    case 41: return getMathsSlot41(setId);
    case 42: return getMathsSlot42(setId);
    case 43: return getMathsSlot43(setId);
    case 44: return getMathsSlot44(setId);
    case 45: return getMathsSlot45(setId);
    default: return getMathsSlot41(setId);
  }
}
