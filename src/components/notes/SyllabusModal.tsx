import React from 'react';
import { 
  X, 
  Download, 
  FileText, 
  CheckCircle2, 
  BookOpen, 
  Clock, 
  Award, 
  ExternalLink,
  Printer
} from 'lucide-react';
import { OfficialSyllabus } from '../../data/officialSyllabi';
import { useApp } from '../../context/AppContext';
import { ActivityTrackingService } from '../../services/activityTrackingService';

interface SyllabusModalProps {
  syllabus: OfficialSyllabus;
  onClose: () => void;
}

export const SyllabusModal: React.FC<SyllabusModalProps> = ({ syllabus, onClose }) => {
  const { requireAuth, user } = useApp();

  React.useEffect(() => {
    if (user && !user.isGuest) {
      ActivityTrackingService.logActivity({
        user,
        activityType: 'syllabus_view',
        targetId: syllabus.id,
        targetTitle: syllabus.titleNepali,
        details: `पाठ्यक्रम अवलोकन: ${syllabus.institutionNepali} - ${syllabus.post}`,
        metadata: { institution: syllabus.institution, level: syllabus.level }
      }).catch(() => {});
    }
  }, [syllabus.id, user?.id]);

  const handleDownload = () => {
    if (!requireAuth(() => handleDownload(), 'सामग्री पढ्न, पीडीएफ डाउनलोड गर्न र परीक्षा दिन लगइन गर्नुहोस्।')) {
      return;
    }

    // Persist authenticated download event to Firestore & Admin tracking
    if (user && !user.isGuest) {
      ActivityTrackingService.logDownload({
        user,
        fileId: syllabus.id,
        fileName: syllabus.pdfFileName,
        fileType: 'PDF',
        resourceCategory: 'Syllabus',
        fileSize: 'Official PDF'
      }).catch(() => {});
    }

    // Generate clean printable text/pdf payload
    const content = `${syllabus.institutionNepali.toUpperCase()}
${syllabus.titleNepali}
आधिकारिक परीक्षा पाठ्यक्रम (Official Examination Syllabus)

पद: ${syllabus.post}
तह / श्रेणी: ${syllabus.level}
संस्था: ${syllabus.institutionNepali} (${syllabus.institution})
कुल पूर्णाङ्क: ${syllabus.totalMarks} | उत्तीर्णाङ्क: ${syllabus.passMarks}
परीक्षा प्रणाली: ${syllabus.examType}
न्यूनतम शैक्षिक योग्यता: ${syllabus.eligibility}

छनौट प्रक्रिया (Selection Process):
${syllabus.selectionProcess.map((step, i) => `${i + 1}. ${step}`).join('\n')}

विस्तृत पाठ्यक्रम संरचना (Scheme of Examination & Curriculum):

${syllabus.papers.map(p => `
[पत्र ${p.paperNumber}]: ${p.title}
पूर्णाङ्क: ${p.fullMarks} | उत्तीर्णाङ्क: ${p.passMarks} | परीक्षा समय: ${p.timeMinutes} मिनेट
परीक्षाको ढाँचा: ${p.examFormat}

विषयगत खण्डहरू:
${p.sections.map(s => `  * ${s.sectionName} (${s.weightageMarks} अंक):
${s.topics.map(t => `      - ${t}`).join('\n')}`).join('\n')}
`).join('\n\n')}

Banking Tayari Nepal Educational Portal
वेबसाइट: https://bankingtayarinepal.com
सम्पर्क: support@bankingtayarinepal.com | टेलिफोन: +977-1-4200000
डाउनलोड गरिएको मिति: ${new Date().toLocaleDateString('ne-NP')}
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = syllabus.pdfFileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-4xl w-full border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-slate-100 dark:bg-slate-800/90 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-[#0B2046] text-white flex items-center justify-center shrink-0 shadow-sm">
              <FileText className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate">
                {syllabus.titleNepali}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                PDF Preview • {syllabus.institution} • {syllabus.pdfFileName}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleDownload}
              className="px-3.5 py-2 rounded-xl bg-[#C8102E] hover:bg-[#A50D24] text-white text-xs font-bold transition flex items-center gap-1.5 shadow-sm"
              title="Download Syllabus PDF"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">डाउनलोड (Download)</span>
            </button>

            <button
              onClick={handlePrint}
              className="hidden sm:flex p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition"
              title="Print"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Document Body (Styled as realistic official PDF reader) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-200/60 dark:bg-slate-950 custom-scrollbar">
          <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 shadow-lg rounded-2xl border border-slate-300 dark:border-slate-800 p-6 sm:p-10 space-y-6 text-slate-800 dark:text-slate-100">
            
            {/* Document Official Header Header */}
            <div className="text-center border-b-2 border-[#0B2046] pb-6 space-y-1.5">
              <div className="inline-block px-3 py-1 bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900 rounded-full text-red-700 dark:text-red-300 text-[11px] font-black uppercase tracking-wider mb-1">
                आधिकारिक स्वीकृत पाठ्यक्रम (Approved Syllabus)
              </div>
              <h1 className="text-lg sm:text-2xl font-black text-[#0B2046] dark:text-blue-200">
                {syllabus.institutionNepali}
              </h1>
              <h2 className="text-base sm:text-xl font-bold text-[#C8102E]">
                {syllabus.titleNepali}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                तह: <span className="font-bold text-slate-700 dark:text-slate-200">{syllabus.level}</span> | पद: <span className="font-bold text-slate-700 dark:text-slate-200">{syllabus.post}</span>
              </p>
            </div>

            {/* Quick Fact Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
                <p className="text-[11px] text-slate-400 font-bold uppercase">पूर्णाङ्क (Full Marks)</p>
                <p className="text-base font-black text-[#0B2046] dark:text-blue-300">{syllabus.totalMarks}</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
                <p className="text-[11px] text-slate-400 font-bold uppercase">उत्तीर्णाङ्क (Pass Marks)</p>
                <p className="text-base font-black text-emerald-600 dark:text-emerald-400">{syllabus.passMarks}</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
                <p className="text-[11px] text-slate-400 font-bold uppercase">कुल पत्र (Papers)</p>
                <p className="text-base font-black text-purple-600 dark:text-purple-400">{(syllabus.papers || []).length} पत्रहरू</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
                <p className="text-[11px] text-slate-400 font-bold uppercase">परीक्षा प्रणाली</p>
                <p className="text-xs font-bold text-slate-700 dark:text-slate-200 truncate">{syllabus.examType.split(' ')[0]}</p>
              </div>
            </div>

            {/* Minimum Eligibility */}
            <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 space-y-1">
              <h4 className="text-xs font-extrabold text-[#0B2046] dark:text-blue-300 uppercase tracking-wide">
                न्यूनतम शैक्षिक योग्यता (Minimum Qualification)
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {syllabus.eligibility}
              </p>
            </div>

            {/* Selection Stages */}
            <div className="space-y-2">
              <h4 className="text-xs font-extrabold text-slate-900 dark:text-white uppercase tracking-wide flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#C8102E]" />
                <span>छनौट प्रक्रियाका चरणहरू (Selection Framework)</span>
              </h4>
              <div className="space-y-1.5">
                {syllabus.selectionProcess.map((step, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Papers Section */}
            <div className="space-y-6 pt-2">
              <h3 className="text-sm sm:text-base font-black text-[#0B2046] dark:text-blue-200 border-b pb-2 flex items-center justify-between">
                <span>विस्तृत पाठ्यक्रम संरचना (Detailed Papers Breakdown)</span>
                <span className="text-xs text-slate-400 font-normal">Syllabus Details</span>
              </h3>

              {syllabus.papers.map(paper => (
                <div 
                  key={paper.paperNumber}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
                >
                  {/* Paper Header */}
                  <div className="p-4 bg-slate-100 dark:bg-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="px-2 py-0.5 rounded-full bg-[#0B2046] text-white text-[10px] font-bold">
                        पत्र {paper.paperNumber}
                      </span>
                      <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 dark:text-white mt-1">
                        {paper.title}
                      </h4>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 font-semibold shrink-0">
                      <span>पूर्णाङ्क: {paper.fullMarks}</span>
                      <span>•</span>
                      <span>उत्तीर्णाङ्क: {paper.passMarks}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#C8102E]" /> {paper.timeMinutes} मिनेट
                      </span>
                    </div>
                  </div>

                  {/* Format & Sections */}
                  <div className="p-4 space-y-4">
                    <div className="text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/60 p-2.5 rounded-xl">
                      <strong className="text-slate-700 dark:text-slate-200">परीक्षा ढाँचा:</strong> {paper.examFormat}
                    </div>

                    <div className="space-y-3">
                      {paper.sections.map((sec, sIdx) => (
                        <div key={sIdx} className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs font-bold text-[#0B2046] dark:text-blue-300 border-l-2 border-[#C8102E] pl-2">
                            <span>{sec.sectionName}</span>
                            <span className="text-[11px] text-slate-500 font-semibold">{sec.weightageMarks} अंक</span>
                          </div>
                          <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-400 space-y-1 pl-2">
                            {sec.topics.map((top, tIdx) => (
                              <li key={tIdx}>{top}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Official Seal / Disclaimer */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
              <p>
                नोट: यो पाठ्यक्रम नेपाल राष्ट्र बैंक र लोक सेवा आयोगको आधिकारिक नियमावली अनुसार अद्यावधिक गरिएको हो।
              </p>
              <button
                onClick={handleDownload}
                className="px-4 py-2 bg-[#0B2046] hover:bg-[#152B52] text-white font-bold rounded-xl flex items-center gap-1.5 shrink-0 transition"
              >
                <Download className="w-3.5 h-3.5" />
                <span>PDF डाउनलोड गर्नुहोस्</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
