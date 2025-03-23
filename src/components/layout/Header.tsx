
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 w-full py-4 px-6 lg:px-12 transition-all duration-300 backdrop-blur-md',
        isScrolled ? 'bg-taskuick-black/80 shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-taskuick-white text-glow-blue">
              Taskuick
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-taskuick-gray font-medium transition-all duration-300 hover:text-taskuick-white relative group',
                  location.pathname === link.path && 'text-taskuick-white'
                )}
              >
                {link.name}
                <span
                  className={cn(
                    'absolute bottom-0 left-0 w-0 h-0.5 bg-taskuick-blue transition-all duration-300 group-hover:w-full',
                    location.pathname === link.path && 'w-full'
                  )}
                />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="btn btn-primary"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-taskuick-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Updated with glassmorphism */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-taskuick-black/60 backdrop-blur-xl z-40 animate-fade-in border-t border-white/10">
          <nav className="flex flex-col items-center justify-center space-y-8 pt-16">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-xl text-taskuick-gray font-medium transition-all duration-300 hover:text-taskuick-white',
                  location.pathname === link.path && 'text-taskuick-white text-glow-blue'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn btn-primary mt-4"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
