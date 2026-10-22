import React from 'react';
import { motion } from 'framer-motion';

export default function BrandLogos() {
  const brandLogos = [
    {
      id: 'youtube',
      name: 'YouTube',
      role: 'Creator Channels',
      delay: 0,
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      id: 'flogrit',
      name: 'Flogrit',
      role: 'Growth & Media',
      delay: 0.3,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 sm:w-8 sm:h-8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="currentColor" fillOpacity="0.2" />
        </svg>
      ),
    },
    {
      id: 'editlobby',
      name: 'Edit Lobby',
      role: 'Post Suite',
      delay: 0.6,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 sm:w-8 sm:h-8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="3" ry="3" />
          <line x1="7" y1="2" x2="7" y2="22" />
          <line x1="17" y1="2" x2="17" y2="22" />
          <line x1="2" y1="12" x2="22" y2="12" />
        </svg>
      ),
    },
    {
      id: 'hustle-lifestyle',
      name: 'Hustle Lifestyle',
      role: '16M+ Doc & Funnel',
      delay: 0.9,
      icon: (
        <span className="font-heading font-black tracking-tighter text-lg sm:text-xl select-none">
          HL
        </span>
      ),
    },
    {
      id: 'horizon-aviation',
      name: 'Horizon Aviation',
      role: '50+ Enrolled',
      delay: 1.2,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 sm:w-8 sm:h-8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="clients" className="relative py-20 sm:py-24 bg-[#050507] border-y border-white/[0.08] overflow-hidden">
      {/* Subtle radial ambient glow - monochrome silver/soft light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Human, approachable header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-neutral-400 text-[11px] font-mono tracking-widest uppercase mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
            Proven Client Track Record
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-white tracking-tight leading-snug"
          >
            Worked with 25+ clients and delivered immense value and results.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-3 text-neutral-400 text-sm sm:text-base font-sans max-w-lg"
          >
            From high-ticket VSLs to multi-million view YouTube series — partnering with founders, creators, and media companies to scale their reach and conversions.
          </motion.p>
        </div>

        {/* Monochromatic Floating Circular Logos */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-14 my-8">
          {brandLogos.map((brand, idx) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-col items-center group cursor-default"
            >
              {/* Floating Circular Emblem */}
              <motion.div
                animate={{
                  y: [0, -7, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4 + (idx % 3),
                  ease: 'easeInOut',
                  delay: brand.delay,
                }}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/[0.03] border border-white/[0.08] group-hover:border-white/30 group-hover:bg-white/[0.07] backdrop-blur-md flex items-center justify-center text-neutral-400 group-hover:text-white transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.6)] group-hover:shadow-[0_12px_40px_rgba(255,255,255,0.08)] group-hover:scale-105"
              >
                {brand.icon}
              </motion.div>

              {/* Minimalist Monochromatic Label */}
              <span className="mt-3 text-xs sm:text-sm font-heading font-semibold text-neutral-300 group-hover:text-white transition-colors tracking-tight">
                {brand.name}
              </span>
              <span className="text-[10px] font-mono text-neutral-400">
                {brand.role}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Minimalist Stat Strip */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-2xl sm:text-3xl font-heading font-extrabold text-white">25+</p>
            <p className="text-xs text-neutral-400 font-sans mt-0.5">Clients & Brands</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-heading font-extrabold text-white">50M+</p>
            <p className="text-xs text-neutral-400 font-sans mt-0.5">Total Organic Views</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-heading font-extrabold text-white">16M+</p>
            <p className="text-xs text-neutral-400 font-sans mt-0.5">Hustle Lifestyle Reach</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-heading font-extrabold text-white">3.8x</p>
            <p className="text-xs text-neutral-400 font-sans mt-0.5">Conversion Rate Lift</p>
          </div>
        </div>
      </div>
    </section>
  );
}
