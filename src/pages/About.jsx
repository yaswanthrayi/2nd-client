import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Star, Users, Award, Heart, Sparkles, Zap, Music } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const stats = [
    { icon: Users, number: '500+', label: 'Happy Dancers', color: 'from-cyan-400 to-blue-500' },
    { icon: Star, number: '10+', label: 'Years Experience', color: 'from-yellow-400 to-orange-500' },
    { icon: Award, number: '50+', label: 'Awards Won', color: 'from-pink-400 to-rose-500' },
    { icon: Heart, number: '1000+', label: 'Dreams Fulfilled', color: 'from-purple-400 to-indigo-500' }
  ];

  const features = [
    { text: 'Professional Training', color: 'from-cyan-400 to-blue-500' },
    { text: 'All Skill Levels', color: 'from-yellow-400 to-orange-500' },
    { text: 'Community Focus', color: 'from-pink-400 to-rose-500' },
    { text: 'Modern Facilities', color: 'from-purple-400 to-indigo-500' }
  ];

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900 relative overflow-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/mj.jpg"
            alt="Disco Dance Floor"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-indigo-900/80 to-pink-900/90"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x glow-text">
            About Us
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up animate-bounce-subtle" style={{animationDelay: '0.5s'}}>
            Where passion meets rhythm and dreams come alive ✨
          </p>
          <div className="flex justify-center space-x-2 mb-8">
            <div className="w-8 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="w-8 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 animate-pulse" style={{animationDelay: '1.2s'}}></div>
            <div className="w-8 h-1 bg-gradient-to-r from-pink-400 to-rose-500 animate-pulse" style={{animationDelay: '1.4s'}}></div>
            <div className="w-8 h-1 bg-gradient-to-r from-purple-400 to-indigo-500 animate-pulse" style={{animationDelay: '1.6s'}}></div>
          </div>
          
        </div>
      </section>

      {/* Studio Showcase */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div 
            id="studio-showcase"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 transform ${
              isVisible['studio-showcase'] 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="relative inline-block mb-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-yellow-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                Our Studio
              </h2>
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/10 via-yellow-400/10 to-pink-400/10 blur-2xl animate-pulse"></div>
            </div>
            
            <div className="relative group max-w-4xl mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 via-yellow-400/20 to-pink-400/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse"></div>
              <img 
                src="/moon-walker.jpg"
                alt="Dance Studio Interior"
                className="relative w-full h-96 md:h-[500px] object-cover rounded-3xl shadow-2xl shadow-purple-500/30 transition-all duration-500 group-hover:scale-105 group-hover:shadow-cyan-500/40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                  State-of-the-Art Facilities
                </h3>
                <p className="text-lg">Professional sound system, mirror walls, and premium dance floors</p>
              </div>
              
              {/* Floating Icons */}
              <div className="absolute top-4 right-4 animate-bounce-slow">
                <Sparkles className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="absolute bottom-4 left-4 animate-bounce-slow" style={{animationDelay: '1s'}}>
                <Music className="w-8 h-8 text-cyan-400" />
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div 
            id="stats"
            data-animate
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-20 transition-all duration-1000 transform ${
              isVisible['stats'] 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-10 opacity-0'
            }`}
          >
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center group relative"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <div className="relative inline-block mb-4">
                  <div className={`absolute -inset-4 bg-gradient-to-r ${stat.color} opacity-20 rounded-full blur-xl group-hover:opacity-40 transition-opacity duration-300 animate-pulse`}></div>
                  <stat.icon className="relative w-12 h-12 md:w-16 md:h-16 text-white group-hover:scale-125 transition-all duration-300 animate-bounce-subtle" />
                </div>
                <div className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 animate-count-up`}>
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium text-sm md:text-base">
                  {stat.label}
                </div>
                
                {/* Mobile Sparkle Effect */}
                <div className="md:hidden absolute -top-2 -right-2 animate-ping">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${stat.color}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/60 to-pink-900/60 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #22d3ee 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, #f59e0b 0%, transparent 50%),
                             radial-gradient(circle at 75% 25%, #ec4899 0%, transparent 50%),
                             radial-gradient(circle at 25% 75%, #8b5cf6 0%, transparent 50%)`,
            backgroundSize: '400px 400px',
            animation: 'moveBackground 20s ease-in-out infinite'
          }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div 
              id="story-content"
              data-animate
              className={`space-y-6 transition-all duration-1000 transform ${
                isVisible['story-content'] 
                  ? 'translate-x-0 opacity-100' 
                  : '-translate-x-10 opacity-0'
              }`}
            >
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-yellow-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                  Our Story
                </h2>
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/10 via-yellow-400/10 to-pink-400/10 blur-xl animate-pulse"></div>
              </div>
              
              <div className="flex space-x-2 mb-6">
                <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse"></div>
                <div className="w-8 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>
              
              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-300 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                  Founded on July 5th, 2013 by Mr. Chakry Jackson, Moon Walker Dance Studio (MWDS) was born from a vision to inspire and elevate dancers through dedication, creativity, and passion. What began as a personal mission has grown into a thriving dance community celebrating over 10 successful years and training 10,000+ students.
                </p>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                  Mr. Chakry Jackson, a dynamic dancer himself, trained under the renowned choreographer Mr. Harinath Reddy Garu, the winner of the prestigious "D" Programme. His mentorship laid the foundation for MWDS’s unique blend of discipline and flair.


                </p>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                  At MWDS, we take immense pride in our students’ achievements — many of whom have been selected for top-tier dance shows such as ‘D’ Juniors and other major competitions, showcasing the studio's reputation for excellence.
                </p>
                <h3 className="text-base md:text-lg text-gray-300 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                With expert instruction, a supportive atmosphere, and a legacy built on passion, Moon Walker Dance Studio continues to shape the stars of tomorrow — one move at a time.
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3 pt-4">
                {features.map((feature, index) => (
                  <span 
                    key={index}
                    className={`px-4 py-2 bg-gradient-to-r ${feature.color} bg-opacity-20 border border-current rounded-full text-white text-sm font-medium hover:scale-105 transition-all duration-300 animate-fade-in-up hover:shadow-lg`}
                    style={{
                      animationDelay: `${0.8 + index * 0.1}s`,
                      background: `linear-gradient(45deg, ${feature.color.includes('cyan') ? 'rgba(34, 211, 238, 0.2)' : 
                                                           feature.color.includes('yellow') ? 'rgba(251, 191, 36, 0.2)' :
                                                           feature.color.includes('pink') ? 'rgba(244, 114, 182, 0.2)' :
                                                           'rgba(168, 85, 247, 0.2)'})`,
                      borderColor: feature.color.includes('cyan') ? '#22d3ee' : 
                                  feature.color.includes('yellow') ? '#fbbf24' :
                                  feature.color.includes('pink') ? '#f472b6' :
                                  '#a855f7'
                    }}
                  >
                    {feature.text}
                  </span>
                ))}
              </div>
            </div>

            {/* Image */}
            <div 
              id="story-image"
              data-animate
              className={`relative group transition-all duration-1000 transform ${
                isVisible['story-image'] 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-10 opacity-0'
              }`}
            >
              <div className="relative overflow-hidden rounded-3xl">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/30 via-pink-400/30 to-cyan-400/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse"></div>
                <img 
                  src="/moon-walker-full.jpg"
                  alt="Dance Instructor Teaching"
                  className="relative w-full h-96 md:h-[500px] object-cover transition-transform duration-500 group-hover:scale-110 rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/40 to-pink-600/40 group-hover:opacity-75 transition-opacity duration-300 rounded-3xl"></div>
                
                {/* Floating Elements */}
                <div className="absolute top-6 right-6 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-yellow-400/30 to-orange-500/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-yellow-400/50 group-hover:scale-125 transition-transform duration-300 animate-bounce-slow">
                  <Heart className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />
                </div>
                <div className="absolute bottom-6 left-6 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-pink-400/30 to-purple-500/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-pink-400/50 group-hover:scale-125 transition-transform duration-300 animate-bounce-slow" style={{animationDelay: '1s'}}>
                  <Star className="w-8 h-8 md:w-10 md:h-10 text-pink-400" />
                </div>
                <div className="absolute top-1/2 left-6 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-cyan-400/50 group-hover:scale-125 transition-transform duration-300 animate-bounce-slow" style={{animationDelay: '2s'}}>
                  <Sparkles className="w-4 h-4 md:w-6 md:h-6 text-cyan-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;