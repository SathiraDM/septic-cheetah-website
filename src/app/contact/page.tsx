import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Clock, Mail, MapPin, AlertTriangle } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import ContactHero from '@/components/ContactHero';
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

export default function ContactPage() {
  return (
    <ServiceErrorBoundary>
      <main className="min-h-screen">
        {/* Modern Hero Section - Responsive Height */}
        <ContactHero />

        {/* Contact Methods Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-50 to-white">
          <div className="septic-max-width px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-20">
              <div className="inline-flex items-center space-x-2 bg-primary-accent/10 text-primary-accent rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6 text-sm sm:text-base">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-medium">Multiple Ways to Connect</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className="text-slate-900">Choose Your</span>
                <span className="block bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent">
                  Contact Method
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto px-4">
                Whether it&apos;s an emergency or routine service, we have the right contact option for your needs
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
              {contactMethods.map((method, index) => (
                <div key={index} className="group relative">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${method.bgGradient} rounded-2xl sm:rounded-3xl blur opacity-20 group-hover:opacity-30 transition-all duration-500`}></div>
                  <div className={`relative ${method.bgLight} border-2 border-transparent group-hover:border-primary-accent/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 text-center h-full transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1`}>
                    {/* Urgency Badge */}
                    <div className={`absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-gradient-to-r ${method.bgGradient} text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold transition-transform duration-300 group-hover:scale-105`}>
                      {method.urgency}
                    </div>
                    
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 ${method.iconBg} rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-all duration-300 group-hover:bg-primary-accent/30`}>
                      <method.icon className={`w-8 h-8 sm:w-10 sm:h-10 ${method.textColor} transition-all duration-300 group-hover:scale-110`} />
                    </div>
                    
                    <h3 className={`text-xl sm:text-2xl font-bold ${method.textColor} mb-2 transition-colors duration-300`}>{method.title}</h3>
                    <p className={`${method.textColor} mb-2 sm:mb-3 opacity-80 text-sm sm:text-base transition-opacity duration-300 group-hover:opacity-90`}>{method.subtitle}</p>
                    <p className={`text-xs sm:text-sm ${method.textColor} mb-3 sm:mb-4 opacity-70 transition-opacity duration-300 group-hover:opacity-80`}>{method.description}</p>
                    <p className={`text-lg sm:text-xl font-bold ${method.textColor} mb-3 sm:mb-4 break-all transition-colors duration-300`}>{method.content}</p>
                    <p className={`text-xs sm:text-sm ${method.textColor} mb-4 sm:mb-6 opacity-60 transition-opacity duration-300 group-hover:opacity-70`}>{method.responseTime}</p>
                    
                    <a
                      href={method.href}
                      className={`${method.buttonStyle} text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-xl inline-block transition-all duration-300 hover:shadow-xl w-full text-sm sm:text-base transform hover:translate-y-[-2px]`}
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
        <section id="contact-form" className="py-16 sm:py-24 bg-gradient-to-br from-primary-dark via-primary-accent to-secondary-accent">
          <div className="septic-max-width px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
              {/* Contact Form */}
              <div>
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white leading-tight">
                    Get Your
                    <span className="block bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent">
                      Free Estimate
                    </span>
                  </h2>
                  <p className="text-lg sm:text-xl text-slate-300">
                    Fill out the form below and we&apos;ll get back to you with a detailed quote for your septic needs.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8">
                  <ContactForm />
                </div>
              </div>

              {/* Service Areas & Business Info */}
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white leading-tight">
                    Service
                    <span className="block bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent">
                      Areas
                    </span>
                  </h2>
                  <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8">
                    We serve a 100-mile radius from Cedar Park, covering Travis, Williamson, Burnet, and Hays counties.
                  </p>
                </div>

                {/* Service Areas */}
                <div className="space-y-4">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="bg-primary-dark/80 backdrop-blur-sm border-2 border-primary-accent/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-primary-accent transition-all duration-300">
                      <div className="flex items-start space-x-3 sm:space-x-4 mb-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-accent rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                          <area.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-dark" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{area.title}</h3>
                          <p className="text-primary-accent font-medium text-sm sm:text-base">{area.description}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                        {area.areas.map((location, idx) => (
                          <Link
                            key={idx}
                            href="/service-areas"
                            className="bg-primary-accent/20 border border-primary-accent/40 text-white rounded-lg px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-center hover:bg-primary-accent/40 hover:border-primary-accent/60 transition-all duration-200 cursor-pointer hover:scale-105 hover:shadow-md"
                          >
                            {location}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Business Hours */}
                <div className="bg-primary-dark/80 backdrop-blur-sm border-2 border-primary-accent/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-primary-accent transition-all duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary-accent mr-2 sm:mr-3" />
                    Business Hours
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="bg-primary-accent/20 border border-primary-accent/40 rounded-lg p-3 sm:p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium text-sm sm:text-base">24/7 Availability</span>
                        <span className="font-bold text-primary-accent text-sm sm:text-base">Always Open</span>
                      </div>
                    </div>
                    <div className="bg-primary-accent/10 border border-primary-accent/30 rounded-lg p-3 sm:p-4">
                      <div className="flex items-center text-primary-accent mb-2">
                        <AlertTriangle className="w-4 h-4 mr-2" />
                        <span className="font-medium text-sm sm:text-base">Emergency Service Available 24/7</span>
                      </div>
                      <p className="text-white/90 text-xs sm:text-sm">
                        We never close because septic emergencies don&apos;t wait for business hours.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="bg-primary-dark/80 backdrop-blur-sm border-2 border-primary-accent/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-primary-accent transition-all duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary-accent mr-2 sm:mr-3" />
                    Our Location
                  </h3>
                  <div className="bg-primary-accent/20 border border-primary-accent/40 rounded-lg p-3 sm:p-4">
                    <p className="text-white font-bold mb-2 text-sm sm:text-base break-words">2204 Inks Cv, Cedar Park, TX 78613</p>
                    <p className="text-primary-accent text-xs sm:text-sm font-medium">
                      Centrally located to serve Austin and surrounding areas efficiently
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        

        {/* Final Emergency CTA */}
        <section className="py-16 sm:py-24 bg-gradient-to-r from-red-600 via-red-700 to-orange-600 text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="septic-max-width text-center relative z-10 px-4 sm:px-6">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
              Septic Emergency? Don&apos;t Wait!
            </h2>
            <p className="text-lg sm:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto opacity-90">
              Septic emergencies can cause serious damage and health hazards. 
              Our emergency response team is standing by 24/7 to help when you need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-2xl mx-auto">
              <a
                href={`tel:${CONTACT_INFO.emergencyPhone}`}
                className="bg-white text-red-600 hover:bg-slate-100 font-bold py-4 sm:py-6 px-6 sm:px-10 rounded-xl sm:rounded-2xl text-lg sm:text-xl inline-flex items-center justify-center space-x-3 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8" />
                <div className="text-left">
                  <div className="text-xs sm:text-sm">EMERGENCY</div>
                  <div className="text-lg sm:text-2xl font-black break-all">{CONTACT_INFO.emergencyPhone}</div>
                </div>
              </a>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="bg-red-800 hover:bg-red-900 text-white font-bold py-4 sm:py-6 px-6 sm:px-10 rounded-xl sm:rounded-2xl text-lg sm:text-xl inline-flex items-center justify-center space-x-3 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
                <div className="text-left">
                  <div className="text-xs sm:text-sm">Business Line</div>
                  <div className="text-base sm:text-lg break-all">{CONTACT_INFO.phone}</div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </ServiceErrorBoundary>
  );
}