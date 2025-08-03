'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import Image from "next/image";

const navItems = [
  { name: 'Accueil', path: '/' },
  { name: 'À propos', path: '/a-propos' },
  { name: 'Services', path: '/services' },
];

const menuVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
      staggerChildren: 0.05,
      when: 'afterChildren',
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.36, 0.66, 0.04, 1],
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    y: -10,
    opacity: 0,
    transition: { duration: 0.2 },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
};

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollPosition = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Gestion optimale du scroll pendant l'ouverture/fermeture du menu
  useEffect(() => {
    if (isMenuOpen) {
      // Sauvegarde de la position actuelle du scroll
      scrollPosition.current = window.scrollY;
      
      // Blocage du scroll avec préservation de la position
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosition.current}px`;
      document.body.style.width = '100%';
    } else {
      // Rétablissement du scroll
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    // Nettoyage
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isMenuOpen]);

  // Fermer le menu lors du redimensionnement
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-deep-midnight/90 backdrop-blur-md py-2 shadow-lg shadow-cyan-900/20 border-b border-cyan-900/30'
          : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo avec animation */}
          <Link href="/">
            <motion.div 
              className="flex items-center group"
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src="/logo.png"
                alt="Logo Novatrix"
                width={170}
                height={170}
                className="object-contain"
              />
              <motion.span
                className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-[#00eaff] to-cyan-300 w-0 group-hover:w-full transition-all duration-500 shadow-[0_0_10px_rgba(0,234,255,0.7)]"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
              />
            </motion.div>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-4">
            <ul className="flex space-x-2">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <motion.li 
                    key={item.name} 
                    className="relative"
                    variants={itemVariants}
                  >
                    <Link
                      href={item.path}
                      className={`px-4 py-2.5 flex items-center font-medium transition-colors rounded-lg ${
                        isActive 
                          ? 'text-white bg-cyan-900/20' 
                          : 'text-cyan-100 hover:text-white hover:bg-cyan-900/10'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link 
                href="/contact"
                className="ml-2 px-6 py-2.5 bg-gradient-to-r from-neon-cyan to-blue-500 text-deep-space font-semibold rounded-lg flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
              >
                <MessageCircle size={18} />
                <span>Contact</span>
              </Link>
            </motion.div>
          </nav>

          {/* Bouton menu mobile unique */}
          <motion.button
            className="md:hidden text-cyan-100 p-3 rounded-lg hover:bg-cyan-900/20 transition-colors z-[70]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <X size={24} key="close" className="text-white" />
              ) : (
                <Menu size={24} key="menu" className="text-cyan-100" />
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden fixed inset-0 z-[60] flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Fond flou */}
            <div 
              className="absolute inset-0 bg-deep-space/90 backdrop-blur-lg"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Contenu du menu */}
            <motion.div
              className="relative bg-deep-midnight/95 backdrop-blur-xl border-t border-cyan-900/30 mt-16 h-full overflow-y-auto"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <div className="container mx-auto px-4 py-8">
                <motion.ul
                  className="space-y-3"
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {navItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                      <motion.li
                        key={item.name}
                        variants={itemVariants}
                      >
                        <Link
                          href={item.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={`flex items-center px-4 py-4 rounded-lg text-lg font-medium transition-all ${
                            isActive
                              ? 'text-[#00eaff] bg-cyan-900/20'
                              : 'text-cyan-100 hover:bg-cyan-900/20'
                          }`}
                          aria-current={isActive ? 'page' : undefined}
                        >
                          {isActive ? (
                            <motion.span
                              className="w-2 h-2 rounded-full bg-[#00eaff] mr-3 shadow-[0_0_8px_#00eaff]"
                              animate={{
                                scale: [1, 1.4, 1],
                                opacity: [0.7, 1, 0.7]
                              }}
                              transition={{
                                repeat: Infinity,
                                duration: 1.5
                              }}
                            />
                          ) : (
                            <span className="w-2 h-2 mr-3" />
                          )}
                          <span>{item.name}</span>
                        </Link>
                      </motion.li>
                    );
                  })}
                </motion.ul>

                <motion.div 
                  className="mt-8"
                  variants={itemVariants}
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-6 py-4 bg-gradient-to-r from-neon-cyan to-blue-500 text-deep-space font-semibold rounded-lg flex items-center justify-center gap-3"
                  >
                    <MessageCircle size={20} />
                    <span>Envoyer un message</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ligne colorée en bas quand scrollé */}
      {isScrolled && (
        <motion.div
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan via-blue-500 to-purple-500"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        />
      )}
    </motion.header>
  );
}