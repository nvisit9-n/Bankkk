import React, { useState } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';
import { 
  TrendingUp, 
  Award, 
  BarChart3, 
  PieChart as PieIcon, 
  Target, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { UserProfile } from '../../types';

interface ProgressChartsProps {
  user: UserProfile;
}

// Category strength data (Lok Sewa / Banking curriculum)
const CATEGORY_STRENGTH_DATA = [
  { category: 'बैंकिङ (Banking)', fullMark: 100, strength: 88, solved: 45, correct: 40 },
  { category: 'व्यवस्थापन (Mgmt)', fullMark: 100, strength: 76, solved: 28, correct: 21 },
  { category: 'संविधान र ऐन (Law)', fullMark: 100, strength: 92, solved: 35, correct: 32 },
  { category: 'लेखा (Account)', fullMark: 100, strength: 72, solved: 22, correct: 16 },
  { category: 'गणित (Maths)', fullMark: 100, strength: 80, solved: 20, correct: 16 },
  { category: 'सामान्य ज्ञान (GK/IT)', fullMark: 100, strength: 85, solved: 30, correct: 25 },
];

// 7-day study trend data
const RECENT_STUDY_TREND = [
  { day: 'आइत', questions: 14, accuracy: 78, xp: 140 },
  { day: 'सोम', questions: 22, accuracy: 82, xp: 220 },
  { day: 'मंगल', questions: 18, accuracy: 85, xp: 190 },
  { day: 'बुध', questions: 26, accuracy: 88, xp: 270 },
  { day: 'बिही', questions: 20, accuracy: 80, xp: 210 },
  { day: 'शुक्र', questions: 30, accuracy: 90, xp: 320 },
  { day: 'शनि (आज)', questions: 18, accuracy: 89, xp: 190 },
];

export const ProgressCharts: React.FC<ProgressChartsProps> = ({ user }) => {
  const [activeView, setActiveView] = useState<'overview' | 'category' | 'trend'>('overview');

  const accuracyData = [
    { name: 'सही (Correct)', value: user.accuracy, color: '#10b981' },
    { name: 'गलत/बाँकी (Others)', value: 100 - user.accuracy, color: '#e2e8f0' }
  ];

  return (
    <section className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
              प्रगति तथा कार्यसम्पादन विश्लेषण (Progress Analytics)
            </h2>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            तपाईंको शुद्धता, विषयगत पकड र हल गरिएका प्रश्नहरूको अन्तरदृष्टि
          </p>
        </div>

        {/* View Switcher Pills */}
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl text-xs font-bold self-start sm:self-auto">
          <button
            onClick={() => setActiveView('overview')}
            className={`px-3 py-1.5 rounded-xl transition ${
              activeView === 'overview'
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            समग्र (Overview)
          </button>
          <button
            onClick={() => setActiveView('category')}
            className={`px-3 py-1.5 rounded-xl transition ${
              activeView === 'category'
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            विषयगत (Category)
          </button>
          <button
            onClick={() => setActiveView('trend')}
            className={`px-3 py-1.5 rounded-xl transition ${
              activeView === 'trend'
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            दैनिक ट्रेन्ड (Trends)
          </button>
        </div>
      </div>

      {/* Main Charts Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Accuracy Ring & Key Metrics */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                <Target className="w-4 h-4 text-emerald-500" />
                शुद्धता दर (Accuracy Rate)
              </h3>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                उच्च प्रदर्शन
              </span>
            </div>

            <div className="relative h-48 my-2 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={accuracyData}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={75}
                    paddingAngle={4}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                  >
                    <Cell fill="#10b981" />
                    <Cell fill="#cbd5e1" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-3xl font-black text-slate-900 dark:text-white">
                  {user.accuracy}%
                </span>
                <span className="text-[11px] font-medium text-slate-400">औसत शुद्धता</span>
              </div>
            </div>
          </div>

          <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs">
            <div className="flex justify-between items-center text-slate-600 dark:text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> सही उत्तर दर
              </span>
              <span className="font-bold text-slate-900 dark:text-white">{user.accuracy}%</span>
            </div>
            <div className="flex justify-between items-center text-slate-600 dark:text-slate-300">
              <span className="flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-amber-500" /> लोकसेवा सिफारिस लक्ष्य
              </span>
              <span className="font-bold text-slate-900 dark:text-white">८०%+</span>
            </div>
            <div className="flex justify-between items-center text-slate-600 dark:text-slate-300">
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-blue-500" /> कुल हल प्रश्न
              </span>
              <span className="font-bold text-slate-900 dark:text-white">
                {user.totalQuestionsAnswered ?? user.questionsSolved} प्रश्न
              </span>
            </div>
          </div>
        </div>

        {/* Center & Right Column: Interactive Charts */}
        <div className="lg:col-span-2 p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          {activeView === 'overview' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100">
                    विषयगत प्रश्न वितरण र शुद्धता (Questions & Mastery)
                  </h3>
                  <p className="text-xs text-slate-400">हल गरिएका कुल प्रश्नहरू र सही उत्तरहरूको अनुपात</p>
                </div>
              </div>

              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={CATEGORY_STRENGTH_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis 
                      dataKey="category" 
                      tick={{ fontSize: 10, fill: '#64748b' }} 
                      interval={0}
                      angle={-15}
                      textAnchor="end"
                    />
                    <YAxis tick={{ fontSize: 11, fill: '#64748b' }} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#0f172a', 
                        borderColor: '#334155', 
                        borderRadius: '12px',
                        color: '#f8fafc',
                        fontSize: '12px'
                      }} 
                    />
                    <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                    <Bar dataKey="solved" name="कुल हल (Solved)" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="correct" name="सही उत्तर (Correct)" fill="#10b981" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {activeView === 'category' && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100">
                    विषयगत क्षमता राडार (Subject Strength Radar)
                  </h3>
                  <p className="text-xs text-slate-400">पाठ्यक्रमका प्रमुख क्षेत्रहरूमा तपाईंको प्रतिशत पकड</p>
                </div>
              </div>

              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="75%" data={CATEGORY_STRENGTH_DATA}>
                    <PolarGrid stroke="#e2e8f0" />
                    <PolarAngleAxis dataKey="category" tick={{ fontSize: 10, fill: '#64748b' }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 10 }} />
                    <Radar 
                      name="क्षमता % (Strength)" 
                      dataKey="strength" 
                      stroke="#2563eb" 
                      fill="#3b82f6" 
                      fillOpacity={0.5} 
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#0f172a', 
                        borderRadius: '12px',
                        color: '#f8fafc',
                        fontSize: '12px' 
                      }} 
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {activeView === 'trend' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100">
                    साप्ताहिक अध्ययन ट्रेन्ड (7-Day Activity & Accuracy Trend)
                  </h3>
                  <p className="text-xs text-slate-400">विगत सात दिनको दैनिक प्रश्न समाधान र शुद्धता दर</p>
                </div>
              </div>

              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={RECENT_STUDY_TREND} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorAccuracy" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0.05}/>
                      </linearGradient>
                      <linearGradient id="colorQuestions" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.05}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="day" tick={{ fontSize: 11, fill: '#64748b' }} />
                    <YAxis tick={{ fontSize: 11, fill: '#64748b' }} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#0f172a', 
                        borderRadius: '12px',
                        color: '#f8fafc',
                        fontSize: '12px' 
                      }} 
                    />
                    <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }} />
                    <Area 
                      type="monotone" 
                      dataKey="accuracy" 
                      name="शुद्धता % (Accuracy)" 
                      stroke="#10b981" 
                      fillOpacity={1} 
                      fill="url(#colorAccuracy)" 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="questions" 
                      name="हल गरिएका प्रश्न (Questions)" 
                      stroke="#3b82f6" 
                      fillOpacity={1} 
                      fill="url(#colorQuestions)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
