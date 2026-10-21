import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { COMPANY_FACTS } from '../data/travelData';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Mail, MapPin, ArrowRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'journeys', label: 'Journeys' },
    { id: 'team', label: 'Our Team' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-[#263343] text-white/80 text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-white/90">
              <MapPin className="w-3.5 h-3.5 text-[#FFA51C]" />
              {COMPANY_FACTS.location}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-[#7BC84A] animate-pulse" />
              Women-led travel company • {COMPANY_FACTS.originYear}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="italic text-white/70">{COMPANY_FACTS.tagline}</span>
            <a
              href={`mailto:${COMPANY_FACTS.email}`}
              className="flex items-center gap-1.5 text-white hover:text-[#FFA51C] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#39A9D5]" />
              {COMPANY_FACTS.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5'
            : 'bg-white/90 backdrop-blur-sm shadow-xs py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with Official Image */}
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
            aria-label="Travezy Global Home"
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="h-12 sm:h-13 bg-white rounded-xl px-2.5 py-1 flex items-center justify-center border border-[#263343]/10 shadow-xs group-hover:border-[#E83E78]/30 group-hover:shadow-md transition-all"
            >
              <img
                src="/assets/aistudio/travezy-logo_6c779881.png"
                alt="Travezy Global Logo"
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </motion.div>
            <div className="hidden xl:block">
              <span className="text-[11px] uppercase tracking-wider text-[#E83E78] font-bold block">
                {COMPANY_FACTS.name}
              </span>
              <p className="text-[11px] tracking-tight text-[#263343]/60 font-medium">
                Your journey is our passion
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer relative ${
                    isActive
                      ? 'text-[#E83E78] font-semibold bg-[#E83E78]/10 shadow-xs'
                      : 'text-[#263343]/80 hover:text-[#263343] hover:bg-[#263343]/5'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="navPillIndicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#E83E78] rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="button"
              onClick={() => handleNavClick('contact')}
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#E83E78] to-[#d42d67] px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm hover:shadow-lg hover:shadow-[#E83E78]/25 transition-all duration-200 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FFA51C]" />
              <span>Plan your trip</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-[#263343] hover:bg-[#263343]/5 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Drawer with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#263343]/60 backdrop-blur-xs"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Slide-out Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-5/6 max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
            >
              <div>
                {/* Header inside drawer with Logo */}
                <div className="flex items-center justify-between pb-4 border-b border-[#263343]/10">
                  <div className="bg-white rounded-xl p-1 border border-[#263343]/10 shadow-2xs">
                    <img
                      src="/assets/aistudio/travezy-logo_6c779881.png"
                      alt="Travezy Global"
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-[#263343]/70 hover:bg-[#263343]/5"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Tagline */}
                <p className="mt-3 text-xs italic text-[#263343]/70">
                  “{COMPANY_FACTS.tagline}”
                </p>

                {/* Nav Links */}
                <nav className="mt-6 space-y-1.5">
                  {navItems.map((item, idx) => {
                    const isActive = currentPage === item.id;
                    return (
                      <motion.button
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        type="button"
                        onClick={() => handleNavClick(item.id)}
                        className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                          isActive
                            ? 'bg-[#E83E78]/10 text-[#E83E78] font-semibold'
                            : 'text-[#263343] hover:bg-[#263343]/5'
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && <span className="w-2 h-2 rounded-full bg-[#E83E78]" />}
                      </motion.button>
                    );
                  })}
                </nav>
              </div>

              {/* Bottom Contact Details */}
              <div className="pt-6 border-t border-[#263343]/10 space-y-3">
                <button
                  type="button"
                  onClick={() => handleNavClick('contact')}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#E83E78] to-[#d42d67] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#FFA51C]" />
                  <span>Plan your trip</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="text-xs text-[#263343]/80 space-y-1.5 pt-2">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#FFA51C]" />
                    {COMPANY_FACTS.location}
                  </p>
                  <a
                    href={`mailto:${COMPANY_FACTS.email}`}
                    className="flex items-center gap-2 text-[#39A9D5] hover:underline"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    {COMPANY_FACTS.email}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
