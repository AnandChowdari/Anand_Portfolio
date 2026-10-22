import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Mail, Send, CheckCircle2, Clock, Sparkles, ExternalLink, ArrowRight, Instagram, Linkedin } from 'lucide-react';
import { siteConfig, getWhatsAppUrl, getMailtoUrl } from '../config/site';
import { useToast } from '@/components/ui/use-toast';
import emailjs from 'emailjs-com';

export default function DirectTakeout() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setIsSending(true);

    try {
      await emailjs.send(
        'service_woapccs',
        'template_9o6eqxf',
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        '8W_vwN-Qn8BhRvPgs'
      );

      toast({
        title: 'Message Sent',
        description: "Thanks for reaching out! I'll get back to you shortly.",
      });

      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Error sending message:', err);
      toast({
        title: 'Could not send message automatically',
        description: 'Please reach out directly on WhatsApp or email connect.anandchowdari@gmail.com',
        variant: 'destructive',
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#050507]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-neutral-300 text-xs font-mono uppercase tracking-widest mb-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Let's Talk
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight"
          >
            Start a Conversation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-3 text-neutral-400 text-sm sm:text-base font-sans"
          >
            Whether you need a high-converting VSL, recurring reels for your brand, or custom motion graphics — ping me directly on WhatsApp or drop a note below.
          </motion.p>
        </div>

        {/* Dual Primary Takeout Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch max-w-5xl mx-auto">
          {/* Card 1: WhatsApp Straight Away (Primary Channel - 7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 rounded-2xl p-7 sm:p-9 bg-black/50 border border-white/[0.08] hover:border-emerald-500/30 shadow-2xl flex flex-col justify-between relative overflow-hidden backdrop-blur-xl group transition-all duration-300"
          >
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between gap-4 mb-2">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <MessageSquare size={22} className="fill-emerald-400" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400">
                  <Clock size={13} />
                  <span>{siteConfig.whatsapp.responseTime}</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
                Chat on WhatsApp
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed font-sans">
                Fastest way to get in touch. Send over your scripts, reference videos, or rough ideas, and we can discuss pacing and deliverables right away.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs text-neutral-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-400" /> Direct line to Anand
                </span>
                <span className="hidden sm:inline text-neutral-600">•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-400" /> Fast turnaround discussion
                </span>
              </div>
            </div>

            {/* WhatsApp Big CTA Button */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-semibold text-sm shadow-[0_4px_25px_rgba(16,185,129,0.25)] hover:shadow-[0_4px_30px_rgba(16,185,129,0.4)] transition-all duration-200 group/btn"
            >
              <MessageSquare size={17} className="fill-white" />
              <span>Start WhatsApp Chat</span>
              <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Card 2: Direct Mail / Quick Inquiry (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 rounded-2xl p-7 sm:p-9 bg-black/50 border border-white/[0.08] shadow-2xl flex flex-col justify-between backdrop-blur-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white flex items-center justify-center">
                  <Mail size={20} className="text-neutral-300" />
                </div>
                <a
                  href={getMailtoUrl()}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors py-1 px-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08]"
                >
                  <span>1-Click Mailto</span>
                  <ExternalLink size={11} />
                </a>
              </div>

              <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-1.5">
                Send an Email
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm mb-5 font-sans">
                Prefer email or have a detailed project brief? Drop a note below.
              </p>

              <form onSubmit={handleQuickSubmit} className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Your Name / Brand"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3.5 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white/30"
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3.5 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white/30"
                />
                <textarea
                  rows={3}
                  required
                  placeholder="Brief note about your project..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3.5 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 resize-none"
                />

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] text-white font-medium text-xs transition-colors duration-200 disabled:opacity-50"
                >
                  <Send size={13} />
                  <span>{isSending ? 'Sending...' : 'Send Email'}</span>
                </button>
              </form>
            </div>

            <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-neutral-400">
              <span className="truncate text-[11px]">{siteConfig.email.address}</span>
              <div className="flex items-center gap-3 ml-2 flex-shrink-0">
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors"
                  title="Instagram"
                >
                  <Instagram size={15} />
                </a>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin size={15} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
