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
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          {/* Background Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Content - Compact Size */}
          <motion.div
            className="relative bg-white rounded-xl shadow-2xl max-w-sm w-full"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header - Compact */}
            <div className="relative bg-gradient-to-r from-red-600 to-red-700 text-white p-4 rounded-t-xl">
              {/* Close Button - More Prominent */}
              <button
                onClick={onClose}
                className="absolute top-2 right-2 p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200 z-20"
                aria-label="Close"
              >
                <X className="w-4 h-4 text-white" />
              </button>

              <div className="text-center pr-8">
                <AlertTriangle className="w-8 h-8 text-white mx-auto mb-2" />
                <h2 className="text-lg font-bold">Emergency Service</h2>
                <p className="text-red-100 text-sm">24/7 Immediate Response</p>
              </div>
            </div>

            {/* Content - Minimal */}
            <div className="p-4 space-y-4">
              {/* Emergency Situations - Simplified */}
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-3">
                  Call immediately for:
                </p>
                <div className="text-xs text-gray-500 space-y-1 mb-4">
                  <div>• Sewage backup in home</div>
                  <div>• Septic overflow on property</div>
                  <div>• Complete system failure</div>
                  <div>• Health hazard situations</div>
                </div>
              </div>

              {/* Emergency Contact - Prominent */}
              <motion.a
                href={`tel:${CONTACT_INFO.phone}`}
                onClick={() => {
                  trackPhoneCall('emergency_modal');
                  onClose();
                }}
                className="block w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-3 px-4 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <div>
                    <div className="text-xs">CALL NOW</div>
                    <div className="text-lg font-black">{CONTACT_INFO.phone}</div>
                  </div>
                </div>
              </motion.a>

              {/* Simple Info */}
              <div className="text-center text-xs text-gray-500 border-t pt-3">
                <p>Licensed • Insured • Central Texas</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
