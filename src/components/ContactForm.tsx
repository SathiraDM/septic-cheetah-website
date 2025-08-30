'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, User, Phone, Mail, Settings, Clock, MessageSquare, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { trackFormSubmit } from '@/lib/utils';

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  urgency: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    urgency: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Custom validation: require either email or phone
    if (!formData.email && !formData.phone) {
      alert('Please provide either an email address or phone number so we can contact you.');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        trackFormSubmit('contact_form');
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <motion.div 
        className="relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 border-2 border-green-200/50 rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-center backdrop-blur-sm"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%)]"></div>
        <div className="absolute top-4 right-4 w-20 h-20 bg-green-200/30 rounded-full blur-xl"></div>
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
        >
          <CheckCircle className="w-16 h-16 sm:w-20 sm:h-20 text-green-600 mx-auto mb-4 sm:mb-6 drop-shadow-lg" />
        </motion.div>
        
        <motion.h3 
          className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Thank You!
        </motion.h3>
        
        <motion.p 
          className="text-green-700 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          We received your request for <strong>{formData.service === 'pumping' ? 'Septic Pumping/Cleaning' : 
            formData.service === 'installation' ? 'New Installation' :
            formData.service === 'repairs' ? 'Emergency Repairs' :
            formData.service === 'maintenance' ? 'Maintenance/Inspection' : 'service'}</strong> and will call you within 2 hours during business hours.
        </motion.p>
        
        <motion.p 
          className="text-xs sm:text-sm text-green-600 bg-white/50 rounded-lg sm:rounded-xl p-2 sm:p-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          For immediate emergencies, please call our emergency hotline.
        </motion.p>
      </motion.div>
    );
  }

  return (
    <motion.div 
      id="contact-form"
      className="relative overflow-hidden bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl border border-white/50"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-accent/5 via-transparent to-secondary-accent/5"></div>
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary-accent/10 to-secondary-accent/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-400/10 to-purple-400/10 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="relative z-10 p-6 sm:p-8 lg:p-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-6 sm:mb-10 contact-form-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-accent/15 to-secondary-accent/15 px-3 sm:px-4 py-2 rounded-full mb-3 sm:mb-4">
            <Sparkles className="w-4 h-4 text-primary-accent" />
            <span className="text-xs sm:text-sm font-semibold text-primary-accent">FREE ESTIMATE</span>
          </div>
          
          <h3 className="text-2xl font-bold mb-3 sm:mb-4 leading-tight hero-title-320 contact-form-title">
            <span className="text-gray-800">Get Your </span>
            <span className="bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent">
              Free Estimate
            </span>
          </h3>
          
          <p className="text-gray-600 text-base leading-relaxed max-w-md mx-auto hero-subtitle-320 contact-form-subtitle">
            Fill out the form below and we&apos;ll contact you within 2 hours
          </p>
        </motion.div>

        {submitStatus === 'error' && (
          <motion.div 
            className="bg-red-50/80 backdrop-blur-sm border border-red-200/60 rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-6 sm:mb-8 flex items-start sm:items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AlertCircle className="w-5 h-5 text-red-600 mr-2 sm:mr-3 flex-shrink-0 mt-0.5 sm:mt-0" />
            <span className="text-red-700 text-sm sm:text-base">
              There was an error submitting your request. Please try again or call us directly.
            </span>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
          {/* Name and Phone Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 grid-320-single">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                Your Name *
              </label>
              <div className="relative group">
                <User className={`absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 ${
                  focusedField === 'name' ? 'text-primary-accent' : 'text-gray-400'
                }`} />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField('')}
                  required
                  className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-gray-50/80 border-2 border-gray-200/60 rounded-xl sm:rounded-2xl focus:outline-none focus:border-primary-accent focus:bg-white transition-all duration-300 text-gray-800 placeholder:text-gray-400 text-sm sm:text-base"
                  placeholder="Enter your full name"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                Phone Number
              </label>
              <div className="relative group">
                <Phone className={`absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 ${
                  focusedField === 'phone' ? 'text-primary-accent' : 'text-gray-400'
                }`} />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField('')}
                  className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-gray-50/80 border-2 border-gray-200/60 rounded-xl sm:rounded-2xl focus:outline-none focus:border-primary-accent focus:bg-white transition-all duration-300 text-gray-800 placeholder:text-gray-400 text-sm sm:text-base"
                  placeholder="(555) 123-4567"
                />
              </div>
            </motion.div>
          </div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
              Email Address
            </label>
            <div className="relative group">
              <Mail className={`absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 ${
                focusedField === 'email' ? 'text-primary-accent' : 'text-gray-400'
              }`} />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField('')}
                className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-gray-50/80 border-2 border-gray-200/60 rounded-xl sm:rounded-2xl focus:outline-none focus:border-primary-accent focus:bg-white transition-all duration-300 text-gray-800 placeholder:text-gray-400 text-sm sm:text-base"
                placeholder="your@email.com"
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">* Please provide either phone or email so we can contact you</p>
          </motion.div>

          {/* Service Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
              What service do you need? *
            </label>
            <div className="relative group">
              <Settings className={`absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 z-10 ${
                focusedField === 'service' ? 'text-primary-accent' : 'text-gray-400'
              }`} />
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                onFocus={() => setFocusedField('service')}
                onBlur={() => setFocusedField('')}
                required
                className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-gray-50/80 border-2 border-gray-200/60 rounded-xl sm:rounded-2xl focus:outline-none focus:border-primary-accent focus:bg-white transition-all duration-300 text-gray-800 appearance-none cursor-pointer text-sm sm:text-base"
              >
                <option value="">Select a service...</option>
                <option value="pumping">Septic Pumping/Cleaning</option>
                <option value="installation">New Installation</option>
                <option value="repairs">Emergency Repairs</option>
                <option value="maintenance">Maintenance/Inspection</option>
                <option value="other">Other/Not Sure</option>
              </select>
              <div className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Urgency Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <label className="block text-sm font-semibold text-gray-700 mb-3 sm:mb-4">
              When do you need service? *
            </label>
            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              {[
                { 
                  value: 'emergency', 
                  label: 'Emergency (ASAP)', 
                  sublabel: 'Same day service',
                  gradient: 'from-red-500 to-pink-500',
                  bg: 'bg-red-50',
                  border: 'border-red-200'
                },
                { 
                  value: 'soon', 
                  label: 'Within a few days', 
                  sublabel: 'Schedule soon',
                  gradient: 'from-amber-500 to-orange-500',
                  bg: 'bg-amber-50',
                  border: 'border-amber-200'
                },
                { 
                  value: 'scheduled', 
                  label: 'Schedule for later', 
                  sublabel: 'Plan ahead',
                  gradient: 'from-green-500 to-emerald-500',
                  bg: 'bg-green-50',
                  border: 'border-green-200'
                }
              ].map((option, index) => (
                <motion.label 
                  key={option.value} 
                  className={`group relative flex flex-col p-3 sm:p-4 border-2 rounded-xl sm:rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                    formData.urgency === option.value 
                      ? `${option.bg} ${option.border} shadow-lg scale-105` 
                      : 'border-gray-200 hover:border-gray-300 bg-white hover:shadow-md'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="urgency"
                      value={option.value}
                      checked={formData.urgency === option.value}
                      onChange={handleChange}
                      required
                      className="sr-only"
                    />
                    <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 mr-2 sm:mr-3 flex items-center justify-center transition-all duration-300 ${
                      formData.urgency === option.value 
                        ? `bg-gradient-to-r ${option.gradient} border-transparent` 
                        : 'border-gray-300 group-hover:border-gray-400'
                    }`}>
                      {formData.urgency === option.value && (
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <span className={`font-semibold text-xs sm:text-sm transition-colors duration-300 ${
                        formData.urgency === option.value ? 'text-gray-800' : 'text-gray-700'
                      }`}>
                        {option.label}
                      </span>
                      <div className={`text-xs transition-colors duration-300 ${
                        formData.urgency === option.value ? 'text-gray-600' : 'text-gray-500'
                      }`}>
                        {option.sublabel}
                      </div>
                    </div>
                  </div>
                  {formData.urgency === option.value && (
                    <Clock className="absolute top-2 sm:top-3 right-2 sm:right-3 w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                  )}
                </motion.label>
              ))}
            </div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
              Describe your septic issue or needs
            </label>
            <div className="relative group">
              <MessageSquare className={`absolute left-3 sm:left-4 top-3 sm:top-4 w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 ${
                focusedField === 'message' ? 'text-primary-accent' : 'text-gray-400'
              }`} />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField('')}
                rows={4}
                className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-gray-50/80 border-2 border-gray-200/60 rounded-xl sm:rounded-2xl focus:outline-none focus:border-primary-accent focus:bg-white transition-all duration-300 text-gray-800 placeholder:text-gray-400 resize-none text-sm sm:text-base"
                placeholder="Tell us about your septic system, any problems you're experiencing, or questions you have..."
              />
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-primary-accent to-secondary-accent hover:from-secondary-accent hover:to-primary-accent text-white font-bold py-4 sm:py-5 px-6 sm:px-8 rounded-xl sm:rounded-2xl transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 sm:h-6 sm:w-6 border-b-2 border-white"></div>
                  <span className="text-base sm:text-lg">Submitting...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="text-base sm:text-lg">Get Free Estimate</span>
                </>
              )}
            </motion.button>
          </motion.div>

          <motion.p 
            className="text-xs text-gray-500 text-center bg-gray-50/50 rounded-lg sm:rounded-xl p-2 sm:p-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            By submitting this form, you agree to be contacted by Septic Cheetah regarding your service request.
          </motion.p>
        </form>
      </div>
    </motion.div>
  );
}
