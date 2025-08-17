import { create } from 'zustand';
import { trackEvent } from '@/lib/utils';

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  urgency: string;
  message: string;
  address?: string;
}

interface ContactFormState {
  // State
  formData: ContactFormData;
  isSubmitting: boolean;
  errors: string[];
  submitCount: number;
  showSuccess: boolean;

  // Actions
  updateField: (field: keyof ContactFormData, value: string) => void;
  setErrors: (errors: string[]) => void;
  submitForm: () => Promise<boolean>;
  resetForm: () => void;
  dismissSuccess: () => void;

  // Computed values
  isValid: boolean;
  canSubmit: boolean;
}

export const useContactFormStore = create<ContactFormState>((set, get) => ({
  // Initial state
  formData: {
    name: '',
    phone: '',
    email: '',
    service: '',
    urgency: '',
    message: '',
    address: ''
  },
  isSubmitting: false,
  errors: [],
  submitCount: 0,
  showSuccess: false,

  // Actions
  updateField: (field, value) => set((state) => ({
    formData: { ...state.formData, [field]: value },
    errors: state.errors.filter(error => !error.toLowerCase().includes(field.toLowerCase()))
  })),

  setErrors: (errors) => set({ errors }),

  submitForm: async () => {
    const { formData, submitCount } = get();
    set({ isSubmitting: true, errors: [] });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();

      if (result.success) {
        // Track successful submission
        trackEvent('form_submission_success', {
          service: formData.service,
          urgency: formData.urgency,
          attempt: submitCount + 1
        });

        set({ 
          submitCount: submitCount + 1,
          isSubmitting: false,
          showSuccess: true
        });

        // Reset form after delay
        setTimeout(() => {
          get().resetForm();
        }, 5000);

        return true;
      } else {
        set({ 
          errors: [result.message || 'Submission failed'],
          isSubmitting: false 
        });
        return false;
      }
    } catch (error) {
      console.error('Form submission error:', error);
      
      trackEvent('form_submission_error', {
        error: error instanceof Error ? error.message : 'Unknown error',
        attempt: submitCount + 1
      });

      set({ 
        errors: ['Network error. Please try again or call us directly.'],
        isSubmitting: false 
      });
      return false;
    }
  },

  resetForm: () => set({
    formData: {
      name: '',
      phone: '',
      email: '',
      service: '',
      urgency: '',
      message: '',
      address: ''
    },
    errors: [],
    isSubmitting: false,
    showSuccess: false
  }),

  dismissSuccess: () => set({ showSuccess: false }),

  // Computed values
  get isValid() {
    const { formData } = get();
    return Boolean(
      formData.name.trim().length >= 2 &&
      formData.phone.trim().length >= 10 &&
      formData.email.includes('@') &&
      formData.service
    );
  },

  get canSubmit() {
    const { isValid, isSubmitting } = get();
    return isValid && !isSubmitting;
  }
}));