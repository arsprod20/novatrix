'use client';

import React, { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { formatDate } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Clock, Calendar, MessageSquare, ArrowLeft, Lock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Loading from '@/components/Loading';

// Mock data
const getBlogPost = (slug: string) => {
    const posts = [
        {
            slug: 'optimisation-nextjs',
            title: "Optimisation des performances dans Next.js 14",
            content: `
        <h2>Introduction</h2>
        <p>Next.js 14 introduit des améliorations significatives...</p>
        <!-- Contenu complet -->
      `,
            date: "2024-03-15",
            readTime: "8 min",
            category: "Frontend",
            image: "/seo.jpg",
            comments: 12,
            author: {
                name: "Amadou Sow",
                avatar: "/ars.png"
            }
        }
    ];
    return posts.find(post => post.slug === slug);
};

function BlogContent({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const post = getBlogPost(slug);


    if (!post) return notFound();

    return (
        <div className="min-h-screen bg-background">
            <header className="border-b border-foreground/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-[#00eaff] hover:text-[#00eaff]/80 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                        Retour au blog
                    </Link>
                </div>
            </header>

            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Métadonnées */}
                    <div className="flex flex-wrap gap-4 items-center text-sm text-foreground/80 mb-6">
                        <span className="px-3 py-1 bg-[#00eaff]/10 text-[#00eaff] rounded-full">
                            {post.category}
                        </span>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(post.date)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime} de lecture</span>
                        </div>
                    </div>

                    {/* Titre */}
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00eaff] to-[#00b4d8]">
                        {post.title}
                    </h1>

                    {/* Auteur */}
                    <div className="flex items-center gap-4 mb-12">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#00eaff]/50">
                            <Image
                                src={post.author.avatar}
                                alt={post.author.name}
                                width={48}
                                height={48}
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <p className="font-medium">{post.author.name}</p>
                            <p className="text-sm text-foreground/80">Développeur Fullstack</p>
                        </div>
                    </div>

                    {/* Image principale */}
                    <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-12 border border-foreground/10">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Contenu */}
                    <div
                        className="prose prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Commentaires */}
                    <section className="mt-20 border-t border-foreground/10 pt-12">
                        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <MessageSquare className="text-[#00eaff]" />
                            <span>Commentaires ({post.comments})</span>
                        </h2>

                        <div className="space-y-6">
                            <form
                                className="mt-8 space-y-4"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    const formData = new FormData(e.currentTarget);
                                    const isAnonymous = formData.get('anonymous') === 'on';
                                    const name = formData.get('name')?.toString().trim();
                                    const content = formData.get('content')?.toString().trim();

                                    if (!isAnonymous && !name) {
                                        alert('Veuillez entrer votre nom ou cocher "Rendre anonyme"');
                                        return;
                                    }

                                    if (!content || content.length < 20) {
                                        alert('Le commentaire doit contenir au moins 20 caractères');
                                        return;
                                    }

                                    // Soumission
                                }}
                            >
                                <h3 className="text-lg font-medium text-[#00eaff]">Laisser un commentaire</h3>

                                <div className="grid grid-cols-1 gap-4">
                                    {/* Champ nom + anonyme */}
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Votre nom"
                                            className="w-full bg-background border border-foreground/10 rounded-lg p-3 focus:border-[#00eaff] focus:ring-2 focus:ring-[#00eaff]/20 disabled:bg-foreground/5 disabled:border-foreground/20 disabled:cursor-not-allowed transition-all"
                                            disabled={false} // Serra modifié par le script
                                        />
                                        <div className="absolute right-3 top-3 flex items-center gap-2">
                                            <Lock className="w-4 h-4 text-foreground/30 hidden" id="lock-icon" />
                                            <input
                                                type="checkbox"
                                                id="anonymous"
                                                name="anonymous"
                                                className="sr-only peer"
                                            />
                                            <label
                                                htmlFor="anonymous"
                                                className="text-xs px-2 py-1 rounded-full border border-foreground/10 hover:border-[#00eaff]/50 peer-checked:bg-[#00eaff]/10 peer-checked:border-[#00eaff]/50 cursor-pointer transition-all"
                                            >
                                                Rendre anonyme
                                            </label>
                                        </div>
                                    </div>

                                    {/* Champ commentaire */}
                                    <div className="relative">
                                        <textarea
                                            required
                                            name="content"
                                            placeholder="Votre commentaire * (minimum 20 caractères)"
                                            rows={4}
                                            minLength={20}
                                            className="w-full bg-background border border-foreground/10 rounded-lg p-4 focus:border-[#00eaff] focus:ring-2 focus:ring-[#00eaff]/20"
                                        />
                                    </div>
                                </div>

                                {/* Consentement conditionnel */}
                                <div className="flex items-center space-x-2" id="consent-container">
                                    <input
                                        type="checkbox"
                                        required
                                        id="consent"
                                        name="consent"
                                        className="w-4 h-4 border-foreground/10 rounded focus:ring-[#00eaff] text-[#00eaff]"
                                    />
                                    <label htmlFor="consent" className="text-sm text-foreground/80">
                                        {"J'accepte le stockage de mes données selon la"}{' '}
                                        <a href="/privacy" className="text-[#00eaff] hover:text-[#00eaff]/80">
                                            politique de confidentialité
                                        </a>
                                    </label>
                                </div>

                                <script dangerouslySetInnerHTML={{
                                    __html: `
          document.getElementById('anonymous').addEventListener('change', (e) => {
            const nameInput = document.getElementById('name');
            const lockIcon = document.getElementById('lock-icon');
            const consentContainer = document.getElementById('consent-container');
            
            if (e.target.checked) {
              nameInput.disabled = true;
              nameInput.placeholder = 'Commentaire anonyme (verrouillé)';
              lockIcon.classList.remove('hidden');
              consentContainer.style.display = 'none';
              document.getElementById('consent').required = false;
              nameInput.classList.add('bg-foreground/5', 'border-foreground/20');
            } else {
              nameInput.disabled = false;
              nameInput.placeholder = 'Votre nom';
              lockIcon.classList.add('hidden');
              consentContainer.style.display = 'flex';
              document.getElementById('consent').required = true;
              nameInput.classList.remove('bg-foreground/5', 'border-foreground/20');
            }
          });
        `
                                }} />

                                <button
                                    type="submit"
                                    className="w-full px-6 py-2 bg-gradient-to-r from-[#00eaff] to-[#00b4d8] text-background rounded-lg hover:opacity-90 transition-opacity"
                                >
                                    Publier
                                </button>
                            </form>

                            {/* Exemple de commentaire */}
                            <div className="p-6 bg-background/50 border border-foreground/10 rounded-lg neon-comment">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#00eaff]/50">
                                        <Image
                                            src="/users/anonymous.jpg"
                                            alt="Anonyme"
                                            width={40}
                                            height={40}
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-medium">Anonyme</p>
                                        <p className="text-sm text-foreground/60">Il y a 2 heures</p>
                                    </div>
                                </div>
                                <p className="text-foreground/80">
                                    Très bonnes pratiques expliquées clairement !
                                </p>
                            </div>
                        </div>
                    </section>
                </motion.div>
            </article>

            {/* Articles similaires */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-foreground/10">
                <h2 className="text-3xl font-bold mb-8">Articles similaires</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <article className="group bg-background/50 border border-foreground/10 rounded-xl overflow-hidden hover:border-[#00eaff]/50 transition-all">
                        <Link href="/blog/typescript-avance">
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src="/blog/typescript.jpg"
                                    alt="TypeScript avancé"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <span className="inline-block px-3 py-1 bg-[#00eaff]/10 text-[#00eaff] rounded-full text-sm mb-3">
                                    Frontend
                                </span>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-[#00eaff] transition-colors">
                                    TypeScript avancé : Patterns et bonnes pratiques
                                </h3>
                                <p className="text-foreground/80 mb-4">Découvrez les fonctionnalités avancées de TypeScript...</p>
                                <div className="flex items-center gap-4 text-sm text-foreground/60">
                                    <span>9 min de lecture</span>
                                    <span>•</span>
                                    <span>5 commentaires</span>
                                </div>
                            </div>
                        </Link>
                    </article>
                </div>
            </section>
        </div>
    );
}

export default function BlogPost({ params }: { params: { slug: string } }) {
    return (
        <Suspense fallback={<Loading />}>
            <BlogContent params={params} />
        </Suspense>
    );
}