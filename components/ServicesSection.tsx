import { motion, easeOut } from "framer-motion";
import {
  Code,
  Palette,
} from "lucide-react";
import * as Icons from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Service {
  title: string;
  description: string;
  icon: keyof typeof Icons;
}

const ServicesSection = () => {
  const [techServices, setTechServices] = useState<Service[]>([]);
  const [designServices, setDesignServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [techRes, designRes] = await Promise.all([
          fetch("/data/home/tech-services.json"),
          fetch("/data/home/design-services.json"),
        ]);
        const [techData, designData] = await Promise.all([
          techRes.json(),
          designRes.json(),
        ]);
        setTechServices(techData);
        setDesignServices(designData);
      } catch (error) {
        console.error("Erreur lors du chargement des services :", error);
      }
    };

    fetchAll();
  }, []);

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
      transition: { duration: 0.6, ease: easeOut }
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-neon-cyan/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-[60px]"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-cyan-900/30 rounded-full mb-4">
            <span className="text-neon-cyan font-medium">{"Nos domaines d'expertise"}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-blue-400">Services Clés</span>
          </h2>
          <p className="text-cyan-200 max-w-2xl mx-auto text-lg">
            {"Des solutions sur mesure pour propulser votre entreprise à l'ère numérique"}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            className="neon-border-gradient rounded-2xl p-8 bg-deep-midnight/40 backdrop-blur-sm"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-full mb-5 mx-auto">
                <Code className="text-neon-cyan" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{"Technologies de l'Information"}</h3>
              <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-blue-500 mx-auto rounded-full"></div>
            </div>

            <motion.ul
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {techServices.map((service, index) => {
                const Icon = Icons[service.icon as keyof typeof Icons] as React.ComponentType<{ size?: number, className?: string }>;

                return (
                  <motion.li
                    key={index}
                    className="group"
                    variants={itemVariants}
                  >
                    <div className="flex items-start gap-5 p-5 bg-deep-space/50 rounded-xl border border-cyan-900/30 group-hover:border-cyan-500/50 transition-all duration-300">
                      <div className="p-3 bg-cyan-900/20 rounded-lg group-hover:bg-cyan-900/40 transition-all">
                        <Icon size={24} className="text-neon-cyan" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                          {service.title}
                        </h4>
                        <p className="text-cyan-200 text-sm">{service.description}</p>
                      </div>
                    </div>
                  </motion.li>
                );
              })}
            </motion.ul>

          </motion.div>

          <motion.div
            className="neon-border-gradient rounded-2xl p-8 bg-deep-midnight/40 backdrop-blur-sm"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-full mb-5 mx-auto">
                <Palette className="text-neon-cyan" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Design Graphique & Communication</h3>
              <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-blue-500 mx-auto rounded-full"></div>
            </div>

            <motion.ul
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {designServices.map((service, index) => {
                const Icon = Icons[service.icon as keyof typeof Icons] as React.ComponentType<{ size?: number; className?: string }>;

                return (
                  <motion.li
                    key={index}
                    className="group"
                    variants={itemVariants}
                  >
                    <div className="flex items-start gap-5 p-5 bg-deep-space/50 rounded-xl border border-cyan-900/30 group-hover:border-cyan-500/50 transition-all duration-300">
                      <div className="p-3 bg-cyan-900/20 rounded-lg group-hover:bg-cyan-900/40 transition-all">
                        <Icon size={24} className="text-neon-cyan" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                          {service.title}
                        </h4>
                        <p className="text-cyan-200 text-sm">{service.description}</p>
                      </div>
                    </div>
                  </motion.li>
                );
              })}
            </motion.ul>

          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link
            href="/services"
            className="inline-block px-8 py-4 text-lg font-semibold bg-gradient-to-r from-neon-cyan to-blue-500 rounded-lg text-deep-space hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
          >
            Découvrir tous nos services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
