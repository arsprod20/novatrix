import { motion } from "framer-motion";
import { Rocket, Target, Users, Lightbulb, Globe} from "lucide-react";

const PresentationSection = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.section
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-deep-space to-midnight-blue"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          className="space-y-8"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-cyan-900/20 rounded-full mb-4">
              <Rocket className="text-neon-cyan" size={20} />
              <span className="text-neon-cyan font-semibold">À propos de nous</span>
            </div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              Novatrix - <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-blue-400">{"L'Excellence"} Numérique</span> Mauritanienne
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-cyan-100 text-lg leading-relaxed"
            variants={itemVariants}
          >
            Fondée par une équipe de jeunes professionnels mauritaniens passionnés, Novatrix se positionne comme un acteur majeur dans deux secteurs stratégiques : les technologies de {"l'information"} et le design graphique.
          </motion.p>

          <motion.p
            className="text-cyan-100 text-lg leading-relaxed"
            variants={itemVariants}
          >
            Notre mission : Accompagner les particuliers, entreprises, startups et institutions dans leur transformation numérique avec des solutions innovantes et adaptées au contexte local.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10"
            variants={containerVariants}
          >
            <motion.div
              className="neon-border-gradient p-6 rounded-2xl bg-deep-midnight backdrop-blur-sm hover:bg-cyan-900/10 transition-all duration-300"
              whileHover={{ y: -5 }}
              variants={itemVariants}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-cyan-900/30 rounded-lg">
                  <Target className="text-neon-cyan" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Vision</h3>
              </div>
              <p className="text-cyan-100">
                Devenir le principal catalyseur de la transformation numérique en Mauritanie et positionner le pays comme un hub technologique régional.
              </p>
            </motion.div>

            <motion.div
              className="neon-border-gradient p-6 rounded-2xl bg-deep-midnight backdrop-blur-sm hover:bg-cyan-900/10 transition-all duration-300"
              whileHover={{ y: -5 }}
              variants={itemVariants}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-cyan-900/30 rounded-lg">
                  <Lightbulb className="text-neon-cyan" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Engagement</h3>
              </div>
              <p className="text-cyan-100">
                Chaque projet contribue au développement du secteur tech national et à la création {"d'opportunités"} pour les jeunes talents mauritaniens.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {[
              {
                label: "Innovation locale",
                description: "Nous croyons en la puissance de la tech au service de la Mauritanie.",
                icon: <Globe size={24} />
              },
              {
                label: "Créativité sans limites",
                description: "Chaque projet est une nouvelle opportunité de créer l’exceptionnel.",
                icon: <Lightbulb size={24} />
              },
              {
                label: "Engagement humain",
                description: "Derrière chaque ligne de code, il y a un impact humain et social.",
                icon: <Users size={24} />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-left p-6 bg-deep-midnight/50 rounded-xl border border-cyan-900/30"
                variants={itemVariants}
              >
                <div className="flex items-center gap-3 mb-3 text-neon-cyan font-bold text-lg">
                  <span className="shrink-0">{item.icon}</span>
                  <span>{item.label}</span>
                </div>

                <div className="text-cyan-200 text-sm leading-relaxed">
                  {item.description}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>

        <motion.div
          className="relative"
          variants={itemVariants}
        >
          <div className="relative z-10">
            <div className="neon-border-gradient rounded-2xl overflow-hidden transform perspective">
              <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 w-full h-96 md:h-[500px] flex items-center justify-center">
                <div className="relative w-4/5 h-4/5">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl backdrop-blur-sm flex flex-col items-center justify-center p-6 border border-cyan-500/30">
                    <Users className="text-cyan-300 mb-4" size={48} />
                    <div className="text-center">
                      <div className="text-white font-semibold text-lg">Notre équipe</div>
                      <div className="text-cyan-200 mt-2">Jeunes talents mauritaniens passionnés</div>
                    </div>
                  </div>

                  <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-neon-cyan/20 blur-xl animate-pulse"></div>
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-blue-500/20 blur-xl animate-pulse"></div>

                  <div className="absolute top-6 -right-6 w-12 h-12 bg-gradient-to-r from-neon-cyan to-blue-500 rounded-lg rotate-12 animate-float"></div>
                  <div className="absolute bottom-8 -left-6 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg -rotate-12 animate-float delay-1000"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -top-8 -right-8 w-32 h-32 bg-neon-cyan/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl animate-pulse"></div>

          <motion.div
            className="absolute top-1/4 -left-10 w-8 h-8 bg-gradient-to-r from-neon-cyan to-blue-500 rounded-full"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute bottom-1/3 -right-8 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PresentationSection;