
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ButtonGradient } from './ui/button-gradient';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const navigate = useNavigate();

  function handleNavClick(e: React.MouseEvent, path: string) {
    e.preventDefault();
    const id = path === '/' ? 'home' : path.replace(/^\//, '');
    if (window.location.pathname === '/') {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // fallback to updating hash
        window.location.hash = id;
      }
    } else {
      // navigate to root with hash — full navigation ensures Index mounts
      window.location.href = `/#${id}`;
    }
    setIsOpen(false);
  }

  return (
    <nav className="fixed w-full z-50">
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .navbar-gradient {
          background: linear-gradient(90deg, rgba(155,135,245,0.12), rgba(51,195,240,0.08), rgba(155,135,245,0.12));
          background-size: 300% 300%;
          animation: gradientShift 9s ease-in-out infinite;
        }
      `}</style>

      {/* Animated gradient full-width background */}
      <div className="absolute inset-0 navbar-gradient blur-3xl rounded-b-3xl pointer-events-none"></div>

      {/* Glass morphism container (full width but centered content) */}
      <div className="relative backdrop-blur-3xl bg-white/6 border border-white/10 rounded-b-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <Link to="/" className="text-lg font-semibold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Anand Chowdari
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className="text-gray-200 hover:text-white transition-colors nav-link"
                >
                  {item.name}
                </a>
              ))}
              <ButtonGradient asChild>
                <a href="/contact" onClick={(e) => handleNavClick(e, '/contact')}>Hire Me</a>
              </ButtonGradient>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-200 hover:text-white transition-colors p-2 rounded-md bg-transparent"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <div className="md:hidden px-3 pb-3">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.path}
                    className="block px-3 py-2 text-gray-200 hover:text-white transition-colors rounded-lg hover:bg-white/6"
                    onClick={(e) => handleNavClick(e, item.path)}
                  >
                    {item.name}
                  </a>
                ))}
                <ButtonGradient asChild className="w-full mt-1">
                  <a href="/contact" onClick={(e) => handleNavClick(e, '/contact')}>Hire Me</a>
                </ButtonGradient>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

 export default Navbar;
