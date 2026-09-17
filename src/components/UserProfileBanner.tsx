import React, { useRef, useState } from 'react';
import { 
  Camera, 
  MapPin, 
  Flame, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Trophy, 
  User, 
  Edit3, 
  Mail, 
  Phone, 
  Building2, 
  Zap,
  Crown
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { DbService } from '../services/dbService';

export interface UserProfileBannerProps {
  onEditProfile?: () => void;
  onStartChallenge?: () => void;
  onOpenNotes?: () => void;
}

export const UserProfileBanner: React.FC<UserProfileBannerProps> = ({
  onEditProfile,
  onStartChallenge,
  onOpenNotes
}) => {
  const { user, refreshUser, addToast, setIsProfileModalOpen, setActiveTab, openLoginModal } = useApp();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isUploadingPhoto, setIsUploadingPhoto] = useState<boolean>(false);

  const isGuest = !user?.email || Boolean(user?.isGuest);

  // Dynamic user session bindings:
  const emailPrefix = user?.email ? user.email.split('@')[0] : '';
  const displayName = isGuest 
    ? 'अतिथि (Guest User)' 
    : (user?.displayName || (user?.name && user.name !== 'विद्यार्थी' ? user.name : (emailPrefix || 'परीक्षार्थी')));
  const userEmail = isGuest ? '' : (user?.email || '');
  const photoURL = user?.photoURL || user?.avatarUrl || (isGuest ? '/default-avatar.png' : `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=0B2046&color=fff&size=256`);

  const userLevel = user?.level ?? (Math.floor((user?.xp || 100) / 500) + 1);
  const targetExam = user?.targetExam || 'नेपाल राष्ट्र बैंक (NRB) - तह ४/५';
  const streakDays = user?.streak ?? 1;
  const currentXp = user?.xp ?? 100;
  const nextLevelXp = userLevel * 500;
  const xpProgressPercent = Math.min(100, Math.round(((currentXp % 500) / 500) * 100));
  const isPro = Boolean(user && DbService.isUserPro(user));

  // Handle direct photo change via Camera overlay button
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      addToast('कृपया मान्य फोटो (JPG, PNG, WebP) छान्नुहोस्।', 'error');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      addToast('फोटोको साइज ५ MB भन्दा कम हुनुपर्छ।', 'warning');
      return;
    }

    setIsUploadingPhoto(true);

    const reader = new FileReader();
    reader.onload = async (event) => {
      const rawDataUrl = event.target?.result as string;

      // Downscale for optimal storage footprint and instant rendering
      const img = new Image();
      img.onload = async () => {
        try {
          const canvas = document.createElement('canvas');
          const maxDim = 240;
          let w = img.width;
          let h = img.height;

          if (w > h) {
            if (w > maxDim) {
              h = Math.round((h * maxDim) / w);
              w = maxDim;
            }
          } else {
            if (h > maxDim) {
              w = Math.round((w * maxDim) / h);
              h = maxDim;
            }
          }

          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext('2d');
          let finalPhotoUrl = rawDataUrl;

          if (ctx) {
            ctx.drawImage(img, 0, 0, w, h);
            finalPhotoUrl = canvas.toDataURL('image/jpeg', 0.88);
          }

          await DbService.saveStudentProfile({ avatarUrl: finalPhotoUrl, photoURL: finalPhotoUrl });
          refreshUser();
          addToast('तपाईंको प्रोफाइल फोटो सफलतापूर्वक अद्यावधिक भयो!', 'success');
        } catch {
          addToast('फोटो सुरक्षित गर्न सकिएन, कृपया पुनः प्रयास गर्नुहोस्।', 'error');
        } finally {
          setIsUploadingPhoto(false);
        }
      };

      img.onerror = () => {
        setIsUploadingPhoto(false);
        addToast('फोटो लोड गर्न सकिएन।', 'error');
      };

      img.src = rawDataUrl;
    };

    reader.onerror = () => {
      setIsUploadingPhoto(false);
      addToast('फाइल पढ्न सकिएन।', 'error');
    };

    reader.readAsDataURL(file);
  };

  const handleOpenEdit = () => {
    if (onEditProfile) {
      onEditProfile();
    } else {
      setIsProfileModalOpen(true);
    }
  };

  return (
    <div className="rounded-3xl bg-gradient-to-br from-[#0B2046] via-slate-900 to-[#071329] shadow-xl relative overflow-hidden border border-slate-700/60 text-white p-5 sm:p-7 transition-all">
      
      {/* Decorative background glow elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Banner Row: Streak Badge & Cloud Sync Indicator */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 relative z-10">
        
        {/* Streak Counter Badge */}
        <div className="inline-flex items-center gap-2 bg-amber-400/15 text-amber-300 text-xs px-3.5 py-1.5 rounded-full font-bold border border-amber-400/25 shadow-xs">
          <Flame className="w-4 h-4 text-amber-400 fill-amber-400 animate-pulse" />
          <span>{streakDays} दिने निरन्तर अध्ययन Streak</span>
        </div>

        {/* Cloud Synced & Exam Module Badge */}
        <div className="flex items-center gap-2 text-[11px] font-bold text-slate-300">
          <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/15">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>७७ जिल्ला लाइभ सिंक</span>
          </span>
          <span className="hidden sm:inline bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-700 text-slate-300">
            तह ४ र ५ विशेष
          </span>
        </div>
      </div>

      {/* Main Profile Content: Avatar, Details & XP */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
        
        {/* Left: Avatar with Camera Overlay & Name/Details */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full lg:w-auto">
          
          {/* Avatar with Camera Overlay Icon */}
          <div className="relative shrink-0 group self-center sm:self-auto">
            <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full overflow-hidden border-2 border-white/40 shadow-lg object-cover bg-white/10 flex items-center justify-center ring-4 ring-white/10">
              {photoURL ? (
                <img
                  src={photoURL}
                  alt={displayName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full rounded-full object-cover transition-transform duration-200 group-hover:scale-105"
                />
              ) : (
                <User className="w-10 h-10 text-white/80" />
              )}
            </div>

            {/* Level Badge Overlay (Top Left) */}
            <span className="absolute -top-1 -left-1 px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 font-black text-[10px] shadow-sm uppercase tracking-wider">
              Lvl {userLevel}
            </span>

            {/* Camera / Edit Badge Overlay (Bottom Right) */}
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="absolute -bottom-1 -right-1 rounded-full p-2 bg-[#DC2626] border-2 border-white text-white shadow-md hover:bg-[#B91C1C] transition-transform hover:scale-110 active:scale-95 cursor-pointer"
              title="फोटो परिवर्तन गर्नुहोस्"
            >
              <Camera className="w-3.5 h-3.5" />
            </button>

            {/* Hidden Photo Upload Input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="hidden"
            />
          </div>

          {/* Student Profile Identity Details */}
          <div className="space-y-2 text-center sm:text-left w-full sm:w-auto">
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                {displayName ? `नमस्ते, ${displayName}! 👋` : 'नमस्ते, परीक्षार्थी! 👋'}
              </h1>
            </div>

            {/* Target Exam, Province & District Badges */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              {isPro ? (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-xs font-black shadow-md border border-amber-300/50">
                  <Crown className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
                  <span>PRO MEMBER</span>
                </span>
              ) : (
                <button
                  type="button"
                  onClick={() => setActiveTab('premium')}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-bold border border-amber-400/30 transition cursor-pointer"
                >
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>Unlock PRO</span>
                </button>
              )}

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/10 text-slate-200 text-xs font-bold border border-white/15">
                <Building2 className="w-3.5 h-3.5 text-red-400" />
                <span>{targetExam}</span>
              </span>

              {user.district && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-white/10 text-slate-300 text-xs font-bold border border-white/15">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  <span>{user.district}</span>
                </span>
              )}
            </div>

            {/* Contact Information or Guest Login prompt */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-xs text-slate-300 pt-0.5">
              {isGuest ? (
                <div className="flex items-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => openLoginModal()}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs shadow-md border border-blue-400/40 active:scale-95 transition cursor-pointer"
                  >
                    <User className="w-3.5 h-3.5" />
                    <span>लगइन गर्नुहोस्</span>
                  </button>
                  <span className="text-[11px] text-slate-300 hidden sm:inline">
                    (स्कोर र प्रगति सुरक्षित गर्न खाता खोल्नुहोस्)
                  </span>
                </div>
              ) : (
                <>
                  {userEmail && (
                    <p className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate max-w-[240px] sm:max-w-none">{userEmail}</span>
                    </p>
                  )}
                  {user.phone && (
                    <p className="flex items-center gap-1 font-mono">
                      <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{user.phone}</span>
                    </p>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        {/* Right: Clean XP Bar & Study Streak Card */}
        <div className="w-full lg:w-72 space-y-3 bg-black/30 border border-white/15 rounded-2xl p-4 sm:p-5">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-white flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>अध्ययन XP: {currentXp}</span>
            </span>
            <span className="text-slate-300 text-[11px]">
              Lvl {userLevel + 1} को लागि
            </span>
          </div>

          {/* XP Progress Bar */}
          <div className="w-full h-2.5 bg-white/15 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-amber-400 to-rose-500 rounded-full transition-all duration-500"
              style={{ width: `${xpProgressPercent}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-300">
            <span>प्रगति: {xpProgressPercent}%</span>
            <span>{nextLevelXp - (currentXp % 500)} XP बाँकी</span>
          </div>

          {/* Profile Action Button (Min 44px touch target) */}
          {isGuest ? (
            <button
              type="button"
              id="dashboard-guest-login-btn"
              onClick={() => openLoginModal()}
              className="w-full min-h-[44px] py-2.5 px-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 active:scale-[0.99] text-white font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer shadow-md"
              title="Google वा इमेलबाट लगइन गर्नुहोस्"
            >
              <User className="w-3.5 h-3.5" />
              <span>लगइन / खाता खोल्नुहोस्</span>
            </button>
          ) : (
            <button
              type="button"
              id="dashboard-edit-profile-btn"
              onClick={handleOpenEdit}
              className="w-full min-h-[44px] py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 active:scale-[0.99] text-white font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer border border-white/15"
              title="प्रोफाइल सम्पादन गर्नुहोस् (Edit Profile)"
            >
              <Edit3 className="w-3.5 h-3.5 text-amber-300" />
              <span>प्रोफाइल सम्पादन गर्नुहोस्</span>
            </button>
          )}
        </div>
      </div>

      {/* Quick Action Navigation Buttons (Mobile-First 48px+ touch targets) */}
      <div className="mt-6 pt-5 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap items-center gap-3 relative z-10">
        
        {/* Primary CTA button styled in Crimson Red */}
        <button
          type="button"
          onClick={() => {
            if (onStartChallenge) {
              onStartChallenge();
            } else {
              setActiveTab('quiz');
            }
          }}
          className="min-h-[48px] bg-[#DC2626] hover:bg-[#B91C1C] text-white font-black text-xs sm:text-sm px-5 py-3 rounded-2xl transition-all shadow-lg shadow-red-950/40 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01] active:scale-98"
        >
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>आजको १० प्रश्न Challenge</span>
        </button>

        <button
          type="button"
          onClick={() => {
            if (onOpenNotes) {
              onOpenNotes();
            } else {
              setActiveTab('free-notes');
            }
          }}
          className="min-h-[48px] bg-white/10 hover:bg-white/20 active:scale-98 text-white font-bold text-xs sm:text-sm px-4 py-3 rounded-2xl transition border border-white/20 flex items-center justify-center gap-2 cursor-pointer backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
          <span>AI परीक्षा नोट्स जेनेरेटर</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('leaderboard')}
          className="min-h-[48px] sm:col-span-2 lg:col-span-1 lg:ml-auto text-xs text-slate-300 hover:text-white font-bold transition flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl hover:bg-white/5"
        >
          <Trophy className="w-4 h-4 text-amber-400 shrink-0" />
          <span>सम्पूर्ण रिपोर्ट तथा श्रेणी हेर्नुहोस् &rarr;</span>
        </button>
      </div>

    </div>
  );
};
