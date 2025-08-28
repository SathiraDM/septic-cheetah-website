'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import ServiceCards from '@/components/ServiceCards';
import TestimonialsWithDrag from '@/components/TestimonialsWithDrag';
import ContactForm from '@/components/ContactForm';
import EmergencyModal from '@/components/EmergencyModal';
import Image from 'next/image';
import { Phone, AlertTriangle } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import { trackPhoneCall } from '@/lib/utils';

export default function HomePage() {
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);

  const openEmergencyModal = () => {
    setIsEmergencyModalOpen(true);
  };

  const closeEmergencyModal = () => {
    setIsEmergencyModalOpen(false);
  };

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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
            
              {/* Left Side - Content */}
              <div className="text-white px-4 sm:px-0">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 sm:mb-8">
                  <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-primary-accent" />
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
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

                {/* Contact Image */}
                <div className="mt-8 sm:mt-10">
                  <div className="relative group cursor-pointer" onClick={openEmergencyModal}>
                    {/* Animated background gradient */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary-accent via-secondary-accent to-primary-accent rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-all duration-500 animate-pulse"></div>
                    
                    {/* Secondary glow layer */}
                    <div className="absolute -inset-1 bg-gradient-to-br from-white/20 to-primary-accent/30 rounded-2xl blur opacity-40 group-hover:opacity-60 transition-all duration-300"></div>
                    
                    {/* Main image container */}
                    <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-white/30 shadow-2xl overflow-hidden">
                      {/* Decorative corner accents */}
                      <div className="absolute top-0 left-0 w-12 h-12 bg-gradient-to-br from-primary-accent/30 to-transparent rounded-br-3xl"></div>
                      <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-secondary-accent/30 to-transparent rounded-tl-3xl"></div>
                      
                      {/* Click indicator overlay */}
                      <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl flex items-center justify-center">
                        <div className="bg-red-600/90 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Click for Emergency
                        </div>
                      </div>
                      
                      <Image
                        src="/images/ContactUs.png"
                        alt="Contact Septic Cheetah for professional septic services - Click for Emergency"
                        width={350}
                        height={240}
                        className="w-full h-auto rounded-xl shadow-xl transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl"
                        priority={false}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Form Component */}
              <ContactForm />
            </div>
          </div>
        </section>
      
      {/* Emergency Modal */}
      <EmergencyModal 
        isOpen={isEmergencyModalOpen} 
        onClose={closeEmergencyModal} 
      />
    </div>
  );
}