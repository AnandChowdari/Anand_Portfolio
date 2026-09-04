import { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Menu, X, FileText } from 'lucide-react';
import { ButtonGradient } from './ui/button-gradient';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '#home' },
    { name: 'Work', path: '#work' },
    { name: 'Case Studies', path: '#case-studies' },
    { name: 'Testimonials', path: '#testimonials' },
    { name: 'Resume', path: '/resume', isRoute: true },
    { name: 'About', path: '#about' },
    { name: 'Contact', path: '#contact' },
  ];

  function handleNavClick(e: React.MouseEvent, item: { name: string; path: string; isRoute?: boolean }) {
    e.preventDefault();

    if (item.isRoute) {
      navigate(item.path);
      setIsOpen(false);
      window.scrollTo(0, 0);
      return;
    }

    const id = item.path.replace(/^#/, '');

    if (location.pathname === '/') {
      const el = document.getElementById(id);
      const nav = document.querySelector('nav');
      const offset = nav ? (nav as HTMLElement).clientHeight : 0;
      if (el) {
        const top = el.getBoundingClientRect().top + window.pageYOffset - offset - 12;
        window.scrollTo({ top, behavior: 'smooth' });
      } else {
        window.location.hash = id;
      }
    } else {
      window.location.href = `/#${id}`;
    }
    setIsOpen(false);
  }

  return (
    <nav className="fixed w-full z-50">
      {/* Glass morphism container (full width but centered content) */}
      <div className="relative backdrop-blur-xl bg-black/40 border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-xl font-bold bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              Anand Chowdari
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item)}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors nav-link"
                >
                  {item.name}
                </a>
              ))}
              <ButtonGradient asChild size="sm">
                <a href="#contact" onClick={(e) => handleNavClick(e, { name: 'Contact', path: '#contact' })}>
                  Hire Me
                </a>
              </ButtonGradient>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-200 hover:text-white transition-colors p-2 rounded-md bg-transparent"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <div className="md:hidden px-3 pb-4 pt-2 border-t border-white/10 bg-black/90 backdrop-blur-2xl rounded-b-2xl">
              <div className="space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.path}
                    className="block px-3 py-2 text-base font-medium text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    onClick={(e) => handleNavClick(e, item)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-2">
                  <ButtonGradient asChild className="w-full">
                    <a href="#contact" onClick={(e) => handleNavClick(e, { name: 'Contact', path: '#contact' })}>
                      Hire Me
                    </a>
                  </ButtonGradient>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
