import React, { useState } from 'react';
import { PageId } from '../../types';
import { COMPANY_FACTS } from '../../data/travelData';
import { motion } from 'motion/react';
import {
  Mail,
  MapPin,
  CheckCircle2,
  Calendar,
  Users,
  Send,
  Heart,
  Sparkles,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  prefilledNote?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  prefilledNote = '',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('');
  const [travellers, setTravellers] = useState('2 Travellers');
  const [budgetRange, setBudgetRange] = useState('Premium Boutique');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    'Heritage & Culture',
    'Scenic Nature & Slow Travel',
  ]);
  const [message, setMessage] = useState(prefilledNote);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const travelInterestsOptions = [
    'Heritage & Culture',
    'Scenic Nature & Slow Travel',
    'Backwaters & Ayurvedic Wellness',
    'Family Adventures',
    'Luxury Boutique Resorts',
    'Corporate Retreat / MICE',
    'Culinary & Wine Trails',
    'Wildlife & Safaris',
  ];

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) newErrors.name = 'Please provide your full name';
    if (!email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!phone.trim()) {
      newErrors.phone = 'Please provide your contact phone / WhatsApp number';
    }
    if (!destination.trim()) {
      newErrors.destination = 'Please mention a destination or type "Recommendations needed"';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setPhone('');
    setDestination('');
    setDates('');
    setMessage('');
    setErrors({});
  };

  return (
    <div className="w-full bg-[#FAFAFC]">
      {/* Header with Scenic Background + Logo */}
      <section className="relative text-white py-20 sm:py-28 overflow-hidden bg-[#263343]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1920&q=80"
            alt="Scenic travel roadmap"
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
            <Heart className="w-3.5 h-3.5 fill-[#E83E78]" />
            Plan a Trip
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif-heading font-bold text-white tracking-tight"
          >
            Start Your Custom Journey
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-white/90 leading-relaxed font-normal"
          >
            “{COMPANY_FACTS.tagline}”
          </motion.p>
          <p className="text-xs sm:text-sm text-white/70 mt-1">
            Fill out the details below and our Mumbai travel advisors will shape a tailored proposal for you.
          </p>
        </div>
      </section>

      {/* Main Content Form & Contact Info */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Info & Reassurances */}
            <div className="lg:col-span-5 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl p-8 border border-[#263343]/10 shadow-sm space-y-6"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#39A9D5]">
                    Our Travel Desk
                  </span>
                  <h2 className="text-2xl font-serif-heading font-bold text-[#263343] mt-1">
                    Connect With Us
                  </h2>
                  <p className="mt-2 text-sm text-[#263343]/70 leading-relaxed">
                    Have questions about dates, weather seasons, or flight logistics? We are always happy to advise.
                  </p>
                </div>

                <div className="space-y-4 text-sm text-[#263343]">
                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FAFAFC] border border-[#263343]/10">
                    <MapPin className="w-5 h-5 text-[#FFA51C] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-xs uppercase tracking-wider text-[#263343]/60">
                        Location
                      </strong>
                      <span>{COMPANY_FACTS.location}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FAFAFC] border border-[#263343]/10">
                    <Mail className="w-5 h-5 text-[#E83E78] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-xs uppercase tracking-wider text-[#263343]/60">
                        Direct Email
                      </strong>
                      <a
                        href={`mailto:${COMPANY_FACTS.email}`}
                        className="text-[#263343] hover:text-[#E83E78] font-medium break-all"
                      >
                        {COMPANY_FACTS.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#263343]/10 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#263343]/70">
                    Why Travelers Choose Travezy:
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-[#263343]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#7BC84A]" />
                    <span>Women-led team with attention to every detail</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#263343]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#7BC84A]" />
                    <span>Operating in Mumbai {COMPANY_FACTS.originYear}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#263343]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#7BC84A]" />
                    <span>Trusted by {COMPANY_FACTS.travelersServed}</span>
                  </div>
                </div>
              </motion.div>

              {/* Direct Mail helper */}
              <div className="bg-[#FFF9FB] rounded-3xl p-6 border border-[#E83E78]/15 text-xs text-[#263343]/80 shadow-2xs">
                <span className="font-bold text-[#E83E78] block mb-1">
                  Prefer sending a direct email?
                </span>
                You can write to us directly at{' '}
                <a
                  href={`mailto:${COMPANY_FACTS.email}?subject=Trip Planning Inquiry - Travezy Global`}
                  className="font-semibold text-[#263343] underline hover:text-[#E83E78]"
                >
                  {COMPANY_FACTS.email}
                </a>{' '}
                with your rough itinerary ideas.
              </div>
            </div>

            {/* Right: Trip Planning Form */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#263343]/10 shadow-lg">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#39A9D5]/10 text-xs font-semibold text-[#39A9D5] mb-2">
                        <Sparkles className="w-3.5 h-3.5" />
                        Custom Itinerary Planner
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#263343]">
                        Tell Us About Your Trip
                      </h3>
                      <p className="text-xs sm:text-sm text-[#263343]/70 mt-1">
                        Every holiday is handcrafted. Share your ideas and preferences below.
                      </p>
                    </div>

                    {/* Traveler Contact Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#263343] mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your full name"
                          className={`w-full rounded-xl border px-3.5 py-3 text-sm text-[#263343] focus:outline-none transition-colors ${
                            errors.name
                              ? 'border-red-400 bg-red-50/30'
                              : 'border-[#263343]/20 bg-[#FAFAFC] focus:border-[#E83E78]'
                          }`}
                        />
                        {errors.name && (
                          <span className="text-[11px] text-red-500 mt-1 block">
                            {errors.name}
                          </span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#263343] mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@example.com"
                          className={`w-full rounded-xl border px-3.5 py-3 text-sm text-[#263343] focus:outline-none transition-colors ${
                            errors.email
                              ? 'border-red-400 bg-red-50/30'
                              : 'border-[#263343]/20 bg-[#FAFAFC] focus:border-[#E83E78]'
                          }`}
                        />
                        {errors.email && (
                          <span className="text-[11px] text-red-500 mt-1 block">
                            {errors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#263343] mb-1.5">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className={`w-full rounded-xl border px-3.5 py-3 text-sm text-[#263343] focus:outline-none transition-colors ${
                            errors.phone
                              ? 'border-red-400 bg-red-50/30'
                              : 'border-[#263343]/20 bg-[#FAFAFC] focus:border-[#E83E78]'
                          }`}
                        />
                        {errors.phone && (
                          <span className="text-[11px] text-red-500 mt-1 block">
                            {errors.phone}
                          </span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#263343] mb-1.5">
                          Destination(s) *
                        </label>
                        <input
                          type="text"
                          value={destination}
                          onChange={(e) => setDestination(e.target.value)}
                          placeholder="e.g. Rajasthan, Kerala, Swiss Alps, Bali..."
                          className={`w-full rounded-xl border px-3.5 py-3 text-sm text-[#263343] focus:outline-none transition-colors ${
                            errors.destination
                              ? 'border-red-400 bg-red-50/30'
                              : 'border-[#263343]/20 bg-[#FAFAFC] focus:border-[#E83E78]'
                          }`}
                        />
                        {errors.destination && (
                          <span className="text-[11px] text-red-500 mt-1 block">
                            {errors.destination}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Dates & Travellers */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#263343] mb-1.5">
                          Travel Dates / Month
                        </label>
                        <input
                          type="text"
                          value={dates}
                          onChange={(e) => setDates(e.target.value)}
                          placeholder="e.g. October 2026"
                          className="w-full rounded-xl border border-[#263343]/20 bg-[#FAFAFC] px-3.5 py-3 text-sm text-[#263343] focus:border-[#E83E78] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#263343] mb-1.5">
                          Number of Travellers
                        </label>
                        <select
                          value={travellers}
                          onChange={(e) => setTravellers(e.target.value)}
                          className="w-full rounded-xl border border-[#263343]/20 bg-[#FAFAFC] px-3 py-3 text-sm text-[#263343] focus:border-[#E83E78] focus:outline-none cursor-pointer"
                        >
                          <option value="1 Traveller (Solo)">1 Traveller (Solo)</option>
                          <option value="2 Travellers (Couple)">2 Travellers (Couple)</option>
                          <option value="Family with Kids (3 - 4)">Family with Kids (3 - 4)</option>
                          <option value="Multi-Gen Family (5 - 8)">Multi-Gen Family (5 - 8)</option>
                          <option value="Group / Corporate (9+)">Group / Corporate (9+)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#263343] mb-1.5">
                          Budget Range
                        </label>
                        <select
                          value={budgetRange}
                          onChange={(e) => setBudgetRange(e.target.value)}
                          className="w-full rounded-xl border border-[#263343]/20 bg-[#FAFAFC] px-3 py-3 text-sm text-[#263343] focus:border-[#E83E78] focus:outline-none cursor-pointer"
                        >
                          <option value="Comfort Boutique">Comfort Boutique</option>
                          <option value="Premium Boutique">Premium Boutique</option>
                          <option value="Luxury Heritage / 5-Star">Luxury Heritage / 5-Star</option>
                          <option value="Ultra-Luxury & Private Villas">Ultra-Luxury & Private Villas</option>
                        </select>
                      </div>
                    </div>

                    {/* Travel Interests (Multi-select) */}
                    <div>
                      <label className="block text-xs font-semibold text-[#263343] mb-2">
                        Travel Interests & Passions
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {travelInterestsOptions.map((interest) => {
                          const isSelected = selectedInterests.includes(interest);
                          return (
                            <button
                              key={interest}
                              type="button"
                              onClick={() => toggleInterest(interest)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-[#E83E78] text-white shadow-xs'
                                  : 'bg-[#FAFAFC] text-[#263343]/70 border border-[#263343]/15 hover:border-[#263343]/30'
                              }`}
                            >
                              {interest}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Message / Special Requests */}
                    <div>
                      <label className="block text-xs font-semibold text-[#263343] mb-1.5">
                        Message / Special Requests / Wish List
                      </label>
                      <textarea
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us about special occasions (anniversaries, birthdays), dietary preferences, mobility needs, or specific must-see sights..."
                        className="w-full rounded-xl border border-[#263343]/20 bg-[#FAFAFC] px-3.5 py-3 text-sm text-[#263343] placeholder:text-[#263343]/40 focus:border-[#E83E78] focus:outline-none"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02, boxShadow: '0 15px 25px -8px rgba(232, 62, 120, 0.4)' }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full rounded-xl bg-gradient-to-r from-[#E83E78] to-[#d42d67] text-white py-4 px-6 text-sm font-semibold shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Trip Enquiry</span>
                    </motion.button>
                  </form>
                ) : (
                  /* Success State */
                  <div className="py-12 text-center space-y-5">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', damping: 15 }}
                      className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm"
                    >
                      <CheckCircle2 className="w-9 h-9" />
                    </motion.div>

                    <h3 className="text-3xl font-serif-heading font-bold text-[#263343]">
                      Inquiry Received With Thanks!
                    </h3>

                    <div className="bg-[#FFF9FB] rounded-2xl p-6 border border-[#E83E78]/15 text-left max-w-lg mx-auto text-xs sm:text-sm text-[#263343]/85 space-y-2 shadow-2xs">
                      <p>
                        <strong>Dear {name},</strong>
                      </p>
                      <p>
                        Thank you for reaching out to Travezy Global. Your inquiry for{' '}
                        <strong>{destination}</strong> ({dates || 'Upcoming travel'}, {travellers}) has been recorded on our Mumbai desk.
                      </p>
                      <p>
                        Our travel advisors will review your notes and prepare an initial customized concept. You can also reach our team directly at{' '}
                        <a
                          href={`mailto:${COMPANY_FACTS.email}`}
                          className="text-[#E83E78] font-semibold underline"
                        >
                          {COMPANY_FACTS.email}
                        </a>.
                      </p>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="rounded-xl border border-[#263343]/20 px-6 py-2.5 text-xs font-semibold text-[#263343] hover:bg-[#263343]/5 transition-colors cursor-pointer"
                      >
                        Plan Another Journey
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          onNavigate('journeys');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="rounded-xl bg-[#263343] text-white px-6 py-2.5 text-xs font-semibold hover:bg-[#1a232f] transition-colors cursor-pointer"
                      >
                        Browse Sample Journeys
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
