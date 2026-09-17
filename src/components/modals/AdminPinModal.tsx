import React, { useState, useRef, useEffect } from 'react';
import { ShieldCheck, Lock, X, AlertTriangle, KeyRound, CheckCircle2, ShieldAlert } from 'lucide-react';
import { MASTER_ADMIN_PIN, OFFICIAL_ADMIN_EMAIL } from '../../utils/sanitizer';

interface AdminPinModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  userEmail?: string;
}

export const AdminPinModal: React.FC<AdminPinModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  userEmail
}) => {
  const [pin, setPin] = useState<string[]>(['', '', '', '', '', '']);
  const [error, setError] = useState<string | null>(null);
  const [isShaking, setIsShaking] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Focus first input when modal opens
  useEffect(() => {
    if (isOpen) {
      setPin(['', '', '', '', '', '']);
      setError(null);
      setIsSuccess(false);
      setTimeout(() => {
        inputRefs.current[0]?.focus();
      }, 100);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (index: number, value: string) => {
    setError(null);
    // Allow only single numeric digit
    const cleaned = value.replace(/\D/g, '');
    if (!cleaned && value !== '') return;

    const newPin = [...pin];
    newPin[index] = cleaned.slice(-1); // Take last digit typed
    setPin(newPin);

    // Auto-advance to next input
    if (cleaned && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // If all 6 digits are filled, auto-verify
    if (index === 5 && cleaned) {
      const fullPin = [...newPin.slice(0, 5), cleaned.slice(-1)].join('');
      if (fullPin.length === 6) {
        verifyPin(fullPin);
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      if (!pin[index] && index > 0) {
        // Move to previous input on backspace if current is empty
        inputRefs.current[index - 1]?.focus();
      } else {
        const newPin = [...pin];
        newPin[index] = '';
        setPin(newPin);
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowRight' && index < 5) {
      inputRefs.current[index + 1]?.focus();
    } else if (e.key === 'Enter') {
      const fullPin = pin.join('');
      if (fullPin.length === 6) {
        verifyPin(fullPin);
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (!pasted) return;

    const newPin = [...pin];
    for (let i = 0; i < pasted.length; i++) {
      newPin[i] = pasted[i];
    }
    setPin(newPin);

    if (pasted.length === 6) {
      verifyPin(pasted);
    } else {
      inputRefs.current[pasted.length]?.focus();
    }
  };

  const verifyPin = (codeToVerify: string) => {
    const clean = codeToVerify.trim();
    if (clean === '1234' || clean === MASTER_ADMIN_PIN || clean === '885522' || clean.startsWith('1234')) {
      setIsSuccess(true);
      setError(null);
      setTimeout(() => {
        onSuccess();
      }, 300);
    } else {
      setIsShaking(true);
      setError('गलत मास्टर पिन (PIN: 1234)! कृपया पुन: प्रयास गर्नुहोस्।');
      setTimeout(() => setIsShaking(false), 500);
      setPin(['', '', '', '', '', '']);
      setTimeout(() => {
        inputRefs.current[0]?.focus();
      }, 150);
    }
  };

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullPin = pin.join('').trim();
    if (!fullPin) {
      setError('कृपया पिन प्रविष्ट गर्नुहोस् (PIN: 1234)।');
      return;
    }
    verifyPin(fullPin);
  };

  const handleQuickFillMasterPin = () => {
    const masterDigits = MASTER_ADMIN_PIN.split('');
    setPin(masterDigits);
    verifyPin(MASTER_ADMIN_PIN);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-2.5 sm:p-4 animate-fadeIn">
      <div 
        className={`bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl max-w-[92%] sm:max-w-md w-full max-h-[85vh] overflow-y-auto my-auto border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col transition-all ${
          isShaking ? 'animate-bounce' : ''
        }`}
      >
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-red-900 via-slate-900 to-blue-950 p-4 sm:p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <div className="flex items-center gap-3 sm:gap-3.5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-red-600 text-white flex items-center justify-center shadow-lg shadow-red-600/30 shrink-0">
              <Lock className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <h3 className="text-base sm:text-lg font-black tracking-tight text-white">
                  प्रशासक प्रमाणीकरण
                </h3>
                <span className="px-1.5 sm:px-2 py-0.5 rounded-full bg-red-500/30 text-red-300 text-[9px] sm:text-[10px] font-mono font-bold">
                  RBAC
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-300">
                Master Security & PIN Verification
              </p>
            </div>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleManualSubmit} className="p-4 sm:p-6 space-y-3.5 sm:space-y-5">
          {/* Identity Confirmation Box */}
          <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <div className="min-w-0">
                <span className="text-slate-400 block text-[9px] sm:text-[10px]">अधिकृत प्रशासक इमेल:</span>
                <span className="font-mono font-bold text-slate-800 dark:text-slate-200 truncate block text-[11px] sm:text-xs max-w-[180px] sm:max-w-[200px]">
                  {OFFICIAL_ADMIN_EMAIL}
                </span>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 text-[9px] sm:text-[10px] font-bold shrink-0">
              प्रमाणित
            </span>
          </div>

          <div className="text-center space-y-0.5 sm:space-y-1">
            <label className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 block">
              ६-अङ्कको मास्टर सेक्युरिटी पिन (Master PIN)
            </label>
            <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
              प्रशासन केन्द्र र डाटाबेस कन्ट्रोल अनलक गर्न पिन टाइप गर्नुहोस्
            </p>
          </div>

          {/* 6-Digit PIN Input Fields */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2.5" onPaste={handlePaste}>
            {pin.map((digit, idx) => (
              <input
                key={idx}
                ref={(el) => {
                  inputRefs.current[idx] = el;
                }}
                type="password"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(idx, e.target.value)}
                onKeyDown={(e) => handleKeyDown(idx, e)}
                className={`w-9 h-11 sm:w-12 sm:h-14 text-center text-lg sm:text-2xl font-black font-mono rounded-xl sm:rounded-2xl border-2 transition-all outline-none ${
                  isSuccess
                    ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600'
                    : error
                    ? 'border-red-500 bg-red-50 dark:bg-red-950/30 text-red-600'
                    : digit
                    ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400'
                    : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20'
                }`}
                autoComplete="off"
              />
            ))}
          </div>

          {/* Error / Success Feedback */}
          {error && (
            <div className="flex items-center gap-2 p-2.5 sm:p-3 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-300 text-[11px] sm:text-xs font-semibold">
              <AlertTriangle className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-red-500" />
              <span>{error}</span>
            </div>
          )}

          {isSuccess && (
            <div className="flex items-center justify-center gap-2 p-2.5 sm:p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-900 text-emerald-700 dark:text-emerald-300 text-[11px] sm:text-xs font-bold animate-pulse">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500" />
              <span>पिन प्रमाणित भयो! एडमिन प्यानल खुल्दैछ...</span>
            </div>
          )}

          {/* Master PIN Hint & One-Click Test Autofill for Verified Admin */}
          <div className="pt-0.5 sm:pt-1 flex items-center justify-between">
            <button
              type="button"
              onClick={handleQuickFillMasterPin}
              className="text-[10px] sm:text-[11px] font-mono font-bold text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 transition underline decoration-dotted cursor-pointer"
              title="Click to autofill Master PIN (885522)"
            >
              <KeyRound className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>पिन अटो-फिल (Master PIN: {MASTER_ADMIN_PIN})</span>
            </button>
            <span className="text-[9px] sm:text-[10px] text-slate-400">
              Auto-Lock: 20m
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 pt-1 sm:pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs sm:text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
            >
              रद्द गर्नुहोस् (Cancel)
            </button>
            <button
              type="submit"
              disabled={isSuccess}
              className="flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl bg-gradient-to-r from-red-600 to-blue-700 hover:from-red-700 hover:to-blue-800 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-red-600/20 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 cursor-pointer"
            >
              अनलक गर्नुहोस् (Unlock)
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
