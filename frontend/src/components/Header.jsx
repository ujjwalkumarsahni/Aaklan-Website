import { useState } from "react";
import { Menu, X } from "lucide-react";
import { assets } from "../assets/assets.js";
import Login from "../pages/Login.jsx";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);     // For Login Modal
  const [mobileOpen, setMobileOpen] = useState(false); // For Mobile Navbar

  return (
    <header className="w-full sticky top-0 z-50">
      <div className="bg-[#0b234a] text-white text-sm">
        <div className="max-w-8xl mx-auto flex flex-wrap justify-between gap-4 py-2 px-4">

          <div className="flex items-center gap-2">
            <span className="font-bold">📖 ADDRESS</span>
            <span>Jaipur - 302026</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-bold">📧 EMAIL</span>
            <span>info@aaklan.com</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-bold">📞 CONTACT</span>
            <span>+91 - 9571677609</span>
          </div>

          <div>
            <button
              onClick={() => setIsOpen(true)}
              className="hidden lg:block text-xl px-4 py-2 rounded-full font-medium 
             bg-linear-to-r from-yellow-400 to-orange-500 
             text-[#0b234a] shadow-lg hover:scale-105 transition-all"
            >
              Get Started
            </button>
            <Login isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>

        </div>
      </div>

      {/* NAVBAR */}
      <nav className="bg-linear-to-r from-orange-500 to-[#0b234a] shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

          <img
            src={assets.logo}
            className="h-12 filter drop-shadow-md"
            alt="logo"
          />

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-8 text-white font-medium">
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
