import { useState, useMemo, useRef } from 'react';
import { Play, Video, Film, Camera, Zap, Maximize2, Layers, ChevronDown, ChevronUp } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { motion, AnimatePresence } from 'framer-motion';
import AutoScroll from 'embla-carousel-auto-scroll';
import VerticalVideoShowcase from './VerticalVideoShowcase';

/* ───────── Hover-to-Play Video Card ─────────
   Decodes and plays ONLY when hovered by the cursor.
   Displays lightweight poster otherwise.
───────────────────────────────────────────── */
const HoverVideoCard = ({
  src,
  poster,
  title,
  aspect = '9/16',
  badge,
  onClick,
}: {
  src: string;
  poster?: string;
  title: string;
  aspect?: '9/16' | 'video';
  badge?: string;
  onClick: () => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -3 }}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-[#09090c] border border-white/[0.08] hover:border-white/25 shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.8)] transition-all duration-300 ${
        aspect === '9/16' ? 'aspect-[9/16]' : 'aspect-video'
      }`}
    >
      {/* High-res Poster image */}
      {poster && (
        <img
          src={poster}
          alt={title}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isPlaying ? 'opacity-0' : 'opacity-100'
          }`}
        />
      )}

      {/* Video element - active on hover */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        className={`w-full h-full object-cover relative z-10 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Overlay on Hover */}
      <div className="absolute inset-0 z-20 flex flex-col justify-between p-4 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="flex justify-between items-center">
          {badge ? (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/60 text-neutral-300 font-medium backdrop-blur-md border border-white/10">
              {badge}
            </span>
          ) : <div />}
          <span className="p-1.5 rounded-full bg-black/75 text-white/90 backdrop-blur-md border border-white/10">
            <Maximize2 size={13} />
          </span>
        </div>

        <div>
          <p className="text-white text-sm sm:text-base font-semibold leading-snug drop-shadow-md">{title}</p>
          <span className="text-[11px] text-neutral-300 font-mono mt-1 inline-flex items-center gap-1">
            <Play size={10} className="fill-current text-white" /> Click to watch with audio
          </span>
        </div>
      </div>

      {/* Ambient Play hint when not hovered */}
      {!isHovered && (
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <div className="bg-black/40 backdrop-blur-md border border-white/10 text-white/90 rounded-full p-2.5 shadow-xl group-hover:scale-110 transition-all duration-300">
            <Play size={15} className="ml-0.5 fill-current" />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default function PortfolioShowcase() {
  const [isVaultExpanded, setIsVaultExpanded] = useState(false);
  const [activeFormat, setActiveFormat] = useState<'all' | 'reels' | 'longform' | 'motion' | 'thumbnails'>('all');
  const [modalMedia, setModalMedia] = useState<{ src: string; title: string; aspect?: '9/16' | 'video' } | null>(null);

  // Top 6 Featured Vertical Videos (Shown upfront by default)
  const top6Vertical = [
    { src: '/videos/Nested Sequence 17.mp4', poster: '/videos/posters/Nested Sequence 17.jpg', title: 'Horizon Aviation Admissions Cut', badge: '01 / Horizon Aviation' },
    { src: '/videos/Nested Sequence 03.mp4', poster: '/videos/posters/Nested Sequence 03.jpg', title: 'High-Retention Hook Cut', badge: '02 / Hook Cut' },
    { src: '/videos/Nested Sequence 04.mp4', poster: '/videos/posters/Nested Sequence 04.jpg', title: 'Kinetic Typography Flow', badge: '03 / Kinetic Type' },
    { src: '/videos/Nested Sequence 05.mp4', poster: '/videos/posters/Nested Sequence 05.jpg', title: 'Story-Driven Micro Edit', badge: '04 / Narrative' },
    { src: '/videos/Nested Sequence 06.mp4', poster: '/videos/posters/Nested Sequence 06.jpg', title: 'Fast-Paced Brand Reel', badge: '05 / Brand Reel' },
    { src: '/videos/Nested Sequence 08.mp4', poster: '/videos/posters/Nested Sequence 08.jpg', title: 'Viral Trend Format', badge: '06 / Trend Pacing' },
  ];

  // Full Vault: 17 Vertical Reels
  const allVertical = [
    ...top6Vertical,
    { src: '/videos/Nested Sequence 07.mp4', poster: '/videos/posters/Nested Sequence 07.jpg', title: 'Social Proof Showcase', badge: 'Proof Cut' },
    { src: '/videos/Nested Sequence 09.mp4', poster: '/videos/posters/Nested Sequence 09.jpg', title: 'Visual Pacing Reel', badge: 'Pacing' },
    { src: '/videos/Nested Sequence 10.mp4', poster: '/videos/posters/Nested Sequence 10.jpg', title: 'Cinematic Portrait Cut', badge: 'Cinematic' },
    { src: '/videos/Nested Sequence 11.mp4', poster: '/videos/posters/Nested Sequence 11.jpg', title: 'Engagement Booster Reel', badge: 'Engagement' },
    { src: '/videos/Nested Sequence 12 1.mp4', poster: '/videos/posters/Nested Sequence 12 1.jpg', title: 'Creator Story Flow', badge: 'Story' },
    { src: '/videos/Nested Sequence 14.mp4', poster: '/videos/posters/Nested Sequence 14.jpg', title: 'Horizon Aviation — Cadet Journey', badge: 'Horizon Aviation' },
    { src: '/videos/Nested Sequence 15.mp4', poster: '/videos/posters/Nested Sequence 15.jpg', title: 'Horizon Aviation — Cockpit Rhythm', badge: 'Horizon Aviation' },
    { src: '/videos/Nested Sequence 18.mp4', poster: '/videos/posters/Nested Sequence 18.jpg', title: 'Audio-Synced Cut', badge: 'Audio Sync' },
    { src: '/videos/Nested Sequence 19.mp4', poster: '/videos/posters/Nested Sequence 19.jpg', title: 'SaaS Motion Reel', badge: 'SaaS Motion' },
    { src: '/videos/Nested Sequence 20.mp4', poster: '/videos/posters/Nested Sequence 20.jpg', title: 'Horizon Aviation — Training Program', badge: 'Horizon Aviation' },
    { src: '/videos/Nested Sequence 21.mp4', poster: '/videos/posters/Nested Sequence 21.jpg', title: 'Influencer Growth Reel', badge: 'Creator' },
  ];

  // Full Vault: 12 Horizontal 16:9 Cuts
  const allHorizontal = [
    { src: '/videos/horizontal/Main Cut.mp4', poster: '/videos/horizontal/posters/Main Cut.jpg', title: 'Anand Chowdari — 2025 Master Reel' },
    { src: '/videos/horizontal/Nested Sequence 22.mp4', poster: '/videos/horizontal/posters/Nested Sequence 22.jpg', title: 'Brand Story Narrative' },
    { src: '/videos/horizontal/Nested Sequence 23.mp4', poster: '/videos/horizontal/posters/Nested Sequence 23.jpg', title: 'Cinematic Commercial' },
    { src: '/videos/horizontal/Nested Sequence 24.mp4', poster: '/videos/horizontal/posters/Nested Sequence 24.jpg', title: 'YouTube Documentary Cut' },
    { src: '/videos/horizontal/Nested Sequence 25.mp4', poster: '/videos/horizontal/posters/Nested Sequence 25.jpg', title: 'High-Impact Brand Teaser' },
    { src: '/videos/horizontal/Nested Sequence 26.mp4', poster: '/videos/horizontal/posters/Nested Sequence 26.jpg', title: 'Corporate Showcase' },
    { src: '/videos/horizontal/Nested Sequence 27.mp4', poster: '/videos/horizontal/posters/Nested Sequence 27.jpg', title: 'In-Depth Product Breakdown' },
    { src: '/videos/horizontal/Nested Sequence 28.mp4', poster: '/videos/horizontal/posters/Nested Sequence 28.jpg', title: 'Course Masterclass Trailer' },
    { src: '/videos/horizontal/Nested Sequence 29.mp4', poster: '/videos/horizontal/posters/Nested Sequence 29.jpg', title: 'Cinematic Sequence' },
    { src: '/videos/horizontal/Nested Sequence 30.mp4', poster: '/videos/horizontal/posters/Nested Sequence 30.jpg', title: 'Long-form Visual Journey' },
    { src: '/videos/horizontal/Nested Sequence 31.mp4', poster: '/videos/horizontal/posters/Nested Sequence 31.jpg', title: 'Documentary Pacing & Grade' },
    { src: '/videos/horizontal/Nested Sequence 32.mp4', poster: '/videos/horizontal/posters/Nested Sequence 32.jpg', title: 'Agency Spotlight Story' },
  ];

  const thumbnailProjects = [
    { title: 'Design Spo V4', category: 'Web & UI', thumbnail: 'https://res.cloudinary.com/dcnh1eltg/image/upload/v1756578124/Design_Spo_-_24_Web_Design_v4_rfkroo.jpg', metric: 'HIGH CTR' },
    { title: 'Personal Brand Launch', category: 'Creator', thumbnail: 'https://res.cloudinary.com/dcnh1eltg/image/upload/v1756579509/shruti_ponugati_thumbnail_eeeobw.jpg', metric: '100K+ REACH' },
    { title: '3D VFX Breakdown', category: '3D Motion', thumbnail: 'https://res.cloudinary.com/dcnh1eltg/image/upload/v1756579578/The_Blender_Render-Recovered_cwmfk9.jpg', metric: 'FEATURED' },
    { title: 'SaaS Client Spotlight', category: 'SaaS / Dev', thumbnail: 'https://res.cloudinary.com/dcnh1eltg/image/upload/v1756579490/The_Admin_Bar_2_hxnvlg.jpg', metric: 'VIRAL' },
    { title: 'Design Explainer', category: 'Explainer', thumbnail: 'https://res.cloudinary.com/dcnh1eltg/image/upload/v1756579442/Design_Spo_-_24_Web_Design_V1_rsrbtt.png', metric: 'TOP PICK' },
    { title: 'Cinematic Cutdown', category: 'Cinematic', thumbnail: 'https://res.cloudinary.com/dcnh1eltg/image/upload/v1756579816/ba1d0292-aebf-4c40-bab1-3757a110a9a1.png', metric: 'TRENDING' },
  ];

  const autoScrollPluginVertical = useMemo(() => AutoScroll({ playOnInit: true, speed: 0.9, stopOnInteraction: false }), []);
  const autoScrollPluginHorizontal = useMemo(() => AutoScroll({ playOnInit: true, speed: 0.8, stopOnInteraction: false }), []);

  const formatTabs = [
    { id: 'all', label: 'All Library', icon: Layers },
    { id: 'reels', label: 'Vertical Cuts (17)', icon: Video },
    { id: 'longform', label: 'Horizontal & 16:9 (11)', icon: Film },
    { id: 'motion', label: 'Motion Graphics', icon: Zap },
    { id: 'thumbnails', label: 'Thumbnails (6)', icon: Camera },
  ];

  return (
    <section id="work" className="py-16 sm:py-24 relative z-20 overflow-hidden bg-[#050507]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.04] text-neutral-300 text-xs font-mono uppercase tracking-widest mb-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Selected Works
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight"
          >
            Featured Video Portfolio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-2.5 text-neutral-400 text-xs sm:text-base font-sans max-w-lg mx-auto"
          >
            Engineered for high algorithmic retention and paid acquisition. Center videos autoplay in real-time — swipe or slide to navigate.
          </motion.p>
        </div>

        {/* ================= 75% SCREEN SIDE-SLIDING AUTOPLAY SHOWCASE ================= */}
        <VerticalVideoShowcase />

        {/* ================= UNVEIL MORE / EXPLORE FULL VAULT BUTTON ================= */}
        <div className="flex flex-col items-center justify-center my-10">
          <button
            onClick={() => setIsVaultExpanded((prev) => !prev)}
            className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/20 text-neutral-200 hover:text-white font-heading font-semibold text-sm transition-all duration-200 active:scale-[0.98]"
          >
            <span>{isVaultExpanded ? 'Collapse Extended Vault' : 'Explore All 25+ Works (Horizontal, Motion & Thumbnails)'}</span>
            {isVaultExpanded ? (
              <ChevronUp size={16} className="text-neutral-400 group-hover:text-white transition-colors" />
            ) : (
              <ChevronDown size={16} className="text-neutral-400 group-hover:text-white transition-colors" />
            )}
          </button>
          <span className="text-xs font-mono text-neutral-400 mt-2">
            {isVaultExpanded ? 'Showing full library below' : 'Click to unveil horizontal cuts, documentaries & motion graphics'}
          </span>
        </div>

        {/* ================= EXPANDED VAULT SECTION ================= */}
        <AnimatePresence>
          {isVaultExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="pt-6 overflow-hidden"
            >
              {/* Format Filter Bar */}
              <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
                {formatTabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeFormat === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveFormat(tab.id as any)}
                      className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium transition-all duration-200 whitespace-nowrap ${
                        isActive
                          ? 'bg-white text-black font-semibold shadow-md'
                          : 'bg-white/[0.04] text-neutral-400 hover:bg-white/[0.08] hover:text-white border border-white/[0.08]'
                      }`}
                    >
                      <Icon size={14} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* 1. Motion Graphics Mastercut */}
              {(activeFormat === 'all' || activeFormat === 'motion') && (
                <div className="mb-16">
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/[0.08]">
                    <h3 className="text-lg sm:text-xl font-heading font-bold text-white flex items-center gap-2">
                      <Zap size={18} className="text-neutral-400" />
                      Motion Graphics Mastercut (Blender & After Effects)
                    </h3>
                    <span className="text-xs font-mono text-neutral-400">60 FPS Render</span>
                  </div>

                  <div className="rounded-2xl overflow-hidden bg-black/50 border border-white/[0.08] p-4 sm:p-6 lg:p-8 backdrop-blur-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      <div className="lg:col-span-7 rounded-xl overflow-hidden border border-white/[0.08] shadow-2xl relative group">
                        <video
                          src="https://res.cloudinary.com/dcnh1eltg/video/upload/q_auto:eco,w_720/v1758885463/Shot_0_oj1nv3.mp4"
                          poster="https://res.cloudinary.com/dcnh1eltg/video/upload/v1758885463/Shot_0_oj1nv3.jpg"
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        />
                        <button
                          onClick={() =>
                            setModalMedia({
                              src: 'https://res.cloudinary.com/dcnh1eltg/video/upload/v1758885463/Shot_0_oj1nv3.mp4',
                              title: 'Motion Graphics Mastercut',
                              aspect: 'video',
                            })
                          }
                          className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-black/80 hover:bg-black text-white text-xs font-medium backdrop-blur-md border border-white/10 flex items-center gap-1.5 transition-colors"
                        >
                          <Maximize2 size={12} /> Full Screen
                        </button>
                      </div>

                      <div className="lg:col-span-5 space-y-3.5">
                        <span className="inline-block text-[11px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-white/[0.06] text-neutral-300 border border-white/[0.08]">
                          Custom Animation
                        </span>
                        <h4 className="text-xl sm:text-2xl font-heading font-bold text-white">
                          Kinetic Rhythm & 3D Visuals
                        </h4>
                        <p className="text-neutral-400 font-sans text-sm leading-relaxed">
                          Blending procedural 3D elements in Blender with tight keyframing in After Effects. Designed for tech startups and creators wanting distinct, modern visual identity.
                        </p>
                        <div className="grid grid-cols-2 gap-3 pt-2">
                          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                            <p className="text-lg font-bold text-white">60 FPS</p>
                            <p className="text-xs text-neutral-400 mt-0.5">Smooth Motion</p>
                          </div>
                          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                            <p className="text-lg font-bold text-white">Blender + AE</p>
                            <p className="text-xs text-neutral-400 mt-0.5">Custom Rigging</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 2. Horizontal 16:9 Cuts */}
              {(activeFormat === 'all' || activeFormat === 'longform') && (
                <div className="mb-16">
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/[0.08]">
                    <h3 className="text-lg sm:text-xl font-heading font-bold text-white flex items-center gap-2">
                      <Film size={18} className="text-neutral-400" />
                      Horizontal Works & Long-Form (11 Cuts)
                    </h3>
                    <span className="text-xs font-mono text-neutral-400">Hover to preview</span>
                  </div>

                  <Carousel plugins={[autoScrollPluginHorizontal]} className="w-full" opts={{ align: 'start', loop: true, dragFree: true }}>
                    <CarouselContent className="-ml-4">
                      {allHorizontal.map((item, idx) => (
                        <CarouselItem key={idx} className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/2">
                          <HoverVideoCard
                            src={item.src}
                            poster={item.poster}
                            title={item.title}
                            aspect="video"
                            badge="16:9 4K"
                            onClick={() => setModalMedia({ src: item.src, title: item.title, aspect: 'video' })}
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </div>
              )}

              {/* 3. All 17 Vertical Reels Carousel */}
              {(activeFormat === 'all' || activeFormat === 'reels') && (
                <div className="mb-16">
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/[0.08]">
                    <h3 className="text-lg sm:text-xl font-heading font-bold text-white flex items-center gap-2">
                      <Video size={18} className="text-neutral-400" />
                      Complete Vertical Vault (17 Reels & Shorts)
                    </h3>
                    <span className="text-xs font-mono text-neutral-400">Continuous Auto-Scroll</span>
                  </div>

                  <Carousel plugins={[autoScrollPluginVertical]} className="w-full" opts={{ align: 'start', loop: true, dragFree: true }}>
                    <CarouselContent className="-ml-4">
                      {allVertical.map((item, idx) => (
                        <CarouselItem key={idx} className="pl-4 basis-[70%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                          <HoverVideoCard
                            src={item.src}
                            poster={item.poster}
                            title={item.title}
                            aspect="9/16"
                            badge={item.badge || 'Vertical'}
                            onClick={() => setModalMedia({ src: item.src, title: item.title, aspect: '9/16' })}
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </div>
              )}

              {/* 4. High-CTR Thumbnails */}
              {(activeFormat === 'all' || activeFormat === 'thumbnails') && (
                <div className="mb-12">
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/[0.08]">
                    <h3 className="text-lg sm:text-xl font-heading font-bold text-white flex items-center gap-2">
                      <Camera size={18} className="text-neutral-400" />
                      Packaging & Thumbnail Designs (6 Projects)
                    </h3>
                    <span className="text-xs font-mono text-neutral-400">Packaging</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {thumbnailProjects.map((project, index) => (
                      <div
                        key={index}
                        className="group relative overflow-hidden rounded-xl bg-black/50 border border-white/[0.08] hover:border-white/25 shadow-lg transition-all duration-300"
                      >
                        <div className="aspect-video w-full overflow-hidden relative">
                          <img
                            src={project.thumbnail}
                            alt={project.title}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                            <div className="flex justify-end">
                              <span className="text-[10px] font-mono px-2 py-0.5 bg-black/70 border border-white/10 text-white rounded-full">
                                {project.metric}
                              </span>
                            </div>
                            <div>
                              <span className="text-xs text-neutral-400 font-mono block">{project.category}</span>
                              <h4 className="text-base font-bold text-white">{project.title}</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Full Theater Mode Modal (Adaptive Portrait vs Landscape) */}
      <Dialog open={!!modalMedia} onOpenChange={(open) => !open && setModalMedia(null)}>
        <DialogContent className="max-w-fit border-none bg-transparent shadow-none p-0 flex items-center justify-center">
          <DialogTitle className="sr-only">{modalMedia?.title || 'Video Player'}</DialogTitle>
          <DialogDescription className="sr-only">Video playback theater</DialogDescription>

          {modalMedia && (
            <div
              className={`relative w-[92vw] max-h-[90vh] flex flex-col justify-center items-center bg-[#070709] backdrop-blur-2xl rounded-2xl overflow-hidden border border-white/[0.15] shadow-2xl p-2 ${
                modalMedia.aspect === '9/16' ? 'max-w-[390px]' : 'max-w-5xl'
              }`}
            >
              <video
                src={modalMedia.src}
                controls
                autoPlay
                playsInline
                className={`rounded-xl object-contain ${
                  modalMedia.aspect === '9/16' ? 'w-full aspect-[9/16] max-h-[80vh]' : 'max-w-full max-h-[82vh]'
                }`}
              />
              <div className="w-full px-4 py-2 flex items-center justify-between text-neutral-400 text-xs font-mono">
                <span className="font-semibold text-white truncate mr-2">{modalMedia.title}</span>
                <span className="flex-shrink-0">ESC to close</span>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
