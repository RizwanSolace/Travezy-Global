import React from 'react';
import { PageId } from '../types';
import { COMPANY_FACTS } from '../data/travelData';
import { Mail, MapPin, ArrowRight, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#263343] text-white pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E83E78]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#39A9D5]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Column with Official Logo */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-block bg-white rounded-2xl p-2.5 shadow-md border border-white/20">
              <img
                src="/assets/aistudio/travezy-logo_6c779881.png"
                alt="Travezy Global"
                className="h-12 w-auto object-contain"
              />
            </div>

            <p className="text-sm italic text-[#FFA51C] font-medium">
              “{COMPANY_FACTS.tagline}”
            </p>

            <p className="text-sm text-white/70 leading-relaxed max-w-md">
              {COMPANY_FACTS.aboutBlurb}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <div className="bg-white/10 backdrop-blur-xs rounded-lg px-3 py-1.5 text-xs text-white/90 border border-white/10">
                <span className="text-[#7BC84A] font-bold">✓</span> {COMPANY_FACTS.originYear}
              </div>
              <div className="bg-white/10 backdrop-blur-xs rounded-lg px-3 py-1.5 text-xs text-white/90 border border-white/10">
                <span className="text-[#39A9D5] font-bold">✓</span> {COMPANY_FACTS.travelersServed}
              </div>
              <div className="bg-white/10 backdrop-blur-xs rounded-lg px-3 py-1.5 text-xs text-white/90 border border-white/10">
                <span className="text-[#E83E78] font-bold">✓</span> Women-Led Team
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#39A9D5]">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Services & Capabilities
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('journeys')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Journeys & Sample Itineraries
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('team')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Our Team & Philosophy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('testimonials')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Plan a Trip
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFA51C]">
              Get In Touch
            </h4>
            <p className="text-sm text-white/70 leading-relaxed">
              Ready to start planning your next escape? Contact our Mumbai travel advisors to tailor your custom itinerary.
            </p>

            <div className="space-y-2.5 text-sm">
              <div className="flex items-start gap-2.5 text-white/80">
                <MapPin className="w-4 h-4 text-[#FFA51C] shrink-0 mt-0.5" />
                <span>{COMPANY_FACTS.location}</span>
              </div>
              <div className="flex items-start gap-2.5 text-white/80">
                <Mail className="w-4 h-4 text-[#39A9D5] shrink-0 mt-0.5" />
                <a
                  href={`mailto:${COMPANY_FACTS.email}`}
                  className="text-white hover:text-[#FFA51C] transition-colors break-all"
                >
                  {COMPANY_FACTS.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => handleNav('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#E83E78] to-[#d42d67] hover:shadow-lg hover:shadow-[#E83E78]/30 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all cursor-pointer"
              >
                <span>Start Your Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>© {new Date().getFullYear()} Travezy Global. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted with <Heart className="w-3.5 h-3.5 text-[#E83E78] fill-[#E83E78]" /> in Mumbai, India
          </p>
        </div>
      </div>
    </footer>
  );
};
