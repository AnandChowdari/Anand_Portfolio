
import { Play, Video, Camera, Zap, Briefcase, Film, X } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('thumbnails');
  const [hoveredThumbnail, setHoveredThumbnail] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const portfolioSections = [
    { id: 'video-edits', title: 'Video Edits', icon: Video, description: 'Professional video editing showcase' },
    { id: 'thumbnails', title: 'Thumbnails', icon: Camera, description: 'Eye-catching thumbnail designs' },
    { id: 'motion-graphics', title: 'Motion Graphics', icon: Zap, description: 'Dynamic animations and effects' },
    { id: 'commercial', title: 'Commercial Work', icon: Briefcase, description: 'Corporate and brand videos' },
    { id: 'short-films', title: 'Short Films', icon: Film, description: 'Cinematic storytelling projects' }
  ];

  const videoCategories = [
    {
      title: "Travel & Adventure",
      videos: [
        { id: "dQw4w9WgXcQ", title: "Epic Mountain Journey" },
        { id: "dQw4w9WgXcQ", title: "Ocean Adventure" }
      ]
    },
    {
      title: "Music Videos",
      videos: [
        { id: "dQw4w9WgXcQ", title: "Electronic Beat Drop" },
        { id: "dQw4w9WgXcQ", title: "Acoustic Sessions" }
      ]
    },
    {
      title: "Corporate & Promotional",
      videos: [
        { id: "dQw4w9WgXcQ", title: "Product Launch Video" },
        { id: "dQw4w9WgXcQ", title: "Company Overview" }
      ]
    },
    {
      title: "Wedding & Events",
      videos: [
        { id: "dQw4w9WgXcQ", title: "Romantic Wedding Film" },
        { id: "dQw4w9WgXcQ", title: "Event Highlights" }
      ]
    },
    {
      title: "Documentary Style",
      videos: [
        { id: "dQw4w9WgXcQ", title: "Behind the Scenes" },
        { id: "dQw4w9WgXcQ", title: "Interview Series" }
      ]
    }
  ];

  const thumbnailProjects = [
    {
      title: "Cinematic Travel Film",
      category: "Travel",
      style: "Cinematic Style",
      thumbnail: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=500&h=300&fit=crop",
      description: "A visual journey through exotic locations",
      views: "2.3M views"
    },
    {
      title: "Product Launch",
      category: "Corporate",
      style: "Commercial Style",
      thumbnail: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=500&h=300&fit=crop",
      description: "High-end product showcase",
      views: "1.8M views"
    },
    {
      title: "Music Video Edit",
      category: "Music",
      style: "Podcast Style",
      thumbnail: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=500&h=300&fit=crop",
      description: "Dynamic music video editing",
      views: "5.2M views"
    },
    {
      title: "Wedding Highlights",
      category: "Wedding",
      style: "Romantic Style",
      thumbnail: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500&h=300&fit=crop",
      description: "Romantic wedding cinematography",
      views: "892K views"
    },
    {
      title: "Corporate Documentary",
      category: "Corporate",
      style: "Documentary Style",
      thumbnail: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500&h=300&fit=crop",
      description: "Professional corporate storytelling",
      views: "1.1M views"
    },
    {
      title: "Action Sports",
      category: "Sports",
      style: "Action Style",
      thumbnail: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=300&fit=crop",
      description: "High-energy sports cinematography",
      views: "3.7M views"
    }
  ];

  const renderVideoEdits = () => (
    <div className="space-y-12">
      {videoCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="space-y-6">
          <h3 className="text-2xl font-bold text-gradient-purple">{category.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {category.videos.map((video, videoIndex) => (
              <div key={videoIndex} className="group">
                <div className="aspect-video rounded-lg overflow-hidden bg-muted/20 border border-border/50">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="hover:scale-105 transition-transform duration-300"
                  ></iframe>
                </div>
                <h4 className="mt-3 font-semibold text-foreground group-hover:text-primary transition-colors">
                  {video.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderThumbnails = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {thumbnailProjects.map((project, index) => (
        <Card 
          key={index} 
          className="group relative overflow-hidden bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
        >
          <div className="aspect-video w-full overflow-hidden">
            <img 
              src={project.thumbnail} 
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 p-4 w-full">
              <div className="flex items-center justify-between mb-2">
                <span className="text-primary text-xs font-medium px-2 py-1 bg-primary/20 rounded-full">
                  {project.category}
                </span>
                <span className="text-muted-foreground text-xs">{project.views}</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-accent text-xs font-medium px-2 py-1 bg-accent/20 rounded-full">
                  {project.style}
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">{project.title}</h3>
              <p className="text-muted-foreground mb-3 text-sm">{project.description}</p>
              <a 
                href="/contact" 
                className="inline-flex items-center text-xs font-medium text-foreground hover:text-primary transition-colors bg-background/80 px-3 py-1.5 rounded border border-border/50 hover:border-primary/50"
              >
                Get Quote
              </a>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );

  const renderDefaultSection = () => (
    <div className="text-center py-20">
      <h3 className="text-2xl font-bold text-gradient-purple mb-4">Coming Soon</h3>
      <p className="text-muted-foreground">This section is currently being updated with new content.</p>
    </div>
  );

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-background via-background/95 to-background/80 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            Portfolio
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
            Explore my creative journey through video editing, motion graphics, and visual storytelling.
          </p>
        </div>
      </div>

      {/* Navigation Sections */}
      <div className="py-8 bg-background/80 backdrop-blur-sm border-b border-border/50 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {portfolioSections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-primary text-primary-foreground shadow-[0_0_20px_rgba(155,135,245,0.3)]'
                      : 'bg-card/50 text-muted-foreground hover:bg-card hover:text-foreground border border-border/50 hover:border-primary/30'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{section.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {portfolioSections.find(s => s.id === activeSection)?.title}
            </h2>
            <p className="text-muted-foreground text-lg">
              {portfolioSections.find(s => s.id === activeSection)?.description}
            </p>
          </div>
          
          {activeSection === 'video-edits' && renderVideoEdits()}
          {activeSection === 'thumbnails' && renderThumbnails()}
          {['motion-graphics', 'commercial', 'short-films'].includes(activeSection) && renderDefaultSection()}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;