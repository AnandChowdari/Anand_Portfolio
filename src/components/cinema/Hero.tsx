import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import { Play, ArrowDown } from 'lucide-react';
import { showreel } from '@/data/work';
import { EASE_OUT, Magnetic, useBooking, useLightbox } from './primitives';
import { RotatingWord } from './Sales';

function useTimecode(video: React.RefObject<HTMLVideoElement>, out: React.RefObject<HTMLSpanElement>) {
  useEffect(() => {
    let raf = 0;
    const loop = () => {
      const t = video.current?.currentTime ?? 0;
      const f = Math.floor((t % 1) * 24);
      if (out.current) out.current.textContent = `00:00:${String(Math.floor(t)).padStart(2, '0')}:${String(f).padStart(2, '0')}`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [video, out]);
}

export default function Hero({ ready }: { ready: boolean }) {
  const wrap = useRef<HTMLElement>(null);
  const vid = useRef<HTMLVideoElement>(null);
  const open = useLightbox();
  const book = useBooking();
  const tcRef = useRef<HTMLSpanElement>(null);
  useTimecode(vid, tcRef);

  const { scrollYProgress } = useScroll({ target: wrap, offset: ['start start', 'end end'] });
  // Full-bleed → framed screen
  const inset = useTransform(scrollYProgress, [0, 0.7], [0, 9]);
  const insetX = useTransform(scrollYProgress, [0, 0.7], [0, 12]);
  const radius = useTransform(scrollYProgress, [0, 0.7], [0, 10]);
  const clip = useMotionTemplate`inset(${inset}% ${insetX}% ${inset}% ${insetX}% round ${radius}px)`;
  const vScale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);
  const bar = useTransform(scrollYProgress, [0, 0.35], ['11vh', '0vh']);
  const nameL = useTransform(scrollYProgress, [0, 0.8], ['0%', '-18%']);
  const nameR = useTransform(scrollYProgress, [0, 0.8], ['0%', '18%']);
  const nameOpacity = useTransform(scrollYProgress, [0.35, 0.75], [1, 0]);
  const ctaOpacity = useTransform(scrollYProgress, [0.45, 0.8], [0, 1]);
  const ctaY = useTransform(scrollYProgress, [0.45, 0.8], [30, 0]);
  const ctaPointer = useTransform(scrollYProgress, (v) => (v > 0.55 ? 'auto' : 'none'));
  const hudOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    if (ready) vid.current?.play().catch(() => {});
  }, [ready]);

  const openReel = () => open({ src: showreel.src, poster: showreel.poster, title: showreel.title, aspect: 'horizontal' });

  const rise = (d: number) => ({
    initial: { y: '105%' },
    animate: ready ? { y: '0%' } : {},
    transition: { duration: 1.3, ease: EASE_OUT, delay: d + 3 },
  });

  return (
    <section ref={wrap} id="home" className="relative h-[210vh] bg-ink">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* Reel */}
        <motion.div style={{ clipPath: clip }} className="absolute inset-0 will-change-[clip-path]">
          <motion.video
            ref={vid}
            style={{ scale: vScale }}
            src={showreel.loop}
            poster={showreel.poster}
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-ink/45" />
          <div className="absolute inset-0 vignette" />
        </motion.div>

        {/* Anamorphic letterbox bars */}
        <motion.div style={{ height: bar }} className="absolute top-0 inset-x-0 bg-ink z-10" />
        <motion.div style={{ height: bar }} className="absolute bottom-0 inset-x-0 bg-ink z-10" />

        {/* Name + pitch — normal flow, aligned to the page container */}
        <motion.div style={{ opacity: nameOpacity }} className="absolute inset-0 z-20 flex items-center">
          <div className="wrap">
            <h1 className="font-display text-bone leading-[0.84] text-[19vw] sm:text-[15vw] lg:text-[12.5vw] 2xl:text-[180px]">
              <motion.span style={{ x: nameL }} className="block overflow-hidden">
                <motion.span {...rise(0.15)} className="block">Anand</motion.span>
              </motion.span>
              <motion.span style={{ x: nameR }} className="block overflow-hidden pl-[8vw] 2xl:pl-[120px]">
                <motion.span {...rise(0.28)} className="block italic">Chowdari</motion.span>
              </motion.span>
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: EASE_OUT, delay: 3.7 }}
              className="mt-8 sm:mt-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
            >
              <div className="max-w-xl">
                <p className="text-[26px] sm:text-4xl text-bone leading-[1.1]">
                  I cut <RotatingWord ready={ready} words={['VSLs', 'documentaries', 'reels', 'ads']} /> that convert.
                </p>
                <p className="mt-3 text-bone/70 text-[15px] sm:text-base leading-relaxed">
                  Editor &amp; motion designer behind 50M+ views for founders, creators and academies.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pointer-events-auto">
                <button onClick={openReel} data-cursor="" className="inline-flex items-center gap-3 rounded-full bg-bone text-ink pl-2 pr-6 py-2 hover:bg-ember transition-colors">
                  <span className="w-9 h-9 rounded-full bg-ink text-bone grid place-items-center"><Play size={14} className="fill-current ml-0.5" /></span>
                  <span className="font-medium">Watch reel</span>
                </button>
                <button onClick={() => book('project')} data-cursor="" className="inline-flex items-center rounded-full border border-bone/30 bg-ink/30 backdrop-blur-sm text-bone px-6 py-3 hover:bg-bone hover:text-ink transition-colors">
                  Book a call
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* HUD */}
        <motion.div style={{ opacity: hudOpacity }} className="absolute z-30 inset-x-0 top-[calc(11vh+16px)] pointer-events-none">
          <div className="wrap flex justify-between">
          <motion.span initial={{ opacity: 0 }} animate={ready ? { opacity: 1 } : {}} transition={{ delay: 3.9 }} className="hud text-bone/80 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-ember rec" /> Showreel · 2026
          </motion.span>
          <motion.span initial={{ opacity: 0 }} animate={ready ? { opacity: 1 } : {}} transition={{ delay: 3.9 }} className="hud text-bone/80 tabular-nums">
            <span ref={tcRef}>00:00:00:00</span>
          </motion.span>
          </div>
        </motion.div>
        <motion.div style={{ opacity: hudOpacity }} className="absolute z-30 inset-x-0 bottom-[calc(11vh+16px)] pointer-events-none">
          <div className="wrap flex justify-between items-end">
          <motion.span initial={{ opacity: 0 }} animate={ready ? { opacity: 1 } : {}} transition={{ delay: 4 }} className="hud text-bone/70 hidden sm:flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Hyderabad, IN · Booking new projects
          </motion.span>
          <motion.span initial={{ opacity: 0 }} animate={ready ? { opacity: 1 } : {}} transition={{ delay: 4.1 }} className="hud text-bone/70 flex items-center gap-2 ml-auto">
            Scroll <ArrowDown size={12} className="animate-bounce" />
          </motion.span>
          </div>
        </motion.div>

        {/* Play CTA — appears once the reel is framed */}
        <motion.div style={{ opacity: ctaOpacity, y: ctaY }} className="absolute inset-0 z-30 grid place-items-center pointer-events-none">
          <motion.div style={{ pointerEvents: ctaPointer }}>
          <Magnetic strength={0.4}>
            <button
              onClick={openReel}
              data-cursor=""
              className="group flex items-center gap-4 rounded-full bg-bone text-ink pl-2 pr-7 py-2 shadow-[0_20px_60px_rgba(0,0,0,.5)] hover:bg-ember transition-colors duration-300"
            >
              <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-ink text-bone grid place-items-center group-hover:scale-90 transition-transform">
                <Play size={18} className="fill-current ml-0.5" />
              </span>
              <span className="text-left">
                <span className="block text-base sm:text-lg font-medium leading-none">Play the reel</span>
                <span className="hud !text-[9px] text-ink/60">With sound · {showreel.duration}</span>
              </span>
            </button>
          </Magnetic>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
