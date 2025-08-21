import { Shield, Award, Users, Clock, CheckCircle } from 'lucide-react';

const trustSignals = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "State licensed #12345, $2M liability insurance",
    color: "text-green-600"
  },
  {
    icon: Award,
    title: "BBB A+ Rated",
    description: "Better Business Bureau accredited since 2010",
    color: "text-blue-600"
  },
  {
    icon: Users,
    title: "2,000+ Customers Served",
    description: "Over 15 years of trusted service in the community",
    color: "text-purple-600"
  },
  {
    icon: Clock,
    title: "24/7 Emergency Service",
    description: "Always available when you need us most",
    color: "text-red-600"
  },
  {
    icon: CheckCircle,
    title: "100% Satisfaction Guarantee",
    description: "We stand behind our work with a complete guarantee",
    color: "text-primary-accent"
  }
];

export default function TrustSignals() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-[1540px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
            Why Choose Septic Cheetah?
          </h2>
          <p className="text-xl text-text-primary max-w-2xl mx-auto">
            We&apos;ve earned our reputation through years of reliable service and customer satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {trustSignals.map((signal, index) => {
            const IconComponent = signal.icon;
            return (
              <div 
                key={index}
                className="professional-card text-center p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center">
                  <IconComponent className={`w-8 h-8 ${signal.color}`} />
                </div>
                <h3 className="font-bold text-primary-dark mb-2">{signal.title}</h3>
                <p className="text-sm text-text-primary">{signal.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}