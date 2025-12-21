import { Play } from "lucide-react";
import { ButtonGradient } from "@/components/ui/button-gradient";
import Ribbons from "../components/Ribbons";

import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

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
      // fallback to setting hash (navigates to index with hash)
      window.location.hash = id;
    }
  }

  return (
    <div className="min-h-screen">
      {/* ================= HERO ================= */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden bg-gradient-to-b from-purple-900/20 to-transparent">
        {/* Ribbons Background */}
        <div className="absolute inset-0 z-10">
          <Ribbons
            enableShaderEffect
            enableFade
            backgroundColor={[0, 0, 0, 0]}
            colors={["#8E29DD"]}
            baseThickness={10}
            effectAmplitude={1.5}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 w-full pointer-events-none">
          <div className="w-full animate-fade-up bg-white/5 backdrop-blur-md rounded-3xl border border-white/20 p-8 md:p-12">
            <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6 leading-tight opacity-90">
              High-Retention Reels & Motion Graphics <br />
              for Creators & SaaS Brands  
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              I help YouTubers, Reels creators, and SaaS teams turn ideas into
              scroll-stopping videos that explain clearly, retain attention,
              and convert viewers.
            </p>

            <div className="flex flex-wrap gap-4 pointer-events-auto">
              <ButtonGradient asChild size="lg">
                <a href="#services" onClick={(e) => handleScroll(e, 'services')}>View Plans</a>
              </ButtonGradient>

              <ButtonGradient variant="outline" size="lg" asChild className="group">
                <a href="#portfolio" className="flex items-center gap-2" onClick={(e) => handleScroll(e, 'portfolio')}>
                  <Play size={20} />
                  See Real Work
                </a>
              </ButtonGradient>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHO THIS IS FOR ================= */}


      {/* ================= ABOUT ================= */}
      <section id="portfolio">
        <Portfolio />
      </section>

      {/* ================= SERVICES / PLANS ================= */}
      <section id="services">
        <Services />
      </section>

      {/* ================= PORTFOLIO ================= */}


      {/* ================= TESTIMONIALS ================= */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact">
        <Contact />
      </section>      
      <section id="about">
        <About />
      </section>
    </div>
  );
};

export default Index;
