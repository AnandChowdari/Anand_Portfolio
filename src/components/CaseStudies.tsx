import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageSquare, Play, Maximize2 } from 'lucide-react';
import { getWhatsAppUrl } from '../config/site';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';

export default function CaseStudies() {
  const [previewMedia, setPreviewMedia] = useState<{ src: string; title: string; aspect?: '9/16' | 'video' } | null>(null);
  const [activeHorizonCut, setActiveHorizonCut] = useState(0);

  const horizonCampaignCuts = [
    { label: 'Flagship Cut (34s)', src: '/videos/Nested Sequence 17.mp4', poster: '/videos/posters/Nested Sequence 17.jpg', title: 'Horizon Aviation — Flagship Admissions Reel', badge: '34s Flagship Cut' },
    { label: 'Cadet Story (16s)', src: '/videos/Nested Sequence 14.mp4', poster: '/videos/posters/Nested Sequence 14.jpg', title: 'Horizon Aviation — Student Pilot Story', badge: '16s Cadet Hook' },
    { label: 'Training (10s)', src: '/videos/Nested Sequence 20.mp4', poster: '/videos/posters/Nested Sequence 20.jpg', title: 'Horizon Aviation — Flight Simulation & Training', badge: '10s Training Teaser' },
    { label: 'Cockpit (8s)', src: '/videos/Nested Sequence 15.mp4', poster: '/videos/posters/Nested Sequence 15.jpg', title: 'Horizon Aviation — Cockpit Rhythm', badge: '8s Cockpit Cut' },
  ];

  const caseStudies = [
    {
      id: 'hustle-lifestyle',
      tag: 'FLAGSHIP YOUTUBE & REELS CAMPAIGN',
      client: 'Hustle Lifestyle Hyderabad',
      founder: 'Husain Basha',
      role: 'Founder & Creator',
      service: 'Long-Form Documentary + Short-Form Funnel',
      headline: 'Scaling a Local Business into a 16M+ View Authority Brand',
      summary:
        'Engineered a 25-minute cinema-grade documentary alongside a high-volume short-form reel campaign. We structured clear narrative story arcs, dynamic pacing, custom sound design, and hooks optimized for algorithm watch-time.',
      video: {
        src: '/videos/horizontal/Nested Sequence 24.mp4',
        poster: '/videos/horizontal/posters/Nested Sequence 24.jpg',
        badge: '16M+ Documentary Cut',
        aspect: 'video' as const,
      },
      metrics: [
        { label: 'Total Cross-Platform Views', value: '16M+' },
        { label: 'Long-Form Documentary Views', value: '50K+' },
        { label: 'Documentary Runtime', value: '25 Mins' },
      ],
      highlights: [
        'Full narrative scripting & pacing architecture for a 25-minute cinema-grade documentary',
        'High-retention reel cutdowns generating over 16M+ organic impressions',
        'Custom color grade, 3D soundscapes, and kinetic infographic overlays',
      ],
      quote:
        'Flogrit turned my business into a recognized personal brand. Their video strategy generated over 16 million views across Instagram and YouTube in just weeks.',
      quoteAuthor: 'Husain Basha',
      quoteRole: 'Founder, Hustle Lifestyle',
      secondaryQuote:
        'Anand breathes completely new life into the edit. Your creativity, fresh visual style, and ability to transform ideas into engaging content make a huge difference.',
      secondaryAuthor: 'Nivas K. (Content Manager)',
    },
    {
      id: 'horizon-aviation',
      tag: 'HIGH-TICKET CAMPAIGN',
      client: 'Horizon Aviation Academy',
      founder: 'Gurujyoth',
      role: 'Founder',
      service: 'Storytelling & Student Recruitment Campaign',
      headline: '50+ High-Value Student Enrollments Through Cinematic Video',
      summary:
        'Designed an emotionally resonant, visually commanding admissions campaign for an aviation training academy. Directed the visual rhythm to demystify pilot training and drive student inquiries directly into admissions consultations.',
      video: {
        src: horizonCampaignCuts[activeHorizonCut].src,
        poster: horizonCampaignCuts[activeHorizonCut].poster,
        badge: horizonCampaignCuts[activeHorizonCut].badge,
        aspect: '9/16' as const,
      },
      campaignCuts: horizonCampaignCuts,
      metrics: [
        { label: 'Verified Paid Enrollments', value: '50+ Students' },
        { label: 'Campaign Conversion Rate', value: '3.8x Industry Avg' },
        { label: 'Client ROI Rating', value: '10/10 Rating' },
      ],
      highlights: [
        'Demystified rigorous aviation training through high-clarity cinematic storytelling',
        'Emotional testimonial interviews interwoven with dynamic flight footage',
        'Direct call-to-action integration leading to 50+ closed student enrollments',
      ],
      quote:
        'He always goes an extra mile to produce the best outcome possible. Over his time working with us, we had about 50+ students enrolled. 10/10 recommended.',
      quoteAuthor: 'Gurujyoth',
      quoteRole: 'Founder, Horizon Aviation Academy',
    },
  ];

  return (
    <section id="results" className="py-24 relative z-20 overflow-hidden bg-[#050507] border-y border-white/[0.08] scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.04] text-neutral-300 text-xs font-mono uppercase tracking-widest mb-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
            Case Studies
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight"
          >
            Real Work. Proven Results.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-3 text-neutral-400 text-sm sm:text-base font-sans"
          >
            A closer look at how strategic editing, retention hooks, and pacing translated directly into watch time, brand growth, and closed revenue.
          </motion.p>
        </div>

        {/* Detailed Case Study Cards */}
        <div className="space-y-12">
          {caseStudies.map((cs, index) => {
            const currentVideo = cs.id === 'horizon-aviation' ? horizonCampaignCuts[activeHorizonCut] : cs.video;
            const currentAspect = cs.id === 'horizon-aviation' ? '9/16' : 'video';

            return (
              <motion.div
                key={cs.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-white/[0.08] overflow-hidden shadow-2xl bg-black/40 hover:border-white/20 transition-all duration-300"
              >
                <div className="p-6 sm:p-10 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Context & Narrative */}
                    <div className="lg:col-span-7 space-y-6">
                      <div className="space-y-2">
                        <span className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase font-semibold">
                          {cs.tag}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white leading-tight">
                          {cs.headline}
                        </h3>
                        <p className="text-sm font-sans text-neutral-400">
                          Client: <strong className="text-white">{cs.client}</strong> ({cs.founder})
                        </p>
                      </div>

                      <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
                        {cs.summary}
                      </p>

                      {/* Highlights list */}
                      <div className="space-y-2.5 pt-2">
                        <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold">
                          Execution Breakdown
                        </p>
                        {cs.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 font-sans">
                            <CheckCircle2 size={16} className="text-neutral-400 mt-0.5 flex-shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                      {/* Client quote */}
                      <div className="p-4 sm:p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] mt-4">
                        <p className="text-sm italic text-neutral-300 leading-relaxed mb-3">
                          "{cs.quote}"
                        </p>
                        <div>
                          <p className="text-xs font-bold text-white">{cs.quoteAuthor}</p>
                          <p className="text-[11px] text-neutral-400">{cs.quoteRole}</p>
                        </div>

                        {cs.secondaryQuote && (
                          <div className="mt-3 pt-3 border-t border-white/[0.06]">
                            <p className="text-xs italic text-neutral-300 mb-1">"{cs.secondaryQuote}"</p>
                            <p className="text-[10px] text-neutral-400">— {cs.secondaryAuthor}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right Column: Visual Video Preview + Key Metric Callouts */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                      {/* Embedded Visual Proof Video Snapshot */}
                      <div
                        onClick={() =>
                          setPreviewMedia({
                            src: currentVideo.src,
                            title: `${cs.client} — ${currentVideo.title || currentVideo.badge || 'Campaign Video'}`,
                            aspect: currentAspect,
                          })
                        }
                        className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/[0.12] group cursor-pointer shadow-xl bg-black"
                      >
                        <img
                          src={currentVideo.poster}
                          alt={cs.client}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Play size={18} className="ml-0.5 fill-white text-white" />
                          </div>
                        </div>
                        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-neutral-300 pointer-events-none">
                          <span className="bg-black/70 px-2.5 py-1 rounded-md backdrop-blur-sm border border-white/10">{currentVideo.badge}</span>
                          <span className="bg-black/70 px-2 py-0.5 rounded backdrop-blur-sm border border-white/10 hidden sm:inline">Click to watch</span>
                        </div>
                      </div>

                      {/* Interactive Cuts Selector for Horizon Aviation */}
                      {cs.campaignCuts && (
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400">
                            <span>CAMPAIGN ASSETS (4 CUTS)</span>
                            <span>SELECT TO PREVIEW</span>
                          </div>
                          <div className="grid grid-cols-2 gap-1.5">
                            {cs.campaignCuts.map((cut, cutIdx) => (
                              <button
                                key={cutIdx}
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveHorizonCut(cutIdx);
                                }}
                                className={`px-2.5 py-1.5 rounded-lg text-[10px] font-mono transition-all text-left flex items-center justify-between ${
                                  activeHorizonCut === cutIdx
                                    ? 'bg-white text-black font-semibold shadow'
                                    : 'bg-white/[0.04] hover:bg-white/[0.08] text-neutral-300 border border-white/[0.08]'
                                }`}
                              >
                                <span className="truncate">{cut.label}</span>
                                {activeHorizonCut === cutIdx && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 ml-1" />}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Metrics card */}
                      <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-5">
                        <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold">
                          Verified Outcomes
                        </p>

                        <div className="space-y-5 divide-y divide-white/[0.06]">
                          {cs.metrics.map((m, mIdx) => (
                            <div key={mIdx} className={mIdx === 0 ? '' : 'pt-5'}>
                              <p className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
                                {m.value}
                              </p>
                              <p className="text-xs sm:text-sm text-neutral-400 font-sans mt-0.5">{m.label}</p>
                            </div>
                          ))}
                        </div>

                        <div className="pt-4 border-t border-white/[0.06]">
                          <span className="text-xs text-neutral-400 block mb-1 font-mono">Service Scope</span>
                          <p className="text-sm font-semibold text-white mb-4">{cs.service}</p>

                          <a
                            href={getWhatsAppUrl(`Hi Anand, I was looking at your case study on "${cs.client}" and I'd like to discuss a similar project for my brand.`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-white font-heading font-medium text-xs transition-colors"
                          >
                            <MessageSquare size={14} className="fill-white" />
                            <span>Discuss Similar Results on WhatsApp</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Case Study Theater Video Dialog (Adaptive Portrait vs Landscape) */}
      <Dialog open={!!previewMedia} onOpenChange={(open) => !open && setPreviewMedia(null)}>
        <DialogContent className="max-w-fit border-none bg-transparent shadow-none p-0 flex items-center justify-center">
          <DialogTitle className="sr-only">{previewMedia?.title || 'Case Study Video'}</DialogTitle>
          <DialogDescription className="sr-only">Case study video theater playback</DialogDescription>

          {previewMedia && (
            <div
              className={`relative w-[92vw] max-h-[90vh] flex flex-col justify-center items-center bg-[#070709] backdrop-blur-2xl rounded-2xl overflow-hidden border border-white/[0.15] shadow-2xl p-2 ${
                previewMedia.aspect === '9/16' ? 'max-w-[390px]' : 'max-w-5xl'
              }`}
            >
              <video
                src={previewMedia.src}
                controls
                autoPlay
                playsInline
                className={`rounded-xl object-contain ${
                  previewMedia.aspect === '9/16' ? 'w-full aspect-[9/16] max-h-[80vh]' : 'max-w-full max-h-[82vh]'
                }`}
              />
              <div className="w-full px-4 py-2 flex items-center justify-between text-neutral-400 text-xs font-mono">
                <span className="font-semibold text-white truncate mr-2">{previewMedia.title}</span>
                <span className="flex-shrink-0">ESC to close</span>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
