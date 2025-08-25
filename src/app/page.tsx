'use client';

import Hero from '@/components/Hero';
import ServiceCards from '@/components/ServiceCards';
import TestimonialsWithDrag from '@/components/TestimonialsWithDrag';
import ContactForm from '@/components/ContactForm';
import { Phone, AlertTriangle } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import { trackPhoneCall } from '@/lib/utils';

export default function HomePage() {
  return (
    <div className="septic-no-overflow">
      <Hero />
      {/* Service Cards Section - Full width background, content limited */}
      <ServiceCards />
      
      {/* Testimonials Section - Full width background, content limited */}
      <TestimonialsWithDrag />

      {/* Get Your Free Estimate - Redesigned */}
      <section className="septic-section-wrapper py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary-dark via-primary-dark to-secondary-accent relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(191,136,41,0.2)_0%,transparent_50%)] pointer-events-none"></div>
          
          <div className="septic-content-constrained septic-force-1540 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            
              {/* Left Side - Content */}
              <div className="text-white px-4 sm:px-0">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 sm:mb-8">
                  <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-primary-accent" />
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                  Get Your <span className="text-primary-accent">Free Estimate</span>
                </h2>
                
                <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed">
                  Professional septic services with transparent pricing. Fill out our simple form 
                  and we&apos;ll contact you as soon as possible - often within minutes!
                </p>

                {/* Trust Indicators */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-accent rounded-full flex-shrink-0"></div>
                    <span className="text-gray-200 text-sm sm:text-base">No hidden fees or surprise charges</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-accent rounded-full flex-shrink-0"></div>
                    <span className="text-gray-200 text-sm sm:text-base">Same-day response guaranteed</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-accent rounded-full flex-shrink-0"></div>
                    <span className="text-gray-200 text-sm sm:text-base">Licensed & insured professionals</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-accent rounded-full flex-shrink-0"></div>
                    <span className="text-gray-200 text-sm sm:text-base">15+ years serving Central Texas</span>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="bg-red-600/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-red-500/20 emergency-section-320">
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 flex items-center">
                    <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 icon-320-md" />
                    24/7 Emergency Service
                  </h4>
                  <p className="text-red-100 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                    Septic emergencies can&apos;t wait. Our emergency response team is available 
                    around the clock for urgent situations.
                  </p>
                  <a
                    href={`tel:${CONTACT_INFO.emergencyPhone}`}
                    onClick={() => trackPhoneCall('homepage_emergency')}
                    className="inline-flex items-center space-x-2 bg-white text-red-600 font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base emergency-btn-ultra-compact"
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 icon-320-sm" />
                    <span className="whitespace-nowrap emergency-text-320">EMERGENCY: {CONTACT_INFO.emergencyPhone}</span>
                  </a>
                </div>
              </div>

              {/* Right Side - Contact Form Component */}
              <ContactForm />
            </div>
          </div>
        </section>
    </div>
  );
}