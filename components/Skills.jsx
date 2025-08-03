import React from 'react';
import { Code, Database } from 'lucide-react';
import { skills } from '../data/portfolio';

const Skills = () => {
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');

  const SkillBar = ({ skill }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
        <span className="text-blue-600 dark:text-blue-400 font-semibold">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here's an overview of my technical skills and proficiency levels in JavaScript, 
              React, and various front-end and back-end technologies.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
         
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Frontend</h3>
                  <p className="text-gray-600 dark:text-gray-300">JavaScript & React Technologies</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {frontendSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>

              <div className="mt-6 p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Specialized in:</strong> JavaScript ES6+, React component development, 
                  Responsive design, and Interactive user interfaces.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-800 dark:to-gray-800 rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Backend</h3>
                  <p className="text-gray-600 dark:text-gray-300">Server-side JavaScript Knowledge</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {backendSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>

              <div className="mt-6 p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Basic Knowledge in:</strong> Node.js server setup, JavaScript API development, 
                  Database design, and Full-stack React integration.
                </p>
              </div>
            </div>
          </div>

         
          <div className="mt-16 text-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Tools & Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Git & GitHub', 'VS Code', 'Figma', 'Postman', 'Vite', 
                'Webpack', 'npm/yarn', 'Responsive Design', 'REST APIs', 'Agile/Scrum'
              ].map((tool, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;