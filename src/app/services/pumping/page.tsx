import { Metadata } from 'next';
import Image from 'next/image';
import { AlertTriangle, CheckCircle, Phone, Truck, Shield } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import { ServiceErrorBoundary } from '@/components/ServiceErrorBoundary';

export const metadata: Metadata = {
  title: 'Septic Tank Pumping - Same Day Service',
  description: 'Professional septic tank pumping service. Same-day availability, licensed technicians, proper disposal. Starting at $299.',
  openGraph: {
    title: 'Septic Tank Pumping - Same Day Service',
    description: 'Professional septic pumping with same-day service available',
    url: '/services/pumping'
  }
};

const pumpingSigns = [
  "Slow drains or gurgling sounds from fixtures",
  "Sewage odors around your property",
  "Sewage backup or overflow in home",
  "Regular maintenance (every 3-5 years)",
  "Real estate inspections and transfers",
  "Standing water around septic tank area"
];

const pumpingProcess = [
  {
    number: "01",
    title: "Locate and Access Tank",
    description: "We locate your septic tank and safely access the system for inspection."
  },
  {
    number: "02", 
    title: "Pump Waste and Sludge",
    description: "Complete removal of liquid waste, sludge, and scum layers from your tank."
  },
  {
    number: "03",
    title: "Basic System Inspection", 
    description: "Visual inspection of tank condition, baffles, and potential issues."
  },
  {
    number: "04",
    title: "Proper Disposal",
    description: "Licensed disposal at approved waste treatment facilities."
  },
  {
    number: "05",
    title: "Cleanup and Documentation",
    description: "Complete cleanup and detailed service documentation for your records."
  }
];

const pricingIncludes = [
  "Complete tank pumping",
  "Basic visual inspection", 
  "Proper licensed disposal",
  "Cleanup and documentation",
  "Service guarantee"
];

const pumpingFAQs = [
  {
    question: "How often should I pump my septic tank?",
    answer: "Most residential septic tanks should be pumped every 3-5 years, depending on household size and usage. We can help determine the right schedule for your system."
  },
  {
    question: "How long does septic pumping take?",
    answer: "Most pumping jobs take 45-90 minutes, depending on tank size and access. We work efficiently to minimize disruption to your day."
  },
  {
    question: "What happens to the waste after pumping?",
    answer: "All waste is transported to licensed treatment facilities for proper processing. We follow strict environmental regulations for disposal."
  },
  {
    question: "Can you pump my tank if I can't find the lid?",
    answer: "Yes! We have equipment to locate buried septic tanks and can safely excavate access points if needed."
  }
];

export default function PumpingPage() {
  return (
    <ServiceErrorBoundary>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-bg-primary to-bg-secondary py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
                  Professional Septic Pumping
                  <span className="block text-2xl lg:text-3xl text-secondary-accent mt-2 font-normal">
                    Same-day service across the region
                  </span>
                </h1>
                <p className="text-xl text-text-primary mb-8">
                  Fast, reliable septic tank pumping when you need it most. 
                  Licensed technicians, proper disposal, competitive pricing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="btn-primary text-lg flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Schedule Pumping</span>
                  </a>
                  <a
                    href={`tel:${CONTACT_INFO.emergencyPhone}`}
                    className="btn-emergency text-lg flex items-center justify-center space-x-2"
                  >
                    <AlertTriangle className="w-5 h-5" />
                    <span>Emergency Service</span>
                  </a>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional septic pumping truck"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary-accent text-white p-4 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold">$299</div>
                  <div className="text-sm">Starting Price</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* When You Need Pumping */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
                  When You Need Septic Pumping
                </h2>
                <p className="text-xl text-text-primary">
                  Don&apos;t wait for a backup! Watch for these warning signs that indicate it&apos;s time for pumping.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pumpingSigns.map((sign, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-red-50 rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <span className="text-text-primary">{sign}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-lg text-text-primary mb-4">
                  <strong>Don&apos;t see your symptoms?</strong> Call us for a free consultation.
                </p>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call for Consultation</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Our Pumping Process */}
        <section className="py-16 bg-bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
                Our Professional Pumping Process
              </h2>
              <p className="text-xl text-text-primary max-w-2xl mx-auto">
                We follow a systematic approach to ensure thorough, safe, and efficient service every time.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {pumpingProcess.map((step, index) => (
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

        {/* Pricing and Service Details */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
                  Transparent Pricing & Service Details
                </h2>
                <p className="text-xl text-text-primary">
                  No hidden fees, no surprises. Here&apos;s exactly what you get with our pumping service.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Pricing Card */}
                <div className="professional-card p-8">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-primary-accent mb-2">$299-$399</div>
                    <div className="text-lg text-text-primary">Standard Pumping Service</div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-text-primary">Service Duration:</span>
                      <span className="font-medium">45-90 minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-primary">Emergency Surcharge:</span>
                      <span className="font-medium text-red-600">+$100</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-primary">Same-day Available:</span>
                      <span className="font-medium text-green-600">Yes</span>
                    </div>
                  </div>

                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="btn-primary w-full text-center"
                  >
                    Get Exact Quote
                  </a>
                </div>

                {/* What's Included */}
                <div className="professional-card p-8">
                  <h3 className="text-2xl font-bold text-primary-dark mb-6">What&apos;s Included</h3>
                  <div className="space-y-3">
                    {pricingIncludes.map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-text-primary">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Shield className="w-5 h-5 text-green-600" />
                      <span className="font-bold text-green-800">Service Guarantee</span>
                    </div>
                    <p className="text-green-700 text-sm">
                      100% satisfaction guaranteed. If you&apos;re not happy with our service, we&apos;ll make it right.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-text-primary">
                  Get answers to common questions about septic tank pumping.
                </p>
              </div>

              <div className="space-y-6">
                {pumpingFAQs.map((faq, index) => (
                  <div key={index} className="professional-card p-6">
                    <h3 className="text-lg font-bold text-primary-dark mb-3">{faq.question}</h3>
                    <p className="text-text-primary">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-primary-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Schedule Your Pumping?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Same-day service available for most areas. Call now to schedule or get emergency service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="bg-primary-accent hover:bg-secondary-accent text-white font-bold py-4 px-8 rounded-lg text-lg inline-flex items-center justify-center space-x-2"
              >
                <Truck className="w-5 h-5" />
                <span>Schedule Pumping Now</span>
              </a>
              <a
                href={`tel:${CONTACT_INFO.emergencyPhone}`}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg inline-flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Emergency Service</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </ServiceErrorBoundary>
  );
}