"use client";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook size={20} />, label: "Facebook", href: "#" },
    { icon: <Twitter size={20} />, label: "Twitter", href: "#" },
    { icon: <Instagram size={20} />, label: "Instagram", href: "#" },
    { icon: <Linkedin size={20} />, label: "LinkedIn", href: "#" }
  ];

  return (
    <footer className="bg-[#0a0a6e] py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section centrale avec les réseaux sociaux */}
        <motion.div 
          className="flex flex-col items-center justify-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo minimaliste */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
            <span className="text-xl font-light tracking-wider">NOVATRIX</span>
          </div>

          {/* Réseaux sociaux avec animation au survol */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="p-3  transition-colors"
                aria-label={social.label}
                whileHover={{ 
                  y: -5,
                 
                }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
          
          {/* Ligne de séparation subtile */}
          <div className="w-24 h-px bg-cyan-400/30 mx-auto"></div>
          
          {/* Copyright */}
          <p className="text-cyan-400/60 text-sm tracking-wide">
            &copy; {currentYear} Novatrix. Tous droits réservés.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;