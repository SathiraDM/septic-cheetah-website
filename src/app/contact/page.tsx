import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Clock, Mail, MapPin, AlertTriangle } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import ContactHero from '@/components/ContactHero';
import FAQSection from '@/components/FAQSection';
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
    title: "Emergency Line",
    subtitle: "24/7 Emergency Response",
    description: "For all septic service needs & emergencies",
    content: CONTACT_INFO.emergencyPhone,
    href: `tel:${CONTACT_INFO.emergencyPhone}`,
    bgGradient: "from-red-500 to-red-600",
    bgLight: "bg-red-50",
    textColor: "text-red-800",
    iconBg: "bg-red-100",
    buttonStyle: "bg-red-600 hover:bg-red-700",
    urgency: "24/7 EMERGENCY",
    responseTime: "Immediate Response"
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 max-w-4xl mx-auto">
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
        <section id="contact-form" className="py-16 sm:py-24 bg-gradient-to-br from-primary-dark via-primary-dark to-secondary-accent relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(191,136,41,0.2)_0%,transparent_50%)] pointer-events-none"></div>
          
          <div className="septic-max-width px-4 sm:px-6 relative">
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
              <div className="h-full flex flex-col space-y-6 sm:space-y-8">
                {/* Service Areas Header */}
                <div className="bg-gradient-to-br from-primary-dark/90 to-primary-dark/60 backdrop-blur-sm border-2 border-primary-accent/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-primary-accent/20 backdrop-blur-sm rounded-2xl mb-6">
                      <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-primary-accent" />
                    </div>
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white leading-tight">
                      Service
                      <span className="block bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent">
                        Areas
                      </span>
                    </h2>
                    <p className="text-lg sm:text-xl text-white/90">
                      We serve a 100-mile radius from Cedar Park, covering Travis, Williamson, Burnet, and Hays counties.
                    </p>
                  </div>
                </div>

                {/* Enhanced Service Areas Grid */}
                <div className="flex-1 grid grid-cols-1 gap-6">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="group relative bg-gradient-to-br from-primary-dark/80 to-primary-dark/40 backdrop-blur-sm border-2 border-primary-accent/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-primary-accent hover:shadow-2xl hover:shadow-primary-accent/20 transition-all duration-500 overflow-hidden">
                      {/* Decorative background elements */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-accent/10 to-transparent rounded-bl-3xl"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary-accent/10 to-transparent rounded-tr-3xl"></div>
                      
                      <div className="relative z-10">
                        {/* Area Header */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-accent to-secondary-accent rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                              <area.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-dark" />
                            </div>
                            <div>
                              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{area.title}</h3>
                              <p className="text-primary-accent font-semibold text-sm sm:text-base">{area.description}</p>
                            </div>
                          </div>
                          <div className="hidden sm:block w-2 h-2 bg-primary-accent rounded-full animate-pulse"></div>
                        </div>
                        
                        {/* Enhanced Location Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {area.areas.map((location, idx) => (
                            <Link
                              key={idx}
                              href="/service-areas"
                              className="group/item relative bg-primary-accent/15 hover:bg-primary-accent/30 border border-primary-accent/40 hover:border-primary-accent/70 text-white rounded-xl px-3 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-center transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-primary-accent/20 transform overflow-hidden"
                            >
                              {/* Hover effect background */}
                              <div className="absolute inset-0 bg-gradient-to-r from-primary-accent/0 via-primary-accent/20 to-primary-accent/0 translate-x-[-100%] group-hover/item:translate-x-[100%] transition-transform duration-700"></div>
                              <span className="relative z-10">{location}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Business Hours & Location - Combined Card */}
                <div className="bg-gradient-to-br from-primary-dark/90 to-primary-dark/60 backdrop-blur-sm border-2 border-primary-accent/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-8">
                  {/* Business Hours */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-accent to-secondary-accent rounded-xl flex items-center justify-center mr-4">
                        <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary-dark" />
                      </div>
                      Business Hours
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-primary-accent/20 to-secondary-accent/20 border border-primary-accent/50 rounded-xl p-4 sm:p-5">
                        <div className="flex justify-between items-center">
                          <span className="text-white font-semibold text-sm sm:text-base">24/7 Availability</span>
                          <span className="font-bold text-primary-accent text-sm sm:text-base bg-primary-accent/20 px-3 py-1 rounded-full">Always Open</span>
                        </div>
                      </div>
                      <div className="bg-primary-accent/10 border border-primary-accent/30 rounded-xl p-4 sm:p-5">
                        <div className="flex items-center text-primary-accent mb-3">
                          <AlertTriangle className="w-5 h-5 mr-3" />
                          <span className="font-semibold text-sm sm:text-base">Emergency Service Available 24/7</span>
                        </div>
                        <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                          We never close because septic emergencies don&apos;t wait for business hours.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-accent to-secondary-accent rounded-xl flex items-center justify-center mr-4">
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary-dark" />
                      </div>
                      Our Location
                    </h3>
                    <div className="bg-gradient-to-r from-primary-accent/20 to-secondary-accent/20 border border-primary-accent/50 rounded-xl p-4 sm:p-5">
                      <p className="text-white font-bold mb-3 text-base sm:text-lg break-words">2204 Inks Cv, Cedar Park, TX 78613</p>
                      <p className="text-primary-accent text-sm sm:text-base font-medium leading-relaxed">
                        Centrally located to serve Austin and surrounding areas efficiently
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        

        {/* FAQ Section */}
        <FAQSection />

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
                className="bg-white text-red-600 hover:bg-slate-100 font-bold py-6 sm:py-8 px-8 sm:px-12 rounded-xl sm:rounded-2xl text-xl sm:text-2xl inline-flex items-center justify-center space-x-4 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <AlertTriangle className="w-8 h-8 sm:w-10 sm:h-10" />
                <div className="text-left">
                  <div className="text-sm sm:text-base">24/7 EMERGENCY</div>
                  <div className="text-xl sm:text-3xl font-black break-all">{CONTACT_INFO.emergencyPhone}</div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </ServiceErrorBoundary>
  );
}