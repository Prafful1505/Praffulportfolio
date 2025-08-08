import React from 'react';
import { ExternalLink, Github, Calendar, TrendingUp, BarChart3, Image, Brain } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Multimodal Language Assistant (GitHub)",
      period: "Jan 2025 – Mar 2025",
      description: "Built an AI assistant for language practice, achieving 85% feedback relevance using Python, Whisper, and GROQ API.",
      icon: <Brain className="w-6 h-6" />, 
      color: "from-indigo-500 to-indigo-600",
      features: [
        "AI-driven language practice with multimodal inputs",
        "Integrated Python, Whisper, and GROQ API",
        "85% feedback relevance validated via analysis",
        "Designed interactive Gradio interface for audio/text input"
      ],
      technologies: ["Python", "Whisper", "GROQ API", "Gradio", "Quantitative Analysis"],
      link: "https://github.com/Prafful1505/MultimodalLanguageLearningAssistant-"
    },
    {
      title: "Media & Entertainment Stock Analysis Dashboard",
      period: "Feb 2025 – Mar 2025",
      description: "Built comprehensive Power BI dashboards to track stock performance and KPIs for major media firms using star-schema modeling.",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      features: [
        "Power BI dashboards with multi-source datasets integration",
        "DAX measures for moving averages, returns, and ratios",
        "Dynamic slicers and filters for sector/company analysis",
        "Automated ETL for data cleansing and transformation"
      ],
      technologies: ["Power BI", "DAX", "ETL", "Excel"],
      link: "#"
    },
    {
      title: "Image-Based QA with RAG",
      period: "Dec 2024 – Jan 2025",
      description: "Developed a generative AI system for image-based Q&A, achieving 80% answer accuracy using advanced OCR and retrieval techniques.",
      icon: <Image className="w-6 h-6" />,
      color: "from-pink-500 to-pink-600",
      features: [
        "Generative AI system with 80% answer accuracy",
        "Python, Tesseract OCR, and LangChain integration",
        "RAG optimization with MiniLM embeddings",
        "Exploratory data analysis for retrieval optimization"
      ],
      technologies: ["Python", "Tesseract OCR", "LangChain", "RAG", "MiniLM"],
      link: "https://github.com/Prafful1505/image_qa_rag"
    },
    {
      title: "Telecom Churn Analytics",
      period: "Oct 2024 – Nov 2024",
      description: "Analyzed telecom customer data to identify churn drivers and developed interactive dashboards for stakeholder insights.",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      features: [
        "Customer churn analysis using Python and SQL",
        "Interactive Power BI dashboard with churn trends",
        "Statistical analysis of customer behavior patterns",
        "Actionable insights for retention strategies"
      ],
      technologies: ["Python", "SQL", "Power BI", "Pandas"],
      link: "https://github.com/Prafful1505/telecom-churn"
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
          <p className="text-xl text-gray-300">Data-driven solutions and analytics implementations</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                  {project.icon}
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <Calendar size={14} />
                  <span>{project.period}</span>
                </div>
              </div>
              
              {/* Project Info */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              
              {/* Features */}
              <div className="mb-6">
                <h4 className="text-white font-medium text-sm mb-2">Key Features:</h4>
                <div className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Technologies */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-teal-500/20 text-teal-400 px-2 py-1 rounded-full text-xs border border-teal-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-3">
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors flex-1 justify-center"
                >
                  <Github size={16} />
                  <span>View Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;