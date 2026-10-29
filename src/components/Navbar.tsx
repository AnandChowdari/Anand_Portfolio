import { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageSquare } from 'lucide-react';
import { useLenis } from 'lenis/react';
import { siteConfig, getWhatsAppUrl } from '../config/site';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Work', path: '#work' },
    { name: 'Clients', path: '#clients' },
    { name: 'Results', path: '#results' },
    { name: 'Contact', path: '#contact' },
  ];

  function handleNavClick(e: React.MouseEvent, item: { name: string; path: string }) {
    e.preventDefault();
    const id = item.path.replace(/^#/, '');

    if (location.pathname === '/') {
      const el = document.getElementById(id);
      const nav = document.querySelector('nav');
      const offset = nav ? (nav as HTMLElement).clientHeight : 0;
      if (el) {
        if (lenis) {
          lenis.scrollTo(el, { offset: -offset - 12, duration: 1.2 });
        } else {
          const top = el.getBoundingClientRect().top + window.pageYOffset - offset - 10;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      } else {
        window.location.hash = id;
      }
    } else {
      window.location.href = `/#${id}`;
    }
    setIsOpen(false);
  }

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300">
      <div className="relative backdrop-blur-xl bg-[#050507]/80 border-b border-white/[0.08]">
        {/* 1.5px Hairline Reading Progress Bar */}
        <div
          className="absolute bottom-0 left-0 h-[1.5px] bg-gradient-to-r from-emerald-500/80 via-white to-emerald-400 transition-all duration-150 ease-out z-50"
          style={{ width: `${scrollProgress}%` }}
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Left: Brand */}
            <div className="flex items-center gap-3">
              <Link
                to="/"
                onClick={(e) => {
                  if (location.pathname === '/') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="group flex flex-col"
              >
                <span className="text-lg sm:text-xl font-heading font-extrabold text-white tracking-tight group-hover:text-neutral-300 transition-colors">
                  {siteConfig.name}
                </span>
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest -mt-1 hidden sm:block">
                  VSL Editor & Motion Designer
                </span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item)}
                  className="px-3.5 py-1.5 rounded-lg text-xs lg:text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/[0.04] transition-all duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Desktop Direct WhatsApp CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-semibold text-xs transition-all duration-200 shadow-[0_2px_15px_rgba(16,185,129,0.3)] active:scale-[0.98]"
              >
                <MessageSquare size={14} className="fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Mobile Navigation Trigger */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium"
              >
                <MessageSquare size={13} className="fill-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-neutral-300 hover:text-white transition-colors p-2 rounded-lg bg-white/[0.04] border border-white/[0.08]"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Dropdown */}
          {isOpen && (
            <div className="md:hidden px-3 pb-5 pt-2 border-t border-white/[0.08] bg-[#050507]/95 backdrop-blur-2xl rounded-b-2xl space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="block px-4 py-2.5 text-base font-medium text-neutral-300 hover:text-white hover:bg-white/[0.06] rounded-xl transition-colors"
                  onClick={(e) => handleNavClick(e, item)}
                >
                  {item.name}
                </a>
              ))}

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-heading font-semibold text-sm shadow-lg"
                >
                  <MessageSquare size={16} className="fill-white" />
                  <span>Start WhatsApp Chat</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
