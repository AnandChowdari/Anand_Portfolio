import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Code2, Youtube, ArrowUpRight, CheckCircle2, Quote } from 'lucide-react';

export default function CaseStudies() {
  const stats = [
    { value: '50M+', label: 'Organic Views Delivered', context: 'Across YouTube, Instagram & LinkedIn' },
    { value: '16M+', label: 'Hustle Lifestyle Growth', context: 'From zero to multi-million view presence' },
    { value: '50+', label: 'Students Enrolled', context: 'Pilot Academy conversion campaign' },
    { value: '3x', label: 'Retention & Conversion Lift', context: 'Compared to baseline creator benchmarks' },
  ];

  const caseStudies = [
    {
      id: 'hustle-lifestyle',
      tag: 'FLAGSHIP CASE STUDY / YOUTUBE & REELS',
      client: 'Hustle Lifestyle Hyderabad',
      founder: 'Husain Basha',
      role: 'Founder & Creator',
      service: 'Long-Form Documentary + Content Strategy + Reels Funnel',
      headline: 'Transforming a Local Business into a 16M+ View Authority Brand',
      summary:
        'A comprehensive 25-minute YouTube documentary accompanied by an aggressive short-form reels campaign. Engineered with narrative arc scripting, dynamic pacing, custom sound design, and algorithm-optimized retention hooks.',
      metrics: [
        { label: 'Long-Form Documentary Views', value: '50,000+' },
        { label: 'Total Cross-Platform Views', value: '16,000,000+' },
        { label: 'Documentary Runtime', value: '25 Mins' },
      ],
      highlights: [
        'Full narrative scripting & pacing architecture for a 25-minute cinema-grade documentary',
        'High-retention reel cutdowns generating over 16M+ organic impressions',
        'Custom color grade, 3D soundscapes, and kinetic infographic overlays',
      ],
      quote:
        'Flogrit turned my successful business into a recognized personal brand. Their strategy generated over 16 million views across Instagram and YouTube in just weeks.',
      quoteAuthor: 'Husain Basha',
      quoteRole: 'Founder, Hustle Lifestyle',
      secondaryQuote:
        'Anand breathes completely new life into the edit. Your creativity, fresh visual style, and ability to transform ideas into engaging content make a huge difference.',
      secondaryAuthor: 'Nivas K. (Content Manager)',
      accentColor: '#9b87f5',
    },
    {
      id: 'pilot-academy',
      tag: 'COMMERCIAL CAMPAIGN / EDUCATION',
      client: 'Pilot Academy',
      founder: 'Gurujyoth',
      role: 'Founder',
      service: 'Storytelling & High-Conversion Student Recruitment Campaign',
      headline: '50+ High-Value Student Enrollments Through Cinematic Video',
      summary:
        'Designed an emotionally resonant, visually commanding admissions campaign for an aviation training academy. Directed the visual rhythm to demystify pilot training and drive student inquiries directly into admissions consultations.',
      metrics: [
        { label: 'Verified Paid Enrollments', value: '50+ Students' },
        { label: 'Campaign Conversion Rate', value: '3.8x Industry Avg' },
        { label: 'Client ROI', value: '10/10 Rating' },
      ],
      highlights: [
        'Demystified rigorous aviation training through high-clarity cinematic storytelling',
        'Emotional testimonial interviews interwoven with dynamic flight footage',
        'Direct call-to-action integration leading to 50+ closed student enrollments',
      ],
      quote:
        'He always goes an extra mile to produce the best outcome possible. Over his time working with us, we had about 50+ students enrolled. 10/10 recommended.',
      quoteAuthor: 'Gurujyoth',
      quoteRole: 'Founder, Pilot Academy',
      accentColor: '#33C3F0',
    },
    {
      id: 'creative-tech',
      tag: 'ENGINEERING & PROPRIETARY TECH',
      client: 'Captiongrit & Gritder Plugins',
      founder: 'Internal R&D / Creative Technologist',
      role: 'Creator & Developer',
      service: 'Adobe Premiere Pro Extension & Native AE C++ Plugin',
      headline: 'Building Custom Video Automation Software for Global Editors',
      summary:
        'Beyond editing, engineered proprietary post-production software: Captiongrit (a custom Premiere Pro CEP extension for automated kinetic captioning and subtitle styling) and Gritder (a native Adobe After Effects C++ plugin for procedural grids and visual alignment).',
      metrics: [
        { label: 'Tools Developed', value: '2 Native Plugins' },
        { label: 'Core Stack', value: 'C++, JS, CEP, AE SDK' },
        { label: 'Workflow Efficiency', value: '400% Faster Subtitles' },
      ],
      highlights: [
        'Developed native Adobe Premiere Pro CEP extension automating subtitles with word-by-word highlight presets',
        'Authored native C++ After Effects effect plugin utilizing Adobe After Effects SDK',
        'Rare hybrid capability: high-end cinematic creativity paired with systems-level software engineering',
      ],
      quote:
        'Bridging the gap between storytelling and computer science — building custom software to push video editing beyond manual limits.',
      quoteAuthor: 'Anand Chowdari',
      quoteRole: 'Video Editor & Creative Technologist',
      accentColor: '#C6FF34',
    },
  ];

  return (
    <section id="case-studies" className="py-24 relative z-20 overflow-hidden bg-black/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase mb-4"
          >
            <TrendingUp size={14} />
            Verified Case Studies
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-heading font-bold text-gradient mb-6"
          >
            Real Work. Proven Results.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg sm:text-xl font-sans"
          >
            Not just edits, but content assets engineered for commercial outcomes, explosive reach, and measurable revenue.
          </motion.p>
        </div>

        {/* Aggregate Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20 p-6 sm:p-8 rounded-3xl glass-dark border border-white/10 shadow-[0_0_50px_rgba(155,135,245,0.15)] bg-black/60"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col text-center sm:text-left p-2">
              <p className="text-3xl sm:text-5xl font-heading font-extrabold text-gradient-purple mb-1">
                {stat.value}
              </p>
              <p className="text-sm sm:text-base font-semibold text-white mb-1">{stat.label}</p>
              <p className="text-xs text-gray-400 font-sans">{stat.context}</p>
            </div>
          ))}
        </motion.div>

        {/* Detailed Case Study Cards */}
        <div className="space-y-16">
          {caseStudies.map((cs, index) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-3xl glass-dark border border-white/10 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.6)] hover:border-primary/40 transition-all duration-500 bg-black/50"
            >
              <div className="p-6 sm:p-10 lg:p-12">
                {/* Header Meta */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
                  <span className="text-xs font-mono tracking-widest text-primary font-semibold uppercase px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                    {cs.tag}
                  </span>
                  <span className="text-xs text-gray-400 font-mono">
                    Client: <strong className="text-white">{cs.client}</strong>
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8 items-start">
                  {/* Left Column: Context & Highlights */}
                  <div className="lg:col-span-7 space-y-6">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white leading-tight">
                      {cs.headline}
                    </h3>
                    <p className="text-gray-300 font-sans text-base sm:text-lg leading-relaxed">
                      {cs.summary}
                    </p>

                    {/* Key Deliverables & Highlights */}
                    <div className="space-y-3 pt-2">
                      <p className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold">
                        What was executed:
                      </p>
                      {cs.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-1" />
                          <span className="text-sm text-gray-200">{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Testimonial Quote */}
                    <div className="mt-6 p-5 rounded-2xl bg-white/5 border border-white/10 relative">
                      <Quote size={20} className="text-primary/60 mb-2" />
                      <p className="text-sm sm:text-base italic text-gray-200 mb-3 leading-relaxed">
                        "{cs.quote}"
                      </p>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-bold text-white">{cs.quoteAuthor}</p>
                          <p className="text-[11px] text-gray-400">{cs.quoteRole}</p>
                        </div>
                      </div>

                      {cs.secondaryQuote && (
                        <div className="mt-4 pt-4 border-t border-white/10">
                          <p className="text-xs italic text-gray-300 mb-1">"{cs.secondaryQuote}"</p>
                          <p className="text-[10px] text-primary font-semibold">— {cs.secondaryAuthor}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Key Metric Callouts */}
                  <div className="lg:col-span-5 flex flex-col gap-4">
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 space-y-6">
                      <p className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
                        Key Performance Indicators
                      </p>

                      <div className="space-y-6 divide-y divide-white/10">
                        {cs.metrics.map((m, mIdx) => (
                          <div key={mIdx} className={mIdx === 0 ? '' : 'pt-6'}>
                            <p className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
                              {m.value}
                            </p>
                            <p className="text-sm text-gray-300 font-sans mt-1">{m.label}</p>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-white/10">
                        <span className="text-xs text-gray-400 block mb-1 font-mono">Service Focus</span>
                        <p className="text-sm font-semibold text-white">{cs.service}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
