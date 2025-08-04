import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { 
  MessageSquare, 
  Facebook, 
  Instagram, 
  Youtube, 
  Phone, 
  Mail, 
  MapPin 
} from 'lucide-react';

const Contact = () => {
  const contactLinks = [
    { 
      name: 'WhatsApp', 
      href: 'https://wa.me/15551234567', 
      icon: MessageSquare, 
      color: 'hover:text-green-500',
      text: '+1 (555) 123-4567'
    },
    { 
      name: 'Facebook', 
      href: 'https://facebook.com/yourcompany', 
      icon: Facebook, 
      color: 'hover:text-blue-600',
      text: '@yourcompany'
    },
    { 
      name: 'Instagram', 
      href: 'https://instagram.com/yourcompany', 
      icon: Instagram, 
      color: 'hover:text-pink-500',
      text: '@yourcompany'
    },
    { 
      name: 'YouTube', 
      href: 'https://youtube.com/yourcompany', 
      icon: Youtube, 
      color: 'hover:text-red-500',
      text: 'Your Company Channel'
    },
    { 
      name: 'Phone', 
      href: 'tel:+15551234567', 
      icon: Phone, 
      color: 'hover:text-blue-500',
      text: '+1 (555) 123-4567'
    },
    { 
      name: 'Email', 
      href: 'mailto:info@yourcompany.com', 
      icon: Mail, 
      color: 'hover:text-indigo-500',
      text: 'info@yourcompany.com'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section with Image */}
      <div className="relative h-96 lg:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              GET IN TOUCH WITH US
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              We're here to help you succeed. Reach out to us through any of our channels 
              and let's start building something amazing together. Your success is our priority.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Left Side - Contact Links */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Our Contact Links
                </h2>
                <div className="space-y-6">
                  {contactLinks.map((contact, index) => {
                    const IconComponent = contact.icon;
                    return (
                      <a
                        key={index}
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group hover:shadow-md ${contact.color}`}
                      >
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300">
                          <IconComponent size={24} className="text-gray-600 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 text-lg">{contact.name}</h3>
                          <p className="text-gray-600">{contact.text}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Side - Company Info and Map */}
            <div className="space-y-8">
              {/* Company Information */}
              <div className="text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  YOUR COMPANY
                </h2>
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-start gap-3 justify-center lg:justify-start">
                    <MapPin size={20} className="text-blue-500 mt-1 flex-shrink-0" />
                    <div className="text-lg">
                      <p className="font-semibold text-gray-900">Our Address</p>
                      <p>123 Business Street</p>
                      <p>New York, NY 10001</p>
                      <p>United States</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="bg-gray-100 p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Find Us Here</h3>
                <div className="aspect-video w-full rounded-xl overflow-hidden shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1273080949327!2d-74.00594798459418!3d40.71278337933041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316e44bb85%3A0x7e36a4e4e72c3a65!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1643723400000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Company Location"
                    className="rounded-xl"
                  ></iframe>
                </div>
                
                {/* Office Hours */}
                <div className="mt-6 p-4 bg-white rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">Office Hours</h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;