'use client';

import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '@/lib/constants';

export default function Testimonials() {
  return (
    <section className="py-20 bg-bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 relative">
              <Quote className="w-8 h-8 text-primary-accent/20 absolute top-4 right-4" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-text-primary mb-6 leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="border-t pt-4">
                <div className="font-bold text-primary-dark">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-600">
                  {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>

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