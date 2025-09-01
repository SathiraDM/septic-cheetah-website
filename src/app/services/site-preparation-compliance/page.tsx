'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Phone, Shield, Clock, Calendar, Truck, FileText, TestTube, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import { trackPhoneCall } from '@/lib/utils';

const mainServices = [
  {
    id: 'excavation',
    title: 'Excavation Services',
    description: 'Professional excavation services for septic system installation and repairs with precision and care.',
    anchor: '#excavation',
    icon: Truck,
    features: [
      'Precision excavation',
      'Site preparation',
      'Trenching services',
      'Backfill & grading',
      'Restoration work'
    ],
    details: [
      'Professional-grade excavation equipment',
      'Minimal landscape disruption',
      'Proper depth and dimensions',
      'Safe utility line clearance',
      'Complete site restoration'
    ]
  },
  {
    id: 'soil-testing',
    title: 'Soil Testing',
    description: 'Comprehensive soil testing and percolation testing for proper septic system design and sizing.',
    anchor: '#soil-testing',
    icon: TestTube,
    features: [
      'Percolation testing',
      'Soil composition analysis',
      'Drainage assessment',
      'System sizing recommendations',
      'Regulatory compliance'
    ],
    details: [
      'Professional soil scientists',
      'State-certified testing procedures',
      'Detailed analysis reports',
      'System design recommendations',
      'Regulatory compliance verification'
    ]
  },
  {
    id: 'permit-assistance',
    title: 'Permit Assistance',
    description: 'Complete permit assistance and regulatory compliance support for all septic system projects.',
    anchor: '#permit-assistance',
    icon: FileText,
    features: [
      'Permit application assistance',
      'Regulatory compliance',
      'Documentation preparation',
      'Inspection coordination',
      'Code compliance verification'
    ],
    details: [
      'Expert knowledge of local codes',
      'Complete application management',
      'Timely submission and follow-up',
      'Inspection scheduling coordination',
      'Compliance verification documentation'
    ]
  }
];

const complianceBenefits = [
  {
    icon: Shield,
    title: 'Expert Compliance',
    description: 'Navigate complex regulations with confidence. Our experts ensure your project meets all local, state, and federal requirements.'
  },
  {
    icon: Clock,
    title: 'Faster Approvals',
    description: 'Streamlined permit process and proper documentation help avoid delays and get your project approved quickly.'
  },
  {
    icon: MapPin,
    title: 'Local Knowledge',
    description: 'Deep understanding of Central Texas regulations, soil conditions, and permitting requirements for successful projects.'
  }
];

const processSteps = [
  {
    number: '01',
    title: 'Site Evaluation',
    description: 'Comprehensive assessment of your property including soil conditions, terrain, and regulatory requirements.',
    duration: '30-60 min'
  },
  {
    number: '02',
    title: 'Testing & Analysis',
    description: 'Professional soil testing and percolation analysis to determine optimal system design and placement.',
    duration: '2-4 hours'
  },
  {
    number: '03',
    title: 'Permit Processing',
    description: 'Complete permit application preparation and submission with all required documentation.',
    duration: '1-2 weeks'
  },
  {
    number: '04',
    title: 'Project Execution',
    description: 'Professional excavation and site preparation with ongoing compliance monitoring.',
    duration: 'Project dependent'
  }
];

const regulatoryRequirements = [
  {
    title: 'Soil Percolation Tests',
    description: 'Required testing to determine soil absorption rates',
    timeframe: '1-2 days'
  },
  {
    title: 'System Design Plans',
    description: 'Engineered plans based on soil conditions and usage',
    timeframe: '1-2 weeks'
  },
  {
    title: 'Permit Applications',
    description: 'Submission to local health departments and agencies',
    timeframe: '2-4 weeks'
  },
  {
    title: 'Inspection Approvals',
    description: 'Required inspections throughout installation process',
    timeframe: 'Ongoing'
  }
];

const frequentlyAskedQuestions = [
  {
    question: 'What permits are required for septic system installation?',
    answer: 'Permit requirements vary by location but typically include construction permits, health department approvals, and sometimes environmental permits. We handle all necessary permits for your specific location and project type.'
  },
  {
    question: 'How long does the soil testing process take?',
    answer: 'Soil testing typically takes 1-2 days to complete on-site, with lab analysis results available within 3-5 business days. We provide detailed reports with system recommendations based on the findings.'
  },
  {
    question: 'Do you handle excavation for existing system replacements?',
    answer: 'Yes, we provide complete excavation services for both new installations and system replacements. We take extra care to minimize disruption to existing landscaping and structures.'
  },
  {
    question: 'What happens if soil conditions are not suitable?',
    answer: 'If standard soil conditions aren\'t suitable, we can recommend alternative solutions such as engineered systems, soil amendments, or alternative drain field designs to meet regulatory requirements.'
  }
];

export default function SitePreparationCompliancePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-purple-800 via-purple-700 to-indigo-600 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-purple-400 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-400 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.1)_0%,transparent_50%)] pointer-events-none"></div>
        </div>
        
        <div className="septic-max-width relative z-10 py-20 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-white">Site Preparation</span>
                  <span className="block text-purple-300">& Compliance</span>
                </h1>
                <p className="text-xl lg:text-2xl text-purple-100 leading-relaxed max-w-2xl">
                  Professional site preparation services and expert regulatory compliance support 
                  to ensure your septic project succeeds from start to finish.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  onClick={() => trackPhoneCall('site_prep_hero')}
                  className="group relative overflow-hidden bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-3 hover:shadow-xl hover:scale-105"
                >
                  <Phone className="w-6 h-6" />
                  <span className="text-lg">Get Started</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  href="/contact"
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 hover:bg-white/20 hover:border-white/30"
                >
                  <span className="text-lg">Free Consultation</span>
                </Link>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {['Licensed', 'Certified', 'Local Experts', 'Full Compliance'].map((signal, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-purple-300" />
                    <span className="text-sm font-medium text-white/90">{signal}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Side */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-lg w-full">
                <Image
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=500&fit=crop"
                  alt="Professional excavation and site preparation"
                  width={600}
                  height={500}
                  className="object-cover w-full h-full"
                />
                
                {/* Floating Service Badge */}
                <div className="absolute top-6 right-6 bg-purple-600/95 backdrop-blur-sm text-white p-4 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold">Full Service</div>
                    <div className="text-sm opacity-90">Permit to Completion</div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-purple-600" />
                      <span className="font-semibold text-gray-800">Regulatory Experts</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="flex text-yellow-400">
                        {'★'.repeat(5)}
                      </div>
                      <div className="font-bold text-sm text-gray-800">4.9/5</div>
                      <div className="text-xs text-gray-600">100+ Projects</div>
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
              <span className="text-primary-dark">Complete Site Preparation</span>
              <span className="block text-purple-600">& Compliance Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From initial soil testing to final inspections, we handle every aspect of site preparation 
              and regulatory compliance for your septic system project.
            </p>
          </div>

          <div className="space-y-16">
            {mainServices.map((service) => (
              <div key={service.id} id={service.id} className="group relative">
                <div className="bg-white rounded-2xl border border-gray-200 hover:border-purple-400/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="p-8">
                    {/* Service Header */}
                    <div className="flex items-start space-x-6 mb-8">
                      <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold text-primary-dark mb-4 group-hover:text-purple-600 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Service Features */}
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-4 text-lg">Service Features:</h4>
                        <div className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Service Details */}
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-4 text-lg">What You Get:</h4>
                        <div className="space-y-3">
                          {service.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center space-x-3">
                              <Shield className="w-5 h-5 text-green-500 flex-shrink-0" />
                              <span className="text-gray-700">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Requirements Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="septic-max-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-primary-dark">Regulatory</span>
              <span className="block text-purple-600">Requirements</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the regulatory process helps ensure your project stays on track and meets all requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regulatoryRequirements.map((requirement, index) => (
              <div key={index} className="bg-white border border-purple-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-primary-dark mb-3">{requirement.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{requirement.description}</p>
                <div className="text-purple-600 text-sm font-semibold">{requirement.timeframe}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="septic-max-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-primary-dark">Why Choose Our</span>
              <span className="block text-purple-600">Compliance Experts?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Navigate complex regulations with confidence and get your project approved faster
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {complianceBenefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-purple-100 rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-primary-dark mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="septic-max-width">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-primary-dark">Our Comprehensive</span>
              <span className="block text-purple-600">Project Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial site evaluation to final approvals, we guide you through every step 
              of the regulatory and preparation process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm group-hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark mb-4">{step.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                  <div className="text-purple-600 text-sm font-semibold">{step.duration}</div>
                </div>
                
                {/* Connection Arrow */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-purple-400/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="septic-max-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-primary-dark">Frequently Asked</span>
              <span className="block text-purple-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about site preparation and compliance services
            </p>
          </div>

          <div className="space-y-8">
            {frequentlyAskedQuestions.map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200/50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-purple-400/50">
                <h3 className="text-xl font-bold text-primary-dark mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)] pointer-events-none"></div>
        
        <div className="septic-max-width text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Ready to Start Your <span className="text-purple-300">Septic Project?</span>
          </h2>
          <p className="text-xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed">
            Let our experts handle the complex regulatory requirements and site preparation. 
            We&apos;ll ensure your project is compliant, approved, and ready for success.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              onClick={() => trackPhoneCall('site_prep_final_cta')}
              className="bg-white text-purple-600 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              <span className="text-lg">Call Now: {CONTACT_INFO.phone}</span>
            </a>
            <Link
              href="/contact"
              className="bg-purple-800 border border-purple-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-purple-700 transition-all duration-300 flex items-center justify-center space-x-3"
            >
              <Calendar className="w-6 h-6" />
              <span className="text-lg">Free Consultation</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
