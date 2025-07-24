import { motion } from "framer-motion";
import { 
  MapPin, Settings, Palette, Zap, 
  Shield, Users, BarChart, CheckCircle,
  Sparkles, Rocket, Target, Globe
} from "lucide-react";

const WhyChooseUsSection = () => {
  const reasons = [
    
    {
      title: "Approche sur-mesure",
      desc: "Solutions adaptées à votre budget et besoins spécifiques",
      icon: <Settings className="text-neon-cyan" size={24} />
    },
    {
      title: "Double compétence",
      desc: "Synergie unique entre technologie et créativité",
      icon: <Palette className="text-neon-cyan" size={24} />
    },
    {
      title: "Réactivité",
      desc: "Support technique 6j/7 avec réponse rapide",
      icon: <Zap className="text-neon-cyan" size={24} />
    },
   
    {
      title: "Équipe passionnée",
      desc: "Professionnels mauritaniens dédiés à votre succès",
      icon: <Users className="text-neon-cyan" size={24} />
    }
  ];

  const stats = [
    { value: "98%", label: "Clients satisfaits", icon: <CheckCircle size={20} /> },
    { value: "24h", label: "Temps de réponse moyen", icon: <Sparkles size={20} /> },
    { value: "50+", label: "Projets réussis", icon: <Rocket size={20} /> },
    { value: "100%", label: "Engagement local", icon: <Globe size={20} /> }
  ];

  // Variantes d'animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      backgroundColor: "rgba(3, 238, 255, 0.05)"
    }
  };

  return (
    <section className="py-24  px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-[60px]"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-cyan-900/30 rounded-full mb-4">
            <Target className="text-neon-cyan" size={20} />
            <span className="text-neon-cyan font-medium">Notre avantage compétitif</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pourquoi Choisir <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-blue-400">Novatrix</span>
          </h2>
          <p className="text-cyan-200 max-w-2xl mx-auto text-lg">
            Découvrez ce qui nous distingue dans l'écosystème numérique mauritanien
          </p>
        </motion.div>

        {/* Grille de raisons */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-deep-space/50 backdrop-blur-sm rounded-2xl border border-cyan-900/30 p-8 flex items-start gap-6 group"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="p-4 bg-cyan-900/20 rounded-full group-hover:bg-gradient-to-br from-cyan-500/20 to-blue-500/20 transition-all">
                {reason.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                  {reason.title}
                </h3>
                <p className="text-cyan-200">
                  {reason.desc}
                </p>
              </div>
              
              {/* Animation au survol */}
              <motion.div 
                className="absolute top-4 right-4 w-2 h-2 rounded-full bg-neon-cyan"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Section Statistiques */}
        <motion.div 
          className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 backdrop-blur-sm rounded-3xl border border-cyan-900/30 p-10 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center p-6 bg-deep-midnight/40 rounded-xl border border-cyan-900/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index + 0.3, duration: 0.5 }}
              >
                <div className="text-3xl font-bold text-neon-cyan mb-2 flex items-center justify-center gap-2">
                  {stat.icon}
                  {stat.value}
                </div>
                <div className="text-cyan-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section Témoignage */}
        <motion.div 
          className="relative bg-deep-space/50 backdrop-blur-sm rounded-3xl border border-cyan-900/30 p-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="text-5xl text-neon-cyan absolute top-6 left-6 opacity-20">“</div>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
              <Users className="text-neon-cyan" size={40} />
            </div>
            
            <div className="flex-1">
              <p className="text-xl text-white italic mb-6">
                "Novatrix a transformé notre présence digitale avec une approche sur-mesure qui comprend parfaitement les spécificités du marché mauritanien. Leur réactivité et leur expertise technique sont exceptionnelles."
              </p>
              <div className="text-cyan-200 font-semibold">Mohamed Ahmed</div>
              <div className="text-cyan-300 text-sm">Directeur Marketing, Entreprise XYZ</div>
            </div>
          </div>
          
          <div className="text-5xl text-neon-cyan absolute bottom-6 right-6 opacity-20 rotate-180">“</div>
          
          {/* Éléments décoratifs */}
          <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-neon-cyan/10 blur-xl"></div>
          <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-blue-500/10 blur-xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;