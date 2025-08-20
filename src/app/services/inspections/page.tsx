"use client";

import Link from 'next/link';
import { ArrowRight, CheckCircle, Phone, Clock, Search, AlertTriangle, Home, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '@/lib/constants';
import { trackPhoneCall } from '@/lib/utils';

export default function InspectionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-dark via-primary-dark to-secondary-accent text-white"
        style={{ 
          minHeight: '100vh',
          height: 'calc(100vh - 90px)'
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
          <Search className="w-6 h-6" />
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 h-full flex items-center justify-center">
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
              <motion.div 
                className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 shadow-2xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Search className="w-10 h-10 text-primary-accent" />
              </motion.div>

              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
                  Professional
                  <br />
                  <span className="text-primary-accent drop-shadow-lg">Septic Inspections</span>
                  <br />
                  <span className="text-3xl md:text-4xl lg:text-5xl text-gray-200">Austin & Central Texas</span>
                </h1>
                
                <motion.p 
                  className="text-xl md:text-2xl text-primary-accent font-medium drop-shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  Thorough • Professional • Detailed
                </motion.p>
              </div>

              <motion.p 
                className="text-lg md:text-xl text-white max-w-4xl mx-auto leading-relaxed drop-shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                Professional septic system inspections for real estate transactions, routine maintenance, 
                and peace of mind. Get detailed reports and expert recommendations.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                <motion.a
                  href={`tel:${CONTACT_INFO.phone}`}
                  onClick={() => trackPhoneCall('inspections_hero')}
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
                  <span>Schedule Inspection</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
              Comprehensive <span className="text-primary-accent">Septic Inspections</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you&apos;re buying, selling, or maintaining your property, our thorough inspections 
              provide the detailed information you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <Home className="w-12 h-12 text-primary-accent mb-6" />
              <h3 className="text-2xl font-bold text-primary-dark mb-4">Pre-Purchase Inspections</h3>
              <p className="text-gray-600 mb-6">
                Buying a home with a septic system? Our comprehensive pre-purchase inspections help you 
                make informed decisions and avoid costly surprises.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Complete system evaluation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Tank condition assessment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Drain field inspection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Detailed written report</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <Clock className="w-12 h-12 text-primary-accent mb-6" />
              <h3 className="text-2xl font-bold text-primary-dark mb-4">Routine Maintenance Inspections</h3>
              <p className="text-gray-600 mb-6">
                Regular inspections help catch problems early and extend the life of your septic system. 
                Stay ahead of costly repairs with preventive maintenance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Annual system check-ups</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Early problem detection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Maintenance recommendations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Service history tracking</span>
                </li>
              </ul>
            </div>
          </div>

          {/* What We Inspect */}
          <div className="bg-gradient-to-br from-primary-dark to-secondary-accent text-white rounded-2xl p-12">
            <div className="text-center mb-12">
              <FileText className="w-16 h-16 text-primary-accent mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">What We Inspect</h3>
              <p className="text-xl text-gray-200">
                Our comprehensive inspections cover every component of your septic system
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white/10 rounded-xl p-6 mb-4">
                  <h4 className="font-bold text-lg mb-3">Septic Tank</h4>
                  <ul className="text-sm text-gray-200 space-y-2">
                    <li>• Tank condition & integrity</li>
                    <li>• Sludge & scum levels</li>
                    <li>• Inlet & outlet baffles</li>
                    <li>• Access ports & lids</li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white/10 rounded-xl p-6 mb-4">
                  <h4 className="font-bold text-lg mb-3">Distribution System</h4>
                  <ul className="text-sm text-gray-200 space-y-2">
                    <li>• Distribution box condition</li>
                    <li>• Pipe connections</li>
                    <li>• Flow distribution</li>
                    <li>• Pump systems (if applicable)</li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white/10 rounded-xl p-6 mb-4">
                  <h4 className="font-bold text-lg mb-3">Drain Field</h4>
                  <ul className="text-sm text-gray-200 space-y-2">
                    <li>• Surface conditions</li>
                    <li>• Soil absorption</li>
                    <li>• Pipe integrity</li>
                    <li>• Saturation levels</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-accent text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <AlertTriangle className="w-16 h-16 mx-auto mb-6 text-white" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need a Septic Inspection?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Don&apos;t wait for problems to surface. Schedule your professional septic inspection today 
            and get the detailed information you need to make informed decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              href={`tel:${CONTACT_INFO.phone}`}
              onClick={() => trackPhoneCall('inspections_cta')}
              className="bg-white text-primary-accent hover:bg-gray-100 font-bold py-4 px-8 rounded-xl text-lg inline-flex items-center justify-center space-x-3 transition-all duration-300 shadow-2xl group"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span>Call Now: {CONTACT_INFO.phone}</span>
            </motion.a>
            <Link
              href="/contact"
              className="bg-primary-dark text-white hover:bg-primary-dark/90 font-bold py-4 px-8 rounded-xl text-lg inline-flex items-center justify-center space-x-3 transition-all duration-300"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}