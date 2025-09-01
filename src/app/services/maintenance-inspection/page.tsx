'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Phone, Shield, Search, Truck } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import { ServiceErrorBoundary } from '@/components/ServiceErrorBoundary';
const mainServices = [
  {
    id: 'pumping-cleaning',
    title: 'Septic Tank Pumping & Cleaning',
    description: 'Professional septic tank pumping and cleaning services for optimal system performance.',
    href: '/services/maintenance-inspection#pumping-cleaning',
    icon: Truck,
    features: [
      'Complete waste removal',
      'Tank inspection included',
      'Proper waste disposal',
      'System performance check',
      'Maintenance recommendations'
    ]
  },
  {
    id: 'inspections',
    title: 'Septic System Inspections',
    description: 'Thorough septic system inspections for real estate transactions and maintenance.',
    href: '/services/maintenance-inspection#inspections',
    icon: Search,
    features: [
      'Pre-purchase inspections',
      'Routine maintenance inspections',
      'Detailed reporting',
      'Problem identification',
      'Compliance verification'
    ]
  }
];

const frequentlyAskedQuestions = [
  {
    question: 'How often should I have my septic tank pumped?',
    answer: 'Most residential septic tanks should be pumped every 3-5 years. However, the frequency depends on factors like household size, tank size, and usage patterns. Our experts can provide a customized maintenance schedule for your specific system.'
  },
  {
    question: 'What happens during a septic inspection?',
    answer: 'Our comprehensive inspection includes locating all system components, checking tank condition, testing pumps and alarms, evaluating the drain field, and providing a detailed written report with findings and recommendations.'
  },
  {
    question: 'Do I need an inspection before buying a home?',
    answer: 'Yes, a pre-purchase septic inspection is highly recommended. It can identify potential problems that could cost thousands in repairs, giving you negotiating power and peace of mind before closing on the property.'
  },
  {
    question: 'What are signs my septic tank needs pumping?',
    answer: 'Warning signs include slow drains, gurgling sounds, sewage odors outside, standing water around the system, or lush grass growth over the drain field. If you notice any of these signs, contact us immediately.'
  }
];

export default function MaintenanceInspectionPage() {
  // Animation variants
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
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <ServiceErrorBoundary>
      <main className="min-h-screen bg-white">
        {/* Hero Section - Matching Installation Page Design */}
        <motion.section 
          className="relative bg-gradient-to-br from-primary-dark via-primary-dark/95 to-secondary-accent flex items-center justify-center overflow-hidden min-h-[80vh] lg:min-h-[75vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/60 via-primary-dark/40 to-secondary-accent/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-black/10"></div>
          
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-8">
            <motion.div 
              className="absolute top-20 left-20 w-48 h-48 lg:w-32 lg:h-32 bg-primary-accent rounded-full blur-3xl"
              animate={{
                y: [-10, 10, -10],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute bottom-20 right-20 w-64 h-64 lg:w-40 lg:h-40 bg-secondary-accent rounded-full blur-3xl"
              animate={{
                y: [-15, 15, -15],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </div>
          
          <div className="septic-max-width z-10 py-12 lg:py-8 px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6 items-center max-w-6xl mx-auto">
              {/* Content Side */}
              <motion.div 
                className="space-y-5 lg:space-y-4 text-center lg:text-left flex flex-col justify-center"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="space-y-5 lg:space-y-4">
                  <motion.h1 
                    className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <span className="text-white">Maintenance</span>
                    <span className="block text-primary-accent">& Inspection</span>
                  </motion.h1>
                  
                  <motion.p 
                    className="text-base lg:text-lg text-gray-200 leading-relaxed max-w-lg mx-auto lg:mx-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    Preventive maintenance and professional inspections to keep your septic system 
                    healthy, compliant, and operating at peak performance.
                  </motion.p>
                </div>

                {/* CTA Buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-3 lg:gap-3 justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <motion.a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="group relative overflow-hidden bg-gradient-to-r from-primary-accent to-secondary-accent text-white font-bold py-4 lg:py-4 px-7 lg:px-6 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-3 text-base lg:text-base"
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2,
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone className="w-5 h-5 lg:w-5 lg:h-5 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Schedule Service</span>
                    <ArrowRight className="w-5 h-5 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                  <motion.a
                    href="/contact"
                    className="bg-white/15 text-white font-bold py-4 lg:py-4 px-7 lg:px-6 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-3 group text-base lg:text-base"
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2,
                      backgroundColor: "rgba(255, 255, 255, 0.25)",
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Search className="w-5 h-5 lg:w-5 lg:h-5 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Inspection Quote</span>
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Image Side */}
              <motion.div 
                className="relative flex justify-center lg:justify-end"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.div 
                  className="relative rounded-2xl overflow-hidden shadow-2xl max-w-md lg:max-w-sm w-full mx-auto"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/hero-10.jpg"
                    alt="Professional septic maintenance and inspection"
                    width={600}
                    height={500}
                    className="object-cover w-full h-[500px] lg:h-[450px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </motion.div>
                
                {/* Floating Maintenance Badge */}
                <motion.div 
                  className="absolute -bottom-3 -left-3 lg:-bottom-2 lg:-left-2 bg-gradient-to-r from-primary-accent to-secondary-accent text-white p-4 lg:p-3 rounded-xl shadow-xl"
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="text-xl lg:text-lg font-bold">Preventive</div>
                  <div className="text-sm lg:text-xs opacity-90">Care</div>
                </motion.div>

                {/* Licensed Badge */}
                <motion.div 
                  className="absolute -top-3 -right-3 lg:-top-2 lg:-right-2 bg-white p-3 lg:p-2.5 rounded-xl shadow-lg"
                  initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <div className="flex items-center space-x-2 lg:space-x-1.5">
                    <Shield className="w-4 h-4 lg:w-3 lg:h-3 text-primary-accent" />
                    <div>
                      <div className="font-bold text-sm lg:text-xs text-primary-accent">Licensed</div>
                      <div className="text-xs lg:text-xs text-gray-600">& Insured</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <motion.div
              className="cursor-pointer group"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              onClick={() => {
                window.scrollTo({
                  top: window.innerHeight * 0.9,
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
        </motion.section>

        {/* Main Services Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Animated Background Elements */}
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-accent/5 to-secondary-accent/5 rounded-full blur-3xl"
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
          
          <div className="septic-max-width px-4 lg:px-8 relative z-10">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2 
                className="text-4xl lg:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-primary-dark">Maintenance</span>
                <span className="block text-primary-accent">Services</span>
              </motion.h2>
              {/* Modern decorative line */}
              <motion.div 
                className="flex items-center justify-center mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <motion.div 
                  className="h-px bg-gradient-to-r from-transparent via-primary-accent to-transparent w-32"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
                <motion.div 
                  className="w-2 h-2 bg-primary-accent rounded-full mx-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                />
                <motion.div 
                  className="h-px bg-gradient-to-r from-transparent via-primary-accent to-transparent w-32"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
              </motion.div>
              <motion.p 
                className="text-xl text-text-primary max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Professional pumping, cleaning, and inspection services to maintain peak system performance
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {mainServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="group relative"
                  variants={cardVariants}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  {/* Redesigned Card with Elegant Styling */}
                  <div className="relative bg-white rounded-3xl p-8 h-full shadow-lg border border-gray-200/50 overflow-hidden group-hover:shadow-2xl group-hover:border-primary-accent/30 transition-all duration-300">
                    {/* Subtle Gradient Overlay on Hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary-accent/5 via-transparent to-secondary-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    
                    {/* Floating Background Element */}
                    <motion.div
                      className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-primary-accent/10 to-secondary-accent/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    
                    <div className="relative z-10">
                      {/* Service Icon */}
                      <motion.div 
                        className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-accent/10 to-secondary-accent/5 rounded-2xl mb-6 group-hover:from-primary-accent/20 group-hover:to-secondary-accent/10 transition-all duration-300"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <service.icon className="w-8 h-8 text-primary-accent group-hover:scale-110 transition-transform duration-300" />
                      </motion.div>

                      {/* Service Content */}
                      <motion.h3 
                        className="text-2xl font-bold text-primary-dark mb-4 group-hover:text-primary-accent transition-colors duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        {service.title}
                      </motion.h3>
                      
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
                              transition={{ 
                                duration: 0.4, 
                                delay: index * 0.1 + featureIndex * 0.1 + 0.6 
                              }}
                            >
                              <motion.div
                                whileHover={{ scale: 1.2, rotate: 180 }}
                                transition={{ duration: 0.3 }}
                              >
                                <CheckCircle className="w-5 h-5 text-primary-accent mr-3 flex-shrink-0" />
                              </motion.div>
                              <span className="text-base">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>

                      {/* Action Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.8 }}
                      >
                        <motion.a
                          href={service.href}
                          className="inline-flex items-center space-x-2 text-primary-accent font-semibold hover:text-secondary-accent transition-colors duration-300 group/button"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span>Learn More</span>
                          <motion.div
                            whileHover={{ x: 3 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ArrowRight className="w-5 h-5" />
                          </motion.div>
                        </motion.a>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gray-50">
          <div className="septic-max-width px-4 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2 
                className="text-4xl lg:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-primary-dark">Frequently Asked</span>
                <span className="block text-primary-accent">Questions</span>
              </motion.h2>
              <motion.p 
                className="text-xl text-text-primary max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Common questions about septic maintenance, pumping, and inspection services
              </motion.p>
            </motion.div>

            <div className="space-y-8 max-w-4xl mx-auto">
              {frequentlyAskedQuestions.map((faq, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary-accent/30"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-bold text-primary-dark mb-4">{faq.question}</h3>
                  <p className="text-text-primary leading-relaxed text-lg">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-gradient-to-br from-primary-dark via-primary-dark to-secondary-accent text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(191,136,41,0.2)_0%,transparent_50%)] pointer-events-none"></div>
          
          <div className="septic-max-width text-center z-10 px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Ready to Maintain Your System?
              </h2>
              <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
                Keep your septic system running smoothly with professional maintenance and inspections. 
                Prevention today saves thousands tomorrow.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="bg-gradient-to-r from-primary-accent to-secondary-accent text-white font-bold py-6 px-10 rounded-xl text-xl inline-flex items-center justify-center space-x-4 transition-all duration-300 hover:scale-105 shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-7 h-7" />
                  <span>Schedule Service</span>
                </motion.a>
                <motion.a
                  href="/contact"
                  className="bg-white/15 text-white font-bold py-6 px-10 rounded-xl text-xl inline-flex items-center justify-center space-x-4 transition-all duration-300 hover:scale-105 shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Search className="w-7 h-7" />
                  <span>Inspection Quote</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </ServiceErrorBoundary>
  );
}
