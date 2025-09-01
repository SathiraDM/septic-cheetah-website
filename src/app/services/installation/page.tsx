'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle, Phone, Shield, Clock, ArrowRight, Award, Settings, Wrench, Zap, TreePine, Home } from 'lucide-react';
import { CONTACT_INFO, SERVICE_CATEGORIES } from '@/lib/constants';
import { ServiceErrorBoundary } from '@/components/ServiceErrorBoundary';
import { useState } from 'react';

// Get installation category data
const installationCategory = SERVICE_CATEGORIES.find(cat => cat.id === 'installation');
const installationServices = installationCategory?.services || [];

const whyChooseInstallation = [
  {
    icon: Home,
    title: "New Construction Specialists",
    description: "Expert installation for new homes with full permit coordination and site planning.",
  },
  {
    icon: Zap,
    title: "Aerobic System Experts", 
    description: "Advanced aerobic treatment systems for challenging soils and environmental requirements.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed installers with comprehensive insurance and warranty protection.",
  },
  {
    icon: TreePine,
    title: "Environmentally Conscious",
    description: "Eco-friendly installation practices that protect your property and environment.",
  }
];

const installationBenefits = [
  {
    icon: Settings,
    title: "Custom System Design",
    description: "Every installation is custom-designed for your specific property, soil conditions, and household needs.",
  },
  {
    icon: Award,
    title: "Quality Materials",
    description: "We use only the highest quality tanks, pipes, and components for lasting performance.",
  },
  {
    icon: Clock,
    title: "Efficient Timeline",
    description: "Streamlined installation process with realistic timelines and milestone communication.",
  },
  {
    icon: CheckCircle,
    title: "Complete Permits",
    description: "Full permit assistance from application through final inspection approval.",
  }
];

const processSteps = [
  {
    number: "01",
    title: "Site Assessment & Design",
    description: "Professional site evaluation, soil testing, and custom system design for your property",
    duration: "1-3 days"
  },
  {
    number: "02", 
    title: "Permits & Approvals",
    description: "Complete permit applications and regulatory approvals - we handle all paperwork",
    duration: "1-3 weeks"
  },
  {
    number: "03",
    title: "Professional Installation", 
    description: "Expert excavation and installation by licensed technicians with quality materials",
    duration: "3-7 days"
  },
  {
    number: "04",
    title: "Testing & Startup",
    description: "Final inspections, system testing, and operational startup with owner training",
    duration: "1-2 days"
  }
];

const frequentlyAskedQuestions = [
  {
    question: "How long does septic system installation take?",
    answer: "Complete installation typically takes 2-4 weeks from start to finish, including permits, site preparation, installation, and final inspections. Weather and soil conditions may affect timeline."
  },
  {
    question: "Do you handle all permits and inspections?",
    answer: "Yes, we handle all permit applications, coordinate required inspections, and ensure full compliance with local regulations. Our permit assistance is included in every installation."
  },
  {
    question: "What's the difference between conventional and aerobic systems?",
    answer: "Conventional systems use natural bacterial processes, while aerobic systems add oxygen to enhance treatment. Aerobic systems are often required for challenging soil conditions or environmental protection areas."
  },
  {
    question: "How do I know what size system I need?",
    answer: "System size is determined by household size, soil conditions, and local regulations. We perform site evaluation and design the appropriate system for your specific needs and usage patterns."
  },
  {
    question: "What warranty comes with installation?",
    answer: "We provide a comprehensive 5-year warranty on installation workmanship and 1-year warranty on all system components. Tank warranties vary by manufacturer, typically 20+ years."
  }
];

export default function InstallationPage() {
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

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
        {/* Hero Section */}
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
              {/* Content Side - Compacted */}
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
                    <span className="text-white">Professional</span>
                    <span className="block text-primary-accent">Septic Installation</span>
                  </motion.h1>
                  
                  <motion.p 
                    className="text-base lg:text-lg text-gray-200 leading-relaxed max-w-lg mx-auto lg:mx-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    Complete septic system installation for new construction and system replacements. 
                    Licensed professionals handle permits from design to final inspection.
                  </motion.p>
                </div>

                {/* CTA Buttons - Increased Size */}
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
                    <span>Get Free Quote</span>
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
                    <Wrench className="w-5 h-5 lg:w-5 lg:h-5 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Plan Installation</span>
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Image Side - Increased Height & Compacted */}
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
                    alt="Professional septic system installation"
                    width={600}
                    height={500}
                    className="object-cover w-full h-[500px] lg:h-[450px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </motion.div>
                
                {/* Floating Warranty Badge */}
                <motion.div 
                  className="absolute -bottom-3 -left-3 lg:-bottom-2 lg:-left-2 bg-gradient-to-r from-primary-accent to-secondary-accent text-white p-4 lg:p-3 rounded-xl shadow-xl"
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="text-xl lg:text-lg font-bold">Warranty</div>
                  <div className="text-sm lg:text-xs opacity-90">Available</div>
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

        {/* Installation Services Section */}
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
                <span className="text-primary-dark">Installation</span>
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
                Comprehensive septic installation services for all your residential and commercial needs
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {installationServices.map((service, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gradient-to-br from-bg-primary to-bg-secondary border border-primary-accent/30 rounded-3xl p-10 transition-all duration-300 group cursor-pointer"
                  variants={cardVariants}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    borderColor: "rgba(191, 136, 41, 0.6)",
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                  }}
                  onHoverStart={() => {}}
                  onHoverEnd={() => {}}
                >
                  <div className="flex items-start space-x-6">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-xl flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Wrench className="w-8 h-8 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <motion.h3 
                        className="text-2xl font-bold text-primary-dark mb-4 group-hover:text-primary-accent transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        {service.title}
                      </motion.h3>
                      <motion.p 
                        className="text-text-primary mb-6 leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                      >
                        {service.description}
                      </motion.p>
                      
                      <motion.div 
                        className="space-y-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                      >
                        {service.features.map((feature, featureIndex) => (
                          <motion.div 
                            key={featureIndex} 
                            className="flex items-start space-x-3"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 + 0.6 + featureIndex * 0.1 }}
                          >
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ duration: 0.3 }}
                            >
                              <CheckCircle className="w-5 h-5 text-primary-accent flex-shrink-0 mt-1" />
                            </motion.div>
                            <span className="text-text-primary">{feature}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Our Installation Section */}
        <section className="py-24 bg-gradient-to-br from-bg-primary to-bg-secondary relative overflow-hidden">
          {/* Background Animation */}
          <motion.div
            className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-blue-200/10 to-primary-accent/5 rounded-full blur-3xl"
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
                <span className="text-primary-dark">Why Choose Our</span>
                <span className="block text-primary-accent">Installation Services</span>
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
                Professional installation backed by experience, quality materials, and comprehensive warranties
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {whyChooseInstallation.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white rounded-2xl p-8 shadow-lg border border-primary-accent/30 group cursor-pointer"
                  variants={cardVariants}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.05,
                    borderColor: "rgba(191, 136, 41, 0.6)",
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                  }}
                  onHoverStart={() => setHoveredBenefit(index)}
                  onHoverEnd={() => setHoveredBenefit(null)}
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ rotate: 12, scale: 1.1 }}
                  >
                    <benefit.icon className="w-12 h-12 text-primary-accent mb-6 group-hover:text-secondary-accent transition-colors duration-300" />
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-bold text-primary-dark mb-4 group-hover:text-primary-accent transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  >
                    {benefit.title}
                  </motion.h3>
                  <motion.p 
                    className="text-text-primary leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  >
                    {benefit.description}
                  </motion.p>
                  
                  {/* Hover Effect Lines */}
                  <motion.div
                    className="h-1 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full mt-4 origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: hoveredBenefit === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Installation Process Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Floating Background Elements */}
          <motion.div
            className="absolute top-20 right-20 w-32 h-32 bg-primary-accent/10 rounded-full blur-2xl"
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
                <span className="text-primary-dark">Our Installation</span>
                <span className="block text-primary-accent">Process</span>
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
                Systematic installation process ensuring quality results and customer satisfaction
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index} 
                  className="relative group"
                  variants={cardVariants}
                >
                  <motion.div
                    className="bg-gradient-to-br from-bg-primary to-bg-secondary rounded-2xl p-8 shadow-lg border border-primary-accent/30 h-full relative overflow-hidden"
                    whileHover={{ 
                      y: -8,
                      scale: 1.02,
                      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                    }}
                  >
                    {/* Gradient Overlay on Hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary-accent/5 via-transparent to-secondary-accent/5 rounded-2xl opacity-0 transition-opacity duration-300"
                      whileHover={{ opacity: 1 }}
                    />
                    
                    <div className="relative z-10">
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-xl flex items-center justify-center text-white font-bold text-xl mb-6 group-hover:scale-110 transition-transform duration-300"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        whileHover={{ rotate: 12, scale: 1.2 }}
                      >
                        {step.number}
                      </motion.div>
                      <motion.h3 
                        className="text-xl font-bold text-primary-dark mb-4 group-hover:text-primary-accent transition-colors duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                      >
                        {step.title}
                      </motion.h3>
                      <motion.p 
                        className="text-text-primary mb-4 leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                      >
                        {step.description}
                      </motion.p>
                      <motion.div 
                        className="text-primary-accent text-sm font-semibold"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.2 + 0.6 }}
                      >
                        {step.duration}
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  {/* Animated Connection Arrow */}
                  {index < processSteps.length - 1 && (
                    <motion.div 
                      className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
                    >
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <ArrowRight className="w-8 h-8 text-primary-accent/50 group-hover:text-primary-accent transition-colors duration-300" />
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Installation Benefits Section */}
        <section className="py-24 bg-gradient-to-br from-bg-primary to-bg-secondary relative overflow-hidden">
          {/* Background Animation */}
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-secondary-accent/10 to-primary-accent/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 270, 360],
            }}
            transition={{
              duration: 30,
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
                <span className="text-primary-dark">Installation</span>
                <span className="block text-primary-accent">Benefits</span>
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
                Professional installation advantages that provide long-term value and peace of mind
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {installationBenefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white rounded-2xl p-10 shadow-lg border border-primary-accent/30 group cursor-pointer relative overflow-hidden"
                  variants={cardVariants}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                  }}
                  onHoverStart={() => {}}
                  onHoverEnd={() => {}}
                >
                  {/* Subtle Gradient Overlay on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary-accent/5 via-transparent to-secondary-accent/5 rounded-2xl opacity-0 transition-opacity duration-300"
                    whileHover={{ opacity: 1 }}
                  />
                  
                  <div className="flex items-start space-x-6 relative z-10">
                    <motion.div 
                      className="w-14 h-14 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                      initial={{ scale: 0, rotate: -90 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      whileHover={{ rotate: 12, scale: 1.2 }}
                    >
                      <benefit.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <motion.h3 
                        className="text-2xl font-bold text-primary-dark mb-4 group-hover:text-primary-accent transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                      >
                        {benefit.title}
                      </motion.h3>
                      <motion.p 
                        className="text-text-primary leading-relaxed text-lg"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                      >
                        {benefit.description}
                      </motion.p>
                      
                      {/* Animated Progress Line */}
                      <motion.div
                        className="h-1 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full mt-6 origin-left"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.2 + 0.6 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Background Animation */}
          <motion.div
            className="absolute bottom-20 right-20 w-40 h-40 bg-secondary-accent/10 rounded-full blur-2xl"
            animate={{
              y: [-8, 8, -8],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
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
                <span className="text-primary-dark">Frequently Asked</span>
                <span className="block text-primary-accent">Questions</span>
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
                Get answers to common questions about septic system installation
              </motion.p>
            </motion.div>

            <motion.div 
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {frequentlyAskedQuestions.map((faq, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gradient-to-br from-bg-primary to-bg-secondary border border-primary-accent/30 rounded-2xl p-8 shadow-sm group cursor-pointer relative overflow-hidden"
                  variants={cardVariants}
                  whileHover={{ 
                    y: -4,
                    scale: 1.01,
                    borderColor: "rgba(191, 136, 41, 0.6)",
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  {/* Hover Gradient Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary-accent/5 via-transparent to-secondary-accent/5 rounded-2xl opacity-0 transition-opacity duration-300"
                    whileHover={{ opacity: 1 }}
                  />
                  
                  <div className="relative z-10">
                    <motion.h3 
                      className="text-xl font-bold text-primary-dark mb-4 group-hover:text-primary-accent transition-colors duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      {faq.question}
                    </motion.h3>
                    <motion.p 
                      className="text-text-primary leading-relaxed text-lg"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    >
                      {faq.answer}
                    </motion.p>
                    
                    {/* Animated Accent Line */}
                    <motion.div
                      className="h-0.5 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full mt-6 origin-left"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <motion.section 
          className="py-24 bg-gradient-to-br from-primary-dark via-primary-dark/95 to-secondary-accent text-white relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(191,136,41,0.2)_0%,transparent_50%)] pointer-events-none"></div>
          
          {/* Animated Background Elements */}
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 bg-primary-accent/20 rounded-full blur-3xl"
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-40 h-40 bg-secondary-accent/15 rounded-full blur-3xl"
            animate={{
              y: [-15, 15, -15],
              opacity: [0.2, 0.5, 0.2],
              scale: [1.2, 1, 1.2]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          <div className="septic-max-width text-center z-10 px-4 lg:px-8 relative">
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Ready for Professional <span className="text-primary-accent">Installation?</span>
            </motion.h2>
            <motion.p 
              className="text-xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Get a custom installation quote designed specifically for your property. Our experts handle everything from permits to final inspection.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.a
                href={`tel:${CONTACT_INFO.phone}`}
                className="bg-white text-primary-dark font-bold py-8 px-12 rounded-xl text-2xl inline-flex items-center justify-center space-x-4 transition-all duration-300 shadow-xl group relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Hover Gradient Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-accent/10 to-secondary-accent/10 opacity-0 transition-opacity duration-300"
                  whileHover={{ opacity: 1 }}
                />
                
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Phone className="w-8 h-8 relative z-10" />
                </motion.div>
                <div className="text-left relative z-10">
                  <motion.div 
                    className="text-sm"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1 }}
                  >
                    GET FREE QUOTE
                  </motion.div>
                  <motion.div 
                    className="text-2xl font-black"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {CONTACT_INFO.phone}
                  </motion.div>
                </div>
              </motion.a>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </ServiceErrorBoundary>
  );
}
