// Brand constants and configuration
export const BRAND_COLORS = {
  primaryDark: '#45310E',
  primaryAccent: '#BF8829',
  secondaryAccent: '#8E5C1B',
  bgPrimary: '#FAECCA',
  bgSecondary: '#FFF9E6',
  textPrimary: '#2F2407',
  white: '#FFFFFF',
  black: '#000000',
} as const;

export const CONTACT_INFO = {
  phone: '(512) 969-9655',
  emergencyPhone: '(512) 969-9655',
  email: 'info@septiccheetah.com',
  address: '2204 Inks Cv, Cedar Park, TX 78613',
  hours: '24 Hours - 7 Days a Week',
  emergencyHours: '24/7/365 Emergency Service Available',
  serviceAreas: 'Austin, Cedar Park, Leander, Georgetown, Round Rock, Pflugerville, Spicewood, Driftwood, Dripping Springs, Liberty Hill, Bertram',
  serviceRadius: '100 Mile Radius',
  counties: 'Travis, Williamson, Burnet, and Hays Counties',
} as const;

export const SERVICES = [
  {
    id: 'pumping',
    title: 'Septic Tank Pumping & Cleaning',
    description: 'Professional septic tank pumping and cleaning services to keep your system running smoothly.',
    startingPrice: 'Call for Quote',
    features: [
      'Same-day service available',
      'Proper waste disposal at licensed facilities',
      'Complete tank inspection included',
      'Emergency pumping services',
      'Residential & commercial systems'
    ],
    icon: 'Truck',
    href: '/services/pumping',
  },
  {
    id: 'installation',
    title: 'New Septic System Installation',
    description: 'Complete septic system installation for new construction with permits and warranties.',
    startingPrice: 'Call for Quote',
    features: [
      'New construction installations',
      'Permit assistance included',
      'Licensed & insured installers',
      'Soil testing coordination',
      'Aerobic septic systems available'
    ],
    icon: 'Wrench',
    href: '/services/installation',
  },
  {
    id: 'repairs',
    title: 'Emergency Repairs & Maintenance',
    description: 'Fast emergency septic repairs and comprehensive maintenance services.',
    startingPrice: 'Call for Quote',
    features: [
      '24/7 emergency response',
      'Drain field repairs',
      'Septic pump installation/repair',
      'Distribution box repairs',
      'System replacement when needed'
    ],
    icon: 'Settings',
    href: '/services/repairs',
  },
  {
    id: 'inspections',
    title: 'Septic System Inspections',
    description: 'Thorough septic system inspections for real estate transactions and maintenance.',
    startingPrice: 'Call for Quote',
    features: [
      'Pre-purchase inspections',
      'Routine maintenance inspections',
      'Detailed reporting',
      'Problem identification',
      'Maintenance recommendations'
    ],
    icon: 'Search',
    href: '/services/inspections',
  },
  {
    id: 'grease-trap',
    title: 'Grease Trap Services',
    description: 'Commercial grease trap cleaning and maintenance for restaurants and businesses.',
    startingPrice: 'Call for Quote',
    features: [
      'Regular maintenance schedules',
      'Emergency cleaning services',
      'Compliance documentation',
      'Proper waste disposal',
      'Commercial & restaurant focused'
    ],
    icon: 'Building',
    href: '/services/grease-trap',
  },
  {
    id: 'portable-toilets',
    title: 'Portable Toilet Rentals',
    description: 'Clean, reliable portable toilet rentals for construction sites and events.',
    startingPrice: 'Call for Quote',
    features: [
      'Construction site rentals',
      'Event portable toilets',
      'Regular service schedules',
      'Hand sanitizer stations available',
      'Delivery & pickup included'
    ],
    icon: 'Home',
    href: '/services/portable-toilets',
  },
] as const;

export const TRUST_SIGNALS = [
  'Licensed',
  'Insured',
  'BBB A+',
  '15+ Years',
  '24/7 Emergency',
] as const;

export const TESTIMONIALS = [
  {
    name: 'Amanda R.',
    location: 'Austin, TX',
    text: 'SepticCheetah was a lifesaver! They showed up the same day we called, worked quickly, and had our system back up and running in no time. Fast and reliable service--exactly what we needed.',
    rating: 5,
  },
  {
    name: 'James L.',
    location: 'Round Rock, TX',
    text: 'The crew at SepticCheetah is hardworking and dependable. They explained everything clearly, finished the job on schedule, and left the site cleaner than they found it. Couldn\'t ask for better service.',
    rating: 5,
  },
  {
    name: 'Maria S.',
    location: 'Cedar Park, TX',
    text: 'We\'ve used other companies before, but none compare to SepticCheetah. They\'re efficient, professional, and you can tell they care about doing the job right the first time.',
    rating: 5,
  },
  {
    name: 'David T.',
    location: 'Georgetown, TX',
    text: 'From start to finish, SepticCheetah impressed us. They responded quickly, worked nonstop until the job was done, and made sure everything was perfect before leaving. Highly recommend!',
    rating: 5,
  },
] as const;

export const COMPETITIVE_ADVANTAGES = [
  {
    title: 'Fast Response Without Cutting Corners',
    description: 'When septic issues come up, time matters. SepticCheetah is built around efficiency--responding quickly and completing work on schedule--while never sacrificing the thoroughness and quality that protect your system long-term.',
    icon: '⚡'
  },
  {
    title: 'Clear Communication & Customer Education',
    description: 'We believe customers deserve to understand the work being done. That\'s why we explain each step in simple terms, answer questions, and make sure you feel confident in the decisions you\'re making.',
    icon: '💬'
  },
  {
    title: 'Local, Family-Owned Dedication',
    description: 'As a family-owned business serving Austin and the surrounding areas, SepticCheetah is personally invested in every project. We see our customers as neighbors, and our success is tied directly to the well-being of the community we serve.',
    icon: '🏡'
  },
] as const;