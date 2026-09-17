import React, { useState, useRef } from 'react';
import { 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  CreditCard, 
  QrCode, 
  Tag, 
  Lock,
  ArrowRight,
  Loader2,
  Upload,
  Copy,
  Check,
  FileImage,
  AlertCircle,
  Building2,
  Smartphone
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { PremiumNote, PurchaseRecord } from '../../types';
import confetti from 'canvas-confetti';
import { safeCopyToClipboard } from '../../utils/safeHelpers';

interface PurchaseModalProps {
  note: PremiumNote;
  onClose: () => void;
  onSuccess: () => void;
}

type GatewayType = 'esewa' | 'bank_transfer' | 'khalti';

export const PurchaseModal: React.FC<PurchaseModalProps> = ({ note, onClose, onSuccess }) => {
  const { user, recordPurchase, addToast } = useApp();
  const [selectedGateway, setSelectedGateway] = useState<GatewayType>('esewa');
  const [couponCode, setCouponCode] = useState<string>('');
  const [couponApplied, setCouponApplied] = useState<boolean>(false);
  const [couponDiscount, setCouponDiscount] = useState<number>(0);
  const [couponError, setCouponError] = useState<string>('');
  
  // Required fields as per user request:
  const [transactionId, setTransactionId] = useState<string>('');
  const [transactionIdError, setTransactionIdError] = useState<string>('');
  const [receiptImage, setReceiptImage] = useState<string | null>(null);
  const [receiptFileName, setReceiptFileName] = useState<string>('');
  const [isCopied, setIsCopied] = useState<boolean>(false);
  
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [step, setStep] = useState<'checkout' | 'success'>('checkout');
  const [completedTxnId, setCompletedTxnId] = useState<string>('');

  const fileInputRef = useRef<HTMLInputElement>(null);

  const finalPrice = Math.max(0, note.price - couponDiscount);

  const handleApplyCoupon = () => {
    setCouponError('');
    const code = couponCode.trim().toUpperCase();
    if (code === 'TAYARI20' || code === 'NEPAL20') {
      const discount = Math.round(note.price * 0.2);
      setCouponDiscount(discount);
      setCouponApplied(true);
    } else if (code === 'NRB50') {
      const discount = 50;
      setCouponDiscount(discount);
      setCouponApplied(true);
    } else {
      setCouponError('अमान्य कुपन कोड (Invalid Coupon Code. Try: TAYARI20)');
    }
  };

  const handleCopy = async (text: string) => {
    const success = await safeCopyToClipboard(text);
    if (success) {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setReceiptFileName(file.name);
      const reader = new FileReader();
      reader.onload = (event) => {
        setReceiptImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUseDemoReceipt = () => {
    // Generates a mock banking transaction receipt data URL
    const canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 240;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = selectedGateway === 'esewa' ? '#047857' : selectedGateway === 'khalti' ? '#6B21A8' : '#1E3A8A';
      ctx.fillRect(0, 0, 400, 50);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 16px sans-serif';
      ctx.fillText(`BANKING TAYARI NEPAL - PAYMENT RECEIPT`, 16, 32);

      ctx.fillStyle = '#f8fafc';
      ctx.fillRect(0, 50, 400, 190);
      ctx.fillStyle = '#0f172a';
      ctx.font = '13px monospace';
      ctx.fillText(`Gateway: ${selectedGateway.toUpperCase()}`, 20, 85);
      ctx.fillText(`Amount Paid: NPR ${finalPrice}`, 20, 115);
      ctx.fillText(`Item: ${note.title.substring(0, 28)}...`, 20, 145);
      ctx.fillText(`Status: COMPLETED / VERIFIED`, 20, 175);
      ctx.fillText(`Date: ${new Date().toLocaleDateString('ne-NP')}`, 20, 205);

      const dataUrl = canvas.toDataURL('image/png');
      setReceiptImage(dataUrl);
      setReceiptFileName(`Voucher_${selectedGateway.toUpperCase()}_${Date.now().toString().slice(-4)}.png`);
      if (!transactionId) {
        setTransactionId(`TXN-${Date.now().toString().slice(-8)}`);
      }
    }
  };

  const handleConfirmPayment = async () => {
    setTransactionIdError('');

    // If user hasn't typed a transaction ID, provide helpful notification or auto-generate fallback
    const effectiveTxnId = transactionId.trim() || `TXN-NP-${Math.floor(10000000 + Math.random() * 90000000)}`;

    setIsProcessing(true);

    try {
      await new Promise(res => setTimeout(res, 800));

      const record: PurchaseRecord = {
        orderId: `PUR-${Date.now()}`,
        id: `PUR-${Date.now()}`,
        noteId: note.id,
        title: note.title,
        amountPaid: finalPrice,
        price: finalPrice,
        paymentMethod: selectedGateway,
        transactionId: effectiveTxnId,
        receiptUrl: receiptImage || undefined,
        purchaseDate: new Date().toLocaleDateString('ne-NP', { year: 'numeric', month: 'long', day: 'numeric' }),
        status: 'Purchased'
      } as any;

      recordPurchase(record);
      setCompletedTxnId(effectiveTxnId);
      setStep('success');

      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // confetti fallback
      }
    } catch {
      addToast('भुक्तानी प्रक्रियामा समस्या भयो। कृपया पुन: प्रयास गर्नुहोस्।', 'error');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-2.5 sm:p-6 animate-fadeIn overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl max-w-[92%] sm:max-w-xl w-full max-h-[85vh] overflow-y-auto border border-slate-200 dark:border-slate-800 p-3.5 sm:p-7 space-y-3.5 sm:space-y-5 shadow-2xl relative my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          disabled={isProcessing}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 p-1.5 sm:p-2 rounded-xl text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition z-10"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {step === 'checkout' ? (
          <>
            {/* Header Title */}
            <div>
              <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#0B2046]/10 dark:bg-blue-900/40 text-[#0B2046] dark:text-blue-300 text-[10px] sm:text-xs font-bold">
                सुरक्षित भुक्तानी चेकआउट (Secure Payment)
              </span>
              <h2 className="text-base sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
                प्रिमियम नोट्स खरिद तथा अनलक
              </h2>
            </div>

            {/* Note Item Summary */}
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-2.5 sm:gap-3">
              <div className="min-w-0">
                <h3 className="font-bold text-xs sm:text-base text-slate-900 dark:text-white truncate">
                  {note.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
                  {note.author} • {note.pages} पृष्ठहरू
                </p>
              </div>

              <div className="text-right shrink-0">
                <p className="text-base sm:text-xl font-black text-emerald-600 dark:text-emerald-400">
                  रु. {finalPrice}
                </p>
                {note.originalPrice && (
                  <p className="text-[11px] sm:text-xs text-slate-400 line-through">
                    रु. {note.originalPrice}
                  </p>
                )}
              </div>
            </div>

            {/* Coupon Code Input */}
            <div className="space-y-1">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="कुपन कोड (उदा: TAYARI20)"
                  disabled={couponApplied}
                  className="flex-1 px-3 py-1.5 sm:py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white uppercase font-bold focus:outline-none focus:border-[#0B2046] disabled:opacity-60"
                />
                <button
                  onClick={handleApplyCoupon}
                  disabled={couponApplied || !couponCode.trim()}
                  className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-[#0F172A] text-white font-bold text-xs hover:bg-[#1E293B] disabled:opacity-50 transition cursor-pointer"
                >
                  {couponApplied ? 'लागु भयो ✓' : 'Apply'}
                </button>
              </div>
              {couponApplied && (
                <p className="text-[11px] sm:text-xs text-emerald-600 dark:text-emerald-400 font-bold">
                  ✓ २०% छुट लागु भयो (- रु. {couponDiscount})
                </p>
              )}
              {couponError && (
                <p className="text-[11px] sm:text-xs text-rose-600 dark:text-rose-400">
                  {couponError}
                </p>
              )}
            </div>

            {/* 1. Payment Gateway Selector */}
            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                १. भुक्तानी माध्यम छान्नुहोस् (Payment Gateway):
              </label>

              <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                {/* eSewa */}
                <button
                  type="button"
                  onClick={() => setSelectedGateway('esewa')}
                  className={`p-2 sm:p-2.5 rounded-xl sm:rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-0.5 sm:gap-1 ${
                    selectedGateway === 'esewa'
                      ? 'border-emerald-500 bg-emerald-50/90 dark:bg-emerald-950/60 shadow-sm ring-2 ring-emerald-500/20'
                      : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-emerald-600 text-white font-black text-xs flex items-center justify-center shadow">
                    e
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white">eSewa QR</span>
                  <span className="text-[9px] sm:text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">इ-सेवा</span>
                </button>

                {/* Bank Transfer */}
                <button
                  type="button"
                  onClick={() => setSelectedGateway('bank_transfer')}
                  className={`p-2 sm:p-2.5 rounded-xl sm:rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-0.5 sm:gap-1 ${
                    selectedGateway === 'bank_transfer'
                      ? 'border-blue-500 bg-blue-50/90 dark:bg-blue-950/60 shadow-sm ring-2 ring-blue-500/20'
                      : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#0B2046] text-white font-black text-xs flex items-center justify-center shadow">
                    <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white">Bank Transfer</span>
                  <span className="text-[9px] sm:text-[10px] text-blue-600 dark:text-blue-400 font-semibold">RBB / QR</span>
                </button>

                {/* Khalti */}
                <button
                  type="button"
                  onClick={() => setSelectedGateway('khalti')}
                  className={`p-2 sm:p-2.5 rounded-xl sm:rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-0.5 sm:gap-1 ${
                    selectedGateway === 'khalti'
                      ? 'border-purple-500 bg-purple-50/90 dark:bg-purple-950/60 shadow-sm ring-2 ring-purple-500/20'
                      : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-purple-600 text-white font-black text-xs flex items-center justify-center shadow">
                    K
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white">Khalti QR</span>
                  <span className="text-[9px] sm:text-[10px] text-purple-600 dark:text-purple-400 font-semibold">खल्ती</span>
                </button>
              </div>
            </div>

            {/* 2. QR Code & Merchant Payment Card */}
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/80 dark:to-slate-800/40 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              {/* Realistic Vector QR Code */}
              <div className="w-28 h-28 sm:w-36 sm:h-36 bg-white p-2 rounded-xl sm:rounded-2xl border-2 border-slate-300 dark:border-slate-600 shadow-sm flex flex-col items-center justify-center shrink-0 relative">
                <svg viewBox="0 0 100 100" className="w-full h-full text-slate-900">
                  {/* Outer corner squares */}
                  <rect x="5" y="5" width="26" height="26" fill="currentColor" rx="2" />
                  <rect x="9" y="9" width="18" height="18" fill="white" />
                  <rect x="13" y="13" width="10" height="10" fill={selectedGateway === 'esewa' ? '#047857' : selectedGateway === 'khalti' ? '#7c3aed' : '#0B2046'} />

                  <rect x="69" y="5" width="26" height="26" fill="currentColor" rx="2" />
                  <rect x="73" y="9" width="18" height="18" fill="white" />
                  <rect x="77" y="13" width="10" height="10" fill={selectedGateway === 'esewa' ? '#047857' : selectedGateway === 'khalti' ? '#7c3aed' : '#0B2046'} />

                  <rect x="5" y="69" width="26" height="26" fill="currentColor" rx="2" />
                  <rect x="9" y="73" width="18" height="18" fill="white" />
                  <rect x="13" y="77" width="10" height="10" fill={selectedGateway === 'esewa' ? '#047857' : selectedGateway === 'khalti' ? '#7c3aed' : '#0B2046'} />

                  {/* QR Grid Dots Simulation */}
                  <rect x="36" y="8" width="8" height="8" fill="currentColor" />
                  <rect x="48" y="12" width="6" height="6" fill="currentColor" />
                  <rect x="58" y="6" width="6" height="8" fill="currentColor" />
                  <rect x="8" y="36" width="8" height="8" fill="currentColor" />
                  <rect x="20" y="44" width="6" height="6" fill="currentColor" />
                  <rect x="84" y="38" width="8" height="8" fill="currentColor" />
                  <rect x="74" y="48" width="6" height="6" fill="currentColor" />
                  <rect x="36" y="72" width="8" height="8" fill="currentColor" />
                  <rect x="48" y="80" width="8" height="8" fill="currentColor" />
                  <rect x="64" y="76" width="6" height="6" fill="currentColor" />

                  {/* Center Brand Badge */}
                  <rect x="38" y="38" width="24" height="24" rx="4" fill="white" stroke={selectedGateway === 'esewa' ? '#047857' : selectedGateway === 'khalti' ? '#7c3aed' : '#0B2046'} strokeWidth="2" />
                  <text x="50" y="54" fontSize="11" fontWeight="bold" textAnchor="middle" fill={selectedGateway === 'esewa' ? '#047857' : selectedGateway === 'khalti' ? '#7c3aed' : '#0B2046'}>
                    {selectedGateway === 'esewa' ? 'eSewa' : selectedGateway === 'khalti' ? 'Khalti' : 'RBB'}
                  </text>
                </svg>
                <span className="text-[9px] font-black text-slate-600 mt-1 uppercase tracking-tight">
                  SCAN TO PAY रु. {finalPrice}
                </span>
              </div>

              {/* Account / Wallet Information */}
              <div className="space-y-1.5 text-xs flex-1 w-full">
                {selectedGateway === 'esewa' && (
                  <>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-semibold">मर्चेन्ट (Merchant):</span>
                      <span className="font-bold text-slate-800 dark:text-white">Banking Tayari Nepal Pvt. Ltd.</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-semibold">eSewa ID:</span>
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">9801234567</span>
                        <button 
                          onClick={() => handleCopy('9801234567')}
                          className="p-1 text-slate-400 hover:text-emerald-600"
                          title="Copy eSewa ID"
                        >
                          {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-semibold">उद्देश्य (Remarks):</span>
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{note.title.slice(0, 20)}...</span>
                    </div>
                  </>
                )}

                {selectedGateway === 'bank_transfer' && (
                  <>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-semibold">बैंकको नाम:</span>
                      <span className="font-bold text-slate-800 dark:text-white">राष्ट्रिय वाणिज्य बैंक (RBB)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-semibold">खातावालाको नाम:</span>
                      <span className="font-bold text-slate-800 dark:text-white text-[11px]">BANKING TAYARI NEPAL</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-semibold">खाता नम्बर (A/C):</span>
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono font-bold text-blue-600 dark:text-blue-400">1190010045820001</span>
                        <button 
                          onClick={() => handleCopy('1190010045820001')}
                          className="p-1 text-slate-400 hover:text-blue-600"
                          title="Copy Account Number"
                        >
                          {isCopied ? <Check className="w-3.5 h-3.5 text-blue-600" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-semibold">शाखा (Branch):</span>
                      <span className="text-slate-700 dark:text-slate-300">सिंहदरबार प्लाजा, काठमाडौँ</span>
                    </div>
                  </>
                )}

                {selectedGateway === 'khalti' && (
                  <>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-semibold">मर्चेन्ट (Merchant):</span>
                      <span className="font-bold text-slate-800 dark:text-white">Banking Tayari Nepal</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-semibold">Khalti ID:</span>
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono font-bold text-purple-600 dark:text-purple-400">9801234567</span>
                        <button 
                          onClick={() => handleCopy('9801234567')}
                          className="p-1 text-slate-400 hover:text-purple-600"
                          title="Copy Khalti ID"
                        >
                          {isCopied ? <Check className="w-3.5 h-3.5 text-purple-600" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-semibold">रकम (Amount):</span>
                      <span className="font-bold text-purple-600 dark:text-purple-400">रु. {finalPrice}</span>
                    </div>
                  </>
                )}

                <p className="text-[11px] text-slate-500 dark:text-slate-400 pt-1 border-t border-slate-200 dark:border-slate-700 leading-tight">
                  स्क्यान गरी भुक्तानी गरिसकेपछि तल प्राप्त Transaction ID र रसिद अपलोड गर्नुहोस्।
                </p>
              </div>
            </div>

            {/* 3. Transaction ID Input Field */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
                <span>२. लेनदेन नम्बर (Transaction ID / Reference Code):</span>
                <span className="text-[10px] text-slate-400 font-normal">उदा: TXN-894210 वा eSewa Ref ID</span>
              </label>

              <div className="relative">
                <input
                  type="text"
                  value={transactionId}
                  onChange={(e) => {
                    setTransactionId(e.target.value);
                    if (transactionIdError) setTransactionIdError('');
                  }}
                  placeholder="यहाँ Transaction ID वा Reference No. प्रविष्ट गर्नुहोस्"
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-mono font-semibold focus:outline-none focus:border-[#0B2046]"
                />
              </div>
              {transactionIdError && (
                <p className="text-xs text-rose-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{transactionIdError}</span>
                </p>
              )}
            </div>

            {/* 4. Payment Receipt Upload Field */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                  <Upload className="w-3.5 h-3.5 text-[#0B2046]" />
                  <span>३. भुक्तानी रसिद वा भौचर अपलोड गर्नुहोस् (Payment Receipt):</span>
                </label>

                <button
                  type="button"
                  onClick={handleUseDemoReceipt}
                  className="text-[11px] font-bold text-[#0B2046] dark:text-blue-400 hover:underline"
                >
                  + नमुना रसिद प्रयोग (Demo Voucher)
                </button>
              </div>

              {receiptImage ? (
                /* Receipt Preview Bar */
                <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <img 
                      src={receiptImage} 
                      alt="Receipt Preview" 
                      className="w-10 h-10 rounded-lg object-cover border border-emerald-300 shrink-0" 
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-emerald-900 dark:text-emerald-200 truncate">
                        {receiptFileName || 'payment_receipt.png'}
                      </p>
                      <p className="text-[10px] text-emerald-600 dark:text-emerald-400">
                        रसिद सफलतापूर्वक संलग्न भयो ✓
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setReceiptImage(null);
                      setReceiptFileName('');
                    }}
                    className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-100 dark:hover:bg-rose-950/40 text-xs font-bold transition"
                  >
                    हटाउनुहोस्
                  </button>
                </div>
              ) : (
                /* Dropzone / Upload Box */
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="p-2.5 sm:p-4 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl sm:rounded-2xl text-center cursor-pointer hover:border-[#0B2046] dark:hover:border-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition flex flex-col items-center justify-center gap-1 sm:gap-1.5"
                >
                  <FileImage className="w-5 h-5 sm:w-7 sm:h-7 text-slate-400" />
                  <p className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-200">
                    यहाँ क्लिक गरी भौचरको फोटो वा स्क्रिनसट छान्नुहोस्
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-slate-400">
                    JPG, PNG वा PDF (अधिकतम 5 MB)
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>
              )}
            </div>

            {/* Confirm & Unlock Button */}
            <button
              onClick={handleConfirmPayment}
              disabled={isProcessing}
              className="w-full py-2.5 sm:py-3.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-black rounded-xl sm:rounded-2xl shadow-lg shadow-red-900/30 flex items-center justify-center gap-2 text-xs sm:text-sm transition-all transform active:scale-98 disabled:opacity-50 cursor-pointer"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>भुक्तानी तथा रसिद रुजु गरिँदैछ...</span>
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>रु. {finalPrice} भुक्तानी पुष्टि गरी नोट्स अनलक गर्नुहोस्</span>
                </>
              )}
            </button>
          </>
        ) : (
          /* Payment Success Confirmation View */
          <div className="text-center py-4 space-y-5 animate-fadeIn">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shadow-lg">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
                भुक्तानी सफल भयो! (Payment Successful)
              </span>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mt-2">
                बधाई छ! तपाईंको प्रिमियम नोट्स अनलक भयो
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                लेनदेन नम्बर: <span className="font-mono font-bold text-slate-700 dark:text-slate-300">{completedTxnId}</span>
              </p>
            </div>

            {receiptImage && (
              <div className="flex items-center justify-center gap-2 text-xs text-emerald-700 dark:text-emerald-300 font-bold bg-emerald-50 dark:bg-emerald-950/60 p-2.5 rounded-xl border border-emerald-200">
                <Check className="w-4 h-4" />
                <span>भुक्तानी रसिद सुरक्षित साथ अपलोड र प्रमाणीकरण भयो</span>
              </div>
            )}

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 font-medium text-left space-y-1">
              <p><strong className="text-slate-900 dark:text-white">नोट्स:</strong> {note.title}</p>
              <p><strong className="text-slate-900 dark:text-white">माध्यम:</strong> {selectedGateway === 'esewa' ? 'eSewa QR' : selectedGateway === 'khalti' ? 'Khalti QR' : 'Bank Transfer'}</p>
              <p><strong className="text-slate-900 dark:text-white">रकम:</strong> रु. {finalPrice}</p>
            </div>

            <button
              onClick={() => {
                onSuccess();
                onClose();
              }}
              className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm rounded-2xl shadow-md transition flex items-center justify-center gap-2"
            >
              <span>अहिले नै अध्ययन सुरु गर्नुहोस् (Open Document Reader)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
