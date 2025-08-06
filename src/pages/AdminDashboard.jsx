import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { Upload, Image, Calendar, MapPin, Trash2, LogOut, Plus, X } from "lucide-react";

const BUCKET = "gallery";
const EVENTS_TABLE = "events";

const AdminDashboard = () => {
  const [images, setImages] = useState([]);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // Event form state
  const [eventFiles, setEventFiles] = useState([]); // <-- array for multiple files
  const [eventAlbum, setEventAlbum] = useState("");
  const [eventDetails, setEventDetails] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [events, setEvents] = useState([]);
  const [eventLoading, setEventLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("isAdmin") !== "true") {
      navigate("/admin");
    }
    fetchImages();
    fetchEvents();
  }, [navigate]);

  // Gallery images
  const fetchImages = async () => {
    const { data, error } = await supabase
      .from("gallery_images")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setImages(data);
    if (error) console.error("Fetch error:", error.message);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;
    setLoading(true);

    const fileName = `${Date.now()}_${file.name}`;
    const { data: storageData, error: storageError } = await supabase.storage
      .from(BUCKET)
      .upload(`uploads/${fileName}`, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (storageError) {
      alert("Upload failed: " + storageError.message);
      setLoading(false);
      return;
    }

    const { data: publicUrlData } = supabase.storage
      .from(BUCKET)
      .getPublicUrl(`uploads/${fileName}`);

    const imageUrl = publicUrlData.publicUrl;

    const { error: dbError } = await supabase
      .from("gallery_images")
      .insert([{ url: imageUrl }]);

    if (dbError) console.error("DB insert error:", dbError.message);

    setFile(null);
    setLoading(false);
    fetchImages();
  };

  const handleRemove = async (id, url) => {
    await supabase.from("gallery_images").delete().eq("id", id);
    const path = url.split(`/storage/v1/object/public/${BUCKET}/`)[1];
    await supabase.storage.from(BUCKET).remove([path]);
    fetchImages();
  };

  // Events
   const fetchEvents = async () => {
    const { data, error } = await supabase
      .from(EVENTS_TABLE)
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setEvents(data);
    if (error) console.error("Events fetch error:", error.message);
  };

   // Upload multiple images for event
  const handleEventUpload = async (e) => {
    e.preventDefault();
    if (eventFiles.length < 2 || !eventAlbum || !eventDetails || !eventLocation) {
      alert("Please select at least 2 images and fill all fields.");
      return;
    }
    setEventLoading(true);

      // Upload all images and collect URLs
    const imageUrls = [];
    for (const file of eventFiles) {
      const fileName = `${Date.now()}_${Math.random().toString(36).slice(2)}_${file.name}`;
      const { error: storageError } = await supabase.storage
        .from(BUCKET)
        .upload(`events/${fileName}`, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (storageError) {
        alert("Event image upload failed: " + storageError.message);
        setEventLoading(false);
        return;
      }

      const { data: publicUrlData } = supabase.storage
        .from(BUCKET)
        .getPublicUrl(`events/${fileName}`);

      imageUrls.push(publicUrlData.publicUrl);
    }

        // Insert event with images array
    const { error: dbError } = await supabase
      .from(EVENTS_TABLE)
      .insert([{
        images: imageUrls,
        album: eventAlbum,
        details: eventDetails,
        location: eventLocation,
      }]);

  if (dbError) console.error("Event DB insert error:", dbError.message);

    setEventFiles([]);
    setEventAlbum("");
    setEventDetails("");
    setEventLocation("");
    setEventLoading(false);
    fetchEvents();
  };

   const handleEventRemove = async (id, images) => {
    await supabase.from(EVENTS_TABLE).delete().eq("id", id);
    if (Array.isArray(images)) {
      for (const url of images) {
        const path = url.split(`/storage/v1/object/public/${BUCKET}/`)[1];
        await supabase.storage.from(BUCKET).remove([path]);
      }
    }
    fetchEvents();
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 w-screen">
      {/* Header */}
      <header className="bg-white/5 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <h1 className="text-xl sm:text-2xl font-bold text-white">Owner</h1>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 bg-red-500/20 border border-red-500/30 text-red-400 hover:bg-red-500/30 hover:text-red-300 px-4 py-2 rounded-lg transition-all duration-200"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Gallery Section */}
        <section className="mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
            <div className="p-6 sm:p-8 border-b border-white/10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-emerald-500/20 border border-emerald-500/30 rounded-lg flex items-center justify-center">
                  <Image className="w-5 h-5 text-emerald-400" />
                </div>
                <h2 className="text-xl font-semibold text-white">Gallery Management</h2>
              </div>

              {/* Gallery Upload Form */}
              <form onSubmit={handleUpload} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Select Image
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                        className="block w-full text-sm text-gray-300 file:mr-4 file:py-3 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-500/20 file:border file:border-blue-500/30 file:text-blue-400 hover:file:bg-blue-500/30 file:transition-all file:duration-200 bg-slate-800 border border-white/10 rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="flex items-end">
                    <button
                      type="submit"
                      disabled={loading || !file}
                      className="flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-600 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 min-w-[140px] justify-center"
                    >
                      {loading ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          <span>Uploading...</span>
                        </>
                      ) : (
                        <>
                          <Upload className="w-4 h-4" />
                          <span>Upload</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Gallery Grid */}
            <div className="p-6 sm:p-8">
              {images.length === 0 ? (
                <div className="text-center py-12">
                  <Image className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-400">No gallery images uploaded yet</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {images.map((img) => (
                    <div key={img.id} className="relative group">
                      <div className="aspect-square rounded-lg overflow-hidden bg-slate-800">
                        <img
                          src={img.url}
                          alt={`Gallery ${img.id}`}
                          className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                        />
                      </div>
                      <button
                        onClick={() => handleRemove(img.id, img.url)}
                        className="absolute top-2 right-2 w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

         {/* Events Section */}
      <section>
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
          <div className="p-6 sm:p-8 border-b border-white/10">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-blue-400" />
              </div>
              <h2 className="text-xl font-semibold text-white">Event Management</h2>
            </div>

  {/* Event Upload Form */}
            <form onSubmit={handleEventUpload} className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Event Images (at least 2)
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={(e) => setEventFiles(Array.from(e.target.files))}
                      className="block w-full text-sm text-gray-300 file:mr-4 file:py-3 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-500/20 file:border file:border-blue-500/30 file:text-blue-400 hover:file:bg-blue-500/30 file:transition-all file:duration-200 bg-slate-800 border border-white/10 rounded-lg"
                      required
                    />
                  </div>

                    {/* ...album, location inputs... */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Album Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter album name"
                      value={eventAlbum}
                      onChange={(e) => setEventAlbum(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
                      required
                    />
                  </div>

                    <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Location
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Event location"
                        value={eventLocation}
                        onChange={(e) => setEventLocation(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
                        required
                      />
                    </div>
                  </div>
                </div>

                 <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Event Details
                  </label>
                  <textarea
                    placeholder="Describe the event..."
                    value={eventDetails}
                    onChange={(e) => setEventDetails(e.target.value)}
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 resize-none"
                    required
                  />
                </div>
              </div>

                   <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={eventLoading || eventFiles.length < 2 || !eventAlbum || !eventDetails || !eventLocation}
                  className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 disabled:bg-slate-600 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 min-w-[140px] justify-center"
                >
                  {eventLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Adding...</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      <span>Add Event</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

            {/* Events Grid */}
          <div className="p-6 sm:p-8">
            {events.length === 0 ? (
              <div className="text-center py-12">
                <Calendar className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-400">No events created yet</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {events.map((event) => (
                  <div key={event.id} className="bg-slate-800/50 border border-white/10 rounded-xl overflow-hidden hover:bg-slate-800/70 transition-all duration-200 group">
                    <div className="relative">
                      <div className="aspect-video flex overflow-x-auto gap-2">
                        {event.images && event.images.map((imgUrl, idx) => (
                          <img
                            key={idx}
                            src={imgUrl}
                            alt={`${event.album} - ${idx + 1}`}
                            className="w-full h-full object-cover rounded-lg"
                            style={{ minWidth: "100%" }}
                          />
                        ))}
                      </div>
                      <button
                        onClick={() => handleEventRemove(event.id, event.images)}
                        className="absolute top-3 right-3 w-8 h-8 bg-red-500/80 hover:bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-white mb-2">{event.album}</h3>
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{event.details}</p>
                      <div className="flex items-center space-x-2 text-yellow-400">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm font-medium">{event.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default AdminDashboard;