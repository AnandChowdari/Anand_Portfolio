import { Play, Video, Camera, Zap, Briefcase, Film } from 'lucide-react';
import { useState, useMemo, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Ribbons from "../components/Ribbons";
import { motion, AnimatePresence, useInView } from 'framer-motion';
import AutoScroll from 'embla-carousel-auto-scroll';

const PreviewVideo = ({ src, poster }: { src: string, poster?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "0px", once: false });

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full bg-black relative"
    >
      {poster && (
        <img 
          src={poster} 
          alt="Video thumbnail" 
          className="absolute inset-0 w-full h-full object-cover z-0" 
        />
      )}
      {isInView && (
        <video 
          src={src} 
          poster={poster}
          muted 
          loop 
          autoPlay
          playsInline 
          className="w-full h-full object-cover relative z-10" 
        />
      )}
    </div>
  );
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('video-edits');
  const [modalMedia, setModalMedia] = useState<{type: 'youtube' | 'local', src: string, title: string} | null>(null);

  const portfolioSections = [
    { id: 'video-edits', title: 'Reels & TikToks', icon: Video, description: 'High-retention vertical video formats' },
    { id: 'horizontal-edits', title: 'Horizontal Videos', icon: Film, description: 'Cinematic and long-form content' },
    { id: 'thumbnails', title: 'Thumbnails', icon: Camera, description: 'Eye-catching thumbnail designs' },
    { id: 'motion-graphics', title: 'Motion Graphics', icon: Zap, description: 'Dynamic animations and effects' }
  ];

  const youtubeReels = [
    { id: "IEyUdxOezJY", title: "2d Animations - 1" },
    { id: "oOXnyem0O6g", title: "2d Animations - 2" },
    { id: "fY1ILT8Dr0I", title: "2d Animations - 3" },
    { id: "nOU2JsbDdfU", title: "2d Animations - 4" },
    { id: "a3mL9wadLLM", title: "2d Animations - 5" },
    { id: "it5ltvwKUMU", title: "2d Animations - 6" },
    { id: "-q2ovtueS3M", title: "2d Animations - 7" },
    { id: "JIs2bmuOE8k", title: "2d Animations - 8" },
    { id: "e0V7GZcr0cI", title: "2d Animations - 9" },
    { id: "fu4Q0T5-V4w", title: "2d Animations - 10" }
  ];

  const localVertical = [
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
    { src: '/videos/Nested Sequence 21.mp4', poster: '/videos/posters/Nested Sequence 21.jpg' }
  ];

  const localHorizontal = [
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
    { src: '/videos/horizontal/Nested Sequence 32.mp4', poster: '/videos/horizontal/posters/Nested Sequence 32.jpg' }
  ];

  const shuffledVertical = useMemo(() => [...localVertical].sort(() => Math.random() - 0.5), []);
  const shuffledHorizontal = useMemo(() => [...localHorizontal].sort(() => Math.random() - 0.5), []);
  const shuffledYoutube = useMemo(() => [...youtubeReels].sort(() => Math.random() - 0.5), []);

  const thumbnailProjects = [
    { title: "Design Spo V4", thumbnail: "https://res.cloudinary.com/dcnh1eltg/image/upload/v1756578124/Design_Spo_-_24_Web_Design_v4_rfkroo.jpg", views: "NEW" },
    { title: "Shruti Ponugati Launch", thumbnail: "https://res.cloudinary.com/dcnh1eltg/image/upload/v1756579509/shruti_ponugati_thumbnail_eeeobw.jpg", views: "NEW" },
    { title: "Blender Render Edit", thumbnail: "https://res.cloudinary.com/dcnh1eltg/image/upload/v1756579578/The_Blender_Render-Recovered_cwmfk9.jpg", views: "NEW" },
    { title: "Admin Bar Client", thumbnail: "https://res.cloudinary.com/dcnh1eltg/image/upload/v1756579490/The_Admin_Bar_2_hxnvlg.jpg", views: "NEW" },
    { title: "Design Spo V1", thumbnail: "https://res.cloudinary.com/dcnh1eltg/image/upload/v1756579442/Design_Spo_-_24_Web_Design_V1_rsrbtt.png", views: "NEW" },
    { title: "Extreme Sports Edit", thumbnail: "https://res.cloudinary.com/dcnh1eltg/image/upload/v1756579816/ba1d0292-aebf-4c40-bab1-3757a110a9a1.png", views: "NEW" }
  ];

  const autoScrollPlugin = useMemo(() => AutoScroll({ playOnInit: true, speed: 1, stopOnInteraction: false }), []);

  const VideoCard = ({ children, onClick }: { children: React.ReactNode, onClick: () => void }) => (
    <motion.div 
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="cursor-pointer group relative overflow-hidden rounded-2xl glass-dark border border-white/10 shadow-[0_0_15px_rgba(155,135,245,0.1)] hover:shadow-[0_0_30px_rgba(155,135,245,0.4)] transition-all duration-300"
      onClick={onClick}
    >
      <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
        <div className="bg-primary/90 rounded-full p-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <Play className="text-white w-6 h-6 ml-1" />
        </div>
      </div>
      {children}
    </motion.div>
  );

  const renderVerticalEdits = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
      className="space-y-16"
    >
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gradient-purple">Client Showcase</h3>
        <Carousel plugins={[autoScrollPlugin]} className="w-full" opts={{ align: "start", loop: true, dragFree: true }}>
          <CarouselContent className="-ml-4">
            {shuffledVertical.map((item, idx) => (
              <CarouselItem key={idx} className="pl-4 basis-4/5 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <VideoCard onClick={() => setModalMedia({ type: 'local', src: item.src, title: `Vertical Edit ${idx + 1}` })}>
                  <div className="aspect-[9/16] relative bg-black">
                    <PreviewVideo src={item.src} poster={item.poster} />
                  </div>
                </VideoCard>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/*
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gradient-purple">Explanatory Reels (YouTube)</h3>
        <Carousel plugins={[useMemo(() => AutoScroll({ playOnInit: true, speed: 1.2, stopOnInteraction: false }), [])]} className="w-full" opts={{ align: "start", loop: true, dragFree: true }}>
          <CarouselContent className="-ml-4">
            {shuffledYoutube.map((video, idx) => (
              <CarouselItem key={idx} className="pl-4 basis-4/5 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <VideoCard onClick={() => setModalMedia({ type: 'youtube', src: video.id, title: video.title })}>
                  <div className="aspect-[9/16] relative bg-black pointer-events-none">
                    <iframe
                      width="100%" height="100%"
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&loop=1&playlist=${video.id}&controls=0`}
                      title={video.title} frameBorder="0" allow="autoplay; encrypted-media"
                      loading="lazy"
                      className="w-full h-full object-cover scale-[1.5]"
                    />
                  </div>
                </VideoCard>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      */}
    </motion.div>
  );

  const renderHorizontalEdits = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <h3 className="text-2xl font-bold text-gradient-purple">Cinematic & Corporate</h3>
      <Carousel plugins={[autoScrollPlugin]} className="w-full" opts={{ align: "start", loop: true, dragFree: true }}>
        <CarouselContent className="-ml-4">
          {shuffledHorizontal.map((item, idx) => (
            <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-1/2">
              <VideoCard onClick={() => setModalMedia({ type: 'local', src: item.src, title: `Horizontal Edit ${idx + 1}` })}>
                <div className="aspect-video relative bg-black">
                  <PreviewVideo src={item.src} poster={item.poster} />
                </div>
              </VideoCard>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </motion.div>
  );

  const renderThumbnails = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {thumbnailProjects.map((project, index) => (
        <motion.div
          whileHover={{ scale: 1.03, y: -5 }}
          key={index}
          className="group relative overflow-hidden rounded-xl glass-dark border border-white/10 hover:border-primary/50 transition-all duration-500"
        >
          <div className="aspect-video w-full overflow-hidden">
            <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-primary text-xs font-bold px-2 py-1 bg-primary/20 rounded-full mb-2 inline-block backdrop-blur-md">
                {project.views}
              </span>
              <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );

  const renderMotionGraphicsSection = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
      className="flex flex-col items-center py-10"
    >
      <div className="w-full max-w-4xl rounded-2xl overflow-hidden glass-dark border border-white/10 shadow-[0_0_30px_rgba(155,135,245,0.2)]">
        <video src="https://res.cloudinary.com/dcnh1eltg/video/upload/v1758885463/Shot_0_oj1nv3.mp4" poster="https://res.cloudinary.com/dcnh1eltg/video/upload/v1758885463/Shot_0_oj1nv3.jpg" loop muted playsInline className="w-full" />
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen pt-16 relative">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Ribbons enableShaderEffect enableFade backgroundColor={[0, 0, 0, 0]} colors={["#8E29DD", "#f72b2b"]} baseThickness={25} effectAmplitude={1.5} />
      </div>

      <div className="max-w-7xl relative z-10 glass rounded-3xl border border-white/10 p-8 md:p-12 mx-auto px-4 sm:px-6 lg:px-8 mt-8 shadow-[0_0_40px_rgba(155,135,245,0.1)]">
        <motion.h1 
          initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
          className="text-4xl md:text-6xl font-heading font-bold text-gradient mb-4"
        >
          Cinematic Showcase
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
          className="text-xl text-white/70 max-w-2xl font-sans"
        >
          High-retention video editing and motion graphics engineered for impact.
        </motion.p>
      </div>

      {/* Navigation Sections */}
      <div className="py-6 mt-8 sticky top-16 z-40 bg-black/60 backdrop-blur-xl border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-4 justify-start md:justify-center no-scrollbar pb-2">
            {portfolioSections.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                    isActive 
                    ? 'bg-primary text-white shadow-[0_0_20px_rgba(155,135,245,0.5)] scale-105' 
                    : 'glass text-white/70 hover:bg-white/10 hover:text-white border border-white/5'
                  }`}
                >
                  <Icon size={18} />
                  <span>{section.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {activeSection === 'video-edits' && <div key="vertical">{renderVerticalEdits()}</div>}
            {activeSection === 'horizontal-edits' && <div key="horizontal">{renderHorizontalEdits()}</div>}
            {activeSection === 'thumbnails' && <div key="thumbnails">{renderThumbnails()}</div>}
            {activeSection === 'motion-graphics' && <div key="motion">{renderMotionGraphicsSection()}</div>}
          </AnimatePresence>
        </div>
      </div>

      {/* Theater Mode Modal */}
      <Dialog open={!!modalMedia} onOpenChange={(open) => !open && setModalMedia(null)}>
        <DialogContent className="max-w-fit border-none bg-transparent shadow-none p-0 flex items-center justify-center">
          <DialogTitle className="sr-only">{modalMedia?.title}</DialogTitle>
          <DialogDescription className="sr-only">Video Player</DialogDescription>
          
          {modalMedia?.type === 'youtube' && (
            <div className="relative w-[90vw] max-w-[450px] aspect-[9/16] bg-black rounded-xl overflow-hidden shadow-[0_0_100px_rgba(155,135,245,0.2)]">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${modalMedia.src}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
          {modalMedia?.type === 'local' && (
            <div className="relative w-[90vw] max-w-6xl max-h-[90vh] flex justify-center bg-black rounded-xl overflow-hidden shadow-[0_0_100px_rgba(155,135,245,0.2)]">
              <video 
                src={modalMedia.src} 
                controls 
                autoPlay 
                className="max-w-full max-h-[90vh]"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Portfolio;