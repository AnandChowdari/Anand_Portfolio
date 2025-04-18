
import { ButtonGradient } from '@/components/ui/button-gradient';
import { Link } from 'react-router-dom';
import { FilmIcon, Instagram, Youtube, Video, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Youtube,
      title: "YouTube Video Editing",
      description: "Professional editing for YouTube content creators, including engaging intros, smooth transitions, and compelling storytelling.",
      features: ["Custom Thumbnails", "Engaging Transitions", "Sound Design", "End Screens"]
    },
    {
      icon: Instagram,
      title: "Reels and Short Videos",
      description: "Eye-catching short-form content optimized for Instagram, TikTok, and YouTube Shorts.",
      features: ["Vertical Optimization", "Trending Effects", "Music Integration", "Call-to-Actions"]
    },
    {
      icon: FilmIcon,
      title: "Cinematic Edits",
      description: "High-quality cinematic editing for films, documentaries, and promotional content.",
      features: ["Color Grading", "Visual Effects", "Sound Design", "Narrative Flow"]
    },
    {
      icon: Palette,
      title: "Color Grading",
      description: "Professional color correction and grading to enhance the visual appeal of your content.",
      features: ["Color Correction", "Look Development", "Style Matching", "HDR Support"]
    },
    {
      icon: Video,
      title: "Corporate Videos",
      description: "Professional video editing for business presentations, product launches, and corporate communications.",
      features: ["Brand Consistency", "Professional Polish", "Clear Messaging", "Quick Turnaround"]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-background to-black/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-6">
            Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Professional video editing services tailored to your needs. From YouTube content to cinematic films, I help bring your vision to life.
          </p>
          <ButtonGradient asChild>
            <Link to="/contact">Get Started</Link>
          </ButtonGradient>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 rounded-lg bg-black/30 border border-border hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105">
                <service.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
