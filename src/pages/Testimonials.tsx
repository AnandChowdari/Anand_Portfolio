
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Husain Basha",
      role: "Founder, Husle Lifestyle",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      content: "Flogrit turned my successful business into a recognized personal brand. Their strategy generated over 16 million views across Instagram and YouTube in just weeks.",
      rating: 5
    },
    {
      name: "Nivas",
      role: "Content Manager, Husain Basha Team",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      content: "Anand breathes completely new life into the edit. Your creativity, fresh visual style, and ability to transform ideas into engaging content make a huge difference.",
      rating: 5
    },
    {
      name: "Charan",
      role: "Content Strategist, Husain Basha Team",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      content: "Anand actively contributes creative ideas that elevate every video beyond expectations. He combines technical excellence with genuine creative thinking.",
      rating: 5
    },
    {
      name: "Gurujyoth",
      role: "Founder, Pilot Academy",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
      content: "He always goes an extra mile to produce the best outcome possible. Over his time working with us, we had about 50+ students enrolled. 10/10 recommended.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-background to-black/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-6">
            Client Testimonials
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Don't just take my word for it. Here's what my clients have to say about working with me.
          </p>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-black/30 border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-gray-300 mb-6">"{testimonial.content}"</p>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
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

export default Testimonials;
