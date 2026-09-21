import React from 'react';
import { 
  Award, 
  Paintbrush, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  ThumbsUp, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { WHY_CHOOSE_US_ITEMS, COMPANY_INFO } from '../data/companyData';

interface WhyChooseUsProps {
  onOpenQuote: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenQuote }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-6 h-6 text-red-600" />;
      case 'Brush':
        return <Paintbrush className="w-6 h-6 text-red-600" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-red-600" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-red-600" />;
      case 'Sparkle':
        return <Sparkles className="w-6 h-6 text-red-600" />;
      case 'ThumbsUp':
        return <ThumbsUp className="w-6 h-6 text-red-600" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-red-600" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-extrabold uppercase tracking-widest">
            <span>The ProBrush Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b2c63] tracking-tight">
            Why Choose ProBrush Premium?
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-2">
            We hold ourselves to uncompromising standards of surface preparation, master craftsmanship, and client respect on every square foot we coat.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US_ITEMS.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-blue-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center group-hover:bg-red-50 group-hover:border-red-200 transition-colors">
                  {getIcon(item.icon)}
                </div>
                <h3 className="text-xl font-bold text-[#0b2c63] group-hover:text-red-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-[#0b2c63]">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                <span>Verified ProBrush Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Credentials Bar */}
        <div className="mt-14 p-6 rounded-xl bg-slate-100/80 border border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {COMPANY_INFO.credentials.map((cred, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-2">
              <ShieldCheck className="w-5 h-5 text-red-600 mb-1.5" />
              <span className="text-xs sm:text-sm font-bold text-slate-800">{cred}</span>
            </div>
          ))}
        </div>

        {/* Strategic CTA after Why Choose Us - Strictly Mandated */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#dc2626] to-[#b91c1c] hover:from-[#ef4444] hover:to-[#dc2626] text-white font-extrabold text-sm uppercase tracking-wider shadow-lg hover:shadow-red-600/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>GET A FREE QUOTE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-xs text-slate-500 mt-2.5">
            Zero pressure • Prompt scheduling • Free detailed consultation
          </p>
        </div>

      </div>
    </section>
  );
};
