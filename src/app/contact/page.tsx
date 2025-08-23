import { Metadata } from 'next';
import { Phone, Clock, Mail, MapPin, AlertTriangle, Star } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { CONTACT_INFO } from '@/lib/constants';
import { ServiceErrorBoundary } from '@/components/ServiceErrorBoundary';

export const metadata: Metadata = {
  title: 'Contact Us - Get Free Estimate',
  description: 'Contact Septic Cheetah for professional septic services. Multiple ways to reach us including 24/7 emergency service.',
  openGraph: {
    title: 'Contact Septic Cheetah - Get Free Estimate',
    description: 'Professional septic services with 24/7 emergency response',
    url: '/contact'
  }
};

const contactMethods = [
  {
    icon: AlertTriangle,
    title: "Emergency Service",
    subtitle: "24/7 Emergency Response",
    description: "Septic overflows and critical issues",
    content: CONTACT_INFO.emergencyPhone,
    href: `tel:${CONTACT_INFO.emergencyPhone}`,
    bgGradient: "from-red-500 to-red-600",
    bgLight: "bg-red-50",
    textColor: "text-red-800",
    iconBg: "bg-red-100",
    buttonStyle: "bg-red-600 hover:bg-red-700",
    urgency: "EMERGENCY",
    responseTime: "Immediate Response"
  },
  {
    icon: Phone,
    title: "Business Line",
    subtitle: "Available 24 Hours Daily",
    description: "General service and scheduling",
    content: CONTACT_INFO.phone,
    href: `tel:${CONTACT_INFO.phone}`,
    bgGradient: "from-primary-accent to-secondary-accent",
    bgLight: "bg-primary-accent/10",
    textColor: "text-primary-dark",
    iconBg: "bg-primary-accent/20",
    buttonStyle: "bg-primary-accent hover:bg-secondary-accent",
    urgency: "STANDARD",
    responseTime: "Same Day Response"
  },
  {
    icon: Mail,
    title: "Email Us",
    subtitle: "Get detailed quotes and information",
    description: "Non-urgent inquiries and quotes",
    content: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
    bgGradient: "from-blue-500 to-blue-600",
    bgLight: "bg-blue-50",
    textColor: "text-blue-800",
    iconBg: "bg-blue-100",
    buttonStyle: "bg-blue-600 hover:bg-blue-700",
    urgency: "EMAIL",
    responseTime: "Within 24 Hours"
  }
];

const serviceAreas = [
  {
    title: "Primary Service Area",
    description: "Same-day service with no travel fees",
    areas: ["Austin", "Cedar Park", "Leander", "Georgetown", "Round Rock", "Pflugerville"],
    icon: MapPin,
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    title: "Extended Service Area", 
    description: "100-mile service radius",
    areas: ["Spicewood", "Driftwood", "Dripping Springs", "Liberty Hill", "Bertram", "And More..."],
    icon: MapPin,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  }
];

const testimonials = [
  {
    quote: "SepticCheetah was a lifesaver! They showed up the same day we called, worked quickly, and had our system back up and running in no time. Fast and reliable service--exactly what we needed.",
    author: "Amanda R.",
    location: "Austin, TX",
    rating: 5
  },
  {
    quote: "The crew at SepticCheetah is hardworking and dependable. They explained everything clearly, finished the job on schedule, and left the site cleaner than they found it. Couldn&apos;t ask for better service.",
    author: "James L.",
    location: "Round Rock, TX", 
    rating: 5
  },
  {
    quote: "We&apos;ve used other companies before, but none compare to SepticCheetah. They&apos;re efficient, professional, and you can tell they care about doing the job right the first time.",
    author: "Maria S.",
    location: "Cedar Park, TX",
    rating: 5
  }
];

export default function ContactPage() {
  return (
    <ServiceErrorBoundary>
      <main className="min-h-screen">
        {/* Modern Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-primary-dark via-primary-accent to-secondary-accent overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>
          
          <div className="relative z-10 h-screen flex items-center justify-center">
            <div className="septic-max-width">
              <div className="max-w-2xl mx-auto text-center space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2">
                  <Phone className="w-4 h-4 text-white" />
                  <span className="text-white font-medium">Fast, Reliable and Kinda Dirty</span>
                </div>
                
                {/* Main Heading */}
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                    Contact
                    <span className="block text-primary-dark">
                      Septic Cheetah
                    </span>
                  </h1>
                  
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                    Ready to get your septic system working perfectly?
                  </p>
                </div>

                {/* Quick Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                  <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-4 text-center">
                    <AlertTriangle className="w-6 h-6 text-primary-dark mx-auto mb-2" />
                    <div className="font-bold text-white text-sm">24/7 Emergency</div>
                    <div className="text-primary-dark text-xs font-bold">{CONTACT_INFO.emergencyPhone}</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-4 text-center">
                    <Phone className="w-6 h-6 text-primary-dark mx-auto mb-2" />
                    <div className="font-bold text-white text-sm">Business Line</div>
                    <div className="text-primary-dark text-xs font-bold">{CONTACT_INFO.phone}</div>
                  </div>
                </div>

                {/* Primary CTA */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="group relative overflow-hidden bg-primary-dark text-white font-bold py-4 px-8 rounded-xl shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    <Phone className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">Call Now</span>
                  </a>
                  <a
                    href="#contact-form"
                    className="group bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 hover:bg-white/30 hover:scale-105"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Get Quote</span>
                  </a>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <div className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-full flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-medium text-sm">5-Star Local Service</span>
                  </div>
                  <div className="bg-primary-dark text-white px-6 py-3 rounded-full">
                    <span className="font-bold text-sm">Free Estimates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods Section */}
        <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
          <div className="septic-max-width">
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-2 bg-primary-accent/10 text-primary-accent rounded-full px-4 py-2 mb-6">
                <Phone className="w-5 h-5" />
                <span className="font-medium">Multiple Ways to Connect</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-slate-900">Choose Your</span>
                <span className="block bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent">
                  Contact Method
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Whether it&apos;s an emergency or routine service, we have the right contact option for your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <div key={index} className="group relative">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${method.bgGradient} rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-300`}></div>
                  <div className={`relative ${method.bgLight} border-2 border-transparent rounded-3xl p-8 text-center h-full`}>
                    {/* Urgency Badge */}
                    <div className={`absolute -top-3 -right-3 bg-gradient-to-r ${method.bgGradient} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                      {method.urgency}
                    </div>
                    
                    <div className={`w-20 h-20 ${method.iconBg} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className={`w-10 h-10 ${method.textColor}`} />
                    </div>
                    
                    <h3 className={`text-2xl font-bold ${method.textColor} mb-2`}>{method.title}</h3>
                    <p className={`${method.textColor} mb-3 opacity-80`}>{method.subtitle}</p>
                    <p className={`text-sm ${method.textColor} mb-4 opacity-70`}>{method.description}</p>
                    <p className={`text-xl font-bold ${method.textColor} mb-4`}>{method.content}</p>
                    <p className={`text-sm ${method.textColor} mb-6 opacity-60`}>{method.responseTime}</p>
                    
                    <a
                      href={method.href}
                      className={`${method.buttonStyle} text-white font-bold py-4 px-6 rounded-xl inline-block transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full`}
                    >
                      Contact Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Service Info Section */}
        <section id="contact-form" className="py-24 bg-gradient-to-br from-primary-dark via-primary-accent to-secondary-accent">
          <div className="septic-max-width">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                    Get Your
                    <span className="block bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent">
                      Free Estimate
                    </span>
                  </h2>
                  <p className="text-xl text-slate-300">
                    Fill out the form below and we&apos;ll get back to you with a detailed quote for your septic needs.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
                  <ContactForm />
                </div>
              </div>

              {/* Service Areas & Business Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                    Service
                    <span className="block bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent">
                      Areas
                    </span>
                  </h2>
                  <p className="text-xl text-white/90 mb-8">
                    We serve a 100-mile radius from Cedar Park, covering Travis, Williamson, Burnet, and Hays counties.
                  </p>
                </div>

                {/* Service Areas */}
                <div className="space-y-4">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="bg-primary-dark/80 backdrop-blur-sm border-2 border-primary-accent/50 rounded-2xl p-6 hover:border-primary-accent transition-all duration-300">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-12 h-12 bg-primary-accent rounded-xl flex items-center justify-center">
                          <area.icon className="w-6 h-6 text-primary-dark" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{area.title}</h3>
                          <p className="text-primary-accent font-medium">{area.description}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {area.areas.map((location, idx) => (
                          <div key={idx} className="bg-primary-accent/20 border border-primary-accent/40 text-white rounded-lg px-3 py-2 text-sm font-medium text-center hover:bg-primary-accent/30 transition-all duration-200">
                            {location}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Business Hours */}
                <div className="bg-primary-dark/80 backdrop-blur-sm border-2 border-primary-accent/50 rounded-2xl p-6 hover:border-primary-accent transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                    <Clock className="w-6 h-6 text-primary-accent mr-3" />
                    Business Hours
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-primary-accent/20 border border-primary-accent/40 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">24/7 Availability</span>
                        <span className="font-bold text-primary-accent">Always Open</span>
                      </div>
                    </div>
                    <div className="bg-primary-accent/10 border border-primary-accent/30 rounded-lg p-4">
                      <div className="flex items-center text-primary-accent mb-2">
                        <AlertTriangle className="w-4 h-4 mr-2" />
                        <span className="font-medium">Emergency Service Available 24/7</span>
                      </div>
                      <p className="text-white/90 text-sm">
                        We never close because septic emergencies don&apos;t wait for business hours.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="bg-primary-dark/80 backdrop-blur-sm border-2 border-primary-accent/50 rounded-2xl p-6 hover:border-primary-accent transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <MapPin className="w-6 h-6 text-primary-accent mr-3" />
                    Our Location
                  </h3>
                  <div className="bg-primary-accent/20 border border-primary-accent/40 rounded-lg p-4">
                    <p className="text-white font-bold mb-2">2204 Inks Cv, Cedar Park, TX 78613</p>
                    <p className="text-primary-accent text-sm font-medium">
                      Centrally located to serve Austin and surrounding areas efficiently
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
          <div className="septic-max-width">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-slate-900">What Our</span>
                <span className="block bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent">
                  Customers Say
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Real feedback from neighbors we&apos;ve served across Central Texas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-slate-700 mb-6 leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">{testimonial.author}</div>
                      <div className="text-slate-500 text-sm">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final Emergency CTA */}
        <section className="py-24 bg-gradient-to-r from-red-600 via-red-700 to-orange-600 text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="septic-max-width text-center relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Septic Emergency? Don&apos;t Wait!
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
              Septic emergencies can cause serious damage and health hazards. 
              Our emergency response team is standing by 24/7 to help when you need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href={`tel:${CONTACT_INFO.emergencyPhone}`}
                className="bg-white text-red-600 hover:bg-slate-100 font-bold py-6 px-10 rounded-2xl text-xl inline-flex items-center justify-center space-x-3 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <AlertTriangle className="w-8 h-8" />
                <div>
                  <div className="text-sm">EMERGENCY</div>
                  <div className="text-2xl font-black">{CONTACT_INFO.emergencyPhone}</div>
                </div>
              </a>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="bg-red-800 hover:bg-red-900 text-white font-bold py-6 px-10 rounded-2xl text-xl inline-flex items-center justify-center space-x-3 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <Phone className="w-8 h-8" />
                <div>
                  <div className="text-sm">Business Line</div>
                  <div className="text-lg">{CONTACT_INFO.phone}</div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </ServiceErrorBoundary>
  );
}