"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Code, Layout, Smartphone, Server, Shield,
  PenTool, Eye, Zap, Mail, Briefcase,
  Globe, Users, Star, ArrowRight,
  Monitor, ShoppingCart, Database, Lock,
  Palette, Video, MessageSquare, BarChart2,
  Settings, CheckCircle, Clock, Gift,
  Headphones, Calendar, Phone, ChevronRight
} from "lucide-react";

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState("it");
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  // Services IT
  const itServices = [
    {
      title: "Développement Web",
      icon: <Code className="text-cyan-400" size={24} />,
      description: "Sites vitrines, portails d'entreprise et plateformes complexes sur mesure",
      details: "Nous créons des solutions web performantes avec les dernières technologies comme React.js/Next.js, en optimisant le SEO et l'expérience utilisateur."
    },
    {
      title: "E-Commerce",
      icon: <ShoppingCart className="text-cyan-400" size={24} />,
      description: "Boutiques en ligne sécurisées avec gestion de stock et paiements locaux",
      details: "Solutions complètes avec intégration CMI, tableau de bord analytique et design mobile-first pour maximiser vos conversions."
    },
    {
      title: "Applications Mobiles",
      icon: <Smartphone className="text-cyan-400" size={24} />,
      description: "Applications natives et cross-platform pour iOS et Android",
      details: "Développement d'applications performantes avec React Native, API sécurisées et notifications push."
    },
    {
      title: "Solutions d'Entreprise",
      icon: <Briefcase className="text-cyan-400" size={24} />,
      description: "Systèmes de gestion intégrés pour optimiser vos opérations",
      details: "ERP personnalisé, CRM intelligent et outils de Business Intelligence pour transformer vos processus métiers."
    },
    {
      title: "Infrastructure & Hébergement",
      icon: <Server className="text-cyan-400" size={24} />,
      description: "Solutions d'hébergement local et gestion de vos serveurs",
      details: "Hébergement cloud sécurisé, noms de domaine .mr et sauvegardes quotidiennes pour une présence en ligne fiable."
    },
    {
      title: "Sécurité Informatique",
      icon: <Shield className="text-cyan-400" size={24} />,
      description: "Protection de vos données contre les cybermenaces",
      details: "Audits complets, pare-feux nouvelle génération et formations RGPD pour sécuriser votre infrastructure."
    }
  ];

  // Services Design
  const designServices = [
    {
      title: "Identité Visuelle",
      icon: <PenTool className="text-cyan-400" size={24} />,
      description: "Charte graphique complète pour une image de marque cohérente",
      details: "Création de logo, palette chromatique et guide de style pour une identité forte et mémorable."
    },
    {
      title: "UI/UX Design",
      icon: <Eye className="text-cyan-400" size={24} />,
      description: "Interfaces utilisateur intuitives et expériences digitales mémorables",
      details: "Wireframes interactifs, prototypes cliquables et tests utilisateurs pour des produits exceptionnels."
    },
    {
      title: "Design Print",
      icon: <Layout className="text-cyan-400" size={24} />,
      description: "Supports de communication physiques professionnels",
      details: "Création de cartes de visite, brochures et supports PLV pour votre communication offline."
    },
    {
      title: "Design Digital",
      icon: <Monitor className="text-cyan-400" size={24} />,
      description: "Contenus visuels pour vos canaux digitaux",
      details: "Bannières réseaux sociaux, emailings responsives et présentations impactantes."
    },
    {
      title: "Motion Design",
      icon: <Video className="text-cyan-400" size={24} />,
      description: "Animations et vidéos pour captiver votre audience",
      details: "Vidéos explicatives, animations logo et stories interactives pour engager vos utilisateurs."
    },
    {
      title: "Stratégie de Marque",
      icon: <BarChart2 className="text-cyan-400" size={24} />,
      description: "Positionnement et stratégie de communication sur mesure",
      details: "Audit de marque, stratégie digitale et benchmark pour un positionnement concurrentiel optimal."
    }
  ];

  // Processus de travail
  const workflowSteps = [
    {
      step: "1",
      title: "Consultation Initiale",
      description: "Analyse de vos besoins et objectifs commerciaux",
      icon: <MessageSquare className="text-cyan-400" size={20} />
    },
    {
      step: "2",
      title: "Proposition Stratégique",
      description: "Plan d'action détaillé avec livrables et échéancier",
      icon: <Settings className="text-cyan-400" size={20} />
    },
    {
      step: "3",
      title: "Conception & Développement",
      description: "Création itérative avec validations intermédiaires",
      icon: <Code className="text-cyan-400" size={20} />
    },
    {
      step: "4",
      title: "Lancement & Formation",
      description: "Mise en production et formation de vos équipes",
      icon: <Zap className="text-cyan-400" size={20} />
    },
    {
      step: "5",
      title: "Support Continu",
      description: "Maintenance, améliorations et suivi des performances",
      icon: <Headphones className="text-cyan-400" size={20} />
    }
  ];

  // Études de cas
  const caseStudies = [
    {
      title: "Plateforme E-Gouvernement",
      category: "Développement Web",
      description: "Solution centralisée pour les services administratifs mauritaniens",
      results: ["+300 000 utilisateurs", "Réduction des délais de 70%", "Prix de l'innovation numérique"]
    },
    {
      title: "Marketplace Locale",
      category: "E-Commerce",
      description: "Place de marché pour artisans et producteurs locaux",
      results: ["+500 vendeurs inscrits", "30% croissance mensuelle", "Intégration paiements locaux"]
    },
    {
      title: "Identité Bancaire Moderne",
      category: "Design d'Identité",
      description: "Refonte complète de l'identité visuelle d'une banque nationale",
      results: ["Modernisation de l'image", "Cohérence multi-canaux", "Augmentation de la confiance"]
    }
  ];

  return (
    <div className="min-h-screen text-white overflow-hidden ">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-cyan-900/20 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Solutions <span className="text-cyan-400">Professionnelles</span>
            </motion.h1>

            <motion.p
              className="text-xl text-cyan-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Des services sur mesure pour transformer votre vision digitale
            </motion.p>
          </div>
        </div>
      </section>

      {/* Navigation par Catégorie */}
      <section className="sticky top-0 z-20 ">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            <motion.button
              className={`px-5 py-2.5 rounded-full font-medium transition-all flex items-center ${activeTab === "it"
                  ? "bg-cyan-600 text-white shadow-lg shadow-cyan-700/30"
                  : "bg-[#000044] text-cyan-200 hover:bg-cyan-900/50"
                }`}
              onClick={() => setActiveTab("it")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Code className="mr-2" size={18} />
              Services IT
            </motion.button>

            <motion.button
              className={`px-5 py-2.5 rounded-full font-medium transition-all flex items-center ${activeTab === "design"
                  ? "bg-cyan-600 text-white shadow-lg shadow-cyan-700/30"
                  : "bg-[#000044] text-cyan-200 hover:bg-cyan-900/50"
                }`}
              onClick={() => setActiveTab("design")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <PenTool className="mr-2" size={18} />
              Design & Communication
            </motion.button>
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section id="services-section" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-20">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {activeTab === "it" ? "Expertise " : "Création "}
              <span className="text-cyan-400">
                {activeTab === "it" ? "Technologique" : "Digitale"}
              </span>
            </motion.h2>

            <motion.p
              className="text-lg text-cyan-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {activeTab === "it"
                ? "Des solutions techniques innovantes pour votre transformation digitale"
                : "Identité visuelle forte et expériences utilisateur mémorables"}
            </motion.p>
          </div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {(activeTab === "it" ? itServices : designServices).map((service, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <div className="relative z-10">
                  <div className="neon-border-gradient rounded-2xl overflow-hidden transform perspective">
                    <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 w-full h-96 flex items-center justify-center">
                      <div className="relative w-4/5 h-4/5">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl backdrop-blur-sm flex flex-col items-center justify-center p-6 border border-cyan-500/30 text-center">
                          <div className="mb-4">{service.icon}</div>
                          <div className="text-white font-semibold text-lg">{service.title}</div>
                          <div className="text-cyan-200 mt-2 text-sm">{service.description}</div>
                        </div>

                        {/* Éléments décoratifs */}
                        <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-neon-cyan/20 blur-xl animate-pulse"></div>
                        <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-blue-500/20 blur-xl animate-pulse"></div>

                        <div className="absolute top-6 -right-6 w-12 h-12 bg-gradient-to-r from-neon-cyan to-blue-500 rounded-lg rotate-12 animate-float"></div>
                        <div className="absolute bottom-8 -left-6 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg -rotate-12 animate-float delay-1000"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cercles d’ambiance autour */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-neon-cyan/10 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl animate-pulse"></div>

                {/* Éléments flottants animés */}
                <motion.div
                  className="absolute top-1/4 -left-10 w-8 h-8 bg-gradient-to-r from-neon-cyan to-blue-500 rounded-full"
                  animate={{ y: [0, -20, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-1/3 -right-8 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  animate={{ y: [0, 20, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


     {/* Notre Processus */}
<section className="py-16 md:py-24">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Processus <span className="text-cyan-400">Structuré</span>
      </motion.h2>

      <motion.p
        className="text-lg text-cyan-300 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        Une méthodologie éprouvée pour garantir votre succès
      </motion.p>
    </div>

    <div className="max-w-5xl mx-auto relative">
      {/* Ligne de progression verticale */}
      <div className="absolute left-8 top-10 bottom-10 w-1 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-600 z-0 hidden md:block rounded-full blur-sm" />

      <div className="space-y-16 relative z-10">
        {workflowSteps.map((step, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-start gap-6 group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Numéro */}
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-neon-cyan to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-cyan-700/40 group-hover:scale-110 transition-transform duration-300">
              {step.step}
            </div>

            {/* Contenu de l'étape */}
            <div className="flex-1 relative">
              <div className="relative rounded-xl p-6 border border-cyan-500/30 bg-gradient-to-br from-cyan-900/10 to-blue-900/10 backdrop-blur-md text-white shadow-lg shadow-cyan-700/10">
                <div className="flex items-center mb-3">
                  <div className="bg-cyan-800/30 p-3 rounded-lg mr-4 shadow-md shadow-cyan-800/20">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-cyan-200 text-sm">{step.description}</p>

                {/* décorations internes */}
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-neon-cyan/10 blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-14 h-14 rounded-full bg-blue-500/10 blur-xl animate-pulse"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Appel à l'action */}
      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold mb-6 text-white">Prêt à transformer votre projet ?</h3>
        <motion.button
          className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-8 py-3.5 rounded-full font-medium shadow-lg shadow-cyan-700/30 hover:shadow-cyan-600/40 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="flex items-center">
            Discuter de votre projet
            <ArrowRight className="ml-2" size={18} />
          </span>
        </motion.button>
      </motion.div>
    </div>
  </div>
</section>

    </div>
  );
};

export default ServicesPage;