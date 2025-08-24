import { Metadata } from 'next';
import { Cookie, Settings, BarChart3, Shield, Eye, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cookie Policy - Septic Cheetah',
  description: 'Learn about how Septic Cheetah uses cookies and tracking technologies on our website.',
  openGraph: {
    title: 'Cookie Policy - Septic Cheetah',
    description: 'Understand our use of cookies and how to manage your preferences.',
    url: '/cookies'
  }
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark via-primary-accent to-secondary-accent py-16">
        <div className="septic-max-width text-center container-320">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6">
            <Cookie className="w-5 h-5 text-white icon-320-sm" />
            <span className="text-white font-medium">Cookie Usage & Preferences</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 hero-title-320">
            Cookie Policy
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto hero-subtitle-320">
            This policy explains how Septic Cheetah uses cookies and similar technologies 
            to enhance your website experience and improve our services.
          </p>
          <div className="mt-6 text-white/80">
            <p className="text-sm">Effective Date: August 21, 2025</p>
            <p className="text-sm">Last Updated: August 21, 2025</p>
          </div>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="py-16">
        <div className="septic-max-width">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            
            {/* What Are Cookies */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary-accent/20 rounded-xl flex items-center justify-center">
                  <Cookie className="w-6 h-6 text-primary-accent" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">What Are Cookies?</h2>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners about how users interact with their sites.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-blue-800 mb-3">How Septic Cheetah Uses Cookies</h3>
                <p className="text-blue-700 text-sm">
                  We use cookies to enhance your browsing experience, analyze website traffic, personalize content, and provide better customer service. We also use cookies to remember your preferences and to help us understand which areas of our website are most useful and popular.
                </p>
              </div>
            </div>

            {/* Types of Cookies */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <Settings className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Types of Cookies We Use</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                    <Shield className="w-5 h-5 text-green-600 mr-2" />
                    Essential Cookies
                  </h3>
                  <p className="text-slate-700 text-sm mb-3">
                    These cookies are necessary for the website to function properly and cannot be disabled.
                  </p>
                  <ul className="space-y-1 text-slate-700 text-sm">
                    <li>• Security and authentication</li>
                    <li>• Session management</li>
                    <li>• Load balancing</li>
                    <li>• Form submission functionality</li>
                  </ul>
                  <div className="mt-3 text-xs text-green-700 bg-green-50 rounded px-2 py-1">
                    <strong>Duration:</strong> Session or up to 1 year
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                    <BarChart3 className="w-5 h-5 text-blue-600 mr-2" />
                    Analytics Cookies
                  </h3>
                  <p className="text-slate-700 text-sm mb-3">
                    These cookies help us understand how visitors interact with our website.
                  </p>
                  <ul className="space-y-1 text-slate-700 text-sm">
                    <li>• Google Analytics</li>
                    <li>• Page view tracking</li>
                    <li>• User behavior analysis</li>
                    <li>• Website performance monitoring</li>
                  </ul>
                  <div className="mt-3 text-xs text-blue-700 bg-blue-50 rounded px-2 py-1">
                    <strong>Duration:</strong> Up to 2 years
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                    <Eye className="w-5 h-5 text-purple-600 mr-2" />
                    Functional Cookies
                  </h3>
                  <p className="text-slate-700 text-sm mb-3">
                    These cookies enable enhanced functionality and personalization.
                  </p>
                  <ul className="space-y-1 text-slate-700 text-sm">
                    <li>• Language preferences</li>
                    <li>• User interface customization</li>
                    <li>• Contact form pre-filling</li>
                    <li>• Chat widget functionality</li>
                  </ul>
                  <div className="mt-3 text-xs text-purple-700 bg-purple-50 rounded px-2 py-1">
                    <strong>Duration:</strong> Session to 1 year
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                    <BarChart3 className="w-5 h-5 text-orange-600 mr-2" />
                    Marketing Cookies
                  </h3>
                  <p className="text-slate-700 text-sm mb-3">
                    These cookies are used to deliver relevant advertisements and track campaign effectiveness.
                  </p>
                  <ul className="space-y-1 text-slate-700 text-sm">
                    <li>• Google Ads conversion tracking</li>
                    <li>• Facebook Pixel</li>
                    <li>• Retargeting campaigns</li>
                    <li>• Social media integration</li>
                  </ul>
                  <div className="mt-3 text-xs text-orange-700 bg-orange-50 rounded px-2 py-1">
                    <strong>Duration:</strong> 30 days to 1 year
                  </div>
                </div>
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Third-Party Cookies and Services</h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                We work with trusted third-party service providers who may place cookies on your device. These services help us provide better customer service, analyze website usage, and deliver relevant content.
              </p>
              
              <div className="space-y-4">
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Google Services</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-slate-900 mb-2">Google Analytics</h4>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• Website traffic analysis</li>
                        <li>• User behavior tracking</li>
                        <li>• Performance monitoring</li>
                      </ul>
                      <p className="text-xs text-slate-600 mt-2">
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          Google Privacy Policy
                        </a>
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-2">Google Ads</h4>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• Conversion tracking</li>
                        <li>• Remarketing campaigns</li>
                        <li>• Ad performance measurement</li>
                      </ul>
                      <p className="text-xs text-slate-600 mt-2">
                        <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          Google Ads Policy
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Social Media Platforms</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-slate-900 mb-2">Facebook/Meta</h4>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• Facebook Pixel tracking</li>
                        <li>• Social media integration</li>
                        <li>• Custom audience creation</li>
                      </ul>
                      <p className="text-xs text-slate-600 mt-2">
                        <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          Facebook Privacy Policy
                        </a>
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-2">Other Platforms</h4>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• LinkedIn advertising</li>
                        <li>• Twitter integration</li>
                        <li>• YouTube embedded content</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Customer Service Tools</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-slate-900 mb-2">Live Chat</h4>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• Chat widget functionality</li>
                        <li>• Session management</li>
                        <li>• Customer support integration</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-2">Customer Support</h4>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• Help desk integration</li>
                        <li>• Ticket system cookies</li>
                        <li>• User preference storage</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Managing Cookies */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <Settings className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Managing Your Cookie Preferences</h2>
              </div>
              
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-amber-800 mb-2">Important Note</h3>
                    <p className="text-amber-700 text-sm">
                      Disabling certain cookies may impact your ability to use some features of our website. Essential cookies cannot be disabled as they are necessary for basic website functionality.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Browser Settings</h3>
                  <p className="text-slate-700 text-sm mb-3">
                    You can control cookies through your browser settings:
                  </p>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>• <strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
                    <li>• <strong>Firefox:</strong> Options → Privacy & Security</li>
                    <li>• <strong>Safari:</strong> Preferences → Privacy</li>
                    <li>• <strong>Edge:</strong> Settings → Cookies and Site Permissions</li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Opt-Out Options</h3>
                  <p className="text-slate-700 text-sm mb-3">
                    You can opt out of specific tracking services:
                  </p>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>• <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Analytics Opt-out</a></li>
                    <li>• <a href="https://www.facebook.com/settings?tab=ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Facebook Ad Preferences</a></li>
                    <li>• <a href="http://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">NAI Opt-out Tool</a></li>
                    <li>• <a href="http://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DAA Opt-out Tool</a></li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-primary-accent/10 border border-primary-accent/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Cookie Consent Management</h3>
                <p className="text-slate-700 text-sm mb-3">
                  When you first visit our website, you&apos;ll see a cookie banner that allows you to:
                </p>
                <ul className="space-y-1 text-slate-700 text-sm">
                  <li>• Accept all cookies</li>
                  <li>• Customize your cookie preferences</li>
                  <li>• Accept only essential cookies</li>
                  <li>• Learn more about our cookie usage</li>
                </ul>
                <p className="text-slate-700 text-sm mt-3">
                  You can change your preferences at any time by accessing the cookie settings in our website footer or by contacting us directly.
                </p>
              </div>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Data Retention and Security</h2>
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">How Long We Keep Cookie Data</h3>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>• <strong>Session Cookies:</strong> Deleted when you close your browser</li>
                    <li>• <strong>Persistent Cookies:</strong> Stored for specific periods based on cookie type</li>
                    <li>• <strong>Analytics Data:</strong> Aggregated and anonymized after 26 months</li>
                    <li>• <strong>Marketing Data:</strong> Retained according to campaign requirements and legal obligations</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Security Measures</h3>
                  <p className="text-blue-700 text-sm mb-3">
                    We implement appropriate security measures to protect cookie data:
                  </p>
                  <ul className="space-y-1 text-blue-700 text-sm">
                    <li>• Encrypted data transmission (HTTPS)</li>
                    <li>• Secure cookie flags where appropriate</li>
                    <li>• Regular security audits and updates</li>
                    <li>• Limited access to cookie data</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Questions About Cookies?</h2>
              <div className="bg-gradient-to-br from-primary-accent/10 to-secondary-accent/10 rounded-lg p-6">
                <p className="text-slate-700 mb-4">
                  If you have questions about our use of cookies or want to exercise your rights regarding cookie data, please contact us:
                </p>
                <div className="space-y-2 text-slate-700">
                  <p><strong>Septic Cheetah LLC</strong></p>
                  <p>2204 Inks Cv, Cedar Park, TX 78613</p>
                  <p>Phone: (512) 969-9655</p>
                  <p>Email: privacy@septiccheetah.com</p>
                  <p>Website: www.septiccheetah.com</p>
                </div>
              </div>
            </div>

            {/* Updates to Policy */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Updates to This Cookie Policy</h2>
              <div className="bg-slate-50 rounded-lg p-6">
                <p className="text-slate-700 text-sm">
                  We may update this Cookie Policy from time to time to reflect changes in technology, legal requirements, or our business practices. When we make significant changes, we will notify you by posting the updated policy on our website and updating the &quot;Last Updated&quot; date. We encourage you to review this policy periodically to stay informed about our use of cookies and related technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}