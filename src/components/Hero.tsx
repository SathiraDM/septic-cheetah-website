"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, Wrench } from 'lucide-react';
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
      src: "/images/hero-01.jpeg",
      alt: "Professional septic tank services"
    },
    {
      src: "/images/hero-02.png",
      alt: "Heavy equipment for septic installation"
    },
    {
      src: "/images/hero-03.jpg",
      alt: "Professional septic service trucks"
    },
    {
      src: "/images/hero-08.jpg",
      alt: "Septic system maintenance"
    },
    {
      src: "/images/hero-09.jpg",
      alt: "Septic maintenance and repair"
    },
    {
      src: "/images/hero-10.jpg",
      alt: "Professional septic services"
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
        setHeroHeight('700px');
      } else {
        // Use viewport height minus the header heights for proper alignment
        // Status bar: ~28px (py-1 + border), Main header: ~72px (py-3 + logo height)
        // Total header height: approximately 100px
        const headerOffset = 90;
        const availableHeight = Math.max(700, screenHeight - headerOffset);
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
        <Wrench className="w-6 h-6" />
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

      <div className="septic-content-constrained septic-force-1540 relative z-10 h-full flex items-center justify-center">
        {/* Enhanced Content Background for Maximum Readability */}
        <div className="absolute inset-0 bg-gradient-radial from-black/20 via-black/8 to-transparent blur-3xl opacity-70"></div>
        
        <motion.div 
          className="max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto text-center relative z-10 hero-320-compact"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Centered Main Content */}
          <motion.div className="space-y-4 sm:space-y-6 lg:space-y-8 xl:space-y-10 2xl:space-y-12" variants={itemVariants}>
            {/* Main Heading with Animated Text */}
            <div className="space-y-3 sm:space-y-4 lg:space-y-5 xl:space-y-6 2xl:space-y-8">
              <h1 className="text-3xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-tight drop-shadow-2xl hero-title-320">
                Professional
                <br />
                <span className="relative inline-block">
                  <span className="text-primary-accent drop-shadow-lg">Septic</span>
                  <motion.span 
                    key={currentWordIndex}
                    className="block text-primary-accent mt-0.5 sm:mt-1 lg:mt-1 xl:mt-1.5 2xl:mt-2 drop-shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {septicWords[currentWordIndex]}
                  </motion.span>
                  {/* Animated Underline - Thinner with increased gap */}
                  <motion.div 
                    className="absolute -bottom-2 sm:-bottom-3 lg:-bottom-3 xl:-bottom-4 2xl:-bottom-5 left-1/2 transform -translate-x-1/2 h-0.5 sm:h-0.5 lg:h-0.5 xl:h-1 2xl:h-1 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </span>
              </h1>
              <motion.p 
                className="text-lg xs:text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl text-primary-accent font-medium drop-shadow-md hero-subtitle-320"
                variants={itemVariants}
              >
                Fast, Reliable and Kinda Dirty
              </motion.p>
            </div>

            {/* Description */}
            <motion.p 
              className="text-sm xs:text-base sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl text-white max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto leading-relaxed drop-shadow-md px-4 sm:px-0"
              variants={itemVariants}
            >
              Emergency septic services across the region with same day response guaranteed. 
              We handle the dirty work so you don&apos;t have to.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-5 xl:gap-6 2xl:gap-8 justify-center px-4 sm:px-0 btn-group-320"
              variants={itemVariants}
            >
              <motion.a
                href={`tel:${CONTACT_INFO.emergencyPhone}`}
                onClick={() => trackPhoneCall('hero_emergency')}
                className="relative overflow-hidden bg-gradient-to-r from-primary-accent to-secondary-accent text-white font-bold py-3 sm:py-3 lg:py-4 xl:py-4 2xl:py-5 px-6 sm:px-7 lg:px-8 xl:px-9 2xl:px-11 rounded-xl shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-2 lg:space-x-3 xl:space-x-3 2xl:space-x-4 group text-sm sm:text-sm lg:text-base xl:text-base 2xl:text-lg emergency-btn-ultra-compact before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-white/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:rounded-[inherit]"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 relative z-10 group-hover:rotate-12 transition-transform duration-300 icon-320-sm" />
                <span className="relative z-10 whitespace-nowrap">CALL NOW: {CONTACT_INFO.emergencyPhone}</span>
              </motion.a>

              <motion.a
                href="#contact-form"
                className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-primary-dark font-bold py-3 sm:py-3 lg:py-4 xl:py-4 2xl:py-5 px-6 sm:px-7 lg:px-8 xl:px-9 2xl:px-11 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 lg:space-x-2 xl:space-x-2 2xl:space-x-3 group text-sm sm:text-sm lg:text-base xl:text-base 2xl:text-lg emergency-btn-ultra-compact"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>Get Free Estimate</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 group-hover:translate-x-1 transition-transform duration-300 icon-320-sm" />
              </motion.a>
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
              scrollTarget = 700;
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