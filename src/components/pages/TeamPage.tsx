import React from 'react';
import { PageId } from '../../types';
import { COMPANY_FACTS, TEAM_PILLARS } from '../../data/travelData';
import { motion } from 'motion/react';
import { Heart, Compass, CheckCircle2, ArrowRight, ShieldCheck, MapPin, Users } from 'lucide-react';

interface TeamPageProps {
  onNavigate: (page: PageId) => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#FAFAFC]">
      {/* Header with Scenic Background + Logo */}
      <section className="relative text-white py-20 sm:py-28 overflow-hidden bg-[#263343]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1920&q=80"
            alt="Warm coastal and heritage scenery"
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
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold text-[#E83E78] mb-4 border border-white/20"
          >
            <Users className="w-3.5 h-3.5 text-[#E83E78]" />
            Women-Led Travel Planners
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif-heading font-bold text-white tracking-tight"
          >
            Our Team & Approach
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-white/90 leading-relaxed font-normal"
          >
            A seasoned women-led team based in Mumbai, united by a love of the details and an obsession with stress-free travel.
          </motion.p>
        </div>
      </section>

      {/* Main Philosophy & Approach */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Approach Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-[#263343]/10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7BC84A]/15 text-xs font-semibold text-[#263343] mb-4">
              <span>Our Operating Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-bold text-[#263343] leading-snug">
              Listen first. Plan around each traveller. Coordinate every single detail.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#263343]/80 leading-relaxed">
              Every vacation or business trip begins with a blank slate and an open ear. We do not believe in rigid packages or conveyor-belt tourism. Instead, our team takes the time to learn who you are, how you like your mornings, what makes your companions happy, and what peace of mind looks like for you.
            </p>
            <p className="mt-4 text-base sm:text-lg text-[#263343]/80 leading-relaxed">
              From our travel desk in Mumbai, we hand-pick your hotels, verify ground chauffeurs, arrange special access, and coordinate with local hosts so you never feel stranded or unsure in unfamiliar places.
            </p>
          </motion.div>

          {/* Four Core Pillars with Motion Cards */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#39A9D5]">
                How We Work
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#263343] mt-1">
                The Four Pillars of Our Approach
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {TEAM_PILLARS.map((pillar, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-[#263343]/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#263343]/5 text-[#E83E78] font-bold text-lg flex items-center justify-center mb-4">
                      0{idx + 1}
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold font-serif-heading text-[#263343] mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#263343]/75 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mumbai Heritage & Global Reach */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-[#FFF9FB] rounded-3xl p-8 sm:p-10 border border-[#E83E78]/15 grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-xs"
          >
            <div className="md:col-span-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E83E78]">
                Boutique Attention • Established Reliability
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#263343]">
                {COMPANY_FACTS.originYear} • {COMPANY_FACTS.travelersServed}
              </h3>
              <p className="text-sm text-[#263343]/80 leading-relaxed">
                When you entrust your journey to Travezy Global, you aren’t routed through a robotic automated ticketing machine. You collaborate directly with a caring, experienced travel coordinator in Mumbai who treats your vacation with the same diligence as their own.
              </p>
            </div>
            <div className="md:col-span-4 flex justify-center md:justify-end">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="rounded-xl bg-[#263343] hover:bg-[#1a232f] text-white px-6 py-3.5 text-sm font-semibold shadow transition-colors cursor-pointer"
              >
                Start A Conversation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
