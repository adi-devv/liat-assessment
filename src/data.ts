// ---------------------------------------------------------------------------
// Central content + configuration for the American Dream sales deck.
// Keeping copy here makes the deck trivially expandable / editable.
// ---------------------------------------------------------------------------

export type InquiryType =
  | 'Leasing'
  | 'Sponsorship'
  | 'Event Booking'
  | 'General'

export interface SectionMeta {
  id: string
  label: string
}

// Order matters — drives the scroll-snap order and the dot navigation.
export const SECTIONS: SectionMeta[] = [
  { id: 'hero', label: 'Welcome' },
  { id: 'scale', label: 'The Scale' },
  { id: 'retail', label: 'Retail' },
  { id: 'luxury', label: 'Luxury' },
  { id: 'dining', label: 'Dining' },
  { id: 'entertainment', label: 'Entertainment' },
  { id: 'events', label: 'Events' },
  { id: 'leasing', label: 'Leasing' },
  { id: 'sponsorship', label: 'Sponsorship' },
  { id: 'contact', label: 'Connect' },
]

export const TICKER_ITEMS = [
  '3.3M SQ FT',
  '450+ BRANDS',
  '$5B INVESTMENT',
  '40M ANNUAL VISITORS',
  '#1 ENTERTAINMENT DESTINATION',
  '3 MILES FROM NYC',
]

export const SCALE_STATS = [
  { value: 3.3, suffix: 'M', label: 'Square Feet', decimals: 1 },
  { value: 450, suffix: '+', label: 'World-Class Brands', decimals: 0 },
  { value: 40, suffix: 'M', label: 'Annual Visitors', decimals: 0 },
  { value: 5, prefix: '$', suffix: 'B', label: 'Total Investment', decimals: 0 },
  { value: 22, suffix: 'K', label: 'Parking Spaces', decimals: 0 },
  { value: 20, suffix: 'M', label: 'Within 1-Hour Drive', decimals: 0 },
]

export const LOCATION_CALLOUTS = [
  '3 miles from Midtown Manhattan',
  'Adjacent to MetLife Stadium',
  'NJ Transit direct access',
]

// --- Retail -----------------------------------------------------------------
export interface FloorMix {
  floor: number
  name: string
  mix: { label: string; pct: number; color: string }[]
}

export const FLOORS: FloorMix[] = [
  {
    floor: 1,
    name: 'Grand Concourse',
    mix: [
      { label: 'Fashion', pct: 45, color: '#c9a84c' },
      { label: 'F&B', pct: 25, color: '#e07a3c' },
      { label: 'Beauty', pct: 18, color: '#d8b4f0' },
      { label: 'Services', pct: 12, color: '#5fa8d3' },
    ],
  },
  {
    floor: 2,
    name: 'The Avenue',
    mix: [
      { label: 'Fashion', pct: 38, color: '#c9a84c' },
      { label: 'Tech', pct: 22, color: '#5fa8d3' },
      { label: 'F&B', pct: 22, color: '#e07a3c' },
      { label: 'Lifestyle', pct: 18, color: '#7ed3a8' },
    ],
  },
  {
    floor: 3,
    name: 'The Collection',
    mix: [
      { label: 'Luxury', pct: 55, color: '#f0d080' },
      { label: 'Beauty', pct: 20, color: '#d8b4f0' },
      { label: 'Fine Dining', pct: 15, color: '#e07a3c' },
      { label: 'Jewelry', pct: 10, color: '#5fa8d3' },
    ],
  },
  {
    floor: 4,
    name: 'The Boardwalk',
    mix: [
      { label: 'Entertainment', pct: 50, color: '#9b6ee0' },
      { label: 'F&B', pct: 28, color: '#e07a3c' },
      { label: 'Family', pct: 22, color: '#7ed3a8' },
    ],
  },
  {
    floor: 5,
    name: 'The Summit',
    mix: [
      { label: 'Dining', pct: 40, color: '#e07a3c' },
      { label: 'Events', pct: 30, color: '#c9a84c' },
      { label: 'Rooftop', pct: 30, color: '#5fa8d3' },
    ],
  },
]

export const BRAND_CLOUD = {
  large: ['ZARA', 'H&M', 'UNIQLO'],
  medium: ['Apple', 'Nike', 'Adidas', "Levi's", 'Coach'],
  small: [
    'Sephora', 'Lululemon', 'Aritzia', 'Pandora', 'Foot Locker', 'Vans',
    'Gucci', 'Champion', 'Aldo', 'Bath & Body Works', 'Pull&Bear', 'Bershka',
    'Hollister', 'Aéropostale', "Victoria's Secret", 'Swarovski', 'GameStop',
    'Microsoft', 'Tesla', 'Toys"R"Us', 'Primark', 'MAC', 'Kiehl’s',
    'Tory Burch', 'Michael Kors', 'Ted Baker', 'Pottery Barn',
  ],
}

// --- Luxury -----------------------------------------------------------------
export const LUXURY_BRANDS = [
  'Hermès', 'Dior', 'Saks Fifth Avenue', 'Dolce & Gabbana',
  'Balenciaga', 'Versace', 'Burberry', 'Tiffany & Co.',
]

// --- Dining -----------------------------------------------------------------
export const DINING_CONCEPTS = [
  {
    title: 'The Food Hall',
    desc: '30+ artisan stalls in an open-concept market — a curated tour of global street food and chef-driven counters.',
    icon: '🍜',
  },
  {
    title: 'Celebrity Chef Dining',
    desc: 'White-tablecloth experiences from world-renowned chefs, designed as destinations in their own right.',
    icon: '🍷',
  },
  {
    title: 'Fast Casual, Elevated',
    desc: '60+ quick-service concepts spanning global cuisine — speed without compromise.',
    icon: '🥡',
  },
  {
    title: 'Late Night Scene',
    desc: 'Bars, cocktail lounges, and rooftop terraces open until midnight, seven days a week.',
    icon: '🍸',
  },
  {
    title: 'Family-Forward',
    desc: 'Kid-friendly menus and formats positioned steps from the entertainment zones.',
    icon: '🍕',
  },
  {
    title: 'Coffee & Specialty',
    desc: 'Third-wave coffee, French patisseries, and dessert destinations worth the trip.',
    icon: '☕',
  },
]

// --- Entertainment ----------------------------------------------------------
export interface Attraction {
  icon: string
  name: string
  tagline: string
  stat: string
  detail: string
  color: string
}

export const ATTRACTIONS: Attraction[] = [
  {
    icon: '🎢',
    name: 'Nickelodeon Universe',
    tagline: "North America's largest indoor theme park",
    stat: '35 rides · 8 acres',
    detail: 'Seven-story coasters, a SpongeBob-themed plunge, and immersive Nickelodeon worlds under one roof — open every day of the year.',
    color: '#f7941d',
  },
  {
    icon: '🌊',
    name: 'DreamWorks Water Park',
    tagline: "World's largest indoor water park",
    stat: '40+ slides · year-round',
    detail: 'A climate-controlled aquatic city kept at a perfect 84°F, with a record-setting wave pool and 40+ slides and attractions.',
    color: '#2aa8e0',
  },
  {
    icon: '⛷️',
    name: 'Big SNOW',
    tagline: "North America's only real-snow indoor slope",
    stat: '365 days of skiing',
    detail: 'Real snow, real lifts, real vertical — the continent’s only year-round indoor ski and snowboard slope, regardless of season.',
    color: '#8fd0ff',
  },
  {
    icon: '🏒',
    name: 'The Rink',
    tagline: 'NHL-regulation ice rink',
    stat: 'Hockey · figure · public',
    detail: 'A full NHL-regulation ice surface hosting hockey, figure skating, and public sessions throughout the year.',
    color: '#6c7ae0',
  },
  {
    icon: '🐟',
    name: 'SEA LIFE Aquarium',
    tagline: '5,000+ sea creatures',
    stat: 'Immersive exhibits',
    detail: 'Walk beneath ocean tunnels surrounded by 5,000+ creatures across deeply themed, immersive marine exhibits.',
    color: '#1f9e8f',
  },
  {
    icon: '🎭',
    name: 'KidZania',
    tagline: "Interactive children's career city",
    stat: 'Role-play metropolis',
    detail: 'A kid-sized working city where children role-play real careers — a fully interactive simulation of adult life.',
    color: '#e0568f',
  },
]

// --- Events -----------------------------------------------------------------
export const EVENT_TYPES = [
  {
    title: 'Brand Activations',
    desc: 'Pop-ups, product launches, and experiential marketing at unmatched scale.',
    icon: '✨',
  },
  {
    title: 'Concerts & Performances',
    desc: '5,000-capacity live event space for music and cultural programming.',
    icon: '🎤',
  },
  {
    title: 'Holiday Programming',
    desc: 'An 8-week season drawing 6M+ additional visitors.',
    icon: '🎄',
  },
  {
    title: 'Fashion & Luxury',
    desc: 'Runway shows, brand launches, and VIP previews.',
    icon: '👗',
  },
  {
    title: 'Corporate & Convention',
    desc: 'Meeting spaces, tech summits, and industry events.',
    icon: '🏛️',
  },
  {
    title: 'Sports & Competition',
    desc: 'Hockey, figure skating, and esports tournaments.',
    icon: '🏆',
  },
]

// --- Leasing ----------------------------------------------------------------
export interface LeasingPath {
  kicker: string
  title: string
  pitch: string
  rows: { label: string; value: string }[]
  cta: string
  inquiry: InquiryType
}

export const LEASING_PATHS: LeasingPath[] = [
  {
    kicker: '01',
    title: 'Flagship Retail',
    pitch: "Plant your flag at America's most-visited destination.",
    rows: [
      { label: 'Sizes', value: '2,000 – 50,000 sq ft' },
      { label: 'Tier', value: 'Apple · Nike · H&M · Zara' },
      { label: 'Format', value: 'Permanent flagship concepts' },
    ],
    cta: 'Schedule Flagship Discussion',
    inquiry: 'Leasing',
  },
  {
    kicker: '02',
    title: 'Pop-Up & Short-Term',
    pitch: 'Test, activate, and convert at unprecedented scale.',
    rows: [
      { label: 'Sizes', value: '500 – 5,000 sq ft' },
      { label: 'Terms', value: '30 days – 12 months' },
      { label: 'Ideal for', value: 'DTC brands · launches · seasonal' },
    ],
    cta: 'Inquire About Pop-Up Availability',
    inquiry: 'Leasing',
  },
  {
    kicker: '03',
    title: 'F&B & Restaurant',
    pitch: 'Serve 40 million annual visitors.',
    rows: [
      { label: 'Sizes', value: '800 – 15,000 sq ft' },
      { label: 'Concepts', value: 'All formats welcome' },
      { label: 'Dwell', value: '4.2 hr average visit' },
    ],
    cta: 'Explore F&B Opportunities',
    inquiry: 'Leasing',
  },
]

// --- Sponsorship ------------------------------------------------------------
export interface SponsorTier {
  tier: string
  title: string
  accent: string
  perks: string[]
  availability: string
}

export const SPONSOR_TIERS: SponsorTier[] = [
  {
    tier: 'TIER I',
    title: 'Presenting Partner',
    accent: '#f0d080',
    perks: [
      'Category exclusivity',
      'Year-round brand presence across all touchpoints',
      'Custom activation space',
      'Content creation partnership',
      'Data & insights access',
    ],
    availability: '15 partnerships available',
  },
  {
    tier: 'TIER II',
    title: 'Category Partner',
    accent: '#cfcfcf',
    perks: [
      'Seasonal activations',
      'Digital and in-venue presence',
      'Co-branded events',
    ],
    availability: '40 partnerships available',
  },
  {
    tier: 'TIER III',
    title: 'Activation Partner',
    accent: '#c8884a',
    perks: [
      'One-time or recurring activations',
      'Pop-up presence',
      'Event sponsorship',
    ],
    availability: 'Unlimited',
  },
]

export const AUDIENCE_DATA = [
  { value: '68%', label: 'Age 18 – 54' },
  { value: '$95K', label: 'Median household income' },
  { value: '2B+', label: 'Annual social impressions' },
  { value: '15%', label: 'International visitors' },
]

// --- Contact ----------------------------------------------------------------
export interface ContactCard {
  icon: string
  title: string
  desc: string
  cta: string
  inquiry: InquiryType
}

export const CONTACT_CARDS: ContactCard[] = [
  {
    icon: '🏢',
    title: 'Lease With Us',
    desc: 'Secure your space in the most-visited mall in North America.',
    cta: 'Schedule Leasing Call',
    inquiry: 'Leasing',
  },
  {
    icon: '🤝',
    title: 'Partner With Us',
    desc: 'Access 40M annual visitors as a brand partner.',
    cta: 'Discuss Sponsorship',
    inquiry: 'Sponsorship',
  },
  {
    icon: '🎤',
    title: 'Host With Us',
    desc: "Activate your brand at America's premier event venue.",
    cta: 'Book an Event',
    inquiry: 'Event Booking',
  },
]

// --- Media -------------------------------------------------------------------
// The deck ships with zero always-on external image assets — every section
// background is generated in-app (CSS/SVG). The only external media is the
// official American Dream promo reel, used as a deferred hero ambience and in
// the "Watch the Story" modal. Swap this ID to re-skin the deck's footage.
export const HERO_VIDEO_ID = 'QwNLIRyoES8'
