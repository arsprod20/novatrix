'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/a-propos' },
    { name: 'Services', path: '/services' },
  ];

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
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 }
    },
    hover: {
      scale: 1.05,
      color: '#03eeff',
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-deep-midnight/90 backdrop-blur-md py-2 shadow-lg shadow-cyan-900/20 border-b border-cyan-900/30'
        : 'bg-transparent py-4'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/logo.png"
              alt="Logo Novatrix"
              width={170}
              height={170}
              className="object-contain"
            />
          </motion.div>

          <nav className="hidden md:flex items-center space-x-1">
            <motion.ul
              className="flex space-x-1"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {navItems.map((item) => (
                <motion.li
                  key={item.name}
                  className="relative"
                  variants={itemVariants}
                >
                  <a
                    href={item.path}
                    className="px-4 py-3 flex items-center text-cyan-100 hover:text-white transition-colors font-medium"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            <motion.a
              href="/contact"
              className="ml-4 px-6 py-3 bg-gradient-to-r from-neon-cyan to-blue-500 text-deep-space font-semibold rounded-lg flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle size={18} />
              <span>Contact</span>
            </motion.a>
          </nav>

          {/* Menu Mobile Toggle - Correction du bouton */}
          <motion.button
            className="md:hidden text-cyan-100 p-3 rounded-lg hover:bg-cyan-900/20 transition-colors z-50"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} />
            )}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-deep-space/95 backdrop-blur-lg z-40 pt-20 overflow-y-auto"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <div className="container mx-auto px-4 py-6">
              <motion.ul
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {navItems.map((item) => (
                  <motion.li
                    key={item.name}
                    className="pb-4 border-b border-cyan-900/30"
                    variants={itemVariants}
                  >
                    <a
                      href={item.path}
                      className="text-xl text-cyan-100 hover:text-white transition-colors font-medium py-3 block"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                className="mt-8 flex flex-col gap-4"
                variants={itemVariants}
              >
                <motion.a
                  href="/contact"
                  className="px-6 py-4 bg-gradient-to-r from-neon-cyan to-blue-500 text-deep-space font-semibold rounded-lg flex items-center justify-center gap-3"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(false)}
                >
                  <MessageCircle size={20} />
                  <span>Envoyer un message</span>
                </motion.a>

               
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
};

export default Header;