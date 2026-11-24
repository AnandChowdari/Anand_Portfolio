import React, { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Calendar, Check, Instagram, Linkedin, Mail, Send } from 'lucide-react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';
import { caseStudies, voices } from '@/data/work';
import { siteConfig, getMailtoUrl } from '@/config/site';
import { useToast } from '@/components/ui/use-toast';
import { ClipCard, EASE_OUT, FadeUp, Reveal, useBooking } from './primitives';
import { SectionHead } from './Sales';

/* ───────── Counter ───────── */
function Counter({ value, suffix = '', className = '' }: { value: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const decimals = value % 1 === 0 ? 0 : 1;
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, value, {
      duration: 1.8,
      ease: EASE_OUT,
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = v.toFixed(decimals) + suffix;
      },
    });
    return () => c.stop();
  }, [inView, value, suffix, decimals]);
  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}

/* ───────── Ticker ───────── */
export function Ticker() {
  const items = ['VSLs', 'Documentaries', 'Short-form', 'Motion design', '3D explainers', 'Sound design', 'Colour', 'Consulting'];
  const row = [...items, ...items];
  return (
    <div className="bg-ember text-ink py-4 overflow-hidden" aria-hidden>
      <div className="marquee flex w-max gap-10 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-3xl sm:text-4xl italic">
            {t} <span className="not-italic text-xl">✺</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ───────── Case files ───────── */
export function CaseFiles() {
  return (
    <section id="results" className="bg-[#0f0d0b] py-20 sm:py-28 border-t border-bone/10">
      <div className="wrap">
        <SectionHead kicker="Verified results" title="Case" italic="files." aside="Two campaigns, real numbers, in the clients’ own words." />
        <div className="space-y-20 sm:space-y-28">
          {caseStudies.map((cs, i) => {
            const vertical = cs.clip.aspect === 'vertical';
            return (
              <article key={cs.id} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <div className={`${vertical ? 'lg:col-span-4 max-w-[340px] w-full mx-auto lg:mx-0' : 'lg:col-span-7'} ${i % 2 ? 'lg:order-2' : ''}`}>
                  <ClipCard clip={cs.clip} index={`File 0${i + 1}`} />
                </div>
                <div className={vertical ? 'lg:col-span-8' : 'lg:col-span-5'}>
                  <FadeUp className="hud text-ember mb-5">
                    File 0{i + 1} — {cs.client}
                  </FadeUp>
                  <h3 className="font-display text-bone text-4xl sm:text-5xl leading-[1.02] max-w-2xl">
                    <Reveal>{cs.headline}</Reveal>
                  </h3>
                  <FadeUp delay={0.1} className="mt-5 text-bone/65 leading-relaxed max-w-xl">
                    {cs.body}
                  </FadeUp>
                  <div className="mt-8 grid grid-cols-3 gap-px bg-bone/15 border-y border-bone/15">
                    {cs.metrics.map((m) => (
                      <div key={m.label} className="bg-[#0f0d0b] py-5 pr-3 [&:not(:first-child)]:pl-4">
                        <Counter value={m.value} suffix={m.suffix} className="block font-display text-bone text-3xl sm:text-4xl tabular-nums leading-none" />
                        <p className="hud !text-[9px] !tracking-[0.1em] text-ash mt-2">{m.label}</p>
                      </div>
                    ))}
                  </div>
                  <FadeUp delay={0.15}>
                    <blockquote className="mt-8 font-display italic text-bone/85 text-xl sm:text-2xl leading-snug max-w-2xl">“{cs.quote}”</blockquote>
                    <p className="hud text-ash mt-3">— {cs.person}</p>
                  </FadeUp>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────── Voices ───────── */
export function Voices() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % voices.length), 6500);
    return () => clearInterval(t);
  }, [active]);
  const v = voices[active];

  return (
    <section id="voices" className="bg-ink py-20 sm:py-28 border-t border-bone/10">
      <div className="wrap">
        <p className="hud text-ash mb-10 flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-ember" /> In their words
        </p>
        <div className="min-h-[11em] sm:min-h-[7.5em] lg:min-h-[6em] max-w-5xl">
          <blockquote key={active} className="font-display text-bone text-[32px] sm:text-5xl lg:text-6xl leading-[1.08]">
            {('“' + v.quote + '”').split(' ').map((w, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.22em]"
                initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.6, ease: EASE_OUT, delay: i * 0.025 }}
              >
                {w}
              </motion.span>
            ))}
          </blockquote>
        </div>
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-px bg-bone/15 border-t border-bone/15">
          {voices.map((p, i) => (
            <button
              key={p.name}
              onClick={() => setActive(i)}
              data-cursor=""
              className={`relative bg-ink text-left py-5 pr-4 [&:nth-child(even)]:pl-4 lg:[&:not(:first-child)]:pl-4 transition-colors ${i === active ? 'text-bone' : 'text-ash hover:text-bone'}`}
            >
              <span className="absolute -top-px left-0 h-px bg-ember transition-[width] duration-700" style={{ width: i === active ? '100%' : '0%' }} />
              <span className="flex items-center gap-3">
                <span className={`w-9 h-9 shrink-0 rounded-full grid place-items-center font-display text-lg ${i === active ? 'bg-bone text-ink' : 'border border-bone/20'}`}>
                  {p.name[0]}
                </span>
                <span className="min-w-0">
                  <span className="block text-sm truncate">{p.name}</span>
                  <span className="block hud !text-[9px] !tracking-[0.08em] opacity-70 truncate">{p.role}</span>
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Process ───────── */
export function Process() {
  const steps = [
    { n: '01', t: 'Discovery call', d: 'We pin the goal, the audience and the first five seconds before a single cut.' },
    { n: '02', t: 'Story edit', d: 'Structure, pacing and pattern-interrupts — the rough cut that earns retention.' },
    { n: '03', t: 'Motion & sound', d: 'Kinetic type, 3D, infographics, sound design and colour that carry the message.' },
    { n: '04', t: 'Ship & iterate', d: 'Platform-ready exports, cutdowns for every format, and revisions on real data.' },
  ];
  return (
    <section id="process" className="bg-ink py-20 sm:py-28 border-t border-bone/10">
      <div className="wrap">
        <SectionHead kicker="Process" title="How a cut" italic="comes together." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-bone/15 border-y border-bone/15">
          {steps.map((s, i) => (
            <FadeUp key={s.n} delay={i * 0.07} className="bg-ink py-8 sm:px-6 first:sm:pl-0 group">
              <span className="hud text-ember">{s.n}</span>
              <h3 className="font-display text-bone text-3xl sm:text-4xl leading-none mt-6 group-hover:translate-x-2 transition-transform duration-500">{s.t}</h3>
              <p className="mt-4 text-bone/60 leading-relaxed text-[15px]">{s.d}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Contact — email first, Calendly second ───────── */
export function Contact() {
  const { toast } = useToast();
  const book = useBooking();
  const [form, setForm] = useState({ name: '', email: '', type: 'Editing project', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send(
        siteConfig.emailjs.service,
        siteConfig.emailjs.template,
        { name: form.name, email: form.email, message: `[${form.type}]\n\n${form.message}` },
        siteConfig.emailjs.publicKey,
      );
      setSent(true);
      setForm({ name: '', email: '', type: form.type, message: '' });
    } catch {
      toast({
        title: 'Could not send automatically',
        description: `Please email ${siteConfig.email.address} directly.`,
        variant: 'destructive',
      });
    } finally {
      setSending(false);
    }
  };

  const field =
    'w-full bg-transparent border-b border-bone/20 focus:border-ember outline-none py-4 text-bone text-base sm:text-lg placeholder:text-ash/70 transition-colors';
  const types = ['Editing project', 'Content consultation', 'Editor mentorship', 'Other'];

  return (
    <section id="contact" className="bg-[#0f0d0b] pt-20 sm:pt-28 pb-20 border-t border-bone/10">
      <div className="wrap">
        <p className="hud text-ash mb-6 flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 rec" /> {siteConfig.email.responseTime}
        </p>
        <h2 className="font-display text-bone text-[16vw] sm:text-[11vw] lg:text-[9vw] 2xl:text-[130px] leading-[0.86]">
          <Reveal>Let’s make</Reveal>
          <Reveal delay={0.08} className="italic text-ember">them stay.</Reveal>
        </h2>

        <div className="mt-14 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16">
          {/* Direct channels */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <button
              type="button"
              onClick={() => book('project')}
              data-cursor=""
              className="group flex items-center justify-between w-full rounded-full bg-bone text-ink pl-6 pr-2 py-2 hover:bg-ember transition-colors duration-300"
            >
              <span className="flex items-center gap-3 text-base sm:text-lg font-medium">
                <Calendar size={18} /> Book a call on Calendly
              </span>
              <span className="w-11 h-11 rounded-full bg-ink text-bone grid place-items-center group-hover:rotate-45 transition-transform duration-500">
                <ArrowUpRight size={19} />
              </span>
            </button>
            <a
              href={getMailtoUrl()}
              data-cursor=""
              className="group flex items-center justify-between rounded-full border border-bone/20 text-bone pl-6 pr-2 py-2 hover:border-bone transition-colors"
            >
              <span className="flex items-center gap-3 min-w-0">
                <Mail size={17} className="shrink-0" /> <span className="truncate text-[15px]">{siteConfig.email.address}</span>
              </span>
              <span className="w-11 h-11 shrink-0 rounded-full border border-bone/20 grid place-items-center group-hover:rotate-45 transition-transform duration-500">
                <ArrowUpRight size={18} />
              </span>
            </a>
            <div className="flex gap-3 mt-2">
              <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-11 h-11 rounded-full border border-bone/20 grid place-items-center text-bone hover:bg-bone hover:text-ink transition-colors">
                <Instagram size={17} />
              </a>
              <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-11 h-11 rounded-full border border-bone/20 grid place-items-center text-bone hover:bg-bone hover:text-ink transition-colors">
                <Linkedin size={17} />
              </a>
            </div>
            <ul className="mt-6 space-y-2 text-bone/60 text-[15px]">
              {['Free 15-min project call', 'Clear quote within 24 hours', 'Remote · worldwide'].map((t) => (
                <li key={t} className="flex gap-3 items-center">
                  <Check size={14} className="text-ember" /> {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Mail form */}
          <div className="lg:col-span-7">
            {sent ? (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-xl border border-bone/15 p-8 sm:p-10">
                <p className="font-display text-bone text-4xl">Message received.</p>
                <p className="mt-3 text-bone/65">Thanks — I’ll reply to your inbox shortly. Want to skip the wait?</p>
                <button onClick={() => book('project')} className="mt-6 inline-flex items-center gap-2 hud text-ember hover:text-bone">
                  Book a time now <ArrowUpRight size={14} />
                </button>
              </motion.div>
            ) : (
              <form onSubmit={submit}>
                <p className="hud text-ash mb-4">Send a message</p>
                <div className="flex flex-wrap gap-2 mb-2" role="radiogroup" aria-label="Inquiry type">
                  {types.map((t) => (
                    <button
                      key={t}
                      type="button"
                      role="radio"
                      aria-checked={form.type === t}
                      onClick={() => setForm({ ...form, type: t })}
                      className={`rounded-full px-4 py-2 text-sm border transition-colors ${form.type === t ? 'bg-bone text-ink border-bone' : 'border-bone/20 text-bone/75 hover:border-bone/50'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <div className="grid sm:grid-cols-2 sm:gap-6">
                  <div>
                    <label className="sr-only" htmlFor="c-name">Name or brand</label>
                    <input id="c-name" required className={field} placeholder="Your name / brand" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="c-email">Email</label>
                    <input id="c-email" required type="email" className={field} placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  </div>
                </div>
                <label className="sr-only" htmlFor="c-msg">Message</label>
                <textarea id="c-msg" required rows={4} className={`${field} resize-none`} placeholder="What are we making? Format, timeline, budget…" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                <button
                  type="submit"
                  disabled={sending}
                  data-cursor=""
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-ember text-ink px-7 py-4 font-medium hover:bg-bone transition-colors disabled:opacity-50"
                >
                  <Send size={16} /> {sending ? 'Sending…' : 'Send message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Footer ───────── */
export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] });
  const y = useTransform(scrollYProgress, [0, 1], ['40%', '0%']);
  return (
    <footer ref={ref} className="bg-ink border-t border-bone/10 pt-12 overflow-hidden">
      <div className="wrap flex flex-col sm:flex-row justify-between gap-6 hud text-ash">
        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
          <a href="#work" className="hover:text-bone">Work</a>
          <a href="#services" className="hover:text-bone">Services</a>
          <a href="#consulting" className="hover:text-bone">Consulting</a>
          <a href="#contact" className="hover:text-bone">Contact</a>
          <Link to="/resume" className="hover:text-bone">Résumé</Link>
        </nav>
        <span>© {new Date().getFullYear()} {siteConfig.name} · Remote worldwide</span>
      </div>
      <motion.p style={{ y }} aria-hidden className="font-display text-bone/90 text-[12.5vw] leading-[0.85] mt-10 -mb-[1.5vw] text-center whitespace-nowrap select-none">
        AnandWith<span className="italic text-ember">Camera</span>
      </motion.p>
    </footer>
  );
}
