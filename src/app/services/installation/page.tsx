import { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle, Phone, Shield, Clock, Star, ArrowRight, Award, Settings, Wrench, Zap, TreePine, Home } from 'lucide-react';
import { CONTACT_INFO, SERVICE_CATEGORIES } from '@/lib/constants';
import { ServiceErrorBoundary } from '@/components/ServiceErrorBoundary';

export const metadata: Metadata = {
  title: 'Professional Septic System Installation | Septic Cheetah',
  description: 'Complete septic system installation services for new construction and system replacements. Licensed installers with permit assistance.',
  openGraph: {
    title: 'Professional Septic System Installation | Septic Cheetah',
    description: 'Complete septic system installation with permits and warranties',
    url: '/services/installation'
  }
};

// Get installation category data
const installationCategory = SERVICE_CATEGORIES.find(cat => cat.id === 'installation');
const installationServices = installationCategory?.services || [];

const whyChooseInstallation = [
  {
    icon: Home,
    title: "New Construction Specialists",
    description: "Expert installation for new homes with full permit coordination and site planning.",
  },
  {
    icon: Zap,
    title: "Aerobic System Experts", 
    description: "Advanced aerobic treatment systems for challenging soils and environmental requirements.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed installers with comprehensive insurance and warranty protection.",
  },
  {
    icon: TreePine,
    title: "Environmentally Conscious",
    description: "Eco-friendly installation practices that protect your property and environment.",
  }
];

const installationBenefits = [
  {
    icon: Settings,
    title: "Custom System Design",
    description: "Every installation is custom-designed for your specific property, soil conditions, and household needs.",
  },
  {
    icon: Award,
    title: "Quality Materials",
    description: "We use only the highest quality tanks, pipes, and components for lasting performance.",
  },
  {
    icon: Clock,
    title: "Efficient Timeline",
    description: "Streamlined installation process with realistic timelines and milestone communication.",
  },
  {
    icon: CheckCircle,
    title: "Complete Permits",
    description: "Full permit assistance from application through final inspection approval.",
  }
];

const processSteps = [
  {
    number: "01",
    title: "Site Assessment & Design",
    description: "Professional site evaluation, soil testing, and custom system design for your property",
    duration: "1-3 days"
  },
  {
    number: "02", 
    title: "Permits & Approvals",
    description: "Complete permit applications and regulatory approvals - we handle all paperwork",
    duration: "1-3 weeks"
  },
  {
    number: "03",
    title: "Professional Installation", 
    description: "Expert excavation and installation by licensed technicians with quality materials",
    duration: "3-7 days"
  },
  {
    number: "04",
    title: "Testing & Startup",
    description: "Final inspections, system testing, and operational startup with owner training",
    duration: "1-2 days"
  }
];

const serviceGuarantees = [
  {
    icon: Shield,
    title: "Licensed Installers",
    description: "Certified professionals"
  },
  {
    icon: CheckCircle,
    title: "Permits Included",
    description: "Complete paperwork"
  },
  {
    icon: Star,
    title: "5-Year Warranty",
    description: "Installation guarantee"
  },
  {
    icon: Award,
    title: "Quality Materials",
    description: "Premium components"
  }
];

const frequentlyAskedQuestions = [
  {
    question: "How long does septic system installation take?",
    answer: "Complete installation typically takes 2-4 weeks from start to finish, including permits, site preparation, installation, and final inspections. Weather and soil conditions may affect timeline."
  },
  {
    question: "Do you handle all permits and inspections?",
    answer: "Yes, we handle all permit applications, coordinate required inspections, and ensure full compliance with local regulations. Our permit assistance is included in every installation."
  },
  {
    question: "What's the difference between conventional and aerobic systems?",
    answer: "Conventional systems use natural bacterial processes, while aerobic systems add oxygen to enhance treatment. Aerobic systems are often required for challenging soil conditions or environmental protection areas."
  },
  {
    question: "How do I know what size system I need?",
    answer: "System size is determined by household size, soil conditions, and local regulations. We perform site evaluation and design the appropriate system for your specific needs and usage patterns."
  },
  {
    question: "What warranty comes with installation?",
    answer: "We provide a comprehensive 5-year warranty on installation workmanship and 1-year warranty on all system components. Tank warranties vary by manufacturer, typically 20+ years."
  }
];

export default function InstallationPage() {
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
          <div className="absolute inset-0 bg-blue-900/20"></div>
          
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary-accent rounded-full blur-3xl"></div>
          </div>
          
          <div className="septic-max-width z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center hero-grid-mobile">
              {/* Content Side */}
              <div className="space-y-8 text-center lg:text-center flex flex-col justify-center hero-content-mobile">
                <div className="space-y-8">
                  <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight hero-title-320">
                    <span className="text-white">Professional</span>
                    <span className="block text-blue-300">Septic Installation</span>
                  </h1>
                  
                  <p className="text-lg lg:text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto hero-subtitle-320">
                    Complete septic system installation for new construction and system replacements. 
                    Licensed professionals handle permits from design to final inspection.
                  </p>
                </div>

                {/* Service Guarantees */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto service-guarantees-320">
                  {serviceGuarantees.map((guarantee, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl hover:shadow-lg transition-all duration-300 guarantee-card-320">
                      <guarantee.icon className="w-6 h-6 text-blue-300 flex-shrink-0 icon-320-sm" />
                      <div>
                        <div className="font-bold text-white text-sm">{guarantee.title}</div>
                        <div className="text-blue-200 text-xs">{guarantee.description}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center emergency-cta-ultra-responsive">
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-5 px-8 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-3 hover:shadow-xl hover:scale-105 emergency-banner-320"
                  >
                    <Phone className="w-6 h-6 icon-320-md" />
                    <span className="text-lg emergency-text-320">Get Free Quote</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform icon-320-md" />
                  </a>
                  <a
                    href="/contact"
                    className="bg-white/20 text-white font-bold py-5 px-8 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-3 hover:bg-white/30 hover:shadow-xl hover:scale-105 emergency-banner-320"
                  >
                    <Wrench className="w-6 h-6 icon-320-md" />
                    <span className="text-lg emergency-text-320">Plan Installation</span>
                  </a>
                </div>
              </div>

              {/* Image Side */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-lg w-full service-image-320">
                  <Image
                    src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?w=600&h=500&fit=crop"
                    alt="Professional septic system installation"
                    width={600}
                    height={500}
                    className="object-cover w-full h-[500px] image-320-responsive"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                
                {/* Floating Guarantee Badge */}
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-xl floating-badge-320">
                  <div className="text-2xl font-bold">5-Year</div>
                  <div className="text-sm opacity-90">Warranty</div>
                </div>

                {/* Licensed Badge */}
                <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-bold text-sm text-blue-600">Licensed</div>
                      <div className="text-xs text-gray-600">& Insured</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Services Section */}
        <section className="py-24 bg-white">
          <div className="septic-max-width">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-primary-dark">Installation</span>
                <span className="block text-blue-600">Services</span>
              </h2>
              {/* Modern decorative line */}
              <div className="flex items-center justify-center mb-6">
                <div className="h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent w-32"></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full mx-4"></div>
                <div className="h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent w-32"></div>
              </div>
              <p className="text-xl text-text-primary max-w-4xl mx-auto leading-relaxed">
                Comprehensive septic installation services for all your residential and commercial needs
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {installationServices.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-bg-primary to-bg-secondary border border-blue-200 rounded-3xl p-10 hover:border-blue-400 transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Wrench className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-primary-dark mb-4">{service.title}</h3>
                      <p className="text-text-primary mb-6 leading-relaxed">{service.description}</p>
                      
                      <div className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
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

        {/* Why Choose Our Installation Section */}
        <section className="py-24 bg-gradient-to-br from-bg-primary to-bg-secondary">
          <div className="septic-max-width">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-primary-dark">Why Choose Our</span>
                <span className="block text-blue-600">Installation Services</span>
              </h2>
              {/* Modern decorative line */}
              <div className="flex items-center justify-center mb-6">
                <div className="h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent w-32"></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full mx-4"></div>
                <div className="h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent w-32"></div>
              </div>
              <p className="text-xl text-text-primary max-w-4xl mx-auto leading-relaxed">
                Professional installation backed by experience, quality materials, and comprehensive warranties
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseInstallation.map((benefit, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200 hover:border-blue-400">
                  <benefit.icon className="w-12 h-12 text-blue-600 mb-6" />
                  <h3 className="text-xl font-bold text-primary-dark mb-4">{benefit.title}</h3>
                  <p className="text-text-primary leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Installation Process Section */}
        <section className="py-24 bg-white">
          <div className="septic-max-width">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-primary-dark">Our Installation</span>
                <span className="block text-blue-600">Process</span>
              </h2>
              {/* Modern decorative line */}
              <div className="flex items-center justify-center mb-6">
                <div className="h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent w-32"></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full mx-4"></div>
                <div className="h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent w-32"></div>
              </div>
              <p className="text-xl text-text-primary max-w-4xl mx-auto leading-relaxed">
                Systematic installation process ensuring quality results and customer satisfaction
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-gradient-to-br from-bg-primary to-bg-secondary rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-6">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-primary-dark mb-4">{step.title}</h3>
                    <p className="text-text-primary mb-4 leading-relaxed">{step.description}</p>
                    <div className="text-blue-600 text-sm font-semibold">{step.duration}</div>
                  </div>
                  
                  {/* Connection Arrow */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-8 h-8 text-blue-600/50" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Installation Benefits Section */}
        <section className="py-24 bg-gradient-to-br from-bg-primary to-bg-secondary">
          <div className="septic-max-width">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-primary-dark">Installation</span>
                <span className="block text-blue-600">Benefits</span>
              </h2>
              {/* Modern decorative line */}
              <div className="flex items-center justify-center mb-6">
                <div className="h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent w-32"></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full mx-4"></div>
                <div className="h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent w-32"></div>
              </div>
              <p className="text-xl text-text-primary max-w-4xl mx-auto leading-relaxed">
                Professional installation advantages that provide long-term value and peace of mind
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {installationBenefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200">
                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
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
                <span className="block text-blue-600">Questions</span>
              </h2>
              {/* Modern decorative line */}
              <div className="flex items-center justify-center mb-6">
                <div className="h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent w-32"></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full mx-4"></div>
                <div className="h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent w-32"></div>
              </div>
              <p className="text-xl text-text-primary max-w-4xl mx-auto leading-relaxed">
                Get answers to common questions about septic system installation
              </p>
            </div>

            <div className="space-y-8">
              {frequentlyAskedQuestions.map((faq, index) => (
                <div key={index} className="bg-gradient-to-br from-bg-primary to-bg-secondary border border-blue-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-400">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">{faq.question}</h3>
                  <p className="text-text-primary leading-relaxed text-lg">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-primary-dark text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.2)_0%,transparent_50%)] pointer-events-none"></div>
          
          <div className="septic-max-width text-center z-10">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Ready for Professional <span className="text-blue-300">Installation?</span>
            </h2>
            <p className="text-xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed">
              Get a custom installation quote designed specifically for your property. Our experts handle everything from permits to final inspection.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-8 px-12 rounded-xl text-2xl inline-flex items-center justify-center space-x-4 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <Phone className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-sm">GET FREE QUOTE</div>
                  <div className="text-2xl font-black">{CONTACT_INFO.phone}</div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </ServiceErrorBoundary>
  );
}
