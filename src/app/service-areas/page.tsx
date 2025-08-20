'use client';

import { MapPin, Phone, Clock, Shield, Zap, Award, ArrowRight, Star, Users, Truck, CheckCircle, Home, Building } from 'lucide-react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '@/lib/constants';
import { trackPhoneCall } from '@/lib/utils';
import { useState, useEffect } from 'react';

const serviceAreas = [
  {
    region: "Central Texas - Primary Coverage",
    description: "Our home base with full 24/7 emergency coverage and fastest response times",
    color: "from-primary-accent to-secondary-accent",
    counties: [
      {
        name: "Travis County",
        cities: ["Austin", "Cedar Park", "Leander", "Pflugerville", "Round Rock", "Manor", "Elgin", "Del Valle"],
        emergencyAvailable: true,
        responseTime: "Same day",
        isCore: true
      },
      {
        name: "Williamson County", 
        cities: ["Cedar Park", "Leander", "Georgetown", "Round Rock", "Pflugerville", "Liberty Hill", "Taylor", "Hutto"],
        emergencyAvailable: true,
        responseTime: "Same day",
        isCore: true
      }
    ]
  },
  {
    region: "Extended Service Area",
    description: "Comprehensive septic services with reliable scheduling",
    color: "from-green-600 to-green-800",
    counties: [
      {
        name: "Burnet County",
        cities: ["Bertram", "Marble Falls", "Burnet", "Granite Shoals", "Cottonwood Shores", "Horseshoe Bay"],
        emergencyAvailable: true,
        responseTime: "Same day",
        isCore: false
      },
      {
        name: "Hays County",
        cities: ["Spicewood", "Driftwood", "Dripping Springs", "Buda", "Kyle", "San Marcos", "Wimberley"],
        emergencyAvailable: true,
        responseTime: "Same day",
        isCore: false
      }
    ]
  }
];

const serviceFeatures = [
  {
    icon: Zap,
    title: "Cheetah Speed Response",
    description: "Emergency services with same-day response guaranteed across all service areas",
    highlight: "24/7 Available",
    tagline: "Fast, Reliable and Kinda Dirty"
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed, bonded, and insured professionals serving your community",
    highlight: "State Licensed",
    tagline: "Peace of Mind"
  },
  {
    icon: Award,
    title: "Local Family Business",
    description: "Austin-based family company serving neighbors with integrity",
    highlight: "Family Owned",
    tagline: "Your Neighbors"
  }
];

const stats = [
  {
    icon: Users,
    value: "1,000+",
    label: "Happy Customers",
    subtext: "Across Central Texas"
  },
  {
    icon: Truck,
    value: "24/7",
    label: "Emergency Service",
    subtext: "Septic tank overflows"
  },
  {
    icon: Star,
    value: "100mi",
    label: "Service Radius",
    subtext: "From Austin"
  }
];

export default function ServiceAreas() {
  const [heroHeight, setHeroHeight] = useState('100vh');

  // Calculate hero height based on screen height and header (similar to home page)
  useEffect(() => {
    const calculateHeroHeight = () => {
      const screenHeight = window.innerHeight;
      
      if (screenHeight < 700) {
        setHeroHeight('600px');
      } else {
        const headerOffset = 90;
        const availableHeight = Math.max(600, screenHeight - headerOffset);
        setHeroHeight(`${availableHeight}px`);
      }
    };
    
    calculateHeroHeight();
    
    let resizeTimeout: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(calculateHeroHeight, 250);
    };
    
    window.addEventListener('resize', debouncedResize, { passive: true });
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Modern Hero Section - Vertically Centered */}
      <section 
        className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-dark via-primary-dark/95 to-secondary-accent"
        style={{ height: heroHeight }}
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
          <MapPin className="w-6 h-6" />
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

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 h-full flex items-center justify-center">
          {/* Enhanced Content Background for Maximum Readability */}
          <div className="absolute inset-0 bg-gradient-radial from-black/20 via-black/8 to-transparent blur-3xl opacity-70"></div>
          
          <motion.div 
            className="max-w-4xl mx-auto text-center relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="space-y-6" variants={itemVariants}>
              {/* Badge */}
              <motion.div 
                className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20"
                variants={itemVariants}
              >
                <MapPin className="w-5 h-5 text-primary-accent" />
                <span className="text-sm font-semibold tracking-wide text-white">Serving Austin & Central Texas</span>
              </motion.div>
              
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-2xl">
                  Our Service Areas
                  <br />
                  <span className="bg-gradient-to-r from-primary-accent via-yellow-400 to-secondary-accent bg-clip-text text-transparent">
                    Across Central Texas
                  </span>
                </h1>
                <motion.p 
                  className="text-lg md:text-xl text-primary-accent font-medium drop-shadow-md"
                  variants={itemVariants}
                >
                  Fast, Reliable and Kinda Dirty
                </motion.p>
              </div>

              {/* Description */}
              <motion.p 
                className="text-base md:text-lg text-white max-w-3xl mx-auto leading-relaxed drop-shadow-md"
                variants={itemVariants}
              >
                Professional septic services with same-day response and unmatched expertise. 
                We serve a 100-mile radius from Austin with 24/7 emergency coverage.
              </motion.p>

              {/* Stats Row */}
              <motion.div 
                className="grid grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto"
                variants={itemVariants}
              >
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-3 group-hover:bg-white/20 transition-all duration-300 border border-white/20">
                      <stat.icon className="w-6 h-6 text-primary-accent mx-auto mb-2" />
                      <div className="text-xl md:text-2xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-white/80 font-medium">{stat.label}</div>
                      <div className="text-xs text-white/60">{stat.subtext}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                variants={itemVariants}
              >
                <motion.a
                  href={`tel:${CONTACT_INFO.phone}`}
                  onClick={() => trackPhoneCall('service_areas_hero')}
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

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <motion.div
            className="cursor-pointer group"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            onClick={() => {
              const screenHeight = window.innerHeight;
              let scrollTarget;
              
              if (screenHeight < 700) {
                scrollTarget = 600;
              } else if (screenHeight >= 700 && screenHeight < 750) {
                scrollTarget = Math.floor(screenHeight * 0.9);
              } else {
                scrollTarget = screenHeight - 120;
              }
              
              window.scrollTo({
                top: scrollTarget,
                behavior: 'smooth'
              });
            }}
          >
            <motion.div
              className="w-5 h-8 border-2 border-white/40 rounded-full flex justify-center group-hover:border-white/80 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className="w-0.5 h-2 bg-white/40 rounded-full mt-1.5 group-hover:bg-white/80 transition-colors duration-300"
                animate={{ 
                  y: [0, 8, 0],
                  opacity: [1, 0.3, 1]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Service Features Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white to-gray-50/50"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-accent/5 rounded-full blur-3xl transform -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-accent/5 rounded-full blur-3xl transform translate-x-48 translate-y-48"></div>
        
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-accent to-secondary-accent rounded-2xl mb-6 shadow-lg">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              <span className="text-primary-dark">Why Choose</span>{' '}
              <span className="bg-gradient-to-r from-primary-accent via-yellow-400 to-secondary-accent bg-clip-text text-transparent">
                Septic Cheetah
              </span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Local family business serving Austin and Central Texas with integrity, speed, and expertise
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-accent to-secondary-accent mx-auto mt-6 rounded-full"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {serviceFeatures.map((feature, index) => (
              <motion.div 
                key={index} 
                className="group relative"
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative bg-gradient-to-br from-white to-gray-50/50 p-8 rounded-2xl border-2 border-gray-100 hover:border-primary-accent/30 transition-all duration-500 hover:shadow-xl overflow-hidden h-full">
                  {/* Highlight Badge */}
                  <div className="absolute top-0 right-0 bg-gradient-to-br from-primary-accent to-secondary-accent text-white text-xs font-bold px-4 py-2 rounded-bl-2xl shadow-lg">
                    {feature.highlight}
                  </div>
                  
                  {/* Icon */}
                  <div className="relative bg-gradient-to-br from-primary-accent/10 to-secondary-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-md">
                    <feature.icon className="w-8 h-8 text-primary-accent" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg md:text-xl font-bold text-primary-dark mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4 flex-grow">{feature.description}</p>
                  
                  {/* Tagline */}
                  <div className="bg-gray-100 rounded-full px-3 py-1 inline-block">
                    <span className="text-primary-accent font-semibold text-sm">{feature.tagline}</span>
                  </div>
                  
                  {/* Hover Effect Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-accent/5 to-secondary-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Service Areas Section - Redesigned */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-80 h-80 bg-primary-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary-accent/5 rounded-full blur-3xl"></div>
        </div>
        
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Header Section */}
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-accent to-secondary-accent rounded-3xl mb-8 shadow-xl">
              <MapPin className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-primary-dark">Service</span>{' '}
              <span className="bg-gradient-to-r from-primary-accent via-yellow-400 to-secondary-accent bg-clip-text text-transparent">
                Coverage Areas
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light mb-8">
              Residential and commercial septic services across Central Texas
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-accent to-secondary-accent mx-auto rounded-full"></div>
          </motion.div>

          <div className="space-y-16">
            {serviceAreas.map((region, regionIndex) => (
              <motion.div 
                key={regionIndex} 
                className="relative"
                variants={itemVariants}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border-2 border-gray-100 hover:border-primary-accent/20 transition-all duration-500 overflow-hidden">
                  {/* Top Accent Bar */}
                  <div className={`absolute top-0 left-0 w-full h-3 bg-gradient-to-r ${region.color} rounded-t-3xl`}></div>
                  
                  {/* Region Header */}
                  <div className="mb-12">
                    <div className="flex items-center space-x-6 mb-6">
                      <div className={`w-16 h-16 rounded-3xl bg-gradient-to-r ${region.color} flex items-center justify-center shadow-xl`}>
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-primary-dark mb-2">{region.region}</h3>
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">{region.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Counties Grid */}
                  <div className="grid md:grid-cols-2 gap-10">
                    {region.counties.map((county, countyIndex) => (
                      <motion.div 
                        key={countyIndex} 
                        className="relative group"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border-2 border-gray-100 group-hover:border-primary-accent/30 transition-all duration-300 group-hover:shadow-xl">
                          {/* County Header */}
                          <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center space-x-4">
                              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${region.color} flex items-center justify-center`}>
                                {county.isCore ? <Home className="w-6 h-6 text-white" /> : <Building className="w-6 h-6 text-white" />}
                              </div>
                              <h4 className="text-xl md:text-2xl font-bold text-primary-dark">{county.name}</h4>
                            </div>
                            <div className="text-right space-y-2">
                              {county.emergencyAvailable && (
                                <div className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-2">
                                  <Clock className="w-4 h-4" />
                                  <span>24/7 Emergency</span>
                                </div>
                              )}
                              <div className="bg-primary-accent/10 text-primary-accent px-4 py-2 rounded-full text-sm font-bold">
                                {county.responseTime}
                              </div>
                            </div>
                          </div>
                          
                          {/* Cities Grid */}
                          <div className="grid grid-cols-2 gap-4">
                            {county.cities.map((city, cityIndex) => (
                              <motion.div 
                                key={cityIndex} 
                                className="flex items-center space-x-3 group/item p-3 rounded-xl hover:bg-primary-accent/5 transition-all duration-300"
                                whileHover={{ x: 5 }}
                              >
                                <div className="w-3 h-3 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full group-hover/item:scale-125 transition-transform duration-300"></div>
                                <span className="text-gray-700 group-hover/item:text-primary-dark transition-colors duration-300 font-medium">{city}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Service Expansion Notice */}
          <motion.div className="mt-20" variants={itemVariants}>
            <div className="bg-gradient-to-r from-primary-accent via-yellow-400 to-secondary-accent rounded-3xl p-10 lg:p-16 text-white text-center relative overflow-hidden shadow-2xl">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-white rounded-full"></div>
                <div className="absolute top-1/4 right-1/4 w-14 h-14 border border-white rounded-full"></div>
              </div>
              
              <div className="relative z-10">
                <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                  Don&apos;t See Your Area?
                </h3>
                <p className="text-lg md:text-xl mb-10 text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
                  We serve a <span className="font-bold">100-mile radius</span> from Austin and are always expanding. 
                  Contact us to check if we can serve your location with our reliable septic services.
                </p>
                <motion.a
                  href={`tel:${CONTACT_INFO.phone}`}
                  onClick={() => trackPhoneCall('service_areas_expansion')}
                  className="inline-flex items-center space-x-4 bg-white text-primary-accent font-bold py-5 px-10 rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl text-lg group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Contact Us: {CONTACT_INFO.phone}</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Emergency CTA Section - Redesigned */}
      <section className="py-24 bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-600/20 via-transparent to-red-800/20"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/3 rounded-full blur-2xl"></div>
        </div>
        
        <motion.div 
          className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 mb-10 border border-white/30"
              variants={itemVariants}
            >
              <Clock className="w-6 h-6 animate-pulse" />
              <span className="text-lg font-bold tracking-wide">24/7 Emergency Response</span>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight"
              variants={itemVariants}
            >
              Septic Emergency?
              <br />
              <span className="text-red-200">We&apos;re Here for You</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed font-light"
              variants={itemVariants}
            >
              Don&apos;t wait when septic problems strike! Our emergency response team serves 
              <span className="font-bold text-white"> Travis, Williamson, Burnet, and Hays Counties</span> with 
              same-day response guaranteed.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-8 justify-center mb-12"
              variants={itemVariants}
            >
              <motion.a
                href={`tel:${CONTACT_INFO.phone}`}
                onClick={() => trackPhoneCall('service_areas_emergency')}
                className="inline-flex items-center space-x-4 bg-white text-red-600 font-bold py-6 px-12 rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl text-lg group"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
                <span>Emergency: {CONTACT_INFO.phone}</span>
              </motion.a>
              
              <div className="text-center sm:text-left self-center">
                <p className="text-lg text-red-200 font-bold mb-1">
                  Available 24 hours a day, 7 days a week
                </p>
                <p className="text-red-300 font-medium">
                  Same-day response • Licensed & insured
                </p>
              </div>
            </motion.div>
            
            {/* Service Area Response Times */}
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto border border-white/20"
              variants={itemVariants}
            >
              <h4 className="text-xl font-bold text-white mb-6">Emergency Response Coverage</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { county: "Travis County", time: "Same Day", cities: "Austin, Cedar Park" },
                  { county: "Williamson County", time: "Same Day", cities: "Georgetown, Round Rock" },
                  { county: "Burnet County", time: "Same Day", cities: "Bertram, Marble Falls" },
                  { county: "Hays County", time: "Same Day", cities: "Dripping Springs, Driftwood" }
                ].map((area, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-white/20 rounded-2xl p-4 mb-3 hover:bg-white/30 transition-all duration-300">
                      <div className="w-4 h-4 bg-green-400 rounded-full mx-auto mb-2 animate-pulse"></div>
                      <div className="text-white font-bold text-base">{area.county}</div>
                      <div className="text-red-200 text-sm font-medium">{area.time}</div>
                      <div className="text-red-300 text-xs">{area.cities}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <p className="text-red-200 text-base font-medium">
                  🚨 <span className="font-bold">What constitutes an emergency?</span> Septic tank overflows and system failures
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
