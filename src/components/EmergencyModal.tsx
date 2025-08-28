'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, AlertTriangle, Clock, Shield } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import { trackPhoneCall } from '@/lib/utils';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EmergencyModal({ isOpen, onClose }: EmergencyModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Handle escape key
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
          onClick={handleBackdropClick}
        >
          {/* Background Overlay with improved blur and gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-red-900/40 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Modal Content - Compact Design */}
          <motion.div
            className="relative bg-white rounded-xl shadow-2xl max-w-sm w-full overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 30 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gradient Border Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-700 rounded-xl blur opacity-20"></div>
            
            {/* Main Content Container */}
            <div className="relative bg-white rounded-xl">
              {/* Header - Compact */}
              <div className="relative bg-gradient-to-br from-red-600 to-red-700 text-white px-4 py-4 rounded-t-xl">
                {/* Close Button - Compact */}
                <button
                  onClick={onClose}
                  className="absolute top-2 right-2 p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200"
                  aria-label="Close Emergency Modal"
                >
                  <X className="w-4 h-4 text-white" />
                </button>

                {/* Header Content - Compact */}
                <div className="text-center pr-8">
                  <motion.div
                    className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-2"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                  >
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </motion.div>
                  <h2 className="text-lg font-bold mb-1">Emergency Service</h2>
                  <p className="text-red-100 text-sm">24/7 Response</p>
                </div>
              </div>

              {/* Content Section - Compact */}
              <div className="p-4 space-y-4">
                {/* Emergency Situations - Compact */}
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2 text-center">
                    Call For:
                  </h3>
                  <div className="space-y-1.5">
                    {[
                      'Sewage backup',
                      'Septic overflow',
                      'System failure',
                      'Health hazards'
                    ].map((situation, index) => (
                      <motion.div
                        key={index}
                        className="bg-red-50 border border-red-200 rounded-lg px-3 py-1.5 text-red-800 text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        <div className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></div>
                          <span>{situation}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Emergency Contact - Compact */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                >
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    onClick={() => {
                      trackPhoneCall('emergency_modal');
                      onClose();
                    }}
                    className="group block w-full relative overflow-hidden"
                  >
                    <div className="bg-gradient-to-br from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition-all duration-300 group-hover:scale-105">
                      <div className="flex items-center justify-center space-x-2">
                        <Phone className="w-5 h-5" />
                        <div className="text-center">
                          <div className="text-xs font-semibold text-red-100">CALL NOW</div>
                          <div className="text-lg font-black">{CONTACT_INFO.phone}</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>

                {/* Trust Indicators - Compact */}
                <motion.div
                  className="border-t border-gray-200 pt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <div className="flex items-center justify-center space-x-3 text-xs text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Shield className="w-3 h-3 text-green-600" />
                      <span>Licensed</span>
                    </div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="flex items-center space-x-1">
                      <Shield className="w-3 h-3 text-green-600" />
                      <span>Insured</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
