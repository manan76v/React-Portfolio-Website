import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
        
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Education
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My educational background and academic achievements that built the foundation 
              for my career in JavaScript with React development.
            </p>
          </div>

          
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
              <div className="flex items-center gap-4 text-white">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Bachelor of Science in Computer Science</h3>
                  <p className="text-blue-100">Fresh Graduate • 2024</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
          
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span>2021 - 2025</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span>COMSATS UNIVERSITY ISLAMABAD VEHARI CAMPUS</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                    <Award className="w-5 h-5 text-blue-600" />
                    <span>CGPA 3.1/4.0</span>
                  </div>
                </div>

                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Relevant Coursework
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      'JavaScript Development',
                      'Data Structures',
                      'Database Systems',
                      'Software Engineering',
                      'Object-Oriented Programming',
                      'Computer Networks',
                      'Human-Computer Interaction',
                      'Machine Learning'
                    ].map((course, index) => (
                      <div 
                        key={index}
                        className="text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 px-3 py-1 rounded-md"
                      >
                        {course}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

        
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Academic Highlights
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <p className="text-gray-600 dark:text-gray-300">
                      <strong>Final Year Project:</strong> Developed a comprehensive JavaScript and React job portal 
                      with real-time video chat functionality for remote interviews.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                    <p className="text-gray-600 dark:text-gray-300">
                      <strong>JavaScript with React Focus:</strong> Specialized in JavaScript and React development with 
                      modern frameworks and responsive design principles.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <p className="text-gray-600 dark:text-gray-300">
                      <strong>Team Collaboration:</strong> Worked on multiple group projects using 
                       JavaScript, React and version control systems.
                    </p>
                  </div>
                </div>
              </div>

          
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Skills Developed
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Problem Solving', 'Critical Thinking', 'Software Design',
                    'Team Leadership', 'Technical Writing', 'Project Management',
                    'Code Review', 'Testing & Debugging'
                  ].map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Continuous Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Beyond formal education, I'm committed to staying updated with the latest JavaScript and React 
              trends through online courses, documentation, and hands-on projects. Always learning, 
              always growing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;