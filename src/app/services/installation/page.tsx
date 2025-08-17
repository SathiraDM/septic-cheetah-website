import { Metadata } from 'next';
import Image from 'next/image';
import { Wrench, CheckCircle, Clock, Phone, FileText, Shield, Award } from 'lucide-react';
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
  "New construction septic systems",
  "Replacement of failed systems", 
  "System upgrades and expansions",
  "Alternative system installations",
  "Pump system installations",
  "Commercial septic systems"
];

const installationProcess = [
  {
    number: "01",
    title: "Site Evaluation & Soil Testing",
    description: "Comprehensive site assessment and percolation testing to determine the best system design for your property."
  },
  {
    number: "02",
    title: "Permit Application & Approval",
    description: "We handle all permit applications and work with local authorities to ensure compliance with regulations."
  },
  {
    number: "03",
    title: "System Design & Engineering",
    description: "Custom system design based on soil conditions, property layout, and household needs."
  },
  {
    number: "04",
    title: "Excavation & Installation",
    description: "Professional excavation and installation by licensed technicians using proper techniques and materials."
  },
  {
    number: "05",
    title: "Inspection & Final Approval",
    description: "Coordinated inspections with local authorities and final system approval for operation."
  }
];

const systemTypes = [
  {
    name: "Conventional Systems",
    description: "Traditional septic systems suitable for most soil conditions",
    price: "$3,499 - $5,999",
    features: ["Standard drain field", "Gravity-fed design", "Most cost-effective", "Suitable for most properties"]
  },
  {
    name: "Advanced Treatment Systems",
    description: "Enhanced treatment for challenging soil or environmental conditions",
    price: "$6,000 - $12,000",
    features: ["Superior treatment", "Smaller footprint", "Environmental protection", "Required in some areas"]
  },
  {
    name: "Pump Systems",
    description: "For properties with challenging topography or high water tables",
    price: "$5,000 - $8,000",
    features: ["Uphill pumping capability", "Flexible placement", "Alarm systems", "Professional monitoring"]
  }
];

export default function InstallationPage() {
  return (
    <ServiceErrorBoundary>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-bg-primary to-bg-secondary py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
                  Septic System Installation
                  <span className="block text-2xl lg:text-3xl text-secondary-accent mt-2 font-normal">
                    New systems installed right the first time
                  </span>
                </h1>
                <p className="text-xl text-text-primary mb-8">
                  Complete septic system installation with permits handled by licensed professionals. 
                  From site evaluation to final inspection, we manage every detail.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="btn-primary text-lg flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Get Installation Quote</span>
                  </a>
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="btn-secondary text-lg flex items-center justify-center space-x-2"
                  >
                    <FileText className="w-5 h-5" />
                    <span>Free Site Evaluation</span>
                  </a>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Septic system installation in progress"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary-accent text-white p-4 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold">$3,499</div>
                  <div className="text-sm">Starting Price</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-primary-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-primary-accent" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
                  Our Installation Services
                </h2>
                <p className="text-xl text-text-primary">
                  Comprehensive septic installation services for residential and commercial properties.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {installationServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-primary-accent/5 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-primary-accent mt-1 flex-shrink-0" />
                    <span className="text-text-primary font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Installation Process */}
        <section className="py-16 bg-bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
                Professional Installation Process
              </h2>
              <p className="text-xl text-text-primary max-w-2xl mx-auto">
                Our systematic approach ensures proper installation and long-term system performance.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {installationProcess.map((step, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-primary-accent text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
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

        {/* System Types */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
                Septic System Types We Install
              </h2>
              <p className="text-xl text-text-primary max-w-2xl mx-auto">
                We install various types of septic systems to meet different property needs and regulations.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {systemTypes.map((system, index) => (
                <div key={index} className="professional-card p-6">
                  <h3 className="text-xl font-bold text-primary-dark mb-3">{system.name}</h3>
                  <p className="text-text-primary mb-4">{system.description}</p>
                  <div className="text-2xl font-bold text-primary-accent mb-4">{system.price}</div>
                  <div className="space-y-2 mb-6">
                    {system.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-text-primary">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="btn-primary w-full text-center"
                  >
                    Get Quote
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Permits and Compliance */}
        <section className="py-16 bg-bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
                  Permits & Compliance Handled
                </h2>
                <p className="text-xl text-text-primary">
                  We manage all permitting and ensure full compliance with local regulations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="professional-card p-6">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">What We Handle</h3>
                  <div className="space-y-3">
                    {[
                      "Permit applications and fees",
                      "Soil percolation testing",
                      "System design approval",
                      "Installation inspections",
                      "Final system approval",
                      "Compliance documentation"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-text-primary">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="professional-card p-6">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">Our Credentials</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-6 h-6 text-primary-accent" />
                      <div>
                        <div className="font-semibold">State Licensed Installers</div>
                        <div className="text-sm text-text-primary">License #12345</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="w-6 h-6 text-primary-accent" />
                      <div>
                        <div className="font-semibold">Fully Insured</div>
                        <div className="text-sm text-text-primary">$2M Liability Coverage</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-primary-accent" />
                      <div>
                        <div className="font-semibold">Workmanship Warranty</div>
                        <div className="text-sm text-text-primary">5-year installation warranty</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline and Pricing */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
                  Timeline & Investment
                </h2>
                <p className="text-xl text-text-primary">
                  Understanding the installation process timeline and investment required.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="professional-card p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Clock className="w-8 h-8 text-primary-accent" />
                    <h3 className="text-2xl font-bold text-primary-dark">Project Timeline</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-text-primary">Site Evaluation:</span>
                      <span className="font-medium">1-2 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-primary">Permit Processing:</span>
                      <span className="font-medium">1-2 weeks</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-primary">Installation:</span>
                      <span className="font-medium">2-5 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-primary">Final Inspection:</span>
                      <span className="font-medium">1-2 days</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between font-bold">
                        <span className="text-primary-dark">Total Timeline:</span>
                        <span className="text-primary-accent">2-4 weeks</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="professional-card p-8">
                  <h3 className="text-2xl font-bold text-primary-dark mb-6">Investment Range</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-text-primary">Standard Systems:</span>
                      <span className="font-medium">$3,499 - $7,999</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-primary">Advanced Systems:</span>
                      <span className="font-medium">$8,000 - $15,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-primary">Site Evaluation:</span>
                      <span className="font-medium text-green-600">FREE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-primary">Permits Included:</span>
                      <span className="font-medium text-green-600">YES</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <p className="text-green-700 text-sm">
                      <strong>Free site evaluation included!</strong> We&apos;ll assess your property and provide 
                      a detailed quote with no obligation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-primary-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Install Your New Septic System?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get started with a free site evaluation. We&apos;ll assess your property and provide 
              a detailed quote for your new septic system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="bg-primary-accent hover:bg-secondary-accent text-white font-bold py-4 px-8 rounded-lg text-lg inline-flex items-center justify-center space-x-2"
              >
                <FileText className="w-5 h-5" />
                <span>Free Site Evaluation</span>
              </a>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="bg-white text-primary-dark hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg inline-flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Get Installation Quote</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </ServiceErrorBoundary>
  );
}