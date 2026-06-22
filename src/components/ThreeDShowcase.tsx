import { useRef, useState, useEffect, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';

const OrbitVideoCard = ({ src, poster, style, className, isPlaying }: { 
  src: string; poster: string; style: React.CSSProperties; className?: string; isPlaying: boolean;
}) => {
  return (
    <div className={className} style={style}>
      <img 
        src={poster} 
        alt="Video thumbnail" 
        className="absolute inset-0 w-full h-full object-cover z-0 rounded-xl" 
      />
      {isPlaying && (
        <video 
          src={src} 
          poster={poster}
          muted 
          loop 
          autoPlay
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-10 rounded-xl" 
        />
      )}
    </div>
  );
};

/* ───────── Orbiting Carousel Row ───────── */
const OrbitRow = ({ 
  items, 
  direction, 
  cardWidth, 
  cardHeight, 
  label,
  duration,
}: { 
  items: { src: string; poster: string }[];
  direction: 'cw' | 'ccw';
  cardWidth: number;
  cardHeight: number;
  label: string;
  duration: number;
}) => {
  const count = items.length;
  const angleStep = 360 / count;
  const gap = 30;
  const radius = Math.max(((count * (cardWidth + gap)) / (2 * Math.PI)), 300);
  
  const [currentAngle, setCurrentAngle] = useState(0);
  const animRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    const speed = (direction === 'cw' ? 1 : -1) * (360 / (duration * 1000));
    
    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;
      
      setCurrentAngle(prev => (prev + speed * delta) % 360);
      animRef.current = requestAnimationFrame(animate);
    };
    
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [direction, duration]);

  return (
    <div className="flex flex-col items-center gap-8">
      {/* Label */}
      <div className={`px-6 py-2 rounded-full border backdrop-blur-md font-heading font-semibold text-xs md:text-sm tracking-wider uppercase ${
        direction === 'cw' 
          ? 'border-white/20 bg-black/60 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)]' 
          : 'border-primary/40 bg-primary/20 text-primary shadow-[0_0_20px_rgba(155,135,245,0.1)]'
      }`}>
        {label}
      </div>

      {/* Orbit container */}
      <div 
        className="relative"
        style={{ 
          width: `${radius * 2 + cardWidth}px`,
          height: `${cardHeight + 80}px`,
          maxWidth: '95vw',
        }}
      >
        {items.map((item, idx) => {
          const angle = ((idx * angleStep) + currentAngle) * (Math.PI / 180);
          
          // Position on ellipse (wider than tall for horizontal orbit feel)
          const x = Math.sin(angle) * radius;
          const z = Math.cos(angle); // -1 (back) to 1 (front)
          
          // Map z from [-1, 1] to scale and opacity
          const normalizedZ = (z + 1) / 2; // 0 (back) to 1 (front)
          const scale = 0.55 + normalizedZ * 0.45; // 0.55 to 1.0
          const opacity = 0.3 + normalizedZ * 0.7; // 0.3 to 1.0
          const zIndex = Math.round(normalizedZ * 100);
          const blur = normalizedZ < 0.3 ? `blur(${(1 - normalizedZ) * 3}px)` : 'none';
          
          // Only play videos strictly in the front arc (roughly 3-4 videos)
          const isPlaying = normalizedZ > 0.85;

          return (
            <OrbitVideoCard
              key={idx}
              src={item.src}
              poster={item.poster}
              isPlaying={isPlaying}
              className="absolute rounded-xl overflow-hidden border border-white/10 shadow-2xl transition-none"
              style={{
                width: `${cardWidth}px`,
                height: `${cardHeight}px`,
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) translateX(${x}px) scale(${scale})`,
                opacity,
                zIndex,
                filter: blur,
              }}
            />
          );
        })}

        {/* Subtle reflection/shadow underneath */}
        <div 
          className="absolute w-2/3 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            height: '50px',
            bottom: '-30px',
            background: 'radial-gradient(ellipse at center, rgba(155,135,245,0.12) 0%, transparent 70%)',
            filter: 'blur(20px)',
          }}
        />
      </div>
    </div>
  );
};

/* ───────── Main 3D Showcase ───────── */
const ThreeDShowcase = () => {
  // All 16 vertical videos in ascending order
  const verticalVideos = [
    { src: '/videos/Nested Sequence 03.mp4', poster: '/videos/posters/Nested Sequence 03.jpg' },
    { src: '/videos/Nested Sequence 04.mp4', poster: '/videos/posters/Nested Sequence 04.jpg' },
    { src: '/videos/Nested Sequence 05.mp4', poster: '/videos/posters/Nested Sequence 05.jpg' },
    { src: '/videos/Nested Sequence 06.mp4', poster: '/videos/posters/Nested Sequence 06.jpg' },
    { src: '/videos/Nested Sequence 07.mp4', poster: '/videos/posters/Nested Sequence 07.jpg' },
    { src: '/videos/Nested Sequence 08.mp4', poster: '/videos/posters/Nested Sequence 08.jpg' },
    { src: '/videos/Nested Sequence 09.mp4', poster: '/videos/posters/Nested Sequence 09.jpg' },
    { src: '/videos/Nested Sequence 10.mp4', poster: '/videos/posters/Nested Sequence 10.jpg' },
    { src: '/videos/Nested Sequence 11.mp4', poster: '/videos/posters/Nested Sequence 11.jpg' },
    { src: '/videos/Nested Sequence 12 1.mp4', poster: '/videos/posters/Nested Sequence 12 1.jpg' },
    { src: '/videos/Nested Sequence 14.mp4', poster: '/videos/posters/Nested Sequence 14.jpg' },
    { src: '/videos/Nested Sequence 15.mp4', poster: '/videos/posters/Nested Sequence 15.jpg' },
    { src: '/videos/Nested Sequence 17.mp4', poster: '/videos/posters/Nested Sequence 17.jpg' },
    { src: '/videos/Nested Sequence 18.mp4', poster: '/videos/posters/Nested Sequence 18.jpg' },
    { src: '/videos/Nested Sequence 19.mp4', poster: '/videos/posters/Nested Sequence 19.jpg' },
    { src: '/videos/Nested Sequence 20.mp4', poster: '/videos/posters/Nested Sequence 20.jpg' },
  ];

  // All 11 horizontal videos
  const horizontalVideos = [
    { src: '/videos/horizontal/Nested Sequence 22.mp4', poster: '/videos/horizontal/posters/Nested Sequence 22.jpg' },
    { src: '/videos/horizontal/Nested Sequence 23.mp4', poster: '/videos/horizontal/posters/Nested Sequence 23.jpg' },
    { src: '/videos/horizontal/Nested Sequence 24.mp4', poster: '/videos/horizontal/posters/Nested Sequence 24.jpg' },
    { src: '/videos/horizontal/Nested Sequence 25.mp4', poster: '/videos/horizontal/posters/Nested Sequence 25.jpg' },
    { src: '/videos/horizontal/Nested Sequence 26.mp4', poster: '/videos/horizontal/posters/Nested Sequence 26.jpg' },
    { src: '/videos/horizontal/Nested Sequence 27.mp4', poster: '/videos/horizontal/posters/Nested Sequence 27.jpg' },
    { src: '/videos/horizontal/Nested Sequence 28.mp4', poster: '/videos/horizontal/posters/Nested Sequence 28.jpg' },
    { src: '/videos/horizontal/Nested Sequence 29.mp4', poster: '/videos/horizontal/posters/Nested Sequence 29.jpg' },
    { src: '/videos/horizontal/Nested Sequence 30.mp4', poster: '/videos/horizontal/posters/Nested Sequence 30.jpg' },
    { src: '/videos/horizontal/Nested Sequence 31.mp4', poster: '/videos/horizontal/posters/Nested Sequence 31.jpg' },
    { src: '/videos/horizontal/Nested Sequence 32.mp4', poster: '/videos/horizontal/posters/Nested Sequence 32.jpg' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="relative w-full overflow-hidden py-20 md:py-32 flex flex-col items-center justify-center gap-20 md:gap-28 bg-black"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/15 blur-[150px] rounded-full pointer-events-none" />

      {/* Top Orbit: Vertical Videos */}
      <OrbitRow 
        items={verticalVideos}
        direction="cw"
        cardWidth={200}
        cardHeight={356}
        label="High Performing Reels"
        duration={35}
      />

      {/* Bottom Orbit: Horizontal Videos */}
      <OrbitRow 
        items={horizontalVideos}
        direction="ccw"
        cardWidth={400}
        cardHeight={225}
        label="Long Retention Intros"
        duration={35}
      />
    </motion.div>
  );
};

export default ThreeDShowcase;
