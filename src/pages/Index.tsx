import { Play } from 'lucide-react';
import { ButtonGradient } from '@/components/ui/button-gradient';
import { Link } from 'react-router-dom';
import Ribbons from '../components/Ribbons';

const featuredProjects = [
  {
    title: 'Cinematic Reels',
    description: 'Professional storytelling through motion',
    thumbnail: 'https://media.cakeresume.com/image/upload/v1643018022/tdfd5qlmnl6nidfgqz7o.jpg',
  },
  {
    title: 'VFX & Motion Magic',
    description: 'After Effects wizardry and visual impact',
    thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/59c0a0187056485.6580c6af1cdf7.png',
  },
  {
    title: 'Soundscapes & Sync',
    description: 'Precision audio editing with emotional depth',
    thumbnail: 'https://media.journoportfolio.com/system/examples/malachiquarles.jpg',
  } 
];

const Index = () => {
  return (
    <div className="min-h-screen">
 

      {/* Main content */}

      {/* Hero Section */}
      <div className="relative h-screen flex items-center overflow-hidden">
        {/* Ribbons Background */}
  <div className="absolute inset-0 z-10">
    <Ribbons
      enableShaderEffect={true}
      enableFade={true}
      backgroundColor={[0, 0, 0, 0]}
      colors={['#8E29DD']}
      baseThickness={25}
      effectAmplitude={1.5}
    />
  </div>

      {/*
        Video Background with new styling
        <div className="absolute inset-0 overflow-hidden">
          <div className="bg-[url('https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3')] bg-cover bg-center h-full w-full opacity-30 scale-110 animate-[pulse_4s_ease-in-out_infinite]" />
          <div className="absolute inset-0 z-0 pointer-events-none fade-grid mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background z-20" />
        </div>
      */}

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6 leading-tight">
              Bringing Your Stories to Life Through Visual Magic
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Hi, I'm Anand Chowdari, transforming raw footage into captivating stories that move hearts and inspire minds.
            </p>
            <div className="flex flex-wrap gap-4">
              <ButtonGradient asChild size="lg">
                <Link to="/contact">
                  Hire Me
                </Link>
              </ButtonGradient>
              <ButtonGradient variant="outline" size="lg" asChild className="group">
                <Link to="/portfolio" className="flex items-center gap-2">
                  <Play size={20} className="group-hover:text-primary transition-colors" />
                  Watch My Work
                </Link>
              </ButtonGradient>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Work Preview with updated styling */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-[#33C3F0] bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add 3 featured project cards here */}
            {featuredProjects.map((project, index) => (
  <div
    key={index}
    className="relative group overflow-hidden rounded-lg aspect-video bg-gray-900 hover:scale-105 transition-transform duration-300"
  >
    <img
      src={project.thumbnail}
      alt={project.title}
      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
    <div className="absolute bottom-0 p-4 z-10">
      <h3 className="text-lg font-semibold text-white">{project.title}</h3>
      <p className="text-sm text-gray-300">{project.description}</p>
    </div>
  </div>
))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
