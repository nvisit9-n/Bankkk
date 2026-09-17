import React, { useState } from 'react';
import { 
  Home, 
  BookOpen, 
  CheckSquare, 
  Newspaper, 
  User, 
  Sparkles, 
  ShoppingBag, 
  Bookmark, 
  Flame, 
  Award, 
  ShieldCheck, 
  FileText, 
  Youtube,
  ChevronDown,
  Layers,
  Building2,
  Calculator,
  Percent,
  Laptop,
  TrendingUp,
  Users,
  Scale,
  Landmark,
  LogOut,
  Trophy,
  Info
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { NavigationTab, QuizSubCategory } from '../../types';
import { BrandLogo } from '../common/BrandLogo';
import { SocialLinksBar } from '../common/SocialIcons';

export const Sidebar: React.FC = () => {
  const { 
    activeTab, 
    setActiveTab, 
    user, 
    purchases, 
    bookmarks, 
    logout, 
    quizSubCategory, 
    selectQuizSubCategory 
  } = useApp();
  const [selectedInst, setSelectedInst] = useState<'NRB' | 'Commercial' | 'EPF'>('NRB');
  const [expandedPaper, setExpandedPaper] = useState<'paper-1' | 'paper-2' | null>('paper-1');
  const [expandedCommercialLevel, setExpandedCommercialLevel] = useState<'level-4-5' | 'level-6' | null>('level-4-5');

  const handleLogout = () => {
    if (window.confirm('के तपाईं लगआउट गर्न चाहनुहुन्छ? लगआउट गरेपछि नयाँ प्रोफाइल खोल्न सकिनेछ।')) {
      logout();
    }
  };

  const handleSelectCourseSection = (
    courseId: string, 
    options?: { paperId?: string; sectionId?: string; levelId?: string; subjectId?: string }
  ) => {
    setActiveTab('courses');
    window.dispatchEvent(
      new CustomEvent('btn:select-syllabus-section', {
        detail: { courseId, ...options }
      })
    );
  };

  const majorExamCategories: {
    key: QuizSubCategory;
    label: string;
    subLabel: string;
    icon: React.ComponentType<{ className?: string }>;
    badge: string;
    badgeColor: string;
  }[] = [
    {
      key: 'sangathit',
      label: '१. संगठित संस्था',
      subLabel: 'Public Enterprises (५० सेट)',
      icon: Building2,
      badge: '५० सेट',
      badgeColor: 'bg-[#DC2626]'
    },
    {
      key: 'banking',
      label: '२. बैंकिङ्ग सेवा',
      subLabel: 'NRB, RBB, NBL, ADBL',
      icon: Landmark,
      badge: '४ बैंक',
      badgeColor: 'bg-emerald-600'
    },
    {
      key: 'loksewa',
      label: '३. निजामती / लोकसेवा',
      subLabel: 'Officer, NaSu, Kharidar',
      icon: Scale,
      badge: 'लोकसेवा',
      badgeColor: 'bg-amber-600'
    }
  ];

  const primaryNavItems: { tab: NavigationTab; label: string; icon: React.ComponentType<{ className?: string }>; badge?: string | number; badgeColor?: string }[] = [
    { tab: 'home', label: 'गृहपृष्ठ (Home)', icon: Home },
    { tab: 'courses', label: 'पाठ्यक्रम (Courses)', icon: BookOpen }
  ];

  const resourceNavItems: { tab: NavigationTab; label: string; icon: React.ComponentType<{ className?: string }>; badge?: string | number; badgeColor?: string }[] = [
    { tab: 'leaderboard', label: 'वरियता (Leaderboard)', icon: Trophy, badge: 'Ranking', badgeColor: 'bg-amber-500' },
    { tab: 'video-lectures', label: 'भिडियो कक्षाहरू (Videos)', icon: Youtube, badge: 'HD', badgeColor: 'bg-red-600' },
    { tab: 'free-notes', label: 'अध्ययन / AI नोट्स (Notes)', icon: FileText, badge: 'AI' },
    { tab: 'current-affairs', label: 'समसामयिक (Current Affairs)', icon: Newspaper },
    { tab: 'premium', label: 'प्रिमियम नोट्स (Premium)', icon: Sparkles, badge: 'Pro' },
    { tab: 'purchases', label: 'मेरो खरिद (My Purchases)', icon: ShoppingBag, badge: (purchases || []).length },
    { tab: 'bookmarks', label: 'बुकमार्क (Bookmarks)', icon: Bookmark, badge: (bookmarks || []).length },
    { tab: 'profile', label: 'मेरो प्रोफाइल (Profile)', icon: User },
    { tab: 'about', label: 'हाम्रो बारेमा (About Us)', icon: Info, badge: 'EdTech', badgeColor: 'bg-blue-600' }
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 shrink-0 bg-white dark:bg-slate-900 border-r border-slate-200/80 dark:border-slate-800 h-screen sticky top-0 transition-colors z-20">
      
      {/* Sidebar Header / Single High-Resolution Official Brand Logo */}
      <div 
        id="sidebar-brand-logo"
        onClick={() => setActiveTab('home')}
        className="p-4 border-b border-slate-100 dark:border-slate-800 cursor-pointer group hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-all"
        title="Banking Tayari Nepal - Home"
      >
        <div className="w-full bg-white px-3 py-2.5 rounded-2xl border border-slate-200/90 shadow-2xs group-hover:shadow-xs group-hover:border-blue-300 transition-all flex items-center justify-center">
          <img 
            src="/logo.svg" 
            alt="Banking Tayari Nepal Logo" 
            className="h-11 w-auto object-contain select-none"
          />
        </div>
      </div>

      {/* Navigation List */}
      <div className="flex-1 overflow-y-auto p-3.5 space-y-3 custom-scrollbar">
        
        {/* Section 1: Main Primary */}
        <nav className="space-y-1">
          {primaryNavItems.map(item => {
            const Icon = item.icon;
            const isActive = activeTab === item.tab;

            return (
              <button
                key={item.tab}
                onClick={() => setActiveTab(item.tab)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all text-xs font-semibold ${
                  isActive 
                    ? 'bg-[#0052FF] text-white font-bold shadow-md shadow-blue-500/25' 
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/70 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-2.5 min-w-0 pr-1">
                  <Icon className={`w-4 h-4 shrink-0 ${
                    isActive ? 'text-white' : 'text-slate-500 dark:text-slate-400'
                  }`} />
                  <span className="truncate" title={item.label}>{item.label}</span>
                </div>
              </button>
            );
          })}
        </nav>

        {/* Section 2: Major Exam Categories - FLAT TOP-LEVEL NAVIGATION */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80">
          <div className="px-2 py-1 flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
              परीक्षा तथा प्रश्न सेट (MCQs)
            </span>
            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-[#0052FF] dark:text-blue-400">
              ५० सेट
            </span>
          </div>

          <div className="space-y-1">
            {majorExamCategories.map(cat => {
              const Icon = cat.icon;
              const isSelected = activeTab === 'quiz' && quizSubCategory === cat.key;

              return (
                <button
                  key={cat.key}
                  type="button"
                  id={`sidebar-top-level-${cat.key}`}
                  onClick={() => selectQuizSubCategory(cat.key)}
                  className={`w-full flex items-center justify-between p-2.5 rounded-xl transition-all text-xs group text-left ${
                    isSelected 
                      ? 'bg-[#0052FF] text-white font-bold shadow-md shadow-blue-500/25' 
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100/80 dark:hover:bg-slate-800/70 hover:text-[#0052FF]'
                  }`}
                  title={`${cat.label} - ${cat.subLabel}`}
                >
                  <div className="flex items-center space-x-2.5 min-w-0 pr-1">
                    <Icon className={`w-4 h-4 shrink-0 ${
                      isSelected 
                        ? 'text-white' 
                        : 'text-[#0052FF] dark:text-blue-400'
                    }`} />
                    <div className="min-w-0 truncate">
                      <p className={`font-bold truncate leading-tight ${isSelected ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                        {cat.label}
                      </p>
                      <p className={`text-[10px] truncate ${isSelected ? 'text-blue-100' : 'text-slate-400'}`}>
                        {cat.subLabel}
                      </p>
                    </div>
                  </div>

                  <span className={`text-[9px] font-black px-1.5 py-0.5 rounded shrink-0 ${
                    isSelected 
                      ? 'bg-white/20 text-white' 
                      : `${cat.badgeColor} text-white`
                  }`}>
                    {cat.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Section 3: Learning Resources & Tools */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80">
          <div className="px-2 py-1 mb-1">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
              अध्ययन स्रोत तथा सुविधाहरू
            </span>
          </div>

          <nav className="space-y-1">
            {resourceNavItems.map(item => {
              const Icon = item.icon;
              const isActive = activeTab === item.tab;

              return (
                <button
                  key={item.tab}
                  onClick={() => setActiveTab(item.tab)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl transition-all text-xs font-semibold ${
                    isActive 
                      ? 'bg-[#0052FF] text-white font-bold shadow-md shadow-blue-500/25' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/70 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <div className="flex items-center space-x-2.5 min-w-0 pr-1">
                    <Icon className={`w-4 h-4 shrink-0 ${
                      isActive 
                        ? 'text-white' 
                        : 'text-slate-500 dark:text-slate-400'
                    }`} />
                    <span className="truncate" title={item.label}>{item.label}</span>
                  </div>

                  {item.badge !== undefined && (
                    <span className={`text-[9px] font-black px-1.5 py-0.5 rounded ${
                      isActive 
                        ? 'bg-white/20 text-white' 
                        : item.badgeColor 
                          ? `${item.badgeColor} text-white` 
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* बैंक तथा वित्तीय संस्था (Banking & Financial Institutions) Navigation */}
        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
          <div className="px-2 py-1 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Landmark className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-800 dark:text-slate-200">
                बैंक तथा वित्तीय संस्था
              </span>
            </div>
            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400">
              पाठ्यक्रम
            </span>
          </div>

          <div className="mt-2 space-y-1.5 text-xs">
            
            {/* 1. नेपाल राष्ट्र बैंक (NRB) */}
            <div className="rounded-xl border border-slate-200/70 dark:border-slate-800 overflow-hidden bg-slate-50/60 dark:bg-slate-800/30">
              <button
                type="button"
                onClick={() => {
                  setSelectedInst(selectedInst === 'NRB' ? (null as any) : 'NRB');
                  handleSelectCourseSection('NRB');
                }}
                className={`w-full p-2 text-left font-bold flex items-center justify-between transition ${
                  selectedInst === 'NRB'
                    ? 'bg-emerald-50/90 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-300'
                    : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100/70 dark:hover:bg-slate-800/70'
                }`}
              >
                <div className="flex items-center gap-1.5 min-w-0">
                  <Building2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <div className="truncate">
                    <span className="block text-[11px] font-black leading-tight">नेपाल राष्ट्र बैंक (NRB)</span>
                    <span className="block text-[10px] text-emerald-700 dark:text-emerald-400 font-semibold">तह ४ (Assistant Level 4 - Active)</span>
                  </div>
                </div>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform duration-200 ${selectedInst === 'NRB' ? 'rotate-180' : ''}`} />
              </button>

              {selectedInst === 'NRB' && (
                <div className="p-1.5 pt-1 space-y-1.5 border-t border-slate-100 dark:border-slate-800/50 bg-white/70 dark:bg-slate-900/40">
                  {/* Paper I Accordion */}
                  <div className="rounded-lg border border-slate-200/60 dark:border-slate-800 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setExpandedPaper(expandedPaper === 'paper-1' ? null : 'paper-1')}
                      className="w-full px-2 py-1.5 text-left font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800 text-[11px]"
                    >
                      <span className="truncate">Paper I: Banking, Accounting, Math, IT</span>
                      <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform shrink-0 ${expandedPaper === 'paper-1' ? 'rotate-180' : ''}`} />
                    </button>
                    {expandedPaper === 'paper-1' && (
                      <div className="p-1 space-y-0.5 border-t border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-900/30">
                        {[
                          { id: 'nrb-p1-sec-a', name: 'खण्ड क: बैंकिङ (Banking)', marks: '35m' },
                          { id: 'nrb-p1-sec-b', name: 'खण्ड ख: लेखा (Accounting)', marks: '30m' },
                          { id: 'nrb-p1-sec-c', name: 'खण्ड ग: गणित (Mathematics)', marks: '20m' },
                          { id: 'nrb-p1-sec-d', name: 'खण्ड घ: IT प्रविधि (Info Tech)', marks: '15m' }
                        ].map(sec => (
                          <button
                            key={sec.id}
                            type="button"
                            onClick={() => handleSelectCourseSection('NRB', { paperId: 'paper-1', sectionId: sec.id })}
                            className="w-full flex items-center justify-between px-2 py-1 rounded-md text-[10.5px] text-slate-600 dark:text-slate-400 hover:text-emerald-700 dark:hover:text-emerald-300 hover:bg-emerald-50/80 dark:hover:bg-emerald-950/40 transition font-medium"
                          >
                            <span className="truncate">{sec.name}</span>
                            <span className="text-[9px] font-bold px-1 rounded bg-slate-200/70 dark:bg-slate-700 text-slate-700 dark:text-slate-300 shrink-0 ml-1">
                              {sec.marks}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Paper II Accordion */}
                  <div className="rounded-lg border border-slate-200/60 dark:border-slate-800 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setExpandedPaper(expandedPaper === 'paper-2' ? null : 'paper-2')}
                      className="w-full px-2 py-1.5 text-left font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800 text-[11px]"
                    >
                      <span className="truncate">Paper II: Economics, Management, Laws</span>
                      <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform shrink-0 ${expandedPaper === 'paper-2' ? 'rotate-180' : ''}`} />
                    </button>
                    {expandedPaper === 'paper-2' && (
                      <div className="p-1 space-y-0.5 border-t border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-900/30">
                        {[
                          { id: 'nrb-p2-sec-a', name: 'खण्ड क: अर्थशास्त्र (Economics)', marks: '30m' },
                          { id: 'nrb-p2-sec-b', name: 'खण्ड ख: व्यवस्थापन (Management)', marks: '25m' },
                          { id: 'nrb-p2-sec-c', name: 'खण्ड ग: कानुन तथा ऐनहरू (Laws)', marks: '30m' },
                          { id: 'nrb-p2-sec-d', name: 'खण्ड घ: संविधान र सुशासन', marks: '15m' }
                        ].map(sec => (
                          <button
                            key={sec.id}
                            type="button"
                            onClick={() => handleSelectCourseSection('NRB', { paperId: 'paper-2', sectionId: sec.id })}
                            className="w-full flex items-center justify-between px-2 py-1 rounded-md text-[10.5px] text-slate-600 dark:text-slate-400 hover:text-emerald-700 dark:hover:text-emerald-300 hover:bg-emerald-50/80 dark:hover:bg-emerald-950/40 transition font-medium"
                          >
                            <span className="truncate">{sec.name}</span>
                            <span className="text-[9px] font-bold px-1 rounded bg-slate-200/70 dark:bg-slate-700 text-slate-700 dark:text-slate-300 shrink-0 ml-1">
                              {sec.marks}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* 2. वाणिज्य बैंकहरू (Commercial Banks - RBB / ADBL / NBL) */}
            <div className="rounded-xl border border-slate-200/70 dark:border-slate-800 overflow-hidden bg-slate-50/60 dark:bg-slate-800/30">
              <button
                type="button"
                onClick={() => {
                  setSelectedInst(selectedInst === 'Commercial' ? (null as any) : 'Commercial');
                  handleSelectCourseSection('Commercial', { levelId: 'level-4-5' });
                }}
                className={`w-full p-2 text-left font-bold flex items-center justify-between transition ${
                  selectedInst === 'Commercial'
                    ? 'bg-blue-50/90 dark:bg-blue-950/50 text-blue-900 dark:text-blue-300'
                    : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100/70 dark:hover:bg-slate-800/70'
                }`}
              >
                <div className="flex items-center gap-1.5 min-w-0">
                  <Landmark className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <div className="truncate">
                    <span className="block text-[11px] font-black leading-tight">वाणिज्य बैंकहरू (Commercial Banks)</span>
                    <span className="block text-[10px] text-blue-600 dark:text-blue-400 font-semibold">RBB / ADBL / NBL Common</span>
                  </div>
                </div>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform duration-200 ${selectedInst === 'Commercial' ? 'rotate-180' : ''}`} />
              </button>

              {selectedInst === 'Commercial' && (
                <div className="p-1.5 pt-1 space-y-1.5 border-t border-slate-100 dark:border-slate-800/50 bg-white/70 dark:bg-slate-900/40">
                  {/* तह ४ र ५ (Assistant Level - Common Syllabus) */}
                  <div className="rounded-lg border border-slate-200/60 dark:border-slate-800 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => {
                        setExpandedCommercialLevel(expandedCommercialLevel === 'level-4-5' ? null : 'level-4-5');
                        handleSelectCourseSection('Commercial', { levelId: 'level-4-5' });
                      }}
                      className="w-full px-2 py-1.5 text-left font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800 text-[11px]"
                    >
                      <div className="truncate">
                        <span className="font-bold text-blue-800 dark:text-blue-300">तह ४ र ५</span>
                        <span className="text-[10px] text-slate-500 font-normal ml-1">(Common Syllabus)</span>
                      </div>
                      <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform shrink-0 ${expandedCommercialLevel === 'level-4-5' ? 'rotate-180' : ''}`} />
                    </button>
                    {expandedCommercialLevel === 'level-4-5' && (
                      <div className="p-1 space-y-0.5 border-t border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-900/30">
                        {[
                          { id: 'comm-sub-01', name: 'बैंकिङ आधारभूत ज्ञान (5 Topics)' },
                          { id: 'comm-sub-02', name: 'बैंकिङ ऐन तथा निर्देशन (10 Topics)' },
                          { id: 'comm-sub-03', name: 'लेखा तथा वित्तीय विश्लेषण (5 Topics)' },
                          { id: 'comm-sub-04', name: 'व्यवस्थापन, सुशासन र IT (5 Topics)' },
                          { id: 'comm-sub-05', name: 'गणित र नेपाली अर्थतन्त्र (4 Topics)' }
                        ].map(sub => (
                          <button
                            key={sub.id}
                            type="button"
                            onClick={() => handleSelectCourseSection('Commercial', { levelId: 'level-4-5', subjectId: sub.id })}
                            className="w-full text-left px-2 py-1 rounded-md text-[10.5px] text-slate-600 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50/80 dark:hover:bg-blue-950/40 transition font-medium truncate"
                          >
                            • {sub.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* तह ६ (Officer Level) */}
                  <div className="rounded-lg border border-slate-200/60 dark:border-slate-800 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => {
                        setExpandedCommercialLevel(expandedCommercialLevel === 'level-6' ? null : 'level-6');
                        handleSelectCourseSection('Commercial', { levelId: 'level-6' });
                      }}
                      className="w-full px-2 py-1.5 text-left font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800 text-[11px]"
                    >
                      <div className="truncate">
                        <span className="font-bold text-blue-800 dark:text-blue-300">तह ६</span>
                        <span className="text-[10px] text-slate-500 font-normal ml-1">(Officer Level)</span>
                      </div>
                      <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform shrink-0 ${expandedCommercialLevel === 'level-6' ? 'rotate-180' : ''}`} />
                    </button>
                    {expandedCommercialLevel === 'level-6' && (
                      <div className="p-1 space-y-0.5 border-t border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-900/30">
                        {[
                          { id: 'comm-l6-sub-01', name: 'समष्टिगत अर्थशास्त्र र नीति' },
                          { id: 'comm-l6-sub-02', name: 'उन्नत बैंकिङ र जोखिम व्यवस्थापन' },
                          { id: 'comm-l6-sub-03', name: 'वित्तीय कानुन र अनुपालन' },
                          { id: 'comm-l6-sub-04', name: 'ट्रेजरी र वैदेशिक व्यापार' }
                        ].map(sub => (
                          <button
                            key={sub.id}
                            type="button"
                            onClick={() => handleSelectCourseSection('Commercial', { levelId: 'level-6', subjectId: sub.id })}
                            className="w-full text-left px-2 py-1 rounded-md text-[10.5px] text-slate-600 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50/80 dark:hover:bg-blue-950/40 transition font-medium truncate"
                          >
                            • {sub.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* 3. कर्मचारी सञ्चय कोष (EPF) */}
            <div className="rounded-xl border border-slate-200/70 dark:border-slate-800 overflow-hidden bg-slate-50/60 dark:bg-slate-800/30">
              <button
                type="button"
                onClick={() => {
                  setSelectedInst(selectedInst === 'EPF' ? (null as any) : 'EPF');
                  handleSelectCourseSection('EPF', { levelId: 'epf-level-4-5-6' });
                }}
                className={`w-full p-2 text-left font-bold flex items-center justify-between transition ${
                  selectedInst === 'EPF'
                    ? 'bg-amber-50/90 dark:bg-amber-950/50 text-amber-900 dark:text-amber-300'
                    : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100/70 dark:hover:bg-slate-800/70'
                }`}
              >
                <div className="flex items-center gap-1.5 min-w-0">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <div className="truncate">
                    <span className="block text-[11px] font-black leading-tight">कर्मचारी सञ्चय कोष (EPF)</span>
                    <span className="block text-[10px] text-amber-700 dark:text-amber-400 font-semibold">तह ४, ५ र ६</span>
                  </div>
                </div>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform duration-200 ${selectedInst === 'EPF' ? 'rotate-180' : ''}`} />
              </button>

              {selectedInst === 'EPF' && (
                <div className="p-1.5 pt-1 space-y-0.5 border-t border-slate-100 dark:border-slate-800/50 bg-white/70 dark:bg-slate-900/40">
                  {[
                    { id: 'epf-sub-01', name: 'सञ्चय कोष ऐन र विनियमावली (4 Topics)' },
                    { id: 'epf-sub-02', name: 'सामाजिक सुरक्षा र पेन्सन (4 Topics)' },
                    { id: 'epf-sub-03', name: 'लगानी विविधीकरण र जोखिम (4 Topics)' },
                    { id: 'epf-sub-04', name: 'प्रशासन, लेखा र IT प्रणाली (4 Topics)' }
                  ].map(sub => (
                    <button
                      key={sub.id}
                      type="button"
                      onClick={() => handleSelectCourseSection('EPF', { levelId: 'epf-level-4-5-6', subjectId: sub.id })}
                      className="w-full text-left px-2 py-1 rounded-md text-[10.5px] text-slate-600 dark:text-slate-400 hover:text-amber-800 dark:hover:text-amber-300 hover:bg-amber-50/80 dark:hover:bg-amber-950/40 transition font-medium truncate"
                    >
                      • {sub.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Social Media Connection Links in Sidebar */}
      <div className="p-3.5 border-t border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/50">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            हाम्रो सञ्जाल (Join Us)
          </span>
          <span className="text-[10px] font-bold text-red-600 dark:text-red-400">
            ५ च्यानल
          </span>
        </div>
        <SocialLinksBar size="sm" className="justify-between" />
      </div>

      {/* Streak Widget at Bottom */}
      <div className="p-3.5 border-t border-slate-100 dark:border-slate-800">
        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 rounded-2xl p-3">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase">
              {user.streak} Day Streak 🔥
            </span>
            <span className="text-[10px] text-amber-600 dark:text-amber-400 font-bold">
              +{user.xp} XP
            </span>
          </div>
          <div className="h-1.5 w-full bg-amber-200 dark:bg-amber-900/40 rounded-full overflow-hidden">
            <div className="h-full bg-amber-500 rounded-full w-[70%]"></div>
          </div>
        </div>

        {/* Logout / Switch Profile Button */}
        <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800">
          <button
            type="button"
            onClick={handleLogout}
            id="sidebar-logout-btn"
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition cursor-pointer group"
            title="खाता लगआउट गरी नयाँ प्रोफाइल बनाउनुहोस्"
          >
            <div className="flex items-center gap-2">
              <LogOut className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
              <span>लगआउट (Logout)</span>
            </div>
            <span className="text-[10px] text-slate-400 font-normal">पुनः दर्ता</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
