import React from 'react'
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
import { FaUserShield } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Developer from './Developer'; // adjust path if needed


const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 md:px-16 lg:px-28 py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800/30 via-transparent to-gray-700/30"></div>
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-gray-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gray-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

          {/* About Section */}
          <div className="transform hover:scale-105 transition-all duration-500 ease-out">
            <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-600/50">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white font-serif tracking-wide relative">
                MOON WALKER DANCE STUDIO
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transform origin-left hover:scale-x-150 transition-transform duration-500"></div>
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light mt-6 animate-fade-in">
                With an aim to provide quality dance training and making dance available to all, we run classes for students from age 4 to 84 in various styles.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="transform hover:scale-105 transition-all duration-500 ease-out delay-100">
            <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-600/50">
              <h2 className="text-xl font-bold mb-6 font-serif text-white tracking-wide relative">
                QUICK LINKS
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transform origin-left hover:scale-x-150 transition-transform duration-500"></div>
              </h2>
              <ul className="space-y-3 text-sm md:text-base mt-6">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'About', href: '/About' },
                  { name: 'Events', href: '/events' },
                  { name: 'Gallery', href: '/Gallery' },
                  { name: 'Contact', href: '/contact' },
                ].map((link, index) => (
                  <li key={index} className="transform hover:translate-x-2 transition-all duration-300" style={{ animationDelay: `${index * 100}ms` }}>
                    <a
                      href={link.href}
                      className="inline-flex items-center font-medium text-gray-300 hover:text-yellow-400 transition-all duration-300 group relative overflow-hidden"
                    >
                      <span className="relative z-10 border-b border-transparent group-hover:border-yellow-400 transition-all duration-300 pb-1">
                        {link.name}
                      </span>
                      <div className="absolute inset-0 bg-gray-700/50 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 rounded"></div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="transform hover:scale-105 transition-all duration-500 ease-out delay-200">
            <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-600/50">
              <h2 className="text-xl font-bold mb-6 font-serif text-white tracking-wide relative">
                CONTACT US
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transform origin-left hover:scale-x-150 transition-transform duration-500"></div>
              </h2>
              <ul className="text-gray-300 text-sm md:text-base space-y-4 mt-6">
                <li className="flex items-center gap-3 group hover:translate-x-1 transition-all duration-300 animate-slide-in">
                  <div className="p-2 bg-gray-700 rounded-full group-hover:bg-gray-600 transition-colors duration-300 group-hover:scale-110 transform">
                    <MdPhone className="text-yellow-400 text-lg" />
                  </div>
                  <a
                    href="tel:+91965222202"
                    className="hover:text-yellow-400 transition-colors duration-300 font-medium"
                  >
                    +91 965222202
                  </a>
                </li>
                <li className="flex items-center gap-3 group hover:translate-x-1 transition-all duration-300 animate-slide-in" style={{ animationDelay: '100ms' }}>
                  <div className="p-2 bg-gray-700 rounded-full group-hover:bg-gray-600 transition-colors duration-300 group-hover:scale-110 transform">
                    <MdEmail className="text-yellow-400 text-lg" />
                  </div>
                  <a
                    href="mailto:moonwalkerdancestudio@gmail.com"
                    className="hover:text-yellow-400 transition-colors duration-300 font-medium break-all"
                  >
                    moonwalkerdancestudio@gmail.com
                  </a>
                </li>
              </ul>

              {/* Social Icons */}
              <div className="flex gap-3 mt-8 justify-center md:justify-start">
                <a 
                  href="https://www.facebook.com/chakry.choreographer" 
                  className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 animate-bounce-in"
                >
                  <FaFacebookF className="text-base md:text-lg" />
                </a>
                <a 
                  href="https://www.instagram.com/chakry_choreographer/" 
                  className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-2xl hover:shadow-pink-500/50 animate-bounce-in"
                  style={{ animationDelay: '100ms' }}
                >
                  <FaInstagram className="text-base md:text-lg" />
                </a>
                <a
                  href="https://wa.me/919652222002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-2xl hover:shadow-green-500/50 animate-bounce-in"
                  style={{ animationDelay: '200ms' }}
                >
                  <FaWhatsapp className="text-base md:text-lg" />
                </a>
                <a 
                  href="https://www.youtube.com/channel/UCQxKPY_WhW8kd1dieOct2xw" 
                  className="p-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-2xl hover:shadow-red-500/50 animate-bounce-in"
                  style={{ animationDelay: '300ms' }}
                >
                  <FaYoutube className="text-base md:text-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-16 transform hover:scale-[1.02] transition-all duration-500">
          <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-600/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gray-700 rounded-full">
                <MdLocationOn className="text-yellow-400 text-xl" />
              </div>
              <h2 className="text-xl font-bold font-serif text-white tracking-wide relative">
                OUR LOCATION
                <div className="absolute -bottom-1 left-0 w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
              </h2>
            </div>
            <div className="w-full h-64 md:h-80 overflow-hidden rounded-xl border-2 border-gray-600/50 shadow-inner hover:shadow-lg transition-all duration-500 transform hover:scale-[1.01]">
              <iframe
                title="Our Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2354719055627!2d78.5351132!3d17.3606642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98f2f4c91e59%3A0xd136d40015d698de!2sMoon%20Walker%20Dance%20Studio!5e0!3m2!1sen!2sin!4v1692627289846!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'saturate(1.1) contrast(1.05) brightness(0.9)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="text-center pt-12 mt-12 border-t border-gray-600/50">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-full px-6 py-3 inline-block shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
          <div className="flex items-center justify-center gap-2 text-gray-300 text-sm md:text-base">
            <span>© {new Date().getFullYear()}</span>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="font-serif text-white font-bold tracking-wide">MOON WALKER DANCE STUDIO</span>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span>All rights reserved.</span>
          </div>
        </div>
      </div>
      {/* Admin Panel Icon Button - Fully Bottom Center */}
      <div className="w-full flex justify-center items-center mt-8 mb-2">
        <Link
          to="/admin"
          className="flex items-center justify-center bg-gradient-to-r from-yellow-400 to-orange-400 text-black rounded-full shadow-lg hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 hover:scale-110 border-2 border-yellow-500 p-3"
          title="Admin Panel"
        >
          <FaUserShield className="text-xl" />
        </Link>
      </div>
      </div>
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-in {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.3); }
          50% { transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-slide-in {
          animation: slide-in 0.6s ease-out forwards;
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out forwards;
        }
        
        @media (max-width: 768px) {
          .animate-fade-in {
            animation: fade-in 0.6s ease-out forwards;
          }
          
          .animate-slide-in {
            animation: slide-in 0.4s ease-out forwards;
          }
          
          .animate-bounce-in {
            animation: bounce-in 0.5s ease-out forwards;
          }
        }
      `}</style>
        <Developer />
    </footer>
  )
}

export default Footer