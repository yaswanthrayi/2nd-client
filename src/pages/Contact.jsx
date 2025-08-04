import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { 
  MessageSquare, 
  Facebook, 
  Instagram, 
  Youtube, 
  Phone, 
  Mail, 
  MapPin,
  Clock,
  Send
} from 'lucide-react';

const Contact = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [scrollY, setScrollY] = useState(0);
  const itemRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const observers = [];
    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setTimeout(() => {
                  setVisibleItems(prev => [...prev, index]);
                }, index * 150);
              }
            });
          },
          { threshold: 0.1 }
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      observers.forEach(observer => observer.disconnect());
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const contactLinks = [
    { 
      name: 'WhatsApp', 
      href: 'https://wa.me/15551234567', 
      icon: MessageSquare, 
      gradient: 'from-emerald-400 to-teal-500',
      text: '+1 (555) 123-4567',
      description: 'Quick chat support'
    },
    { 
      name: 'Facebook', 
      href: 'https://facebook.com/moonwalkerdance', 
      icon: Facebook, 
      gradient: 'from-blue-500 to-indigo-600',
      text: '@moonwalkerdance',
      description: 'Follow our updates'
    },
    { 
      name: 'Instagram', 
      href: 'https://instagram.com/moonwalkerdance', 
      icon: Instagram, 
      gradient: 'from-pink-500 to-purple-600',
      text: '@moonwalkerdance',
      description: 'See our moves'
    },
    { 
      name: 'YouTube', 
      href: 'https://youtube.com/moonwalkerdance', 
      icon: Youtube, 
      gradient: 'from-red-500 to-pink-600',
      text: 'Moon Walker Dance Studio',
      description: 'Watch tutorials'
    },
    { 
      name: 'Phone', 
      href: 'tel:+15551234567', 
      icon: Phone, 
      gradient: 'from-cyan-400 to-blue-500',
      text: '+1 (555) 123-4567',
      description: 'Call us directly'
    },
    { 
      name: 'Email', 
      href: 'mailto:info@moonwalkerdance.com', 
      icon: Mail, 
      gradient: 'from-violet-400 to-purple-600',
      text: 'info@moonwalkerdance.com',
      description: 'Send us a message'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <Header />
      
      {/* Hero Section with Dynamic Parallax */}
      <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Contact Us"
            className="w-full h-full object-cover transform scale-110"
            style={{
              transform: `translateY(${scrollY * 0.5}px) scale(1.1)`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-blue-900/50 to-purple-900/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl mx-auto transform animate-hero-entrance">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-shift">
              REACH OUT
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-up">
              Ready to start your dance journey? Connect with Moon Walker Dance Studio 
              and let's create magic together on the dance floor!
            </p>
            <div className="mt-8 flex justify-center">
              <Send className="w-8 h-8 text-cyan-400 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="py-16 lg:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Left Side - Contact Links */}
            <div className="space-y-8">
              <div 
                ref={el => itemRefs.current[0] = el}
                className={`transform transition-all duration-1000 ${
                  visibleItems.includes(0) 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-10 scale-95'
                }`}
              >
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Connect With Us
                </h2>
                <div className="space-y-6">
                  {contactLinks.map((contact, index) => {
                    const IconComponent = contact.icon;
                    return (
                      <div
                        key={index}
                        ref={el => itemRefs.current[index + 1] = el}
                        className={`transform transition-all duration-700 ${
                          visibleItems.includes(index + 1) 
                            ? 'opacity-100 translate-x-0 rotate-0' 
                            : 'opacity-0 -translate-x-10 rotate-3'
                        }`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <a
                          href={contact.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-4 p-6 bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-2xl hover:from-gray-700/90 hover:to-gray-800/90 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 border border-gray-700/50 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-400/20"
                        >
                          <div className={`w-16 h-16 bg-gradient-to-r ${contact.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 relative overflow-hidden`}>
                            <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <IconComponent 
                              size={28} 
                              className="text-white relative z-10 group-hover:rotate-12 transition-transform duration-300" 
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-bold text-white text-xl group-hover:text-cyan-300 transition-colors duration-300">
                                {contact.name}
                              </h3>
                              <div className="w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-8 transition-all duration-500"></div>
                            </div>
                            <p className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                              {contact.text}
                            </p>
                            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                              {contact.description}
                            </p>
                          </div>
                          <div className="opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                            <Send className="w-5 h-5 text-cyan-400" />
                          </div>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Side - Company Info and Map */}
            <div className="space-y-8">
              {/* Company Information */}
              <div 
                ref={el => itemRefs.current[7] = el}
                className={`text-center lg:text-left transform transition-all duration-1000 ${
                  visibleItems.includes(7) 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-10 scale-95'
                }`}
              >
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-shift">
                  MOON WALKER
                </h2>
                <p className="text-xl text-cyan-300 mb-6 font-semibold">DANCE STUDIO</p>
                <div className="space-y-6 text-gray-300">
                  <div className="flex items-start gap-4 justify-center lg:justify-start group">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <MapPin size={24} className="text-white" />
                    </div>
                    <div className="text-lg">
                      <p className="font-bold text-white text-xl mb-2">Visit Our Studio</p>
                      <p className="group-hover:text-cyan-300 transition-colors duration-300">123 Dance Street</p>
                      <p className="group-hover:text-cyan-300 transition-colors duration-300">New York, NY 10001</p>
                      <p className="group-hover:text-cyan-300 transition-colors duration-300">United States</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div 
                ref={el => itemRefs.current[8] = el}
                className={`bg-gradient-to-r from-gray-800/90 to-gray-900/90 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-gray-700/50 transform transition-all duration-1000 ${
                  visibleItems.includes(8) 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-10 scale-95'
                }`}
              >
                <h3 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Find Our Studio
                </h3>
                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl border-2 border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 group">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1273080949327!2d-74.00594798459418!3d40.71278337933041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316e44bb85%3A0x7e36a4e4e72c3a65!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1643723400000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Moon Walker Dance Studio Location"
                    className="rounded-2xl filter group-hover:saturate-110 transition-all duration-500"
                  ></iframe>
                </div>
                
                {/* Studio Hours */}
                <div className="mt-8 p-6 bg-gradient-to-r from-gray-700/60 to-gray-800/60 rounded-2xl border border-gray-600/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                      <Clock size={20} className="text-white" />
                    </div>
                    <h4 className="font-bold text-white text-xl">Studio Hours</h4>
                  </div>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex justify-between items-center hover:text-cyan-300 transition-colors duration-300">
                      <span>Monday - Friday:</span>
                      <span className="font-semibold">9:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center hover:text-cyan-300 transition-colors duration-300">
                      <span>Saturday:</span>
                      <span className="font-semibold">10:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center hover:text-cyan-300 transition-colors duration-300">
                      <span>Sunday:</span>
                      <span className="font-semibold">12:00 PM - 6:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        @keyframes hero-entrance {
          0% {
            opacity: 0;
            transform: translateY(60px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fade-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes mobile-bounce {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.05);
          }
        }

        @keyframes mobile-wiggle {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(2deg);
          }
          75% {
            transform: rotate(-2deg);
          }
        }

        .animate-hero-entrance {
          animation: hero-entrance 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-fade-up {
          animation: fade-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards;
          opacity: 0;
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }

        @media (max-width: 768px) {
          .animate-hero-entrance {
            animation: hero-entrance 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }

          .animate-fade-up {
            animation: fade-up 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards;
          }

          /* Mobile specific animations */
          .group:hover {
            animation: mobile-bounce 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .group:active {
            animation: mobile-wiggle 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }

          /* Touch feedback for mobile */
          .group:active {
            transform: scale(0.98) !important;
          }
        }

        @media (max-width: 640px) {
          .animate-hero-entrance {
            animation: hero-entrance 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }

          /* Enhanced mobile animations */
          .group {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .group:hover {
            animation: mobile-bounce 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;