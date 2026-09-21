import React from 'react';
import { Phone, ArrowRight, ShieldCheck, CheckCircle, Award, Sparkles, Star } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroProps {
  onOpenQuote: () => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onOpenBooking }) => {
  return (
    <section id="home" className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background Photography with Sophisticated Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          alt="Freshly painted luxury residential home by ProBrush Premium Painting"
          className="w-full h-full object-cover object-center opacity-40 scale-102 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Deep brand gradient: deep royal blue to slate noir with subtle red atmospheric glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071a3d]/95 via-[#0b2c63]/85 to-slate-950/80" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-28 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy & CTAs */}
          <div className="lg:col-span-8 space-y-6 text-left">
            
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-400/30 text-blue-200 text-xs sm:text-sm font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>PROBRUSH PREMIUM PAINTING</span>
              <span className="text-blue-300/50">•</span>
              <span className="text-amber-300 font-medium">“Premium Quality that you can Trust!”</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
              Premium Painting. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-red-400">
                Professional Results.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-200 font-normal max-w-2xl leading-relaxed">
              Transform your space with quality painting and professional surface-cleaning services you can trust.
            </p>

            {/* Primary & Secondary CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-extrabold text-white bg-gradient-to-r from-[#dc2626] to-[#b91c1c] hover:from-[#ef4444] hover:to-[#dc2626] shadow-xl hover:shadow-red-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer uppercase tracking-wider"
              >
                <span>GET A FREE QUOTE</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-extrabold text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-xs transition-all transform hover:-translate-y-0.5 cursor-pointer uppercase tracking-wider"
              >
                <Phone className="w-5 h-5 text-red-400 fill-red-400" />
                <span>CALL NOW</span>
              </a>
            </div>

            {/* Small Trust Line - Exact Wording Mandated */}
            <div className="pt-2">
              <p className="text-sm font-semibold tracking-wider text-slate-300 uppercase flex items-center gap-2 flex-wrap">
                <span className="text-red-400 font-bold">★</span>
                <span>Professional</span>
                <span className="text-blue-400">•</span>
                <span>Reliable</span>
                <span className="text-blue-400">•</span>
                <span>Quality-Focused</span>
              </p>
            </div>

            {/* Core Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-white/15 max-w-2xl">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-200">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-200">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Free Written Estimates</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-200 col-span-2 sm:col-span-1">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Clean Work Guarantee</span>
              </div>
            </div>
          </div>

          {/* Quick Lead Estimate Teaser Card */}
          <div className="lg:col-span-4">
            <div className="bg-white/95 backdrop-blur-md text-slate-800 rounded-2xl p-6 shadow-2xl border border-white/40 space-y-5">
              <div className="border-b border-slate-200 pb-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black tracking-widest text-[#0b2c63] uppercase">Fast Response</span>
                  <div className="flex items-center text-amber-500 text-xs font-bold gap-0.5">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>Top-Rated Contractor</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#0b2c63] mt-1">Get Your Free Painting Estimate</h3>
                <p className="text-xs text-slate-600">Zero obligation • Transparent, detailed pricing</p>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-[#0b2c63] font-bold flex items-center justify-center shrink-0 text-xs">1</div>
                  <p className="text-slate-700 leading-snug"><strong className="text-slate-900">Tell us your project:</strong> Interior, exterior, surface cleaning or commercial.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-[#0b2c63] font-bold flex items-center justify-center shrink-0 text-xs">2</div>
                  <p className="text-slate-700 leading-snug"><strong className="text-slate-900">Photo or On-Site Walkthrough:</strong> Upload photos or book a free in-person consult.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-[#0b2c63] font-bold flex items-center justify-center shrink-0 text-xs">3</div>
                  <p className="text-slate-700 leading-snug"><strong className="text-slate-900">Guaranteed Quote:</strong> Comprehensive written plan with locked-in pricing.</p>
                </div>
              </div>

              <div className="pt-2 space-y-2">
                <button
                  onClick={onOpenQuote}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#dc2626] to-[#b91c1c] text-white font-black text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>START FREE ESTIMATE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 px-3 rounded-lg border border-slate-300 hover:border-[#0b2c63] text-slate-700 hover:text-[#0b2c63] font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Schedule In-Person Consultation</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Your information is strictly confidential</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Wave Transition to Clean White Section */}
      <div className="relative h-6 sm:h-10 bg-white">
        <svg
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-11 sm:-top-11 left-0 w-full h-12 text-white fill-current preserve-3d"
        >
          <path d="M0 48H1440V16C1200 42 960 48 720 32C480 16 240 38 0 24V48Z" />
        </svg>
      </div>
    </section>
  );
};
