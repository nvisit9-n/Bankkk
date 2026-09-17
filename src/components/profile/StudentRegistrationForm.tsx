import React, { useState, useMemo } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  CheckCircle2, 
  Save, 
  Search, 
  ChevronDown, 
  Sparkles, 
  X,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { DbService } from '../../services/dbService';
import { NEPAL_77_DISTRICTS, TARGET_EXAM_OPTIONS, NepalDistrict } from '../../data/nepalDistricts';

interface StudentRegistrationFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
  isModal?: boolean;
}

export const StudentRegistrationForm: React.FC<StudentRegistrationFormProps> = ({
  onSuccess,
  onCancel,
  isModal = false
}) => {
  const { user, refreshUser, addToast } = useApp();
  const isProfileComplete = DbService.isProfileComplete(user);

  const [fullName, setFullName] = useState<string>(user.name || '');
  const [emailOrPhone, setEmailOrPhone] = useState<string>(user.phone || user.email || '');
  const [targetExam, setTargetExam] = useState<string>(user.targetExam || TARGET_EXAM_OPTIONS[0].nameNepali);
  const [district, setDistrict] = useState<string>(user.district || 'काठमाडौँ');
  const [districtSearch, setDistrictSearch] = useState<string>('');
  const [isDistrictDropdownOpen, setIsDistrictDropdownOpen] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  // Filter districts based on search term
  const filteredDistricts = useMemo(() => {
    if (!districtSearch.trim()) return NEPAL_77_DISTRICTS;
    const query = districtSearch.toLowerCase().trim();
    return NEPAL_77_DISTRICTS.filter(d => 
      d.nameNepali.toLowerCase().includes(query) ||
      d.nameEnglish.toLowerCase().includes(query) ||
      d.provinceNepali.toLowerCase().includes(query) ||
      d.headquarters.toLowerCase().includes(query)
    );
  }, [districtSearch]);

  const selectedDistrictObj = useMemo(() => {
    return NEPAL_77_DISTRICTS.find(d => d.nameNepali === district || d.nameEnglish === district);
  }, [district]);

  const handleSelectDistrict = (dist: NepalDistrict) => {
    setDistrict(dist.nameNepali);
    setDistrictSearch('');
    setIsDistrictDropdownOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim()) {
      addToast('कृपया आफ्नो पूरा नाम प्रविष्ट गर्नुहोस्।', 'error');
      return;
    }

    if (!emailOrPhone.trim()) {
      addToast('कृपया इमेल वा फोन नम्बर प्रविष्ट गर्नुहोस्।', 'error');
      return;
    }

    setIsSaving(true);

    try {
      const isEmail = emailOrPhone.includes('@');
      await DbService.saveStudentProfile({
        name: fullName.trim(),
        email: isEmail ? emailOrPhone.trim() : (user.email || 'student@bankingtayari.np'),
        phone: !isEmail ? emailOrPhone.trim() : (user.phone || ''),
        targetExam: targetExam,
        district: district
      });

      refreshUser();
      addToast('विद्यार्थी प्रोफाइल सफलतापूर्वक सुरक्षित गरियो!', 'success');
      if (onSuccess) onSuccess();
    } catch {
      addToast('डाटा सुरक्षित गर्दा समस्या आयो, कृपया पुन: प्रयास गर्नुहोस्।', 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const content = (
    <div className="space-y-6">
      {/* Header Badge */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-blue-600/15 text-[#2563EB] dark:text-blue-400 flex items-center justify-center font-bold">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              विद्यार्थी दर्ता तथा प्रोफाइल (Student Profile)
              <span className="px-2 py-0.5 rounded-full bg-blue-600/20 text-[#2563EB] dark:text-blue-300 text-[10px] font-bold">
                तह ४ र ५
              </span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              तपाईंको अध्ययन प्रगति, क्विज स्कोर तथा लोक सेवा श्रेणी सुरक्षित राख्न विवरण भर्नुहोस्
            </p>
          </div>
        </div>

        {isModal && onCancel && isProfileComplete && (
          <button
            onClick={onCancel}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white"
            title="रद्द गर्नुहोस् (Close)"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
        {/* Full Name Field */}
        <div className="space-y-1.5">
          <label className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
            <User className="w-4 h-4 text-[#2563EB] dark:text-blue-400" />
            <span>पूरा नाम (Full Name) *</span>
          </label>
          <input
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="उदा: सुगम श्रेष्ठ (Sugam Shrestha)"
            className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition font-medium"
          />
        </div>

        {/* Email or Phone Number Field */}
        <div className="space-y-1.5">
          <label className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
            <Mail className="w-4 h-4 text-[#2563EB] dark:text-blue-400" />
            <span>इमेल वा फोन नम्बर (Email / Phone Number) *</span>
          </label>
          <input
            type="text"
            required
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            placeholder="उदा: 9801234567 वा student@gmail.com"
            className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition font-medium font-mono"
          />
          <p className="text-[11px] text-slate-400">
            * तपाईंको अध्ययन प्रगति र नतिजा यो खातामा स्वतः लिंक हुनेछ।
          </p>
        </div>

        {/* Target Exam Dropdown */}
        <div className="space-y-1.5">
          <label className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
            <Building2 className="w-4 h-4 text-[#2563EB] dark:text-blue-400" />
            <span>तयारी गरिरहेको लक्षित परीक्षा (Target Exam) *</span>
          </label>
          <div className="relative">
            <select
              value={targetExam}
              onChange={(e) => setTargetExam(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition appearance-none cursor-pointer font-semibold pr-10"
            >
              {TARGET_EXAM_OPTIONS.map((exam) => (
                <option key={exam.id} value={exam.nameNepali} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                  {exam.nameNepali}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* District / Location (77 Districts Searchable Input) */}
        <div className="space-y-1.5 relative">
          <label className="font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#DC2626] dark:text-red-400" />
              <span>जिल्ला / स्थान (District / Location - 77 Districts) *</span>
            </span>
            {selectedDistrictObj && (
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-[#2563EB] dark:text-blue-300 font-bold">
                {selectedDistrictObj.provinceNepali}
              </span>
            )}
          </label>

          {/* Selected District Display & Trigger */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsDistrictDropdownOpen(!isDistrictDropdownOpen)}
              className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-left flex items-center justify-between font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 transition"
            >
              <div className="flex items-center gap-2">
                <span className="text-base">📍</span>
                <span>{district || 'जिल्ला छान्नुहोस् (Select District)'}</span>
                {selectedDistrictObj && (
                  <span className="text-xs text-slate-400 font-normal">
                    ({selectedDistrictObj.nameEnglish} • सदरमुकाम: {selectedDistrictObj.headquarters})
                  </span>
                )}
              </div>
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isDistrictDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* 77 Districts Search & Dropdown Popover */}
            {isDistrictDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 z-30 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl overflow-hidden p-2 space-y-2 max-h-64 flex flex-col">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    autoFocus
                    value={districtSearch}
                    onChange={(e) => setDistrictSearch(e.target.value)}
                    placeholder="७७ जिल्ला खोज्नुहोस् (उदा: झापा, Kaski, काठमाडौँ)..."
                    className="w-full pl-8 pr-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-600 font-medium"
                  />
                </div>

                <div className="overflow-y-auto flex-1 divide-y divide-slate-100 dark:divide-slate-800 text-xs">
                  {filteredDistricts.length === 0 ? (
                    <div className="p-3 text-center text-slate-400">
                      कुनै जिल्ला फेला परेन।
                    </div>
                  ) : (
                    filteredDistricts.map((d) => (
                      <button
                        key={d.id}
                        type="button"
                        onClick={() => handleSelectDistrict(d)}
                        className={`w-full p-2 text-left rounded-xl flex items-center justify-between hover:bg-blue-50 dark:hover:bg-blue-950/40 transition ${
                          district === d.nameNepali ? 'bg-blue-500/10 font-black text-[#2563EB] dark:text-blue-400' : 'text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-bold">{d.nameNepali}</span>
                          <span className="text-slate-400 text-[11px]">({d.nameEnglish})</span>
                        </div>
                        <span className="text-[10px] text-slate-400">
                          {d.provinceNepali}
                        </span>
                      </button>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Security & Cloud Sync Notice */}
        <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
          <ShieldCheck className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            तपाईंको व्यक्तिगत विवरण स्थानीय सुरक्षित भण्डार (Local Session) तथा क्लाउड डाटाबेसमा सुरक्षित राखिनेछ। सम्पूर्ण १०,०००+ प्रश्नहरूको नतिजा तथा श्रेणी यस खातामा आबद्ध हुन्छ।
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex items-center justify-end gap-3">
          {isModal && onCancel && isProfileComplete && (
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
            >
              रद्द गर्नुहोस्
            </button>
          )}

          <button
            type="submit"
            disabled={isSaving}
            className="px-6 py-2.5 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-extrabold shadow-lg shadow-blue-950 flex items-center gap-2 transition disabled:opacity-50 cursor-pointer"
          >
            {isSaving ? (
              <span>सुरक्षित गर्दै...</span>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>प्रोफाइल सुरक्षित गर्नुहोस् (Save Profile)</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-7 max-h-[90vh] overflow-y-auto">
          {content}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
      {content}
    </div>
  );
};
