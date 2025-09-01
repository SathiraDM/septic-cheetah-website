'use client';

import Image from 'next/image';
import { ArrowRight, CheckCircle, Phone, Shield, Clock, AlertTriangle, Wrench, Star, Award } from 'lucide-react';
import { CONTACT_INFO, SERVICE_CATEGORIES } from '@/lib/constants';
import { trackPhoneCall } from '@/lib/utils';
import { ServiceErrorBoundary } from '@/components/ServiceErrorBoundary';

// Get repairs category data
const repairsCategory = SERVICE_CATEGORIES.find(cat => cat.id === 'repairs');
const repairServices = repairsCategory?.services || [];

const urgencyLevels = [
  {
    level: 'Emergency',
    timeframe: '< 2 hours',
    description: 'Sewage backup, system overflow, health hazards',
    color: 'red'
  },
  {
    level: 'Urgent',
    timeframe: 'Same day',
    description: 'Pump failures, system not functioning',
    color: 'orange'
  },
  {
    level: 'Serious',
    timeframe: '1-2 days',
    description: 'Drain field issues, standing water',
    color: 'yellow'
  },
  {
    level: 'Planned',
    timeframe: '1-2 weeks',
    description: 'System replacement, major upgrades',
    color: 'blue'
  }
];

const repairBenefits = [
  {
    icon: Clock,
    title: 'Fast Emergency Response',
    description: '24/7 emergency response with rapid dispatch to address urgent septic failures and protect your property.'
  },
  {
    icon: Shield,
    title: 'Expert Diagnosis',
    description: 'Professional assessment and accurate diagnosis to provide the most effective and cost-efficient repair solution.'
  },
  {
    icon: CheckCircle,
    title: 'Lasting Solutions',
    description: 'Quality repairs with warranties that fix problems permanently, not just temporarily patch them.'
  },
  {
    icon: Award,
    title: 'Licensed Technicians',
    description: 'All repair work performed by licensed professionals with years of experience in septic system restoration.'
  }
];

const processSteps = [
  {
    number: '01',
    title: 'Emergency Assessment',
    description: 'Rapid on-site evaluation to identify the problem and determine the best repair approach.',
    duration: '15-30 min'
  },
  {
    number: '02',
    title: 'Professional Repair',
    description: 'Expert repair work using quality materials and proven techniques for lasting results.',
    duration: '1-4 hours'
  },
  {
    number: '03',
    title: 'System Testing',
    description: 'Comprehensive testing to ensure the repair is complete and the system functions properly.',
    duration: '15-30 min'
  },
  {
    number: '04',
    title: 'Prevention Planning',
    description: 'Maintenance recommendations and planning to prevent future problems.',
    duration: '10-15 min'
  }
];

const serviceGuarantees = [
  {
    icon: Shield,
    title: "24/7 Emergency",
    description: "Always available"
  },
  {
    icon: Clock,
    title: "< 2 Hour Response",
    description: "Critical emergencies"
  },
  {
    icon: Star,
    title: "Licensed Technicians",
    description: "Emergency specialists"
  },
  {
    icon: Award,
    title: "1-Year Warranty",
    description: "All repair work"
  }
];

const frequentlyAskedQuestions = [
  {
    question: 'How quickly can you respond to septic emergencies?',
    answer: 'We provide 24/7 emergency response with typical arrival times of 1-2 hours for critical emergencies. Our emergency hotline is staffed around the clock to dispatch our repair teams immediately.'
  },
  {
    question: 'How do I know if I need emergency repair vs. replacement?',
    answer: 'Our experts will assess your system and provide honest recommendations. Generally, if repair costs exceed 50% of replacement cost, or if you\'re having repeated failures, replacement may be more cost-effective long-term.'
  },
  {
    question: 'Do you provide warranties on repair work?',
    answer: 'Yes, we provide comprehensive warranties on all repair work. Emergency repairs include immediate warranty coverage, and major repairs come with extended warranty protection for your peace of mind.'
  },
  {
    question: 'Can you repair systems installed by other companies?',
    answer: 'Absolutely. We service and repair all types of septic systems regardless of who installed them. Our expertise covers conventional, aerobic, and specialized system types.'
  }
];

export default function RepairsPage() {
  return (
    <ServiceErrorBoundary>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section 
          className="relative bg-gradient-to-br from-primary-dark via-primary-dark/95 to-secondary-accent flex items-center justify-center overflow-hidden service-hero-responsive"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/55 via-primary-dark/35 to-secondary-accent/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-black/10"></div>
          <div className="absolute inset-0 bg-red-900/20"></div>
          
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-64 h-64 bg-red-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-500 rounded-full blur-3xl"></div>
          </div>
          
          <div className="septic-max-width z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center hero-grid-mobile">
              {/* Content Side */}
              <div className="space-y-8 text-center lg:text-center flex flex-col justify-center hero-content-mobile">
                <div className="space-y-8">
                  <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight hero-title-320">
                    <span className="text-white">Emergency</span>
                    <span className="block text-red-300">Septic Repairs</span>
                  </h1>
                  
                  <p className="text-lg lg:text-xl text-red-100 leading-relaxed max-w-2xl mx-auto hero-subtitle-320">
                    24/7 emergency septic repair services with rapid response times. 
                    Professional technicians ready when your system fails.
                  </p>
                </div>

                {/* Service Guarantees */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto service-guarantees-320">
                  {serviceGuarantees.map((guarantee, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl hover:shadow-lg transition-all duration-300 guarantee-card-320">
                      <guarantee.icon className="w-6 h-6 text-red-300 flex-shrink-0 icon-320-sm" />
                      <div>
                        <div className="font-bold text-white text-sm">{guarantee.title}</div>
                        <div className="text-red-200 text-xs">{guarantee.description}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center emergency-cta-ultra-responsive">
                  <a
                    href={`tel:${CONTACT_INFO.emergencyPhone}`}
                    onClick={() => trackPhoneCall('repairs_emergency_hero')}
                    className="group relative overflow-hidden bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold py-5 px-8 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-3 hover:shadow-xl hover:scale-105 animate-pulse emergency-banner-320"
                  >
                    <AlertTriangle className="w-6 h-6 icon-320-md" />
                    <span className="text-lg emergency-text-320">Emergency: {CONTACT_INFO.emergencyPhone}</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform icon-320-md" />
                  </a>
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    onClick={() => trackPhoneCall('repairs_hero')}
                    className="bg-white/20 text-white font-bold py-5 px-8 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-3 hover:bg-white/30 hover:shadow-xl hover:scale-105 emergency-banner-320"
                  >
                    <Phone className="w-6 h-6 icon-320-md" />
                    <span className="text-lg emergency-text-320">Schedule Repair</span>
                  </a>
                </div>
              </div>

              {/* Image Side */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-lg w-full service-image-320">
                  <Image
                    src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?w=600&h=500&fit=crop"
                    alt="Emergency septic repair service"
                    width={600}
                    height={500}
                    className="object-cover w-full h-[500px] image-320-responsive"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                
                {/* Floating Emergency Badge */}
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-red-500 to-orange-500 text-white p-6 rounded-xl shadow-xl animate-pulse floating-badge-320">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm opacity-90">Emergency Service</div>
                </div>

                {/* Response Time Badge */}
                <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-red-600" />
                    <div>
                      <div className="font-bold text-sm text-red-600">{"< 2 Hours"}</div>
                      <div className="text-xs text-gray-600">Emergency Response</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Repair Services Section */}
        <section className="py-24 bg-white">
          <div className="septic-max-width">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-primary-dark">Repair</span>
                <span className="block text-red-600">Services</span>
              </h2>
              {/* Modern decorative line */}
              <div className="flex items-center justify-center mb-6">
                <div className="h-px bg-gradient-to-r from-transparent via-red-600 to-transparent w-32"></div>
                <div className="w-2 h-2 bg-red-600 rounded-full mx-4"></div>
                <div className="h-px bg-gradient-to-r from-transparent via-red-600 to-transparent w-32"></div>
              </div>
              <p className="text-xl text-text-primary max-w-4xl mx-auto leading-relaxed">
                Comprehensive septic repair services from emergency response to complete system replacement
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {repairServices.map((service) => (
                <div key={service.id} id={service.id} className="bg-gradient-to-br from-bg-primary to-bg-secondary border border-red-200 rounded-3xl p-8 hover:border-red-400 transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Wrench className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-primary-dark mb-4">{service.title}</h3>
                      <p className="text-text-primary mb-6 leading-relaxed">{service.description}</p>
                      
                      <div className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                            <span className="text-text-primary">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Urgency Levels Section */}
        <section className="py-24 bg-gradient-to-br from-bg-primary to-bg-secondary">
          <div className="septic-max-width">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-primary-dark">Response</span>
                <span className="block text-red-600">Urgency Levels</span>
              </h2>
              {/* Modern decorative line */}
              <div className="flex items-center justify-center mb-6">
                <div className="h-px bg-gradient-to-r from-transparent via-red-600 to-transparent w-32"></div>
                <div className="w-2 h-2 bg-red-600 rounded-full mx-4"></div>
                <div className="h-px bg-gradient-to-r from-transparent via-red-600 to-transparent w-32"></div>
              </div>
              <p className="text-xl text-text-primary max-w-4xl mx-auto leading-relaxed">
                We prioritize repairs based on urgency to ensure emergency situations get immediate attention
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {urgencyLevels.map((level, index) => {
                const colorStyles = {
                  red: "bg-red-50 border-red-200 text-red-800",
                  orange: "bg-orange-50 border-orange-200 text-orange-800",
                  yellow: "bg-yellow-50 border-yellow-200 text-yellow-800",
                  blue: "bg-blue-50 border-blue-200 text-blue-800"
                };

                return (
                  <div key={index} className={`p-8 border-2 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl ${colorStyles[level.color as keyof typeof colorStyles]}`}>
                    <div className="text-center mb-6">
                      <div className="text-2xl font-bold mb-2">{level.level}</div>
                      <div className="text-lg font-semibold opacity-80">{level.timeframe}</div>
                    </div>
                    <p className="text-sm opacity-90 leading-relaxed text-center">{level.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Repair Process Section */}
        <section className="py-24 bg-white">
          <div className="septic-max-width">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-primary-dark">Our Repair</span>
                <span className="block text-red-600">Process</span>
              </h2>
              {/* Modern decorative line */}
              <div className="flex items-center justify-center mb-6">
                <div className="h-px bg-gradient-to-r from-transparent via-red-600 to-transparent w-32"></div>
                <div className="w-2 h-2 bg-red-600 rounded-full mx-4"></div>
                <div className="h-px bg-gradient-to-r from-transparent via-red-600 to-transparent w-32"></div>
              </div>
              <p className="text-xl text-text-primary max-w-4xl mx-auto leading-relaxed">
                Systematic repair process ensuring rapid diagnosis and professional solutions every time
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-gradient-to-br from-bg-primary to-bg-secondary rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-red-200">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-6">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-primary-dark mb-4">{step.title}</h3>
                    <p className="text-text-primary mb-4 leading-relaxed">{step.description}</p>
                    <div className="text-red-600 text-sm font-semibold">{step.duration}</div>
                  </div>
                  
                  {/* Connection Arrow */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-8 h-8 text-red-600/50" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Repair Benefits Section */}
        <section className="py-24 bg-gradient-to-br from-bg-primary to-bg-secondary">
          <div className="septic-max-width">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-primary-dark">Why Choose Our</span>
                <span className="block text-red-600">Repair Services</span>
              </h2>
              {/* Modern decorative line */}
              <div className="flex items-center justify-center mb-6">
                <div className="h-px bg-gradient-to-r from-transparent via-red-600 to-transparent w-32"></div>
                <div className="w-2 h-2 bg-red-600 rounded-full mx-4"></div>
                <div className="h-px bg-gradient-to-r from-transparent via-red-600 to-transparent w-32"></div>
              </div>
              <p className="text-xl text-text-primary max-w-4xl mx-auto leading-relaxed">
                Professional repair advantages that provide long-term solutions and peace of mind
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {repairBenefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-red-200">
                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary-dark mb-4">{benefit.title}</h3>
                      <p className="text-text-primary leading-relaxed text-lg">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <div className="septic-max-width">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-primary-dark">Frequently Asked</span>
                <span className="block text-red-600">Questions</span>
              </h2>
              {/* Modern decorative line */}
              <div className="flex items-center justify-center mb-6">
                <div className="h-px bg-gradient-to-r from-transparent via-red-600 to-transparent w-32"></div>
                <div className="w-2 h-2 bg-red-600 rounded-full mx-4"></div>
                <div className="h-px bg-gradient-to-r from-transparent via-red-600 to-transparent w-32"></div>
              </div>
              <p className="text-xl text-text-primary max-w-4xl mx-auto leading-relaxed">
                Get answers to common questions about septic system repair services
              </p>
            </div>

            <div className="space-y-8">
              {frequentlyAskedQuestions.map((faq, index) => (
                <div key={index} className="bg-gradient-to-br from-bg-primary to-bg-secondary border border-red-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-red-400">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">{faq.question}</h3>
                  <p className="text-text-primary leading-relaxed text-lg">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-gradient-to-br from-red-900 via-red-800 to-orange-900 text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,165,0,0.2)_0%,transparent_50%)] pointer-events-none"></div>
          
          <div className="septic-max-width text-center z-10">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Septic Emergency? <span className="text-red-300">Don&apos;t Wait!</span>
            </h2>
            <p className="text-xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed">
              Emergency septic problems get worse fast. Our emergency response team is standing by 24/7 to help when you need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href={`tel:${CONTACT_INFO.emergencyPhone}`}
                onClick={() => trackPhoneCall('repairs_final_cta')}
                className="bg-white text-red-600 hover:bg-gray-100 font-bold py-8 px-12 rounded-xl text-2xl inline-flex items-center justify-center space-x-4 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <AlertTriangle className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-sm">24/7 EMERGENCY</div>
                  <div className="text-2xl font-black">{CONTACT_INFO.emergencyPhone}</div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </ServiceErrorBoundary>
  );
}
