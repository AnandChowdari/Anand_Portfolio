import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Mail, ArrowUp } from 'lucide-react';
import { useLenis } from 'lenis/react';
import { getWhatsAppUrl, getMailtoUrl } from '../config/site';

export default function FloatingTakeoutBar() {
  const [isVisible, setIsVisible] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      // Show when user scrolls past 350px
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-4 sm:bottom-7 left-1/2 -translate-x-1/2 sm:left-6 sm:translate-x-0 md:left-8 z-50 pointer-events-auto w-max max-w-[94vw]"
        >
          <div className="flex items-center gap-1.5 sm:gap-2.5 p-1 sm:p-2 rounded-full bg-black/85 backdrop-blur-2xl border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.8)] ring-1 ring-white/10">
            {/* WhatsApp 1-tap direct chat */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-semibold text-xs sm:text-sm shadow-[0_2px_15px_rgba(16,185,129,0.3)] transition-all duration-200"
            >
              <MessageSquare size={13} className="fill-white sm:w-4 sm:h-4" />
              <span>WhatsApp</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            </a>

            {/* Email 1-tap direct launch */}
            <a
              href={getMailtoUrl()}
              className="inline-flex items-center gap-1 px-2.5 sm:px-4 py-1.5 sm:py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-gray-200 hover:text-white font-heading font-medium text-xs sm:text-sm border border-white/10 transition-colors"
              title="Send Direct Email"
            >
              <Mail size={13} className="sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Email</span>
            </a>

            {/* Scroll to Top */}
            <button
              onClick={() => {
                if (lenis) {
                  lenis.scrollTo(0, { duration: 1.3 });
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="p-1.5 sm:p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-colors border border-white/5"
              aria-label="Scroll to top"
              title="Back to top"
            >
              <ArrowUp size={13} className="sm:w-3.5 sm:h-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
