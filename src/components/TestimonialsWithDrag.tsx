'use client';

import { Star, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { useState, useRef } from 'react';
import { TESTIMONIALS } from '@/lib/constants';

// Enhanced testimonials with Trustpilot-style data
const trustpilotStyleTestimonials = TESTIMONIALS.map((testimonial, index) => ({
  ...testimonial,
  date: ['2 days ago', '1 week ago', '3 days ago', '5 days ago'][index] || '1 week ago',
  verified: true,
  avatar: testimonial.name.split(' ').map(n => n[0]).join(''),
  service: ['Septic Pumping', 'Emergency Repair', 'System Installation', 'Maintenance'][index] || 'Septic Service'
}));

export default function TestimonialsWithDrag() {
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
    <section className="septic-section-wrapper pt-8 pb-20 bg-gray-50 overflow-hidden">
      <div className="septic-content-constrained septic-force-1540 overflow-hidden">
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
            className="hidden sm:flex absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 items-center justify-center text-gray-600 hover:text-green-600 hover:border-green-200 hover:shadow-xl transition-all duration-300 z-10 hover:scale-110 active:scale-95 carousel-nav-320"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="hidden sm:flex absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 items-center justify-center text-gray-600 hover:text-green-600 hover:border-green-200 hover:shadow-xl transition-all duration-300 z-10 hover:scale-110 active:scale-95 carousel-nav-320"
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
