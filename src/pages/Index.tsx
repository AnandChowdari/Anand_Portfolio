import React from 'react';
import { ArrowRight, MessageSquare, Play, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import GradientMesh from '../components/GradientMesh';
import FilmGrain from '../components/FilmGrain';
import CinemaViewfinderPlayer from '../components/CinemaViewfinderPlayer';
import EditorialTicker from '../components/EditorialTicker';
import BrandLogos from '../components/BrandLogos';
import PortfolioShowcase from '../components/PortfolioShowcase';
import CaseStudies from '../components/CaseStudies';
import Testimonials from './Testimonials';
import DirectTakeout from '../components/DirectTakeout';
import FloatingTakeoutBar from '../components/FloatingTakeoutBar';
import { siteConfig, getWhatsAppUrl } from '../config/site';

const Index = () => {
  function handleScroll(e: React.MouseEvent, id: string) {
    e.preventDefault();
    const el = document.getElementById(id);
    const nav = document.querySelector('nav');
    const offset = nav ? (nav as HTMLElement).clientHeight : 0;
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset - 10;
      window.scrollTo({ top, behavior: 'smooth' });
    } else {
      window.location.hash = id;
    }
  }

  // Master showreel video specifications
  const masterShowreel = {
    src: '/videos/horizontal/Main Cut.mp4',
    poster: '/videos/horizontal/posters/Main Cut.jpg',
    title: 'Anand Chowdari — 2025 Master Reel',
    duration: '0:35',
  };

  return (
    <div className="min-h-screen bg-[#050507] text-white selection:bg-white/20 selection:text-white relative">
      {/* 35mm Celluloid Film Grain Texture Overlay */}
      <FilmGrain />

      {/* ================= EDITORIAL HERO SECTION ================= */}
      <section id="home" className="relative pt-28 sm:pt-36 pb-16 lg:pb-20 overflow-hidden">
        {/* Subtle Ambient Background Light */}
        <GradientMesh />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          {/* Live Timezone & Editorial Coordinates Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-neutral-300 text-xs font-mono mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>HYDERABAD, IN [UTC+5:30] — AVAILABLE FOR Q4 COMMISSIONS</span>
          </motion.div>

          {/* Large Centered Editorial Title with Serif Accent */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-heading font-extrabold text-white tracking-tight leading-none"
          >
            {siteConfig.name}
          </motion.h1>

          {/* Subtitle / Role */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-neutral-200 tracking-tight"
          >
            VSL Video Editor & Motion Designer
          </motion.p>

          {/* Human, Approachable Value Statement */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-base sm:text-lg text-neutral-400 font-sans leading-relaxed max-w-2xl"
          >
            I edit videos that people actually finish watching — and buy from. Over the past 5 years, I've delivered 50M+ views across YouTube, direct-response VSLs, and high-retention commercial cuts.
          </motion.p>

          {/* Centered Dual Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-semibold text-sm transition-all duration-200 shadow-[0_4px_25px_rgba(16,185,129,0.3)] hover:shadow-[0_4px_35px_rgba(16,185,129,0.5)] active:scale-[0.98]"
            >
              <MessageSquare size={17} className="fill-white" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href="#work"
              onClick={(e) => handleScroll(e, 'work')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-neutral-200 hover:text-white font-heading font-medium text-sm transition-colors duration-200"
            >
              <span>Explore Selected Works</span>
              <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* ================= CINEMA VIEWFINDER MASTER SHOWREEL CENTERPIECE ================= */}
          <CinemaViewfinderPlayer
            src={masterShowreel.src}
            poster={masterShowreel.poster}
            title={masterShowreel.title}
            duration={masterShowreel.duration}
          />
        </div>
      </section>

      {/* ================= KINETIC HAIRLINE EDITORIAL TICKER ================= */}
      <EditorialTicker />

      {/* ================= 1. MONOCHROMATIC FLOATING CIRCULAR LOGOS ================= */}
      <BrandLogos />

      {/* ================= 2. CURATED WORKS & PRODUCTIONS ================= */}
      <PortfolioShowcase />

      {/* ================= 3. VERIFIED RESULTS & CASE STUDIES ================= */}
      <CaseStudies />

      {/* ================= 4. CLIENT TESTIMONIALS ================= */}
      <Testimonials />

      {/* ================= 5. DIRECT TAKEOUT (WHATSAPP & EMAIL) ================= */}
      <DirectTakeout />

      {/* ================= FLOATING STICKY ACTION BAR ================= */}
      <FloatingTakeoutBar />

      {/* ================= MINIMALIST FOOTER ================= */}
      <footer className="py-12 bg-[#030304] border-t border-white/[0.08] text-neutral-400 text-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-heading font-bold text-white text-base">{siteConfig.name}</span>
            <span className="text-xs text-neutral-400">VSL Video Editor & Motion Designer • Remote Worldwide</span>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono uppercase tracking-wider">
            <a href="#work" onClick={(e) => handleScroll(e, 'work')} className="hover:text-white transition-colors">Work</a>
            <a href="#clients" onClick={(e) => handleScroll(e, 'clients')} className="hover:text-white transition-colors">Clients</a>
            <a href="#results" onClick={(e) => handleScroll(e, 'results')} className="hover:text-white transition-colors">Results</a>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="hover:text-white transition-colors">Contact</a>
            <Link to="/resume" className="text-neutral-300 hover:text-white underline transition-colors">Resume (PDF)</Link>
          </div>

          <div className="text-xs text-neutral-400">
            © {new Date().getFullYear()} Anand Chowdari. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
