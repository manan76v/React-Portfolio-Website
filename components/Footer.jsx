import React from 'react';
import { Heart, User } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
        
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Abdul Manan</span>
          </div>

          
          <p className="text-gray-300 mb-6 max-w-md text-lg italic">
            "Turning ideas into beautiful, functional JavaScript with React experiences."
          </p>

      
          <div className="flex items-center gap-2 text-gray-400">
            <span>© {currentYear} Abdul Manan. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and lots of coffee.</span>
          </div>

          
          <p className="text-gray-500 text-sm mt-4">
            Fresh CS Graduate • JavaScript with React Developer • Always Learning
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;