import { motion } from "framer-motion";
import { Mail, ArrowRight, Zap, MessageCircle, Star } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] animate-pulse delay-1000"></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-[60px] animate-pulse delay-2000"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div 
          className="neon-border-gradient rounded-2xl p-8 md:p-12 bg-deep-space/60 backdrop-blur-sm relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="absolute -top-20 -right-20 w-40 h-40 bg-neon-cyan rounded-full opacity-20 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute -bottom-20 -left-20 w-40 h-40 bg-neon-blue rounded-full opacity-20 blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.25, 0.1]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.2, 0.5]
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            />
          ))}
          
          <div className="relative z-10">
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-6 text-white text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Prêt à <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-blue-400">transformer</span> votre entreprise ?
            </motion.h2>
            
            <motion.p 
              className="text-cyan-100 text-xl mb-10 max-w-2xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Contactez-nous dès {"aujourd'hui"} pour discuter de votre projet et découvrir comment nous pouvons propulser votre présence digitale
            </motion.p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <motion.a
                href="mailto:contact@novatrix.mr"
                className="px-10 py-5 text-xl font-semibold bg-gradient-to-r from-neon-cyan to-blue-500 rounded-lg text-deep-space hover:shadow-lg hover:shadow-cyan-500/30 transition-all flex items-center justify-center gap-3 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(3, 238, 255, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="text-deep-space" size={24} />
                <span>Demandez un devis gratuit</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight className="text-deep-space" size={20} />
                </motion.div>
              </motion.a>
              
              <motion.a
                href="/contact"
                className="px-10 py-5 text-xl font-semibold border-2 border-neon-cyan rounded-lg text-neon-cyan hover:bg-cyan-900/20 transition-all flex items-center justify-center gap-3"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(3, 238, 255, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="text-neon-cyan" size={24} />
                <span>Discuter avec nous</span>
              </motion.a>
            </div>
          </div>
          
          <motion.div
            className="absolute top-8 left-8 opacity-70"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <Star className="text-cyan-300" size={24} fill="currentColor" />
          </motion.div>
          
          <motion.div
            className="absolute bottom-8 right-8 opacity-60"
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
          >
            <Zap className="text-blue-400" size={24} fill="currentColor" />
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-gradient-to-r from-neon-cyan to-blue-500 rounded-full opacity-10 blur-xl animate-pulse"></div>
      <div className="absolute top-10 right-1/4 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-10 blur-xl animate-pulse delay-500"></div>
    </section>
  );
};

export default CtaSection;