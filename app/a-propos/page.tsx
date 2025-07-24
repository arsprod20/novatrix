"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Zap, Lightbulb, ArrowRight, Heart, Home, Shield, Clock, Eye, Code, Smartphone, Layout, Server, PenTool } from "lucide-react";
import Link from "next/link";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Amadou Sow",
      role: "Développeur Full-Stack & Designer",
      bio: "Développeur full-stack polyvalent avec une forte sensibilité design. Spécialisé en applications web/mobile, cloud computing et administration réseau.",
      image: "/team/amadou-sow.png"
    },
    {
      name: "Amadou Dem",
      role: "Spécialiste FinTech & Business Intelligence",
      bio: "Expert en solutions digitales, combinant innovation financière, analyse de données et automatisation des processus métier.",
      image: "/team/amadou-dem.jpg"
    },
    {
      name: "Abdoulaye Ba",
      role: "Développeur Web, Mobile & Backend",
      bio: "Développeur confirmé avec expertise en backend, web et mobile. Expérience dans les secteurs fintech, santé et télécoms.",
      image: "/team/abdoulaye-ba.jpg"
    },
    {
      name: "Sidi Ngaide",
      role: "Designer & Spécialiste Automation & Branding",
      bio: "Designer créatif avec une formation en automatisation. Spécialiste en branding et contenu visuel pour le digital.",
      image: "/team/sidi-ngaide.jpg"
    }
  ];



  const coreValues = [
    {
      title: "Innovation",
      description: "Solutions avant-gardistes adaptées au marché mauritanien",
      icon: <Lightbulb className="text-cyan-400" size={24} />
    },
    {
      title: "Excellence",
      description: "Rigueur dans l'exécution et attention aux détails",
      icon: <Star className="text-cyan-400" size={24} />
    },
    {
      title: "Accessibilité",
      description: "Offres adaptées à tous les budgets",
      icon: <Heart className="text-cyan-400" size={24} />
    },
    {
      title: "Patriotisme économique",
      description: "Développement des compétences locales et valorisation des talents nationaux",
      icon: <Home className="text-cyan-400" size={24} />
    },
  ];



  // Services offerts
  const services = [
    {
      category: "Technologies de l'Information",
      items: [
        { name: "Développement web & mobile", icon: <Code size={20} /> },
        { name: "Infogérance & Hébergement", icon: <Server size={20} /> },
        { name: "Maintenance IT & Support", icon: <Smartphone size={20} /> },
        { name: "Sécurité informatique", icon: <Shield size={20} /> }
      ]
    },
    {
      category: "Design & Communication",
      items: [
        { name: "Identité visuelle", icon: <PenTool size={20} /> },
        { name: "Création print & digital", icon: <Layout size={20} /> },
        { name: "UI/UX Design", icon: <Eye size={20} /> },
        { name: "Motion design", icon: <Zap size={20} /> }
      ]
    }
  ];

  // Engagements
  const commitments = [
    {
      title: "Satisfaction garantie",
      description: "Revisions illimitées jusqu'à parfaite adéquation",
      icon: <Heart className="text-cyan-400" size={24} />
    },
    {
      title: "Délais tenus",
      description: "Pénalités en cas de retard de livraison",
      icon: <Clock className="text-cyan-400" size={24} />
    },
    {
      title: "Transparence",
      description: "Devis détaillés sans coûts cachés",
      icon: <Lightbulb className="text-cyan-400" size={24} />
    },
    {
      title: "Confidentialité",
      description: "Protocoles de sécurité conformes RGPD",
      icon: <Shield className="text-cyan-400" size={24} />
    },
  ];

  return (
    <div className="min-h-screen text-white overflow-hidden">
      {/* Hero Section */}
      {/*<section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0  opacity-80" />
          <div className="absolute bottom-0 left-0 right-0 h-20 " />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              L'Excellence Numérique <span className="text-cyan-400">Mauritanienne</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-cyan-200 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Novatrix conjugue technologie et créativité pour propulser votre croissance
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex justify-center"
            >
              <button className="cta-button px-8 py-4 rounded-lg text-lg font-semibold flex items-center transition-all duration-300 transform hover:scale-105">
                Découvrir nos services <ArrowRight className="ml-2" size={18} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>*/}

      <section className="relative py-20 md:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-90" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              A <span className="text-cyan-400">Propos</span>
            </motion.h1>

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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Notre <span className="text-cyan-400">Histoire</span>
              </h2>
              <p className="text-cyan-200 mb-4">
                Novatrix est née {"d'une"} ambition partagée par de jeunes professionnels mauritaniens : participer activement à la modernisation du paysage numérique national.
              </p>
              <p className="text-cyan-200 mb-4">
                Fondée en 2025 à Nouakchott, notre entreprise s’engage à construire des solutions digitales innovantes en valorisant les talents locaux et en répondant aux besoins concrets du marché.
              </p>
              <p className="text-cyan-200">
                Nous amorçons cette aventure avec passion, humilité et détermination, en plaçant {"l'impact"} positif et la qualité au cœur de chacun de nos projets.
              </p>

              <div className="mt-8 p-6 bg-[#000066]/50 rounded-xl border border-cyan-400/20">
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Notre Vision</h3>
                <p className="text-cyan-200">
                  Devenir un acteur de référence dans le domaine de {"l'innovation"} numérique en Mauritanie, et bâtir des partenariats durables au service de la transformation digitale en Afrique de {"l'Ouest."}
                </p>
              </div>

            </motion.div>

            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border-2 border-cyan-400/30">
                <Image
                  src="/notre-vision.png" 
                  alt="Notre engagement numérique"
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000066] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                  <p className="text-lg italic text-cyan-200">
                    {"Chaque projet renforce notre engagement pour la croissance numérique mauritanienne"}
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
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Notre <span className="text-cyan-400">Mission</span> & Valeurs
            </motion.h2>

            <motion.p
              className="text-xl text-cyan-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Accompagner votre transformation numérique avec des solutions sur mesure et accessibles
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-xl border border-cyan-400/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-cyan-400">{value.title}</h3>
                <p className="text-cyan-200">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Domaines d'Expertise */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Nos <span className="text-cyan-400">Domaines {"d'Expertise"}</span>
            </motion.h2>

            <motion.p
              className="text-xl text-cyan-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Une synergie unique entre technologie et créativité
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
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
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start">
                      <span className="text-cyan-400 mt-0.5 mr-3">{item.icon}</span>
                      <p className="text-lg text-cyan-200">{item.name}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {"L'Équipe"} <span className="text-cyan-400">Novatrix</span>
            </motion.h2>

            <motion.p
              className="text-xl text-cyan-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Collectif de jeunes experts mauritaniens unis par votre réussite numérique
            </motion.p>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-[#000066]/50 rounded-xl overflow-hidden shadow-xl border border-cyan-400/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-cyan-400 mb-3">{member.role}</p>
                  <p className="text-cyan-200">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Chiffres Clés */}
      { /*<section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Novatrix en <span className="text-cyan-400">Chiffres</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 p-8 rounded-xl text-center border border-cyan-400/20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-cyan-400 flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2 text-cyan-400">{stat.value}</div>
                <div className="text-cyan-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>*/}

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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Nos <span className="text-cyan-400">Engagements</span>
              </h2>

              <p className="text-cyan-200 mb-6">
                Chez Novatrix, nous transformons nos valeurs en actions concrètes pour garantir votre satisfaction.
              </p>

              <div className="space-y-6">
                {commitments.map((commitment, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start bg-[#000044]/50 p-4 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-cyan-400 mt-1 mr-4">
                      {commitment.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-cyan-300">{commitment.title}</h3>
                      <p className="text-cyan-200">{commitment.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-2xl border-2 border-cyan-400/30">
                
                <Image
                  src='/notre-engagement.png'
                  alt="Engagement Illustration"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                  priority={true}
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
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Prêt à propulser votre <span className="text-cyan-400">projet numérique</span> ?
            </motion.h2>

            <motion.p
              className="text-xl text-cyan-300 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Contactez Novatrix pour des solutions sur mesure qui transforment vos défis en succès
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link href="/contact">
                <button className="cta-button px-8 py-4 rounded-lg text-lg font-semibold flex items-center mx-auto transition-all duration-300 transform hover:scale-105">
                  Discutons de votre projet <ArrowRight className="ml-2" size={18} />
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