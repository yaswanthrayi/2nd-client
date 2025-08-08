import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaTimes, FaUser } from 'react-icons/fa';

const Developer = () => {
  const [showModal, setShowModal] = useState(false);

  const handlePhoneCall = () => {
    window.location.href = 'tel:+919392980823';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:yash.freelancer17@gmail.com';
  };

  return (
    <>
      {/* Developer Credit Section */}
      <div className="w-full mt-8 pt-8 border-t border-gray-600/30 font-sans">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gray-900/80 backdrop-blur-md rounded-xl p-6 shadow-md transition-all duration-500 border border-gray-600/30 text-center">
            <p className="text-gray-300 text-sm md:text-base">
  This website is made by{' '}
  <span
    onClick={() => setShowModal(true)}
    className="cursor-pointer text-yellow-400 underline hover:text-orange-400 transition-colors duration-300"
  >
    YASH
  </span>
</p>
            <p className="text-gray-500 text-xs md:text-sm mt-1">
              Full Stack Developer & UI/UX Designer
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn font-sans">
          <div className="bg-gray-900 rounded-xl p-6 max-w-md w-full mx-4 shadow-2xl border border-gray-700 animate-slideUp relative">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaTimes className="text-lg" />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full mb-4">
                <FaUser className="text-black text-xl" />
              </div>
              <h2 className="text-2xl font-semibold text-white tracking-wide">YASH XD</h2>
              <p className="text-gray-400 text-sm mt-1">
                Full Stack Developer & UI/UX Designer
              </p>
              <div className="w-12 h-1 bg-yellow-500 mx-auto mt-3 rounded-full"></div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center justify-between bg-gray-800 rounded-lg p-4 border border-gray-700">
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white text-sm">yash.freelancer17@gmail.com</p>
                </div>
                <button
                  onClick={handleEmailClick}
                  className="text-sm px-4 py-1 rounded bg-blue-600 hover:bg-blue-700 text-white transition"
                >
                  Email
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between bg-gray-800 rounded-lg p-4 border border-gray-700">
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white text-sm">XXXXXXX823</p>
                </div>
                <button
                  onClick={handlePhoneCall}
                  className="text-sm px-4 py-1 rounded bg-green-600 hover:bg-green-700 text-white transition"
                >
                  Call
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center mt-6 pt-4 border-t border-gray-700">
              <p className="text-gray-500 text-xs">
                Available for freelance projects & collaborations
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </>
  );
};

export default Developer;
