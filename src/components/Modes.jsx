import React, { useEffect, useRef, useState } from "react";

const modes = [
  {
    img: "/dnc1.png",
    title: "Online Classes",
    desc: "Join our interactive online dance sessions from anywhere. Perfect for remote learners and busy schedules.",
  },
  {
    img: "/dnc2.png",
    title: "Studio Classes", 
    desc: "Experience in-person training at our studio with expert instructors and a vibrant dance community.",
  },
  {
    img: "/dnc3.png",
    title: "Workshops",
    desc: "Participate in special workshops to learn new styles, techniques, and choreography from guest artists.",
  },
];

const Modes = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const itemRefs = useRef([]);
  const titleRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observers = [];

    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setTimeout(() => {
                  setVisibleItems(prev => [...prev, index]);
                }, index * 300);
              }
            });
          },
          { threshold: 0.1 }
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen flex flex-col items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-br from-pink-100/40 to-orange-100/40 rounded-full animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-green-100/40 to-blue-100/40 rounded-full animate-pulse-gentle"></div>
      </div>

      {/* Professional black box heading */}
      <div className="relative z-10 flex items-center justify-center mb-20 animate-slideDown">
        <div className="bg-black rounded-2xl shadow-2xl px-8 py-6 md:px-12 md:py-8 flex items-center justify-center transform hover:scale-[1.02] transition-all duration-500 group border-2 border-gray-800 hover:border-gray-600">
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-wider text-center font-sans">
              MODE OF CLASSES
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full group-hover:w-24 transition-all duration-500"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
          </div>
        </div>
      </div>

      {/* Grid with enhanced images and animations */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-12 w-full max-w-8xl mb-20">
        {modes.map((mode, idx) => (
          <div
            key={idx}
            ref={el => itemRefs.current[idx] = el}
            className={`group flex flex-col items-center transform transition-all duration-1200 ${
              visibleItems.includes(idx) 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-20 scale-90'
            }`}
            onMouseEnter={() => setHoveredItem(idx)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {/* Enhanced larger images with clearer visibility */}
            <div className="relative mb-8 overflow-hidden group w-full flex justify-center">
              {/* Larger colored background with better visibility */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 group-hover:from-blue-500/30 group-hover:via-purple-500/30 group-hover:to-pink-500/30 transition-all duration-700 rounded-3xl blur-sm"></div>
              
              {/* Enhanced animated border - larger and more visible */}
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-3xl opacity-60 group-hover:opacity-90 transition-all duration-700 animate-gradient-shift p-1">
                <div className="w-full h-full bg-white rounded-3xl"></div>
              </div>
              
              <img
                src={mode.img}
                alt={mode.title}
                className={`relative w-64 h-48 sm:w-72 sm:h-52 md:w-80 md:h-56 lg:w-96 lg:h-64 xl:w-[400px] xl:h-72 object-cover rounded-2xl transform group-hover:scale-[1.02] transition-all duration-700 shadow-2xl z-10 ${
                  visibleItems.includes(idx) ? 'animate-imageReveal' : ''
                }`}
                style={{
                  animationDelay: `${idx * 400}ms`,
                  animationDuration: '1.5s'
                }}
              />
              
              {/* Minimal overlay for better image clarity */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent group-hover:from-black/10 transition-all duration-700 rounded-2xl z-20"></div>
              
              {/* Subtle shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1200 rounded-2xl z-30"></div>
            </div>

            {/* Animated line with better gradient */}
            <div className={`h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-8 rounded-full transition-all duration-1200 shadow-lg ${
              visibleItems.includes(idx) ? 'w-40' : 'w-0'
            } ${hoveredItem === idx ? 'w-48 shadow-xl' : ''}`} 
            style={{ transitionDelay: `${idx * 300 + 600}ms` }}></div>

            {/* Text content with scroll-based rotation on mobile */}
            <h3 
              ref={el => titleRefs.current[idx] = el}
              className={`text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-700 leading-tight transform font-sans ${
                visibleItems.includes(idx) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-6'
              }`} 
              style={{ 
                transitionDelay: `${idx * 300 + 800}ms`,
                transform: window.innerWidth <= 768 ? `rotate(${scrollY * 0.1 + idx * 5}deg)` : 'none'
              }}
            >
              {mode.title}
            </h3>
            
            <p className={`text-gray-600 text-base sm:text-lg text-center leading-relaxed group-hover:text-gray-700 transition-all duration-700 max-w-sm transform ${
              visibleItems.includes(idx) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-6'
            }`} style={{ transitionDelay: `${idx * 300 + 1000}ms` }}>
              {mode.desc}
            </p>

            {/* Enhanced bottom accent */}
            <div className={`mt-6 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-700 shadow-md ${
              hoveredItem === idx ? 'w-32' : 'w-0'
            }`}></div>
          </div>
        ))}
      </div>

      {/* Enhanced animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(20px); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float-reverse { animation: float-reverse 7s ease-in-out infinite; }
        
        @keyframes pulse-gentle {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        .animate-pulse-gentle { animation: pulse-gentle 4s ease-in-out infinite; }
        
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown { animation: slideDown 1s cubic-bezier(.4,0,.2,1) forwards; }
        
        @keyframes imageReveal {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-imageReveal { animation: imageReveal 1.2s cubic-bezier(.4,0,.2,1) forwards; }
        
        @keyframes gradient-shift {
          0%, 100% { opacity: 0.6; transform: rotate(0deg); }
          50% { opacity: 0.9; transform: rotate(180deg); }
        }
        .animate-gradient-shift { animation: gradient-shift 3s infinite; }
        
        /* Mobile scroll rotation effect */
        @media (max-width: 768px) {
          .animate-slideDown { animation: slideDown 0.8s cubic-bezier(.4,0,.2,1) forwards; }
          
          h3 {
            transition: transform 0.1s ease-out;
          }
          
          .group:hover h3 {
            animation: mobileRotate 2s ease-in-out infinite;
          }
          
          @keyframes mobileRotate {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(2deg); }
            75% { transform: rotate(-2deg); }
          }
        }
        
        /* Enhanced hover effects */
        @media (min-width: 769px) {
          .group:hover {
            transform: translateY(-5px) scale(1.02);
          }
        }
      `}</style>
    </div>
  );
};

export default Modes;