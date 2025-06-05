{/** 
'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  CalendarIcon,
  ClockIcon,
  TagIcon,
  ArrowUpRightIcon,
  SearchIcon,
  FlameIcon,
  TrendingUpIcon,
  MailIcon
} from 'lucide-react';


const blogPosts = [
  {
    slug: 'optimisation-nextjs',
    title: "Optimisation des performances dans Next.js 14",
    excerpt: "Découvrez les techniques avancées pour booster vos applications Next.js avec le compilateur Turbopack...",
    date: "2024-03-15",
    readTime: "8 min",
    category: "Frontend",
    tags: ["Next.js", "Performance", "React"],
    image: "/seo.jpg",
    views: 1245,
    likes: 87
  },
  {
    slug: 'architecture-microservices',
    title: "Architecture Microservices avec Go et gRPC",
    excerpt: "Guide complet pour construire un système distribué évolutif avec Go 1.22...",
    date: "2024-03-10",
    readTime: "12 min",
    category: "Backend",
    tags: ["Go", "Microservices", "gRPC"],
    image: "/micro.jpg",
    views: 987,
    likes: 65
  },
  {
    slug: 'securite-web',
    title: "Sécurité Web : Bonnes pratiques modernes",
    excerpt: "Mettez en place les dernières mesures de sécurité dans vos applications React et Node.js...",
    date: "2024-03-05",
    readTime: "10 min",
    category: "DevOps",
    tags: ["Sécurité", "Node.js", "React"],
    image: "/security.jpg",
    views: 2104,
    likes: 142
  },
  {
    slug: 'animations-framer',
    title: "Maîtrise des animations avec Framer Motion",
    excerpt: "Créez des expériences utilisateur fluides avec des animations personnalisées...",
    date: "2024-02-28",
    readTime: "6 min",
    category: "UI/UX",
    tags: ["Animations", "UI/UX", "Framer Motion"],
    image: "/animation.jpg",
    views: 876,
    likes: 54
  },
  {
    slug: 'cloud-architecture',
    title: "Architecture Cloud avec AWS",
    excerpt: "Concevez des infrastructures scalables et résilientes sur AWS...",
    date: "2024-02-20",
    readTime: "15 min",
    category: "DevOps",
    tags: ["AWS", "Cloud", "Architecture"],
    image: "/cloud.png",
    views: 1345,
    likes: 93
  },
  {
    slug: 'typescript-avance',
    title: "Typescript avancé : Patterns et bonnes pratiques",
    excerpt: "Découvrez les fonctionnalités avancées de TypeScript pour un code plus robuste...",
    date: "2024-02-15",
    readTime: "9 min",
    category: "Frontend",
    tags: ["TypeScript", "Bonnes pratiques", "JavaScript"],
    image: "/typescript.jpeg",
    views: 1765,
    likes: 121
  },
  {
    slug: 'react-server-components',
    title: "React Server Components : Le futur de React",
    excerpt: "Comprendre et implémenter les React Server Components dans Next.js...",
    date: "2024-02-10",
    readTime: "11 min",
    category: "Frontend",
    tags: ["React", "Next.js", "RSC"],
    image: "/react.jpg",
    views: 1987,
    likes: 156
  },
  {
    slug: 'database-optimization',
    title: "Optimisation de bases de données PostgreSQL",
    excerpt: "Techniques avancées pour améliorer les performances de vos requêtes SQL...",
    date: "2024-02-05",
    readTime: "14 min",
    category: "Backend",
    tags: ["PostgreSQL", "Database", "Performance"],
    image: "/database.jpg",
    views: 1123,
    likes: 78
  },
  {
    slug: 'ci-cd-pipelines',
    title: "Création de pipelines CI/CD avec GitHub Actions",
    excerpt: "Automatisez vos déploiements avec des workflows efficaces...",
    date: "2024-01-28",
    readTime: "8 min",
    category: "DevOps",
    tags: ["CI/CD", "GitHub", "DevOps"],
    image: "/ci-cd.jpg",
    views: 1456,
    likes: 102
  }
];


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


const popularPosts = [...blogPosts]
  .sort((a, b) => b.views - a.views)
  .slice(0, 3);

const allTags = Array.from(
  new Set(blogPosts.flatMap(post => post.tags))
).sort();

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
        Ooops... Aucun article trouvé
      </h2>
      <p className="text-xl text-foreground/80 mb-8 max-w-xl mx-auto">
        Notre équipe prépare du contenu passionnant. Revenez bientôt !
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
          Explorer d'autres projets
        </Link>
      </motion.div>
    </div>
  </motion.div>
);

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'date' | 'popularity' | 'readTime'>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const POSTS_PER_PAGE = 6;

  // Filtrer et trier les articles
  const filteredPosts = useMemo(() => {
    let result = [...blogPosts];

    // Filtre par catégorie
    if (selectedCategory !== 'Tous') {
      result = result.filter(post => post.category === selectedCategory);
    }

    // Filtre par tags
    if (selectedTags.length > 0) {
      result = result.filter(post =>
        selectedTags.some(tag => post.tags.includes(tag))
      ); // <== parenthèse fermante ajoutée ici
    }

    // Filtre par recherche
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      ); // <== parenthèse fermante ajoutée ici
    }


    // Trier les résultats
    result.sort((a, b) => {
      if (sortBy === 'date') {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
      } else if (sortBy === 'popularity') {
        return sortOrder === 'asc' ? a.views - b.views : b.views - a.views;
      } else {
        const timeA = parseInt(a.readTime);
        const timeB = parseInt(b.readTime);
        return sortOrder === 'asc' ? timeA - timeB : timeB - timeA;
      }
    });

    return result;
  }, [selectedCategory, selectedTags, searchQuery, sortBy, sortOrder]);

  // Calcul de la pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Réinitialiser la pagination quand les filtres changent
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedTags, searchQuery, sortBy, sortOrder]);

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

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      // Envoyer l'email à votre backend ou service d'email
      console.log(`Email ${email} enregistré pour la newsletter`);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-background to-[#00141a]">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-foreground">Blog </span>
            <span className="text-[#00eaff] neon-text">Technique</span>
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Partages d'expertise sur les dernières technologies et bonnes pratiques de développement
          </p>
        </motion.div>

        {blogPosts.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mb-20"
            >
              <div className="bg-background/50 border border-foreground/10 rounded-xl overflow-hidden hover:border-[#00eaff]/50 transition-all relative">
                <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10"></div>
                <div className="grid lg:grid-cols-2 gap-8 relative z-20">
                  <div className="relative h-64 lg:h-96">
                    <Image
                      src="/nextjs.jpg"
                      alt="Article vedette"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-block px-3 py-1 bg-[#00eaff] text-background rounded-full text-sm">
                        Nouveau
                      </span>
                      <span className="inline-block px-3 py-1 bg-purple-500 text-background rounded-full text-sm">
                        Populaire
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-foreground">
                      Next.js 14 : Les nouvelles fonctionnalités
                    </h2>
                    <p className="text-foreground/80 mb-6">
                      Explorez les dernières avancées du framework React avec le compilateur Turbopack...
                    </p>
                    <div className="flex items-center gap-4 text-foreground/80 mb-6">
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="w-5 h-5" />
                        <span>15 Mars 2024</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ClockIcon className="w-5 h-5" />
                        <span>10 min</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["Next.js", "React", "Turbopack", "Performance"].map(tag => (
                        <span key={tag} className="px-2 py-1 bg-foreground/10 text-foreground/80 rounded-md text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <FlameIcon className="w-6 h-6 text-orange-500" />
                <h2 className="text-2xl font-bold text-foreground">Articles Populaires</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {popularPosts.map((post, index) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-background/50 border border-foreground/10 rounded-xl overflow-hidden hover:border-[#00eaff]/50 transition-all"
                  >
                    <div className="relative h-40">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2 text-foreground line-clamp-2">{post.title}</h3>
                      <div className="flex items-center justify-between text-foreground/80">
                        <span>{post.date}</span>
                        <div className="flex items-center gap-1">
                          <TrendingUpIcon className="w-4 h-4 text-green-500" />
                          <span>{post.views} vues</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mb-12"
            >
              <div className="flex flex-col md:flex-row gap-4 justify-between mb-8">
                <div className="relative w-full md:w-1/3">
                  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground/50" />
                  <input
                    type="text"
                    placeholder="Rechercher des articles..."
                    className="w-full pl-10 pr-4 py-2 bg-background/50 border border-foreground/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00eaff] text-foreground"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div className="flex gap-4">
                  <select
                    className="bg-background/50 border border-foreground/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00eaff] text-foreground"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                  >
                    <option value="date">Trier par date</option>
                    <option value="popularity">Trier par popularité</option>
                    <option value="readTime">Trier par durée de lecture</option>
                  </select>

                  <select
                    className="bg-background/50 border border-foreground/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00eaff] text-foreground"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value as any)}
                  >
                    <option value="desc">Décroissant</option>
                    <option value="asc">Croissant</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-between">
                <div className="flex flex-wrap gap-4">
                  {['Tous', 'Frontend', 'Backend', 'DevOps', 'UI/UX'].map((category) => (
                    <motion.button
                      key={category}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleCategorySelect(category)}
                      className={`px-4 py-2 border rounded-full transition-all ${selectedCategory === category
                          ? 'bg-[#00eaff] text-background border-[#00eaff]'
                          : 'border-foreground/10 hover:border-[#00eaff]/50'
                        }`}
                    >
                      {category}
                    </motion.button>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <TagIcon className="w-5 h-5 text-[#00eaff]" />
                  <span className="text-foreground/80">Tags :</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {allTags.map(tag => (
                  <motion.button
                    key={tag}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleTag(tag)}
                    className={`px-3 py-1 rounded-full text-sm transition-all ${selectedTags.includes(tag)
                        ? 'bg-[#00eaff] text-background'
                        : 'bg-foreground/10 text-foreground/80 hover:bg-foreground/20'
                      }`}
                  >
                    #{tag}
                  </motion.button>
                ))}
              </div>
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
                  className="group bg-background/50 border border-foreground/10 rounded-xl overflow-hidden hover:border-[#00eaff]/50 transition-all shadow-lg"
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
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-2 text-[#00eaff]">
                        <TagIcon className="w-5 h-5" />
                        <span className="text-sm">{post.category}</span>
                      </div>
                      <div className="flex items-center gap-1 bg-foreground/10 px-2 py-1 rounded-md">
                        <TrendingUpIcon className="w-4 h-4 text-green-500" />
                        <span className="text-xs">{post.views}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-2 text-foreground">{post.title}</h3>
                    <p className="text-foreground/80 mb-4">{post.excerpt}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="px-2 py-1 bg-foreground/10 text-foreground/80 rounded-md text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center text-foreground/80">
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="w-5 h-5" />
                        <span className="text-sm">{post.date}</span>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="flex items-center gap-2 hover:text-[#00eaff] transition-colors"
                      >
                        Lire l'article
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
              className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8"
            >
              <div className="w-full md:w-1/3 bg-gradient-to-br from-[#00eaff]/10 to-[#00b4d8]/10 p-6 rounded-xl border border-[#00eaff]/20">
                <div className="flex items-center gap-3 mb-4">
                  <MailIcon className="w-8 h-8 text-[#00eaff]" />
                  <h3 className="text-xl font-bold text-foreground">Restez informé</h3>
                </div>

                {isSubscribed ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-500"
                  >
                    Merci ! Vous êtes maintenant abonné à notre newsletter.
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-4">
                    <p className="text-foreground/80 mb-3">
                      Recevez les nouveaux articles directement dans votre boîte mail.
                    </p>
                    <div className="flex gap-2">
                      <input
                        type="email"
                        placeholder="Votre email"
                        className="flex-1 px-4 py-2 bg-background/50 border border-foreground/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00eaff] text-foreground"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 bg-gradient-to-r from-[#00eaff] to-[#00b4d8] text-background rounded-lg hover:opacity-90 transition-opacity"
                      >
                        S'abonner
                      </button>
                    </div>
                  </form>
                )}
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: currentPage > 1 ? 1.05 : 1 }}
                    whileTap={{ scale: currentPage > 1 ? 0.95 : 1 }}
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className={`px-6 py-2 border rounded-lg transition-all ${currentPage === 1
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:border-[#00eaff]/50 hover:text-[#00eaff]'
                      }`}
                  >
                    ← Précédent
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: currentPage < totalPages ? 1.05 : 1 }}
                    whileTap={{ scale: currentPage < totalPages ? 0.95 : 1 }}
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className={`px-6 py-2 rounded-lg transition-all ${currentPage === totalPages
                        ? 'bg-[#00eaff]/50 cursor-not-allowed'
                        : 'bg-[#00eaff] hover:bg-[#00eaff]/90'
                      } text-background`}
                  >
                    Suivant →
                  </motion.button>
                </div>

                <span className="text-foreground/80">
                  Page {currentPage} sur {totalPages} • {filteredPosts.length} articles
                </span>
              </div>
            </motion.div>
          </>
        )}
      </section>
    </div>
  );
}

*/}