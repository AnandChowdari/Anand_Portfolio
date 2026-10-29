import React, { useState, useEffect, useRef } from 'react';
import { Play, Maximize2, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface ViewfinderProps {
  src: string;
  poster: string;
  title: string;
  duration?: string;
}

export default function CinemaViewfinderPlayer({
  src,
  poster,
  title,
  duration = '0:35',
}: ViewfinderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isInView, setIsInView] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Viewport Observer: Pause hero video decoder when scrolled off-screen
  useEffect(() => {
    const el = videoRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        rootMargin: '100px 0px',
        threshold: 0.05,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Pause background loop when theater modal opens or when scrolled off-screen
  useEffect(() => {
    if (videoRef.current) {
      if (isOpen || !isInView) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
    }
  }, [isOpen, isInView]);

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="w-full max-w-4xl lg:max-w-5xl mt-6 sm:mt-10 lg:mt-12 relative group cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        {/* Soft Ambient Backlight Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-white/[0.03] via-white/[0.08] to-white/[0.03] rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Video Container Frame */}
        <div className="relative aspect-video w-full rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden border border-white/[0.12] group-hover:border-white/30 bg-[#070709] shadow-[0_20px_70px_rgba(0,0,0,0.9)] transition-all duration-500">
          {/* Main Video Loop */}
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700 ease-out"
          />

          {/* Subtle Gradient Opacity: Soft Top to Bottom Fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050507]/90 pointer-events-none" />

          {/* Clean Unobtrusive Sound Toggle (Top-Right) */}
          <div className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20 pointer-events-auto">
            <button
              type="button"
              onClick={toggleSound}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 text-[10px] sm:text-xs font-mono transition-colors backdrop-blur-md shadow-lg"
              title={isMuted ? 'Click to Unmute' : 'Click to Mute'}
            >
              {isMuted ? (
                <>
                  <VolumeX size={12} className="text-neutral-400" />
                  <span className="text-neutral-300">Muted</span>
                </>
              ) : (
                <>
                  <Volume2 size={12} className="text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Sound On</span>
                </>
              )}
            </button>
          </div>

          {/* Subtle Hover Play/Expand Indicator */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 pointer-events-none">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-black/60 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform">
              <Play size={20} className="ml-1 fill-white text-white sm:w-6 sm:h-6" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* ─── FULLSCREEN THEATER MODAL ─── */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-fit border-none bg-transparent shadow-none p-0 flex items-center justify-center">
          <DialogTitle className="sr-only">{title}</DialogTitle>
          <DialogDescription className="sr-only">Master showreel playback</DialogDescription>

          <div className="relative w-[92vw] max-w-5xl max-h-[90vh] flex flex-col justify-center items-center bg-[#070709] backdrop-blur-2xl rounded-2xl overflow-hidden border border-white/[0.15] shadow-2xl p-2">
            <video
              src={src}
              controls
              autoPlay
              playsInline
              className="max-w-full max-h-[82vh] rounded-xl"
            />
            <div className="w-full px-4 py-2 flex items-center justify-between text-neutral-400 text-xs font-mono">
              <span className="font-semibold text-white">{title}</span>
              <span>ESC to close</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
