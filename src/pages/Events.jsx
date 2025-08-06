import React, { useEffect, useState } from "react";
import { supabase } from '../supabaseClient';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calendar, MapPin, Music, Star, ChevronLeft, ChevronRight, Sparkles, Zap } from 'lucide-react';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  useEffect(() => {
    const fetchEvents = async () => {
      const { data } = await supabase
        .from("events")
        .select("*")
        .order("created_at", { ascending: false });
      setEvents(data || []);
      setLoading(false);
    };
    fetchEvents();
  }, []);

  const nextImage = (eventId, totalImages) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [eventId]: ((prev[eventId] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (eventId, totalImages) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [eventId]: ((prev[eventId] || 0) - 1 + totalImages) % totalImages
    }));
  };

  const FloatingIcon = ({ Icon, delay = 0, className = "" }) => (
    <div
      className={`absolute opacity-20 text-pink-400 animate-bounce ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: '3s',
      }}
    >
      <Icon size={24} />
    </div>
  );

  const DiscoBall = () => (
    <div className="relative w-20 h-20 mx-auto mb-8">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full animate-spin-slow opacity-80"></div>
      <div className="absolute inset-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-full animate-pulse"></div>
      <div className="absolute inset-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full animate-spin-reverse"></div>
      <div className="absolute inset-3 bg-black rounded-full flex items-center justify-center">
        <Music className="text-yellow-400 animate-pulse" size={20} />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black relative overflow-hidden w-screen">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-cyan-900/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-pink-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-36 h-36 bg-yellow-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Floating Icons */}
      <FloatingIcon Icon={Music} delay={0} className="top-24 left-1/4" />
      <FloatingIcon Icon={Star} delay={1} className="top-32 right-1/3" />
      <FloatingIcon Icon={Zap} delay={2} className="bottom-40 left-1/3" />
      <FloatingIcon Icon={Calendar} delay={1.5} className="bottom-24 right-1/4" />

      {/* Header */}
      <Header />

      <div className="relative z-10 px-4 py-8 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="text-center mb-12">
          <DiscoBall />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent animate-pulse">
            OUR EVENTS
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto rounded-full animate-pulse"></div>
          <p className="mt-4 text-lg text-gray-300 font-light tracking-wide">
            🎵 Where the night comes alive 🎵
          </p>
        </div>

        {/* Events Grid */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative">
              <div className="w-20 h-20 border-4 border-pink-500/30 rounded-full animate-spin"></div>
              <div className="absolute inset-0 w-20 h-20 border-4 border-t-pink-500 border-r-purple-500 border-b-cyan-500 border-l-yellow-500 rounded-full animate-spin"></div>
            </div>
            <p className="mt-4 text-pink-400 animate-pulse">Loading disco events...</p>
          </div>
        ) : events.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full flex items-center justify-center animate-pulse">
              <Calendar className="text-pink-400" size={40} />
            </div>
            <p className="text-2xl text-gray-400 mb-2">No groovy events yet!</p>
            <p className="text-gray-500">The dance floor awaits</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {events.map((event, index) => (
              <div
                key={event.id}
                className="group relative transform transition-all duration-700 hover:scale-105 hover:-rotate-1 animate-fade-in-up"
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
                onClick={() => setSelectedEvent(event)}
              >
                {/* Gradient Border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x"></div>
                
                {/* Card Container */}
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden shadow-2xl border border-gray-800 group-hover:border-pink-500/50 transition-all duration-500 cursor-pointer">
                  {/* Image Carousel */}
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    {event.images && event.images.length > 0 ? (
                      <>
                        <img
                          src={event.images[currentImageIndex[event.id] || 0]}
                          alt={`${event.album} - Image ${(currentImageIndex[event.id] || 0) + 1}`}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:saturate-150"
                        />
                        
                        {/* Image Navigation */}
                        {event.images.length > 1 && (
                          <>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                prevImage(event.id, event.images.length);
                              }}
                              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-pink-500/80 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
                            >
                              <ChevronLeft size={16} className="text-white" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                nextImage(event.id, event.images.length);
                              }}
                              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-pink-500/80 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
                            >
                              <ChevronRight size={16} className="text-white" />
                            </button>
                            
                            {/* Image Indicators */}
                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1">
                              {event.images.map((_, imgIndex) => (
                                <div
                                  key={imgIndex}
                                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    imgIndex === (currentImageIndex[event.id] || 0)
                                      ? 'bg-pink-500 w-6'
                                      : 'bg-white/50'
                                  }`}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                        <Music className="text-gray-600" size={48} />
                      </div>
                    )}
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Sparkle Effects */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute top-4 right-4 text-yellow-400 animate-ping">
                        <Sparkles size={16} />
                      </div>
                      <div className="absolute bottom-4 left-4 text-pink-400 animate-ping" style={{ animationDelay: '0.5s' }}>
                        <Sparkles size={12} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h2 className="text-xl sm:text-2xl font-bold mb-3 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent group-hover:from-pink-300 group-hover:to-cyan-300 transition-all duration-300">
                      {event.album}
                    </h2>
                    
                    {/* Details */}
                    <p className="text-gray-300 mb-4 line-clamp-3 group-hover:text-gray-200 transition-colors duration-300 text-sm sm:text-base leading-relaxed">
                      {event.details}
                    </p>
                    
                    {/* Location */}
                    <div className="flex items-center text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300 mb-2">
                      <MapPin size={16} className="mr-2 animate-pulse flex-shrink-0" />
                      <span className="font-semibold text-sm sm:text-base truncate">{event.location}</span>
                    </div>
                    
                    {/* Date */}
                    {event.date && (
                      <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                        <Calendar size={16} className="mr-2 flex-shrink-0" />
                        <span className="text-sm">{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                    )}
                  </div>

                  {/* Mobile Touch Indicator */}
                  <div className="absolute top-4 right-4 sm:hidden">
                    <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
                      <Zap size={16} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />

      {/* Fullscreen Event Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelectedEvent(null)}>
          <div className="relative max-w-4xl max-h-full w-full animate-scale-in">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute -top-12 right-0 text-white hover:text-pink-400 transition-colors z-10"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                ✕
              </div>
            </button>
            
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl border border-pink-500/30">
              {/* Modal Image */}
              {selectedEvent.images && selectedEvent.images.length > 0 && (
                <div className="relative h-64 sm:h-80">
                  <img
                    src={selectedEvent.images[currentImageIndex[selectedEvent.id] || 0]}
                    alt={selectedEvent.album}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Modal Image Navigation */}
                  {selectedEvent.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage(selectedEvent.id, selectedEvent.images.length);
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-pink-500/80 rounded-full flex items-center justify-center transition-all duration-300"
                      >
                        <ChevronLeft size={24} className="text-white" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage(selectedEvent.id, selectedEvent.images.length);
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-pink-500/80 rounded-full flex items-center justify-center transition-all duration-300"
                      >
                        <ChevronRight size={24} className="text-white" />
                      </button>
                      
                      {/* Modal Image Indicators */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                        {selectedEvent.images.map((_, imgIndex) => (
                          <div
                            key={imgIndex}
                            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                              imgIndex === (currentImageIndex[selectedEvent.id] || 0)
                                ? 'bg-pink-500 w-8'
                                : 'bg-white/50'
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex(prev => ({
                                ...prev,
                                [selectedEvent.id]: imgIndex
                              }));
                            }}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}
              
              {/* Modal Content */}
              <div className="p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  {selectedEvent.album}
                </h2>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  {selectedEvent.details}
                </p>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-3 sm:space-y-0">
                  <div className="flex items-center text-yellow-400">
                    <MapPin size={20} className="mr-3" />
                    <span className="font-semibold text-lg">{selectedEvent.location}</span>
                  </div>
                  
                  {selectedEvent.date && (
                    <div className="flex items-center text-cyan-400">
                      <Calendar size={20} className="mr-3" />
                      <span className="text-lg">{new Date(selectedEvent.date).toLocaleDateString()}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;