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
  const [timecode, setTimecode] = useState('00:00:00:00');
  const videoRef = useRef<HTMLVideoElement>(null);

  // Subtle ticking timecode effect (gives authentic director monitor life)
  useEffect(() => {
    let frame = 0;
    const interval = setInterval(() => {
      frame = (frame + 1) % 1080;
      const seconds = Math.floor(frame / 24) % 60;
      const minutes = Math.floor(frame / 1440);
      const frames = frame % 24;
      const pad = (n: number) => String(n).padStart(2, '0');
      setTimecode(`00:${pad(minutes)}:${pad(seconds)}:${pad(frames)}`);
    }, 41.6); // ~24fps tick

    return () => clearInterval(interval);
  }, []);

  // Pause background loop when theater modal opens, resume when it closes
  useEffect(() => {
    if (videoRef.current) {
      if (isOpen) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
    }
  }, [isOpen]);

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
        initial={{ opacity: 0, scale: 0.97, y: 25 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="w-full max-w-4xl lg:max-w-5xl mt-12 sm:mt-16 relative group cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        {/* Soft Ambient Backlight Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-white/[0.04] via-white/[0.08] to-white/[0.04] rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Viewfinder Frame Container */}
        <div className="relative aspect-video w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.12] group-hover:border-white/30 bg-[#070709] shadow-[0_25px_80px_rgba(0,0,0,0.9)] transition-all duration-500">
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

          {/* Cinematic Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/45 pointer-events-none" />

          {/* ─── ARRI/RED VIEWFINDER CROSSHAIRS (4 CORNERS) ─── */}
          <div className="absolute top-4 left-4 text-white/50 font-mono text-xs select-none pointer-events-none">+</div>
          <div className="absolute top-4 right-4 text-white/50 font-mono text-xs select-none pointer-events-none">+</div>
          <div className="absolute bottom-4 left-4 text-white/50 font-mono text-xs select-none pointer-events-none">+</div>
          <div className="absolute bottom-4 right-4 text-white/50 font-mono text-xs select-none pointer-events-none">+</div>

          {/* ─── TOP HUD METADATA BAR ─── */}
          <div className="absolute top-4 sm:top-6 left-6 right-6 flex items-center justify-between text-[11px] font-mono text-neutral-300 pointer-events-none">
            {/* Left: REC Status */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="tracking-wider uppercase font-semibold text-white">4K DCI • LOOP</span>
            </div>

            {/* Center: Camera Specs */}
            <div className="hidden md:flex items-center gap-3 text-neutral-400 tracking-widest text-[10px]">
              <span>SHUTTER 180°</span>
              <span>•</span>
              <span>16:9 DCI</span>
              <span>•</span>
              <span>LOG-C 10-BIT</span>
            </div>

            {/* Right: Sound Toggle Button & Audio Equalizer */}
            <div className="flex items-center gap-2 pointer-events-auto">
              <button
                type="button"
                onClick={toggleSound}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/70 hover:bg-black/90 text-white border border-white/15 text-[10px] font-mono transition-colors"
                title={isMuted ? 'Click to Unmute' : 'Click to Mute'}
              >
                {isMuted ? (
                  <>
                    <VolumeX size={12} className="text-neutral-400" />
                    <span>MUTED</span>
                  </>
                ) : (
                  <>
                    <Volume2 size={12} className="text-emerald-400" />
                    <span className="text-emerald-400">AUDIO ON</span>
                  </>
                )}
              </button>

              {/* Animated Soundwave Equalizer Bars */}
              <div className="flex items-end gap-[2px] h-3 ml-1 pointer-events-none">
                <span className={`w-[2px] h-2 bg-emerald-400 ${!isMuted ? 'animate-pulse' : 'opacity-40'}`} />
                <span className={`w-[2px] h-3 bg-emerald-400 ${!isMuted ? 'animate-pulse delay-75' : 'opacity-40'}`} />
                <span className={`w-[2px] h-1.5 bg-emerald-400 ${!isMuted ? 'animate-pulse delay-150' : 'opacity-40'}`} />
                <span className={`w-[2px] h-2.5 bg-emerald-400 ${!isMuted ? 'animate-pulse delay-100' : 'opacity-40'}`} />
              </div>
            </div>
          </div>

          {/* ─── CENTER HOVER THEATER TRIGGER ─── */}
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 pointer-events-none">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/60 backdrop-blur-xl border border-white/30 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300">
              <Play size={24} className="ml-1 fill-white text-white sm:w-7 sm:h-7" />
            </div>
            <span className="mt-3 text-xs sm:text-sm font-heading font-semibold text-white tracking-wide uppercase drop-shadow-md">
              Expand Theater Mode
            </span>
          </div>

          {/* ─── BOTTOM HUD BAR ─── */}
          <div className="absolute bottom-4 sm:bottom-6 left-6 right-6 flex items-center justify-between text-xs text-neutral-300 pointer-events-none">
            {/* Left: Ticking Timecode */}
            <div className="flex items-center gap-2">
              <span className="font-mono text-neutral-300 text-[11px] sm:text-xs tracking-wider bg-black/60 px-2.5 py-1 rounded-md border border-white/10">
                TC {timecode}
              </span>
            </div>

            {/* Center: Title / Cut info */}
            <div className="hidden sm:block text-center">
              <p className="font-heading font-semibold text-white text-xs sm:text-sm">{title}</p>
              <p className="text-[10px] text-neutral-400 font-mono tracking-widest uppercase">Master Cut • Direct-Response VSL</p>
            </div>

            {/* Right: Expand Trigger */}
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-neutral-300 bg-black/60 px-2.5 py-1 rounded-md border border-white/10">
              <Maximize2 size={12} />
              <span>{duration}</span>
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
