import React, { useState, useMemo } from 'react';
import { 
  BankingActData, 
  LawChapterItem, 
  LawSectionItem 
} from '../../types';
import { MarkdownRenderer } from '../common/MarkdownRenderer';
import { safeCopyToClipboard } from '../../utils/safeHelpers';
import { 
  BookOpen, 
  Layers, 
  Scale, 
  Search, 
  ChevronDown, 
  ChevronRight, 
  ChevronLeft, 
  FileText, 
  Check, 
  Copy, 
  Sparkles, 
  ShieldCheck, 
  Info,
  Calendar,
  Award,
  Filter,
  Eye,
  CheckCircle2
} from 'lucide-react';

interface BareActReaderProps {
  act: BankingActData;
  zoomLevel: number;
  onStartQuiz?: () => void;
}

type ViewMode = 'combined' | 'bare-act' | 'commentary';

export const BareActReader: React.FC<BareActReaderProps> = ({ 
  act, 
  zoomLevel,
  onStartQuiz
}) => {
  const [selectedChapterNumber, setSelectedChapterNumber] = useState<number | string | 'all'>('all');
  const [selectedSectionId, setSelectedSectionId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('combined');
  const [copiedSectionId, setCopiedSectionId] = useState<string | null>(null);
  const [showPreamble, setShowPreamble] = useState(true);

  // Filtered Chapters & Sections
  const filteredChapters = useMemo(() => {
    return act.chapters.map(ch => {
      // Check if chapter matches selected chapter filter
      if (selectedChapterNumber !== 'all' && ch.chapterNumber !== selectedChapterNumber) {
        return null;
      }

      // Filter sections inside chapter
      const matchingSections = ch.sections.filter(sec => {
        // Section dropdown filter
        if (selectedSectionId !== 'all' && sec.id !== selectedSectionId) {
          return false;
        }

        // Search text query
        if (!searchQuery.trim()) return true;
        const q = searchQuery.toLowerCase();
        return (
          sec.sectionNumber.toLowerCase().includes(q) ||
          sec.titleNepali.toLowerCase().includes(q) ||
          (sec.titleEnglish && sec.titleEnglish.toLowerCase().includes(q)) ||
          sec.bareLawText.toLowerCase().includes(q) ||
          sec.commentary.toLowerCase().includes(q) ||
          (sec.subSections && sec.subSections.some(s => s.toLowerCase().includes(q))) ||
          (sec.keyTakeaways && sec.keyTakeaways.some(k => k.toLowerCase().includes(q)))
        );
      });

      if (matchingSections.length === 0) return null;

      return {
        ...ch,
        sections: matchingSections
      };
    }).filter(Boolean) as LawChapterItem[];
  }, [act.chapters, selectedChapterNumber, selectedSectionId, searchQuery]);

  // Total matching sections count
  const totalMatchingSections = useMemo(() => {
    return filteredChapters.reduce((acc, ch) => acc + ch.sections.length, 0);
  }, [filteredChapters]);

  // Current chapter's sections for the section dropdown
  const currentChapterSections = useMemo(() => {
    if (selectedChapterNumber === 'all') {
      return act.chapters.flatMap(ch => ch.sections);
    }
    const currentCh = act.chapters.find(ch => ch.chapterNumber === selectedChapterNumber);
    return currentCh ? currentCh.sections : [];
  }, [act.chapters, selectedChapterNumber]);

  const handleCopySection = async (sec: LawSectionItem) => {
    const textToCopy = `${act.shortName} - ${sec.sectionNumber}: ${sec.titleNepali}\n\n[मूल कानुनी दफा]\n${sec.bareLawText}\n\n[व्याख्या]\n${sec.commentary}`;
    const success = await safeCopyToClipboard(textToCopy);
    if (success) {
      setCopiedSectionId(sec.id);
      setTimeout(() => setCopiedSectionId(null), 2000);
    }
  };

  const handleChapterChange = (chNum: number | string | 'all') => {
    setSelectedChapterNumber(chNum);
    setSelectedSectionId('all'); // Reset section filter on chapter switch
  };

  return (
    <div className="space-y-6" style={{ fontSize: `${zoomLevel}%` }}>
      
      {/* Act Header & Promulgation Details Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-br from-[#0B2046] via-[#102a5c] to-[#0B2046] text-white shadow-xl space-y-4 border border-blue-900/50">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-black border border-amber-500/30 flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5" />
              <span>प्रमाणिक मूल ऐन (Bare Act Manual)</span>
            </span>
            <span className="px-2.5 py-1 rounded-full bg-white/10 text-white text-xs font-semibold">
              {act.shortName}
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs text-blue-200">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-blue-300" />
              <span>{act.promulgationDate}</span>
            </span>
            <span>•</span>
            <span className="font-bold text-amber-300">
              कुल परिच्छेद: {act.totalChapters}
            </span>
            <span>•</span>
            <span className="font-bold text-emerald-300">
              कुल दफा: {act.totalSections}
            </span>
          </div>
        </div>

        <div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight leading-snug">
            {act.actTitleNepali}
          </h1>
          <p className="text-xs sm:text-sm text-blue-200/80 mt-1 font-medium">
            {act.actTitleEnglish}
          </p>
        </div>

        {/* Amendments badges */}
        {act.amendments && act.amendments.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-white/10 text-xs text-blue-200">
            <span className="font-bold text-amber-300">संशोधनहरू:</span>
            {act.amendments.map((am, i) => (
              <span key={i} className="px-2 py-0.5 rounded-lg bg-white/5 border border-white/10 text-[11px]">
                {am}
              </span>
            ))}
          </div>
        )}

        {/* Preamble Accordion */}
        <div className="pt-2">
          <button
            onClick={() => setShowPreamble(!showPreamble)}
            className="w-full text-left p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition flex items-center justify-between text-xs sm:text-sm"
          >
            <span className="font-bold flex items-center gap-2 text-amber-300">
              <Info className="w-4 h-4" />
              <span>ऐनको मूल प्रस्तावना (Preamble of the Act)</span>
            </span>
            <ChevronDown className={`w-4 h-4 transition-transform ${showPreamble ? 'rotate-180' : ''}`} />
          </button>

          {showPreamble && (
            <div className="mt-2 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm text-blue-100 leading-relaxed space-y-2 animate-fadeIn">
              <p className="italic">"{act.preambleNepali}"</p>
              {act.preambleEnglish && (
                <p className="text-[11px] text-blue-300/80 pt-1 border-t border-white/10">
                  {act.preambleEnglish}
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Dynamic Navigation & Filter Toolbar */}
      <div className="sticky top-0 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-4 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg space-y-3">
        
        {/* Row 1: Chapter Dropdown + Section Dropdown + View Mode */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          
          {/* Chapter Selector Dropdown */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-[#0B2046] dark:text-blue-400" />
              <span>परिच्छेद छनोट (Chapter):</span>
            </label>
            <div className="relative">
              <select
                value={selectedChapterNumber}
                onChange={(e) => {
                  const val = e.target.value;
                  handleChapterChange(val === 'all' ? 'all' : Number(val));
                }}
                className="w-full appearance-none px-3.5 py-2 text-xs font-bold rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white focus:outline-none focus:border-[#0B2046]"
              >
                <option value="all">सबै परिच्छेदहरू ({act.totalChapters} वटा)</option>
                {act.chapters.map(ch => (
                  <option key={ch.chapterNumber} value={ch.chapterNumber}>
                    परिच्छेद {ch.chapterNumber}: {ch.chapterTitleNepali.replace(/^परिच्छेद \d+:\s*/, '')}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
            </div>
          </div>

          {/* Section Selector Dropdown */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <FileText className="w-3.5 h-3.5 text-[#0B2046] dark:text-blue-400" />
              <span>दफा छनोट (Section Jump):</span>
            </label>
            <div className="relative">
              <select
                value={selectedSectionId}
                onChange={(e) => setSelectedSectionId(e.target.value)}
                className="w-full appearance-none px-3.5 py-2 text-xs font-bold rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white focus:outline-none focus:border-[#0B2046]"
              >
                <option value="all">सबै दफाहरू ({currentChapterSections.length} वटा)</option>
                {currentChapterSections.map(sec => (
                  <option key={sec.id} value={sec.id}>
                    {sec.sectionNumber}: {sec.titleNepali}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
            </div>
          </div>

          {/* Reading Mode Toggle */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <Eye className="w-3.5 h-3.5 text-[#0B2046] dark:text-blue-400" />
              <span>अध्ययन मोड (Reading Mode):</span>
            </label>
            <div className="flex rounded-xl bg-slate-100 dark:bg-slate-800 p-1 border border-slate-200 dark:border-slate-700">
              <button
                onClick={() => setViewMode('combined')}
                className={`flex-1 py-1 px-2 rounded-lg text-[11px] font-extrabold transition ${
                  viewMode === 'combined'
                    ? 'bg-white dark:bg-slate-700 text-[#0B2046] dark:text-white shadow-sm'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="दफा र व्याख्या दुवै हेर्नुहोस्"
              >
                संयुक्त
              </button>
              <button
                onClick={() => setViewMode('bare-act')}
                className={`flex-1 py-1 px-2 rounded-lg text-[11px] font-extrabold transition ${
                  viewMode === 'bare-act'
                    ? 'bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 shadow-sm'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="केवल मूल दफागत पाठ (Bare Act)"
              >
                मूल दफा
              </button>
              <button
                onClick={() => setViewMode('commentary')}
                className={`flex-1 py-1 px-2 rounded-lg text-[11px] font-extrabold transition ${
                  viewMode === 'commentary'
                    ? 'bg-white dark:bg-slate-700 text-amber-600 dark:text-amber-400 shadow-sm'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="केवल व्याख्या र परीक्षा टिप्स"
              >
                व्याख्या
              </button>
            </div>
          </div>

          {/* Live Section Search */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <Search className="w-3.5 h-3.5 text-[#0B2046] dark:text-blue-400" />
              <span>दफा / शब्द खोज्नुहोस्:</span>
            </label>
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="दफा नम्बर, शब्द वा जरिवाना..."
                className="w-full pl-8 pr-3 py-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white focus:outline-none focus:border-[#0B2046]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Row 2: Horizontal Quick Chapter Switcher Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-1 pb-0.5 scrollbar-none border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={() => handleChapterChange('all')}
            className={`px-3 py-1 rounded-xl text-xs font-extrabold whitespace-nowrap transition ${
              selectedChapterNumber === 'all'
                ? 'bg-[#0B2046] text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            सबै ({act.chapters.length})
          </button>

          {act.chapters.map(ch => (
            <button
              key={ch.chapterNumber}
              onClick={() => handleChapterChange(ch.chapterNumber)}
              className={`px-3 py-1 rounded-xl text-xs font-extrabold whitespace-nowrap transition flex items-center gap-1.5 ${
                selectedChapterNumber === ch.chapterNumber
                  ? 'bg-[#0B2046] text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <span>परिच्छेद {ch.chapterNumber}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                selectedChapterNumber === ch.chapterNumber
                  ? 'bg-white/20 text-white'
                  : 'bg-slate-200 dark:bg-slate-700 text-slate-500'
              }`}>
                {ch.sections.length}
              </span>
            </button>
          ))}
        </div>

      </div>

      {/* Results Meta Info */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-2">
        <span>
          देखाउँदै: <strong className="text-slate-800 dark:text-white">{totalMatchingSections}</strong> दफाहरू
          {selectedChapterNumber !== 'all' && ` (परिच्छेद ${selectedChapterNumber} अन्तर्गत)`}
        </span>

        {selectedSectionId !== 'all' && (
          <button
            onClick={() => setSelectedSectionId('all')}
            className="text-xs font-bold text-[#0B2046] dark:text-blue-400 hover:underline"
          >
            सबै दफा देखाउनुहोस्
          </button>
        )}
      </div>

      {/* Chapters & Sections Content Flow */}
      <div className="space-y-10">
        {filteredChapters.length === 0 ? (
          <div className="text-center py-16 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <Search className="w-10 h-10 text-slate-300 mx-auto" />
            <p className="font-bold text-slate-700 dark:text-slate-200 text-base">
              कुनै दफा वा विवरण फेला परेन
            </p>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              तपाईंले खोज्नुभएको शब्द "{searchQuery}" सँग मेल खाने दफा यस परिच्छेदमा छैन। खोज शब्द हटाउनुहोस् वा अर्को परिच्छेद छनोट गर्नुहोस्।
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedChapterNumber('all');
                setSelectedSectionId('all');
              }}
              className="px-4 py-2 rounded-xl bg-[#0B2046] text-white text-xs font-bold"
            >
              सम्पूर्ण ऐन हेर्नुहोस्
            </button>
          </div>
        ) : (
          filteredChapters.map(ch => (
            <div key={ch.chapterNumber} className="space-y-6">
              
              {/* Chapter Separator Title Header */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#C8102E] dark:text-rose-400">
                    {ch.chapterTitleEnglish}
                  </span>
                  <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                    {ch.chapterTitleNepali}
                  </h2>
                </div>

                {ch.description && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md sm:text-right">
                    {ch.description}
                  </p>
                )}
              </div>

              {/* Sections under this chapter */}
              <div className="space-y-6">
                {ch.sections.map(sec => {
                  const isCopied = copiedSectionId === sec.id;

                  return (
                    <article
                      key={sec.id}
                      id={sec.id}
                      className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all space-y-5"
                    >
                      {/* Section Title & Header Bar */}
                      <div className="flex items-start justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 font-black text-xs">
                              {sec.sectionNumber}
                            </span>
                            {sec.titleEnglish && (
                              <span className="text-xs font-semibold text-slate-400">
                                {sec.titleEnglish}
                              </span>
                            )}
                          </div>
                          <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                            {sec.titleNepali}
                          </h3>
                        </div>

                        {/* Copy Section Button */}
                        <button
                          onClick={() => handleCopySection(sec)}
                          className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition shrink-0 relative"
                          title="दफा प्रतिलिपि (Copy Section Text)"
                        >
                          {isCopied ? (
                            <Check className="w-4 h-4 text-emerald-500" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                          {isCopied && (
                            <span className="absolute -bottom-7 right-0 bg-slate-900 text-white text-[10px] px-2 py-0.5 rounded shadow whitespace-nowrap">
                              कपी भयो!
                            </span>
                          )}
                        </button>
                      </div>

                      {/* View 1: Bare Law Text (मूल दफागत व्यवस्था) */}
                      {(viewMode === 'combined' || viewMode === 'bare-act') && (
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Scale className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                            <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                              मूल कानुनी पाठ (Bare Legal Text)
                            </h4>
                          </div>

                          <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40 text-slate-800 dark:text-slate-100 leading-relaxed font-sans text-sm sm:text-base">
                            <MarkdownRenderer content={sec.bareLawText} />
                          </div>

                          {/* Sub-sections clauses */}
                          {sec.subSections && sec.subSections.length > 0 && (
                            <div className="space-y-2 pt-1 pl-2">
                              <h5 className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase">
                                उपदफाहरू तथा मुख्य बुँदाहरू (Sub-clauses):
                              </h5>
                              <ul className="space-y-2">
                                {sec.subSections.map((sub, sidx) => (
                                  <li key={sidx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                    <div className="flex-1">
                                      <MarkdownRenderer content={sub} />
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}

                      {/* View 2: Textbook Commentary & Analysis (पाठ्यपुस्तक व्याख्या) */}
                      {(viewMode === 'combined' || viewMode === 'commentary') && (
                        <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                          <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-amber-500" />
                            <h4 className="text-xs font-extrabold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                              पाठ्यपुस्तक विश्लेषण तथा कानुनी व्याख्या (Textbook Commentary & Case Doctrine)
                            </h4>
                          </div>

                          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/40 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/40 text-slate-800 dark:text-slate-200 text-xs sm:text-sm leading-relaxed space-y-3">
                            <MarkdownRenderer content={sec.commentary} />

                            {sec.practicalApplication && (
                              <div className="p-3 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-amber-200/60 dark:border-amber-800/60 text-xs text-amber-900 dark:text-amber-200">
                                <strong>बैंकिङ अभ्यास र परीक्षा सान्दर्भिकता:</strong> 
                                <div className="mt-1">
                                  <MarkdownRenderer content={sec.practicalApplication} />
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Key takeaways pills */}
                          {sec.keyTakeaways && sec.keyTakeaways.length > 0 && (
                            <div className="flex flex-wrap items-center gap-2 pt-1">
                              <span className="text-[11px] font-bold text-slate-400">मुख्य सार:</span>
                              {sec.keyTakeaways.map((takeaway, tidx) => (
                                <span
                                  key={tidx}
                                  className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-semibold border border-slate-200 dark:border-slate-700"
                                >
                                  ✓ {takeaway}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                    </article>
                  );
                })}
              </div>

            </div>
          ))
        )}
      </div>

      {/* Bottom Practice CTA */}
      {onStartQuiz && (
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0B2046] to-[#102a5c] text-white text-center space-y-4 shadow-xl border border-blue-900/50">
          <Award className="w-10 h-10 text-amber-400 mx-auto" />
          <h3 className="text-xl sm:text-2xl font-black">
            {act.shortName} बाट वस्तुगत परीक्षा (Quiz) अभ्यास गर्नुहोस्
          </h3>
          <p className="text-xs sm:text-sm text-blue-200 max-w-md mx-auto">
            यस ऐनका दफाहरू, सजाय तालिका, र परिच्छेदहरूबाट लोकसेवा र बैंकिङ परीक्षामा सोधिने वस्तुगत प्रश्नहरूको तयारी गर्नुहोस्।
          </p>
          <div>
            <button
              onClick={onStartQuiz}
              className="px-6 py-3 bg-[#C8102E] hover:bg-[#A50D24] text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-lg transition"
            >
              १० प्रश्नको ऐन विशेष Quiz सुरु गर्नुहोस्
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
