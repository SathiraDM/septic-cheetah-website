'use client';

import { Phone } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import { trackPhoneCall } from '@/lib/utils';

export default function PhoneButton() {
  return (
    <a
      href={`tel:${CONTACT_INFO.phone}`}
      onClick={() => trackPhoneCall('sticky_mobile')}
      className="sticky-phone btn-primary flex items-center justify-center space-x-2 w-16 h-16 rounded-full shadow-2xl md:hidden"
      aria-label="Call Septic Cheetah"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
}