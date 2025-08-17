import { Metadata } from 'next';
import Image from 'next/image';
import { Settings, AlertTriangle, Clock, Phone, Shield, Wrench, CheckCircle } from 'lucide-react';
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

const commonIssues = [
  {
    issue: "Sewage Backup in Home",
    urgency: "Emergency",
    description: "Immediate health hazard requiring emergency response",
    color: "bg-red-50 border-red-200 text-red-800"
  },
  {
    issue: "System Overflow",
    urgency: "Emergency", 
    description: "Raw sewage on property surface",
    color: "bg-red-50 border-red-200 text-red-800"
  },
  {
    issue: "Pump Failure",
    urgency: "Urgent",
    description: "System not functioning, backup imminent",
    color: "bg-orange-50 border-orange-200 text-orange-800"
  },
  {
    issue: "Drain Field Problems",
    urgency: "Urgent",
    description: "Standing water, odors, or soggy areas",
    color: "bg-orange-50 border-orange-200 text-orange-800"
  },
  {
    issue: "Tank Damage",
    urgency: "Priority",
    description: "Cracks, structural issues, or baffle problems",
    color: "bg-yellow-50 border-yellow-200 text-yellow-800"
  },
  {
    issue: "Pipe Blockages",
    urgency: "Priority",
    description: "Slow drains, gurgling sounds, or backups",
    color: "bg-yellow-50 border-yellow-200 text-yellow-800"
  }
];

const repairProcess = [
  {
    number: "01",
    title: "Emergency Response",
    description: "Immediate dispatch of our emergency repair team to assess and contain the situation."
  },
  {
    number: "02",
    title: "System Diagnosis",
    description: "Comprehensive inspection using advanced diagnostic equipment to identify the root cause."
  },
  {
    number: "03",
    title: "Repair Plan & Quote",
    description: "Detailed repair plan with transparent pricing and timeline for completion."
  },
  {
    number: "04",
    title: "Professional Repair",
    description: "Expert repair using quality materials and proven techniques by licensed technicians."
  },
  {
    number: "05",
    title: "Testing & Warranty",
    description: "Complete system testing and warranty coverage on all repair work performed."
  }
];

const maintenanceServices = [
  "Annual system inspections",
  "Preventive pump maintenance",
  "Drain field restoration",
  "Baffle repair and replacement",
  "Pipe cleaning and unclogging",
  "System component upgrades"
];

export default function RepairsPage() {
  return (
    <ServiceErrorBoundary>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-50 to-orange-50 py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
                  Emergency Septic Repairs
                  <span className="block text-2xl lg:text-3xl text-red-600 mt-2 font-normal">
                    24/7 response when your system fails
                  </span>
                </h1>
                <p className="text-xl text-text-primary mb-8">
                  Septic emergencies don&apos;t wait for business hours. Our emergency repair team 
                  is available around the clock for urgent situations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:${CONTACT_INFO.emergencyPhone}`}
                    className="btn-emergency text-lg flex items-center justify-center space-x-2"
                  >
                    <AlertTriangle className="w-5 h-5" />
                    <span>EMERGENCY: {CONTACT_INFO.emergencyPhone}</span>
                  </a>
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="btn-secondary text-lg flex items-center justify-center space-x-2"
                  >
                    <Settings className="w-5 h-5" />
                    <span>Schedule Inspection</span>
                  </a>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Emergency septic repair service"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-4 rounded-lg shadow-lg animate-pulse">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm">Emergency Service</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Response Times */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-8">
                Emergency Response Times
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
                  <div className="text-3xl font-bold text-red-600 mb-2">{"< 2 Hours"}</div>
                  <div className="text-red-800 font-semibold mb-2">Critical Emergencies</div>
                  <div className="text-sm text-red-700">Sewage backup, system overflow</div>
                </div>
                <div className="p-6 bg-orange-50 border border-orange-200 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">{"< 4 Hours"}</div>
                  <div className="text-orange-800 font-semibold mb-2">Urgent Repairs</div>
                  <div className="text-sm text-orange-700">Pump failures, drain field issues</div>
                </div>
                <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">Same Day</div>
                  <div className="text-yellow-800 font-semibold mb-2">Priority Service</div>
                  <div className="text-sm text-yellow-700">Non-emergency repairs, maintenance</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Repair Issues */}
        <section className="py-16 bg-bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
                  Common Septic Problems We Fix
                </h2>
                <p className="text-xl text-text-primary">
                  From emergency situations to routine repairs, we handle all types of septic system issues.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {commonIssues.map((item, index) => (
                  <div key={index} className={`p-6 border rounded-lg ${item.color}`}>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-bold">{item.issue}</h3>
                      <span className="text-xs font-bold px-2 py-1 rounded-full bg-white/50">
                        {item.urgency}
                      </span>
                    </div>
                    <p className="text-sm">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-lg text-text-primary mb-4">
                  <strong>Don&apos;t see your problem listed?</strong> Call us for expert diagnosis.
                </p>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Get Expert Diagnosis</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Repair Process */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
                Our Emergency Repair Process
              </h2>
              <p className="text-xl text-text-primary max-w-2xl mx-auto">
                Fast, systematic approach to diagnose and repair your septic system emergency.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {repairProcess.map((step, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary-dark mb-2">{step.title}</h3>
                      <p className="text-text-primary">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing and Response */}
        <section className="py-16 bg-bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
                  Emergency Repair Pricing
                </h2>
                <p className="text-xl text-text-primary">
                  Transparent pricing for emergency repairs with no hidden fees.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="professional-card p-8">
                  <h3 className="text-2xl font-bold text-primary-dark mb-6">Service Rates</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-text-primary">Emergency Service Call:</span>
                      <span className="font-medium">$199</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-primary">Diagnostic Fee:</span>
                      <span className="font-medium">$150</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-primary">After-Hours Surcharge:</span>
                      <span className="font-medium">$100</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-primary">Weekend/Holiday:</span>
                      <span className="font-medium">$150</span>
                    </div>
                    <div className="border-t pt-4">
                      <p className="text-sm text-text-primary">
                        <strong>Note:</strong> Service call and diagnostic fees are applied toward repair costs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="professional-card p-8">
                  <h3 className="text-2xl font-bold text-primary-dark mb-6">What&apos;s Included</h3>
                  <div className="space-y-3">
                    {[
                      "Emergency response dispatch",
                      "Complete system diagnosis",
                      "Detailed repair estimate",
                      "Professional repair service",
                      "Quality parts and materials",
                      "Warranty on all work"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-text-primary">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Shield className="w-5 h-5 text-green-600" />
                      <span className="font-bold text-green-800">Repair Warranty</span>
                    </div>
                    <p className="text-green-700 text-sm">
                      All emergency repairs come with a 1-year warranty on parts and labor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Preventive Maintenance */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-primary-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-primary-accent" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
                  Preventive Maintenance Services
                </h2>
                <p className="text-xl text-text-primary">
                  Avoid costly emergencies with regular maintenance and inspections.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {maintenanceServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-primary-accent/5 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-primary-accent mt-1 flex-shrink-0" />
                    <span className="text-text-primary font-medium">{service}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <div className="bg-primary-accent/10 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-bold text-primary-dark mb-2">
                    Save Money with Preventive Maintenance
                  </h3>
                  <p className="text-text-primary">
                    Regular maintenance can extend your system&apos;s life by 50% and prevent 
                    costly emergency repairs. Schedule your annual inspection today.
                  </p>
                </div>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <Clock className="w-4 h-4" />
                  <span>Schedule Maintenance</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Final Emergency CTA */}
        <section className="py-16 bg-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Septic Emergency? Call Now!
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Don&apos;t let a septic emergency get worse. Our emergency response team 
              is standing by 24/7 to help when you need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${CONTACT_INFO.emergencyPhone}`}
                className="bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-xl inline-flex items-center justify-center space-x-2"
              >
                <AlertTriangle className="w-6 h-6" />
                <span>EMERGENCY: {CONTACT_INFO.emergencyPhone}</span>
              </a>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="bg-red-800 hover:bg-red-900 text-white font-bold py-4 px-8 rounded-lg text-xl inline-flex items-center justify-center space-x-2"
              >
                <Phone className="w-6 h-6" />
                <span>Schedule Repair: {CONTACT_INFO.phone}</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </ServiceErrorBoundary>
  );
}