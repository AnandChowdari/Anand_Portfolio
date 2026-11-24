import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { ArrowUpRight, Calendar, Check, Plus } from 'lucide-react';
import { EASE, EASE_OUT, FadeUp, Reveal, useBooking, type BookingKind } from './primitives';

/* ───────── Rotating word (hero) ───────── */
export function RotatingWord({ words, ready }: { words: string[]; ready: boolean }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (!ready) return;
    const t = setInterval(() => setI((n) => (n + 1) % words.length), 2200);
    return () => clearInterval(t);
  }, [ready, words.length]);
  return (
    <span className="relative inline-grid overflow-hidden align-bottom">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={i}
          initial={{ y: '100%' }}
          animate={{ y: '0%' }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="font-display italic text-ember whitespace-nowrap"
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/* ───────── Section heading (shared) ───────── */
export function SectionHead({ kicker, title, italic, aside }: { kicker: string; title: string; italic: string; aside?: string }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-12 sm:mb-16">
      <div className="lg:col-span-7">
        <FadeUp className="hud text-ash flex items-center gap-3 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-ember" /> {kicker}
        </FadeUp>
        <h2 className="font-display text-bone text-6xl sm:text-7xl lg:text-8xl leading-[0.9]">
          <Reveal>
            {title} <span className="italic text-bone/55">{italic}</span>
          </Reveal>
        </h2>
      </div>
      {aside && (
        <FadeUp delay={0.1} className="lg:col-span-5 text-bone/65 leading-relaxed max-w-xl lg:justify-self-end">
          {aside}
        </FadeUp>
      )}
    </div>
  );
}

/* ───────── Proof bar ───────── */
export function ProofBar() {
  const proof = [
    { k: '16M+', v: 'views · Hustle Lifestyle' },
    { k: '50+', v: 'paid enrollments · Horizon Aviation' },
    { k: '25+', v: 'founders & brands served' },
    { k: '5 yrs', v: 'editing for retention' },
  ];
  return (
    <section aria-label="Results at a glance" className="bg-ink border-b border-bone/10">
      <div className="wrap">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-bone/10 border-x border-bone/10">
          {proof.map((p, i) => (
            <FadeUp key={p.v} delay={i * 0.07} className="bg-ink px-5 py-8 sm:py-10">
              <p className="font-display text-bone text-4xl sm:text-5xl leading-none">{p.k}</p>
              <p className="hud !text-[9.5px] !tracking-[0.12em] text-ash mt-3">{p.v}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Offers (done-for-you editing) ───────── */
const offers = [
  {
    n: '01',
    name: 'VSL & Ad Edit',
    for: 'Founders running paid traffic',
    points: ['Hook testing — 3 opening variants', 'Direct-response pacing & captions', 'Motion graphics that sell the offer', 'Cutdowns for every placement'],
  },
  {
    n: '02',
    name: 'Long-form YouTube',
    for: 'Channels that need watch-time',
    points: ['Story structure & retention edit', 'Data-viz, kinetic type, B-roll', 'Sound design & colour grade', 'Shorts cut from every episode'],
    featured: true,
  },
  {
    n: '03',
    name: 'Short-form Retainer',
    for: 'Brands posting every week',
    points: ['Monthly reel volume, on schedule', 'Trend-aware hooks & formats', '3D / motion explainers on request', 'One editor who knows your brand'],
  },
];

export function Offers() {
  const book = useBooking();
  return (
    <section id="services" className="bg-ink py-20 sm:py-28 border-t border-bone/10">
      <div className="wrap">
        <SectionHead
          kicker="Done-for-you editing"
          title="Pick your"
          italic="growth lever."
          aside="Every project is quoted to scope. Book a short call, tell me the goal, and you'll get a clear price and timeline."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {offers.map((o, i) => (
            <motion.button
              key={o.n}
              type="button"
              onClick={() => book('project')}
              data-cursor="Book"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.9, ease: EASE_OUT, delay: i * 0.1 }}
              className={`group relative text-left flex flex-col h-full rounded-xl p-7 sm:p-8 overflow-hidden border transition-colors duration-500 ${
                o.featured ? 'bg-bone text-ink border-bone' : 'bg-[#100e0c] text-bone border-bone/15 hover:border-bone/40'
              }`}
            >
              <span className="absolute inset-0 bg-ember translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(.76,0,.24,1)]" />
              <span className="relative flex justify-between items-center h-6">
                <span className="hud opacity-60 group-hover:text-ink">{o.n}</span>
                {o.featured && <span className="hud !text-[9px] rounded-full bg-ink text-bone px-3 py-1">Most popular</span>}
              </span>
              <span className="relative block font-display text-[44px] leading-[0.95] mt-8 group-hover:text-ink transition-colors">{o.name}</span>
              <span className="relative block hud !text-[9.5px] opacity-60 mt-3 group-hover:text-ink">{o.for}</span>
              <span className="relative block mt-8 space-y-3 text-[15px] group-hover:text-ink transition-colors">
                {o.points.map((p) => (
                  <span key={p} className="flex gap-3 items-start">
                    <Check size={15} className="mt-1 shrink-0 opacity-60" />
                    {p}
                  </span>
                ))}
              </span>
              <span className="relative mt-auto pt-10 flex items-center justify-between group-hover:text-ink">
                <span className="text-base font-medium">Book a project call</span>
                <span className={`w-11 h-11 rounded-full grid place-items-center transition-transform duration-500 group-hover:rotate-45 ${o.featured ? 'bg-ink text-bone' : 'border border-current'}`}>
                  <ArrowUpRight size={18} />
                </span>
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Consulting & Mentorship (bookable sessions) ───────── */
const sessions: {
  kind: BookingKind;
  tag: string;
  title: string;
  italic: string;
  who: string;
  length: string;
  points: string[];
  cta: string;
}[] = [
  {
    kind: 'consult',
    tag: 'For brands & creators',
    title: 'Content',
    italic: 'consultation.',
    who: 'Founders, creators and marketing teams who want their videos to actually perform.',
    length: '45 min · 1:1 video call',
    points: [
      'Audit of your current videos & retention drop-offs',
      'Hook, format and pacing strategy for your niche',
      'A content plan you can shoot next week',
      'Recording + written action notes after the call',
    ],
    cta: 'Book a consultation',
  },
  {
    kind: 'mentor',
    tag: 'For video editors',
    title: 'Editor',
    italic: 'mentorship.',
    who: 'Editors who want to level up their craft — and land better-paying clients.',
    length: '60 min · 1:1 screen-share',
    points: [
      'Live review of your edits & portfolio',
      'Pacing, sound design & motion workflows I use',
      'How to find, pitch and price your first clients',
      'A personal roadmap to your next level',
    ],
    cta: 'Book a mentorship session',
  },
];

export function Consulting() {
  const book = useBooking();
  return (
    <section id="consulting" className="bg-[#0f0d0b] py-20 sm:py-28 border-t border-bone/10">
      <div className="wrap">
        <SectionHead
          kicker="Book a 1:1 session"
          title="Consult"
          italic="& mentor."
          aside="Not ready for a full project? Book time with me directly — a strategy session for your content, or mentorship for your editing career."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {sessions.map((s, i) => (
            <motion.article
              key={s.kind}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.9, ease: EASE_OUT, delay: i * 0.1 }}
              className="relative flex flex-col rounded-xl border border-bone/15 bg-ink p-7 sm:p-10 overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-ember/10 blur-3xl pointer-events-none" />
              <div className="relative flex items-center justify-between gap-4">
                <span className="hud text-ember">{s.tag}</span>
                <span className="hud !text-[9.5px] text-ash flex items-center gap-2">
                  <Calendar size={12} /> {s.length}
                </span>
              </div>
              <h3 className="relative font-display text-bone text-5xl sm:text-6xl leading-[0.92] mt-8">
                {s.title} <span className="italic text-bone/55">{s.italic}</span>
              </h3>
              <p className="relative mt-4 text-bone/65 leading-relaxed max-w-md">{s.who}</p>
              <ul className="relative mt-8 grid gap-3 text-bone/90 text-[15px]">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-3 items-start">
                    <Check size={15} className="mt-1 shrink-0 text-ember" /> {p}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => book(s.kind)}
                data-cursor=""
                className="relative mt-10 self-start inline-flex items-center gap-3 rounded-full bg-bone text-ink pl-6 pr-2 py-2 hover:bg-ember transition-colors group"
              >
                <span className="font-medium">{s.cta}</span>
                <span className="w-10 h-10 rounded-full bg-ink text-bone grid place-items-center group-hover:rotate-45 transition-transform duration-500">
                  <ArrowUpRight size={17} />
                </span>
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── FAQ ───────── */
const faqs = [
  { q: 'How fast is turnaround?', a: 'Reels typically in 2–3 days, VSLs and long-form in about a week depending on length and motion design. Timelines are confirmed on the call.' },
  { q: 'How do revisions work?', a: 'Revision rounds are agreed up front. We lock the hook and structure first, so most projects land quickly.' },
  { q: 'Do you work with international clients?', a: 'Yes — fully remote, worldwide, across time zones.' },
  { q: 'What happens in a consultation or mentorship call?', a: 'A focused 1:1 video call. Consultations audit your content and leave you with a plan; mentorship reviews your edits and maps out how to grow as an editor.' },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-ink py-20 sm:py-28 border-t border-bone/10">
      <div className="wrap grid grid-cols-1 lg:grid-cols-12 gap-10">
        <h2 className="lg:col-span-4 font-display text-bone text-6xl sm:text-7xl leading-[0.9]">
          <Reveal>Before</Reveal>
          <Reveal delay={0.08} className="italic text-bone/55">you ask.</Reveal>
        </h2>
        <div className="lg:col-span-8 border-t border-bone/15">
          {faqs.map((f, i) => (
            <div key={f.q} className="border-b border-bone/15">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                data-cursor=""
                className="w-full flex items-center justify-between gap-6 py-6 text-left text-bone text-lg sm:text-2xl"
              >
                {f.q}
                <Plus size={20} className={`shrink-0 transition-transform duration-500 ${open === i ? 'rotate-45 text-ember' : ''}`} />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <p className="pb-7 text-bone/65 leading-relaxed max-w-2xl">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Sticky CTA ───────── */
export function StickyCTA() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);
  const book = useBooking();
  useMotionValueEvent(scrollY, 'change', (y) => {
    const contact = document.getElementById('contact');
    const nearEnd = contact ? y + window.innerHeight > contact.offsetTop + 120 : false;
    setShow(y > window.innerHeight * 2.2 && !nearEnd);
  });
  return (
    <AnimatePresence>
      {show && (
        <div className="fixed z-[85] bottom-4 sm:bottom-6 inset-x-0 flex justify-center sm:justify-end sm:px-6 pointer-events-none">
          <motion.button
            type="button"
            onClick={() => book('project')}
            data-cursor=""
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 120, opacity: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="pointer-events-auto flex items-center gap-3 rounded-full bg-bone text-ink pl-2 pr-6 py-2 shadow-[0_18px_50px_rgba(0,0,0,.55)] hover:bg-ember transition-colors whitespace-nowrap"
          >
            <span className="w-10 h-10 rounded-full bg-ink text-bone grid place-items-center">
              <Calendar size={16} />
            </span>
            <span className="text-left">
              <span className="block text-sm font-medium leading-tight">Book a free call</span>
              <span className="hud !text-[8.5px] !tracking-[0.12em] text-ink/60">Pick a time on Calendly</span>
            </span>
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
}
