import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Landmark, 
  Scale, 
  ChevronRight, 
  CheckCircle2, 
  Lock, 
  BookOpen, 
  FileText, 
  Sparkles,
  ArrowRight,
  ChevronDown,
  Calculator,
  Percent,
  Laptop,
  TrendingUp,
  Users,
  ShieldCheck,
  Award,
  Layers,
  Check,
  BookmarkCheck
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { MOCK_COURSES } from '../../data/mockData';
import { CourseProgram, SubjectModule, TopicItem, SyllabusPaper, SyllabusSection } from '../../types';

export const CoursesScreen: React.FC = () => {
  const { openNoteReader, openPremiumDetail, setActiveTab, hasPurchased } = useApp();
  
  // Default directly to NRB Assistant Level 4
  const [selectedCourseId, setSelectedCourseId] = useState<string>('NRB');
  const [selectedLevelId, setSelectedLevelId] = useState<string>('level-4-5');
  
  // Paper & Section selection for courses with papers
  const [selectedPaperId, setSelectedPaperId] = useState<string>('paper-1');
  const [selectedSectionFilter, setSelectedSectionFilter] = useState<string>('all');
  
  // Subjects expansion for standard courses
  const [expandedSubjectId, setExpandedSubjectId] = useState<string | null>('comm-sub-01');

  // Listen to sidebar navigation events for direct section switching
  useEffect(() => {
    const handleSyllabusNav = (e: CustomEvent<{ courseId?: string; paperId?: string; sectionId?: string; levelId?: string; subjectId?: string }>) => {
      if (e.detail?.courseId) {
        const cid = e.detail.courseId === 'Banking' ? 'Commercial' : e.detail.courseId;
        setSelectedCourseId(cid);
      }
      if (e.detail?.levelId) {
        setSelectedLevelId(e.detail.levelId);
      }
      if (e.detail?.subjectId) {
        setExpandedSubjectId(e.detail.subjectId);
      }
      if (e.detail?.paperId) {
        setSelectedPaperId(e.detail.paperId);
      }
      if (e.detail?.sectionId) {
        setSelectedSectionFilter(e.detail.sectionId);
      }
    };

    window.addEventListener('btn:select-syllabus-section' as any, handleSyllabusNav as any);
    return () => {
      window.removeEventListener('btn:select-syllabus-section' as any, handleSyllabusNav as any);
    };
  }, []);

  const currentCourse = MOCK_COURSES.find(c => c.id === selectedCourseId || (selectedCourseId === 'Banking' && c.id === 'Commercial')) || MOCK_COURSES[0];
  const activePaper = currentCourse.papers?.find(p => p.id === selectedPaperId) || currentCourse.papers?.[0];
  const currentLevel = currentCourse.levels?.find(l => l.id === selectedLevelId) || currentCourse.levels?.[0];
  const activeSubjects = currentLevel ? currentLevel.subjects : (currentCourse.subjects || []);

  const handleSelectCourse = (courseId: string) => {
    setSelectedCourseId(courseId);
    setSelectedSectionFilter('all');
    const course = MOCK_COURSES.find(c => c.id === courseId);
    if (course?.levels && course.levels.length > 0) {
      setSelectedLevelId(course.levels[0].id);
      if (course.levels[0].subjects && course.levels[0].subjects.length > 0) {
        setExpandedSubjectId(course.levels[0].subjects[0].id);
      }
    } else if (course?.subjects && course.subjects.length > 0) {
      setExpandedSubjectId(course.subjects[0].id);
    }
  };

  const handleTopicClick = (topic: TopicItem) => {
    if (topic.noteId && (!topic.isPremium || hasPurchased('prem-01'))) {
      openNoteReader(topic.noteId);
    } else if (topic.isPremium) {
      openPremiumDetail('prem-01');
    } else if (topic.noteId) {
      openNoteReader(topic.noteId);
    } else {
      openNoteReader('note-banking-history');
    }
  };

  // Filter sections if a specific section is chosen
  const displayedSections = activePaper?.sections.filter(sec => {
    if (selectedSectionFilter === 'all') return true;
    return sec.id === selectedSectionFilter || sec.sectionLetter === selectedSectionFilter;
  }) || [];

  // Calculate paper overall completion
  const totalTopicsInActivePaper = activePaper?.sections.reduce((acc, s) => acc + s.topics.length, 0) || 0;
  const completedTopicsInActivePaper = activePaper?.sections.reduce((acc, s) => acc + s.topics.filter(t => t.completed).length, 0) || 0;
  const paperProgressPercent = totalTopicsInActivePaper > 0 
    ? Math.round((completedTopicsInActivePaper / totalTopicsInActivePaper) * 100) 
    : 0;

  return (
    <div className="space-y-6 pb-12 animate-fadeIn">
      
      {/* Page Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          पाठ्यक्रम तथा अध्ययन सामग्री (Courses & Curriculum)
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
          नेपालका बैंक तथा वित्तीय संस्था (NRB, RBB, ADBL, NBL, EPF) को आधिकारिक एकीकृत पाठ्यक्रम र अध्ययन सामग्री।
        </p>
      </div>

      {/* Program Selector Tabs */}
      <div className="flex flex-wrap p-1.5 bg-slate-200/80 dark:bg-slate-800 rounded-2xl gap-1 max-w-3xl">
        {[
          { id: 'NRB', label: '🏛️ नेपाल राष्ट्र बैंक (NRB)', count: 'तह ४ (Assistant - Active)' },
          { id: 'Commercial', label: '🏦 वाणिज्य बैंकहरू (Commercial Banks)', count: 'RBB / ADBL / NBL (तह ४, ५ र ६)' },
          { id: 'EPF', label: '🛡️ कर्मचारी सञ्चय कोष (EPF)', count: 'तह ४, ५ र ६' },
          { id: 'Loksewa', label: '🏢 लोकसेवा आयोग', count: 'निजामती सेवा' }
        ].map(tab => {
          const isSelected = selectedCourseId === tab.id || (selectedCourseId === 'Banking' && tab.id === 'Commercial');
          return (
            <button
              key={tab.id}
              id={`course-tab-${tab.id.toLowerCase()}`}
              onClick={() => handleSelectCourse(tab.id)}
              className={`flex-1 min-w-[170px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all text-center ${
                isSelected
                  ? 'bg-white dark:bg-slate-900 text-emerald-700 dark:text-emerald-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <div className="leading-snug">{tab.label}</div>
              <div className="text-[10.5px] font-medium opacity-80 mt-0.5">{tab.count}</div>
            </button>
          );
        })}
      </div>

      {/* Course Overview Banner */}
      <div className="p-6 rounded-3xl bg-royal-gradient text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-5 border border-blue-400/30 shadow-soft-blue">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold flex items-center gap-1.5 border border-emerald-500/30">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              आधिकारिक पाठ्यक्रम अनुसार
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-200 text-xs font-semibold">
              २०८१/२०८२ स्वीकृत
            </span>
            {currentCourse.id === 'Commercial' && (
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-200 text-xs font-bold">
                RBB • ADBL • NBL साझा
              </span>
            )}
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            {currentCourse.name}
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/80 max-w-2xl leading-relaxed">
            {currentCourse.tagline}
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            id="courses-view-premium-btn"
            onClick={() => setActiveTab('premium')}
            className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition shadow-sm cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>प्रिमियम प्याकहरू हेर्नुहोस्</span>
          </button>
        </div>
      </div>

      {/* Commercial Banks Highlight Banner (when Commercial Banks selected) */}
      {currentCourse.id === 'Commercial' && (
        <div className="p-4 rounded-2xl bg-blue-50/80 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 flex items-start gap-3.5 shadow-2xs">
          <div className="p-2 rounded-xl bg-blue-600 text-white shrink-0 mt-0.5">
            <Landmark className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-sm font-black text-blue-900 dark:text-blue-200">
                वाणिज्य बैंकहरू: RBB, ADBL र NBL साझा एकीकृत पाठ्यक्रम (Common Syllabus)
              </h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300">
                साझा मोड्युलहरू • Duplicate Content मुक्त
              </span>
            </div>
            <p className="text-xs text-blue-800/80 dark:text-blue-300/80 leading-relaxed">
              राष्ट्रिय वाणिज्य बैंक (RBB), कृषि विकास बैंक (ADBL) र नेपाल बैंक लिमिटेड (NBL) को लागि पाठ्यक्रमका करिब ८०-९०% विषयवस्तुहरू साझा छन्। परीक्षार्थीहरूलाई दोहोरो सामग्री नपरोस् भनी साझा मोड्युलहरूलाई एकीकृत रूपमा प्रस्तुत गरिएको छ।
            </p>
          </div>
        </div>
      )}

      {/* Level Selection Tabs for Multi-Level Courses (Commercial Banks & EPF) */}
      {currentCourse.levels && currentCourse.levels.length > 0 && (
        <div className="bg-white dark:bg-slate-900 p-3 sm:p-4 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
              तह छनौट गर्नुहोस् (Select Level):
            </span>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
              {currentLevel?.nameNepali} सक्रिय
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {currentCourse.levels.map(level => {
              const isLevelActive = (currentLevel?.id === level.id);
              return (
                <button
                  key={level.id}
                  id={`level-selector-${level.id}`}
                  onClick={() => {
                    setSelectedLevelId(level.id);
                    if (level.subjects && level.subjects.length > 0) {
                      setExpandedSubjectId(level.subjects[0].id);
                    }
                  }}
                  className={`p-3.5 rounded-2xl text-left transition-all border cursor-pointer ${
                    isLevelActive
                      ? 'bg-emerald-50/90 dark:bg-emerald-950/40 border-emerald-500 shadow-2xs'
                      : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-black ${
                      isLevelActive ? 'text-emerald-900 dark:text-emerald-300' : 'text-slate-900 dark:text-white'
                    }`}>
                      {level.nameNepali}
                    </span>
                    {level.badge && (
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                        isLevelActive ? 'bg-emerald-600 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                      }`}>
                        {level.badge}
                      </span>
                    )}
                  </div>
                  {level.description && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                      {level.description}
                    </p>
                  )}
                  <div className="mt-2 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
                    {level.subjects?.length || 0} वटा अध्ययन मोड्युलहरू (Modules)
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 1. HIERARCHICAL SYLLABUS VIEW FOR NRB / PAPERS-BASED COURSES */}
      {/* ========================================================================= */}
      {currentCourse.papers && currentCourse.papers.length > 0 ? (
        <div className="space-y-6">
          
          {/* Main Paper Selector (Paper I vs Paper II) */}
          <div className="bg-white dark:bg-slate-900 p-2 sm:p-2.5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {currentCourse.papers.map((paper) => {
                const isPaperActive = (activePaper?.id === paper.id);
                return (
                  <button
                    key={paper.id}
                    id={`paper-tab-${paper.id}`}
                    onClick={() => {
                      setSelectedPaperId(paper.id);
                      setSelectedSectionFilter('all');
                    }}
                    className={`p-4 rounded-2xl text-left transition-all border ${
                      isPaperActive
                        ? 'bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-500/60 shadow-xs'
                        : 'bg-slate-50/60 dark:bg-slate-800/40 border-slate-200/80 dark:border-slate-700/80 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-black uppercase px-2.5 py-0.5 rounded-md ${
                        isPaperActive
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                      }`}>
                        पत्र {paper.paperNumber} ({paper.id.toUpperCase()})
                      </span>
                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                        पूर्णाङ्क: {paper.fullMarks} | उत्तीर्णाङ्क: {paper.passMarks}
                      </span>
                    </div>

                    <h3 className={`text-base sm:text-lg font-black mt-2 ${
                      isPaperActive ? 'text-emerald-900 dark:text-emerald-300' : 'text-slate-900 dark:text-white'
                    }`}>
                      {paper.titleNepali}
                    </h3>
                    
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 line-clamp-1">
                      {paper.sections.map(s => `${s.titleNepali.split(':')[0]}`).join(' • ')}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Paper Progress Overview */}
            {activePaper && (
              <div className="mt-3 px-3 py-2.5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-700 dark:text-slate-300">
                    {activePaper.titleNepali} अध्ययन प्रगति:
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">
                    {completedTopicsInActivePaper}/{totalTopicsInActivePaper} पाठ पूरा ({paperProgressPercent}%)
                  </span>
                </div>
                <div className="w-full sm:w-48 bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-emerald-600 h-full rounded-full transition-all duration-300"
                    style={{ width: `${paperProgressPercent}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Section Filter Pills */}
          {activePaper && (
            <div className="flex items-center gap-2 overflow-x-auto pb-1 custom-scrollbar">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-emerald-600" />
                खण्ड छनौट:
              </span>

              <button
                onClick={() => setSelectedSectionFilter('all')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all ${
                  selectedSectionFilter === 'all'
                    ? 'bg-[#0B2046] text-white shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300'
                }`}
              >
                सबै खण्डहरू ({activePaper.sections.length})
              </button>

              {activePaper.sections.map((sec) => {
                const isSelected = selectedSectionFilter === sec.id || selectedSectionFilter === sec.sectionLetter;
                return (
                  <button
                    key={sec.id}
                    id={`filter-section-${sec.sectionLetter.toLowerCase()}`}
                    onClick={() => setSelectedSectionFilter(sec.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <span>खण्ड {sec.sectionLetter}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded font-black ${
                      isSelected ? 'bg-emerald-800 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                    }`}>
                      {sec.weightageMarks}m
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Grouped Sections & Chapters */}
          <div className="space-y-6">
            {displayedSections.map((section: SyllabusSection) => {
              return (
                <div
                  key={section.id}
                  id={`section-container-${section.id}`}
                  className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 sm:p-7 shadow-xs space-y-4"
                >
                  {/* Section Title with Ultra-Premium Accent Border */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div>
                      <h3 className="border-l-4 border-emerald-600 pl-3 font-bold text-xl text-slate-900 dark:text-white tracking-tight">
                        {section.titleNepali}
                      </h3>
                      {section.titleEnglish && (
                        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 pl-4">
                          {section.titleEnglish}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-center pl-4 sm:pl-0 shrink-0">
                      <span className="px-3 py-1 bg-emerald-100/80 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-black rounded-xl border border-emerald-300 dark:border-emerald-800">
                        {section.weightageMarks} अङ्क भार (Marks)
                      </span>
                      <span className="text-xs font-bold text-slate-400">
                        {section.topics.length} शीर्षकहरू
                      </span>
                    </div>
                  </div>

                  {/* Chapters / Topics Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                    {section.topics.map((topic, index) => {
                      const isUnlocked = !topic.isPremium || hasPurchased('prem-01');

                      return (
                        <div
                          key={topic.id}
                          id={`topic-card-${topic.id}`}
                          onClick={() => handleTopicClick(topic)}
                          className="p-4 rounded-2xl bg-slate-50/70 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 hover:border-emerald-500 hover:bg-emerald-50/30 dark:hover:bg-emerald-950/20 cursor-pointer transition-all flex flex-col justify-between gap-3 group shadow-2xs hover:shadow-xs"
                        >
                          <div className="flex items-start gap-3">
                            <span className="w-7 h-7 rounded-xl bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-black text-xs flex items-center justify-center shrink-0 shadow-2xs border border-slate-200 dark:border-slate-600">
                              {index + 1}
                            </span>
                            <div className="min-w-0 flex-1">
                              <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                                {topic.name}
                              </h4>
                              {topic.nameEnglish && (
                                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                                  {topic.nameEnglish}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 dark:border-slate-700/60 text-xs">
                            <div className="flex items-center gap-2">
                              {topic.weightageMarks && (
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-200/80 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                                  {topic.weightageMarks} Marks
                                </span>
                              )}

                              {topic.isPremium ? (
                                isUnlocked ? (
                                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                                    ✓ Purchased
                                  </span>
                                ) : (
                                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 flex items-center gap-1">
                                    <Lock className="w-2.5 h-2.5" /> Premium
                                  </span>
                                )
                              ) : (
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50">
                                  🟢 Free Note
                                </span>
                              )}
                            </div>

                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleTopicClick(topic);
                              }}
                              className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-700 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-600 hover:text-white text-xs font-bold transition flex items-center gap-1 shadow-2xs border border-slate-200 dark:border-slate-600"
                            >
                              <span>अध्ययन</span>
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* ========================================================================= */
        /* 2. STANDARD SUBJECT MODULES (For Commercial Banks / EPF / Loksewa)        */
        /* ========================================================================= */
        <div className="space-y-4">
          {activeSubjects.map((subject) => {
            const isExpanded = expandedSubjectId === subject.id;
            const progressPercent = subject.totalTopics > 0 
              ? Math.round((subject.completedTopics / subject.totalTopics) * 100) 
              : 0;

            return (
              <div
                key={subject.id}
                className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs transition-all"
              >
                {/* Header card for subject */}
                <div
                  onClick={() => setExpandedSubjectId(isExpanded ? null : subject.id)}
                  className="p-5 sm:p-6 cursor-pointer hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold shrink-0">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="border-l-4 border-emerald-600 pl-3 font-bold text-xl text-slate-900 dark:text-white">
                        {subject.name}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-1 pl-4">
                        <span>{subject.totalTopics} वटा पाठहरू (Topics)</span>
                        <span>•</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                          {subject.completedTopics} सम्पन्न
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                    <div className="w-36">
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span className="text-slate-500">प्रगति</span>
                        <span className="text-emerald-600 dark:text-emerald-400">{progressPercent}%</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-emerald-600 h-full rounded-full transition-all" 
                          style={{ width: `${progressPercent}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openNoteReader(subject.topics[0]?.noteId || 'note-banking-history');
                        }}
                        className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-sm transition flex items-center gap-1.5"
                      >
                        <span>Continue</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <div className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                        <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expandable Topic Items */}
                {isExpanded && (
                  <div className="border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/50 p-4 sm:p-6 space-y-2.5">
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                      यस मोड्युलका शीर्षकहरू (Module Syllabus Topics):
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                      {subject.topics.map((topic, index) => {
                        const isUnlocked = !topic.isPremium || hasPurchased('prem-01');

                        return (
                          <div
                            key={topic.id}
                            onClick={() => handleTopicClick(topic)}
                            className="p-3.5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 hover:border-emerald-500/50 cursor-pointer transition-all flex items-center justify-between gap-3 group"
                          >
                            <div className="flex items-center gap-3">
                              <span className="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs flex items-center justify-center">
                                {index + 1}
                              </span>
                              <div>
                                <h5 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                  {topic.name}
                                </h5>
                                <div className="flex items-center gap-2 mt-0.5">
                                  {topic.completed ? (
                                    <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                                      <CheckCircle2 className="w-3 h-3" /> सम्पन्न गरिएको
                                    </span>
                                  ) : (
                                    <span className="text-[11px] text-slate-400">
                                      बाँकी
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              {topic.isPremium ? (
                                isUnlocked ? (
                                  <span className="px-2.5 py-1 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[11px] font-bold">
                                    ✓ Purchased
                                  </span>
                                ) : (
                                  <span className="px-2.5 py-1 rounded-md bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 text-[11px] font-bold flex items-center gap-1">
                                    <Lock className="w-3 h-3" /> Premium
                                  </span>
                                )
                              ) : (
                                <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-[11px] font-bold">
                                  🟢 Free Note
                                </span>
                              )}

                              <button className="p-1.5 rounded-lg text-slate-400 group-hover:text-emerald-600 transition">
                                <ChevronRight className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};
