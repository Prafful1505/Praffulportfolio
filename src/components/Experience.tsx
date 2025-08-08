import React from 'react';
import { Calendar, MapPin, ExternalLink, Award } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Experience & Education</h2>
          <p className="text-xl text-gray-300">Professional journey and academic background</p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-500 to-blue-500"></div>
          
          <div className="space-y-16">
            {/* Experience */}
            <div className="relative">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2 lg:text-right lg:pr-8">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-teal-400">
                        <Calendar size={16} />
                        <span className="text-sm font-medium">May 2025 – Jul 2025</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">Data Scientist Intern</h3>
                    <p className="text-teal-400 font-medium mb-4">Young Thames</p>
                    
                    <div className="space-y-3 text-gray-300 text-sm">
                      <div className="flex items-start gap-2 flex-row-reverse">
                        <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-right flex-1">
                          Performed in-depth data cleaning, aggregation, and exploratory analysis of CRM and public datasets to extract actionable insights.
                        </span>
                      </div>
                      <div className="flex items-start gap-2 flex-row-reverse">
                        <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-right flex-1">
                          Automated pipelines and delivered analytical reports and dashboards supporting business decisions.
                        </span>
                      </div>
                      <div className="flex items-start gap-2 flex-row-reverse">
                        <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-right flex-1">
                          Collaborated with stakeholders on reporting requirements, optimizing data visualization via Power BI and Excel.
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-teal-500 rounded-full border-4 border-slate-900 z-10"></div>
              </div>
            </div>
            
            {/* Education */}
            <div className="relative">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2 lg:ml-auto lg:pl-8">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-blue-400">
                        <Calendar size={16} />
                        <span className="text-sm font-medium">2022 – 2026</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">B.Tech in Artificial Intelligence and Data Science</h3>
                    <p className="text-blue-400 font-medium mb-2">Madhav Institute of Technology and Science, Gwalior</p>
                    <p className="text-gray-300 text-sm mb-4">CGPA: 7.2/10.0</p>
                    
                    <div className="mb-4">
                      <h4 className="text-white font-medium mb-2">Relevant Coursework:</h4>
                      <div className="flex flex-wrap gap-2">
                        {["Data Analytics", "Statistics", "Data Visualization", "Database Systems", "Machine Learning"].map((course, index) => (
                          <span key={index} className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-xs border border-blue-500/30">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 z-10"></div>
              </div>
            </div>
            
            {/* Achievements */}
            <div className="relative">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2 lg:text-right lg:pr-8">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-4 lg:justify-end">
                      <Award className="w-5 h-5 text-yellow-400" />
                      <h3 className="text-xl font-bold text-white">Achievements</h3>
                    </div>
                    
                    <div className="space-y-3 text-gray-300 text-sm">
                      <div className="flex items-start gap-2 lg:justify-end lg:text-right">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0 lg:order-2"></div>
                        <span>Data Analytics with Python, NPTEL Certified (2025)</span>
                      </div>
                      <div className="flex items-start gap-2 lg:justify-end lg:text-right">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0 lg:order-2"></div>
                        <span>LeetCode/GeeksForGeeks: 300+ problems solved, analytical and problem-solving skills</span>
                      </div>
                      <div className="flex items-start gap-2 lg:justify-end lg:text-right">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0 lg:order-2"></div>
                        <span>Management Head, Science Club, MITS (2024–2025)</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-500 rounded-full border-4 border-slate-900 z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;