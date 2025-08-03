import React from 'react';
import { Code, Database, Globe, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'JavaScript with React Focused',
      description: 'Specialized in creating responsive, interactive user interfaces with JavaScript and React.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Modern Web Technologies',
      description: 'Proficient in HTML5, CSS3, JavaScript ES6+, React, and modern development tools and workflows.'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Full-Stack Knowledge',
      description: 'Understanding of Node.js, Express, and MongoDB for complete JavaScript-based applications.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Collaborative',
      description: 'Team player with excellent communication skills and Time Management.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
        
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A passionate and dedicated Computer Science graduate with a strong foundation in 
              JavaScript with React development and a keen eye for creating user-friendly digital experiences.
            </p>
          </div>

        
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          
            <div className="space-y-6">
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  As a fresh Computer Science graduate, I'm passionate about JavaScript with React development 
                  and creating engaging user experiences. My journey began with curiosity about how 
                  websites work and evolved into a deep appreciation for clean JavaScript code and intuitive design.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I specialize in modern web technologies including <strong>JavaScript</strong>, 
                  <strong> React</strong>, and <strong>CSS3</strong>, with a focus on building 
                  responsive and accessible applications. While my expertise lies in JavaScript with React development, 
                  I also have foundational knowledge in backend technologies like Node.js and MongoDB.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm always eager to learn new JavaScript patterns and tackle challenging React problems. 
                  My goal is to contribute to innovative JavaScript projects while continuously growing as a developer.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-600 dark:text-gray-300">JavaScript Projects</div>
              </div>
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">2+</div>
                <div className="text-gray-600 dark:text-gray-300">Years Learning</div>
              </div>
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">8+</div>
                <div className="text-gray-600 dark:text-gray-300">Technologies</div>
              </div>
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-gray-600 dark:text-gray-300">Dedication</div>
              </div>
            </div>
          </div>

          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;