'use client';

import { useState } from 'react';
import { AlertTriangle, Plus, Minus } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

const faqData = [
  {
    question: "What services does Septic Cheetah offer?",
    answer: "We provide comprehensive septic services including septic tank pumping/cleaning, new system installation, emergency repairs, septic inspections, drain field repairs, grease trap services, portable toilet rentals, and excavation services. We're your one-stop solution for all septic system needs in the Austin area."
  },
  {
    question: "How often should I have my septic tank pumped?",
    answer: "Most residential septic tanks should be pumped every 3-5 years, but this depends on household size, tank size, and usage patterns. We recommend regular inspections to determine the optimal pumping schedule for your specific system and help prevent costly emergencies."
  },
  {
    question: "Do you offer 24/7 emergency services?",
    answer: "Yes! Septic emergencies don't wait for business hours. We provide 24/7 emergency response for critical issues like septic tank overflows, backups, and system failures. Call us immediately if you're experiencing a septic emergency."
  },
  {
    question: "What areas do you serve?",
    answer: "We serve a 100-mile radius from Cedar Park, covering Travis, Williamson, Burnet, and Hays counties. This includes Austin, Cedar Park, Leander, Georgetown, Round Rock, Pflugerville, Spicewood, Driftwood, Dripping Springs, Liberty Hill, Bertram, and many more communities."
  },
  {
    question: "What makes Septic Cheetah different from other companies?",
    answer: "We're a locally-owned, family-run business that combines fast response times with quality workmanship. Our 'Cheetah speed' means quick service without cutting corners. We provide clear communication, fair pricing, and build lasting relationships with our community."
  },
  {
    question: "How much do your services cost?",
    answer: "Pricing varies depending on the specific service, system size, and location. We provide transparent, upfront estimates with no hidden fees. Contact us for a free quote tailored to your specific septic needs."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, Septic Cheetah is fully licensed and insured. We maintain all required state and local licenses and carry comprehensive insurance coverage to protect both our customers and our team."
  },
  {
    question: "How quickly can you respond to service calls?",
    answer: "For standard service calls, we typically provide same-day response. For emergencies, we offer immediate response 24/7. Our goal is to get to you quickly while ensuring we do the job right the first time."
  },
  {
    question: "What should I do if my septic system is backing up?",
    answer: "If you're experiencing a septic backup, stop using water immediately and call our emergency line. Don't attempt to fix it yourself, as this can worsen the problem and create health hazards. Our emergency team will respond quickly to assess and resolve the issue safely."
  },
  {
    question: "Do you provide warranties on your work?",
    answer: "Yes, we stand behind our work with comprehensive warranties. The specific warranty terms depend on the type of service performed. We'll clearly explain all warranty details before beginning any work, so you know exactly what's covered."
  }
];

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border border-white/20 rounded-xl sm:rounded-2xl overflow-hidden bg-primary-dark/60 backdrop-blur-sm hover:border-primary-accent/50 transition-all duration-300">
      <button
        onClick={onClick}
        className="w-full px-4 sm:px-6 py-4 sm:py-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors duration-200"
      >
        <h3 className="text-base sm:text-lg font-semibold text-white pr-4">{question}</h3>
        <div className="flex-shrink-0">
          {isOpen ? (
            <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-primary-accent transition-transform duration-200" />
          ) : (
            <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-primary-accent transition-transform duration-200" />
          )}
        </div>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-4 sm:px-6 pb-4 sm:pb-6">
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 sm:py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="septic-max-width px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary-accent/10 text-primary-accent rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6 text-sm sm:text-base">
            <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="font-medium">Common Questions</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-slate-900">Frequently Asked</span>
            <span className="block bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Get quick answers to the most common questions about our septic services, pricing, and process
          </p>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary-dark via-primary-accent to-secondary-accent rounded-2xl sm:rounded-3xl p-1">
            <div className="bg-primary-dark rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <div className="space-y-4 sm:space-y-6">
                {faqData.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openFAQ === index}
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  />
                ))}
              </div>
              
              {/* Still Have Questions CTA */}
              <div className="mt-8 sm:mt-12 text-center">
                <div className="bg-primary-accent/20 border border-primary-accent/40 rounded-xl sm:rounded-2xl p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                    Still Have Questions?
                  </h3>
                  <p className="text-slate-300 mb-6 text-sm sm:text-base">
                    Our experienced team is here to help. Contact us for personalized answers and free estimates.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="bg-primary-accent hover:bg-secondary-accent text-primary-dark font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Call Us Now
                    </a>
                    <a
                      href="#contact-form"
                      className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 hover:scale-105"
                    >
                      Get Free Estimate
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}