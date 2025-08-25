'use client';

import { Phone, Mail, AlertTriangle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '@/lib/constants';
import { trackPhoneCall } from '@/lib/utils';

export default function ContactHero() {
  return (
    <section 
      className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-dark via-primary-dark to-secondary-accent text-white main-services-hero-responsive"
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
        <Mail className="w-5 h-5" />
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
              <Phone className="w-10 h-10 text-primary-accent" />
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl hero-title-320">
                Contact
                <br />
                <span className="text-primary-accent drop-shadow-lg">Septic Cheetah</span>
                <br />
                <span className="text-3xl md:text-4xl lg:text-5xl text-gray-200">24/7 Emergency Service</span>
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
              Multiple ways to connect with your local septic experts. 
              Emergency service available 24/7 throughout {CONTACT_INFO.serviceAreas}.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                <span className="text-gray-300">Emergency: {CONTACT_INFO.emergencyPhone}</span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <span className="text-gray-300">Business: {CONTACT_INFO.phone}</span>
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
                href={`tel:${CONTACT_INFO.phone}`}
                onClick={() => trackPhoneCall('contact_hero')}
                className="relative overflow-hidden bg-gradient-to-r from-primary-accent to-secondary-accent text-white font-bold py-4 px-8 rounded-xl shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3 group emergency-btn-ultra-compact"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Phone className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300 icon-320-sm" />
                <span className="relative z-10">CALL NOW: {CONTACT_INFO.phone}</span>
              </motion.a>

              <motion.a
                href="#contact-form"
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
  );
}
