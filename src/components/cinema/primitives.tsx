import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import { X } from 'lucide-react';
import { useLenis } from 'lenis/react';

export const EASE = [0.76, 0, 0.24, 1] as const;
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

/* ───────── Custom cursor ─────────
   A dot that trails the pointer and grows into a labelled disc over
   anything with [data-cursor="Play"] (or any label).                     */
export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const [label, setLabel] = useState<string | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mq.matches) return;
    setEnabled(true);
    document.documentElement.classList.add('has-cursor');
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = (e.target as HTMLElement)?.closest?.('[data-cursor]') as HTMLElement | null;
      setLabel(t ? t.dataset.cursor || '' : null);
    };
    window.addEventListener('pointermove', move);
    return () => {
      window.removeEventListener('pointermove', move);
      document.documentElement.classList.remove('has-cursor');
    };
  }, [x, y]);

  if (!enabled) return null;
  const big = label !== null && label !== '';
  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
    >
      <motion.div
        animate={{ width: big ? 88 : label === '' ? 36 : 10, height: big ? 88 : label === '' ? 36 : 10 }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-bone flex items-center justify-center"
      >
        <AnimatePresence>
          {big && (
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="hud !text-[10px] text-ink !tracking-[0.2em]"
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

/* ───────── Line-mask text reveal ───────── */
export function Reveal({
  children,
  delay = 0,
  className = '',
  as: Tag = 'span',
  immediate = false,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: 'span' | 'div';
  immediate?: boolean;
}) {
  const anim = { y: '0%', rotate: 0 };
  return (
    <Tag className={`block overflow-hidden pb-[0.08em] -mb-[0.08em] ${className}`}>
      <motion.span
        className="block will-change-transform"
        initial={{ y: '110%', rotate: 3 }}
        {...(immediate ? { animate: anim } : { whileInView: anim, viewport: { once: true, margin: '-10% 0px' } })}
        transition={{ duration: 1.1, ease: EASE_OUT, delay }}
      >
        {children}
      </motion.span>
    </Tag>
  );
}

export function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.9, ease: EASE_OUT, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ───────── Magnetic wrapper ───────── */
export function Magnetic({ children, strength = 0.35, className = '' }: { children: React.ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 200, damping: 15 });
  const y = useSpring(0, { stiffness: 200, damping: 15 });
  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      className={`inline-block ${className}`}
      onPointerMove={(e) => {
        if (e.pointerType !== 'mouse' || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * strength);
        y.set((e.clientY - r.top - r.height / 2) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

/* ───────── Lightbox (global video player) ───────── */
type Media = { src: string; poster?: string; title: string; aspect: 'vertical' | 'horizontal' | 'square' };
const LightboxCtx = createContext<(m: Media) => void>(() => {});
export const useLightbox = () => useContext(LightboxCtx);

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [media, setMedia] = useState<Media | null>(null);
  const lenis = useLenis();
  const open = useCallback((m: Media) => setMedia(m), []);
  const close = useCallback(() => setMedia(null), []);

  useEffect(() => {
    if (media) lenis?.stop();
    else lenis?.start();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [media, lenis, close]);

  const frame =
    media?.aspect === 'horizontal'
      ? 'aspect-video w-[min(92vw,calc(82vh*16/9))]'
      : media?.aspect === 'square'
        ? 'aspect-square w-[min(92vw,82vh)]'
        : 'aspect-[9/16] h-[min(84vh,calc(92vw*16/9))]';

  return (
    <LightboxCtx.Provider value={open}>
      {children}
      <AnimatePresence>
        {media && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={media.title}
            className="fixed inset-0 z-[95] flex flex-col items-center justify-center bg-ink/95 backdrop-blur-md px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={close}
          >
            <div className="absolute top-0 inset-x-0 flex items-center justify-between px-4 sm:px-8 h-16">
              <span className="hud text-ash flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-ember rec" /> Now playing — {media.title}
              </span>
              <button onClick={close} aria-label="Close player" className="w-10 h-10 grid place-items-center rounded-full border border-white/15 text-bone hover:bg-bone hover:text-ink transition-colors">
                <X size={18} />
              </button>
            </div>
            <motion.div
              initial={{ clipPath: 'inset(50% 0% 50% 0%)' }}
              animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
              exit={{ clipPath: 'inset(50% 0% 50% 0%)' }}
              transition={{ duration: 0.8, ease: EASE }}
              className={`relative bg-black overflow-hidden rounded-sm max-w-full ${frame}`}
              onClick={(e) => e.stopPropagation()}
            >
              <video src={media.src} poster={media.poster} controls autoPlay playsInline className="w-full h-full object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </LightboxCtx.Provider>
  );
}

/* ───────── Booking modal (Calendly) ───────── */
export type BookingKind = 'project' | 'consult' | 'mentor';
const BOOKING_TITLES: Record<BookingKind, string> = {
  project: 'Book a project call',
  consult: 'Content consultation',
  mentor: 'Editor mentorship session',
};
const BookingCtx = createContext<(k: BookingKind) => void>(() => {});
export const useBooking = () => useContext(BookingCtx);

export function BookingProvider({ children, links }: { children: React.ReactNode; links: Record<BookingKind, string> }) {
  const [kind, setKind] = useState<BookingKind | null>(null);
  const lenis = useLenis();
  const close = useCallback(() => setKind(null), []);
  useEffect(() => {
    if (kind) lenis?.stop();
    else lenis?.start();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [kind, lenis, close]);

  const src = kind
    ? `${links[kind]}?hide_gdpr_banner=1&background_color=0f0d0b&text_color=ede6da&primary_color=ff5a36`
    : '';

  return (
    <BookingCtx.Provider value={setKind}>
      {children}
      <AnimatePresence>
        {kind && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={BOOKING_TITLES[kind]}
            className="fixed inset-0 z-[96] bg-ink/90 backdrop-blur-md flex items-end sm:items-center justify-center sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 60, opacity: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full sm:max-w-[980px] h-[92svh] sm:h-[86vh] bg-[#0f0d0b] border border-bone/15 rounded-t-2xl sm:rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-5 sm:px-7 h-14 border-b border-bone/10 shrink-0">
                <span className="hud text-bone flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-ember" /> {BOOKING_TITLES[kind]}
                </span>
                <button onClick={close} aria-label="Close booking" className="w-9 h-9 grid place-items-center rounded-full border border-white/15 text-bone hover:bg-bone hover:text-ink transition-colors">
                  <X size={16} />
                </button>
              </div>
              <iframe title={BOOKING_TITLES[kind]} src={src} className="w-full flex-1 bg-[#0f0d0b]" />
              <a href={links[kind]} target="_blank" rel="noopener noreferrer" className="hud text-ash text-center py-3 border-t border-bone/10 hover:text-bone">
                Trouble loading? Open Calendly in a new tab ↗
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </BookingCtx.Provider>
  );
}

/* ───────── Auto-playing clip card ─────────
   Plays muted as soon as it is on screen, pauses when it leaves.
   Click opens the lightbox with sound.                              */
export function ClipCard({
  clip,
  className = '',
  index,
}: {
  clip: { src: string; poster: string; title: string; note: string; duration: string; aspect: Media['aspect'] };
  className?: string;
  index?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const open = useLightbox();
  const ratio = clip.aspect === 'horizontal' ? 'aspect-video' : clip.aspect === 'square' ? 'aspect-square' : 'aspect-[9/16]';

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          if (v.preload !== 'auto') v.preload = 'auto';
          v.play().catch(() => {});
        } else v.pause();
      },
      { threshold: 0.25, rootMargin: '120px 0px' },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <figure className={`group flex flex-col ${className}`}>
      <button
        type="button"
        data-cursor="Sound"
        onClick={() => open(clip)}
        aria-label={`Play ${clip.title} with sound`}
        className={`relative block w-full ${ratio} overflow-hidden rounded-md bg-[#15130f] outline-none focus-visible:ring-2 focus-visible:ring-ember`}
      >
        <video
          ref={ref}
          src={clip.src}
          poster={clip.poster}
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25 pointer-events-none" />
        <div className="absolute top-0 inset-x-0 flex items-center justify-between p-3 pointer-events-none">
          <span className="hud !text-[9.5px] text-bone/85">{index}</span>
          <span className="hud !text-[9.5px] text-bone/85 tabular-nums">{clip.duration}</span>
        </div>
        <span className="pointer-events-none absolute bottom-3 right-3 w-9 h-9 rounded-full bg-bone/15 backdrop-blur-sm grid place-items-center text-bone opacity-0 group-hover:opacity-100 transition-opacity">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.5 4.5 0 0 0 2.5-4z" /></svg>
        </span>
      </button>
      <figcaption className="mt-3 min-h-[2.75rem]">
        <span className="block text-bone text-[15px] leading-snug">{clip.title}</span>
        <span className="block hud !text-[9px] !tracking-[0.12em] text-ash mt-1 truncate">{clip.note}</span>
      </figcaption>
    </figure>
  );
}
