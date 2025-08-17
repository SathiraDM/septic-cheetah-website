"use client";

import Image from 'next/image';
import { Phone, CheckCircle } from 'lucide-react';
import { CONTACT_INFO, TRUST_SIGNALS } from '@/lib/constants';
import { trackPhoneCall } from '@/lib/utils';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-bg-primary to-bg-secondary min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="hero-title fade-in-up">
                Septic Cheetah
                <span className="block hero-subtitle mt-2">
                  Fast, Reliable and Kinda Dirty
                </span>
              </h1>
              <p className="text-lg md:text-xl text-text-primary max-w-2xl">
                Emergency septic services across the region - Same day response guaranteed. 
                We handle the dirty work so you don&apos;t have to.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                onClick={() => trackPhoneCall('hero_primary')}
                className="btn-primary text-lg flex items-center justify-center space-x-3"
              >
                <Phone className="w-5 h-5" />
                <span>CALL NOW: {CONTACT_INFO.phone}</span>
              </a>
              <button className="btn-secondary text-lg">
                Get Free Estimate
              </button>
            </div>

            {/* Trust Signals */}
            <div className="trust-bar">
              {TRUST_SIGNALS.map((signal, index) => (
                <div key={index} className="trust-item">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>{signal}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional septic service truck"
                width={600}
                height={400}
                priority
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Emergency Badge */}
            <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-4 rounded-xl shadow-lg">
              <div className="text-sm font-bold">24/7 EMERGENCY</div>
              <div className="text-xs">Same Day Response</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}