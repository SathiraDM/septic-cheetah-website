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
  phone: '(555) 123-4567',
  emergencyPhone: '(555) 911-HELP',
  email: 'info@septiccheetah.com',
  address: '123 Service Road, Your City, ST 12345',
  hours: 'Monday-Friday 7 AM - 7 PM',
  emergencyHours: '24/7/365 Emergency Service',
} as const;

export const SERVICES = [
  {
    id: 'pumping',
    title: 'Septic Pumping & Cleaning',
    description: 'Fast, thorough pumping when you need it most',
    startingPrice: '$299',
    features: ['Same-day service', 'Proper disposal', 'Basic inspection'],
    icon: 'Truck',
    href: '/services/pumping',
  },
  {
    id: 'installation',
    title: 'Septic Installation',
    description: 'New systems installed right the first time',
    startingPrice: '$3,499',
    features: ['Permits handled', 'Licensed installers', 'Warranty'],
    icon: 'Wrench',
    href: '/services/installation',
  },
  {
    id: 'repairs',
    title: 'Septic Repairs & Maintenance',
    description: 'Emergency repairs and preventive maintenance',
    startingPrice: '$199',
    features: ['24/7 emergency', 'Fast diagnosis', 'Warranty'],
    icon: 'Settings',
    href: '/services/repairs',
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
    name: 'Sarah Johnson',
    location: 'Springfield',
    text: 'Septic Cheetah saved the day! Same-day service when our system backed up. Professional, fast, and fair pricing.',
    rating: 5,
  },
  {
    name: 'Mike Rodriguez',
    location: 'Riverside',
    text: 'Best septic company in the area. They installed our new system quickly and handled all the permits. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Jennifer Chen',
    location: 'Oakville',
    text: 'Emergency repair on a Sunday - they actually answered and came out! Fixed our problem in under 2 hours.',
    rating: 5,
  },
] as const;