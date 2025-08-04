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
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-gradient-to-r from-black to-gray-800 backdrop-blur-md shadow-lg' 
          : 'bg-gradient-to-r from-black to-gray-800 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between h-24 lg:h-28">
  {/* Left side: Profile and Title */}
  <div className="flex items-center space-x-4 group">
  <img 
    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face" 
    alt="Profile" 
    className="w-14 h-14 lg:w-16 lg:h-16 rounded-full object-cover border-2 border-slate-600 transform group-hover:scale-110 transition-transform duration-200"
  />
  <div className="flex flex-col">
    <span className="text-white text-lg lg:text-2xl font-display font-bold tracking-wide">
      <span className="hidden md:inline font-mexon text-yellow-300">MOON WALKER</span>
      <span className="md:hidden font-mexon text-yellow-300">MOON WALKER</span>
    </span>
    <span className="text-slate-300 text-xs lg:text-sm font-body font-medium tracking-widest uppercase opacity-90">
      <span className="hidden sm:inline font-coldiac text-yellow-100">Dance Studio</span>
      <span className="sm:hidden font-coldiac text-yellow-100">Dance Studio</span>
    </span>
  </div>
</div>


  {/* Right side: Nav & Button */}
  <div className="flex items-center space-x-8">
    <nav className="hidden md:flex items-center space-x-8">
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="group relative px-4 py-2 rounded-lg text-slate-300 hover:text-white transition-all duration-200 hover:bg-slate-700/50"
        >
          <span className="font-boogaloo text-xl lg:text-2xl">{item.name}</span>
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-400 group-hover:w-full transition-all duration-300"></div>
        </a>
      ))}
    </nav>

    <button
      onClick={toggleMenu}
      className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500"
      aria-label="Toggle navigation menu"
    >
      <div className="relative w-6 h-6">
        <Menu 
          className={`absolute inset-0 w-6 h-6 transform transition-all duration-300 ${
            isMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
          }`} 
        />
        <X 
          className={`absolute inset-0 w-6 h-6 transform transition-all duration-300 ${
            isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'
          }`} 
        />
      </div>
    </button>
  </div>
</div>


        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-4 space-y-1">
            {navItems.map((item, index) => {
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`group flex items-center px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-200 transform hover:translate-x-1 ${
                    isMenuOpen ? 'animate-in slide-in-from-right' : ''
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animationDuration: '300ms',
                    animationFillMode: 'both'
                  }}
                >
                  <span className="font-medium">{item.name}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-[-1]"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;