'use client';

import React from 'react';
import { AlertTriangle, Phone, RefreshCw } from 'lucide-react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ServiceErrorBoundary extends React.Component<
  React.PropsWithChildren<{}>,
  ErrorBoundaryState
> {
  constructor(props: React.PropsWithChildren<{}>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Service component error:', error, errorInfo);
    
    // Track error in analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'component_error', {
        error_message: error.message,
        component: 'ServiceErrorBoundary'
      });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-state bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="text-red-800 font-semibold text-lg mb-2">Something went wrong</h3>
          <p className="text-red-600 mb-4">
            We're experiencing technical difficulties. Please call us directly for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button 
              className="btn-emergency inline-flex items-center justify-center space-x-2"
              onClick={() => window.location.href = 'tel:+15551234567'}
            >
              <Phone className="w-4 h-4" />
              <span>Call Now: (555) 123-4567</span>
            </button>
            <button 
              className="btn-secondary inline-flex items-center justify-center space-x-2"
              onClick={() => window.location.reload()}
            >
              <RefreshCw className="w-4 h-4" />
              <span>Try Again</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}