import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TrustedClientsSection = () => {
  const logos = [
    { name: "TechMauritanie", color: "from-cyan-500 to-blue-500" },
    { name: "Nouakchott Digital", color: "from-purple-500 to-indigo-500" },
    { name: "Sahara Solutions", color: "from-emerald-500 to-teal-500" },
    { name: "Atlas Consulting", color: "from-amber-500 to-orange-500" },
    { name: "Oasis Tech", color: "from-rose-500 to-pink-500" },
    { name: "MauriSoft", color: "from-blue-400 to-cyan-400" },
    { name: "Désert Innovation", color: "from-yellow-500 to-amber-500" },
    { name: "Nouadhibou Tech", color: "from-green-500 to-emerald-500" },
    { name: "Zéphyr Solutions", color: "from-indigo-500 to-purple-500" },
    { name: "Sahel Digital", color: "from-red-500 to-orange-500" },
    { name: "Kiffa Connect", color: "from-cyan-400 to-blue-400" },
    { name: "Rosso Tech Hub", color: "from-violet-500 to-purple-500" },
  ];

  const testimonials = [
    {
      text: "Novatrix a révolutionné notre présence digitale avec une stratégie sur-mesure qui a triplé notre trafic en seulement 3 mois.",
      author: "Aicha Bâ",
      position: "Directrice Marketing, TechMauritanie",
    },
    {
      text: "Leur expertise en développement web et leur compréhension du marché local ont été déterminantes pour le succès de notre plateforme.",
      author: "Mohamed Salem",
      position: "PDG, Sahara Solutions",
    },
    {
      text: "Une équipe réactive et professionnelle qui a su transformer nos idées en une interface utilisateur exceptionnelle.",
      author: "Fatimetou Ahmed",
      position: "Fondatrice, Oasis Tech",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-[60px]"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-cyan-900/30 rounded-full mb-4">
            <span className="text-neon-cyan font-medium">Nos partenaires</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ils Nous Ont <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-blue-400">Fait Confiance</span>
          </h2>
          <p className="text-cyan-200 max-w-2xl mx-auto text-lg">
            Des entreprises et institutions satisfaites par notre expertise et notre professionnalisme
          </p>
        </motion.div>

        {/* Logo Grid avec animation */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="group"
              variants={{
                hidden: { scale: 0.8, opacity: 0 },
                visible: { 
                  scale: 1, 
                  opacity: 1,
                  transition: { duration: 0.5, ease: "easeOut" } 
                }
              }}
            >
              <div className="bg-deep-space/50 backdrop-blur-sm rounded-xl border border-cyan-900/30 h-32 flex items-center justify-center p-4 group-hover:border-cyan-500/50 transition-all">
                <div className="relative">
                  <div className={`bg-gradient-to-br ${logo.color} w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xs text-center`}>
                    {logo.name.split(' ')[0]}
                  </div>
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Carrousel de témoignages */}
        <motion.div 
          className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 backdrop-blur-sm rounded-3xl border border-cyan-900/30 p-10 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="text-5xl text-neon-cyan absolute top-6 left-6 opacity-20">“</div>
          
          <div className="relative">
            {/* Témoignages */}
            <div className="overflow-hidden">
              <motion.div 
                className="flex"
                animate={{ 
                  x: ["0%", "-100%", "-200%"],
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <div key={index} className="min-w-full px-4 py-2">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-6">
                        <Quote className="text-neon-cyan" size={24} />
                      </div>
                      <p className="text-xl text-white italic mb-6 max-w-3xl">
                        {testimonial.text}
                      </p>
                      <div>
                        <div className="text-cyan-200 font-bold text-lg">{testimonial.author}</div>
                        <div className="text-cyan-300 text-sm">{testimonial.position}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Contrôles du carrousel */}
            <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4">
              <button className="p-2 rounded-full bg-deep-space/50 border border-cyan-900/30 text-neon-cyan hover:bg-cyan-900/20 transition-all">
                <ChevronLeft size={24} />
              </button>
              <button className="p-2 rounded-full bg-deep-space/50 border border-cyan-900/30 text-neon-cyan hover:bg-cyan-900/20 transition-all">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          
          <div className="text-5xl text-neon-cyan absolute bottom-6 right-6 opacity-20 rotate-180">“</div>
          
          {/* Éléments décoratifs */}
          <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-neon-cyan/10 blur-xl"></div>
          <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-blue-500/10 blur-xl"></div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Prêt à transformer votre présence digitale ?
          </h3>
          <button className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-neon-cyan to-blue-500 rounded-lg text-deep-space hover:shadow-lg hover:shadow-cyan-500/30 transition-all flex items-center justify-center gap-3 mx-auto">
            <span>Devenez notre prochain client satisfait</span>
            <ChevronRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedClientsSection;