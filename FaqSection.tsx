import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight, PhoneCall } from 'lucide-react';
import { FAQ_LIST, COMPANY_INFO } from '../data/companyData';

interface FaqSectionProps {
  onOpenQuote: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenQuote }) => {
  // Default open the first FAQ
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0b2c63] text-xs font-extrabold uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5 text-red-600" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b2c63] tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-2">
            Clear, honest answers about our painting processes, pricing, preparation, and project timelines.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 text-left">
          {FAQ_LIST.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#0b2c63] shadow-md'
                    : 'bg-white/80 border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-5 px-6 sm:px-7 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base sm:text-lg font-bold transition-colors ${
                    isOpen ? 'text-[#0b2c63]' : 'text-slate-800 hover:text-red-600'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-red-50 text-red-600 rotate-180' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Strategic CTA after FAQ - Strictly Mandated */}
        <div className="mt-14 p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-[#0b2c63]">
              Still have questions about your property?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Our estimating team is ready to answer questions or walk through your space.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#dc2626] to-[#b91c1c] hover:from-[#ef4444] hover:to-[#dc2626] text-white font-extrabold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <span>GET A FREE QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-[#0b2c63] text-[#0b2c63] hover:bg-blue-50 font-bold text-xs uppercase tracking-wider transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-red-600" />
              <span>Call Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
