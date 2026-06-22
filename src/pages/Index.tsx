import { Play, ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ButtonGradient } from "@/components/ui/button-gradient";
import GradientMesh from "../components/GradientMesh";
import ThreeDShowcase from "../components/ThreeDShowcase";

import About from "./About";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

/* ───────── Letter Animation Variants ───────── */
const letterContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.3,
    },
  },
};

const letterVariant = {
  hidden: { opacity: 0, scale: 0.3, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200,
    },
  },
};

const subtitleVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 1.0, duration: 0.8, ease: "easeOut" },
  },
};

/* ───────── Section Slide-In Wrapper ───────── */
const SectionReveal = ({ children, index }: { children: React.ReactNode; index: number }) => {
  const fromLeft = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, x: fromLeft ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

/* ───────── Main Page ───────── */
const Index = () => {
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

  const nameLetters = "Ananduuuu".split("");

  return (
    <div className="min-h-screen">
      {/* ================= TYPOGRAPHIC HERO ================= */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Gradient Mesh Background */}
        <GradientMesh />

        {/* Typographic Reveal */}
        <div className="relative z-20 flex flex-col items-center text-center px-4">
          <motion.div
            variants={letterContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center"
          >
            {nameLetters.map((letter, idx) => (
              <motion.span
                key={idx}
                variants={letterVariant}
                className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-heading font-bold text-white leading-none tracking-tight"
                style={{ display: 'inline-block' }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>

          <motion.p
            variants={subtitleVariant}
            initial="hidden"
            animate="visible"
            className="mt-6 text-lg sm:text-xl md:text-2xl text-white/60 font-sans font-light tracking-wide max-w-2xl"
          >
            Video Editor & Motion Graphics Designer
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mt-10 flex flex-wrap justify-center gap-4 pointer-events-auto"
          >
            <ButtonGradient asChild size="lg" className="shadow-[0_0_30px_rgba(155,135,245,0.4)] backdrop-blur-md">
              <a href="#services" onClick={(e) => handleScroll(e, 'services')} className="flex items-center gap-2">
                View Plans
                <ArrowRight size={16} />
              </a>
            </ButtonGradient>

            <ButtonGradient variant="outline" size="lg" asChild className="group backdrop-blur-md bg-black/40">
              <Link to="/portfolio" className="flex items-center gap-2">
                <Play size={18} />
                See Real Work
              </Link>
            </ButtonGradient>
          </motion.div>
        </div>
      </section>

      {/* ================= 3D SHOWCASE ================= */}
      <section id="showcase" className="relative">
        <GradientMesh />
        <ThreeDShowcase />
      </section>

      {/* ================= PORTFOLIO CTA ================= */}
      <SectionReveal index={0}>
        <section className="py-20 relative z-10 flex justify-center px-4">
          <div className="max-w-4xl w-full rounded-3xl glass p-10 md:p-16 text-center border border-white/10 shadow-[0_0_50px_rgba(155,135,245,0.1)] bg-black/40 backdrop-blur-xl">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-gradient mb-4">
              Experience the full depth of my work.
            </h2>
            <p className="text-lg text-white/60 font-sans mb-10 max-w-2xl mx-auto">
              Dive into the complete collection of high-retention reels, horizontal cinematics, motion graphics, and premium thumbnails.
            </p>
            <ButtonGradient asChild size="lg" className="shadow-[0_0_30px_rgba(155,135,245,0.4)]">
              <Link to="/portfolio" className="flex items-center gap-2 text-lg px-8 py-6">
                View Full Portfolio
                <ExternalLink size={20} />
              </Link>
            </ButtonGradient>
          </div>
        </section>
      </SectionReveal>

      {/* ================= SERVICES / PLANS ================= */}
      <SectionReveal index={1}>
        <section id="services">
          <Services />
        </section>
      </SectionReveal>

      {/* ================= TESTIMONIALS ================= */}
      <SectionReveal index={2}>
        <section id="testimonials">
          <Testimonials />
        </section>
      </SectionReveal>

      {/* ================= CONTACT ================= */}
      <SectionReveal index={3}>
        <section id="contact">
          <Contact />
        </section>
      </SectionReveal>

      <SectionReveal index={4}>
        <section id="about">
          <About />
        </section>
      </SectionReveal>

    </div>
  );
};

export default Index;
