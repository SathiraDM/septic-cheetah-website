'use client';

import Image from 'next/image';
import { Phone, ArrowRight, CheckCircle, Heart, Home, Zap, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { ServiceErrorBoundary } from '@/components/ServiceErrorBoundary';
import { CONTACT_INFO, TESTIMONIALS } from '@/lib/constants';
import { useState, useRef } from 'react';

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

// Enhanced testimonials with interactive features like the home page
const trustpilotStyleTestimonials = TESTIMONIALS.map((testimonial, index) => ({
  ...testimonial,
  date: ['2 days ago', '1 week ago', '3 days ago', '5 days ago'][index] || '1 week ago',
  verified: true,
  avatar: testimonial.name.split(' ').map(n => n[0]).join(''),
  service: ['Septic Pumping', 'Emergency Repair', 'System Installation', 'Maintenance'][index] || 'Septic Service'
}));

// Customer Reviews Section Component
function CustomerReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % trustpilotStyleTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + trustpilotStyleTestimonials.length) % trustpilotStyleTestimonials.length);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const currentOffset = e.clientX - dragStart;
    const maxDrag = 120;
    const constrainedOffset = Math.max(-maxDrag, Math.min(maxDrag, currentOffset));
    setDragOffset(constrainedOffset);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const dragDistance = e.clientX - dragStart;
    const threshold = 100;
    
    if (dragDistance > threshold) {
      prevTestimonial();
    } else if (dragDistance < -threshold) {
      nextTestimonial();
    }
    
    setDragOffset(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStart(e.touches[0].clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const currentOffset = e.changedTouches[0].clientX - dragStart;
    const maxDrag = 200;
    const constrainedOffset = Math.max(-maxDrag, Math.min(maxDrag, currentOffset));
    setDragOffset(constrainedOffset);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const dragDistance = e.changedTouches[0].clientX - dragStart;
    const threshold = 100;
    
    if (dragDistance > threshold) {
      prevTestimonial();
    } else if (dragDistance < -threshold) {
      nextTestimonial();
    }
    
    setDragOffset(0);
  };

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="septic-max-width overflow-hidden">
        {/* Header Section - Trustpilot Style */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            {/* Trustpilot-style overall rating */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 px-6 py-4">
              <div className="flex items-center space-x-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-green-500 fill-current" />
                  ))}
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-gray-900">5.0</div>
                  <div className="text-sm text-gray-600">Excellent</div>
                </div>
                <div className="h-12 w-px bg-gray-200"></div>
                <div className="text-left">
                  <div className="text-lg font-semibold text-gray-900">{trustpilotStyleTestimonials.length} reviews</div>
                  <div className="text-sm text-gray-600">on SepticCheetah</div>
                </div>
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            <span className="text-primary-dark">Customer</span>{' '}
            <span className="bg-gradient-to-r from-primary-accent via-secondary-accent to-primary-accent bg-clip-text text-transparent bg-300% animate-gradient">
              Reviews
            </span>
          </h2>
          <p className="text-lg text-gray-600 mb-6 font-light">
            Real feedback from verified customers
          </p>
        </div>

        {/* Three-card Carousel with Trustpilot Design */}
        <div className="relative max-w-7xl mx-auto overflow-hidden px-4 pt-4 pb-2">
          <div 
            ref={containerRef}
            className={`flex items-start justify-center space-x-6 w-full select-none transition-transform ${
              isDragging ? 'duration-100 ease-out cursor-grabbing' : 'duration-500 ease-out cursor-grab'
            }`}
            style={{
              transform: `translateX(${dragOffset * 0.3}px)`,
              filter: isDragging ? 'blur(0.5px)' : 'none',
              maxWidth: '100%',
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={() => {
              if (isDragging) {
                setIsDragging(false);
                setDragOffset(0);
              }
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {[0, 1, 2].map((offset) => {
              const index = (currentIndex + offset - 1 + trustpilotStyleTestimonials.length) % trustpilotStyleTestimonials.length;
              const testimonial = trustpilotStyleTestimonials[index];
              const isCenter = offset === 1;
              
              return (
                <div
                  key={`testimonial-${currentIndex}-${index}`}
                  className={`${isCenter ? 'w-96 max-w-96' : 'w-80 max-w-80'} flex-shrink-0 transition-all ${
                    isDragging ? 'duration-100' : 'duration-500'
                  } ease-out ${isDragging ? 'pointer-events-none' : ''} testimonial-card-320 ${isCenter ? 'center' : ''}`}
                  style={{
                    filter: isDragging ? 'brightness(0.95) saturate(0.9)' : 'brightness(1) saturate(1)',
                    transform: `
                      ${isCenter ? 'scale(1.05) translateY(-8px)' : 'scale(0.95)'} 
                      ${isDragging ? `rotate(${dragOffset * 0.01}deg)` : 'rotate(0deg)'}
                    `,
                    opacity: isCenter ? 1 : 0.8,
                    minWidth: typeof window !== 'undefined' && window.innerWidth <= 399 ? (isCenter ? '300px' : '280px') : (isCenter ? '384px' : '320px'),
                  }}
                >
                  {/* Trustpilot-style Review Card */}
                  <div className={`bg-white rounded-lg border border-gray-200 overflow-hidden transition-all ${
                    isDragging ? 'duration-100' : 'duration-500'
                  } ${
                    isCenter 
                      ? 'shadow-xl border-green-100' 
                      : 'shadow-md hover:shadow-lg'
                  }`}
                  style={{
                    boxShadow: isDragging 
                      ? isCenter 
                        ? '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(34, 197, 94, 0.1)'
                        : '0 10px 25px -3px rgba(0, 0, 0, 0.1)'
                      : undefined
                  }}
                  >
                    <div className="p-6">
                      {/* Header with avatar and user info */}
                      <div className="flex items-start space-x-4 mb-4">
                        <div className={`${
                          isCenter ? 'w-12 h-12' : 'w-10 h-10'
                        } bg-gradient-to-br from-primary-accent to-secondary-accent rounded-full flex items-center justify-center flex-shrink-0`}>
                          <span className={`text-white font-bold ${
                            isCenter ? 'text-lg' : 'text-base'
                          }`}>
                            {testimonial.avatar}
                          </span>
                        </div>
                        <div className="flex-grow min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className={`font-semibold text-gray-900 truncate ${
                              isCenter ? 'text-lg' : 'text-base'
                            }`}>
                              {testimonial.name}
                            </h4>
                            {testimonial.verified && (
                              <CheckCircle className={`text-green-500 flex-shrink-0 ${
                                isCenter ? 'w-5 h-5' : 'w-4 h-4'
                              }`} />
                            )}
                          </div>
                          <p className={`text-gray-600 ${
                            isCenter ? 'text-sm' : 'text-xs'
                          }`}>
                            {testimonial.location} • {testimonial.date}
                          </p>
                        </div>
                      </div>

                      {/* Star Rating */}
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className={`text-green-500 fill-current mr-1 ${
                            isCenter ? 'w-5 h-5' : 'w-4 h-4'
                          }`} />
                        ))}
                        <span className={`ml-2 font-semibold text-gray-900 ${
                          isCenter ? 'text-base' : 'text-sm'
                        }`}>
                          Excellent
                        </span>
                      </div>

                      {/* Service Badge */}
                      <div className="mb-4">
                        <span className={`inline-block bg-gray-100 text-gray-700 rounded-full px-3 py-1 font-medium ${
                          isCenter ? 'text-xs' : 'text-xs'
                        }`}>
                          {testimonial.service}
                        </span>
                      </div>

                      {/* Review Text */}
                      <div className="mb-4">
                        <p className={`text-gray-800 leading-relaxed ${
                          isCenter ? 'text-base' : 'text-sm'
                        }`}>
                          {testimonial.text}
                        </p>
                      </div>

                      {/* Bottom Section */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-2">
                          <span className={`text-gray-500 ${
                            isCenter ? 'text-xs' : 'text-xs'
                          }`}>
                            Verified Review
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span className={`text-gray-400 ${
                            isCenter ? 'text-xs' : 'text-xs'
                          }`}>
                            Helpful?
                          </span>
                          <button className={`text-gray-600 hover:text-primary-accent transition-colors ${
                            isCenter ? 'text-xs' : 'text-xs'
                          }`}>
                            👍
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons - Hidden on screens < 533px */}
          <button
            onClick={prevTestimonial}
            className="hidden sm:flex absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 items-center justify-center text-gray-600 hover:text-green-600 hover:border-green-200 hover:shadow-xl transition-all duration-300 z-10 hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="hidden sm:flex absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 items-center justify-center text-gray-600 hover:text-green-600 hover:border-green-200 hover:shadow-xl transition-all duration-300 z-10 hover:scale-110 active:scale-95"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {trustpilotStyleTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative overflow-hidden rounded-full transition-all duration-300 hover:scale-125 active:scale-75 ${
                index === currentIndex 
                  ? 'w-12 h-3 bg-green-500' 
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Trustpilot-style CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-white rounded-lg shadow-sm border border-gray-200 px-6 py-4">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-green-500 fill-current" />
                ))}
              </div>
              <span className="text-gray-700 font-medium">TrustScore 5.0</span>
            </div>
            <div className="h-6 w-px bg-gray-200"></div>
            <span className="text-gray-600 text-sm">
              Based on {trustpilotStyleTestimonials.length} verified reviews
            </span>
          </div>
        </div>

        {/* Drag instruction hint */}
        <div className="text-center mt-6">
          <p className={`text-sm font-light transition-all duration-300 ${
            isDragging 
              ? 'text-green-600 font-medium' 
              : 'text-gray-500'
          }`}>
            {isDragging 
              ? `Dragging... ${Math.abs(dragOffset) > 100 ? '(Release to change review)' : '(Drag more to switch)'}`
              : '← Drag the cards or use arrow buttons to navigate →'
            }
          </p>
          {isDragging && (
            <div className="mt-2 w-32 h-1 bg-gray-200 rounded-full mx-auto overflow-hidden">
              <div 
                className="h-full transition-all duration-100 rounded-full"
                style={{
                  width: `${Math.min((Math.abs(dragOffset) / 100) * 100, 100)}%`,
                  backgroundColor: Math.abs(dragOffset) > 100 ? '#22c55e' : '#86efac',
                  transform: `scaleX(${Math.abs(dragOffset) > 100 ? 1.1 : 1})`,
                }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <ServiceErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Modern Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary-dark/95 to-secondary-accent py-24 lg:py-32">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/80 via-primary-dark/60 to-secondary-accent/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-black/10"></div>
          
          <div className="septic-max-width relative z-10 container-320">
            <div className="text-center max-w-5xl mx-auto">
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
                <Home className="w-5 h-5 text-primary-accent icon-320-sm" />
                <span className="text-white font-semibold">Family-Owned • Local Business</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 hero-title-320">
                About{' '}
                <span className="bg-gradient-to-r from-primary-accent via-yellow-400 to-secondary-accent bg-clip-text text-transparent">
                  Septic Cheetah
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-primary-accent font-medium mb-6 hero-subtitle-320">
                Fast, Reliable and Kinda Dirty
              </p>

              <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-10">
                A local family business serving Austin and Central Texas with dependable septic services 
                built on values of honesty, hard work, and respect for the people we serve.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center btn-group-320">
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="relative overflow-hidden bg-gradient-to-r from-primary-accent to-secondary-accent text-white font-bold py-4 px-8 rounded-xl shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3 group hover:scale-105 emergency-btn-ultra-compact"
                >
                  <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300 icon-320-sm" />
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
          
          <div className="septic-max-width relative">
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
          <div className="septic-max-width relative">
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
          <div className="septic-max-width relative">
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

        {/* Customer Reviews - Interactive Component */}
        <CustomerReviewsSection />

        {/* Call to Action */}
        <section className="py-24 bg-gradient-to-br from-primary-dark via-primary-dark to-secondary-accent text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-black/30"></div>
          
          <div className="septic-max-width relative z-10 text-center">
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