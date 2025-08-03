'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Record<string, any>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr'); // initial par défaut
  const [translations, setTranslations] = useState({});
  const [isReady, setIsReady] = useState(false); // pour savoir si on a lu localStorage

  useEffect(() => {
    // Lire localStorage au montage (uniquement côté client)
    const savedLang = localStorage.getItem('language');
    if (savedLang === 'fr' || savedLang === 'ar') {
      setLanguage(savedLang as Language);
    }
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady) return; // éviter d'exécuter avant lecture

    // Charger les traductions
    const loadTranslations = async () => {
      try {
        const data = await import(`@/locales/${language}.json`);
        setTranslations(data);
      } catch (error) {
        console.error(`Failed to load ${language} translations:`, error);
      }
    };

    loadTranslations();

    // Mise à jour lang et dir du document
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';

    localStorage.setItem('language', language);
  }, [language, isReady]);

  if (!isReady) {
    // Optionnel : afficher un loader ou rien pendant la lecture de la langue
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};
