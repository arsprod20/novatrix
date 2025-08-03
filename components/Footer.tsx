'use client';

import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext'; // ajuste ce chemin si nécessaire

const Footer = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Facebook size={20} />,
      label: 'Facebook',
      href: 'https://www.facebook.com/novatrix01',
    },
    {
      icon: <Twitter size={20} />,
      label: 'Twitter',
      href: 'https://x.com/Novatrix01',
    },
    {
      icon: <Instagram size={20} />,
      label: 'Instagram',
      href: 'https://www.instagram.com/novat_rix/',
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/novatrix01/',
    },
  ];

  return (
    <footer className="bg-[#0a0a6e] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className={`flex flex-col items-center justify-center gap-8 ${
            language === 'ar' ? 'text-right' : 'text-center'
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
            <span className="text-xl font-light tracking-wider text-white">
              NOVATRIX
            </span>
          </div>

          {/* Texte engagement */}
          <p className="text-lg italic text-cyan-200 px-4 max-w-xl leading-relaxed">
            {language === 'ar'
              ? 'كل مشروع يعزز التزامنا بالنمو الرقمي الموريتاني'
              : 'Chaque projet renforce notre engagement pour la croissance numérique mauritanienne'}
          </p>

          {/* Réseaux sociaux */}
          <div className="flex justify-center space-x-6 rtl:space-x-reverse">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:text-cyan-100 transition-colors"
                aria-label={social.label}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Séparateur */}
          <div className="w-24 h-px bg-cyan-400/30 mx-auto"></div>

          {/* Copyright */}
          <p className="text-cyan-400/60 text-sm tracking-wide">
            {language === 'ar'
              ? `© ${currentYear} نوفاتريكس. جميع الحقوق محفوظة.`
              : `© ${currentYear} Novatrix. Tous droits réservés.`}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
