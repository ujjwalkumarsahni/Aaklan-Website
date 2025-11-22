import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { assets } from "../assets/assets.js";
import Login from "../pages/Login.jsx";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);     // For Login Modal
  const [mobileOpen, setMobileOpen] = useState(false); // For Mobile Navbar

  const [isHidden, setIsHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 10) {
        // scrolling down → hide
        setIsHidden(true);
      } else {
        // scrolling up → show
        setIsHidden(false);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);



  return (
    <header className="w-full sticky top-0 z-50">
      <div
        className={`bg-[#0b234a] text-white text-sm transition-all duration-700 ease-in-out overflow-hidden ${isHidden ? "opacity-0 h-0" : "opacity-100 h-[60px]"
          }`}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-6 py-2 px-6 text-white">


          {/* Address */}
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-yellow-400 text-xl" />
            <div>
              <span className="font-semibold">Address:</span>{" "}
              <span>Jaipur - 302026</span>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-yellow-400 text-xl" />
            <div>
              <span className="font-semibold">Email:</span>{" "}
              <span>info@aaklan.com</span>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-yellow-400 text-xl" />
            <div>
              <span className="font-semibold">Contact:</span>{" "}
              <span>+91 - 9571677609</span>
            </div>
          </div>

          {/* Login / Signup */}
          <div className="hidden lg:flex gap-3">
            <button
              onClick={() => setIsOpen("login")}
              className="text-lg px-8 py-1 rounded-full border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-[#0b234a] transition-all"
            >
              Login
            </button>

            <button
              onClick={() => setIsOpen("signup")}
              className="text-lg px-6 py-2 rounded-full font-medium 
          bg-linear-to-r from-yellow-400 to-orange-500 
          text-[#0b234a] shadow-xl hover:scale-110 hover:shadow-2xl transition-all"
            >
              Signup
            </button>

            <Login isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

          <img
            src={assets.logo}
            className="h-12 filter drop-shadow-md"
            alt="logo"
          />

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-8 font-medium">
            {[
              "Home",
              "Coding",
              "Robotics & AI",
              "VR/AR Lab",
              "Workshop",
              "Books",
              "Online Courses",
              "Pre Primary School"
            ].map((item) => (
              <li key={item} className="relative cursor-pointer group">
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-yellow-400 group-hover:w-full transition-all"></span>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="text-white lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <ul className="lg:hidden bg-[#0b234a] text-white p-4 space-y-4">
            {[
              "Home",
              "Coding",
              "Robotics & AI",
              "VR/AR Lab",
              "Workshop",
              "Books",
              "Online Courses",
              "Pre Primary School"
            ].map((item) => (
              <li key={item} className="cursor-pointer">
                {item}
              </li>
            ))}
            <div>
              <button
                onClick={() => setIsOpen(true)}
                className="hidden md:block text-xl px-6 py-3 rounded-full font-medium 
             bg-linear-to-r from-yellow-400 to-orange-500 
             text-[#0b234a] shadow-lg hover:scale-105 transition-all"
              >
                Get Started
              </button>
              <Login isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
          </ul>
        )}
      </nav>

    </header>
  );
}
