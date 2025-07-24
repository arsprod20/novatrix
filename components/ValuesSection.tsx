import { motion } from "framer-motion";
import {
  Sparkles, Rocket, Globe, Users
} from "lucide-react";

const ValuesSection = () => {
  const values = [
    {
      title: "Créer autrement",
      desc: "Nous repoussons les limites de la créativité pour bâtir des solutions innovantes et utiles.",
      icon: <Sparkles className="text-neon-cyan" size={32} />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "L’exigence au service de l’impact",
      desc: "Chaque ligne de code est pensée pour offrir des résultats durables et mesurables.",
      icon: <Rocket className="text-neon-cyan" size={32} />,
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Tech pour tous",
      desc: "Nous rendons la technologie accessible aux entrepreneurs, PME et institutions locales.",
      icon: <Globe className="text-neon-cyan" size={32} />,
      color: "from-emerald-500 to-cyan-500"
    },
    {
      title: "Développer chez nous",
      desc: "Notre priorité : renforcer l’écosystème numérique en Mauritanie et en Afrique.",
      icon: <Users className="text-neon-cyan" size={32} />,
      color: "from-amber-500 to-orange-500"
    }
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
      y: -10,
      scale: 1.03,
      boxShadow: "0 10px 25px rgba(3, 238, 255, 0.15)"
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-deep-space">
      {/* Fond décoratif */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-40 right-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-[80px]"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-cyan-900/30 rounded-full mb-4">
            <span className="text-neon-cyan font-medium">Notre ADN</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-blue-400">Valeurs Fondatrices</span>
          </h2>
          <p className="text-cyan-200 max-w-2xl mx-auto text-lg">
            Les principes qui guident chaque décision et chaque action chez Novatrix
          </p>
        </motion.div>

        {/* Grille de valeurs */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={itemVariants}
            >
              <div className="relative z-10">
                <div className="neon-border-gradient rounded-2xl overflow-hidden transform perspective">
                  <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 w-full h-96 flex items-center justify-center">
                    <div className="relative w-4/5 h-4/5">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl backdrop-blur-sm flex flex-col items-center justify-center p-6 border border-cyan-500/30 text-center">
                        <div className="mb-4">{value.icon}</div>
                        <div className="text-white font-semibold text-lg">{value.title}</div>
                        <div className="text-cyan-200 mt-2">{value.desc}</div>
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

        {/* Citation */}
        <motion.div
          className="mt-12 max-w-3xl mx-auto text-center relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="text-5xl text-neon-cyan absolute top-0 left-0 opacity-20">“</div>
          <p className="text-xl text-white italic relative px-10">
            "Nous ne faisons pas que coder. Nous construisons l’avenir digital de la Mauritanie — une solution à la fois."
          </p>
          <div className="mt-4 text-cyan-200 font-semibold">L'équipe Novatrix</div>
          <div className="absolute bottom-0 right-0 text-5xl text-neon-cyan opacity-20 rotate-180">“</div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;
