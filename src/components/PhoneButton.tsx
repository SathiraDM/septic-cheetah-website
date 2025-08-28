'use client';

import { AlertTriangle } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import { trackPhoneCall } from '@/lib/utils';

export default function PhoneButton() {
  return (
    <a
      href={`tel:${CONTACT_INFO.emergencyPhone}`}
      onClick={() => trackPhoneCall('sticky_mobile_emergency')}
      className="sticky-phone bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white flex items-center justify-center space-x-2 w-16 h-16 rounded-full shadow-2xl md:hidden transition-all duration-300"
      aria-label="Call Emergency Line"
    >
      <AlertTriangle className="w-6 h-6" />
    </a>
  );
}