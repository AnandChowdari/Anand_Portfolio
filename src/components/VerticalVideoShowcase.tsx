import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  Play,
  Pause,
} from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';

export interface VerticalVideoItem {
  id: string;
  src: string;
  poster: string;
  title: string;
  category: string;
  description: string;
}

export const showcaseVideos: VerticalVideoItem[] = [
  {
    id: 'seq-06',
    src: '/videos/Nested Sequence 06.mp4',
    poster: '/videos/posters/Nested Sequence 06.jpg',
    title: 'Fast-Paced Brand Reel',
    category: 'Viral Short-Form',
    description: 'High-energy cuts with sound-driven pacing designed for maximum algorithm retention.',
  },
  {
    id: 'ad-03',
    src: '/videos/Ad 3.mp4',
    poster: '/videos/posters/Ad 3.jpg',
    title: 'High-Converting Commercial Cut',
    category: 'Direct-Response VSL',
    description: 'Direct-response visual architecture engineered for paid acquisition and sales funnels.',
  },
  {
    id: 'seq-03',
    src: '/videos/Nested Sequence 03.mp4',
    poster: '/videos/posters/Nested Sequence 03.jpg',
    title: 'High-Retention Hook Cut',
    category: 'Creator & Brand',
    description: 'First 3-second hook structure with synchronized sound architecture to lock viewer attention.',
  },
  {
    id: 'dubai-airshow',
    src: '/videos/Dubai Airshow - 1_1.mp4',
    poster: '/videos/posters/Dubai Airshow - 1_1.jpg',
    title: 'Dubai Airshow — Cinematic Commercial',
    category: 'Cinematic Aviation',
    description: 'Ultra-cinematic aerospace cut with color grading and rhythmically matched SFX.',
  },
  {
    id: 'seq-08',
    src: '/videos/Nested Sequence 08.mp4',
    poster: '/videos/posters/Nested Sequence 08.jpg',
    title: 'Viral Trend & Flow Edit',
    category: 'Social Growth',
    description: 'Modern aesthetic rhythm engineered for viral Instagram Reels and YouTube Shorts.',
  },
  {
    id: 'russian-heli',
    src: '/videos/Russian Helicopter.mp4',
    poster: '/videos/posters/Russian Helicopter.jpg',
    title: 'Russian Helicopter — Action Cut',
    category: 'Dynamic Motion',
    description: 'Adrenaline-fueled visual pacing paired with layered cinematic audio and speed ramps.',
  },
];

export default function VerticalVideoShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlayingAuto, setIsPlayingAuto] = useState(true);
  const [modalVideo, setModalVideo] = useState<VerticalVideoItem | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const autoSlideTimerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);
  const [isInView, setIsInView] = useState(true);

  // Navigate to Next
  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % showcaseVideos.length);
  }, []);

  // Navigate to Previous
  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + showcaseVideos.length) % showcaseVideos.length);
  }, []);

  // Viewport Observer: Pause video decoders when showcase is scrolled off-screen to preserve CPU & battery
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        rootMargin: '150px 0px',
        threshold: 0.05,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Keep played videos playing continuously when in viewport; pause when scrolled off-screen
  useEffect(() => {
    videoRefs.current.forEach((vid, idx) => {
      if (!vid) return;
      if (isInView && modalVideo === null) {
        vid.muted = idx === activeIndex ? isMuted : true;
        vid.play().catch(() => {});
      } else {
        vid.pause();
      }
    });
  }, [activeIndex, isMuted, isInView, modalVideo]);

  // Auto-slide every 6.5s (pauses when theater modal is open, user paused, or off-screen)
  useEffect(() => {
    if (!isPlayingAuto || modalVideo !== null || !isInView) {
      if (autoSlideTimerRef.current) clearInterval(autoSlideTimerRef.current);
      return;
    }

    autoSlideTimerRef.current = setInterval(() => {
      goToNext();
    }, 6500);

    return () => {
      if (autoSlideTimerRef.current) clearInterval(autoSlideTimerRef.current);
    };
  }, [isPlayingAuto, modalVideo, isInView, goToNext]);

  // Toggle Mute/Unmute
  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    videoRefs.current.forEach((vid, idx) => {
      if (vid) vid.muted = idx === activeIndex ? nextMuted : true;
    });
  };

  // Touch Swipe Handlers for mobile gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    touchStartX.current = null;
  };

  const activeVideo = showcaseVideos[activeIndex] || showcaseVideos[0];

  return (
    <div
      ref={containerRef}
      className="w-full relative select-none py-2 sm:py-4"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-[650px] h-[380px] bg-emerald-500/[0.04] rounded-full blur-[110px] pointer-events-none -z-10" />

      {/* ─── 75% CENTERED 3D COVERFLOW STAGE ─── */}
      {/* Dedicated responsive height ensures the card NEVER exceeds the container or clips top curves */}
      <div className="relative w-full flex items-center justify-center h-[520px] sm:h-[600px] md:h-[640px]">
        {/* Previous Button (Left) */}
        <button
          type="button"
          onClick={goToPrev}
          aria-label="Previous Video"
          className="absolute left-2 sm:left-4 md:left-8 z-30 p-2.5 sm:p-3.5 rounded-full bg-black/75 hover:bg-black text-white/80 hover:text-white border border-white/15 backdrop-blur-xl shadow-xl transition-all duration-200 active:scale-95"
        >
          <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
        </button>

        {/* Next Button (Right) */}
        <button
          type="button"
          onClick={goToNext}
          aria-label="Next Video"
          className="absolute right-2 sm:right-4 md:right-8 z-30 p-2.5 sm:p-3.5 rounded-full bg-black/75 hover:bg-black text-white/80 hover:text-white border border-white/15 backdrop-blur-xl shadow-xl transition-all duration-200 active:scale-95"
        >
          <ChevronRight size={18} className="sm:w-5 sm:h-5" />
        </button>

        {/* Centered Cards Container */}
        <div className="relative w-full max-w-5xl h-full flex items-center justify-center px-4 overflow-visible">
          {showcaseVideos.map((item, idx) => {
            const total = showcaseVideos.length;
            // Shortest circular offset distance (-2, -1, 0, 1, 2)
            let offset = idx - activeIndex;
            if (offset < -total / 2) offset += total;
            if (offset > total / 2) offset -= total;

            const isActive = offset === 0;
            const isLeft = offset === -1;
            const isRight = offset === 1;

            // Compute continuous position, scale, opacity, and zIndex for every card
            let xPos = '0%';
            let scale = 1;
            let opacity = 1;
            let zIndex = 20;

            if (isActive) {
              xPos = '0%';
              scale = 1;
              opacity = 1;
              zIndex = 20;
            } else if (isLeft) {
              xPos = '-78%';
              scale = 0.88;
              opacity = 0.55;
              zIndex = 10;
            } else if (isRight) {
              xPos = '78%';
              scale = 0.88;
              opacity = 0.55;
              zIndex = 10;
            } else if (offset > 1) {
              xPos = '140%';
              scale = 0.75;
              opacity = 0;
              zIndex = 1;
            } else {
              xPos = '-140%';
              scale = 0.75;
              opacity = 0;
              zIndex = 1;
            }

            return (
              <motion.div
                key={item.id}
                animate={{
                  x: xPos,
                  scale: scale,
                  opacity: opacity,
                  zIndex: zIndex,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 26,
                  mass: 0.8,
                }}
                onClick={() => {
                  if (isActive) {
                    setModalVideo(item);
                  } else {
                    setActiveIndex(idx);
                  }
                }}
                className="absolute cursor-pointer w-[75vw] max-w-[280px] sm:max-w-[320px] md:max-w-[340px] pointer-events-auto"
                style={{
                  willChange: 'transform, opacity',
                }}
              >
                {/* Fully Rounded Card Shell (rounded-2xl on mobile, rounded-3xl on tablet/desktop) */}
                <div
                  className={`relative aspect-[9/16] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#09090c] border transition-all duration-300 shadow-2xl ${
                    isActive
                      ? 'border-white/30 shadow-[0_25px_70px_rgba(0,0,0,0.95)] ring-1 ring-white/20'
                      : 'border-white/10 hover:border-white/25 shadow-[0_10px_35px_rgba(0,0,0,0.7)]'
                  }`}
                >
                  {/* Video Player */}
                  <video
                    ref={(el) => (videoRefs.current[idx] = el)}
                    src={item.src}
                    poster={item.poster}
                    autoPlay
                    muted={idx === activeIndex ? isMuted : true}
                    loop
                    playsInline
                    disablePictureInPicture
                    preload="auto"
                    onCanPlay={(e) => {
                      e.currentTarget.play().catch(() => {});
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out"
                  />

                  {/* Subtle soft gradient fade at the bottom edge */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none" />

                  {/* Clean Sound Toggle (Top-Right on Active Video) */}
                  {isActive && (
                    <div className="absolute top-3 right-3 z-20 pointer-events-auto">
                      <button
                        type="button"
                        onClick={toggleSound}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/20 text-[10px] font-mono transition-colors backdrop-blur-md shadow-md"
                        title={isMuted ? 'Tap to Unmute' : 'Tap to Mute'}
                      >
                        {isMuted ? (
                          <>
                            <VolumeX size={11} className="text-neutral-400" />
                            <span className="text-neutral-300">Muted</span>
                          </>
                        ) : (
                          <>
                            <Volume2 size={11} className="text-emerald-400" />
                            <span className="text-emerald-400 font-semibold">Sound On</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ─── BOTTOM METADATA & PAGINATION CONTROLS ─── */}
      <div className="mt-4 flex flex-col items-center justify-center gap-3">
        {/* Active Title & Description */}
        <div className="text-center max-w-md px-4">
          <p className="text-xs sm:text-sm font-heading font-semibold text-white">
            {activeVideo.title}
          </p>
          <p className="text-[11px] sm:text-xs text-neutral-400 mt-0.5">
            {activeVideo.description}
          </p>
        </div>

        {/* Pill Indicators & Autoplay Toggle */}
        <div className="flex items-center gap-2">
          {showcaseVideos.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to video ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? 'w-6 bg-emerald-400'
                  : 'w-1.5 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}

          <button
            type="button"
            onClick={() => setIsPlayingAuto((prev) => !prev)}
            className="ml-2 p-1 text-neutral-400 hover:text-white transition-colors"
            title={isPlayingAuto ? 'Pause Auto Slide' : 'Resume Auto Slide'}
          >
            {isPlayingAuto ? <Pause size={12} /> : <Play size={12} />}
          </button>
        </div>
      </div>

      {/* ─── FULL THEATER MODE MODAL (VERTICAL 9:16) ─── */}
      <Dialog open={!!modalVideo} onOpenChange={(open) => !open && setModalVideo(null)}>
        <DialogContent className="max-w-fit border-none bg-transparent shadow-none p-0 flex items-center justify-center">
          <DialogTitle className="sr-only">{modalVideo?.title || 'Vertical Reel'}</DialogTitle>
          <DialogDescription className="sr-only">Vertical video playback theater</DialogDescription>

          {modalVideo && (
            <div className="relative w-[92vw] max-w-[380px] max-h-[92vh] flex flex-col justify-center items-center bg-[#070709] backdrop-blur-2xl rounded-2xl overflow-hidden border border-white/[0.15] shadow-2xl p-2">
              <video
                src={modalVideo.src}
                controls
                autoPlay
                playsInline
                className="w-full aspect-[9/16] max-h-[82vh] rounded-xl object-contain bg-black"
              />
              <div className="w-full px-3 py-2 flex items-center justify-between text-neutral-400 text-xs font-mono">
                <span className="font-semibold text-white truncate mr-2">{modalVideo.title}</span>
                <span className="flex-shrink-0 text-[10px]">ESC to close</span>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
