import { Metadata } from 'next';
import Image from 'next/image';
import { AlertTriangle, CheckCircle, Phone, Shield, Clock, MapPin, Star, Calendar, ArrowRight, Award, Home } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import { ServiceErrorBoundary } from '@/components/ServiceErrorBoundary';

export const metadata: Metadata = {
  title: 'Portable Toilet Rentals | Septic Cheetah',
  description: 'Clean, reliable portable toilet rentals for construction sites, events, and outdoor projects. Professional delivery and service.',
  openGraph: {
    title: 'Portable Toilet Rentals | Septic Cheetah',
    description: 'Professional portable toilet rental services',
    url: '/services/portable-toilets'
  }
};

const warningSignsData = [
  {
    icon: AlertTriangle,
    title: "Construction Sites",
    description: "OSHA compliant restroom facilities required",
    severity: "warning"
  },
  {
    icon: MapPin,
    title: "Outdoor Events",
    description: "Festivals, weddings, and corporate events",
    severity: "danger"
  },
  {
    icon: AlertTriangle,
    title: "Home Renovations",
    description: "When indoor plumbing is unavailable",
    severity: "critical"
  },
  {
    icon: Calendar,
    title: "Long-term Projects",
    description: "Extended rental periods available",
    severity: "info"
  }
];

const processSteps = [
  {
    number: "01",
    title: "Site Assessment & Quote",
    description: "Professional assessment of your needs and site requirements",
    duration: "Same day"
  },
  {
    number: "02", 
    title: "Professional Delivery",
    description: "Clean, sanitized units delivered and positioned properly",
    duration: "Next day"
  },
  {
    number: "03",
    title: "Regular Service", 
    description: "Scheduled cleaning, pumping, and restocking of supplies",
    duration: "Weekly"
  },
  {
    number: "04",
    title: "Prompt Pickup",
    description: "Professional pickup and site cleanup when rental ends",
    duration: "Same day"
  }
];

const serviceGuarantees = [
  {
    icon: Shield,
    title: "Clean & Sanitized",
    description: "Thoroughly cleaned units"
  },
  {
    icon: Clock,
    title: "Same-Day Delivery",
    description: "Available most areas"
  },
  {
    icon: Star,
    title: "OSHA Compliant",
    description: "Meets safety standards"
  },
  {
    icon: Award,
    title: "5-Star Rated",
    description: "Trusted by contractors"
  }
];

const frequentlyAskedQuestions = [
  {
    question: "How often are portable toilets serviced?",
    answer: "Standard service includes weekly cleaning, pumping, and restocking. For high-usage events or construction sites, we offer more frequent service schedules as needed."
  },
  {
    question: "Do you provide hand washing stations?",
    answer: "Yes, we offer hand washing stations as add-ons to our portable toilet rentals. These are especially popular for events and food service applications."
  },
  {
    question: "What's the minimum rental period?",
    answer: "Our minimum rental period is typically one week for construction sites and one day for events. We offer flexible rental terms to meet your specific project needs."
  },
  {
    question: "Do you deliver on weekends?",
    answer: "Yes, we provide weekend delivery for events and emergency situations. Weekend delivery may include additional charges, but we prioritize getting you the facilities you need."
  }
];

export default function PortableToiletsPage() {
  return (
    <ServiceErrorBoundary>
      <main className="min-h-screen bg-white">
        {/* Elegant Hero Section with Main Brand Colors */}
        <section className="relative bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary min-h-[90vh] flex items-center overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-64 h-64 bg-primary-accent rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary-accent rounded-full blur-3xl"></div>
          </div>
          
          <div className="container-service z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content Side */}
              <div className="space-y-8 text-center lg:text-center flex flex-col justify-center">
                <div className="space-y-8">
                  <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                    <span className="text-primary-dark">Professional</span>
                    <span className="block text-primary-accent">Portable Toilet Rentals</span>
                  </h1>
                  
                  <p className="text-lg lg:text-xl text-text-primary leading-relaxed max-w-2xl mx-auto">
                    Clean, reliable portable toilet rentals for construction sites, 
                    events, and outdoor projects with professional service.
                  </p>
                </div>

                {/* Service Guarantees */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  {serviceGuarantees.map((guarantee, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-white/70 backdrop-blur-sm border border-primary-accent/20 rounded-xl hover:shadow-lg transition-all duration-300">
                      <guarantee.icon className="w-6 h-6 text-primary-accent flex-shrink-0" />
                      <div>
                        <div className="font-bold text-primary-dark text-sm">{guarantee.title}</div>
                        <div className="text-text-primary text-xs">{guarantee.description}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="group relative overflow-hidden bg-gradient-to-r from-primary-accent to-secondary-accent text-white font-bold py-5 px-8 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-3 hover:shadow-xl hover:scale-105"
                  >
                    <Phone className="w-6 h-6" />
                    <span className="text-lg">Get Rental Quote</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href={`tel:${CONTACT_INFO.emergencyPhone}`}
                    className="bg-red-600 text-white font-bold py-5 px-8 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-3 hover:bg-red-700 hover:shadow-xl hover:scale-105"
                  >
                    <AlertTriangle className="w-6 h-6" />
                    <span className="text-lg">Emergency Service</span>
                  </a>
                </div>
              </div>

              {/* Image Side */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-lg w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=500&fit=crop"
                    alt="Professional portable toilet rentals"
                    width={600}
                    height={500}
                    className="object-cover w-full h-[500px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                
                {/* Floating Price Badge */}
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-primary-accent to-secondary-accent text-white p-6 rounded-xl shadow-xl">
                  <div className="text-2xl font-bold">Starting at $75</div>
                  <div className="text-sm opacity-90">Per week</div>
                </div>

                {/* Rating Badge */}
                <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <div>
                      <div className="font-bold text-sm text-primary-dark">4.9/5</div>
                      <div className="text-xs text-text-primary">1000+ Rentals</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Warning Signs Section */}
        <section className="py-24 bg-white">
          <div className="container-service">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-primary-dark">Perfect For</span>
                <span className="block text-primary-accent">Any Project</span>
              </h2>
              {/* Modern decorative line */}
              <div className="flex items-center justify-center mb-6">
                <div className="h-px bg-gradient-to-r from-transparent via-primary-accent to-transparent w-32"></div>
                <div className="w-2 h-2 bg-primary-accent rounded-full mx-4"></div>
                <div className="h-px bg-gradient-to-r from-transparent via-primary-accent to-transparent w-32"></div>
              </div>
              <p className="text-xl text-text-primary max-w-4xl mx-auto leading-relaxed">
                From construction sites to special events, our portable toilets provide reliable sanitation solutions for any situation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {warningSignsData.map((sign, index) => {
                const severityStyles = {
                  critical: "bg-red-50 border-red-200 text-red-800 hover:bg-red-100",
                  danger: "bg-orange-50 border-orange-200 text-orange-800 hover:bg-orange-100", 
                  warning: "bg-yellow-50 border-yellow-200 text-yellow-800 hover:bg-yellow-100",
                  info: "bg-blue-50 border-blue-200 text-blue-800 hover:bg-blue-100"
                };

                return (
                  <div key={index} className={`p-8 border-2 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl ${severityStyles[sign.severity as keyof typeof severityStyles]}`}>
                    <sign.icon className="w-10 h-10 mb-6" />
                    <h3 className="text-lg font-bold mb-3">{sign.title}</h3>
                    <p className="text-sm opacity-90 leading-relaxed">{sign.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="text-center">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary-accent to-secondary-accent text-white font-bold py-5 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-6 h-6" />
                <span className="text-lg">Get Expert Consultation</span>
              </a>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-gradient-to-br from-bg-primary to-bg-secondary">
          <div className="container-service">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-primary-dark">Our Professional</span>
                <span className="block text-primary-accent">Rental Process</span>
              </h2>
              {/* Modern decorative line */}
              <div className="flex items-center justify-center mb-6">
                <div className="h-px bg-gradient-to-r from-transparent via-primary-accent to-transparent w-32"></div>
                <div className="w-2 h-2 bg-primary-accent rounded-full mx-4"></div>
                <div className="h-px bg-gradient-to-r from-transparent via-primary-accent to-transparent w-32"></div>
              </div>
              <p className="text-xl text-text-primary max-w-4xl mx-auto leading-relaxed">
                Systematic approach ensuring clean, reliable, and professional service from start to finish
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-accent/10">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-xl flex items-center justify-center text-white font-bold text-xl mb-6">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-primary-dark mb-4">{step.title}</h3>
                    <p className="text-text-primary mb-4 leading-relaxed">{step.description}</p>
                    <div className="text-primary-accent text-sm font-semibold">{step.duration}</div>
                  </div>
                  
                  {/* Connection Arrow */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-8 h-8 text-primary-accent/50" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 bg-white">
          <div className="container-service">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-primary-dark">Transparent</span>
                <span className="block text-primary-accent">Pricing</span>
              </h2>
              {/* Modern decorative line */}
              <div className="flex items-center justify-center mb-6">
                <div className="h-px bg-gradient-to-r from-transparent via-primary-accent to-transparent w-32"></div>
                <div className="w-2 h-2 bg-primary-accent rounded-full mx-4"></div>
                <div className="h-px bg-gradient-to-r from-transparent via-primary-accent to-transparent w-32"></div>
              </div>
              <p className="text-xl text-text-primary max-w-4xl mx-auto leading-relaxed">
                No hidden fees, no surprises. Know exactly what you&apos;re paying for with our upfront pricing.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Pricing Card */}
              <div className="bg-gradient-to-br from-bg-primary to-bg-secondary rounded-3xl p-10 border-2 border-primary-accent/20 hover:border-primary-accent/40 transition-all duration-300 hover:shadow-xl">
                <div className="text-center mb-10">
                  <div className="text-5xl font-bold text-primary-accent mb-4">$75 - $150</div>
                  <div className="text-2xl text-primary-dark font-semibold">Weekly Rental Service</div>
                  {/* Small decorative line */}
                  <div className="flex items-center justify-center mt-4 mb-2">
                    <div className="h-px bg-gradient-to-r from-transparent via-primary-accent/50 to-transparent w-20"></div>
                    <div className="w-1 h-1 bg-primary-accent/50 rounded-full mx-2"></div>
                    <div className="h-px bg-gradient-to-r from-transparent via-primary-accent/50 to-transparent w-20"></div>
                  </div>
                  <div className="text-text-primary mt-3">Standard units with service</div>
                </div>
                
                <div className="space-y-6 mb-10">
                  <div className="flex justify-between items-center py-3 border-b border-primary-accent/20">
                    <span className="text-text-primary font-medium">Service Frequency:</span>
                    <span className="font-bold text-primary-dark">Weekly</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-primary-accent/20">
                    <span className="text-text-primary font-medium">Same-day Delivery:</span>
                    <span className="font-bold text-green-600">Available</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-primary-accent/20">
                    <span className="text-text-primary font-medium">Multi-unit Discount:</span>
                    <span className="font-bold text-green-600">Yes</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-text-primary font-medium">Service Guarantee:</span>
                    <span className="font-bold text-green-600">100%</span>
                  </div>
                </div>

                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="block w-full text-center bg-gradient-to-r from-primary-accent to-secondary-accent text-white font-bold py-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg"
                >
                  Get Exact Quote
                </a>
              </div>

              {/* What&apos;s Included Card */}
              <div className="bg-gradient-to-br from-primary-dark to-secondary-accent text-white rounded-3xl p-10">
                <h3 className="text-3xl font-bold mb-10 text-center">
                  What&apos;s Included
                  <span className="block text-lg font-normal text-white/80 mt-3">Complete rental package</span>
                </h3>
                
                <div className="space-y-6 mb-10">
                  {[
                    "Professional delivery and setup",
                    "Weekly cleaning and pumping service", 
                    "Restocking of supplies and sanitizer",
                    "Damage inspections and maintenance",
                    "Prompt pickup and site cleanup",
                    "Complete service guarantee"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <span className="text-white/90 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-green-900/30 border border-green-400/30 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Shield className="w-6 h-6 text-green-400" />
                    <span className="font-bold text-green-300 text-lg">100% Service Guarantee</span>
                  </div>
                  <p className="text-green-200 leading-relaxed">
                    If you&apos;re not completely satisfied with our rental service, we&apos;ll make it right or provide a full refund.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gradient-to-br from-bg-primary to-bg-secondary">
          <div className="container-service">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-primary-dark">Frequently Asked</span>
                <span className="block text-primary-accent">Questions</span>
              </h2>
              {/* Modern decorative line */}
              <div className="flex items-center justify-center mb-6">
                <div className="h-px bg-gradient-to-r from-transparent via-primary-accent to-transparent w-32"></div>
                <div className="w-2 h-2 bg-primary-accent rounded-full mx-4"></div>
                <div className="h-px bg-gradient-to-r from-transparent via-primary-accent to-transparent w-32"></div>
              </div>
              <p className="text-xl text-text-primary max-w-4xl mx-auto leading-relaxed">
                Get answers to common questions about portable toilet rental services
              </p>
            </div>

            <div className="space-y-8">
              {frequentlyAskedQuestions.map((faq, index) => (
                <div key={index} className="bg-white border border-primary-accent/20 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary-accent/40">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">{faq.question}</h3>
                  <p className="text-text-primary leading-relaxed text-lg">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-gradient-to-br from-primary-dark via-primary-dark to-secondary-accent text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(191,136,41,0.2)_0%,transparent_50%)] pointer-events-none"></div>
          
          <div className="container-service text-center z-10">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Ready to Rent <span className="text-primary-accent">Portable Toilets?</span>
            </h2>
            <p className="text-xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed">
              Get clean, reliable portable toilet rentals for your project. Professional service with same-day delivery available.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="bg-white text-primary-accent hover:bg-gray-100 font-bold py-6 px-10 rounded-xl text-xl inline-flex items-center justify-center space-x-4 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <Home className="w-7 h-7" />
                <span>Get Rental Quote</span>
              </a>
              <a
                href={`tel:${CONTACT_INFO.emergencyPhone}`}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-6 px-10 rounded-xl text-xl inline-flex items-center justify-center space-x-4 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <AlertTriangle className="w-7 h-7" />
                <span>Emergency Service</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </ServiceErrorBoundary>
  );
}