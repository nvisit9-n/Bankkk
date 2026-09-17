import React, { useState } from 'react';
import { 
  ShoppingBag, 
  BookOpen, 
  CheckCircle2, 
  FileText, 
  Clock, 
  Download, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { MOCK_PREMIUM_NOTES } from '../../data/mockData';
import { DocumentReaderModal } from '../premium/DocumentReaderModal';
import { PremiumNote } from '../../types';

export const PurchasesScreen: React.FC = () => {
  const { purchases, setActiveTab } = useApp();
  const [selectedForReading, setSelectedForReading] = useState<PremiumNote | null>(null);

  const allNotesMap = new Map<string, PremiumNote>();
  MOCK_PREMIUM_NOTES.forEach(n => allNotesMap.set(n.id, n));

  return (
    <div className="space-y-6 pb-12">
      
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold mb-2">
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>मेरो अध्ययन सामग्री लाइब्रेरी (My Library)</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          मेरो खरिद गरिएका प्रिमियम सामग्रीहरू (My Purchases)
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
          तपाईंले अनलक गर्नुभएका सबै प्रिमियम हस्तलिखित नोट्स, रिभिजन गाइड तथा फर्मुला बुकहरू जुनसुकै बेला पढ्नुहोस्।
        </p>
      </div>

      {(purchases || []).length === 0 ? (
        /* Empty State */
        <div className="p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
          <div className="w-16 h-16 mx-auto rounded-3xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              हालसम्म कुनै प्रिमियम नोट्स खरिद गरिएको छैन
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto mt-1">
              नेपालका उत्कृष्ट प्रशिक्षकहरूद्वारा तयार पारिएका उच्च गुणस्तरीय प्रिमियम नोट्सहरू अवलोकन गर्नुहोस् र परीक्षा तयारीलाई बलियो बनाउनुहोस्।
            </p>
          </div>
          <button
            onClick={() => setActiveTab('premium')}
            className="px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs sm:text-sm shadow-md transition inline-flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>प्रिमियम नोट्स बजार हेर्नुहोस् (Explore)</span>
          </button>
        </div>
      ) : (
        /* Purchases List */
        <div className="space-y-4">
          {(purchases || []).map(item => {
            const noteData = allNotesMap.get(item.noteId) || MOCK_PREMIUM_NOTES[0];

            return (
              <div
                key={item.orderId || item.transactionId || item.noteId}
                className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> सक्रिय (Lifetime Access)
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">
                        {item.transactionId}
                      </span>
                    </div>

                    <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white mt-1">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      खरिद मिति: {item.purchaseDate} • भुक्तानी: {item.paymentMethod.toUpperCase()} (रु. {item.price || item.amountPaid})
                    </p>

                    {item.receiptUrl && (
                      <div className="mt-2 flex items-center gap-2">
                        <img 
                          src={item.receiptUrl} 
                          alt="Receipt" 
                          className="w-7 h-7 rounded border border-slate-300 dark:border-slate-700 object-cover" 
                        />
                        <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> भुक्तानी रसिद सुरक्षित
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                  <button
                    onClick={() => setSelectedForReading(noteData)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-black transition flex items-center justify-center gap-2 shadow-sm"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>पढ्नुहोस् (Read Now)</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Active Document Reader */}
      {selectedForReading && (
        <DocumentReaderModal
          note={selectedForReading}
          onClose={() => setSelectedForReading(null)}
          onOpenPurchase={() => {}}
        />
      )}

    </div>
  );
};
