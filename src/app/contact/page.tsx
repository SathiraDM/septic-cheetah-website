import { Metadata } from 'next';
import { Phone, Clock, Mail, MapPin, AlertCircle } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { CONTACT_INFO } from '@/lib/constants';
import { ServiceErrorBoundary } from '@/components/ServiceErrorBoundary';

export const metadata: Metadata = {
  title: 'Contact Us - Get Free Estimate',
  description: 'Contact Septic Cheetah for professional septic services. Multiple ways to reach us including 24/7 emergency service.',
  openGraph: {
    title: 'Contact Septic Cheetah - Get Free Estimate',
    description: 'Professional septic services with 24/7 emergency response',
    url: '/contact'
  }
};

interface ContactMethodCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  content: string;
  href: string;
  bgColor: string;
  textColor: string;
  buttonColor: string;
}

function ContactMethodCard({ 
  icon, 
  title, 
  subtitle, 
  content, 
  href, 
  bgColor, 
  textColor, 
  buttonColor 
}: ContactMethodCardProps) {
  return (
    <div className={`${bgColor} border rounded-xl p-6 text-center`}>
      <div className={`w-16 h-16 mx-auto mb-4 ${textColor} bg-white/50 rounded-full flex items-center justify-center`}>
        {icon}
      </div>
      <h3 className={`text-xl font-bold ${textColor} mb-2`}>{title}</h3>
      <p className={`${textColor} mb-4`}>{subtitle}</p>
      <p className={`text-lg font-semibold ${textColor} mb-4`}>{content}</p>
      <a
        href={href}
        className={`${buttonColor} text-white font-bold py-3 px-6 rounded-lg inline-block transition-colors duration-200`}
      >
        Contact Now
      </a>
    </div>
  );
}

function BusinessHoursWidget() {
  return (
    <div className="professional-card p-6 mb-8">
      <h3 className="text-xl font-bold text-primary-dark mb-4">Business Hours</h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-text-primary">Monday - Friday</span>
          <span className="font-medium text-primary-dark">7:00 AM - 7:00 PM</span>
        </div>
        <div className="flex justify-between">
          <span className="text-text-primary">Saturday</span>
          <span className="font-medium text-primary-dark">8:00 AM - 5:00 PM</span>
        </div>
        <div className="flex justify-between">
          <span className="text-text-primary">Sunday</span>
          <span className="font-medium text-red-600">Closed</span>
        </div>
        <div className="border-t pt-2 mt-4">
          <div className="flex items-center text-red-600">
            <AlertCircle className="w-4 h-4 mr-2" />
            <span className="font-medium">24/7 Emergency Service Available</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceAreaInfo() {
  return (
    <div className="professional-card p-6 mb-8">
      <h3 className="text-xl font-bold text-primary-dark mb-4">Service Area</h3>
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <MapPin className="w-5 h-5 text-primary-accent mt-1" />
          <div>
            <h4 className="font-semibold text-primary-dark">Primary Service Area</h4>
            <p className="text-text-primary text-sm">
              We provide same-day service within 25 miles of our location with no travel fees.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <MapPin className="w-5 h-5 text-secondary-accent mt-1" />
          <div>
            <h4 className="font-semibold text-primary-dark">Extended Service Area</h4>
            <p className="text-text-primary text-sm">
              We serve up to 50 miles from our base. Minimal travel fees may apply for distant locations.
            </p>
          </div>
        </div>
        <div className="bg-bg-primary p-3 rounded-lg">
          <p className="text-sm text-text-primary">
            <strong>Not sure if we serve your area?</strong> Call us! We&apos;re always expanding our service 
            area and may be able to help even if you&apos;re outside our typical range.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <ServiceErrorBoundary>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-bg-primary to-bg-secondary py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
              Contact Septic Cheetah
              <span className="block text-2xl lg:text-3xl text-secondary-accent mt-2 font-normal">
                Fast, Reliable and Kinda Dirty Response
              </span>
            </h1>
            <p className="text-xl text-text-primary max-w-2xl mx-auto">
              Multiple ways to reach us for all your septic needs. 
              Emergency service available 24/7/365.
            </p>
          </div>
        </section>

        {/* Contact Methods Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Emergency Contact */}
              <ContactMethodCard
                icon={<Phone className="w-8 h-8" />}
                title="Emergency Service"
                subtitle="24/7 Emergency Response"
                content={CONTACT_INFO.emergencyPhone}
                href={`tel:${CONTACT_INFO.emergencyPhone}`}
                bgColor="bg-red-50 border-red-200"
                textColor="text-red-800"
                buttonColor="bg-red-600 hover:bg-red-700"
              />

              {/* Business Hours Contact */}
              <ContactMethodCard
                icon={<Clock className="w-8 h-8" />}
                title="Business Hours"
                subtitle="Monday-Friday 7 AM - 7 PM"
                content={CONTACT_INFO.phone}
                href={`tel:${CONTACT_INFO.phone}`}
                bgColor="bg-primary-accent/10 border-primary-accent/20"
                textColor="text-primary-dark"
                buttonColor="bg-primary-accent hover:bg-secondary-accent"
              />

              {/* Email Contact */}
              <ContactMethodCard
                icon={<Mail className="w-8 h-8" />}
                title="Email Us"
                subtitle="Get a quote or ask questions"
                content={CONTACT_INFO.email}
                href={`mailto:${CONTACT_INFO.email}`}
                bgColor="bg-blue-50 border-blue-200"
                textColor="text-blue-800"
                buttonColor="bg-blue-600 hover:bg-blue-700"
              />
            </div>

            {/* Enhanced Contact Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold text-primary-dark mb-6">Get Free Estimate</h2>
                <ContactForm />
              </div>

              {/* Service Area & Location Info */}
              <div>
                <h2 className="text-3xl font-bold text-primary-dark mb-6">Service Information</h2>
                <ServiceAreaInfo />
                <BusinessHoursWidget />
                
                {/* Location */}
                <div className="professional-card p-6">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">Our Location</h3>
                  <div className="space-y-2">
                    <p className="text-text-primary">{CONTACT_INFO.address}</p>
                    <p className="text-sm text-text-primary">
                      Centrally located to serve the entire region efficiently
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency CTA */}
        <section className="py-16 bg-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Septic Emergency? Don&apos;t Wait!
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Septic emergencies can cause serious damage and health hazards. 
              Our emergency response team is standing by 24/7.
            </p>
            <a
              href={`tel:${CONTACT_INFO.emergencyPhone}`}
              className="bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-xl inline-flex items-center space-x-2 transition-colors"
            >
              <Phone className="w-6 h-6" />
              <span>EMERGENCY: {CONTACT_INFO.emergencyPhone}</span>
            </a>
          </div>
        </section>
      </main>
    </ServiceErrorBoundary>
  );
}