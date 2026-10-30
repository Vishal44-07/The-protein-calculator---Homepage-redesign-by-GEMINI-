import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/faqs';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-16 scroll-mt-20 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Evidence-Based Clarifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Common myths, physiological questions, and nutritional guidelines explained with clinical evidence.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-white/[0.08] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02]"
                >
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-lg glass-panel-subtle flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-emerald-400' : 'text-slate-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/[0.04]">
                    <p className="mb-3">{faq.answer}</p>
                    {faq.citation && (
                      <div className="flex items-center gap-2 pt-2 text-[11px] font-mono text-emerald-400/90 border-t border-white/[0.04]">
                        <span>Reference:</span>
                        <span>{faq.citation}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
