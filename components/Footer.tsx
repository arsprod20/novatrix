// components/Footer.tsx
'use client';

import Link from 'next/link';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'Skills', href: '/skills' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/arsprod2001',
      Icon: Github,
      ariaLabel: 'Visit my GitHub',
    },
    {
      name: 'LinkedIn',
      href: 'https://github.com/arsprod2001',
      Icon: Linkedin,
      ariaLabel: 'Visit my LinkedIn',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <footer
      className="border-t border-foreground/10 bg-gradient-to-b from-background/70 to-background pt-20 relative overflow-hidden"
      role="contentinfo"
    >
      {/* Effet visuel de fond */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-[100px] left-[10%] w-64 h-64 bg-[#00eaff]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-[50%] right-[15%] w-48 h-48 bg-[#00eaff]/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] left-[25%] w-32 h-32 bg-[#00eaff]/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Contact */}
          <motion.div className="space-y-5" variants={itemVariants}>
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-[#00eaff]">
              Quick Contact
            </h3>
            <Link
              href="mailto:contact@amadousow.com"
              className="flex items-center gap-3 group"
              aria-label="Envoyer un email à Amadou Sow"
            >
              <motion.div 
                className="p-2 bg-foreground/5 rounded-full group-hover:bg-[#00eaff]/10 transition-colors"
                whileHover={{ rotate: 10 }}
              >
                <Mail className="w-5 h-5 text-[#00eaff]" />
              </motion.div>
              <span className="text-foreground/90 group-hover:text-[#00eaff] transition-colors">
                amadou.sow@monboreal.ca
              </span>
            </Link>
          </motion.div>

          {/* Navigation */}
          <motion.nav 
            aria-label="Navigation principale" 
            className="space-y-5"
            variants={itemVariants}
          >
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-[#00eaff]">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navigationItems.map((item) => (
                <motion.li 
                  key={item.label}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-foreground/90 hover:text-[#00eaff] transition-colors group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00eaff] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>

          {/* Réseaux Sociaux */}
          <motion.div className="space-y-5" variants={itemVariants}>
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-[#00eaff]">
              Social Media
            </h3>
            <div className="flex gap-4">
              {socialLinks.map(({ name, href, Icon, ariaLabel }) => (
                <motion.div
                  key={name}
                  whileHover={{ y: -5 }}
                >
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center p-3 bg-foreground/5 rounded-lg hover:bg-[#00eaff]/10 transition-colors"
                    aria-label={ariaLabel}
                  >
                    <Icon 
                      className="w-6 h-6 text-foreground/90 group-hover:text-[#00eaff] transition-colors" 
                      aria-hidden="true" 
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Back to Top */}
          <motion.div 
            className="space-y-5 md:text-right flex md:block flex-col items-center"
            variants={itemVariants}
          >
            <motion.button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 text-foreground/90 hover:text-[#00eaff] transition-colors"
              aria-label="Retour en haut de la page"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Back to Top</span>
              <motion.div
                className="p-2 bg-foreground/5 rounded-full group-hover:bg-[#00eaff]/10 transition-colors"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <ArrowUp className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="border-t border-foreground/10 pt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm text-foreground/70">
            © {new Date().getFullYear()} Amadou Sow. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}