import Navigation from '@/components/Navigation';
import PhoneButton from '@/components/PhoneButton';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Phone } from 'lucide-react';
import { SERVICES, CONTACT_INFO } from '@/lib/constants';
import { trackPhoneCall } from '@/lib/utils';

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-bg-primary to-bg-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="hero-title mb-6">
            Professional Septic Services
          </h1>
          <p className="text-xl text-text-primary max-w-3xl mx-auto mb-8">
            From routine maintenance to emergency repairs, we provide comprehensive 
            septic solutions for residential and commercial properties.
          </p>
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            onClick={() => trackPhoneCall('services_hero')}
            className="btn-primary text-lg inline-flex items-center space-x-2"
          >
            <Phone className="w-5 h-5" />
            <span>Call for Service: {CONTACT_INFO.phone}</span>
          </a>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <div key={service.id} className="service-card">
                <h3 className="text-2xl font-bold text-primary-dark mb-4">
                  {service.title}
                </h3>
                <p className="text-text-primary mb-6">
                  {service.description}
                </p>
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      <span className="text-text-primary">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-2xl font-bold text-primary-accent">
                    {service.startingPrice}
                  </span>
                  <span className="text-sm text-gray-600">Starting at</span>
                </div>
                <Link
                  href={service.href}
                  className="btn-primary w-full inline-flex items-center justify-center space-x-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Choose Septic Cheetah?</h2>
            <p className="section-subtitle">
              We're not just another septic company. Here's what sets us apart 
              from the competition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Licensed & Insured',
                description: 'Fully licensed professionals with comprehensive insurance coverage for your peace of mind.',
                icon: '🛡️'
              },
              {
                title: 'Same-Day Service',
                description: 'Emergency response when you need it most. We understand septic problems can\'t wait.',
                icon: '⚡'
              },
              {
                title: '15+ Years Experience',
                description: 'Decades of experience handling every type of septic system and challenge.',
                icon: '🏆'
              },
              {
                title: 'Fair Pricing',
                description: 'Transparent, competitive pricing with no hidden fees or surprise charges.',
                icon: '💰'
              },
              {
                title: 'Proper Disposal',
                description: 'Environmentally responsible waste disposal at licensed treatment facilities.',
                icon: '🌱'
              },
              {
                title: 'Satisfaction Guarantee',
                description: 'We stand behind our work with a 100% satisfaction guarantee on all services.',
                icon: '✅'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-primary-dark mb-3">
                  {benefit.title}
                </h3>
                <p className="text-text-primary">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Septic Emergency? We're Here 24/7
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't let a septic emergency ruin your day. Our emergency response team 
            is available around the clock to handle urgent situations.
          </p>
          <a
            href="tel:(555) 911-HELP"
            className="bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-xl inline-flex items-center space-x-2 transition-colors"
          >
            <Phone className="w-6 h-6" />
            <span>EMERGENCY: (555) 911-HELP</span>
          </a>
        </div>
      </section>

      <PhoneButton />
    </>
  );
}