import React from 'react'
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { MdEmail, MdPhone } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 md:px-16 lg:px-28 py-12 space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-amber-300 font-mexon">MOON WALKER DANCE STUDIO</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            MOON WALKER DANCE STUDIO – With an aim to provide quality dance training and making dance available to all, we run classes for students from age 4 to 84 in various styles.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4 font-alphatron text-lime-200">QUICK LINKS</h2>
          <ul className="space-y-2 text-[#39FF14] text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/events" className="hover:underline">Events</a></li>
            <li><a href="/schedule" className="hover:underline">Schedule</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold mb-4 font-alphatron text-lime-200">CONTACT US</h2>
          <ul className="text-gray-300 text-sm space-y-2">
            <li className="flex items-center gap-2">
              <MdPhone className="text-blue-400" />
              <a href="tel:+91965222202" className="hover:underline">+91 965222202</a>
            </li>
            <li className="flex items-center gap-2">
              <MdEmail className="text-blue-400" />
              <a href="mailto:moonwalkerdancestudio@gmail.com" className="hover:underline">moonwalkerdancestudio@gmail.com</a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-gray-300 hover:text-blue-500 text-xl"><FaFacebookF /></a>
            <a href="#" className="text-gray-300 hover:text-pink-500 text-xl"><FaInstagram /></a>
            <a href="#" className="text-gray-300 hover:text-green-500 text-xl"><FaWhatsapp /></a>
            <a href="#" className="text-gray-300 hover:text-red-500 text-xl"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-12">
<h2 className="text-xl font-bold mb-4 font-alphatron text-lime-200">OUR LOCATION</h2>        <div className="w-full h-64 overflow-hidden rounded-lg border border-gray-700">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1273080949327!2d-74.00594798459418!3d40.71278337933041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316e44bb85%3A0x7e36a4e4e72c3a65!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1643723400000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-400 text-sm pt-8 border-t border-gray-700">
        © {new Date().getFullYear()} MOON WALKER DANCE STUDIO. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
