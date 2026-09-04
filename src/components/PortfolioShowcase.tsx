import { useState, useMemo, useRef } from 'react';
import { Play, Video, Film, Camera, Zap, Sparkles, Maximize2, Layers, ChevronDown, ChevronUp, Eye, EyeOff } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { motion, AnimatePresence } from 'framer-motion';
import AutoScroll from 'embla-carousel-auto-scroll';
import { ButtonGradient } from './ui/button-gradient';

/* ───────── Hover-to-Play Video Card ─────────
   Smoothness optimization: Video decodes and plays ONLY when hovered by the cursor.
   Otherwise displays a lightweight crisp poster image.
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
      whileHover={{ scale: 1.025, y: -4 }}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-black/80 border border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.5)] hover:border-primary/60 hover:shadow-[0_0_35px_rgba(155,135,245,0.35)] transition-all duration-300 ${
        aspect === '9/16' ? 'aspect-[9/16]' : 'aspect-video'
      }`}
    >
      {/* High-res Poster image (Instant load, zero GPU decoding overhead) */}
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

      {/* Video element - strictly active on cursor hover */}
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

      {/* Glass Overlay on Hover */}
      <div className="absolute inset-0 z-20 flex flex-col justify-between p-4 sm:p-5 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="flex justify-between items-center">
          {badge ? (
            <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-primary/30 text-white font-semibold backdrop-blur-md">
              {badge}
            </span>
          ) : <div />}
          <span className="p-2 rounded-full bg-black/70 text-white/90 backdrop-blur-md">
            <Maximize2 size={15} />
          </span>
        </div>

        <div>
          <p className="text-white text-sm sm:text-base font-semibold drop-shadow-md">{title}</p>
          <span className="text-[11px] text-primary font-mono mt-0.5 inline-flex items-center gap-1">
            <Play size={10} className="fill-primary" /> Click for Theater Mode
          </span>
        </div>
      </div>

      {/* Ambient Play hint when not hovered */}
      {!isHovered && (
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <div className="bg-black/50 backdrop-blur-md border border-white/15 text-white/90 rounded-full p-3.5 shadow-xl group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
            <Play size={18} className="ml-0.5 fill-current" />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default function PortfolioShowcase() {
  // Tabs: featured (default: motion + thumbnails, videos hidden), reels, longform, motion, thumbnails, all
  const [activeTab, setActiveTab] = useState<'featured' | 'reels' | 'longform' | 'motion' | 'thumbnails' | 'all'>('featured');
  const [isVideosExpanded, setIsVideosExpanded] = useState(false);
  const [modalMedia, setModalMedia] = useState<{ type: 'youtube' | 'local'; src: string; title: string } | null>(null);

  const localVertical = [
    { src: '/videos/Nested Sequence 03.mp4', poster: '/videos/posters/Nested Sequence 03.jpg', title: 'High-Retention Hook Cut' },
    { src: '/videos/Nested Sequence 04.mp4', poster: '/videos/posters/Nested Sequence 04.jpg', title: 'Dynamic Kinetic Typography' },
    { src: '/videos/Nested Sequence 05.mp4', poster: '/videos/posters/Nested Sequence 05.jpg', title: 'Story-Driven Micro Edit' },
    { src: '/videos/Nested Sequence 06.mp4', poster: '/videos/posters/Nested Sequence 06.jpg', title: 'Fast-Paced Brand Reel' },
    { src: '/videos/Nested Sequence 07.mp4', poster: '/videos/posters/Nested Sequence 07.jpg', title: 'Social Proof Showcase' },
    { src: '/videos/Nested Sequence 08.mp4', poster: '/videos/posters/Nested Sequence 08.jpg', title: 'Viral Trend Format' },
    { src: '/videos/Nested Sequence 09.mp4', poster: '/videos/posters/Nested Sequence 09.jpg', title: 'Visual Pacing Reel' },
    { src: '/videos/Nested Sequence 10.mp4', poster: '/videos/posters/Nested Sequence 10.jpg', title: 'Cinematic Portrait Cut' },
    { src: '/videos/Nested Sequence 11.mp4', poster: '/videos/posters/Nested Sequence 11.jpg', title: 'Engagement Booster Reel' },
    { src: '/videos/Nested Sequence 12 1.mp4', poster: '/videos/posters/Nested Sequence 12 1.jpg', title: 'Creator Story Flow' },
    { src: '/videos/Nested Sequence 14.mp4', poster: '/videos/posters/Nested Sequence 14.jpg', title: 'Retention Master Cut' },
    { src: '/videos/Nested Sequence 15.mp4', poster: '/videos/posters/Nested Sequence 15.jpg', title: 'Visual Rhythm Edit' },
    { src: '/videos/Nested Sequence 17.mp4', poster: '/videos/posters/Nested Sequence 17.jpg', title: 'Commercial Reel' },
    { src: '/videos/Nested Sequence 18.mp4', poster: '/videos/posters/Nested Sequence 18.jpg', title: 'Audio-Synced Cut' },
    { src: '/videos/Nested Sequence 19.mp4', poster: '/videos/posters/Nested Sequence 19.jpg', title: 'SaaS Motion Reel' },
    { src: '/videos/Nested Sequence 20.mp4', poster: '/videos/posters/Nested Sequence 20.jpg', title: 'Product Hype Reel' },
    { src: '/videos/Nested Sequence 21.mp4', poster: '/videos/posters/Nested Sequence 21.jpg', title: 'Influencer Growth Reel' },
  ];

  const localHorizontal = [
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
    { title: 'Shruti Ponugati Launch', category: 'Personal Brand', thumbnail: 'https://res.cloudinary.com/dcnh1eltg/image/upload/v1756579509/shruti_ponugati_thumbnail_eeeobw.jpg', metric: '100K+ REACH' },
    { title: 'Blender Render Edit', category: '3D VFX', thumbnail: 'https://res.cloudinary.com/dcnh1eltg/image/upload/v1756579578/The_Blender_Render-Recovered_cwmfk9.jpg', metric: 'FEATURED' },
    { title: 'Admin Bar Client', category: 'SaaS / Dev', thumbnail: 'https://res.cloudinary.com/dcnh1eltg/image/upload/v1756579490/The_Admin_Bar_2_hxnvlg.jpg', metric: 'VIRAL' },
    { title: 'Design Spo V1', category: 'Design Explainer', thumbnail: 'https://res.cloudinary.com/dcnh1eltg/image/upload/v1756579442/Design_Spo_-_24_Web_Design_V1_rsrbtt.png', metric: 'TOP PICK' },
    { title: 'Extreme Sports Edit', category: 'Cinematic', thumbnail: 'https://res.cloudinary.com/dcnh1eltg/image/upload/v1756579816/ba1d0292-aebf-4c40-bab1-3757a110a9a1.png', metric: 'TRENDING' },
  ];

  const autoScrollPluginVertical = useMemo(() => AutoScroll({ playOnInit: true, speed: 0.9, stopOnInteraction: false }), []);
  const autoScrollPluginHorizontal = useMemo(() => AutoScroll({ playOnInit: true, speed: 0.8, stopOnInteraction: false }), []);

  const tabs = [
    { id: 'featured', label: 'Featured', icon: Sparkles },
    { id: 'motion', label: 'Motion Graphics', icon: Zap },
    { id: 'thumbnails', label: 'Thumbnails', icon: Camera, count: thumbnailProjects.length },
    { id: 'reels', label: 'Reels & Shorts', icon: Video, count: localVertical.length },
    { id: 'longform', label: 'Long-Form', icon: Film, count: localHorizontal.length },
    { id: 'all', label: 'All Library', icon: Layers },
  ];

  // Logic to determine if reels & long-form should be rendered
  const showReels = activeTab === 'all' || activeTab === 'reels' || (activeTab === 'featured' && isVideosExpanded);
  const showLongForm = activeTab === 'all' || activeTab === 'longform' || (activeTab === 'featured' && isVideosExpanded);
  const showMotion = activeTab === 'all' || activeTab === 'featured' || activeTab === 'motion';
  const showThumbnails = activeTab === 'all' || activeTab === 'featured' || activeTab === 'thumbnails';

  return (
    <section id="work" className="py-24 relative z-20 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase mb-4"
          >
            <Sparkles size={14} />
            Selected Works
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-heading font-bold text-gradient mb-6"
          >
            Curated Works & Productions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg sm:text-xl font-sans"
          >
            Interactive motion graphics, high-CTR thumbnail packaging, and on-demand video production reels. Hover over any video to preview.
          </motion.p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="sticky top-16 z-30 py-4 mb-16 backdrop-blur-xl bg-black/50 rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <div className="flex items-center justify-start md:justify-center gap-2 sm:gap-3 overflow-x-auto px-4 no-scrollbar">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id as any);
                    if (tab.id === 'reels' || tab.id === 'longform' || tab.id === 'all') {
                      setIsVideosExpanded(true);
                    }
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? 'bg-primary text-white shadow-[0_0_20px_rgba(155,135,245,0.4)] scale-105'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5'
                  }`}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                  {tab.count !== undefined && (
                    <span className={`text-xs px-1.5 py-0.5 rounded-full ${isActive ? 'bg-black/30 text-white' : 'bg-white/10 text-gray-400'}`}>
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= 1. MOTION GRAPHICS (Plays in low/optimized format) ================= */}
        <AnimatePresence>
          {showMotion && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mb-20"
            >
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-white/10">
                <div>
                  <span className="text-primary text-xs font-mono tracking-widest uppercase block mb-1">01 / Visual Effects & Animation</span>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white flex items-center gap-3">
                    <Zap className="text-primary w-6 h-6" />
                    Motion Graphics Mastercut
                  </h3>
                </div>
                <p className="text-gray-400 text-sm mt-2 sm:mt-0">Lightweight, fluid 60FPS loop with procedural 3D elements</p>
              </div>

              <div className="relative rounded-3xl overflow-hidden glass-dark border border-white/10 shadow-[0_0_50px_rgba(155,135,245,0.15)] p-4 sm:p-6 lg:p-8 bg-black/60">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
                    {/* Low/Optimized video format via Cloudinary eco-quality and 720p scale */}
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
                          type: 'local',
                          src: 'https://res.cloudinary.com/dcnh1eltg/video/upload/v1758885463/Shot_0_oj1nv3.mp4',
                          title: 'Motion Graphics Mastercut (Full Quality)',
                        })
                      }
                      className="absolute bottom-4 right-4 px-4 py-2 rounded-xl bg-black/70 hover:bg-black/90 text-white text-xs font-medium backdrop-blur-md border border-white/10 flex items-center gap-2 transition-colors"
                    >
                      <Maximize2 size={14} /> Expand to Theater Mode
                    </button>
                  </div>

                  <div className="lg:col-span-5 space-y-5">
                    <span className="inline-block text-xs font-mono uppercase px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
                      Technical Highlights
                    </span>
                    <h4 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                      Precision Motion Design & Kinetic Rhythms
                    </h4>
                    <p className="text-gray-300 font-sans leading-relaxed text-sm sm:text-base">
                      Combining procedural 3D elements in Blender with intricate 2D keyframing in After Effects. Designed specifically for audience retention and visual hierarchy.
                    </p>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                        <p className="text-2xl font-bold text-gradient-purple">60 FPS</p>
                        <p className="text-xs text-gray-400 mt-1">Fluid Motion Interpolation</p>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                        <p className="text-2xl font-bold text-gradient-purple">Blender + AE</p>
                        <p className="text-xs text-gray-400 mt-1">3D Rigs & Kinetic Pacing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ================= 2. THUMBNAILS GRID ================= */}
        <AnimatePresence>
          {showThumbnails && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mb-20"
            >
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-white/10">
                <div>
                  <span className="text-primary text-xs font-mono tracking-widest uppercase block mb-1">02 / Packaging & Click-Through</span>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white flex items-center gap-3">
                    <Camera className="text-primary w-6 h-6" />
                    High-CTR Thumbnail Designs
                  </h3>
                </div>
                <p className="text-gray-400 text-sm mt-2 sm:mt-0">Color psychology, custom typography, and high-contrast facial grading</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {thumbnailProjects.map((project, index) => (
                  <motion.div
                    whileHover={{ scale: 1.03, y: -6 }}
                    key={index}
                    className="group relative overflow-hidden rounded-2xl glass-dark border border-white/10 hover:border-primary/50 shadow-lg hover:shadow-[0_0_30px_rgba(155,135,245,0.3)] transition-all duration-500 bg-black/40"
                  >
                    <div className="aspect-video w-full overflow-hidden relative">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                        <div className="flex justify-end">
                          <span className="text-xs font-mono font-bold px-2.5 py-1 bg-primary/30 border border-primary/40 text-white rounded-full backdrop-blur-md">
                            {project.metric}
                          </span>
                        </div>
                        <div>
                          <span className="text-xs text-primary font-mono block mb-1">{project.category}</span>
                          <h4 className="text-xl font-bold text-white">{project.title}</h4>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ================= 3. ON-DEMAND VIDEO PRODUCTION ARCHIVE ================= */}
        {activeTab === 'featured' && (
          <div className="mb-16">
            <div className="p-8 sm:p-10 rounded-3xl glass-dark border border-white/10 bg-gradient-to-br from-white/[0.04] to-black/80 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="space-y-2 text-center sm:text-left">
                <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">
                  Video Production Library
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  Explore 28 Video Reels & Long-Form Productions
                </h3>
                <p className="text-sm text-gray-300 font-sans max-w-xl">
                  {isVideosExpanded
                    ? 'Showing all 17 vertical reels and 11 horizontal cinematics. Hover over any video to play.'
                    : 'Hidden by default to keep the homepage streamlined. Click below to reveal the full video vault.'}
                </p>
              </div>

              <ButtonGradient
                onClick={() => setIsVideosExpanded(!isVideosExpanded)}
                size="lg"
                className="flex-shrink-0 flex items-center gap-2 shadow-[0_0_25px_rgba(155,135,245,0.3)]"
              >
                {isVideosExpanded ? (
                  <>
                    <EyeOff size={18} />
                    Collapse Videos
                    <ChevronUp size={18} />
                  </>
                ) : (
                  <>
                    <Eye size={18} />
                    Browse Videos (28)
                    <ChevronDown size={18} />
                  </>
                )}
              </ButtonGradient>
            </div>
          </div>
        )}

        {/* ================= REELS (Hover to Play) ================= */}
        <AnimatePresence>
          {showReels && (
            <motion.div
              layout
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-24 overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-white/10">
                <div>
                  <span className="text-primary text-xs font-mono tracking-widest uppercase block mb-1">High-Retention Video Vault</span>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white flex items-center gap-3">
                    <Video className="text-primary w-6 h-6" />
                    Vertical Reels & Shorts (17)
                  </h3>
                </div>
                <p className="text-gray-400 text-sm mt-2 sm:mt-0">Hover cursor over any card to preview video</p>
              </div>

              <Carousel plugins={[autoScrollPluginVertical]} className="w-full" opts={{ align: 'start', loop: true, dragFree: true }}>
                <CarouselContent className="-ml-4">
                  {localVertical.map((item, idx) => (
                    <CarouselItem key={idx} className="pl-4 basis-[70%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                      <HoverVideoCard
                        src={item.src}
                        poster={item.poster}
                        title={item.title}
                        aspect="9/16"
                        badge="Vertical"
                        onClick={() => setModalMedia({ type: 'local', src: item.src, title: item.title })}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ================= HORIZONTAL CINEMATICS (Hover to Play) ================= */}
        <AnimatePresence>
          {showLongForm && (
            <motion.div
              layout
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-24 overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-white/10">
                <div>
                  <span className="text-primary text-xs font-mono tracking-widest uppercase block mb-1">Cinematic & Narrative Vault</span>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white flex items-center gap-3">
                    <Film className="text-primary w-6 h-6" />
                    Horizontal & Long-Form Works (11)
                  </h3>
                </div>
                <p className="text-gray-400 text-sm mt-2 sm:mt-0">Hover cursor over any card to preview video</p>
              </div>

              <Carousel plugins={[autoScrollPluginHorizontal]} className="w-full" opts={{ align: 'start', loop: true, dragFree: true }}>
                <CarouselContent className="-ml-4">
                  {localHorizontal.map((item, idx) => (
                    <CarouselItem key={idx} className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/2">
                      <HoverVideoCard
                        src={item.src}
                        poster={item.poster}
                        title={item.title}
                        aspect="video"
                        badge="16:9 4K"
                        onClick={() => setModalMedia({ type: 'local', src: item.src, title: item.title })}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Theater Mode Modal */}
      <Dialog open={!!modalMedia} onOpenChange={(open) => !open && setModalMedia(null)}>
        <DialogContent className="max-w-fit border-none bg-transparent shadow-none p-0 flex items-center justify-center">
          <DialogTitle className="sr-only">{modalMedia?.title || 'Video Player'}</DialogTitle>
          <DialogDescription className="sr-only">Video playback theater</DialogDescription>

          {modalMedia?.type === 'local' && (
            <div className="relative w-[92vw] max-w-6xl max-h-[90vh] flex flex-col justify-center items-center bg-black/90 backdrop-blur-2xl rounded-2xl overflow-hidden border border-white/20 shadow-[0_0_120px_rgba(155,135,245,0.3)] p-2">
              <video
                src={modalMedia.src}
                controls
                autoPlay
                playsInline
                className="max-w-full max-h-[82vh] rounded-xl"
              />
              <div className="w-full px-4 py-2 flex items-center justify-between text-white/70 text-xs">
                <span className="font-semibold text-white">{modalMedia.title}</span>
                <span>ESC to exit</span>
              </div>
            </div>
          )}

          {modalMedia?.type === 'youtube' && (
            <div className="relative w-[90vw] max-w-[450px] aspect-[9/16] bg-black rounded-xl overflow-hidden shadow-[0_0_100px_rgba(155,135,245,0.3)]">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${modalMedia.src}?autoplay=1`}
                title={modalMedia.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
