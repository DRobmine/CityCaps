import React, { useEffect, useState } from "react";
import { Home, Box, Compass, MapPin, Mail } from "lucide-react";
import { motion } from "framer-motion";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex items-center fixed w-screen z-40 text-lg justify-between px-10 py-3 transition-all duration-300
        ${scrolled ? "bg-white/70 backdrop-blur shadow-md" : "bg-transparent"}`}
    >
      {/* Logo */}
      <img src="/logo.png" className="w-36 h-16 object-contain" alt="Logo" />

      {/* Links */}
      <div className="flex gap-8 text-gray-800 font-medium">
        <a
          href="#model"
          className="flex items-center gap-1 hover:text-blue-600 transition"
        >
          <Box className="w-4 h-4" /> Models
        </a>
        <a
          href="#using"
          className="flex items-center gap-1 hover:text-blue-600 transition"
        >
          <Home className="w-4 h-4" /> Using
        </a>
        <a
          href="#advantage"
          className="flex items-center gap-1 hover:text-blue-600 transition"
        >
          <Compass className="w-4 h-4" /> Advantage
        </a>
        <a
          href="#location"
          className="flex items-center gap-1 hover:text-blue-600 transition"
        >
          <MapPin className="w-4 h-4" /> Locations
        </a>
      </div>

      {/* Contact (right side) */}
      <div className="w-36 flex justify-end">
        <a href="#mail" className="hover:text-blue-600 transition">
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </motion.nav>
  );
}

export default Navbar;
