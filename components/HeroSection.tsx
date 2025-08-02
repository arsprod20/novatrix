'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { MessageCircle, ArrowRight, Zap, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

// Composant réutilisable pour les boutons
const CtaButton = ({
    href,
    icon,
    children,
    className = '',
    delay = 0,
}: {
    href: string;
    icon: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) => (
    <Link href={href}>
        <motion.button
            className={`px-8 py-4 text-lg font-semibold flex items-center justify-center gap-2 ${className}`}
            whileHover={{
                scale: 1.05,
                boxShadow: '0 0 20px rgba(3, 238, 255, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay }}
        >
            {icon}
            <span>{children}</span>
            {href === '/contact' && (
                <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <ArrowRight size={18} />
                </motion.div>
            )}
        </motion.button>
    </Link>
);

const HeroSection = () => {
    const [isClient, setIsClient] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const bgX = useTransform(x, [-1, 1], [5, -5]);
    const bgY = useTransform(y, [-1, 1], [5, -5]);
    const frame = useRef<number | null>(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (frame.current) cancelAnimationFrame(frame.current);
        frame.current = requestAnimationFrame(() => {
            const rect = e.currentTarget.getBoundingClientRect();
            x.set((e.clientX - rect.left) / rect.width - 0.5);
            y.set((e.clientY - rect.top) / rect.height - 0.5);
        });
    };

    const generateDeterministicValues = (index: number) => {
        const seed = 12345 + index;
        return {
            top: `${Math.abs(Math.sin(seed * 2.1) * 100)}%`,
            left: `${Math.abs(Math.cos(seed * 1.7) * 100)}%`,
            width: `${Math.abs(Math.sin(seed) * 10 + 5)}px`,
            height: `${Math.abs(Math.cos(seed * 0.9) * 10 + 5)}px`,
            direction: index % 2 === 0 ? -15 : 15,
        };
    };

    return (
        <motion.section
            className="relative min-h-screen flex flex-col items-center justify-center pt-25 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
            initial="hidden"
            animate="visible"
            onMouseMove={handleMouseMove}
        >
            <Image
                src="/hero-bg.png"
                alt=""
                fill
                className="object-cover opacity-30 z-0 pointer-events-none scale-x-125"
                style={{ mixBlendMode: 'screen' }}
                priority
                aria-hidden="true"
            />

            <motion.div className="absolute inset-0 z-0" style={{ x: bgX, y: bgY }}>
                <div className="absolute inset-0 opacity-80" />

                {isClient &&
                    [...Array(12)].map((_, i) => {
                        const { top, left, width, height, direction } =
                            generateDeterministicValues(i);
                        return (
                            <motion.div
                                key={i}
                                className="absolute rounded-full"
                                style={{
                                    top,
                                    left,
                                    width,
                                    height,
                                    background:
                                        i % 3 === 0 ? '#03eeff' : i % 3 === 1 ? '#2139fb' : '#ffffff',
                                }}
                                animate={{
                                    y: [0, -20, 0],
                                    x: [0, direction, 0],
                                    opacity: [0.6, 1, 0.6],
                                }}
                                transition={{
                                    duration: 8 + (i % 4),
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            />
                        );
                    })}
            </motion.div>

            {/* Logo Novatrix */}
            <motion.div
                className="relative z-20 mb-16 flex flex-col items-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                <Image
                    src="/logo.png"
                    alt="Logo Novatrix"
                    width={400}
                    height={400}
                    className="object-cover"
                    priority
                />
            </motion.div>

            {/* Contenu principal */}
            <div className="container mx-auto relative z-10 text-center max-w-4xl">
                <motion.h1
                    className="text-4xl md:text-6xl font-bold text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        textShadow:
                            '0 0 10px rgba(3, 238, 255, 0.8), 0 0 20px rgba(33, 57, 251, 0.6)',
                    }}
                >
                    Innovation Numérique Excellence Créative
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-cyan-200 mb-10 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    Novatrix propulse votre présence digitale avec des solutions sur mesure
                    alliant technologie de pointe et design d&apos;exception
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <CtaButton
                        href="/contact"
                        icon={<MessageCircle className="text-white" size={20} />}
                        delay={0.7}
                        className="cta-button"
                    >
                        Contactez-nous
                    </CtaButton>

                    <CtaButton
                        href="/services"
                        icon={<Zap className="text-cyan-300" size={20} fill="currentColor" />}
                        delay={0.8}
                        className="border border-neon-cyan rounded-lg text-neon-cyan hover:bg-cyan-900/20 transition-all"
                    >
                        Nos Services
                    </CtaButton>
                </motion.div>
            </div>

            {/* Éléments décoratifs */}
            <motion.div
                className="absolute bottom-20 left-10 opacity-70"
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            >
                <Star className="text-cyan-300" size={24} fill="currentColor" />
            </motion.div>

            <motion.div
                className="absolute top-1/4 right-16 opacity-60"
                animate={{ y: [0, 15, 0] }}
                transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: 'easeInOut',
                    delay: 0.5,
                }}
            >
                <Star className="text-blue-400" size={20} fill="currentColor" />
            </motion.div>
        </motion.section>
    );
};

export default HeroSection;
