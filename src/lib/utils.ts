import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`
  }
  return phone
}

export function trackEvent(eventName: string, parameters: any) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, parameters)
  }
}

export function trackPhoneCall(source: string) {
  trackEvent('phone_call', {
    event_category: 'contact',
    event_label: source,
    value: 1
  })
}

export function trackFormSubmit(formType: string) {
  trackEvent('form_submit', {
    event_category: 'lead',
    event_label: formType,
    value: 1
  })
}

// Service interest tracking
export function trackServiceInterest(service: string, action: string) {
  trackEvent('service_interest', {
    event_category: 'engagement',
    event_label: `${service}_${action}`,
    service_type: service,
    action: action
  })
}

// Emergency contact tracking
export function trackEmergencyContact(method: 'phone' | 'form') {
  trackEvent('emergency_contact', {
    event_category: 'emergency',
    event_label: method,
    value: 5 // Higher value for emergency contacts
  })
}