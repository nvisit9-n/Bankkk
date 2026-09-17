import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, Bot, User, BookOpen, CheckSquare, Copy, Check } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { QuizSet } from '../../types';
import { MOCK_QUESTIONS } from '../../data/mockData';
import { MarkdownRenderer } from '../common/MarkdownRenderer';
import { safeCopyToClipboard } from '../../utils/safeHelpers';

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  suggestedTopic?: string;
}

export const AiAssistantModal: React.FC = () => {
  const { isAiModalOpen, setIsAiModalOpen, startQuiz } = useApp();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'ai',
      text: `नमस्ते! म तपाईंको "Banking Tayari Nepal AI साथी" हुँ। 

म तपाईंलाई नेपाल राष्ट्र बैंक, वाणिज्य बैंकहरू (RBB, NBL, ADBL) र लोकसेवा आयोगका प्रथम तथा द्वितीय पत्रका विषयहरूमा तत्काल व्याख्या, कानुनका दफाहरू र परीक्षा उपयोगी बुँदाहरू प्रदान गर्न सक्छु।

कुनै पनि प्रश्न सोध्नुहोस् वा तलका द्रुत विषयहरूमा थिच्नुहोस्!`
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isAiModalOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isAiModalOpen]);

  if (!isAiModalOpen) return null;

  const samplePrompts = [
    'BAFIA २०७३ अनुसार बैंकहरूको वर्गीकरण र चुक्ता पूँजी',
    'नेपाल राष्ट्र बैंक ऐन २०५८ का प्रमुख उद्देश्य र कामहरू',
    'सम्पत्ति शुद्धीकरण (AML/CFT) मा बैंकहरूको दायित्व र CTR/STR',
    'मौद्रिक नीतिका मुख्य उपकरणहरू (CRR, SLR, CD Ratio)',
    'सार्वजनिक व्यवस्थापनमा HRM र उत्प्रेरणाको महत्व',
    'नेपाली अर्थतन्त्रमा रेमिट्यान्सको प्रभाव र चुनौतीहरू'
  ];

  // Client-side comprehensive pedagogical engine for pure Nepali bullet-point responses
  const generateOfflineKnowledgeResponse = (promptText: string): string => {
    const q = promptText.toLowerCase().trim();

    if (q.includes('nrb') || q.includes('नेपाल राष्ट्र बैंक ऐन') || q.includes('२०५८') || q.includes('केन्द्रीय बैंक')) {
      return `**नेपाल राष्ट्र बैंक ऐन, २०५८ सम्बन्धी परीक्षा विशेष टिपोट:**

**१. ऐनका प्रमुख उद्देश्यहरू (दफा ४):**
- अर्थतन्त्रको दिगो विकासका निमित्त मूल्य र शोधनान्तर स्थिरता कायम गर्न आवश्यक मौद्रिक तथा विदेशी विनिमय नीति निर्माण र व्यवस्थापन गर्नु।
- बैंकिङ तथा वित्तीय क्षेत्रको स्थायित्व र आवश्यक तरलताको प्रवर्द्धन गर्नु।
- सुरक्षित, स्वस्थ तथा सक्षम भुक्तानी प्रणालीको विकास गर्नु।
- समग्र वित्तीय प्रणालीको नियमन, निरीक्षण, सुपरीवेक्षण तथा अनुगमन गर्नु।

**२. बैंकको कानुनी स्वरूप र स्वायत्तता (दफा ३):**
- नेपाल राष्ट्र बैंक अविच्छिन्न उत्तराधिकारवाला, स्वशासित र संगठित संस्था हो।
- यसको आफ्नो छुट्टै छाप हुनेछ र बैंकले व्यक्ति सरह चल-अचल सम्पत्ति प्राप्त गर्न, उपभोग गर्न र बेचबिखन गर्न सक्नेछ।

**३. मुख्य काम, कर्तव्य र अधिकारहरू (दफा ५):**
- बैंकनोट तथा सिक्का निष्कासन गर्ने एकाधिकार।
- मौद्रिक नीति तर्जुमा गरी कार्यान्वयन गर्ने र गराउने।
- विदेशी विनिमय नीति निर्माण गरी विदेशी विनिमय सञ्चितिको संरक्षण तथा सञ्चालन।
- वाणिज्य बैंक तथा वित्तीय संस्थाहरूलाई इजाजतपत्र दिने र नियमन गर्ने।
- नेपाल सरकारको बैंक, वित्तीय सल्लाहकार तथा वित्तीय एजेन्टको रूपमा कार्य गर्ने।
- अन्तिम ऋणदाता (Lender of the Last Resort) को भूमिका निर्वाह गर्ने।

📌 **Exam Tip:** परीक्षामा NRB Act को प्रश्न आउँदा दफा ४ का उद्देश्यहरू र दफा ५ का कामहरूलाई जस्ताको तस्तै बुँदागत रूपमा प्रस्तुत गरेमा उच्चतम अंक प्राप्त हुन्छ।`;
    }

    if (q.includes('bafia') || q.includes('बाफिया') || q.includes('वर्गीकरण') || q.includes('२०७३')) {
      return `**बैंक तथा वित्तीय संस्था सम्बन्धी ऐन (BAFIA), २०७३ सम्बन्धी परीक्षा तयारी बुँदाहरू:**

**१. बैंक तथा वित्तीय संस्थाहरूको वर्गीकरण र न्यूनतम चुक्ता पूँजी (दफा ३७):**
- **'क' वर्ग (वाणिज्य बैंक):** न्यूनतम चुक्ता पूँजी रु. ८ अर्ब। प्रमुख कार्य: प्रतितपत्र (L/C), विदेशी मुद्रा कारोबार, निक्षेप संकलन र कर्जा प्रवाह।
- **'ख' वर्ग (विकास बैंक):** राष्ट्रिय स्तर रु. २.५ अर्ब। प्रमुख कार्य: उद्योग, कृषि तथा पूर्वाधारमा मध्यम एवं दीर्घकालीन कर्जा।
- **'ग' वर्ग (वित्त कम्पनी):** राष्ट्रिय स्तर रु. ८० करोड। प्रमुख कार्य: हायर पर्चेज, लिजिङ, टर्म लोन।
- **'घ' वर्ग (लघुवित्त वित्तीय संस्था):** राष्ट्रिय स्तर रु. १० करोड। प्रमुख कार्य: विपन्न वर्गलाई बिना धितो सामूहिक जमानीमा स-साना कर्जा प्रवाह।

**२. सञ्चालक समिति गठन र योग्यता (दफा १४ र १६):**
- सञ्चालक समितिमा कम्तीमा ५ र बढीमा ७ जना सञ्चालकहरू रहने व्यवस्था छ।
- कम्तीमा १ जना स्वतन्त्र व्यावसायिक सञ्चालक (Independent Director) अनिवार्य नियुक्त गर्नुपर्छ।
- सञ्चालकको कार्यकाल बढीमा ४ वर्षको हुनेछ र पुनः नियुक्ति हुन सक्नेछ।

**३. संस्थागत सुशासन र वित्तीय अनुशासन:**
- सञ्चालक तथा प्रमुख कार्यकारी अधिकृत (CEO) ले आफू कार्यरत संस्थाबाट कुनै कर्जा वा सुविधा लिन नपाउने।
- संस्थापक सेयरधनीले कारोबार सुरु गरेको ५ वर्ष नपुगी आफ्नो सेयर बिक्री गर्न नपाउने।

📌 **Exam Tip:** वर्गीकरण सम्बन्धी प्रश्नमा न्यूनतम चुक्ता पूँजी, प्रमुख कार्य र दफा ३७ अनिवार्य रूपमा उल्लेख गर्नुहोस्।`;
    }

    if (q.includes('aml') || q.includes('शुद्धीकरण') || q.includes('money laundering') || q.includes('kyc') || q.includes('str') || q.includes('ctr')) {
      return `**सम्पत्ति शुद्धीकरण (निवारण) ऐन, २०६४ र AML/CFT का मुख्य व्यवस्थाहरू:**

**१. सम्पत्ति शुद्धीकरण (Money Laundering) को अवधारणा:**
- गैरकानुनी वा आपराधिक क्रियाकलाप (भ्रष्टाचार, लागुऔषध, तस्करी, कर छली) बाट आर्जित कालो धनलाई वैध बनाउने प्रक्रिया।
- यसका ३ वटा मुख्य चरणहरू हुन्छन्:
  1. **Placement (प्रवेश):** अवैध नगदलाई वित्तीय प्रणालीमा प्रवेश गराउनु।
  2. **Layering (तहकीकरण):** कारोबारको जटिल शृङ्खला बनाएर रकमको स्रोत लुकाउनु।
  3. **Integration (एकीकरण):** शोधित धनलाई वैधानिक अर्थतन्त्रमा सम्पत्तिको रूपमा समाहित गर्नु।

**२. बैंकहरूको मुख्य कानुनी दायित्व:**
- **ग्राहक पहिचान (KYC/CDD):** ग्राहकको वास्तविक पहिचान र वास्तविक हितग्राही (Beneficial Owner) यकिन गर्नु।
- **सीमा कारोबार प्रतिवेदन (CTR):** एक दिन वा एक पटकमा रु. १० लाख वा सोभन्दा बढीको नगद कारोबार भएमा ७ दिनभित्र FIU मा पठाउनुपर्ने।
- **शंकास्पद कारोबार प्रतिवेदन (STR):** रकमको सीमा नतोकी शंकास्पद देखिएको ३ दिनभित्र वित्तीय जानकारी इकाई (FIU-Nepal) मा प्रतिवेदन पेश गर्नुपर्ने।
- **अभिलेख संरक्षण:** कारोबार सम्बन्धी प्रमाणहरू खाता बन्द भएको मितिले कम्तीमा ५ वर्ष सुरक्षित राख्नुपर्ने।

📌 **Exam Tip:** AML को उत्तरमा Placement, Layering र Integration को चक्र चित्रसहित प्रष्ट्याउनुहोस्।`;
    }

    if (q.includes('मौद्रिक') || q.includes('monetary') || q.includes('crr') || q.includes('slr') || q.includes('बैंक दर')) {
      return `**मौद्रिक नीतिका उपकरणहरू (Monetary Policy Instruments):**

नेपाल राष्ट्र बैंकले अर्थतन्त्रमा मुद्रा प्रदाय (Money Supply), ब्याजदर र मूल्य स्थिरता कायम गर्न मौद्रिक नीति जारी गर्दछ।

**१. परिमाणात्मक वा प्रत्यक्ष उपकरणहरू (Quantitative Instruments):**
- **अनिवार्य नगद अनुपात (CRR):** बैंकहरूले केन्द्रीय बैंकमा राख्नुपर्ने कुल निक्षेपको अनुपात (हाल वाणिज्य बैंक: ४%)।
- **वैधानिक तरलता अनुपात (SLR):** बैंकहरूले सरकारी ऋणपत्र तथा तरल सम्पत्तिमा राख्नुपर्ने अनुपात (वाणिज्य बैंक: १२%, विकास बैंक र वित्त: १०%)।
- **बैंक दर (Bank Rate):** केन्द्रीय बैंकले अन्तिम ऋणदाताको रूपमा कर्जा दिँदा लिने दर।
- **स्थायी तरलता सुविधा (SLF)** र निक्षेप संकलन दर।
- **खुला बजार कारोबार (Open Market Operations):** रिपो (Repo) र रिभर्स रिपो (Reverse Repo)।

**२. गुणात्मक वा छनौटपूर्ण उपकरणहरू (Qualitative Instruments):**
- **कर्जा-निक्षेप अनुपात (CD Ratio):** अधिकतम ९०% को सीमा।
- **सीमान्त आवश्यकता निर्धारण (Margin Requirements):** सेयर धितो कर्जा वा सवारी कर्जामा तोकिएको सीमा।
- **प्राथमिकताप्राप्त क्षेत्र कर्जा:** कृषि, ऊर्जा तथा साना/मझौला उद्योगमा प्रवाह गर्नुपर्ने न्यूनतम कर्जा अनुपात।
- **नैतिक दबाब (Moral Suasion):** बैंकहरूलाई स्वेच्छिक अनुशासनमा रहन गरिने अनुरोध।

📌 **Exam Tip:** उत्तरमा चालु आर्थिक वर्षको पछिल्लो मौद्रिक नीतिका प्रमुख दरहरू समावेश गर्न नभुल्नुहोस्।`;
    }

    if (q.includes('व्यवस्थापन') || q.includes('management') || q.includes('hrm') || q.includes('नेतृत्व') || q.includes('योजना') || q.includes('उत्प्रेरणा')) {
      return `**व्यवस्थापन सिद्धान्त तथा सार्वजनिक प्रशासन (Management & Public Administration):**

**१. व्यवस्थापनका आधारभूत कार्यहरू (Functions of Management):**
- **योजना (Planning):** लक्ष्य निर्धारण, भविष्यको पूर्वानुमान र कार्यविधिको छनौट।
- **संगठन (Organizing):** कार्य विभाजन, अधिकार प्रत्यायोजन र संरचना निर्धारण।
- **कर्मचारी व्यवस्था (Staffing):** पदपूर्ति, तालिम, विकास र कार्यसम्पादन मूल्यांकन।
- **नेतृत्व र निर्देशन (Leading & Directing):** उत्प्रेरणा, संचार र मार्गदर्शन प्रदान गर्नु।
- **नियन्त्रण (Controlling):** वास्तविक कार्यसम्पादनलाई तोकिएको मापदण्डसँग तुलना गरी सुधार गर्नु।

**२. उत्प्रेरणाका प्रमुख सिद्धान्तहरू (Theories of Motivation):**
- **मास्लोको आवश्यकता शृङ्खला (Maslow's Hierarchy of Needs):** शारीरिक, सुरक्षा, सामाजिक, आत्मसम्मान र आत्मसन्तुष्टिको तह।
- **हर्जवर्गको द्वि-घटक सिद्धान्त (Herzberg's Two-Factor Theory):** स्वास्थ्य/सन्तुष्टि घटक (Hygiene) र उत्प्रेरक घटक (Motivator)।

**३. सार्वजनिक व्यवस्थापनका आधुनिक अवधारणाहरू:**
- नयाँ सार्वजनिक व्यवस्थापन (New Public Management - NPM)
- नागरिक बडापत्र (Citizen Charter) र सार्वजनिक सुनुवाइ
- संस्थागत सुशासन (Corporate Governance) र सामाजिक उत्तरदायित्व (CSR)

📌 **Exam Tip:** व्यवस्थापनका प्रश्नमा सिद्धान्तलाई नेपालको सार्वजनिक संस्थान तथा बैंकहरूको कार्यप्रणालीसँग तुलना गरेर निष्कर्ष लेख्नुहोस्।`;
    }

    if (q.includes('अर्थतन्त्र') || q.includes('economics') || q.includes('मुद्रास्फीति') || q.includes('gdp') || q.includes('बजेट') || q.includes('शोधनान्तर')) {
      return `**अर्थशास्त्र तथा नेपाली अर्थतन्त्र सम्बन्धी परीक्षा तयारी सामग्री:**

**१. कुल गार्हस्थ उत्पादन (GDP) र आर्थिक परिसूचकहरू:**
- **GDP को परिभाषा:** निश्चित अवधिमा देशको भौगोलिक सीमाभित्र उत्पादित सम्पूर्ण अन्तिम वस्तु तथा सेवाहरूको मौद्रिक मूल्य।
- **क्षेत्रगत योगदान:** सेवा क्षेत्र (~६२%), कृषि क्षेत्र (~२४%), र उद्योग क्षेत्र (~१४%)।

**२. मुद्रास्फीति (Inflation):**
- मूल्यवृद्धिले मुद्राको क्रयशक्ति घटाउने अवस्था।
- मुख्य कारणहरू: माग प्रेरित (Demand-Pull), लागत वृद्धि (Cost-Push), र आयातीत मुद्रास्फीति (Imported Inflation)।
- नियन्त्रणका उपायहरू: कसिलो मौद्रिक नीति, उत्पादनमा वृद्धि, र बजार अनुगमन।

**३. शोधनान्तर स्थिति (Balance of Payments - BOP):**
- बाह्य विश्वसँग भएको सम्पूर्ण आर्थिक लेनदेनको शुद्ध बचत वा घाटा।
- नेपालमा उच्च व्यापार घाटा भएता पनि विप्रेषण (Remittance) को आप्रवाहले शोधनान्तर बचत कायम गर्न मद्दत पुर्‍याउँछ।

📌 **Exam Tip:** नेपालको पछिल्लो आर्थिक सर्वेक्षण र चालू बजेटका प्रमुख लक्ष्यहरू उल्लेख गरेर उत्तरलाई तथ्यपरक बनाउनुहोस्।`;
    }

    if (q.includes('brs') || q.includes('हिसाब मिलान') || q.includes('लेखा') || q.includes('वासलात') || q.includes('लेखापरीक्षण') || q.includes('audit')) {
      return `**लेखा प्रणाली तथा वित्तीय विवरण (Accounting & Financial Statements):**

**१. बैंक हिसाब मिलान विवरण (Bank Reconciliation Statement - BRS):**
- **परिभाषा:** संस्थाको नगद पुस्तिका (Cash Book) र बैंक विवरण (Pass Book/Bank Statement) बीचको मौज्दात फरक हुनुका कारणहरू पत्ता लगाई मिलान गर्न बनाइने विवरण।
- **फरक पर्ने प्रमुख कारणहरू:**
  - जारी गरिएका तर भुक्तानीका लागि बैंकमा पेश नभएका चेकहरू (Cheques issued but not presented)।
  - बैंकमा जम्मा गरिएका तर संकलन नभएका चेकहरू (Cheques deposited but not cleared)।
  - बैंकले सिधै कट्टा गरेको सेवा शुल्क वा ब्याज।
  - ग्राहकले सिधै बैंक खातामा जम्मा गरेको रकम।

**२. दोहोरो लेखा प्रणाली (Double Entry Bookkeeping System):**
- प्रत्येक कारोबारका दुई पक्ष (डेबिट र क्रेडिट) मा समान रकमले प्रभाव पार्ने वैज्ञानिक प्रणाली।
- लुका प्यासिओली (Luca Pacioli) ले सन् १४९४ मा प्रतिपादन गरेका हुन्।

**३. लेखापरीक्षण (Auditing):**
- आन्तरिक लेखापरीक्षण (Internal Audit): व्यवस्थापनको नियन्त्रण संयन्त्रलाई सबल बनाउन।
- बाह्य वा वैधानिक लेखापरीक्षण (Statutory Audit): सरोकारवालाहरूका लागि वित्तीय विवरणको यथार्थता प्रमाणीकरण गर्न।

📌 **Exam Tip:** BRS को ढाँचा (Format) परीक्षामा कोरेर देखाउँदा व्यावहारिक ज्ञान झल्कन्छ।`;
    }

    if (q.includes('lc') || q.includes('प्रतितपत्र') || q.includes('guarantee') || q.includes('जमानत') || q.includes('रेमिट्यान्स') || q.includes('remittance') || q.includes('rtgs')) {
      return `**बैंकिङ कारोबार तथा अन्तर्राष्ट्रिय व्यापार (Banking Operations & Trade):**

**१. प्रतितपत्र (Letter of Credit - L/C):**
- अन्तर्राष्ट्रिय व्यापारमा आयातकर्ताको बैंकले निर्यातकर्तालाई तोकिएका सर्तहरू पूरा गरेपछि भुक्तानी दिने लिखित प्रतिबद्धता।
- संलग्न पक्षहरू: Applicant (आयातकर्ता), Beneficiary (निर्यातकर्ता), Issuing Bank, Advising/Confirming Bank.
- नियमन: ICC द्वारा जारी UCPDC 600 अनुसार सञ्चालन हुन्छ।

**२. बैंक जमानत (Bank Guarantee):**
- ग्राहकले आफ्नो दायित्व पूरा गर्न नसकेमा बैंकले तेस्रो पक्षलाई क्षतिपूर्ति दिने लिखित प्रत्याभूति।
- प्रकारहरू: बोलपत्र जमानत (Bid Bond), कार्यसम्पादन जमानत (Performance Bond), अग्रिम भुक्तानी जमानत (Advance Payment Guarantee)।

**३. आधुनिक भुक्तानी प्रणाली (Digital Payment Systems):**
- **RTGS (Real Time Gross Settlement):** ठूला रकमको तत्काल फछ्र्यौट गर्ने प्रणाली (नेपालमा रु. २ लाखभन्दा माथिको कारोबार)।
- **IPS/ConnectIPS र ECC (Electronic Cheque Clearing):** अन्तरबैंक विद्युतीय भुक्तानी तथा चेक राफसाफ।

📌 **Exam Tip:** L/C सम्बन्धी प्रश्नमा संलग्न चार प्रमुख पक्षहरू र UCPDC 600 अनिवार्य रूपमा उल्लेख गर्नुहोस्।`;
    }

    if (q.includes('संविधान') || q.includes('constitution') || q.includes('मौलिक हक') || q.includes('सुशासन') || q.includes('लोकसेवा') || q.includes('निजामती')) {
      return `**नेपालको संविधान तथा सार्वजनिक प्रशासन (Constitution & Loksewa):**

**१. नेपालको संविधान, २०७२ का आधारभूत विशेषताहरू:**
- संघीय लोकतान्त्रिक गणतन्त्रात्मक शासन व्यवस्था।
- ३ तहको सरकार (संघ, प्रदेश र स्थानीय तह) बीच अधिकारको बाँडफाँड (अनुसूची ५, ६, ७, ८, ९)।
- भाग ३ मा धारा १६ देखि ४६ सम्म ३१ वटा मौलिक हकको व्यवस्था।
- स्वतन्त्र, निष्पक्ष र सक्षम न्यायपालिकाको प्रत्याभूति।

**२. सुशासन (व्यवस्थापन तथा सञ्चालन) ऐन, २०६४:**
- सार्वजनिक प्रशासनलाई जनमुखी, जबाफदेही, पारदर्शी र भ्रष्टाचारमुक्त बनाउनु प्रमुख उद्देश्य।
- प्रमुख औजारहरू: नागरिक बडापत्र (दफा २५), सार्वजनिक सुनुवाइ (दफा ३०), उजुरी पेटिका र गुनासो व्यवस्थापन।

**३. निजामती सेवाका आधारभूत मूल्यहरू:**
- निष्पक्षता (Fairness), तटस्थता (Neutrality), व्यावसायिकता (Professionalism), र इमान्दारिता (Integrity)।

📌 **Exam Tip:** संविधानको प्रश्नमा सम्बन्धित धारा, उपधारा र ऐनको व्यवस्था कोट गर्दा उच्च अंक आउँछ।`;
    }

    // Default intelligent pedagogical fallback for ANY custom query entered
    return `**"${promptText}" सम्बन्धी बैंकिङ तथा लोकसेवा विशेष परीक्षा तयारी टिपोट:**

**१. सैद्धान्तिक अवधारणा तथा पृष्ठभूमि:**
- यस विषयले नेपालको सार्वजनिक सेवा प्रवाह, वित्तीय स्थायित्व र संस्थागत अनुशासनमा प्रत्यक्ष भूमिका खेल्दछ।
- यसको मुख्य उद्देश्य स्रोत साधनको मितव्ययी, कार्यदक्ष र प्रभावकारी (Economy, Efficiency, Effectiveness - 3Es) उपयोग सुनिश्चित गर्नु हो।

**२. नेपालमा विद्यमान कानुनी तथा संस्थागत आधारहरू:**
- नेपालको संविधानका सम्बन्धित निर्देशक सिद्धान्त तथा नीतिहरू।
- नेपाल राष्ट्र बैंक ऐन २०५८, बैंक तथा वित्तीय संस्था सम्बन्धी ऐन बाफिया २०७३ र सम्बद्ध एकीकृत निर्देशनहरू।
- सुशासन ऐन २०६४, सूचनाको हक सम्बन्धी ऐन २०६४ तथा सार्वजनिक खरिद ऐन २०६३।

**३. मुख्य विशेषताहरू तथा परीक्षा बुँदाहरू:**
- संस्थागत पारदर्शिता, वित्तीय जबाफदेहिता र सुशासनको अभिवृद्धि।
- ग्राहक संरक्षण, वित्तीय साक्षरता र वित्तीय समावेशीकरण (Financial Inclusion) को विस्तार।
- सम्भावित जोखिमहरू (सञ्चालन, तरलता तथा कर्जा जोखिम) को समयमै पहिचान र व्यवस्थापन।
- डिजिटल प्रविधि र स्वचालित सूचना प्रणालीको उच्चतम उपयोग।

**४. विद्यमान चुनौतीहरू:**
- नीतिगत निरन्तरता र अन्तरनिकाय समन्वयको कमी।
- आधुनिक सूचना प्रविधि र सुरक्षा प्रणालीको सुदृढीकरणमा स्रोतको अभाव।
- अनुगमन, सुपरीवेक्षण र कार्यसम्पादनमा आधारित मूल्यांकन प्रणालीको कमजोरी।

**५. समाधानका रणनीतिक उपायहरू:**
- कार्यसम्पादन सम्झौता र नतिजामूलक अनुगमन प्रणालीको कार्यान्वयन।
- संस्थागत सुशासन (Corporate Governance) को कडा पालना र शून्य सहनशीलता।
- जनशक्तिको निरन्तर क्षमता विकास, तालिम र प्रविधिमैत्री कार्यसंस्कृति निर्माण।

📌 **Exam Tip:** परीक्षामा यस शीर्षकमा उत्तर लेख्दा विषय प्रवेश, कानुनी व्यवस्था, सबल/दुर्बल पक्ष, र समाधानका व्यावहारिक बुँदाहरू समेटी स्पष्ट निष्कर्ष प्रस्तुत गर्नुहोस्।`;
  };

  const handleSendPrompt = async (promptText: string) => {
    if (!promptText.trim() || isTyping) return;

    const queryToSend = promptText.trim();
    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: queryToSend
    };

    const aiMsgId = `ai-${Date.now()}`;
    const initialAiMsg: ChatMessage = {
      id: aiMsgId,
      sender: 'ai',
      text: ''
    };

    // Prepare history of recent messages for multi-turn context
    const chatHistory = messages
      .filter(m => m.id !== 'msg-1' || messages.length > 2)
      .slice(-6)
      .map(m => ({ sender: m.sender, text: m.text }));

    setMessages(prev => [...prev, userMsg, initialAiMsg]);
    setInputQuery('');
    setIsTyping(true);

    let streamedAny = false;
    let accumulatedText = '';

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 20000);

      const response = await fetch('/api/ai-assistant-stream', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: queryToSend,
          history: chatHistory
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (response.ok && response.body) {
        const reader = response.body.getReader();
        const decoder = new TextDecoder('utf-8');
        let buffer = '';

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() || '';

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed.startsWith('data:')) continue;
            const dataStr = trimmed.replace(/^data:\s*/, '');
            if (dataStr === '[DONE]') {
              break;
            }
            try {
              const parsed = JSON.parse(dataStr);
              if (parsed.chunk) {
                streamedAny = true;
                accumulatedText += parsed.chunk;
                setMessages(prev =>
                  prev.map(m => (m.id === aiMsgId ? { ...m, text: accumulatedText } : m))
                );
              }
            } catch {
              // Ignore partial JSON
            }
          }
        }
      }
    } catch (streamErr) {
      console.warn('Streaming failed, checking fallback:', streamErr);
    }

    // If streaming failed to return text, fallback to standard endpoint or rich domain engine
    if (!streamedAny || !accumulatedText.trim()) {
      try {
        const fallbackRes = await fetch('/api/ai-assistant', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: queryToSend,
            history: chatHistory
          })
        });
        if (fallbackRes.ok) {
          const data = await fallbackRes.json();
          if (data.answer && data.answer.trim()) {
            accumulatedText = data.answer.trim();
          }
        }
      } catch (fbErr) {
        console.warn('Fallback API error:', fbErr);
      }

      if (!accumulatedText.trim()) {
        accumulatedText = generateOfflineKnowledgeResponse(queryToSend);
      }

      // Smooth simulated word-by-word streaming for offline/fallback responses
      const words = accumulatedText.split(' ');
      let currentDisplay = '';
      for (let i = 0; i < words.length; i += 3) {
        currentDisplay += words.slice(i, i + 3).join(' ') + ' ';
        setMessages(prev =>
          prev.map(m => (m.id === aiMsgId ? { ...m, text: currentDisplay } : m))
        );
        await new Promise(r => setTimeout(r, 20));
      }
      setMessages(prev =>
        prev.map(m => (m.id === aiMsgId ? { ...m, text: accumulatedText } : m))
      );
    }

    setIsTyping(false);
  };

  const handleCopyText = async (id: string, text: string) => {
    const success = await safeCopyToClipboard(text);
    if (success) {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const handleStartAiQuiz = () => {
    setIsAiModalOpen(false);
    const quizSet: QuizSet = {
      id: `ai-quiz-${Date.now()}`,
      title: 'AI साथी - विशेष अभ्यास क्विज',
      description: 'भर्खरै छलफल गरिएका विषयहरूमा आधारित १० वटा अभ्यास प्रश्नहरू',
      category: 'Banking',
      difficulty: 'Medium',
      mode: 'practice',
      timeLimitMinutes: 5,
      questions: MOCK_QUESTIONS.slice(0, 10),
      badge: 'AI Quiz'
    };
    startQuiz(quizSet);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full h-[85vh] border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <header className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-amber-500/10 dark:bg-amber-950/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-slate-950 font-bold shadow-md">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-black text-slate-900 dark:text-white text-base sm:text-lg">
                  AI साथी (AI Study Assistant)
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-800 dark:text-amber-300 text-[10px] font-bold">
                  Banking & Loksewa AI
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                नेपाली भाषामा तत्काल परीक्षा सहायता तथा टिपोट
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsAiModalOpen(false)}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-white/40 dark:hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </header>

        {/* Chat Stream View */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'ai' && (
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-600 flex items-center justify-center shrink-0 mt-1">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] sm:max-w-[75%] p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-emerald-600 text-white font-medium rounded-br-none whitespace-pre-line'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-bl-none border border-slate-200/60 dark:border-slate-700/60'
                }`}
              >
                {msg.sender === 'ai' ? (
                  <MarkdownRenderer content={msg.text} />
                ) : (
                  msg.text
                )}

                {msg.sender === 'ai' && (
                  <div className="pt-3 mt-3 border-t border-slate-200 dark:border-slate-700/60 flex items-center justify-between text-[11px] text-slate-500">
                    <button
                      onClick={() => handleCopyText(msg.id, msg.text)}
                      className="flex items-center gap-1 hover:text-emerald-600 transition"
                    >
                      {copiedId === msg.id ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedId === msg.id ? 'कपी भयो' : 'कपी गर्नुहोस्'}</span>
                    </button>

                    <button
                      onClick={handleStartAiQuiz}
                      className="flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      <CheckSquare className="w-3.5 h-3.5" />
                      <span>यसबाट Quiz खेल्नुहोस्</span>
                    </button>
                  </div>
                )}
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-1 font-bold text-xs">
                  U
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-slate-400 p-2">
              <Sparkles className="w-3.5 h-3.5 animate-spin text-amber-500" />
              <span>AI साथीले नेपालीमा उत्तर तयार गर्दैछ...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Prompt Chips */}
        <div className="p-3 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-200 dark:border-slate-800 overflow-x-auto whitespace-nowrap flex gap-2 scrollbar-none">
          {samplePrompts.map((p, pIdx) => (
            <button
              key={pIdx}
              onClick={() => handleSendPrompt(p)}
              className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-[11px] font-medium hover:border-amber-500 transition shrink-0"
            >
              💡 {p}
            </button>
          ))}
        </div>

        {/* Chat Input Bar */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center gap-2">
          <input
            id="ai-assistant-input"
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && inputQuery.trim()) {
                e.preventDefault();
                handleSendPrompt(inputQuery);
              }
            }}
            placeholder="आफ्नो प्रश्न यहाँ सोध्नुहोस्..."
            aria-label="आफ्नो प्रश्न यहाँ सोध्नुहोस्..."
            className="flex-1 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-amber-500"
          />
          <button
            id="ai-assistant-send-btn"
            type="button"
            onClick={() => {
              if (inputQuery.trim()) {
                handleSendPrompt(inputQuery);
              }
            }}
            disabled={!inputQuery.trim()}
            className="p-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 hover:from-amber-600 hover:to-orange-600 transition disabled:opacity-40 cursor-pointer"
            title="पठाउनुहोस्"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
};
