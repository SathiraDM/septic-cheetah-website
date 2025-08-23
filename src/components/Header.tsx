'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  Phone, 
  Menu, 
  X, 
  Clock, 
  MapPin, 
  Star,
  Shield,
  ChevronDown,
  ExternalLink
} from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import { trackPhoneCall } from '@/lib/utils';

const navigationItems = [
  { 
    href: '/', 
    label: 'Home',
    description: 'Professional septic services'
  },
  {
    href: '/services',
    label: 'Services',
    description: 'Complete septic solutions',
    submenu: [
      { href: '/services/pumping', label: 'Septic Pumping' },
      { href: '/services/installation', label: 'System Installation' },
      { href: '/services/repairs', label: 'Emergency Repairs' },
      { href: '/services/inspections', label: 'System Inspections' },
      { href: '/services/grease-trap', label: 'Grease Trap Services' },
      { href: '/services/portable-toilets', label: 'Portable Toilet Rentals' }
    ]
  },
  { 
    href: '/service-areas', 
    label: 'Service Areas',
    description: 'Counties and cities we serve'
  },
  { 
    href: '/about', 
    label: 'About',
    description: 'Our story and expertise'
  },
  { 
    href: '/contact', 
    label: 'Contact',
    description: 'Get your free estimate'
  }
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we've scrolled past the status bar height
      // Status bar height is now approximately 28px (py-1 + border)
      // Use a larger buffer (20px) for much smoother, gradual transition
      const statusBarHeight = 28;
      const buffer = 20;
      const scrolled = window.scrollY > (statusBarHeight + buffer);
      setIsScrolled(scrolled);
    };

    // Initial check in case page loads already scrolled
    handleScroll();
    
    // Use passive listener for better performance and reduce glitches
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const mobileMenuVariants: Variants = {
    closed: { opacity: 0, height: 0 },
    open: { 
      opacity: 1, 
      height: 'auto',
      transition: { duration: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  return (
    <div className="w-full" style={{ overflow: 'visible' }}>
      {/* Top Status Bar - SCROLLABLE (Normal document flow) */}
      <div className="septic-full-bg bg-gradient-to-r from-primary-dark to-primary-dark/95 text-white py-1 px-4 hidden md:block border-b border-primary-accent/20"
           style={{
             // Ensure proper positioning and smooth scrolling
             position: 'relative',
             zIndex: 1,
             transform: 'translateZ(0)'
           }}>
        <div className="septic-max-width septic-header-content flex justify-between items-center text-sm"
             style={{ minHeight: '28px' }}>
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2 group">
              <div className="relative">
                <Clock className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <span className="font-medium text-green-400 tracking-wide">
                Open 24 Hours
              </span>
            </div>
            <div className="flex items-center space-x-2 group">
              <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium opacity-90 group-hover:opacity-100 transition-opacity">
                Serving Central Texas
              </span>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1.5 group cursor-default">
              <Star className="w-4 h-4 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" />
              <span className="font-semibold text-yellow-400">4.9/5</span>
              <span className="opacity-80">Rating</span>
            </div>
            <div className="flex items-center space-x-1.5 group cursor-default">
              <Shield className="w-4 h-4 text-green-400 group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-medium opacity-90 group-hover:opacity-100 transition-opacity">
                Licensed & Insured
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Header - ULTRA SMOOTH POSITIONING */}
      <motion.header
        className={`${
          isScrolled 
            ? 'fixed top-0 left-0 right-0 z-[999]' 
            : 'relative z-[999]'
        } transition-all duration-700 ease-out ${
          isScrolled 
            ? 'bg-white/98 backdrop-blur-xl shadow-2xl border-b border-primary-accent/10' 
            : 'bg-white/95 backdrop-blur-md shadow-md'
        }`}
        style={{
          // Prevent layout shifts with consistent height
          minHeight: '72px',
          // GPU acceleration for smooth transitions
          transform: 'translateZ(0)',
          willChange: 'transform, background-color, box-shadow',
          zIndex: 999,
          overflow: 'visible'
        }}
        animate={{ 
          y: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{ 
          duration: 0.6, 
          ease: [0.25, 0.46, 0.45, 0.94] // Custom bezier for ultra smooth
        }}
      >
        <div className="septic-max-width septic-header-content" style={{ overflow: 'visible', position: 'static' }}>
          <div className="flex justify-between items-center py-3" style={{ overflow: 'visible', position: 'relative' }}>
            {/* Logo Section - Enhanced */}
            <Link href="/" className="flex items-center group">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-primary-accent/20 to-secondary-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                <Image
                  src="/images/logo-horizontal.png"
                  alt="Septic Cheetah - Professional Septic Services"
                  width={280}
                  height={100}
                  className="h-12 w-auto object-contain relative z-10 drop-shadow-sm"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation - Modern Glass Design */}
            <nav className="hidden lg:flex items-center space-x-1 bg-gray-50/50 backdrop-blur-sm rounded-xl p-1.5 border border-gray-200/50" style={{ overflow: 'visible', position: 'relative' }}>
              {navigationItems.map((item) => {
                const isActive = pathname === item.href || 
                  (item.submenu && item.submenu.some(subItem => pathname === subItem.href));
                
                return (
                  <div
                    key={item.href}
                    className="relative group"
                    style={{ overflow: 'visible' }}
                    onMouseEnter={() => {
                      if (item.submenu) {
                        setActiveSubmenu(item.label);
                      }
                    }}
                    onMouseLeave={() => {
                      setActiveSubmenu(null);
                    }}
                  >
                    <Link
                      href={item.href}
                      className={`relative flex items-center space-x-1 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        isActive 
                          ? 'text-primary-accent' 
                          : 'text-gray-700 hover:text-primary-accent hover:bg-white/70 hover:shadow-md'
                      }`}
                    >
                      <span className="relative z-10">{item.label}</span>
                      {item.submenu && (
                        <ChevronDown className={`w-4 h-4 transition-all duration-300 ${
                          activeSubmenu === item.label ? 'rotate-180' : ''
                        } ${isActive ? 'text-primary-accent' : 'text-gray-500'}`} />
                      )}
                      
                      {/* Simple Bottom Line Active Indicator */}
                      {isActive && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full"
                          layoutId="activeIndicator"
                          initial={false}
                          transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        />
                      )}
                    </Link>

                    {/* Enhanced Submenu */}
                    {item.submenu && (
                      <AnimatePresence>
                        {activeSubmenu === item.label && (
                          <motion.div
                            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 min-w-max bg-white/98 backdrop-blur-xl rounded-xl shadow-xl border border-primary-accent/10"
                            style={{ 
                              zIndex: 99999,
                              overflow: 'visible',
                              width: 'max-content'
                            }}
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                          >
                            <div className="py-2">
                              {item.submenu.map((subItem, index) => (
                                <motion.div
                                  key={subItem.href}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.03 }}
                                >
                                  <Link
                                    href={subItem.href}
                                    className="flex items-center px-6 py-3 text-gray-700 hover:text-primary-accent hover:bg-gradient-to-r hover:from-primary-accent/5 hover:to-secondary-accent/5 transition-all duration-200 group border-l-2 border-transparent hover:border-primary-accent whitespace-nowrap"
                                  >
                                    <div className="w-2 h-2 bg-primary-accent rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0"></div>
                                    <span className="font-medium text-sm flex-shrink-0">{subItem.label}</span>
                                    <div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0">
                                      <ExternalLink className="w-3 h-3 text-primary-accent" />
                                    </div>
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Modern CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <motion.a
                href={`tel:${CONTACT_INFO.phone}`}
                onClick={() => trackPhoneCall('header_primary')}
                className="relative overflow-hidden bg-gradient-to-r from-primary-accent to-secondary-accent text-white font-semibold py-2.5 px-5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 group"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-accent/80 to-secondary-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Phone className="w-4 h-4 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                <span className="hidden xl:inline relative z-10">{CONTACT_INFO.phone}</span>
                <span className="xl:hidden relative z-10">Call Now</span>
              </motion.a>

              <motion.a
                href={`tel:${CONTACT_INFO.emergencyPhone}`}
                onClick={() => trackPhoneCall('header_emergency')}
                className="relative overflow-hidden bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-2.5 px-5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 group"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-red-400 rounded-xl opacity-30 animate-pulse"></div>
                <span className="text-sm relative z-10 tracking-wide">EMERGENCY</span>
              </motion.a>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              className="lg:hidden relative p-2.5 rounded-xl hover:bg-gray-100/80 transition-all duration-300 group"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-accent/10 to-secondary-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-primary-dark relative z-10" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-primary-dark relative z-10" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="lg:hidden border-t border-gray-100"
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <div className="py-4 space-y-2">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-primary-accent/5 transition-colors group"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div>
                          <div className="font-medium text-primary-dark group-hover:text-primary-accent">
                            {item.label}
                          </div>
                          <div className="text-sm text-gray-600">
                            {item.description}
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary-accent" />
                      </Link>

                      {/* Mobile Submenu */}
                      {item.submenu && (
                        <div className="ml-4 mt-2 space-y-1 bg-gray-50/50 rounded-lg p-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block p-2 text-sm text-gray-600 hover:text-primary-accent hover:bg-white rounded-md transition-all duration-200"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}

                  {/* Mobile CTA Buttons */}
                  <div className="pt-4 space-y-3">
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      onClick={() => {
                        trackPhoneCall('mobile_header');
                        setIsMenuOpen(false);
                      }}
                      className="block bg-gradient-to-r from-primary-accent to-secondary-accent text-white font-bold py-3 px-6 rounded-lg text-center shadow-lg"
                    >
                      Call Now: {CONTACT_INFO.phone}
                    </a>
                    <a
                      href={`tel:${CONTACT_INFO.emergencyPhone}`}
                      onClick={() => {
                        trackPhoneCall('mobile_emergency');
                        setIsMenuOpen(false);
                      }}
                      className="block bg-red-600 text-white font-bold py-3 px-6 rounded-lg text-center shadow-lg animate-pulse"
                    >
                      EMERGENCY: {CONTACT_INFO.emergencyPhone}
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Layout Shift Compensation - Prevents jumping when header becomes fixed */}
      {isScrolled && (
        <div 
          style={{ height: '72px' }}
          className="block"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
