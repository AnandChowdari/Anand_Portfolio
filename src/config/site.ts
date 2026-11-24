export const siteConfig = {
  name: 'Anand Chowdari',
  title: 'Video Editor & Motion Designer',
  description:
    'Over the last 5+ years, I’ve worked with 25+ founders, brands, and creators — delivering 50M+ organic views, scaling YouTube channels, and editing high-converting video sales letters.',

  /**
   * ⚠️ Replace with your real Calendly event links.
   * Create two event types in Calendly and paste their URLs here.
   */
  calendly: {
    project: 'https://calendly.com/anandchowdari/project-call',
    consult: 'https://calendly.com/anandchowdari/content-consultation',
    mentor: 'https://calendly.com/anandchowdari/editor-mentorship',
  },

  email: {
    address: 'connect.anandchowdari@gmail.com',
    defaultSubject: 'Video Project Inquiry',
    defaultBody: "Hi Anand,\n\nI'm reaching out about a video project.\n\nProject details:\nTimeline:\nBudget / scope:\n\nTalk soon!",
    responseTime: 'Replies within a few hours',
  },

  /** EmailJS — powers the on-site contact form. */
  emailjs: {
    service: 'service_woapccs',
    template: 'template_9o6eqxf',
    publicKey: '8W_vwN-Qn8BhRvPgs',
  },

  socials: {
    instagram: 'https://www.instagram.com/astroanand_',
    linkedin: 'https://www.linkedin.com/in/anand-chowdari',
  },

  metrics: [
    { value: '25+', label: 'Clients & Brands', detail: 'Founders, Creators & Studios' },
    { value: '50M+', label: 'Total Views Delivered', detail: 'Across YouTube & Short-Form' },
    { value: '16M+', label: 'Flagship Campaign', detail: 'Hustle Lifestyle Doc + Funnel' },
    { value: '3.8x', label: 'Conversion Lift', detail: 'Direct-Response Storytelling' },
  ],
};

export const getMailtoUrl = (customSubject?: string, customBody?: string): string => {
  const subject = customSubject || siteConfig.email.defaultSubject;
  const body = customBody || siteConfig.email.defaultBody;
  return `mailto:${siteConfig.email.address}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};
