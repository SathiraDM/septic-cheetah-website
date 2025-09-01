'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Phone, Shield, Clock, Calendar, Building, FileText } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import { trackPhoneCall } from '@/lib/utils';

const mainServices = [
  {
    id: 'grease-trap',
    title: 'Grease Trap Services',
    description: 'Professional grease trap cleaning and maintenance for restaurants and commercial kitchens.',
    href: '/services/grease-waste-management#grease-trap',
    icon: Building,
    features: [
      'Regular maintenance schedules',
      'Emergency cleaning services',
      'Compliance documentation',
      'Proper waste disposal',
      'Restaurant & commercial focus'
    ],
    benefits: [
      'Prevent costly blockages',
      'Maintain health code compliance',
      'Avoid fines and violations',
      'Protect your reputation',
      'Extend equipment lifespan'
    ]
  }
];

const commercialBenefits = [
  {
    icon: Shield,
    title: 'Regulatory Compliance',
    description: 'Stay compliant with local health codes and environmental regulations with proper documentation and certified disposal.'
  },
  {
    icon: Clock,
    title: 'Scheduled Service',
    description: 'Reliable scheduled maintenance ensures your grease traps never overflow, keeping your business running smoothly.'
  },
  {
    icon: FileText,
    title: 'Complete Documentation',
    description: 'Detailed service records and compliance certificates for health inspections and regulatory requirements.'
  }
];

const businessTypes = [
  {
    title: 'Restaurants',
    description: 'Full-service restaurants, fast-food chains, and dining establishments',
    icon: '🍽️'
  },
  {
    title: 'Commercial Kitchens',
    description: 'Hospital cafeterias, school kitchens, and corporate dining facilities',
    icon: '🏢'
  },
  {
    title: 'Food Processing',
    description: 'Food manufacturing, processing plants, and commercial bakeries',
    icon: '🏭'
  },
  {
    title: 'Hotels & Hospitality',
    description: 'Hotels, resorts, catering companies, and event venues',
    icon: '🏨'
  }
];

const processSteps = [
  {
    number: '01',
    title: 'System Assessment',
    description: 'Evaluate grease trap condition, capacity, and maintenance needs for optimal scheduling.',
    duration: '10-15 min'
  },
  {
    number: '02',
    title: 'Professional Cleaning',
    description: 'Complete removal of grease, oil, and debris using specialized equipment and techniques.',
    duration: '30-45 min'
  },
  {
    number: '03',
    title: 'Proper Disposal',
    description: 'Safe, environmentally compliant disposal at licensed waste management facilities.',
    duration: 'Included'
  },
  {
    number: '04',
    title: 'Documentation',
    description: 'Complete service records and compliance certificates for your business records.',
    duration: '5 min'
  }
];

const maintenanceSchedule = [
  {
    frequency: 'Weekly',
    businessType: 'High-volume restaurants',
    description: 'Busy establishments with heavy grease production'
  },
  {
    frequency: 'Bi-weekly',
    businessType: 'Medium restaurants',
    description: 'Moderate volume dining establishments'
  },
  {
    frequency: 'Monthly',
    businessType: 'Small restaurants',
    description: 'Lower volume or specialty food service'
  },
  {
    frequency: 'Quarterly',
    businessType: 'Commercial kitchens',
    description: 'Office cafeterias and limited food service'
  }
];

const frequentlyAskedQuestions = [
  {
    question: 'How often should my grease trap be cleaned?',
    answer: 'Cleaning frequency depends on your business volume and local regulations. Most restaurants need service every 2-4 weeks, while high-volume establishments may require weekly cleaning. We\'ll assess your needs and create a customized maintenance schedule.'
  },
  {
    question: 'What happens if I don\'t maintain my grease trap?',
    answer: 'Neglected grease traps can cause serious problems including sewage backups, health code violations, environmental fines, and expensive emergency repairs. Regular maintenance prevents these costly issues.'
  },
  {
    question: 'Do you provide compliance documentation?',
    answer: 'Yes, we provide complete service records and compliance certificates after each cleaning. This documentation is essential for health inspections and environmental compliance requirements.'
  },
  {
    question: 'Can you service grease traps during business hours?',
    answer: 'We offer flexible scheduling to minimize disruption to your business. Many cleanings can be performed during low-activity periods, and we work quickly to reduce any inconvenience.'
  }
];

export default function GreaseWasteManagementPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-orange-800 via-orange-700 to-amber-600 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-orange-400 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-amber-400 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.1)_0%,transparent_50%)] pointer-events-none"></div>
        </div>
        
        <div className="septic-max-width relative z-10 py-20 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-white">Grease & Waste</span>
                  <span className="block text-orange-300">Management</span>
                </h1>
                <p className="text-xl lg:text-2xl text-orange-100 leading-relaxed max-w-2xl">
                  Professional grease trap services and commercial waste management solutions 
                  to keep your business compliant and running smoothly.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  onClick={() => trackPhoneCall('grease_hero')}
                  className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-3 hover:shadow-xl hover:scale-105"
                >
                  <Phone className="w-6 h-6" />
                  <span className="text-lg">Schedule Service</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  href="/contact"
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 hover:bg-white/20 hover:border-white/30"
                >
                  <span className="text-lg">Get Free Quote</span>
                </Link>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {['Licensed', 'Insured', 'Compliant Disposal', '24/7 Emergency'].map((signal, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-orange-300" />
                    <span className="text-sm font-medium text-white/90">{signal}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Side */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-lg w-full">
                <Image
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=500&fit=crop"
                  alt="Commercial grease trap cleaning service"
                  width={600}
                  height={500}
                  className="object-cover w-full h-full"
                />
                
                {/* Floating Service Badge */}
                <div className="absolute top-6 right-6 bg-orange-600/95 backdrop-blur-sm text-white p-4 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold">Commercial Focus</div>
                    <div className="text-sm opacity-90">Licensed & Certified</div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <Building className="w-4 h-4 text-orange-600" />
                      <span className="font-semibold text-gray-800">Commercial Specialist</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="flex text-yellow-400">
                        {'★'.repeat(5)}
                      </div>
                      <div className="font-bold text-sm text-gray-800">4.9/5</div>
                      <div className="text-xs text-gray-600">200+ Businesses</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-24 bg-white">
        <div className="septic-max-width">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-primary-dark">Professional Grease</span>
              <span className="block text-orange-600">Management Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Keep your business compliant and running smoothly with our comprehensive 
              grease trap services and waste management solutions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {mainServices.map((service) => (
              <div key={service.id} id={service.id} className="group relative bg-white rounded-2xl border border-gray-200 hover:border-orange-400/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="p-8">
                  {/* Service Header */}
                  <div className="flex items-start space-x-6 mb-8">
                    <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-primary-dark mb-4 group-hover:text-orange-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Service Features */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-4 text-lg">What&apos;s Included:</h4>
                      <div className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Business Benefits */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-4 text-lg">Business Benefits:</h4>
                      <div className="space-y-3">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <Shield className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8">
                    <Link
                      href={service.href}
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold py-3 px-8 rounded-xl hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Types Section */}
      <section className="py-24 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="septic-max-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-primary-dark">Businesses We</span>
              <span className="block text-orange-600">Serve</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized grease management services for all types of commercial food service operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessTypes.map((business, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 text-3xl">
                  {business.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-3">{business.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{business.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Schedule Section */}
      <section className="py-24 bg-white">
        <div className="septic-max-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-primary-dark">Recommended</span>
              <span className="block text-orange-600">Maintenance Schedule</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proper scheduling keeps your grease traps compliant and prevents costly emergencies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {maintenanceSchedule.map((schedule, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold text-orange-600 mb-3">{schedule.frequency}</div>
                <h3 className="text-lg font-semibold text-primary-dark mb-3">{schedule.businessType}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{schedule.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="septic-max-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-primary-dark">Why Choose Our</span>
              <span className="block text-orange-600">Commercial Services?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional grease management that keeps your business compliant, efficient, and protected
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commercialBenefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-primary-dark mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="septic-max-width">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-primary-dark">Our Professional</span>
              <span className="block text-orange-600">Service Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every grease trap service follows our proven process for thorough cleaning 
              and complete compliance documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm group-hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark mb-4">{step.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                  <div className="text-orange-600 text-sm font-semibold">{step.duration}</div>
                </div>
                
                {/* Connection Arrow */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-orange-400/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="septic-max-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-primary-dark">Frequently Asked</span>
              <span className="block text-orange-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about commercial grease trap services
            </p>
          </div>

          <div className="space-y-8">
            {frequentlyAskedQuestions.map((faq, index) => (
              <div key={index} className="bg-white border border-orange-200/50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-orange-400/50">
                <h3 className="text-xl font-bold text-primary-dark mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-orange-700 via-orange-600 to-amber-600 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)] pointer-events-none"></div>
        
        <div className="septic-max-width text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Ready to Schedule Your <span className="text-orange-300">Grease Trap Service?</span>
          </h2>
          <p className="text-xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed">
            Keep your business compliant and running smoothly with professional grease management. 
            Contact us today for reliable service and complete documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              onClick={() => trackPhoneCall('grease_final_cta')}
              className="bg-white text-orange-600 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              <span className="text-lg">Call Now: {CONTACT_INFO.phone}</span>
            </a>
            <Link
              href="/contact"
              className="bg-orange-800 border border-orange-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-orange-700 transition-all duration-300 flex items-center justify-center space-x-3"
            >
              <Calendar className="w-6 h-6" />
              <span className="text-lg">Schedule Service</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
