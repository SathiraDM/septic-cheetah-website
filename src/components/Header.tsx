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
  ExternalLink,
  Sparkles,
  Wrench,
  Settings,
  Truck,
  Building
} from 'lucide-react';
import { CONTACT_INFO, SERVICES } from '@/lib/constants';
import { trackPhoneCall } from '@/lib/utils';
import EmergencyModal from './EmergencyModal';

const iconMap = {
  'Wrench': Wrench,
  'Settings': Settings,
  'Truck': Truck,
  'Building': Building,
  'MapPin': MapPin
};

const navigationItems = [
  { 
    href: '/', 
    label: 'Home',
    description: 'Professional septic services'
  },
  {
    href: '#',
    label: 'Services',
    description: 'Complete septic solutions',
    megaMenu: SERVICES.map(service => ({
      href: service.href,
      label: service.title,
      category: service.category,
      description: service.description,
      icon: iconMap[service.icon as keyof typeof iconMap],
      subServices: service.subServices
    }))
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
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);

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
      <div className="w-full bg-gradient-to-r from-primary-dark to-primary-dark/95 text-white py-1 hidden md:block border-b border-primary-accent/20"
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

            {/* Desktop Navigation - Elegant Minimalist Design */}
            <nav className="hidden xl:flex items-center space-x-8" style={{ overflow: 'visible', position: 'relative' }}>
              {navigationItems.map((item) => {
                const isActive = pathname === item.href || 
                  (item.megaMenu && item.megaMenu.some(megaItem => pathname === megaItem.href));
                
                return (
                  <div
                    key={item.href}
                    className="relative group"
                    style={{ overflow: 'visible' }}
                    onMouseEnter={() => {
                      if (item.megaMenu) {
                        setActiveSubmenu(item.label);
                      }
                    }}
                    onMouseLeave={() => {
                      setActiveSubmenu(null);
                    }}
                  >
                    {item.href === '#' ? (
                      <div className="relative flex items-center space-x-1 cursor-pointer group/link">
                        <span className={`relative font-medium text-[15px] tracking-wide transition-all duration-300 ease-out ${
                          isActive 
                            ? 'text-primary-accent' 
                            : 'text-gray-700 group-hover/link:text-primary-accent'
                        }`}>
                          {item.label}
                          
                          {/* Enhanced gradient underline animation - only under text */}
                          <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-accent via-primary-accent/80 to-secondary-accent transition-all duration-300 ease-out ${
                            isActive 
                              ? 'w-full opacity-100' 
                              : 'w-0 group-hover/link:w-full opacity-0 group-hover/link:opacity-100'
                          }`}></div>
                        </span>
                        {item.megaMenu && (
                          <ChevronDown className={`w-4 h-4 transition-all duration-300 ${
                            activeSubmenu === item.label ? 'rotate-180' : ''
                          } ${isActive ? 'text-primary-accent' : 'text-gray-500 group-hover/link:text-primary-accent'}`} />
                        )}
                      </div>
                    ) : (
                      <Link href={item.href} className="relative group/link">
                        <span className={`relative font-medium text-[15px] tracking-wide transition-all duration-300 ease-out ${
                          isActive 
                            ? 'text-primary-accent' 
                            : 'text-gray-700 group-hover/link:text-primary-accent'
                        }`}>
                          {item.label}
                          
                          {/* Enhanced gradient underline animation */}
                          <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-accent via-primary-accent/80 to-secondary-accent transition-all duration-300 ease-out ${
                            isActive 
                              ? 'w-full opacity-100' 
                              : 'w-0 group-hover/link:w-full opacity-0 group-hover/link:opacity-100'
                          }`}></div>
                        </span>
                      </Link>
                    )}

                    {/* Enhanced Mega Menu with Modern Design */}
                    {item.megaMenu && (
                      <AnimatePresence>
                        {activeSubmenu === item.label && (
                          <motion.div
                            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100/80"
                            style={{ 
                              zIndex: 99999,
                              overflow: 'visible',
                              width: '720px',
                              maxWidth: '90vw'
                            }}
                            initial={{ opacity: 0, y: -15, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -15, scale: 0.95 }}
                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          >
                            {/* Arrow indicator */}
                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white/98 border-l border-t border-gray-100/80 rotate-45 rounded-tl-sm"></div>
                            
                            <div className="p-6 relative z-10">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {item.megaMenu.map((megaItem, index) => {
                                  const IconComponent = megaItem.icon;
                                  return (
                                    <motion.div
                                      key={megaItem.href}
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: index * 0.05, duration: 0.2 }}
                                    >
                                      <Link
                                        href={megaItem.href}
                                        className="group/mega block p-4 rounded-xl hover:bg-gradient-to-r hover:from-primary-accent/5 hover:to-secondary-accent/5 transition-all duration-300 border border-transparent hover:border-primary-accent/20"
                                      >
                                        <div className="flex items-start space-x-3">
                                          <div className="flex-shrink-0">
                                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-accent/10 to-secondary-accent/10 flex items-center justify-center group-hover/mega:from-primary-accent/20 group-hover/mega:to-secondary-accent/20 transition-all duration-300">
                                              {IconComponent && <IconComponent className="w-5 h-5 text-primary-accent" />}
                                            </div>
                                          </div>
                                          <div className="flex-1 min-w-0">
                                            <h4 className="font-semibold text-gray-900 text-sm group-hover/mega:text-primary-accent transition-colors duration-200">
                                              {megaItem.label}
                                            </h4>
                                            <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                                              {megaItem.description}
                                            </p>
                                            <div className="mt-2 space-y-1">
                                              {megaItem.subServices?.map((subService, subIndex) => (
                                                <div key={subIndex} className="flex items-center space-x-2">
                                                  <div className="w-1 h-1 bg-primary-accent/60 rounded-full flex-shrink-0"></div>
                                                  <span className="text-xs text-gray-500">{subService.name}</span>
                                                </div>
                                              ))}
                                            </div>
                                          </div>
                                        </div>
                                        
                                        {/* Subtle hover indicator */}
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-accent scale-y-0 group-hover/mega:scale-y-100 transition-transform duration-200 origin-center rounded-r-full"></div>
                                      </Link>
                                    </motion.div>
                                  );
                                })}
                              </div>
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
                className="relative overflow-hidden bg-gradient-to-r from-primary-accent to-secondary-accent text-white font-semibold py-2.5 px-5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 group before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/15 before:to-white/5 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:rounded-[inherit]"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-4 h-4 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                <span className="hidden xl:inline relative z-10">{CONTACT_INFO.phone}</span>
                <span className="xl:hidden relative z-10">Call Now</span>
              </motion.a>

              <motion.button
                onClick={() => setIsEmergencyModalOpen(true)}
                className="relative overflow-hidden bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-2.5 px-5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 group cursor-pointer before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-white/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:rounded-[inherit] after:absolute after:-inset-1 after:bg-red-400 after:rounded-xl after:opacity-30 after:animate-pulse after:-z-10"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-sm relative z-10 tracking-wide">EMERGENCY</span>
              </motion.button>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              className="xl:hidden relative p-2.5 rounded-xl hover:bg-gray-100/80 transition-all duration-300 group"
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

          {/* Modern Mobile Navigation Drawer */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="xl:hidden bg-white/98 backdrop-blur-xl border-t border-gray-100/80 shadow-lg"
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <div className="px-4 py-3">
                  {/* Primary Navigation - Clean List */}
                  <div className="space-y-1 mb-4">
                    {navigationItems.map((item, index) => {
                      const isActive = pathname === item.href || 
                        (item.megaMenu && item.megaMenu.some(megaItem => pathname === megaItem.href));
                      
                      // Handle Services dropdown
                      if (item.href === '#' && item.megaMenu) {
                        return (
                          <motion.div
                            key={item.label}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <button
                              className={`w-full flex items-center justify-between py-3 px-4 rounded-lg text-left transition-all duration-200 group ${
                                isActive || activeSubmenu === item.label
                                  ? 'bg-primary-accent/10 text-primary-accent' 
                                  : 'text-gray-700 hover:bg-gray-50 hover:text-primary-accent'
                              }`}
                              onClick={() => setActiveSubmenu(activeSubmenu === item.label ? null : item.label)}
                            >
                              <span className="font-medium">{item.label}</span>
                              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                                activeSubmenu === item.label ? 'rotate-180' : ''
                              }`} />
                            </button>
                            
                            {/* Mobile Mega Menu */}
                            <AnimatePresence>
                              {activeSubmenu === item.label && (
                                <motion.div
                                  className="ml-4 mt-1 space-y-2"
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  {item.megaMenu.map((megaItem) => {
                                    const IconComponent = megaItem.icon;
                                    return (
                                      <Link
                                        key={megaItem.href}
                                        href={megaItem.href}
                                        className="flex items-start p-3 text-sm text-gray-600 hover:text-primary-accent hover:bg-primary-accent/5 rounded-lg transition-all duration-200 border border-transparent hover:border-primary-accent/20"
                                        onClick={() => {
                                          setIsMenuOpen(false);
                                          setActiveSubmenu(null);
                                        }}
                                      >
                                        <div className="flex-shrink-0 mr-3 mt-0.5">
                                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-accent/10 to-secondary-accent/10 flex items-center justify-center">
                                            {IconComponent && <IconComponent className="w-4 h-4 text-primary-accent" />}
                                          </div>
                                        </div>
                                        <div className="flex-1">
                                          <div className="font-medium text-gray-900">{megaItem.label}</div>
                                          <div className="text-xs text-gray-500 mt-1">{megaItem.description}</div>
                                        </div>
                                      </Link>
                                    );
                                  })}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        );
                      }
                      
                      // Regular navigation items
                      return (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            href={item.href}
                            className={`flex items-center py-3 px-4 rounded-lg transition-all duration-200 group ${
                              isActive
                                ? 'bg-primary-accent/10 text-primary-accent font-medium' 
                                : 'text-gray-700 hover:bg-gray-50 hover:text-primary-accent'
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <span className="font-medium">{item.label}</span>
                            {isActive && (
                              <div className="ml-auto w-2 h-2 bg-primary-accent rounded-full"></div>
                            )}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Action Buttons - Streamlined */}
                  <div className="flex gap-2 pt-3 border-t border-gray-100">
                    <motion.a
                      href={`tel:${CONTACT_INFO.phone}`}
                      onClick={() => {
                        trackPhoneCall('mobile_header');
                        setIsMenuOpen(false);
                      }}
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-primary-accent to-secondary-accent text-white font-medium py-2.5 px-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">Call Now</span>
                    </motion.a>
                    
                    <motion.button
                      onClick={() => {
                        setIsEmergencyModalOpen(true);
                        setIsMenuOpen(false);
                      }}
                      className="px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200 text-sm"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                    >
                      Emergency
                    </motion.button>
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

      {/* Emergency Modal */}
      <EmergencyModal 
        isOpen={isEmergencyModalOpen}
        onClose={() => setIsEmergencyModalOpen(false)}
      />
    </div>
  );
}
