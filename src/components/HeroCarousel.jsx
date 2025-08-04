import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';
import hero4 from '../assets/hero4.jpg';
import hero5 from '../assets/hero5.jpg';

const HeroCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const heroImages = [
    { src: hero1, title: "Feel the Beat", subtitle: "Experience the rhythm of hip hop" },
    { src: hero2, title: "Master Your Moves", subtitle: "Professional training for all levels" },
    { src: hero3, title: "Street Culture", subtitle: "Authentic urban dance experience" },
    { src: hero4, title: "Express Yourself", subtitle: "Contemporary meets hip hop" },
    { src: hero5, title: "Dance Together", subtitle: "Join our vibrant community" },
  ];

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

  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {heroImages.map((image, index) => (
            <div key={index} className="embla__slide flex-[0_0_100%] relative">
              <div className="relative w-full h-[70vh] md:h-[80vh]">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white space-y-4 px-4">
                    <h1 className="text-4xl md:text-6xl font-bold gradient-text animate-bounce-in">
                      {image.title}
                    </h1>
                    <p className="text-lg md:text-xl opacity-90 animate-slide-in-left">
                      {image.subtitle}
                    </p>
                    <div className="mt-8 animate-slide-in-right">
                      <button className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 disco-glow">
                        Start Dancing
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300 disco-glow"
        onClick={scrollPrev}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300 disco-glow"
        onClick={scrollNext}
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex ? 'bg-primary scale-125' : 'bg-white/50'
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;