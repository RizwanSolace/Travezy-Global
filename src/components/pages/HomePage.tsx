import React, { useState } from 'react';
import { PageId, JourneyPackage } from '../../types';
import {
  COMPANY_FACTS,
  SERVICES,
  SAMPLE_JOURNEYS,
  HOW_WE_PLAN_STEPS,
  PLACEHOLDER_TESTIMONIALS,
} from '../../data/travelData';
import { PersonalizedTripBuilder } from '../PersonalizedTripBuilder';
import { motion } from 'motion/react';
import {
  Compass,
  ArrowRight,
  Calendar,
  Users,
  MapPin,
  Sparkles,
  Heart,
  CheckCircle2,
  ChevronRight,
  Plane,
  Briefcase,
  Globe,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectJourney: (journey: JourneyPackage) => void;
  onSetContactNote: (note: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectJourney,
  onSetContactNote,
}) => {
  const [quickDest, setQuickDest] = useState('');
  const [quickDates, setQuickDates] = useState('');
  const [quickTravellers, setQuickTravellers] = useState('2 Travellers');
  const [quickStyle, setQuickStyle] = useState('Tailor-Made Leisure');

  const handleQuickEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const note = `Quick Enquiry from Home Hero: Destination: ${quickDest || 'Open to recommendations'}, Dates: ${quickDates || 'Flexible'}, Travellers: ${quickTravellers}, Trip Style: ${quickStyle}.`;
    onSetContactNote(note);
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInspirationSelected = (summary: string) => {
    onSetContactNote(summary);
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full overflow-hidden">
      {/* HERO SECTION WITH ENHANCED ANIMATIONS & BACKGROUND */}
      <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#263343]">
        {/* Background Looping Scenic Video + Multi-layer Gradient */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-center scale-105"
            poster="https://images.pexels.com/videos/37262121/pexels-photo-37262121.jpeg?auto=compress&dpr=1&h=750&w=1260"
          >
            <source
              src="/airport-takeoff.mp4"
              type="video/mp4"
            />
          </video>
          {/* Overlays for pristine contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#263343] via-[#263343]/65 to-[#263343]/50" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#263343]/30 to-[#263343]/85" />

          {/* Animated floating subtle ambient orbs */}
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.15, 0.28, 0.15],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 left-1/5 w-96 h-96 rounded-full bg-[#E83E78] blur-3xl pointer-events-none"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.15, 0.3, 0.15],
              x: [0, -40, 0],
              y: [0, 25, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-1/3 right-1/6 w-96 h-96 rounded-full bg-[#39A9D5] blur-3xl pointer-events-none"
          />
        </div>

        {/* Hero Main Content with Staggered Entrance */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-10 flex-1 flex flex-col justify-center items-center text-center">
          {/* Animated Badge featuring the Travezy Global Logo Mark */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white/25 backdrop-blur-md border border-white/35 text-xs sm:text-sm font-medium text-white mb-6 shadow-lg shadow-black/10"
          >
            {/* Logo 3-colors micro badge */}
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#39A9D5]" />
              <span className="w-2.5 h-2.5 rounded-sm bg-[#E83E78]" />
              <span className="w-2.5 h-2.5 rounded-sm bg-[#7BC84A]" />
            </div>
            <span className="font-semibold text-white">Travezy Global</span>
            <span className="text-white/60">•</span>
            <span className="text-[#FFA51C] font-semibold">{COMPANY_FACTS.originYear}</span>
            <span className="text-white/60">•</span>
            <span>Women-Led Mumbai Desk</span>
          </motion.div>

          {/* Main Headline with Smooth Reveal */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-normal tracking-tight leading-[1.05] max-w-4xl drop-shadow-md"
          >
            Your next story starts here.
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 sm:mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-white/95 leading-relaxed font-normal"
          >
            Thoughtfully planned journeys, shaped around what you love.
          </motion.p>

          {/* CTAs with Hover Animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: '0 20px 30px -10px rgba(232, 62, 120, 0.5)' }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#E83E78] to-[#d42d67] px-8 py-4 text-base font-semibold text-white shadow-xl transition-all duration-300 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#FFA51C]" />
              <span>Plan your trip</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={() => {
                onNavigate('journeys');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white/85 hover:bg-white text-[#263343] backdrop-blur-md px-7 py-4 text-base font-semibold shadow-lg transition-all duration-300 cursor-pointer"
            >
              <Compass className="w-4 h-4 text-[#39A9D5]" />
              <span>Explore journeys</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Compact Trip Enquiry Form in Hero Bottom with Animated Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12"
        >
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 sm:p-6 shadow-2xl border border-white/60">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#263343]/80 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E83E78] animate-ping" />
                Quick Trip Enquiry
              </span>
              <span className="text-xs text-[#263343]/70 font-medium hidden sm:flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#FFA51C]" />
                Mumbai Travel Desk • Direct Response
              </span>
            </div>

            <form
              onSubmit={handleQuickEnquirySubmit}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3"
            >
              {/* Destination */}
              <div>
                <label className="block text-[11px] font-semibold text-[#263343]/80 uppercase tracking-wider mb-1">
                  Destination
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-[#E83E78] absolute left-3 top-3 pointer-events-none" />
                  <input
                    type="text"
                    value={quickDest}
                    onChange={(e) => setQuickDest(e.target.value)}
                    placeholder="e.g. Rajasthan, Kerala..."
                    className="w-full rounded-xl border border-[#263343]/15 bg-white pl-9 pr-3 py-2.5 text-xs text-[#263343] placeholder:text-[#263343]/40 focus:border-[#E83E78] focus:outline-none"
                  />
                </div>
              </div>

              {/* Dates */}
              <div>
                <label className="block text-[11px] font-semibold text-[#263343]/80 uppercase tracking-wider mb-1">
                  Travel Dates / Month
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-[#39A9D5] absolute left-3 top-3 pointer-events-none" />
                  <input
                    type="text"
                    value={quickDates}
                    onChange={(e) => setQuickDates(e.target.value)}
                    placeholder="e.g. Nov 2026 or Diwali"
                    className="w-full rounded-xl border border-[#263343]/15 bg-white pl-9 pr-3 py-2.5 text-xs text-[#263343] placeholder:text-[#263343]/40 focus:border-[#39A9D5] focus:outline-none"
                  />
                </div>
              </div>

              {/* Travellers */}
              <div>
                <label className="block text-[11px] font-semibold text-[#263343]/80 uppercase tracking-wider mb-1">
                  Travellers
                </label>
                <div className="relative">
                  <Users className="w-4 h-4 text-[#FFA51C] absolute left-3 top-3 pointer-events-none" />
                  <select
                    value={quickTravellers}
                    onChange={(e) => setQuickTravellers(e.target.value)}
                    className="w-full rounded-xl border border-[#263343]/15 bg-white pl-9 pr-3 py-2.5 text-xs text-[#263343] focus:border-[#FFA51C] focus:outline-none cursor-pointer"
                  >
                    <option value="Solo Traveller">Solo Traveller</option>
                    <option value="Couple (2 Adults)">Couple (2 Adults)</option>
                    <option value="Family with Kids">Family with Kids</option>
                    <option value="Multi-Gen Family (5+)">Multi-Gen Family (5+)</option>
                    <option value="Corporate / Group (10+)">Corporate / Group (10+)</option>
                  </select>
                </div>
              </div>

              {/* Trip Style */}
              <div>
                <label className="block text-[11px] font-semibold text-[#263343]/80 uppercase tracking-wider mb-1">
                  Trip Style
                </label>
                <div className="relative">
                  <Compass className="w-4 h-4 text-[#7BC84A] absolute left-3 top-3 pointer-events-none" />
                  <select
                    value={quickStyle}
                    onChange={(e) => setQuickStyle(e.target.value)}
                    className="w-full rounded-xl border border-[#263343]/15 bg-white pl-9 pr-3 py-2.5 text-xs text-[#263343] focus:border-[#7BC84A] focus:outline-none cursor-pointer"
                  >
                    <option value="Tailor-Made Leisure">Tailor-Made Leisure</option>
                    <option value="Family Holiday">Family Holiday</option>
                    <option value="Corporate / Business">Corporate / Business</option>
                    <option value="Group / MICE">Group / MICE</option>
                    <option value="Heritage & Culture">Heritage & Culture</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex items-end">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full rounded-xl bg-[#263343] hover:bg-[#1a232f] text-white py-2.5 px-4 text-xs font-semibold shadow hover:shadow-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </section>

      {/* A LITTLE ABOUT TRAVEZY SECTION WITH EMBEDDED OFFICIAL LOGO */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E83E78]/10 text-xs font-semibold text-[#E83E78]">
                <Heart className="w-3.5 h-3.5 fill-[#E83E78]" />
                A Little About Travezy
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-heading font-bold text-[#263343] leading-tight">
                Shaping every journey around the people taking it.
              </h2>

              <p className="text-base sm:text-lg text-[#263343]/80 leading-relaxed font-normal">
                {COMPANY_FACTS.aboutBlurb}
              </p>

              {/* Exact Company Facts from brief */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 border-t border-[#263343]/10">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-5 rounded-2xl bg-[#FFF9FB] border border-[#E83E78]/15 shadow-xs"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-[#E83E78] font-serif-heading">
                    2,000+
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-[#263343]/70 mt-0.5">
                    travel enthusiasts
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-5 rounded-2xl bg-[#F0F9FF] border border-[#39A9D5]/20 shadow-xs"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-[#39A9D5] font-serif-heading">
                    Since 2018
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-[#263343]/70 mt-0.5">
                    Mumbai roots
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -4 }}
                  className="col-span-2 sm:col-span-1 p-5 rounded-2xl bg-[#F4FBF0] border border-[#7BC84A]/25 shadow-xs"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-[#7BC84A] font-serif-heading">
                    Women-Led
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-[#263343]/70 mt-0.5">
                    Attentive team
                  </div>
                </motion.div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#E83E78] hover:text-[#d42d67] transition-colors cursor-pointer group"
                >
                  <span>Learn more about our philosophy and story</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>

            {/* Right Visual Collage with Official Logo Emblem */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-md">
                {/* Main Heritage Image with Warm Frame */}
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80"
                    alt="Palace courtyard in Rajasthan curated by Travezy Global"
                    className="w-full h-80 sm:h-96 object-cover"
                  />
                </div>

                {/* Overlaid Logo Card that showcases the official branding */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-[#263343]/10 max-w-[260px]"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <img
                      src="/assets/aistudio/travezy-logo_6c779881.png"
                      alt="Travezy Global"
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                  <p className="text-xs text-[#263343] font-medium leading-snug">
                    “From hand-picked boutique havelis to quiet backwater houseboats.”
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES SECTION WITH MOTION CARDS */}
      <section className="py-20 bg-[#F8FAFC] border-y border-[#263343]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#39A9D5]">
              Tailored Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-heading font-bold text-[#263343] mt-2">
              Services Shaped Around You
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#263343]/70 leading-relaxed">
              Whether you are planning a relaxed family getaway, an executive business delegation, or an incentive retreat, our Mumbai desk coordinates every detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.slice(0, 4).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#263343]/10 flex flex-col justify-between group"
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 text-white shadow-sm transition-transform group-hover:scale-110"
                    style={{ backgroundColor: service.accentColor }}
                  >
                    <Compass className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-serif-heading text-[#263343] mb-2 group-hover:text-[#E83E78] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#263343]/60 italic mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-[#263343]/75 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#263343]/10">
                  <button
                    type="button"
                    onClick={() => {
                      onSetContactNote(`Inquiry regarding service: ${service.title}`);
                      onNavigate('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#263343] hover:text-[#E83E78] transition-colors cursor-pointer"
                  >
                    <span>Inquire about this</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => {
                onNavigate('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 rounded-xl border border-[#263343]/20 hover:border-[#263343] bg-white px-6 py-3 text-sm font-semibold text-[#263343] transition-colors cursor-pointer shadow-xs hover:shadow-sm"
            >
              <span>View all services & corporate MICE capabilities</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* DESTINATION INSPIRATION CARDS SECTION (Rajasthan & Kerala featured) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FFA51C]">
                Curated Escapes
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-heading font-bold text-[#263343] mt-2">
                Destination Inspiration
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#263343]/70 max-w-xl">
                Sample routes and hand-crafted itinerary ideas. Every journey is customized for your pace, dates, and group.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={() => {
                onNavigate('journeys');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 rounded-xl bg-[#263343] hover:bg-[#1a232f] px-5 py-3 text-xs sm:text-sm font-semibold text-white shadow-sm transition-colors cursor-pointer self-start md:self-auto"
            >
              <span>Explore All Itineraries</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SAMPLE_JOURNEYS.slice(0, 3).map((journey, idx) => (
              <motion.div
                key={journey.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-[#263343]/10 flex flex-col group cursor-pointer"
                onClick={() => onSelectJourney(journey)}
              >
                {/* Image & Badge */}
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
                    <div className="text-xs text-[#E83E78] font-bold tracking-wider uppercase mb-1">
                      {journey.duration} • {journey.category}
                    </div>
                    <h3 className="text-xl font-bold font-serif-heading text-[#263343] group-hover:text-[#E83E78] transition-colors leading-snug">
                      {journey.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#263343]/70 line-clamp-2">
                      {journey.tagline}
                    </p>

                    <div className="mt-4 space-y-1.5">
                      {journey.highlights.slice(0, 2).map((hl, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#263343]/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#7BC84A] mt-0.5 shrink-0" />
                          <span className="line-clamp-1">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 mt-5 border-t border-[#263343]/10 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-[#FFA51C] uppercase tracking-wider">
                      Sample Inspiration
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#263343] group-hover:text-[#E83E78]">
                      <span>View Itinerary</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PERSONALIZED TRIP INSPIRATION BUILDER */}
      <section className="py-20 bg-[#FFF9FB] border-t border-[#263343]/10 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <PersonalizedTripBuilder onSelectInspiration={handleInspirationSelected} />
        </div>
      </section>

      {/* HOW WE PLAN SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7BC84A]">
              The Travezy Difference
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-heading font-bold text-[#263343] mt-2">
              How We Plan Your Journey
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#263343]/70">
              Thoughtful travel takes deliberate listening. Here is how our Mumbai-based women-led team turns dreams into effortless holidays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {HOW_WE_PLAN_STEPS.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-[#FAFAFC] rounded-3xl p-6 sm:p-7 border border-[#263343]/10 relative flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow"
              >
                <div>
                  <div
                    className="text-3xl font-bold font-serif-heading mb-3 inline-block"
                    style={{ color: step.color }}
                  >
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-[#263343] mb-2 font-serif-heading">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#263343]/75 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS PREVIEW SECTION */}
      <section className="py-20 bg-[#F8FAFC] border-y border-[#263343]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFA51C]/15 text-xs font-semibold text-[#263343] mb-2">
              <span>Sample Traveler Experiences</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-bold text-[#263343]">
              What Our Travelers Love
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#263343]/60 italic">
              * Note: The layout below contains neutral placeholder feedback ready to be replaced with your genuine customer reviews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PLACEHOLDER_TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-[#263343]/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#E83E78] bg-[#E83E78]/10 px-2.5 py-1 rounded-md">
                      {t.tag}
                    </span>
                    <span className="text-xs text-[#FFA51C]">★★★★★</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#263343]/80 italic leading-relaxed">
                    {t.quote}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#263343]/10">
                  <div className="text-xs font-semibold text-[#263343]">
                    {t.clientPlaceholder}
                  </div>
                  <div className="text-[11px] text-[#263343]/50">
                    {t.destination} • {t.city}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => {
                onNavigate('testimonials');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#39A9D5] hover:text-[#263343] transition-colors cursor-pointer"
            >
              <span>View Testimonial Wall</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* FINAL CONTACT CTA BANNER WITH SCENIC BACKGROUND */}
      <section className="py-24 text-white text-center relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2000&q=85"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#172638]/90 via-[#263343]/80 to-[#151c24]/90" />
        <div className="absolute top-0 right-10 w-96 h-96 bg-[#E83E78]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#39A9D5]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFA51C_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo Badge in Final CTA */}
          <div className="inline-block bg-white rounded-2xl p-2.5 shadow-lg mb-6">
            <img
              src="/assets/aistudio/travezy-logo_6c779881.png"
              alt="Travezy Global"
              className="h-10 w-auto object-contain"
            />
          </div>

          <br />
          <span className="text-xs font-bold uppercase tracking-widest text-[#FFA51C]">
            Ready For What’s Next?
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif-heading font-bold text-white mt-3">
            Let’s Shape Your Next Journey Together.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
            Share what you love, when you’d like to travel, and the kind of experience you’re after. We’ll recommend destinations, stays, and experiences, then shape a thoughtful itinerary around you.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: '0 20px 30px -10px rgba(232, 62, 120, 0.5)' }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#E83E78] to-[#d42d67] px-8 py-4 text-sm font-semibold text-white shadow-xl transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#FFA51C]" />
              <span>Plan your trip</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            <a
              href={`mailto:${COMPANY_FACTS.email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-4 text-sm font-semibold text-white transition-colors"
            >
              <span>Email: {COMPANY_FACTS.email}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
