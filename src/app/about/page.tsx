import { Metadata } from 'next';
import Image from 'next/image';
import { Award, Users, Star, MapPin } from 'lucide-react';
import TrustSignals from '@/components/TrustSignals';
import { ServiceErrorBoundary } from '@/components/ServiceErrorBoundary';

export const metadata: Metadata = {
  title: 'About Us - Our Story & Team',
  description: 'Learn about Septic Cheetah&apos;s 15+ years of experience serving the community with professional septic services.',
  openGraph: {
    title: 'About Septic Cheetah - Our Story & Team',
    description: 'Trusted septic professionals with 15+ years experience',
    url: '/about'
  }
};

const teamMembers = [
  {
    name: "John Smith",
    title: "Owner & Lead Technician",
    experience: "15+ years",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "John founded Septic Cheetah with a vision to provide honest, reliable septic services to families and businesses."
  },
  {
    name: "Mike Johnson",
    title: "Senior Installation Specialist",
    experience: "12+ years",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Mike specializes in complex septic installations and has completed over 500 successful projects."
  },
  {
    name: "Sarah Davis",
    title: "Customer Service Manager",
    experience: "8+ years",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Sarah ensures every customer receives exceptional service from first call to project completion."
  }
];

const achievements = [
  { icon: Award, title: "BBB A+ Rating", description: "Accredited since 2010" },
  { icon: Users, title: "2,000+ Customers", description: "Served across the region" },
  { icon: Star, title: "4.9/5 Rating", description: "Average customer rating" },
  { icon: MapPin, title: "50+ Mile Radius", description: "Service area coverage" }
];

export default function AboutPage() {
  return (
    <ServiceErrorBoundary>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-bg-primary to-bg-secondary py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
                About Septic Cheetah
                <span className="block text-2xl lg:text-3xl text-secondary-accent mt-2 font-normal">
                  Fast, Reliable and Kinda Dirty Since 2008
                </span>
              </h1>
              <p className="text-xl text-text-primary leading-relaxed">
                With over 15 years serving families and businesses across the region, 
                we&apos;ve built our reputation one satisfied customer at a time.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-primary-dark mb-6">Our Story</h2>
                <div className="space-y-4 text-text-primary">
                  <p>
                    Septic Cheetah was founded in 2008 when John Smith saw too many families 
                    struggling with unreliable septic service providers. Armed with years of experience 
                    and a commitment to doing things right, we set out to change the industry.
                  </p>
                  <p>
                    Today, we&apos;re proud to be the area&apos;s most trusted septic service company, 
                    having served over 2,000+ satisfied customers. Our team of licensed professionals 
                    treats every job - from routine pumping to complete system installations - 
                    with the same level of care and expertise.
                  </p>
                  <p>
                    We believe in honest pricing, reliable service, and treating our customers 
                    like family. When you call Septic Cheetah, you&apos;re not just getting a service - 
                    you&apos;re getting peace of mind.
                  </p>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Septic Cheetah team and equipment"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary-accent text-white p-4 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <TrustSignals />

        {/* Team Section */}
        <section className="py-16 bg-bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
                Meet Our Professional Team
              </h2>
              <p className="text-xl text-text-primary max-w-2xl mx-auto">
                Licensed, experienced professionals dedicated to providing exceptional septic services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="professional-card p-6 text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark mb-2">{member.name}</h3>
                  <p className="text-primary-accent font-medium mb-2">{member.title}</p>
                  <p className="text-sm text-secondary-accent mb-3">{member.experience}</p>
                  <p className="text-text-primary text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
                Our Achievements
              </h2>
              <p className="text-xl text-text-primary max-w-2xl mx-auto">
                Recognition and milestones that demonstrate our commitment to excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-primary-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-primary-dark mb-2">{achievement.title}</h3>
                    <p className="text-text-primary">{achievement.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-16 bg-primary-dark text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Commitment to You</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary-accent">Service Guarantee</h3>
                  <p className="mb-4">
                    We stand behind every job with a 100% satisfaction guarantee. If you&apos;re not 
                    completely satisfied with our work, we&apos;ll make it right at no additional cost.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary-accent">Environmental Responsibility</h3>
                  <p className="mb-4">
                    All waste is properly disposed of at licensed treatment facilities. We follow 
                    strict environmental protocols to protect our community and water sources.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary-accent">Fair Pricing</h3>
                  <p className="mb-4">
                    No hidden fees, no surprise charges. We provide upfront, transparent pricing 
                    so you know exactly what to expect before we begin any work.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary-accent">Emergency Response</h3>
                  <p className="mb-4">
                    Septic emergencies don&apos;t wait for business hours. Our emergency response team 
                    is available 24/7/365 to handle urgent situations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </ServiceErrorBoundary>
  );
}