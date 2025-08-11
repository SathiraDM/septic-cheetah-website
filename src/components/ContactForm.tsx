'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
          urgency: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-800 mb-2">
          Thank You!
        </h3>
        <p className="text-green-700 mb-4">
          We received your request and will call you within 2 hours during business hours.
        </p>
        <p className="text-sm text-green-600">
          For immediate emergencies, please call our emergency hotline.
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="mt-4 text-green-600 hover:text-green-800 underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-primary-dark mb-2">
          Get Your Free Estimate
        </h3>
        <p className="text-text-primary">
          Fill out the form below and we'll contact you within 2 hours
        </p>
      </div>

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-center">
          <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
          <span className="text-red-700">
            There was an error submitting your request. Please try again or call us directly.
          </span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="(555) 123-4567"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-text-primary mb-2">
            What service do you need? *
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="form-select"
          >
            <option value="">Select a service...</option>
            <option value="pumping">Septic Pumping/Cleaning</option>
            <option value="installation">New Installation</option>
            <option value="repairs">Emergency Repairs</option>
            <option value="maintenance">Maintenance/Inspection</option>
            <option value="other">Other/Not Sure</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-3">
            When do you need service? *
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { value: 'emergency', label: 'Emergency (ASAP)', color: 'border-red-300 bg-red-50' },
              { value: 'soon', label: 'Within a few days', color: 'border-yellow-300 bg-yellow-50' },
              { value: 'scheduled', label: 'Schedule for later', color: 'border-green-300 bg-green-50' }
            ].map((option) => (
              <label key={option.value} className={`flex items-center p-3 border-2 rounded-lg cursor-pointer transition-all ${
                formData.urgency === option.value 
                  ? `${option.color} border-opacity-100` 
                  : 'border-gray-200 hover:border-gray-300'
              }`}>
                <input
                  type="radio"
                  name="urgency"
                  value={option.value}
                  checked={formData.urgency === option.value}
                  onChange={handleChange}
                  required
                  className="mr-3"
                />
                <span className="text-sm font-medium">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
            Describe your septic issue or needs
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="form-textarea"
            placeholder="Tell us about your septic system, any problems you're experiencing, or questions you have..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Get Free Estimate</span>
            </>
          )}
        </button>

        <p className="text-xs text-gray-600 text-center">
          By submitting this form, you agree to be contacted by Septic Cheetah regarding your service request.
        </p>
      </form>
    </div>
  );
}