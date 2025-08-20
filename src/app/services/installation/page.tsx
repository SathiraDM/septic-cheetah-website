import { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle, Clock, Phone, FileText, Shield, Award, MapPin, Settings, Users, Zap, Building, Home } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import { ServiceErrorBoundary } from '@/components/ServiceErrorBoundary';

export const metadata: Metadata = {
  title: 'Septic System Installation - Licensed Professionals',
  description: 'Professional septic system installation. New construction, replacements, permits handled. Licensed installers, warranty included.',
  openGraph: {
    title: 'Septic System Installation - Licensed Professionals',
    description: 'Complete septic installation with permits and inspections handled',
    url: '/services/installation'
  }
};

const installationServices = [
  {
    icon: Home,
    title: "New Construction Systems",
    description: "Complete septic systems for new residential properties"
  },
  {
    icon: Settings,
    title: "Replacement Installations", 
    description: "Full system replacement for failed or outdated systems"
  },
  {
    icon: Building,
    title: "System Upgrades & Expansions",
    description: "Expanding capacity or upgrading to modern standards"
  },
  {
    icon: Zap,
    title: "Alternative System Installations",
    description: "Advanced treatment systems for challenging conditions"
  },
  {
    icon: Settings,
    title: "Pump System Installations",
    description: "Specialized pump systems for difficult terrain"
  },
  {
    icon: Building,
    title: "Commercial Septic Systems",
    description: "Large-scale systems for commercial properties"
  }
];

const installationProcess = [
  {
    number: "01",
    title: "Site Evaluation & Soil Testing",
    description: "Comprehensive site assessment including percolation testing, soil analysis, and property survey to determine optimal system design and placement.",
    icon: MapPin,
    duration: "1-2 days",
    details: ["Percolation testing", "Soil composition analysis", "Site survey", "Regulatory compliance check"]
  },
  {
    number: "02",
    title: "Permit Application & Approval",
    description: "Complete handling of all permit applications, working directly with local authorities to ensure full regulatory compliance.",
    icon: FileText,
    duration: "1-2 weeks",
    details: ["Permit applications", "Design submissions", "Regulatory liaison", "Approval coordination"]
  },
  {
    number: "03",
    title: "Custom System Design",
    description: "Engineering custom system design based on soil conditions, property layout, household needs, and local regulations.",
    icon: Settings,
    duration: "3-5 days",
    details: ["System sizing", "Component selection", "Layout design", "Engineering drawings"]
  },
  {
    number: "04",
    title: "Professional Installation",
    description: "Expert excavation and installation by licensed technicians using proper techniques, quality materials, and industry best practices.",
    icon: Building,
    duration: "2-5 days",
    details: ["Site excavation", "Tank installation", "Pipe laying", "Drain field construction"]
  },
  {
    number: "05",
    title: "Inspection & Final Approval",
    description: "Coordinated inspections with local authorities, system testing, and final approval for operational use.",
    icon: CheckCircle,
    duration: "1-2 days",
    details: ["System testing", "Official inspections", "Final approvals", "Documentation"]
  }
];

const systemTypes = [
  {
    name: "Conventional Systems",
    description: "Traditional gravity-fed septic systems suitable for most soil conditions and residential properties",
    price: "$3,499 - $5,999",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
    features: ["Standard drain field design", "Gravity-fed operation", "Cost-effective solution", "Suitable for most properties", "Low maintenance requirements", "Proven reliability"],
    bestFor: "Standard residential properties with good soil conditions"
  },
  {
    name: "Advanced Treatment Systems",
    description: "Enhanced treatment systems providing superior effluent quality for environmentally sensitive areas",
    price: "$6,000 - $12,000",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
    features: ["Superior treatment quality", "Smaller footprint required", "Environmental protection", "Required in sensitive areas", "Advanced filtration", "Monitoring systems"],
    bestFor: "Properties near water sources or in environmentally sensitive areas"
  },
  {
    name: "Pump Systems",
    description: "Specialized pump systems designed for properties with challenging topography or high water tables",
    price: "$5,000 - $8,000",
    image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600",
    features: ["Uphill pumping capability", "Flexible drain field placement", "Alarm systems included", "Professional monitoring", "Backup systems", "Weather resistant"],
    bestFor: "Properties with slopes, high water tables, or limited space"
  }
];

const credentials = [
  {
    icon: Shield,
    title: "State Licensed Installers",
    description: "License #12345",
    detail: "Fully certified and bonded"
  },
  {
    icon: Award,
    title: "Fully Insured",
    description: "$2M Liability Coverage",
    detail: "Complete protection for your property"
  },
  {
    icon: CheckCircle,
    title: "Workmanship Warranty",
    description: "5-year installation warranty",
    detail: "Guaranteed quality and peace of mind"
  }
];

export default function InstallationPage() {
  return (
    <ServiceErrorBoundary>
      <main className="min-h-screen">
        {/* Modern Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-slate-800 to-slate-900 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-accent/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-secondary-accent/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center space-x-2 bg-blue-500/10 backdrop-blur-sm border border-blue-400/20 rounded-full px-4 py-2">
                    <Building className="w-4 h-4 text-blue-400" />
                    <span className="text-blue-400 font-medium">Professional Installation Services</span>
                  </div>
                  
                  <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                    Septic System
                    <span className="block bg-gradient-to-r from-blue-400 to-primary-accent bg-clip-text text-transparent">
                      Installation
                    </span>
                  </h1>
                  
                  <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed">
                    Complete septic system installation with permits handled by licensed professionals.
                    <span className="block mt-2 text-blue-400 font-medium">
                      From site evaluation to final inspection • We manage every detail
                    </span>
                  </p>
                </div>

                {/* Key Benefits */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                    <FileText className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-white text-sm">Permits Included</div>
                      <div className="text-slate-400 text-xs">We handle everything</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                    <Shield className="w-6 h-6 text-primary-accent flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-white text-sm">5-Year Warranty</div>
                      <div className="text-slate-400 text-xs">Full installation guarantee</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                    <Users className="w-6 h-6 text-secondary-accent flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-white text-sm">Licensed Team</div>
                      <div className="text-slate-400 text-xs">Certified professionals</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                    <Clock className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-white text-sm">2-4 Week Timeline</div>
                      <div className="text-slate-400 text-xs">Start to finish</div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-primary-accent text-white font-bold py-5 px-8 rounded-2xl shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    <Phone className="w-6 h-6 relative z-10" />
                    <span className="relative z-10 text-lg">Get Installation Quote</span>
                  </a>
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold py-5 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-3 hover:bg-white/20 hover:scale-105"
                  >
                    <FileText className="w-6 h-6" />
                    <span className="text-lg">Free Site Evaluation</span>
                  </a>
                </div>
              </div>

              {/* Modern Image Section */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&h=500&q=80"
                    alt="Septic system installation in progress"
                    width={600}
                    height={500}
                    className="object-cover w-full h-[500px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
                
                {/* Floating Price Card */}
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-500 to-primary-accent text-white p-6 rounded-2xl shadow-2xl backdrop-blur-sm">
                  <div className="text-3xl font-bold">$3,499</div>
                  <div className="text-sm opacity-90">Starting Price</div>
                  <div className="text-xs opacity-75 mt-1">Complete installation</div>
                </div>

                {/* Trust Badge */}
                <div className="absolute -top-4 -right-4 bg-white text-slate-900 p-4 rounded-2xl shadow-xl">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="font-bold text-sm">Licensed</div>
                      <div className="text-xs text-slate-600">& Insured</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Services Section */}
        <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 rounded-full px-4 py-2 mb-6">
                <Building className="w-5 h-5" />
                <span className="font-medium">Installation Services</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-slate-900">Complete Installation</span>
                <span className="block bg-gradient-to-r from-blue-600 to-primary-accent bg-clip-text text-transparent">
                  Solutions
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                From new construction to system replacements, we provide comprehensive septic installation services for residential and commercial properties.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {installationServices.map((service, index) => (
                <div key={index} className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-slate-100">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-primary-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Installation Process Section */}
        <section className="py-24 bg-slate-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Professional
                <span className="block bg-gradient-to-r from-blue-400 to-primary-accent bg-clip-text text-transparent">
                  Installation Process
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Systematic approach ensuring proper installation, regulatory compliance, and long-term performance
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="space-y-16">
                {installationProcess.map((step, index) => (
                  <div key={index} className="relative">
                    {/* Connection Line */}
                    {index < installationProcess.length - 1 && (
                      <div className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-blue-400 to-primary-accent lg:block hidden"></div>
                    )}
                    
                    <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-8 lg:space-y-0 lg:space-x-12">
                      {/* Step Number and Icon */}
                      <div className="flex items-center space-x-6 lg:w-80 flex-shrink-0">
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-primary-accent rounded-2xl flex items-center justify-center shadow-xl">
                            <span className="text-xl font-bold">{step.number}</span>
                          </div>
                          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-primary-accent/20 rounded-2xl blur-lg -z-10"></div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <step.icon className="w-8 h-8 text-blue-400" />
                          <span className="text-sm text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
                            {step.duration}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8">
                        <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                        <p className="text-slate-300 leading-relaxed mb-6">{step.description}</p>
                        
                        {/* Details Grid */}
                        <div className="grid grid-cols-2 gap-3">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span className="text-sm text-slate-400">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* System Types Section */}
        <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-slate-900">System</span>
                <span className="block bg-gradient-to-r from-blue-600 to-primary-accent bg-clip-text text-transparent">
                  Types Available
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Choose the right septic system for your property&apos;s specific needs and conditions
              </p>
            </div>

            <div className="space-y-12">
              {systemTypes.map((system, index) => (
                <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                  {/* Image */}
                  <div className="lg:w-1/2">
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                      <Image
                        src={system.image}
                        alt={system.name}
                        width={600}
                        height={400}
                        className="object-cover w-full h-[400px]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm text-slate-900 px-4 py-2 rounded-xl font-bold">
                        {system.price}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-1/2 space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold text-slate-900 mb-4">{system.name}</h3>
                      <p className="text-lg text-slate-600 leading-relaxed mb-6">{system.description}</p>
                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                        <div className="text-sm font-semibold text-blue-800 mb-1">Best For:</div>
                        <div className="text-sm text-blue-700">{system.bestFor}</div>
                      </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {system.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-primary-accent text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Get Quote for {system.name}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Credentials Section */}
        <section className="py-24 bg-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                Licensed &
                <span className="block bg-gradient-to-r from-blue-400 to-primary-accent bg-clip-text text-transparent">
                  Certified Professionals
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Trust your septic installation to experienced, licensed professionals with full insurance coverage
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {credentials.map((credential, index) => (
                <div key={index} className="text-center p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-primary-accent rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <credential.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{credential.title}</h3>
                  <p className="text-blue-400 font-semibold mb-2">{credential.description}</p>
                  <p className="text-slate-400 text-sm">{credential.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline and Investment Section */}
        <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-slate-900">Project Timeline &</span>
                <span className="block bg-gradient-to-r from-blue-600 to-primary-accent bg-clip-text text-transparent">
                  Investment Details
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Understanding the installation process timeline and investment required for your new septic system
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Timeline Card */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-primary-accent rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                  <div className="flex items-center space-x-3 mb-8">
                    <Clock className="w-8 h-8 text-blue-500" />
                    <h3 className="text-2xl font-bold text-slate-900">Project Timeline</h3>
                  </div>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center py-3 border-b border-slate-100">
                      <span className="text-slate-600 font-medium">Site Evaluation:</span>
                      <span className="font-bold text-slate-900">1-2 days</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-slate-100">
                      <span className="text-slate-600 font-medium">Permit Processing:</span>
                      <span className="font-bold text-slate-900">1-2 weeks</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-slate-100">
                      <span className="text-slate-600 font-medium">System Design:</span>
                      <span className="font-bold text-slate-900">3-5 days</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-slate-100">
                      <span className="text-slate-600 font-medium">Installation:</span>
                      <span className="font-bold text-slate-900">2-5 days</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-slate-100">
                      <span className="text-slate-600 font-medium">Final Inspection:</span>
                      <span className="font-bold text-slate-900">1-2 days</span>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                      <div className="flex justify-between font-bold">
                        <span className="text-blue-800">Total Timeline:</span>
                        <span className="text-blue-600">2-4 weeks</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Investment Card */}
              <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-8 text-center">
                  Investment Range
                  <span className="block text-lg font-normal text-slate-400 mt-2">Complete installation costs</span>
                </h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex justify-between items-center py-3 border-b border-slate-700">
                    <span className="text-slate-300">Conventional Systems:</span>
                    <span className="font-bold text-white">$3,499 - $7,999</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-slate-700">
                    <span className="text-slate-300">Advanced Systems:</span>
                    <span className="font-bold text-white">$8,000 - $15,000</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-slate-700">
                    <span className="text-slate-300">Pump Systems:</span>
                    <span className="font-bold text-white">$5,000 - $8,000</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-slate-700">
                    <span className="text-slate-300">Site Evaluation:</span>
                    <span className="font-bold text-green-400">FREE</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-slate-300">Permits & Inspections:</span>
                    <span className="font-bold text-green-400">INCLUDED</span>
                  </div>
                </div>
                
                <div className="bg-green-900/20 border border-green-500/20 rounded-xl p-4">
                  <p className="text-green-200 text-sm">
                    <strong>Free site evaluation included!</strong> We&apos;ll assess your property and provide 
                    a detailed, no-obligation quote with system recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-gradient-to-r from-blue-600 via-primary-accent to-secondary-accent text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Ready to Install Your New Septic System?
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
              Get started with a free site evaluation. We&apos;ll assess your property, discuss your options, 
              and provide a detailed quote for your new septic system installation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="bg-white text-blue-600 hover:bg-slate-100 font-bold py-5 px-10 rounded-2xl text-lg inline-flex items-center justify-center space-x-3 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <FileText className="w-6 h-6" />
                <span>Free Site Evaluation</span>
              </a>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-5 px-10 rounded-2xl text-lg inline-flex items-center justify-center space-x-3 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <Phone className="w-6 h-6" />
                <span>Get Installation Quote</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </ServiceErrorBoundary>
  );
}