import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useLenis } from 'lenis/react';
import { siteConfig } from '../config/site';
import { useBooking } from './cinema/primitives';

const links = [
  { id: 'work', label: 'Work' },
  { id: 'results', label: 'Results' },
  { id: 'services', label: 'Services' },
  { id: 'consulting', label: 'Consulting' },
  { id: 'contact', label: 'Contact' },
];

const EASE = [0.76, 0, 0.24, 1] as const;

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const lenis = useLenis();
  const book = useBooking();
  const { pathname } = useLocation();
  const onHome = pathname === '/';

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 200 && !open);
    setSolid(y > 40);
  });

  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
  }, [open, lenis]);

  const go = (e: React.MouseEvent, id: string) => {
    if (!onHome) return; // let the Link navigate home
    e.preventDefault();
    setOpen(false);
    lenis?.scrollTo(`#${id}`, { duration: 1.6 });
  };

  return (
    <>
      <motion.header
        animate={{ y: hidden ? '-110%' : '0%' }}
        transition={{ duration: 0.6, ease: EASE }}
        className={`fixed top-0 inset-x-0 z-[80] transition-colors duration-500 ${solid ? 'bg-ink/70 backdrop-blur-md' : ''}`}
      >
        <nav className="wrap flex items-center justify-between h-16" aria-label="Primary">
          <Link to="/" onClick={(e) => go(e, 'home')} className="flex items-center gap-2 text-bone" aria-label={`${siteConfig.name} — home`}>
            <span className="font-display text-2xl leading-none">A<span className="italic text-ember">c</span></span>
            <span className="hud text-ash hidden sm:inline">Editor · Motion</span>
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.id}>
                <Link to={`/#${l.id}`} onClick={(e) => go(e, l.id)} className="hud text-bone/75 hover:text-bone transition-colors relative group">
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-ember group-hover:w-full transition-[width] duration-500" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => book('project')}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-bone text-ink px-5 py-2 text-sm font-medium hover:bg-ember transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" /> Book a call
            </button>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="md:hidden w-10 h-10 grid place-items-center rounded-full border border-bone/20"
            >
              <span className="relative w-4 h-2.5">
                <span className={`absolute left-0 w-4 h-px bg-bone transition-transform duration-300 ${open ? 'top-1 rotate-45' : 'top-0'}`} />
                <span className={`absolute left-0 w-4 h-px bg-bone transition-transform duration-300 ${open ? 'top-1 -rotate-45' : 'top-2.5'}`} />
              </span>
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[79] bg-ink flex flex-col justify-end px-5 pb-10 pt-24 md:hidden"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <ul className="space-y-1">
              {links.map((l, i) => (
                <li key={l.id} className="overflow-hidden">
                  <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: EASE, delay: 0.15 + i * 0.06 }}>
                    <Link to={`/#${l.id}`} onClick={(e) => go(e, l.id)} className="flex items-baseline gap-4 font-display text-bone text-5xl leading-[1.08]">
                      <span className="hud text-ember">0{i + 1}</span>
                      {l.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
            <div className="mt-10 pt-6 border-t border-bone/15 flex justify-between hud text-ash">
              <button type="button" onClick={() => { setOpen(false); book('project'); }} className="text-bone">Book a call ↗</button>
              <Link to="/resume" onClick={() => setOpen(false)}>Résumé</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
