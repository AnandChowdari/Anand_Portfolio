
import { FilmIcon, Smartphone, Palette, Video } from 'lucide-react';

const About = () => {
  const tools = [
    { name: 'Adobe Premiere Pro', icon: Video, description: 'Professional video editing and assembly' },
    { name: 'After Effects', icon: FilmIcon, description: 'Motion graphics and visual effects' },
    { name: 'DaVinci Resolve', icon: Palette, description: 'Color grading and correction' },
    { name: 'Mobile Editing', icon: Smartphone, description: 'Quick edits for social media' },
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool) => (
              <div key={tool.name} className="p-6 rounded-lg bg-black/30 border border-border hover:border-primary/50 transition-colors">
                <tool.icon className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                <p className="text-gray-400">{tool.description}</p>
              </div>
            ))}
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
