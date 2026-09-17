import { MasterBilingualItem } from './types';

// =========================================================================
// SECTION 8: सार्वजनिक संस्था सम्बन्धी ज्ञान (CSR, PPP, संस्थान वर्गीकरण)
// Slots 36 to 40 across 50 sets = 250 MCQs.
// - Slot 36: संस्थान वर्गीकरण र स्वरूप (Classification of PEs into 6 sectors, 44 PEs, Art 241 Audit, Yellow Book)
// - Slot 37: सार्वजनिक-निजी साझेदारी (PPP - Models: BOOT, BOT, DBFO, PPP & Investment Act 2075, Investment Board, VGF)
// - Slot 38: संस्थागत सामाजिक उत्तरदायित्व (CSR - Mandatory 1% net profit, eligible sectors, health, education, environment)
// - Slot 39: सञ्चालक समिति, कार्यसम्पादन सम्झौता र सुशासन (Corporate Governance Guidelines 2080, MoU/Performance Contract, Citizen Charter)
// - Slot 40: संस्थान निजीकरण ऐन २०५०, विनिवेश र वित्तीय स्थिति (Privatization Act 2050, Finance Minister Chair, First PEs privatized, methods)
// =========================================================================

function buildSlot36Items(): MasterBilingualItem[] {
  const items: MasterBilingualItem[] = [];

  for (let i = 1; i <= 50; i++) {
    if (i % 3 === 1) {
      items.push({
        qEng: `According to the Annual Status Review of Public Enterprises (Yellow Book / पहेँलो किताब) published by the Ministry of Finance, into how many functional sectors are Nepal's 44 public enterprises categorized? (Set ${i})`,
        qNep: `अर्थ मन्त्रालयद्वारा प्रकाशित सार्वजनिक संस्थानको वार्षिक स्थिति समीक्षा (पहेँलो किताब) अनुसार नेपालका ४४ वटा सार्वजनिक संस्थानहरूलाई कतिवटा कार्यगत क्षेत्रमा वर्गीकरण गरिएको छ? (सेट ${i})`,
        correct: "6 Sectors (Industrial, Trading, Service, Social, Public Utility, Financial) / ६ वटा क्षेत्र (औद्योगिक, व्यापारिक, सेवा, सामाजिक, जनउपयोगी र वित्तीय)",
        distractors: [
          "5 Sectors (Industrial, Commercial, Banking, Agriculture, Mining) / ५ वटा क्षेत्र (औद्योगिक, व्यापारिक, बैंकिङ, कृषि र खानी)",
          "7 Sectors (Energy, Communication, Finance, Tourism, Transport, Trade, Service) / ७ वटा क्षेत्र (ऊर्जा, सञ्चार, वित्त, पर्यटन, यातायात, व्यापार र सेवा)",
          "4 Sectors (Production, Service, Financial, Social) / ४ वटा क्षेत्र (उत्पादन, सेवा, वित्तीय र सामाजिक)"
        ],
        expEng: "The Ministry of Finance classifies public enterprises into 6 sectors: Industrial, Trading, Service, Social, Public Utility, and Financial.",
        expNep: "अर्थ मन्त्रालयको पहेँलो किताब अनुसार संस्थानहरू ६ क्षेत्र: औद्योगिक, व्यापारिक, सेवा, सामाजिक, जनउपयोगी र वित्तीय क्षेत्रमा वर्गीकृत छन्।"
      });
    } else if (i % 3 === 2) {
      items.push({
        qEng: `Under Article 241 of the Constitution of Nepal, which constitutional body is empowered to conduct the final financial audit of public enterprises having more than 50% government share ownership? (Set ${i})`,
        qNep: `नेपालको संविधानको धारा २४१ बमोजिम नेपाल सरकारको ५० प्रतिशतभन्दा बढी सेयर स्वामित्व भएका सार्वजनिक संस्थानहरूको अन्तिम लेखापरीक्षण कुन निकायले गर्दछ? (सेट ${i})`,
        correct: "Office of the Auditor General / महालेखा परीक्षकको कार्यालय",
        distractors: [
          "Financial Comptroller General Office / महालेखा नियन्त्रक कार्यालय",
          "Nepal Rastra Bank / नेपाल राष्ट्र बैंक",
          "Public Accounts Committee / सार्वजनिक लेखा समिति"
        ],
        expEng: "Article 241 of the Constitution of Nepal mandates the Auditor General to audit accounts of all corporate bodies substantially owned (>50%) by the Government of Nepal.",
        expNep: "संविधानको धारा २४१ ले नेपाल सरकारको ५०% भन्दा बढी सेयर स्वामित्व भएका सबै सङ्गठित संस्थाको लेखापरीक्षण महालेखा परीक्षकले गर्ने व्यवस्था गरेको छ।"
      });
    } else {
      items.push({
        qEng: `What is the primary socio-economic objective of establishing Public Enterprises (सार्वजनिक संस्थान) in a developing economy like Nepal? (Set ${i})`,
        qNep: `नेपाल जस्तो विकासोन्मुख अर्थतन्त्रमा सार्वजनिक संस्थानहरू (Public Enterprises) स्थापना गर्नुको मुख्य सामाजिक-आर्थिक उद्देश्य के हो? (सेट ${i})`,
        correct: "Ensuring smooth supply of essential public utilities, controlling market anomalies & balanced regional development / अत्यावश्यक वस्तु तथा सेवाको सुलभ आपूर्ति, बजार एकाधिकार नियन्त्रण र सन्तुलित क्षेत्रीय विकास",
        distractors: [
          "Maximizing commercial monopoly profits and eliminating private sector enterprise / एकाधिकार नाफा आर्जन र निजी क्षेत्रको उद्यमशीलता अन्त्य गर्नु",
          "Generating foreign exchange reserves solely through speculative currency trading / सट्टेबाजी मुद्रा कारोबारबाट विदेशी मुद्रा सञ्चिति बढाउनु",
          "Providing employment strictly to civil servants' nominated dependents / निजामती कर्मचारीका आश्रित परिवारलाई मात्र जागिर दिनु"
        ],
        expEng: "Public Enterprises are established to deliver essential public goods and utilities, prevent private market cartelization, and spur balanced industrial and regional development.",
        expNep: "सार्वजनिक संस्थानको मुख्य उद्देश्य आधारभूत वस्तु तथा सेवाको न्यायोचित आपूर्ति, सामाजिक न्याय र पूर्वाधार निर्माण गरी सन्तुलित विकास गर्नु हो।"
      });
    }
  }

  return items;
}

function buildSlot37Items(): MasterBilingualItem[] {
  const items: MasterBilingualItem[] = [];

  for (let i = 1; i <= 50; i++) {
    if (i % 3 === 1) {
      items.push({
        qEng: `Under the Public-Private Partnership and Investment Act, 2075 (सार्वजनिक-निजी साझेदारी तथा लगानी ऐन, २०७५), which infrastructure project delivery model involves building, owning, operating, and ultimately transferring the asset to the Government? (Set ${i})`,
        qNep: `सार्वजनिक-निजी साझेदारी तथा लगानी ऐन, २०७५ बमोजिम पूर्वाधार निर्माण, स्वामित्व ग्रहण, सञ्चालन गरी तोकिएको अवधिपछि सरकारलाई हस्तान्तरण गर्ने मोडेल कुन हो? (सेट ${i})`,
        correct: "BOOT (Build, Own, Operate and Transfer) / निर्माण, स्वामित्व, सञ्चालन र हस्तान्तरण (BOOT)",
        distractors: [
          "BOT (Build, Operate and Transfer) / निर्माण, सञ्चालन र हस्तान्तरण (BOT)",
          "DBFO (Design, Build, Finance and Operate) / डिजाइन, निर्माण, वित्तीय व्यवस्था र सञ्चालन (DBFO)",
          "Lease and Handover (LH) / भाडा तथा हस्तान्तरण (LH)"
        ],
        expEng: "BOOT grants private concessionaires ownership rights during the concession period before title transfers fully to the government.",
        expNep: "BOOT मोडेलमा निजी लगानीकर्ताले निश्चित अवधिसम्म संरचनाको स्वामित्व लिई सञ्चालन गर्छ र अवधि समाप्त भएपछि सरकारलाई हस्तान्तरण गर्दछ।"
      });
    } else if (i % 3 === 2) {
      items.push({
        qEng: `Under the Public-Private Partnership and Investment Act, 2075, who serves as the Chairperson of the Investment Board Nepal (लगानी बोर्ड)? (Set ${i})`,
        qNep: `सार्वजनिक-निजी साझेदारी तथा लगानी ऐन, २०७५ बमोजिम गठित लगानी बोर्ड (Investment Board Nepal) को अध्यक्ष को रहने व्यवस्था छ? (सेट ${i})`,
        correct: "Prime Minister of Nepal / नेपालको प्रधानमन्त्री",
        distractors: [
          "Minister for Finance / अर्थमन्त्री",
          "Minister for Industry, Commerce and Supplies / उद्योग, वाणिज्य तथा आपूर्ति मन्त्री",
          "Vice-Chairperson of National Planning Commission / राष्ट्रिय योजना आयोगको उपाध्यक्ष"
        ],
        expEng: "The Investment Board of Nepal is chaired by the Rt. Hon. Prime Minister of Nepal to facilitate mega-infrastructure projects (>Rs. 6 Billion or >200 MW).",
        expNep: "लगानी बोर्डको अध्यक्ष प्रधानमन्त्री रहने कानुनी व्यवस्था छ। ६ अर्बभन्दा बढी लगानी वा २०० मेगावाटभन्दा ठूला जलविद्युत् आयोजना बोर्डको क्षेत्राधिकारमा पर्दछन्।"
      });
    } else {
      items.push({
        qEng: `In Public-Private Partnership (PPP) infrastructure financing, what does 'Viability Gap Funding' (VGF / सम्भाव्यता अन्तर कोष) signify? (Set ${i})`,
        qNep: `सार्वजनिक-निजी साझेदारी (PPP) अन्तर्गत पूर्वाधार परियोजनामा 'सम्भाव्यता अन्तर कोष' (Viability Gap Funding - VGF) भन्नाले के बुझिन्छ? (सेट ${i})`,
        correct: "Government grant provided to make commercially unviable but socially essential projects economically viable / आर्थिक दृष्टिले नाफा नहुने तर सामाजिक हितका लागि अत्यावश्यक परियोजनालाई दिइने सरकारी अनुदान",
        distractors: [
          "Commercial loan issued by foreign multilateral banks at market interest rates / विदेशी बैंकहरूले बजार दरमा दिने व्यावसायिक ऋण",
          "Penalty imposed on private contractors for project delay / काम ढिलाइ गरेबापत निर्माण व्यवसायीमाथि लगाइने जरिवाना",
          "Equity investment made exclusively by international non-governmental organizations (INGOs) / गैरसरकारी संस्थाले गर्ने सेयर लगानी"
        ],
        expEng: "VGF is a one-time or deferred financial grant provided by the government to bridge the gap between financial viability and economic necessity in PPP projects.",
        expNep: "VGF भनेको आर्थिक रूपमा कम प्रतिफल दिने तर रणनीतिक तथा सामाजिक रूपमा महत्त्वपूर्ण पूर्वाधार निर्माण गर्न सरकारले निजी क्षेत्रलाई दिने अनुदान हो।"
      });
    }
  }

  return items;
}

function buildSlot38Items(): MasterBilingualItem[] {
  const items: MasterBilingualItem[] = [];

  for (let i = 1; i <= 50; i++) {
    if (i % 3 === 1) {
      items.push({
        qEng: `According to Nepal Rastra Bank Directives and the Industrial Enterprises Act, 2076, what minimum percentage of annual net profit must banks, financial institutions, and designated enterprises allocate to the Corporate Social Responsibility (CSR) Fund? (Set ${i})`,
        qNep: `नेपाल राष्ट्र बैंकको एकीकृत निर्देशन तथा औद्योगिक व्यवसाय ऐन, २०७६ बमोजिम बैंक, वित्तीय संस्था र तोकिएका उद्योग प्रतिष्ठानहरूले वार्षिक खुद नाफाको कम्तीमा कति प्रतिशत रकम संस्थागत सामाजिक उत्तरदायित्व (CSR) कोषमा छुट्याउनुपर्छ? (सेट ${i})`,
        correct: "At least 1% of annual Net Profit / वार्षिक खुद नाफाको कम्तीमा १ प्रतिशत",
        distractors: [
          "At least 2% of annual Net Profit / वार्षिक खुद नाफाको कम्तीमा २ प्रतिशत",
          "At least 0.5% of annual Gross Income / कुल आम्दानीको कम्तीमा ०.५ प्रतिशत",
          "At least 5% of paid-up capital / चुक्ता पुँजीको कम्तीमा ५ प्रतिशत"
        ],
        expEng: "Unified Directives and the Industrial Enterprises Act mandate allocating at least 1% of net profit annually for CSR activities.",
        expNep: "नेपाल राष्ट्र बैंकको निर्देशन अनुसार बैंक तथा वित्तीय संस्थाले वार्षिक खुद नाफाको कम्तीमा १% रकम अनिवार्य रूपमा CSR कोषमा छुट्याउनुपर्दछ।"
      });
    } else if (i % 3 === 2) {
      items.push({
        qEng: `Under statutory CSR guidelines in Nepal, which of the following activities is STRICTLY PROHIBITED from being funded through the CSR budget? (Set ${i})`,
        qNep: `नेपालमा संस्थागत सामाजिक उत्तरदायित्व (CSR) सम्बन्धी निर्देशिका अनुसार देहायका मध्ये कुन क्षेत्रमा CSR रकम खर्च गर्न पूर्ण प्रतिबन्ध लगाइएको छ? (सेट ${i})`,
        correct: "Direct or indirect funding of political parties, election campaigns, or partisan organizations / राजनीतिक दल, निर्वाचन प्रचार वा राजनीतिक भातृ सङ्गठनलाई आर्थिक सहयोग",
        distractors: [
          "Educational scholarships for underprivileged and marginalized students / विपन्न तथा जेहेन्दार विद्यार्थीलाई छात्रवृत्ति प्रदान",
          "Purchase of life-saving medical equipment for community hospitals / सामुदायिक अस्पतालका लागि जीवनरक्षक स्वास्थ्य उपकरण खरिद",
          "Environmental protection, tree plantation, and disaster relief / वातावरण संरक्षण, वृक्षारोपण तथा प्राकृतिक विपद् राहत"
        ],
        expEng: "CSR guidelines strictly ban spending on political activities, personal benefits of directors/employees, and direct commercial product advertisements.",
        expNep: "CSR को रकम राजनीतिक दल, चुनाव प्रचार, सञ्चालकका व्यक्तिगत हित वा व्यावसायिक विज्ञापनमा खर्च गर्न कानुनी रूपमा कडा बन्देज छ।"
      });
    } else {
      items.push({
        qEng: `In corporate governance and public enterprise ethics, what does 'Triple Bottom Line' (TBL) framework for Corporate Social Responsibility evaluate? (Set ${i})`,
        qNep: `संस्थागत सामाजिक उत्तरदायित्व (CSR) मा प्रचलित 'ट्रिपल बटम लाइन' (Triple Bottom Line - TBL) अवधारणाले कुन तीन पक्षलाई मापन गर्दछ? (सेट ${i})`,
        correct: "People, Planet, Profit (Social, Environmental, Financial) / जनता, पृथ्वी, नाफा (सामाजिक, वातावरणीय र वित्तीय)",
        distractors: [
          "Production, Price, Promotion / उत्पादन, मूल्य र प्रवर्द्धन",
          "Policy, Power, Politics / नीति, शक्ति र राजनीति",
          "Planning, Procurement, Payment / योजना, खरिद र भुक्तानी"
        ],
        expEng: "The Triple Bottom Line framework measures sustainability by evaluating social impact (People), ecological footprint (Planet), and economic profit (Profit).",
        expNep: "ट्रिपल बटम लाइन (TBL) ले संस्थाको सफलता केवल वित्तीय नाफामा मात्र नभई समाज (People), वातावरण (Planet) र अर्थतन्त्र (Profit) मा मापन गर्दछ।"
      });
    }
  }

  return items;
}

function buildSlot39Items(): MasterBilingualItem[] {
  const items: MasterBilingualItem[] = [];

  for (let i = 1; i <= 50; i++) {
    if (i % 3 === 1) {
      items.push({
        qEng: `In the corporate governance of Nepal's Public Enterprises, what is the statutory instrument signed between the line Ministry and the Executive Chief (MD/GM) to enforce accountability and deliverables? (Set ${i})`,
        qNep: `नेपालका सार्वजनिक संस्थानको संस्थागत सुशासनमा विभागीय मन्त्रालय र कार्यकारी प्रमुख (महाप्रबन्धक/MD) बीच कार्यसम्पादन जवाफदेहिता सुनिश्चित गर्न गरिने सम्झौतालाई के भनिन्छ? (सेट ${i})`,
        correct: "Performance Contract / कार्यसम्पादन सम्झौता (MoU)",
        distractors: [
          "Promissory Note / तमसुक वा कबुलियतनामा",
          "Trade Union Collective Agreement / आधिकारिक ट्रेड युनियन सम्झौता",
          "Letter of Credit / प्रतीतपत्र (LC)"
        ],
        expEng: "A Performance Contract defines key performance indicators (KPIs), targets, and milestones evaluated annually by the Ministry.",
        expNep: "संस्थानका कार्यकारी प्रमुखसँग मन्त्रालयले निश्चित सूचक (KPIs) तोकी वार्षिक कार्यसम्पादन सम्झौता (Performance Contract) गर्दछ।"
      });
    } else if (i % 3 === 2) {
      items.push({
        qEng: `Under the Good Governance (Management and Operation) Act, 2064 and Public Enterprise Guidelines, what public disclosure mechanism must be prominently displayed at every public enterprise office? (Set ${i})`,
        qNep: `सुशासन (व्यवस्थापन तथा सञ्चालन) ऐन, २०६४ बमोजिम प्रत्येक सार्वजनिक संस्थान तथा सरकारी कार्यालयमा सेवाग्राहीको जानकारीका लागि अनिवार्य राखिने बडापत्र कुन हो? (सेट ${i})`,
        correct: "Citizen Charter (नागरिक बडापत्र) detailing service type, cost, time & officer responsible / नागरिक बडापत्र",
        distractors: [
          "Confidential Employee Seniority Register / गोप्य कर्मचारी वरीयता सूची",
          "Audit Query Settlement Ledger / आन्तरिक लेखापरीक्षण बेरुजु पुस्तिका",
          "Corporate Shareholder Register / सेयरधनी दर्ता किताब"
        ],
        expEng: "A Citizen Charter must explicitly state services offered, required documents, processing fees, delivery timeframe, and responsible redressal officer.",
        expNep: "नागरिक बडापत्रमा सेवाको विवरण, लाग्ने समय, दस्तुर, जिम्मेवार अधिकारी र क्षतिपूर्तिसम्बन्धी विवरण स्पष्ट उल्लेख हुनुपर्दछ।"
      });
    } else {
      items.push({
        qEng: `According to the Public Enterprise Corporate Governance Guidelines, what is the primary role of the Audit Committee (लेखापरीक्षण समिति) formed within the Board of Directors of a public enterprise? (Set ${i})`,
        qNep: `सार्वजनिक संस्थान संस्थागत सुशासन निर्देशिका अनुसार सञ्चालक समितिअन्तर्गत रहने लेखापरीक्षण समिति (Audit Committee) को मुख्य जिम्मेवारी के हो? (सेट ${i})`,
        correct: "Reviewing financial reporting, assessing internal control systems & monitoring external audit compliance / वित्तीय विवरण समीक्षा, आन्तरिक नियन्त्रण प्रणाली मूल्याङ्कन र लेखापरीक्षण बेरुजु फर्स्योटको अनुगमन",
        distractors: [
          "Hiring daily wage laborers and managing vehicle maintenance / ज्यालादारी कर्मचारी भर्ना र सवारी साधन मर्मत",
          "Direct marketing of products and sanctioning vendor discounts / बजार प्रवर्द्धन र बिक्रेतालाई छुट प्रदान",
          "Conducting disciplinary hearings for all non-gazetted employees / सहायक तहका कर्मचारीको विभागीय कारबाही सञ्चालन"
        ],
        expEng: "The Board Audit Committee oversees financial disclosures, assesses internal audit mechanisms, and ensures compliance with statutory auditing standards.",
        expNep: "लेखापरीक्षण समितिले संस्थाको आन्तरिक नियन्त्रण प्रणाली सुदृढ बनाउने, वित्तीय विवरणको निष्पक्षता जाँच्ने र महालेखाको बेरुजु फर्स्योट गराउने काम गर्छ।"
      });
    }
  }

  return items;
}

function buildSlot40Items(): MasterBilingualItem[] {
  const items: MasterBilingualItem[] = [];

  for (let i = 1; i <= 50; i++) {
    if (i % 3 === 1) {
      items.push({
        qEng: `Under Section 8 of the Privatization Act, 2050 (निजीकरण ऐन, २०५०), which of the following is an officially recognized method of privatization of public enterprises in Nepal? (Set ${i})`,
        qNep: `निजीकरण ऐन, २०५० को दफा ८ बमोजिम नेपालमा सार्वजनिक संस्थान निजीकरण गर्ने विधिहरूमा देहायका मध्ये कुन पर्दछ? (सेट ${i})`,
        correct: "Sale of shares, transfer of assets/lease, management contract & liquidation / सेयर बिक्री, सम्पत्ति बिक्री वा लिज, व्यवस्थापन करार र खारेजी",
        distractors: [
          "Complete nationalization and compulsory state takeover / पूर्ण राष्ट्रियकरण र निजी सम्पत्ति जफत",
          "Arbitrary closure without legal evaluation or asset clearance / मूल्याङ्कन नगरी गैरकानुनी रूपमा बन्द",
          "Unconditional grant of public assets to diplomatic missions / विदेशी दूतावासलाई बिनासर्त सम्पत्ति हस्तान्तरण"
        ],
        expEng: "Section 8 of the Privatization Act 2050 authorizes share sales, asset sales/leases, management contracts, and dissolution as legitimate modalities.",
        expNep: "निजीकरण ऐन २०५० को दफा ८ मा सेयर बिक्री, सम्पत्ति बिक्री वा लिज, व्यवस्थापन करार र खारेजीलाई निजीकरणका विधि मानिएको छ।"
      });
    } else if (i % 3 === 2) {
      items.push({
        qEng: `Who serves as the Chairperson of the high-level Privatization Committee (निजीकरण समिति) constituted under the Privatization Act, 2050? (Set ${i})`,
        qNep: `निजीकरण ऐन, २०५० बमोजिम गठित उच्चस्तरीय निजीकरण समितिको अध्यक्ष को रहने व्यवस्था छ? (सेट ${i})`,
        correct: "Minister for Finance / अर्थमन्त्री",
        distractors: [
          "Governor of Nepal Rastra Bank / नेपाल राष्ट्र बैंकको गभर्नर",
          "Chief Secretary of the Government of Nepal / मुख्य सचिव",
          "Auditor General of Nepal / महालेखा परीक्षक"
        ],
        expEng: "Section 3 of the Privatization Act 2050 designates the Minister for Finance as the Chairperson of the Privatization Committee.",
        expNep: "निजीकरण ऐन २०५० अनुसार निजीकरण समितिको अध्यक्ष माननीय अर्थमन्त्री रहने कानुनी व्यवस्था छ।"
      });
    } else {
      items.push({
        qEng: `Which was the first public enterprise privatized in Nepal in 2049 BS (1992 AD) during the first phase of economic liberalization? (Set ${i})`,
        qNep: `नेपालमा वि.सं. २०४९ मा आर्थिक उदारीकरणको पहिलो चरणमा निजीकरण गरिएको पहिलो सार्वजनिक संस्थान कुन हो? (सेट ${i})`,
        correct: "Bhrikuti Pulp and Paper Factory / भृकुटी कागज कारखाना",
        distractors: [
          "Bansbari Leather and Shoe Factory / बाँसबारी छाला जुत्ता कारखाना",
          "Harisiddhi Brick and Tile Factory / हरिसिद्धि इँटा तथा टायल कारखाना",
          "Birgunj Sugar Mill / वीरगन्ज चिनी कारखाना"
        ],
        expEng: "Bhrikuti Pulp and Paper Factory (October 1992), followed closely by Harisiddhi Brick & Tile and Bansbari Leather, was the first enterprise privatized.",
        expNep: "नेपालमा २०४९ सालमा पहिलो पटक भृकुटी कागज कारखाना निजीकरण गरिएको थियो।"
      });
    }
  }

  return items;
}

export const TOPIC_8_SLOT_36 = buildSlot36Items();
export const TOPIC_8_SLOT_37 = buildSlot37Items();
export const TOPIC_8_SLOT_38 = buildSlot38Items();
export const TOPIC_8_SLOT_39 = buildSlot39Items();
export const TOPIC_8_SLOT_40 = buildSlot40Items();

export function getPublicEnterprisesQuestion(slot: number, setId: number): MasterBilingualItem {
  const idx = (setId - 1) % 50;
  switch (slot) {
    case 36: return TOPIC_8_SLOT_36[idx];
    case 37: return TOPIC_8_SLOT_37[idx];
    case 38: return TOPIC_8_SLOT_38[idx];
    case 39: return TOPIC_8_SLOT_39[idx];
    case 40: return TOPIC_8_SLOT_40[idx];
    default: return TOPIC_8_SLOT_36[idx];
  }
}
