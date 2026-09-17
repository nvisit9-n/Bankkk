import React, { useState, useMemo } from 'react';
import { 
  Newspaper, 
  Calendar, 
  Bookmark, 
  Share2, 
  Search, 
  Sparkles, 
  ChevronRight, 
  ChevronDown,
  X, 
  Check, 
  Award,
  Globe2,
  TrendingUp,
  Building2,
  Trophy,
  Target,
  FileCheck2,
  HelpCircle,
  Clock,
  Layers,
  Cpu,
  BookOpen,
  Filter,
  Shield
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { CurrentAffair, CurrentAffairsCategoryType } from '../../types';
import { MOCK_CURRENT_AFFAIRS } from '../../data/mockData';
import { safeCopyToClipboard } from '../../utils/safeHelpers';

interface CategoryTab {
  id: string;
  nameEnglish: string;
  nameNepali: string;
  icon: React.ComponentType<{ className?: string }>;
}

const CATEGORY_TABS: CategoryTab[] = [
  {
    id: 'All',
    nameEnglish: 'All',
    nameNepali: 'सबै घटनाक्रम',
    icon: Layers
  },
  {
    id: 'Banking & Monetary',
    nameEnglish: 'Banking & Monetary',
    nameNepali: 'बैंकिङ तथा मौद्रिक नीति',
    icon: TrendingUp
  },
  {
    id: 'Economy & Budget',
    nameEnglish: 'Economy & Budget',
    nameNepali: 'अर्थतन्त्र र बजेट',
    icon: Building2
  },
  {
    id: 'National & Disaster',
    nameEnglish: 'National & Disaster',
    nameNepali: 'राष्ट्रिय, विपद् र सुशासन',
    icon: Shield
  },
  {
    id: 'Sports & International',
    nameEnglish: 'Sports & International',
    nameNepali: 'खेलकुद र अन्तर्राष्ट्रिय',
    icon: Trophy
  }
];

// Helper to render bold markdown (**text**)
const renderFormattedText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-extrabold text-slate-900 dark:text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
};

export const CurrentAffairsScreen: React.FC = () => {
  const { toggleBookmark, isBookmarked } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [onlyBookmarked, setOnlyBookmarked] = useState<boolean>(false);
  const [activeArticle, setActiveArticle] = useState<CurrentAffair | null>(null);
  const [copiedShare, setCopiedShare] = useState<boolean>(false);
  const [expandedCardIds, setExpandedCardIds] = useState<Record<string, boolean>>({});
  const [selectedYear, setSelectedYear] = useState<'All' | '2083' | '2082'>('All');

  // Toggle in-card collapsible detail
  const toggleCardExpand = (id: string) => {
    setExpandedCardIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Filter logic
  const filteredAffairs = useMemo(() => {
    return MOCK_CURRENT_AFFAIRS.filter(item => {
      // Category Match
      const matchesCategory = selectedCategory === 'All' || 
        item.category === selectedCategory ||
        (selectedCategory === 'Banking & Monetary' && (item.category === 'Banking & Monetary' || item.category === 'Economy & Banking')) ||
        (selectedCategory === 'Economy & Budget' && (item.category === 'Economy & Budget' || item.category === 'Economy & Banking')) ||
        (selectedCategory === 'National & Disaster' && (item.category === 'National & Disaster' || item.category === 'National & Governance' || item.category === 'Science, Tech & Environment')) ||
        (selectedCategory === 'Sports & International' && (item.category === 'Sports & International' || item.category === 'Sports & Awards' || item.category === 'International & Affairs'));

      // Year Filter
      const matchesYear = selectedYear === 'All' || (
        selectedYear === '2083' ? item.date.includes('२०८३') : item.date.includes('२०८२')
      );

      // Bookmarked filter
      const matchesBookmark = !onlyBookmarked || isBookmarked('current-affair', item.id);

      // Search Query
      const query = searchQuery.trim().toLowerCase();
      if (!query) {
        return matchesCategory && matchesYear && matchesBookmark;
      }

      const inTitle = item.title.toLowerCase().includes(query);
      const inSummary = item.summary.toLowerCase().includes(query);
      const inFacts = item.importantFacts ? item.importantFacts.some(f => f.toLowerCase().includes(query)) : false;
      const inPoints = item.points ? item.points.some(p => p.toLowerCase().includes(query)) : false;
      const inTags = item.tags ? item.tags.some(t => t.toLowerCase().includes(query)) : false;
      const inPoint = item.examPoint ? item.examPoint.toLowerCase().includes(query) : false;
      const inQuickFact = item.quickExamFact ? item.quickExamFact.toLowerCase().includes(query) : false;
      const inDate = item.date.toLowerCase().includes(query);

      return matchesCategory && matchesYear && matchesBookmark && (inTitle || inSummary || inFacts || inPoints || inTags || inPoint || inQuickFact || inDate);
    });
  }, [selectedCategory, selectedYear, searchQuery, onlyBookmarked, isBookmarked]);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      All: MOCK_CURRENT_AFFAIRS.length,
      'Banking & Monetary': 0,
      'Economy & Budget': 0,
      'National & Disaster': 0,
      'Sports & International': 0
    };
    MOCK_CURRENT_AFFAIRS.forEach(item => {
      if (item.category === 'Banking & Monetary' || item.category === 'Economy & Banking') {
        counts['Banking & Monetary'] = (counts['Banking & Monetary'] || 0) + 1;
      }
      if (item.category === 'Economy & Budget') {
        counts['Economy & Budget'] = (counts['Economy & Budget'] || 0) + 1;
      }
      if (item.category === 'National & Disaster' || item.category === 'National & Governance' || item.category === 'Science, Tech & Environment') {
        counts['National & Disaster'] = (counts['National & Disaster'] || 0) + 1;
      }
      if (item.category === 'Sports & International' || item.category === 'Sports & Awards' || item.category === 'International & Affairs') {
        counts['Sports & International'] = (counts['Sports & International'] || 0) + 1;
      }
    });
    return counts;
  }, []);

  const handleShare = async (article?: CurrentAffair) => {
    const title = article ? article.title : 'Banking Tayari Nepal Current Affairs';
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const textToShare = `${title} | Banking Tayari Nepal\n${url}`;
    const success = await safeCopyToClipboard(textToShare);
    if (success) {
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  const getCategoryStyles = (category: string) => {
    switch (category) {
      case 'Banking & Monetary':
        return {
          pill: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-300 border-emerald-200/80 dark:border-emerald-800/60',
          accent: 'text-emerald-600 dark:text-emerald-400',
          icon: TrendingUp
        };
      case 'Economy & Budget':
      case 'Economy & Banking':
        return {
          pill: 'bg-blue-50 text-blue-700 dark:bg-blue-950/70 dark:text-blue-300 border-blue-200/80 dark:border-blue-800/60',
          accent: 'text-blue-600 dark:text-blue-400',
          icon: Building2
        };
      case 'National & Disaster':
      case 'National & Governance':
      case 'Science, Tech & Environment':
        return {
          pill: 'bg-purple-50 text-purple-700 dark:bg-purple-950/70 dark:text-purple-300 border-purple-200/80 dark:border-purple-800/60',
          accent: 'text-purple-600 dark:text-purple-400',
          icon: Shield
        };
      case 'Sports & International':
      case 'Sports & Awards':
      case 'International & Affairs':
        return {
          pill: 'bg-amber-50 text-amber-700 dark:bg-amber-950/70 dark:text-amber-300 border-amber-200/80 dark:border-amber-800/60',
          accent: 'text-amber-600 dark:text-amber-400',
          icon: Trophy
        };
      default:
        return {
          pill: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/70 dark:text-indigo-300 border-indigo-200/80 dark:border-indigo-800/60',
          accent: 'text-indigo-600 dark:text-indigo-400',
          icon: Newspaper
        };
    }
  };

  return (
    <div className="space-y-6 pb-16">
      
      {/* Page Title & Intro Header */}
      <div className="bg-royal-gradient text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-soft-blue border border-blue-400/30">
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-blue-100 text-xs font-bold border border-white/20">
            <Newspaper className="w-3.5 h-3.5 text-white" />
            <span>१६ महिनाको समसामयिक समयरेखा (२०८२ बैशाख - २०८३ भदौ)</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            बैंकिङ तथा लोकसेवा समसामयिक तथ्य भण्डार
          </h1>
          <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-normal">
            नेपाल राष्ट्र बैंक, वाणिज्य बैंकहरू तथा लोकसेवा आयोगका परीक्षाका लागि २०८२ बैशाखदेखि २०८३ भदौसम्मका सबै क्षेत्रका उच्च-उपयोगी (High-Yield) नीतिगत निर्णय, बजेट, मौद्रिक नीति, पूर्वाधार तथा विश्व मञ्चका तथ्यहरू।
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>विस्तृत कोल्याप्सिबल अध्ययन (Collapsible Details)</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>अवधि: २०८२ बैशाख – २०८३ भदौ</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
              <Target className="w-3.5 h-3.5 text-emerald-400" />
              <span>कुल {MOCK_CURRENT_AFFAIRS.length} प्रमुख शीर्षकहरू</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sector Filter Tabs */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5" />
            <span>क्षेत्रगत विधा छनोट (Sector Filters):</span>
          </div>

          {/* Timeline Quick Year Switch */}
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-bold">
            <button
              onClick={() => setSelectedYear('All')}
              className={`px-2.5 py-1 rounded-lg transition ${
                selectedYear === 'All'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              सबै (All)
            </button>
            <button
              onClick={() => setSelectedYear('2083')}
              className={`px-2.5 py-1 rounded-lg transition ${
                selectedYear === '2083'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              २०८३ साल
            </button>
            <button
              onClick={() => setSelectedYear('2082')}
              className={`px-2.5 py-1 rounded-lg transition ${
                selectedYear === '2082'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              २०८२ साल
            </button>
          </div>
        </div>

        {/* Category Tabs Strip */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 scrollbar-none">
          {CATEGORY_TABS.map((tab) => {
            const Icon = tab.icon;
            const isSelected = selectedCategory === tab.id;
            const count = categoryCounts[tab.id] || 0;

            return (
              <button
                key={tab.id}
                id={`tab-current-affairs-${tab.id.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3.5 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-2.5 border ${
                  isSelected
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/20 scale-[1.01]'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/80 shadow-xs'
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isSelected ? 'text-white' : 'text-slate-400 dark:text-slate-500'}`} />
                <div className="flex flex-col items-start text-left leading-tight">
                  <span className="font-extrabold">{tab.nameEnglish}</span>
                  <span className={`text-[10px] font-normal ${isSelected ? 'text-indigo-100' : 'text-slate-500 dark:text-slate-400'}`}>
                    {tab.nameNepali}
                  </span>
                </div>
                <span className={`ml-1 px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                  isSelected 
                    ? 'bg-white/20 text-white' 
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search & Bookmark Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              id="search-current-affairs-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="शीर्षक, महिना, ऐन, तथ्याङ्क खोज्नुहोस् (उदा: मौद्रिक नीति, बजेट, २०८३ भदौ, २०८२ बैशाख, ५जी, पलेशा)..."
              className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                title="हटाउनुहोस्"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              id="btn-filter-bookmarked-affairs"
              onClick={() => setOnlyBookmarked(!onlyBookmarked)}
              className={`px-3.5 py-2.5 rounded-2xl text-xs font-bold border transition flex items-center gap-2 ${
                onlyBookmarked
                  ? 'bg-amber-500 text-white border-amber-500 shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${onlyBookmarked ? 'fill-white' : 'text-slate-400'}`} />
              <span>सुरक्षित मात्र</span>
            </button>

            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 hidden sm:inline px-2">
              नतिजा: <strong className="text-slate-900 dark:text-white">{filteredAffairs.length}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* No Results Found View */}
      {filteredAffairs.length === 0 && (
        <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 space-y-3">
          <Newspaper className="w-10 h-10 text-slate-300 dark:text-slate-700 mx-auto" />
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
            कुनै पनि समसामयिक विषय भेटिएन
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            खोज शब्द परिवर्तन गर्नुहोस् वा अर्को विधा/वर्ष चयन गरी पुनः प्रयास गर्नुहोस्।
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSelectedYear('All');
              setSearchQuery('');
              setOnlyBookmarked(false);
            }}
            className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition"
          >
            सबै समसामयिक हेर्नुहोस्
          </button>
        </div>
      )}

      {/* Current Affairs Timeline Cards Grid */}
      <div className="grid grid-cols-1 gap-5">
        {filteredAffairs.map((article) => {
          const bookmarked = isBookmarked('current-affair', article.id);
          const styles = getCategoryStyles(article.category);
          const CategoryIcon = styles.icon;
          const isExpanded = !!expandedCardIds[article.id];

          return (
            <div
              key={article.id}
              id={`card-affair-${article.id}`}
              className="p-5 sm:p-6 rounded-3xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-800/90 hover:border-indigo-500/40 dark:hover:border-indigo-500/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-3.5">
                {/* Category Badge & Clean Date Tag Row */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold border ${styles.pill}`}>
                      <CategoryIcon className="w-3.5 h-3.5" />
                      <span>{article.category}</span>
                    </span>

                    {/* Clean Date Tag */}
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 text-xs font-black border border-indigo-200/80 dark:border-indigo-800/60 shadow-2xs">
                      <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                      <span>{article.date}</span>
                    </span>

                    {article.categoryNepali && (
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium hidden md:inline">
                        • {article.categoryNepali}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      id={`btn-bookmark-${article.id}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleBookmark('current-affair', article.id, article.title, article.category);
                      }}
                      className={`p-2 rounded-xl transition-all ${
                        bookmarked 
                          ? 'bg-amber-50 dark:bg-amber-950/50 text-amber-500 hover:bg-amber-100' 
                          : 'text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                      title={bookmarked ? 'सुरक्षित हटाइयो' : 'सुरक्षित गर्नुहोस्'}
                    >
                      <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Catchy High-Yield Title */}
                <h2 
                  onClick={() => toggleCardExpand(article.id)}
                  className="font-black text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 cursor-pointer transition-colors leading-snug tracking-tight"
                >
                  {article.title}
                </h2>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {article.summary}
                </p>

                {/* Key Figures Strip on Card Preview */}
                {article.figures && article.figures.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                    {article.figures.map((fig, fIdx) => (
                      <div 
                        key={fIdx} 
                        className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-800"
                      >
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate font-medium">
                          {fig.label}
                        </div>
                        <div className="text-xs sm:text-sm font-black text-indigo-600 dark:text-indigo-400">
                          {fig.value}
                        </div>
                        {fig.subtext && (
                          <div className="text-[9px] text-slate-400 dark:text-slate-500 truncate">
                            {fig.subtext}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Quick Exam Fact Highlight Banner */}
                {article.quickExamFact ? (
                  <div className="p-3.5 rounded-2xl bg-amber-50/85 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/60 flex items-start gap-2.5 shadow-2xs">
                    <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <div className="text-[10px] font-black uppercase tracking-wider text-amber-700 dark:text-amber-300">
                        Quick Exam Fact (द्रुत परीक्षा तथ्य)
                      </div>
                      <p className="text-xs sm:text-sm font-bold text-amber-950 dark:text-amber-100 leading-relaxed">
                        {article.quickExamFact}
                      </p>
                    </div>
                  </div>
                ) : article.examPoint ? (
                  <div className="p-3 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/50 flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <p className="text-xs font-bold text-amber-900 dark:text-amber-200 leading-relaxed">
                      {article.examPoint}
                    </p>
                  </div>
                ) : null}

                {/* Points Preview on Unexpanded Card */}
                {!isExpanded && article.points && article.points.length > 0 && (
                  <div className="space-y-1.5 pt-1">
                    {article.points.slice(0, 2).map((pt, pIdx) => (
                      <div key={pIdx} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" />
                        <span className="line-clamp-2">{renderFormattedText(pt)}</span>
                      </div>
                    ))}
                    {article.points.length > 2 && (
                      <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 pl-3.5 block">
                        + थप {article.points.length - 2} महत्वपूर्ण बुँदाहरू (हेर्न विस्तृत विवरणमा थिच्नुहोस्)
                      </span>
                    )}
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {article.tags && article.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold text-slate-600 dark:text-slate-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* ======================================================= */}
                {/* COLLAPSIBLE DETAIL VIEW (IN-CARD ACCORDION) */}
                {/* ======================================================= */}
                {isExpanded && (
                  <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800 space-y-4 animate-fadeIn">
                    
                    {/* Bullet Points Layout: Key Points & Facts */}
                    {article.points && article.points.length > 0 && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-1.5 text-xs font-extrabold text-slate-700 dark:text-slate-300">
                          <FileCheck2 className="w-4 h-4 text-indigo-500" />
                          <span>उच्च-उपयोगी बुँदागत तथ्यहरू (Key Exam Points & Figures):</span>
                        </div>
                        <ul className="space-y-2 bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800">
                          {article.points.map((pt, idx) => (
                            <li key={idx} className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 flex items-start gap-2.5 leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-2" />
                              <span>{renderFormattedText(pt)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Important Facts & Details */}
                    {(!article.points || article.points.length === 0) && article.importantFacts && article.importantFacts.length > 0 && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-1.5 text-xs font-extrabold text-slate-700 dark:text-slate-300">
                          <FileCheck2 className="w-4 h-4 text-emerald-500" />
                          <span>प्रमुख तथ्य तथा बुँदागत विवरणहरू (Key Facts):</span>
                        </div>
                        <ul className="space-y-1.5 bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800">
                          {article.importantFacts.map((fact, idx) => (
                            <li key={idx} className="text-xs text-slate-800 dark:text-slate-200 flex items-start gap-2 leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" />
                              <span>{fact}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Key Dates Timeline */}
                    {article.keyDates && article.keyDates.length > 0 && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-1.5 text-xs font-extrabold text-slate-700 dark:text-slate-300">
                          <Clock className="w-4 h-4 text-purple-500" />
                          <span>प्रमुख मिति तथा घटनाक्रम (Timeline Dates):</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {article.keyDates.map((kd, idx) => (
                            <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-800 text-xs">
                              <span className="text-slate-700 dark:text-slate-300 font-medium">{kd.event}</span>
                              <span className="font-bold text-indigo-600 dark:text-indigo-400 ml-2 shrink-0">{kd.date}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Exam Relevance & Sample Questions */}
                    <div className="space-y-2">
                      {article.examRelevance && (
                        <div className="p-3 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900/50 text-xs text-blue-950 dark:text-blue-200">
                          <span className="font-black">परीक्षा उपयोगिता: </span>
                          {article.examRelevance}
                        </div>
                      )}

                      {article.examQuestions && article.examQuestions.length > 0 && (
                        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1.5">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 dark:text-slate-200">
                            <HelpCircle className="w-3.5 h-3.5 text-indigo-500" />
                            <span>परीक्षामा सोधिने सम्भावित प्रश्नहरू:</span>
                          </div>
                          <ul className="space-y-1 pl-2">
                            {article.examQuestions.map((q, qIdx) => (
                              <li key={qIdx} className="text-xs text-slate-700 dark:text-slate-300 list-disc list-inside font-medium leading-relaxed">
                                {q}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                  </div>
                )}
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <button
                  id={`btn-toggle-expand-${article.id}`}
                  onClick={() => toggleCardExpand(article.id)}
                  className="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold transition flex items-center gap-1.5"
                >
                  <span>{isExpanded ? 'विवरण बन्द गर्नुहोस्' : 'विस्तृत विवरण हेर्नुहोस् (Collapsible View)'}</span>
                  {isExpanded ? <ChevronDown className="w-4 h-4 rotate-180 transition-transform" /> : <ChevronDown className="w-4 h-4 transition-transform" />}
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleShare(article)}
                    className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition"
                    title="शेयर गर्नुहोस्"
                  >
                    {copiedShare ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
                  </button>

                  <button
                    id={`btn-modal-open-${article.id}`}
                    onClick={() => setActiveArticle(article)}
                    className="px-3.5 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition flex items-center gap-1"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>पूर्ण मोडाल</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Detailed Modal View for Selected Article */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6 shadow-2xl relative custom-scrollbar">
            
            {/* Close Button */}
            <button
              id="btn-close-affair-modal"
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              title="बन्द गर्नुहोस्"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header with Category and Date */}
            <div className="space-y-3 pr-10">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`px-3 py-1 rounded-xl text-xs font-bold border ${getCategoryStyles(activeArticle.category).pill}`}>
                  {activeArticle.category}
                </span>
                {activeArticle.categoryNepali && (
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    • {activeArticle.categoryNepali}
                  </span>
                )}
                <span className="flex items-center gap-1 text-xs text-indigo-700 dark:text-indigo-300 font-black bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 px-3 py-1 rounded-xl">
                  <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                  {activeArticle.date}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-snug">
                {activeArticle.title}
              </h2>
            </div>

            {/* Quick Exam Fact Highlight Banner */}
            {(activeArticle.quickExamFact || activeArticle.examPoint) && (
              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/70 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-black text-amber-900 dark:text-amber-300">
                  <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>अति सम्भावित परीक्षा तथ्य (Quick Exam Fact / High-Yield Takeaway):</span>
                </div>
                <p className="text-xs sm:text-sm font-bold text-amber-950 dark:text-amber-200 leading-relaxed pl-1">
                  {activeArticle.quickExamFact || activeArticle.examPoint}
                </p>
              </div>
            )}

            {/* Executive Summary */}
            <div className="p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              <span className="font-bold text-indigo-900 dark:text-indigo-300">सारांश: </span>
              {activeArticle.summary}
            </div>

            {/* High-Yield Bullet Points Layout (Key Exam Points & Figures) */}
            {activeArticle.points && activeArticle.points.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  <FileCheck2 className="w-4 h-4 text-indigo-500" />
                  <span>उच्च-उपयोगी बुँदागत विवरणहरू (Key Exam Points & Statistics):</span>
                </div>
                <ul className="space-y-2.5 bg-slate-50/80 dark:bg-slate-800/60 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800">
                  {activeArticle.points.map((pt, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 flex items-start gap-2.5 leading-relaxed">
                      <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 shrink-0 mt-2" />
                      <span>{renderFormattedText(pt)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Key Figures & Statistics (मुख्य आँकडा तथा सूचकहरू) */}
            {activeArticle.figures && activeArticle.figures.length > 0 && (
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  <TrendingUp className="w-4 h-4 text-blue-500" />
                  <span>मुख्य आँकडा तथा सूचकहरू (Key Figures & Indicators):</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {activeArticle.figures.map((fig, idx) => (
                    <div 
                      key={idx} 
                      className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1"
                    >
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                        {fig.label}
                      </div>
                      <div className="text-base sm:text-lg font-black text-indigo-600 dark:text-indigo-400">
                        {fig.value}
                      </div>
                      {fig.subtext && (
                        <div className="text-[10px] text-slate-400">
                          {fig.subtext}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bullet Points Layout: Key Facts & Figures (प्रमुख तथ्य तथा विवरणहरू) */}
            {activeArticle.importantFacts && activeArticle.importantFacts.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  <FileCheck2 className="w-4 h-4 text-emerald-500" />
                  <span>प्रमुख तथ्य तथा विवरणहरू (Key Facts & Statistics):</span>
                </div>
                <ul className="space-y-2 bg-slate-50/70 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                  {activeArticle.importantFacts.map((fact, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 flex items-start gap-2.5 leading-relaxed">
                      <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 shrink-0 mt-2" />
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Key Examination Points */}
            {activeArticle.keyPoints && activeArticle.keyPoints.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>परीक्षा विशेष बुँदाहरू (Key Exam Points):</span>
                </div>
                <ul className="space-y-2 bg-amber-50/40 dark:bg-amber-950/20 p-4 rounded-2xl border border-amber-200/60 dark:border-amber-900/40">
                  {activeArticle.keyPoints.map((kp, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-amber-950 dark:text-amber-100 flex items-start gap-2.5 leading-relaxed">
                      <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 mt-2" />
                      <span>{kp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Key Dates Timeline */}
            {activeArticle.keyDates && activeArticle.keyDates.length > 0 && (
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  <Clock className="w-4 h-4 text-purple-500" />
                  <span>प्रमुख मिति तथा समयरेखा (Key Dates):</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeArticle.keyDates.map((kd, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-800 text-xs">
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{kd.event}</span>
                      <span className="font-bold text-indigo-600 dark:text-indigo-400 ml-2 shrink-0">{kd.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Exam Relevance & Potential Questions */}
            <div className="space-y-3">
              {activeArticle.examRelevance && (
                <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/50 space-y-1">
                  <span className="text-xs font-extrabold text-blue-900 dark:text-blue-200 uppercase tracking-wider">
                    परीक्षा उपयोगिता (Exam Relevance):
                  </span>
                  <p className="text-xs sm:text-sm text-blue-950 dark:text-blue-100 font-medium">
                    {activeArticle.examRelevance}
                  </p>
                </div>
              )}

              {activeArticle.examQuestions && activeArticle.examQuestions.length > 0 && (
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-extrabold text-slate-800 dark:text-slate-200">
                    <HelpCircle className="w-4 h-4 text-indigo-500" />
                    <span>परीक्षामा सोध्न सकिने सम्भावित नमूना प्रश्नहरू:</span>
                  </div>
                  <ul className="space-y-1.5 pl-2">
                    {activeArticle.examQuestions.map((q, qIdx) => (
                      <li key={qIdx} className="text-xs text-slate-700 dark:text-slate-300 list-disc list-inside font-medium leading-relaxed">
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Modal Bottom Actions */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <button
                id="btn-share-affair"
                onClick={() => handleShare(activeArticle)}
                className="flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition"
              >
                {copiedShare ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
                <span>{copiedShare ? 'लिङ्क कपी भयो' : 'साथीहरूलाई शेयर गर्नुहोस्'}</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  id="btn-modal-bookmark"
                  onClick={() => {
                    toggleBookmark('current-affair', activeArticle.id, activeArticle.title, activeArticle.category);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition ${
                    isBookmarked('current-affair', activeArticle.id)
                      ? 'bg-amber-500 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  <Bookmark className="w-4 h-4" />
                  <span>{isBookmarked('current-affair', activeArticle.id) ? 'सुरक्षित छ' : 'सुरक्षित गर्नुहोस्'}</span>
                </button>

                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold hover:bg-slate-800 transition"
                >
                  बन्द गर्नुहोस्
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
