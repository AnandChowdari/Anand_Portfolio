
import { Play } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Cinematic Travel Film",
      category: "Travel",
      thumbnail: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      description: "A visual journey through exotic locations"
    },
    {
      title: "Product Launch",
      category: "Corporate",
      thumbnail: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
      description: "High-end product showcase"
    },
    {
      title: "Music Video Edit",
      category: "Music",
      thumbnail: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
      description: "Dynamic music video editing"
    },
    // Add more projects as needed
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-background to-black/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-6">
            Portfolio
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            A collection of my best work in video editing and visual storytelling.
          </p>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 p-6 w-full">
                    <p className="text-primary mb-2">{project.category}</p>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <button className="flex items-center gap-2 text-white hover:text-primary transition-colors">
                      <Play size={20} />
                      Watch Project
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
