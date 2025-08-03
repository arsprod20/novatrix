//contact/page.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Mail, Phone, MessageSquare,
  User, Briefcase, Globe, Send, CheckCircle, X,
  Facebook, Twitter, Instagram, Linkedin, Headphones,
} from "lucide-react";
import { useLanguage } from '@/context/LanguageContext';


const ContactPage = () => {
  const { translations, language } = useLanguage();
  const contactSectionTranslations = translations.contactSection || {};


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
  const [services, setServices] = useState<string[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`/data/contact/contactData.${language}.json`);
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error("Erreur lors du chargement des services:", error);
      }
    };

    fetchServices();
  }, [language]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          contactType: activeTab
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: ""
        });
      } else {
        throw new Error(result.error || 'Erreur lors de l\'envoi du message');
      }
    } catch {
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {language === 'fr' ? (
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Contactez <span className="text-cyan-400">Novatrix</span>
              </motion.h1>
            ) : (
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {contactSectionTranslations.hero?.title}
              </motion.h1>
            )}


            <motion.p
              className="text-xl text-cyan-200 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {contactSectionTranslations.hero?.subtitle}
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
              {contactSectionTranslations.tabs?.support}
            </button>

            <button
              className={`px-6 py-3 rounded-full font-medium transition-all flex items-center ${activeTab === "commercial" ? "bg-cyan-600 text-white" : "bg-[#000066] text-cyan-200 hover:bg-cyan-900"}`}
              onClick={() => setActiveTab("commercial")}
            >
              <Briefcase className="mr-2" size={18} />
              {contactSectionTranslations.tabs?.commercial}
            </button>

            <button
              className={`px-6 py-3 rounded-full font-medium transition-all flex items-center ${activeTab === "partnership" ? "bg-cyan-600 text-white" : "bg-[#000066] text-cyan-200 hover:bg-cyan-900"}`}
              onClick={() => setActiveTab("partnership")}
            >
              <Globe className="mr-2" size={18} />
              {contactSectionTranslations.tabs?.partnership}
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
                    ? contactSectionTranslations.form?.titles?.support
                    : activeTab === "commercial"
                      ? contactSectionTranslations.form?.titles?.commercial
                      : contactSectionTranslations.form?.titles?.partnership}
                </h2>
                <p className="text-cyan-300 mb-8">
                  {contactSectionTranslations.form?.description}
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-cyan-300 mb-2">{contactSectionTranslations.form?.labels?.name}</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400" size={18} />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-[#000033] border border-cyan-400/20 rounded-lg py-3 pl-10 pr-4 focus:border-cyan-400 focus:outline-none"
                          placeholder={contactSectionTranslations.form?.placeholders?.name}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-cyan-300 mb-2">{contactSectionTranslations.form?.labels?.email}</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400" size={18} />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-[#000033] border border-cyan-400/20 rounded-lg py-3 pl-10 pr-4 focus:border-cyan-400 focus:outline-none"
                          placeholder={contactSectionTranslations.form?.placeholders?.email}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-cyan-300 mb-2">{contactSectionTranslations.form?.labels?.phone}</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400" size={18} />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-[#000033] border border-cyan-400/20 rounded-lg py-3 pl-10 pr-4 focus:border-cyan-400 focus:outline-none"
                          placeholder={contactSectionTranslations.form?.placeholders?.phone}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-cyan-300 mb-2">{contactSectionTranslations.form?.labels?.company}</label>
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400" size={18} />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full bg-[#000033] border border-cyan-400/20 rounded-lg py-3 pl-10 pr-4 focus:border-cyan-400 focus:outline-none"
                          placeholder={contactSectionTranslations.form?.placeholders?.company}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-cyan-300 mb-2">
                      {activeTab === "support"
                        ? contactSectionTranslations.form?.labels?.service_support 
                        : activeTab === "commercial"
                          ? contactSectionTranslations.form?.labels?.service_commercial
                          : contactSectionTranslations.form?.labels?.service_partnership}
                    </label>
                    <div className="relative">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#000033] border border-cyan-400/20 rounded-lg py-3 pl-10 pr-4 focus:border-cyan-400 focus:outline-none appearance-none"
                      >
                        <option value="">{contactSectionTranslations.form?.labels?.selectOptionPlaceholder}</option>
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
                    <label className="block text-cyan-300 mb-2">{contactSectionTranslations.form?.labels?.message}</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-4 text-cyan-400" size={18} />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-[#000033] border border-cyan-400/20 rounded-lg py-3 pl-10 pr-4 focus:border-cyan-400 focus:outline-none"
                        placeholder={contactSectionTranslations.form?.placeholders?.message}
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
                          {contactSectionTranslations.form?.submit?.default}
                        </>
                      ) : (
                        <>
                          {contactSectionTranslations.form?.submit?.sending} <Send className="ml-2" size={18} />
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
                

                <div className="space-y-6">

                  {/* Réseaux Sociaux */}
                  <div className="pt-6 border-t border-cyan-400/20">
                    <h3 className="text-lg font-bold mb-4">{contactSectionTranslations.contactInfo?.socialTitle}</h3>
                    <div className="flex space-x-4">
                      {[
                        { icon: <Facebook size={20} />, label: "Facebook", href: "https://www.facebook.com/novatrix01" },
                        { icon: <Twitter size={20} />, label: "Twitter", href: "https://x.com/Novatrix01" },
                        { icon: <Instagram size={20} />, label: "Instagram", href: "https://www.instagram.com/novat_rix/" },
                        { icon: <Linkedin size={20} />, label: "LinkedIn", href: "https://www.linkedin.com/company/novatrix01/" }
                      ].map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
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

      {/* Modal de succès */}
      <AnimatePresence>
        {submitSuccess && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gradient-to-br from-[#000044] to-[#000066] rounded-xl p-8 max-w-md w-full border border-cyan-400/20 relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                onClick={() => setSubmitSuccess(false)}
                className="absolute top-4 right-4 text-cyan-300 hover:text-white"
                aria-label="Fermer"
              >
                <X size={24} />
              </button>

              <div className="text-center">
                <CheckCircle className="text-green-400 mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-2">{contactSectionTranslations.modal?.successTitle}</h3>
                <p className="text-cyan-200 mb-6">
                  {contactSectionTranslations.modal?.successMessage}
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-lg font-medium"
                >
                   {contactSectionTranslations.modal?.close}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactPage;