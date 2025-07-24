"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail, Phone, MessageSquare,
  User, Briefcase, Globe, Send, CheckCircle,
  Facebook, Twitter, Instagram, Linkedin, Youtube, Headphones
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState("support");

  const services = [
    "Développement Web",
    "Applications Mobiles",
    "E-Commerce",
    "Identité Visuelle",
    "UI/UX Design",
    "Marketing Digital",
    "Sécurité Informatique",
    "Autre"
  ];

  {/**
   const supportTeam = [
    {
      name: "Mohamed Ould Ahmed",
      role: "Support Technique",
      email: "mohamed@novatrix.mr",
      phone: "+222 36 12 34 56"
    },
    {
      name: "Khadijetou Mint Salem",
      role: "Service Client",
      email: "khadijetou@novatrix.mr",
      phone: "+222 36 23 45 67"
    },
    {
      name: "Sidi Mohamed Ould Brahim",
      role: "Responsable Commercial",
      email: "commercial@novatrix.mr",
      phone: "+222 36 34 56 78"
    }
  ];
  
  */}


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi de formulaire
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: ""
      });

      // Réinitialiser le message de succès après 5 secondes
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };


  return (
    <div className="min-h-screen  text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">


        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Contactez <span className="text-cyan-400">Novatrix</span>
            </motion.h1>

            <motion.p
              className="text-xl text-cyan-200 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Nous sommes à votre écoute pour concrétiser vos projets digitaux et répondre à toutes vos questions
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-12 ">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <button
              className={`px-6 py-3 rounded-full font-medium transition-all flex items-center ${activeTab === "support" ? "bg-cyan-600 text-white" : "bg-[#000066] text-cyan-200 hover:bg-cyan-900"}`}
              onClick={() => setActiveTab("support")}
            >
              <Headphones className="mr-2" size={18} />
              Support Client
            </button>

            <button
              className={`px-6 py-3 rounded-full font-medium transition-all flex items-center ${activeTab === "commercial" ? "bg-cyan-600 text-white" : "bg-[#000066] text-cyan-200 hover:bg-cyan-900"}`}
              onClick={() => setActiveTab("commercial")}
            >
              <Briefcase className="mr-2" size={18} />
              Demande Commerciale
            </button>

            <button
              className={`px-6 py-3 rounded-full font-medium transition-all flex items-center ${activeTab === "partnership" ? "bg-cyan-600 text-white" : "bg-[#000066] text-cyan-200 hover:bg-cyan-900"}`}
              onClick={() => setActiveTab("partnership")}
            >
              <Globe className="mr-2" size={18} />
              Partenariat
            </button>
          </div>
        </div>
      </section>

      {/* Section Principale - Contact & Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Formulaire de Contact */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-[#000044] to-[#000066] rounded-xl p-8 border border-cyan-400/20">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  {activeTab === "support"
                    ? "Demande de Support"
                    : activeTab === "commercial"
                      ? "Devis Commercial"
                      : "Demande de Partenariat"}
                </h2>
                <p className="text-cyan-300 mb-8">
                  Remplissez le formulaire et notre équipe vous répondra dans les plus brefs délais
                </p>

                {submitSuccess && (
                  <motion.div
                    className="mb-6 p-4 bg-green-900/30 border border-green-500 rounded-lg flex items-start"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <CheckCircle className="text-green-400 mr-3 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-green-400">Message envoyé avec succès !</h3>
                      <p className="text-green-200 mt-1">
                        Nous avons bien reçu votre demande et vous contacterons dans les plus brefs délais.
                      </p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-cyan-300 mb-2">Votre nom complet *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400" size={18} />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-[#000033] border border-cyan-400/20 rounded-lg py-3 pl-10 pr-4 focus:border-cyan-400 focus:outline-none"
                          placeholder="Ex: Mohamed Ahmed"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-cyan-300 mb-2">Adresse email *</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400" size={18} />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-[#000033] border border-cyan-400/20 rounded-lg py-3 pl-10 pr-4 focus:border-cyan-400 focus:outline-none"
                          placeholder="Ex: contact@entreprise.mr"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-cyan-300 mb-2">Téléphone</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400" size={18} />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-[#000033] border border-cyan-400/20 rounded-lg py-3 pl-10 pr-4 focus:border-cyan-400 focus:outline-none"
                          placeholder="Ex: +222 36 12 34 56"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-cyan-300 mb-2">Entreprise / Organisation</label>
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400" size={18} />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full bg-[#000033] border border-cyan-400/20 rounded-lg py-3 pl-10 pr-4 focus:border-cyan-400 focus:outline-none"
                          placeholder="Ex: Société XYZ"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-cyan-300 mb-2">
                      {activeTab === "support"
                        ? "Type de support demandé *"
                        : activeTab === "commercial"
                          ? "Service intéressé *"
                          : "Type de partenariat *"}
                    </label>
                    <div className="relative">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#000033] border border-cyan-400/20 rounded-lg py-3 pl-10 pr-4 focus:border-cyan-400 focus:outline-none appearance-none"
                      >
                        <option value="">Sélectionnez une option</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-cyan-400">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-cyan-300 mb-2">Votre message *</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-4 text-cyan-400" size={18} />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-[#000033] border border-cyan-400/20 rounded-lg py-3 pl-10 pr-4 focus:border-cyan-400 focus:outline-none"
                        placeholder="Décrivez votre projet ou votre demande..."
                      />
                    </div>
                  </div>

                  <div className="mt-8">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 rounded-lg font-semibold flex items-center justify-center transition-all ${isSubmitting
                        ? "bg-cyan-800 cursor-not-allowed"
                        : "bg-cyan-600 hover:bg-cyan-700"
                        }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          Envoyer mon message <Send className="ml-2" size={18} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Informations de Contact */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-[#000044] to-[#000066] rounded-xl p-8 border border-cyan-400/20 h-full">
                <h2 className="text-2xl md:text-3xl font-bold mb-8">Nos Coordonnées</h2>

                <div className="space-y-6">


                  {/* Contact */}
                  <div className="flex items-start">
                    <div className="bg-cyan-900/30 p-3 rounded-lg mr-4">
                      <Phone className="text-cyan-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Téléphone & WhatsApp</h3>
                      <p className="text-cyan-200">Support: (+222) 36 12 34 56</p>
                      <p className="text-cyan-200">Commercial: (+222) 36 45 67 89</p>

                      <button className="mt-3 bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg font-medium flex items-center">
                        Appeler maintenant
                      </button>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start">
                    <div className="bg-cyan-900/30 p-3 rounded-lg mr-4">
                      <Mail className="text-cyan-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Email</h3>
                      <p className="text-cyan-200">Support: support@novatrix.dev</p>
                      <p className="text-cyan-200">Commercial: contact@novatrix.dev</p>
                      <p className="text-cyan-200">Carrières: recrutement@novatrix.dev</p>
                    </div>
                  </div>



                  {/* Réseaux Sociaux */}
                  <div className="pt-6 border-t border-cyan-400/20">
                    <h3 className="text-lg font-bold mb-4">Suivez-nous sur les réseaux</h3>
                    <div className="flex space-x-4">
                      {[
                        { icon: <Facebook size={20} />, label: "Facebook" },
                        { icon: <Twitter size={20} />, label: "Twitter" },
                        { icon: <Instagram size={20} />, label: "Instagram" },
                        { icon: <Linkedin size={20} />, label: "LinkedIn" },
                        { icon: <Youtube size={20} />, label: "YouTube" }
                      ].map((social, index) => (
                        <a
                          key={index}
                          href="#"
                          className="w-12 h-12 rounded-full bg-[#000033] border border-cyan-400/20 flex items-center justify-center hover:bg-cyan-900/30 transition-colors"
                          aria-label={social.label}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/** 
       * 
       * <section className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Notre <span className="text-cyan-400">Équipe de Support</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-cyan-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Des experts dédiés à votre satisfaction et à la réussite de vos projets
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportTeam.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-br from-[#000044] to-[#000066] rounded-xl overflow-hidden border border-cyan-400/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-br from-cyan-700 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-cyan-400">{member.role}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Mail className="text-cyan-400 mr-3" size={18} />
                      <a href={`mailto:${member.email}`} className="text-cyan-200 hover:text-cyan-300">
                        {member.email}
                      </a>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="text-cyan-400 mr-3" size={18} />
                      <a href={`tel:${member.phone}`} className="text-cyan-200 hover:text-cyan-300">
                        {member.phone}
                      </a>
                    </div>
                  </div>
                  
                  <button className="mt-6 w-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 py-2 rounded-lg transition-colors">
                    Prendre rendez-vous
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
       * 
      */}

    </div>
  );
};

export default ContactPage;