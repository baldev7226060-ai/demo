import React, { useState } from 'react';
import { WORK_COMPARISONS } from '../data/companyData';
import { WorkComparisonItem } from '../types';
import { ArrowRight, Sparkles, SlidersHorizontal, Check } from 'lucide-react';

interface BeforeAfterSectionProps {
  onOpenQuote: () => void;
}

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({ onOpenQuote }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  // State to track slider positions per item (0 to 100 percent)
  const [sliderPositions, setSliderPositions] = useState<{ [id: string]: number }>({
    'interior-living-room': 50,
    'exterior-residential-home': 50,
    'commercial-corporate-space': 50,
    'surface-cleaning-patio': 50,
    'detailed-woodwork-trim': 50,
  });

  const categories = ['All', 'Interior', 'Exterior', 'Commercial', 'Cleaning', 'Detailed Work'];

  const filteredItems = activeCategory === 'All'
    ? WORK_COMPARISONS
    : WORK_COMPARISONS.filter((item) => item.category === activeCategory);

  const handleSliderChange = (id: string, value: number) => {
    setSliderPositions((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <section id="our-work" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-500/30 text-blue-300 text-xs font-extrabold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-red-500" />
            <span>Proven Transformations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Our Work: Before & After
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed pt-2">
            Slide horizontally across any project to reveal the real transformation delivered by ProBrush Premium Painting.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-red-600 text-white shadow-md'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {cat === 'Cleaning' ? 'Surface Cleaning' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Before & After Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredItems.map((item) => {
            const sliderPos = sliderPositions[item.id] ?? 50;

            return (
              <div
                key={item.id}
                className="bg-slate-800/90 rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl flex flex-col group"
              >
                {/* Interactive Slider Container */}
                <div className="relative h-72 sm:h-84 md:h-96 w-full select-none overflow-hidden bg-slate-950">
                  {/* After Image (Background) */}
                  <img
                    src={item.afterImage}
                    alt={`${item.title} After`}
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-md bg-red-600/90 text-white text-xs font-black tracking-wider uppercase backdrop-blur-xs">
                    AFTER: ProBrush Finish
                  </div>

                  {/* Before Image (Clipped Overlay) */}
                  <div
                    className="absolute inset-y-0 left-0 overflow-hidden z-10"
                    style={{ width: `${sliderPos}%` }}
                  >
                    <img
                      src={item.beforeImage}
                      alt={`${item.title} Before`}
                      className="absolute inset-0 w-full h-full object-cover max-w-none"
                      style={{
                        width: '100%',
                        minWidth: '600px',
                        height: '100%',
                      }}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-md bg-slate-900/90 text-slate-200 text-xs font-bold tracking-wider uppercase backdrop-blur-xs border border-white/20">
                      BEFORE
                    </div>
                  </div>

                  {/* Vertical Dividing Line & Handle */}
                  <div
                    className="absolute top-0 bottom-0 z-30 pointer-events-none w-0.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                    style={{ left: `${sliderPos}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center border-2 border-red-600">
                      <SlidersHorizontal className="w-4 h-4 text-[#0b2c63]" />
                    </div>
                  </div>

                  {/* Native Range Slider for Smooth Touch & Mouse Control */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPos}
                    onChange={(e) => handleSliderChange(item.id, Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40"
                    aria-label={`Slide to compare before and after for ${item.title}`}
                  />
                </div>

                {/* Card Description & Technical Specs */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs text-red-400 font-bold uppercase tracking-wider mb-1">
                      <span>{item.specs}</span>
                      <span className="text-slate-400">Drag slider ⟷</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-white">{item.title}</h3>
                    <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 text-slate-200">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      {item.details}
                    </span>
                    <button
                      onClick={onOpenQuote}
                      className="font-bold text-red-400 hover:text-red-300 transition-colors cursor-pointer flex items-center gap-1"
                    >
                      <span>Get Quote Like This</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Strategic CTA after Our Work - Strictly Mandated */}
        <div className="mt-16 text-center space-y-4">
          <h3 className="text-2xl font-bold text-white">Inspired by what you see?</h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Bring new life to your walls, exterior siding, or commercial surfaces with our guaranteed professional finish.
          </p>
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#dc2626] to-[#b91c1c] hover:from-[#ef4444] hover:to-[#dc2626] text-white font-extrabold text-sm uppercase tracking-wider shadow-xl hover:shadow-red-600/40 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>GET A FREE QUOTE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
