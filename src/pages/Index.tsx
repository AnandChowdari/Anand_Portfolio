
import { Play } from 'lucide-react';
import { ButtonGradient } from '@/components/ui/button-gradient';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background z-10" />
          {/* Add your showreel video here */}
          <div className="bg-[url('https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3')] bg-cover bg-center h-full w-full opacity-50" />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-6">
              Crafting Stories Through Visual Editing
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Hi, I'm Anand Chowdari, a professional video editor specializing in cinematic storytelling and dynamic content creation.
            </p>
            <div className="flex flex-wrap gap-4">
              <ButtonGradient asChild size="lg">
                <Link to="/contact">
                  Hire Me
                </Link>
              </ButtonGradient>
              <ButtonGradient variant="outline" size="lg" asChild>
                <Link to="/portfolio" className="flex items-center gap-2">
                  <Play size={20} />
                  Watch Showreel
                </Link>
              </ButtonGradient>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Work Preview */}
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
