'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, AlertTriangle } from 'lucide-react';
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
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={handleBackdropClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Clean Minimal Modal */}
          <motion.div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '420px' }}
          >
            {/* Simple Header */}
            <div className="relative bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-6 rounded-t-2xl">
              {/* Clean Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-1.5 rounded-lg bg-white/20 hover:bg-white/30 transition-colors duration-200 cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4 text-white" />
              </button>

              {/* Minimal Header Content - Properly Centered */}
              <div className="text-center">
                <motion.div
                  className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <AlertTriangle className="w-6 h-6 text-white" />
                </motion.div>
                <h2 className="text-xl font-bold mb-1">Emergency</h2>
                <p className="text-red-100 text-sm">24/7 Response</p>
              </div>
            </div>

            {/* Simple Content */}
            <div className="p-6 space-y-5">
              {/* Minimal Emergency List */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                  Call For:
                </h3>
                <div className="space-y-2">
                  {[
                    'Sewage backup',
                    'System overflow', 
                    'Complete failure',
                    'Health hazard'
                  ].map((situation, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg border border-red-200"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-sm font-medium text-red-900">{situation}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Clean Call Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  onClick={() => {
                    trackPhoneCall('emergency_modal');
                    onClose();
                  }}
                  className="block w-full relative overflow-hidden rounded-xl group"
                >
                  <div className="bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-4 px-4 rounded-xl shadow-lg transition-all duration-300 group-hover:scale-[1.02] before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-white/10 before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300 before:rounded-[inherit]">
                    <div className="flex items-center justify-center space-x-3 relative z-10">
                      <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                      <div className="text-center">
                        <div className="text-xs font-semibold text-red-100 uppercase tracking-wide">Call Now</div>
                        <div className="text-lg font-black">{CONTACT_INFO.phone}</div>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
