'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Truck, Wrench, Settings, Search, Building, Home, ArrowRight, Star, Clock, Shield, Zap } from 'lucide-react';
import { SERVICES, CONTACT_INFO } from '@/lib/constants';
import { trackEvent } from '@/lib/utils';
import { useState } from 'react';

const iconMap = {
  Truck,
  Wrench,
  Settings,
  Search,
  Building,
  Home,
};

const features = [
  {
    icon: Star,
    title: "5-Star Service",
    description: "Rated excellence by customers"
  },
  {
    icon: Clock,
    title: "Same Day Service",
    description: "Emergency response available"
  },
  {
    icon: Shield,
    title: "Licensed & Bonded",
    description: "Fully insured for your protection"
  },
  {
    icon: Zap,
    title: "Latest Equipment",
    description: "Modern tools and techniques"
  }
];

export default function ServiceCards() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0
    }
  };

  return (
    <section className="septic-section-wrapper pt-24 pb-8 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Animated Background Elements - Fixed to prevent overflow */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-accent/10 to-secondary-accent/5 rounded-full blur-3xl"
          style={{ transform: 'translate(50%, -50%)' }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-primary-accent/10 rounded-full blur-3xl"
          style={{ transform: 'translate(-50%, 50%)' }}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="septic-content-constrained septic-force-1540 relative z-10">
        {/* Modern Elegant Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-primary-dark">Expert</span>{' '}
              <span className="bg-gradient-to-r from-primary-accent via-secondary-accent to-primary-accent bg-clip-text text-transparent bg-300% animate-gradient">
                Septic Solutions
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 mb-6 font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Professional service you can trust
            </motion.p>
            
            <motion.div
              className="w-16 h-0.5 bg-gradient-to-r from-primary-accent to-secondary-accent mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
            />
          </motion.div>
        </motion.div>

        {/* Enhanced Features Row */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center group"
              variants={featureVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gradient-to-br from-primary-accent/10 to-secondary-accent/5 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-primary-accent/20 group-hover:to-secondary-accent/10 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <feature.icon className="w-8 h-8 text-primary-accent group-hover:scale-110 transition-transform duration-300 icon-320-sm" />
              </div>
              <h3 className="font-bold text-primary-dark mb-2 group-hover:text-primary-accent transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Service Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            const isHovered = hoveredCard === service.id;
            
            return (
              <motion.div
                key={service.id}
                className="group relative"
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                onHoverStart={() => setHoveredCard(service.id)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                {/* Redesigned Card with Subtle Border and Elegant Hover */}
                <div className="relative bg-white rounded-3xl p-8 h-full shadow-lg border border-gray-200/50 overflow-hidden group-hover:shadow-2xl group-hover:border-primary-accent/30 transition-all duration-300">
                  {/* Subtle Gradient Overlay on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary-accent/5 via-transparent to-secondary-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  {/* Card Content */}
                  <div className="relative h-full flex flex-col">
                    {/* Service Header */}
                    <motion.div 
                      className="flex items-center mb-8"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <motion.div 
                        className="relative p-4 bg-gradient-to-br from-primary-accent/10 to-secondary-accent/5 rounded-2xl mr-4 group-hover:from-primary-accent/20 group-hover:to-secondary-accent/10 transition-all duration-300"
                        whileHover={{ rotate: 12, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent className="w-10 h-10 text-primary-accent group-hover:scale-110 transition-transform duration-300 icon-320-md" />
                      </motion.div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-primary-dark group-hover:text-primary-accent transition-colors duration-300">
                          {service.title}
                        </h3>
                        <motion.div
                          className="h-1 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full mt-2 origin-left"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                        />
                      </div>
                    </motion.div>

                    {/* Service Description */}
                    <motion.p 
                      className="text-gray-600 mb-8 leading-relaxed text-lg flex-grow"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    >
                      {service.description}
                    </motion.p>

                    {/* Features List */}
                    <motion.div 
                      className="mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                    >
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li 
                            key={featureIndex} 
                            className="flex items-center text-gray-700"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 + featureIndex * 0.1 + 0.5 }}
                          >
                            <motion.div 
                              className="w-2 h-2 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full mr-3 flex-shrink-0"
                              whileInView={{ scale: [0, 1.2, 1] }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: index * 0.1 + featureIndex * 0.1 + 0.6 }}
                            />
                            <span className="text-sm">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Enhanced CTA Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                    >
                      <Link
                        href={service.href}
                        onClick={() => trackEvent('service_interest', { service: service.id })}
                        className="block"
                      >
                        <motion.div
                          className="relative overflow-hidden bg-gradient-to-r from-primary-accent to-secondary-accent text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-3 group/btn"
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="relative z-10">Learn More</span>
                          <motion.div
                            className="relative z-10"
                            animate={{
                              x: isHovered ? [0, 4, 0] : 0
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: isHovered ? Infinity : 0,
                              ease: "easeInOut"
                            }}
                          >
                            <ArrowRight className="w-5 h-5" />
                          </motion.div>
                        </motion.div>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enhanced Emergency CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="relative bg-gradient-to-r from-red-600 via-red-700 to-red-800 rounded-3xl p-12 max-w-4xl mx-auto overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated Background Pattern */}
            <motion.div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
              animate={{
                x: [0, 20, 0],
                y: [0, -10, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative z-10 text-white">
              <motion.div
                className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Clock className="w-5 h-5 animate-pulse" />
                <span className="text-sm font-semibold tracking-wide">24/7 Emergency</span>
              </motion.div>
              
              <motion.h3 
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Septic Emergency?
              </motion.h3>
              
              <motion.p 
                className="text-xl mb-8 text-red-100 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Don&apos;t wait! Septic emergencies can cause serious damage and health hazards. 
                Our emergency team is standing by around the clock.
              </motion.p>
              
              <motion.a
                href={`tel:${CONTACT_INFO.emergencyPhone}`}
                className="inline-flex items-center space-x-3 bg-white text-red-600 font-bold py-4 px-8 rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl group/emergency"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Clock className="w-6 h-6" />
                </motion.div>
                <span className="text-xl">EMERGENCY: {CONTACT_INFO.emergencyPhone}</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}