import React from 'react';
import { Code, Database, Zap, Palette, ArrowRight, CheckCircle } from 'lucide-react';
import { services } from '../data/portfolio';

const Services = () => {
  const getIcon = (iconName) => {
    const icons = {
      Code: <Code className="w-6 h-6" />,
      Database: <Database className="w-6 h-6" />,
      Zap: <Zap className="w-6 h-6" />,
      Palette: <Palette className="w-6 h-6" />
    };
    return icons[iconName] || <Code className="w-6 h-6" />;
  };

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Services I Offer
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I provide comprehensive JavaScript with React development services to help bring your ideas to life 
              with modern technologies and best practices.
            </p>
          </div>

         
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="group bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
          
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {getIcon(service.icon)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {service.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">
                      {service.price}
                    </p>
                  </div>
                </div>

              
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

               
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

            
                <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 group-hover:from-purple-600 group-hover:to-blue-600">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            ))}
          </div>

          
          <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Need a Custom JavaScript Solution?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Every project is unique. Let's discuss your specific JavaScript and React requirements and create 
              a tailored solution that perfectly fits your needs and budget.
            </p>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;