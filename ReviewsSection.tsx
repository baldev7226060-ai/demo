import React, { useState } from 'react';
import { Star, ShieldCheck, CheckCircle2, MessageSquarePlus, X, Award, UserCheck } from 'lucide-react';
import { REVIEWS_DATA } from '../data/companyData';
import { ReviewItem } from '../types';

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewItem[]>(REVIEWS_DATA);
  const [modalOpen, setModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    author: '',
    role: 'Residential Homeowner',
    location: '',
    rating: 5,
    projectType: 'Interior Painting',
    reviewText: '',
  });
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.reviewText.trim()) return;

    const added: ReviewItem = {
      id: `rev-${Date.now()}`,
      author: newReview.author || 'Verified Customer',
      role: newReview.role,
      location: newReview.location || 'Local Resident',
      rating: newReview.rating,
      date: 'Just Now',
      projectType: newReview.projectType,
      reviewText: newReview.reviewText,
      verified: true,
      isPlaceholder: false,
    };

    setReviews([added, ...reviews]);
    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setModalOpen(false);
      setNewReview({
        author: '',
        role: 'Residential Homeowner',
        location: '',
        rating: 5,
        projectType: 'Interior Painting',
        reviewText: '',
      });
    }, 1800);
  };

  return (
    <section id="reviews" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0b2c63] text-xs font-extrabold uppercase tracking-widest">
            <Award className="w-3.5 h-3.5 text-red-600" />
            <span>Client Transparency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b2c63] tracking-tight">
            Customer Testimonials
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-2">
            Real feedback from local homeowners and property managers. As our customer base grows, verified project reviews appear directly below.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className={`p-7 rounded-2xl border flex flex-col justify-between transition-all duration-300 ${
                rev.isPlaceholder
                  ? 'bg-slate-50/70 border-dashed border-slate-300 hover:border-slate-400'
                  : 'bg-white border-slate-200 shadow-md hover:shadow-lg'
              }`}
            >
              <div className="space-y-4">
                {/* Header with Verified Badge and Star Ratings */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/50">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Verified Client
                  </span>
                </div>

                {/* Review Text */}
                <div className="pt-2">
                  <p className={`text-sm leading-relaxed ${rev.isPlaceholder ? 'italic text-slate-500 font-medium' : 'text-slate-700'}`}>
                    “{rev.reviewText}”
                  </p>
                </div>

                {/* Project Tag */}
                <div className="text-xs font-semibold text-[#0b2c63] bg-blue-50/60 inline-block px-2.5 py-1 rounded-md">
                  {rev.projectType}
                </div>
              </div>

              {/* Author Footer */}
              <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{rev.author}</h4>
                  <p className="text-xs text-slate-500">{rev.role} • {rev.location}</p>
                </div>
                <span className="text-[11px] text-slate-400 font-medium">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Review Callout & Action */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-[#0b2c63] flex items-center justify-center sm:justify-start gap-1.5">
              <UserCheck className="w-4 h-4 text-red-600" />
              Are you a recent ProBrush client?
            </h4>
            <p className="text-xs text-slate-500">
              Your feedback helps our team maintain uncompromising standards of quality and service.
            </p>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-[#0b2c63] text-[#0b2c63] hover:bg-[#0b2c63] hover:text-white font-bold text-xs uppercase tracking-wider transition-colors shrink-0 cursor-pointer"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>Leave a Review</span>
          </button>
        </div>

      </div>

      {/* Leave a Review Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 text-left relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-100 text-slate-500"
            >
              <X className="w-5 h-5" />
            </button>

            {submittedMessage ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h4 className="text-xl font-bold text-slate-900">Review Submitted!</h4>
                <p className="text-xs text-slate-500">Thank you for helping us uphold our premium quality standard.</p>
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-4">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-lg font-bold text-[#0b2c63]">Submit Verified Client Review</h3>
                  <p className="text-xs text-slate-500">Share your experience with ProBrush Premium Painting.</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah J."
                    value={newReview.author}
                    onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:border-[#0b2c63]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Neighborhood / City</label>
                    <input
                      type="text"
                      placeholder="e.g. North Suburb"
                      value={newReview.location}
                      onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:border-[#0b2c63]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Project Category</label>
                    <select
                      value={newReview.projectType}
                      onChange={(e) => setNewReview({ ...newReview, projectType: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm bg-white focus:outline-hidden"
                    >
                      <option value="Interior Painting">Interior Painting</option>
                      <option value="Exterior Painting">Exterior Painting</option>
                      <option value="Surface Cleaning">Surface Cleaning</option>
                      <option value="Commercial Painting">Commercial Painting</option>
                      <option value="Whole Property Restoration">Whole Property Restoration</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Rating</label>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewReview({ ...newReview, rating: star })}
                        className="cursor-pointer p-1"
                      >
                        <Star className={`w-6 h-6 ${star <= newReview.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Review Comments *</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Describe the quality of work, cleanliness, and communication..."
                    value={newReview.reviewText}
                    onChange={(e) => setNewReview({ ...newReview, reviewText: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:border-[#0b2c63]"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider"
                  >
                    Post Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
