import { Metadata } from 'next';
import Image from 'next/image';
import { Settings, AlertTriangle, Clock, Phone, Shield, CheckCircle, Zap, Users, MapPin, Wrench, Activity, Calendar } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import { ServiceErrorBoundary } from '@/components/ServiceErrorBoundary';

export const metadata: Metadata = {
  title: 'Emergency Septic Repairs - 24/7 Service',
  description: 'Emergency septic system repairs available 24/7. Fast diagnosis, professional repair, warranty included. Call now for immediate service.',
  openGraph: {
    title: 'Emergency Septic Repairs - 24/7 Service',
    description: '24/7 emergency septic repairs with fast response times',
    url: '/services/repairs'
  }
};

const emergencyIssues = [
  {
    icon: AlertTriangle,
    issue: "Sewage Backup in Home",
    urgency: "CRITICAL",
    responseTime: "< 2 Hours",
    description: "Immediate health hazard requiring emergency response",
    color: "bg-red-600",
    textColor: "text-red-50",
    borderColor: "border-red-500",
    bgColor: "bg-red-50"
  },
  {
    icon: AlertTriangle,
    issue: "System Overflow",
    urgency: "CRITICAL", 
    responseTime: "< 2 Hours",
    description: "Raw sewage surfacing on property",
    color: "bg-red-600",
    textColor: "text-red-50",
    borderColor: "border-red-500",
    bgColor: "bg-red-50"
  },
  {
    icon: Zap,
    issue: "Pump Failure",
    urgency: "URGENT",
    responseTime: "< 4 Hours",
    description: "System not functioning, backup imminent",
    color: "bg-orange-600",
    textColor: "text-orange-50",
    borderColor: "border-orange-500",
    bgColor: "bg-orange-50"
  },
  {
    icon: MapPin,
    issue: "Drain Field Problems",
    urgency: "URGENT",
    responseTime: "< 4 Hours",
    description: "Standing water, odors, or soggy drain field areas",
    color: "bg-orange-600",
    textColor: "text-orange-50",
    borderColor: "border-orange-500",
    bgColor: "bg-orange-50"
  },
  {
    icon: Settings,
    issue: "Tank Damage",
    urgency: "PRIORITY",
    responseTime: "Same Day",
    description: "Cracks, structural issues, or baffle problems",
    color: "bg-yellow-600",
    textColor: "text-yellow-50",
    borderColor: "border-yellow-500",
    bgColor: "bg-yellow-50"
  },
  {
    icon: Wrench,
    issue: "Pipe Blockages",
    urgency: "PRIORITY",
    responseTime: "Same Day",
    description: "Slow drains, gurgling sounds, or minor backups",
    color: "bg-yellow-600",
    textColor: "text-yellow-50",
    borderColor: "border-yellow-500",
    bgColor: "bg-yellow-50"
  }
];

const repairProcess = [
  {
    number: "01",
    title: "Emergency Dispatch",
    description: "Immediate dispatch of our emergency repair team with all necessary equipment and materials for rapid response.",
    icon: Zap,
    duration: "< 30 min",
    details: ["24/7 availability", "GPS tracking", "Fully equipped trucks", "Emergency priority"]
  },
  {
    number: "02",
    title: "Rapid Assessment",
    description: "Comprehensive system diagnosis using advanced equipment to quickly identify the root cause and extent of damage.",
    icon: Activity,
    duration: "15-30 min",
    details: ["Advanced diagnostics", "Digital inspection", "Problem identification", "Safety assessment"]
  },
  {
    number: "03",
    title: "Immediate Containment",
    description: "Emergency containment measures to prevent further damage and protect health and property while planning repairs.",
    icon: Shield,
    duration: "10-20 min",
    details: ["Damage containment", "Safety measures", "Health protection", "Property preservation"]
  },
  {
    number: "04",
    title: "Professional Repair",
    description: "Expert repair using quality materials and proven emergency techniques by our licensed emergency technicians.",
    icon: Wrench,
    duration: "1-4 hours",
    details: ["Licensed technicians", "Quality materials", "Emergency techniques", "Code compliance"]
  },
  {
    number: "05",
    title: "System Testing",
    description: "Complete system testing and verification with warranty coverage on all emergency repair work performed.",
    icon: CheckCircle,
    duration: "20-30 min",
    details: ["System testing", "Performance verification", "Quality assurance", "Warranty coverage"]
  }
];

const responseTeam = [
  {
    icon: Users,
    title: "24/7 Emergency Team",
    description: "Dedicated emergency response team available around the clock"
  },
  {
    icon: MapPin,
    title: "GPS Fleet Tracking",
    description: "Real-time tracking for fastest possible response times"
  },
  {
    icon: Shield,
    title: "Fully Equipped Trucks",
    description: "Complete repair equipment and materials on every truck"
  },
  {
    icon: CheckCircle,
    title: "Licensed Technicians",
    description: "Certified professionals trained in emergency procedures"
  }
];

const maintenanceServices = [
  {
    icon: Activity,
    title: "Annual System Inspections",
    description: "Comprehensive yearly checkups to prevent emergencies"
  },
  {
    icon: Settings,
    title: "Preventive Pump Maintenance",
    description: "Regular pump servicing to avoid costly failures"
  },
  {
    icon: MapPin,
    title: "Drain Field Restoration",
    description: "Professional drain field repair and restoration"
  },
  {
    icon: Wrench,
    title: "Component Replacements",
    description: "Timely replacement of aging system components"
  },
  {
    icon: Shield,
    title: "System Upgrades",
    description: "Modernizing older systems for better performance"
  },
  {
    icon: CheckCircle,
    title: "Emergency Preparedness",
    description: "Planning and preparation for potential issues"
  }
];

export default function RepairsPage() {
  return (
    <ServiceErrorBoundary>
      <main className="min-h-screen">
        {/* Emergency Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-orange-900 overflow-hidden">
          {/* Animated Emergency Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl animate-pulse delay-500"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center space-x-2 bg-red-500/20 backdrop-blur-sm border border-red-400/30 rounded-full px-4 py-2 animate-pulse">
                    <AlertTriangle className="w-4 h-4 text-red-300" />
                    <span className="text-red-300 font-bold">24/7 EMERGENCY SERVICE</span>
                  </div>
                  
                  <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                    Emergency
                    <span className="block bg-gradient-to-r from-red-300 to-orange-300 bg-clip-text text-transparent">
                      Septic Repairs
                    </span>
                  </h1>
                  
                  <p className="text-xl lg:text-2xl text-red-100 leading-relaxed">
                    Septic emergencies don&apos;t wait for business hours.
                    <span className="block mt-2 text-red-300 font-bold">
                      Our emergency team responds when your system fails
                    </span>
                  </p>
                </div>

                {/* Emergency Response Features */}
                <div className="grid grid-cols-2 gap-4">
                  {responseTeam.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl">
                      <feature.icon className="w-6 h-6 text-red-300 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-white text-sm">{feature.title}</div>
                        <div className="text-red-200 text-xs">{feature.description}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Emergency CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:${CONTACT_INFO.emergencyPhone}`}
                    className="group relative overflow-hidden bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold py-6 px-8 rounded-2xl shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 animate-pulse"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    <AlertTriangle className="w-8 h-8 relative z-10" />
                    <div className="relative z-10">
                      <div className="text-lg font-bold">EMERGENCY LINE</div>
                      <div className="text-2xl">{CONTACT_INFO.emergencyPhone}</div>
                    </div>
                  </a>
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="group bg-white/15 backdrop-blur-sm border border-white/30 text-white font-bold py-6 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-3 hover:bg-white/25 hover:scale-105"
                  >
                    <Settings className="w-6 h-6" />
                    <div>
                      <div className="text-sm">Non-Emergency</div>
                      <div className="text-lg">Schedule Repair</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Modern Image Section */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <Image
                    src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&q=80"
                    alt="Emergency septic repair service truck"
                    width={600}
                    height={500}
                    className="object-cover w-full h-[500px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                
                {/* Floating Emergency Badge */}
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-red-500 to-orange-500 text-white p-6 rounded-2xl shadow-2xl backdrop-blur-sm animate-pulse">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm opacity-90">Emergency Service</div>
                  <div className="text-xs opacity-75 mt-1">Always Available</div>
                </div>

                {/* Response Time Badge */}
                <div className="absolute -top-4 -right-4 bg-white text-red-600 p-4 rounded-2xl shadow-xl">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-red-600" />
                    <div>
                      <div className="font-bold text-sm">{"< 2 Hours"}</div>
                      <div className="text-xs text-slate-600">Critical Response</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Response Times Section */}
        <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-2 bg-red-100 text-red-600 rounded-full px-4 py-2 mb-6">
                <Clock className="w-5 h-5" />
                <span className="font-medium">Emergency Response Times</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-slate-900">Rapid Response</span>
                <span className="block bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  When You Need It Most
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our emergency response times are tailored to the severity of your septic emergency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-red-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative p-8 bg-white rounded-3xl shadow-xl border-2 border-red-200">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <AlertTriangle className="w-8 h-8" />
                    </div>
                    <div className="text-4xl font-bold text-red-600 mb-2">{"< 2 Hours"}</div>
                    <div className="text-red-800 font-bold text-lg mb-2">CRITICAL EMERGENCIES</div>
                    <div className="text-sm text-red-700">Sewage backup, system overflow, immediate health hazards</div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative p-8 bg-white rounded-3xl shadow-xl border-2 border-orange-200">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8" />
                    </div>
                    <div className="text-4xl font-bold text-orange-600 mb-2">{"< 4 Hours"}</div>
                    <div className="text-orange-800 font-bold text-lg mb-2">URGENT REPAIRS</div>
                    <div className="text-sm text-orange-700">Pump failures, drain field issues, system malfunctions</div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative p-8 bg-white rounded-3xl shadow-xl border-2 border-yellow-200">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Settings className="w-8 h-8" />
                    </div>
                    <div className="text-4xl font-bold text-yellow-600 mb-2">Same Day</div>
                    <div className="text-yellow-800 font-bold text-lg mb-2">PRIORITY SERVICE</div>
                    <div className="text-sm text-yellow-700">Non-emergency repairs, maintenance, inspections</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="text-center bg-red-600 text-white rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">Having a Septic Emergency Right Now?</h3>
              <a
                href={`tel:${CONTACT_INFO.emergencyPhone}`}
                className="inline-flex items-center space-x-3 bg-white text-red-600 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-6 h-6" />
                <span className="text-xl">Call Emergency Line: {CONTACT_INFO.emergencyPhone}</span>
              </a>
            </div>
          </div>
        </section>

        {/* Emergency Issues Section */}
        <section className="py-24 bg-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                Common
                <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  Emergency Issues
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                From critical emergencies to routine repairs, we handle all septic system problems with appropriate urgency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {emergencyIssues.map((item, index) => (
                <div key={index} className={`relative group p-6 bg-slate-800 rounded-3xl border-2 ${item.borderColor} hover:scale-105 transition-all duration-300`}>
                  {/* Urgency Badge */}
                  <div className={`absolute -top-3 -right-3 ${item.color} ${item.textColor} px-3 py-1 rounded-full text-xs font-bold animate-pulse`}>
                    {item.urgency}
                  </div>
                  
                  {/* Response Time Badge */}
                  <div className="absolute -top-3 -left-3 bg-white text-slate-900 px-3 py-1 rounded-full text-xs font-bold">
                    {item.responseTime}
                  </div>

                  <div className="pt-4">
                    <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                      <item.icon className={`w-6 h-6 ${item.textColor}`} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{item.issue}</h3>
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-lg text-slate-300 mb-6">
                <strong>Don&apos;t see your problem listed?</strong> Call us immediately for expert emergency diagnosis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${CONTACT_INFO.emergencyPhone}`}
                  className="inline-flex items-center space-x-3 bg-red-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-red-700 transition-all duration-300 hover:scale-105"
                >
                  <AlertTriangle className="w-5 h-5" />
                  <span>Emergency: {CONTACT_INFO.emergencyPhone}</span>
                </a>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="inline-flex items-center space-x-3 bg-slate-700 text-white font-bold py-4 px-8 rounded-xl hover:bg-slate-600 transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  <span>Non-Emergency: {CONTACT_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Repair Process Section */}
        <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-slate-900">Emergency</span>
                <span className="block bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  Repair Process
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our systematic emergency response process ensures rapid diagnosis and professional repair
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="space-y-16">
                {repairProcess.map((step, index) => (
                  <div key={index} className="relative">
                    {/* Connection Line */}
                    {index < repairProcess.length - 1 && (
                      <div className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-red-500 to-orange-500 lg:block hidden"></div>
                    )}
                    
                    <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-8 lg:space-y-0 lg:space-x-12">
                      {/* Step Number and Icon */}
                      <div className="flex items-center space-x-6 lg:w-80 flex-shrink-0">
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                            <span className="text-xl font-bold text-white">{step.number}</span>
                          </div>
                          <div className="absolute -inset-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl blur-lg -z-10"></div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <step.icon className="w-8 h-8 text-red-600" />
                          <span className="text-sm text-red-600 bg-red-100 px-3 py-1 rounded-full font-medium">
                            {step.duration}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 bg-white border-2 border-red-100 rounded-3xl p-8 shadow-lg">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                        <p className="text-slate-600 leading-relaxed mb-6">{step.description}</p>
                        
                        {/* Details Grid */}
                        <div className="grid grid-cols-2 gap-3">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                              <span className="text-sm text-slate-600">{detail}</span>
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

        {/* Emergency Pricing Section */}
        <section className="py-24 bg-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                Emergency
                <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  Service Pricing
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Transparent emergency pricing with no hidden fees - you&apos;ll know exactly what to expect
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Emergency Rates Card */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-slate-800 rounded-3xl p-8 border border-slate-700">
                  <h3 className="text-2xl font-bold text-white mb-8 text-center">
                    Emergency Service Rates
                    <span className="block text-lg font-normal text-slate-400 mt-2">Professional emergency response</span>
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex justify-between items-center py-3 border-b border-slate-700">
                      <span className="text-slate-300">Emergency Service Call:</span>
                      <span className="font-bold text-white">$199</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-slate-700">
                      <span className="text-slate-300">Diagnostic Fee:</span>
                      <span className="font-bold text-white">$150</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-slate-700">
                      <span className="text-slate-300">After-Hours Surcharge:</span>
                      <span className="font-bold text-orange-400">$100</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-slate-700">
                      <span className="text-slate-300">Weekend/Holiday:</span>
                      <span className="font-bold text-orange-400">$150</span>
                    </div>
                    <div className="bg-green-900/20 border border-green-500/20 rounded-xl p-4">
                      <p className="text-green-300 text-sm">
                        <strong>Note:</strong> Service call and diagnostic fees are applied toward repair costs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What&apos;s Included Card */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                  Emergency Service Includes
                  <span className="block text-lg font-normal text-slate-600 mt-2">Complete emergency response</span>
                </h3>
                
                <div className="space-y-4 mb-8">
                  {[
                    "24/7 emergency response dispatch",
                    "Complete system diagnosis",
                    "Immediate containment measures",
                    "Professional emergency repair",
                    "Quality parts and materials",
                    "1-year warranty on all work"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <Shield className="w-5 h-5 text-red-600" />
                    <span className="font-bold text-red-800">Emergency Repair Warranty</span>
                  </div>
                  <p className="text-red-700 text-sm">
                    All emergency repairs come with a 1-year warranty on parts and labor for your peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Preventive Maintenance Section */}
        <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-slate-900">Prevent Emergencies with</span>
                <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Regular Maintenance
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Avoid costly emergency repairs with our comprehensive preventive maintenance services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {maintenanceServices.map((service, index) => (
                <div key={index} className="group p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-slate-100">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-3xl p-12">
              <h3 className="text-3xl font-bold mb-4">
                Save Money with Preventive Maintenance
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Regular maintenance can extend your system&apos;s life by 50% and prevent 
                costly emergency repairs. Schedule your maintenance today.
              </p>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="inline-flex items-center space-x-3 bg-white text-blue-600 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Calendar className="w-6 h-6" />
                <span>Schedule Maintenance</span>
              </a>
            </div>
          </div>
        </section>

        {/* Final Emergency CTA */}
        <section className="py-24 bg-gradient-to-r from-red-600 via-red-700 to-orange-600 text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Septic Emergency? Don&apos;t Wait!
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
              Emergency septic problems get worse fast. Our emergency response team 
              is standing by 24/7 to help when you need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href={`tel:${CONTACT_INFO.emergencyPhone}`}
                className="bg-white text-red-600 hover:bg-slate-100 font-bold py-6 px-10 rounded-2xl text-xl inline-flex items-center justify-center space-x-3 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <AlertTriangle className="w-8 h-8" />
                <div>
                  <div className="text-sm">EMERGENCY</div>
                  <div className="text-2xl font-black">{CONTACT_INFO.emergencyPhone}</div>
                </div>
              </a>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="bg-red-800 hover:bg-red-900 text-white font-bold py-6 px-10 rounded-2xl text-xl inline-flex items-center justify-center space-x-3 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <Phone className="w-8 h-8" />
                <div>
                  <div className="text-sm">Schedule Repair</div>
                  <div className="text-lg">{CONTACT_INFO.phone}</div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </ServiceErrorBoundary>
  );
}