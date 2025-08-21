import { Metadata } from 'next';
import { Shield, Lock, Eye, FileText, UserCheck, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy - Septic Cheetah',
  description: 'Learn how Septic Cheetah protects your personal information and privacy when you use our septic services.',
  openGraph: {
    title: 'Privacy Policy - Septic Cheetah',
    description: 'Your privacy matters to us. Read our comprehensive privacy policy.',
    url: '/privacy'
  }
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark via-primary-accent to-secondary-accent py-16">
        <div className="container mx-auto px-4 max-w-[1540px] text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6">
            <Shield className="w-5 h-5 text-white" />
            <span className="text-white font-medium">Your Privacy Matters</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            At Septic Cheetah, we are committed to protecting your privacy and personal information. 
            This policy explains how we collect, use, and safeguard your data.
          </p>
          <div className="mt-6 text-white/80">
            <p className="text-sm">Effective Date: August 21, 2025</p>
            <p className="text-sm">Last Updated: August 21, 2025</p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            
            {/* Introduction */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary-accent/20 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary-accent" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Introduction</h2>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                Septic Cheetah LLC (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates septic system services in Austin, Cedar Park, Leander, Georgetown, Round Rock, Pflugerville, and surrounding areas in Texas. We are committed to protecting the privacy and security of our customers&apos; personal information.
              </p>
              <p className="text-slate-700 leading-relaxed">
                This Privacy Policy explains how we collect, use, disclose, and protect information when you use our services, visit our website, or communicate with us. By using our services, you consent to the practices described in this policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <UserCheck className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Information We Collect</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Personal Information</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>Contact Information:</strong> Name, phone number, email address, mailing address</li>
                    <li>• <strong>Service Address:</strong> Property address where septic services are performed</li>
                    <li>• <strong>Payment Information:</strong> Billing address, payment method details (processed securely through third-party payment processors)</li>
                    <li>• <strong>Service Details:</strong> Type of septic service requested, service history, property specifications</li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Automatically Collected Information</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>Website Usage:</strong> IP address, browser type, device information, pages visited</li>
                    <li>• <strong>Cookies and Tracking:</strong> Cookies, web beacons, and similar technologies for website functionality</li>
                    <li>• <strong>Communication Records:</strong> Phone call records, email correspondence, chat logs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">How We Use Your Information</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-primary-accent/10 to-secondary-accent/10 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Service Delivery</h3>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>• Schedule and perform septic services</li>
                    <li>• Communicate about appointments and service updates</li>
                    <li>• Process payments and maintain service records</li>
                    <li>• Provide customer support and emergency services</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Business Operations</h3>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>• Improve our services and website functionality</li>
                    <li>• Send service reminders and maintenance notifications</li>
                    <li>• Conduct quality assurance and training</li>
                    <li>• Comply with legal and regulatory requirements</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Marketing Communications</h3>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>• Send promotional offers and service updates (with consent)</li>
                    <li>• Provide seasonal maintenance reminders</li>
                    <li>• Share educational content about septic systems</li>
                    <li>• Request feedback and reviews</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Legal Compliance</h3>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>• Maintain records for regulatory compliance</li>
                    <li>• Respond to legal requests and court orders</li>
                    <li>• Protect against fraud and unauthorized access</li>
                    <li>• Enforce our terms of service</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Information Sharing and Disclosure</h2>
              </div>
              
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-amber-800 mb-2">We Do Not Sell Your Personal Information</h3>
                    <p className="text-amber-700">
                      Septic Cheetah does not sell, rent, or trade your personal information to third parties for their marketing purposes.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-slate-900 mb-4">We may share your information in the following circumstances:</h3>
              <div className="space-y-4">
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Service Providers</h4>
                  <p className="text-slate-700 text-sm">Third-party contractors, payment processors, and technology providers who assist in delivering our services under confidentiality agreements.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Legal Requirements</h4>
                  <p className="text-slate-700 text-sm">When required by law, court order, or government regulation, or to protect our legal rights and safety.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Business Transfers</h4>
                  <p className="text-slate-700 text-sm">In connection with a merger, acquisition, or sale of business assets, with appropriate safeguards for your information.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Emergency Situations</h4>
                  <p className="text-slate-700 text-sm">To protect the health, safety, or rights of our customers, employees, or the public.</p>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <Lock className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Data Security</h2>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Technical Safeguards</h4>
                  <ul className="text-slate-700 text-sm space-y-1">
                    <li>• Encrypted data transmission and storage</li>
                    <li>• Secure payment processing systems</li>
                    <li>• Regular security updates and monitoring</li>
                    <li>• Access controls and authentication</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Administrative Safeguards</h4>
                  <ul className="text-slate-700 text-sm space-y-1">
                    <li>• Employee privacy training and agreements</li>
                    <li>• Limited access to personal information</li>
                    <li>• Regular security policy reviews</li>
                    <li>• Incident response procedures</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center">
                  <UserCheck className="w-6 h-6 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Your Privacy Rights</h2>
              </div>
              <p className="text-slate-700 leading-relaxed mb-6">
                You have the following rights regarding your personal information:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-primary-accent/10 to-secondary-accent/10 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Access and Correction</h4>
                    <p className="text-slate-700 text-sm">Request access to your personal information and correction of inaccurate data.</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Marketing Opt-Out</h4>
                    <p className="text-slate-700 text-sm">Unsubscribe from marketing communications at any time.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Data Portability</h4>
                    <p className="text-slate-700 text-sm">Request a copy of your personal information in a portable format.</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/10 to-violet-500/10 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Account Deletion</h4>
                    <p className="text-slate-700 text-sm">Request deletion of your personal information, subject to legal retention requirements.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Us About Privacy</h2>
              <div className="bg-gradient-to-br from-primary-accent/10 to-secondary-accent/10 rounded-lg p-6">
                <p className="text-slate-700 mb-4">
                  If you have questions about this Privacy Policy or want to exercise your privacy rights, please contact us:
                </p>
                <div className="space-y-2 text-slate-700">
                  <p><strong>Septic Cheetah LLC</strong></p>
                  <p>2204 Inks Cv, Cedar Park, TX 78613</p>
                  <p>Phone: (512) 969-9655</p>
                  <p>Email: privacy@septiccheetah.com</p>
                </div>
              </div>
            </div>

            {/* Changes to Policy */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-slate-700 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes by posting the updated policy on our website and updating the &quot;Last Updated&quot; date. Your continued use of our services after any changes constitutes acceptance of the updated policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}