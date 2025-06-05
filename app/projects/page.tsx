// app/projects/page.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { EyeIcon, Code2Icon, ArrowUpRightIcon, XIcon, StarIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { CommandLineIcon, PuzzlePieceIcon } from '@heroicons/react/24/outline';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import type SwiperType from 'swiper';


type Project = {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  images: string[];
  demo: string;
  code: string;
  featured: boolean;
  category: string;
  achievements?: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "Universal Financial Dashboard",
    description: "Real-time financial dashboard for businesses",
    longDescription: "Design and development of a real-time financial dashboard tailored for businesses of all sizes (from startups to large enterprises). Features include revenue and expense tracking, cash flow visualization, budget forecasting, and automatic generation of financial reports. The dashboard enables decision-makers to efficiently monitor key performance indicators through interactive charts and exportable reports.",
    tech: ["NextJs", "TypeScript", "Node.js", "PostgreSQL", "Chart.js", "Redux", "Prisma", "Neon", "nodemailer", "framer motion", "ExpressJs"],
    images: [
      "/dashboard/1.png",
      "/dashboard/2.png",
      "/dashboard/3.png",
      "/dashboard/4.png",
      "/dashboard/5.png",
      "/dashboard/6.png",
      "/dashboard/7.png",
      "/dashboard/8.png",
      "/dashboard/9.png",
      "/dashboard/10.png",
      "/dashboard/11.png",
      "/dashboard/12.png",
    ],
    demo: "https://financial-dashboard-sage-pi.vercel.app/",
    code: "https://github.com/arsprod2001/Financial-Dashboard.git",
    featured: false,
    category: "fullstack"
  },

  {
    id: 2,
    title: "International Money Transfer Platform",
    description: "Cross-platform mobile application for fast and secure transfers",
    longDescription: "Development of a cross-platform mobile application (Android & iOS) for fast and secure international money transfers. Unlike traditional services, the platform relies on a network of local agents for receiving and distributing funds through widely used payment methods. It integrates OTP code verification and strict validation processes to ensure enhanced security, reduced fees, and real-time transaction tracking.",
    tech: ["React Native", "Firebase", "Node.js", "Twilio", "Neon", "PostgreSQL", "ExpressJS", "TypeScript", "TailwindCSS", "ChartJS", "Stripe", "ExpressJs"],
    images: [
      "/Transfert/2.jpg",
      "/Transfert/8.jpg",
      "/Transfert/3.jpg",
      "/Transfert/4.jpg",
      "/Transfert/5.jpg",
      "/Transfert/6.jpg",
      "/Transfert/7.jpg",
      "/Transfert/9.jpg",
      "/Transfert/10.jpg",
      "/Transfert/11.jpg",
      "/Transfert/12.jpg",
    ],
    demo: "#",
    code: "https://github.com/arsprod2001/International-Money-Transfer.git",
    featured: false,
    category: "mobile",
    achievements: [
      "Enhanced security via OTP",
      "Network of local agents",
      "Real-time transaction tracking",
      "Reduced fees compared to competitors"
    ]
  },
  {
    id: 3,
    title: "Service Matching Platform",
    description: "Mobile application to connect service providers and clients",
    longDescription: "Development of a mobile application that facilitates the connection between service providers and clients, featuring simplified search, communication, and booking functionalities. The platform covers various services such as plumbing, electrical work, repairs, hairstyling, and more. The focus was on intuitive navigation, verified provider profiles, and secure payments to enhance trust and accessibility within the service sector.",
    tech: ["React Native", "Node.js", "Supabase", "MySQL", "ExpressJS", "ChartJS", ""],
    images: [
      "/offre/1.jpg",
      "/offre/2.jpg",
      "/offre/3.jpg",
      "/offre/4.jpg",
      "/offre/5.jpg",
      "/offre/6.jpg",
      "/offre/7.jpg",
      "/offre/8.jpg",
      "/offre/9.jpg",
      "/offre/10.jpg",
    ],
    demo: "#",
    code: "https://github.com/arsprod2001/Plateforme-offre-service.git",
    featured: false,
    category: "mobile"
  },

  {
    id: 5,
    title: "Système d'Authentification Sécurisé avec Dashboard",
    description: "Plateforme web pour la gestion sécurisée des utilisateurs et des rôles",
    longDescription: "Développement d'une plateforme web complète d'authentification et de gestion des utilisateurs, intégrant les meilleures pratiques de sécurité. Le système comprend l'inscription et la connexion avec validation côté serveur, vérification de la force des mots de passe via Have I Been Pwned (HIBP), gestion des sessions via Redis, ainsi qu’un tableau de bord permettant d’administrer les rôles et permissions des utilisateurs. L’architecture repose sur un backend Express/Node.js, une base de données PostgreSQL via Prisma, et une interface utilisateur moderne développée avec Next.js, React Hook Form, et Zod pour la validation des données.",
    tech: ["Next.js", "React Hook Form", "Zod", "Redis", "Prisma", "ExpressJS", "Node.js", "HIBP", "PostgreSQL"],
    images: [
      "/auth/1.png",
      "/auth/2.png",
      "/auth/3.png",
      "/auth/4.png"
    ],
    demo: "https://plateforme-authentification-gestion.vercel.app/login",
    code: "https://github.com/arsprod2001/plateforme-authentification-gestion.git",
    featured: false,
    category: "fullstack"
  }
];

const categories = ["All", "frontend", "backend", "fullstack", "mobile"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;
  const swiperRef = useRef<SwiperType | null>(null);

  // Animation pour les étoiles de fond
  useEffect(() => {
    const stars = document.getElementById('stars');
    if (stars) {
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'absolute rounded-full bg-white/20';
        star.style.width = `${Math.random() * 3}px`;
        star.style.height = star.style.width;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animation = `twinkle ${Math.random() * 5 + 2}s infinite alternate`;
        stars.appendChild(star);
      }
    }
  }, []);

  // Filtrer les projets
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory));
    }
    setCurrentPage(1); // Réinitialiser à la première page quand la catégorie change
  }, [selectedCategory]);

  // Réinitialiser l'index du slider lors de l'ouverture d'un projet
  useEffect(() => {
    if (selectedProject) {
      setActiveIndex(0);
    }
  }, [selectedProject]);

  // Calcul des projets à afficher pour la pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-background to-[#0a192f] relative overflow-hidden">
      {/* Étoiles de fond animées */}
      <div id="stars" className="absolute inset-0 z-0 pointer-events-none" />

      {/* Effets de lumière */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00eaff]/10 rounded-full filter blur-[100px] opacity-30 -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full filter blur-[100px] opacity-30 -z-10" />

      {/* Section Principale */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-foreground">My </span>
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#00eaff] to-[#00b4d8]"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            >
              Achievements
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl text-foreground/80 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Concrete solutions combining performance, design, and technological innovation.
          </motion.p>
        </motion.div>

        {/* Filtres par catégorie */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-lg font-medium transition-all ${selectedCategory === category
                ? 'bg-gradient-to-r from-[#00eaff] to-[#00b4d8] text-background'
                : 'bg-background/80 text-foreground/80 hover:text-foreground border border-foreground/10 hover:border-[#00eaff]/50'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Grille des Projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {currentProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                layoutId={`project-${project.id}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, type: "spring" }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 25px -5px rgba(0, 234, 255, 0.2)'
                }}
                className="relative group bg-background/80 border border-foreground/10 rounded-2xl overflow-hidden backdrop-blur-sm"
                onClick={() => setSelectedProject(project)}
                onMouseEnter={() => setIsHovered(project.id)}
                onMouseLeave={() => setIsHovered(null)}
              >
                {/* Image du projet */}
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    placeholder="blur"
                    blurDataURL="/placeholder.jpg"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/90" />

                  {/* Badge multi-images */}
                  {project.images.length > 1 && (
                    <div className="absolute bottom-4 right-4 bg-background/80 text-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                      <div className="flex">
                        {[...Array(Math.min(project.images.length, 3))].map((_, i) => (
                          <div
                            key={i}
                            className="w-1 h-1 rounded-full bg-foreground/80 mx-0.5"
                          />
                        ))}
                      </div>
                      {project.images.length} images
                    </div>
                  )}

                  {/* Animation de survol */}
                  {isHovered === project.id && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00eaff]/10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    />
                  )}
                </div>

                {/* Badge Featured */}
                {project.featured && (
                  <motion.div
                    className="absolute top-4 right-4 bg-gradient-to-r from-[#00eaff] to-[#00b4d8] text-background px-3 py-1 rounded-full text-sm font-medium shadow-lg"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center gap-1">
                      <StarIcon className="w-4 h-4" />
                      Flagship Project
                    </div>
                  </motion.div>
                )}

                {/* Contenu */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      whileHover={{ rotate: 20, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <CommandLineIcon className="w-6 h-6 text-[#00eaff]" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                  </div>

                  <p className="text-foreground/80 mb-4">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 text-sm border border-foreground/10 rounded-full bg-background/50 hover:border-[#00eaff]/50 hover:text-[#00eaff] transition-all"
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Liens */}
                  <div className="flex gap-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#00eaff] hover:text-[#00eaff]/80 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <EyeIcon className="w-5 h-5" />
                      Demo
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#00eaff] hover:text-[#00eaff]/80 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Code2Icon className="w-5 h-5" />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-6 mt-12">
            <motion.button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`flex items-center gap-2 px-6 py-2 rounded-full text-lg font-medium transition-all ${currentPage === 1
                ? 'bg-background/10 text-foreground/30 cursor-not-allowed'
                : 'bg-gradient-to-r from-[#00eaff] to-[#00b4d8] text-background hover:opacity-90'
                }`}
              whileHover={{ scale: currentPage === 1 ? 1 : 1.05 }}
              whileTap={{ scale: currentPage === 1 ? 1 : 0.95 }}
            >
              <ChevronLeftIcon className="w-5 h-5" />
              Previous
            </motion.button>

            <div className="flex items-center gap-2 text-foreground/80">
              <span className="font-semibold text-foreground">{currentPage}</span>
              <span>/</span>
              <span>{totalPages}</span>
            </div>

            <motion.button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-2 px-6 py-2 rounded-full text-lg font-medium transition-all ${currentPage === totalPages
                ? 'bg-background/10 text-foreground/30 cursor-not-allowed'
                : 'bg-gradient-to-r from-[#00eaff] to-[#00b4d8] text-background hover:opacity-90'
                }`}
              whileHover={{ scale: currentPage === totalPages ? 1 : 1.05 }}
              whileTap={{ scale: currentPage === totalPages ? 1 : 0.95 }}
            >
              Next
              <ChevronRightIcon className="w-5 h-5" />
            </motion.button>
          </div>
        )}

        {/* Modal de détails du projet */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-background/90 border border-foreground/10 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                onClick={(e) => e.stopPropagation()}
                layoutId={`project-${selectedProject.id}`}
              >
                {/* Header modal */}
                <div className="sticky top-0 bg-background border-b border-foreground/10 p-6 flex justify-between items-center">
                  <h3 className="text-3xl font-bold text-foreground">{selectedProject.title}</h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-full hover:bg-foreground/10 text-foreground/50 hover:text-foreground"
                  >
                    <XIcon className="w-6 h-6" />
                  </button>
                </div>

                {/* Contenu modal */}
                <div className="p-6">
                  {/* Carrousel Swiper */}
                  <div className="relative mb-6">
                    <Swiper
                      modules={[Navigation, Pagination]}
                      navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                      }}
                      pagination={{
                        clickable: true,
                        renderBullet: (_, className) => {
                          return `<span class="${className} bg-foreground/30 w-2 h-2"></span>`;
                        },
                      }}
                      onSwiper={(swiper) => swiperRef.current = swiper}
                      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                      className="rounded-xl overflow-hidden"
                    >
                      {selectedProject.images.map((image, index) => (
                        <SwiperSlide key={index}>
                          <div className="relative h-80 md:h-96">
                            <Image
                              src={image}
                              alt={`${selectedProject.title} screenshot ${index + 1}`}
                              fill
                              className="object-contain"
                              placeholder="blur"
                              blurDataURL="/placeholder.jpg"
                              sizes="(max-width: 768px) 100vw, 80vw"
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    {/* Navigation personnalisée */}
                    <div className="absolute bottom-4 right-4 z-10 bg-background/80 px-2 py-1 rounded-full text-sm text-foreground/80">
                      {activeIndex + 1} / {selectedProject.images.length}
                    </div>

                    <button
                      className="swiper-button-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 p-2 rounded-full hover:bg-[#00eaff]/20 transition-colors"
                      onClick={() => swiperRef.current?.slidePrev()}
                    >
                      <ChevronLeftIcon className="w-6 h-6 text-foreground" />
                    </button>
                    <button
                      className="swiper-button-next absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 p-2 rounded-full hover:bg-[#00eaff]/20 transition-colors"
                      onClick={() => swiperRef.current?.slideNext()}
                    >
                      <ChevronRightIcon className="w-6 h-6 text-foreground" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <h4 className="text-xl font-bold text-foreground mb-4">Description</h4>
                      <p className="text-foreground/80 mb-6">{selectedProject.longDescription}</p>

                      {selectedProject.achievements && (
                        <>
                          <h4 className="text-xl font-bold text-foreground mb-4">Key Results</h4>
                          <ul className="space-y-3 mb-6">
                            {selectedProject.achievements.map((achievement, i) => (
                              <motion.li
                                key={i}
                                className="flex items-start gap-3"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                              >
                                <div className="bg-[#00eaff] rounded-full p-1 mt-1">
                                  <StarIcon className="w-4 h-4 text-background" />
                                </div>
                                <span className="text-foreground/90">{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </>
                      )}

                      <h4 className="text-xl font-bold text-foreground mb-4">Technologies Used</h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.tech.map((tech) => (
                          <motion.div
                            key={tech}
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00eaff]/10 to-[#00b4d8]/10 border border-foreground/10 rounded-lg"
                            whileHover={{ scale: 1.05 }}
                          >
                            <PuzzlePieceIcon className="w-5 h-5 text-[#00eaff]" />
                            <span className="text-foreground">{tech}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="bg-gradient-to-br from-background to-[#0a192f] border border-foreground/10 rounded-xl p-6">
                        <h4 className="text-xl font-bold text-foreground mb-4">Project Details</h4>

                        <div className="space-y-4">
                          <div>
                            <p className="text-foreground/60 text-sm">Category</p>
                            <p className="text-foreground capitalize">{selectedProject.category}</p>
                          </div>

                          <div className="pt-4">
                            <a
                              href={selectedProject.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between gap-2 w-full px-4 py-3 bg-gradient-to-r from-[#00eaff] to-[#00b4d8] text-background rounded-lg mb-3 hover:shadow-[0_0_20px_#00eaff50] transition-all"
                            >
                              View Demo
                              <ArrowUpRightIcon className="w-5 h-5" />
                            </a>
                            <a
                              href={selectedProject.code}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between gap-2 w-full px-4 py-3 border border-[#00eaff] text-[#00eaff] rounded-lg hover:bg-[#00eaff]/10 transition-all"
                            >
                              Access Code
                              <Code2Icon className="w-5 h-5" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-center mt-20 bg-gradient-to-r from-[#00eaff]/10 to-[#00b4d8]/10 p-8 rounded-2xl border border-foreground/10 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Got a project in mind?
          </h3>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#00eaff] to-[#00b4d8] text-background rounded-lg font-semibold text-lg"
            >
              Let’s talk about it.
              <ArrowUpRightIcon className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <style jsx>{`
        @keyframes twinkle {
          0% { opacity: 0.2; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}