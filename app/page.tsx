'use client';

// components/Home.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MailIcon } from 'lucide-react';
import {
  BookOpenIcon, ArrowUpRightIcon, LightBulbIcon, PencilSquareIcon, RocketLaunchIcon, AcademicCapIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import { motion } from 'framer-motion';
import CurrentProject from '@/components/CurrentProject'



// Styles Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CodeBracketIcon, ServerIcon, CpuChipIcon, ChartBarIcon, PaintBrushIcon, CircleStackIcon, CommandLineIcon } from '@heroicons/react/24/outline';

type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  images: string[];
  status: string | null;
  date: string;
  client: string | null;
  category: string;
  githubUrl: string;
  demoUrl: string;
  features: string[];
  tech: string[];
  tags: string[];
};



const projects = [
  {
    id: 1,
    title: "Universal Financial Dashboard",
    description: "Real-time financial dashboard for businesses",
    longDescription: "High-performance financial dashboard designed for businesses of all sizes. Tracks revenue, expenses, cash flow, budget forecasts, and automates report generation. Features interactive data visualization to support strategic decision-making.",
    images: [
      "/image-dash/1.jpg",
      "/image-dash/2.jpg",
      "/image-dash/3.jpg",
      "/image-dash/4.jpg",
      "/image-dash/5.jpg",
      "/image-dash/6.jpg",
      "/image-dash/7.jpg",
      "/image-dash/8.jpg",
      "/image-dash/9.jpg",
      "/image-dash/10.jpg",
      "/image-dash/11.jpg",
      "/image-dash/12.jpg",
    ],
    status: null,
    date: "March 2025",
    client: null,
    category: "Web Application",
    githubUrl: "https://github.com/arsprod2001/Financial-Dashboard.git",
    demoUrl: "https://financial-dashboard-sage-pi.vercel.app/",
    features: [
      "Real-time visualization",
      "Customizable reports",
      "Automated alerts",
      "Data export"
    ],
    tech: ["NextJs", "TypeScript", "Node.js", "PostgreSQL", "Chart.js", "Redux", "Prisma", "Neon", "nodemailer", "framer motion", "ExpressJs"],
    tags: ["React", "Dashboard", "Finance", "Web"]
  },

  {
    id: 2,
    title: "International Money Transfer Platform",
    description: "Cross-platform mobile application for fast and secure transfers",
    longDescription: "Development of a cross-platform mobile app (Android & iOS) enabling fast and secure international money transfers. The system leverages a network of local agents for cash pickup/deposit via popular payment methods. Features include OTP verification, strict compliance checks, low transaction fees, and real-time transfer tracking.",
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
    status: null,
    date: "January 2025",
    client: null,
    category: "Mobile Application",
    githubUrl: "https://github.com/arsprod2001/International-Money-Transfer.git",
    demoUrl: "#",
    features: [
      "Two-factor authentication via OTP",
      "Real-time transaction tracking",
      "Local agent network",
      "Low-cost transfers"
    ],
    tech: ["React Native", "Firebase", "Node.js", "Twilio", "Neon", "PostgreSQL", "ExpressJS", "TypeScript", "TailwindCSS", "ChartJS", "Stripe", "ExpressJs", "MapBox"],
    tags: ["React Native", "Finance", "Mobile", "Sécurité"]
  },
  {
    id: 3,
    title: "Service Matching Platform",
    description: "Mobile application connecting service providers with clients",
    longDescription: "Mobile application connecting service providers and clients across various fields (plumbing, electrical work, hairdressing, repairs, etc.). Focus on intuitive navigation, verified profiles, and secure integrated communication to enhance trust and accessibility.",
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
    status: null,
    date: "September 2024",
    client: null,
    category: "Mobile Application",
    githubUrl: "https://github.com/arsprod2001/Plateforme-offre-service.git",
    demoUrl: "#",
    features: [
      "Advanced search and filtering",
      "Verified service provider profiles",
      "Integrated payment system",
      "Direct messaging and chat"
    ],
    tech: ["React Native", "Node.js", "Supabase", "MySQL", "ExpressJS", "ChartJS"],
    tags: ["React Native", "Services", "Mobile", "UX"]
  },

];


const parcours = [
  {
    year: "2017",
    title: "Self-taught in graphic design",
    location: "Nouakchott, Mauritania",
    description: "Began my self-taught graphic design journey mastering tools like Photoshop, Illustrator, and After Effects.",
    icon: <PaintBrushIcon className="h-6 w-6 text-yellow-400" />,
    color: "from-yellow-400 to-orange-400",
    type: "professional"
  },
  {
    year: "2022-2024",
    title: "Bachelor's Degree in Computer Engineering",
    location: "Gaston Berger University, Saint-Louis, Senegal",
    description: "Advanced training in software development, networking, systems, and databases.",
    icon: <AcademicCapIcon className="h-6 w-6 text-purple-400" />,
    color: "from-[#a855f7] to-[#ec4899]",
    type: "academic"
  },
  {
    year: "2023",
    title: "Front-End Developer",
    location: "IT Service, Nouakchott, Mauritania",
    description: "Building modern web interfaces with React, React Native, and TailwindCSS. API integration and state management using Redux.",
    icon: <CodeBracketIcon className="h-6 w-6 text-cyan-400" />,
    color: "from-[#00eaff] to-cyan-300",
    type: "professional"
  },
  {
    year: "2023-2024",
    title: "Back-End Developer",
    location: "Synergie ACM, Nouakchott, Mauritania",
    description: "RESTful/GraphQL API development with Node.js. Database optimization for PostgreSQL, MySQL, and MongoDB.",
    icon: <CodeBracketIcon className="h-6 w-6 text-cyan-400" />,
    color: "from-[#00eaff] to-cyan-300",
    type: "professional"
  },
  {
    year: "2024",
    title: "Data Scientist",
    location: "Kane Consulting Group, Nouakchott, Mauritania",
    description: "Data analysis, processing, and visualization using Python, R, and Excel to support strategic decision-making.",
    icon: <ChartBarIcon className="h-6 w-6 text-cyan-400" />,
    color: "from-[#00eaff] to-cyan-300",
    type: "professional"
  },
  {
    year: "2025",
    title: "Computer Systems Technician",
    location: "Collège Boréal, Toronto, Canada",
    description: "Current studies focused on systems, networking, programming, and technical support.",
    icon: <AcademicCapIcon className="h-6 w-6 text-purple-400" />,
    color: "from-[#a855f7] to-[#ec4899]",
    type: "academic"
  }
];


const skills = [
  {
    name: 'Frontend',
    level: 'Advanced',
    techs: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Redux'],
    icon: CodeBracketIcon,
    color: '#00eaff'
  },
  {
    name: 'Backend',
    level: 'Advanced',
    techs: ['Node.js', 'Express', 'GraphQL', 'Prisma'],
    icon: ServerIcon,
    color: '#00eaff'
  },
  {
    name: 'Mobile',
    level: 'Advanced',
    techs: ['React Native', 'Expo'],
    icon: CpuChipIcon,
    color: '#00eaff'
  },
  {
    name: 'Database',
    level: 'Advanced',
    techs: ['PostgreSQL', 'MySQL', 'MongoDB'],
    icon: CircleStackIcon,
    color: '#00eaff'
  },
  {
    name: 'Programming Languages',
    level: 'Advanced',
    techs: ['Python', 'JavaScript', 'Java', 'C++', 'C', 'R'],
    icon: CommandLineIcon,
    color: '#00eaff'
  }
];




/*
const blogPosts = [
  {
    title: "Optimisation des performances dans Next.js 14",
    date: "15 Mars 2024",
    excerpt: "Découvrez les meilleures pratiques pour booster vos applications Next.js avec le nouveau compilateur Turbopack...",
    link: "/blog/nextjs-perf",
    readTime: "8 min"
  },
  {
    title: "Architecture Microservices avec Go et gRPC",
    date: "10 Mars 2024",
    excerpt: "Guide complet pour construire un système distribué évolutif avec les dernières fonctionnalités de Go 1.22...",
    link: "/blog/microservices-go",
    readTime: "12 min"
  },
  {
    title: "Sécurité Web : Bonnes pratiques modernes",
    date: "5 Mars 2024",
    excerpt: "Mettez en place les dernières mesures de sécurité dans vos applications React et Node.js...",
    link: "/blog/web-security",
    readTime: "10 min"
  }
];

*/

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  link: string;
}

const blogPosts: BlogPost[] = [];

export default function Home() {

  //const { register, handleSubmit } = useForm();

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  //const [isSubmitted, setIsSubmitted] = useState(false);
  //const [isSubmitting, setIsSubmitting] = useState(false);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // États supplémentaires à ajouter
  const [isFullscreen, setIsFullscreen] = useState(false);



  {/** 
  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      // Simuler un délai d'envoi (remplacez par votre appel API réel)
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Traitement des données...
      console.log(data);

      // Afficher le message de succès
      setIsSubmitted(true);
    } catch (error) {
      console.error("Erreur d'envoi:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  */}

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setIsFullscreen(false);
  };


  const nextImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex(prev =>
      prev < selectedProject.images.length - 1 ? prev + 1 : 0
    );
  };



  const prevImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex(prev =>
      prev > 0 ? prev - 1 : selectedProject.images.length - 1
    );
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setIsFullscreen(false); // Désactive le plein écran
  };


  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col-reverse md:flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 py-8 md:py-12 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
        {/* Effets de fond */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00eaff]/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#00eaff]/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-[#00eaff]/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
        </div>

        {/* Contenu texte - en bas sur mobile, à gauche sur desktop */}
        <motion.div
          className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left mt-8 md:mt-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="text-foreground">{"Hi, I'm"} </span>
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#00eaff] to-cyan-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Amadou Sow
            </motion.span>
          </motion.h1>

          <motion.h2
            className="text-xl sm:text-2xl text-foreground/90 flex flex-wrap justify-center lg:justify-start items-center gap-2 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <span>Fullstack Developer | Building Scalable Digital Solutions</span>
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="text-[#00eaff] hidden sm:inline"
            >

            </motion.span>

          </motion.h2>

          <motion.p
            className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto lg:mx-0 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            I design and develop modern, high-performance, and scalable web applications with a focus on usability, speed, and code quality.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Link
                href="/projects"
                className="flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-3 bg-gradient-to-r from-[#00eaff] to-cyan-400 text-background font-medium rounded-lg shadow-lg hover:shadow-[#00eaff]/30 transition-all duration-300 text-sm sm:text-base"
              >
                My Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-3 border-2 border-[#00eaff] text-[#00eaff] rounded-lg hover:bg-[#00eaff]/10 transition-all duration-300 shadow-lg hover:shadow-[#00eaff]/20 text-sm sm:text-base"
              >
                Contact me
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-start gap-3 sm:gap-4 pt-6 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            {['React', 'Next.js', 'Node.js', 'TypeScript', 'React Native'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                className="text-xs sm:text-sm px-3 py-1 border border-foreground/10 rounded-full hover:border-[#00eaff]/50 hover:text-[#00eaff] transition-all duration-300 hover:bg-[#00eaff]/5 cursor-default"
                whileHover={{ y: -5 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Image - en haut sur mobile, à droite sur desktop */}
        <motion.div
          className="flex-1 flex justify-center w-full md:w-auto mt-4 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="relative w-full h-full"
            >
              <Image
                src="/ars.png"
                alt="Amadou Sow"
                width={400}
                height={400}
                className="object-cover rounded-full border-4 border-[#00eaff] shadow-[0_0_30px_#00eaff50] z-10 relative"
                priority
              />
              <div className="absolute inset-0 rounded-full border-2 border-[#00eaff]/30 animate-pulse z-0" />
            </motion.div>

            {/* Effet de halo pour mobile */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#00eaff]/10 rounded-full blur-xl md:blur-2xl" />
          </div>

          {/* Effet de particules animées autour de l'image (visible sur desktop) */}
          <div className="hidden lg:block">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-[#00eaff]"
                style={{
                  width: `${Math.random() * 10 + 5}px`,
                  height: `${Math.random() * 10 + 5}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
          </div>
        </motion.div>
      </section>


      <section id="about" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background/90 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              <span className="text-foreground">My </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00eaff] to-cyan-300">Background</span>
            </motion.h2>
            <motion.div
              className="flex justify-center mb-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="w-24 h-1.5 bg-gradient-to-r from-foreground/20 via-[#00eaff] to-cyan-300 rounded-full" />
            </motion.div>
          </div>

          <div className="relative">
            {/* Ligne de temps principale */}
            <div className="absolute left-0 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-foreground/20 to-transparent transform md:-translate-x-1/2 z-0 hidden md:block"></div>

            {/* Points de connexion pour mobile */}
            <div className="absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-foreground/20 to-transparent z-0 block md:hidden"></div>

            <div className="space-y-8 md:space-y-10">
              {parcours.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Conteneur principal */}
                  <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:items-start" : "md:items-end"}`}>
                    {/* Date et icône - version desktop */}
                    <div className={`hidden md:flex md:w-1/4 items-center ${index % 2 === 0 ? "md:justify-end md:pr-8" : "md:justify-start md:pl-8"}`}>
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-full bg-gradient-to-r ${item.color} shadow-lg`}>
                          {item.icon}
                        </div>
                        <span className={`text-lg font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                          {item.year}
                        </span>
                      </div>
                    </div>

                    {/* Point de timeline pour desktop */}
                    <div className={`absolute left-0 md:left-1/2 top-6 w-5 h-5 rounded-full bg-gradient-to-r ${item.color} border-4 border-background transform md:-translate-x-1/2 z-10 flex items-center justify-center group-hover:scale-125 transition-transform`}>
                      <div className="w-1.5 h-1.5 bg-background rounded-full"></div>
                    </div>

                    {/* Contenu principal */}
                    <div className="md:w-1/2 bg-background border border-foreground/10 rounded-2xl p-5 shadow-lg backdrop-blur-sm overflow-hidden relative transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                      {/* Effet de fond au survol */}
                      <div className="absolute inset-0 bg-gradient-to-br from-background to-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                      <div className="flex flex-col">
                        {/* En-tête pour mobile */}
                        <div className="md:hidden flex items-center gap-3 mb-4 pl-1">
                          <div className={`p-2 rounded-full bg-gradient-to-r ${item.color}`}>
                            {item.icon}
                          </div>
                          <span className={`text-lg font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                            {item.year}
                          </span>
                        </div>

                        {/* Point de timeline pour mobile */}
                        <div className="absolute -left-[18px] top-8 w-4 h-4 rounded-full bg-gradient-to-r from-[#00eaff] to-cyan-300 border-4 border-background z-10 flex items-center justify-center md:hidden">
                          <div className="w-1.5 h-1.5 bg-background rounded-full"></div>
                        </div>

                        {/* Badge de type */}
                        <div className="mb-3">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${item.type === "academic" ? "bg-purple-900/20 text-purple-300" : "bg-cyan-900/20 text-cyan-300"}`}>
                            {item.type === "academic" ? "Formation" : "Expérience"}
                          </span>
                        </div>

                        <div className="mb-3">
                          <h3 className="text-xl font-semibold group-hover:text-[#00eaff] transition-colors">{item.title}</h3>
                        </div>

                        <div className="flex items-center gap-2 mb-3 text-foreground/70 group-hover:text-cyan-300 transition-colors">
                          <MapPinIcon className="h-4 w-4" />
                          <span className="text-sm">{item.location}</span>
                        </div>

                        <p className="mt-1 text-foreground/80 group-hover:text-foreground transition-colors text-base">
                          {item.description}
                        </p>

                        {/* Ligne animée en bas */}
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00eaff] to-transparent"
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                        ></motion.div>
                      </div>
                    </div>

                    {/* Espace pour alignement desktop */}
                    <div className={`hidden md:block md:w-1/4 ${index % 2 === 0 ? "order-first" : ""}`}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/** 

      <section className="py-16 bg-gradient-to-r from-background to-background/80 border-y border-foreground/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 50, label: "Projets réalisés", suffix: "+" },
              { value: 99, label: "Clients satisfaits", suffix: "%" },
              { value: 8, label: "Années d'expérience", suffix: "+" },
              { value: 100, label: "Code qualité", suffix: "%" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-background/50 border border-foreground/10 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="text-5xl font-bold text-[#00eaff] mb-2"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                >
                  {stat.value}
                  <span className="text-foreground">{stat.suffix}</span>
                </motion.div>
                <div className="text-foreground/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
*/}

      <section id="philosophy" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background/90 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              <span className="text-foreground">My </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00eaff] to-cyan-300">Philosophy</span>
            </motion.h2>
            <div className="flex justify-center mb-6">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "96px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 bg-gradient-to-r from-foreground/20 to-[#00eaff] rounded-full"
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-foreground/80 max-w-2xl mx-auto mt-6"
            >
              The core principles that guide my work and development vision
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "💻",
                title: "Clean Code",
                description: "Well-structured code is the foundation of any durable, scalable application.",
                color: "from-cyan-500 to-blue-500",
                delay: 0.1
              },
              {
                icon: "⚡",
                title: "Performance",
                description: "Performance optimization isn't optional—it's essential for delivering optimal user experiences.",
                color: "from-purple-500 to-indigo-500",
                delay: 0.3
              },
              {
                icon: "🎨",
                title: "Intuitive Design",
                description: "Good design is invisible - users should navigate intuitively without effort.",
                color: "from-pink-500 to-rose-500",
                delay: 0.5
              }
            ].map((principle, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: principle.delay }}
              >
                <div className="h-full bg-gradient-to-br from-background to-background/80 rounded-2xl border border-foreground/10 p-0.5 shadow-lg overflow-hidden">
                  <div className="h-full bg-background rounded-[15px] p-6 relative overflow-hidden">
                    {/* Effet de fond animé */}
                    <motion.div
                      className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 0.1 }}
                    >
                      <div className={`absolute -inset-12 bg-gradient-to-r ${principle.color} rounded-full blur-2xl`}></div>
                    </motion.div>

                    <div className="relative z-10">
                      {/* Icône animée */}
                      <motion.div
                        className="w-16 h-16 rounded-xl bg-gradient-to-br from-background to-foreground/5 flex items-center justify-center mb-6"
                        whileHover={{
                          rotate: [0, -10, 8, -5, 0],
                          scale: [1, 1.1, 1.1, 1.05, 1],
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <motion.span
                          className="text-3xl"
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: index * 0.2
                          }}
                        >
                          {principle.icon}
                        </motion.span>
                      </motion.div>

                      <motion.h3
                        className="text-xl md:text-2xl font-bold mb-3 flex items-center"
                        whileHover={{ x: 5 }}
                      >
                        {principle.title}
                        <motion.span
                          className="ml-3 h-1 w-8 bg-gradient-to-r from-cyan-400 to-blue-400 inline-block rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: 32 }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                        />
                      </motion.h3>

                      <motion.p
                        className="text-foreground/80 mb-0"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                      >
                        {principle.description}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Citation inspirante */}
          <motion.div
            className="mt-20 max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="text-5xl text-foreground/20 mb-4">❝</div>
            <p className="text-xl italic text-foreground/90 px-6">
              Quality is never an accident; it is always the result of intelligent effort.
            </p>
            <div className="mt-4 text-foreground/70">— John Ruskin</div>
          </motion.div>
        </div>
      </section>

      <section id="process" className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.16, 0.77, 0.47, 0.97] }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="text-foreground">My </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00eaff] to-cyan-300 drop-shadow-md">Process</span>
            </motion.h2>

            <motion.div
              className="flex justify-center mb-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-24 h-1.5 bg-gradient-to-r from-foreground/20 via-[#00eaff] to-cyan-300 rounded-full" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto"
            >
              How I turn your ideas into high-performing digital solutions
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                number: "01",
                title: "Analysis",
                description: "In-depth understanding of your needs and goals",
                icon: <LightBulbIcon className="w-8 h-8 mx-auto text-[#00eaff]" />
              },
              {
                number: "02",
                title: "Conception",
                description: "Creation of wireframes and interactive mockups",
                icon: <PencilSquareIcon className="w-8 h-8 mx-auto text-[#00eaff]" />
              },
              {
                number: "03",
                title: "Development",
                description: "Technical implementation using best practices",
                icon: <CodeBracketIcon className="w-8 h-8 mx-auto text-[#00eaff]" />
              },
              {
                number: "04",
                title: "Optimization",
                description: "Testing, improvements, and final deployment",
                icon: <RocketLaunchIcon className="w-8 h-8 mx-auto text-[#00eaff]" />
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-background border border-foreground/10 rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-400 relative overflow-hidden group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
                whileHover={{
                  y: -15,
                  boxShadow: '0 25px 50px -12px rgba(0, 234, 255, 0.15)'
                }}
              >
                {/* Effet de fond animé au survol */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00eaff]/5 to-cyan-300/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                {/* Animation du cercle */}
                <motion.div
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00eaff]/10 to-cyan-300/10 flex items-center justify-center mx-auto mb-6 text-[#00eaff] text-2xl font-bold"
                  whileHover={{
                    scale: 1.05,
                    rotate: 5,
                    background: "linear-gradient(135deg, rgba(0,234,255,0.15) 0%, rgba(0,212,255,0.2) 100%)"
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {step.number}
                </motion.div>

                {/* Icône animée */}
                <motion.div
                  className="mb-4"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {step.icon}
                </motion.div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-[#00eaff] transition-colors">{step.title}</h3>
                <p className="text-foreground/80 group-hover:text-foreground transition-colors">{step.description}</p>

                {/* Ligne animée en bas */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00eaff] to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/** 
      <section id="testimonials" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background/90 to-background/70">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 0.77, 0.47, 0.97] }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="text-foreground">Ce qu'ils </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00eaff] to-cyan-300 drop-shadow-lg">
                Disent
              </span>
            </motion.h2>

            <motion.div
              className="flex justify-center mb-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-24 h-1.5 bg-gradient-to-r from-foreground/20 via-[#00eaff] to-cyan-300 rounded-full" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-foreground/80 max-w-2xl mx-auto"
            >
              Les retours de mes clients et collaborateurs sur notre travail ensemble
            </motion.p>
          </div>

          <div className="relative">
            <div className="absolute -top-16 -left-16 w-40 h-40 bg-[#00eaff]/10 rounded-full blur-3xl z-0"></div>
            <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-[#00eaff]/10 rounded-full blur-3xl z-0"></div>
            <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-purple-500/10 rounded-full blur-2xl z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              {[
                {
                  quote: "Amadou a transformé notre vision en une application exceptionnelle. Son expertise technique et sa compréhension des besoins utilisateurs ont dépassé nos attentes. Le produit final est non seulement beau mais aussi incroyablement performant.",
                  author: "Marie Dubois",
                  position: "Directrice Produit, TechInnov",
                  rating: 5,
                  color: "bg-gradient-to-br from-[#00eaff]/10 to-cyan-300/10"
                },
                {
                  quote: "Travailler avec Amadou a été une révélation. Sa capacité à résoudre des problèmes complexes avec des solutions élégantes est impressionnante. Son code est propre, bien documenté et facile à maintenir.",
                  author: "Thomas Martin",
                  position: "CTO, StartupVision",
                  rating: 5,
                  color: "bg-gradient-to-br from-purple-500/10 to-pink-500/10"
                },
                {
                  quote: "Amadou a complètement transformé notre présence en ligne. Son approche stratégique et son sens du design ont donné à notre marque une identité visuelle cohérente et professionnelle qui a immédiatement impacté nos ventes.",
                  author: "Sophie Lambert",
                  position: "Directrice Marketing, EcoStyle",
                  rating: 5,
                  color: "bg-gradient-to-br from-amber-500/10 to-orange-500/10"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className={`${testimonial.color} backdrop-blur-sm border border-foreground/10 rounded-2xl p-6 shadow-xl relative overflow-hidden group`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 50px -15px rgba(0, 234, 255, 0.3)"
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                  <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-[#00eaff]/20 blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-cyan-300/20 blur-xl"></div>

                  <div className="text-5xl text-[#00eaff] opacity-20 absolute top-4 left-4">"</div>

                  <div className="relative z-10">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <motion.svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-amber-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </motion.svg>
                      ))}
                    </div>

                    <p className="text-lg text-foreground/90 mb-6 italic relative pl-6">
                      <span className="absolute -left-1 top-0 text-3xl text-[#00eaff]">“</span>
                      {testimonial.quote}
                    </p>

                    <div className="flex items-center pt-4 border-t border-foreground/10">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#00eaff] to-cyan-300 p-0.5">
                          <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                            <span className="font-bold text-lg text-[#00eaff]">
                              {testimonial.author.charAt(0)}
                            </span>
                          </div>
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-r from-[#00eaff] to-cyan-300 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-background" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>

                      <div className="ml-4">
                        <h4 className="font-semibold text-lg group-hover:text-[#00eaff] transition-colors">{testimonial.author}</h4>
                        <p className="text-foreground/70 text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00eaff] to-transparent"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                  ></motion.div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center mt-12 gap-2">
              {[1, 2, 3].map((dot, index) => (
                <motion.div
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === 0 ? "bg-[#00eaff]" : "bg-foreground/20"}`}
                  whileHover={{ scale: 1.3, backgroundColor: "#00eaff" }}
                  transition={{ type: "spring", stiffness: 400 }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-20"
        >
          <CurrentProject />
        </motion.div>

      </section>


      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/90 relative overflow-hidden">
        {/* Effet de fond animé */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00eaff]/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-[#bc00ff]/10 rounded-full blur-3xl animate-pulse-medium"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="text-foreground">My </span>
              <span className="text-[#00eaff] neon-text">Flagship Projects</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-foreground/80 max-w-3xl mx-auto"
            >
              Innovative solutions that define my journey as a developer
            </motion.p>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
              type: 'bullets',
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
            className="pb-16 relative"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <motion.div
                  whileHover={{ y: -10 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative h-full bg-background border border-foreground/10 rounded-2xl overflow-hidden hover:border-[#00eaff]/50 transition-all duration-300 shadow-xl hover:shadow-[0_10px_50px_-15px_rgba(0,234,255,0.5)]"
                >
                  <div
                    className="relative h-60 overflow-hidden cursor-zoom-in"
                    onClick={() => {
                      openProjectModal(project);
                      setIsFullscreen(true);
                    }}
                  >
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                    {/* Badge de statut */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-background/80 backdrop-blur-sm text-xs font-bold rounded-full border border-foreground/10">
                      {project.status}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-[#00eaff] group-hover:text-[#00eaff]/90 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-foreground/80 mb-4 min-h-[60px]">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 bg-foreground/5 rounded-full border border-foreground/10 hover:border-[#00eaff]/50 hover:text-[#00eaff] transition-all"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => openProjectModal(project)}
                      className="w-full py-3 rounded-lg bg-gradient-to-r from-[#00eaff]/10 to-[#00eaff]/5 border border-[#00eaff]/30 text-[#00eaff] hover:from-[#00eaff]/20 hover:to-[#00eaff]/10 transition-all flex items-center justify-center group"
                    >
                      View Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}

            {/* Navigation personnalisée */}
            <div className="swiper-pagination !bottom-0 mt-8"></div>

            <div className="swiper-button-prev !text-[#00eaff] after:!text-xl"></div>
            <div className="swiper-button-next !text-[#00eaff] after:!text-xl"></div>
          </Swiper>
        </div>

        {/* Modal de détails du projet */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
            <div
              className={`relative ${isFullscreen ? 'w-full h-full max-h-none max-w-none rounded-none' : 'max-w-4xl w-full max-h-[90vh]'} overflow-y-auto bg-background border border-[#00eaff]/30 rounded-2xl shadow-2xl neon-glow`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeProjectModal}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-[#00eaff]/20 text-[#00eaff] hover:bg-[#00eaff]/10 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              {/* Bouton plein écran */}
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="absolute top-4 right-16 z-20 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-[#00eaff]/20 text-[#00eaff] hover:bg-[#00eaff]/10 transition-colors"
              >
                {isFullscreen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                  </svg>
                )}
              </button>

              {/* Carrousel d'images */}
              <div className={`relative ${isFullscreen ? 'h-[calc(100vh-2rem)]' : 'h-[30rem]'}`}>
                <div className="absolute inset-0">
                  <Image
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} - Capture ${currentImageIndex + 1}`}
                    fill
                    className={`${isFullscreen ? 'object-contain' : 'object-cover'}`}
                  />
                </div>

                {/* Navigation entre images */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-[#00eaff]/20 text-[#00eaff] hover:bg-[#00eaff]/10 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-[#00eaff]/20 text-[#00eaff] hover:bg-[#00eaff]/10 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </button>
                  </>
                )}

                {/* Pagination des images */}
                {selectedProject.images.length > 1 && (
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center z-10">
                    <div className="flex space-x-2">
                      {selectedProject.images.map((_, index: number) => (
                        <button
                          key={index}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex(index);
                          }}
                          className={`w-3 h-3 rounded-full transition-all ${currentImageIndex === index
                            ? 'bg-[#00eaff] w-6'
                            : 'bg-foreground/30 hover:bg-foreground/50'
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                )}

                <div className={`absolute inset-0 ${isFullscreen ? 'bg-transparent' : 'bg-gradient-to-t from-background to-transparent'}`} />

                {!isFullscreen && (
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <h3 className="text-3xl font-bold text-[#00eaff] mb-2">{selectedProject.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 bg-[#00eaff]/10 rounded-full border border-[#00eaff]/30 text-[#00eaff]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {!isFullscreen && (
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="md:col-span-2">
                      <h4 className="text-xl font-bold text-foreground mb-4">Project Description</h4>
                      <p className="text-foreground/80 leading-relaxed">
                        {selectedProject.longDescription || selectedProject.description}
                      </p>
                    </div>

                    <div className="bg-background/50 border border-foreground/10 rounded-xl p-5">
                      <h4 className="text-xl font-bold text-foreground mb-4">Details</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-[#00eaff] mr-2">•</span>
                          <span className="text-foreground/80"><strong>Statut:</strong> {selectedProject.status}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#00eaff] mr-2">•</span>
                          <span className="text-foreground/80"><strong>Date:</strong> {selectedProject.date}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#00eaff] mr-2">•</span>
                          <span className="text-foreground/80"><strong>Client:</strong> {selectedProject.client || 'Personnal'}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#00eaff] mr-2">•</span>
                          <span className="text-foreground/80"><strong>Category:</strong> {selectedProject.category || 'Web Development'}</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-8">
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}

                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-lg bg-foreground/5 border border-foreground/10 hover:border-[#00eaff]/50 text-foreground hover:text-[#00eaff] transition-all flex items-center group"
                      >
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View Source Code
                        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    )}

                    {selectedProject.demoUrl && (
                      <a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#00eaff]/10 to-[#00eaff]/5 border border-[#00eaff]/30 text-[#00eaff] hover:from-[#00eaff]/20 hover:to-[#00eaff]/10 transition-all flex items-center group"
                      >
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polygon points="10 8 16 12 10 16 10 8"></polygon>
                        </svg>
                        View Demo
                        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    )}

                  </div>

                  {selectedProject.features && (
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-foreground mb-4">Key Features</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedProject.features.map((feature, index) => (
                          <div key={index} className="flex items-start p-4 bg-background/50 border border-foreground/10 rounded-lg">
                            <span className="text-[#00eaff] mr-3 mt-1">✓</span>
                            <span className="text-foreground/80">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedProject.tech && (
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-4">Technologies Used</h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.tech.map((tech: string, index: number) => (
                          <div key={index} className="px-4 py-2 bg-background/50 border border-foreground/10 rounded-full flex items-center">
                            <span className="w-2 h-2 bg-[#00eaff] rounded-full mr-2"></span>
                            <span className="text-foreground/80">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/90">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-center">
              <span className="text-foreground">Technology </span>
              <span className="text-[#00eaff] neon-text">Stack</span>
            </h2>
            <p className="text-xl text-foreground/80 mb-12 text-center max-w-3xl mx-auto">
              A diverse expertise for comprehensive and high-performance solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="group relative p-6 border border-foreground/10 rounded-xl bg-background/50 hover:border-[#00eaff]/50 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-xl bg-[#00eaff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex flex-col items-start space-y-4">
                  <skill.icon className="w-12 h-12 mb-4 text-[#00eaff]" />

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">{skill.name}</h3>
                    <span className="text-sm font-medium text-[#00eaff]">{skill.level}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {skill.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm border border-foreground/10 rounded-full bg-background hover:border-[#00eaff]/50 hover:text-[#00eaff] transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/90">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-center">
              <span className="text-foreground">Latest </span>
              <span className="text-[#00eaff] neon-text">Articles</span>
            </h2>
            <p className="text-xl text-foreground/80 mb-12 text-center max-w-3xl mx-auto">
              Technical insights on the latest technologies and best practices
            </p>
          </motion.div>

          {blogPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={post.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.15,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{
                      y: -10,
                      boxShadow: "0 20px 25px -5px rgba(0, 234, 255, 0.1)"
                    }}
                    className="group relative bg-background border border-foreground/10 rounded-xl p-6 hover:border-[#00eaff]/50 transition-all shadow-md hover:shadow-xl"
                  >
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#00eaff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00eaff] to-[#bc00ff] opacity-0 group-hover:opacity-100 transition-opacity rounded-t-xl" />

                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-2 mb-4 text-[#00eaff]">
                        <BookOpenIcon className="w-5 h-5" />
                        <span className="text-sm">{post.readTime}</span>
                      </div>

                      <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-[#00eaff] transition-colors duration-300">
                        {post.title}
                      </h3>

                      <p className="text-foreground/80 mb-4 flex-grow">
                        {post.excerpt}
                      </p>

                      <div className="flex justify-between items-center mt-4">
                        <span className="text-sm text-foreground/60 bg-background/50 px-2 py-1 rounded-md">
                          {post.date}
                        </span>
                        <Link
                          href={post.link}
                          className="flex items-center gap-1 text-[#00eaff] hover:text-[#00eaff]/80 transition-colors group/link"
                        >
                          Read
                          <ArrowUpRightIcon className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-12 text-center"
              >
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#00eaff] text-[#00eaff] rounded-lg hover:bg-[#00eaff]/10 transition-all hover:gap-3 group/btn"
                >
                  View All Articles
                  <ArrowUpRightIcon className="w-5 h-5 group-hover/btn:rotate-45 transition-transform" />
                </Link>
              </motion.div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-12 px-6 border-2 border-dashed border-foreground/20 rounded-2xl bg-background/50"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-[#00eaff]/10 p-4 rounded-full">
                  <BookOpenIcon className="w-12 h-12 text-[#00eaff]" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                No articles published yet.
              </h3>
              <p className="text-foreground/70 mb-6 max-w-md mx-auto">
                We are currently preparing exciting new content on web development and emerging technologies.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-[#00eaff] border border-[#00eaff]/30 rounded-lg hover:bg-[#00eaff]/10 transition-colors"
              >
                Contact me for suggestions
                <MailIcon className="w-4 h-4" />
              </Link>
            </motion.div>
          )}
        </div>
      </section>

      {/* 
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-foreground/10 bg-gradient-to-b from-background to-background/70 relative overflow-hidden">
       
        <div className="absolute inset-0 z-0">
          
          <div className="absolute top-[10%] left-[15%] w-64 h-64 bg-[#00eaff]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[20%] right-[10%] w-48 h-48 bg-[#00eaff]/15 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Travaillons </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00eaff] to-cyan-300">
                Ensemble
              </span>
            </h2>
            <div className="flex justify-center mb-6">
              <div className="w-24 h-1 bg-gradient-to-r from-foreground/20 to-[#00eaff] rounded-full" />
            </div>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Discutons de votre projet ou simplement échangeons autour d'un café virtuel ☕
            </p>
          </motion.div>

          <div className="bg-background/80 backdrop-blur-sm border border-foreground/10 rounded-2xl p-8 shadow-xl">
            {isSubmitted ? (
              // Affichage après soumission réussie
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="text-center py-12"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 0.8 }}
                  className="flex justify-center mb-6"
                >
                  <div className="w-20 h-20 rounded-full bg-[#00eaff]/10 flex items-center justify-center">
                    <CheckCircle className="w-12 h-12 text-[#00eaff]" strokeWidth={1.5} />
                  </div>
                </motion.div>

                <h3 className="text-3xl font-bold mb-4 text-[#00eaff]">Message envoyé !</h3>
                <p className="text-xl text-foreground/80 mb-8 max-w-md mx-auto">
                  Merci pour votre message, je vous répondrai dans les plus brefs délais.
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 bg-foreground/5 border border-foreground/10 rounded-lg text-foreground/80 hover:text-[#00eaff] hover:border-[#00eaff]/30 transition-all"
                >
                  Envoyer un autre message
                </motion.button>
              </motion.div>
            ) : (
              // Formulaire de contact
              <motion.form
                key="form" // Important pour réinitialiser les animations
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 120
                }}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="relative"
                >
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="w-5 h-5 text-foreground/60" />
                  </div>
                  <input
                    {...register('name')}
                    placeholder="Votre nom"
                    className="w-full bg-background/80 border border-foreground/10 pl-10 pr-4 py-3 rounded-xl focus:border-[#00eaff] focus:ring-2 focus:ring-[#00eaff]/30 transition-all duration-300 shadow-sm"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="relative"
                >
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="w-5 h-5 text-foreground/60" />
                  </div>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="Email"
                    className="w-full bg-background/80 border border-foreground/10 pl-10 pr-4 py-3 rounded-xl focus:border-[#00eaff] focus:ring-2 focus:ring-[#00eaff]/30 transition-all duration-300 shadow-sm"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="relative"
                >
                  <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
                    <MessageSquare className="w-5 h-5 text-foreground/60 mt-1" />
                  </div>
                  <textarea
                    {...register('message')}
                    rows={5}
                    placeholder="Votre message..."
                    className="w-full bg-background/80 border border-foreground/10 pl-10 pr-4 py-3 rounded-xl focus:border-[#00eaff] focus:ring-2 focus:ring-[#00eaff]/30 transition-all duration-300 shadow-sm"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="pt-4"
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{
                      scale: isSubmitting ? 1 : 1.02,
                      boxShadow: isSubmitting ? "none" : "0 5px 15px rgba(0, 234, 255, 0.4)"
                    }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`w-full px-6 py-4 text-background font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group ${isSubmitting
                      ? "bg-foreground/10 cursor-not-allowed"
                      : "bg-gradient-to-r from-[#00eaff] to-cyan-400"
                      }`}
                  >
                    {isSubmitting ? (
                      <>
                        <span>Envoi en cours</span>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-t-2 border-[#00eaff] border-r-2 border-transparent rounded-full"
                        />
                      </>
                    ) : (
                      <>
                        <span>Envoyer le message</span>
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{
                            repeat: Infinity,
                            duration: 2,
                            repeatType: "reverse"
                          }}
                          className="group-hover:animate-pulse"
                        >
                          <Send className="w-5 h-5" />
                        </motion.span>
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </motion.form>
            )}
          </div>

  
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
            className="flex justify-center mt-16"
          >
            <div className="flex items-center gap-4">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 rounded-full bg-[#00eaff]"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
     </section> 
     */}

    </>
  );
}