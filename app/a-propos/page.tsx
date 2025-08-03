"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { useState, useEffect } from "react";
import type { LucideProps } from "lucide-react";
import { useLanguage } from '@/context/LanguageContext';


// Définition du type pour les icônes Lucide
type LucideIcon = React.ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> &
  React.RefAttributes<SVGSVGElement>
>;

// Type pour les données JSON
interface CoreValue {
  title: string;
  description: string;
  icon: string;
}

interface ServiceItem {
  name: string;
  icon: string;
}

interface ServiceCategory {
  category: string;
  items: ServiceItem[];
}

interface Commitment {
  title: string;
  description: string;
  icon: string;
}

interface AboutData {
  coreValues: CoreValue[];
  services: ServiceCategory[];
  commitments: Commitment[];
}

const AboutPage = () => {
  const [data, setData] = useState<AboutData | null>(null);

  const { translations, language } = useLanguage();
  const aboutSectionTranslations = translations.aboutSection || {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/data/a-propos/aboutData.${language}.json`);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Erreur de chargement des données:", error);
      }
    };

    fetchData();
  }, [language]);

  // Fonction pour obtenir les icônes de manière sûre
  const getLucideIcon = (iconName: string): LucideIcon | null => {
    const iconKey = iconName as keyof typeof LucideIcons;
    return LucideIcons[iconKey] as LucideIcon || null;
  };

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <p>Chargement des données...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white overflow-hidden">

      {/* Hero Section - À Propos */}
      <section className="relative py-16 md:py-20 overflow-hidden text-white">
        {/* Background Overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('/background-pattern.svg')] bg-cover bg-center" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">

            {language === 'fr' ? (
              <motion.h1
                className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                À <span className="text-cyan-400">Propos</span> de Nous
              </motion.h1>
            ) : (
              <motion.h1
                className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {aboutSectionTranslations.heroSection?.title}
              </motion.h1>
            )}


            <motion.p
              className="text-lg md:text-xl text-cyan-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {aboutSectionTranslations.heroSection?.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {language === 'fr' ? (
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Notre <span className="text-cyan-400">Histoire</span>
                </h2>
              ) : (
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {aboutSectionTranslations.notreHistoire?.title}
                </h2>
              )}

              <p className="text-cyan-200 mb-4">
                {aboutSectionTranslations.notreHistoire?.paragraphs[0]}
              </p>
              <p className="text-cyan-200 mb-4">
                {aboutSectionTranslations.notreHistoire?.paragraphs[1]}
              </p>
              <p className="text-cyan-200">
                {aboutSectionTranslations.notreHistoire?.paragraphs[2]}
              </p>

              <div className="mt-8 p-6 bg-[#000066]/50 rounded-xl border border-cyan-400/20">
                <h3 className="text-xl font-bold text-cyan-400 mb-3">{aboutSectionTranslations.notreHistoire?.visionTitle}</h3>
                <p className="text-cyan-200">
                  {aboutSectionTranslations.notreHistoire?.visionContent}
                </p>
              </div>
            </motion.div>

            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border-2 border-cyan-400/30">
                <Image
                  src="/notre-vision.png"
                  alt="Notre engagement numérique"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000066] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                  <p className="text-lg italic text-cyan-200">
                     {aboutSectionTranslations.notreHistoire?.engagementQuote}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Notre Mission */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">

            {language === 'fr' ? (
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Notre <span className="text-cyan-400">Mission</span> & Valeurs
              </motion.h2>
            ) : (
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {aboutSectionTranslations.notreMission?.title}
              </motion.h2>
            )}


            <motion.p
              className="text-xl text-cyan-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {aboutSectionTranslations.notreMission?.subtitle}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.coreValues.map((value, index) => {
              const Icon = getLucideIcon(value.icon);
              return (
                <motion.div
                  key={index}
                  className="p-8 rounded-xl border border-cyan-400/20"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-4">
                    {Icon && <Icon className="text-cyan-400" size={48} />}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-cyan-400">{value.title}</h3>
                  <p className="text-cyan-200">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Domaines d'Expertise */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">

            {language === 'fr' ? (
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Nos <span className="text-cyan-400">Domaines {"d'Expertise"}</span>
              </motion.h2>
            ) : (
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {aboutSectionTranslations.domainesExpertise?.title}
              </motion.h2>
            )}


            <motion.p
              className="text-xl text-cyan-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {aboutSectionTranslations.domainesExpertise?.subtitle}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {data.services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-[#000044]/50 rounded-xl p-8 border border-cyan-400/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6 text-cyan-400">{service.category}</h3>
                <div className="space-y-4">
                  {service.items.map((item, itemIndex) => {
                    const Icon = getLucideIcon(item.icon);
                    return (
                      <div key={itemIndex} className="flex items-start">
                        {Icon && <Icon className="text-cyan-400 mt-0.5 mr-3" size={20} />}
                        <p className="text-lg text-cyan-200">{item.name}</p>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Engagements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {language === 'fr' ? (
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Nos <span className="text-cyan-400">Engagements</span>
                </h2>

              ) : (
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {aboutSectionTranslations.nosEngagements?.title}
                </h2>
              )}

              <p className="text-cyan-200 mb-6">
                {aboutSectionTranslations.nosEngagements?.intro}
              </p>

              <div className="space-y-6">
                {data.commitments.map((commitment, index) => {
                  const Icon = getLucideIcon(commitment.icon);
                  return (
                    <motion.div
                      key={index}
                      className="flex items-start bg-[#000044]/50 p-4 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {Icon && <Icon className="text-cyan-400 mt-1 mr-4" size={24} />}
                      <div>
                        <h3 className="font-bold text-lg mb-1 text-cyan-300">{commitment.title}</h3>
                        <p className="text-cyan-200">{commitment.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-2xl border-2 border-cyan-400/30">
                <Image
                  src="/notre-engagement.png"
                  alt="Engagement Illustration"
                  fill
                  className="object-cover rounded-xl"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000066cc] via-transparent to-transparent rounded-xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            {language === 'fr' ? (
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Prêt à propulser votre <span className="text-cyan-400">projet numérique</span> ?
              </motion.h2>
            ) : (
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {aboutSectionTranslations.ctaSection?.title}
              </motion.h2>
            )}


            <motion.p
              className="text-xl text-cyan-300 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {aboutSectionTranslations.ctaSection?.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link href="/contact">
                <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center mx-auto transition-all duration-300 transform hover:scale-105">
                  {aboutSectionTranslations.ctaSection?.buttonText} <LucideIcons.ArrowRight className="ml-2" size={18} />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;