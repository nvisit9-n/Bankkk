import React, { useState } from 'react';
import { 
  User, 
  Flame, 
  Zap, 
  Trophy, 
  CheckCircle2, 
  Award, 
  BookOpen, 
  Moon, 
  Sun, 
  RotateCcw, 
  ShieldCheck, 
  Sparkles, 
  FileText,
  Mail,
  ChevronRight,
  Globe,
  Share2,
  MapPin,
  Phone,
  Edit3,
  Camera,
  LogOut
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { StorageService } from '../../services/storageService';
import { DbService } from '../../services/dbService';
import { isUserAdmin } from '../../utils/sanitizer';
import { MOCK_ACHIEVEMENTS } from '../../data/mockData';
import { SocialCommunityCards } from '../common/SocialIcons';
import { StudentRegistrationForm } from './StudentRegistrationForm';

export const ProfileScreen: React.FC = () => {
  const { user, refreshUser, theme, toggleTheme, setActiveTab, addToast, setIsProfileModalOpen, logout, openAdminWithSecurityCheck } = useApp();
  const [isResetConfirming, setIsResetConfirming] = useState<boolean>(false);
  const [isEditingProfile, setIsEditingProfile] = useState<boolean>(false);

  const handleConfirmReset = () => {
    StorageService.resetAllProgress();
    addToast('सम्पूर्ण प्रगति सफलतापुर्वक रिसेट भयो। खाता लगआउट हुँदैछ...', 'info');
    setIsResetConfirming(false);
    setTimeout(() => {
      logout();
    }, 400);
  };

  const userLevel = user.level ?? (Math.floor(user.xp / 500) + 1);
  const targetExam = user.targetExam ?? 'NRB / RBB Level 4';
  const totalQuestions = user.totalQuestionsAnswered ?? user.questionsSolved ?? 0;
  const totalNotesRead = user.notesRead ?? 26;
  const nextLevelXp = userLevel * 500;
  const currentLevelProgress = Math.min(100, Math.round(((user.xp % 500) / 500) * 100));

  // Dynamic Profile Completion calculation
  const profileStats = DbService.calculateProfileCompletion(user);

  const emailPrefix = user?.email ? user.email.split('@')[0] : '';
  const displayName = user?.displayName || (user?.name && user.name !== 'विद्यार्थी' ? user.name : (emailPrefix || 'परीक्षार्थी'));
  const userEmail = user?.email || '';
  const photoURL = user?.photoURL || user?.avatarUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=0D8ABC&color=fff&size=256`;

  return (
    <div className="space-y-8 pb-16">
      
      {/* Profile Header Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-900 text-white shadow-xl relative overflow-hidden border border-blue-900/40">
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="relative group shrink-0">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-blue-600/30 overflow-hidden shadow-xl flex items-center justify-center bg-blue-950 shrink-0 mx-auto">
                <img
                  src={photoURL}
                  alt={displayName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <span className="absolute -bottom-1 -left-1 px-2.5 py-0.5 rounded-full bg-amber-500 text-slate-950 font-black text-[11px] shadow">
                Lvl {userLevel}
              </span>
              <button
                type="button"
                onClick={() => setIsProfileModalOpen(true)}
                className="absolute -bottom-1 -right-1 p-2 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold shadow-lg transition-transform hover:scale-110 cursor-pointer border-2 border-white"
                title="फोटो परिवर्तन गर्नुहोस् (Change Photo)"
              >
                <Camera className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-1 text-center sm:text-left">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                  {displayName}
                </h1>
                <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-[11px] font-bold">
                  {targetExam}
                </span>
                {user.district && (
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-600/30 text-blue-200 text-[11px] font-bold flex items-center gap-1 border border-blue-500/30">
                    <MapPin className="w-3 h-3 text-[#DC2626]" />
                    <span>{user.district}</span>
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 text-xs text-blue-200">
                {userEmail && (
                  <p className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-blue-300" />
                    <span>{userEmail}</span>
                  </p>
                )}
                {user.phone && (
                  <p className="flex items-center gap-1.5 font-mono">
                    <Phone className="w-3.5 h-3.5 text-blue-300" />
                    <span>{user.phone}</span>
                  </p>
                )}
              </div>

              <div className="pt-1.5 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-blue-600/20 text-blue-200 text-xs font-bold border border-blue-500/30">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>{user.rank}</span>
                </div>
                
                <button
                  onClick={() => setIsProfileModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition cursor-pointer"
                >
                  <Edit3 className="w-3.5 h-3.5 text-[#DC2626]" />
                  <span>प्रोफाइल / दर्ता सम्पादन</span>
                </button>
              </div>
            </div>
          </div>

          {/* Streak & XP Badges */}
          <div className="flex sm:flex-col items-center sm:items-end gap-3 w-full sm:w-auto justify-between border-t sm:border-t-0 border-white/10 pt-4 sm:pt-0">
            <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-2xl text-xs font-bold">
              <Flame className="w-4 h-4 fill-orange-400 text-orange-400" />
              <span>{user.streak} दिन निरन्तर अध्ययन</span>
            </div>

            <div className="flex items-center gap-1.5 bg-amber-500/20 text-amber-300 px-3 py-1.5 rounded-2xl text-xs font-bold border border-amber-400/30">
              <Zap className="w-4 h-4 fill-amber-400" />
              <span>{user.xp} Total XP</span>
            </div>
          </div>

        </div>

        {/* Level Progress Bar */}
        <div className="mt-6 pt-5 border-t border-white/10 space-y-1.5">
          <div className="flex justify-between text-xs font-semibold text-blue-200">
            <span>Level {userLevel} प्रगति</span>
            <span>{currentLevelProgress}% (अर्को स्तरका लागि {500 - (user.xp % 500)} XP बाँकी)</span>
          </div>
          <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden">
            <div 
              className="bg-gradient-to-r from-amber-400 via-blue-500 to-[#2563EB] h-full rounded-full transition-all"
              style={{ width: `${currentLevelProgress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Gamified Profile Completion Percentage Bar & Bonus Reward */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base font-black text-slate-900 dark:text-white">
                प्रोफाइल पूर्णता स्थिति (Profile Completion)
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-extrabold text-xs border border-blue-200 dark:border-blue-800">
                {profileStats.percentage}% पूर्ण
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {profileStats.isComplete
                ? '🎉 बधाई छ! तपाईंको प्रोफाइल १००% पूर्ण भएको छ र +५० बोनस XP प्राप्त भइसकेको छ।'
                : 'सबै ऐच्छिक विवरण (फोन, जिल्ला, लक्ष्यित परीक्षा) पूरा गर्नुहोस् र थप +५० बोनस XP प्राप्त गर्नुहोस्!'}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <div className={`px-3 py-1.5 rounded-2xl flex items-center gap-1.5 text-xs font-black ${
              profileStats.isComplete
                ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                : 'bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800'
            }`}>
              <Zap className="w-4 h-4 fill-current" />
              <span>{profileStats.isComplete ? '✓ +५० XP प्राप्त भयो' : '+५० XP बोनस बाँकी'}</span>
            </div>

            {!profileStats.isComplete && (
              <button
                type="button"
                onClick={() => setIsProfileModalOpen(true)}
                className="px-4 py-1.5 rounded-2xl bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-xs shadow transition cursor-pointer"
              >
                विवरण भर्नुहोस्
              </button>
            )}
          </div>
        </div>

        {/* Progress Track */}
        <div className="w-full bg-slate-100 dark:bg-slate-800 h-3 rounded-full overflow-hidden p-0.5">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-500 transition-all duration-500"
            style={{ width: `${profileStats.percentage}%` }}
          />
        </div>

        {/* Breakdown Items */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 pt-1">
          {Object.entries(profileStats.breakdown).map(([k, item]) => (
            <div
              key={k}
              className={`p-2.5 rounded-2xl border text-center transition-all ${
                item.completed
                  ? 'bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800/50 text-emerald-800 dark:text-emerald-300'
                  : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400'
              }`}
            >
              <div className="flex items-center justify-center gap-1 mb-1">
                {item.completed ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <div className="w-3 h-3 rounded-full border-2 border-slate-300 dark:border-slate-600" />
                )}
                <span className="text-[11px] font-bold">+{item.weight}%</span>
              </div>
              <p className="text-[11px] font-semibold truncate">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Analytics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        
        <div className="p-4 sm:p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">क्विज सम्पन्न (Quizzes)</p>
          <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">
            {user.quizzesCompleted}
          </p>
          <span className="text-[10px] text-[#2563EB] dark:text-blue-400 font-semibold mt-1 block">
            ✓ नियमित अभ्यास
          </span>
        </div>

        <div className="p-4 sm:p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">औसत शुद्धता (Accuracy)</p>
          <p className="text-2xl font-black text-[#2563EB] dark:text-blue-400 mt-1">
            {user.accuracy}%
          </p>
          <span className="text-[10px] text-slate-400 font-medium mt-1 block">
            लक्ष्य: ८५%+
          </span>
        </div>

        <div className="p-4 sm:p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">कुल प्रश्न हल (Questions)</p>
          <p className="text-2xl font-black text-[#DC2626] dark:text-red-400 mt-1">
            {totalQuestions}
          </p>
          <span className="text-[10px] text-red-500 font-semibold mt-1 block">
            वस्तुगत MCQ प्रश्न
          </span>
        </div>

        <div className="p-4 sm:p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">नोट्स अध्ययन (Notes Read)</p>
          <p className="text-2xl font-black text-amber-500 mt-1">
            {totalNotesRead}
          </p>
          <span className="text-[10px] text-amber-600 dark:text-amber-400 font-semibold mt-1 block">
            विषयगत सामाग्री
          </span>
        </div>

      </div>

      {/* Badges & Achievements Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
              उपलब्धि तथा पदकहरू (Achievements & Badges)
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              तपाईंको अध्ययन समर्पण र लगातार मेहनतका प्रतीकहरू
            </p>
          </div>
          <span className="text-xs font-bold text-[#2563EB] dark:text-blue-400">
            {MOCK_ACHIEVEMENTS.filter(a => a.unlocked).length} / {MOCK_ACHIEVEMENTS.length} अनलक
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {MOCK_ACHIEVEMENTS.map(ach => (
            <div
              key={ach.id}
              className={`p-5 rounded-3xl border transition-all flex flex-col justify-between ${
                ach.unlocked
                  ? 'bg-white dark:bg-slate-900 border-blue-400/50 dark:border-blue-700/60 shadow-md shadow-blue-500/5'
                  : 'bg-slate-50/70 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 opacity-60'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{ach.icon}</span>
                  {ach.unlocked ? (
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-[#2563EB] dark:text-blue-300 text-[10px] font-black border border-blue-200 dark:border-blue-800">
                      ✓ Unlocked
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-500 text-[10px] font-bold">
                      Locked
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                    {ach.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-amber-600 dark:text-amber-400 font-bold flex items-center justify-between">
                <span>Reward</span>
                <span>+{ach.xpReward || 50} XP</span>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Social Media & Contact Links (Community Hub) */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-600" />
              <span>हाम्रा सामाजिक सञ्जाल तथा समूहहरू (Join Our Community)</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              दैनिक भिडियो, निःशुल्क PDF नोट्स, समसामयिक अपडेट र परीक्षा तयारी छलफलका लागि सिधै जोडिनुहोस्:
            </p>
          </div>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/60 text-[#C8102E] dark:text-red-300 border border-red-200 dark:border-red-900 self-start sm:self-auto flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
            ५ आधिकारिक च्यानलहरू
          </span>
        </div>

        <SocialCommunityCards />
      </section>

      {/* Account Settings & Preferences */}
      <section className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
        <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">
          एप सेटिङ तथा प्राथमिकता (Preferences)
        </h2>

        <div className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
          
          {/* Theme Toggle Row */}
          <div className="py-3 flex items-center justify-between">
            <div>
              <p className="font-bold text-slate-800 dark:text-slate-200">डार्क मोड (Dark Theme)</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">आँखालाई सहज हुने रात्रिकालीन अध्ययन मोड</p>
            </div>
            <button
              onClick={toggleTheme}
              className="px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold flex items-center gap-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span>Light Mode मा जानुहोस्</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-slate-700" />
                  <span>Dark Mode मा जानुहोस्</span>
                </>
              )}
            </button>
          </div>

          {/* Reset Progress Row */}
          <div className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <p className="font-bold text-slate-800 dark:text-slate-200">अध्ययन डाटा रिसेट (Reset Progress)</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">पुनः शून्यबाट सुरु गर्न स्थानीय प्रगति मेट्नुहोस्</p>
            </div>
            {isResetConfirming ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={handleConfirmReset}
                  className="px-3 py-1.5 rounded-xl bg-rose-600 text-white text-xs font-bold hover:bg-rose-700 transition"
                >
                  पक्का रिसेट गर्नुहोस्
                </button>
                <button
                  onClick={() => setIsResetConfirming(false)}
                  className="px-3 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold hover:bg-slate-300 dark:hover:bg-slate-600 transition"
                >
                  रद्द गर्नुहोस्
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsResetConfirming(true)}
                className="px-3.5 py-1.5 rounded-xl border border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400 text-xs font-bold hover:bg-rose-50 dark:hover:bg-rose-950/50 transition flex items-center gap-1 self-start sm:self-auto"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Data</span>
              </button>
            )}
          </div>

          {/* Logout / Switch Account Row */}
          <div className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <p className="font-bold text-slate-800 dark:text-slate-200">खाता लगआउट तथा प्रोफाइल परिवर्तन (Logout / Switch Profile)</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">यस डिभाइसबाट लगआउट गरी नयाँ वा अन्य परीक्षार्थीको खाता खोल्नुहोस्</p>
            </div>
            <button
              onClick={() => {
                if (window.confirm('के तपाईं लगआउट गर्न चाहनुहुन्छ? तपाईंको खाता विवरण हट्नेछ र लगइन/दर्ता स्क्रिन खुल्नेछ।')) {
                  logout();
                }
              }}
              id="profile-logout-action-btn"
              className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition flex items-center gap-2 self-start sm:self-auto cursor-pointer shadow-md shadow-rose-900/20"
            >
              <LogOut className="w-4 h-4" />
              <span>खाता लगआउट गर्नुहोस्</span>
            </button>
          </div>

          {/* Dedicated Hidden Admin Portal Link for Authorized Admin (rishiramthapa3@gmail.com) */}
          {isUserAdmin(user?.email) && (
            <div className="pt-3 mt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-red-600 dark:text-red-400" />
                  <p className="font-bold text-red-600 dark:text-red-400 text-sm">अधिकृत प्रशासक प्यानल (Admin Portal)</p>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">प्रशासक कन्सोल तथा खरिद प्रमाणीकरण व्यवस्थापन</p>
              </div>
              <button
                onClick={openAdminWithSecurityCheck}
                id="profile-admin-console-btn"
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 text-xs font-bold transition flex items-center gap-2 self-start sm:self-auto cursor-pointer shadow-sm"
              >
                <ShieldCheck className="w-4 h-4 text-red-500" />
                <span>प्रशासक पोर्टल खोल्नुहोस्</span>
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Student Registration & Profile Edit Modal */}
      {isEditingProfile && (
        <StudentRegistrationForm
          isModal={true}
          onSuccess={() => setIsEditingProfile(false)}
          onCancel={() => setIsEditingProfile(false)}
        />
      )}

    </div>
  );
};
