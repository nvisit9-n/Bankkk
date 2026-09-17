import React from 'react';
import { BrandLogo } from '../common/BrandLogo';
import { SocialBrandIcon } from '../common/SocialIcons';
import { SOCIAL_CHANNELS } from '../../data/socialLinks';
import { useApp } from '../../context/AppContext';
import { Mail, MapPin, ExternalLink, Heart, Shield, BookOpen, Video, HelpCircle, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setActiveTab } = useApp();

  return (
    <footer className="w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8 border-b border-slate-100 dark:border-slate-800">
          
          {/* Col 1 & 2: Brand & Social Channels */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={() => setActiveTab('home')}
              className="cursor-pointer inline-block"
            >
              <BrandLogo variant="compact" />
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
              नेपाल राष्ट्र बैंक, वाणिज्य बैंकहरू (RBB, NBL, ADBL) र लोकसेवा आयोग परीक्षा तयारीको लागि भरपर्दो, विस्तृत र आधुनिक डिजिटल प्लेटफर्म।
            </p>

            {/* Social Media Connection Links */}
            <div className="space-y-2 pt-1">
              <p className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                हाम्रा सामाजिक सञ्जालहरूमा जोडिनुहोस् (Social Community):
              </p>
              
              <div className="flex items-center gap-2 flex-wrap pt-1">
                {SOCIAL_CHANNELS.map(ch => (
                  <a
                    key={ch.id}
                    href={ch.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`${ch.name} - ${ch.nepaliName}`}
                    className={`p-2.5 rounded-xl transition-all duration-200 text-slate-600 dark:text-slate-300 hover:text-white hover:scale-105 shadow-2xs border border-slate-200/80 dark:border-slate-700/60 ${
                      ch.id === 'youtube' ? 'hover:bg-[#FF0000] hover:border-[#FF0000]' :
                      ch.id === 'facebook' ? 'hover:bg-[#1877F2] hover:border-[#1877F2]' :
                      ch.id === 'tiktok' ? 'hover:bg-black dark:hover:bg-white dark:hover:text-black hover:border-black' :
                      ch.id === 'whatsapp' ? 'hover:bg-[#25D366] hover:border-[#25D366]' :
                      'hover:bg-[#229ED9] hover:border-[#229ED9]'
                    } bg-slate-50 dark:bg-slate-800/80`}
                  >
                    <SocialBrandIcon id={ch.id} className="w-5 h-5" />
                    <span className="sr-only">{ch.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              शीघ्र पहुँच (Quick Links)
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <li>
                <button 
                  onClick={() => setActiveTab('home')} 
                  className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                >
                  गृहपृष्ठ (Home)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('courses')} 
                  className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                >
                  पाठ्यक्रम (Syllabus)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('quiz')} 
                  className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                >
                  संगठित संस्था (Public Enterprises & PPP)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('video-lectures')} 
                  className="hover:text-red-600 dark:hover:text-red-400 transition-colors font-semibold flex items-center gap-1.5"
                >
                  <Video className="w-3.5 h-3.5 text-red-600" />
                  <span>युट्युब भिडियो कक्षाहरू (Videos)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('free-notes')} 
                  className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                >
                  अध्ययन नोट्स (Study Notes)
                </button>
              </li>
              <li>
                <button 
                  id="footer-nav-about-us"
                  onClick={() => setActiveTab('about')} 
                  className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors font-medium flex items-center gap-1 text-blue-600 dark:text-blue-400"
                >
                  <Sparkles className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span>हाम्रो बारेमा (About Us / Story)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Examination Modules */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              परीक्षा तयारी (Exams)
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <li>
                <button onClick={() => setActiveTab('courses')} className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
                  नेपाल राष्ट्र बैंक (NRB Assistant / Officer)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('courses')} className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
                  राष्ट्रिय वाणिज्य बैंक (RBB Level 4 & 5)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('courses')} className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
                  नेपाल बैंक लिमिटेड (NBL)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('courses')} className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
                  कृषि विकास बैंक (ADBL)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('courses')} className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
                  लोकसेवा आयोग (शाखा अधिकृत, नायब सुब्बा)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Support & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              सम्पर्क तथा सहयोग (Support)
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a href="mailto:support@bankingtayarinepal.com" className="hover:text-blue-600 transition-colors truncate">
                  support@bankingtayarinepal.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <span>काठमाडौं, नेपाल (Kathmandu, Nepal)</span>
              </p>
              <div className="pt-2">
                <a
                  href="https://chat.whatsapp.com/invite/BankingTayariNepal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-bold hover:bg-emerald-100 transition-colors"
                >
                  <SocialBrandIcon id="whatsapp" className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp मा सोध्नुहोस्</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Banking Tayari Nepal. सर्वाधिकार सुरक्षित। PREPARE | PRACTICE | SUCCEED
          </p>
          <div className="flex items-center gap-4 text-xs">
            <button 
              onClick={() => setActiveTab('about')}
              className="hover:text-blue-600 dark:hover:text-blue-400 underline underline-offset-4 cursor-pointer"
            >
              हाम्रो बारेमा (About Us)
            </button>
            <span>•</span>
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              Learn Together • Grow Together
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
