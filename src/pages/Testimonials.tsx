import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Husain Basha",
      role: "Founder, Hustle Lifestyle",
      badge: "16M+ Campaign",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      content: "Flogrit turned my business into a recognized personal brand. Their video strategy generated over 16 million views across Instagram and YouTube in just weeks.",
      highlight: "16M+ Views Campaign"
    },
    {
      name: "Gurujyoth",
      role: "Founder, Horizon Aviation Academy",
      badge: "50+ Admissions",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
      content: "He always goes an extra mile to produce the best outcome possible. Over his time working with us, we had about 50+ students enrolled. 10/10 recommended.",
      highlight: "50+ Enrolled Students"
    },
    {
      name: "Nivas K.",
      role: "Content Manager, Creator Team",
      badge: "Media Lead",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      content: "Anand breathes completely new life into the edit. Your creativity, fresh visual style, and ability to transform raw ideas into engaging content make a huge difference.",
      highlight: "Creative Direction"
    },
    {
      name: "Charan",
      role: "Content Strategist, Creator Team",
      badge: "Strategist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
      content: "Anand actively contributes creative ideas that elevate every video beyond expectations. He combines technical post-production excellence with genuine creative thinking.",
      highlight: "Pacing & Retention"
    }
  ];

  return (
    <div className="py-14 sm:py-20 relative overflow-hidden bg-[#050507] border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-neutral-300 text-[10px] sm:text-xs font-mono uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Endorsements
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            What Collaborators Say
          </h2>
          <p className="mt-2.5 sm:mt-3 text-neutral-400 text-xs sm:text-base font-sans">
            Honest feedback from founders and content teams I've worked with side by side.
          </p>
        </div>

        {/* Testimonials Container: Horizontal Snap on Mobile, 4-col Grid on Desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-3.5 pb-4 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-5 no-scrollbar">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -3 }}
              className="min-w-[85vw] sm:min-w-0 snap-center p-5 sm:p-6 rounded-2xl bg-black/40 border border-white/[0.08] hover:border-white/20 flex flex-col justify-between backdrop-blur-md transition-all duration-300 flex-shrink-0"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] text-neutral-400 border border-white/[0.05]">
                    {testimonial.highlight}
                  </span>
                </div>

                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                <div className="w-9 h-9 rounded-full overflow-hidden border border-white/10 flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <h3 className="font-heading font-bold text-xs sm:text-sm text-white truncate">{testimonial.name}</h3>
                    <span className="inline-flex items-center text-[9px] font-mono font-medium text-emerald-400 bg-emerald-500/10 px-1 py-0.2 rounded border border-emerald-500/20">
                      ✓
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400 truncate">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <p className="sm:hidden text-center text-[10px] font-mono text-neutral-400 mt-2">
          ← Swipe to view more reviews →
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
