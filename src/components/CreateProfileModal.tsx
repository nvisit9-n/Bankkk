import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Building2, 
  Search, 
  ChevronDown, 
  ShieldCheck, 
  Camera, 
  Upload, 
  GraduationCap, 
  Check,
  ArrowRight,
  Lock,
  CheckCircle2,
  AlertCircle,
  X,
  RotateCcw,
  KeyRound,
  Edit3
} from 'lucide-react';
import { UserProfile } from '../types';
import { DbService } from '../services/dbService';
import { StorageService } from '../services/storageService';
import { safeStorage } from '../utils/safeHelpers';
import { sanitizeUserProfile } from '../utils/sanitizer';
import { ImageCropModal } from './ImageCropModal';
import { DEFAULT_AVATAR_PRESETS } from './StudentProfileModal';
import { 
  NEPAL_77_DISTRICTS, 
  NEPAL_PROVINCES, 
  TARGET_EXAM_OPTIONS, 
  NepalDistrict,
  getDistrictsByProvince 
} from '../data/nepalDistricts';

export interface CreateProfileModalProps {
  onSuccess?: (user: UserProfile) => void;
  setUser?: (user: UserProfile) => void;
  setIsLoggedIn?: (loggedIn: boolean) => void;
  isOpen?: boolean;
  onClose?: () => void;
  isMandatory?: boolean;
  isEditMode?: boolean;
  initialUser?: UserProfile | null;
}

export const CreateProfileModal: React.FC<CreateProfileModalProps> = ({
  onSuccess,
  setUser,
  setIsLoggedIn,
  isOpen = true,
  onClose,
  isMandatory = true,
  isEditMode = false,
  initialUser = null
}) => {
  // Determine existing stored user for pre-filling
  const existingStoredUser = useMemo(() => {
    if (initialUser) return initialUser;
    try {
      const raw = localStorage.getItem('user_profile') || safeStorage.getItem('user_profile');
      if (raw) return JSON.parse(raw) as UserProfile;
    } catch {
      // ignore
    }
    return null;
  }, [initialUser]);

  // Form states - prefilled if edit mode or existing user, otherwise clean
  const [fullName, setFullName] = useState<string>(() => {
    return existingStoredUser?.name && existingStoredUser.name !== 'विद्यार्थी' ? existingStoredUser.name : '';
  });

  const [email, setEmail] = useState<string>(() => {
    return existingStoredUser?.email && !existingStoredUser.email.includes('example.com') ? existingStoredUser.email : '';
  });

  const [phone, setPhone] = useState<string>(() => {
    return existingStoredUser?.phone || '';
  });

  const [targetExam, setTargetExam] = useState<string>(() => {
    return existingStoredUser?.targetExam || TARGET_EXAM_OPTIONS[0].nameNepali;
  });
  
  // Province and district state - dynamic and without hardcoded Kathmandu
  const [selectedProvince, setSelectedProvince] = useState<string>(() => {
    if (existingStoredUser?.province) {
      return existingStoredUser.province;
    }
    // Default to the first province in Nepal
    return NEPAL_PROVINCES[0].nameNepali;
  });

  const [district, setDistrict] = useState<string>(() => {
    if (existingStoredUser?.district) {
      return existingStoredUser.district;
    }
    // Set to first district of default province
    const firstProvDistricts = getDistrictsByProvince(NEPAL_PROVINCES[0].nameNepali);
    return firstProvDistricts.length > 0 ? firstProvDistricts[0].nameNepali : 'भोजपुर';
  });

  const [isDistrictDropdownOpen, setIsDistrictDropdownOpen] = useState(false);
  const [districtSearch, setDistrictSearch] = useState('');
  
  // Avatar state
  const [avatarUrl, setAvatarUrl] = useState<string>(() => {
    return existingStoredUser?.avatarUrl || DEFAULT_AVATAR_PRESETS[0].url;
  });
  const [isCropModalOpen, setIsCropModalOpen] = useState(false);
  const [selectedRawImage, setSelectedRawImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Status and error handling
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccessUnlocked, setIsSuccessUnlocked] = useState<boolean>(false);

  // ZERO-COST DEMO OTP STATES
  const [isOtpStep, setIsOtpStep] = useState<boolean>(false);
  const [demoOtp, setDemoOtp] = useState<string>('');
  const [enteredOtp, setEnteredOtp] = useState<string>('');
  const [otpError, setOtpError] = useState<string | null>(null);

  // Whenever existingStoredUser changes, update prefilled fields if in edit mode
  useEffect(() => {
    if (existingStoredUser && isEditMode) {
      if (existingStoredUser.name) setFullName(existingStoredUser.name);
      if (existingStoredUser.email) setEmail(existingStoredUser.email);
      if (existingStoredUser.phone) setPhone(existingStoredUser.phone);
      if (existingStoredUser.targetExam) setTargetExam(existingStoredUser.targetExam);
      if (existingStoredUser.province) setSelectedProvince(existingStoredUser.province);
      if (existingStoredUser.district) setDistrict(existingStoredUser.district);
      if (existingStoredUser.avatarUrl) setAvatarUrl(existingStoredUser.avatarUrl);
    }
  }, [existingStoredUser, isEditMode]);

  // Dynamically calculate available districts strictly belonging to the selected Province
  const availableDistrictsForProvince = useMemo(() => {
    return getDistrictsByProvince(selectedProvince);
  }, [selectedProvince]);

  // Filter available districts for search
  const filteredDistricts = useMemo(() => {
    if (!districtSearch.trim()) return availableDistrictsForProvince;
    const q = districtSearch.toLowerCase().trim();
    return availableDistrictsForProvince.filter(d => 
      d.nameNepali.includes(q) || 
      d.nameEnglish.toLowerCase().includes(q) ||
      d.headquarters.toLowerCase().includes(q)
    );
  }, [availableDistrictsForProvince, districtSearch]);

  // Dynamic Province Change Handler: updates district list and selects first district of that province
  const handleSelectProvince = (provName: string) => {
    setSelectedProvince(provName);
    const districtsForProv = getDistrictsByProvince(provName);
    if (districtsForProv.length > 0) {
      setDistrict(districtsForProv[0].nameNepali);
    } else {
      setDistrict('');
    }
    setDistrictSearch('');
    setIsDistrictDropdownOpen(false);
  };

  const handleSelectDistrict = (d: NepalDistrict) => {
    setDistrict(d.nameNepali);
    setSelectedProvince(d.provinceNepali || d.province);
    setIsDistrictDropdownOpen(false);
    setDistrictSearch('');
  };

  // Avatar file upload & crop handler
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setErrorMessage('कृपया केवल फोटो (JPG, PNG, WebP) फाइल अपलोड गर्नुहोस्।');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setErrorMessage('फोटो फाइलको साइज ५ MB भन्दा कम हुनुपर्दछ।');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setSelectedRawImage(reader.result as string);
      setIsCropModalOpen(true);
      setErrorMessage(null);
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  const handleCropSave = (croppedDataUrl: string) => {
    setAvatarUrl(croppedDataUrl);
    setIsCropModalOpen(false);
    setSelectedRawImage(null);
  };

  // Mobile and repetitive number validator
  const validateMobileNumber = (rawPhone: string): { isValid: boolean; error?: string; cleanPhone: string } => {
    const cleanPhone = rawPhone.replace(/[\s-]/g, '');
    
    // Must be exactly 10 digits starting with 98, 97, or 96
    const phoneRegex = /^(98|97|96)\d{8}$/;
    if (!phoneRegex.test(cleanPhone)) {
      return {
        isValid: false,
        cleanPhone,
        error: 'कृपया मान्य १०-अङ्कको मोबाइल नम्बर (९८, ९७ वा ९६ बाट सुरु हुने) प्रविष्ट गर्नुहोस्।'
      };
    }

    // Block repetitive dummy inputs (e.g., 0000000000, 9999999999, 9800000000, 9811111111, 9812345678)
    const allSameDigits = /^(\d)\1{9}$/.test(cleanPhone);
    const suffixRepetitive = /^(98|97|96)(\d)\2{7}$/.test(cleanPhone);
    const knownDummySequences = [
      '9812345678', 
      '9876543210', 
      '9801234567', 
      '9800000000',
      '9700000000',
      '9600000000'
    ];

    if (allSameDigits || suffixRepetitive || knownDummySequences.includes(cleanPhone)) {
      return {
        isValid: false,
        cleanPhone,
        error: 'कृपया वास्तविक मोबाइल नम्बर प्रविष्ट गर्नुहोस् (नक्कली वा दोहोरिएका अङ्क मान्य छैनन्)।'
      };
    }

    return { isValid: true, cleanPhone };
  };

  // Trigger form validation and transition to Zero-Cost Demo OTP
  const handleProceedToVerification = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setOtpError(null);

    const trimmedName = fullName.trim();
    if (!trimmedName || trimmedName.length < 3) {
      setErrorMessage('कृपया आफ्नो पूरा नाम (कम्तिमा ३ अक्षर) प्रविष्ट गर्नुहोस्।');
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const trimmedEmail = email.trim();
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      setErrorMessage('कृपया मान्य इमेल ठेगाना प्रविष्ट गर्नुहोस् (उदा: student.nepal@gmail.com)।');
      return;
    }

    const phoneValidation = validateMobileNumber(phone);
    if (!phoneValidation.isValid) {
      setErrorMessage(phoneValidation.error || 'कृपया मान्य मोबाइल नम्बर प्रविष्ट गर्नुहोस्।');
      return;
    }

    if (!district) {
      setErrorMessage('कृपया आफ्नो जिल्ला छनोट गर्नुहोस्।');
      return;
    }

    // In Edit Mode, if phone didn't change and user is just updating info, we can save directly or verify
    if (isEditMode && existingStoredUser && existingStoredUser.phone === phoneValidation.cleanPhone) {
      saveProfileAndUnlock(phoneValidation.cleanPhone);
      return;
    }

    // Generate random 4-digit Zero-Cost Demo Code
    const generatedCode = Math.floor(1000 + Math.random() * 9000).toString();
    setDemoOtp(generatedCode);
    setEnteredOtp('');
    setIsOtpStep(true);
  };

  // Generate new Demo OTP
  const handleResendDemoOtp = () => {
    const newCode = Math.floor(1000 + Math.random() * 9000).toString();
    setDemoOtp(newCode);
    setEnteredOtp('');
    setOtpError(null);
  };

  // Verify entered OTP and finalize profile persistence
  const handleVerifyOtpAndSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setOtpError(null);

    if (!enteredOtp || enteredOtp.trim().length !== 4) {
      setOtpError('कृपया स्क्रिनमा देखाइएको ४-अङ्कको डेमो प्रमाणीकरण कोड प्रविष्ट गर्नुहोस्।');
      return;
    }

    if (enteredOtp.trim() !== demoOtp.trim()) {
      setOtpError('प्रमाणीकरण कोड मिलेन! कृपया स्क्रिनमा देखाइएको ४-अङ्कको कोड (उदा: ' + demoOtp + ') टाइप गर्नुहोस्।');
      return;
    }

    const cleanPhone = phone.replace(/[\s-]/g, '');
    await saveProfileAndUnlock(cleanPhone);
  };

  // Save profile to LocalStorage and unlock platform
  const saveProfileAndUnlock = async (cleanPhone: string) => {
    setIsSubmitting(true);
    setErrorMessage(null);
    setOtpError(null);

    try {
      // Build complete user object
      const rawUserData: UserProfile = {
        id: existingStoredUser?.id || `student-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        name: fullName.trim(),
        email: email.trim(),
        phone: cleanPhone,
        province: selectedProvince,
        district: district,
        targetExam: targetExam,
        avatarUrl: avatarUrl,
        xp: existingStoredUser?.xp ?? 150,
        streak: existingStoredUser?.streak ?? 1,
        lastActiveDate: new Date().toISOString().split('T')[0],
        questionsSolved: existingStoredUser?.questionsSolved ?? 0,
        quizzesCompleted: existingStoredUser?.quizzesCompleted ?? 0,
        accuracy: existingStoredUser?.accuracy ?? 100,
        rank: existingStoredUser?.rank || 'तह ४: नयाँ प्रतियोगी (Aspirant)',
        level: existingStoredUser?.level ?? 1,
        totalQuestionsAnswered: existingStoredUser?.totalQuestionsAnswered ?? 0,
        notesRead: existingStoredUser?.notesRead ?? 0,
        registeredAt: existingStoredUser?.registeredAt || new Date().toISOString(),
        isRegistered: true
      };

      // Sanitize inputs to eliminate XSS or malformed data
      const updatedUserData = sanitizeUserProfile(rawUserData);

      // 1. Strictly save in LocalStorage under key 'user_profile'
      localStorage.setItem('user_profile', JSON.stringify(updatedUserData));
      safeStorage.setItem('user_profile', JSON.stringify(updatedUserData));
      safeStorage.setItem('btn_registration_completed_v1', 'true');
      safeStorage.setItem('btn_student_profile_v2', JSON.stringify(updatedUserData));

      // 2. Synchronize with StorageService & DbService
      StorageService.saveUserProfile(updatedUserData);
      await DbService.saveStudentProfile(updatedUserData);

      // 3. Visual feedback unlock state
      setIsSuccessUnlocked(true);

      // 4. Update parent state & context instantly
      setTimeout(() => {
        if (setUser) {
          setUser(updatedUserData);
        }
        if (setIsLoggedIn) {
          setIsLoggedIn(true);
        }
        if (onSuccess) {
          onSuccess(updatedUserData);
        }

        // Dispatch window event for instant cross-component updates
        window.dispatchEvent(new CustomEvent('btn:profile-updated', { detail: updatedUserData }));

        if (onClose) {
          onClose();
        }
      }, 350);

    } catch (err) {
      console.error('Registration/Edit error:', err);
      setErrorMessage('विवरण सुरक्षित गर्दा समस्या देखियो। कृपया पुन: प्रयास गर्नुहोस्।');
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div 
        id="create-profile-portal-overlay"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto"
      >
        <div 
          className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200/90 dark:border-slate-800 overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Top Clean Minimalist Header (Dark Blue / Red gradient with Lock element) */}
          <div className="bg-gradient-to-r from-[#0B1E3D] via-[#1E293B] to-[#7F1D1D] py-4 px-6 text-white text-center relative overflow-hidden">
            {/* Close button if not mandatory or in edit mode */}
            {(!isMandatory || isEditMode) && onClose && (
              <button 
                onClick={onClose}
                type="button"
                className="absolute right-4 top-4 p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition z-20 cursor-pointer"
                title="बन्द गर्नुहोस्"
              >
                <X className="w-5 h-5" />
              </button>
            )}

            <div className="relative z-10">
              {/* Centered Lock Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center mx-auto mb-2">
                <Lock className="w-5 h-5 text-blue-300" />
              </div>

              {/* Bold White Title */}
              <h2 className="text-xl md:text-2xl font-bold text-white text-center">
                {isEditMode ? 'प्रोफाइल सम्पादन गर्नुहोस्' : 'प्रोफाइल दर्ता'}
              </h2>
            </div>
          </div>

          {/* STEP 2: ZERO-COST DEMO OTP VERIFICATION SUB-SCREEN */}
          {isOtpStep ? (
            <form onSubmit={handleVerifyOtpAndSave} className="p-4 sm:p-6 space-y-4">
              <div className="text-center space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-semibold border border-blue-200 dark:border-blue-900/60">
                  <KeyRound className="w-3.5 h-3.5 text-blue-600" />
                  <span>मोबाइल प्रमाणीकरण (OTP Verification)</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  मोबाइल नम्बर <span className="font-bold text-slate-900 dark:text-white font-mono">{phone}</span> को लागि:
                </p>
              </div>

              {/* ZERO-COST DEMO CODE PROMINENT DISPLAY */}
              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300/80 dark:border-amber-800/80 text-center shadow-inner">
                <p className="text-xs text-amber-800 dark:text-amber-200 font-semibold mb-1.5">
                  शून्य-लागत डेमो कोड (Demo Verification Code):
                </p>
                <div className="flex items-center justify-center gap-2">
                  <div className="px-4 py-1.5 rounded-xl bg-amber-500/20 border border-amber-500/40 font-mono text-2xl sm:text-3xl font-black text-amber-900 dark:text-amber-100 tracking-widest">
                    {demoOtp}
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setEnteredOtp(demoOtp);
                      setOtpError(null);
                    }}
                    className="px-3 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition shadow-sm cursor-pointer"
                    title="स्वतः भर्नुहोस्"
                  >
                    Auto-Fill
                  </button>
                </div>
                <p className="text-[11px] text-amber-700 dark:text-amber-300 mt-2">
                  परीक्षणको लागि माथिको ४-अङ्कको कोड टाइप गरी प्रमाणीकरण सम्पन्न गर्नुहोस्।
                </p>
              </div>

              {/* OTP Error message */}
              {otpError && (
                <div className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 flex items-start gap-2 text-rose-700 dark:text-rose-300 text-xs font-semibold animate-in shake duration-200">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
                  <span>{otpError}</span>
                </div>
              )}

              {/* 4-Digit OTP Input */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 text-center">
                  ४-अङ्कको कोड यहाँ टाइप गर्नुहोस्:
                </label>
                <input
                  type="text"
                  maxLength={4}
                  autoFocus
                  value={enteredOtp}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, '').slice(0, 4);
                    setEnteredOtp(val);
                    setOtpError(null);
                  }}
                  placeholder="• • • •"
                  className="w-full text-center tracking-widest text-2xl font-mono font-bold py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-sm"
                />
              </div>

              {/* OTP Action Buttons */}
              <div className="space-y-2 pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting || isSuccessUnlocked || enteredOtp.length !== 4}
                  className="w-full py-3 px-6 rounded-xl font-bold text-white text-sm bg-gradient-to-r from-[#0B2046] via-[#1D4ED8] to-[#C8102E] hover:from-[#1E3A8A] hover:to-[#DC2626] shadow-lg shadow-blue-950/20 flex items-center justify-center gap-2 transition-all transform hover:scale-[1.01] active:scale-[0.99] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting || isSuccessUnlocked ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 animate-bounce text-emerald-400" />
                      <span>प्रमाणीकरण सम्पन्न हुँदैछ...</span>
                    </>
                  ) : (
                    <>
                      <Check className="w-4 h-4 text-emerald-300" />
                      <span>प्रमाणीकरण सम्पन्न गरी {isEditMode ? 'सुरक्षित गर्नुहोस्' : 'पोर्टल खोल्नुहोस्'}</span>
                    </>
                  )}
                </button>

                <div className="flex items-center justify-between gap-2 pt-1 text-xs">
                  <button
                    type="button"
                    onClick={() => {
                      setIsOtpStep(false);
                      setOtpError(null);
                    }}
                    className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 font-medium transition cursor-pointer flex items-center gap-1"
                  >
                    <span>← विवरण सच्याउनुहोस्</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleResendDemoOtp}
                    className="text-blue-600 dark:text-blue-400 hover:underline font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>नयाँ कोड पठाउनुहोस्</span>
                  </button>
                </div>
              </div>
            </form>
          ) : (
            /* STEP 1: FORM INPUTS */
            <form onSubmit={handleProceedToVerification} className="p-4 sm:p-5 space-y-3.5">
              
              {/* Error Message Alert */}
              {errorMessage && (
                <div className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 flex items-start gap-2 text-rose-700 dark:text-rose-300 text-xs font-semibold animate-in shake duration-200">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Compact Avatar Selector Row */}
              <div className="flex items-center justify-between gap-3 p-2 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="relative shrink-0">
                    <img
                      src={avatarUrl}
                      alt="Student Avatar"
                      referrerPolicy="no-referrer"
                      className="w-11 h-11 rounded-full object-cover border-2 border-blue-600 shadow-sm"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="absolute -bottom-1 -right-1 p-1 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow transition cursor-pointer"
                      title="फोटो अपलोड गर्नुहोस्"
                    >
                      <Camera className="w-2.5 h-2.5" />
                    </button>
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200">प्रोफाइल अवतार</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">रोज्नुहोस् वा फोटो अपलोड गर्नुहोस्</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  {DEFAULT_AVATAR_PRESETS.slice(0, 4).map((preset) => (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => setAvatarUrl(preset.url)}
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border transition-all cursor-pointer ${
                        avatarUrl === preset.url 
                          ? 'border-blue-600 ring-2 ring-blue-500 scale-105 shadow-sm' 
                          : 'border-slate-300 dark:border-slate-700 opacity-70 hover:opacity-100'
                      }`}
                      title={preset.title}
                    >
                      <img 
                        src={preset.url} 
                        alt={preset.title} 
                        referrerPolicy="no-referrer" 
                        className="w-full h-full object-cover" 
                      />
                    </button>
                  ))}

                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="p-1.5 sm:p-2 rounded-xl border border-dashed border-blue-400 dark:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/40 text-blue-600 dark:text-blue-400 transition cursor-pointer"
                    title="कस्टम फोटो अपलोड"
                  >
                    <Upload className="w-3.5 h-3.5" />
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                  />
                </div>
              </div>

              {/* Full Name Input */}
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="पूरा नाम थर (Full Name) *"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/90 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm font-medium transition"
                />
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="इमेल ठेगाना (Email Address) *"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/90 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 text-xs sm:text-sm font-mono transition"
                  />
                </div>

                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="मोबाइल नम्बर (१० अङ्क: ९८XXXXXXXX) *"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/90 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 text-xs sm:text-sm font-mono transition"
                  />
                </div>
              </div>

              {/* Target Exam Selection */}
              <div className="relative">
                <GraduationCap className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  value={targetExam}
                  onChange={(e) => setTargetExam(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/90 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 text-xs sm:text-sm font-medium appearance-none cursor-pointer"
                >
                  {TARGET_EXAM_OPTIONS.map((exam) => (
                    <option key={exam.id} value={exam.nameNepali}>
                      लक्ष्य परीक्षा: {exam.nameNepali} ({exam.nameEnglish})
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* DYNAMIC PROVINCES & DISTRICTS (All 77 Districts of Nepal) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* Dynamic Province Selector */}
                <div className="relative">
                  <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={selectedProvince}
                    onChange={(e) => handleSelectProvince(e.target.value)}
                    className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/90 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 text-xs sm:text-sm font-medium appearance-none cursor-pointer"
                  >
                    {NEPAL_PROVINCES.map((prov) => (
                      <option key={prov.id} value={prov.nameNepali}>
                        प्रदेश: {prov.nameNepali}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>

                {/* Dynamic District Dropdown for Selected Province */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsDistrictDropdownOpen(!isDistrictDropdownOpen)}
                    className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/90 text-slate-900 dark:text-white text-xs sm:text-sm font-medium text-left flex items-center justify-between hover:border-blue-500 transition cursor-pointer"
                  >
                    <div className="flex items-center gap-2 truncate">
                      <MapPin className="w-4 h-4 text-[#DC2626] shrink-0" />
                      <span className="font-bold truncate">जिल्ला: {district || 'छान्नुहोस्'}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform shrink-0 ${isDistrictDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown list of districts for the chosen province */}
                  {isDistrictDropdownOpen && (
                    <div className="absolute left-0 right-0 top-full mt-1.5 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 p-2 z-50 max-h-52 flex flex-col">
                      <div className="relative mb-2">
                        <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          autoFocus
                          value={districtSearch}
                          onChange={(e) => setDistrictSearch(e.target.value)}
                          placeholder={`${selectedProvince}का जिल्ला खोज्नुहोस्...`}
                          className="w-full pl-8 pr-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-600"
                        />
                      </div>

                      <div className="overflow-y-auto flex-1 divide-y divide-slate-100 dark:divide-slate-800 text-xs">
                        {filteredDistricts.length === 0 ? (
                          <div className="p-3 text-center text-slate-400 text-xs">
                            जिल्ला भेटिएन
                          </div>
                        ) : (
                          filteredDistricts.map((d) => (
                            <button
                              key={d.id}
                              type="button"
                              onClick={() => handleSelectDistrict(d)}
                              className={`w-full p-2 text-left rounded-lg flex items-center justify-between hover:bg-blue-50 dark:hover:bg-blue-950/40 transition cursor-pointer ${
                                district === d.nameNepali 
                                  ? 'bg-blue-500/10 font-black text-[#2563EB] dark:text-blue-400' 
                                  : 'text-slate-700 dark:text-slate-300'
                              }`}
                            >
                              <div className="flex flex-col">
                                <span className="font-bold">{d.nameNepali} ({d.nameEnglish})</span>
                                <span className="text-[10px] text-slate-400">सदरमुकाम: {d.headquarters}</span>
                              </div>
                              {district === d.nameNepali && (
                                <Check className="w-4 h-4 text-blue-600 shrink-0" />
                              )}
                            </button>
                          ))
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Security Storage Banner */}
              <div className="p-2.5 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 flex items-center gap-2 text-xs text-blue-900 dark:text-blue-200">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <p className="text-[11px] leading-tight">
                  तपाईंको प्रोफाइल <span className="font-bold">LocalStorage</span> मा सुरक्षित भण्डारण हुन्छ।
                </p>
              </div>

              {/* SUBMIT BUTTON - PROCEED TO DEMO OTP VERIFICATION */}
              <div className="pt-1">
                <button
                  type="submit"
                  id="submit-register-unlock-btn"
                  disabled={isSubmitting || isSuccessUnlocked}
                  className="w-full py-3 px-6 rounded-xl font-bold text-white text-sm bg-gradient-to-r from-[#0B2046] via-[#1D4ED8] to-[#C8102E] hover:from-[#1E3A8A] hover:to-[#DC2626] shadow-lg shadow-blue-950/20 flex items-center justify-center gap-2 transition-all transform hover:scale-[1.01] active:scale-[0.99] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting || isSuccessUnlocked ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 animate-bounce text-emerald-400" />
                      <span>प्रक्रिया अघि बढ्दैछ...</span>
                    </>
                  ) : isEditMode ? (
                    <>
                      <Edit3 className="w-4 h-4" />
                      <span>परिवर्तन सुरक्षित गर्नुहोस्</span>
                    </>
                  ) : (
                    <>
                      <span>प्रमाणित गरी अगाडि बढ्नुहोस्</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>
      </div>

      {/* Image Crop Modal */}
      {isCropModalOpen && selectedRawImage && (
        <ImageCropModal
          isOpen={isCropModalOpen}
          imageSrc={selectedRawImage}
          onCropComplete={handleCropSave}
          onClose={() => {
            setIsCropModalOpen(false);
            setSelectedRawImage(null);
          }}
        />
      )}
    </>
  );
};

export default CreateProfileModal;
