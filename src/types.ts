export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'journeys'
  | 'team'
  | 'testimonials'
  | 'contact';

export interface JourneyPackage {
  id: string;
  title: string;
  destination: string;
  region: 'India' | 'International';
  category: 'Heritage & Culture' | 'Nature & Backwaters' | 'Alpine & Scenic' | 'Tropical & Coastal' | 'Culture & City';
  duration: string;
  idealFor: string;
  bestSeason: string;
  tagline: string;
  image: string;
  badge?: string;
  highlights: string[];
  itinerary: { day: string; title: string; desc: string }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  bulletPoints: string[];
  idealFor: string;
  iconName: string;
  accentColor: string;
}

export interface TripInspirationResult {
  title: string;
  destination: string;
  summary: string;
  duration: string;
  estimatedVibe: string;
  recommendedHighlights: string[];
}
