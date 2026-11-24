/**
 * Single source of truth for every video on the site.
 * Labels were written after reviewing each clip frame-by-frame — keep them honest.
 */

export type Clip = {
  id: string;
  src: string;
  poster: string;
  title: string;
  note: string;
  duration: string;
  aspect: 'vertical' | 'horizontal' | 'square';
};

const v = (file: string) => ({
  src: `/videos/${file}.mp4`,
  poster: `/videos/posters/${file}.jpg`,
});
const h = (file: string) => ({
  src: `/videos/horizontal/${file}.mp4`,
  poster: `/videos/horizontal/posters/${file}.jpg`,
});

export const showreel = {
  loop: '/videos/horizontal/showreel-2026-loop.mp4',
  src: '/videos/horizontal/showreel-2026.mp4',
  poster: '/videos/horizontal/posters/showreel-2026.jpg',
  title: 'Showreel — 2026',
  duration: '2:30',
};

/** Ambient 3D motion loops — perfect as seamless texture. */
export const motionLoops: Clip[] = [
  { id: 'glass-ui', ...h('Nested Sequence 22'), title: 'Glass UI Stack', note: '3D product-UI motion loop', duration: '0:04', aspect: 'horizontal' },
  { id: 'disc-cup', ...h('Nested Sequence 23'), title: 'Disc → Cup Morph', note: '3D shape transition', duration: '0:05', aspect: 'horizontal' },
];

/** Chapter 01 — Long-form YouTube for Hustle Lifestyle (founder-led business channel). */
export const longform: Clip[] = [
  { id: 'hl-ai-jobs', ...h('Nested Sequence 24'), title: 'Will AI Take Your Job?', note: 'Documentary open · press-clipping montage', duration: '0:34', aspect: 'horizontal' },
  { id: 'hl-business', ...h('Nested Sequence 25'), title: 'The Proven Strategy', note: 'Kinetic type · learning-phase tables', duration: '0:27', aspect: 'horizontal' },
  { id: 'hl-2031', ...h('Nested Sequence 30'), title: '52% by 2031', note: 'Data-viz storytelling · pie & counters', duration: '0:42', aspect: 'horizontal' },
  { id: 'hl-mindset', ...h('Nested Sequence 27'), title: 'Founder Mindset', note: 'Comic-panel duotone treatment', duration: '0:06', aspect: 'horizontal' },
  { id: 'hl-ceo', ...h('Nested Sequence 32'), title: 'Road to CEO', note: 'Map animation · 3-2-1 countdown', duration: '0:45', aspect: 'horizontal' },
  { id: 'hl-crore', ...h('Nested Sequence 29'), title: 'The Crore Outcome', note: 'Department infographic build', duration: '0:36', aspect: 'horizontal' },
  { id: 'hl-graduate', ...h('Nested Sequence 31'), title: 'Graduate → Employee', note: 'Cut-out character transitions', duration: '0:47', aspect: 'horizontal' },
  { id: 'hl-checklist', ...h('Nested Sequence 28'), title: 'Five-Step Checklist', note: 'Face-cam + animated list', duration: '0:09', aspect: 'horizontal' },
  { id: 'hl-curve', ...h('Nested Sequence 26'), title: 'The Learning Curve', note: 'Graph animation · tables', duration: '0:12', aspect: 'horizontal' },
];

/** Chapter 02 — Aviation: Horizon Aviation Academy & its pilot-founder's channel. */
export const aviation: Clip[] = [
  { id: 'av-admissions', ...v('Ad 3'), title: 'Horizon Admissions Ad', note: 'Paid ad · syllabus + flight footage', duration: '0:34', aspect: 'vertical' },
  { id: 'av-ka52', ...v('Nested Sequence 18'), title: 'Meet the KA-52', note: 'Action cut · VFX & sound design', duration: '0:43', aspect: 'vertical' },
  { id: 'av-airshow', ...v('Nested Sequence 19'), title: 'Dubai Airshow Tour', note: 'Glitch transitions · event recap', duration: '1:07', aspect: 'vertical' },
  { id: 'av-beast', ...v('Russian Helicopter'), title: 'POV: The Beast', note: 'Hook-first reveal format', duration: '0:32', aspect: 'vertical' },
  { id: 'av-industry', ...v('Dubai Airshow - 1_1'), title: 'Inside the Industry', note: 'On-location talking reel', duration: '0:48', aspect: 'vertical' },
  { id: 'av-vlog', ...v('Nested Sequence 17'), title: 'A Pilot’s Week', note: 'Lifestyle vlog · word-synced captions', duration: '0:34', aspect: 'vertical' },
  { id: 'av-mistake', ...v('Nested Sequence 20'), title: 'Mistake #1', note: 'Student education · 3D calculator', duration: '0:10', aspect: 'vertical' },
  { id: 'av-strong', ...v('Nested Sequence 14'), title: 'Why It Holds', note: 'Meme-paced explainer', duration: '0:17', aspect: 'vertical' },
  { id: 'av-fuel', ...v('Nested Sequence 15'), title: 'Let’s Understand Fuel', note: 'Green-screen explainer', duration: '0:08', aspect: 'vertical' },
  { id: 'av-exam', ...v('Nested Sequence 12 1'), title: 'Exam Season', note: 'Pop-art cut-outs · humour beats', duration: '0:27', aspect: 'vertical' },
];

/** Chapter 03 — Science & AI explainers (AstroPhile). Heavy 3D / motion design. */
export const explainers: Clip[] = [
  { id: 'sx-quantum', ...v('Quantum Computers Ep-2'), title: 'Quantum Computers, Ep. 2', note: 'Qubits & state vectors in 3D', duration: '1:05', aspect: 'vertical' },
  { id: 'sx-mirror', ...v('What is Color of a Mirror'), title: 'What Colour Is a Mirror?', note: 'Light, eye & brain · 3D breakdown', duration: '0:57', aspect: 'vertical' },
  { id: 'sx-color', ...v('Nested Sequence 03'), title: 'How We See Colour', note: '3D eye & brain · physics explainer', duration: '0:17', aspect: 'vertical' },
  { id: 'sx-moon', ...v('Nested Sequence 07'), title: 'The Moon, Then & Now', note: 'Atmospheric 3D', duration: '0:15', aspect: 'vertical' },
  { id: 'sx-ai', ...v('Nested Sequence 10'), title: 'What Is an LLM?', note: 'Iceberg + 3D vector space', duration: '0:12', aspect: 'vertical' },
  { id: 'sx-sun', ...v('Nested Sequence 04'), title: 'Why the Sun Burns', note: 'Atomic fusion animation', duration: '0:14', aspect: 'vertical' },
  { id: 'sx-sky', ...v('Nested Sequence 05'), title: 'Why Is the Sky Blue?', note: 'Molecule & spectrum motion', duration: '0:31', aspect: 'vertical' },
  { id: 'sx-camera', ...v('Nested Sequence 08'), title: 'How a Camera Works', note: 'Lens → photodiode breakdown', duration: '0:14', aspect: 'vertical' },
  { id: 'sx-iss', ...v('Nested Sequence 06'), title: 'The Size of the ISS', note: 'Scale comparison in 3D', duration: '0:19', aspect: 'vertical' },
  { id: 'sx-time', ...v('Nested Sequence 09'), title: 'Time Dilation', note: 'Light-clock diagrams', duration: '0:18', aspect: 'vertical' },
];

/** Founder & creator reels. */
export const founders: Clip[] = [
  { id: 'fd-fund', ...v('Sequence 01'), title: 'From Funding to 18M', note: 'Founder story · editorial cut-outs', duration: '0:41', aspect: 'vertical' },
  { id: 'fd-client', ...v('Land your client V1_1'), title: 'Land Your First Client', note: 'Creator education · talking head', duration: '1:23', aspect: 'vertical' },
  { id: 'fd-pricing', ...v('Nested Sequence 21'), title: 'The Pricing Talk', note: 'Coach reel · editorial infographics', duration: '0:46', aspect: 'vertical' },
  { id: 'fd-night', ...v('Nested Sequence 11'), title: 'Night Walk', note: 'Cinematic short · grade & pacing', duration: '0:15', aspect: 'vertical' },
];

export const chapters = [
  {
    id: 'aviation',
    index: '01',
    title: 'Aviation',
    italic: 'at altitude.',
    client: 'Horizon Aviation Academy',
    blurb: 'Admissions ads, airshow recaps and student explainers for a pilot-training academy and its founder’s channel — the campaign behind 50+ paid enrollments.',
    clips: aviation,
  },
  {
    id: 'explainers',
    index: '02',
    title: 'Science,',
    italic: 'made visible.',
    client: 'AstroPhile · Explainers',
    blurb: 'Physics, quantum and AI explained in under a minute — built almost entirely in 3D and motion design.',
    clips: explainers,
  },
  {
    id: 'founders',
    index: '03',
    title: 'Founders',
    italic: '& creators.',
    client: 'Personal brands',
    blurb: 'Founder stories, creator education and cinematic shorts — edits that turn a face on camera into authority.',
    clips: founders,
  },
  {
    id: 'longform',
    index: '04',
    title: 'Long-form',
    italic: 'that holds.',
    client: 'Hustle Lifestyle · YouTube',
    blurb: 'A founder-led business channel built on 25-minute documentaries. Press clippings, data-viz, kinetic type and comic-panel grades — every beat designed to stop the drop-off.',
    clips: longform,
  },
] as const;

export const caseStudies = [
  {
    id: 'hustle',
    client: 'Hustle Lifestyle',
    person: 'Husain Basha, Founder',
    headline: 'A local business, turned into a 16M-view authority brand.',
    body:
      'A 25-minute documentary and a high-volume short-form funnel cut from it. Narrative arcs, custom sound design and hooks tuned for watch-time.',
    metrics: [
      { value: 16, suffix: 'M+', label: 'Cross-platform views' },
      { value: 25, suffix: ' min', label: 'Documentary runtime' },
      { value: 50, suffix: 'K+', label: 'Long-form views' },
    ],
    quote:
      'Their video strategy generated over 16 million views across Instagram and YouTube in just weeks.',
    clip: longform[0],
  },
  {
    id: 'horizon',
    client: 'Horizon Aviation Academy',
    person: 'Gurujyoth, Founder',
    headline: 'Cinematic admissions that filled 50+ pilot seats.',
    body:
      'Demystifying pilot training with testimonial interviews, flight footage and a clear call-to-action — straight into admissions consultations.',
    metrics: [
      { value: 50, suffix: '+', label: 'Paid enrollments' },
      { value: 3.8, suffix: 'x', label: 'Conversion vs. avg' },
      { value: 10, suffix: '/10', label: 'Client rating' },
    ],
    quote:
      'He always goes an extra mile to produce the best outcome possible. We had about 50+ students enrolled. 10/10 recommended.',
    clip: aviation[0],
  },
];

export const voices = [
  {
    name: 'Husain Basha',
    role: 'Founder, Hustle Lifestyle',
    quote:
      'Turned my business into a recognized personal brand — over 16 million views across Instagram and YouTube in just weeks.',
  },
  {
    name: 'Gurujyoth',
    role: 'Founder, Horizon Aviation Academy',
    quote:
      'He always goes an extra mile to produce the best outcome possible. About 50+ students enrolled. 10/10 recommended.',
  },
  {
    name: 'Nivas K.',
    role: 'Content Manager',
    quote:
      'Anand breathes completely new life into the edit. His creativity and fresh visual style make a huge difference.',
  },
  {
    name: 'Charan',
    role: 'Content Strategist',
    quote:
      'He actively contributes ideas that elevate every video beyond expectations — technical excellence with genuine creative thinking.',
  },
];
