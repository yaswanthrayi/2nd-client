import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight, Music, Zap, Heart, Star, Sparkles, Crown, Flame, Disc3 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';
import hero4 from '../assets/hero4.jpg';
import hero5 from '../assets/hero5.jpg';

const Home = () => {
  // Hero Carousel State
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Disco color palettes that change dynamically
  const discoColors = [
    'from-pink-500 via-purple-500 to-cyan-500',
    'from-yellow-400 via-orange-500 to-red-500',
    'from-green-400 via-blue-500 to-purple-600',
    'from-cyan-400 via-pink-500 to-yellow-400',
    'from-purple-600 via-red-500 to-orange-400',
    'from-blue-500 via-cyan-400 to-green-400',
    'from-rose-500 via-fuchsia-500 to-indigo-500',
    'from-emerald-400 via-teal-500 to-blue-600'
  ];

  const heroImages = [
    { src: hero1, title: "FEEL THE BEAT", subtitle: "Experience the rhythm of hip hop" },
    { src: hero2, title: "MASTER YOUR MOVES", subtitle: "Professional training for all levels" },
    { src: hero3, title: "STREET CULTURE", subtitle: "Authentic urban dance experience" },
    { src: hero4, title: "EXPRESS YOURSELF", subtitle: "Contemporary meets hip hop" },
    { src: hero5, title: "DANCE TOGETHER", subtitle: "Join our vibrant community" },
  ];

  const stats = [
    {
      number: "10000+",
      text: "Students trained in the art of dance, mastering rhythm and movement",
      icon: <Crown className="w-8 h-8" />
    },
    {
      number: "50+", 
      text: "With years of experience, our professional choreographers and instructors have completed a wide range of events.",
      icon: <Star className="w-8 h-8" />
    },
    {
      number: "15+",
      text: "Years of excellence in dance education and performance training",
      icon: <Flame className="w-8 h-8" />
    }
  ];

  const courses = [
    {
      icon: <Music className="w-8 h-8" />,
      title: "Zumba Essentials",
      description: "Energize your fitness journey with our fun and dynamic beginner Zumba program. Learn easy-to-follow dance routines, improve coordination, and boost your cardio.",
      features: ["Beginner Friendly", "45 Day Program", "Certified Zumba Instructors"],
      image: "/zumba-1.jpg",
      gradient: "from-pink-500 via-purple-600 to-indigo-700"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Western Dance Foundations",
      description: "Step into the rhythm of Western dance with a blend of stylized footwork, fluid motion, and expressive choreography. Develop grace, control, and confidence.",
      features: ["Intermediate Level", "Performance Ready", "Technique & Conditioning"],
      image: "/western-2.png",
      gradient: "from-yellow-400 via-orange-500 to-red-600"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "MJ Style Dance",
      description: "Master the iconic moves of Michael Jackson — from the moonwalk to sharp isolations and dynamic footwork. Learn to embody his rhythm, precision, and stage charisma.",
      features: ["Signature MJ Moves", "All Levels", "Performance & Musicality Focus"],
      image: "/mj.jpg",
      gradient: "from-emerald-400 via-teal-500 to-cyan-600"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Advanced Choreography",
      description: "Take your skills to the next level with complex routines, advanced techniques, and performance preparation.",
      features: ["Advanced Level", "Choreography", "Performance Team"],
      image: "/advance.jpg",
      gradient: "from-violet-500 via-purple-600 to-fuchsia-700"
    }
  ];

  // Carousel Functions
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  // Live color changing effect
  useEffect(() => {
    const colorInterval = setInterval(() => {
      setCurrentColorIndex((prev) => (prev + 1) % discoColors.length);
    }, 2000);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(colorInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [discoColors.length]);

  return (
    <div className="min-h-screen flex flex-col bg-black relative overflow-hidden pt-16">
      {/* Animated Disco Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Main disco gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${discoColors[currentColorIndex]} opacity-15 transition-all duration-2000 ease-in-out`}></div>
        
        {/* Floating disco elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full blur-xl animate-disco-float opacity-20"></div>
        <div className="absolute top-1/3 right-20 w-40 h-40 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-2xl animate-disco-float-delayed opacity-15"></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl animate-disco-pulse opacity-25"></div>
        
        {/* Sparkle effects */}
        <div className="absolute top-1/4 left-1/2 animate-sparkle-1">
          <Sparkles className="w-6 h-6 text-yellow-400 opacity-60" />
        </div>
        <div className="absolute top-1/2 left-1/4 animate-sparkle-2">
          <Sparkles className="w-4 h-4 text-pink-400 opacity-50" />
        </div>
        <div className="absolute bottom-1/3 right-1/3 animate-sparkle-3">
          <Sparkles className="w-5 h-5 text-cyan-400 opacity-70" />
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 144 }, (_, i) => (
              <div 
                key={i} 
                className="border border-white/20 animate-grid-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <Header />
      
      <main className="flex-1 relative z-10">
        {/* Hero Carousel Section */}
        <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container flex">
              {heroImages.map((image, index) => (
                <div key={index} className="embla__slide flex-[0_0_100%] relative">
                  <div className="relative w-full h-[70vh] md:h-[80vh]">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-700 scale-105"
                      style={{
                        transform: `translateY(${scrollY * 0.3}px) scale(1.05)`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
                    <div className={`absolute inset-0 bg-gradient-to-r ${discoColors[currentColorIndex]} opacity-30 transition-all duration-2000 mix-blend-overlay`} />
                    
                    {/* Disco light effects */}
                    <div className="absolute top-0 left-0 w-full h-full">
                      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-40 animate-disco-light blur-lg"></div>
                      <div className="absolute top-32 right-20 w-16 h-16 bg-pink-500 rounded-full opacity-30 animate-disco-light-delayed blur-lg"></div>
                      <div className="absolute bottom-32 left-1/3 w-24 h-24 bg-cyan-400 rounded-full opacity-25 animate-disco-light-reverse blur-lg"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

{/* Enhanced Navigation Buttons */}
<button
  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black backdrop-blur-sm text-white p-4 rounded-full hover:scale-125 transition-all duration-500 md:p-4 p-3 border-2 border-white/30"
  onClick={scrollPrev}
>
  <ChevronLeft size={28} className="text-white md:w-7 md:h-7 w-5 h-5" />
</button>
<button
  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black backdrop-blur-sm text-white p-4 rounded-full hover:scale-125 transition-all duration-500 md:p-4 p-3 border-2 border-white/30"
  onClick={scrollNext}
>
  <ChevronRight size={28} className="text-white md:w-7 md:h-7 w-5 h-5" />
</button>
        </div>

        {/* Enhanced Stats Section */}
        <section className="py-20 bg-gradient-to-br from-black via-gray-900/50 to-black relative overflow-hidden">
          {/* Background Animation */}
          <div className={`absolute inset-0 bg-gradient-to-r ${discoColors[currentColorIndex]} opacity-10 animate-pulse transition-all duration-2000`}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className={`text-5xl md:text-7xl font-black leading-tight bg-gradient-to-r ${discoColors[currentColorIndex]} bg-clip-text text-transparent animate-disco-text transition-all duration-2000 mb-6 tracking-wider`}>
                OUR ACHIEVEMENTS
              </h2>
              <div className="flex justify-center space-x-4">
                <Sparkles className="w-8 h-8 text-yellow-400 animate-sparkle-dance" />
                <Crown className="w-8 h-8 text-pink-400 animate-bounce" />
                <Sparkles className="w-8 h-8 text-cyan-400 animate-sparkle-dance-delayed" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center space-y-6 p-10 rounded-3xl bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-900/90 backdrop-blur-xl border-2 border-gray-700/50 hover:border-transparent hover:scale-110 hover:rotate-1 transition-all duration-700 animate-bounce-in relative overflow-hidden group"
                  style={{ 
                    animationDelay: `${index * 0.3}s`,
                    boxShadow: `0 0 30px ${discoColors[currentColorIndex].includes('pink') ? 'rgba(236, 72, 153, 0.3)' : 'rgba(59, 130, 246, 0.3)'}`
                  }}
                >
                  {/* Animated background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${discoColors[currentColorIndex]} opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
                  
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${discoColors[currentColorIndex]} text-white group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-disco-glow relative z-10`}>
                    {stat.icon}
                  </div>

                  <div className={`text-6xl md:text-8xl font-black bg-gradient-to-r ${discoColors[currentColorIndex]} bg-clip-text text-transparent group-hover:animate-bounce transition-all duration-2000 relative z-10`}>
                    {stat.number}
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg group-hover:text-white transition-colors duration-300 relative z-10 font-medium">
                    {stat.text}
                  </p>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce opacity-60"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-pulse opacity-40"></div>
                  
                  {/* Sparkle effect */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Sparkles className="w-4 h-4 text-yellow-400 animate-sparkle-dance" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Courses Section */}
        <section id="courses" className="py-24 bg-gradient-to-b from-black to-gray-900/50 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/10 rounded-full animate-disco-float blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full animate-disco-pulse blur-3xl"></div>
            <div className={`absolute inset-0 bg-gradient-to-r ${discoColors[currentColorIndex]} opacity-5 transition-all duration-2000`}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
              <div className="flex items-center justify-center mb-6">
                <Music className="w-12 h-12 text-yellow-400 animate-bounce mr-4" />
                <h2 className={`text-5xl md:text-8xl font-black bg-gradient-to-r ${discoColors[currentColorIndex]} bg-clip-text text-transparent animate-disco-text transition-all duration-2000 tracking-wider`}>
                  DANCE COURSES
                </h2>
                <Disc3 className="w-12 h-12 text-pink-400 animate-spin ml-4" />
              </div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-medium leading-relaxed">
                Discover your passion with our diverse range of dance programs designed for all skill levels
              </p>
              <div className="mt-6 flex justify-center space-x-4">
                <Sparkles className="w-6 h-6 text-yellow-400 animate-sparkle-dance" />
                <Star className="w-6 h-6 text-pink-400 animate-pulse" />
                <Sparkles className="w-6 h-6 text-cyan-400 animate-sparkle-dance-delayed" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/95 via-black/90 to-gray-900/95 backdrop-blur-xl border-2 border-gray-700/50 hover:border-transparent hover:scale-105 hover:-rotate-1 transition-all duration-700 animate-bounce-in shadow-2xl"
                  style={{ 
                    animationDelay: `${index * 0.2}s`,
                    boxShadow: `0 0 40px ${course.gradient.includes('pink') ? 'rgba(236, 72, 153, 0.3)' : 'rgba(59, 130, 246, 0.3)'}`
                  }}
                >
                  {/* Course Image */}
                  <div className="relative h-48 overflow-hidden rounded-t-3xl">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-60 transition-all duration-500 group-hover:opacity-40`}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    
                    {/* Floating icon on image */}
                    <div className={`absolute top-4 right-4 p-3 rounded-2xl bg-gradient-to-r ${course.gradient} text-white group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-disco-glow`}>
                      {course.icon}
                    </div>
                    
                    {/* Sparkle effects on image */}
                    <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Sparkles className="w-5 h-5 text-yellow-400 animate-sparkle-dance" />
                    </div>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <Sparkles className="w-4 h-4 text-pink-400 animate-sparkle-dance-delayed" />
                    </div>
                  </div>

                  {/* Enhanced Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-5 group-hover:opacity-15 transition-all duration-500`} />
                  
                  {/* Dancing Particles */}
                  <div className="absolute top-52 right-4 w-3 h-3 bg-yellow-400 rounded-full animate-bounce opacity-60"></div>
                  <div className="absolute bottom-8 left-4 w-2 h-2 bg-pink-400 rounded-full animate-pulse opacity-40"></div>
                  
                  {/* Content */}
                  <div className="relative p-8 space-y-6">
                    {/* Title */}
                    <h3 className={`text-2xl font-black text-white group-hover:bg-gradient-to-r group-hover:${course.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 group-hover:scale-105`}>
                      {course.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-base leading-relaxed group-hover:text-white transition-colors duration-300 font-medium">
                      {course.description}
                    </p>

                    {/* Enhanced Features */}
                    <div className="space-y-3">
                      {course.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex}
                          className="flex items-center space-x-3 text-sm group-hover:scale-105 transition-transform duration-300"
                          style={{ transitionDelay: `${featureIndex * 0.1}s` }}
                        >
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${course.gradient} animate-pulse`} />
                          <span className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Floating Animation Elements */}
                  <div className={`absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-r ${course.gradient} opacity-10 group-hover:animate-spin group-hover:opacity-20 transition-all duration-500`} />
                  <div className={`absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-r ${course.gradient} opacity-5 group-hover:animate-bounce group-hover:opacity-15 transition-all duration-500`} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        @keyframes disco-float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          33% {
            transform: translateY(-20px) rotate(120deg) scale(1.1);
          }
          66% {
            transform: translateY(10px) rotate(240deg) scale(0.9);
          }
        }

        @keyframes disco-float-delayed {
          0%, 100% {
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          33% {
            transform: translateY(15px) rotate(-120deg) scale(0.8);
          }
          66% {
            transform: translateY(-25px) rotate(-240deg) scale(1.2);
          }
        }

        @keyframes disco-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.25;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.4;
          }
        }

        @keyframes disco-light {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.4;
          }
          25% {
            transform: scale(1.3) rotate(90deg);
            opacity: 0.7;
          }
          50% {
            transform: scale(0.8) rotate(180deg);
            opacity: 0.2;
          }
          75% {
            transform: scale(1.1) rotate(270deg);
            opacity: 0.5;
          }
        }

        @keyframes disco-light-delayed {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.3;
          }
          25% {
            transform: scale(0.7) rotate(-90deg);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.4) rotate(-180deg);
            opacity: 0.1;
          }
          75% {
            transform: scale(1.2) rotate(-270deg);
            opacity: 0.4;
          }
        }

        @keyframes disco-light-reverse {
          0%, 100% {
            transform: scale(1) rotate(360deg);
            opacity: 0.25;
          }
          50% {
            transform: scale(1.5) rotate(180deg);
            opacity: 0.5;
          }
        }

        @keyframes sparkle-1 {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.6;
          }
          25% {
            transform: scale(1.5) rotate(90deg);
            opacity: 1;
          }
          50% {
            transform: scale(0.5) rotate(180deg);
            opacity: 0.3;
          }
          75% {
            transform: scale(1.2) rotate(270deg);
            opacity: 0.8;
          }
        }

        @keyframes sparkle-2 {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.5;
          }
          33% {
            transform: scale(0.8) rotate(120deg);
            opacity: 1;
          }
          66% {
            transform: scale(1.3) rotate(240deg);
            opacity: 0.2;
          }
        }

        @keyframes sparkle-3 {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.7;
          }
          20% {
            transform: scale(1.4) rotate(72deg);
            opacity: 0.1;
          }
          40% {
            transform: scale(0.6) rotate(144deg);
            opacity: 1;
          }
          60% {
            transform: scale(1.1) rotate(216deg);
            opacity: 0.4;
          }
          80% {
            transform: scale(1.3) rotate(288deg);
            opacity: 0.8;
          }
        }

        @keyframes sparkle-dance {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.8;
          }
          25% {
            transform: scale(1.3) rotate(90deg);
            opacity: 1;
          }
          50% {
            transform: scale(0.7) rotate(180deg);
            opacity: 0.6;
          }
          75% {
            transform: scale(1.1) rotate(270deg);
            opacity: 0.9;
          }
        }

        @keyframes sparkle-dance-delayed {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.6;
          }
          25% {
            transform: scale(0.8) rotate(-90deg);
            opacity: 1;
          }
          50% {
            transform: scale(1.4) rotate(-180deg);
            opacity: 0.4;
          }
          75% {
            transform: scale(1.2) rotate(-270deg);
            opacity: 0.8;
          }
        }

        @keyframes disco-text {
          0%, 100% {
            background-position: 0% 50%;
            transform: scale(1);
          }
          50% {
            background-position: 100% 50%;
            transform: scale(1.02);
          }
        }

        @keyframes disco-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(236, 72, 153, 0.5);
          }
          25% {
            box-shadow: 0 0 30px rgba(34, 197, 94, 0.5);
          }
          50% {
            box-shadow: 0 0 25px rgba(59, 130, 246, 0.5);
          }
          75% {
            box-shadow: 0 0 35px rgba(245, 158, 11, 0.5);
          }
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: translateY(60px) scale(0.9) rotate(-5deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1) rotate(0deg);
          }
        }

        @keyframes fade-up {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes grid-pulse {
          0%, 100% {
            opacity: 0.05;
          }
          50% {
            opacity: 0.15;
          }
        }

        .animate-disco-float {
          animation: disco-float 6s ease-in-out infinite;
        }

        .animate-disco-float-delayed {
          animation: disco-float-delayed 8s ease-in-out infinite;
        }

        .animate-disco-pulse {
          animation: disco-pulse 4s ease-in-out infinite;
        }

        .animate-disco-light {
          animation: disco-light 3s linear infinite;
        }

        .animate-disco-light-delayed {
          animation: disco-light-delayed 4s linear infinite;
        }

        .animate-disco-light-reverse {
          animation: disco-light-reverse 5s linear infinite;
        }

        .animate-sparkle-1 {
          animation: sparkle-1 4s ease-in-out infinite;
        }

        .animate-sparkle-2 {
          animation: sparkle-2 5s ease-in-out infinite;
        }

        .animate-sparkle-3 {
          animation: sparkle-3 3s ease-in-out infinite;
        }

        .animate-sparkle-dance {
          animation: sparkle-dance 2s ease-in-out infinite;
        }

        .animate-sparkle-dance-delayed {
          animation: sparkle-dance-delayed 2.5s ease-in-out infinite;
        }

        .animate-disco-text {
          background-size: 200% 200%;
          animation: disco-text 3s ease-in-out infinite;
        }

        .animate-disco-glow {
          animation: disco-glow 4s ease-in-out infinite;
        }

        .animate-bounce-in {
          animation: bounce-in 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          opacity: 0;
        }

        .animate-fade-up {
          animation: fade-up 1s cubic-bezier(0.4, 0, 0.2, 1) 0.5s forwards;
          opacity: 0;
        }

        .animate-grid-pulse {
          animation: grid-pulse 3s ease-in-out infinite;
        }

        .duration-2000 {
          transition-duration: 2000ms;
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .animate-bounce-in {
            animation: bounce-in 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }

          .animate-fade-up {
            animation: fade-up 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards;
          }

          .group:active {
            transform: scale(0.95) !important;
          }

          .animate-disco-text {
            background-size: 150% 150%;
          }
        }

        @media (max-width: 640px) {
          .animate-bounce-in {
            animation: bounce-in 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }

          .group {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;