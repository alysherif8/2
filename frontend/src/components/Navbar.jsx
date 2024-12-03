import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-risd-blue shadow-lg' 
          : 'bg-risd-blue/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-24 relative">
            {/* Logo */}
            <div className="flex-shrink-0 absolute left-0 top-1/2 transform -translate-y-1/2 mt-2">
              <Link
                to="/"
                className="flex items-center transition-transform duration-300 hover:scale-105"
              >
                <img 
                  src="/images/Leash Logo 1080x1080 -03.png" 
                  alt="Leash Logo" 
                  className="h-32 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:gap-12 ml-auto">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact', path: '/contact' },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-lg font-['Gully_CD_Light'] transition-colors duration-300 ${
                    isActive(item.path)
                      ? 'text-azure'
                      : 'text-white hover:text-azure'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-white hover:bg-white/10 focus:outline-none"
              >
                <span className="sr-only">Open menu</span>
                {/* Hamburger Icon */}
                <div className="w-6 h-6 flex flex-col justify-around">
                  <span className={`block w-full h-0.5 bg-current transform transition-transform ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
                  <span className={`block w-full h-0.5 bg-current transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
                  <span className={`block w-full h-0.5 bg-current transform transition-transform ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${isOpen ? 'max-h-64' : 'max-h-0'} overflow-hidden`}>
          <div className="px-4 pt-3 pb-8 space-y-3 bg-risd-blue">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Blog', path: '/blog' },
              { name: 'Contact', path: '/contact' },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 px-4 rounded-lg text-lg font-['Brodien_Medium'] transition-colors duration-300 ${
                  isActive(item.path)
                    ? 'bg-white/20 text-white'
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      {/* Spacer for fixed navbar */}
      <div className="h-24"></div>
    </>
  );
};

export default Navbar;
