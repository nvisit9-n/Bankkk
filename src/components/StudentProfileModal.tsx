import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Building2, 
  Save, 
  Search, 
  ChevronDown, 
  X,
  ShieldCheck,
  Camera,
  Upload,
  Sparkles,
  GraduationCap,
  Image as ImageIcon,
  Crop,
  Check,
  Zap,
  Lock
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { DbService } from '../services/dbService';
import { ImageCropModal } from './ImageCropModal';
import { 
  NEPAL_77_DISTRICTS, 
  NEPAL_PROVINCES,
  TARGET_EXAM_OPTIONS, 
  NepalDistrict 
} from '../data/nepalDistricts';

export const DEFAULT_AVATAR_PRESETS = [
  {
    id: 'female-officer',
    title: 'नेपाली महिला अधिकृत',
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80'
  },
  {
    id: 'male-officer',
    title: 'नेपाली पुरुष अधिकृत',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80'
  },
  {
    id: 'female-aspirant',
    title: 'बैंकिङ परीक्षार्थी (महिला)',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80'
  },
  {
    id: 'male-aspirant',
    title: 'बैंकिङ परीक्षार्थी (पुरुष)',
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80'
  },
  {
    id: 'young-student',
    title: 'युवा सहायक',
    url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80'
  },
  {
    id: 'smart-scholar',
    title: 'प्रतियोगी स्कॉलर',
    url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=256&q=80'
  }
];

export interface StudentProfileModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  forceMandatory?: boolean;
}

export const StudentProfileModal: React.FC<StudentProfileModalProps> = ({
  isOpen,
  onClose,
  forceMandatory = false
}) => {
  const { user, refreshUser, addToast, isProfileModalOpen, setIsProfileModalOpen } = useApp();

  // Modal is purely optional & gamified - never blocks the dashboard
  const isMandatory = false;
  const shouldShow = Boolean(isOpen || isProfileModalOpen);

  const isGoogleUser = Boolean(user.isGoogleUser || user.authProvider === 'google');

  // Form states - pre-fill from user profile
  const [fullName, setFullName] = useState<string>(
    user.name && user.name !== 'विद्यार्थी' ? user.name : (user.email ? user.email.split('@')[0] : '')
  );
  const [email, setEmail] = useState<string>(
    user.email && !user.email.includes('example.com') ? user.email : ''
  );
  const [phone, setPhone] = useState<string>(
    user.phone ? user.phone : ''
  );
  const [targetExam, setTargetExam] = useState<string>(user.targetExam || TARGET_EXAM_OPTIONS[0].nameNepali);
  
  // Province state: initialized from user.province, user's district province, or default Bagmati
  const initialProvince = useMemo(() => {
    if (user.province) return user.province;
    if (user.district) {
      const match = NEPAL_77_DISTRICTS.find(d => d.nameNepali === user.district || d.nameEnglish === user.district);
      if (match) return match.province;
    }
    return 'Bagmati';
  }, [user.province, user.district]);

  const [selectedProvince, setSelectedProvince] = useState<string>(initialProvince);
  const [district, setDistrict] = useState<string>(user.district || 'काठमाडौँ');
  const [avatarUrl, setAvatarUrl] = useState<string>(
    user.avatarUrl || DEFAULT_AVATAR_PRESETS[2].url
  );

  const [districtSearch, setDistrictSearch] = useState<string>('');
  const [isDistrictDropdownOpen, setIsDistrictDropdownOpen] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [showAvatarPresets, setShowAvatarPresets] = useState<boolean>(false);

  // Live profile completion calculation
  const liveCompletion = useMemo(() => {
    return DbService.calculateProfileCompletion({
      name: fullName,
      email: email,
      phone: phone,
      targetExam: targetExam,
      province: selectedProvince,
      district: district
    });
  }, [fullName, email, phone, targetExam, selectedProvince, district]);

  // Interactive Crop & Zoom Modal States
  const [rawCropImageSrc, setRawCropImageSrc] = useState<string | null>(null);
  const [isCropModalOpen, setIsCropModalOpen] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Synchronize state when user changes
  useEffect(() => {
    if (user) {
      if (user.isRegistered) {
        if (user.name && user.name !== 'विद्यार्थी') setFullName(user.name);
        if (user.email && !user.email.includes('example.com')) setEmail(user.email);
        if (user.phone) setPhone(user.phone);
      }
      if (user.targetExam) setTargetExam(user.targetExam);
      if (user.district) setDistrict(user.district);
      if (user.province) {
        setSelectedProvince(user.province);
      } else if (user.district) {
        const found = NEPAL_77_DISTRICTS.find(d => d.nameNepali === user.district || d.nameEnglish === user.district);
        if (found) setSelectedProvince(found.province);
      }
      if (user.avatarUrl) setAvatarUrl(user.avatarUrl);
    }
  }, [user]);

  // Handle Province change -> auto filters district dropdown and defaults district if out of province
  const handleProvinceChange = (newProvinceId: string) => {
    setSelectedProvince(newProvinceId);
    
    // Check if currently selected district belongs to the newly selected province
    const districtsInNewProvince = NEPAL_77_DISTRICTS.filter(d => d.province === newProvinceId);
    const currentBelongs = districtsInNewProvince.some(d => d.nameNepali === district || d.nameEnglish === district);
    
    if (!currentBelongs && districtsInNewProvince.length > 0) {
      setDistrict(districtsInNewProvince[0].nameNepali);
    }
  };

  // Districts available for the selected province
  const availableDistrictsForProvince = useMemo(() => {
    if (!selectedProvince) return NEPAL_77_DISTRICTS;
    return NEPAL_77_DISTRICTS.filter(d => d.province === selectedProvince);
  }, [selectedProvince]);

  // Filter districts by search query within selected province
  const filteredDistricts = useMemo(() => {
    if (!districtSearch.trim()) return availableDistrictsForProvince;
    const query = districtSearch.toLowerCase().trim();
    return availableDistrictsForProvince.filter(d => 
      d.nameNepali.toLowerCase().includes(query) ||
      d.nameEnglish.toLowerCase().includes(query) ||
      d.headquarters.toLowerCase().includes(query)
    );
  }, [availableDistrictsForProvince, districtSearch]);

  // Find district object for badge
  const selectedDistrictObj = useMemo(() => {
    return NEPAL_77_DISTRICTS.find(d => d.nameNepali === district || d.nameEnglish === district);
  }, [district]);

  // When user selects a district from dropdown, auto-fill and link its province
  const handleSelectDistrict = (dist: NepalDistrict) => {
    setDistrict(dist.nameNepali);
    setSelectedProvince(dist.province); // Auto-fill corresponding province
    setDistrictSearch('');
    setIsDistrictDropdownOpen(false);
  };

  // Handle file photo selection and conversion to Base64
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      addToast('कृपया मान्य फोटो (JPG, PNG, WebP) चयन गर्नुहोस्।', 'error');
      return;
    }

    // Check size limit: max 5MB raw
    if (file.size > 5 * 1024 * 1024) {
      addToast('फोटोको साइज ५ MB भन्दा कम हुनुपर्छ।', 'warning');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const rawDataUrl = event.target?.result as string;
      if (rawDataUrl) {
        setRawCropImageSrc(rawDataUrl);
        setIsCropModalOpen(true);
        addToast('फोटो काँटछाँट (Crop & Zoom) विन्डो खुल्यो। फोटो मिलाउनुहोस्।', 'info');
      }
    };
    reader.readAsDataURL(file);
    // Reset file input value so selecting the same file again triggers change
    e.target.value = '';
  };

  // Called when user completes interactive crop & zoom
  const handleCropComplete = (croppedDataUrl: string) => {
    setAvatarUrl(croppedDataUrl);
    setIsCropModalOpen(false);
    addToast('फोटो सफलतापूर्वक काँटछाँट (Crop) गरियो! सुरक्षित गर्न तल बटन थिच्नुहोस्।', 'success');
  };

  // Open cropper for current avatar
  const handleOpenCurrentCrop = () => {
    setRawCropImageSrc(avatarUrl);
    setIsCropModalOpen(true);
  };

  const handleClose = () => {
    if (isMandatory) {
      addToast('कृपया पोर्टल प्रयोग गर्न पहिले आफ्नो प्रोफाइल दर्ता पूरा गर्नुहोस्।', 'warning');
      return;
    }
    if (onClose) onClose();
    setIsProfileModalOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = fullName.trim();
    if (!trimmedName || trimmedName.length < 2) {
      addToast('कृपया आफ्नो पूरा नाम प्रविष्ट गर्नुहोस्।', 'error');
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      addToast('कृपया मान्य इमेल ठेगाना प्रविष्ट गर्नुहोस्।', 'error');
      return;
    }

    // Phone is optional but validated if provided
    let cleanPhone = phone.replace(/[\s-]/g, '');
    if (cleanPhone) {
      const phoneRegex = /^(98|97|96|\+977)\d{7,10}$/;
      if (!phoneRegex.test(cleanPhone)) {
        addToast('कृपया मान्य मोबाइल नम्बर प्रविष्ट गर्नुहोस् (उदा: ९८XXXXXXXX)।', 'error');
        return;
      }
    }

    setIsSaving(true);

    try {
      const priorBonus = user.hasReceivedCompletionBonus;
      const updated = await DbService.saveStudentProfile({
        name: trimmedName,
        displayName: trimmedName,
        email: email.trim(),
        phone: cleanPhone,
        province: selectedProvince,
        district: district,
        targetExam: targetExam,
        avatarUrl: avatarUrl,
        photoURL: avatarUrl,
        isRegistered: true,
        isGoogleUser: isGoogleUser
      });

      refreshUser();
      
      if (updated.hasReceivedCompletionBonus && !priorBonus) {
        addToast('🎉 बधाई छ! प्रोफाइल १००% पूरा भएकोमा +५० बोनस XP प्राप्त भयो!', 'success');
      } else {
        addToast('विद्यार्थी प्रोफाइल सफलतापूर्वक सुरक्षित गरियो!', 'success');
      }
      
      if (onClose) onClose();
      setIsProfileModalOpen(false);
    } catch {
      addToast('डाटा सुरक्षित गर्दा समस्या आयो, कृपया पुन: प्रयास गर्नुहोस्।', 'error');
    } finally {
      setIsSaving(false);
    }
  };

  if (!shouldShow) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget && !isMandatory) {
          handleClose();
        }
      }}
    >
      <div 
        className="bg-white dark:bg-slate-900 rounded-3xl max-w-xl w-full border border-blue-600/30 dark:border-blue-500/20 shadow-2xl p-6 sm:p-7 max-h-[92vh] overflow-y-auto my-auto relative animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Clean Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-start gap-3.5">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl shadow-md bg-blue-600/15 text-[#2563EB] dark:text-blue-400 border border-blue-500/30 shrink-0 mt-0.5">
              <GraduationCap className="w-6 h-6 text-[#2563EB] dark:text-blue-400" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                🎓 विद्यार्थी प्रोफाइल (Student Profile)
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                विवरणहरू अध्यावधिक गरी १००% प्रोफाइल पूरा गर्नुहोस् र +५० बोनस XP कमाउनुहोस्।
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer shrink-0 ml-2"
            title="बन्द गर्नुहोस् (Close)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Gamified Profile Completion Bar */}
        <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-amber-50 dark:from-blue-950/40 dark:via-indigo-950/30 dark:to-amber-950/30 border border-blue-100 dark:border-blue-900/50 space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span className="text-xs font-black text-slate-900 dark:text-white">
                प्रोफाइल पूर्णता: {liveCompletion.percentage}%
              </span>
            </div>
            
            <div className={`px-2.5 py-0.5 rounded-full text-[11px] font-extrabold flex items-center gap-1 ${
              liveCompletion.isComplete 
                ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800' 
                : 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800'
            }`}>
              <Zap className="w-3 h-3 fill-current" />
              <span>{liveCompletion.isComplete ? '✓ +५० XP अनलक भयो!' : '+५० बोनस XP इनाम'}</span>
            </div>
          </div>

          {/* Progress track */}
          <div className="w-full bg-slate-200 dark:bg-slate-700 h-2.5 rounded-full overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-600 via-indigo-500 to-amber-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${liveCompletion.percentage}%` }}
            />
          </div>

          {/* Checklist chips */}
          <div className="flex flex-wrap gap-1.5 pt-1 text-[10px]">
            {Object.entries(liveCompletion.breakdown).map(([key, item]) => (
              <span 
                key={key}
                className={`px-2 py-0.5 rounded-md font-semibold flex items-center gap-1 ${
                  item.completed 
                    ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60' 
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
                }`}
              >
                <span>{item.completed ? '✓' : '○'}</span>
                <span>{item.label.split(' ')[0]}</span>
                <span className="opacity-70">({item.weight}%)</span>
              </span>
            ))}
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="mt-4 space-y-4 text-xs sm:text-sm">
          
          {/* PROFILE PHOTO UPLOAD / CHANGE SECTION */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
            <div className="flex items-center justify-between mb-3">
              <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <Camera className="w-4 h-4 text-[#2563EB] dark:text-blue-400" />
                <span>प्रोफाइल फोटो (Profile Photo)</span>
              </span>
              <button
                type="button"
                onClick={() => setShowAvatarPresets(!showAvatarPresets)}
                className="text-xs text-[#2563EB] dark:text-blue-400 font-bold hover:underline cursor-pointer flex items-center gap-1"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#DC2626]" />
                <span>{showAvatarPresets ? 'अवतार लुकाउनुहोस्' : 'डिफल्ट अवतारहरू'}</span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* Avatar with Camera Overlay - 100% Circular Avatar */}
              <div className="relative group shrink-0 mx-auto sm:mx-0">
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-blue-600/30 overflow-hidden shadow-xl flex items-center justify-center bg-blue-950 shrink-0 mx-auto">
                  <img
                    src={avatarUrl}
                    alt={fullName || 'Avatar'}
                    referrerPolicy="no-referrer"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                
                {/* Camera Overlay Button */}
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute -bottom-1 -right-1 p-2 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] text-white shadow-lg transition-transform hover:scale-110 cursor-pointer border-2 border-white dark:border-slate-900"
                  title="नयाँ फोटो अपलोड गर्नुहोस् (Upload Photo)"
                >
                  <Camera className="w-3.5 h-3.5" />
                </button>

                {/* Hidden File Input */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>

              {/* Upload Instructions & Action Buttons */}
              <div className="flex-1 text-center sm:text-left space-y-2">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-3.5 py-2 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition cursor-pointer"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>ग्यालरीबाट छान्नुहोस्</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleOpenCurrentCrop}
                    className="px-3 py-2 rounded-xl bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-[#2563EB] dark:text-blue-300 border border-blue-200 dark:border-blue-800 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
                    title="फोटो काँटछाँट तथा जुम गर्नुहोस्"
                  >
                    <Crop className="w-3.5 h-3.5 text-[#DC2626]" />
                    <span>काँटछाँट (Crop & Zoom)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowAvatarPresets(!showAvatarPresets)}
                    className="px-3 py-2 rounded-xl bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center gap-1 transition cursor-pointer"
                  >
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>डिफल्ट अवतार</span>
                  </button>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  * JPG, PNG वा WebP फोटो अपलोड गर्न सक्नुहुन्छ। यो फोटो ब्यानर र प्रोफाइलमा तत्काल देखिनेछ।
                </p>
              </div>
            </div>

            {/* Default Avatar Preset Picker */}
            {showAvatarPresets && (
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700/60 animate-in fade-in slide-in-from-top-2">
                <p className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  लोकप्रिय बैंकिङ अवतारहरू (Click to Select):
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
                  {DEFAULT_AVATAR_PRESETS.map((preset) => {
                    const isSelected = avatarUrl === preset.url;
                    return (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => {
                          setAvatarUrl(preset.url);
                          addToast(`${preset.title} चयन गरियो!`, 'info');
                        }}
                        className={`relative p-1 rounded-2xl border-2 transition-all flex flex-col items-center gap-1 cursor-pointer ${
                          isSelected
                            ? 'border-[#2563EB] bg-blue-50 dark:bg-blue-950/40 ring-2 ring-blue-500/30'
                            : 'border-slate-200 dark:border-slate-700 hover:border-slate-400'
                        }`}
                      >
                        <img
                          src={preset.url}
                          alt={preset.title}
                          referrerPolicy="no-referrer"
                          className="w-12 h-12 rounded-xl object-cover"
                        />
                        <span className="text-[10px] font-semibold text-center text-slate-700 dark:text-slate-300 line-clamp-1">
                          {preset.title.split(' ')[0]}
                        </span>
                        {isSelected && (
                          <div className="absolute top-0.5 right-0.5 w-4 h-4 bg-[#2563EB] rounded-full flex items-center justify-center text-white text-[10px]">
                            ✓
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Full Name Field */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <User className="w-4 h-4 text-[#2563EB] dark:text-blue-400" />
                <span>पूरा नाम (Full Name) *</span>
              </label>
              {isGoogleUser && (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800/60">
                  <Lock className="w-3 h-3 text-emerald-600" />
                  <span>Google मार्फत प्रमाणित (Locked)</span>
                </span>
              )}
            </div>
            <input
              type="text"
              required
              disabled={isGoogleUser}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="उदा: बिमल पौडेल / सुनिता श्रेष्ठ"
              className={`w-full px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition font-medium ${
                isGoogleUser 
                  ? 'bg-slate-100 dark:bg-slate-800/50 cursor-not-allowed text-slate-600 dark:text-slate-400' 
                  : 'bg-slate-50 dark:bg-slate-800/80'
              }`}
            />
          </div>

          {/* Email and Phone Number Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Email Address */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-[#2563EB] dark:text-blue-400" />
                  <span>इमेल (Email) *</span>
                </label>
                {isGoogleUser && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800/60">
                    <Lock className="w-3 h-3 text-emerald-600" />
                    <span>Locked</span>
                  </span>
                )}
              </div>
              <input
                type="email"
                required
                disabled={isGoogleUser}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@gmail.com"
                className={`w-full px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition font-medium font-mono text-xs sm:text-sm ${
                  isGoogleUser 
                    ? 'bg-slate-100 dark:bg-slate-800/50 cursor-not-allowed text-slate-600 dark:text-slate-400' 
                    : 'bg-slate-50 dark:bg-slate-800/80'
                }`}
              />
            </div>

            {/* Phone Number (Optional) */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-[#DC2626] dark:text-red-400" />
                  <span>फोन नम्बर (Phone)</span>
                </label>
                <span className="text-[10px] text-slate-400">(ऐच्छिक)</span>
              </div>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="उदा: ९८XXXXXXXX (+१५% XP)"
                className="w-full px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition font-medium font-mono text-xs sm:text-sm"
              />
            </div>
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
                className="w-full px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition appearance-none cursor-pointer font-semibold pr-10"
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

          {/* Dynamic Province & District Selection with Auto-Linking */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Province Selection */}
            <div className="space-y-1.5">
              <label className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <span className="text-base">🏛️</span>
                <span>प्रदेश (Province) *</span>
              </label>
              <div className="relative">
                <select
                  value={selectedProvince}
                  onChange={(e) => handleProvinceChange(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition appearance-none cursor-pointer font-semibold pr-10 text-xs sm:text-sm"
                >
                  {NEPAL_PROVINCES.map((p) => (
                    <option key={p.id} value={p.id} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                      {p.nameNepali} ({p.nameEnglish})
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* District Selection (77 Districts, auto-filtered by selected Province) */}
            <div className="space-y-1.5 relative">
              <label className="font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#DC2626] dark:text-red-400" />
                  <span>जिल्ला (District) *</span>
                </span>
                {selectedDistrictObj && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-[#2563EB] dark:text-blue-300 font-bold">
                    {selectedDistrictObj.provinceNepali}
                  </span>
                )}
              </label>

              {/* Selected District Trigger */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsDistrictDropdownOpen(!isDistrictDropdownOpen)}
                  className="w-full px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-left flex items-center justify-between font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 transition cursor-pointer text-xs sm:text-sm"
                >
                  <div className="flex items-center gap-1.5 truncate">
                    <span className="text-sm">📍</span>
                    <span className="truncate">{district || 'जिल्ला छान्नुहोस्'}</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isDistrictDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Filtered Districts Dropdown Menu */}
                {isDistrictDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 z-30 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl overflow-hidden p-2 space-y-2 max-h-56 flex flex-col">
                    <div className="relative">
                      <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        autoFocus
                        value={districtSearch}
                        onChange={(e) => setDistrictSearch(e.target.value)}
                        placeholder="जिल्ला खोज्नुहोस् (उदा: झापा, कास्की)..."
                        className="w-full pl-8 pr-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-600 font-medium"
                      />
                    </div>

                    <div className="overflow-y-auto flex-1 divide-y divide-slate-100 dark:divide-slate-800 text-xs">
                      {filteredDistricts.length === 0 ? (
                        <div className="p-3 text-center text-slate-400 text-[11px]">
                          कुनै जिल्ला फेला परेन।
                        </div>
                      ) : (
                        filteredDistricts.map((d) => (
                          <button
                            key={d.id}
                            type="button"
                            onClick={() => handleSelectDistrict(d)}
                            className={`w-full p-2 text-left rounded-xl flex items-center justify-between hover:bg-blue-50 dark:hover:bg-blue-950/40 transition cursor-pointer ${
                              district === d.nameNepali ? 'bg-blue-500/10 font-black text-[#2563EB] dark:text-blue-400' : 'text-slate-700 dark:text-slate-300'
                            }`}
                          >
                            <div className="flex items-center gap-1.5">
                              <span className="font-bold">{d.nameNepali}</span>
                              <span className="text-slate-400 text-[10px]">({d.nameEnglish})</span>
                            </div>
                            <span className="text-[10px] text-slate-400">
                              {d.headquarters}
                            </span>
                          </button>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Security & Sync Confirmation */}
          <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
            <ShieldCheck className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
            <p className="leading-relaxed text-[11px]">
              तपाईंको व्यक्तिगत विवरण स्थानीय सुरक्षित भण्डार (Local Session) तथा क्लाउड डाटाबेसमा सुरक्षित राखिनेछ। सम्पूर्ण ५,०००+ प्रश्नहरूको नतिजा तथा श्रेणी यस खातामा आबद्ध हुन्छ।
            </p>
          </div>

          {/* ACTION BUTTONS: STRICTLY NO 'रद्द गर्नुहोस्' (CANCEL) WHEN MANDATORY */}
          <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-200 dark:border-slate-800">
            {!isMandatory && (
              <button
                type="button"
                onClick={handleClose}
                className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
              >
                रद्द गर्नुहोस्
              </button>
            )}

            <button
              type="submit"
              disabled={isSaving}
              className={`w-full sm:w-auto px-7 py-2.5 rounded-xl font-black text-white shadow-xl flex items-center justify-center gap-2 transition cursor-pointer disabled:opacity-50 ${
                isMandatory
                  ? 'bg-gradient-to-r from-blue-700 via-[#2563EB] to-indigo-700 hover:from-blue-600 hover:to-indigo-600 shadow-blue-950'
                  : 'bg-[#2563EB] hover:bg-blue-700 shadow-blue-900'
              }`}
            >
              {isSaving ? (
                <span>सुरक्षित गर्दै...</span>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>
                    {isMandatory 
                      ? 'दर्ता सम्पन्न गरी पोर्टल खोल्नुहोस् (Complete & Unlock)' 
                      : 'प्रोफाइल सुरक्षित गर्नुहोस् (Save Changes)'}
                  </span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Interactive Image Crop & Zoom Modal */}
      <ImageCropModal
        isOpen={isCropModalOpen}
        imageSrc={rawCropImageSrc || avatarUrl}
        onCropComplete={handleCropComplete}
        onClose={() => setIsCropModalOpen(false)}
      />
    </div>
  );
};
