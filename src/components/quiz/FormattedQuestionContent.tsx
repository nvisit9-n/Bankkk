import React from 'react';

export interface FormattedQuestionContentProps {
  questionNepali: string;
  questionEnglish?: string;
  className?: string;
  theme?: 'dark' | 'light' | 'auto';
  fontSize?: 'base' | 'sm';
}

export interface ParsedMatch {
  type: 'match';
  prompt: string;
  group1: { title: string; subtitle?: string; items: { prefix: string; text: string }[] };
  group2: { title: string; subtitle?: string; items: { prefix: string; text: string }[] };
}

export interface ParsedStatement {
  type: 'statement';
  prompt: string;
  statements: { label: string; text: string; isReason?: boolean }[];
  concludingPrompt?: string;
}

export interface ParsedPlain {
  type: 'plain';
  text: string;
}

export type ParsedQuestion = ParsedMatch | ParsedStatement | ParsedPlain;

/**
 * Splits merged bilingual question text into separate Nepali and English strings
 */
export function splitBilingualQuestion(
  rawQuestion: string,
  existingEnglish?: string
): { nepali: string; english?: string } {
  if (!rawQuestion) return { nepali: '' };

  if (existingEnglish && existingEnglish.trim()) {
    return { nepali: rawQuestion.trim(), english: existingEnglish.trim() };
  }

  const trimmed = rawQuestion.trim();

  // Pattern A: "1. English question...\n(नेपाली प्रश्न...)"
  const matchParenNep = trimmed.match(/^([\s\S]*?)\n*\(\s*([\u0900-\u097F][\s\S]*?)\s*\)$/);
  if (matchParenNep) {
    const p1 = matchParenNep[1].trim();
    const p2 = matchParenNep[2].trim();
    const p1HasDevanagari = /[\u0900-\u097F]/.test(p1);
    if (!p1HasDevanagari) {
      return { nepali: p2, english: p1.replace(/^\d+[\.\:\)]\s*/, '') };
    } else {
      return { nepali: p1, english: p2.replace(/^\d+[\.\:\)]\s*/, '') };
    }
  }

  // Pattern B: "नेपाली प्रश्न...\n(1. English question...)"
  const matchParenEng = trimmed.match(/^([\s\S]*?)\n*\(\s*([a-zA-Z\d][\s\S]*?)\s*\)$/);
  if (matchParenEng) {
    const p1 = matchParenEng[1].trim();
    const p2 = matchParenEng[2].trim();
    const p1HasDevanagari = /[\u0900-\u097F]/.test(p1);
    const p2HasDevanagari = /[\u0900-\u097F]/.test(p2);
    if (p1HasDevanagari && !p2HasDevanagari) {
      return { nepali: p1, english: p2.replace(/^\d+[\.\:\)]\s*/, '') };
    } else if (!p1HasDevanagari && p2HasDevanagari) {
      return { nepali: p2, english: p1.replace(/^\d+[\.\:\)]\s*/, '') };
    }
  }

  return { nepali: trimmed, english: existingEnglish };
}

/**
 * Extracts item prefix (1., a., १., क., i.) and clean text
 */
function extractPrefixAndText(rawItem: string): { prefix: string; text: string } {
  // Strip trailing set indicators e.g. (सेट १२) or (Set 12)
  const trimmed = rawItem.trim().replace(/\s*\([^\)]*सेट[^\)]*\)$/i, '').replace(/\s*\([^\)]*set[^\)]*\)$/i, '');

  const m = trimmed.match(/^([१२३४५६७८९०\d]+|[कखगघङचछजझञa-zA-Z]|[ivxIVX]+)\s*[\.\:\-\)\–\—]\s*(.*)$/);
  if (m) {
    return { prefix: `${m[1]}.`, text: m[2].trim() };
  }

  const m2 = trimmed.match(/^\(([१२३४५६७८९०\d]+|[कखगघङचछजझञa-zA-Z]|[ivxIVX]+)\)\s*(.*)$/);
  if (m2) {
    return { prefix: `${m2[1]}.`, text: m2[2].trim() };
  }

  return { prefix: '•', text: trimmed };
}

/**
 * Parses question strings into structured representations for:
 * 1. Match the following (समूह I / समूह II 2-column tables)
 * 2. Multi-statement and Cause-Reason questions (भनाइ १ / भनाइ २ / अभिकथन / कारण)
 * 3. Standard plain questions
 */
export function parseQuestionContent(text: string): ParsedQuestion {
  if (!text || !text.trim()) {
    return { type: 'plain', text: '' };
  }

  const cleanText = text.trim();

  // 1. MATCH THE FOLLOWING PARSER
  // Looks for markers like "समूह I" / "Group I" and "समूह II" / "Group II"
  const g1Matches = [...cleanText.matchAll(/(?:^|\n|[:\s])(समूह\s*(?:I|१|A|क|1)|Group\s*(?:I|1|A))\s*(?:\([^\)]+\))?\s*[:\-]/gi)];
  const g2Matches = [...cleanText.matchAll(/(?:^|\n|[:\s])(समूह\s*(?:II|२|B|ख|2)|Group\s*(?:II|2|B))\s*(?:\([^\)]+\))?\s*[:\-]/gi)];

  if (g1Matches.length > 0 && g2Matches.length > 0) {
    const g1Match = g1Matches[g1Matches.length - 1];
    const g2Match = g2Matches[g2Matches.length - 1];

    if (g1Match.index !== undefined && g2Match.index !== undefined && g1Match.index < g2Match.index) {
      const g1Idx = g1Match.index;
      const g2Idx = g2Match.index;

      let prompt = cleanText.substring(0, g1Idx).trim();
      prompt = prompt.replace(/^\d+[\.\:\)]\s*/, '').trim();
      if (prompt && !prompt.endsWith(':') && !prompt.endsWith('।') && !prompt.endsWith('?')) {
        prompt += ':';
      }

      const g1Block = cleanText.substring(g1Idx, g2Idx).trim();
      const g2Block = cleanText.substring(g2Idx).trim();

      // Extract subtitles if found in parentheses, e.g. समूह I (हिमाल)
      const extractGroupDetails = (block: string, defaultTitle: string, defaultSub?: string) => {
        const colonIdx = block.indexOf(':');
        if (colonIdx === -1) return { title: defaultTitle, subtitle: defaultSub, items: [] };

        const rawHeader = block.substring(0, colonIdx).trim().replace(/^[:\s,]+/, '');
        const content = block.substring(colonIdx + 1).trim();

        let title = defaultTitle;
        let subtitle = defaultSub;

        const subMatch = rawHeader.match(/\(([^\)]+)\)/);
        if (subMatch) {
          subtitle = subMatch[1].trim();
        }

        // Split items by newline or comma followed by item identifier
        const rawItems = content
          .split(/(?:,|\n)\s*(?=(?:[१२३४५६७८९०\d]+|[कखगघङचछजझञa-zA-Z]|[ivxIVX]+)\s*[\.\:\-\)\–\—]|\([१२३४५६७८९०\d]+|[कखगघङचछजझञa-zA-Z]|[ivxIVX]+\))/)
          .map(s => s.trim())
          .filter(Boolean);

        const items = rawItems.map(extractPrefixAndText);
        return { title, subtitle, items };
      };

      const isNepali = /[\u0900-\u097F]/.test(cleanText);
      const group1 = extractGroupDetails(
        g1Block, 
        isNepali ? 'समूह I' : 'Group I', 
        isNepali ? 'Group I' : undefined
      );
      const group2 = extractGroupDetails(
        g2Block, 
        isNepali ? 'समूह II' : 'Group II', 
        isNepali ? 'Group II' : undefined
      );

      if (group1.items.length > 0 || group2.items.length > 0) {
        return {
          type: 'match',
          prompt,
          group1,
          group2,
        };
      }
    }
  }

  // 2. MULTI-STATEMENT & CAUSE-REASON PARSER
  // Looks for "भनाइ १:", "भनाई १:", "कथन १:", "Statement 1:", "अभिकथन:", "कारण:", etc.
  const stmtStartRegex = /(?:^|\n|[:\s])((?:भनाइ|भनाई|कथन|Statement)\s*(?:[१२३४५६७८९०\dIVXivx]+|[कखगघa-zA-Z])|\([१२३४५६७८९०\dIVXivx]+\)|अभिकथन(?:\s*\([^\)]+\))?|दाबी(?:\s*\([^\)]+\))?|Assertion(?:\s*\([^\)]+\))?|कारण(?:\s*\([^\)]+\))?|Reason(?:\s*\([^\)]+\))?)\s*[:\.]/i;
  const stmtMatch = cleanText.match(stmtStartRegex);

  if (stmtMatch && stmtMatch.index !== undefined) {
    const firstIdx = cleanText.indexOf(stmtMatch[0]);
    let prompt = cleanText.substring(0, firstIdx).trim();
    prompt = prompt.replace(/^\d+[\.\:\)]\s*/, '').trim();
    if (prompt && !prompt.endsWith(':') && !prompt.endsWith('।') && !prompt.endsWith('?')) {
      prompt += ':';
    }

    const stmtsBody = cleanText.substring(firstIdx).trim();
    const splitter = /(?=(?:^|\n|[\s;])(?:(?:भनाइ|भनाई|कथन|Statement)\s*(?:[१२३४५६८९०\dIVXivx]+|[कखगघa-zA-Z])|\([१२३४५६८९०\dIVXivx]+\)|अभिकथन(?:\s*\([^\)]+\))?|दाबी(?:\s*\([^\)]+\))?|Assertion(?:\s*\([^\)]+\))?|कारण(?:\s*\([^\)]+\))?|Reason(?:\s*\([^\)]+\))?)\s*[:\.])/i;
    const parts = stmtsBody.split(splitter).map(s => s.trim()).filter(Boolean);

    let concludingPrompt = '';
    const statements: { label: string; text: string; isReason?: boolean }[] = [];

    parts.forEach((part) => {
      const colonIdx = part.indexOf(':');
      if (colonIdx !== -1) {
        const label = part.substring(0, colonIdx).trim().replace(/^[\n\s,]+/, '');
        let body = part.substring(colonIdx + 1).trim();

        // Check for closing question at the end of the last statement
        const closingMatch = body.match(/(?:\n|^)(कुन\s*(?:भनाइ|कथन|विकल्प)\s*(?:सही|गलत|सत्य|ठीक|बेठिक)[^\n]*|उपर्युक्त\s*(?:कथन|भनाइ)[^\n]*|Which\s*(?:statement|of\s*the\s*above)[^\n]*)$/i);
        if (closingMatch && closingMatch.index !== undefined) {
          concludingPrompt = closingMatch[1].trim();
          body = body.substring(0, closingMatch.index).trim();
        }

        // Clean trailing set markers
        body = body.replace(/\s*\([^\)]*सेट[^\)]*\)$/i, '').replace(/\s*\([^\)]*set[^\)]*\)$/i, '');

        const isReason = label.includes('कारण') || label.toLowerCase().includes('reason');
        statements.push({ label, text: body, isReason });
      }
    });

    if (statements.length > 0) {
      return {
        type: 'statement',
        prompt,
        statements,
        concludingPrompt: concludingPrompt || undefined,
      };
    }
  }

  // 3. PLAIN TEXT FALLBACK
  const cleanPlain = cleanText.replace(/^\d+[\.\:\)]\s*/, '').trim();
  return { type: 'plain', text: cleanPlain };
}

/**
 * Render parsed question block for either Nepali or English
 */
const RenderParsedBlock: React.FC<{
  parsed: ParsedQuestion;
  isEnglish?: boolean;
  theme: 'dark' | 'light' | 'auto';
  fontSize: 'base' | 'sm';
}> = ({ parsed, isEnglish = false, theme, fontSize }) => {
  const isDark = theme === 'dark';

  // 1. MATCH THE FOLLOWING: MANDATORY 2-COLUMN TABLE
  if (parsed.type === 'match') {
    const maxRows = Math.max(parsed.group1.items.length, parsed.group2.items.length);
    const rows = Array.from({ length: maxRows }).map((_, i) => ({
      col1: parsed.group1.items[i] || { prefix: '', text: '' },
      col2: parsed.group2.items[i] || { prefix: '', text: '' },
    }));

    const col1Header = parsed.group1.subtitle 
      ? `${parsed.group1.title} (${parsed.group1.subtitle})` 
      : `${parsed.group1.title} (Group I)`;
    const col2Header = parsed.group2.subtitle 
      ? `${parsed.group2.title} (${parsed.group2.subtitle})` 
      : `${parsed.group2.title} (Group II)`;

    return (
      <div className="space-y-3 w-full">
        {parsed.prompt && (
          <p className={`${fontSize === 'base' ? 'text-base sm:text-lg' : 'text-sm sm:text-base'} font-bold leading-relaxed font-mukta ${
            isEnglish
              ? (isDark ? 'text-slate-300' : 'text-slate-700')
              : (isDark ? 'text-slate-100' : 'text-slate-900')
          }`}>
            {parsed.prompt}
          </p>
        )}

        {/* 2-Column Side-by-Side Clean Vertical Table */}
        <div className={`overflow-hidden rounded-2xl border ${
          isDark 
            ? 'border-slate-700/90 bg-slate-950/70 shadow-lg' 
            : 'border-slate-300 bg-white shadow-sm'
        } my-2.5 w-full`}>
          <table className="w-full text-left border-collapse table-fixed">
            <thead>
              <tr className={`border-b ${
                isDark 
                  ? 'bg-slate-800/90 border-slate-700/90 text-slate-100' 
                  : 'bg-slate-100 border-slate-300 text-slate-800'
              } text-xs sm:text-sm font-bold font-mukta`}>
                <th className={`py-3 px-3.5 sm:px-4 border-r ${
                  isDark ? 'border-slate-700/90' : 'border-slate-300'
                } w-1/2`}>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shrink-0" />
                    <span className="truncate">{col1Header}</span>
                  </div>
                </th>
                <th className="py-3 px-3.5 sm:px-4 w-1/2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0" />
                    <span className="truncate">{col2Header}</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className={`divide-y ${isDark ? 'divide-slate-800/90' : 'divide-slate-200'} text-xs sm:text-base font-mukta`}>
              {rows.map((row, idx) => (
                <tr 
                  key={idx} 
                  className={idx % 2 === 1 ? (isDark ? 'bg-slate-900/40' : 'bg-slate-50/70') : 'bg-transparent'}
                >
                  <td className={`py-2.5 sm:py-3.5 px-3 sm:px-4 border-r ${
                    isDark ? 'border-slate-800/90 text-slate-100' : 'border-slate-200 text-slate-900'
                  } align-top`}>
                    <div className="flex items-start gap-2">
                      {row.col1.prefix && (
                        <span className="inline-flex items-center justify-center min-w-[26px] h-6 px-1.5 rounded-md bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-bold text-xs shrink-0 font-mono mt-0.5">
                          {row.col1.prefix}
                        </span>
                      )}
                      <span className="text-sm sm:text-base leading-relaxed font-mukta font-medium">
                        {row.col1.text}
                      </span>
                    </div>
                  </td>
                  <td className={`py-2.5 sm:py-3.5 px-3 sm:px-4 ${
                    isDark ? 'text-slate-100' : 'text-slate-900'
                  } align-top`}>
                    <div className="flex items-start gap-2">
                      {row.col2.prefix && (
                        <span className="inline-flex items-center justify-center min-w-[26px] h-6 px-1.5 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold text-xs shrink-0 font-mono mt-0.5">
                          {row.col2.prefix}
                        </span>
                      )}
                      <span className="text-sm sm:text-base leading-relaxed font-mukta font-medium">
                        {row.col2.text}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // 2. MULTI-STATEMENT & CAUSE-REASON: STRICT LINE-BY-LINE BREAKS
  if (parsed.type === 'statement') {
    return (
      <div className="space-y-3 w-full">
        {parsed.prompt && (
          <p className={`${fontSize === 'base' ? 'text-base sm:text-lg' : 'text-sm sm:text-base'} font-bold leading-relaxed font-mukta ${
            isEnglish
              ? (isDark ? 'text-slate-300' : 'text-slate-700')
              : (isDark ? 'text-slate-100' : 'text-slate-900')
          }`}>
            {parsed.prompt}
          </p>
        )}

        {/* Vertical Bulleted Statement Cards with Clear Line Breaks */}
        <div className="space-y-2.5 my-2.5 w-full">
          {parsed.statements.map((stmt, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-3 p-3 sm:p-3.5 rounded-xl border transition-all ${
                isDark
                  ? 'bg-slate-800/70 border-slate-700/80 text-slate-100 hover:border-slate-600'
                  : 'bg-slate-50 border-slate-200 text-slate-900 hover:border-slate-300 shadow-sm'
              }`}
            >
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold shrink-0 font-mukta tracking-wide mt-0.5 ${
                stmt.isReason
                  ? (isDark ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'bg-amber-100 text-amber-800 border border-amber-200')
                  : (isDark ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'bg-cyan-100 text-cyan-800 border border-cyan-200')
              }`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current inline-block" />
                <span>{stmt.label}</span>
              </span>
              <p className={`text-base sm:text-[16.5px] leading-relaxed font-mukta flex-1 font-medium ${
                isDark ? 'text-slate-100' : 'text-slate-900'
              }`}>
                {stmt.text}
              </p>
            </div>
          ))}
        </div>

        {/* Concluding Prompt e.g. कुन भनाइ सही छ/छन्? */}
        {parsed.concludingPrompt && (
          <div className={`mt-2 px-1 text-sm sm:text-base font-semibold italic flex items-center gap-1.5 ${
            isDark ? 'text-cyan-300' : 'text-cyan-700'
          }`}>
            <span className="text-base not-italic">👉</span>
            <span>{parsed.concludingPrompt}</span>
          </div>
        )}
      </div>
    );
  }

  // 3. STANDARD PLAIN QUESTION
  return (
    <p className={`${fontSize === 'base' ? 'text-base sm:text-lg' : 'text-sm sm:text-base'} font-bold leading-relaxed font-mukta ${
      isEnglish
        ? (isDark ? 'text-slate-300 italic' : 'text-slate-700 italic')
        : (isDark ? 'text-slate-100' : 'text-slate-900')
    }`}>
      {parsed.text}
    </p>
  );
};

export const FormattedQuestionContent: React.FC<FormattedQuestionContentProps> = ({
  questionNepali,
  questionEnglish,
  className = '',
  theme = 'dark',
  fontSize = 'base',
}) => {
  // Always decouple any embedded bilingual text first so English and Nepali never merge
  const { nepali: cleanNepali, english: extractedEnglish } = React.useMemo(() => {
    return splitBilingualQuestion(questionNepali, questionEnglish);
  }, [questionNepali, questionEnglish]);

  const parsedNepali = React.useMemo(() => parseQuestionContent(cleanNepali), [cleanNepali]);
  const parsedEnglish = React.useMemo(
    () => (extractedEnglish ? parseQuestionContent(extractedEnglish) : null),
    [extractedEnglish]
  );

  const isDark = theme === 'dark';

  return (
    <div className={`formatted-mcq-content w-full ${className}`}>
      {/* Primary Nepali Question Block */}
      <RenderParsedBlock 
        parsed={parsedNepali} 
        isEnglish={false} 
        theme={theme} 
        fontSize={fontSize} 
      />

      {/* Secondary English Translation Block */}
      {parsedEnglish && (
        <div className={`mt-4 pt-3.5 border-t ${
          isDark ? 'border-slate-800/90' : 'border-slate-200'
        }`}>
          <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-slate-400 dark:text-slate-400 tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" />
            <span className="font-sans uppercase">English / अङ्ग्रेजी रूपान्तरण:</span>
          </div>
          <RenderParsedBlock 
            parsed={parsedEnglish} 
            isEnglish={true} 
            theme={theme} 
            fontSize={fontSize === 'base' ? 'sm' : 'sm'} 
          />
        </div>
      )}
    </div>
  );
};
