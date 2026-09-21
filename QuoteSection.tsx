import React, { useState, useRef, useEffect } from 'react';
import { 
  PropertyType, 
  ServiceType, 
  PreferredContact, 
  QuoteFormData 
} from '../types';
import { 
  Upload, 
  X, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Image as ImageIcon, 
  PhoneCall, 
  Sparkles,
  Camera
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface QuoteSectionProps {
  preselectedService?: string;
  onOpenBooking: () => void;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({ 
  preselectedService,
  onOpenBooking
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);

  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    email: '',
    propertyType: 'Residential',
    serviceNeeded: 'Interior Painting',
    projectDetails: '',
    preferredContact: 'Phone Call',
    photos: [],
    address: '',
    timeline: 'Within 2-4 weeks',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quoteId, setQuoteId] = useState('');

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        serviceNeeded: preselectedService as ServiceType,
      }));
    }
  }, [preselectedService]);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    const newPhotos: string[] = [];

    Array.from(files).forEach((file) => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            setFormData((prev) => ({
              ...prev,
              photos: [...prev.photos, e.target?.result as string],
            }));
          }
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const removePhoto = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = 'PB-EST-' + Math.floor(10000 + Math.random() * 90000);
    setQuoteId(id);
    setIsSubmitted(true);
  };

  return (
    <section id="quote-section" className="py-20 bg-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100 text-red-700 text-xs font-black uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fast, Free, Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b2c63] tracking-tight">
            Ready to Transform Your Space?
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-2">
            Tell us about your project and get a free quote from ProBrush Premium.
          </p>
        </div>

        {/* Lead Capture Container */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden max-w-4xl mx-auto">
          
          {isSubmitted ? (
            /* Success / Confirmation State */
            <div className="p-8 sm:p-14 text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                <CheckCircle2 className="w-12 h-12" />
              </div>

              <div className="space-y-2">
                <span className="px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-extrabold uppercase tracking-wider">
                  Request Received
                </span>
                <h3 className="text-3xl font-black text-[#0b2c63]">
                  Thank You, {formData.fullName}!
                </h3>
                <p className="text-base text-slate-600 max-w-lg mx-auto">
                  Your quote request has been routed to our senior estimating team. We review submissions promptly and will contact you via{' '}
                  <strong className="text-slate-900">{formData.preferredContact}</strong>.
                </p>
              </div>

              {/* Estimate Details Summary */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left max-w-md mx-auto text-xs space-y-2.5">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500 font-semibold">Quote Reference:</span>
                  <span className="font-mono font-bold text-[#0b2c63]">{quoteId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-semibold">Service:</span>
                  <span className="font-bold text-slate-800">{formData.serviceNeeded}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-semibold">Property Type:</span>
                  <span className="font-bold text-slate-800">{formData.propertyType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-semibold">Phone:</span>
                  <span className="font-bold text-slate-800">{formData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-semibold">Photos Uploaded:</span>
                  <span className="font-bold text-slate-800">{formData.photos.length} photo(s)</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 rounded-xl border border-slate-300 hover:border-slate-400 text-slate-700 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Submit Another Project
                </button>
                <button
                  onClick={onOpenBooking}
                  className="px-6 py-3 rounded-xl bg-[#0b2c63] hover:bg-[#09224c] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Also Book Free On-Site Walkthrough
                </button>
              </div>
            </div>
          ) : (
            /* Lead Generation Quote Form */
            <form onSubmit={handleSubmit} className="p-6 sm:p-10 lg:p-12 space-y-8">
              
              {/* Form Intro Bar */}
              <div className="flex flex-wrap items-center justify-between border-b border-slate-100 pb-5 gap-3">
                <div>
                  <h3 className="text-xl font-bold text-[#0b2c63]">Project Estimate Details</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Please provide project dimensions or scope for the most accurate quote.</p>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200/60">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>100% Free & No-Obligation</span>
                </div>
              </div>

              {/* Row 1: Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Miller"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#0b2c63] focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50/50 hover:bg-white focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#0b2c63] focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50/50 hover:bg-white focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#0b2c63] focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50/50 hover:bg-white focus:bg-white"
                  />
                </div>
              </div>

              {/* Row 2: Property Type & Service Needed */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Property Type Radio Selector */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Property Type *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {(['Residential', 'Commercial'] as PropertyType[]).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, propertyType: type })}
                        className={`py-3 px-4 rounded-xl border-2 text-center text-sm font-bold transition-all cursor-pointer ${
                          formData.propertyType === type
                            ? 'border-[#0b2c63] bg-blue-50/60 text-[#0b2c63] shadow-xs'
                            : 'border-slate-200 text-slate-600 hover:border-slate-300 bg-white'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Service Needed Dropdown */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Service Needed *
                  </label>
                  <select
                    value={formData.serviceNeeded}
                    onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value as ServiceType })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-semibold text-slate-800 bg-white focus:outline-hidden focus:border-[#0b2c63] focus:ring-2 focus:ring-blue-100 transition-all"
                  >
                    <option value="Interior Painting">Interior Painting</option>
                    <option value="Exterior Painting">Exterior Painting</option>
                    <option value="Surface Cleaning">Surface Cleaning</option>
                    <option value="Commercial Painting">Commercial Painting</option>
                    <option value="Surface Preparation">Surface Preparation</option>
                    <option value="Other">Other Painting / Custom Project</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Project Details Textarea */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Project Details *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Tell us about the project: estimated rooms or square footage, ceiling height, current wall condition, color preferences, or target completion dates..."
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#0b2c63] focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50/50 hover:bg-white focus:bg-white"
                />
              </div>

              {/* Row 4: Preferred Contact Method */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Preferred Contact Method
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {(['Phone Call', 'Text Message', 'Email'] as PreferredContact[]).map((method) => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => setFormData({ ...formData, preferredContact: method })}
                      className={`py-2.5 px-3 rounded-xl border text-center text-xs font-bold transition-all cursor-pointer ${
                        formData.preferredContact === method
                          ? 'border-red-600 bg-red-50 text-red-700 shadow-xs'
                          : 'border-slate-200 text-slate-600 hover:border-slate-300 bg-white'
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 5: Upload Photos (Drag & Drop + File Selection) */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                  <span>Upload Photos (Optional, Helps Ensure Exact Pricing)</span>
                  <span className="text-slate-500 text-[11px] font-normal">JPG, PNG, WEBP</span>
                </label>

                {/* Dropzone */}
                <div
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`p-6 border-2 border-dashed rounded-2xl text-center cursor-pointer transition-all ${
                    dragActive
                      ? 'border-[#0b2c63] bg-blue-50/60 scale-101'
                      : 'border-slate-300 hover:border-[#0b2c63] bg-slate-50/50 hover:bg-white'
                  }`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => handleFiles(e.target.files)}
                    className="hidden"
                  />
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <div className="w-12 h-12 rounded-full bg-blue-100 text-[#0b2c63] flex items-center justify-center">
                      <Camera className="w-6 h-6" />
                    </div>
                    <p className="text-sm font-bold text-slate-800">
                      Drag & drop photos here, or <span className="text-red-600 underline">browse files</span>
                    </p>
                    <p className="text-xs text-slate-500">
                      Take photos of walls, exterior trim, or trouble spots for an instant review
                    </p>
                  </div>
                </div>

                {/* Photo Previews */}
                {formData.photos.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
                    {formData.photos.map((photoUrl, idx) => (
                      <div key={idx} className="relative group rounded-xl overflow-hidden border border-slate-200 h-24 bg-slate-100">
                        <img
                          src={photoUrl}
                          alt={`Uploaded preview ${idx + 1}`}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <button
                          type="button"
                          onClick={() => removePhoto(idx)}
                          className="absolute top-1 right-1 p-1 rounded-full bg-black/70 text-white hover:bg-red-600 transition-colors cursor-pointer"
                          aria-label="Remove photo"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit CTA Button - Mandated Button Text */}
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#dc2626] to-[#b91c1c] hover:from-[#ef4444] hover:to-[#dc2626] text-white font-black text-base uppercase tracking-wider shadow-xl hover:shadow-red-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>REQUEST MY FREE QUOTE</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 pt-1">
                  <span>Fast response within 2 business hours</span>
                  <span>Direct phone assistance: <strong className="text-[#0b2c63]">{COMPANY_INFO.phone}</strong></span>
                </div>
              </div>

            </form>
          )}

        </div>
      </div>
    </section>
  );
};
