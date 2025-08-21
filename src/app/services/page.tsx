"use client";

import Link from 'next/link';
import { ArrowRight, CheckCircle, Phone, Star, Shield, Award, Clock, Zap, MessageCircle, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import { SERVICES, CONTACT_INFO, TESTIMONIALS, COMPETITIVE_ADVANTAGES } from '@/lib/constants';
import { trackPhoneCall } from '@/lib/utils';

// Icon mapping for competitive advantages
const getIcon = (iconName: string) => {
  const icons = {
    Zap,
    MessageCircle,
    Home,
  };
  return icons[iconName as keyof typeof icons] || Zap;
};

export default function ServicesPage() {
  return (
    <>
      {/* Redesigned Hero Section - Vertically Centered with Dynamic Height */}
      <section
        className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-dark via-primary-dark to-secondary-accent text-white"
        style={{
          minHeight: '100vh',
          height: 'calc(100vh - 90px)' // Accounting for header height
        }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/55 via-primary-dark/35 to-secondary-accent/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-black/5 to-black/25"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/15 to-black/30"></div>
        <div className="absolute inset-0 bg-black/18"></div>

        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-16 right-16 w-24 h-24 bg-primary-accent/20 rounded-full blur-2xl"
          animate={{
            y: [-8, 8, -8],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-12 w-32 h-32 bg-secondary-accent/15 rounded-full blur-3xl"
          animate={{
            y: [-10, 10, -10],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Floating Icons */}
        <motion.div
          className="absolute top-24 left-1/4 text-primary-accent/40"
          animate={{
            rotate: [0, 360],
            y: [-5, 5, -5]
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <Phone className="w-6 h-6" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 right-1/4 text-secondary-accent/40"
          animate={{
            rotate: [0, -360],
            y: [5, -5, 5]
          }}
          transition={{
            rotate: { duration: 18, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }
          }}
        >
          <CheckCircle className="w-5 h-5" />
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1540px] relative z-10 h-full flex items-center justify-center">
          {/* Enhanced Content Background for Maximum Readability */}
          <div className="absolute inset-0 bg-gradient-radial from-black/20 via-black/8 to-transparent blur-3xl opacity-70"></div>
          
          <motion.div
            className="max-w-5xl mx-auto text-center relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Icon */}
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 shadow-2xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Phone className="w-10 h-10 text-primary-accent" />
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
                  Professional
                  <br />
                  <span className="text-primary-accent drop-shadow-lg">Septic Services</span>
                  <br />
                  <span className="text-3xl md:text-4xl lg:text-5xl text-gray-200">in Austin & Central Texas</span>
                </h1>
                
                <motion.p
                  className="text-xl md:text-2xl text-primary-accent font-medium drop-shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  Fast, Reliable and Kinda Dirty
                </motion.p>
              </div>

              {/* Description */}
              <motion.p
                className="text-lg md:text-xl text-white max-w-4xl mx-auto leading-relaxed drop-shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                From emergency repairs to new installations, we&apos;re your trusted local
                family-owned septic company serving {CONTACT_INFO.serviceAreas}.
              </motion.p>

              {/* Service Area Info */}
              <motion.div
                className="mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 mb-4">
                  <span className="text-gray-300">Service Radius: {CONTACT_INFO.serviceRadius}</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
              >
                <motion.a
                  href={`tel:${CONTACT_INFO.phone}`}
                  onClick={() => trackPhoneCall('services_hero')}
                  className="relative overflow-hidden bg-gradient-to-r from-primary-accent to-secondary-accent text-white font-bold py-4 px-8 rounded-xl shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3 group"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Phone className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10">CALL NOW: {CONTACT_INFO.phone}</span>
                </motion.a>

                <motion.button
                  className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-primary-dark font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span>Get Free Estimate</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

      </section>

      {/* Modern Services Overview */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(191,136,41,0.05)_0%,transparent_50%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(69,49,14,0.03)_0%,transparent_50%)] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1540px] relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-accent to-secondary-accent rounded-2xl mb-8 shadow-lg">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6 tracking-tight">
              Comprehensive <span className="text-primary-accent">Septic Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From emergency repairs to new installations, we handle all your septic needs with 
              professional expertise and local dedication.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <div key={service.id} className="group relative">
                <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:bg-white hover:border-primary-accent/30 hover:-translate-y-2 h-full flex flex-col">
                  {/* Service Number */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-primary-accent to-secondary-accent rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-primary-dark mb-4 group-hover:text-primary-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={service.href}
                    className="mt-auto bg-gradient-to-r from-primary-accent to-secondary-accent text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Septic Cheetah - Modern Design */}
      <section className="py-24 bg-gradient-to-br from-primary-dark via-primary-dark to-secondary-accent text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(191,136,41,0.2)_0%,transparent_50%)] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1540px] relative">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-8">
              <Award className="w-8 h-8 text-primary-accent" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Why Choose <span className="text-primary-accent">Septic Cheetah</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Local family-owned business serving Austin and Central Texas with integrity
            </p>
          </div>

          {/* Main Competitive Advantages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {COMPETITIVE_ADVANTAGES.map((advantage, index) => {
              const IconComponent = getIcon(advantage.icon);
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-12 h-12 text-primary-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Trust Indicators Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                title: '24/7 Availability',
                description: 'Emergency services when you need them most',
                icon: <Clock className="w-8 h-8 text-primary-accent" />
              },
              {
                title: 'Licensed & Insured',
                description: 'Fully licensed professionals with comprehensive coverage',
                icon: <Shield className="w-8 h-8 text-primary-accent" />
              },
              {
                title: 'Local Family Business',
                description: 'Your neighbors serving neighbors with care',
                icon: <Award className="w-8 h-8 text-primary-accent" />
              },
              {
                title: '100% Satisfaction',
                description: 'We stand behind our work with guarantees',
                icon: <Star className="w-8 h-8 text-primary-accent" />
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 text-center group">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                <h4 className="font-bold text-white text-sm mb-3">
                  {benefit.title}
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials - Modern Design */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(191,136,41,0.05)_0%,transparent_50%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(69,49,14,0.03)_0%,transparent_50%)] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1540px] relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-accent to-secondary-accent rounded-2xl mb-8 shadow-lg">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6 tracking-tight">
              What Our <span className="text-primary-accent">Neighbors</span> Are Saying
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real feedback from real customers across Austin and Central Texas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {TESTIMONIALS.slice(0, 3).map((testimonial, index) => (
              <div key={index} className="group relative">
                <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:bg-white hover:border-primary-accent/30 hover:-translate-y-1 h-full">
                  {/* Quote Mark */}
                  <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-br from-primary-accent to-secondary-accent rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-xl font-bold">&quot;</span>
                  </div>
                  
                  <div className="flex items-center mb-6 pt-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic text-lg leading-relaxed">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-primary-dark text-lg">
                      {testimonial.name}
                    </span>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {testimonial.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Emergency CTA */}
      <section className="py-24 bg-gradient-to-br from-red-600 via-red-600 to-red-700 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1)_0%,transparent_50%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.1)_0%,transparent_50%)] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1540px] relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-8">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Septic Emergency? <span className="text-red-200">We&apos;re Here 24/7</span>
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-red-100 leading-relaxed">
              Don&apos;t let a septic emergency ruin your day. Our emergency response team 
              is available around the clock to handle urgent situations like septic tank overflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.a
                href={`tel:${CONTACT_INFO.emergencyPhone}`}
                onClick={() => trackPhoneCall('services_emergency')}
                className="bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl text-lg inline-flex items-center space-x-3 transition-all duration-300 shadow-2xl group"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <span>EMERGENCY: {CONTACT_INFO.emergencyPhone}</span>
              </motion.a>
              <div className="text-center sm:text-left">
                <p className="text-sm text-red-200 font-medium">
                  Available 24 hours a day, 7 days a week
                </p>
                <p className="text-xs text-red-300">
                  Same-day response guaranteed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}