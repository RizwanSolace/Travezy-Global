import React from 'react';
import { PageId } from '../../types';
import { COMPANY_FACTS } from '../../data/travelData';
import { motion } from 'motion/react';
import { Heart, Compass, CheckCircle2, ArrowRight, MapPin } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-white">
      {/* Page Header with Proper Scenic Background Image + Overlay */}
      <section className="relative text-white py-20 sm:py-28 overflow-hidden bg-[#263343]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1920&q=80"
            alt="Scenic heritage landscape"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#263343] via-[#263343]/75 to-[#263343]/60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Logo Badge in Header */}
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
            <Heart className="w-3.5 h-3.5 text-[#E83E78] fill-[#E83E78]" />
            About Travezy Global
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif-heading font-bold text-white tracking-tight"
          >
            Crafting Journeys With Heart & Precision
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-white/90 leading-relaxed font-normal"
          >
            “{COMPANY_FACTS.tagline}”
          </motion.p>
        </div>
      </section>

      {/* Main Narrative Section with Motion Reveals */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-base sm:text-lg text-[#263343]/85 leading-relaxed font-normal">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 sm:p-10 rounded-3xl bg-[#FFF9FB] border border-[#E83E78]/15 shadow-sm"
            >
              <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#263343] mb-4">
                Our Mumbai Story & Women-Led Ethos
              </h2>
              <p>
                {COMPANY_FACTS.aboutBlurb}
              </p>
            </motion.div>

            {/* Exactly the permitted company facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
              <motion.div
                whileHover={{ y: -4 }}
                className="p-6 rounded-3xl bg-[#F0F9FF] border border-[#39A9D5]/20 flex items-center gap-4 shadow-xs"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#39A9D5] text-white flex items-center justify-center shrink-0 shadow-md">
                  <Compass className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-3xl font-bold font-serif-heading text-[#263343]">
                    {COMPANY_FACTS.travelersServed}
                  </div>
                  <div className="text-xs sm:text-sm text-[#263343]/70 font-medium">
                    Explored the world with our personal care
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="p-6 rounded-3xl bg-[#FFF9F2] border border-[#FFA51C]/25 flex items-center gap-4 shadow-xs"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#FFA51C] text-white flex items-center justify-center shrink-0 shadow-md">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-3xl font-bold font-serif-heading text-[#263343]">
                    {COMPANY_FACTS.originYear}
                  </div>
                  <div className="text-xs sm:text-sm text-[#263343]/70 font-medium">
                    Rooted in Mumbai, Maharashtra, India
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#263343] pt-4">
                Thoughtful Planning Over Generic Packages
              </h3>
              <p>
                In an era of mass-market online booking engines and crowded tour buses, travel has too often become rushed and impersonal. At Travezy Global, we take the opposite path. We believe that true luxury lies in thoughtful curation: spending an extra morning in a sunlit courtyard, booking the quiet room away from street traffic, or meeting a passionate local weaver in their home studio.
              </p>
              <p>
                Our team takes time to understand who you are traveling with—whether it is an elderly parent who needs flat walking paths, young children who need afternoon rest, or a busy executive who values seamless transfers and swift check-ins.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#263343] pt-4">
                Hand-Picked Itineraries & Attentive Details
              </h3>
              <p>
                Every property we recommend, from heritage havelis across Rajasthan to serene backwater houseboats in Kerala and scenic boutique chalets in Europe, is personally evaluated for warmth, cleanliness, and character. We coordinate your chauffeurs, train tickets, private boat charters, and museum entries so that when you arrive, all you need to do is absorb the beauty of the moment.
              </p>
            </motion.div>

            {/* Core Pillars */}
            <div className="pt-8">
              <h3 className="text-xl font-bold text-[#263343] mb-5 font-serif-heading">
                What Guides Us Every Day
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  {
                    title: 'Empathy & Active Listening',
                    desc: 'We listen first and ask the right questions about how you like to spend your days before suggesting a single destination.',
                    color: '#7BC84A',
                  },
                  {
                    title: 'Precision Logistics',
                    desc: 'We double-check flight connection buffers, chauffeur timings, and dietary needs so your trip flows seamlessly.',
                    color: '#39A9D5',
                  },
                  {
                    title: 'Respect for Your Time',
                    desc: 'No artificial detours or commercial tourist traps. We value your holidays as precious memories in the making.',
                    color: '#E83E78',
                  },
                  {
                    title: 'Direct Mumbai Desk Support',
                    desc: 'You have a responsive, caring team ready to assist before departure, during your travels, and after you return home.',
                    color: '#FFA51C',
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -3 }}
                    className="p-5 rounded-2xl bg-[#FAFAFC] border border-[#263343]/10 space-y-2 shadow-2xs"
                  >
                    <div className="flex items-center gap-2 font-bold text-[#263343] text-sm">
                      <CheckCircle2 className="w-4 h-4" style={{ color: item.color }} />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#263343]/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Box */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="mt-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#263343] to-[#1a232f] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl"
            >
              <div>
                <h4 className="text-xl sm:text-2xl font-serif-heading font-bold">
                  Ready to plan your next holiday?
                </h4>
                <p className="text-xs sm:text-sm text-white/70 mt-1">
                  Connect directly with our Mumbai travel advisors today.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="rounded-xl bg-gradient-to-r from-[#E83E78] to-[#d42d67] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all shrink-0 cursor-pointer"
              >
                Plan your trip
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
