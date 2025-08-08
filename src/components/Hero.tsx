import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { SiPython, SiMysql, SiAmazon, SiTypescript, SiOpenai } from 'react-icons/si';

interface HeroProps {
  characterRef: React.RefObject<HTMLDivElement>;
}

const Hero: React.FC<HeroProps> = ({ characterRef }) => {
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (characterRef.current) {
        const character = characterRef.current;
        const rect = character.getBoundingClientRect();
        const characterCenterX = rect.left + rect.width / 2;
        const characterCenterY = rect.top + rect.height / 2;
        
        const deltaX = e.clientX - characterCenterX;
        const deltaY = e.clientY - characterCenterY;
        
        const maxRotation = 15;
        const rotationX = Math.max(-maxRotation, Math.min(maxRotation, deltaY * 0.02));
        const rotationY = Math.max(-maxRotation, Math.min(maxRotation, deltaX * 0.02));
        
        const head = character.querySelector('.character-head');
        if (head) {
          (head as HTMLElement).style.transform = `rotateX(${-rotationX}deg) rotateY(${rotationY}deg)`;
        }
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [characterRef]);

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Character Section */}
          <div className="lg:w-1/2 flex justify-center relative">
            <div ref={characterRef} className="relative">
              
              {/* Floating Tech Icons */}
              <div className="absolute -top-10 -left-10 w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-black font-bold text-sm animate-float">
                <SiPython size={24} />
              </div>
              <div className="absolute -top-5 right-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs animate-float-delay-1">
                <SiMysql size={20} />
              </div>
              <div className="absolute top-20 -right-12 w-11 h-11 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xs animate-float-delay-2">
                <SiAmazon size={22} />
              </div>
              <div className="absolute bottom-10 -left-8 w-9 h-9 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xs animate-float-delay-3">
                <SiTypescript size={18} />
              </div>
              <div className="absolute top-5 left-16 w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-xs animate-float">
                <SiOpenai size={20} />
              </div>
              
              {/* Main Character */}
              <div className="character-container relative">
                <div className="character-head transition-transform duration-150 ease-out">
                  <div className="w-80 h-80 relative">
                    
                    {/* Base Platform */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-72 h-8 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full shadow-lg"></div>
                    
                    {/* Character Body */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-48">
                      <div className="w-28 h-32 bg-gradient-to-b from-blue-400 to-blue-600 rounded-t-3xl mx-auto relative">
                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-blue-300 rounded-full"></div>
                      </div>
                      <div className="w-24 h-16 bg-gradient-to-b from-slate-700 to-slate-800 mx-auto"></div>
                    </div>
                    
                    {/* Arms */}
                    <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2">
                      <div className="absolute -left-8 top-4 w-6 h-16 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full transform rotate-12"></div>
                      <div className="absolute -right-2 top-4 w-6 h-16 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full transform -rotate-12"></div>
                    </div>
                    
                    {/* Laptop */}
                    <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 translate-x-2">
                      <div className="w-16 h-12 bg-gradient-to-b from-gray-300 to-gray-400 rounded-t-md relative">
                        <div className="w-14 h-10 bg-gradient-to-b from-slate-800 to-slate-900 rounded-t-sm mx-auto mt-1 relative">
                          <div className="absolute top-1 left-1 right-1 h-6 bg-teal-500 rounded-sm opacity-80"></div>
                          <div className="absolute bottom-1 left-1 right-1 h-2 bg-gray-600 rounded-sm"></div>
                        </div>
                      </div>
                      <div className="w-18 h-1 bg-gray-400 -ml-1"></div>
                    </div>
                    
                    {/* Head */}
                    <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 w-20 h-20">
                      <div className="w-20 h-20 bg-gradient-to-b from-amber-200 to-amber-300 rounded-full relative">
                        <div className="absolute top-6 left-3 w-2 h-2 bg-slate-800 rounded-full"></div>
                        <div className="absolute top-6 right-3 w-2 h-2 bg-slate-800 rounded-full"></div>
                        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-amber-400 rounded-full"></div>
                        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-slate-700 rounded-full"></div>
                      </div>
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-22 h-8 bg-gradient-to-b from-slate-800 to-slate-700 rounded-t-full"></div>
                    </div>
                    
                    {/* Plant */}
                    <div className="absolute bottom-8 right-8">
                      <div className="w-8 h-6 bg-gradient-to-b from-amber-600 to-amber-700 rounded-b-full"></div>
                      <div className="w-3 h-8 bg-green-500 mx-auto relative">
                        <div className="absolute -top-2 -left-1 w-2 h-3 bg-green-500 rounded-full transform rotate-45"></div>
                        <div className="absolute -top-2 -right-1 w-2 h-3 bg-green-500 rounded-full transform -rotate-45"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="lg:w-1/2 text-white">
            <div className="mb-6">
              <h1 className="text-5xl lg:text-6xl font-bold mb-2">
                HELLO I AM A
              </h1>
              <h1 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                DATA SCIENTIST & ANALYST
              </h1>
            </div>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Hi, I'm <span className="text-teal-400 font-semibold">Prafful Agrawal</span>, a passionate Data Analyst with expertise in 
              machine learning, data analytics, cloud computing (AWS), and full-stack development. I specialize in 
              extracting insights from complex datasets, building AI solutions, and creating data-driven applications.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 mb-8 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-teal-400" />
                <span>+91 7879059862</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-teal-400" />
                <span>Gwalior, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-teal-400" />
                <span>aprafful15@gmail.com</span>
              </div>
            </div>
            
            {/* Tech Stack Icons */}
            <div className="flex gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
                <SiPython size={28} />
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
                <SiMysql size={28} />
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
                <SiAmazon size={28} />
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
                <SiTypescript size={28} />
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
                <SiOpenai size={28} />
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/prafful-agrawal-b6b085293/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg"
              >
                <Linkedin size={20} className="text-white" />
              </a>
              <a 
                href="https://github.com/Prafful1505" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors shadow-lg"
              >
                <Github size={20} className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
