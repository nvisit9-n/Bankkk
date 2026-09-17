export interface SocialChannel {
  id: 'tiktok' | 'youtube' | 'whatsapp' | 'telegram' | 'facebook';
  name: string;
  nepaliName: string;
  url: string;
  handle: string;
  description: string;
  badge: string;
  color: string;
  bgLight: string;
  hoverColor: string;
}

export const SOCIAL_CHANNELS: SocialChannel[] = [
  {
    id: 'tiktok',
    name: 'TikTok',
    nepaliName: 'टिकटक अकाउन्ट',
    url: 'https://www.tiktok.com/@bankingtayarinepal?is_from_webapp=1&sender_device=pc',
    handle: '@bankingtayarinepal',
    description: '१ मिनेटमा १ महत्वपूर्ण बैंकिङ तथा लोकसेवा सूत्र र ट्रिकहरू',
    badge: 'Quick Tips & Tricks',
    color: '#000000',
    bgLight: 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border-slate-300 dark:border-slate-700',
    hoverColor: 'hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900'
  },
  {
    id: 'youtube',
    name: 'YouTube',
    nepaliName: 'युट्युब च्यानल',
    url: 'https://www.youtube.com/@bankingtayarinepal',
    handle: '@bankingtayarinepal',
    description: 'दैनिक भिडियो कक्षाहरू, पुराना प्रश्न समाधान तथा परीक्षा विश्लेषण',
    badge: 'Video Classes',
    color: '#FF0000',
    bgLight: 'bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 border-red-200 dark:border-red-900',
    hoverColor: 'hover:bg-red-600 hover:text-white'
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp Channel',
    nepaliName: 'ह्वाट्सएप च्यानल',
    url: 'https://whatsapp.com/channel/0029VbB3G01GZNCuP7N71V0U',
    handle: 'Banking Tayari Channel',
    description: 'तत्काल सूचना, परीक्षा अपडेट, कक्षा तालिका र अन्तरक्रिया',
    badge: 'Instant Updates',
    color: '#25D366',
    bgLight: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900',
    hoverColor: 'hover:bg-[#25D366] hover:text-white'
  },
  {
    id: 'telegram',
    name: 'Telegram Channel',
    nepaliName: 'टेलिग्राम च्यानल',
    url: 'https://t.me/bankingpreprationnepal',
    handle: '@bankingpreprationnepal',
    description: 'निःशुल्क PDF नोट्स, ऐन-कानुन, मोडल प्रश्नपत्र र दैनिक क्विज',
    badge: 'Free PDFs & Notes',
    color: '#229ED9',
    bgLight: 'bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 border-sky-200 dark:border-sky-900',
    hoverColor: 'hover:bg-[#229ED9] hover:text-white'
  },
  {
    id: 'facebook',
    name: 'Facebook Page',
    nepaliName: 'फेसबुक पेज',
    url: 'https://www.facebook.com/BankingTayariNepal2',
    handle: 'Banking Tayari Nepal',
    description: 'ताजा सूचना, विज्ञापन, परीक्षा मिति तथा दैनिक GK/MCQ अपडेटहरू',
    badge: 'Official Updates',
    color: '#1877F2',
    bgLight: 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900',
    hoverColor: 'hover:bg-[#1877F2] hover:text-white'
  }
];
