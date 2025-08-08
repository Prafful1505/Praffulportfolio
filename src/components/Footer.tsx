import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">About Me</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              I'm a passionate Data Analyst student specializing in extracting insights from complex datasets, 
              creating compelling visualizations, and driving data-driven business decisions through advanced 
              analytics and business intelligence.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('projects')}
                className="block text-gray-300 hover:text-teal-400 text-sm transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="block text-gray-300 hover:text-teal-400 text-sm transition-colors"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="block text-gray-300 hover:text-teal-400 text-sm transition-colors"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-gray-300 hover:text-teal-400 text-sm transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
          
          {/* Follow Me */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
            <div className="flex gap-4 mb-4">
              <a 
                href="https://www.linkedin.com/in/prafful-agrawal-b6b085293/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Linkedin size={18} className="text-white" />
              </a>
              <a 
                href="https://github.com/Prafful1505" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors"
              >
                <Github size={18} className="text-white" />
              </a>
              <a 
                href="mailto:aprafful15@gmail.com" 
                className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center hover:bg-teal-700 transition-colors"
              >
                <Mail size={18} className="text-white" />
              </a>
              <a 
                href="https://wa.me/7879059862?text=Hi%20Prafful%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors"
              >
                <FaWhatsapp size={18} className="text-white" />
              </a>
            </div>
            <p className="text-gray-400 text-xs">
              Feel free to reach out for collaborations, opportunities, or just to connect!
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Prafful Agrawal. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
