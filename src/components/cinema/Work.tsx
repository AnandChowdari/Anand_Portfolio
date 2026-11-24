import { useLayoutEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { chapters, motionLoops } from '@/data/work';
import { ClipCard, EASE_OUT, FadeUp, Reveal } from './primitives';

type Chapter = (typeof chapters)[number];

function ChapterHead({ c, compact = false }: { c: Chapter; compact?: boolean }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end">
      <div className="lg:col-span-7">
        <FadeUp className="hud text-ash flex items-center gap-3 mb-4">
          <span className="text-ember">Ch. {c.index}</span>
          <span className="h-px w-8 bg-ash/40" />
          <span className="truncate">{c.client}</span>
        </FadeUp>
        <h3 className={`font-display text-bone leading-[0.9] ${compact ? 'text-5xl sm:text-6xl lg:text-7xl' : 'text-6xl sm:text-7xl lg:text-8xl'}`}>
          <Reveal>
            {c.title} <span className="italic text-bone/55">{c.italic}</span>
          </Reveal>
        </h3>
      </div>
      <FadeUp delay={0.1} className="lg:col-span-5 text-bone/65 text-[15px] sm:text-base leading-relaxed max-w-xl lg:justify-self-end">
        {c.blurb}
      </FadeUp>
    </div>
  );
}

/* ───── Reels — clean, aligned grid; every card plays on sight ───── */
function ReelChapter({ c, first = false }: { c: Chapter; first?: boolean }) {
  const cols = c.clips.length % 5 === 0 ? 'lg:grid-cols-5' : 'lg:grid-cols-4';
  return (
    <section id={first ? 'work' : c.id} className={`bg-ink py-20 sm:py-28 ${first ? '' : 'border-t border-bone/10'}`}>
      <div className="wrap">
        <ChapterHead c={c} />
        <div className={`mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 ${cols} gap-x-4 sm:gap-x-5 gap-y-10`}>
          {c.clips.map((clip, i) => (
            <motion.div
              key={clip.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5% 0px' }}
              transition={{ duration: 0.8, ease: EASE_OUT, delay: (i % 5) * 0.06 }}
            >
              <ClipCard clip={clip} index={`${c.index}.${String(i + 1).padStart(2, '0')}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── Long-form — pinned horizontal film strip ───── */
function LongformStrip({ c }: { c: Chapter }) {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  useLayoutEffect(() => {
    const measure = () => track.current && setDistance(Math.max(0, track.current.scrollWidth - window.innerWidth));
    measure();
    const ro = new ResizeObserver(measure);
    if (track.current) ro.observe(track.current);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: section, offset: ['start start', 'end end'] });
  const x = useSpring(useTransform(scrollYProgress, [0, 1], [0, -distance]), { stiffness: 120, damping: 30, mass: 0.3 });
  const progress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={section} id={c.id} className="relative bg-ink border-t border-bone/10" style={{ height: `calc(100svh + ${distance}px)` }}>
      <div className="sticky top-0 h-[100svh] overflow-hidden flex flex-col justify-center gap-8 sm:gap-10 pt-16">
        <div className="wrap">
          <ChapterHead c={c} compact />
        </div>

        {/* track aligns its first card with the .wrap gutter */}
        <motion.div
          ref={track}
          style={{ x }}
          className="flex gap-4 sm:gap-5 w-max pl-5 sm:pl-10 2xl:pl-[calc((100vw-1440px)/2+2.5rem)] pr-5 sm:pr-10"
        >
          {c.clips.map((clip, i) => (
            <ClipCard
              key={clip.id}
              clip={clip}
              index={`${c.index}.${String(i + 1).padStart(2, '0')}`}
              className="w-[80vw] sm:w-[52vw] lg:w-[36vw] 2xl:w-[520px] shrink-0"
            />
          ))}
        </motion.div>

        <div className="wrap">
          <div className="relative h-px bg-bone/15">
            <motion.div style={{ width: progress }} className="absolute left-0 top-0 h-px bg-ember" />
          </div>
          <div className="flex justify-between mt-3 hud text-ash">
            <span>{c.clips.length} long-form cuts</span>
            <span>Keep scrolling →</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── 3D motion loops ───── */
function MotionLoops() {
  return (
    <section className="bg-ink py-20 sm:py-28 border-t border-bone/10">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-12">
          <h3 className="lg:col-span-7 font-display text-bone text-5xl sm:text-6xl lg:text-7xl leading-[0.9]">
            <Reveal>
              Motion <span className="italic text-bone/55">design.</span>
            </Reveal>
          </h3>
          <FadeUp delay={0.1} className="lg:col-span-5 text-bone/65 leading-relaxed max-w-xl lg:justify-self-end">
            3D product-UI loops and shape morphs — the polish layer that makes SaaS and brand videos feel expensive.
          </FadeUp>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {motionLoops.map((clip, i) => (
            <motion.div
              key={clip.id}
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 1.2, ease: EASE_OUT, delay: i * 0.1 }}
            >
              <ClipCard clip={clip} index={`M.0${i + 1}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Work() {
  const [aviation, explainers, founders, longform] = chapters;
  return (
    <>
      <ReelChapter c={aviation} first />
      <ReelChapter c={explainers} />
      <ReelChapter c={founders} />
      <LongformStrip c={longform} />
      <MotionLoops />
    </>
  );
}
