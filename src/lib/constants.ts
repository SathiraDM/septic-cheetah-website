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
  phone: '(512) 969-9655', // Main emergency line - used for all calls
  emergencyPhone: '(512) 969-9655', // Emergency line (same as main)
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
    id: 'installation',
    title: 'Septic System Installation',
    category: 'Septic System Installation',
    description: 'Complete septic system installation for new construction and replacement systems with permits and warranties.',
    startingPrice: 'Call for Quote',
    features: [
      'Septic system installation (new construction)',
      'Aerobic septic systems',
      'System replacement and upgrades',
      'Licensed & insured installers',
      'Permit assistance included',
      'Soil testing coordination'
    ],
    subServices: [
      {
        name: 'Septic system installation (new construction)',
        description: 'Complete new septic system installation for new homes and buildings'
      },
      {
        name: 'Aerobic septic systems',
        description: 'Advanced aerobic treatment systems for enhanced wastewater processing'
      }
    ],
    icon: 'Wrench',
    href: '/services/installation',
  },
  {
    id: 'repairs',
    title: 'Septic System Repairs',
    category: 'Septic System Repairs',
    description: 'Emergency septic repairs and comprehensive maintenance services to restore your system.',
    startingPrice: 'Call for Quote',
    features: [
      'Septic system replacement',
      'Emergency septic repairs',
      'Septic pump installation/repair',
      'Distribution box repairs',
      'Drain field repairs',
      '24/7 emergency response'
    ],
    subServices: [
      {
        name: 'Septic system replacement',
        description: 'Complete system replacement when repair is not feasible'
      },
      {
        name: 'Emergency septic repairs',
        description: '24/7 emergency response for critical septic system failures'
      },
      {
        name: 'Septic pump installation/repair',
        description: 'Installation and repair of septic system pumps and controls'
      },
      {
        name: 'Distribution box repairs',
        description: 'Repair and replacement of distribution boxes and components'
      },
      {
        name: 'Drain field repairs',
        description: 'Drain field restoration and repair services'
      }
    ],
    icon: 'Settings',
    href: '/services/repairs',
  },
  {
    id: 'maintenance',
    title: 'Septic Maintenance & Cleaning',
    category: 'Septic Maintenance & Inspection',
    description: 'Professional septic tank pumping, cleaning, and inspection services to maintain optimal system performance.',
    startingPrice: 'Call for Quote',
    features: [
      'Septic tank pumping/cleaning',
      'Septic inspections',
      'Same-day service available',
      'Proper waste disposal at licensed facilities',
      'Complete system evaluation',
      'Detailed reporting and recommendations'
    ],
    subServices: [
      {
        name: 'Septic tank pumping/cleaning',
        description: 'Professional septic tank pumping and thorough cleaning services'
      },
      {
        name: 'Septic inspections',
        description: 'Comprehensive system inspections for maintenance and real estate transactions'
      }
    ],
    icon: 'Truck',
    href: '/services/maintenance',
  },
  {
    id: 'grease-trap',
    title: 'Grease & Commercial Waste Services',
    category: 'Grease & Waste Management',
    description: 'Commercial grease trap cleaning and waste management services for restaurants and businesses.',
    startingPrice: 'Call for Quote',
    features: [
      'Grease trap services',
      'Regular maintenance schedules',
      'Emergency cleaning services',
      'Compliance documentation',
      'Proper waste disposal',
      'Commercial & restaurant focused'
    ],
    subServices: [
      {
        name: 'Grease trap services',
        description: 'Complete grease trap cleaning, maintenance, and compliance services'
      }
    ],
    icon: 'Building',
    href: '/services/grease-trap',
  },
  {
    id: 'site-preparation',
    title: 'Site Preparation & Support Services',
    category: 'Site Preparation & Compliance',
    description: 'Comprehensive site preparation, excavation, and compliance services for septic system projects.',
    startingPrice: 'Call for Quote',
    features: [
      'Excavation services',
      'Soil testing',
      'Permit assistance',
      'Site evaluation and planning',
      'Regulatory compliance support',
      'Licensed excavation professionals'
    ],
    subServices: [
      {
        name: 'Excavation services',
        description: 'Professional excavation for septic system installation and repairs'
      },
      {
        name: 'Soil testing',
        description: 'Comprehensive soil percolation and composition testing'
      },
      {
        name: 'Permit assistance',
        description: 'Complete permit application and regulatory approval assistance'
      }
    ],
    icon: 'MapPin',
    href: '/services/site-preparation',
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
    icon: 'Zap'
  },
  {
    title: 'Clear Communication & Customer Education',
    description: 'We believe customers deserve to understand the work being done. That\'s why we explain each step in simple terms, answer questions, and make sure you feel confident in the decisions you\'re making.',
    icon: 'MessageCircle'
  },
  {
    title: 'Local, Family-Owned Dedication',
    description: 'As a family-owned business serving Austin and the surrounding areas, SepticCheetah is personally invested in every project. We see our customers as neighbors, and our success is tied directly to the well-being of the community we serve.',
    icon: 'Home'
  },
] as const;