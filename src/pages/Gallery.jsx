import React, { useEffect, useState } from "react";
import { supabase } from '../supabaseClient';
import { Sparkles, Music, Camera, Zap } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      const { data } = await supabase
        .from("gallery_images")
        .select("*")
        .order("created_at", { ascending: false });
      setImages(data || []);
      setLoading(false);
    };
    fetchImages();
  }, []);

  const FloatingIcon = ({ Icon, delay = 0 }) => (
    <div
      className="absolute opacity-20 text-pink-400 animate-bounce"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: '3s',
      }}
    >
      <Icon size={24} />
    </div>
  );

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black relative overflow-hidden pt-32 pb-16">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-cyan-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-pink-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-32 right-10 w-28 h-28 bg-yellow-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute top-20 left-1/4">
          <FloatingIcon Icon={Music} delay={0} />
        </div>
        <div className="absolute top-40 right-1/3">
          <FloatingIcon Icon={Camera} delay={1} />
        </div>
        <div className="absolute bottom-32 left-1/3">
          <FloatingIcon Icon={Zap} delay={2} />
        </div>

        <div className="relative z-10 px-4 py-8 sm:px-6 lg:px-8">
          {/* Header Image */}
          <div className="text-center mb-12">
            <img
  src="/moon-walker-full.jpg"
  alt="Gallery Header"
  className="mx-auto rounded-2xl shadow-2xl max-w-full h-auto mb-6"
  style={{ objectFit: 'contain' }}
/>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent animate-pulse">
              Chakry's Gallery
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto rounded-full animate-pulse"></div>
            <p className="mt-4 text-lg text-gray-300 font-light tracking-wide">
              ✨ Our Moments ✨
            </p>
          </div>

          {/* Gallery Grid */}
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-pink-500/30 rounded-full animate-spin"></div>
                <div className="absolute inset-0 w-16 h-16 border-4 border-t-pink-500 border-r-purple-500 border-b-cyan-500 border-l-yellow-500 rounded-full animate-spin"></div>
              </div>
              <p className="mt-4 text-pink-400 animate-pulse">Loading disco vibes...</p>
            </div>
          ) : images.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full flex items-center justify-center animate-pulse">
                <Camera className="text-pink-400" size={32} />
              </div>
              <p className="text-xl text-gray-400 mb-2">No groovy pics yet!</p>
              {/* <p className="text-gray-500">Start your disco collection</p> */}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
              {images.map((img, index) => (
                <div
                  key={img.id}
                  className="group relative overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-1 animate-fade-in-up"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                  onClick={() => setSelectedImage(img)}
                >
                  {/* Gradient Border */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x"></div>
                  
                  {/* Image Container */}
                  <div className="relative bg-black rounded-2xl overflow-hidden">
                    <img
                      src={img.url}
                      alt={`Gallery ${img.id}`}
                      className="w-full h-48 sm:h-56 md:h-64 object-cover transition-all duration-700 group-hover:scale-110 group-hover:saturate-150 group-hover:brightness-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Sparkle Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute top-4 right-4 text-yellow-400 animate-ping">
                        <Sparkles size={16} />
                      </div>
                      <div className="absolute bottom-4 left-4 text-pink-400 animate-ping" style={{ animationDelay: '0.5s' }}>
                        <Sparkles size={12} />
                      </div>
                    </div>
                    
                    {/* Mobile Touch Indicator */}
                    <div className="absolute bottom-2 right-2 sm:hidden">
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
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-full animate-scale-in">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-pink-400 transition-colors z-10"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                ✕
              </div>
            </button>
            <img
              src={selectedImage.url}
              alt={`Gallery ${selectedImage.id}`}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Gallery;