'use client';

import { MapPin, Phone, Clock, Shield, Zap, Award, ArrowRight, CheckCircle, Home, Building, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '@/lib/constants';
import { trackPhoneCall } from '@/lib/utils';

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



export default function ServiceAreas() {
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
      {/* Modern Hero Section - Responsive Height */}
      <section 
        className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-dark via-primary-dark to-secondary-accent text-white main-services-hero-responsive"
        style={{
          backgroundImage: 'url(/images/ServiceArea.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Background Overlays - Reduced for better image visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/40 via-primary-dark/30 to-secondary-accent/35"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/25 to-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/5 to-black/20"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/15 to-black/25"></div>
        <div className="absolute inset-0 bg-black/15"></div>

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

        <div className="septic-max-width relative z-10 h-full flex items-center justify-center py-20 px-6">
          {/* Enhanced Content Background for Maximum Readability */}
          <div className="absolute inset-0 bg-gradient-radial from-black/20 via-black/8 to-transparent blur-3xl opacity-70"></div>
          
          <motion.div 
            className="max-w-5xl mx-auto text-center relative z-10 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="space-y-12"
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
                <MapPin className="w-10 h-10 text-primary-accent" />
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl hero-title-320">
                  Service Areas
                  <br />
                  <span className="text-primary-accent drop-shadow-lg">Across Central Texas</span>
                  <br />
                  <span className="text-3xl md:text-4xl lg:text-5xl text-gray-200">100-Mile Service Radius</span>
                </h1>
                
                <motion.p
                  className="text-xl md:text-2xl text-primary-accent font-medium drop-shadow-md hero-subtitle-320"
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
                Professional septic services with same-day response and unmatched expertise.
                We serve {CONTACT_INFO.serviceAreas} with 24/7 emergency coverage.
              </motion.p>

              {/* Service Area Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                  <span className="text-gray-300">Service Radius: {CONTACT_INFO.serviceRadius}</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center btn-group-320"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
              >
                <motion.a
                  href={`tel:${CONTACT_INFO.emergencyPhone}`}
                  onClick={() => trackPhoneCall('service_areas_hero')}
                  className="relative overflow-hidden bg-gradient-to-r from-primary-accent to-secondary-accent text-white font-bold py-4 px-8 rounded-xl shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3 group emergency-btn-ultra-compact before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-white/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:rounded-[inherit]"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Phone className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300 icon-320-sm" />
                  <span className="relative z-10">CALL NOW: {CONTACT_INFO.emergencyPhone}</span>
                </motion.a>

                <motion.a
                  href="/contact"
                  className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-primary-dark font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group emergency-btn-ultra-compact"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span>Get Free Estimate</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 icon-320-sm" />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Features Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white to-gray-50/50"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-accent/5 rounded-full blur-3xl transform -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-accent/5 rounded-full blur-3xl transform translate-x-48 translate-y-48"></div>
        
        <motion.div
          className="septic-max-width relative px-4 sm:px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-10 sm:mb-12 md:mb-16" variants={itemVariants}>
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-accent to-secondary-accent rounded-2xl mb-4 sm:mb-6 shadow-lg">
              <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
              <span className="text-primary-dark">Why Choose</span>{' '}
              <span className="bg-gradient-to-r from-primary-accent via-yellow-400 to-secondary-accent bg-clip-text text-transparent">
                Septic Cheetah
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Local family business serving Austin and Central Texas with integrity, speed, and expertise
            </p>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-primary-accent to-secondary-accent mx-auto mt-4 sm:mt-6 rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {serviceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative bg-gradient-to-br from-white to-gray-50/50 p-6 sm:p-8 rounded-2xl border-2 border-gray-100 hover:border-primary-accent/30 transition-all duration-500 hover:shadow-xl overflow-hidden h-full">
                  {/* Highlight Badge */}
                  <div className="absolute top-0 right-0 bg-gradient-to-br from-primary-accent to-secondary-accent text-white text-xs font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-bl-2xl shadow-lg">
                    {feature.highlight}
                  </div>
                  
                  {/* Icon */}
                  <div className="relative bg-gradient-to-br from-primary-accent/10 to-secondary-accent/10 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500 shadow-md">
                    <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-accent" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary-dark mb-2 sm:mb-3">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4 flex-grow">{feature.description}</p>
                  
                  {/* Tagline */}
                  <div className="bg-gray-100 rounded-full px-3 py-1 inline-block">
                    <span className="text-primary-accent font-semibold text-xs sm:text-sm">{feature.tagline}</span>
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
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-80 h-80 bg-primary-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary-accent/5 rounded-full blur-3xl"></div>
        </div>
        
        <motion.div
          className="septic-max-width relative px-4 sm:px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Header Section */}
          <motion.div className="text-center mb-12 sm:mb-16 md:mb-20" variants={itemVariants}>
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-accent to-secondary-accent rounded-3xl mb-6 sm:mb-8 shadow-xl">
              <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-primary-dark">Service</span>{' '}
              <span className="bg-gradient-to-r from-primary-accent via-yellow-400 to-secondary-accent bg-clip-text text-transparent">
                Coverage Areas
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light mb-6 sm:mb-8">
              Residential and commercial septic services across Central Texas
            </p>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary-accent to-secondary-accent mx-auto rounded-full"></div>
          </motion.div>

          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {serviceAreas.map((region, regionIndex) => (
              <motion.div
                key={regionIndex}
                className="relative"
                variants={itemVariants}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl border-2 border-gray-100 hover:border-primary-accent/20 transition-all duration-500 overflow-hidden">
                  {/* Top Accent Bar */}
                  <div className={`absolute top-0 left-0 w-full h-2 sm:h-3 bg-gradient-to-r ${region.color} rounded-t-2xl sm:rounded-t-3xl`}></div>
                  
                  {/* Region Header */}
                  <div className="mb-8 sm:mb-10 md:mb-12">
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 mb-4 sm:mb-6">
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl bg-gradient-to-r ${region.color} flex items-center justify-center shadow-xl flex-shrink-0`}>
                        <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <div className="text-center sm:text-left">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-dark mb-1 sm:mb-2">{region.region}</h3>
                        <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">{region.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Counties Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                    {region.counties.map((county, countyIndex) => (
                      <motion.div
                        key={countyIndex}
                        className="relative group"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border-2 border-gray-100 group-hover:border-primary-accent/30 transition-all duration-300 group-hover:shadow-xl">
                          {/* County Header */}
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 space-y-4 sm:space-y-0">
                            <div className="flex items-center space-x-3 sm:space-x-4">
                              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-r ${region.color} flex items-center justify-center flex-shrink-0`}>
                                {county.isCore ? <Home className="w-5 h-5 sm:w-6 sm:h-6 text-white" /> : <Building className="w-5 h-5 sm:w-6 sm:h-6 text-white" />}
                              </div>
                              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-primary-dark">{county.name}</h4>
                            </div>
                            <div className="flex flex-row sm:flex-col space-x-2 sm:space-x-0 sm:space-y-2 text-center sm:text-right">
                              {county.emergencyAvailable && (
                                <div className="bg-red-100 text-red-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold flex items-center space-x-1 sm:space-x-2">
                                  <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                                  <span className="whitespace-nowrap">24/7 Emergency</span>
                                </div>
                              )}
                              <div className="bg-primary-accent/10 text-primary-accent px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap">
                                {county.responseTime}
                              </div>
                            </div>
                          </div>
                          
                          {/* Cities Grid */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                            {county.cities.map((city, cityIndex) => (
                              <motion.div
                                key={cityIndex}
                                className="flex items-center space-x-2 sm:space-x-3 group/item p-2 sm:p-3 rounded-xl hover:bg-primary-accent/5 transition-all duration-300"
                                whileHover={{ x: 5 }}
                              >
                                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full group-hover/item:scale-125 transition-transform duration-300 flex-shrink-0"></div>
                                <span className="text-sm sm:text-base text-gray-700 group-hover/item:text-primary-dark transition-colors duration-300 font-medium">{city}</span>
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
          <motion.div className="mt-12 sm:mt-16 md:mt-20" variants={itemVariants}>
            <div className="bg-gradient-to-br from-primary-dark via-primary-dark to-secondary-accent rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-16 text-white text-center relative overflow-hidden shadow-2xl border border-primary-accent/30">
              {/* Enhanced Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/60 via-primary-dark/40 to-secondary-accent/50"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-black/10"></div>
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/10 to-black/20"></div>
              
              {/* Animated Background Elements */}
              <motion.div 
                className="absolute top-8 right-8 w-16 h-16 sm:w-24 sm:h-24 bg-primary-accent/20 rounded-full blur-2xl"
                animate={{
                  y: [-5, 5, -5],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute bottom-8 left-8 w-20 h-20 sm:w-32 sm:h-32 bg-secondary-accent/15 rounded-full blur-3xl"
                animate={{
                  y: [-8, 8, -8],
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
                className="absolute top-16 left-1/4 text-primary-accent/30"
                animate={{
                  rotate: [0, 360],
                  y: [-3, 3, -3]
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <MapPin className="w-4 h-4 sm:w-6 sm:h-6" />
              </motion.div>
              <motion.div 
                className="absolute bottom-16 right-1/4 text-secondary-accent/30"
                animate={{
                  rotate: [0, -360],
                  y: [3, -3, 3]
                }}
                transition={{
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }
                }}
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.div>
              
              <div className="relative z-10">
                {/* Icon with enhanced styling */}
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl mx-auto mb-6 sm:mb-8 shadow-2xl border border-white/30"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-primary-accent" />
                </motion.div>
                
                {/* Badge */}
                <motion.div
                  className="inline-flex items-center space-x-2 bg-primary-accent/20 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6 border border-primary-accent/40"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="w-2 h-2 bg-primary-accent rounded-full animate-pulse"></div>
                  <span className="text-sm sm:text-base text-primary-accent font-bold tracking-wide">EXPANDING COVERAGE</span>
                </motion.div>
                
                <motion.h3
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight drop-shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Don&apos;t See Your Area?
                  <br />
                  <span className="text-primary-accent drop-shadow-md">We&apos;re Always Growing</span>
                </motion.h3>
                
                <motion.p
                  className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10 text-white/90 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  We serve a <span className="font-bold text-primary-accent">100-mile radius</span> from Austin and are constantly expanding our coverage.
                  Contact us to check if we can serve your location with our reliable septic services.
                </motion.p>
                
                {/* Enhanced CTA Button */}
                <motion.a
                  href={`tel:${CONTACT_INFO.emergencyPhone}`}
                  onClick={() => trackPhoneCall('service_areas_expansion')}
                  className="relative overflow-hidden inline-flex items-center space-x-2 sm:space-x-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-3 sm:py-4 md:py-5 px-6 sm:px-8 md:px-10 rounded-xl sm:rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl text-sm sm:text-base md:text-lg group before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-white/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:rounded-[inherit]"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10">24/7 EMERGENCY: {CONTACT_INFO.emergencyPhone}</span>
                </motion.a>
                
                {/* Additional Info */}
                <motion.div
                  className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                    <CheckCircle className="w-4 h-4 text-primary-accent" />
                    <span className="text-sm text-white/90 font-medium">Free Estimates</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                    <Clock className="w-4 h-4 text-primary-accent" />
                    <span className="text-sm text-white/90 font-medium">Same-Day Response</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Emergency CTA Section - Redesigned */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-600/20 via-transparent to-red-800/20"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/3 rounded-full blur-2xl"></div>
        </div>
        
        <motion.div
          className="septic-max-width relative text-center px-4 sm:px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="inline-flex items-center space-x-2 sm:space-x-3 bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 mb-6 sm:mb-8 md:mb-10 border border-white/30"
              variants={itemVariants}
            >
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
              <span className="text-sm sm:text-base md:text-lg font-bold tracking-wide">24/7 Emergency Response</span>
            </motion.div>
            
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight"
              variants={itemVariants}
            >
              Septic Emergency?
              <br />
              <span className="text-red-200">We&apos;re Here for You</span>
            </motion.h2>
            
            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10 md:mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed font-light"
              variants={itemVariants}
            >
              Don&apos;t wait when septic problems strike! Our emergency response team serves
              <span className="font-bold text-white"> Travis, Williamson, Burnet, and Hays Counties</span> with
              same-day response guaranteed.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center mb-8 sm:mb-10 md:mb-12"
              variants={itemVariants}
            >
              <motion.a
                href={`tel:${CONTACT_INFO.emergencyPhone}`}
                onClick={() => trackPhoneCall('service_areas_emergency')}
                className="inline-flex items-center space-x-2 sm:space-x-3 md:space-x-4 bg-white text-red-600 font-bold py-4 sm:py-5 md:py-6 px-6 sm:px-8 md:px-12 rounded-xl sm:rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl text-sm sm:text-base md:text-lg group"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-hover:rotate-12 transition-transform duration-300" />
                <span>24/7 EMERGENCY: {CONTACT_INFO.emergencyPhone}</span>
              </motion.a>
              
              <div className="text-center sm:text-left self-center">
                <p className="text-sm sm:text-base md:text-lg text-red-200 font-bold mb-1">
                  Available 24 hours a day, 7 days a week
                </p>
                <p className="text-xs sm:text-sm md:text-base text-red-300 font-medium">
                  Same-day response • Licensed & insured
                </p>
              </div>
            </motion.div>
            
            {/* Service Area Response Times */}
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 max-w-4xl mx-auto border border-white/20"
              variants={itemVariants}
            >
              <h4 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Emergency Response Coverage</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                {[
                  { county: "Travis County", time: "Same Day", cities: "Austin, Cedar Park" },
                  { county: "Williamson County", time: "Same Day", cities: "Georgetown, Round Rock" },
                  { county: "Burnet County", time: "Same Day", cities: "Bertram, Marble Falls" },
                  { county: "Hays County", time: "Same Day", cities: "Dripping Springs, Driftwood" }
                ].map((area, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-2 sm:mb-3 hover:bg-white/30 transition-all duration-300">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full mx-auto mb-1 sm:mb-2 animate-pulse"></div>
                      <div className="text-white font-bold text-xs sm:text-sm md:text-base">{area.county}</div>
                      <div className="text-red-200 text-xs sm:text-sm font-medium">{area.time}</div>
                      <div className="text-red-300 text-xs hidden sm:block">{area.cities}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 sm:mt-6 text-center">
                <p className="text-red-200 text-xs sm:text-sm md:text-base font-medium">
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
