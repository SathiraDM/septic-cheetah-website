'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ServiceCards from '@/components/ServiceCards';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import PhoneButton from '@/components/PhoneButton';
import { MapPin, Clock, Shield, Award } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <Hero />
      <ServiceCards />
      <Testimonials />
      
      {/* Service Area & Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Service Area & Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-primary-dark mb-6">
                  Service Area & Contact
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-primary-accent mt-1" />
                    <div>
                      <h4 className="font-bold text-primary-dark mb-2">Service Area</h4>
                      <p className="text-text-primary">
                        We proudly serve the entire region with fast, reliable septic services. 
                        Call to confirm service availability in your area.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-primary-accent mt-1" />
                    <div>
                      <h4 className="font-bold text-primary-dark mb-2">Business Hours</h4>
                      <p className="text-text-primary mb-1">{CONTACT_INFO.hours}</p>
                      <p className="text-red-600 font-medium">{CONTACT_INFO.emergencyHours}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Shield className="w-6 h-6 text-primary-accent mt-1" />
                    <div>
                      <h4 className="font-bold text-primary-dark mb-2">Licensed & Insured</h4>
                      <p className="text-text-primary">
                        Fully licensed, bonded, and insured for your protection. 
                        All work guaranteed and compliant with local regulations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Award className="w-6 h-6 text-primary-accent mt-1" />
                    <div>
                      <h4 className="font-bold text-primary-dark mb-2">Quality Guarantee</h4>
                      <p className="text-text-primary">
                        We stand behind our work with a satisfaction guarantee. 
                        If you&apos;re not happy, we&apos;ll make it right.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h4 className="text-xl font-bold text-red-800 mb-3">
                  24/7 Emergency Service
                </h4>
                <p className="text-red-700 mb-4">
                  Septic emergencies don&apos;t wait for business hours. Our emergency team 
                  is available around the clock for urgent situations.
                </p>
                <a
                  href="tel:(555) 911-HELP"
                  className="btn-emergency inline-flex items-center space-x-2"
                >
                  <span>EMERGENCY: (555) 911-HELP</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PhoneButton />
    </>
  );
}