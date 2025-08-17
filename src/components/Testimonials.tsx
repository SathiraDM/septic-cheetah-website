import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';

export default function Testimonials() {
  return (
    <section className="py-20 bg-bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Don&apos;t just take our word for it. Here&apos;s what real customers say about 
            our septic services and emergency response.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 relative">
              <Quote className="w-8 h-8 text-primary-accent/20 absolute top-4 right-4" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-text-primary mb-6 leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="border-t pt-4">
                <div className="font-bold text-primary-dark">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-600">
                  {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary-accent">500+</div>
            <div className="text-sm text-text-primary">Satisfied Customers</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary-accent">15+</div>
            <div className="text-sm text-text-primary">Years Experience</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary-accent">24/7</div>
            <div className="text-sm text-text-primary">Emergency Service</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary-accent">A+</div>
            <div className="text-sm text-text-primary">BBB Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}