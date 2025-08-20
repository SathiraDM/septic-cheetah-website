'use client';

import Hero from '@/components/Hero';
import ServiceCards from '@/components/ServiceCards';
import Testimonials from '@/components/Testimonials';
import { Phone, ArrowRight, AlertTriangle } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import { trackPhoneCall } from '@/lib/utils';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceCards />
      <Testimonials />

      {/* Get Your Free Estimate - Redesigned */}
      <section className="py-24 bg-gradient-to-br from-primary-dark via-primary-dark to-secondary-accent relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(191,136,41,0.2)_0%,transparent_50%)] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Content */}
            <div className="text-white">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-8">
                <Phone className="w-8 h-8 text-primary-accent" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Get Your <span className="text-primary-accent">Free Estimate</span>
              </h2>
              
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Professional septic services with transparent pricing. Fill out our simple form 
                and we&apos;ll contact you within 2 hours during business hours.
              </p>

              {/* Trust Indicators */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-accent rounded-full"></div>
                  <span className="text-gray-200">No hidden fees or surprise charges</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-accent rounded-full"></div>
                  <span className="text-gray-200">Same-day response guaranteed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-accent rounded-full"></div>
                  <span className="text-gray-200">Licensed & insured professionals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-accent rounded-full"></div>
                  <span className="text-gray-200">15+ years serving Central Texas</span>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-600/90 backdrop-blur-sm rounded-2xl p-6 border border-red-500/20">
                <h4 className="text-xl font-bold text-white mb-3 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-2" />
                  24/7 Emergency Service
                </h4>
                <p className="text-red-100 mb-4 leading-relaxed">
                  Septic emergencies can&apos;t wait. Our emergency response team is available 
                  around the clock for urgent situations.
                </p>
                <a
                  href={`tel:${CONTACT_INFO.emergencyPhone}`}
                  onClick={() => trackPhoneCall('homepage_emergency')}
                  className="inline-flex items-center space-x-2 bg-white text-red-600 font-bold py-3 px-6 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  <span>EMERGENCY: {CONTACT_INFO.emergencyPhone}</span>
                </a>
              </div>
            </div>

            {/* Right Side - Modern Form */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-primary-dark mb-3">
                  Request Your Free Estimate
                </h3>
                <p className="text-gray-600">
                  Quick response • Professional service • Fair pricing
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-accent focus:border-primary-accent transition-all duration-300 bg-white/80 placeholder-gray-400"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-accent focus:border-primary-accent transition-all duration-300 bg-white/80 placeholder-gray-400"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-accent focus:border-primary-accent transition-all duration-300 bg-white/80 placeholder-gray-400"
                    placeholder="(512) 555-0123"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-accent focus:border-primary-accent transition-all duration-300 bg-white/80 placeholder-gray-400"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-accent focus:border-primary-accent transition-all duration-300 bg-white/80">
                    <option value="">Select a service...</option>
                    <option value="pumping">Septic Tank Pumping</option>
                    <option value="installation">New System Installation</option>
                    <option value="repairs">Emergency Repairs</option>
                    <option value="inspections">System Inspection</option>
                    <option value="grease-trap">Grease Trap Service</option>
                    <option value="portable-toilets">Portable Toilet Rental</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-accent focus:border-primary-accent transition-all duration-300 bg-white/80 placeholder-gray-400 resize-none"
                    placeholder="Please describe your septic needs or any urgent issues..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-accent to-secondary-accent text-white font-bold py-4 px-6 rounded-xl hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <span>Get My Free Estimate</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-2">Or call us directly</p>
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    onClick={() => trackPhoneCall('homepage_form')}
                    className="inline-flex items-center space-x-2 font-bold text-primary-accent hover:text-secondary-accent transition-colors duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{CONTACT_INFO.phone}</span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}