import React from 'react';
import { 
  ShieldCheck, 
  CheckCircle, 
  Paintbrush, 
  Sparkles, 
  Eye, 
  HeartHandshake, 
  Clock, 
  ArrowRight 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface AboutSectionProps {
  onOpenQuote: () => void;
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuote, onOpenBooking }) => {
  const coreValues = [
    {
      title: "Uncompromising Quality",
      description: "We utilize top-tier commercial and architectural coatings formulated for longevity, deep pigmentation, and high cleanability.",
      icon: Paintbrush,
    },
    {
      title: "Strict Professionalism",
      description: "From punctual morning arrivals to uniformed crews and clear written estimates, we respect your home and your schedule.",
      icon: ShieldCheck,
    },
    {
      title: "Dependable Reliability",
      description: "We commit to locked-in dates and clear milestones. When we schedule your project, that time is reserved exclusively for you.",
      icon: Clock,
    },
    {
      title: "Meticulous Attention to Detail",
      description: "Sharp cut-ins, perfectly masked floorboards, sanded imperfections, and thorough surface preparation before topcoating.",
      icon: Eye,
    },
    {
      title: "Customer Satisfaction",
      description: "We stand firmly behind our work. Our projects conclude with a complete client walkthrough to ensure every detail meets your expectations.",
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left Story / Right Image & Badges */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0b2c63] text-xs font-extrabold uppercase tracking-widest">
              <span>Local Craftsmanship</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b2c63] tracking-tight">
              About ProBrush Premium
            </h2>
            <div className="w-16 h-1 bg-red-600 rounded-full" />

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              ProBrush Premium Painting is a quality-focused local painting and surface-cleaning company serving residential homeowners and commercial property managers throughout our community.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We founded ProBrush on a straightforward philosophy: <strong className="text-slate-900">exceptional paintwork is built on thorough preparation, premium materials, and transparent client communication.</strong> We treat every property with the same care, cleanliness, and precision we would expect in our own spaces.
            </p>

            {/* Core Pillars List */}
            <div className="space-y-4 pt-2">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-500">
                Our Core Operating Commitments
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {coreValues.map((val, idx) => {
                  const Icon = val.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-red-600" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#0b2c63]">{val.title}</h4>
                        <p className="text-[11px] text-slate-600 leading-snug mt-0.5">{val.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#dc2626] to-[#b91c1c] hover:from-[#ef4444] hover:to-[#dc2626] text-white font-extrabold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>GET A FREE QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 hover:border-[#0b2c63] text-slate-700 hover:text-[#0b2c63] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer bg-white"
              >
                <span>Book Free Consultation</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1000&q=80"
                alt="ProBrush Professional Painter preparing wall surfaces"
                className="w-full h-80 sm:h-96 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b2c63]/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-xs font-black uppercase tracking-wider text-red-400">
                  Surface Prep First
                </span>
                <h4 className="text-lg font-bold">The Foundation of Long-Lasting Beauty</h4>
                <p className="text-xs text-slate-200">
                  Every project receives detailed cleaning, sanding, caulking, and priming to guarantee flawless adhesion.
                </p>
              </div>
            </div>

            {/* Trust Quote Box */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-red-600" />
              </div>
              <div className="space-y-1 text-left">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Our Promise To Every Customer
                </h4>
                <p className="text-xs text-slate-600 italic leading-relaxed">
                  “We don't cut corners on preparation or materials. Our goal is to leave every home and commercial facility cleaner and more beautiful than we found it.”
                </p>
                <p className="text-[11px] font-bold text-[#0b2c63]">— The ProBrush Painting Crew</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
