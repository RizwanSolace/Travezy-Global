import React, { useState } from 'react';
import { Sparkles, Compass, Check, ArrowRight, RotateCcw, Info } from 'lucide-react';
import { JourneyPackage } from '../types';
import { SAMPLE_JOURNEYS } from '../data/travelData';

interface PersonalizedTripBuilderProps {
  onSelectInspiration: (summary: string) => void;
}

export const PersonalizedTripBuilder: React.FC<PersonalizedTripBuilderProps> = ({
  onSelectInspiration,
}) => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    'Royal heritage & historic cities',
  ]);
  const [budgetRange, setBudgetRange] = useState<string>('Premium Boutique');
  const [duration, setDuration] = useState<string>('6 to 8 Days');
  const [travelNote, setTravelNote] = useState<string>('');
  const [generatedResults, setGeneratedResults] = useState<JourneyPackage[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const interestOptions = [
    'Royal heritage & historic cities',
    'Backwaters, tea hills & wellness',
    'Kashmir lakes & mountain meadows',
    'Swiss Alps & scenic rail journeys',
    'Tropical beaches & island retreats',
    'Japanese culture, food & city life',
    'Culinary trails & local markets',
    'Nature escapes & outdoor adventures',
    'Family-friendly discovery',
  ];

  const journeysByInterest: Record<string, string[]> = {
    'Royal heritage & historic cities': [
      'rajasthan-royal-heritage',
      'japan-cherry-blossom-golden-route',
    ],
    'Backwaters, tea hills & wellness': ['kerala-backwaters-tea'],
    'Kashmir lakes & mountain meadows': ['kashmir-paradise-valleys'],
    'Swiss Alps & scenic rail journeys': ['swiss-alps-scenic-trains'],
    'Tropical beaches & island retreats': ['bali-cultural-sanctuaries'],
    'Japanese culture, food & city life': ['japan-cherry-blossom-golden-route'],
    'Culinary trails & local markets': [
      'japan-cherry-blossom-golden-route',
      'rajasthan-royal-heritage',
      'kerala-backwaters-tea',
    ],
    'Nature escapes & outdoor adventures': [
      'kerala-backwaters-tea',
      'kashmir-paradise-valleys',
      'swiss-alps-scenic-trains',
    ],
    'Family-friendly discovery': [
      'kerala-backwaters-tea',
      'japan-cherry-blossom-golden-route',
      'swiss-alps-scenic-trains',
    ],
  };

  const budgetOptions = [
    'Comfort & Hand-Picked Homestays',
    'Premium Boutique & 4-5 Star Stays',
    'Luxury Heritage Havelis & High-End Resorts',
  ];

  const durationOptions = [
    'Short Getaway (3 - 5 Days)',
    'Classic Route (6 - 8 Days)',
    'Grand Expedition (9 - 14 Days)',
  ];

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      if (selectedInterests.length > 1) {
        setSelectedInterests(selectedInterests.filter((i) => i !== interest));
      }
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    setTimeout(() => {
      const journeyIds = Array.from(
        new Set(selectedInterests.flatMap((interest) => journeysByInterest[interest] ?? []))
      );
      const recommendations = journeyIds
        .map((id) => SAMPLE_JOURNEYS.find((journey) => journey.id === id))
        .filter((journey): journey is JourneyPackage => journey !== undefined);

      setGeneratedResults(recommendations);
      setIsGenerating(false);
    }, 450);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-[#263343]/10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#263343]/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E83E78]/10 text-xs font-semibold text-[#E83E78] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#E83E78]" />
            Personalized Trip Inspiration
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#263343]">
            What kind of journey inspires you?
          </h3>
          <p className="text-sm text-[#263343]/70 mt-1">
            Choose one or more interests to see matching trip ideas with destination photos.
          </p>
        </div>

        {/* Disclaimer Pill */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FFA51C]/15 text-[#263343] text-xs font-medium shrink-0">
          <Info className="w-4 h-4 text-[#FFA51C] shrink-0" />
          <span>Sample Inspiration • Not a confirmed booking</span>
        </div>
      </div>

      <form onSubmit={handleGenerate} className="mt-8 space-y-6">
        {/* Step 1: Interests */}
        <div>
          <label className="block text-sm font-semibold text-[#263343] mb-3">
            1. What travel themes excite you? (Select one or more)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {interestOptions.map((opt) => {
              const isChecked = selectedInterests.includes(opt);
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => toggleInterest(opt)}
                  className={`text-left px-4 py-3 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                    isChecked
                      ? 'border-[#E83E78] bg-[#E83E78]/8 text-[#263343] shadow-xs'
                      : 'border-[#263343]/15 hover:border-[#263343]/30 bg-[#FAFAFC] text-[#263343]/80'
                  }`}
                >
                  <span>{opt}</span>
                  {isChecked && <Check className="w-4 h-4 text-[#E83E78] shrink-0 ml-2" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Budget & Duration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-[#263343] mb-2">
              2. Preferred Accommodation & Travel Style
            </label>
            <select
              value={budgetRange}
              onChange={(e) => setBudgetRange(e.target.value)}
              className="w-full rounded-xl border border-[#263343]/20 bg-[#FAFAFC] px-4 py-3 text-sm text-[#263343] focus:border-[#E83E78] focus:outline-none focus:ring-1 focus:ring-[#E83E78]"
            >
              {budgetOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#263343] mb-2">
              3. Desired Trip Duration
            </label>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full rounded-xl border border-[#263343]/20 bg-[#FAFAFC] px-4 py-3 text-sm text-[#263343] focus:border-[#E83E78] focus:outline-none focus:ring-1 focus:ring-[#E83E78]"
            >
              {durationOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Step 3: Free-text note */}
        <div>
          <label className="block text-sm font-semibold text-[#263343] mb-1.5">
            4. Free-Text Note (Optional)
          </label>
          <input
            type="text"
            value={travelNote}
            onChange={(e) => setTravelNote(e.target.value)}
            placeholder="e.g. Traveling with elderly parents, celebrating a 25th anniversary, preference for vegetarian cuisine..."
            className="w-full rounded-xl border border-[#263343]/20 bg-[#FAFAFC] px-4 py-3 text-sm text-[#263343] placeholder:text-[#263343]/40 focus:border-[#E83E78] focus:outline-none focus:ring-1 focus:ring-[#E83E78]"
          />
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            type="submit"
            disabled={isGenerating}
            className="inline-flex items-center gap-2 rounded-xl bg-[#263343] hover:bg-[#1a232f] px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#FFA51C]" />
            <span>{isGenerating ? 'Curating sample ideas...' : 'Generate Trip Inspiration'}</span>
          </button>

          {generatedResults.length > 0 && (
            <button
              type="button"
              onClick={() => {
                setGeneratedResults([]);
                setTravelNote('');
              }}
              className="inline-flex items-center gap-1.5 text-xs text-[#263343]/60 hover:text-[#263343] px-3 py-2 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </form>

      {/* Generated Result Showcase */}
      {generatedResults.length > 0 && (
        <div className="mt-8 pt-8 border-t border-[#263343]/10 bg-[#FFF9FB] -mx-6 sm:-mx-8 md:-mx-10 -mb-6 sm:-mb-8 md:-mb-10 p-6 sm:p-8 md:p-10 rounded-b-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FFA51C]/20 text-xs font-semibold text-[#263343] mb-3">
            <span>✨ {generatedResults.length} trip {generatedResults.length === 1 ? 'idea' : 'ideas'} for you</span>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {generatedResults.map((journey) => (
              <article
                key={journey.id}
                className="overflow-hidden rounded-2xl bg-white border border-[#263343]/10 shadow-sm flex flex-col"
              >
                <div className="relative h-44">
                  <img
                    src={journey.image}
                    alt={journey.destination}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#172638]/75 to-transparent" />
                  <span className="absolute bottom-3 left-4 right-4 text-xs font-semibold text-white">
                    {journey.destination}
                  </span>
                </div>
                <div className="p-5 flex flex-1 flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-[#E83E78] font-bold">
                    {journey.category} • {duration}
                  </span>
                  <h4 className="mt-1 text-lg font-serif-heading font-bold leading-snug text-[#263343]">
                    {journey.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-[#263343]/75">
                    {journey.tagline}
                    {travelNote ? ` Your note: ${travelNote}` : ''}
                  </p>
                  <div className="mt-3 space-y-1.5">
                    {journey.highlights.slice(0, 2).map((highlight) => (
                      <div key={highlight} className="flex items-start gap-2 text-xs text-[#263343]/80">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E83E78]" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      const planSummary = `Inspiration: ${journey.title} (${journey.destination}, ${duration}). Style: ${budgetRange}. Interests: ${selectedInterests.join(', ')}. ${travelNote ? `Notes: ${travelNote}` : ''}`;
                      onSelectInspiration(planSummary);
                    }}
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-[#E83E78] hover:bg-[#d42d67] px-4 py-3 text-xs font-semibold text-white shadow-sm transition-colors cursor-pointer"
                  >
                    <span>Plan this journey</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-[#263343]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-[#263343]/60 italic max-w-md">
              * Note: This is an example travel concept. Final itineraries, specific dates, hotels, and costs are personally planned with our team.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
