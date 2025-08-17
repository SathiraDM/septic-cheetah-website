import Link from 'next/link';
import { Truck, Wrench, Settings, ArrowRight } from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import { trackEvent } from '@/lib/utils';

const iconMap = {
  Truck,
  Wrench,
  Settings,
};

export default function ServiceCards() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Septic Services</h2>
          <p className="section-subtitle">
            Professional septic solutions for residential and commercial properties. 
            Licensed, insured, and ready to handle any septic challenge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <div key={service.id} className="service-card group">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary-accent/10 rounded-lg mr-4">
                    <IconComponent className="w-8 h-8 text-primary-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark">
                    {service.title}
                  </h3>
                </div>

                <p className="text-text-primary mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary-accent">
                      {service.startingPrice}
                    </span>
                    <span className="text-sm text-gray-600">Starting at</span>
                  </div>

                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-text-primary">
                        <div className="w-2 h-2 bg-primary-accent rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={service.href}
                  onClick={() => trackEvent('service_interest', { service: service.id })}
                  className="w-full bg-primary-accent hover:bg-secondary-accent text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 group-hover:shadow-lg"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Emergency CTA */}
        <div className="mt-16 text-center">
          <div className="bg-red-50 border border-red-200 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-red-800 mb-4">
              Septic Emergency?
            </h3>
            <p className="text-red-700 mb-6">
              Don&apos;t wait! Septic emergencies can cause serious damage and health hazards. 
              Our emergency team is standing by 24/7.
            </p>
            <a
              href={`tel:${SERVICES[0] ? '(555) 911-HELP' : '(555) 123-4567'}`}
              className="btn-emergency text-lg"
            >
              EMERGENCY HOTLINE: (555) 911-HELP
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}