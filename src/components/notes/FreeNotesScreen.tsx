import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Clock, 
  ChevronRight, 
  Bookmark, 
  Search, 
  Sparkles, 
  Zap, 
  Layers,
  Download,
  FileText,
  Eye,
  Award,
  Lock,
  Crown
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { StorageService } from '../../services/storageService';
import { DbService } from '../../services/dbService';
import { SubjectCategory, StudyNote } from '../../types';
import { AiNotesGenerator } from './AiNotesGenerator';
import { OFFICIAL_SYLLABI, OfficialSyllabus } from '../../data/officialSyllabi';
import { SyllabusModal } from './SyllabusModal';
import { ActivityTrackingService } from '../../services/activityTrackingService';

export const FreeNotesScreen: React.FC = () => {
  const { openNoteReader, toggleBookmark, isBookmarked, setActiveTab, requireAuth, user } = useApp();
  const [activeMode, setActiveMode] = useState<'browse' | 'syllabi' | 'ai-generator'>('browse');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSyllabus, setSelectedSyllabus] = useState<OfficialSyllabus | null>(null);

  const [allNotes, setAllNotes] = useState<StudyNote[]>(() => DbService.getAllNotes());

  useEffect(() => {
    const handleUpdate = () => {
      setAllNotes(DbService.getAllNotes());
    };
    window.addEventListener('btn:notes-updated', handleUpdate);
    return () => window.removeEventListener('btn:notes-updated', handleUpdate);
  }, []);

  const categories = [
    'All', 
    'Banking Acts & Directives',
    'NRB Act 2058', 
    'BAFIA', 
    'Accounting', 
    'GK', 
    'Banking', 
    'Management', 
    'Economics'
  ];

  const filteredNotes = allNotes.filter(note => {
    let matchesCategory = false;
    if (selectedCategory === 'All') {
      matchesCategory = true;
    } else if (selectedCategory === 'Banking Acts & Directives') {
      matchesCategory = note.subject === 'Law' || note.id.includes('act') || note.id.includes('bylaws') || note.id.includes('directives');
    } else if (selectedCategory === 'NRB Act 2058') {
      matchesCategory = note.id.includes('nrb-act') || note.title.toLowerCase().includes('2058') || note.category === 'NRB';
    } else if (selectedCategory === 'BAFIA') {
      matchesCategory = note.id.includes('bafia') || note.title.toLowerCase().includes('bafia') || note.title.toLowerCase().includes('२०७३');
    } else if (selectedCategory === 'Accounting') {
      matchesCategory = note.subject === 'Accounting' || note.title.toLowerCase().includes('accounting') || note.title.toLowerCase().includes('लेखा');
    } else if (selectedCategory === 'GK') {
      matchesCategory = note.subject === 'GK' || note.title.toLowerCase().includes('सामान्य ज्ञान') || note.category === 'Loksewa';
    } else {
      matchesCategory = note.subject === selectedCategory || note.category === selectedCategory;
    }

    const matchesSearch = note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (note.sections || []).some(s => s.heading.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleDownloadSyllabus = (syl: OfficialSyllabus) => {
    if (!requireAuth(() => handleDownloadSyllabus(syl), 'सामग्री पढ्न, पीडीएफ डाउनलोड गर्न र परीक्षा दिन लगइन गर्नुहोस्।')) {
      return;
    }

    // Persist authenticated download event to Firestore & Admin tracking
    if (user && !user.isGuest) {
      ActivityTrackingService.logDownload({
        user,
        fileId: syl.id,
        fileName: syl.pdfFileName,
        fileType: 'PDF',
        resourceCategory: 'Syllabus',
        fileSize: 'Official PDF'
      }).catch(() => {});
    }

    const content = `========================================================================
${syl.institutionNepali.toUpperCase()}
${syl.titleNepali}
आधिकारिक परीक्षा पाठ्यक्रम (Official Examination Syllabus)
========================================================================

पद: ${syl.post}
तह / श्रेणी: ${syl.level}
संस्था: ${syl.institutionNepali} (${syl.institution})
कुल पूर्णाङ्क: ${syl.totalMarks} | उत्तीर्णाङ्क: ${syl.passMarks}
परीक्षा प्रणाली: ${syl.examType}
न्यूनतम शैक्षिक योग्यता: ${syl.eligibility}

------------------------------------------------------------------------
छनौट प्रक्रिया (Selection Process):
------------------------------------------------------------------------
${syl.selectionProcess.map((step, i) => `${i + 1}. ${step}`).join('\n')}

========================================================================
विस्तृत पाठ्यक्रम संरचना (Scheme of Examination)
========================================================================
${syl.papers.map(p => `
[पत्र ${p.paperNumber}]: ${p.title}
पूर्णाङ्क: ${p.fullMarks} | उत्तीर्णाङ्क: ${p.passMarks} | समय: ${p.timeMinutes} मिनेट
परीक्षाको ढाँचा: ${p.examFormat}

विषयगत खण्डहरू:
${p.sections.map(s => `  * ${s.sectionName} (${s.weightageMarks} अंक):
${s.topics.map(t => `      - ${t}`).join('\n')}`).join('\n')}
`).join('\n------------------------------------------------------------------------\n')}

========================================================================
Banking Tayari Nepal Educational Portal
वेबसाइट: https://bankingtayarinepal.com
========================================================================
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = syl.pdfFileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#0B2046]/10 dark:bg-blue-900/40 text-[#0B2046] dark:text-blue-300 text-xs font-bold">
              📚 बैंकिङ तथा लोकसेवा अध्ययन सामाग्री
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#0B2046] dark:text-white mt-1">
            अध्ययन नोट्स तथा पाठ्यक्रम (Study Notes & Syllabi)
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            नेपाल राष्ट्र बैंक ऐन २०५८, BAFIA, लेखा, सामान्य ज्ञान र आधिकारिक पाठ्यक्रमहरू (Nepali & English)
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveMode(activeMode === 'ai-generator' ? 'browse' : 'ai-generator')}
            className={`px-4 py-2.5 rounded-2xl font-extrabold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition shadow-sm ${
              activeMode === 'ai-generator'
                ? 'bg-[#C8102E] text-white shadow-md'
                : 'bg-red-50 dark:bg-red-950/40 text-[#C8102E] border border-red-200 dark:border-red-900/50 hover:bg-red-100'
            }`}
          >
            <Sparkles className="w-4 h-4 fill-current" />
            <span>AI नोट्स जेनेरेटर</span>
          </button>

          <button
            onClick={() => setActiveTab('premium')}
            className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-extrabold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/20"
          >
            <Sparkles className="w-4 h-4" />
            <span>प्रिमियम बुक्स</span>
          </button>
        </div>
      </div>

      {/* Main Mode Toggles: Browse Notes vs Official Syllabi vs AI Notes Generator */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700">
        <button
          onClick={() => setActiveMode('browse')}
          className={`flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${
            activeMode === 'browse'
              ? 'bg-[#0B2046] text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-300 hover:text-[#0B2046]'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>अध्ययन नोट्स संग्रह (Bilingual Notes)</span>
        </button>

        <button
          onClick={() => setActiveMode('syllabi')}
          className={`flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${
            activeMode === 'syllabi'
              ? 'bg-[#0B2046] text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-300 hover:text-[#0B2046]'
          }`}
        >
          <FileText className="w-4 h-4 text-[#C8102E]" />
          <span>आधिकारिक पाठ्यक्रम (Official Syllabi)</span>
          <span className="px-1.5 py-0.5 bg-emerald-600 text-white text-[9px] rounded font-bold">
            PDF
          </span>
        </button>

        <button
          onClick={() => setActiveMode('ai-generator')}
          className={`flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${
            activeMode === 'ai-generator'
              ? 'bg-[#0B2046] text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-300 hover:text-[#0B2046]'
          }`}
        >
          <Zap className="w-4 h-4 text-[#C8102E] fill-current" />
          <span>AI नोट्स जेनेरेटर</span>
          <span className="px-1.5 py-0.5 bg-[#C8102E] text-white text-[9px] rounded uppercase font-black">
            AI
          </span>
        </button>
      </div>

      {/* Conditional Content: Syllabi Section */}
      {activeMode === 'syllabi' ? (
        <div className="space-y-6 animate-fadeIn">
          <div className="p-5 rounded-3xl bg-gradient-to-r from-[#0B2046] to-[#1E3A8A] text-white space-y-2 border-b-4 border-[#C8102E]">
            <h2 className="text-lg sm:text-xl font-black">
              नेपाल राष्ट्र बैंक, वाणिज्य बैंक र लोक सेवा आयोगका आधिकारिक पाठ्यक्रमहरू
            </h2>
            <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed">
              प्रत्येक पदको लागि तोकिएको परीक्षा संरचना, पूर्णाङ्क, विषयगत खण्डहरू र योग्यता। अनलाइन PDF Preview हेर्नुहोस् वा फाइल डाउनलोड गर्नुहोस्।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {OFFICIAL_SYLLABI.map(syl => (
              <div
                key={syl.id}
                className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/70 text-[#0B2046] dark:text-blue-300 font-bold text-[11px]">
                      {syl.institution}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
                      पूर्णाङ्क: {syl.totalMarks}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {syl.titleNepali}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {syl.description}
                  </p>

                  <div className="text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-xl space-y-1">
                    <p><strong className="text-slate-800 dark:text-white">तह / पद:</strong> {syl.level} - {syl.post}</p>
                    <p><strong className="text-slate-800 dark:text-white">कुल पत्र:</strong> {(syl.papers || []).length} पत्रहरू ({syl.examType})</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                  <button
                    onClick={() => {
                      if (requireAuth(() => setSelectedSyllabus(syl), 'सामग्री पढ्न, पीडीएफ डाउनलोड गर्न र परीक्षा दिन लगइन गर्नुहोस्।')) {
                        setSelectedSyllabus(syl);
                      }
                    }}
                    className="flex-1 py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-[#0B2046] hover:text-white dark:hover:bg-[#0B2046] text-slate-700 dark:text-slate-200 text-xs font-bold transition flex items-center justify-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#C8102E]" />
                    <span>PDF हेर्नुहोस्</span>
                  </button>

                  <button
                    onClick={() => handleDownloadSyllabus(syl)}
                    className="flex-1 py-2 px-3 rounded-xl bg-[#C8102E] hover:bg-[#A50D24] text-white text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>डाउनलोड (PDF)</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : activeMode === 'ai-generator' ? (
        <AiNotesGenerator />
      ) : (
        <>
          {/* Filter Tabs & Search */}
          <div className="flex flex-col sm:flex-row items-center gap-3 justify-between">
            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                    selectedCategory === cat
                      ? 'bg-[#0B2046] text-white shadow-sm'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ऐन, लेखा, सामान्य ज्ञान खोज्नुहोस्..."
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white focus:outline-none focus:border-[#0B2046]"
              />
            </div>
          </div>

          {/* Notes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredNotes.map(note => {
              const bookmarked = isBookmarked('note', note.id);

              return (
                <div
                  key={note.id}
                  className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#0B2046]/50 transition-all shadow-sm hover:shadow-md flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-[#0B2046] dark:text-blue-300 font-bold text-[11px]">
                          {note.subject}
                        </span>
                        {note.isPremium ? (
                          <span className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-600 dark:text-amber-400 font-black text-[10px] flex items-center gap-1">
                            <Lock className="w-2.5 h-2.5" />
                            <span>PRO</span>
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-semibold text-[10px]">
                            FREE
                          </span>
                        )}
                        <span className="flex items-center gap-1 text-[11px] text-slate-400">
                          <Clock className="w-3 h-3" /> {note.readTime}
                        </span>
                      </div>

                      <button
                        onClick={() => toggleBookmark('note', note.id, note.title, note.subject)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-amber-500 transition"
                        title="Bookmark"
                      >
                        <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
                      </button>
                    </div>

                    <h3 
                      onClick={() => openNoteReader(note)}
                      className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#0B2046] dark:group-hover:text-blue-400 cursor-pointer transition-colors"
                    >
                      {note.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {note.sections?.[0]?.content || ''}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-400">
                      {(note.sections || []).length} विषयगत बुँदाहरू
                    </span>

                    <button
                      onClick={() => openNoteReader(note)}
                      className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-[#0B2046] hover:text-white dark:hover:bg-[#0B2046] text-slate-700 dark:text-slate-200 text-xs font-bold transition flex items-center gap-1.5"
                    >
                      <span>अध्ययन गर्नुहोस्</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}

      {/* Official Syllabus PDF Preview Modal */}
      {selectedSyllabus && (
        <SyllabusModal 
          syllabus={selectedSyllabus} 
          onClose={() => setSelectedSyllabus(null)} 
        />
      )}

    </div>
  );
};

