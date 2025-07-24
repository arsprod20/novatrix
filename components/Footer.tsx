"use client";
import {
  Phone, Mail, Facebook, Twitter, Instagram, Linkedin
} from "lucide-react";
import { motion } from "framer-motion";
//import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook size={20} />, label: "Facebook", href: "#" },
    { icon: <Twitter size={20} />, label: "Twitter", href: "#" },
    { icon: <Instagram size={20} />, label: "Instagram", href: "#" },
    { icon: <Linkedin size={20} />, label: "LinkedIn", href: "#" }
  ];

  return (
    <footer className="bg-[#07005E]">
      <div className="py-12 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xl font-semibold mb-4">Nous contacter</h4>
          <div className="space-y-4 text-cyan-300 text-sm">
            {/*<div className="flex items-start gap-3">
              <MapPin className="text-cyan-400" size={18} />
              <p>Avenue Gamal Abdel Nasser, Nouakchott, Mauritanie</p>
            </div>*/}
            <div className="flex items-start gap-3">
              <Phone className="text-cyan-400" size={18} />
              <p>(+222) 36 12 34 56</p>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="text-cyan-400" size={18} />
              <p>contact@novatrix.dev</p>
            </div>
          </div>
        </motion.div>

        {/* Réseaux Sociaux */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xl font-semibold mb-4">Suivez-nous</h4>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#000044] border border-cyan-400/20 hover:bg-cyan-800/30 transition-colors"
                aria-label={social.label}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="border-t border-cyan-400/10 py-6 text-center text-cyan-300/70 text-sm">
        &copy; {currentYear} Novatrix. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
