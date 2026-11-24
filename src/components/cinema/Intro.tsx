import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLenis } from 'lenis/react';
import { EASE } from './primitives';

const KEY = 'ac-intro-seen';

/** Returns true if the intro should play (first visit this session, motion allowed). */
function shouldPlay() {
  if (typeof window === 'undefined') return false;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  try {
    return sessionStorage.getItem(KEY) !== '1';
  } catch {
    return true;
  }
}

/**
 * Film-leader countdown: 3 · 2 · 1 with a sweeping hand, running timecode,
 * then the frame splits like a shutter onto the live reel.
 */
export default function Intro({ onDone }: { onDone: () => void }) {
  const [play] = useState(shouldPlay);
  const [count, setCount] = useState(3);
  const [phase, setPhase] = useState<'count' | 'open' | 'gone'>(play ? 'count' : 'gone');
  const [tc, setTc] = useState(0);
  const lenis = useLenis();
  const done = useRef(false);

  useEffect(() => {
    if (!play) {
      onDone();
      return;
    }
    lenis?.stop();
    const start = performance.now();
    let raf = 0;
    const tick = () => {
      setTc(performance.now() - start);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const t1 = setTimeout(() => setCount(2), 620);
    const t2 = setTimeout(() => setCount(1), 1240);
    const t3 = setTimeout(() => finish(), 1860);
    const skip = () => finish();
    window.addEventListener('keydown', skip);
    return () => {
      cancelAnimationFrame(raf);
      [t1, t2, t3].forEach(clearTimeout);
      window.removeEventListener('keydown', skip);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [play, lenis]);

  function finish() {
    if (done.current) return;
    done.current = true;
    try {
      sessionStorage.setItem(KEY, '1');
    } catch {
      /* private mode — fine */
    }
    setPhase('open');
    onDone();
    setTimeout(() => {
      setPhase('gone');
      lenis?.start();
    }, 1100);
  }

  if (phase === 'gone') return null;

  const frames = Math.floor((tc / 1000) * 24);
  const timecode = `00:00:${String(Math.floor(frames / 24)).padStart(2, '0')}:${String(frames % 24).padStart(2, '0')}`;

  return (
    <div className={`fixed inset-0 z-[110] ${phase === 'open' ? 'pointer-events-none' : ''}`} onClick={finish} aria-hidden>
      {/* Two shutter panels */}
      <motion.div
        className="absolute inset-x-0 top-0 h-1/2 bg-[#070605]"
        animate={phase === 'open' ? { y: '-100%' } : { y: 0 }}
        transition={{ duration: 1.05, ease: EASE }}
      />
      <motion.div
        className="absolute inset-x-0 bottom-0 h-1/2 bg-[#070605]"
        animate={phase === 'open' ? { y: '100%' } : { y: 0 }}
        transition={{ duration: 1.05, ease: EASE }}
      />

      <AnimatePresence>
        {phase === 'count' && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            exit={{ opacity: 0, scale: 1.4, filter: 'blur(8px)' }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            {/* crosshair */}
            <div className="absolute left-0 right-0 top-1/2 h-px bg-bone/15" />
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-bone/15" />

            {/* leader dial */}
            <div className="relative w-[62vmin] h-[62vmin] max-w-[460px] max-h-[460px]">
              <div className="absolute inset-0 rounded-full border border-bone/25" />
              <div className="absolute inset-[9%] rounded-full border border-bone/15" />
              <motion.div
                key={count}
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    'conic-gradient(from 0deg, rgba(237,230,218,0.16) var(--a), transparent var(--a))',
                }}
                initial={{ ['--a' as string]: '0deg' }}
                animate={{ ['--a' as string]: '360deg' }}
                transition={{ duration: 0.62, ease: 'linear' }}
              />
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={count}
                  className="absolute inset-0 grid place-items-center font-display text-bone text-[38vmin] sm:text-[280px] leading-none"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.25 }}
                >
                  {count}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* HUD */}
            <div className="absolute top-5 left-5 sm:top-8 sm:left-8 hud text-bone/70 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-ember rec" /> REC
            </div>
            <div className="absolute top-5 right-5 sm:top-8 sm:right-8 hud text-bone/70 tabular-nums">{timecode}</div>
            <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8 hud text-bone/50">Reel 2025 · Take 01</div>
            <div className="absolute bottom-5 right-5 sm:bottom-8 sm:right-8 hud text-bone/40">Click to skip</div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* flash on cut */}
      {phase === 'open' && (
        <motion.div
          className="absolute inset-0 bg-bone pointer-events-none"
          initial={{ opacity: 0.35 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      )}
    </div>
  );
}
