import Image from 'next/image';
import { Users, Star, Phone, ArrowRight, CheckCircle, Heart, Home, Zap } from 'lucide-react';
import { ServiceErrorBoundary } from '@/components/ServiceErrorBoundary';
import { CONTACT_INFO } from '@/lib/constants';

// Authentic information from the founder's story
const founderStory = {
  mission: "At Septic Cheetah, our mission is to deliver fast, reliable, and high-quality septic system installations and maintenance services. We are dedicated to protecting our customers' property, health, and the environment through expert workmanship, dependable service, and long-lasting solutions.",
  vision: "Septic Cheetah envisions becoming the leading septic service provider in Austin and the surrounding areas, recognized for our speed, reliability, and commitment to environmental responsibility.",
  story: "Septic Cheetah was founded by a local family man who wanted to bring something meaningful to the Austin area—dependable service built on values of honesty, hard work, and respect for the people he serves. With deep roots in the community, he saw an opportunity to provide a service that families and businesses could count on for years to come.",
  coreValue: "Service built on trust and reliability"
};

// Real competitive advantages from the project guidance
const competitiveAdvantages = [
  {
    icon: Zap,
    title: "Fast Response Without Cutting Corners",
    description: "When septic issues come up, time matters. Septic Cheetah is built around efficiency—responding quickly and completing work on schedule—while never sacrificing the thoroughness and quality that protect your system long-term.",
    highlight: "Cheetah Speed"
  },
  {
    icon: Heart,
    title: "Clear Communication & Customer Education", 
    description: "We believe customers deserve to understand the work being done. That's why we explain each step in simple terms, answer questions, and make sure you feel confident in the decisions you're making.",
    highlight: "Education First"
  },
  {
    icon: Home,
    title: "Local, Family-Owned Dedication",
    description: "As a family-owned business serving Austin and the surrounding areas, Septic Cheetah is personally invested in every project. We see our customers as neighbors, and our success is tied directly to the community we serve.",
    highlight: "Your Neighbors"
  }
];

// Real customer testimonials from the project guidance
const testimonials = [
  {
    quote: "Septic Cheetah was a lifesaver! They showed up the same day we called, worked quickly, and had our system back up and running in no time. Fast and reliable service--exactly what we needed.",
    author: "Amanda R.",
    location: "Austin, TX"
  },
  {
    quote: "The crew at Septic Cheetah is hardworking and dependable. They explained everything clearly, finished the job on schedule, and left the site cleaner than they found it. Couldn't ask for better service.",
    author: "James L.",
    location: "Round Rock, TX"
  },
  {
    quote: "We've used other companies before, but none compare to Septic Cheetah. They're efficient, professional, and you can tell they care about doing the job right the first time.",
    author: "Maria S.",
    location: "Cedar Park, TX"
  },
  {
    quote: "From start to finish, Septic Cheetah impressed us. They responded quickly, worked nonstop until the job was done, and made sure everything was perfect before leaving. Highly recommend!",
    author: "David T.",
    location: "Georgetown, TX"
  }
];

export default function AboutPage() {
  return (
    <ServiceErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Modern Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary-dark/95 to-secondary-accent py-24 lg:py-32">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/80 via-primary-dark/60 to-secondary-accent/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-black/10"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
            <div className="text-center max-w-5xl mx-auto">
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
                <Home className="w-5 h-5 text-primary-accent" />
                <span className="text-white font-semibold">Family-Owned • Local Business</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                About{' '}
                <span className="bg-gradient-to-r from-primary-accent via-yellow-400 to-secondary-accent bg-clip-text text-transparent">
                  Septic Cheetah
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-primary-accent font-medium mb-6">
                Fast, Reliable and Kinda Dirty
              </p>

              <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-10">
                A local family business serving Austin and Central Texas with dependable septic services 
                built on values of honesty, hard work, and respect for the people we serve.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="relative overflow-hidden bg-gradient-to-r from-primary-accent to-secondary-accent text-white font-bold py-4 px-8 rounded-xl shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3 group hover:scale-105"
                >
                  <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Call: {CONTACT_INFO.phone}</span>
                </a>

                <button className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-primary-dark font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group">
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Founder's Story Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-accent/5 rounded-full blur-3xl transform -translate-x-48 -translate-y-48"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-accent/5 rounded-full blur-3xl transform translate-x-48 translate-y-48"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-accent to-secondary-accent rounded-2xl mb-8 shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  <span className="text-primary-dark">Our</span>{' '}
                  <span className="bg-gradient-to-r from-primary-accent via-yellow-400 to-secondary-accent bg-clip-text text-transparent">
                    Story
                  </span>
                </h2>
                
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p className="text-lg">
                    {founderStory.story}
                  </p>
                  
                  <div className="bg-gradient-to-r from-primary-accent/10 to-secondary-accent/10 rounded-2xl p-6 border-l-4 border-primary-accent">
                    <h3 className="text-xl font-bold text-primary-dark mb-3">Our Core Value</h3>
                    <p className="text-primary-accent font-semibold italic">
                      &ldquo;{founderStory.coreValue}&rdquo;
                    </p>
                  </div>
                  
                  <p className="text-lg">
                    The business is driven by the idea that customers deserve septic services that are fast, 
                    dependable, and rooted in integrity—always prioritizing long-term solutions over quick fixes.
                  </p>
                </div>
              </div>

              <div className="relative">
                {/* Modern Image Container with Enhanced Design */}
                <div className="relative group">
                  {/* Background decorative elements */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary-accent/20 via-secondary-accent/20 to-primary-accent/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Main container */}
                  <div className="relative bg-gradient-to-br from-white via-gray-50/50 to-white rounded-3xl p-6 lg:p-8 shadow-2xl border-2 border-gray-100/50 overflow-hidden backdrop-blur-sm">
                    {/* Floating background elements */}
                    <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-primary-accent/15 to-secondary-accent/15 rounded-full blur-2xl animate-pulse"></div>
                    <div className="absolute bottom-8 left-8 w-20 h-20 bg-gradient-to-br from-secondary-accent/10 to-primary-accent/10 rounded-full blur-xl"></div>
                    
                    {/* Image with modern styling */}
                    <div className="relative rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark/10 via-transparent to-secondary-accent/10 z-10"></div>
                      <Image
                        src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
                        alt="Family-owned septic business serving Central Texas"
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      
                      {/* Image overlay with subtle pattern */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-20"></div>
                    </div>
                    
                    {/* Enhanced badge with animations */}
                    <div className="absolute -bottom-4 -left-4 group">
                      <div className="relative bg-gradient-to-r from-primary-accent via-yellow-400 to-secondary-accent p-1 rounded-2xl shadow-2xl">
                        <div className="bg-gradient-to-br from-primary-dark to-secondary-accent text-white px-6 py-4 rounded-xl relative overflow-hidden">
                          {/* Animated background */}
                          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          
                          <div className="relative z-10">
                            <div className="text-2xl md:text-3xl font-bold mb-1">Family</div>
                            <div className="text-xs md:text-sm opacity-90 font-medium">Owned & Operated</div>
                          </div>
                          
                          {/* Corner accent */}
                          <div className="absolute top-0 right-0 w-8 h-8 bg-white/20 rounded-bl-2xl"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Additional decorative elements */}
                    <div className="absolute top-6 left-6 w-3 h-3 bg-primary-accent rounded-full opacity-60"></div>
                    <div className="absolute top-12 left-8 w-2 h-2 bg-secondary-accent rounded-full opacity-40"></div>
                    <div className="absolute bottom-20 right-6 w-4 h-4 bg-gradient-to-br from-primary-accent to-secondary-accent rounded-full opacity-50"></div>
                  </div>
                  
                  {/* Floating elements around container */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-primary-accent to-secondary-accent rounded-full opacity-70 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-secondary-accent to-primary-accent rounded-full opacity-60 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                <span className="text-primary-dark">Mission</span>{' '}
                <span className="text-gray-400">&</span>{' '}
                <span className="bg-gradient-to-r from-primary-accent via-yellow-400 to-secondary-accent bg-clip-text text-transparent">
                  Vision
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-accent to-secondary-accent mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-accent to-yellow-400 rounded-t-3xl"></div>
                <div className="absolute top-6 right-6 w-16 h-16 bg-primary-accent/10 rounded-2xl flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-primary-accent" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {founderStory.mission}
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary-accent to-primary-accent rounded-t-3xl"></div>
                <div className="absolute top-6 right-6 w-16 h-16 bg-secondary-accent/10 rounded-2xl flex items-center justify-center">
                  <Star className="w-8 h-8 text-secondary-accent" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {founderStory.vision}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Sets Us Apart Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-accent to-secondary-accent rounded-2xl mb-6 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                <span className="text-primary-dark">What Sets</span>{' '}
                <span className="bg-gradient-to-r from-primary-accent via-yellow-400 to-secondary-accent bg-clip-text text-transparent">
                  Us Apart
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our top competitive advantages that make us the trusted choice in Central Texas
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-accent to-secondary-accent mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {competitiveAdvantages.map((advantage, index) => (
                <div key={index} className="group relative">
                  <div className="relative bg-gradient-to-br from-white to-gray-50/50 p-8 rounded-2xl border-2 border-gray-100 hover:border-primary-accent/30 transition-all duration-500 hover:shadow-xl overflow-hidden h-full">
                    {/* Highlight Badge */}
                    <div className="absolute top-0 right-0 bg-gradient-to-br from-primary-accent to-secondary-accent text-white text-xs font-bold px-4 py-2 rounded-bl-2xl shadow-lg">
                      {advantage.highlight}
                    </div>
                    
                    {/* Icon */}
                    <div className="relative bg-gradient-to-br from-primary-accent/10 to-secondary-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                      <advantage.icon className="w-8 h-8 text-primary-accent" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl md:text-2xl font-bold text-primary-dark mb-4">{advantage.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-accent to-secondary-accent rounded-2xl mb-6 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                <span className="text-primary-dark">What Our</span>{' '}
                <span className="bg-gradient-to-r from-primary-accent via-yellow-400 to-secondary-accent bg-clip-text text-transparent">
                  Customers Say
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Real feedback from neighbors we&apos;ve served across Central Texas
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-accent to-secondary-accent mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-accent to-secondary-accent rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{testimonial.author.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-bold text-primary-dark">{testimonial.author}</div>
                      <div className="text-sm text-gray-500">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 bg-gradient-to-br from-primary-dark via-primary-dark to-secondary-accent text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-black/30"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 text-center">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <Phone className="w-5 h-5 text-primary-accent" />
              <span className="font-semibold">Ready to Experience the Difference?</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Get Professional Septic Services
              <br />
              <span className="text-primary-accent">You Can Trust</span>
            </h2>

            <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed">
              Join hundreds of satisfied customers who trust Septic Cheetah for fast, reliable, and professional septic services across Central Texas.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="inline-flex items-center space-x-4 bg-gradient-to-r from-primary-accent to-secondary-accent text-white font-bold py-6 px-12 rounded-2xl hover:shadow-2xl transition-all duration-300 text-xl group"
              >
                <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <span>Call Now: {CONTACT_INFO.phone}</span>
              </a>

              <button className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-primary-dark font-bold py-6 px-12 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-3 text-xl group">
                <span>Free Estimate</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </ServiceErrorBoundary>
  );
}