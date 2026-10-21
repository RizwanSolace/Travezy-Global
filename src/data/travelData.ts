import { JourneyPackage, ServiceItem } from '../types';

export const COMPANY_FACTS = {
  name: 'Travezy Global',
  tagline: 'Your journey is our passion.',
  email: 'fatema@travezyglobal.com',
  location: 'Mumbai, Maharashtra, India',
  originYear: 'Since 2018',
  travelersServed: '2,000+ travel enthusiasts',
  aboutBlurb:
    'We’re a women-led Mumbai travel company with a seasoned team and a love of the details. From hand-picked holidays to corporate travel and group plans, we shape each journey around the people taking it.',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'tailor-made-holidays',
    title: 'Tailor-Made Leisure Holidays',
    tagline: 'Individual journeys designed around your rhythm and passions.',
    description:
      'We curate custom vacations from scratch—balancing iconic sights with hidden neighborhoods, boutique stays, and thoughtfully timed transfers so you travel at your own comfortable pace.',
    bulletPoints: [
      'Personalized day-by-day pacing with flexibility built-in',
      'Hand-selected boutique properties, heritage havelis, and luxury resorts',
      'Private chauffeur-driven transfers and vetted local guides',
      'Curated culinary trails, cultural workshops, and scenic day trips'
    ],
    idealFor: 'Couples, solo explorers, friends, and anniversary celebrations',
    iconName: 'Compass',
    accentColor: '#E83E78'
  },
  {
    id: 'family-travel',
    title: 'Family Travel',
    tagline: 'Smooth, multi-generational escapes that delight all ages.',
    description:
      'Traveling with grandparents, toddlers, or teenagers requires thoughtful logistics. We select family-friendly accommodations, spacious suites, kid-friendly activities, and easy transit.',
    bulletPoints: [
      'Interconnecting rooms and family suites in prime locations',
      'Balanced itineraries with downtime for rest and unstructured play',
      'Engaging wildlife safaris, nature walks, and hands-on artisanal craft visits',
      'Dietary preferences and special meal requirements pre-arranged'
    ],
    idealFor: 'Multi-generational families, parents traveling with children',
    iconName: 'Users',
    accentColor: '#39A9D5'
  },
  {
    id: 'corporate-travel',
    title: 'Corporate and Business Travel',
    tagline: 'Reliable business trips with punctual coordination.',
    description:
      'Seamless executive flights, central business hotel bookings, hassle-free airport transfers, and flexible change management for busy professionals traveling out of Mumbai or arriving from abroad.',
    bulletPoints: [
      'Punctual flight and premium hotel arrangements near commercial hubs',
      'Rapid itinerary modifications and responsive rescheduling support',
      'Corporate expense-ready invoicing and streamlined documentation',
      'Airport lounge coordination and expedited ground transfers'
    ],
    idealFor: 'Executives, corporate delegations, founders, and business travelers',
    iconName: 'Briefcase',
    accentColor: '#263343'
  },
  {
    id: 'group-travel',
    title: 'Group Travel',
    tagline: 'Harmonious journeys for affinity clubs and reunions.',
    description:
      'Coordinating travel for larger circles takes careful planning. We manage cohesive group flights, dedicated coaches, private banquet dining, and communal experiences everyone enjoys together.',
    bulletPoints: [
      'Custom group departures for friends, wellness circles, and alumni',
      'Comfortable private air-conditioned coach transportation',
      'Pre-reserved group dining featuring regional culinary specialties',
      'Dedicated journey coordination for smooth daily schedules'
    ],
    idealFor: 'Friends reunions, affinity clubs, extended families, wellness groups',
    iconName: 'HeartHandshake',
    accentColor: '#FFA51C'
  },
  {
    id: 'mice-travel',
    title: 'MICE (Meetings, Incentives, Conferences & Exhibitions)',
    tagline: 'Memorable offsites and corporate incentive programs.',
    description:
      'From annual leadership summits in Goa or Rajasthan to global reward trips in Europe and Southeast Asia, we orchestrate venue sourcing, banquet arrangements, and engaging team excursions.',
    bulletPoints: [
      'Inspiring destination venue selection and conference setup assistance',
      'Themed gala evenings, award dinners, and cultural entertainment',
      'Team bonding activities, culinary challenges, and local immersions',
      'Complete end-to-end ground logistics and on-site hospitality desk'
    ],
    idealFor: 'Corporate HR, executive boards, enterprise teams, and industry associations',
    iconName: 'Award',
    accentColor: '#7BC84A'
  },
  {
    id: 'travel-consultancy',
    title: 'Travel Consultancy & Advisory',
    tagline: 'Expert guidance for your independent travel blueprints.',
    description:
      'Already have your tickets or prefer booking directly? Our seasoned Mumbai planners review your travel route, recommend the finest stays, optimize travel routes, and share indispensable local tips.',
    bulletPoints: [
      'Route optimization to save hours of transit and avoid rush hours',
      'Hotel & neighborhood vetting for safety, convenience, and charm',
      'Visa guidelines, seasonal travel insights, and packing recommendations',
      'Curated recommendations for hidden dining, viewpoints, and cultural stops'
    ],
    idealFor: 'DIY travelers wanting a seasoned travel advisor’s second opinion',
    iconName: 'FileCheck',
    accentColor: '#E83E78'
  }
];

export const SAMPLE_JOURNEYS: JourneyPackage[] = [
  {
    id: 'rajasthan-royal-heritage',
    title: 'Royal Rajasthan: Palaces, Forts & Desert Horizons',
    destination: 'Rajasthan, India (Jaipur · Jodhpur · Udaipur)',
    region: 'India',
    category: 'Heritage & Culture',
    duration: '8 Days / 7 Nights',
    idealFor: 'Culture seekers, couples, heritage lovers',
    bestSeason: 'October to March',
    tagline: 'Walk through gilded royal halls, witness golden Thar sunsets, and cruise Lake Pichola.',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
    badge: 'Signature Heritage',
    highlights: [
      'Private sunset boat ride on serene Lake Pichola in Udaipur',
      'Curated craft trail exploring blue pottery and hand-block printing in Jaipur',
      'Rooftop dinner overlooking illuminated Mehrangarh Fort in Jodhpur',
      'Stay in restored heritage havelis steeped in royal hospitality'
    ],
    itinerary: [
      {
        day: 'Day 1 - 2',
        title: 'Jaipur: The Pink City Gateways',
        desc: 'Arrive in Jaipur. Check into your heritage haveli. Morning exploration of Amber Fort followed by an afternoon stroll through the City Palace and Hawa Mahal artisan bazaars.'
      },
      {
        day: 'Day 3 - 4',
        title: 'Jodhpur: The Blue City & Mehrangarh',
        desc: 'Scenic drive to Jodhpur. Discover the majestic sandstone fortress towering above indigo-washed lanes, and browse fragrant spice markets.'
      },
      {
        day: 'Day 5 - 7',
        title: 'Udaipur: City of Lakes & Palaces',
        desc: 'Journey south via Ranakpur’s intricately carved Jain temples. In Udaipur, wander courtyard gardens, admire miniature painting workshops, and glide over tranquil waters at dusk.'
      },
      {
        day: 'Day 8',
        title: 'Departure from Udaipur',
        desc: 'Leisurely lakeside breakfast before your private transfer to Maharana Pratap Airport.'
      }
    ]
  },
  {
    id: 'kerala-backwaters-tea',
    title: 'Kerala: Serene Backwaters, Mist & Spice Forests',
    destination: 'Kerala, India (Kochi · Munnar · Alleppey)',
    region: 'India',
    category: 'Nature & Backwaters',
    duration: '7 Days / 6 Nights',
    idealFor: 'Slow travelers, nature enthusiasts, families & couples',
    bestSeason: 'September to April',
    tagline: 'Glide along palm-fringed canals, breathe aromatic tea air, and savor coastal cuisine.',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    badge: 'Serene Nature',
    highlights: [
      'Overnight private houseboat cruise through Alleppey backwater canals',
      'Walks through aromatic cardamom, cinnamon, and pepper spice estates',
      'Morning mist walks along tea plantation ridges in Munnar',
      'Heritage walk among Fort Kochi’s iconic Chinese fishing nets and art cafes'
    ],
    itinerary: [
      {
        day: 'Day 1 - 2',
        title: 'Fort Kochi: Maritime Heritage & Culture',
        desc: 'Arrive in historic Kochi. Settle into a colonial boutique retreat. Watch the sunset over the Chinese fishing nets and witness an evening Kathakali cultural presentation.'
      },
      {
        day: 'Day 3 - 4',
        title: 'Munnar: Rolling Emerald Hills',
        desc: 'Ascend into the Western Ghats past cascading waterfalls. Visit vintage tea processing factories and enjoy birdwatching across valley trails.'
      },
      {
        day: 'Day 5 - 6',
        title: 'Alleppey: The Venetian Backwaters',
        desc: 'Board your private handcrafted houseboat. Cruise gently through sleepy lagoons, paddy fields, and waterside hamlets while enjoying fresh coastal Kerala meals prepared on board.'
      },
      {
        day: 'Day 7',
        title: 'Kochi Departure',
        desc: 'Morning Ayurvedic herbal tea and peaceful canal transfer back to Cochin International Airport.'
      }
    ]
  },
  {
    id: 'kashmir-paradise-valleys',
    title: 'Kashmir: Dal Lake Shikhara & Alpine Meadows',
    destination: 'Kashmir, India (Srinagar · Gulmarg · Pahalgam)',
    region: 'India',
    category: 'Alpine & Scenic',
    duration: '6 Days / 5 Nights',
    idealFor: 'Couples, families, mountain photographers',
    bestSeason: 'April to October (or Winter for Snow)',
    tagline: 'Gentle shikhara rides on lotus-filled waters and dramatic cedar-lined valleys.',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80',
    badge: 'Mountain Classic',
    highlights: [
      'Stay aboard an authentic cedar-wood houseboat on Dal Lake',
      'Gulmarg Gondola ascent offering panoramic views of snow-dusted peaks',
      'Riverside picnic along the Lidder River in pine-scented Pahalgam',
      'Tasting traditional slow-cooked Wazwan and saffron-infused Kahwa'
    ],
    itinerary: [
      {
        day: 'Day 1 - 2',
        title: 'Srinagar: Houseboats & Mughal Gardens',
        desc: 'Morning shikhara boat ride past floating flower markets. Explore Nishat Bagh and Shalimar Bagh terrace gardens with Zabarwan mountain views.'
      },
      {
        day: 'Day 3 - 4',
        title: 'Gulmarg & Pahalgam',
        desc: 'Ascend the high alpine meadows of Gulmarg, followed by scenic transit to the lush Betaab Valley and Lidder riverbanks in Pahalgam.'
      },
      {
        day: 'Day 5 - 6',
        title: 'Old City Artisans & Farewell',
        desc: 'Visit heritage pashmina weavers and walnut woodcarvers in Srinagar before departing.'
      }
    ]
  },
  {
    id: 'swiss-alps-scenic-trains',
    title: 'Switzerland: Panoramic Rails & Crystal Lakes',
    destination: 'Switzerland (Lucerne · Interlaken · Zermatt)',
    region: 'International',
    category: 'Alpine & Scenic',
    duration: '8 Days / 7 Nights',
    idealFor: 'Scenic lovers, couples, train journey fans',
    bestSeason: 'May to October',
    tagline: 'Glacier vistas, cogwheel mountain trains, and tranquil alpine waterfronts.',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
    badge: 'International Classic',
    highlights: [
      'Travel with seamless Swiss Travel Pass across panoramic scenic rail lines',
      'Excursion to Gornergrat for iconic views of the Matterhorn',
      'Steamer cruise across Lake Lucerne with mountain views',
      'Alpine strolls through car-free chalets and meadows'
    ],
    itinerary: [
      {
        day: 'Day 1 - 3',
        title: 'Lucerne & Mount Pilatus',
        desc: 'Arrive in Zurich and transfer to lakeside Lucerne. Cross Chapel Bridge and take the world’s steepest cogwheel railway up Mount Pilatus.'
      },
      {
        day: 'Day 4 - 5',
        title: 'Interlaken & Lauterbrunnen Valley',
        desc: 'Journey to the Bernese Oberland. Visit Lauterbrunnen’s 72 waterfalls and venture up to Jungfraujoch, the Top of Europe.'
      },
      {
        day: 'Day 6 - 8',
        title: 'Zermatt & The Matterhorn',
        desc: 'Relish car-free alpine air in Zermatt, watching sunrise hit the pyramid peak before returning to Zurich for departure.'
      }
    ]
  },
  {
    id: 'bali-cultural-sanctuaries',
    title: 'Bali: Tropical Sanctuary & Coastal Sunsets',
    destination: 'Bali, Indonesia (Ubud · Uluwatu · Seminyak)',
    region: 'International',
    category: 'Tropical & Coastal',
    duration: '7 Days / 6 Nights',
    idealFor: 'Honeymooners, wellness retreats, relaxed family breaks',
    bestSeason: 'April to October',
    tagline: 'Emerald rice terraces, ancient water temples, and cliffside ocean breezes.',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    badge: 'Island Sanctuary',
    highlights: [
      'Private pool villa stay nestled in Ubud’s lush forest ravines',
      'Sunset at clifftop Uluwatu Temple with traditional Kecak fire dance',
      'Morning cycle through Jatiluwih UNESCO rice terraces',
      'Balinese wellness massage and oceanfront dining'
    ],
    itinerary: [
      {
        day: 'Day 1 - 3',
        title: 'Ubud: Art, Spas & Rainforests',
        desc: 'Settle into your jungle retreat. Visit sacred monkey forests, traditional woodcraft villages, and enjoy organic farm-to-table dining.'
      },
      {
        day: 'Day 4 - 6',
        title: 'Southern Coast & Uluwatu',
        desc: 'Head south to coastal shores. Relax on white sand beaches, watch surfers, and visit ancient sea temples.'
      },
      {
        day: 'Day 7',
        title: 'Denpasar Departure',
        desc: 'Morning beach walk and transfer to Ngurah Rai International Airport.'
      }
    ]
  },
  {
    id: 'japan-cherry-blossom-golden-route',
    title: 'Japan: The Golden Route of Heritage & Modernity',
    destination: 'Japan (Tokyo · Kyoto · Osaka)',
    region: 'International',
    category: 'Culture & City',
    duration: '9 Days / 8 Nights',
    idealFor: 'Culture lovers, culinary explorers, curious families',
    bestSeason: 'March to May & September to November',
    tagline: 'Bullet trains, centuries-old shrines, serene bamboo groves, and neon cityscapes.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    badge: 'Cultural Marvel',
    highlights: [
      'Ride the Shinkansen bullet train with views of Mount Fuji',
      'Early morning walk through thousands of vermilion torii gates at Fushimi Inari',
      'Traditional tea ceremony in a historic Kyoto machiya townhouse',
      'Gourmet street food explorations in Osaka’s vibrant Dotonbori district'
    ],
    itinerary: [
      {
        day: 'Day 1 - 3',
        title: 'Tokyo: Past & Future',
        desc: 'Discover historic Asakusa Senso-ji temple and Meiji Jingu shrine, juxtaposed with the energy of Shibuya and Ginza.'
      },
      {
        day: 'Day 4 - 6',
        title: 'Kyoto: The Cultural Capital',
        desc: 'Board the Shinkansen. Wander through Arashiyama bamboo forest, Kinkaku-ji golden pavilion, and stone zen gardens.'
      },
      {
        day: 'Day 7 - 9',
        title: 'Osaka & Kansai Farewells',
        desc: 'Explore Osaka Castle and celebrate culinary delights before your flight home.'
      }
    ]
  }
];

export const HOW_WE_PLAN_STEPS = [
  {
    step: '01',
    title: 'We Listen First',
    desc: 'Every trip starts with a conversation. We ask about your preferred pace, travel companions, must-have moments, and the little details that make you smile.',
    color: '#E83E78'
  },
  {
    step: '02',
    title: 'Hand-Picked Curation',
    desc: 'No cookie-cutter templates. We select stays, transit routes, and local experiences that match your exact style, vetting every stop for comfort and authenticity.',
    color: '#39A9D5'
  },
  {
    step: '03',
    title: 'Seamless Coordination',
    desc: 'From airport meet-and-greets to private chauffeurs and pre-arranged entries, we organize the moving parts so your journey flows without friction.',
    color: '#FFA51C'
  },
  {
    step: '04',
    title: 'Attentive Journey Care',
    desc: 'While you travel, our Mumbai-based team remains accessible for route adjustments, timely recommendations, and any unexpected needs that arise.',
    color: '#7BC84A'
  }
];

export const PLACEHOLDER_TESTIMONIALS = [
  {
    id: 'placeholder-1',
    tag: 'Family Holiday Placeholder',
    destination: 'Kerala Backwaters & Munnar',
    quote:
      '[Sample Traveler Review Placeholder] — "The thoughtful pacing with our elderly parents and young kids made all the difference. Every hotel, driver, and boat transfer arrived seamlessly without us having to stress over a single detail."',
    clientPlaceholder: 'Sample Feedback — Family Vacation Client',
    city: 'Mumbai, India',
    rating: 5,
    note: 'Sample layout placeholder — ready for your traveler reviews.'
  },
  {
    id: 'placeholder-2',
    tag: 'Heritage Holiday Placeholder',
    destination: 'Rajasthan Royal Circuit',
    quote:
      '[Sample Traveler Review Placeholder] — "From the peaceful private boat on Lake Pichola to the boutique haveli in Jaipur, every recommendation felt authentic and deeply considered. Travezy’s team truly understands personalized travel."',
    clientPlaceholder: 'Sample Feedback — Couples Anniversary Trip',
    city: 'Mumbai, India',
    rating: 5,
    note: 'Sample layout placeholder — ready for your traveler reviews.'
  },
  {
    id: 'placeholder-3',
    tag: 'Corporate Offsite Placeholder',
    destination: 'Corporate Group Retreat & Conference',
    quote:
      '[Sample Traveler Review Placeholder] — "Flawless ground coordination for our 35-member team. The conference venue, dinner setup, and airport transfers were executed with complete punctuality and calm professionalism."',
    clientPlaceholder: 'Sample Feedback — Corporate Operations Lead',
    city: 'Mumbai, India',
    rating: 5,
    note: 'Sample layout placeholder — ready for your traveler reviews.'
  }
];

export const TEAM_PILLARS = [
  {
    title: 'Listen First, Plan Second',
    desc: 'We never push pre-packaged itineraries. We take time to discover what matters to you—whether it is quiet mornings with coffee, architectural history, or active outdoor exploration.'
  },
  {
    title: 'Rooted in Mumbai, Connected Globally',
    desc: 'Operating from Mumbai since 2018, we combine the warmth and relational trust of a boutique Indian travel desk with trusted supplier networks across India, Asia, and Europe.'
  },
  {
    title: 'Attention to the Hidden Details',
    desc: 'Great journeys happen in the nuances: having a driver who knows the scenic detour, booking rooms away from street noise, and scheduling museum entries before the tour buses arrive.'
  },
  {
    title: 'A Dedicated Women-Led Team',
    desc: 'Our team brings meticulous organizational care, empathy, and personal responsibility to every booking. When you call us, you speak directly with someone who knows your itinerary inside out.'
  }
];
