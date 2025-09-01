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

// New Service Categories Structure
export const SERVICE_CATEGORIES = [
  {
    id: 'installation',
    title: 'Septic Installation',
    description: 'Complete septic system installation services with professional design and implementation.',
    href: '/services/installation',
    icon: 'Wrench',
    color: 'blue',
    services: [
      {
        id: 'new-installation',
        title: 'New System Installation',
        description: 'Complete septic system installation for new construction and replacements.',
        href: '/services/installation#new-installation',
        features: [
          'Site assessment & design',
          'Permit handling',
          'Professional installation',
          'System testing',
          'Warranty included'
        ]
      },
      {
        id: 'system-replacement',
        title: 'System Replacement',
        description: 'Full septic system replacement with modern, efficient components.',
        href: '/services/installation#system-replacement',
        features: [
          'Old system removal',
          'Updated design standards',
          'Minimal property disruption',
          'Code compliance',
          'Performance optimization'
        ]
      }
    ]
  },
  {
    id: 'maintenance-inspection',
    title: 'Maintenance & Inspection',
    description: 'Regular maintenance and inspection services to keep your septic system running smoothly.',
    href: '/services/maintenance-inspection',
    icon: 'CheckCircle',
    color: 'green',
    services: [
      {
        id: 'pumping-cleaning',
        title: 'Septic Pumping & Cleaning',
        description: 'Professional septic tank pumping and cleaning services to maintain system health.',
        href: '/services/maintenance-inspection#pumping-cleaning',
        features: [
          'Complete waste removal',
          'Tank inspection included',
          'Proper waste disposal',
          'System performance check',
          'Maintenance recommendations'
        ]
      },
      {
        id: 'inspections',
        title: 'Septic Inspections',
        description: 'Thorough septic system inspections for real estate transactions and maintenance.',
        href: '/services/maintenance-inspection#inspections',
        features: [
          'Pre-purchase inspections',
          'Routine maintenance inspections',
          'Detailed reporting',
          'Problem identification',
          'Compliance verification'
        ]
      }
    ]
  },
  {
    id: 'grease-waste-management',
    title: 'Grease & Waste Management',
    description: 'Commercial grease trap services and specialized waste management solutions.',
    href: '/services/grease-waste-management',
    icon: 'Building',
    color: 'orange',
    services: [
      {
        id: 'grease-trap',
        title: 'Grease Trap Services',
        description: 'Commercial grease trap cleaning and maintenance for restaurants and businesses.',
        href: '/services/grease-waste-management#grease-trap',
        features: [
          'Regular maintenance schedules',
          'Emergency cleaning services',
          'Compliance documentation',
          'Proper waste disposal',
          'Restaurant & commercial focus'
        ]
      },
      {
        id: 'commercial-drain-cleaning',
        title: 'Commercial Drain Cleaning',
        description: 'Professional drain cleaning services for restaurants and commercial kitchens.',
        href: '/services/grease-waste-management#commercial-drain-cleaning',
        features: [
          'Grease blockage removal',
          'High-pressure jetting',
          'Kitchen drain maintenance',
          'Emergency drain services',
          'Preventive maintenance plans'
        ]
      }
    ]
  },
  {
    id: 'repairs',
    title: 'Septic Repairs',
    description: 'Expert septic system repairs and emergency services to restore your system.',
    href: '/services/repairs',
    icon: 'Settings',
    color: 'red',
    services: [
      {
        id: 'emergency-repairs',
        title: 'Emergency Repairs',
        description: 'Fast response emergency septic repair services available 24/7.',
        href: '/services/repairs#emergency-repairs',
        features: [
          '24/7 emergency response',
          'Rapid problem diagnosis',
          'Immediate temporary solutions',
          'Permanent repair options',
          'Minimal downtime'
        ]
      },
      {
        id: 'pump-repairs',
        title: 'Pump Repairs',
        description: 'Septic pump repair and replacement services for all pump types.',
        href: '/services/repairs#pump-repairs',
        features: [
          'All pump types serviced',
          'Electrical troubleshooting',
          'Pump replacement options',
          'Performance optimization',
          'Preventive maintenance'
        ]
      },
      {
        id: 'pipe-repairs',
        title: 'Pipe & Line Repairs',
        description: 'Septic pipe and distribution line repair services.',
        href: '/services/repairs#pipe-repairs',
        features: [
          'Leak detection & repair',
          'Pipe replacement',
          'Root intrusion removal',
          'Line cleaning services',
          'Trenchless repair options'
        ]
      }
    ]
  },
  {
    id: 'site-preparation',
    title: 'Site Preparation & Compliance',
    description: 'Professional site preparation services and regulatory compliance assistance.',
    href: '/services/site-preparation-compliance',
    icon: 'Truck',
    color: 'purple',
    services: [
      {
        id: 'excavation',
        title: 'Excavation Services',
        description: 'Professional excavation services for septic system installation and repairs.',
        href: '/services/site-preparation-compliance#excavation',
        features: [
          'Precision excavation',
          'Site preparation',
          'Trenching services',
          'Backfill & grading',
          'Restoration work'
        ]
      },
      {
        id: 'soil-testing',
        title: 'Soil Testing',
        description: 'Comprehensive soil testing and percolation testing for septic system design.',
        href: '/services/site-preparation-compliance#soil-testing',
        features: [
          'Percolation testing',
          'Soil composition analysis',
          'Drainage assessment',
          'System sizing recommendations',
          'Regulatory compliance'
        ]
      },
      {
        id: 'permit-assistance',
        title: 'Permit Assistance',
        description: 'Complete permit assistance and regulatory compliance for septic projects.',
        href: '/services/site-preparation-compliance#permit-assistance',
        features: [
          'Permit application assistance',
          'Regulatory compliance',
          'Documentation preparation',
          'Inspection coordination',
          'Code compliance verification'
        ]
      }
    ]
  }
]

// Legacy services for backward compatibility and SEO
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
    href: '/services/maintenance-inspection#pumping-cleaning',
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
    href: '/services/maintenance-inspection#inspections',
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
    href: '/services/grease-waste-management#grease-trap',
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