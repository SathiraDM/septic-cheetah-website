'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Menu, 
  X, 
  Clock, 
  MapPin, 
  Star,
  Shield,
  Award,
  ChevronDown,
  ExternalLink
} from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import { trackPhoneCall } from '@/lib/utils';
import { useBusinessHours } from '@/hooks/useBusinessHours';

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
      { href: '/services/pumping', label: 'Septic Pumping', price: 'From $299' },
      { href: '/services/installation', label: 'System Installation', price: 'From $3,499' },
      { href: '/services/repairs', label: 'Emergency Repairs', price: '24/7 Available' }
    ]
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const { isOpen, currentStatus } = useBusinessHours();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { 
      opacity: 1, 
      height: 'auto',
      transition: { duration: 0.3, ease: 'easeInOut' }
    }
  };

  return (
    <>
      {/* Top Bar - Business Status & Quick Info */}
      <div className="bg-primary-dark text-white py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span className={`font-medium ${isOpen ? 'text-green-400' : 'text-yellow-400'}`}>
                {currentStatus}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Serving 50+ Mile Radius</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-1">
              <Shield className="w-4 h-4 text-green-400" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-1">
              <Award className="w-4 h-4 text-blue-400" />
              <span>BBB A+ Rated</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
            : 'bg-white shadow-sm'
        }`}
        variants={headerVariants}
        initial="initial"
        animate="animate"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", damping: 15 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-accent to-secondary-accent rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">SC</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
              </motion.div>
              
              <div className="hidden sm:block">
                <div className="text-2xl font-bold text-primary-dark group-hover:text-primary-accent transition-colors">
                  Septic Cheetah
                </div>
                <div className="text-sm text-secondary-accent font-medium -mt-1">
                  Fast, Reliable and Kinda Dirty
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div
                  key={item.href}
                  className="relative group"
                  onMouseEnter={() => item.submenu && setActiveSubmenu(item.label)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center space-x-1 text-text-primary hover:text-primary-accent font-medium transition-colors duration-200 py-2"
                  >
                    <span>{item.label}</span>
                    {item.submenu && (
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    )}
                  </Link>

                  {/* Submenu */}
                  {item.submenu && (
                    <AnimatePresence>
                      {activeSubmenu === item.label && (
                        <motion.div
                          className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="p-2">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className="flex items-center justify-between p-3 rounded-lg hover:bg-primary-accent/5 transition-colors group"
                              >
                                <div>
                                  <div className="font-medium text-primary-dark group-hover:text-primary-accent">
                                    {subItem.label}
                                  </div>
                                  <div className="text-sm text-gray-600">
                                    {subItem.price}
                                  </div>
                                </div>
                                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary-accent" />
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <motion.a
                href={`tel:${CONTACT_INFO.phone}`}
                onClick={() => trackPhoneCall('header_primary')}
                className="bg-gradient-to-r from-primary-accent to-secondary-accent text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center space-x-2 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-4 h-4 group-hover:animate-pulse" />
                <span className="hidden xl:inline">{CONTACT_INFO.phone}</span>
                <span className="xl:hidden">Call Now</span>
              </motion.a>

              <motion.a
                href={`tel:${CONTACT_INFO.emergencyPhone}`}
                onClick={() => trackPhoneCall('header_emergency')}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center space-x-2 animate-pulse"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-sm">EMERGENCY</span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-primary-dark" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-primary-dark" />
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
                        <div className="ml-4 mt-2 space-y-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block p-2 text-sm text-gray-600 hover:text-primary-accent transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.label} - {subItem.price}
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
    </>
  );
}