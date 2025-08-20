import { Metadata } from 'next';
import Image from 'next/image';
import { AlertTriangle, CheckCircle, Phone, Truck, Shield, Clock, MapPin, Star, Calendar, ArrowRight, Award } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import { ServiceErrorBoundary } from '@/components/ServiceErrorBoundary';

export const metadata: Metadata = {
  title: 'Professional Septic Tank Pumping Services | Septic Cheetah',
  description: 'Expert septic tank pumping with same-day service. Licensed technicians, transparent pricing, and 100% satisfaction guarantee. Serving Central Texas.',
  openGraph: {
    title: 'Professional Septic Tank Pumping Services | Septic Cheetah',
    description: 'Expert septic tank pumping with same-day service available',
    url: '/services/pumping'
  }
};

const warningSignsData = [
  {
    icon: AlertTriangle,
    title: "Slow Draining",
    description: "Fixtures draining slowly or backing up",
    severity: "warning"
  },
  {
    icon: MapPin,
    title: "Standing Water",
    description: "Pooling water around septic area",
    severity: "danger"
  },
  {
    icon: AlertTriangle,
    title: "Sewage Odors",
    description: "Persistent sewage smells outside",
    severity: "critical"
  },
  {
    icon: Calendar,
    title: "Regular Maintenance",
    description: "Every 3-5 years for optimal performance",
    severity: "info"
  }
];

const processSteps = [
  {
    number: "01",
    title: "Tank Location & Access",
    description: "Professional equipment locates and safely accesses your septic system",
    duration: "15-20 min"
  },
  {
    number: "02", 
    title: "Complete Waste Removal",
    description: "Thorough removal of all waste, sludge, and scum layers",
    duration: "30-45 min"
  },
  {
    number: "03",
    title: "System Inspection", 
    description: "Comprehensive inspection of tank condition and components",
    duration: "10-15 min"
  },
  {
    number: "04",
    title: "Professional Disposal",
    description: "Licensed disposal at state-approved treatment facilities",
    duration: "Complete"
  }
];

const serviceGuarantees = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully certified professionals"
  },
  {
    icon: Clock,
    title: "Same-Day Service",
    description: "Available for most locations"
  },
  {
    icon: Star,
    title: "100% Satisfaction",
    description: "Complete service guarantee"
  },
  {
    icon: Award,
    title: "5-Star Rated",
    description: "Trusted by thousands"
  }
];

const frequentlyAskedQuestions = [
  {
    question: "How often should I pump my septic tank?",
    answer: "Most residential septic tanks should be pumped every 3-5 years, depending on household size and usage. Regular pumping prevents costly system failures and extends the life of your septic system."
  },
  {
    question: "How long does septic pumping take?",
    answer: "Standard pumping takes 45-90 minutes from start to finish. We work efficiently to minimize disruption while ensuring thorough service and proper system inspection."
  },
  {
    question: "What happens to the waste after pumping?",
    answer: "All waste is transported to state-approved treatment facilities in our licensed vehicles. We follow strict environmental regulations and provide proper disposal documentation."
  },
  {
    question: "Do you offer emergency pumping services?",
    answer: "Yes, we provide 24/7 emergency services for critical situations. Emergency services include priority response with additional charges, but we prioritize health and safety above all."
  }
];

export default function PumpingPage() {
  return (
    <ServiceErrorBoundary>
      <main className="min-h-screen bg-white">
        {/* Elegant Hero Section with Brand Colors */}
        <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 min-h-[90vh] flex items-center overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-64 h-64 bg-orange-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-600 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content Side */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-orange-200 rounded-full px-4 py-2">
                    <Clock className="w-4 h-4 text-orange-600" />
                    <span className="text-orange-700 font-medium text-sm">Same-Day Service Available</span>
                  </div>
                  
                  <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="text-amber-900">Professional</span>
                    <span className="block text-orange-600">Septic Pumping</span>
                  </h1>
                  
                  <p className="text-xl text-amber-800 leading-relaxed max-w-lg">
                    Expert septic tank pumping services with transparent pricing, 
                    licensed technicians, and complete satisfaction guarantee.
                  </p>
                </div>

                {/* Service Guarantees */}
                <div className="grid grid-cols-2 gap-4">
                  {serviceGuarantees.map((guarantee, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-white/60 backdrop-blur-sm border border-orange-100 rounded-xl">
                      <guarantee.icon className="w-5 h-5 text-orange-600 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-amber-900 text-sm">{guarantee.title}</div>
                        <div className="text-amber-700 text-xs">{guarantee.description}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="group relative overflow-hidden bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-3 hover:shadow-xl hover:scale-105"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Schedule Service</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href={`tel:${CONTACT_INFO.emergencyPhone}`}
                    className="bg-red-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-3 hover:bg-red-700 hover:shadow-xl"
                  >
                    <AlertTriangle className="w-5 h-5" />
                    <span>Emergency Service</span>
                  </a>
                </div>
              </div>

              {/* Image Side */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=500&fit=crop"
                    alt="Professional septic pumping service"
                    width={600}
                    height={500}
                    className="object-cover w-full h-[500px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
                
                {/* Floating Price Badge */}
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white p-6 rounded-xl shadow-xl">
                  <div className="text-2xl font-bold">Starting at $299</div>
                  <div className="text-sm opacity-90">Most residential properties</div>
                </div>

                {/* Rating Badge */}
                <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <div>
                      <div className="font-bold text-sm text-gray-900">4.9/5</div>
                      <div className="text-xs text-gray-600">500+ Reviews</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Warning Signs Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-amber-900">When to Schedule</span>
                <span className="block text-orange-600">Septic Pumping</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don&apos;t wait for a system failure. Watch for these warning signs and schedule service before problems become emergencies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {warningSignsData.map((sign, index) => {
                const severityStyles = {
                  critical: "bg-red-50 border-red-200 text-red-800",
                  danger: "bg-orange-50 border-orange-200 text-orange-800", 
                  warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
                  info: "bg-blue-50 border-blue-200 text-blue-800"
                };

                return (
                  <div key={index} className={`p-6 border-2 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg ${severityStyles[sign.severity as keyof typeof severityStyles]}`}>
                    <sign.icon className="w-8 h-8 mb-4" />
                    <h3 className="font-bold mb-2">{sign.title}</h3>
                    <p className="text-sm opacity-90">{sign.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                <span>Get Expert Consultation</span>
              </a>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-amber-900">Our Professional</span>
                <span className="block text-orange-600">Service Process</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Systematic approach ensuring thorough, safe, and efficient service every time
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-amber-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-bold text-amber-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                    <div className="text-orange-600 text-xs font-medium">{step.duration}</div>
                  </div>
                  
                  {/* Connection Arrow */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-orange-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-amber-900">Transparent</span>
                <span className="block text-orange-600">Pricing</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                No hidden fees, no surprises. Know exactly what you&apos;re paying for with our upfront pricing.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Pricing Card */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-orange-200">
                <div className="text-center mb-8">
                  <div className="text-4xl font-bold text-orange-600 mb-2">$299 - $399</div>
                  <div className="text-xl text-amber-900 font-medium">Standard Pumping Service</div>
                  <div className="text-sm text-gray-600 mt-2">Most residential properties</div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-2 border-b border-orange-100">
                    <span className="text-gray-600">Service Duration:</span>
                    <span className="font-semibold text-amber-900">45-90 minutes</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-orange-100">
                    <span className="text-gray-600">Same-day Available:</span>
                    <span className="font-semibold text-green-600">Yes</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-orange-100">
                    <span className="text-gray-600">Emergency Surcharge:</span>
                    <span className="font-semibold text-red-600">+$100</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Service Guarantee:</span>
                    <span className="font-semibold text-green-600">100%</span>
                  </div>
                </div>

                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="block w-full text-center bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Get Exact Quote
                </a>
              </div>

              {/* What&apos;s Included Card */}
              <div className="bg-amber-900 text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-8 text-center">
                  What&apos;s Included
                  <span className="block text-lg font-normal text-amber-200 mt-2">Complete service package</span>
                </h3>
                
                <div className="space-y-4 mb-8">
                  {[
                    "Complete tank pumping and waste removal",
                    "Comprehensive system inspection", 
                    "Licensed waste disposal at approved facilities",
                    "Site cleanup and restoration",
                    "Detailed service documentation",
                    "Written service guarantee"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-amber-100">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-green-900/20 border border-green-400/20 rounded-xl p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <Shield className="w-5 h-5 text-green-400" />
                    <span className="font-bold text-green-300">100% Satisfaction Guarantee</span>
                  </div>
                  <p className="text-green-200 text-sm">
                    If you&apos;re not completely satisfied with our service, we&apos;ll make it right or provide a full refund.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-amber-900">Frequently Asked</span>
                <span className="block text-orange-600">Questions</span>
              </h2>
              <p className="text-xl text-gray-600">
                Get answers to common questions about septic tank pumping services
              </p>
            </div>

            <div className="space-y-6">
              {frequentlyAskedQuestions.map((faq, index) => (
                <div key={index} className="bg-white border border-orange-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="text-lg font-bold text-amber-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Schedule Your Pumping Service?
            </h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
              Same-day service available for most areas. Professional pumping with complete satisfaction guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="bg-white text-orange-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl text-lg inline-flex items-center justify-center space-x-3 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Truck className="w-6 h-6" />
                <span>Schedule Service Now</span>
              </a>
              <a
                href={`tel:${CONTACT_INFO.emergencyPhone}`}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl text-lg inline-flex items-center justify-center space-x-3 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <AlertTriangle className="w-6 h-6" />
                <span>Emergency Service</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </ServiceErrorBoundary>
  );
}