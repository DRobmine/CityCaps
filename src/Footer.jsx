import React from "react";
import { motion } from "framer-motion";
import Message from "./Message";
import {
  Users,
  User,
  Link as LinkIcon,
  MapPin,
  Code,
  Home,
  Compass,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-12 px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
        {/* Logo + QR */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.img
            src="/logo.png"
            className="w-60"
            alt="Logo"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
          <motion.img
            src="/code.png"
            alt="QR Code"
            className="w-36 border-2 border-gray-600 rounded-lg shadow-md"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
          <p className="text-gray-400 text-sm mt-2">
            Scan QR code to visit our app
          </p>
        </motion.div>

        {/* Our Team */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center justify-center md:justify-start gap-2">
            <Users className="w-5 h-5 text-blue-400" /> Our Team
          </h3>
          <ul className="space-y-3 text-gray-300">
            {[
              { name: "Bekzod", color: "text-blue-500" },
              { name: "Abdulaziz", color: "text-green-500" },
              { name: "Ilyos", color: "text-purple-500" },
              { name: "Miraziz", color: "text-pink-500" },
            ].map((member, i) => (
              <motion.li
                key={member.name}
                className="flex items-center justify-center gap-2"
                whileHover={{ scale: 1.1, x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <User className={`w-4 h-4 ${member.color}`} /> {member.name}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center justify-center md:justify-start gap-2">
            <LinkIcon className="w-5 h-5 text-blue-400" /> Quick Links
          </h3>
          <ul className="space-y-3 text-gray-300">
            {[
              { href: "#model", label: "Models", icon: <Code className="w-4 h-4" /> },
              { href: "#using", label: "Using", icon: <Home className="w-4 h-4" /> },
              { href: "#advantage", label: "Advantage", icon: <Compass className="w-4 h-4" /> },
              { href: "#location", label: "Locations", icon: <MapPin className="w-4 h-4" /> },
            ].map((link, i) => (
              <motion.li
                key={link.label}
                whileHover={{ scale: 1.1, x: 5, color: "#60A5FA" }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                <a
                  href={link.href}
                  className="flex items-center justify-center gap-2 hover:text-blue-400 transition"
                >
                  {link.icon} {link.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Message />
        </motion.div>
      </div>

      {/* Bottom Section */}
      <motion.div
        className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <p>
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}

export default Footer;
