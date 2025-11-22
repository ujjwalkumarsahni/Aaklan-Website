import { Mail, Phone, MapPin, Clock, ChevronRight, Facebook, Twitter, Instagram, Youtube, ArrowUp } from "lucide-react";
import { footer } from "../assets/assets";
import { useState, useEffect } from "react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <footer className="bg-gradient-to-br from-[#062241] to-[#0a3266] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white rounded-full"></div>
      </div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <ArrowUp size={20} />
        </button>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2 xl:col-span-1">
            <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
              <img 
                src={footer.logolight} 
                alt="Aaklan Logo" 
                className="w-48 h-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-white/90 leading-relaxed mb-6 text-sm font-medium">
              We are a digital coding company for kids upto 12th grade. Aaklan is
              devoted to creating a culture of learning where kids can learn,
              create and achieve their dreams.
              <br /><br />
              Our mission is to help our students become innovative creators,
              thinkers and collaborators.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-white/10 hover:bg-blue-600 p-2 rounded-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Learning Programs */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-blue-500 inline-block">
              Learning Programs
            </h3>
            <ul className="space-y-3">
              {[
                "Computer & Coding Books (1-8)",
                "Coding, Robotics & AI Books (6-8)",
                "Coding, Robotics & AI (Python) Books (9-12)",
                "Online Coding Classes",
                "Online Robotics & AI Classes"
              ].map((item, index) => (
                <li key={index} className="group">
                  <a 
                    href="#" 
                    className="flex items-center text-white/80 hover:text-white transition-all duration-300 group-hover:translate-x-2"
                  >
                    <ChevronRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-blue-500 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Terms & Conditions",
                "Privacy Policy",
                "Refund Policy",
                "Career",
                "Contact Us",
                "Blog"
              ].map((item, index) => (
                <li key={index} className="group">
                  <a 
                    href="#" 
                    className="flex items-center text-white/80 hover:text-white transition-all duration-300 group-hover:translate-x-2"
                  >
                    <ChevronRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-blue-500 inline-block">
              Get In Touch
            </h3>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3 group">
                <div className="bg-blue-600 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-white/80 text-sm">Email</p>
                  <a href="mailto:Info@aaklan.com" className="text-white hover:text-blue-300 transition-colors">
                    Info@aaklan.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 group">
                <div className="bg-blue-600 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-white/80 text-sm">Phone</p>
                  <a href="tel:+919571677609" className="text-white hover:text-blue-300 transition-colors">
                    +91 - 9571677609
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 group">
                <div className="bg-blue-600 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-white/80 text-sm">Address</p>
                  <p className="text-white">Jaipur - 302026</p>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
              <div className="flex items-center space-x-2 mb-3">
                <Clock size={18} className="text-blue-400" />
                <h4 className="font-semibold">Opening Hours</h4>
              </div>
              <div className="text-sm space-y-1 text-white/90">
                <div className="flex justify-between">
                  <span>Mon - Sat:</span>
                  <span className="text-blue-300">10.00 am - 5.00 pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-red-300">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        {/* <div className="bg-linear-to-r from-orange-600 to-orange-700 rounded-2xl p-6 mb-8 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-blue-100">Subscribe to our newsletter for the latest updates</p>
            </div>
            <div className="flex flex-1 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-r-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-1">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/70 text-sm mb-6 md:mb-0">
              © {new Date().getFullYear()} All rights reserved | Aaklan IT Solutions Pvt. Ltd.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/70 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      {/* <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-blue-600 border-t border-blue-500">
        <div className="flex justify-around py-3">
          <a href="tel:+919571677609" className="flex flex-col items-center text-white">
            <Phone size={18} />
            <span className="text-xs mt-1">Call</span>
          </a>
          <a href="mailto:Info@aaklan.com" className="flex flex-col items-center text-white">
            <Mail size={18} />
            <span className="text-xs mt-1">Email</span>
          </a>
          <a href="#" className="flex flex-col items-center text-white">
            <MapPin size={18} />
            <span className="text-xs mt-1">Location</span>
          </a>
        </div>
      </div> */}
    </footer>
  );
}