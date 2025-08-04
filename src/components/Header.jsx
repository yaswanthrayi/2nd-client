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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          isScrolled 
            ? 'bg-gradient-to-r from-black via-gray-900 to-black backdrop-blur-xl shadow-2xl shadow-black/60' 
            : 'bg-gradient-to-r from-black/95 via-gray-900/95 to-black/95 backdrop-blur-lg'
        }`}
      >
        {/* Enhanced animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/30 via-transparent to-gray-700/30 animate-pulse-slow"></div>
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-blue-500/15 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-purple-500/15 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Left side: Profile and Title with enhanced animations */}
            <div className="flex items-center space-x-4 group transform hover:scale-105 transition-all duration-500 hover:rotate-1">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face" 
                  alt="Profile" 
                  className="w-12 h-12 lg:w-16 lg:h-16 rounded-full object-cover border-2 border-blue-400/60 transform group-hover:scale-110 group-hover:border-blue-300 transition-all duration-500 shadow-xl hover:shadow-blue-400/40 animate-profile-glow"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-rotate-slow"></div>
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-30 blur-sm transition-all duration-500"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-white text-lg lg:text-2xl font-bold tracking-wider group-hover:text-blue-200 transition-all duration-500 font-sans">
                  <span className="bg-gradient-to-r from-blue-300 via-white to-purple-300 bg-clip-text text-transparent animate-text-shine">MOON WALKER</span>
                </span>
                <span className="text-gray-300 text-xs lg:text-sm font-medium tracking-[0.2em] uppercase opacity-90 group-hover:text-blue-100 transition-all duration-500 font-mono">
                  <span className="relative animate-typewriter">
                    Dance Studio
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-700"></div>
                  </span>
                </span>
              </div>
            </div>

            {/* Right side: Nav & Button with enhanced animations */}
            <div className="flex items-center space-x-8">
              <nav className="hidden md:flex items-center space-x-6">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group relative px-4 py-2 rounded-lg text-gray-300 hover:text-white transition-all duration-500 hover:bg-gray-800/60 transform hover:scale-110 hover:-translate-y-1 animate-nav-slide-in font-medium tracking-wide font-sans"
                    style={{
                      animationDelay: `${index * 150}ms`,
                      animationDuration: '800ms',
                      animationFillMode: 'both'
                    }}
                  >
                    <span className="text-base lg:text-lg relative z-10 hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.5)] transition-all duration-300">{item.name}</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-500 shadow-sm shadow-blue-400/50"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 animate-background-glow"></div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 rounded-lg blur-sm transition-all duration-500"></div>
                  </a>
                ))}
              </nav>

              <button
                onClick={toggleMenu}
                className="md:hidden p-3 rounded-xl text-gray-300 hover:text-white hover:bg-gray-800/60 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-blue-400/60 transform hover:scale-125 active:scale-95 hover:rotate-6 animate-mobile-bounce"
                aria-label="Toggle navigation menu"
              >
                <div className="relative w-6 h-6">
                  <Menu 
                    className={`absolute inset-0 w-6 h-6 transform transition-all duration-500 ${
                      isMenuOpen ? 'rotate-180 opacity-0 scale-75' : 'rotate-0 opacity-100 scale-100'
                    }`} 
                  />
                  <X 
                    className={`absolute inset-0 w-6 h-6 transform transition-all duration-500 ${
                      isMenuOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-180 opacity-0 scale-75'
                    }`} 
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Navigation Menu */}
          <div
  className={`md:hidden overflow-hidden transition-all duration-700 ease-out ${
    isMenuOpen ? 'max-h-[600px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'
  }`}
>
            <div className="py-6 space-y-3 bg-black/80 backdrop-blur-xl rounded-2xl mt-6 border border-gray-700/60 px-6 shadow-2xl animate-mobile-menu-slide">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`group flex items-center px-6 py-4 rounded-xl text-gray-300 hover:text-blue-200 hover:bg-gray-800/70 transition-all duration-500 transform hover:translate-x-3 hover:scale-105 relative overflow-hidden font-medium tracking-wide font-sans ${
                    isMenuOpen ? 'animate-mobile-item-slide' : ''
                  }`}
                  style={{
                    animationDelay: `${index * 150}ms`,
                    animationDuration: '600ms',
                    animationFillMode: 'both'
                  }}
                >
                  <div className="absolute left-0 top-0 w-1 h-0 bg-gradient-to-b from-blue-400 to-purple-400 group-hover:h-full transition-all duration-500 shadow-sm shadow-blue-400/50"></div>
                  <span className="text-lg relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.5)] transition-all duration-300">
                    {item.name}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300"></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/70 backdrop-blur-md z-40 animate-overlay-fade"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <style jsx>{`
        @keyframes nav-slide-in {
          from { opacity: 0; transform: translateY(-20px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes mobile-item-slide {
          from {
            opacity: 0;
            transform: translateX(-40px) scale(0.9) rotateY(-10deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1) rotateY(0deg);
          }
        }

        @keyframes mobile-menu-slide {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes overlay-fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes text-shine {
          0%, 100% { background-position: -200% center; }
          50% { background-position: 200% center; }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes profile-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(96, 165, 250, 0.3); }
          50% { box-shadow: 0 0 30px rgba(96, 165, 250, 0.6); }
        }

        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-5deg); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes mobile-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        @keyframes background-glow {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }

        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }

        .animate-nav-slide-in {
          animation: nav-slide-in 0.8s ease-out forwards;
        }

        .animate-mobile-item-slide {
          animation: mobile-item-slide 0.6s ease-out forwards;
        }

        .animate-mobile-menu-slide {
          animation: mobile-menu-slide 0.7s ease-out forwards;
        }

        .animate-overlay-fade {
          animation: overlay-fade 0.3s ease-out forwards;
        }

        .animate-text-shine {
          background-size: 200% auto;
          animation: text-shine 3s linear infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s linear infinite;
        }

        .animate-profile-glow {
          animation: profile-glow 2s ease-in-out infinite;
        }

        .animate-float-gentle {
          animation: float-gentle 6s ease-in-out infinite;
        }

        .animate-float-reverse {
          animation: float-reverse 7s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-rotate-slow {
          animation: rotate-slow 20s linear infinite;
        }

        .animate-mobile-bounce {
          animation: mobile-bounce 2s ease-in-out infinite;
        }

        .animate-background-glow {
          animation: background-glow 2s ease-in-out infinite;
        }

        .animate-typewriter {
          animation: typewriter 2s steps(12) infinite;
        }

        @media (max-width: 768px) {
          .animate-nav-slide-in {
            animation: nav-slide-in 0.5s ease-out forwards;
          }

          .animate-mobile-item-slide {
            animation: mobile-item-slide 0.4s ease-out forwards;
          }

          .animate-mobile-menu-slide {
            animation: mobile-menu-slide 0.5s ease-out forwards;
          }

          .animate-mobile-bounce {
            animation: mobile-bounce 1.5s ease-in-out infinite;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-nav-slide-in,
          .animate-mobile-item-slide,
          .animate-mobile-menu-slide,
          .animate-overlay-fade,
          .animate-text-shine,
          .animate-shimmer,
          .animate-profile-glow,
          .animate-float-gentle,
          .animate-float-reverse,
          .animate-pulse-slow,
          .animate-rotate-slow,
          .animate-mobile-bounce,
          .animate-background-glow,
          .animate-typewriter {
            animation: none;
          }
        }
      `}</style>
    </>
  );
};

export default Header;