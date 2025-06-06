'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { LinkedinIcon, GithubIcon, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [rateLimitExceeded, setRateLimitExceeded] = useState(false);
    //const [rateLimitMessage, setRateLimitMessage] = useState('');


    type FormValues = {
        name: string;
        email: string;
        message: string;
    };

    const { register, handleSubmit, formState: { errors }, reset } =
        useForm<FormValues>({ mode: 'onChange' });

    const onSubmit = async (data: FormValues) => {
        setIsSubmitting(true);
        setRateLimitExceeded(false);

        try {
            const response = await fetch('https://formspree.io/f/xgvyeoor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data),
            });

            if (response.status === 429) { 
                setRateLimitExceeded(true);
                throw new Error('Limite de messages atteinte');
            }

            if (!response.ok) throw new Error("Erreur lors de l'envoi");

            setIsSubmitted(true);
            reset();
        } catch (error) {
            console.error("Erreur d'envoi:", error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="min-h-screen pt-20 bg-gradient-to-b from-background to-background/90 relative overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-[10%] left-[10%] w-64 h-64 bg-[#00eaff]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[20%] right-[10%] w-48 h-48 bg-[#00eaff]/15 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00eaff]/5 rounded-full blur-3xl"></div>
            </div>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="text-foreground">Contact</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00eaff] to-cyan-300 ml-2">
                            Me
                        </span>
                    </motion.h1>

                    <div className="flex justify-center mb-6">
                        <div className="w-24 h-1 bg-gradient-to-r from-foreground/20 to-[#00eaff] rounded-full" />
                    </div>

                    <motion.p
                        className="text-xl text-foreground/80 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        {"Let's discuss your project or explore an innovative collaboration."}
                    </motion.p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-background/80 backdrop-blur-sm border border-foreground/10 rounded-2xl p-6 md:p-8 shadow-xl"
                    >
                        {isSubmitted ? (
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

                                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#00eaff]">Message sent!</h3>
                                <p className="text-lg text-foreground/80 mb-8 max-w-md mx-auto">
                                    Thank you for your message; I will get back to you as soon as possible.
                                </p>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setIsSubmitted(false)}
                                    className="px-6 py-3 bg-foreground/5 border border-foreground/10 rounded-lg text-foreground/80 hover:text-[#00eaff] hover:border-[#00eaff]/30 transition-all"
                                >
                                    Send another message
                                </motion.button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="relative"
                                >
                                    <label className="block text-foreground/80 mb-2">Full Name</label>
                                    <input
                                        {...register('name', { required: 'The name is required.' })}
                                        name="name"
                                        className={`w-full bg-background/80 border ${errors.name
                                            ? "border-red-500/50 focus:border-red-500"
                                            : "border-foreground/10 focus:border-[#00eaff]"
                                            } pl-4 pr-4 py-3 rounded-xl focus:ring-2 ${errors.name
                                                ? "focus:ring-red-500/20"
                                                : "focus:ring-[#00eaff]/30"
                                            } transition-all duration-300 shadow-sm`}
                                        placeholder="Your name"
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-sm mt-2">{errors.name.message as string}</p>
                                    )}
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="relative"
                                >
                                    <label className="block text-foreground/80 mb-2">Email</label>
                                    <input
                                        {...register('email', { required: 'Email is required.' })}
                                        name="email"
                                        type="email"
                                        className={`w-full bg-background/80 border ${errors.email
                                            ? "border-red-500/50 focus:border-red-500"
                                            : "border-foreground/10 focus:border-[#00eaff]"
                                            } pl-4 pr-4 py-3 rounded-xl focus:ring-2 ${errors.email
                                                ? "focus:ring-red-500/20"
                                                : "focus:ring-[#00eaff]/30"
                                            } transition-all duration-300 shadow-sm`}
                                        placeholder="your@email.com"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-2">{errors.email.message as string}</p>
                                    )}
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="relative"
                                >
                                    <label className="block text-foreground/80 mb-2">Message</label>
                                    <textarea
                                        {...register('message', {
                                            required: 'Message is required.',
                                            minLength: {
                                                value: 10,
                                                message: 'Minimum 10 characters.'
                                            }
                                        })}
                                        name="message"
                                        rows={5}
                                        className={`w-full bg-background/80 border ${errors.message
                                            ? "border-red-500/50 focus:border-red-500"
                                            : "border-foreground/10 focus:border-[#00eaff]"
                                            } pl-4 pr-4 py-3 rounded-xl focus:ring-2 ${errors.message
                                                ? "focus:ring-red-500/20"
                                                : "focus:ring-[#00eaff]/30"
                                            } transition-all duration-300 shadow-sm`}
                                        placeholder="Your message..."
                                    />
                                    {errors.message && (
                                        <p className="text-red-500 text-sm mt-2">{errors.message.message as string}</p>
                                    )}
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="pt-4"
                                >
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting || rateLimitExceeded}
                                        whileHover={{
                                            scale: isSubmitting || rateLimitExceeded ? 1 : 1.02,
                                            boxShadow: isSubmitting || rateLimitExceeded ? "none" : "0 5px 15px rgba(0, 234, 255, 0.4)"
                                        }}
                                        whileTap={{ scale: isSubmitting || rateLimitExceeded ? 1 : 0.98 }}
                                        className={`w-full px-6 py-4 font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group ${isSubmitting
                                            ? "bg-foreground/10 cursor-not-allowed"
                                            : rateLimitExceeded
                                                ? "bg-gradient-to-r from-gray-400 to-gray-600 cursor-not-allowed text-gray-800"
                                                : "bg-gradient-to-r from-[#00eaff] to-cyan-400 text-background"
                                            }`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <span>Sending...
                                                </span>
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                    className="w-5 h-5 border-t-2 border-[#00eaff] border-r-2 border-transparent rounded-full"
                                                />
                                            </>
                                        ) : rateLimitExceeded ? (
                                            <div className="flex items-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        ) : (
                                            <>
                                                <span>Send the message</span>
                                                <motion.span
                                                    animate={{ x: [0, 5, 0] }}
                                                    transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
                                                    className="group-hover:animate-pulse"
                                                >
                                                    <Send className="w-5 h-5" />
                                                </motion.span>
                                            </>
                                        )}
                                    </motion.button>
                                    {/** 
                                    {rateLimitExceeded && (
                                        <div className="text-center mt-4">
                                           
                                            <p className="text-red-500 font-medium">{rateLimitMessage}</p>
                                            
                                            <p className="text-gray-500 text-sm mt-1">
                                                Réessayez dans 24 heures ou utilisez un autre moyen de contact
                                            </p>
                                            
                                        </div>
                                    )}
                                    */}
                                </motion.div>
                            </form>
                        )}
                    </motion.div>

                    {/* Informations de contact */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8 bg-background/80 backdrop-blur-sm border border-foreground/10 rounded-2xl p-6 md:p-8 shadow-xl"
                    >
                        <div className="space-y-6">
                            <motion.div
                                className="flex items-start gap-4 p-4 bg-background/50 rounded-xl border border-foreground/10"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <div className="p-2 bg-[#00eaff]/10 rounded-full">
                                    <MapPinIcon className="w-6 h-6 text-[#00eaff]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-foreground mb-1">Location</h3>
                                    <p className="text-foreground/80">Toronto, Canada</p>
                                </div>
                            </motion.div>


                            <motion.div
                                className="flex items-start gap-4 p-4 bg-background/50 rounded-xl border border-foreground/10"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <div className="p-2 bg-[#00eaff]/10 rounded-full">
                                    <EnvelopeIcon className="w-6 h-6 text-[#00eaff]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-foreground mb-1">Email</h3>
                                    <a
                                        href="mailto:amadou.sow@monboreal.ca"
                                        className="text-foreground/80 hover:text-[#00eaff] transition-colors"
                                    >
                                        amadou.sow@monboreal.ca
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start gap-4 p-4 bg-background/50 rounded-xl border border-foreground/10"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <div className="p-2 bg-[#00eaff]/10 rounded-full">
                                    <PhoneIcon className="w-6 h-6 text-[#00eaff]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-foreground mb-1">Phone Number</h3>
                                    <a
                                        href="tel:+14372981700"
                                        className="text-foreground/80 hover:text-[#00eaff] transition-colors"
                                    >
                                        +1 (437) 298-1700
                                    </a>
                                </div>
                            </motion.div>
                        </div>

                        {/* Carte */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="relative h-64 md:h-72 rounded-xl overflow-hidden border border-foreground/10"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23064.93610212051!2d-79.59019519999998!3d43.728896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sca!4v1748015336759!5m2!1sfr!2sca"
                                className="w-full h-full filter grayscale contrast-110"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
                            <div className="absolute top-4 right-4 bg-[#00eaff] text-background px-3 py-1 rounded-full text-sm font-medium">
                                Toronto, Canada
                            </div>
                        </motion.div>

                        {/* Réseaux sociaux */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="pt-6 border-t border-foreground/10"
                        >
                            <h3 className="text-xl font-bold mb-4 text-foreground">Social Networks</h3>
                            <div className="flex gap-4">
                                {[
                                    {
                                        icon: <LinkedinIcon className="w-6 h-6" />,
                                        href: "https://www.linkedin.com/in/amadou-sow-8390a124a/",
                                        label: "LinkedIn"
                                    },
                                    {
                                        icon: <GithubIcon className="w-6 h-6" />,
                                        href: "https://github.com/arsprod2001",
                                        label: "GitHub"
                                    },

                                ].map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target={social.href.startsWith('http') ? "_blank" : undefined}
                                        rel="noopener noreferrer"
                                        className="p-3 border border-foreground/10 rounded-xl hover:bg-[#00eaff]/10 hover:border-[#00eaff]/30 transition-all duration-300 group"
                                        whileHover={{ y: -5 }}
                                        aria-label={social.label}
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            className="text-foreground group-hover:text-[#00eaff]"
                                        >
                                            {social.icon}
                                        </motion.div>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <motion.div
                className="flex justify-center mt-16"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
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
    );
}