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
  ChevronDown
} from 'lucide-react';
import { CONTACT_INFO, SERVICE_CATEGORIES } from '@/lib/constants';
import { trackPhoneCall } from '@/lib/utils';
import EmergencyModal from './EmergencyModal';

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
    isMegaMenu: true,
    megaMenuCategories: SERVICE_CATEGORIES
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

            {/* Desktop Navigation - World-Class Mega Menu Design */}
            <nav className="hidden xl:flex items-center space-x-8" style={{ overflow: 'visible', position: 'relative' }}>
              {navigationItems.map((item) => {
                const isActive = pathname === item.href || 
                  (item.isMegaMenu && item.megaMenuCategories?.some(category => 
                    pathname.startsWith(category.href) || 
                    category.services.some(service => pathname === service.href)
                  ));
                
                return (
                  <div
                    key={item.href}
                    className="relative group"
                    style={{ overflow: 'visible' }}
                    onMouseEnter={() => {
                      if (item.isMegaMenu) {
                        setActiveSubmenu(item.label);
                      }
                    }}
                    onMouseLeave={() => {
                      setActiveSubmenu(null);
                    }}
                  >
                    {/* Conditional rendering: Link for regular items, button for mega menu */}
                    {item.isMegaMenu ? (
                      <button className="relative group/link cursor-pointer">
                        <div className="flex items-center space-x-1">
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
                          <ChevronDown className={`w-4 h-4 transition-all duration-300 ${
                            activeSubmenu === item.label ? 'rotate-180' : ''
                          } ${isActive ? 'text-primary-accent' : 'text-gray-500 group-hover/link:text-primary-accent'}`} />
                        </div>
                      </button>
                    ) : (
                      <Link href={item.href} className="relative group/link">
                        <div className="flex items-center space-x-1">
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
                        </div>
                      </Link>
                    )}

                    {/* Compact Services Mega Menu */}
                    {item.isMegaMenu && item.megaMenuCategories && (
                      <AnimatePresence>
                        {activeSubmenu === item.label && (
                          <motion.div
                            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 bg-white/98 backdrop-blur-xl rounded-xl shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04),0_0_0_1px_rgba(59,130,246,0.05)] border border-primary-accent/20"
                            style={{ 
                              zIndex: 99999,
                              overflow: 'visible',
                              width: '800px',
                              maxWidth: '95vw'
                            }}
                            initial={{ opacity: 0, y: -15, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -15, scale: 0.95 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          >
                            {/* Enhanced arrow indicator with matching shadow */}
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white/98 border-l border-t border-primary-accent/20 rotate-45 rounded-tl-lg shadow-lg"></div>
                            
                            <div className="p-4 relative z-10">
                              {/* Compact Header */}
                              <div className="text-center mb-4">
                                <h3 className="text-lg font-bold text-primary-dark">
                                  Our Services
                                </h3>
                              </div>

                              {/* Compact Service Cards Grid */}
                              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                                {item.megaMenuCategories.map((category, categoryIndex) => (
                                  <motion.div
                                    key={category.id}
                                    className="relative group/card"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: categoryIndex * 0.05, duration: 0.2 }}
                                  >
                                    <Link
                                      href={category.href}
                                      className="block bg-white rounded-lg border border-gray-200/70 hover:border-primary-accent/40 transition-all duration-300 hover:shadow-md group/link overflow-hidden"
                                    >
                                      <div className="p-3">
                                        {/* Compact Category Header */}
                                        <div className="flex items-center space-x-2 mb-3">
                                          <div className={`w-6 h-6 rounded flex items-center justify-center flex-shrink-0 ${
                                            category.color === 'blue' ? 'bg-blue-500/20 text-blue-600' :
                                            category.color === 'green' ? 'bg-green-500/20 text-green-600' :
                                            category.color === 'orange' ? 'bg-orange-500/20 text-orange-600' :
                                            category.color === 'red' ? 'bg-red-500/20 text-red-600' :
                                            'bg-purple-500/20 text-purple-600'
                                          } group-hover/link:scale-105 transition-transform duration-300`}>
                                            <div className="w-3 h-3 bg-current rounded opacity-80"></div>
                                          </div>
                                          <h4 className="font-semibold text-gray-900 text-sm leading-tight group-hover/link:text-primary-accent transition-colors duration-300">
                                            {category.title}
                                          </h4>
                                        </div>

                                        {/* Compact Sub-services List */}
                                        <div className="space-y-1">
                                          {category.services.slice(0, 3).map((service, serviceIndex) => (
                                            <div
                                              key={service.id}
                                              className="flex items-center space-x-2 py-1 px-2 rounded"
                                            >
                                              <div className="w-1 h-1 bg-primary-accent/60 rounded-full flex-shrink-0"></div>
                                              <div className="flex-1 min-w-0">
                                                <div className="text-xs font-medium text-gray-700 leading-tight transition-colors truncate group-hover/link:text-primary-accent/80">
                                                  {service.title}
                                                </div>
                                              </div>
                                            </div>
                                          ))}
                                          
                                          {category.services.length > 3 && (
                                            <div className="px-2 py-1">
                                              <span className="text-xs text-gray-500 italic group-hover/link:text-primary-accent/60 transition-colors">
                                                +{category.services.length - 3} more
                                              </span>
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                    </Link>
                                  </motion.div>
                                ))}
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
                        (item.isMegaMenu && item.megaMenuCategories?.some(category => 
                          pathname.startsWith(category.href) || 
                          category.services.some(service => pathname === service.href)
                        ));
                      
                      // Handle Services mega menu
                      if (item.isMegaMenu && item.megaMenuCategories) {
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
                            
                            {/* Compact Mobile Mega Menu */}
                            <AnimatePresence>
                              {activeSubmenu === item.label && (
                                <motion.div
                                  className="ml-2 mt-2 space-y-2"
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  {item.megaMenuCategories.map((category, categoryIndex) => (
                                    <motion.div 
                                      key={category.id} 
                                      className="bg-white border border-gray-200/50 rounded-lg overflow-hidden"
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: categoryIndex * 0.05 }}
                                    >
                                      <Link
                                        href={category.href}
                                        className="block p-3 hover:bg-gray-50/50 transition-colors duration-200"
                                        onClick={() => {
                                          setIsMenuOpen(false);
                                          setActiveSubmenu(null);
                                        }}
                                      >
                                        <div className="flex items-center space-x-2 mb-2">
                                          <div className={`w-5 h-5 rounded flex items-center justify-center ${
                                            category.color === 'blue' ? 'bg-blue-500/20 text-blue-600' :
                                            category.color === 'green' ? 'bg-green-500/20 text-green-600' :
                                            category.color === 'orange' ? 'bg-orange-500/20 text-orange-600' :
                                            category.color === 'red' ? 'bg-red-500/20 text-red-600' :
                                            'bg-purple-500/20 text-purple-600'
                                          }`}>
                                            <div className="w-2.5 h-2.5 bg-current rounded opacity-80"></div>
                                          </div>
                                          <h4 className="text-sm font-semibold text-gray-900">
                                            {category.title}
                                          </h4>
                                        </div>
                                        
                                        <div className="space-y-1">
                                          {category.services.slice(0, 2).map((service) => (
                                            <div
                                              key={service.id}
                                              className="flex items-center space-x-2 py-1"
                                            >
                                              <div className="w-1 h-1 bg-primary-accent/60 rounded-full flex-shrink-0"></div>
                                              <div className="flex-1 min-w-0">
                                                <div className="text-xs font-medium text-gray-700 leading-tight truncate">
                                                  {service.title}
                                                </div>
                                              </div>
                                            </div>
                                          ))}
                                          {category.services.length > 2 && (
                                            <div className="py-0.5">
                                              <span className="text-xs text-gray-500 italic">
                                                +{category.services.length - 2} more
                                              </span>
                                            </div>
                                          )}
                                        </div>
                                      </Link>
                                    </motion.div>
                                  ))}
                                  
                                  <div className="pt-2 border-t border-gray-200/50">
                                    <Link
                                      href="/services"
                                      className="block py-1.5 px-3 text-sm font-medium text-primary-accent hover:bg-primary-accent/5 rounded-md transition-all duration-200"
                                      onClick={() => {
                                        setIsMenuOpen(false);
                                        setActiveSubmenu(null);
                                      }}
                                    >
                                      View All Services →
                                    </Link>
                                  </div>
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
