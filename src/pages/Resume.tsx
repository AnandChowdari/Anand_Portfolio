import { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Printer, ArrowLeft, Mail, Globe, MapPin, ExternalLink, Award, CheckCircle2, Video, Code2 } from 'lucide-react';
import { ButtonGradient } from '@/components/ui/button-gradient';

export default function Resume() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get('print') === 'true') {
      const timer = setTimeout(() => {
        window.print();
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen pt-20 pb-24 bg-[#050505] text-white print:bg-white print:text-black print:pt-0 print:pb-0">
      {/* Print styles */}
      <style>{`
        @media print {
          @page {
            margin: 12mm 15mm;
            size: A4 portrait;
          }
          body {
            background: #ffffff !important;
            color: #111827 !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          nav, footer, .no-print {
            display: none !important;
          }
          .print-card {
            border: none !important;
            box-shadow: none !important;
            background: transparent !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .print-header-top {
            display: flex !important;
            flex-direction: row !important;
            justify-content: space-between !important;
            align-items: flex-start !important;
            gap: 1.5rem !important;
          }
          .print-contact-box {
            display: flex !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            text-align: left !important;
            gap: 0.35rem !important;
            flex-shrink: 0 !important;
          }
          .print-contact-row {
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            gap: 0.5rem !important;
            justify-content: flex-start !important;
            white-space: nowrap !important;
          }
          .print-text-dark {
            color: #111827 !important;
          }
          .print-text-muted {
            color: #4b5563 !important;
          }
          .print-border {
            border-color: #e5e7eb !important;
          }
          .print-badge {
            background-color: #f9fafb !important;
            color: #111827 !important;
            border: 1px solid #e5e7eb !important;
          }
        }
      `}</style>

      {/* Top Action Bar (hidden when printing) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 no-print flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>

        <div className="flex items-center gap-4">
          <ButtonGradient
            onClick={() => window.print()}
            size="sm"
            className="flex items-center gap-2 shadow-lg"
          >
            <Printer size={16} />
            Print / Save as PDF
          </ButtonGradient>
        </div>
      </div>

      {/* Resume Sheet Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="print-card rounded-3xl glass-dark border border-white/10 p-8 sm:p-14 shadow-2xl bg-black/60 print:bg-white">
          {/* Header */}
          <header className="border-b border-white/10 print-border pb-8 mb-8">
            <div className="print-header-top flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-6 border-b border-white/10 print-border">
              {/* Left: Name and Title */}
              <div className="space-y-1.5 max-w-xl">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white print-text-dark tracking-tight leading-tight">
                  Anand Chowdari
                </h1>
                <p className="text-lg sm:text-xl text-primary print:text-indigo-600 font-semibold leading-snug">
                  Senior Video Editor, Motion Designer & Creative Technologist
                </p>
              </div>

              {/* Right: Contact Meta with strictly aligned icons */}
              <div className="print-contact-box flex flex-col items-start gap-2 text-xs sm:text-sm text-gray-300 print-text-muted font-sans sm:pt-1 sm:flex-shrink-0">
                <div className="print-contact-row flex items-center gap-2.5">
                  <MapPin size={15} className="text-primary print:text-indigo-600 flex-shrink-0" />
                  <span className="print-text-dark">Hyderabad, India (Available Worldwide / Remote)</span>
                </div>
                <div className="print-contact-row flex items-center gap-2.5">
                  <Globe size={15} className="text-primary print:text-indigo-600 flex-shrink-0" />
                  <Link to="/" className="hover:underline print-text-dark">anand-portfolio.vercel.app</Link>
                </div>
                <div className="print-contact-row flex items-center gap-2.5">
                  <Mail size={15} className="text-primary print:text-indigo-600 flex-shrink-0" />
                  <Link to="/contact" className="hover:underline print-text-dark">Contact / Hire Me</Link>
                </div>
              </div>
            </div>

            {/* Executive Summary */}
            <div className="pt-6">
              <p className="text-gray-300 print-text-dark text-sm sm:text-base leading-relaxed">
                Accomplished Video Editor and Motion Designer with <strong>5+ years of production experience</strong> generating over <strong>50 Million+ organic views</strong> across YouTube, Instagram Reels, and commercial platforms. Unique dual competency in post-production and systems programming: authors native Adobe Premiere Pro CEP extensions and After Effects C++ plugins to engineer automated, high-retention video pipelines.
              </p>
            </div>
          </header>

          {/* Key Impact Highlights */}
          <section className="mb-10">
            <h2 className="text-xs font-mono uppercase tracking-widest text-primary print:text-indigo-600 font-bold mb-4">
              Key Career Metrics & Impact
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-white/5 print-badge border border-white/5">
                <p className="text-2xl sm:text-3xl font-bold text-white print-text-dark">50M+</p>
                <p className="text-xs text-gray-400 print-text-muted mt-0.5">Total Organic Views</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 print-badge border border-white/5">
                <p className="text-2xl sm:text-3xl font-bold text-white print-text-dark">16M+</p>
                <p className="text-xs text-gray-400 print-text-muted mt-0.5">Hustle Lifestyle Reach</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 print-badge border border-white/5">
                <p className="text-2xl sm:text-3xl font-bold text-white print-text-dark">50+</p>
                <p className="text-xs text-gray-400 print-text-muted mt-0.5">Students Enrolled (Pilot Acad.)</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 print-badge border border-white/5">
                <p className="text-2xl sm:text-3xl font-bold text-white print-text-dark">2</p>
                <p className="text-xs text-gray-400 print-text-muted mt-0.5">Custom Plugins Authored</p>
              </div>
            </div>
          </section>

          {/* Experience & Projects */}
          <section className="mb-10 space-y-8">
            <h2 className="text-xs font-mono uppercase tracking-widest text-primary print:text-indigo-600 font-bold mb-2">
              Professional Experience & Flagship Case Studies
            </h2>

            {/* Role 1 */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <h3 className="text-lg font-bold text-white print-text-dark">
                  Lead Video Editor & Content Strategist
                </h3>
                <span className="text-xs font-mono text-gray-400 print-text-muted">2023 – Present</span>
              </div>
              <p className="text-sm font-semibold text-primary print:text-indigo-600">
                Hustle Lifestyle Hyderabad (Founder: Husain Basha)
              </p>
              <ul className="list-disc list-outside pl-4 space-y-1 text-sm text-gray-300 print-text-dark">
                <li>
                  Engineered and edited a flagship <strong>25-minute YouTube documentary</strong>, overseeing full story pacing, motion design, and sound architecture, achieving <strong>50,000+ views</strong>.
                </li>
                <li>
                  Scaled channel presence from scratch to over <strong>16,000,000+ combined views</strong> through algorithmic hook design and viral micro-content cutdowns.
                </li>
                <li>
                  Established the brand visual identity with cinematic color grading, custom sound effects, and kinetic typography.
                </li>
              </ul>
            </div>

            {/* Role 2 */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <h3 className="text-lg font-bold text-white print-text-dark">
                  Commercial Video Producer & Campaign Editor
                </h3>
                <span className="text-xs font-mono text-gray-400 print-text-muted">2023 – 2024</span>
              </div>
              <p className="text-sm font-semibold text-primary print:text-indigo-600">
                Pilot Academy (Founder: Gurujyoth)
              </p>
              <ul className="list-disc list-outside pl-4 space-y-1 text-sm text-gray-300 print-text-dark">
                <li>
                  Produced high-conversion recruitment video campaigns directly resulting in <strong>50+ verified student admissions</strong>.
                </li>
                <li>
                  Interwove technical aviation training explanations with inspirational cinematic flight footage to maximize inquiry conversion rates.
                </li>
              </ul>
            </div>

            {/* Role 3 */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <h3 className="text-lg font-bold text-white print-text-dark">
                  Creator & Lead Software Engineer
                </h3>
                <span className="text-xs font-mono text-gray-400 print-text-muted">2024 – Present</span>
              </div>
              <p className="text-sm font-semibold text-primary print:text-indigo-600">
                Captiongrit & Gritder Video Plugins
              </p>
              <ul className="list-disc list-outside pl-4 space-y-1 text-sm text-gray-300 print-text-dark">
                <li>
                  Architected <strong>Captiongrit</strong>, a production Adobe Premiere Pro CEP extension automating kinetic subtitles, word-level animations, and styling presets.
                </li>
                <li>
                  Engineered <strong>Gritder</strong>, a native Adobe After Effects C++ plugin for procedural grid overlays and composition alignment utilizing the After Effects SDK.
                </li>
                <li>
                  Reduced manual subtitle styling time by ~400% across editing team workflows.
                </li>
              </ul>
            </div>

            {/* Role 4 */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <h3 className="text-lg font-bold text-white print-text-dark">
                  Independent Senior Video Editor & Motion Designer
                </h3>
                <span className="text-xs font-mono text-gray-400 print-text-muted">2021 – Present</span>
              </div>
              <p className="text-sm font-semibold text-primary print:text-indigo-600">
                Creator & Brand Portfolio (Freelance / Agency)
              </p>
              <ul className="list-disc list-outside pl-4 space-y-1 text-sm text-gray-300 print-text-dark">
                <li>
                  Delivered over 120+ video projects including SaaS explainers, brand launch reels, and YouTube long-forms.
                </li>
                <li>
                  Designed custom high-CTR thumbnails utilizing color psychology and custom typography.
                </li>
              </ul>
            </div>
          </section>

          {/* Technical & Creative Toolkit */}
          <section className="mb-10">
            <h2 className="text-xs font-mono uppercase tracking-widest text-primary print:text-indigo-600 font-bold mb-4">
              Technical & Creative Toolkit
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div>
                <p className="font-semibold text-white print-text-dark mb-2">Editing & Motion Design Software</p>
                <p className="text-gray-300 print-text-muted leading-relaxed">
                  Adobe Premiere Pro, Adobe After Effects, DaVinci Resolve, Adobe Audition, Blender 3D, Adobe Illustrator, Photoshop, Adobe Media Encoder.
                </p>
              </div>

              <div>
                <p className="font-semibold text-white print-text-dark mb-2">Creative Technology & Engineering</p>
                <p className="text-gray-300 print-text-muted leading-relaxed">
                  C++, JavaScript / TypeScript, React, Adobe CEP (Common Extensibility Platform), Adobe After Effects SDK, FFmpeg CLI automation, Git.
                </p>
              </div>

              <div>
                <p className="font-semibold text-white print-text-dark mb-2">Specialized Disciplines</p>
                <p className="text-gray-300 print-text-muted leading-relaxed">
                  High-Retention Story Pacing, Sound Design & Audio Sweetening, Color Grading (Rec.709 & Log), Kinetic Typography, 3D Object Integration, CTR Thumbnail Packaging.
                </p>
              </div>

              <div>
                <p className="font-semibold text-white print-text-dark mb-2">Workflow & Collaboration</p>
                <p className="text-gray-300 print-text-muted leading-relaxed">
                  Frame.io Review Workflows, Multi-cam Synchronized Sequences, Audio Stems Mixing, Agile Turnarounds (24-48h).
                </p>
              </div>
            </div>
          </section>

          {/* Endorsement Quotes */}
          <section className="border-t border-white/10 print-border pt-8">
            <h2 className="text-xs font-mono uppercase tracking-widest text-primary print:text-indigo-600 font-bold mb-4">
              Client Testimonials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-white/5 print-badge border border-white/5">
                <p className="italic text-gray-300 print-text-dark mb-2">
                  "Flogrit turned my successful business into a recognized personal brand. Their strategy generated over 16 million views across Instagram and YouTube in just weeks."
                </p>
                <p className="font-bold text-white print-text-dark">— Husain Basha, Founder of Hustle Lifestyle</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 print-badge border border-white/5">
                <p className="italic text-gray-300 print-text-dark mb-2">
                  "Anand breathes completely new life into the edit. Your creativity, fresh visual style, and ability to transform ideas into engaging content make a huge difference."
                </p>
                <p className="font-bold text-white print-text-dark">— Nivas K., Content Manager</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
