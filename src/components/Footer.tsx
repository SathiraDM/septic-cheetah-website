'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Clock, 
  Shield,
  AlertTriangle,
  Award,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight
} from 'lucide-react';
import { CONTACT_INFO, SERVICES } from '@/lib/constants';
import { trackPhoneCall, trackEvent } from '@/lib/utils';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'All Services' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
  { href: '/service-areas', label: 'Service Areas' },
  { href: '/contact#faq', label: 'FAQ' }
];

const legalLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/cookies', label: 'Cookie Policy' }
];

const socialLinks = [
  { href: 'https://facebook.com/septiccheetah', icon: Facebook, label: 'Facebook' },
  { href: 'https://twitter.com/septiccheetah', icon: Twitter, label: 'Twitter' },
  { href: 'https://instagram.com/septiccheetah', icon: Instagram, label: 'Instagram' },
  { href: 'https://linkedin.com/company/septiccheetah', icon: Linkedin, label: 'LinkedIn' }
];

const trustBadges = [
  { icon: Shield, text: 'Licensed & Insured', subtext: 'State License #12345' },
  { icon: Award, text: 'Top Rated', subtext: 'Premium Service' }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  return (
    <div className="w-full septic-no-overflow">
      <footer className="septic-full-bg bg-gradient-to-br from-primary-dark via-primary-dark to-secondary-accent text-white">
        {/* Main Footer Content */}
        <motion.div
          className="septic-max-width septic-footer-content py-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <Link href="/" className="block mb-6 group">
                <div className="relative w-full h-48 lg:h-56 xl:h-64 bg-white/25 backdrop-blur-sm rounded-xl border border-white/30 flex items-center justify-center p-4 group-hover:bg-white/35 transition-all duration-300">
                  <Image
                    src="/images/logo-high-resolution.png"
                    alt="Septic Cheetah - Fast, Reliable and Kinda Dirty"
                    width={800}
                    height={600}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </div>
              </Link>

              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                Professional septic services with over 15 years of experience. 
                Licensed, insured, and committed to keeping your septic system running smoothly.
              </p>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-bold mb-4 text-primary-accent">Our Services</h3>
              <div className="space-y-2">
                {SERVICES.map((service) => (
                  <Link
                    key={service.id}
                    href={service.href}
                    className="flex items-center justify-between group hover:text-primary-accent transition-colors"
                    onClick={() => trackEvent('footer_service_click', { service: service.id })}
                  >
                    <div>
                      <div className="font-medium">{service.title}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>

              <div className="mt-4 p-3 bg-primary-accent/20 rounded-lg">
                <div className="flex items-center space-x-2 mb-1">
                  <Clock className="w-4 h-4 text-primary-accent" />
                  <span className="font-semibold text-primary-accent text-sm">Same-Day Service</span>
                </div>
                <p className="text-xs text-gray-300">
                  Emergency response available 24/7/365 across our entire service area.
                </p>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-bold mb-4 text-primary-accent">Contact Info</h3>
              <div className="space-y-3">
                <motion.a
                  href={`tel:${CONTACT_INFO.emergencyPhone}`}
                  onClick={() => trackPhoneCall('footer_emergency')}
                  className="flex items-center space-x-3 group hover:text-red-400 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center group-hover:bg-red-500/30 transition-colors">
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <div className="font-medium text-red-400">24/7 Emergency Line</div>
                    <div className="text-sm text-gray-300">{CONTACT_INFO.emergencyPhone}</div>
                  </div>
                </motion.a>

                <motion.a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center space-x-3 group hover:text-primary-accent transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 bg-primary-accent/20 rounded-lg flex items-center justify-center group-hover:bg-primary-accent/30 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">Email Us</div>
                    <div className="text-sm text-gray-300">{CONTACT_INFO.email}</div>
                  </div>
                </motion.a>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-accent/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">Service Area</div>
                    <div className="text-sm text-gray-300">50+ Mile Radius</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-accent/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">Business Hours</div>
                    <div className="text-sm text-gray-300">Mon-Fri: 7AM-7PM</div>
                    <div className="text-sm text-gray-300">Sat: 8AM-5PM</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Links & Social */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-bold mb-4 text-primary-accent">Quick Links</h3>
              <div className="grid grid-cols-2 gap-1 mb-6">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-300 hover:text-primary-accent transition-colors text-xs py-1"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <h4 className="font-semibold mb-3 text-primary-accent text-sm">Follow Us</h4>
              <div className="flex space-x-2 mb-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-accent hover:text-white transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

              {/* Trust Badges */}
              <h4 className="font-semibold mb-3 text-primary-accent text-sm">Trust & Quality</h4>
              <div className="grid grid-cols-2 gap-3">
                {trustBadges.map((badge, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    <badge.icon className="w-5 h-5 mx-auto mb-1 text-primary-accent" />
                    <div className="text-xs font-semibold">{badge.text}</div>
                    <div className="text-xs text-gray-300">{badge.subtext}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20">
          <div className="septic-max-width septic-footer-content py-4">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
              <div className="text-xs text-gray-300">
                © {currentYear} Septic Cheetah LLC. All rights reserved.
              </div>
              
              <div className="flex items-center space-x-4 text-xs">
                {legalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-300 hover:text-primary-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="flex items-center space-x-4 text-xs text-gray-300">
                <a 
                  href="https://absterco.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-accent transition-colors"
                >
                  Made with ❤️ by Absterco
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
