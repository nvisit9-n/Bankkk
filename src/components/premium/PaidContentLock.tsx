import React, { useState } from 'react';
import { 
  Lock, 
  Crown, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  QrCode, 
  Copy, 
  Check, 
  Upload, 
  Zap, 
  ExternalLink,
  ChevronRight,
  AlertCircle
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { DbService } from '../../services/dbService';
import { safeCopyToClipboard } from '../../utils/safeHelpers';
import confetti from 'canvas-confetti';

interface PaidContentLockProps {
  children: React.ReactNode;
  resourceTitle?: string;
  resourceType?: 'note' | 'video' | 'quiz_set' | 'pdf';
  blurLevel?: 'sm' | 'md' | 'lg';
  showSamplePreview?: boolean;
}

export const PaidContentLock: React.FC<PaidContentLockProps> = ({
  children,
  resourceTitle = 'प्रिमियम अध्ययन सामग्री',
  resourceType = 'note',
  blurLevel = 'md',
  showSamplePreview = true
}) => {
  const { user, addToast } = useApp();
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const [gateway, setGateway] = useState<'esewa' | 'khalti' | 'bank_transfer'>('esewa');
  const [copiedId, setCopiedId] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [slipImage, setSlipImage] = useState<string | null>(null);

  const isPro = Boolean(DbService.isUserPro(user));

  // If user is pro, grant unrestricted access
  if (isPro) {
    return (
      <div className="relative">
        <div className="flex items-center justify-between mb-3 px-3 py-1.5 rounded-xl bg-emerald-500/10 dark:bg-emerald-950/30 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold">
          <span className="flex items-center gap-1.5">
            <Crown className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>प्रो पहुँच सक्रिय (PRO ACCESS UNLOCKED)</span>
          </span>
          <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
            असीमित अध्ययन खुला
          </span>
        </div>
        {children}
      </div>
    );
  }

  const handleCopyPaymentId = async (idText: string) => {
    const success = await safeCopyToClipboard(idText);
    if (success) {
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
      addToast('भुक्तानी आइडी कपी गरियो!', 'info');
    }
  };

  const handleInstantTestUnlock = () => {
    if (!user) return;
    const target = user.email || user.authUid || user.id;
    DbService.upgradeStudentToPro(target, true);
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    addToast('बधाई छ! परीक्षणका लागि प्रो सदस्यता तत्काल सक्रिय भयो।', 'success');
  };

  const handleSubmitVerification = (e: React.FormEvent) => {
    e.preventDefault();
    if (!transactionId.trim()) {
      addToast('कृपया eSewa वा Khalti को कारोबार नम्बर (Transaction ID) लेख्नुहोस्।', 'error');
      return;
    }

    setSubmitting(true);
    DbService.addPaymentVerification({
      userId: user?.authUid || user?.id || 'guest',
      userName: user?.displayName || user?.name || 'परीक्षार्थी',
      userEmail: user?.email || '',
      amount: 499,
      gateway,
      transactionId: transactionId.trim(),
      receiptImage: slipImage || undefined,
      noteTitle: resourceTitle
    });

    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitModalOpen(false);
      setTransactionId('');
      confetti({ particleCount: 50, spread: 60 });
      addToast('भुक्तानी प्रमाण पेश भयो! प्रशासकद्वारा केही मिनेटभित्र प्रमाणीकरण गरिनेछ।', 'success');
    }, 600);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSlipImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 bg-slate-900 shadow-xl my-4">
      
      {/* Blurred Preview Canvas */}
      <div className={`filter ${blurLevel === 'lg' ? 'blur-md' : 'blur-sm'} select-none pointer-events-none opacity-40 max-h-[380px] overflow-hidden`}>
        {showSamplePreview ? children : (
          <div className="p-8 space-y-4 text-slate-400">
            <div className="h-6 w-3/4 bg-slate-700 rounded animate-pulse" />
            <div className="h-4 w-full bg-slate-800 rounded animate-pulse" />
            <div className="h-4 w-5/6 bg-slate-800 rounded animate-pulse" />
            <div className="h-4 w-2/3 bg-slate-800 rounded animate-pulse" />
            <div className="h-32 w-full bg-slate-800 rounded-xl" />
          </div>
        )}
      </div>

      {/* High-Converting SaaS Overlay Card */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-slate-900/60 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <div className="max-w-lg w-full bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-amber-500/40 shadow-2xl space-y-5 text-center my-auto">
          
          {/* Badge & Lock Icon */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-300 text-slate-950 flex items-center justify-center shadow-lg shadow-amber-500/20">
              <Lock className="w-7 h-7 stroke-[2.5]" />
            </div>
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-black uppercase tracking-wider border border-amber-500/20">
              <Crown className="w-3.5 h-3.5 fill-amber-500" />
              <span>[PREMIUM] खरिद पछि मात्र उपलब्ध</span>
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-1.5">
            <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white leading-snug">
              {resourceTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              यो विशेष दफागत व्याख्या, भिडियो कक्षा र PDF नोट केवल <strong className="text-amber-600 dark:text-amber-400">प्रो सदस्यहरू</strong>का लागि मात्र खुला छ।
            </p>
          </div>

          {/* Feature List (Notion/Duolingo style) */}
          <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700/60 text-left space-y-2 text-xs">
            <p className="font-bold text-slate-800 dark:text-white text-[11px] uppercase tracking-wider">
              प्रो सदस्यतामा के-के समावेश छ?
            </p>
            <ul className="space-y-1.5 text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>सबै ५० वटै परीक्षा सेटका मोडल उत्तर र गहन विश्लेषण</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>सम्पूर्ण बैंकिङ ऐन र निर्देशिकाका आधिकारिक डाउनलोड योग्य PDF नोटहरू</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>विशेष भिडियो कक्षाहरू विज्ञापनरहित पूर्ण पहुँच</span>
              </li>
            </ul>
          </div>

          {/* Price Tag & Action Buttons */}
          <div className="space-y-3 pt-1">
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                रु. ४९९
              </span>
              <span className="text-xs text-slate-400 line-through">रु. १,०००</span>
              <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold text-[10px]">
                ५०% छुट (१ वर्ष)
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2.5">
              <button
                type="button"
                onClick={() => setIsSubmitModalOpen(true)}
                className="w-full sm:flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <Zap className="w-4 h-4 fill-slate-950" />
                <span>भुक्तानी गरी अनलक गर्नुहोस्</span>
              </button>

              <button
                type="button"
                onClick={handleInstantTestUnlock}
                className="w-full sm:w-auto py-3 px-4 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer"
                title="डेमो परीक्षणको लागि तत्काल प्रो अनलक गर्नुहोस्"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>तत्काल परीक्षण अनलक</span>
              </button>
            </div>

            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              eSewa / Khalti / ConnectIPS मार्फत सोझै भुक्तानी गर्न सकिन्छ।
            </p>
          </div>

        </div>
      </div>

      {/* Payment & Slip Submission Modal */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full border border-slate-200 dark:border-slate-800 p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between border-b pb-3 border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <Crown className="w-5 h-5 text-amber-500 fill-amber-500" />
                <h4 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                  eSewa / Khalti भुक्तानी विवरण
                </h4>
              </div>
              <button 
                onClick={() => setIsSubmitModalOpen(false)}
                className="p-1 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Gateway Selection Tabs */}
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setGateway('esewa')}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 border ${
                  gateway === 'esewa' 
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-500' 
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-transparent'
                }`}
              >
                <span>eSewa</span>
              </button>

              <button
                type="button"
                onClick={() => setGateway('khalti')}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 border ${
                  gateway === 'khalti' 
                    ? 'bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border-purple-500' 
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-transparent'
                }`}
              >
                <span>Khalti</span>
              </button>
            </div>

            {/* Account Info Box */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 dark:text-slate-400">प्रापक खाता (Account ID):</span>
                <button
                  type="button"
                  onClick={() => handleCopyPaymentId('9841000000')}
                  className="font-mono font-bold text-slate-900 dark:text-white flex items-center gap-1 hover:text-amber-500"
                >
                  <span>9841000000</span>
                  {copiedId ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500 dark:text-slate-400">खाताको नाम:</span>
                <span className="font-bold text-slate-800 dark:text-slate-200">Banking Tayari Nepal</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500 dark:text-slate-400">रकम:</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 font-mono">रु. ४९९/-</span>
              </div>
            </div>

            {/* Verification Form */}
            <form onSubmit={handleSubmitVerification} className="space-y-3 pt-1">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  कारोबार कोड / Transaction ID (अनिवार्य):
                </label>
                <input
                  type="text"
                  required
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                  placeholder="उदा: 7F43X992 वा eSewa Ref ID"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-mono text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  रसिद वा भौचर फोटो (ऐच्छिक):
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full text-xs text-slate-500 file:mr-2 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-amber-50 dark:file:bg-amber-950 file:text-amber-700 dark:file:text-amber-300 hover:file:bg-amber-100"
                />
              </div>

              <div className="pt-2 flex items-center gap-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-[#0B2046] hover:bg-[#152B52] text-white font-bold text-xs transition flex items-center justify-center gap-1.5 disabled:opacity-50"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>{submitting ? 'पेश गरिँदैछ...' : 'प्रमाण पेश गर्नुहोस् (Submit Slip)'}</span>
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
};
