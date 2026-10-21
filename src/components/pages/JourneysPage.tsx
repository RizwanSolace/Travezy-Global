import React, { useState } from 'react';
import { PageId, JourneyPackage } from '../../types';
import { SAMPLE_JOURNEYS } from '../../data/travelData';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin,
  Calendar,
  Clock,
  Compass,
  ArrowRight,
  X,
  CheckCircle2,
  Info,
  Sparkles,
} from 'lucide-react';

interface JourneysPageProps {
  onNavigate: (page: PageId) => void;
  selectedJourneyModal: JourneyPackage | null;
  onCloseModal: () => void;
  onOpenModal: (journey: JourneyPackage) => void;
  onSetContactNote: (note: string) => void;
}

export const JourneysPage: React.FC<JourneysPageProps> = ({
  onNavigate,
  selectedJourneyModal,
  onCloseModal,
  onOpenModal,
  onSetContactNote,
}) => {
  const [filterRegion, setFilterRegion] = useState<'All' | 'India' | 'International'>('All');

  const filteredJourneys = SAMPLE_JOURNEYS.filter((j) => {
    if (filterRegion === 'All') return true;
    return j.region === filterRegion;
  });

  const handlePlanJourney = (journey: JourneyPackage) => {
    onSetContactNote(
      `Trip Inquiry: Inspired by sample itinerary "${journey.title}" (${journey.destination}, ${journey.duration}). Please tailor this itinerary for our dates.`
    );
    onCloseModal();
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-[#FAFAFC]">
      {/* Page Header with Scenic Background Image + Overlay + Logo */}
      <section className="relative text-white py-20 sm:py-28 overflow-hidden bg-[#263343]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80"
            alt="Scenic coastline and destinations"
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
            <Compass className="w-3.5 h-3.5 text-[#FFA51C]" />
            Sample Itineraries & Inspiration
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif-heading font-bold text-white tracking-tight"
          >
            Curated Journeys
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-white/90 leading-relaxed font-normal"
          >
            Hand-crafted sample routes across India and the world. Every journey is customized around your timing, budget, and travel style.
          </motion.p>

          {/* Prominent Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-xs sm:text-sm text-white/90 flex items-center gap-3 text-left"
          >
            <Info className="w-5 h-5 text-[#FFA51C] shrink-0" />
            <span>
              <strong>Sample Inspiration:</strong> We do not publish fixed or generic packaged prices. Your final itinerary, boutique hotels, and costs are personally planned upon inquiry.
            </span>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs & Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Region Filter Buttons with Smooth Transitions */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {(['All', 'India', 'International'] as const).map((region) => (
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                key={region}
                type="button"
                onClick={() => setFilterRegion(region)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  filterRegion === region
                    ? 'bg-[#263343] text-white shadow-md'
                    : 'bg-white text-[#263343]/70 hover:text-[#263343] border border-[#263343]/15'
                }`}
              >
                {region === 'All'
                  ? 'All Destinations'
                  : region === 'India'
                  ? 'Domestic India (Rajasthan, Kerala, Kashmir)'
                  : 'International Destinations'}
              </motion.button>
            ))}
          </div>

          {/* Journeys Grid with Staggered Motion */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJourneys.map((journey, idx) => (
              <motion.div
                key={journey.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-[#263343]/10 flex flex-col group cursor-pointer"
                onClick={() => onOpenModal(journey)}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={journey.image}
                    alt={journey.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#263343]/80 via-transparent to-black/20" />
                  {journey.badge && (
                    <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#263343] text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                      {journey.badge}
                    </span>
                  )}
                  <span className="absolute bottom-4 left-4 text-xs font-medium text-white/95 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#FFA51C]" />
                    {journey.destination}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#E83E78] font-bold tracking-wider uppercase mb-1.5">
                      <span>{journey.duration}</span>
                      <span className="text-[#263343]/50 font-medium">{journey.category}</span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold font-serif-heading text-[#263343] group-hover:text-[#E83E78] transition-colors leading-snug">
                      {journey.title}
                    </h2>

                    <p className="mt-2.5 text-xs sm:text-sm text-[#263343]/70 leading-relaxed">
                      {journey.tagline}
                    </p>

                    <div className="mt-5 space-y-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#263343]/60 mb-1">
                        Sample Highlights:
                      </div>
                      {journey.highlights.slice(0, 3).map((hl, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#263343]/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#7BC84A] mt-0.5 shrink-0" />
                          <span className="line-clamp-1">{hl}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 pt-4 border-t border-[#263343]/10 flex items-center justify-between text-[11px] text-[#263343]/60">
                      <span><strong>Best season:</strong> {journey.bestSeason}</span>
                    </div>
                  </div>

                  <div className="pt-5 mt-5 border-t border-[#263343]/10 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-[#FFA51C] uppercase tracking-wider">
                      Inspiration Itinerary
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenModal(journey);
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E83E78] hover:text-[#d42d67] transition-colors cursor-pointer"
                    >
                      <span>Explore Itinerary</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Custom Destination Request Callout */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="mt-16 bg-white rounded-3xl p-8 sm:p-10 border border-[#263343]/10 shadow-sm text-center max-w-3xl mx-auto space-y-4"
          >
            <h3 className="text-2xl font-serif-heading font-bold text-[#263343]">
              Dreaming of a destination not listed here?
            </h3>
            <p className="text-sm text-[#263343]/75 leading-relaxed">
              We design bespoke routes for destinations across India, Southeast Asia, Europe, East Africa, and beyond. Share your wish list with our Mumbai desk.
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={() => {
                onSetContactNote('Inquiry for custom destination planning not listed in sample journeys.');
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#E83E78] to-[#d42d67] text-white px-7 py-3 text-sm font-semibold shadow-md transition-all cursor-pointer"
            >
              <span>Request Custom Route</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* SAMPLE ITINERARY DETAIL MODAL WITH ANIMATEPRESENCE */}
      <AnimatePresence>
        {selectedJourneyModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#263343]/70 backdrop-blur-xs"
              onClick={onCloseModal}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#263343]/10 max-h-[90vh] flex flex-col overflow-hidden z-10"
            >
              {/* Modal Header */}
              <div className="relative h-48 sm:h-56 shrink-0 overflow-hidden">
                <img
                  src={selectedJourneyModal.image}
                  alt={selectedJourneyModal.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#263343] via-[#263343]/50 to-transparent" />
                <button
                  type="button"
                  onClick={onCloseModal}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="text-xs font-bold text-[#FFA51C] uppercase tracking-wider">
                    Sample Inspiration Itinerary
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif-heading font-bold leading-tight mt-1">
                    {selectedJourneyModal.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-7 overflow-y-auto space-y-6">
                {/* Quick Details Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 rounded-2xl bg-[#FAFAFC] border border-[#263343]/10 text-xs">
                  <div>
                    <span className="text-[#263343]/60 block">Duration:</span>
                    <strong className="text-[#263343]">{selectedJourneyModal.duration}</strong>
                  </div>
                  <div>
                    <span className="text-[#263343]/60 block">Ideal For:</span>
                    <strong className="text-[#263343]">{selectedJourneyModal.idealFor}</strong>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <span className="text-[#263343]/60 block">Best Season:</span>
                    <strong className="text-[#263343]">{selectedJourneyModal.bestSeason}</strong>
                  </div>
                </div>

                {/* Tagline */}
                <p className="text-sm text-[#263343]/80 italic font-medium leading-relaxed">
                  “{selectedJourneyModal.tagline}”
                </p>

                {/* Highlights */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#263343]/60 mb-2.5">
                    Itinerary Highlights
                  </h4>
                  <div className="space-y-2">
                    {selectedJourneyModal.highlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#263343]/85">
                        <CheckCircle2 className="w-4 h-4 text-[#7BC84A] mt-0.5 shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Day-by-Day Breakdown */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#263343]/60 mb-3">
                    Sample Day-By-Day Outline
                  </h4>
                  <div className="space-y-3.5">
                    {selectedJourneyModal.itinerary.map((dayItem, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-[#FFF9FB] border border-[#E83E78]/15 space-y-1"
                      >
                        <div className="text-xs font-bold text-[#E83E78]">
                          {dayItem.day} — {dayItem.title}
                        </div>
                        <p className="text-xs text-[#263343]/75 leading-relaxed">
                          {dayItem.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="p-3.5 rounded-xl bg-[#FFA51C]/10 border border-[#FFA51C]/25 text-[11px] text-[#263343]/70 leading-relaxed">
                  * Note: This is an inspirational concept. All stops, boutique accommodations, private transfers, and dates are customized for your group. No live inventory or rigid prices.
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-5 border-t border-[#263343]/10 bg-white flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={onCloseModal}
                  className="px-4 py-2.5 rounded-xl border border-[#263343]/20 text-xs sm:text-sm font-semibold text-[#263343]/70 hover:text-[#263343] transition-colors cursor-pointer"
                >
                  Close
                </button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={() => handlePlanJourney(selectedJourneyModal)}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#E83E78] to-[#d42d67] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md transition-all cursor-pointer"
                >
                  <span>Customize This Trip</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
