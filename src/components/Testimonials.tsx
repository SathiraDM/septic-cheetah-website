'use client';

import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '@/lib/constants';

export default function Testimonials() {
  return (
    <section className="septic-section-wrapper py-20 bg-bg-secondary">
      <div className="septic-content-constrained septic-force-1540">
        {/* Modern Elegant Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-primary-dark">Customer</span>{' '}
              <span className="bg-gradient-to-r from-primary-accent via-secondary-accent to-primary-accent bg-clip-text text-transparent bg-300% animate-gradient">
                Success Stories
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 mb-6 font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Real experiences from satisfied customers
            </motion.p>
            
            <motion.div
              className="w-16 h-0.5 bg-gradient-to-r from-primary-accent to-secondary-accent mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
            />
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {TESTIMONIALS.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 relative overflow-hidden border border-white/50 h-full hover:shadow-2xl transition-all duration-500">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-accent/5 via-transparent to-secondary-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-primary-accent/10 to-secondary-accent/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-primary-accent/15 absolute top-6 right-6 group-hover:text-primary-accent/25 transition-colors duration-300" />
                
                {/* Enhanced Star Rating */}
                <div className="flex items-center mb-6 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.1 + i * 0.05,
                        type: "spring"
                      }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <Star className="w-5 h-5 text-amber-400 fill-current drop-shadow-sm mr-0.5" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <div className="relative z-10 mb-8">
                  <p className="text-gray-700 leading-relaxed text-base font-medium">
                    <span className="text-xl text-primary-accent/30 font-serif">&ldquo;</span>
                    {testimonial.text}
                    <span className="text-xl text-primary-accent/30 font-serif">&rdquo;</span>
                  </p>
                </div>

                {/* Customer Info */}
                <div className="border-t border-gray-100 pt-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-gray-800 text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.location}
                      </div>
                    </div>
                    <motion.div 
                      className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center shadow-md"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary-accent">500+</div>
            <div className="text-sm text-text-primary">Satisfied Customers</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary-accent">15+</div>
            <div className="text-sm text-text-primary">Years Experience</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary-accent">24/7</div>
            <div className="text-sm text-text-primary">Emergency Service</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary-accent">A+</div>
            <div className="text-sm text-text-primary">BBB Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}