import React from 'react';
import { Bot, ArrowRight } from 'lucide-react';

const integrationLogos = [
  {
    name: 'Make.com',
    url: 'https://raw.githubusercontent.com/BigZ-007/purple/main/purple.jpg',
    alt: 'Make.com Logo'
  },
  {
    name: 'Zapier',
    url: 'https://cdn.worldvectorlogo.com/logos/zapier-1.svg',
    alt: 'Zapier Logo'
  },
  {
    name: 'Airtable',
    url: 'https://cdn.worldvectorlogo.com/logos/airtable-1.svg',
    alt: 'Airtable Logo'
  },
  {
    name: 'Google Drive',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg',
    alt: 'Google Drive Logo'
  },
  {
    name: 'OpenAI',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
    alt: 'OpenAI Logo'
  },
  {
    name: 'Chatbase',
    url: 'https://raw.githubusercontent.com/BigZ-007/baseline-junkie/main/chat.jpg',
    alt: 'Chatbase Logo'
  }
];

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full">
              <Bot className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-blue-600 font-medium">AI-Powered Business Solutions</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your Business with Intelligent Automation
            </h1>
            
            <p className="text-xl text-gray-600">
              Strivio AI helps businesses streamline operations, reduce costs, and drive growth through cutting-edge AI automation solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                Learn More
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
              {integrationLogos.map((logo) => (
                <div key={logo.name} className="w-24 h-24 flex items-center justify-center p-4">
                  <img
                    src={logo.url}
                    alt={logo.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-8">
              Seamlessly integrate with your favorite tools and platforms
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;