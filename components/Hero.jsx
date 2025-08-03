import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { contactInfo } from '../data/portfolio';

const Hero = () => {
  const scrollToNext = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        
          <div className="flex-1 text-center lg:text-left">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Abdul Manan
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
                JavaScript with React Developer
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl">
                Fresh Computer Science graduate passionate about creating beautiful, 
                responsive web applications using JavaScript with React, ES6+, and modern CSS. 
                I love turning ideas into interactive digital experiences.
              </p>
            </div>

        
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in-up animation-delay-200">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
                <Download className="w-5 h-5 inline mr-2" />
                Download CV
              </button>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                Contact Me
              </button>
            </div>

          
            <div className="flex gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-400">
              <a 
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md transform hover:-translate-y-1 transition-all duration-200"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md transform hover:-translate-y-1 transition-all duration-200"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md transform hover:-translate-y-1 transition-all duration-200"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

        
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative animate-fade-in-up animation-delay-300">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-2 shadow-2xl">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Abdul Manan"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
          
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-400 rounded-full opacity-20 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-16 animate-fade-in-up animation-delay-500">
          <button 
            onClick={scrollToNext}
            className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200 animate-bounce"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;