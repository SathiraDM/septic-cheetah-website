"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, Droplets, Wrench } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import { trackPhoneCall } from '@/lib/utils';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [heroHeight, setHeroHeight] = useState('100vh');
  const septicWords = ['Pumping', 'Cleaning', 'Installation', 'Maintenance', 'Repairs'];
  
  const backgroundImages = [
    {
      src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=80",
      alt: "Professional septic tank services"
    },
    {
      src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80",
      alt: "Heavy equipment for septic installation"
    },
    {
      src: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920",
      alt: "Professional septic service trucks"
    },
    {
      src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1920&q=80",
      alt: "Septic system maintenance"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % septicWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [septicWords.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Calculate hero height based on screen height and header
  useEffect(() => {
    const calculateHeroHeight = () => {
      const screenHeight = window.innerHeight;
      
      if (screenHeight < 700) {
        // Fixed height for very small screens - ensures scrollability
        setHeroHeight('600px');
      } else {
        // Use viewport height minus the header heights for proper alignment
        // Status bar: ~28px (py-1 + border), Main header: ~72px (py-3 + logo height)
        // Total header height: approximately 100px
        const headerOffset = 90;
        const availableHeight = Math.max(600, screenHeight - headerOffset);
        setHeroHeight(`${availableHeight}px`);
      }
    };
    
    calculateHeroHeight();
    
    // Debounce resize events for better performance
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
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section 
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height: heroHeight }}
    >
      {/* Fallback Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark to-secondary-accent"></div>
      
      {/* Auto-transitioning Background Images - One at a Time */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: currentImageIndex === index ? 1 : 0,
              scale: currentImageIndex === index ? [1.1, 1.05, 1.1] : 1.1,
              x: currentImageIndex === index ? [-10, 10, -10] : 0
            }}
            transition={{
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { 
                duration: 15, 
                repeat: Infinity, 
                ease: "easeInOut",
                times: [0, 0.5, 1]
              },
              x: { 
                duration: 20, 
                repeat: Infinity, 
                ease: "easeInOut",
                times: [0, 0.5, 1]
              }
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
              onError={(e) => {
                console.log(`Image ${index} failed to load`);
                e.currentTarget.style.opacity = '0';
              }}
            />
          </motion.div>
        ))}

        {/* Enhanced Filter System for Superior Text Visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/55 via-primary-dark/35 to-secondary-accent/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-black/5 to-black/25"></div>
        
        {/* Central Focus Area for Content */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/15 to-black/30"></div>
        
        {/* Enhanced Base Overlay */}
        <div className="absolute inset-0 bg-black/18"></div>
      </div>

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
        <Droplets className="w-6 h-6" />
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
        <Wrench className="w-5 h-5" />
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
          {/* Centered Main Content */}
          <motion.div className="space-y-6" variants={itemVariants}>
            {/* Main Heading with Animated Text */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
                Professional
                <br />
                <span className="relative inline-block">
                  <span className="text-primary-accent drop-shadow-lg">Septic</span>
                  <motion.span 
                    key={currentWordIndex}
                    className="block text-primary-accent mt-1 drop-shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {septicWords[currentWordIndex]}
                  </motion.span>
                  {/* Animated Underline */}
                  <motion.div 
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </span>
              </h1>
              <motion.p 
                className="text-xl md:text-2xl text-primary-accent font-medium drop-shadow-md"
                variants={itemVariants}
              >
                Fast, Reliable and Kinda Dirty
              </motion.p>
            </div>

            {/* Description */}
            <motion.p 
              className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed drop-shadow-md"
              variants={itemVariants}
            >
              Emergency septic services across the region with same day response guaranteed. 
              We handle the dirty work so you don&apos;t have to.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <motion.a
                href={`tel:${CONTACT_INFO.phone}`}
                onClick={() => trackPhoneCall('hero_primary')}
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

      {/* Minimal Scroll Indicator - No Text */}
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
            // Calculate scroll target based on current hero height
            const screenHeight = window.innerHeight;
            let scrollTarget;
            
            if (screenHeight < 700) {
              scrollTarget = 600;
            } else if (screenHeight >= 700 && screenHeight < 750) {
              scrollTarget = Math.floor(screenHeight * 0.9);
            } else {
              scrollTarget = screenHeight - 120; // minus navbar height
            }
            
            window.scrollTo({
              top: scrollTarget,
              behavior: 'smooth'
            });
          }}
        >
          {/* Minimal Mouse Scroll Icon */}
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
  );
}