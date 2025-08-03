import React from 'react';
import { Download, Eye, FileText, User, Briefcase, GraduationCap, Award, Code, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { contactInfo, skills, experiences, achievements } from '../data/portfolio';

const Resume = () => {
  const handleDownload = () => {
  
    alert('Resume download would start here. Connect this to your actual resume PDF.');
  };

  const handlePreview = () => {
    
    alert('Resume preview would open here.');
  };

  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Resume
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A comprehensive overview of my professional background, skills, and achievements 
              in JavaScript with React development.
            </p>
          </div>

      
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={handleDownload}
              className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
            >
              <Download className="w-5 h-5" />
              Download PDF
            </button>
            <button 
              onClick={handlePreview}
              className="flex items-center gap-2 px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
            >
              <Eye className="w-5 h-5" />
              Preview Resume
            </button>
          </div>

      
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
  
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center">
                  <User className="w-16 h-16 text-white" />
                </div>
                <div className="text-center md:text-left flex-1">
                  <h1 className="text-3xl font-bold mb-2">Abdul Manan</h1>
                  <p className="text-xl text-blue-100 mb-4">JavaScript with React Developer</p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
                    <div className="flex items-center gap-1">
                      <Mail className="w-4 h-4" />
                      <span>{contactInfo.email}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="w-4 h-4" />
                      <span>{contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>Vehari, Pakistan</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid lg:grid-cols-3 gap-8">
          
                <div className="lg:col-span-1 space-y-8">
              
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                      <User className="w-5 h-5 text-blue-600" />
                      Contact
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <Github className="w-4 h-4" />
                        <a href={contactInfo.github} className="hover:text-blue-600 transition-colors">
                          GitHub Profile
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <Linkedin className="w-4 h-4" />
                        <a href={contactInfo.linkedin} className="hover:text-blue-600 transition-colors">
                          LinkedIn Profile
                        </a>
                      </div>
                    </div>
                  </div>

                
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                      <Code className="w-5 h-5 text-blue-600" />
                      Technical Skills
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Frontend</h4>
                        <div className="space-y-2">
                          {skills.filter(skill => skill.category === 'frontend').map((skill, index) => (
                            <div key={index} className="flex justify-between items-center">
                              <span className="text-sm text-gray-600 dark:text-gray-300">{skill.name}</span>
                              <span className="text-sm font-medium text-blue-600">{skill.level}%</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Backend</h4>
                        <div className="space-y-2">
                          {skills.filter(skill => skill.category === 'backend').map((skill, index) => (
                            <div key={index} className="flex justify-between items-center">
                              <span className="text-sm text-gray-600 dark:text-gray-300">{skill.name}</span>
                              <span className="text-sm font-medium text-blue-600">{skill.level}%</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

               
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                      <Award className="w-5 h-5 text-blue-600" />
                      Achievements
                    </h3>
                    <div className="space-y-3">
                      {achievements.slice(0, 3).map((achievement, index) => (
                        <div key={index} className="text-sm">
                          <div className="font-medium text-gray-800 dark:text-gray-200">
                            {achievement.title}
                          </div>
                          <div className="text-gray-600 dark:text-gray-400">
                            {new Date(achievement.date).getFullYear()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

               
                <div className="lg:col-span-2 space-y-8">
                  
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                      <FileText className="w-5 h-5 text-blue-600" />
                      Professional Summary
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Fresh Computer Science graduate with a strong passion for JavaScript with React development. 
                      Specialized in creating responsive, interactive user interfaces using modern JavaScript frameworks 
                      like React, ES6+, and CSS3. Experienced in full-stack development with JavaScript throughout 
                      and committed to writing clean, maintainable code. Eager to contribute to innovative 
                      projects while continuously learning and growing as a developer.
                    </p>
                  </div>

                  
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                      <Briefcase className="w-5 h-5 text-blue-600" />
                      Professional Experience
                    </h3>
                    <div className="space-y-6">
                      {experiences.map((exp, index) => (
                        <div key={index}>
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white">{exp.title}</h4>
                              <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              {exp.duration}
                            </div>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{exp.description}</p>
                          <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                            {exp.achievements.slice(0, 2).map((achievement, achIndex) => (
                              <li key={achIndex}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

            
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                      <GraduationCap className="w-5 h-5 text-blue-600" />
                      Education
                    </h3>
                    <div>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            Bachelor of Science in Computer Science
                          </h4>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">
                            COMSATS University Islamabad Vehari Campus
                          </p>
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          2021 - 2025
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Specialized in JavaScript with React Development and Software Engineering
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Interested in working together? Download my complete resume for more details.
            </p>
            <button 
              onClick={handleDownload}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
            >
              <Download className="w-5 h-5 inline mr-2" />
              Get Full Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;