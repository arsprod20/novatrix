'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarIcon, ClockIcon, TagIcon, ArrowUpRightIcon } from 'lucide-react';


/** 
const blogPosts = [
  {
    slug: 'optimisation-nextjs',
    title: "Optimisation des performances dans Next.js 14",
    excerpt: "Découvrez les techniques avancées pour booster vos applications Next.js avec le compilateur Turbopack...",
    date: "2024-03-15",
    readTime: "8 min",
    category: "Frontend",
    image: "/seo.jpg"
  },
  {
    slug: 'architecture-microservices',
    title: "Architecture Microservices avec Go et gRPC",
    excerpt: "Guide complet pour construire un système distribué évolutif avec Go 1.22...",
    date: "2024-03-10",
    readTime: "12 min",
    category: "Backend",
    image: "/micro.jpg"
  },
  {
    slug: 'securite-web',
    title: "Sécurité Web : Bonnes pratiques modernes",
    excerpt: "Mettez en place les dernières mesures de sécurité dans vos applications React et Node.js...",
    date: "2024-03-05",
    readTime: "10 min",
    category: "DevOps",
    image: "/security.jpg"
  },
  {
    slug: 'animations-framer',
    title: "Maîtrise des animations avec Framer Motion",
    excerpt: "Créez des expériences utilisateur fluides avec des animations personnalisées...",
    date: "2024-02-28",
    readTime: "6 min",
    category: "UI/UX",
    image: "/animation.jpg"
  },
  {
    slug: 'cloud-architecture',
    title: "Architecture Cloud avec AWS",
    excerpt: "Concevez des infrastructures scalables et résilientes sur AWS...",
    date: "2024-02-20",
    readTime: "15 min",
    category: "DevOps",
    image: "/cloud.png"
  },
  {
    slug: 'typescript-avance',
    title: "Typescript avancé : Patterns et bonnes pratiques",
    excerpt: "Découvrez les fonctionnalités avancées de TypeScript pour un code plus robuste...",
    date: "2024-02-15",
    readTime: "9 min",
    category: "Frontend",
    image: "/typescript.jpeg"
  },
  {
    slug: 'react-server-components',
    title: "React Server Components : Le futur de React",
    excerpt: "Comprendre et implémenter les React Server Components dans Next.js...",
    date: "2024-02-10",
    readTime: "11 min",
    category: "Frontend",
    image: "/react.jpg"
  },
  {
    slug: 'database-optimization',
    title: "Optimisation de bases de données PostgreSQL",
    excerpt: "Techniques avancées pour améliorer les performances de vos requêtes SQL...",
    date: "2024-02-05",
    readTime: "14 min",
    category: "Backend",
    image: "/database.jpg"
  },
  {
    slug: 'ci-cd-pipelines',
    title: "Création de pipelines CI/CD avec GitHub Actions",
    excerpt: "Automatisez vos déploiements avec des workflows efficaces...",
    date: "2024-01-28",
    readTime: "8 min",
    category: "DevOps",
    image: "/ci-cd.jpg"
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
}

const blogPosts: BlogPost[] = [];
const NoPosts = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="text-center py-20"
  >
    <div className="max-w-2xl mx-auto">
      <div className="relative w-32 h-32 mx-auto mb-8">
        <div className="absolute inset-0 bg-[#00eaff]/10 rounded-full blur-xl"></div>
        <div className="relative flex items-center justify-center w-full h-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 text-[#00eaff]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
      </div>

      <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00eaff] to-[#00b4d8]">
        Oops... No articles found.
      </h2>
      <p className="text-xl text-foreground/80 mb-8 max-w-xl mx-auto">
       {" We're preparing exciting content. Check back soon!"}
      </p>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block"
      >
        <Link
          href="/"
          className="px-8 py-3 bg-gradient-to-r from-[#00eaff] to-[#00b4d8] text-background rounded-lg font-medium flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l3-2z" clipRule="evenodd" />
          </svg>
          Explore More Projects
        </Link>
      </motion.div>
    </div>
  </motion.div>
);

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const POSTS_PER_PAGE = 6;
  
  // Filtrer les articles par catégorie
  const filteredPosts = selectedCategory === 'Tous' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);
  
  // Calcul de la pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  
  // Réinitialiser la pagination quand la catégorie change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 600, behavior: 'smooth' });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 600, behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen pt-20 bg-background">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-foreground">Tech </span>
            <span className="text-[#00eaff] neon-text">Blog</span>
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Sharing expertise on the latest technologies and best development practices.
          </p>
        </motion.div>

        {blogPosts.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mb-20"
            >
              <div className="bg-background/50 border border-foreground/10 rounded-xl overflow-hidden hover:border-[#00eaff]/50 transition-all">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="relative h-64 lg:h-96">
                    <Image
                      src="/nextjs.jpg"
                      alt="Article vedette"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <span className="inline-block mb-4 px-3 py-1 bg-[#00eaff] text-background rounded-full text-sm">
                      Nouveau
                    </span>
                    <h2 className="text-3xl font-bold mb-4 text-foreground">
                      Next.js 14 : Les nouvelles fonctionnalités
                    </h2>
                    <p className="text-foreground/80 mb-6">
                      Explorez les dernières avancées du framework React avec le compilateur Turbopack...
                    </p>
                    <div className="flex items-center gap-4 text-foreground/80">
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="w-5 h-5" />
                        <span>15 Mars 2024</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ClockIcon className="w-5 h-5" />
                        <span>10 min</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mb-12 flex flex-wrap gap-4 justify-center"
            >
              {['Tous', 'Frontend', 'Backend', 'DevOps', 'UI/UX'].map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleCategorySelect(category)}
                  className={`px-4 py-2 border rounded-full transition-all ${
                    selectedCategory === category
                      ? 'bg-[#00eaff] text-background border-[#00eaff]'
                      : 'border-foreground/10 hover:border-[#00eaff]/50'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </>
        )}

        {currentPosts.length === 0 ? (
          <NoPosts />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  className="group bg-background/50 border border-foreground/10 rounded-xl overflow-hidden hover:border-[#00eaff]/50 transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4 text-[#00eaff]">
                      <TagIcon className="w-5 h-5" />
                      <span className="text-sm">{post.category}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-foreground">{post.title}</h3>
                    <p className="text-foreground/80 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center text-foreground/80">
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="w-5 h-5" />
                        <span className="text-sm">{post.date}</span>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="flex items-center gap-2 hover:text-[#00eaff] transition-colors"
                      >
                        {"Lire l'article"}
                        <ArrowUpRightIcon className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-20 flex justify-center gap-4 items-center"
            >
              <motion.button
                whileHover={{ scale: currentPage > 1 ? 1.05 : 1 }}
                whileTap={{ scale: currentPage > 1 ? 0.95 : 1 }}
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`px-6 py-2 border rounded-lg transition-all ${
                  currentPage === 1
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:border-[#00eaff]/50 hover:text-[#00eaff]'
                }`}
              >
                ← Précédent
              </motion.button>

              <span className="text-foreground/80">
                Page {currentPage} sur {totalPages}
              </span>

              <motion.button
                whileHover={{ scale: currentPage < totalPages ? 1.05 : 1 }}
                whileTap={{ scale: currentPage < totalPages ? 0.95 : 1 }}
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`px-6 py-2 rounded-lg transition-all ${
                  currentPage === totalPages
                    ? 'bg-[#00eaff]/50 cursor-not-allowed'
                    : 'bg-[#00eaff] hover:bg-[#00eaff]/90'
                } text-background`}
              >
                Suivant →
              </motion.button>
            </motion.div>
          </>
        )}
      </section>
    </div>
  );
}