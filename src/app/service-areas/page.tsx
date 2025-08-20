'use client';

import { MapPin, Phone, Clock, Shield, Zap, Award, ArrowRight, Star, Users, Truck } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import { trackPhoneCall } from '@/lib/utils';

const serviceAreas = [
  {
    region: "Central Florida",
    description: "Our primary service region with full 24/7 emergency coverage",
    color: "from-blue-600 to-blue-800",
    counties: [
      {
        name: "Orange County",
        cities: ["Orlando", "Winter Park", "Oviedo", "Winter Garden", "Apopka", "Kissimmee", "Sanford", "Altamonte Springs"],
        emergencyAvailable: true,
        responseTime: "1-2 hours"
      },
      {
        name: "Seminole County", 
        cities: ["Sanford", "Altamonte Springs", "Casselberry", "Lake Mary", "Longwood", "Winter Springs", "Oviedo"],
        emergencyAvailable: true,
        responseTime: "1-2 hours"
      }
    ]
  },
  {
    region: "Extended Coverage",
    description: "Regular service with scheduled emergency response",
    color: "from-green-600 to-green-800",
    counties: [
      {
        name: "Volusia County",
        cities: ["Daytona Beach", "DeLand", "Deltona", "Ormond Beach", "New Smyrna Beach", "Port Orange"],
        emergencyAvailable: true,
        responseTime: "2-4 hours"
      },
      {
        name: "Lake County",
        cities: ["Leesburg", "Clermont", "Eustis", "Mount Dora", "Tavares", "Groveland"],
        emergencyAvailable: false,
        responseTime: "Same day"
      }
    ]
  }
];

const serviceFeatures = [
  {
    icon: Zap,
    title: "Rapid Response",
    description: "Emergency services within 1-4 hours depending on location",
    highlight: "24/7 Available"
  },
  {
    icon: Shield,
    title: "Licensed & Bonded",
    description: "Fully licensed, insured, and bonded in all service areas",
    highlight: "State Certified"
  },
  {
    icon: Award,
    title: "Service Excellence",
    description: "Over 15 years of trusted septic services across Central Florida",
    highlight: "15+ Years"
  }
];

const stats = [
  {
    icon: Users,
    value: "5,000+",
    label: "Happy Customers"
  },
  {
    icon: Truck,
    value: "24/7",
    label: "Emergency Service"
  },
  {
    icon: Star,
    value: "4.9",
    label: "Average Rating"
  }
];

export default function ServiceAreas() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Modern Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary-dark/95 to-secondary-accent">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0 bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              animation: 'float 6s ease-in-out infinite'
            }}
          />
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <MapPin className="w-5 h-5 text-primary-accent" />
              <span className="text-sm font-semibold tracking-wide">Serving Central Florida</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Our{' '}
              <span className="bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent">
                Service Areas
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Professional septic services across Central Florida with rapid emergency response and unmatched expertise
            </p>
            
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-3 inline-flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary-accent" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                onClick={() => trackPhoneCall('service_areas_hero')}
                className="inline-flex items-center space-x-3 bg-primary-accent hover:bg-secondary-accent text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group"
              >
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Call {CONTACT_INFO.phone}</span>
              </a>
              
              <button className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-primary-dark font-bold py-4 px-8 rounded-xl transition-all duration-300 group">
                <span>Check Your Area</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements - Fixed to prevent overflow */}
        <div className="absolute top-1/4 left-4 w-20 h-20 bg-white/5 rounded-full animate-pulse hidden lg:block" />
        <div className="absolute bottom-1/4 right-4 w-16 h-16 bg-primary-accent/20 rounded-full animate-bounce hidden lg:block" />
      </section>

      {/* Service Features Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-6xl mx-auto">
            {/* Modern Elegant Header Section */}
            <div className="text-center mb-16">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  <span className="text-primary-dark">Why Choose</span>{' '}
                  <span className="bg-gradient-to-r from-primary-accent via-secondary-accent to-primary-accent bg-clip-text text-transparent bg-300% animate-gradient">
                    Our Service
                  </span>
                </h2>
                
                <p className="text-lg text-gray-600 mb-6 font-light">
                  Professional, reliable, and fast when you need us most
                </p>
                
                <div className="w-16 h-0.5 bg-gradient-to-r from-primary-accent to-secondary-accent mx-auto rounded-full" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {serviceFeatures.map((feature, index) => (
                <div key={index} className="group relative">
                  <div className="relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border-2 border-gray-100 hover:border-primary-accent/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 overflow-hidden">
                    <div className="absolute top-0 right-0 bg-gradient-to-br from-primary-accent to-secondary-accent text-white text-xs font-bold px-4 py-2 rounded-bl-2xl">
                      {feature.highlight}
                    </div>
                    
                    <div className="bg-gradient-to-br from-primary-accent/10 to-secondary-accent/10 w-20 h-20 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                      <feature.icon className="w-10 h-10 text-primary-accent" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-primary-dark mb-4">{feature.title}</h3>
                    <p className="text-text-primary leading-relaxed text-lg">{feature.description}</p>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-accent/5 to-secondary-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Modern Elegant Header Section */}
          <div className="text-center mb-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                <span className="text-primary-dark">Service</span>{' '}
                <span className="bg-gradient-to-r from-primary-accent via-secondary-accent to-primary-accent bg-clip-text text-transparent bg-300% animate-gradient">
                  Coverage Areas
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-6 font-light">
                Residential and commercial service across Central Florida
              </p>
              
              <div className="w-16 h-0.5 bg-gradient-to-r from-primary-accent to-secondary-accent mx-auto rounded-full" />
            </div>
          </div>

          <div className="space-y-12">
            {serviceAreas.map((region, regionIndex) => (
              <div key={regionIndex} className="relative">
                <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border-2 border-gray-100 hover:border-primary-accent/20 transition-all duration-500 overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${region.color}`} />
                  
                  <div className="mb-10">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${region.color} flex items-center justify-center`}>
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-primary-dark">{region.region}</h3>
                    </div>
                    <p className="text-lg text-text-primary leading-relaxed">{region.description}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {region.counties.map((county, countyIndex) => (
                      <div key={countyIndex} className="relative group">
                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-100 group-hover:border-primary-accent/30 transition-all duration-300 group-hover:shadow-lg">
                          <div className="flex items-center justify-between mb-6">
                            <h4 className="text-xl font-bold text-primary-dark">{county.name}</h4>
                            <div className="flex flex-col items-end space-y-2">
                              {county.emergencyAvailable && (
                                <div className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                                  <Clock className="w-3 h-3" />
                                  <span>24/7 Emergency</span>
                                </div>
                              )}
                              <div className="bg-primary-accent/10 text-primary-accent px-3 py-1 rounded-full text-sm font-semibold">
                                {county.responseTime}
                              </div>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-3">
                            {county.cities.map((city, cityIndex) => (
                              <div key={cityIndex} className="flex items-center space-x-3 group/item">
                                <div className="w-2 h-2 bg-primary-accent rounded-full group-hover/item:scale-150 transition-transform duration-300" />
                                <span className="text-text-primary group-hover/item:text-primary-dark transition-colors duration-300 font-medium">{city}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Expansion Notice */}
          <div className="mt-16 relative">
            <div className="bg-gradient-to-r from-primary-accent to-secondary-accent rounded-3xl p-8 lg:p-12 text-white text-center relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
              />
              
              <div className="relative z-10">
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Don&apos;t See Your Area?
                </h3>
                <p className="text-lg mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
                  We&apos;re constantly expanding our service areas throughout Florida. Contact us to check if we can serve your location or to discuss special arrangements.
                </p>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  onClick={() => trackPhoneCall('service_areas_expansion')}
                  className="inline-flex items-center space-x-3 bg-white text-primary-accent font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
                >
                  <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Contact Us: {CONTACT_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`
          }}
        />
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <Clock className="w-5 h-5 animate-pulse" />
              <span className="text-sm font-semibold tracking-wide">24/7 Emergency Response</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Septic Emergency?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Don&apos;t wait! Our emergency response team is standing by 24/7 in Orange, Seminole, and Volusia Counties
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                onClick={() => trackPhoneCall('service_areas_emergency')}
                className="inline-flex items-center space-x-3 bg-white text-red-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group"
              >
                <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <span>Emergency: {CONTACT_INFO.phone}</span>
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-white/20">
              <div className="flex items-center justify-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-white/90">Orange County: 1-2 hours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
                  <span className="text-white/90">Seminole County: 1-2 hours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                  <span className="text-white/90">Volusia County: 2-4 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
