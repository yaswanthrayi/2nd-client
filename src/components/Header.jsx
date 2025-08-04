import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Classes', href: '/classes' },
    { name: 'Schedule', href: '/schedule' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'bg-gradient-to-r from-black via-gray-900 to-black backdrop-blur-lg shadow-2xl shadow-black/50' 
            : 'bg-gradient-to-r from-black/95 via-gray-900/95 to-black/95 backdrop-blur-md'
        }`}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 via-transparent to-gray-700/20"></div>
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-orange-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Left side: Profile and Title */}
            <div className="flex items-center space-x-4 group transform hover:scale-105 transition-all duration-300">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face" 
                  alt="Profile" 
                  className="w-12 h-12 lg:w-16 lg:h-16 rounded-full object-cover border-2 border-yellow-400/50 transform group-hover:scale-110 group-hover:border-yellow-400 transition-all duration-300 shadow-lg hover:shadow-yellow-400/30"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-white text-lg lg:text-2xl font-serif font-bold tracking-wide group-hover:text-yellow-300 transition-colors duration-300">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent animate-pulse">MOON WALKER</span>
                </span>
                <span className="text-gray-300 text-xs lg:text-sm font-sans font-medium tracking-widest uppercase opacity-90 group-hover:text-yellow-100 transition-colors duration-300">
                  <span className="relative">
                    Dance Studio
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 group-hover:w-full transition-all duration-500"></div>
                  </span>
                </span>
              </div>
            </div>

            {/* Right side: Nav & Button */}
            <div className="flex items-center space-x-8">
              <nav className="hidden md:flex items-center space-x-6">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group relative px-4 py-2 rounded-lg text-gray-300 hover:text-white transition-all duration-300 hover:bg-gray-800/50 transform hover:scale-105 animate-fade-in"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animationDuration: '600ms',
                      animationFillMode: 'both'
                    }}
                  >
                    <span className="font-serif text-base lg:text-lg font-medium relative z-10">{item.name}</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 group-hover:w-full transition-all duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                ))}
              </nav>

              <button
                onClick={toggleMenu}
                className="md:hidden p-3 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transform hover:scale-110 active:scale-95"
                aria-label="Toggle navigation menu"
              >
                <div className="relative w-6 h-6">
                  <Menu 
                    className={`absolute inset-0 w-6 h-6 transform transition-all duration-300 ${
                      isMenuOpen ? 'rotate-180 opacity-0 scale-75' : 'rotate-0 opacity-100 scale-100'
                    }`} 
                  />
                  <X 
                    className={`absolute inset-0 w-6 h-6 transform transition-all duration-300 ${
                      isMenuOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-180 opacity-0 scale-75'
                    }`} 
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div 
            className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
              isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="py-4 space-y-2 bg-black/70 backdrop-blur-sm rounded-xl mt-4 border border-gray-700/50 px-4">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`group flex items-center px-4 py-3 rounded-lg text-gray-300 hover:text-yellow-300 hover:bg-gray-800/60 transition-all duration-300 transform hover:translate-x-2 hover:scale-105 relative overflow-hidden ${
                    isMenuOpen ? 'animate-slide-in-mobile' : ''
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationDuration: '500ms',
                    animationFillMode: 'both'
                  }}
                >
                  <div className="absolute left-0 top-0 w-1 h-0 bg-gradient-to-b from-yellow-400 to-orange-400 group-hover:h-full transition-all duration-300"></div>
                  <span className="font-serif text-lg font-medium relative z-10">
                    {item.name}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-fade-in"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-in-mobile {
          from {
            opacity: 0;
            transform: translateX(-30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-slide-in-mobile {
          animation: slide-in-mobile 0.5s ease-out forwards;
        }

        @media (max-width: 768px) {
          .animate-fade-in {
            animation: fade-in 0.4s ease-out forwards;
          }

          .animate-slide-in-mobile {
            animation: slide-in-mobile 0.4s ease-out forwards;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
