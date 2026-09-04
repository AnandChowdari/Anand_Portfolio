import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, Award, CheckCircle2, Sparkles, Briefcase, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ButtonGradient } from './ui/button-gradient';

export default function ResumeSection() {
  const competencies = [
    'High-Retention Short-Form (Reels, Shorts, TikTok)',
    'Long-Form Documentary Editing & Pacing',
    'Dynamic 2D/3D Motion Graphics & VFX',
    'Custom Audio Engineering & Sound Design',
    'Cinematic Color Grading & Visual Cohesion',
    'Proprietary Plugin Development (C++, Premiere Pro CEP, AE SDK)',
  ];

  const tools = [
    'Adobe Premiere Pro',
    'Adobe After Effects',
    'DaVinci Resolve',
    'Adobe Audition',
    'Blender 3D',
    'Adobe Illustrator',
    'FFmpeg & Automation',
    'C++ / CEP Scripting',
  ];

  return (
    <section id="resume" className="py-24 relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl glass-dark border border-white/10 p-8 sm:p-12 lg:p-16 shadow-[0_0_60px_rgba(155,135,245,0.15)] bg-black/60 overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Summary */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
                <Briefcase size={14} />
                Professional Resume
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
                Anand Chowdari
              </h2>

              <p className="text-lg sm:text-xl text-gradient-purple font-semibold">
                Senior Video Editor, Motion Designer & Creative Technologist
              </p>

              <p className="text-gray-300 font-sans text-base leading-relaxed">
                Over 5 years of mastery in transforming raw concepts into multi-million-view visual experiences. Combining high-level cinematic storytelling with software engineering to develop proprietary workflow plugins for Premiere Pro and After Effects.
              </p>

              {/* Core Competencies Grid */}
              <div className="pt-2">
                <p className="text-xs font-mono uppercase text-gray-400 tracking-wider font-semibold mb-3">
                  Core Competencies & Capabilities:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {competencies.map((comp, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-gray-200">
                      <CheckCircle2 size={16} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap gap-4">
                <ButtonGradient asChild size="lg" className="shadow-[0_0_30px_rgba(155,135,245,0.4)]">
                  <Link to="/resume" className="flex items-center gap-2 px-8 py-6 text-base font-semibold">
                    <FileText size={18} />
                    View Full Digital Resume
                    <ArrowUpRight size={18} />
                  </Link>
                </ButtonGradient>

                <ButtonGradient variant="outline" size="lg" asChild className="backdrop-blur-md bg-black/40 border-white/20 hover:bg-white/10">
                  <Link to="/resume?print=true" className="flex items-center gap-2 text-white px-6 py-6 text-base">
                    <Download size={18} className="text-primary" />
                    Print / Save PDF
                  </Link>
                </ButtonGradient>
              </div>
            </div>

            {/* Right Column: Quick Stats & Toolkit Pill Matrix */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs font-mono uppercase tracking-wider text-gray-400">Total Experience</span>
                  <span className="text-sm font-bold text-white">5+ Years</span>
                </div>

                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs font-mono uppercase tracking-wider text-gray-400">Cumulative Reach</span>
                  <span className="text-sm font-bold text-gradient-purple">50,000,000+ Views</span>
                </div>

                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs font-mono uppercase tracking-wider text-gray-400">Software Authored</span>
                  <span className="text-sm font-bold text-white">Captiongrit & Gritder</span>
                </div>

                {/* Software Stack */}
                <div>
                  <p className="text-xs font-mono uppercase text-gray-400 tracking-wider mb-3">
                    Production Stack:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1.5 rounded-lg bg-black/40 border border-white/10 text-gray-200 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowUpRight({ size, className }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  );
}
