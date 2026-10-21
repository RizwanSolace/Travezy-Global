import React from 'react';
import { PageId } from '../../types';
import { SERVICES, COMPANY_FACTS } from '../../data/travelData';
import { motion } from 'motion/react';
import {
  Compass,
  Users,
  Briefcase,
  HeartHandshake,
  Award,
  FileCheck,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onSetContactNote: (note: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onSetContactNote,
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass className="w-6 h-6" />;
      case 'Users':
        return <Users className="w-6 h-6" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6" />;
      case 'Award':
        return <Award className="w-6 h-6" />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6" />;
      default:
        return <Compass className="w-6 h-6" />;
    }
  };

  const handleInquireService = (serviceTitle: string) => {
    onSetContactNote(`Service Enquiry: I am interested in planning a ${serviceTitle}. Please share customized options and advice.`);
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-[#FAFAFC]">
      {/* Services Header with Scenic Background & Official Logo */}
      <section className="relative text-white py-20 sm:py-28 overflow-hidden bg-[#263343]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1920&q=80"
            alt="Travel destinations"
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
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold text-[#39A9D5] mb-4 border border-white/20"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Comprehensive Travel Capabilities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif-heading font-bold text-white tracking-tight"
          >
            Our Services & Capabilities
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-white/90 leading-relaxed font-normal"
          >
            From hand-picked private retreats to high-stakes corporate summits, our Mumbai team manages every booking with personal dedication.
          </motion.p>
        </div>
      </section>

      {/* Services Grid with Motion Stagger & Hover Elevation */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-7 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#263343]/10 flex flex-col justify-between group"
              >
                <div>
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white shadow-md transition-transform group-hover:scale-110"
                    style={{ backgroundColor: service.accentColor }}
                  >
                    {getIcon(service.iconName)}
                  </div>

                  <h2 className="text-2xl font-serif-heading font-bold text-[#263343] mb-2 group-hover:text-[#E83E78] transition-colors">
                    {service.title}
                  </h2>

                  <p className="text-xs text-[#263343]/60 italic font-medium mb-4">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-[#263343]/80 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#263343]/60">
                      What’s Included:
                    </h4>
                    {service.bulletPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#263343]/85">
                        <CheckCircle2
                          className="w-4 h-4 mt-0.5 shrink-0"
                          style={{ color: service.accentColor }}
                        />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-[#FAFAFC] p-3 rounded-xl border border-[#263343]/10 text-xs text-[#263343]/70 mb-6">
                    <strong className="text-[#263343]">Best suited for:</strong> {service.idealFor}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#263343]/10">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={() => handleInquireService(service.title)}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl py-3 px-4 text-xs sm:text-sm font-semibold text-white shadow-sm hover:shadow-md transition-all cursor-pointer"
                    style={{ backgroundColor: service.accentColor }}
                  >
                    <span>Inquire about {service.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Advisory Banner */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="mt-16 bg-white rounded-3xl p-8 sm:p-10 border border-[#263343]/10 shadow-md flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl font-serif-heading font-bold text-[#263343]">
                Need a combination of leisure & corporate group services?
              </h3>
              <p className="text-sm text-[#263343]/70 max-w-2xl">
                We regularly orchestrate blended itineraries—such as executive conferences paired with weekend family excursions across Goa, Rajasthan, or Southeast Asia.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                onSetContactNote('Inquiry: Customized combined corporate and leisure travel consultation.');
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="rounded-xl bg-[#263343] hover:bg-[#1a232f] text-white px-7 py-3.5 text-sm font-semibold shadow transition-colors shrink-0 cursor-pointer"
            >
              Consult Our Mumbai Desk
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
