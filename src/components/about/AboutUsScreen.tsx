import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Check, 
  X, 
  Brain, 
  Flame, 
  BookOpen, 
  ShieldCheck, 
  Landmark, 
  Building2, 
  Scale, 
  ExternalLink 
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AboutUsScreen: React.FC = () => {
  const { setActiveTab } = useApp();

  return (
    <div className="bg-slate-950 text-slate-100 font-sans antialiased selection:bg-sky-500 selection:text-white rounded-3xl overflow-hidden border border-slate-800 shadow-2xl -mx-2 sm:mx-0">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-16 pb-16 lg:pt-24 lg:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.25),rgba(255,255,255,0))] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
              Next-Gen AI EdTech for Public Service &amp; Banking
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Empowering the Next Generation of Banking &amp; Public Service Leaders in Nepal
            </h1>
            <p className="text-base sm:text-xl text-slate-400 mb-8 leading-relaxed max-w-3xl mx-auto">
              Bridging the digital divide in competitive exam preparation. We combine adaptive AI technology with Lok Sewa &amp; Banking syllabus accuracy to bring world-class learning tools to every aspirant across Nepal.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                id="about-hero-cta-practice"
                onClick={() => setActiveTab('quiz')} 
                className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-xl font-bold bg-sky-500 hover:bg-sky-400 text-slate-950 transition-all shadow-[0_0_25px_-5px_rgba(2,132,199,0.35)] cursor-pointer active:scale-95"
              >
                <span>Start Free Practice Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                id="about-hero-cta-courses"
                onClick={() => setActiveTab('courses')} 
                className="inline-flex justify-center items-center gap-2 px-6 py-4 rounded-xl font-semibold bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 transition-all cursor-pointer"
              >
                <span>View Bank Courses</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS COUNTER */}
      <section className="border-y border-slate-800/80 bg-slate-900/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">77</div>
              <div className="text-sm text-slate-400 font-medium">Districts Covered</div>
            </div>
            <div className="p-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-sky-400 mb-1">50,000+</div>
              <div className="text-sm text-slate-400 font-medium">Practice Questions</div>
            </div>
            <div className="p-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">24/7</div>
              <div className="text-sm text-slate-400 font-medium">AI Tutor Access</div>
            </div>
            <div className="p-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 mb-1">99.9%</div>
              <div className="text-sm text-slate-400 font-medium">Syllabus Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM VS AI SOLUTION */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Reimagining Competitive Exam Preparation</h2>
            <p className="text-slate-400">Traditional physical institutes are expensive, rigid, and geographically limited. Here is how our platform fixes it.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Problem Card */}
            <div className="bg-slate-900/60 border border-red-500/20 rounded-2xl p-8">
              <div className="inline-block p-3 bg-red-500/10 text-red-400 rounded-lg mb-6 font-semibold">⚠️ Traditional Institutes</div>
              <ul className="space-y-4 text-slate-300 text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold shrink-0 mt-0.5">✕</span> 
                  <span>High tuition fees &amp; costly commuting/rent in urban hubs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold shrink-0 mt-0.5">✕</span> 
                  <span>One-size-fits-all lectures with zero personal feedback.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold shrink-0 mt-0.5">✕</span> 
                  <span>Outdated static PDFs and unverified answer keys.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold shrink-0 mt-0.5">✕</span> 
                  <span>No real-time timer or exam pressure simulations.</span>
                </li>
              </ul>
            </div>

            {/* AI Solution Card */}
            <div className="bg-slate-900/60 border border-sky-500/30 rounded-2xl p-8 shadow-[0_0_25px_-5px_rgba(2,132,199,0.3)]">
              <div className="inline-block p-3 bg-sky-500/10 text-sky-400 rounded-lg mb-6 font-semibold">⚡ Banking Tayari AI Solution</div>
              <ul className="space-y-4 text-slate-200 text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <span className="text-sky-400 font-bold shrink-0 mt-0.5">✓</span> 
                  <span>Affordable learning accessible anytime from any device.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-400 font-bold shrink-0 mt-0.5">✓</span> 
                  <span>AI-driven adaptive learning tailored to your weak areas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-400 font-bold shrink-0 mt-0.5">✓</span> 
                  <span>Instant step-by-step explanations for every question.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-400 font-bold shrink-0 mt-0.5">✓</span> 
                  <span>Real-time mock exams mirroring actual banking formats.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BANK COVERAGE ECOSYSTEM */}
      <section className="py-20 bg-slate-900/30 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Bank Exam Ecosystem</h2>
            <p className="text-slate-400">Dedicated preparation tracks aligned with the latest syllabus of Nepal's major financial institutions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* NRB */}
            <div 
              onClick={() => setActiveTab('courses')}
              className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-sky-500/50 transition-all cursor-pointer group"
            >
              <div className="text-sky-400 font-bold mb-2 flex items-center justify-between">
                <span>NRB</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors">Level 4 &amp; 6</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">Nepal Rastra Bank</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Assistant &amp; Officer Level curriculum, monetary policy updates, and economic analysis modules.</p>
            </div>

            {/* RBB */}
            <div 
              onClick={() => setActiveTab('courses')}
              className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-sky-500/50 transition-all cursor-pointer group"
            >
              <div className="text-sky-400 font-bold mb-2 flex items-center justify-between">
                <span>RBB</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors">Level 4 &amp; 5</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">Rastriya Banijya Bank</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Comprehensive sets for Level 4 &amp; Level 5 with accountancy, management, and IT focus.</p>
            </div>

            {/* NBL */}
            <div 
              onClick={() => setActiveTab('courses')}
              className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-sky-500/50 transition-all cursor-pointer group"
            >
              <div className="text-sky-400 font-bold mb-2 flex items-center justify-between">
                <span>NBL</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors">Level 3 &amp; 4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">Nepal Bank Limited</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Specialized mock tests, banking acts, rules, and mathematical reasoning sets.</p>
            </div>

            {/* ADBL */}
            <div 
              onClick={() => setActiveTab('courses')}
              className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-sky-500/50 transition-all cursor-pointer group"
            >
              <div className="text-sky-400 font-bold mb-2 flex items-center justify-between">
                <span>ADBL</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors">Level 4 &amp; 5</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">Agricultural Dev. Bank</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Tailored practice sets covering rural credit, general awareness, and financial management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE TECHNOLOGICAL PILLARS */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Core Technological Pillars</h2>
            <p className="text-slate-400">Built using modern Web Tech &amp; AI frameworks for a high-performance experience.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="text-2xl mb-4">🤖</div>
              <h4 className="text-lg font-bold text-white mb-2">AI Note Generator</h4>
              <p className="text-sm text-slate-400 leading-relaxed">Converts complex banking acts and economic concepts into clear, structured revision notes in seconds.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="text-2xl mb-4">🔥</div>
              <h4 className="text-lg font-bold text-white mb-2">Daily Streaks &amp; Analytics</h4>
              <p className="text-sm text-slate-400 leading-relaxed">Gamified learning engine that tracks performance accuracy, speed, and consistency over time.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="text-2xl mb-4">📚</div>
              <h4 className="text-lg font-bold text-white mb-2">High-Yield PDFs &amp; Videos</h4>
              <p className="text-sm text-slate-400 leading-relaxed">Curated, subject-matter-verified downloadable materials and video masterclasses.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="text-2xl mb-4">🔒</div>
              <h4 className="text-lg font-bold text-white mb-2">Bank-Grade Security</h4>
              <p className="text-sm text-slate-400 leading-relaxed">Google Identity OAuth protection ensuring user data safety and account integrity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION 2030 */}
      <section className="py-20 bg-gradient-to-b from-slate-900/50 to-slate-950 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sky-400 font-semibold tracking-wider text-sm uppercase">Vision &amp; Mission 2030</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3 mb-6">Democratizing Public Service Education</h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            Our vision for 2030 is to ensure that every aspirant in Nepal—whether located in Kathmandu or remote districts—has equal access to high-quality exam preparation resources. We believe financial limitations or geographic distance should never hold back talent.
          </p>
        </div>
      </section>

      {/* TRUST & QUALITY PROMISE */}
      <section className="py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-sky-900/20 via-slate-900 to-sky-900/20 border border-sky-500/20 rounded-3xl p-8 sm:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Our Trust &amp; Quality Commitment</h3>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
              Every question, note, and answer key undergoes continuous review against official Lok Sewa Commission &amp; Bank directives to ensure maximum syllabus accuracy.
            </p>
            <button 
              id="about-footer-cta-practice"
              onClick={() => setActiveTab('quiz')} 
              className="inline-flex justify-center items-center px-8 py-4 rounded-xl font-bold bg-white text-slate-950 hover:bg-slate-200 transition-all cursor-pointer shadow-lg active:scale-95"
            >
              Join Thousands of Aspirants Today
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
