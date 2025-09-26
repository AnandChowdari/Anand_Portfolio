import { Play } from 'lucide-react';
import { ButtonGradient } from '@/components/ui/button-gradient';
import { Link } from 'react-router-dom';
const featuredProjects = [
  {
    title: 'Project One',
    description: 'Professional Reels',
    thumbnail: 'https://via.placeholder.com/400x225', // Replace with actual thumbnail URL
  },
  {
    title: 'Project Two',
    description: 'Animations and VFX',
    thumbnail: 'https://via.placeholder.com/400x225', // Replace with actual thumbnail URL
  },
  {
    title: 'Project Three',
    description: 'Sound Design',
    thumbnail: 'https://via.placeholder.com/400x225', // Replace with actual thumbnail URL
  }
]
const Index = () => {
  return (
    <div className="min-h-screen">
 

      {/* Main content */}

      {/* Hero Section */}
      <div className="relative h-screen flex items-center">
        {/* Video Background with new styling */}
        <div className="absolute inset-0 overflow-hidden">
          
          <div className="bg-[url('https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3')] bg-cover bg-center h-full w-full opacity-30 scale-110 animate-[pulse_4s_ease-in-out_infinite]" />
   <div className="absolute inset-0 z-10 pointer-events-none fade-grid mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background z-20" />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
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
      <div className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-[#33C3F0] bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add 3 featured project cards here */}
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="relative group overflow-hidden rounded-lg aspect-video bg-gray-900 hover:scale-105 transition-transform duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 p-4">
                  <h3 className="text-lg font-semibold text-white">Project {item}</h3>
                  <p className="text-sm text-gray-300">Cinematic Edit</p>
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
