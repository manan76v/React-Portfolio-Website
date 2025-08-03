import React from 'react';
import { Briefcase, MapPin, Calendar, Award, Users, Code2 } from 'lucide-react';
import { experiences } from '../data/portfolio';

const Experience = () => {
  const getTypeIcon = (type) => {
    const icons = {
      work: <Briefcase className="w-5 h-5" />,
      internship: <Users className="w-5 h-5" />,
      freelance: <Code2 className="w-5 h-5" />
    };
    return icons[type] || <Briefcase className="w-5 h-5" />;
  };

  const getTypeColor = (type) => {
    const colors = {
      work: 'from-blue-500 to-blue-600',
      internship: 'from-green-500 to-green-600',
      freelance: 'from-purple-500 to-purple-600'
    };
    return colors[type] || 'from-blue-500 to-blue-600';
  };

  const getTypeBadge = (type) => {
    const badges = {
      work: 'Full-time',
      internship: 'Internship',
      freelance: 'Freelance'
    };
    return badges[type] || 'Experience';
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My journey in JavaScript with React development through internships, freelance work, and academic roles 
              that have shaped my skills and expertise.
            </p>
          </div>

      
          <div className="relative">
          
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 hidden md:block"></div>

            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative mb-12 md:ml-16">
            
                <div className={`absolute -left-20 top-6 w-8 h-8 bg-gradient-to-r ${getTypeColor(exp.type)} rounded-full flex items-center justify-center text-white hidden md:flex`}>
                  {getTypeIcon(exp.type)}
                </div>

          
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
            
                  <div className={`bg-gradient-to-r ${getTypeColor(exp.type)} p-6 text-white`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                            {getTypeBadge(exp.type)}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                        <p className="text-white/90 font-medium">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-white/90 mb-1">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/90">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  
                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                  
                    <div className="mb-6">
                      <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        <Award className="w-5 h-5 text-orange-500" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
              <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;