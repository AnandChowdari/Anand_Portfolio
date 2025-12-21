
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
    <nav className="fixed w-full bg-background/80 backdrop-blur-lg z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-semibold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Anand Chowdari
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className="text-gray-300 hover:text-white transition-colors cursor-pointer"
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
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                  onClick={(e) => handleNavClick(e, item.path)}
                >
                  {item.name}
                </a>
              ))}
              <ButtonGradient asChild className="w-full mt-4">
                <a href="/contact" onClick={(e) => handleNavClick(e, '/contact')}>Hire Me</a>
              </ButtonGradient>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

 export default Navbar;
