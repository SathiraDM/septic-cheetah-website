import { Metadata } from 'next';
import { Scale, FileText, AlertTriangle, Shield, Gavel, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service - Septic Cheetah',
  description: 'Read our Terms of Service governing the use of Septic Cheetah septic system services and website.',
  openGraph: {
    title: 'Terms of Service - Septic Cheetah',
    description: 'Terms and conditions for using our septic services in Austin, TX.',
    url: '/terms'
  }
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark via-primary-accent to-secondary-accent py-16">
        <div className="septic-max-width text-center container-320">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6">
            <Scale className="w-5 h-5 text-white icon-320-sm" />
            <span className="text-white font-medium">Legal Terms & Conditions</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 hero-title-320">
            Terms of Service
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto hero-subtitle-320">
            These terms govern your use of Septic Cheetah&apos;s septic system services and website. 
            Please read carefully before using our services.
          </p>
          <div className="mt-6 text-white/80">
            <p className="text-sm">Effective Date: August 21, 2025</p>
            <p className="text-sm">Last Updated: August 21, 2025</p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="septic-max-width">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            
            {/* Acceptance of Terms */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary-accent/20 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary-accent" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Acceptance of Terms</h2>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                By accessing our website, scheduling services, or engaging Septic Cheetah LLC (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) for septic system services, you (&quot;Customer,&quot; &quot;you,&quot; or &quot;your&quot;) agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, you may not use our services.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                  <p className="text-amber-800 text-sm">
                    <strong>Important:</strong> These Terms constitute a legally binding agreement. Please read them carefully and contact us if you have any questions before proceeding.
                  </p>
                </div>
              </div>
            </div>

            {/* Services Description */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Services Provided</h2>
              </div>
              
              <p className="text-slate-700 leading-relaxed mb-6">
                Septic Cheetah provides professional septic system services throughout Austin, Cedar Park, Leander, Georgetown, Round Rock, Pflugerville, and surrounding areas within a 100-mile radius of our Cedar Park location.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-50 rounded-lg p-4">
                  <h3 className="font-semibold text-slate-900 mb-3">Core Services Include:</h3>
                  <ul className="space-y-1 text-slate-700 text-sm">
                    <li>• Septic tank pumping and cleaning</li>
                    <li>• Septic system installation and replacement</li>
                    <li>• Emergency septic repairs</li>
                    <li>• Septic inspections and maintenance</li>
                    <li>• Drain field repairs and services</li>
                    <li>• Septic pump installation and repair</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <h3 className="font-semibold text-slate-900 mb-3">Additional Services:</h3>
                  <ul className="space-y-1 text-slate-700 text-sm">
                    <li>• Distribution box repairs</li>
                    <li>• Grease trap services</li>
                    <li>• Portable toilet rentals</li>
                    <li>• Excavation services</li>
                    <li>• Soil testing and analysis</li>
                    <li>• Permit assistance and compliance</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary-accent/10 border border-primary-accent/30 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">Service Availability</h3>
                <p className="text-slate-700 text-sm">
                  We operate 24 hours daily with no holiday closures. Emergency services are available 24/7 for septic tank overflows and critical system failures. Regular service scheduling is subject to availability and weather conditions.
                </p>
              </div>
            </div>

            {/* Service Agreements and Scheduling */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <Gavel className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Service Agreements and Scheduling</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Service Estimates and Pricing</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>Estimates:</strong> Free estimates are provided for most services. Estimates are valid for 30 days unless otherwise specified.</li>
                    <li>• <strong>Pricing:</strong> Final pricing may vary based on actual site conditions, scope of work, and unforeseen circumstances discovered during service.</li>
                    <li>• <strong>Emergency Services:</strong> Emergency service calls may incur additional fees for after-hours, weekend, or holiday response.</li>
                    <li>• <strong>Payment Terms:</strong> Payment is due upon completion of services unless prior arrangements have been made in writing.</li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Scheduling and Access</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>Appointments:</strong> Service appointments are scheduled based on availability and weather conditions.</li>
                    <li>• <strong>Property Access:</strong> Customer must provide safe and reasonable access to septic system components.</li>
                    <li>• <strong>Cancellations:</strong> Cancellations must be made at least 24 hours in advance to avoid cancellation fees.</li>
                    <li>• <strong>Weather Delays:</strong> Services may be postponed due to unsafe weather conditions or ground conditions.</li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Customer Responsibilities</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>System Location:</strong> Provide accurate information about septic system location and components.</li>
                    <li>• <strong>Site Preparation:</strong> Ensure clear access to septic system components and remove obstacles as requested.</li>
                    <li>• <strong>Safety:</strong> Secure pets and ensure safe working conditions for our technicians.</li>
                    <li>• <strong>Permits:</strong> Obtain necessary permits for work requiring local authority approval (we can assist with permit applications).</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Warranties and Limitations */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Warranties and Limitations</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Service Warranty</h3>
                  <p className="text-green-700 mb-3">
                    We warrant our workmanship for a period of one (1) year from the date of service completion. This warranty covers defects in our workmanship but does not cover:
                  </p>
                  <ul className="space-y-1 text-green-700 text-sm">
                    <li>• Normal wear and tear of septic system components</li>
                    <li>• Damage caused by improper use or maintenance</li>
                    <li>• Damage from external factors (weather, soil conditions, etc.)</li>
                    <li>• Pre-existing conditions not discovered during initial service</li>
                    <li>• Damage caused by third parties or other contractors</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-red-800 mb-3">Limitation of Liability</h3>
                  <p className="text-red-700 mb-3">
                    Our total liability for any claim arising from our services shall not exceed the amount paid for the specific service that gave rise to the claim. We are not liable for:
                  </p>
                  <ul className="space-y-1 text-red-700 text-sm">
                    <li>• Consequential, incidental, or punitive damages</li>
                    <li>• Lost profits or business interruption</li>
                    <li>• Property damage beyond our direct control</li>
                    <li>• Environmental contamination from pre-existing conditions</li>
                    <li>• Compliance with changing regulatory requirements</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Insurance and Licensing</h3>
                  <p className="text-blue-700 text-sm">
                    Septic Cheetah maintains appropriate general liability insurance and holds all required licenses for septic system services in Texas. Our insurance coverage is primary to any customer insurance policies. Customers are responsible for verifying that our services meet their specific insurance requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Payment Terms and Conditions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Payment Methods</h3>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>• Cash, check, or major credit cards accepted</li>
                    <li>• Electronic payment options available</li>
                    <li>• Payment plans may be available for large projects</li>
                    <li>• Business and municipal accounts may qualify for net payment terms</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Late Payment Policy</h3>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>• Payment is due upon completion of service</li>
                    <li>• Late fees of 1.5% per month may apply to overdue accounts</li>
                    <li>• Collection costs and legal fees may be added to delinquent accounts</li>
                    <li>• Service may be suspended for accounts in default</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Environmental and Safety Compliance */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Environmental and Safety Compliance</h2>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Environmental Responsibility</h3>
                <p className="text-green-700 text-sm mb-3">
                  Septic Cheetah is committed to environmental protection and compliance with all applicable environmental regulations. We:
                </p>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• Dispose of septic waste at licensed treatment facilities</li>
                  <li>• Follow EPA and Texas environmental guidelines</li>
                  <li>• Use environmentally responsible practices and materials</li>
                  <li>• Report environmental incidents as required by law</li>
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-amber-800 mb-3">Safety Requirements</h3>
                <p className="text-amber-700 text-sm mb-3">
                  Safety is our top priority. Customers must:
                </p>
                <ul className="space-y-1 text-amber-700 text-sm">
                  <li>• Keep work areas clear of people and pets during service</li>
                  <li>• Identify and mark utilities, irrigation systems, and buried lines</li>
                  <li>• Provide safe access routes for equipment and personnel</li>
                  <li>• Report any safety hazards or concerns immediately</li>
                </ul>
              </div>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Dispute Resolution</h2>
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Resolution Process</h3>
                <p className="text-slate-700 text-sm mb-3">
                  In the event of a dispute, we encourage the following resolution process:
                </p>
                <ol className="space-y-2 text-slate-700 text-sm list-decimal list-inside">
                  <li><strong>Direct Communication:</strong> Contact us immediately to discuss the issue and seek resolution.</li>
                  <li><strong>Written Documentation:</strong> Provide written notice of the dispute within 30 days of discovery.</li>
                  <li><strong>Good Faith Negotiation:</strong> Both parties will attempt to resolve the dispute through good faith negotiations.</li>
                  <li><strong>Mediation:</strong> If negotiation fails, disputes may be resolved through mediation.</li>
                  <li><strong>Legal Action:</strong> Any legal action must be filed in the appropriate courts of Williamson County, Texas.</li>
                </ol>
                <p className="text-slate-700 text-sm mt-4">
                  <strong>Governing Law:</strong> These Terms are governed by Texas state law. Any legal proceedings will be conducted in English.
                </p>
              </div>
            </div>

            {/* Website Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Website Use Terms</h2>
              <div className="space-y-4">
                <div className="bg-slate-50 rounded-lg p-4">
                  <h3 className="font-semibold text-slate-900 mb-2">Intellectual Property</h3>
                  <p className="text-slate-700 text-sm">All website content, including logos, images, and text, is owned by Septic Cheetah and protected by copyright and trademark laws. Unauthorized use is prohibited.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <h3 className="font-semibold text-slate-900 mb-2">Prohibited Uses</h3>
                  <p className="text-slate-700 text-sm">You may not use our website for illegal purposes, to transmit harmful code, or to interfere with website functionality. We reserve the right to terminate access for violations.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <h3 className="font-semibold text-slate-900 mb-2">User Content</h3>
                  <p className="text-slate-700 text-sm">By submitting reviews, testimonials, or other content, you grant us permission to use such content for marketing and promotional purposes.</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
              <div className="bg-gradient-to-br from-primary-accent/10 to-secondary-accent/10 rounded-lg p-6">
                <p className="text-slate-700 mb-4">
                  Questions about these Terms of Service? Contact us:
                </p>
                <div className="space-y-2 text-slate-700">
                  <p><strong>Septic Cheetah LLC</strong></p>
                  <p>2204 Inks Cv, Cedar Park, TX 78613</p>
                  <p>Phone: (512) 969-9655</p>
                  <p>Email: legal@septiccheetah.com</p>
                  <p>Website: www.septiccheetah.com</p>
                </div>
              </div>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to Terms</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <p className="text-blue-700 text-sm">
                  We reserve the right to modify these Terms at any time. Material changes will be posted on our website and will become effective 30 days after posting. Continued use of our services after changes constitutes acceptance of the modified Terms. We recommend reviewing these Terms periodically for updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}