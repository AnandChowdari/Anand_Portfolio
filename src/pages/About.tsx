
import { useState } from 'react';

const About = () => {
  const tools = [
    { 
      name: 'Adobe Premiere Pro', 
      logo: 'https://www.adobe.com/content/dam/cc/icons/aftereffects.svg',
    },
    { 
      name: 'After Effects', 
      logo: 'https://www.adobe.com/content/dam/cc/icons/aftereffects.svg',
    },
    { 
      name: 'DaVinci Resolve', 
      logo: 'https://www.blackmagicdesign.com/shared/fetch/ae02fc64e43e47a2',
    },
    { 
      name: 'Adobe Audition', 
      logo: 'https://www.adobe.com/content/dam/cc/icons/audition.svg',
    },
    { 
      name: 'Adobe Illustrator', 
      logo: 'https://www.adobe.com/content/dam/cc/icons/illustrator.svg',
    },
    { 
      name: 'Adobe Media Encoder', 
      logo: 'https://www.adobe.com/content/dam/cc/icons/mediaencoder.svg',
    },
    { 
      name: 'Blender', 
      logo: 'https://www.blender.org/wp-content/uploads/2019/07/blender_logo_socket-blue.svg',
    },
    { 
      name: 'AI Tools', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-background to-black/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-6">
            About Me
          </h1>
          <div className="max-w-3xl">
            <p className="text-xl text-gray-300 mb-8">
              I'm passionate about transforming raw footage into compelling stories that captivate and inspire. With over 5 years of experience in video editing, I specialize in creating content that leaves a lasting impression.
            </p>
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-primary to-[#33C3F0] bg-clip-text text-transparent">
            My Toolkit
          </h2>
          
          <style>{`
            @keyframes slideInUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            
            @keyframes float {
              0%, 100% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-8px);
              }
            }
            
            @keyframes subtleGlow {
              0%, 100% {
                box-shadow: 0 0 0 0 rgba(155, 135, 245, 0.2);
              }
              50% {
                box-shadow: 0 0 12px 2px rgba(155, 135, 245, 0.3);
              }
            }
            
            .tool-button {
              animation: slideInUp 0.5s ease-out forwards, subtleGlow 3s ease-in-out infinite;
            }
            
            .tool-button:hover {
              animation: slideInUp 0.5s ease-out forwards, float 0.6s ease-in-out infinite;
            }
            
            .tool-button:nth-child(1) { animation-delay: 0.1s, 0s; }
            .tool-button:nth-child(2) { animation-delay: 0.2s, 0.2s; }
            .tool-button:nth-child(3) { animation-delay: 0.3s, 0.4s; }
            .tool-button:nth-child(4) { animation-delay: 0.4s, 0.6s; }
            .tool-button:nth-child(5) { animation-delay: 0.5s, 0.8s; }
            .tool-button:nth-child(6) { animation-delay: 0.6s, 1s; }
            .tool-button:nth-child(7) { animation-delay: 0.7s, 1.2s; }
            .tool-button:nth-child(8) { animation-delay: 0.8s, 1.4s; }
          `}</style>
          
          {/* Desktop Grid */}
          <div className="hidden md:flex md:flex-wrap gap-3 justify-start">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="tool-button group flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-black/40 to-black/20 border border-border hover:border-primary/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/40 cursor-pointer"
              >
                <div className="h-6 w-6 flex items-center justify-center">
                  <img 
                    src={tool.logo} 
                    alt={tool.name}
                    className="h-full w-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-200 group-hover:text-primary transition-colors duration-300 whitespace-nowrap">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>

          {/* Mobile Horizontal Scroll */}
          <div className="md:hidden">
            <div className="flex gap-3 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory">
              {tools.map((tool, idx) => (
                <div
                  key={tool.name}
                  className="tool-button flex-shrink-0 snap-center group flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-black/40 to-black/20 border border-border hover:border-primary/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/40"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="h-6 w-6 flex items-center justify-center">
                    <img 
                      src={tool.logo} 
                      alt={tool.name}
                      className="h-full w-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-200 group-hover:text-primary transition-colors duration-300 whitespace-nowrap">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-[#33C3F0] bg-clip-text text-transparent">
              My Story
            </h2>
            <p className="text-gray-300 mb-6">
              My journey in video editing began with a simple passion for storytelling. What started as creating small projects for friends quickly evolved into a professional career crafting compelling content for brands and businesses.
            </p>
            <p className="text-gray-300">
              Today, I combine technical expertise with creative vision to deliver high-quality video content that helps my clients stand out in the digital landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
