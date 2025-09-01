'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Phone, Shield, Clock, Calendar, Search, AlertTriangle, Truck } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import { trackPhoneCall } from '@/lib/utils';
const mainServices = [
  {
    id: 'pumping-cleaning',
    title: 'Septic Tank Pumping & Cleaning',
    description: 'Professional septic tank pumping and cleaning services for optimal system performance.',
    href: '/services/maintenance-inspection#pumping-cleaning',
    icon: Truck,
    features: [
      'Complete waste removal',
      'Tank inspection included',
      'Proper waste disposal',
      'System performance check',
      'Maintenance recommendations'
    ],
    whenNeeded: [
      'Every 3-5 years for most homes',
      'Slow drains or backups',
      'Gurgling sounds from drains',
      'Sewage odors outside',
      'Standing water around system'
    ]
  },
  {
    id: 'inspections',
    title: 'Septic System Inspections',
    description: 'Thorough septic system inspections for real estate transactions and maintenance.',
    href: '/services/maintenance-inspection#inspections',
    icon: Search,
    features: [
      'Pre-purchase inspections',
      'Routine maintenance inspections',
      'Detailed reporting',
      'Problem identification',
      'Compliance verification'
    ],
    whenNeeded: [
      'Before buying property',
      'Real estate transactions',
      'Annual system health checks',
      'After repair work',
      'Regulatory compliance'
    ]
  }
];

const maintenanceBenefits = [
  {
    icon: Shield,
    title: 'Prevent Costly Repairs',
    description: 'Regular maintenance catches problems early, preventing expensive emergency repairs and system failures.'
  },
  {
    icon: Clock,
    title: 'Extend System Lifespan',
    description: 'Proper maintenance can extend your septic system\'s lifespan by 10-15 years or more.'
  },
  {
    icon: CheckCircle,
    title: 'Protect Your Property',
    description: 'Maintain your property value and protect your family\'s health with regular system care.'
  }
];

const processSteps = [
  {
    number: '01',
    title: 'System Assessment',
    description: 'Comprehensive evaluation of your system\'s current condition and maintenance needs.',
    duration: '15-20 min'
  },
  {
    number: '02',
    title: 'Service Execution',
    description: 'Professional pumping, cleaning, or inspection performed to industry standards.',
    duration: '30-60 min'
  },
  {
    number: '03',
    title: 'Detailed Reporting',
    description: 'Complete documentation of work performed and recommendations for future care.',
    duration: '10-15 min'
  },
  {
    number: '04',
    title: 'Maintenance Planning',
    description: 'Customized maintenance schedule based on your system\'s specific needs.',
    duration: '5-10 min'
  }
];

const frequentlyAskedQuestions = [
  {
    question: 'How often should I have my septic tank pumped?',
    answer: 'Most residential septic tanks should be pumped every 3-5 years. However, the frequency depends on factors like household size, tank size, and usage patterns. Our experts can provide a customized maintenance schedule for your specific system.'
  },
  {
    question: 'What happens during a septic inspection?',
    answer: 'Our comprehensive inspection includes locating all system components, checking tank condition, testing pumps and alarms, evaluating the drain field, and providing a detailed written report with findings and recommendations.'
  },
  {
    question: 'Do I need an inspection before buying a home?',
    answer: 'Yes, a pre-purchase septic inspection is highly recommended. It can identify potential problems that could cost thousands in repairs, giving you negotiating power and peace of mind before closing on the property.'
  },
  {
    question: 'What are signs my septic tank needs pumping?',
    answer: 'Warning signs include slow drains, gurgling sounds, sewage odors outside, standing water around the system, or lush grass growth over the drain field. If you notice any of these signs, contact us immediately.'
  }
];

export default function MaintenanceInspectionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-green-800 via-green-700 to-emerald-600 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-green-400 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-emerald-400 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.1)_0%,transparent_50%)] pointer-events-none"></div>
        </div>
        
        <div className="septic-max-width relative z-10 py-20 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-white">Septic Maintenance</span>
                  <span className="block text-green-300">& Inspection</span>
                </h1>
                <p className="text-xl lg:text-2xl text-green-100 leading-relaxed max-w-2xl">
                  Preventive maintenance and professional inspections to keep your septic system 
                  healthy, compliant, and operating at peak performance.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  onClick={() => trackPhoneCall('maintenance_hero')}
                  className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-3 hover:shadow-xl hover:scale-105"
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

              {/* Mobile Pricing Display */}
              <div className="lg:hidden bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center">
                <div className="text-2xl font-bold text-green-300">Starting at $200</div>
                <div className="text-sm text-white/80">Most residential properties</div>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-lg w-full">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=500&fit=crop"
                  alt="Professional septic maintenance and inspection"
                  width={600}
                  height={500}
                  className="object-cover w-full h-full"
                />
                
                {/* Floating Pricing Badge - Desktop Only */}
                <div className="hidden lg:block absolute top-6 right-6 bg-green-600/95 backdrop-blur-sm text-white p-4 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">Starting at $200</div>
                    <div className="text-sm opacity-90">Most residential properties</div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-green-600" />
                      <span className="font-semibold text-gray-800">Licensed & Insured</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="flex text-yellow-400">
                        {'★'.repeat(5)}
                      </div>
                      <div className="font-bold text-sm text-gray-800">4.9/5</div>
                      <div className="text-xs text-gray-600">400+ Reviews</div>
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
              <span className="text-primary-dark">Our Maintenance &</span>
              <span className="block text-green-600">Inspection Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive preventive care and professional inspections to keep your septic system 
              operating efficiently and avoid costly emergency repairs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mainServices.map((service) => (
              <div key={service.id} id={service.id} className="group relative bg-white rounded-2xl border border-gray-200 hover:border-green-400/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="p-8">
                  {/* Service Icon */}
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-primary-dark mb-4 group-hover:text-green-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Service Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-800 mb-3">What&apos;s Included:</h4>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* When Needed */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-800 mb-3">When You Need This Service:</h4>
                    <div className="space-y-2">
                      {service.whenNeeded.map((situation, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <AlertTriangle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{situation}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={service.href}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="septic-max-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-primary-dark">Benefits of Regular</span>
              <span className="block text-green-600">Maintenance</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Preventive care is the key to a long-lasting, efficient septic system that protects 
              your property investment and family&apos;s health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {maintenanceBenefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-green-600" />
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
              <span className="block text-green-600">Service Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every maintenance and inspection service follows our proven process to ensure 
              thorough, professional results you can rely on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm group-hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark mb-4">{step.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                  <div className="text-green-600 text-sm font-semibold">{step.duration}</div>
                </div>
                
                {/* Connection Arrow */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-green-400/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="septic-max-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-primary-dark">Frequently Asked</span>
              <span className="block text-green-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about septic maintenance and inspection services
            </p>
          </div>

          <div className="space-y-8">
            {frequentlyAskedQuestions.map((faq, index) => (
              <div key={index} className="bg-white border border-green-200/50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-green-400/50">
                <h3 className="text-xl font-bold text-primary-dark mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-green-700 via-green-600 to-emerald-600 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)] pointer-events-none"></div>
        
        <div className="septic-max-width text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Ready to Schedule Your <span className="text-green-300">Septic Maintenance?</span>
          </h2>
          <p className="text-xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed">
            Don&apos;t wait for problems to develop. Preventive maintenance and regular inspections 
            keep your system healthy and save you money in the long run.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              onClick={() => trackPhoneCall('maintenance_final_cta')}
              className="bg-white text-green-600 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              <span className="text-lg">Call Now: {CONTACT_INFO.phone}</span>
            </a>
            <Link
              href="/contact"
              className="bg-green-800 border border-green-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-green-700 transition-all duration-300 flex items-center justify-center space-x-3"
            >
              <Calendar className="w-6 h-6" />
              <span className="text-lg">Schedule Online</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
