export const siteConfig = {
  name: 'Anand Chowdari',
  title: 'VSL Video Editor & Motion Designer',
  tagline: "I edit high-retention videos and VSLs that hold attention and drive real results.",
  description:
    'Over the last 5+ years, I’ve worked with 25+ founders, brands, and creators — delivering 50M+ organic views, scaling YouTube channels, and editing high-converting video sales letters with sharp pacing and clean motion design.',
  
  // Direct Takeout & Communication
  whatsapp: {
    rawNumber: '918555848099',
    formattedNumber: '+91 85558 48099',
    defaultMessage: "Hi Anand, I came across your portfolio. Let's discuss a video editing / VSL project.",
    responseTime: 'Replies typically in < 1 hour',
  },
  
  email: {
    address: 'connect.anandchowdari@gmail.com',
    defaultSubject: 'Video Project Inquiry - VSL / Motion Design',
    defaultBody: "Hi Anand,\n\nI'm reaching out regarding a video editing / VSL / motion design project.\n\nProject details:\nTimeline:\nRough budget / scope:\n\nTalk soon!",
  },
  
  socials: {
    instagram: 'https://www.instagram.com/astroanand_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    linkedin: 'https://www.linkedin.com/in/anand-chowdari',
  },
  
  metrics: [
    { value: '25+', label: 'Clients & Brands', detail: 'Founders, Creators & Studios' },
    { value: '50M+', label: 'Total Views Delivered', detail: 'Across YouTube & Short-Form' },
    { value: '16M+', label: 'Flagship Campaign', detail: 'Hustle Lifestyle Doc + Funnel' },
    { value: '3.8x', label: 'Conversion Lift', detail: 'Direct-Response Storytelling' },
  ],
  
  companies: [
    { name: 'YouTube', category: 'Creator Content' },
    { name: 'Flogrit', category: 'Growth & Media' },
    { name: 'Edit Lobby', category: 'Post Production' },
    { name: 'Hustle Lifestyle', category: '16M+ Viral Funnel' },
    { name: 'Pilot Academy', category: '50+ Enrolled Students' },
  ],
};

export const getWhatsAppUrl = (customMessage?: string): string => {
  const msg = customMessage || siteConfig.whatsapp.defaultMessage;
  return `https://wa.me/${siteConfig.whatsapp.rawNumber}?text=${encodeURIComponent(msg)}`;
};

export const getMailtoUrl = (customSubject?: string, customBody?: string): string => {
  const subject = customSubject || siteConfig.email.defaultSubject;
  const body = customBody || siteConfig.email.defaultBody;
  return `mailto:${siteConfig.email.address}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};
