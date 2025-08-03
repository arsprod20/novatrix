//components/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';



const menuVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
      staggerChildren: 0.05,
      when: "afterChildren"
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.36, 0.66, 0.04, 1] as const,
      staggerChildren: 0.1
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    y: -10,
    opacity: 0,
    transition: { duration: 0.2 }
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: [0.34, 1.56, 0.64, 1] as const
    }
  },
};

export default function Header() {
  const { language, setLanguage, translations } = useLanguage();

  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const headerTranslations = translations.header || {};

  const links = [
    { name: headerTranslations.home || 'Accueil', path: '/' },
    { name: headerTranslations.about || 'À propos', path: '/a-propos' },
    { name: headerTranslations.services || 'Services', path: '/services' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
        ? 'bg-background/90 backdrop-blur-md py-0 shadow-lg border-b border-foreground/5'
        : 'bg-transparent py-2'
      } ${language === 'ar' ? 'rtl' : 'ltr'}`} // Ajout direction
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Navigation principale"
      >
        <div className="flex justify-between items-center h-16">
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

          <ul className="hidden md:flex space-x-6 items-center">
            {links.map((link) => {
              const isActive = pathname === link.path;
              return (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className={`relative text-base font-medium px-3 py-2 transition-all ${
                      isActive
                        ? 'text-[#00eaff]'
                        : 'text-foreground/80 hover:text-[#00eaff] transition-colors duration-300'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span className="relative z-10">{link.name}</span>
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-foreground/5 rounded-lg -z-0"
                        layoutId="activeIndicator"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/contact"
                className="ml-2 px-6 py-2.5 bg-gradient-to-r from-neon-cyan to-blue-500 text-deep-space font-semibold rounded-lg flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
              >
                <MessageCircle size={18} />
                {/* Correction traduction */}
                <span>{headerTranslations.contact || 'Contact'}</span>
              </Link>
            </motion.div>

            {/* Boutons de langue avec accessibilité */}
            <li>
              <div className="flex items-center gap-1 border border-foreground/20 rounded-lg p-1">
                <button
                  aria-label="Passer en français"
                  onClick={() => setLanguage('fr')}
                  className={`px-2 py-1 text-xs rounded-md transition-colors ${language === 'fr'
                      ? 'bg-foreground/10 text-foreground'
                      : 'text-foreground/50 hover:text-foreground'
                    }`}
                >
                  FR
                </button>
                <div className="h-3 w-px bg-foreground/20"></div>
                <button
                  aria-label="Passer en arabe"
                  onClick={() => setLanguage('ar')}
                  className={`px-2 py-1 text-xs rounded-md transition-colors ${language === 'ar'
                      ? 'bg-foreground/10 text-foreground'
                      : 'text-foreground/50 hover:text-foreground'
                    }`}
                >
                  AR
                </button>
              </div>
            </li>
          </ul>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-all"
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <X
                  size={24}
                  key="close"
                  className="text-[#00eaff]"
                />
              ) : (
                <Menu
                  size={24}
                  key="menu"
                  className="text-foreground"
                />
              )}
            </AnimatePresence>
          </motion.button>
        </div>

       <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
              className="md:hidden overflow-hidden"
            >
              <motion.div
                className="bg-background/95 backdrop-blur-2xl border border-foreground/10 rounded-xl shadow-2xl shadow-cyan-500/10 mt-2"
              >
                <ul className="px-2 py-3 space-y-1">
                  {links.map((link) => (
                    <motion.li key={link.name} variants={itemVariants}>
                      <Link
                        href={link.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all ${
                          pathname === link.path
                            ? 'text-[#00eaff] bg-gradient-to-r from-foreground/5 to-foreground/10'
                            : 'text-foreground/90 hover:bg-foreground/5'
                        }`}
                      >
                        {pathname === link.path ? (
                          <motion.span
                            className="w-1.5 h-1.5 rounded-full bg-[#00eaff] mr-3 shadow-[0_0_6px_#00eaff]"
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.8, 1, 0.8]
                            }}
                            transition={{
                              repeat: Infinity,
                              duration: 1.8
                            }}
                          />
                        ) : (
                          <span className="w-1.5 h-1.5 mr-3" />
                        )}
                        <span>{link.name}</span>
                      </Link>
                    </motion.li>
                  ))}

                  <motion.div className="mt-8" variants={itemVariants}>
                    <Link
                      href="/contact"
                      onClick={() => setIsMenuOpen(false)}
                      className="px-6 py-4 bg-gradient-to-r from-neon-cyan to-blue-500 text-deep-space font-semibold rounded-lg flex items-center justify-center gap-3"
                    >
                      <MessageCircle size={20} />
                      {/* Correction traduction */}
                      <span>{headerTranslations.contactMessage || 'Envoyer un message'}</span>
                    </Link>
                  </motion.div>

                  <motion.div
                    className="mt-4 flex justify-center gap-2"
                    variants={itemVariants}
                  >
                    <button
                      onClick={() => {
                        setLanguage('fr');
                        setIsMenuOpen(false); // Fermer le menu
                      }}
                      className={`px-3 py-2 text-sm rounded-lg transition-colors ${language === 'fr'
                          ? 'bg-foreground/10 text-foreground'
                          : 'text-foreground/50'
                        }`}
                    >
                      Français
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('ar');
                        setIsMenuOpen(false); // Fermer le menu
                      }}
                      className={`px-3 py-2 text-sm rounded-lg transition-colors ${language === 'ar'
                          ? 'bg-foreground/10 text-foreground'
                          : 'text-foreground/50'
                        }`}
                    >
                      العربية
                    </button>
                  </motion.div>
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}