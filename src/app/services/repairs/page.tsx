'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, Phone, Shield, Clock, ArrowRight, Award, Wrench, Calendar, AlertTriangle, Truck, Clipboard, Settings, Home, Zap, TreePine } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import { ServiceErrorBoundary } from '@/components/ServiceErrorBoundary';
import { trackPhoneCall } from '@/lib/utils';

const repairServices = [
  {
    id: "emergency-repairs",
    icon: AlertTriangle,
    title: "Emergency Repairs",
    description: "Immediate response for urgent septic system failures and emergencies",
    features: [
      "24/7 emergency availability",
      "Rapid response dispatch",
      "System backup prevention", 
      "Immediate damage control"
    ],
    image: "/images/hero-08.jpg"
  },
  {
    id: "system-repairs",
    icon: Wrench,
    title: "System Component Repairs",
    description: "Professional repair of pumps, pipes, tanks, and drain field components",
    features: [
      "Pump repair and replacement",
      "Pipe and connection fixes",
      "Tank and baffle repairs",
      "Drain field restoration"
    ],
    image: "/images/hero-09.jpg"
  },
  {
    id: "diagnostic-repair",
    icon: Truck,
    title: "Diagnostic & Preventive Repair",
    description: "Comprehensive system diagnosis and preventive repairs to avoid failures",
    features: [
      "Advanced diagnostic equipment",
      "Early problem detection",
      "Preventive maintenance repairs",
      "System optimization"
    ],
    image: "/images/hero-10.jpg"
  }
];

const whyChooseRepairs = [
  {
    icon: AlertTriangle,
    title: "24/7 Emergency Response",
    description: "Round-the-clock emergency repair services for urgent system failures and backups.",
  },
  {
    icon: Award,
    title: "Expert Technicians", 
    description: "Certified repair specialists with advanced diagnostic tools and proven expertise.",
  },
  {
    icon: Shield,
    title: "Warranty Protection",
    description: "All repairs backed by comprehensive warranties and quality guarantees.",
  },
  {
    icon: Clock,
    title: "Fast Response Times",
    description: "Rapid dispatch and efficient repairs to minimize property damage and disruption.",
  }
];

const repairBenefits = [
  {
    icon: Settings,
    title: "Advanced Diagnostics",
    description: "State-of-the-art diagnostic equipment to quickly identify and resolve system issues.",
  },
  {
    icon: Wrench,
    title: "Quality Repairs",
    description: "Professional repairs using premium materials and proven techniques for lasting results.",
  },
  {
    icon: Clock,
    title: "Rapid Response",
    description: "Fast emergency response with efficient repairs to restore your system quickly.",
  },
  {
    icon: CheckCircle,
    title: "Complete Solutions",
    description: "Full-service repairs from diagnosis to completion with follow-up support.",
  }
];

const repairProcess = [
  {
    number: "01",
    title: "Emergency Assessment",
    description: "Immediate response and comprehensive system evaluation to identify repair needs",
    duration: "Same day"
  },
  {
    number: "02", 
    title: "Diagnosis & Planning",
    description: "Advanced diagnostic testing and detailed repair plan with cost estimates",
    duration: "1-2 hours"
  },
  {
    number: "03",
    title: "Professional Repair", 
    description: "Expert repair work using quality materials and proven techniques",
    duration: "2-8 hours"
  },
  {
    number: "04",
    title: "Testing & Warranty",
    description: "System testing, performance verification, and warranty documentation",
    duration: "1 hour"
  }
];

const frequentlyAskedQuestions = [
  {
    question: "How quickly can you respond to septic emergencies?",
    answer: "We provide 24/7 emergency response with most calls receiving same-day service. Our goal is to dispatch a technician within 2-4 hours for urgent situations to prevent property damage."
  },
  {
    question: "What types of septic repairs do you handle?",
    answer: "We handle all types of septic repairs including pump failures, pipe blockages, tank issues, drain field problems, electrical components, and complete system diagnostics and restoration."
  },
  {
    question: "Do you provide warranties on repair work?",
    answer: "Yes, all our repair work comes with comprehensive warranties. Labor warranties typically range from 1-2 years, while parts warranties vary by manufacturer, usually 1-5 years depending on the component."
  },
  {
    question: "How do you determine what repairs are needed?",
    answer: "We use advanced diagnostic equipment including cameras, flow meters, and electronic locating tools to accurately identify problems. This ensures we only perform necessary repairs and provide accurate cost estimates."
  },
  {
    question: "Can you repair all brands of septic systems?",
    answer: "Yes, our technicians are trained to work on all major septic system brands and types, including conventional, aerobic, and advanced treatment systems. We maintain relationships with all major parts suppliers."
  }
];

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

export default function RepairsPage() {
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
                    <span className="text-white">Expert Septic</span>
                    <span className="block text-primary-accent">System Repairs</span>
                  </motion.h1>
                  
                  <motion.p 
                    className="text-base lg:text-lg text-gray-200 leading-relaxed max-w-lg mx-auto lg:mx-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    Fast, reliable septic system repairs with 24/7 emergency service. Expert diagnosis 
                    and professional repairs to get your system back to optimal performance.
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
                    onClick={() => trackPhoneCall('repairs_hero')}
                    className="group relative overflow-hidden bg-gradient-to-r from-primary-accent to-secondary-accent text-white font-bold py-4 lg:py-4 px-7 lg:px-6 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-3 text-base lg:text-base"
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2,
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone className="w-5 h-5 lg:w-5 lg:h-5 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Emergency Service</span>
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
                    <Calendar className="w-5 h-5 lg:w-5 lg:h-5 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Schedule Repair</span>
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
                    src="/images/hero-08.jpg"
                    alt="Professional septic system repair services"
                    width={600}
                    height={500}
                    className="object-cover w-full h-[500px] lg:h-[450px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </motion.div>
                
                {/* Floating Service Badge */}
                <motion.div 
                  className="absolute -bottom-3 -left-3 lg:-bottom-2 lg:-left-2 bg-gradient-to-r from-primary-accent to-secondary-accent text-white p-4 lg:p-3 rounded-xl shadow-xl"
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="text-xl lg:text-lg font-bold">24/7</div>
                  <div className="text-sm lg:text-xs opacity-90">Emergency</div>
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

        {/* Repair Services Section */}
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
                <span className="text-primary-dark">Complete Repair</span>
                <span className="block text-primary-accent">Solutions</span>
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
                From emergency repairs to preventive maintenance, we provide comprehensive solutions for all your septic system needs
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {repairServices.map((service, index) => (
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
                  {/* Enhanced Card Container */}
                  <div className="relative bg-white rounded-3xl overflow-hidden h-full shadow-lg border border-gray-200/50 group-hover:shadow-2xl group-hover:border-primary-accent/30 transition-all duration-300">
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
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    
                    {/* Image Section */}
                    <div className="relative h-64 overflow-hidden rounded-t-3xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      
                      {/* Service Icon */}
                      <motion.div 
                        className="absolute top-6 left-6 p-4 bg-white/90 backdrop-blur-sm rounded-2xl"
                        initial={{ scale: 0, rotate: -90 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        whileHover={{ rotate: 12, scale: 1.1 }}
                      >
                        <service.icon className="w-8 h-8 text-primary-accent" />
                      </motion.div>
                    </div>
                    
                    {/* Card Content */}
                    <div className="relative p-8">
                      {/* Header */}
                      <motion.div 
                        className="mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                      >
                        <h3 className="text-2xl font-bold text-primary-dark group-hover:text-primary-accent transition-colors duration-300 mb-3">
                          {service.title}
                        </h3>
                        <motion.div
                          className="h-1 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full mb-4 origin-left"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                        />
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {service.description}
                        </p>
                      </motion.div>

                      {/* Features List */}
                      <motion.div 
                        className="space-y-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                      >
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className="flex items-center space-x-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.2 + featureIndex * 0.1 + 0.5 }}
                          >
                            <CheckCircle className="w-5 h-5 text-primary-accent flex-shrink-0" />
                            <span className="text-gray-700 font-medium">{feature}</span>
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

        {/* Why Choose Our Repairs Section */}
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
                <span className="block text-primary-accent">Repair Services</span>
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
                Expert repair services with fast response times and quality guarantees to protect your property and investment
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {whyChooseRepairs.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="group relative"
                  variants={cardVariants}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  {/* Enhanced Card Container */}
                  <div className="relative bg-white rounded-3xl p-8 h-full shadow-lg border border-gray-200/50 overflow-hidden group-hover:shadow-2xl group-hover:border-primary-accent/30 transition-all duration-300">
                    {/* Subtle Gradient Overlay on Hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary-accent/5 via-transparent to-secondary-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    
                    {/* Floating Background Element */}
                    <motion.div
                      className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary-accent/10 to-secondary-accent/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    
                    {/* Card Content */}
                    <div className="relative h-full flex flex-col items-center text-center">
                      {/* Icon */}
                      <motion.div 
                        className="relative p-4 bg-gradient-to-br from-primary-accent/10 to-secondary-accent/5 rounded-2xl mb-6 group-hover:from-primary-accent/20 group-hover:to-secondary-accent/10 transition-all duration-300"
                        initial={{ scale: 0, rotate: -90 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        whileHover={{ rotate: 12, scale: 1.1 }}
                      >
                        <benefit.icon className="w-8 h-8 text-primary-accent group-hover:scale-110 transition-transform duration-300" />
                      </motion.div>
                      
                      {/* Content */}
                      <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                      >
                        <h3 className="text-xl font-bold text-primary-dark group-hover:text-primary-accent transition-colors duration-300 mb-4">
                          {benefit.title}
                        </h3>
                        <motion.div
                          className="h-1 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full mb-4 mx-auto w-16 origin-center"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                        />
                        <p className="text-gray-600 leading-relaxed">
                          {benefit.description}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Repair Process Section */}
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
                <span className="text-primary-dark">Our Repair</span>
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
                Systematic repair approach ensuring quality results and customer satisfaction
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {repairProcess.map((step, index) => (
                <motion.div 
                  key={index} 
                  className="group relative"
                  variants={cardVariants}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  {/* Enhanced Card Container */}
                  <div className="relative bg-white rounded-3xl p-8 h-full shadow-lg border border-gray-200/50 overflow-hidden group-hover:shadow-2xl group-hover:border-primary-accent/30 transition-all duration-300">
                    {/* Subtle Gradient Overlay on Hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary-accent/5 via-transparent to-secondary-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    
                    {/* Floating Background Element */}
                    <motion.div
                      className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-primary-accent/10 to-secondary-accent/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    
                    {/* Step Number */}
                    <motion.div 
                      className="relative mb-6"
                      initial={{ scale: 0, rotate: -90 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-br from-primary-accent to-secondary-accent rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 12 }}
                      >
                        {step.number}
                      </motion.div>
                    </motion.div>
                    
                    {/* Card Content */}
                    <motion.div 
                      className="relative"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                    >
                      <h3 className="text-xl font-bold text-primary-dark group-hover:text-primary-accent transition-colors duration-300 mb-3">
                        {step.title}
                      </h3>
                      <motion.div
                        className="h-1 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full mb-4 origin-left"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                      />
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {step.description}
                      </p>
                      
                      {/* Duration Badge */}
                      <motion.div
                        className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-primary-accent/10 to-secondary-accent/5 rounded-full text-sm font-medium text-primary-accent"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.2 + 0.6 }}
                      >
                        <Clock className="w-4 h-4 mr-2" />
                        {step.duration}
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  {/* Connecting Arrow */}
                  {index < repairProcess.length - 1 && (
                    <motion.div 
                      className="hidden lg:block absolute top-1/2 -right-4 z-10"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
                    >
                      <motion.div
                        className="w-8 h-8 bg-white rounded-full shadow-lg border-4 border-primary-accent/20 flex items-center justify-center"
                        whileHover={{ scale: 1.2, rotate: 90 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight className="w-4 h-4 text-primary-accent" />
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        {/* Repair Benefits Section */}
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
                <span className="text-primary-dark">Professional Repair</span>
                <span className="block text-primary-accent">Advantages</span>
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
                Professional repair advantages that provide long-term value and peace of mind
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {repairBenefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="group relative"
                  variants={cardVariants}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  {/* Enhanced Card Container */}
                  <div className="relative bg-white rounded-3xl p-8 h-full shadow-lg border border-gray-200/50 overflow-hidden group-hover:shadow-2xl group-hover:border-primary-accent/30 transition-all duration-300">
                    {/* Subtle Gradient Overlay on Hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary-accent/5 via-transparent to-secondary-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    
                    {/* Floating Background Element */}
                    <motion.div
                      className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary-accent/10 to-secondary-accent/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    
                    {/* Card Content */}
                    <div className="relative h-full flex flex-col">
                      {/* Header with Icon and Title */}
                      <motion.div 
                        className="flex items-start mb-6"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                      >
                        <motion.div 
                          className="relative p-4 bg-gradient-to-br from-primary-accent/10 to-secondary-accent/5 rounded-2xl mr-4 group-hover:from-primary-accent/20 group-hover:to-secondary-accent/10 transition-all duration-300 flex-shrink-0"
                          initial={{ scale: 0, rotate: -90 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.2 }}
                          whileHover={{ rotate: 12, scale: 1.1 }}
                        >
                          <benefit.icon className="w-8 h-8 text-primary-accent group-hover:scale-110 transition-transform duration-300" />
                        </motion.div>
                        
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-primary-dark group-hover:text-primary-accent transition-colors duration-300 leading-tight">
                            {benefit.title}
                          </h3>
                          <motion.div
                            className="h-1 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full mt-2 origin-left"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                          />
                        </div>
                      </motion.div>

                      {/* Description */}
                      <motion.p 
                        className="text-gray-600 leading-relaxed flex-grow"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                      >
                        {benefit.description}
                      </motion.p>
                      
                      {/* Bottom Accent */}
                      <motion.div
                        className="mt-6 pt-4 border-t border-gray-100"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                      >
                        <motion.div
                          className="flex items-center text-primary-accent text-sm font-medium"
                        >
                          {index === 0 && (
                            <>
                              <div className="w-2 h-2 bg-primary-accent rounded-full mr-2"></div>
                              <span>Expert Analysis</span>
                            </>
                          )}
                          {index === 1 && (
                            <>
                              <div className="w-2 h-2 bg-primary-accent rounded-full mr-2"></div>
                              <span>Premium Materials</span>
                            </>
                          )}
                          {index === 2 && (
                            <>
                              <div className="w-2 h-2 bg-primary-accent rounded-full mr-2"></div>
                              <span>Same-Day Service</span>
                            </>
                          )}
                          {index === 3 && (
                            <>
                              <div className="w-2 h-2 bg-primary-accent rounded-full mr-2"></div>
                              <span>Full Service</span>
                            </>
                          )}
                        </motion.div>
                      </motion.div>
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
                Get answers to common questions about septic system repairs
              </motion.p>
            </motion.div>

            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {frequentlyAskedQuestions.map((faq, index) => (
                <motion.div 
                  key={index} 
                  className="group relative"
                  variants={cardVariants}
                  whileHover={{ 
                    y: -4,
                    scale: 1.01,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  {/* Enhanced FAQ Card */}
                  <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-gray-200/50 overflow-hidden group-hover:shadow-2xl group-hover:border-primary-accent/30 transition-all duration-300">
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
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    
                    {/* Card Content */}
                    <div className="relative">
                      {/* Question with Icon */}
                      <motion.div 
                        className="flex items-start mb-6"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        {/* Question Icon */}
                        <motion.div 
                          className="relative p-3 bg-gradient-to-br from-primary-accent/10 to-secondary-accent/5 rounded-2xl mr-4 group-hover:from-primary-accent/20 group-hover:to-secondary-accent/10 transition-all duration-300 flex-shrink-0"
                          whileHover={{ rotate: 12, scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <svg 
                            className="w-6 h-6 text-primary-accent group-hover:scale-110 transition-transform duration-300" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </motion.div>
                        
                        {/* Question Text */}
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-primary-dark group-hover:text-primary-accent transition-colors duration-300 leading-tight">
                            {faq.question}
                          </h3>
                          <motion.div
                            className="h-1 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full mt-3 origin-left"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                          />
                        </div>
                      </motion.div>

                      {/* Answer */}
                      <motion.div 
                        className="ml-16"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                      >
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {faq.answer}
                        </p>
                        
                        {/* Bottom accent */}
                        <motion.div
                          className="mt-6 pt-4 border-t border-gray-100"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                        >
                          <motion.a
                            href="/contact"
                            className="flex items-center text-primary-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer hover:text-secondary-accent"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <span>Need more details?</span>
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </motion.a>
                        </motion.div>
                      </motion.div>
                    </div>
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
              Need Emergency <span className="text-primary-accent">Repairs?</span>
            </motion.h2>
            <motion.p 
              className="text-xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Don't let septic problems damage your property. Get fast, professional repair service with our 24/7 emergency response team.
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
                    EMERGENCY SERVICE
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
