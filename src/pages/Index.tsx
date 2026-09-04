import { useState, useMemo, useEffect } from "react";
import { Play, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ButtonGradient } from "@/components/ui/button-gradient";
import GradientMesh from "../components/GradientMesh";
import ThreeDShowcase from "../components/ThreeDShowcase";
import PortfolioShowcase from "../components/PortfolioShowcase";
import CaseStudies from "../components/CaseStudies";
import ResumeSection from "../components/ResumeSection";

import About from "./About";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

/* ───────── Letter Animation Variants ───────── */
const letterContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const letterVariant = {
  hidden: { opacity: 0, scale: 0.4, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 14,
      stiffness: 220,
    },
  },
};

const subtitleVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.8, duration: 0.7, ease: "easeOut" },
  },
};

/* ───────── Section Slide-In Wrapper ───────── */
const SectionReveal = ({ children, index }: { children: React.ReactNode; index: number }) => {
  const fromLeft = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, x: fromLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

// Video files for the hero 3-column marquee
const heroVideoFiles = {
  col1: ["Nested Sequence 03.mp4", "Nested Sequence 04.mp4", "Nested Sequence 05.mp4"],
  col2: ["Nested Sequence 06.mp4", "Nested Sequence 07.mp4", "Nested Sequence 08.mp4"],
  col3: ["Nested Sequence 09.mp4", "Nested Sequence 10.mp4", "Nested Sequence 11.mp4"],
};

const VideoColumn = ({ videos, direction, speed }: { videos: string[], direction: "up" | "down", speed: number }) => (
  <div className="w-full h-[200vh] relative overflow-hidden flex-shrink-0 flex-1">
    <motion.div
      animate={{ y: direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"] }}
      transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
      className="flex flex-col gap-3 sm:gap-4 w-full"
    >
      {[...videos, ...videos, ...videos, ...videos].map((src, i) => (
        <video 
          key={i} 
          src={src} 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full aspect-[9/16] object-cover rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-white/10" 
        />
      ))}
    </motion.div>
  </div>
);

/* ───────── Main Page ───────── */
const Index = () => {
  // Adaptive video quality detection: HD by default on broadband, Lite on slow 2G/3G or data-saver
  const [qualityMode, setQualityMode] = useState<'hd' | 'lite'>('hd');

  useEffect(() => {
    if (typeof navigator !== 'undefined') {
      const conn = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
      if (conn) {
        if (conn.saveData || conn.effectiveType === '2g' || conn.effectiveType === 'slow-2g' || conn.effectiveType === '3g') {
          setQualityMode('lite');
        }
      }
    }
  }, []);

  const videoFolder = qualityMode === 'hd' ? '/videos/hero-hd/' : '/videos/hero/';
  const videosCol1 = useMemo(() => heroVideoFiles.col1.map(f => `${videoFolder}${f}`), [videoFolder]);
  const videosCol2 = useMemo(() => heroVideoFiles.col2.map(f => `${videoFolder}${f}`), [videoFolder]);
  const videosCol3 = useMemo(() => heroVideoFiles.col3.map(f => `${videoFolder}${f}`), [videoFolder]);

  function handleScroll(e: any, id: string) {
    e.preventDefault();
    const el = document.getElementById(id);
    const nav = document.querySelector('nav');
    const offset = nav ? (nav as HTMLElement).clientHeight : 0;
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset - 12;
      window.scrollTo({ top, behavior: 'smooth' });
    } else {
      window.location.hash = id;
    }
  }

  const nameWords = "Anand Chowdari".split(" ");

  return (
    <div className="min-h-screen">
      {/* ================= SPLIT / MOBILE RESPONSIVE HERO ================= */}
      <section id="home" className="relative h-screen min-h-[620px] w-full flex overflow-hidden bg-black">
        {/* Gradient Mesh Background */}
        <GradientMesh />

        {/* ─── DESKTOP SPLIT HERO (md and above) ─── */}
        <div className="hidden md:block absolute inset-0">
          {/* Right Half: Video Marquee with diagonal clipPath */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.4, ease: [0.33, 1, 0.68, 1] }}
            className="absolute inset-0 z-10 bg-[#050505]"
            style={{ clipPath: "polygon(55% 0, 100% 0, 100% 100%, 35% 100%)" }}
          >
            <div className="absolute inset-0 flex justify-center items-center gap-3 lg:gap-4 pl-[45%] lg:pl-[40%] pr-4 py-4 opacity-80 pointer-events-none">
              <VideoColumn videos={videosCol1} direction="up" speed={35} />
              <VideoColumn videos={videosCol2} direction="down" speed={45} />
              <VideoColumn videos={videosCol3} direction="up" speed={30} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/20 to-black/80 pointer-events-none" />
          </motion.div>

          {/* Left Half: Content with diagonal clipPath */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, ease: [0.33, 1, 0.68, 1] }}
            className="absolute inset-0 z-20 flex flex-col justify-center pl-[5%] sm:pl-[8%] lg:pl-[10%] bg-black/30 backdrop-blur-sm pointer-events-none"
            style={{ clipPath: "polygon(0 0, 55% 0, 35% 100%, 0 100%)" }}
          >
            <div className="max-w-4xl relative z-30 pt-10 pointer-events-auto">
              <motion.div variants={letterContainer} initial="hidden" animate="visible" className="flex flex-wrap gap-x-4 lg:gap-x-6 gap-y-2">
                {nameWords.map((word, wordIdx) => (
                  <div key={wordIdx} className="inline-flex whitespace-nowrap">
                    {word.split("").map((letter, idx) => (
                      <motion.span
                        key={idx}
                        variants={letterVariant}
                        className="text-5xl lg:text-7xl xl:text-8xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-500 leading-none tracking-tight"
                        style={{ display: 'inline-block' }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </div>
                ))}
              </motion.div>

              <motion.p
                variants={subtitleVariant}
                initial="hidden"
                animate="visible"
                className="mt-6 text-xl sm:text-2xl md:text-3xl text-gray-300 font-sans font-light tracking-wide border-l-4 border-primary pl-4"
              >
                Video Editor & Motion Designer
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="mt-12 flex flex-wrap gap-5 pointer-events-auto"
              >
                <ButtonGradient asChild size="lg" className="shadow-[0_0_30px_rgba(155,135,245,0.4)] backdrop-blur-md px-8 py-6 text-lg">
                  <a href="#work" onClick={(e) => handleScroll(e, 'work')} className="flex items-center gap-2">
                    Explore Work
                    <ArrowRight size={20} />
                  </a>
                </ButtonGradient>

                <ButtonGradient variant="outline" size="lg" asChild className="group backdrop-blur-md bg-black/40 px-8 py-6 text-lg border-white/20 hover:bg-white/10">
                  <a href="#case-studies" onClick={(e) => handleScroll(e, 'case-studies')} className="flex items-center gap-2 text-white">
                    <Play size={20} className="text-white group-hover:text-primary transition-colors" />
                    Case Studies & Results
                  </a>
                </ButtonGradient>
              </motion.div>
            </div>
          </motion.div>

          {/* Desktop Glowing Split Line */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-30" preserveAspectRatio="none">
            <defs>
              <linearGradient id="glowGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#9b87f5" stopOpacity="0" />
                <stop offset="50%" stopColor="#9b87f5" stopOpacity="1" />
                <stop offset="100%" stopColor="#9b87f5" stopOpacity="0" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <motion.line 
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
              x1="55%" y1="0" x2="35%" y2="100%" 
              stroke="url(#glowGradient)" 
              strokeWidth="3"
              filter="url(#glow)"
            />
          </svg>
        </div>

        {/* ─── MOBILE IMMERSIVE HERO (< md) ─── */}
        <div className="md:hidden relative w-full h-full flex flex-col justify-center px-6 pt-20 pb-12 z-20">
          {/* Ambient Video Backdrop (2 full-height columns, full width with dark gradient overlay) */}
          <div className="absolute inset-0 z-0 overflow-hidden opacity-30 pointer-events-none">
            <div className="absolute inset-0 flex justify-center gap-3 px-2">
              <VideoColumn videos={videosCol1} direction="up" speed={40} />
              <VideoColumn videos={videosCol2} direction="down" speed={50} />
            </div>
            {/* Dark vignette gradient overlay for crystal clear text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/70 backdrop-blur-[1.5px]" />
          </div>

          {/* Mobile Foreground Content: 100% Readable, No Clipping */}
          <div className="relative z-10 max-w-lg mx-auto w-full text-center flex flex-col items-center">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-mono font-medium mb-6 shadow-[0_0_15px_rgba(155,135,245,0.2)]"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for Commercial Projects
            </motion.div>

            {/* Name */}
            <motion.div
              variants={letterContainer}
              initial="hidden"
              animate="visible"
              className="flex justify-center flex-wrap gap-x-3 gap-y-1"
            >
              {nameWords.map((word, wordIdx) => (
                <div key={wordIdx} className="inline-flex whitespace-nowrap">
                  {word.split("").map((letter, idx) => (
                    <motion.span
                      key={idx}
                      variants={letterVariant}
                      className="text-4xl sm:text-5xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-400 leading-none tracking-tight"
                      style={{ display: 'inline-block' }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>
              ))}
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-4 text-xl sm:text-2xl text-white font-sans font-semibold"
            >
              Video Editor & Motion Designer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-2 text-sm text-gray-300 font-sans leading-relaxed max-w-sm"
            >
              High-retention storytelling, cinematic long-forms, and 3D motion graphics engineered for multi-million view reach.
            </motion.p>

            {/* Mobile Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="mt-8 flex flex-col gap-3.5 w-full max-w-xs"
            >
              <ButtonGradient asChild size="lg" className="w-full shadow-[0_0_25px_rgba(155,135,245,0.4)] py-6 text-base font-semibold">
                <a href="#work" onClick={(e) => handleScroll(e, 'work')} className="flex items-center justify-center gap-2">
                  Explore Work
                  <ArrowRight size={18} />
                </a>
              </ButtonGradient>

              <ButtonGradient variant="outline" size="lg" asChild className="w-full backdrop-blur-md bg-black/60 border-white/20 py-6 text-base text-white">
                <a href="#case-studies" onClick={(e) => handleScroll(e, 'case-studies')} className="flex items-center justify-center gap-2">
                  <Play size={18} className="text-primary" />
                  Case Studies & Results
                </a>
              </ButtonGradient>
            </motion.div>
          </div>
        </div>

        {/* Quality Mode Toggle Pill (Cleanly placed at bottom-right) */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 pointer-events-auto">
          <button
            onClick={() => setQualityMode(prev => prev === 'hd' ? 'lite' : 'hd')}
            className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-black/75 hover:bg-black/90 backdrop-blur-md border border-white/15 text-[10px] sm:text-[11px] font-mono text-gray-300 hover:text-white flex items-center gap-1.5 transition-colors shadow-lg"
            title="Click to toggle between Maximum HD Quality and Lite Data-Saver"
          >
            <span className={`w-2 h-2 rounded-full ${qualityMode === 'hd' ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
            <span>{qualityMode === 'hd' ? '⚡ HD 1080p' : '🍃 Lite'}</span>
          </button>
        </div>
      </section>

      {/* ================= 3D SHOWCASE (Toggleable On-Demand, Hidden by Default) ================= */}
      <section id="showcase" className="relative">
        <ThreeDShowcase />
      </section>

      {/* ================= FULL PORTFOLIO SHOWCASE ================= */}
      <SectionReveal index={0}>
        <PortfolioShowcase />
      </SectionReveal>

      {/* ================= CASE STUDIES & CLIENT RESULTS ================= */}
      <SectionReveal index={1}>
        <CaseStudies />
      </SectionReveal>

      {/* ================= TESTIMONIALS ================= */}
      <SectionReveal index={2}>
        <section id="testimonials">
          <Testimonials />
        </section>
      </SectionReveal>

      {/* ================= RESUME & TOOLKIT ================= */}
      <SectionReveal index={3}>
        <ResumeSection />
      </SectionReveal>

      {/* ================= ABOUT ================= */}
      <SectionReveal index={4}>
        <section id="about">
          <About />
        </section>
      </SectionReveal>

      {/* ================= CONTACT ================= */}
      <SectionReveal index={5}>
        <section id="contact">
          <Contact />
        </section>
      </SectionReveal>

    </div>
  );
};

export default Index;
