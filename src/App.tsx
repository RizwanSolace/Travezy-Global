import React, { useState, useEffect } from 'react';
import { PageId, JourneyPackage } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ServicesPage } from './components/pages/ServicesPage';
import { JourneysPage } from './components/pages/JourneysPage';
import { TeamPage } from './components/pages/TeamPage';
import { TestimonialsPage } from './components/pages/TestimonialsPage';
import { ContactPage } from './components/pages/ContactPage';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedJourneyModal, setSelectedJourneyModal] = useState<JourneyPackage | null>(null);
  const [contactPrefillNote, setContactPrefillNote] = useState<string>('');

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home',
        'about',
        'services',
        'journeys',
        'team',
        'testimonials',
        'contact',
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectJourney = (journey: JourneyPackage) => {
    setSelectedJourneyModal(journey);
    if (currentPage !== 'journeys') {
      setCurrentPage('journeys');
      window.location.hash = 'journeys';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] text-[#263343] font-['Inter',sans-serif]">
      {/* Navigation Bar with Official Travezy Logo */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Content with Animated Page Transitions */}
      <main className="flex-1 w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="w-full"
          >
            {currentPage === 'home' && (
              <HomePage
                onNavigate={handleNavigate}
                onSelectJourney={handleSelectJourney}
                onSetContactNote={setContactPrefillNote}
              />
            )}

            {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}

            {currentPage === 'services' && (
              <ServicesPage
                onNavigate={handleNavigate}
                onSetContactNote={setContactPrefillNote}
              />
            )}

            {currentPage === 'journeys' && (
              <JourneysPage
                onNavigate={handleNavigate}
                selectedJourneyModal={selectedJourneyModal}
                onCloseModal={() => setSelectedJourneyModal(null)}
                onOpenModal={(journey) => setSelectedJourneyModal(journey)}
                onSetContactNote={setContactPrefillNote}
              />
            )}

            {currentPage === 'team' && <TeamPage onNavigate={handleNavigate} />}

            {currentPage === 'testimonials' && (
              <TestimonialsPage onNavigate={handleNavigate} />
            )}

            {currentPage === 'contact' && (
              <ContactPage
                onNavigate={handleNavigate}
                prefilledNote={contactPrefillNote}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Footer with Official Logo */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
