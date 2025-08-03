import React from 'react';
import { Award, Trophy, Target, Code, Calendar, Star } from 'lucide-react';
import { achievements } from '../data/portfolio';

const Achievements = () => {
  const getIcon = (iconName) => {
    const icons = {
      Award: <Award className="w-6 h-6" />,
      Trophy: <Trophy className="w-6 h-6" />,
      Target: <Target className="w-6 h-6" />,
      Code: <Code className="w-6 h-6" />
    };
    return icons[iconName] || <Award className="w-6 h-6" />;
  };

  const getTypeColor = (type) => {
    const colors = {
      certification: 'from-blue-500 to-blue-600',
      award: 'from-orange-500 to-orange-600',
      milestone: 'from-green-500 to-green-600'
    };
    return colors[type] || 'from-blue-500 to-blue-600';
  };

  const getTypeBadge = (type) => {
    const badges = {
      certification: 'Certification',
      award: 'Award',
      milestone: 'Milestone'
    };
    return badges[type] || 'Achievement';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    });
  };

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
        
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Achievements & Certifications
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Recognition, certifications, and milestones that mark my journey in JavaScript with React development 
              and continuous learning.
            </p>
          </div>

         
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.id}
                className="group bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${getTypeColor(achievement.type)} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {getIcon(achievement.icon)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-3 py-1 bg-gradient-to-r ${getTypeColor(achievement.type)} text-white rounded-full text-sm font-medium`}>
                        {getTypeBadge(achievement.type)}
                      </span>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {achievement.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{formatDate(achievement.date)}</span>
                    </div>
                  </div>
                </div>

                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {achievement.description}
                </p>

                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-blue-600 mb-2">2</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">Certifications</div>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-orange-600 mb-2">1</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">Awards</div>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-green-600 mb-2">1</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">Milestones</div>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-purple-600 mb-2">4</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">Total Achievements</div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Continuous Learning Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                I believe in continuous improvement and staying updated with the latest JavaScript and React technologies. 
                These achievements represent my commitment to excellence and professional growth.
              </p>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
              >
                Let's Achieve Together
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;