export interface NepalDistrict {
  id: string;
  nameNepali: string;
  nameEnglish: string;
  province: string;
  provinceNepali: string;
  headquarters: string;
}

export interface NepalProvince {
  id: string;
  nameNepali: string;
  nameEnglish: string;
}

export const NEPAL_PROVINCES: NepalProvince[] = [
  { id: 'Koshi', nameNepali: 'कोशी प्रदेश', nameEnglish: 'Koshi' },
  { id: 'Madhesh', nameNepali: 'मधेश प्रदेश', nameEnglish: 'Madhesh' },
  { id: 'Bagmati', nameNepali: 'बागमती प्रदेश', nameEnglish: 'Bagmati' },
  { id: 'Gandaki', nameNepali: 'गण्डकी प्रदेश', nameEnglish: 'Gandaki' },
  { id: 'Lumbini', nameNepali: 'लुम्बिनी प्रदेश', nameEnglish: 'Lumbini' },
  { id: 'Karnali', nameNepali: 'कर्णाली प्रदेश', nameEnglish: 'Karnali' },
  { id: 'Sudurpashchim', nameNepali: 'सुदूरपश्चिम प्रदेश', nameEnglish: 'Sudurpashchim' }
];

export const NEPAL_77_DISTRICTS: NepalDistrict[] = [
  // Koshi Province (14)
  { id: 'bhojpur', nameNepali: 'भोजपुर', nameEnglish: 'Bhojpur', province: 'Koshi', provinceNepali: 'कोशी प्रदेश', headquarters: 'भोजपुर' },
  { id: 'dhankuta', nameNepali: 'धनकुटा', nameEnglish: 'Dhankuta', province: 'Koshi', provinceNepali: 'कोशी प्रदेश', headquarters: 'धनकुटा' },
  { id: 'ilam', nameNepali: 'इलाम', nameEnglish: 'Ilam', province: 'Koshi', provinceNepali: 'कोशी प्रदेश', headquarters: 'इलाम' },
  { id: 'jhapa', nameNepali: 'झापा', nameEnglish: 'Jhapa', province: 'Koshi', provinceNepali: 'कोशी प्रदेश', headquarters: 'भद्रपुर' },
  { id: 'khotang', nameNepali: 'खोटाङ', nameEnglish: 'Khotang', province: 'Koshi', provinceNepali: 'कोशी प्रदेश', headquarters: 'दिक्तेल' },
  { id: 'morang', nameNepali: 'मोरङ', nameEnglish: 'Morang', province: 'Koshi', provinceNepali: 'कोशी प्रदेश', headquarters: 'विराटनगर' },
  { id: 'okhaldhunga', nameNepali: 'ओखलढुङ्गा', nameEnglish: 'Okhaldhunga', province: 'Koshi', provinceNepali: 'कोशी प्रदेश', headquarters: 'ओखलढुङ्गा' },
  { id: 'panchthar', nameNepali: 'पाँचथर', nameEnglish: 'Panchthar', province: 'Koshi', provinceNepali: 'कोशी प्रदेश', headquarters: 'फिदिम' },
  { id: 'sankhuwasabha', nameNepali: 'सङ्खुवासभा', nameEnglish: 'Sankhuwasabha', province: 'Koshi', provinceNepali: 'कोशी प्रदेश', headquarters: 'खाँदबारी' },
  { id: 'solukhumbu', nameNepali: 'सोलुखुम्बु', nameEnglish: 'Solukhumbu', province: 'Koshi', provinceNepali: 'कोशी प्रदेश', headquarters: 'सल्लेरी' },
  { id: 'sunsari', nameNepali: 'सुनसरी', nameEnglish: 'Sunsari', province: 'Koshi', provinceNepali: 'कोशी प्रदेश', headquarters: 'इनरुवा' },
  { id: 'taplejung', nameNepali: 'ताप्लेजुङ', nameEnglish: 'Taplejung', province: 'Koshi', provinceNepali: 'कोशी प्रदेश', headquarters: 'फुङलिङ' },
  { id: 'terhathum', nameNepali: 'तेह्रथुम', nameEnglish: 'Terhathum', province: 'Koshi', provinceNepali: 'कोशी प्रदेश', headquarters: 'म्याङलुङ' },
  { id: 'udayapur', nameNepali: 'उदयपुर', nameEnglish: 'Udayapur', province: 'Koshi', provinceNepali: 'कोशी प्रदेश', headquarters: 'त्रियुगा (गाईघाट)' },

  // Madhesh Province (8)
  { id: 'saptari', nameNepali: 'सप्तरी', nameEnglish: 'Saptari', province: 'Madhesh', provinceNepali: 'मधेश प्रदेश', headquarters: 'राजविराज' },
  { id: 'siraha', nameNepali: 'सिराहा', nameEnglish: 'Siraha', province: 'Madhesh', provinceNepali: 'मधेश प्रदेश', headquarters: 'सिराहा' },
  { id: 'dhanusha', nameNepali: 'धनुषा', nameEnglish: 'Dhanusha', province: 'Madhesh', provinceNepali: 'मधेश प्रदेश', headquarters: 'जनकपुरधाम' },
  { id: 'mahottari', nameNepali: 'महोत्तरी', nameEnglish: 'Mahottari', province: 'Madhesh', provinceNepali: 'मधेश प्रदेश', headquarters: 'जलेश्वोर' },
  { id: 'sarlahi', nameNepali: 'सर्लाही', nameEnglish: 'Sarlahi', province: 'Madhesh', provinceNepali: 'मधेश प्रदेश', headquarters: 'मलङ्गवा' },
  { id: 'rautahat', nameNepali: 'रौतहट', nameEnglish: 'Rautahat', province: 'Madhesh', provinceNepali: 'मधेश प्रदेश', headquarters: 'गौर' },
  { id: 'bara', nameNepali: 'बारा', nameEnglish: 'Bara', province: 'Madhesh', provinceNepali: 'मधेश प्रदेश', headquarters: 'कलैया' },
  { id: 'parsa', nameNepali: 'पर्सा', nameEnglish: 'Parsa', province: 'Madhesh', provinceNepali: 'मधेश प्रदेश', headquarters: 'वीरगञ्ज' },

  // Bagmati Province (13)
  { id: 'sindhuli', nameNepali: 'सिन्धुली', nameEnglish: 'Sindhuli', province: 'Bagmati', provinceNepali: 'बागमती प्रदेश', headquarters: 'कमलामाई (सिन्धुलीमाडी)' },
  { id: 'ramechhap', nameNepali: 'रामेछाप', nameEnglish: 'Ramechhap', province: 'Bagmati', provinceNepali: 'बागमती प्रदेश', headquarters: 'मन्थली' },
  { id: 'dolakha', nameNepali: 'दोलखा', nameEnglish: 'Dolakha', province: 'Bagmati', provinceNepali: 'बागमती प्रदेश', headquarters: 'भीमेश्वर (चरीकोट)' },
  { id: 'sindhupalchok', nameNepali: 'सिन्धुपाल्चोक', nameEnglish: 'Sindhupalchok', province: 'Bagmati', provinceNepali: 'बागमती प्रदेश', headquarters: 'चौतारा' },
  { id: 'kavrepalanchok', nameNepali: 'काभ्रेपलाञ्चोक', nameEnglish: 'Kavrepalanchok', province: 'Bagmati', provinceNepali: 'बागमती प्रदेश', headquarters: 'धुलिखेल' },
  { id: 'lalitpur', nameNepali: 'ललितपुर', nameEnglish: 'Lalitpur', province: 'Bagmati', provinceNepali: 'बागमती प्रदेश', headquarters: 'ललितपुर (पाटन)' },
  { id: 'bhaktapur', nameNepali: 'भक्तपुर', nameEnglish: 'Bhaktapur', province: 'Bagmati', provinceNepali: 'बागमती प्रदेश', headquarters: 'भक्तपुर' },
  { id: 'kathmandu', nameNepali: 'काठमाडौँ', nameEnglish: 'Kathmandu', province: 'Bagmati', provinceNepali: 'बागमती प्रदेश', headquarters: 'काठमाडौँ' },
  { id: 'nuwakot', nameNepali: 'नुवाकोट', nameEnglish: 'Nuwakot', province: 'Bagmati', provinceNepali: 'बागमती प्रदेश', headquarters: 'विदुर' },
  { id: 'rasuwa', nameNepali: 'रसुवा', nameEnglish: 'Rasuwa', province: 'Bagmati', provinceNepali: 'बागमती प्रदेश', headquarters: 'धुन्चे' },
  { id: 'dhading', nameNepali: 'धादिङ', nameEnglish: 'Dhading', province: 'Bagmati', provinceNepali: 'बागमती प्रदेश', headquarters: 'धादिङबेसी' },
  { id: 'makwanpur', nameNepali: 'मकवानपुर', nameEnglish: 'Makwanpur', province: 'Bagmati', provinceNepali: 'बागमती प्रदेश', headquarters: 'हेटौँडा' },
  { id: 'chitwan', nameNepali: 'चितवन', nameEnglish: 'Chitwan', province: 'Bagmati', provinceNepali: 'बागमती प्रदेश', headquarters: 'भरतपुर' },

  // Gandaki Province (11)
  { id: 'gorkha', nameNepali: 'गोरखा', nameEnglish: 'Gorkha', province: 'Gandaki', provinceNepali: 'गण्डकी प्रदेश', headquarters: 'गोरखा' },
  { id: 'manang', nameNepali: 'मनाङ', nameEnglish: 'Manang', province: 'Gandaki', provinceNepali: 'गण्डकी प्रदेश', headquarters: 'चामे' },
  { id: 'mustang', nameNepali: 'मुस्ताङ', nameEnglish: 'Mustang', province: 'Gandaki', provinceNepali: 'गण्डकी प्रदेश', headquarters: 'जोमसोम' },
  { id: 'myagdi', nameNepali: 'म्याग्दी', nameEnglish: 'Myagdi', province: 'Gandaki', provinceNepali: 'गण्डकी प्रदेश', headquarters: 'बेनी' },
  { id: 'kaski', nameNepali: 'कास्की', nameEnglish: 'Kaski', province: 'Gandaki', provinceNepali: 'गण्डकी प्रदेश', headquarters: 'पोखरा' },
  { id: 'lamjung', nameNepali: 'लमजुङ', nameEnglish: 'Lamjung', province: 'Gandaki', provinceNepali: 'गण्डकी प्रदेश', headquarters: 'बेसीसहर' },
  { id: 'tanahun', nameNepali: 'तनहुँ', nameEnglish: 'Tanahu', province: 'Gandaki', provinceNepali: 'गण्डकी प्रदेश', headquarters: 'दमौली' },
  { id: 'nawalpur', nameNepali: 'नवलपुर', nameEnglish: 'Nawalpur', province: 'Gandaki', provinceNepali: 'गण्डकी प्रदेश', headquarters: 'कावासोती' },
  { id: 'syangja', nameNepali: 'स्याङ्जा', nameEnglish: 'Syangja', province: 'Gandaki', provinceNepali: 'गण्डकी प्रदेश', headquarters: 'पुतलीबजार' },
  { id: 'parbat', nameNepali: 'पर्वत', nameEnglish: 'Parbat', province: 'Gandaki', provinceNepali: 'गण्डकी प्रदेश', headquarters: 'कुश्मा' },
  { id: 'baglung', nameNepali: 'बागलुङ', nameEnglish: 'Baglung', province: 'Gandaki', provinceNepali: 'गण्डकी प्रदेश', headquarters: 'बागलुङ' },

  // Lumbini Province (12)
  { id: 'parasi', nameNepali: 'परासी', nameEnglish: 'Parasi', province: 'Lumbini', provinceNepali: 'लुम्बिनी प्रदेश', headquarters: 'रामग्राम' },
  { id: 'rupandehi', nameNepali: 'रूपन्देही', nameEnglish: 'Rupandehi', province: 'Lumbini', provinceNepali: 'लुम्बिनी प्रदेश', headquarters: 'सिद्धार्थनगर (भैरहवा)' },
  { id: 'kapilvastu', nameNepali: 'कपिलवस्तु', nameEnglish: 'Kapilvastu', province: 'Lumbini', provinceNepali: 'लुम्बिनी प्रदेश', headquarters: 'तौलिहवा' },
  { id: 'palpa', nameNepali: 'पाल्पा', nameEnglish: 'Palpa', province: 'Lumbini', provinceNepali: 'लुम्बिनी प्रदेश', headquarters: 'तानसेन' },
  { id: 'arghakhanchi', nameNepali: 'अर्घाखाँची', nameEnglish: 'Arghakhanchi', province: 'Lumbini', provinceNepali: 'लुम्बिनी प्रदेश', headquarters: 'सन्धिखर्क' },
  { id: 'gulmi', nameNepali: 'गुल्मी', nameEnglish: 'Gulmi', province: 'Lumbini', provinceNepali: 'लुम्बिनी प्रदेश', headquarters: 'तम्घास' },
  { id: 'pyuthan', nameNepali: 'प्युठान', nameEnglish: 'Pyuthan', province: 'Lumbini', provinceNepali: 'लुम्बिनी प्रदेश', headquarters: 'प्युठान (खलङ्गा)' },
  { id: 'rolpa', nameNepali: 'रोल्पा', nameEnglish: 'Rolpa', province: 'Lumbini', provinceNepali: 'लुम्बिनी प्रदेश', headquarters: 'लिवाङ' },
  { id: 'eastern-rukum', nameNepali: 'पूर्वी रुकुम', nameEnglish: 'Rukum East', province: 'Lumbini', provinceNepali: 'लुम्बिनी प्रदेश', headquarters: 'रुकुमकोट' },
  { id: 'dang', nameNepali: 'दाङ', nameEnglish: 'Dang', province: 'Lumbini', provinceNepali: 'लुम्बिनी प्रदेश', headquarters: 'घोराही' },
  { id: 'banke', nameNepali: 'बाँके', nameEnglish: 'Banke', province: 'Lumbini', provinceNepali: 'लुम्बिनी प्रदेश', headquarters: 'नेपालगञ्ज' },
  { id: 'bardiya', nameNepali: 'बर्दिया', nameEnglish: 'Bardiya', province: 'Lumbini', provinceNepali: 'लुम्बिनी प्रदेश', headquarters: 'गुलरिया' },

  // Karnali Province (10)
  { id: 'western-rukum', nameNepali: 'पश्चिम रुकुम', nameEnglish: 'Rukum West', province: 'Karnali', provinceNepali: 'कर्णाली प्रदेश', headquarters: 'मुसिकोट' },
  { id: 'salyan', nameNepali: 'सल्यान', nameEnglish: 'Salyan', province: 'Karnali', provinceNepali: 'कर्णाली प्रदेश', headquarters: 'सल्यान (खलङ्गा)' },
  { id: 'dolpa', nameNepali: 'डोल्पा', nameEnglish: 'Dolpa', province: 'Karnali', provinceNepali: 'कर्णाली प्रदेश', headquarters: 'दुनै' },
  { id: 'jumla', nameNepali: 'जुम्ला', nameEnglish: 'Jumla', province: 'Karnali', provinceNepali: 'कर्णाली प्रदेश', headquarters: 'खलङ्गा' },
  { id: 'mugu', nameNepali: 'मुगु', nameEnglish: 'Mugu', province: 'Karnali', provinceNepali: 'कर्णाली प्रदेश', headquarters: 'गमगढी' },
  { id: 'humla', nameNepali: 'हुम्ला', nameEnglish: 'Humla', province: 'Karnali', provinceNepali: 'कर्णाली प्रदेश', headquarters: 'सिमिकोट' },
  { id: 'kalikot', nameNepali: 'कालीकोट', nameEnglish: 'Kalikot', province: 'Karnali', provinceNepali: 'कर्णाली प्रदेश', headquarters: 'मान्म' },
  { id: 'jajarkot', nameNepali: 'जाजरकोट', nameEnglish: 'Jajarkot', province: 'Karnali', provinceNepali: 'कर्णाली प्रदेश', headquarters: 'खलङ्गा' },
  { id: 'dailekh', nameNepali: 'दैलेख', nameEnglish: 'Dailekh', province: 'Karnali', provinceNepali: 'कर्णाली प्रदेश', headquarters: 'नारायण' },
  { id: 'surkhet', nameNepali: 'सुर्खेत', nameEnglish: 'Surkhet', province: 'Karnali', provinceNepali: 'कर्णाली प्रदेश', headquarters: 'वीरेन्द्रनगर' },

  // Sudurpashchim Province (9)
  { id: 'bajura', nameNepali: 'बाजुरा', nameEnglish: 'Bajura', province: 'Sudurpashchim', provinceNepali: 'सुदूरपश्चिम प्रदेश', headquarters: 'मार्तडी' },
  { id: 'bajhang', nameNepali: 'बझाङ', nameEnglish: 'Bajhang', province: 'Sudurpashchim', provinceNepali: 'सुदूरपश्चिम प्रदेश', headquarters: 'चैनपुर' },
  { id: 'achham', nameNepali: 'अछाम', nameEnglish: 'Achham', province: 'Sudurpashchim', provinceNepali: 'सुदूरपश्चिम प्रदेश', headquarters: 'मङ्गलसेन' },
  { id: 'doti', nameNepali: 'डोटी', nameEnglish: 'Doti', province: 'Sudurpashchim', provinceNepali: 'सुदूरपश्चिम प्रदेश', headquarters: 'सिलगढी' },
  { id: 'kailali', nameNepali: 'कैलाली', nameEnglish: 'Kailali', province: 'Sudurpashchim', provinceNepali: 'सुदूरपश्चिम प्रदेश', headquarters: 'धनगढी' },
  { id: 'kanchanpur', nameNepali: 'कञ्चनपुर', nameEnglish: 'Kanchanpur', province: 'Sudurpashchim', provinceNepali: 'सुदूरपश्चिम प्रदेश', headquarters: 'भीमदत्त (महेन्द्रनगर)' },
  { id: 'dadeldhura', nameNepali: 'डडेलधुरा', nameEnglish: 'Dadeldhura', province: 'Sudurpashchim', provinceNepali: 'सुदूरपश्चिम प्रदेश', headquarters: 'अमरगढी' },
  { id: 'baitadi', nameNepali: 'बैतडी', nameEnglish: 'Baitadi', province: 'Sudurpashchim', provinceNepali: 'सुदूरपश्चिम प्रदेश', headquarters: 'दशरथचन्द' },
  { id: 'darchula', nameNepali: 'दार्चुला', nameEnglish: 'Darchula', province: 'Sudurpashchim', provinceNepali: 'सुदूरपश्चिम प्रदेश', headquarters: 'खलङ्गा' }
];

export const TARGET_EXAM_OPTIONS = [
  { id: 'nrb-4-5', nameNepali: 'नेपाल राष्ट्र बैंक (NRB Level 4/5)', nameEnglish: 'Nepal Rastra Bank (NRB Level 4/5)' },
  { id: 'rbb', nameNepali: 'राष्ट्रिय वाणिज्य बैंक (Rastriya Banijya Bank - RBB)', nameEnglish: 'Rastriya Banijya Bank (RBB)' },
  { id: 'adbl', nameNepali: 'कृषि विकास बैंक (Agricultural Development Bank - ADBL)', nameEnglish: 'Agricultural Development Bank (ADBL)' },
  { id: 'nbl', nameNepali: 'नेपाल बैंक लिमिटेड (Nepal Bank Limited - NBL)', nameEnglish: 'Nepal Bank Limited (NBL)' },
  { id: 'epf', nameNepali: "कर्मचारी सञ्चय कोष (Employees' Provident Fund - EPF)", nameEnglish: "Employees' Provident Fund (EPF)" },
  { id: 'sangathit-sastha', nameNepali: 'संगठित संस्था (Sangathit Sastha - CIT / NTC / Insurance)', nameEnglish: 'Sangathit Sastha (Public Enterprises)' }
];

/**
 * Accurately returns the list of Nepal districts for any given province name or ID.
 * Supports both English ID ('Koshi', 'Gandaki') and Nepali name ('कोशी प्रदेश', 'गण्डकी प्रदेश').
 */
export const getDistrictsByProvince = (provinceInput: string): NepalDistrict[] => {
  if (!provinceInput) return [];
  const normalized = provinceInput.trim().toLowerCase();
  return NEPAL_77_DISTRICTS.filter(d => 
    d.province.toLowerCase() === normalized ||
    d.provinceNepali.toLowerCase() === normalized ||
    d.provinceNepali === provinceInput ||
    d.province === provinceInput
  );
};

