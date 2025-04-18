
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Chen",
      role: "YouTube Creator",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      content: "Anand transformed my content with his exceptional editing skills. The attention to detail and creative transitions made my videos stand out.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
      content: "Professional, creative, and always delivers on time. The corporate videos Anand edited for us received amazing feedback from our clients.",
      rating: 5
    },
    {
      name: "Mike Williams",
      role: "Independent Filmmaker",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
      content: "Working with Anand was a game-changer for my documentary. His storytelling ability through editing is truly remarkable.",
      rating: 5
    },
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
