import { StudyNote } from '../types';
import { COMPREHENSIVE_EXAM_NOTES } from './comprehensiveExamNotes';

export const BILINGUAL_STUDY_NOTES: StudyNote[] = [
  // 1. NRB ACT 2058 COMPREHENSIVE NOTE
  {
    id: 'nrb-act-2058-comprehensive',
    title: 'नेपाल राष्ट्र बैंक ऐन, २०५८ (Nepal Rastra Bank Act, 2058) - विस्तृत अध्ययन नोट',
    subject: 'Banking',
    category: 'NRB',
    readTime: '18 min read',
    sections: [
      {
        heading: '१. पृष्ठभूमि र ऐनको प्रस्तावना (Background & Preamble)',
        content: `नेपाल राष्ट्र बैंक ऐन, २०५८ वि.सं. २०५८ माघ १७ गते (30 January 2002) मा लालमोहर लागि लागू भएको हो। यस ऐनले केन्द्रीय बैंकलाई स्वायत्त (Autonomous), अविच्छिन्न उत्तराधिकारवाला र स्वशासित संस्थाको रूपमा स्थापित गरेको छ। 

[English Summary]:
The Nepal Rastra Bank Act, 2058 (2002) was enacted to establish an autonomous, accountable, and independent central bank to regulate and develop the monetary and financial system of Nepal.`,
        bulletPoints: [
          'नेपाल राष्ट्र बैंकको स्थापना: वि.सं. २०१३ वैशाख १४ (April 26, 1956) नेपाल राष्ट्र बैंक ऐन २०१२ अन्तर्गत।',
          'वर्तमान ऐन: नेपाल राष्ट्र बैंक ऐन, २०५८ (दोस्रो संशोधन २०७३ सहित)।',
          'प्रकृति: अविच्छिन्न उत्तराधिकारवाला, स्वशासित र संगठित संस्था (Autonomous body with perpetual succession).'
        ]
      },
      {
        heading: '२. बैंकका प्रमुख उद्देश्यहरू - दफा ४ (Objectives of NRB - Section 4)',
        content: `नेपाल राष्ट्र बैंक ऐन, २०५८ को दफा ४ मा केन्द्रीय बैंकका तीनवटा मुख्य उद्देश्यहरू तोकिएका छन्:

१. आर्थिक स्थायित्व र दिगो आर्थिक विकास: समष्टिगत आर्थिक स्थायित्व (Macroeconomic Stability) कायम राख्न मूल्य स्थिरता (Price Stability) र शोधनान्तर स्थिरता (Balance of Payments Stability) हासिल गर्न आवश्यक मौद्रिक तथा विदेशी विनिमय नीति तर्जुमा गरी व्यवस्थापन गर्ने।
२. वित्तीय क्षेत्रको स्थायित्व: वित्तीय क्षेत्रको स्थायित्व (Financial Sector Stability) प्रवर्द्धन गर्ने र बैंकिङ तथा वित्तीय प्रणालीप्रति सर्वसाधारणको विश्वसनीयता अभिवृद्धि गर्ने।
३. सुरक्षित भुक्तानी प्रणाली: सुरक्षित, स्वस्थ तथा सक्षम भुक्तानी प्रणाली (Safe, Sound & Efficient Payment System) को विकास र प्रवर्द्धन गर्ने।`,
        bulletPoints: [
          'Objective 1: Price and Balance of Payments stability for sustainable economic growth.',
          'Objective 2: Financial sector stability and public confidence in the banking system.',
          'Objective 3: Developing a secure and modern national payment and settlement architecture.'
        ]
      },
      {
        heading: '३. बैंकका काम, कर्तव्य र अधिकार - दफा ५ (Functions, Duties & Powers - Section 5)',
        content: `दफा ५ बमोजिम बैंकलाई तोकिएका प्रमुख कार्यहरू:

१. बैंक नोट तथा सिक्का निष्कासन गर्ने एकाधिकार (Monopoly of issuing currency notes and coins - दफा ४३)।
२. मूल्य स्थिरता कायम गर्न आवश्यक मौद्रिक नीति तर्जुमा गर्ने र कार्यान्वयन गर्ने।
३. विदेशी विनिमय नीति निर्माण गर्ने र विदेशी मुद्रा सञ्चिति (Foreign Exchange Reserves) को व्यवस्थापन र सञ्चालन गर्ने।
४. वाणिज्य बैंक तथा वित्तीय संस्थालाई वित्तीय कारोबार गर्न इजाजतपत्र (License) जारी गर्ने, नियमन, निरीक्षण, सुपरिवेक्षण तथा अनुगमन गर्ने।
५. नेपाल सरकारको बैंकर, सल्लाहकार तथा वित्तीय एजेन्ट (Banker, Advisor & Financial Agent to GON) को रूपमा कार्य गर्ने।
६. वाणिज्य बैंक तथा वित्तीय संस्थाको बैंक तथा अन्तिम ऋणदाता (Lender of the Last Resort) को रूपमा कार्य गर्ने।
७. अन्तर्राष्ट्रिय वित्तीय संघसंस्था (IMF, World Bank) मा नेपालको प्रतिनिधित्व गर्ने।`,
        bulletPoints: [
          'Issuance of Currency: Sole authority to issue legal tender currency notes and coins in Nepal.',
          'Formulation & Implementation of Monetary Policy (मौद्रिक नीति तर्जुमा र कार्यान्वयन)।',
          'Regulator & Supervisor: Licensing, regulating, and inspecting commercial banks and financial institutions.',
          'Lender of Last Resort (अन्तिम ऋणदाता): Providing emergency liquidity support to distressed viable banks.'
        ]
      },
      {
        heading: '४. सञ्चालक समितिको गठन - दफा १४ (Board of Directors - Section 14)',
        content: `नेपाल राष्ट्र बैंकको सर्वोच्च नीति निर्माण निकाय ७ सदस्यीय सञ्चालक समिति हुन्छ:

१. गभर्नर (Governor) - अध्यक्ष (Chairman)
२. सचिव, अर्थ मन्त्रालय (Secretary, Ministry of Finance) - सदस्य (Member)
३. दुई जना डेपुटी गभर्नरहरू (Two Deputy Governors) - सदस्य (Members)
४. आर्थिक, मौद्रिक, बैंकिङ, वित्तीय तथा वाणिज्य कानुन क्षेत्रका लब्धप्रतिष्ठित विज्ञहरूमध्येबाट नेपाल सरकारले नियुक्त गरेका ३ जना व्यक्तिहरू - सदस्य (Members)

[पदावधि]: गभर्नर, डेपुटी गभर्नर र सञ्चालकहरूको पदावधि ५ वर्षको हुन्छ र पुनः एक कार्यकालका लागि नियुक्त हुन सक्छन्।`,
        bulletPoints: [
          'Total Board Members: 7 Members chaired by the Governor.',
          'Governor Appointment: Appointed by the Government of Nepal (Council of Ministers) on the recommendation of a 3-member committee headed by the Finance Minister (दफा १५)।',
          'Tenure: 5 years for Governor, Deputy Governors, and Directors (Renewable once for non-deputy members).'
        ]
      }
    ],
    comparisonTable: {
      title: 'नेपाल राष्ट्र बैंक ऐन २०१२ र ऐन २०५८ बीचको मुख्य भिन्नता (Comparative Analysis)',
      headers: ['आधार (Criteria)', 'ऐन २०१२ (Old Act 2012)', 'ऐन २०५८ (Current Act 2058)'],
      rows: [
        {
          attribute: 'स्वायत्तता (Autonomy)',
          traditional: 'सीमित स्वायत्तता, सरकारको प्रत्यक्ष निर्देशनमा चल्ने',
          reengineering: 'पूर्ण संस्थागत, वित्तीय र कार्यगत स्वायत्तता प्रदान'
        },
        {
          attribute: 'प्राथमिक उद्देश्य (Core Focus)',
          traditional: 'मुद्रा निष्कासन र सरकारको ऋण व्यवस्थापन',
          reengineering: 'मूल्य स्थिरता, बाह्य क्षेत्र स्थायित्व र वित्तीय प्रणालीको सुदृढीकरण'
        },
        {
          attribute: 'सुपरिवेक्षण अधिकार (Supervision)',
          traditional: 'सीमित कानुनी कारबाहीको अधिकार',
          reengineering: 'शीघ्र सुधारात्मक कारबाही (PCA) र समस्याग्रस्त घोषणा गर्ने अधिकार'
        }
      ]
    },
    examTip: 'लोकसेवा र बैंकिङ परीक्षामा दफा ४ (उद्देश्य) र दफा ५ (काम, कर्तव्य र अधिकार) बाट अनिवार्य रूपमा ५ वा १० अंकको प्रश्न सोधिन्छ। नेपाली र अंग्रेजी दुवै भाषामा मुख्य बुँदाहरू कण्ठस्थ राख्नुहोस्।'
  },

  // 2. BAFIA 2073 COMPREHENSIVE NOTE
  {
    id: 'bafia-2073-comprehensive',
    title: 'बैंक तथा वित्तीय संस्था सम्बन्धी ऐन, २०७३ (BAFIA 2073) - पूर्ण अध्ययन गाइड',
    subject: 'Banking',
    category: 'Banking',
    readTime: '16 min read',
    sections: [
      {
        heading: '१. परिचय र उद्देश्य (Introduction & Objectives)',
        content: `बैंक तथा वित्तीय संस्था सम्बन्धी ऐन, २०७३ (Bank and Financial Institutions Act, 2073) वि.सं. २०७४ वैशाख १० गते प्रमाणीकरण भई लागू भएको हो। यस ऐनले साबिकको BAFIA २०६३ लाई प्रतिस्थापन गरेको हो।

यसको मुख्य उद्देश्य बैंकिङ तथा वित्तीय प्रणालीप्रति सर्वसाधारणको विश्वसनीयता अभिवृद्धि गर्नु, निक्षेपकर्ताको हकहित संरक्षण गर्नु, स्वच्छ प्रतिस्पर्धा कायम गर्नु र राष्ट्रिय अर्थतन्त्रलाई गतिशील बनाउनु हो।

[English Summary]:
BAFIA 2073 governs the incorporation, licensing, corporate governance, capital adequacy, credit operations, and insolvency/merger of all Banks and Financial Institutions (BFIs) in Nepal.`,
        bulletPoints: [
          'प्रमाणीकरण मिति: वि.सं. २०७४ वैशाख १० (April 23, 2017)।',
          'निक्षेपकर्ताको हित संरक्षण (Protection of Depositors\' Interest) ऐनको प्रमुख प्राथमिकता हो।',
          'वाणिज्य बैंक, विकास बैंक, वित्त कम्पनी र लघुवित्त वित्तीय संस्थाहरूलाई एकीकृत कानुनी दायरामा ल्याएको छ।'
        ]
      },
      {
        heading: '२. वित्तीय संस्थाहरूको वर्गीकरण र चुक्ता पुँजी (Classification & Minimum Capital)',
        content: `BAFIA २०७३ को दफा ३७ अनुसार बैंक तथा वित्तीय संस्थालाई ४ वर्गमा विभाजन गरिएको छ:

१. "क" वर्ग (Class 'A'): वाणिज्य बैंक (Commercial Banks) - न्यूनतम चुक्ता पुँजी रु. ८ अर्ब (Rs. 8 Billion)।
२. "ख" वर्ग (Class 'B'): विकास बैंक (Development Banks) - राष्ट्रिय स्तरका लागि रु. २.५ अर्ब।
३. "ग" वर्ग (Class 'C'): वित्त कम्पनी (Finance Companies) - राष्ट्रिय स्तरका लागि रु. ८० करोड।
४. "घ" वर्ग (Class 'D'): लघुवित्त वित्तीय संस्था (Microfinance Institutions) - राष्ट्रिय स्तरका लागि रु. १० करोड।

[पूर्वाधार विकास बैंक (Infrastructure Development Bank - NIFRA)]: न्यूनतम चुक्ता पुँजी रु. २० अर्ब।`,
        bulletPoints: [
          'Class A: Commercial Banks (वाणिज्य बैंक) - Rs. 8 Arba minimum paid-up capital.',
          'Class B: Development Banks (विकास बैंक) - Rs. 2.5 Arba national level.',
          'Class C: Finance Companies (वित्त कम्पनी) - Rs. 80 Crore national level.',
          'Class D: Microfinance Financial Institutions (लघुवित्त) - Rs. 10 Crore.'
        ]
      },
      {
        heading: '३. बैंक तथा वित्तीय संस्थाले गर्न नहुने कार्यहरू - दफा ५० (Prohibited Lending & Actions - Section 50)',
        content: `दफा ५० मा वित्तीय अनुशासन कायम राख्न संस्थाहरूलाई स्पष्ट बन्देज लगाइएको छ:

१. व्यापार गर्ने उद्देश्यले मालसामान खरिद बिक्री गर्न वा कुनै उद्योग स्थापना गर्न (Except for banking operations).
२. आफ्ना सेयरको धितोमा कर्जा प्रवाह गर्न (Lending against own shares is strictly prohibited).
३. आफ्ना सञ्चालक, आधारभूत सेयरधनी वा उनीहरूका परिवारका सदस्यलाई कर्जा वा सुविधा प्रदान गर्न।
४. तोकिएको सीमाभन्दा बढी एकल ग्राहक कर्जा सीमा (Single Obligor Limit - SOL) नाघेर ऋण प्रवाह गर्न।
५. अचल सम्पत्ति खरिद गरी घरजग्गा कारोबार (Real estate speculation) मा संलग्न हुन।`,
        bulletPoints: [
          'No lending against own shares (आफ्नै सेयर धितोमा ऋण दिन निषेध)।',
          'No insider lending to directors, promoters, or immediate family members.',
          'Single Obligor Limit (SOL): 25% for fund-based credit and 50% for non-fund based credit as per NRB directives.'
        ]
      },
      {
        heading: '४. संस्थागत सुशासन र सञ्चालकको योग्यता (Corporate Governance & Qualifications)',
        content: `१. सञ्चालक समितिमा कम्तीमा ५ र बढीमा ७ जना सञ्चालकहरू रहनुपर्ने (दफा १४)।
२. कम्तीमा एक जना स्वतन्त्र सञ्चालक (Independent Director) अनिवार्य रूपमा नियुक्त गर्नुपर्ने।
३. कार्यकारी प्रमुख (CEO) को पदावधि ४ वर्षको हुने र बढीमा २ कार्यकालका लागि नियुक्त हुन सक्ने।
४. कूलिङ पिरियड (Cooling Period): सञ्चालक वा कार्यकारी प्रमुखले पद त्याग गरेको ६ महिनासम्म अर्को बैंक वा वित्तीय संस्थामा सोही पदमा काम गर्न नपाउने।`,
        bulletPoints: [
          'Board Size: Minimum 5, Maximum 7 directors including at least one independent expert director.',
          'CEO Term Limit: 4 years per term, maximum 2 consecutive terms.',
          'Fit and Proper Test: Clear criminal record, clean CIB credit report, and minimum 5 years managerial experience in banking/finance.'
        ]
      }
    ],
    comparisonTable: {
      title: 'बैंक तथा वित्तीय संस्थाको वर्गगत तुलना (Class Comparison Matrix)',
      headers: ['विवरण (Attribute)', '"क" वर्ग (Class A)', '"ख" वर्ग (Class B)'],
      rows: [
        {
          attribute: 'विदेशी मुद्रा कारोबार (Forex)',
          traditional: 'पूर्ण विदेशी मुद्रा कारोबार, LC तथा विदेशी विनिमय सञ्चालन अधिकार',
          reengineering: 'सीमित विदेशी विनिमय कारोबार (NRB को स्वीकृति अनुसार)'
        },
        {
          attribute: 'प्रतीतपत्र (Letter of Credit)',
          traditional: 'स्वतन्त्र रूपमा अन्तर्राष्ट्रिय LC जारी गर्न सक्ने',
          reengineering: 'सशर्त वा वाणिज्य बैंकसँगको सहकार्यमा मात्र'
        },
        {
          attribute: 'कार्यक्षेत्र (Scope of Work)',
          traditional: 'समग्र राष्ट्रिय तथा अन्तर्राष्ट्रिय वाणिज्य बैंकिङ कारोबार',
          reengineering: 'विशेष गरी कृषि, उद्योग, व्यापार र पूर्वाधार विकासमा केन्द्रित'
        }
      ]
    },
    examTip: 'BAFIA २०७३ बाट दफा ५० (गर्न नहुने कामहरू) र बैंक तथा वित्तीय संस्थाको पुँजी संरचना र सञ्चालक समितिको उत्तरदायित्व बारम्बार सोधिने मुख्य विषय हुन्।'
  },

  // 3. ACCOUNTING COMPREHENSIVE NOTE (BRS & DOUBLE ENTRY)
  {
    id: 'accounting-brs-double-entry',
    title: 'लेखा प्रणाली: बैंक हिसाब मिलान विवरण (BRS) र दोहोरो लेखा प्रणाली - विस्तृत नोट्स',
    subject: 'Accounting',
    category: 'General',
    readTime: '15 min read',
    sections: [
      {
        heading: '१. दोहोरो लेखा प्रणालीका स्वर्ण नियमहरू (Golden Rules of Accounting)',
        content: `दोहोरो लेखा प्रणाली (Double Entry Bookkeeping System) आधुनिक लेखा प्रणालीको मेरुदण्ड हो। यसको प्रतिपादन सन् १४९४ मा इटालीका गणितज्ञ लुका प्यासिओली (Luca Pacioli) ले गरेका थिए।

[स्वर्ण नियमहरू (Golden Rules)]:
१. व्यक्तिगत खाता (Personal Account):
   - डेबिट (Debit): प्राप्त गर्ने व्यक्ति (Debit the Receiver)
   - क्रेडिट (Credit): दिने व्यक्ति (Credit the Giver)
   - उदाहरण: रामलाई नगद रु. ५,००० दियो -> Ram A/C Dr. To Cash A/C

२. वास्तविक खाता (Real Account):
   - डेबिट (Debit): व्यवसायमा जे आउँछ (Debit what comes in)
   - क्रेडिट (Credit): व्यवसायबाट जे बाहिर जान्छ (Credit what goes out)
   - उदाहरण: फर्निचर खरिद गर्दा -> Furniture A/C Dr. To Cash A/C

३. नाममात्र वा अवास्तविक खाता (Nominal Account):
   - डेबिट (Debit): सबै खर्च र नोक्सान (Debit all expenses and losses)
   - क्रेडिट (Credit): सबै आम्दानी र नाफा (Credit all incomes and gains)
   - उदाहरण: तलब भुक्तानी गर्दा -> Salary A/C Dr. To Cash A/C`,
        bulletPoints: [
          'Luca Pacioli (1494) is the father of double entry bookkeeping system.',
          'Every transaction has dual equal and opposite effects: Total Debits = Total Credits.',
          'Personal A/C: Debit the receiver, Credit the giver.',
          'Real A/C: Debit what comes in, Credit what goes out.',
          'Nominal A/C: Debit all expenses/losses, Credit all incomes/gains.'
        ]
      },
      {
        heading: '२. बैंक हिसाब मिलान विवरण (Bank Reconciliation Statement - BRS)',
        content: `बैंक हिसाब मिलान विवरण (BRS) भनेको कुनै निश्चित मितिमा संस्थाको नगद पुस्तिका (Cash Book - Bank Column) र बैंकले पठाएको पासबुक (Pass Book / Bank Statement) बीचको मौज्दातमा आएको फरक पत्ता लगाई मिलान गर्न तयार गरिने विवरण हो।

[फरक पर्नुका मुख्य कारणहरू (Causes of Discrepancy)]:
१. समयको अन्तर (Timing Differences):
   - चेक जारी गरियो तर भुक्तानीका लागि बैंकमा पेश भएन (Cheque issued but not yet presented for payment) -> Cash Book घट्यो, Pass Book बढी छ।
   - बैंकमा चेक जम्मा गरियो तर रकम संकलन भएन (Cheque deposited but not yet collected/credited) -> Cash Book बढ्यो, Pass Book कम छ।

२. बैंकले गरेका प्रत्यक्ष कारोबारहरू (Direct Bank Transactions):
   - ग्राहकले सिधै बैंक खातामा रकम जम्मा गरेको (Direct deposit by customer into bank).
   - बैंकले सिधै ब्याज जम्मा गरेको वा बैंक शुल्क (Bank Charges/Interest) कट्टा गरेको।
   - बैंकले स्थायी निर्देशन (Standing Instructions) बमोजिम बिमा शुल्क, बिजुली बिल भुक्तानी गरेको।

३. लेखा सम्बन्धी त्रुटिहरू (Errors and Omissions):
   - नगद पुस्तिका वा पासबुकमा गलत अंक प्रविष्टि वा ओभरकास्ट/अन्डरकास्ट हुनु।`,
        bulletPoints: [
          'BRS is prepared periodically (usually monthly) to reconcile Cash Book vs Pass Book balances.',
          'BRS is NOT an account; it is a statement of reconciliation.',
          'Favorable Balance: Debit balance as per Cash Book = Credit balance as per Pass Book.',
          'Overdraft Balance: Credit balance as per Cash Book = Debit balance as per Pass Book.'
        ]
      },
      {
        heading: '३. प्रमुख वित्तीय तथा बैंकिङ अनुपातहरू (Key Banking Ratios)',
        content: `१. अनिवार्य नगद मौज्दात अनुपात (CRR - Cash Reserve Ratio):
   - वाणिज्य बैंकहरूले आफ्नो कुल निक्षेप दायित्व (Total Demand & Time Liabilities) को निश्चित प्रतिशत (हाल ४%) नेपाल राष्ट्र बैंकमा नगद राख्नुपर्ने व्यवस्था।

२. वैधानिक तरलता अनुपात (SLR - Statutory Liquidity Ratio):
   - बैंकहरूले नगद, सुन र सरकारी ऋणपत्रको रूपमा राख्नुपर्ने न्यूनतम तरलता। हाल "क" वर्गका बैंकका लागि १२% र "ख"/"ग" वर्गका लागि १०% तोकिएको छ।

३. कर्जा-निक्षेप अनुपात (CD Ratio - Credit to Deposit Ratio):
   - बैंकहरूले संकलन गरेको कुल निक्षेपको कति प्रतिशतसम्म कर्जा लगानी गर्न पाउने सीमा। हाल अधिकतम सीमा ९०% कायम गरिएको छ।

४. खराब कर्जा अनुपात (NPA Ratio - Non-Performing Assets Ratio):
   - कुल कर्जाको तुलनामा निष्कृय कर्जा (NPL) को अनुपात। अन्तर्राष्ट्रिय मापदण्ड अनुसार यो ५% भन्दा कम हुनुपर्दछ।`,
        bulletPoints: [
          'Cash Reserve Ratio (CRR): Currently 4.0% for all commercial banks.',
          'Statutory Liquidity Ratio (SLR): Currently 12% for Class A, 10% for Class B & C.',
          'Credit-to-Deposit Ratio (CD Ratio): Maximum statutory cap of 90%.',
          'Capital Adequacy Ratio (CAR): Minimum 11.0% (including Capital Conservation Buffer under Basel III).'
        ]
      }
    ],
    comparisonTable: {
      title: 'नगद पुस्तिका र पासबुकको तुलना (Cash Book vs Pass Book)',
      headers: ['आधार (Aspect)', 'नगद पुस्तिका (Cash Book)', 'पासबुक (Pass Book)'],
      rows: [
        {
          attribute: 'तयार गर्ने पक्ष',
          traditional: 'ग्राहक / व्यावसायिक संस्थाद्वारा तयार गरिन्छ',
          reengineering: 'बैंक (वाणिज्य बैंक) द्वारा तयार गरी ग्राहकलाई दिइन्छ'
        },
        {
          attribute: 'अनुकूल मौज्दात (Favorable Balance)',
          traditional: 'डेबिट मौज्दात (Debit Balance = Asset)',
          reengineering: 'क्रेडिट मौज्दात (Credit Balance = Bank liability to customer)'
        },
        {
          attribute: 'ओभरड्राफ्ट (Overdraft)',
          traditional: 'क्रेडिट मौज्दात (Credit Balance = Liability)',
          reengineering: 'डेबिट मौज्दात (Debit Balance = Bank asset / loan to customer)'
        }
      ]
    },
    examTip: 'लेखा खण्डमा BRS को सैद्धान्तिक अवधारणा तथा ५ अंकको प्रयोगात्मक हिसाब (Practical Numerical Problem) राष्ट्र बैंक सहायक तह ४ र वाणिज्य बैंक तह ४/५ मा नियमित सोधिने प्रश्न हो।'
  },

  // 4. GENERAL KNOWLEDGE & BANKING HISTORY
  {
    id: 'gk-banking-history-constitution',
    title: 'सामान्य ज्ञान: नेपालको बैंकिङ विकासक्रम, संविधान र समष्टिगत अर्थतन्त्र',
    subject: 'GK',
    category: 'Loksewa',
    readTime: '14 min read',
    sections: [
      {
        heading: '१. नेपालको बैंकिङ इतिहास र विकासक्रम (Evolution of Banking in Nepal)',
        content: `नेपालमा संगठित बैंकिङ प्रणालीको विकास हुनुपूर्व अनौपचारिक साहु-महाजन तथा तेजारथ अड्डाबाट वित्तीय कारोबार हुन्थ्यो:

१. कौसी तोषाखाना: पृथ्वीनारायण शाहको पालामा राज्यको आम्दानी र खर्चको अभिलेख राख्न स्थापित अड्डा।
२. तेजारथ अड्डा: वि.सं. १९३३ मा प्रधानमन्त्री रणोद्दीप सिंहको पालामा स्थापना भएको नेपालको पहिलो संस्थागत ऋण दिने निकाय। यसले सरकारी कर्मचारी र सर्वसाधारणलाई ५% ब्याजदरमा सुनचाँदी धितो लिई ऋण दिन्थ्यो।
३. नेपाल बैंक लिमिटेड (Nepal Bank Limited): वि.सं. १९९४ कार्तिक ३० गते (November 15, 1937) जुद्ध शमशेरको पालामा स्थापना भएको नेपालको पहिलो आधुनिक वाणिज्य बैंक।
४. नेपाल राष्ट्र बैंक: वि.सं. २०१३ वैशाख १४ गते (April 26, 1956) केन्द्रीय बैंकको रूपमा स्थापना। प्रथम गभर्नर: हिमालय शमशेर जबरा।
५. राष्ट्रिय वाणिज्य बैंक: वि.सं. २०२२ माघ १० गते शतप्रतिशत सरकारी स्वामित्वमा स्थापित बैंक।
६. कृषि विकास बैंक (ADBL): वि.सं. २०२४ माघ ७ गते स्थापित।
७. पहिलो संयुक्त लगानीको बैंक (First Joint Venture Bank): नेपाल अरब बैंक (हालको नबिल बैंक - Nabil Bank) वि.सं. २०४१ असार २९ मा स्थापना।`,
        bulletPoints: [
          '1933 BS: Tejarath Adda established by PM Ranodip Singh.',
          '1994 Kartik 30: Nepal Bank Limited established as the 1st commercial bank of Nepal.',
          '2013 Baishakh 14: Nepal Rastra Bank established. First Governor: Himalaya Shumsher JB Rana.',
          '2022 Magh 10: Rastriya Banijya Bank (RBB) established.',
          '2041 Ashad 29: Nabil Bank established as the first joint-venture bank.'
        ]
      },
      {
        heading: '२. नेपालको संविधान र आर्थिक व्यवस्थाहरू (Constitution of Nepal - Economic Provisions)',
        content: `नेपालको संविधान (२०७२ असोज ३ गते जारी) मा अर्थतन्त्र तथा बैंकिङ सम्बन्धी महत्वपूर्ण संवैधानिक व्यवस्थाहरू छन्:

१. तीन खम्बे अर्थनीति (Three-Pillar Economic Policy - धारा ५१ (घ)): सार्वजनिक, निजी र सहकारी क्षेत्रको सहभागिता र स्वतन्त्र विकासमार्फत राष्ट्रिय अर्थतन्त्र सुदृढ गर्ने।
२. भाग १० - संघीय आर्थिक कार्यप्रणाली (Federal Financial Procedures):
   - धारा ११५: कानुन बमोजिम बाहेक कुनै कर नलगाइने र ऋण नलिइने।
   - धारा ११६: संघीय सञ्चित कोष (Federal Consolidated Fund)।
   - धारा ११९: प्रत्येक वर्ष जेठ १५ गते संघीय संसद्को दुवै सदनमा अर्थमन्त्रीले बजेट पेश गर्नुपर्ने।
३. राष्ट्रिय प्राकृतिक स्रोत तथा वित्त आयोग (भाग २६ - धारा २५०): संघ, प्रदेश र स्थानीय तहबीच वित्तीय समानीकरण तथा राजस्व बाँडफाँड गर्ने संवैधानिक आयोग।`,
        bulletPoints: [
          'Constitution Promulgated: 2072 Ashwin 3 (September 20, 2015). 35 Parts, 308 Articles, 9 Schedules.',
          'Budget Presentation Day: Jestha 15 every year mandated by Article 119.',
          'Three Pillars: Public (सार्वजनिक), Private (निजी), and Cooperative (सहकारी) sectors.',
          'Financial Comptroller General Office (FCGO) & Auditor General (महालेखापरीक्षक - धारा २४०).'
        ]
      },
      {
        heading: '३. समष्टिगत आर्थिक परिसूचकहरू (Macroeconomic Indicators of Nepal)',
        content: `१. कुल गार्हस्थ्य उत्पादन (GDP): नेपालको कुल अर्थतन्त्रको आकार करिब रु. ५७ खर्ब भन्दा बढी छ।
२. कृषि, उद्योग र सेवा क्षेत्रको योगदान:
   - सेवा क्षेत्र (Service Sector): ६०% भन्दा बढी योगदान
   - कृषि क्षेत्र (Agriculture Sector): करिब २४% योगदान
   - उद्योग क्षेत्र (Industry Sector): करिब १३% योगदान
३. विप्रेषण (Remittance): नेपालको जीडीपीको करिब २५-२८% हिस्सा विप्रेषण आप्रवाहले ओगटेको छ।
४. विदेशी मुद्रा सञ्चिति (Forex Reserves): कम्तीमा ७ महिनाको वस्तु तथा सेवा आयात धान्न सक्ने विदेशी मुद्रा केन्द्रीय बैंकमा सञ्चित हुनुपर्ने लक्ष्य राखिन्छ।`,
        bulletPoints: [
          'Primary Growth Drivers: Services and Agriculture sectors.',
          'Remittance Inflow: Crucial stabilizer of Current Account and Balance of Payments (BOP).',
          'Monetary Anchor: Fixed peg exchange rate regime with the Indian Rupee (1 INR = 1.60 NPR).'
        ]
      }
    ],
    comparisonTable: {
      title: 'नेपालका प्रमुख सरकारी तथा ऐतिहासिक बैंकहरू',
      headers: ['बैंकको नाम', 'स्थापना मिति (वि.सं.)', 'विशेषता'],
      rows: [
        {
          attribute: 'नेपाल बैंक लिमिटेड',
          traditional: '१९९४ कार्तिक ३०',
          reengineering: 'नेपालको पहिलो बैंक (First Commercial Bank)'
        },
        {
          attribute: 'नेपाल राष्ट्र बैंक',
          traditional: '२०१३ वैशाख १४',
          reengineering: 'केन्द्रीय बैंक (Central Bank & Monetary Regulator)'
        },
        {
          attribute: 'राष्ट्रिय वाणिज्य बैंक',
          traditional: '२०२२ माघ १०',
          reengineering: 'सरकारी स्वामित्वको ठूलो वाणिज्य बैंक'
        }
      ]
    },
    examTip: 'सामान्य ज्ञान खण्डमा वि.सं. १९९४, २०१३ र २०२२ का ऐतिहासिक मितिहरू र संविधानको धारा ५१ तथा धारा ११९ (जेठ १५ बजेट) प्रश्नपत्रमा नियमित दोहोरिने प्रश्नहरू हुन्।'
  },
  ...COMPREHENSIVE_EXAM_NOTES
];
