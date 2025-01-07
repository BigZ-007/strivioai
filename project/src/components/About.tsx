import React from 'react';
import { CheckCircle } from 'lucide-react';

const benefits = [
  'Reduce operational costs by up to 40%',
  'Increase productivity and efficiency',
  'Minimise human error in processes',
  'Scale operations seamlessly',
  'Real-time analytics and insights',
  'Custom solutions for your business'
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
              alt="Team collaboration"
              className="rounded-lg shadow-xl"
            />
          </div>
          
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">
              Why Choose Strivio AI?
            </h2>
            
            <p className="text-xl text-gray-600">
              We're passionate about helping businesses leverage the power of AI to achieve their goals. Our team of experts combines deep technical knowledge with business acumen to deliver solutions that drive real results.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;