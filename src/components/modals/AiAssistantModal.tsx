import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, Bot, CheckSquare, Copy, Check, Paperclip } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { useApp } from '../../context/AppContext';
import { QuizSet } from '../../types';
import { MOCK_QUESTIONS } from '../../data/mockData';
import { MarkdownRenderer } from '../common/MarkdownRenderer';
import { safeCopyToClipboard } from '../../utils/safeHelpers';

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  image?: string;
  suggestedTopic?: string;
}

interface AttachedImage {
  base64: string;
  mimeType: string;
  previewUrl: string;
  name: string;
}

export const AiAssistantModal: React.FC = () => {
  const { isAiModalOpen, setIsAiModalOpen, startQuiz } = useApp();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'ai',
      text: `नमस्ते! म तपाईंको "Banking Tayari Nepal AI साथी" (Gemini AI) हुँ। 

म तपाईंलाई नेपाल राष्ट्र बैंक, वाणिज्य बैंकहरू (RBB, NBL, ADBL) र लोकसेवा आयोगका प्रथम तथा द्वितीय पत्रका विषयहरूमा तत्काल व्याख्या, कानुनका दफाहरू, गणितीय हिसाब तथा परीक्षा उपयोगी बुँदाहरू प्रदान गर्न सक्छु।

कुनै पनि प्रश्न सोध्नुहोस्, फोटो/नोट संलग्न गर्नुहोस् वा तलका द्रुत विषयहरूमा थिच्नुहोस्!`
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [attachedImage, setAttachedImage] = useState<AttachedImage | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isAiModalOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isAiModalOpen]);

  if (!isAiModalOpen) return null;

  const samplePrompts = [
    'BAFIA २०७३ अनुसार बैंकहरूको वर्गीकरण र चुक्ता पूँजी',
    'नेपाल राष्ट्र बैंक ऐन २०५८ का प्रमुख उद्देश्य र कामहरू',
    'सम्पत्ति शुद्धीकरण (AML/CFT) मा बैंकहरूको दायित्व र CTR/STR',
    'मौद्रिक नीतिका मुख्य उपकरणहरू (CRR, SLR, CD Ratio)',
    'सार्वजनिक व्यवस्थापनमा HRM र उत्प्रेरणाको महत्व',
    'नेपाली अर्थतन्त्रमा रेमिट्यान्सको प्रभाव र चुनौतीहरू'
  ];

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('कृपया तस्बिर (JPG, PNG वा WebP) मात्र अपलोड गर्नुहोस्।');
      return;
    }

    if (file.size > 15 * 1024 * 1024) {
      alert('तस्बिरको आकार १५ MB भन्दा सानो हुनुपर्दछ।');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      setAttachedImage({
        base64: dataUrl,
        mimeType: file.type || 'image/jpeg',
        previewUrl: dataUrl,
        name: file.name
      });
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setAttachedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSendPrompt = async (promptText: string) => {
    const trimmed = promptText.trim();
    if ((!trimmed && !attachedImage) || isTyping) return;

    const currentImage = attachedImage;
    const queryToSend = trimmed || (currentImage ? 'कृपया संलग्न तस्बिरमा भएको प्रश्न वा टिपोट पढी विस्तृत, शुद्ध र बुँदागत समाधान वा व्याख्या नेपालीमा दिनुहोस्।' : '');

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: queryToSend,
      image: currentImage?.previewUrl
    };

    const aiMsgId = `ai-${Date.now()}`;
    const initialAiMsg: ChatMessage = {
      id: aiMsgId,
      sender: 'ai',
      text: ''
    };

    // Prepare history of recent messages for multi-turn context (excluding initial greeting)
    const chatHistory = messages
      .filter(m => m.id !== 'msg-1' && m.text && m.text.trim())
      .slice(-8)
      .map(m => ({ sender: m.sender, text: m.text }));

    setMessages(prev => [...prev, userMsg, initialAiMsg]);
    setInputQuery('');
    setAttachedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setIsTyping(true);

    let streamedAny = false;
    let accumulatedText = '';

    // 1. VITE ENVIRONMENT VARIABLE ACCESS:
    const apiKey =
      import.meta.env.VITE_GEMINI_API_KEY ||
      (typeof process !== 'undefined' ? process.env.VITE_GEMINI_API_KEY : '') ||
      '';

    if (apiKey) {
      try {
        // 2. GEMINI MODEL INITIALIZATION:
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        const SYSTEM_INSTRUCTION = `तपाईं "Banking Tayari Nepal AI साथी" हुनुहुन्छ - नेपाल राष्ट्र बैंक (NRB), राष्ट्रिय वाणिज्य बैंक (RBB), कृषि विकास बैंक (ADBL), नेपाल बैंक लिमिटेड (NBL) तथा लोकसेवा आयोगका परीक्षार्थीहरूको लागि विशेष नेपाली भाषाको उच्चस्तरीय AI शिक्षक तथा विश्लेषक।
बैंकिङ, कानुन (नेपाल राष्ट्र बैंक ऐन २०५८, बैंक तथा वित्तीय संस्था सम्बन्धी ऐन बाफिया २०७३, सम्पत्ति शुद्धीकरण निवारण ऐन), व्यवस्थापन, अर्थशास्त्र, लेखा, गणित, अङ्ग्रेजी वा सामान्य ज्ञानका प्रश्नहरूको विस्तृत, शुद्ध र परीक्षा-उपयोगी बुँदागत नेपालीमा उत्तर दिनुहोस्।
यदि तस्बिर संलग्न छ भने तस्बिरमा भएका प्रश्नहरू/नोटहरू ध्यानपूर्वक पढी (OCR) त्यसको चरणबद्ध समाधान दिनुहोस्।`;

        const fullPrompt = `${SYSTEM_INSTRUCTION}\n\nप्रयोगकर्ताको प्रश्न वा विषय:\n"${queryToSend}"`;
        const contentParts: any[] = [fullPrompt];

        if (currentImage && currentImage.base64) {
          const cleanBase64 = currentImage.base64.replace(/^data:image\/[a-zA-Z0-9.+]+;base64,/, '').trim();
          contentParts.push({
            inlineData: {
              data: cleanBase64,
              mimeType: currentImage.mimeType || 'image/jpeg'
            }
          });
        }

        let streamResult: any = null;
        try {
          streamResult = await model.generateContentStream(contentParts);
        } catch (primaryErr: any) {
          console.error('Primary model gemini-1.5-flash error:', primaryErr);
          // In case gemini-1.5-flash returns 404 in newer API version, fallback to candidate models
          const fallbackCandidates = ['gemini-3.1-flash-lite', 'gemini-3.8-flash', 'gemini-flash-latest'];
          for (const candidate of fallbackCandidates) {
            try {
              const candidateModel = genAI.getGenerativeModel({ model: candidate });
              streamResult = await candidateModel.generateContentStream(contentParts);
              break;
            } catch (cErr) {
              console.error(`Candidate model ${candidate} failed:`, cErr);
            }
          }
          if (!streamResult) {
            throw primaryErr;
          }
        }

        if (streamResult && streamResult.stream) {
          for await (const chunk of streamResult.stream) {
            const chunkText = chunk.text();
            if (chunkText) {
              streamedAny = true;
              accumulatedText += chunkText;
              setMessages(prev =>
                prev.map(m => (m.id === aiMsgId ? { ...m, text: accumulatedText } : m))
              );
            }
          }
        }
      } catch (error: any) {
        // Log console.error(error) to browser console for debugging
        console.error('Gemini API call failed:', error);
        // Do NOT throw generic "अस्थायी समस्या" fallback error if the key exists
        accumulatedText = `⚠️ Gemini API Error: ${error?.message || error || 'API कल असफल भयो'}`;
        setMessages(prev =>
          prev.map(m => (m.id === aiMsgId ? { ...m, text: accumulatedText } : m))
        );
      }
    } else {
      // If VITE_GEMINI_API_KEY is not defined in client environment, use server-side streaming proxy
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 45000);

        const response = await fetch('/api/ai-assistant-stream', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: queryToSend,
            history: chatHistory,
            image: currentImage ? { data: currentImage.base64, mimeType: currentImage.mimeType } : undefined
          }),
          signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (response.ok && response.body) {
          const reader = response.body.getReader();
          const decoder = new TextDecoder('utf-8');
          let buffer = '';
          let isDone = false;

          while (!isDone) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split('\n');
            buffer = lines.pop() || '';

            for (const line of lines) {
              const trimmedLine = line.trim();
              if (!trimmedLine.startsWith('data:')) continue;
              const dataStr = trimmedLine.replace(/^data:\s*/, '');
              if (dataStr === '[DONE]') {
                isDone = true;
                break;
              }
              try {
                const parsed = JSON.parse(dataStr);
                if (parsed.chunk) {
                  streamedAny = true;
                  accumulatedText += parsed.chunk;
                  setMessages(prev =>
                    prev.map(m => (m.id === aiMsgId ? { ...m, text: accumulatedText } : m))
                  );
                }
              } catch {
                // Ignore partial JSON
              }
            }
          }
        }
      } catch (streamErr: any) {
        console.error('Streaming connection issue:', streamErr);
      }

      if (!streamedAny || !accumulatedText.trim()) {
        try {
          const fallbackRes = await fetch('/api/ai-assistant', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              query: queryToSend,
              history: chatHistory,
              image: currentImage ? { data: currentImage.base64, mimeType: currentImage.mimeType } : undefined
            })
          });
          if (fallbackRes.ok) {
            const data = await fallbackRes.json();
            if (data.answer && data.answer.trim()) {
              accumulatedText = data.answer.trim();
              setMessages(prev =>
                prev.map(m => (m.id === aiMsgId ? { ...m, text: accumulatedText } : m))
              );
            }
          }
        } catch (fbErr: any) {
          console.error('Fallback API error:', fbErr);
        }
      }
    }

    setIsTyping(false);
  };

  const handleCopyText = async (id: string, text: string) => {
    const success = await safeCopyToClipboard(text);
    if (success) {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const handleStartAiQuiz = () => {
    setIsAiModalOpen(false);
    const quizSet: QuizSet = {
      id: `ai-quiz-${Date.now()}`,
      title: 'AI साथी - विशेष अभ्यास क्विज',
      description: 'भर्खरै छलफल गरिएका विषयहरूमा आधारित १० वटा अभ्यास प्रश्नहरू',
      category: 'Banking',
      difficulty: 'Medium',
      mode: 'practice',
      timeLimitMinutes: 5,
      questions: MOCK_QUESTIONS.slice(0, 10),
      badge: 'AI Quiz'
    };
    startQuiz(quizSet);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full h-[85vh] border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <header className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-amber-500/10 dark:bg-amber-950/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-slate-950 font-bold shadow-md">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-black text-slate-900 dark:text-white text-base sm:text-lg">
                  AI साथी (AI Study Assistant)
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-800 dark:text-amber-300 text-[10px] font-bold">
                  Gemini Flash AI
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                नेपाली भाषामा तत्काल परीक्षा सहायता तथा टिपोट
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsAiModalOpen(false)}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-white/40 dark:hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </header>

        {/* Chat Stream View */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'ai' && (
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-600 flex items-center justify-center shrink-0 mt-1">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] sm:max-w-[75%] p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-emerald-600 text-white font-medium rounded-br-none whitespace-pre-line'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-bl-none border border-slate-200/60 dark:border-slate-700/60'
                }`}
              >
                {msg.image && (
                  <div className="mb-2">
                    <img
                      src={msg.image}
                      alt="संलग्न तस्बिर"
                      className="max-h-52 max-w-full rounded-xl border border-white/20 object-contain shadow-sm bg-black/10"
                    />
                  </div>
                )}

                {msg.sender === 'ai' ? (
                  <MarkdownRenderer content={msg.text} />
                ) : (
                  msg.text
                )}

                {msg.sender === 'ai' && (
                  <div className="pt-3 mt-3 border-t border-slate-200 dark:border-slate-700/60 flex items-center justify-between text-[11px] text-slate-500">
                    <button
                      onClick={() => handleCopyText(msg.id, msg.text)}
                      className="flex items-center gap-1 hover:text-emerald-600 transition"
                    >
                      {copiedId === msg.id ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedId === msg.id ? 'कपी भयो' : 'कपी गर्नुहोस्'}</span>
                    </button>

                    <button
                      onClick={handleStartAiQuiz}
                      className="flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      <CheckSquare className="w-3.5 h-3.5" />
                      <span>यसबाट Quiz खेल्नुहोस्</span>
                    </button>
                  </div>
                )}
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-1 font-bold text-xs">
                  U
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-slate-400 p-2">
              <Sparkles className="w-3.5 h-3.5 animate-spin text-amber-500" />
              <span>AI साथीले नेपालीमा उत्तर तयार गर्दैछ...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Prompt Chips */}
        <div className="p-3 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-200 dark:border-slate-800 overflow-x-auto whitespace-nowrap flex gap-2 scrollbar-none">
          {samplePrompts.map((p, pIdx) => (
            <button
              key={pIdx}
              onClick={() => handleSendPrompt(p)}
              className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-[11px] font-medium hover:border-amber-500 transition shrink-0"
            >
              💡 {p}
            </button>
          ))}
        </div>

        {/* Attached image preview bar */}
        {attachedImage && (
          <div className="px-4 py-2 bg-slate-50 dark:bg-slate-800/80 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <img
                  src={attachedImage.previewUrl}
                  alt="Attached"
                  className="w-10 h-10 object-cover rounded-lg border border-slate-300 dark:border-slate-700 shadow-sm"
                />
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-rose-500 hover:bg-rose-600 text-white rounded-full flex items-center justify-center text-[10px] shadow"
                  title="तस्बिर हटाउनुहोस्"
                  aria-label="तस्बिर हटाउनुहोस्"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="text-xs text-slate-700 dark:text-slate-200 truncate max-w-[200px] sm:max-w-xs">
                <p className="font-semibold truncate">{attachedImage.name}</p>
                <p className="text-[10px] text-amber-600 dark:text-amber-400">तस्बिर संलग्न गरियो (OCR र चरणबद्ध समाधान)</p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleRemoveImage}
              className="text-xs text-rose-500 hover:text-rose-600 font-medium px-2 py-1"
            >
              हटाउनुहोस्
            </button>
          </div>
        )}

        {/* Chat Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (inputQuery.trim() || attachedImage) {
              handleSendPrompt(inputQuery);
            }
          }}
          className="p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center gap-2"
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageSelect}
            accept="image/png,image/jpeg,image/jpg,image/webp"
            className="hidden"
            id="ai-assistant-image-input"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={isTyping}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 hover:border-amber-500 transition disabled:opacity-40"
            title="तस्बिर संलग्न गर्नुहोस् (लोकसेवा प्रश्न, हिसाब वा नोट)"
            aria-label="तस्बिर संलग्न गर्नुहोस्"
          >
            <Paperclip className="w-5 h-5" />
          </button>
          <input
            id="ai-assistant-input"
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            placeholder={attachedImage ? "यस तस्बिर सम्बन्धी कुनै विशेष निर्देशन वा प्रश्न लेख्नुहोस्..." : "आफ्नो प्रश्न यहाँ सोध्नुहोस्..."}
            aria-label="आफ्नो प्रश्न यहाँ सोध्नुहोस्..."
            className="flex-1 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-amber-500"
          />
          <button
            id="ai-assistant-send-btn"
            type="submit"
            disabled={(!inputQuery.trim() && !attachedImage) || isTyping}
            className="p-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 hover:from-amber-600 hover:to-orange-600 transition disabled:opacity-40 cursor-pointer"
            title="पठाउनुहोस्"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>

      </div>
    </div>
  );
};
