import React from 'react';
import { Brain, Workflow, LineChart, Shield } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI Process Optimisation',
    description: 'Streamline your business processes with intelligent automation powered by cutting-edge AI technology.'
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Automate repetitive tasks and workflows to increase efficiency and reduce human error.'
  },
  {
    icon: LineChart,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights with our advanced analytics solutions.'
  },
  {
    icon: Shield,
    title: 'Secure Integration',
    description: 'Seamlessly integrate AI solutions with your existing systems while maintaining security.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive AI automation solutions to help your business thrive in the digital age.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <service.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;