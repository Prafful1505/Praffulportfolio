import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const openResume = () => {
    window.open('/Prafful_Agrawal_Resume.pdf', '_blank');
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-white">
            Prafful Agrawal
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-teal-400 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-teal-400 px-3 py-2 text-sm font-medium transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-teal-400 px-3 py-2 text-sm font-medium transition-colors">
                Experience
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-teal-400 px-3 py-2 text-sm font-medium transition-colors">
                Projects
              </button>
              <button onClick={openResume} className="text-gray-300 hover:text-teal-400 px-3 py-2 text-sm font-medium transition-colors">
                Resume
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-teal-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-teal-700 transition-colors">
                Contact Now →
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900/95 backdrop-blur-md rounded-lg mt-2">
              <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-teal-400 block px-3 py-2 text-base font-medium w-full text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-teal-400 block px-3 py-2 text-base font-medium w-full text-left">
                Skills
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-teal-400 block px-3 py-2 text-base font-medium w-full text-left">
                Experience
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-teal-400 block px-3 py-2 text-base font-medium w-full text-left">
                Projects
              </button>
              <button onClick={openResume} className="text-gray-300 hover:text-yellow-400 block px-3 py-2 text-base font-medium w-full text-left">
                Resume
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-teal-600 text-white block px-3 py-2 text-base font-medium w-full text-left rounded-md">
                Contact Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
