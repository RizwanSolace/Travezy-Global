import React, { useState } from 'react';
import { PageId } from '../../types';
import { PLACEHOLDER_TESTIMONIALS, COMPANY_FACTS } from '../../data/travelData';
import { motion } from 'motion/react';
import { Sparkles, Info, Star, MessageSquare, CheckCircle2 } from 'lucide-react';

interface TestimonialsPageProps {
  onNavigate: (page: PageId) => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onNavigate }) => {
  const [reviewName, setReviewName] = useState('');
  const [reviewTrip, setReviewTrip] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewText) return;
    setReviewSubmitted(true);
  };

  return (
    <div className="w-full bg-[#FAFAFC]">
      {/* Header with Scenic Background + Logo */}
      <section className="relative text-white py-20 sm:py-28 overflow-hidden bg-[#263343]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1920&q=80"
            alt="Scenic evening landscape"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#263343] via-[#263343]/75 to-[#263343]/60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-white rounded-2xl p-2.5 shadow-xl mb-6"
          >
            <img
              src="/assets/aistudio/travezy-logo_6c779881.png"
              alt="Travezy Global"
              className="h-10 w-auto object-contain"
            />
          </motion.div>

          <br />
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold text-[#FFA51C] mb-4 border border-white/20"
          >
            <Star className="w-3.5 h-3.5 fill-[#FFA51C]" />
            Traveler Feedback
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif-heading font-bold text-white tracking-tight"
          >
            Testimonials & Stories
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-white/90 leading-relaxed font-normal"
          >
            Every journey we plan is a personal chapter in someone’s life.
          </motion.p>

          {/* Explicit Placeholder Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-xs sm:text-sm text-white/90 flex items-center gap-3 text-left"
          >
            <Info className="w-5 h-5 text-[#FFA51C] shrink-0" />
            <span>
              <strong>Notice:</strong> The cards below demonstrate the testimonial layout with neutral placeholder templates. Replace these with your verified client reviews.
            </span>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PLACEHOLDER_TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-7 shadow-sm border border-[#263343]/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#E83E78] bg-[#E83E78]/10 px-3 py-1 rounded-full">
                      {t.tag}
                    </span>
                    <div className="flex text-[#FFA51C]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#FFA51C]" />
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-[#263343]/85 italic leading-relaxed mb-6">
                    {t.quote}
                  </p>
                </div>

                <div className="pt-5 border-t border-[#263343]/10">
                  <div className="text-sm font-bold text-[#263343]">
                    {t.clientPlaceholder}
                  </div>
                  <div className="text-xs text-[#263343]/60 mt-0.5">
                    {t.destination} • {t.city}
                  </div>
                  <div className="mt-3 text-[10px] text-[#FFA51C] font-medium uppercase tracking-wider bg-[#FFA51C]/10 p-2 rounded-lg">
                    {t.note}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Submit A Review / Feedback Section */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-[#263343]/10 shadow-sm"
          >
            <div className="text-center mb-6">
              <div className="w-10 h-10 rounded-full bg-[#E83E78]/10 text-[#E83E78] mx-auto flex items-center justify-center mb-2">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-serif-heading font-bold text-[#263343]">
                Traveled With Us Recently?
              </h3>
              <p className="text-xs sm:text-sm text-[#263343]/70 mt-1">
                Share your memories and feedback with the Travezy Global Mumbai desk.
              </p>
            </div>

            {!reviewSubmitted ? (
              <form onSubmit={handleReviewSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#263343] mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={reviewName}
                      onChange={(e) => setReviewName(e.target.value)}
                      placeholder="e.g. Ananya S."
                      className="w-full rounded-xl border border-[#263343]/15 bg-[#FAFAFC] px-3.5 py-2.5 text-xs text-[#263343] focus:border-[#E83E78] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#263343] mb-1">
                      Destination / Trip
                    </label>
                    <input
                      type="text"
                      value={reviewTrip}
                      onChange={(e) => setReviewTrip(e.target.value)}
                      placeholder="e.g. Kerala Backwaters Family Trip"
                      className="w-full rounded-xl border border-[#263343]/15 bg-[#FAFAFC] px-3.5 py-2.5 text-xs text-[#263343] focus:border-[#E83E78] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#263343] mb-1">
                    Your Experience & Reflections
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    placeholder="Tell us what made your journey special..."
                    className="w-full rounded-xl border border-[#263343]/15 bg-[#FAFAFC] px-3.5 py-2.5 text-xs text-[#263343] focus:border-[#E83E78] focus:outline-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full rounded-xl bg-[#263343] hover:bg-[#1a232f] text-white py-3 text-xs sm:text-sm font-semibold shadow transition-colors cursor-pointer"
                >
                  Submit Feedback
                </motion.button>
              </form>
            ) : (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#263343]">Thank you for your feedback!</h4>
                <p className="text-xs text-[#263343]/70 max-w-md mx-auto">
                  Your thoughts have been recorded locally for our team. We treasure every traveler story!
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setReviewSubmitted(false);
                    setReviewName('');
                    setReviewTrip('');
                    setReviewText('');
                  }}
                  className="text-xs text-[#E83E78] font-semibold underline mt-2"
                >
                  Submit another note
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};
