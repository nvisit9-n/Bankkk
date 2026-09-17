import React, { useState, useEffect, useMemo } from 'react';
import { 
  Trophy, 
  Medal, 
  Crown, 
  MapPin, 
  Filter, 
  Search, 
  Zap, 
  Target, 
  Award, 
  ChevronDown, 
  Users, 
  CheckCircle2,
  Sparkles,
  RefreshCw
} from 'lucide-react';
import { LeaderboardEntry, UserProfile } from '../../types';
import { DbService } from '../../services/dbService';
import { NEPAL_PROVINCES, TARGET_EXAM_OPTIONS, getDistrictsByProvince } from '../../data/nepalDistricts';

interface LeaderboardSectionProps {
  currentUser: UserProfile;
  onRefreshUser?: () => void;
}

export const LeaderboardSection: React.FC<LeaderboardSectionProps> = ({
  currentUser,
  onRefreshUser
}) => {
  const [selectedProvince, setSelectedProvince] = useState<string>('All');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('All');
  const [selectedExam, setSelectedExam] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [currentUserRank, setCurrentUserRank] = useState<LeaderboardEntry | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Available districts for the selected province
  const availableDistricts = useMemo(() => {
    if (selectedProvince === 'All') return [];
    return getDistrictsByProvince(selectedProvince);
  }, [selectedProvince]);

  const loadLeaderboardData = async () => {
    setIsLoading(true);
    try {
      const data = await DbService.fetchLeaderboard({
        province: selectedProvince,
        district: selectedDistrict,
        exam: selectedExam,
        currentUid: currentUser.authUid || currentUser.id
      });
      setLeaderboard(data.leaderboard || []);
      setCurrentUserRank(data.currentUserRank);
    } catch (e) {
      console.error('Error loading leaderboard:', e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadLeaderboardData();
  }, [selectedProvince, selectedDistrict, selectedExam, currentUser.authUid, currentUser.xp]);

  // Handle Quick Scope Filter
  const handleQuickScope = (scope: 'all' | 'my-province' | 'my-district') => {
    if (scope === 'all') {
      setSelectedProvince('All');
      setSelectedDistrict('All');
    } else if (scope === 'my-province') {
      if (currentUser.province) {
        setSelectedProvince(currentUser.province);
        setSelectedDistrict('All');
      } else {
        setSelectedProvince('बागमती प्रदेश');
      }
    } else if (scope === 'my-district') {
      if (currentUser.province && currentUser.district) {
        setSelectedProvince(currentUser.province);
        setSelectedDistrict(currentUser.district);
      } else if (currentUser.district) {
        setSelectedDistrict(currentUser.district);
      } else {
        setSelectedDistrict('काठमाडौँ');
      }
    }
  };

  // Filter by local search query
  const filteredList = useMemo(() => {
    if (!searchQuery.trim()) return leaderboard;
    const q = searchQuery.toLowerCase().trim();
    return leaderboard.filter(item => 
      item.name.toLowerCase().includes(q) ||
      item.district.toLowerCase().includes(q) ||
      item.province.toLowerCase().includes(q) ||
      item.targetExam.toLowerCase().includes(q)
    );
  }, [leaderboard, searchQuery]);

  return (
    <div className="space-y-6">
      
      {/* Header with Hero Banner */}
      <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-bold mb-2">
              <Trophy className="w-3.5 h-3.5 text-amber-200" />
              <span>राष्ट्रिय परीक्षार्थी वरियता (National Aspirant Leaderboard)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              शीर्ष बैंकिङ परीक्षार्थी ऱ्याङ्किङ
            </h2>
            <p className="text-xs sm:text-sm text-amber-100 mt-1 max-w-xl">
              नेपालभरिका ७ वटै प्रदेश तथा ७७ जिल्लाका परीक्षार्थीहरूको अभ्यास र अङ्क वरियता।
            </p>
          </div>

          {/* Current User Standing Card */}
          {currentUserRank && (
            <div className="w-full md:w-auto bg-black/25 backdrop-blur-md p-4 rounded-2xl border border-white/20 flex items-center gap-4 shrink-0">
              <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 font-black text-xl flex items-center justify-center shadow-lg">
                #{currentUserRank.rank}
              </div>
              <div className="text-left">
                <p className="text-[11px] text-amber-200 font-bold uppercase tracking-wider">
                  तपाईंको वर्तमान ऱ्याङ्किङ
                </p>
                <p className="text-sm font-black text-white flex items-center gap-1.5">
                  <span>{currentUserRank.name}</span>
                  <span className="text-xs text-amber-300 font-bold">({currentUserRank.xp} XP)</span>
                </p>
                <p className="text-[11px] text-amber-100/90 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-white" />
                  <span>{currentUserRank.province} • {currentUserRank.district}</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="p-4 sm:p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        
        {/* Quick Scope Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1 mr-1">
            <Filter className="w-3.5 h-3.5" />
            <span>क्षेत्र छान्नुहोस्:</span>
          </span>

          <button
            type="button"
            onClick={() => handleQuickScope('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
              selectedProvince === 'All' && selectedDistrict === 'All'
                ? 'bg-[#2563EB] text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            🇳🇵 समग्र नेपाल (All Nepal)
          </button>

          <button
            type="button"
            onClick={() => handleQuickScope('my-province')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
              selectedProvince !== 'All' && selectedDistrict === 'All'
                ? 'bg-[#2563EB] text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            📍 मेरो प्रदेश ({currentUser.province || 'छान्नुहोस्'})
          </button>

          <button
            type="button"
            onClick={() => handleQuickScope('my-district')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
              selectedDistrict !== 'All'
                ? 'bg-[#2563EB] text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            🏛️ मेरो जिल्ला ({currentUser.district || 'छान्नुहोस्'})
          </button>

          <div className="ml-auto">
            <button
              type="button"
              onClick={loadLeaderboardData}
              className="p-1.5 rounded-xl text-slate-500 hover:text-slate-800 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 transition"
              title="रिफ्रेस गर्नुहोस्"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>

        {/* Dropdowns & Search */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
          
          {/* Province Dropdown */}
          <div>
            <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1">
              प्रदेश (Province)
            </label>
            <div className="relative">
              <select
                value={selectedProvince}
                onChange={(e) => {
                  setSelectedProvince(e.target.value);
                  setSelectedDistrict('All');
                }}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium focus:ring-2 focus:ring-blue-500 cursor-pointer"
              >
                <option value="All">सबै प्रदेशहरू (All 7 Provinces)</option>
                {NEPAL_PROVINCES.map(p => (
                  <option key={p.id} value={p.nameNepali}>{p.nameNepali} ({p.nameEnglish})</option>
                ))}
              </select>
            </div>
          </div>

          {/* District Dropdown */}
          <div>
            <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1">
              जिल्ला (District)
            </label>
            <div className="relative">
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                disabled={selectedProvince === 'All' && availableDistricts.length === 0}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium focus:ring-2 focus:ring-blue-500 disabled:opacity-50 cursor-pointer"
              >
                <option value="All">
                  {selectedProvince === 'All' ? 'सबै जिल्लाहरू (पहिले प्रदेश छान्नुहोस्)' : 'सबै जिल्लाहरू (All Districts)'}
                </option>
                {availableDistricts.map(d => (
                  <option key={d.id} value={d.nameNepali}>{d.nameNepali} ({d.nameEnglish})</option>
                ))}
              </select>
            </div>
          </div>

          {/* Target Exam Filter */}
          <div>
            <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1">
              लक्ष्यित परीक्षा (Exam Target)
            </label>
            <div className="relative">
              <select
                value={selectedExam}
                onChange={(e) => setSelectedExam(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium focus:ring-2 focus:ring-blue-500 cursor-pointer"
              >
                <option value="All">सबै परीक्षाहरू (All Exams)</option>
                {TARGET_EXAM_OPTIONS.map(opt => (
                  <option key={opt.id} value={opt.nameNepali}>{opt.nameNepali}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Aspirant Name Search */}
          <div>
            <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1">
              परीक्षार्थी खोजी
            </label>
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="नाम वा जिल्लाबाट खोज्नुहोस्..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Leaderboard Table / Cards */}
      <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        
        {/* Top 3 Podium Cards (if on top view) */}
        {filteredList.length >= 3 && !searchQuery && (
          <div className="p-6 bg-gradient-to-b from-amber-50/50 dark:from-amber-950/20 to-transparent border-b border-slate-200 dark:border-slate-800">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-4 text-center">
              👑 शीर्ष ३ राष्ट्रिय स्थानधारक (Top 3 Champions)
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
              
              {/* Rank 2 - Silver */}
              <div className="order-2 md:order-1 p-4 rounded-2xl bg-white dark:bg-slate-800/90 border-2 border-slate-300 dark:border-slate-700 text-center relative shadow-sm">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-[11px] font-black shadow flex items-center gap-1">
                  <Medal className="w-3.5 h-3.5 text-slate-400" />
                  <span>ऱ्याङ्क #२</span>
                </div>
                <div className="w-16 h-16 rounded-full mx-auto mt-2 overflow-hidden border-2 border-slate-300">
                  <img src={filteredList[1].avatarUrl} alt={filteredList[1].name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-black text-sm text-slate-900 dark:text-white mt-2 truncate">
                  {filteredList[1].name}
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                  {filteredList[1].province} • {filteredList[1].district}
                </p>
                <div className="mt-2 inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 font-black text-xs">
                  <Zap className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{filteredList[1].xp} XP</span>
                </div>
              </div>

              {/* Rank 1 - Gold (Elevated) */}
              <div className="order-1 md:order-2 p-5 rounded-2xl bg-gradient-to-b from-amber-100/80 to-amber-50 dark:from-amber-950/60 dark:to-slate-800 border-2 border-amber-400 dark:border-amber-500 text-center relative shadow-md scale-105 md:-translate-y-2">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[11px] font-black shadow flex items-center gap-1">
                  <Crown className="w-3.5 h-3.5 fill-slate-950" />
                  <span>प्रथम स्थान #१</span>
                </div>
                <div className="w-20 h-20 rounded-full mx-auto mt-2 overflow-hidden border-4 border-amber-400 shadow-md">
                  <img src={filteredList[0].avatarUrl} alt={filteredList[0].name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-black text-base text-slate-900 dark:text-white mt-2 truncate">
                  {filteredList[0].name}
                </h4>
                <p className="text-xs text-amber-800 dark:text-amber-300 font-semibold truncate">
                  {filteredList[0].province} • {filteredList[0].district}
                </p>
                <div className="mt-2 inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-amber-400 text-slate-950 font-black text-sm shadow">
                  <Zap className="w-4 h-4 fill-slate-950" />
                  <span>{filteredList[0].xp} XP</span>
                </div>
              </div>

              {/* Rank 3 - Bronze */}
              <div className="order-3 p-4 rounded-2xl bg-white dark:bg-slate-800/90 border-2 border-amber-600/30 dark:border-amber-700/50 text-center relative shadow-sm">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-900 dark:text-amber-200 text-[11px] font-black shadow flex items-center gap-1">
                  <Medal className="w-3.5 h-3.5 text-amber-700" />
                  <span>ऱ्याङ्क #३</span>
                </div>
                <div className="w-16 h-16 rounded-full mx-auto mt-2 overflow-hidden border-2 border-amber-600/40">
                  <img src={filteredList[2].avatarUrl} alt={filteredList[2].name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-black text-sm text-slate-900 dark:text-white mt-2 truncate">
                  {filteredList[2].name}
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                  {filteredList[2].province} • {filteredList[2].district}
                </p>
                <div className="mt-2 inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 font-black text-xs">
                  <Zap className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{filteredList[2].xp} XP</span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Full List */}
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {isLoading ? (
            <div className="py-12 text-center text-slate-400 text-sm">
              <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-blue-500" />
              <span>ऱ्याङ्किङ विवरण लोड हुँदैछ...</span>
            </div>
          ) : filteredList.length === 0 ? (
            <div className="py-12 text-center text-slate-400 text-sm">
              <Users className="w-8 h-8 mx-auto mb-2 text-slate-300" />
              <span>छानिएको क्षेत्र वा मापदण्डमा कुनै परीक्षार्थी भेटिएन।</span>
            </div>
          ) : (
            filteredList.map((entry) => {
              const isCurrentUser = Boolean(entry.isCurrentUser || entry.authUid === currentUser.authUid || entry.authUid === currentUser.id);

              return (
                <div
                  key={`${entry.rank}-${entry.authUid}`}
                  className={`p-4 sm:px-6 flex items-center justify-between gap-4 transition-colors ${
                    isCurrentUser 
                      ? 'bg-blue-50/90 dark:bg-blue-950/40 border-l-4 border-[#2563EB]' 
                      : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {/* Left: Rank & User Details */}
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center font-black text-xs sm:text-sm shrink-0 ${
                      entry.rank === 1 ? 'bg-amber-400 text-slate-950 shadow-sm' :
                      entry.rank === 2 ? 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200' :
                      entry.rank === 3 ? 'bg-amber-100 dark:bg-amber-900/60 text-amber-900 dark:text-amber-200' :
                      'text-slate-500 dark:text-slate-400 font-mono'
                    }`}>
                      #{entry.rank}
                    </span>

                    <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-slate-200 dark:border-slate-700">
                      <img src={entry.avatarUrl} alt={entry.name} className="w-full h-full object-cover" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white truncate">
                          {entry.name}
                        </p>
                        {isCurrentUser && (
                          <span className="px-2 py-0.5 rounded-full bg-[#2563EB] text-white text-[10px] font-extrabold uppercase shrink-0">
                            तपाईं (You)
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1 truncate">
                        <MapPin className="w-3 h-3 shrink-0 text-[#DC2626]" />
                        <span>{entry.province} • {entry.district}</span>
                        <span className="hidden sm:inline text-slate-300 dark:text-slate-600">|</span>
                        <span className="hidden sm:inline text-slate-600 dark:text-slate-300 font-medium truncate">{entry.targetExam}</span>
                      </p>
                    </div>
                  </div>

                  {/* Right: XP & Accuracy */}
                  <div className="flex items-center gap-3 sm:gap-6 shrink-0 text-right">
                    <div className="hidden sm:block">
                      <p className="text-[11px] text-slate-400">शुद्धता (Accuracy)</p>
                      <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                        {entry.accuracy}%
                      </p>
                    </div>

                    <div className="px-3 py-1.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 flex items-center gap-1.5 text-amber-700 dark:text-amber-400 font-black text-xs sm:text-sm">
                      <Zap className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{entry.xp} XP</span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

      </div>

    </div>
  );
};
