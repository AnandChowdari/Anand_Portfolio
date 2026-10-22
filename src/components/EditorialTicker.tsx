import React from 'react';
import { motion } from 'framer-motion';

export default function EditorialTicker() {
  const items = [
    'DIRECT-RESPONSE VSLs',
    '50M+ ORGANIC VIEWS',
    'KINETIC 3D MOTION DESIGN',
    'ALGO-OPTIMIZED RETENTION PACING',
    'CINEMATIC SOUND ARCHITECTURE',
    '25+ CLIENTS DELIVERED',
    'PROPRIETARY ADOBE EXTENSIONS',
    'MULTI-MILLION VIEW DOCUMENTARIES',
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#030305] border-y border-white/[0.08] py-3.5 select-none z-20">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
        className="flex items-center gap-8 whitespace-nowrap w-max"
      >
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-8 text-neutral-400 hover:text-white transition-colors">
            <span className="text-[11px] sm:text-xs font-mono tracking-widest uppercase font-medium">
              {text}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
