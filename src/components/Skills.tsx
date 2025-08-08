import React from 'react';
import { BarChart3, Database, TrendingUp, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Analytics",
      icon: <BarChart3 className="w-8 h-8" />,
      skills: ["Data Analysis", "Data Cleaning", "Visualization", "Business Intelligence"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Languages",
      icon: <Database className="w-8 h-8" />,
      skills: ["SQL", "Python (Pandas, NumPy)", "TypeScript", "Java"],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Cloud & Tools",
      icon: <TrendingUp className="w-8 h-8" />,
      skills: ["AWS", "Power BI", "Excel", "MySQL", "Jupyter", "Git"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "AI & ML",
      icon: <Brain className="w-8 h-8" />,
      skills: ["Machine Learning", "RAG", "LangChain", "OCR", "Statistical Analysis"],
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive skill set in data analytics, statistical methods, and modern business intelligence tools
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 text-white shadow-lg`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;