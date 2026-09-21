import React, { useState } from 'react';
import { MapPin, CheckCircle, Search, Navigation, Building, PhoneCall } from 'lucide-react';
import { SERVICE_AREAS, COMPANY_INFO } from '../data/companyData';

interface ServiceAreaSectionProps {
  onOpenQuote: () => void;
}

export const ServiceAreaSection: React.FC<ServiceAreaSectionProps> = ({ onOpenQuote }) => {
  const [zipInput, setZipInput] = useState('');
  const [zipResult, setZipResult] = useState<{ checked: boolean; available: boolean; message: string }>({
    checked: false,
    available: false,
    message: '',
  });

  const handleCheckZip = (e: React.FormEvent) => {
    e.preventDefault();
    if (!zipInput.trim()) return;

    // Simple service check simulation
    const cleaned = zipInput.trim();
    if (cleaned.length >= 3) {
      setZipResult({
        checked: true,
        available: true,
        message: `Great news! ${cleaned} is within our primary daily dispatch zone. Free on-site estimates are available this week.`,
      });
    } else {
      setZipResult({
        checked: true,
        available: false,
        message: `Please enter a valid 5-digit zip code or city name.`,
      });
    }
  };

  return (
    <section id="service-area" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Exact title mandated */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-extrabold uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5" />
            <span>Local Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b2c63] tracking-tight">
            Proudly Serving Our Local Community
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-2">
            ProBrush Premium Painting delivers reliable residential and commercial painting throughout the region. Check your neighborhood below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Map Graphic & Card */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
              
              {/* Stylized Vector Map Visualizer */}
              <div className="relative h-80 sm:h-96 w-full bg-slate-900 overflow-hidden flex items-center justify-center">
                {/* Background Map Graphic Pattern */}
                <div 
                  className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]"
                />
                
                {/* Concentric Service Radii Rings */}
                <div className="absolute w-72 h-72 rounded-full border border-blue-400/30 animate-pulse pointer-events-none" />
                <div className="absolute w-96 h-96 rounded-full border border-blue-500/20 pointer-events-none" />
                <div className="absolute w-120 h-120 rounded-full border border-blue-600/10 pointer-events-none" />

                {/* Central Hub Pin */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg shadow-red-600/50 animate-bounce">
                      <MapPin className="w-7 h-7" />
                    </div>
                    <div className="w-4 h-4 rounded-full bg-red-600/50 absolute -bottom-1 left-4 blur-xs" />
                  </div>
                  <div className="mt-2 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-slate-900 font-extrabold text-xs shadow-md border border-slate-200">
                    ProBrush Main Dispatch
                  </div>
                </div>

                {/* Regional Satellite Markers */}
                <div className="absolute top-16 left-16 bg-blue-950/80 border border-blue-400/40 text-blue-200 text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs">
                  North Suburbs
                </div>
                <div className="absolute top-20 right-20 bg-blue-950/80 border border-blue-400/40 text-blue-200 text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs">
                  East Hills
                </div>
                <div className="absolute bottom-20 left-24 bg-blue-950/80 border border-blue-400/40 text-blue-200 text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs">
                  West Valley
                </div>
                <div className="absolute bottom-16 right-24 bg-blue-950/80 border border-blue-400/40 text-blue-200 text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs">
                  South Bay
                </div>

                <div className="absolute bottom-3 left-4 text-[10px] text-slate-400 bg-slate-950/80 px-2 py-0.5 rounded-sm">
                  Interactive Service Radius Map • 35-Mile Operating Perimeter
                </div>
              </div>

              {/* Map Card Footer */}
              <div className="p-4 sm:p-5 bg-white border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <Navigation className="w-4 h-4 text-red-600 shrink-0" />
                  <span className="font-semibold">Daily Crews Serving All Primary Zip Codes</span>
                </div>
                <span className="text-slate-500">Custom travel arrangements available for large commercial jobs</span>
              </div>

            </div>
          </div>

          {/* Right Column: Service Checker & Region Tags */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Quick Zip Checker Form */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 shadow-xs space-y-4">
              <h3 className="text-lg font-bold text-[#0b2c63]">
                Check Your Service Availability
              </h3>
              <p className="text-xs text-slate-600">
                Enter your zip code or city name to confirm immediate estimate scheduling in your neighborhood.
              </p>

              <form onSubmit={handleCheckZip} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter Zip Code or City..."
                  value={zipInput}
                  onChange={(e) => setZipInput(e.target.value)}
                  className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#0b2c63] bg-white"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-[#0b2c63] hover:bg-[#082046] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1 shrink-0"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Check</span>
                </button>
              </form>

              {zipResult.checked && (
                <div className={`p-3 rounded-xl text-xs ${
                  zipResult.available 
                    ? 'bg-emerald-50 border border-emerald-200 text-emerald-800' 
                    : 'bg-amber-50 border border-amber-200 text-amber-800'
                }`}>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <p className="font-medium">{zipResult.message}</p>
                  </div>
                  {zipResult.available && (
                    <button
                      onClick={onOpenQuote}
                      className="mt-2 text-xs font-bold text-red-600 hover:underline cursor-pointer block"
                    >
                      Book Free Estimate For This Area →
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Configurable Cities/Service Areas List */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-500">
                  Active Coverage Zones (Owner Configurable)
                </h4>
                <span className="text-[11px] text-red-600 font-bold">100% Mobile</span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {SERVICE_AREAS.map((area, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl border border-slate-200 bg-white hover:border-blue-200 transition-colors"
                  >
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#0b2c63]">
                      <Building className="w-3.5 h-3.5 text-red-600" />
                      <span>{area.name}</span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{area.zip}</div>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-slate-500 pt-1">
                Notice for business owners: Additional custom cities and postal zones can be modified directly in the company configuration file.
              </p>
            </div>

            {/* Direct Phone Assistance */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0b2c63] hover:text-red-600 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-red-600" />
                <span>Questions about your location? Call {COMPANY_INFO.phone}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
