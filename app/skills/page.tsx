'use client';

import { useState, useEffect } from 'react';
import {
  motion,
  AnimatePresence,
} from 'framer-motion';
import {
  CodeBracketIcon,
  ServerStackIcon,
  CpuChipIcon,
  CloudIcon,
  LightBulbIcon,
  UserGroupIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import figma from "@/public/icon/figma.png";
import git from "@/public/icon/git.png";
import jest from "@/public/icon/jest.png";
import webpack from "@/public/icon/webpack.png";
import graphql from "@/public/icon/graphql.png";
import restapi from "@/public/icon/restapi.png";
import websocket from "@/public/icon/websocket.png";
import framermotion from "@/public/icon/framermotion.png";
import firebase from "@/public/icon/firebase.png";
import chartjs from "@/public/icon/chartjs.png";
import jira from "@/public/icon/jira.png";
import trello from "@/public/icon/trello.png";
import photoshop from "@/public/icon/photoshop.png";
import illustrator from "@/public/icon/illustrator.png";
import premierepro from "@/public/icon/premierepro.png";
import supabase from "@/public/icon/supabase.png";
import prisma from "@/public/icon/prisma.png";
import neon from "@/public/icon/neon.png";


export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState<'tech' | 'soft' | 'tools'>('tech');
  const [isHovered, setIsHovered] = useState<string | null>(null);

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

  const techSkills = [
    {
      category: 'Frontend',
      Icon: CodeBracketIcon,
      color: 'from-blue-400 to-cyan-300',
      skills: [
        { name: 'React', level: 4 },
        { name: 'TypeScript', level: 4 },
        { name: 'Next.js', level: 4 },
        { name: 'Tailwind CSS', level: 4 },
        { name: 'Redux', level: 4 },
      ]
    },
    {
      category: 'Backend',
      Icon: ServerStackIcon,
      color: 'from-purple-500 to-indigo-400',
      skills: [
        { name: 'Node.js', level: 4 },
        { name: 'GraphQL', level: 4 },
        { name: 'PostgreSQL', level: 4 },
        { name: 'MongoDB', level: 4 },
        { name: 'Redis', level: 4 }
      ]
    },
    {
      category: 'DevOps',
      Icon: CloudIcon,
      color: 'from-amber-500 to-yellow-400',
      skills: [
        { name: 'Docker', level: 2 },
        { name: 'AWS', level: 2 },
        { name: 'Kubernetes', level: 2 },
        { name: 'Terraform', level: 2 }
      ]
    },
    {
      category: 'Mobile',
      Icon: CpuChipIcon,
      color: 'from-rose-500 to-pink-400',
      skills: [
        { name: 'React Native', level: 4 },
        { name: 'Expo', level: 4 },

      ]
    }
  ];

  const softSkills = [
    {
      name: 'Problem Solving',
      Icon: LightBulbIcon,
      level: 4,
      color: 'bg-gradient-to-r from-green-500 to-emerald-400'
    },
    {
      name: 'Collaboration',
      Icon: UserGroupIcon,
      level: 4,
      color: 'bg-gradient-to-r from-blue-500 to-cyan-400'
    },
    {
      name: 'Project Management',
      Icon: SparklesIcon,
      level: 4,
      color: 'bg-gradient-to-r from-purple-500 to-indigo-400'
    },
    {
      name: 'Communication',
      Icon: ChatBubbleLeftRightIcon,
      level: 4,
      color: 'bg-gradient-to-r from-amber-500 to-yellow-400'
    }
  ];

  const tools = [
    { name: 'Figma', icon: figma },
    { name: 'Git', icon: git},
    { name: 'Jest', icon: jest },
    { name: 'Webpack', icon: webpack },
    { name: 'GraphQL', icon: graphql },
    { name: 'REST API', icon: restapi},
    { name: 'WebSockets', icon: websocket },
    { name: 'Framer Motion', icon: framermotion },
    { name: 'Firebase', icon: firebase},
    { name: 'Chart.js', icon: chartjs},
    { name: 'Jira', icon: jira },
    { name: 'Trello', icon: trello},
    { name: 'Photoshop', icon: photoshop },
    { name: 'Illustrator', icon: illustrator },
    { name: 'Premiere Pro', icon: premierepro},
    { name: 'Supabase', icon: supabase},
    { name: 'Prisma', icon: prisma},
    { name: 'Neon', icon: neon},
  ];


  const SkillLevel = ({ level }: { level: number }) => (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className={`w-3 h-3 rounded-full ${i < level ? 'bg-foreground' : 'bg-foreground/20'}`}
          whileHover={{ scale: 1.3 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        />
      ))}
    </div>
  );

  // =========================================================================
  // SECTION MATRICE DE COMPÉTENCES STRATÉGIQUES AVEC LOGOS
  // =========================================================================

  const skillMatrix = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'React', level: 5, demand: 5, logo: '/logos/react.png' },
        { name: 'TypeScript', level: 5, demand: 5, logo: '/logos/typescript.png' },
        { name: 'Next.js', level: 4, demand: 4, logo: '/logos/nextjs.png' },
        { name: 'Tailwind CSS', level: 5, demand: 4, logo: '/logos/tailwindcss.png' },
        { name: 'Redux', level: 3, demand: 3, logo: '/logos/redux.png' }
      ],
      color: 'from-blue-400 to-cyan-300'
    },
    {
      category: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 4, demand: 5, logo: '/logos/nodejs.png' },
        { name: 'GraphQL', level: 4, demand: 4, logo: '/logos/graphql.png' },
        { name: 'PostgreSQL', level: 4, demand: 4, logo: '/logos/postgresql.png' },
        { name: 'MongoDB', level: 3, demand: 4, logo: '/logos/mongodb.png' }
      ],
      color: 'from-purple-500 to-indigo-400'
    },
    {
      category: 'DevOps & Cloud',
      skills: [
        { name: 'Docker', level: 4, demand: 5, logo: '/logos/docker.png' },
        { name: 'AWS', level: 4, demand: 5, logo: '/logos/aws.png' },
        { name: 'Kubernetes', level: 3, demand: 4, logo: '/logos/kubernetes.png' },
        { name: 'Terraform', level: 3, demand: 3, logo: '/logos/terraform.png' }
      ],
      color: 'from-amber-500 to-yellow-400'
    },
    {
      category: 'Cross-Functional Skills',
      skills: [
        { name: 'Project Management', level: 4, demand: 5, logo: '/logos/project-management.png' },
        { name: 'Software architecture', level: 4, demand: 5, logo: '/logos/architecture.png' },
        { name: 'Performance optimization', level: 4, demand: 4, logo: '/logos/performance.png' },
        { name: 'UI/UX Design', level: 3, demand: 4, logo: '/logos/uiux.png' }
      ],
      color: 'from-green-500 to-emerald-400'
    }
  ];

  {/** 

  const MatrixLegend = () => (
    <div className="flex flex-wrap gap-6 justify-center mt-8 p-4 bg-background/50 rounded-xl border border-foreground/10">
      <div className="flex items-center">
        <div className="w-4 h-4 rounded-full bg-[#00eaff] mr-2"></div>
        <span className="text-sm text-foreground/80">Expertise élevée - Demande élevée</span>
      </div>
      <div className="flex items-center">
        <div className="w-4 h-4 rounded-full bg-[#00b4d8] mr-2"></div>
        <span className="text-sm text-foreground/80">Expertise solide - Demande moyenne</span>
      </div>
      <div className="flex items-center">
        <div className="w-4 h-4 rounded-full bg-[#ff6b6b] mr-2"></div>
        <span className="text-sm text-foreground/80">Expertise à développer</span>
      </div>
      <div className="flex items-center">
        <div className="w-4 h-4 rounded-full bg-[#f9c74f] mr-2"></div>
        <span className="text-sm text-foreground/80">Potentiel stratégique</span>
      </div>
    </div>
  );
  */}

  const SkillBubble = ({ skill }: { skill: { name: string; level: number; demand: number; logo: string } }) => {
    const size = Math.min(120, Math.max(60, skill.level * 20));

    return (
      <motion.div
        className="flex flex-col items-center justify-center"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div
          className="flex items-center justify-center"
          style={{
            width: `${size}px`,
            height: `${size}px`,
          }}
        >
          <Image
            src={skill.logo}
            alt={skill.name}
            width={size * 0.75}
            height={size * 0.75}
            className="object-contain"
          />
        </div>

        <div className="mt-2 flex flex-col items-center">
          <span className="text-xs font-semibold text-foreground text-center">{skill.name}</span>
          <div className="mt-1 flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${i < skill.level ? 'bg-foreground' : 'bg-foreground/20'}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    );
  };


  // Système de niveau sans pourcentages
  const getLevelLabel = (level: number) => {
    if (level <= 1) return 'Beginner';
    if (level <= 2) return 'Intermediate';
    if (level <= 3) return 'Advanced';
    if (level <= 4) return 'Expert';
    return 'Maître';
  };

  {/** 

  const LevelBadge = ({ level }: { level: number }) => {
    const levelLabel = getLevelLabel(level);
    const colorMap = {
      'Beginner': 'bg-blue-100 text-blue-800',
      'Intermediate': 'bg-purple-100 text-purple-800',
      'Advanced': 'bg-amber-100 text-amber-800',
      'Expert': 'bg-rose-100 text-rose-800',
      'Maître': 'bg-green-100 text-green-800'
    };

    return (
      <motion.span
        className={`px-3 py-1 rounded-full text-sm font-medium ${colorMap[levelLabel as keyof typeof colorMap]}`}
        whileHover={{ scale: 1.05 }}
      >
        {levelLabel}
      </motion.span>
    );
  };

  */}

  {/** 

  const SkillVisualization = ({ level }: { level: number }) => {
    const controls = useAnimation();

    useEffect(() => {
      controls.start({
        width: `${level * 20}%`,
        transition: { duration: 1.5, ease: "easeOut" }
      });
    }, [controls, level]);

    return (
      <div className="flex items-center gap-3">
        <div className="w-full h-2 bg-foreground/10 rounded-full overflow-hidden">
          <motion.div
            className={`h-full bg-gradient-to-r from-[#00eaff] to-[#00b4d8] rounded-full`}
            initial={{ width: 0 }}
            animate={controls}
          />
        </div>
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className={`w-2 h-2 rounded-full ${i < level ? 'bg-[#00eaff]' : 'bg-foreground/20'}`}
              whileHover={{ scale: 1.5 }}
            />
          ))}
        </div>
      </div>
    );
  };
  */}

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
              Skills
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl text-foreground/80 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Technical expertise and strategic skills for innovative solutions
          </motion.p>
        </motion.div>

        {/* Navigation par onglets */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="inline-flex p-1 bg-background/80 border border-foreground/10 rounded-xl backdrop-blur-sm">
            <button
              onClick={() => setActiveTab('tech')}
              className={`px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${activeTab === 'tech'
                ? 'bg-gradient-to-r from-[#00eaff] to-[#00b4d8] text-background shadow-lg'
                : 'text-foreground/80 hover:text-foreground hover:bg-foreground/5'
                }`}
            >
              Techniques
            </button>
            <button
              onClick={() => setActiveTab('soft')}
              className={`px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${activeTab === 'soft'
                ? 'bg-gradient-to-r from-[#00eaff] to-[#00b4d8] text-background shadow-lg'
                : 'text-foreground/80 hover:text-foreground hover:bg-foreground/5'
                }`}
            >
              Cross-functional
            </button>
            <button
              onClick={() => setActiveTab('tools')}
              className={`px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${activeTab === 'tools'
                ? 'bg-gradient-to-r from-[#00eaff] to-[#00b4d8] text-background shadow-lg'
                : 'text-foreground/80 hover:text-foreground hover:bg-foreground/5'
                }`}
            >
              Tools
            </button>
          </div>
        </motion.div>

        {/* Compétences Techniques */}
        <AnimatePresence mode="wait">
          {activeTab === 'tech' && (
            <motion.div
              key="tech"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
            >
              {techSkills.map((section, index) => (
                <motion.div
                  key={section.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 300
                  }}
                  className="bg-background/80 border border-foreground/10 rounded-2xl p-6 hover:shadow-[0_0_30px_-10px_rgba(0,234,255,0.3)] transition-all duration-300 group backdrop-blur-sm"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      className={`p-3 rounded-xl bg-gradient-to-r ${section.color} shadow-md`}
                      whileHover={{ rotate: 20, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <section.Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-foreground">{section.category}</h3>
                  </div>

                  <div className="space-y-5">
                    {section.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex justify-between items-center"
                        onMouseEnter={() => setIsHovered(skill.name)}
                        onMouseLeave={() => setIsHovered(null)}
                      >
                        <motion.span
                          className="text-foreground/90"
                          animate={{
                            color: isHovered === skill.name ? '#00eaff' : 'inherit'
                          }}
                        >
                          {skill.name}
                        </motion.span>
                        <SkillLevel level={skill.level} />
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Compétences Douces */}
        <AnimatePresence mode="wait">
          {activeTab === 'soft' && (
            <motion.div
              key="soft"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-8 mb-20"
            >
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.03 }}
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 300
                  }}
                  className="bg-background/80 border border-foreground/10 rounded-2xl p-6 hover:shadow-[0_0_30px_-10px_rgba(0,234,255,0.2)] transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className={`p-3 rounded-xl ${skill.color} shadow-md`}
                      animate={{
                        rotate: [0, 10, 0, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      <skill.Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl font-semibold text-foreground">{skill.name}</h4>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              className={`w-3 h-3 rounded-full ${i < skill.level ? 'bg-foreground' : 'bg-foreground/20'}`}
                              whileHover={{ scale: 1.5 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            />
                          ))}
                        </div>
                      </div>
                      <motion.p
                        className="text-foreground/80"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {getLevelLabel(skill.level)}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Outils */}
        <AnimatePresence mode="wait">
          {activeTab === 'tools' && (
            <motion.div
              key="tools"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-20"
            >
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.3,
                    type: "spring",
                    stiffness: 300
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.1,
                    boxShadow: '0 10px 25px -5px rgba(0, 234, 255, 0.3)'
                  }}
                  className="flex flex-col items-center bg-background/80 border border-foreground/10 rounded-xl p-4 backdrop-blur-sm"
                >
                  <motion.div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >


                    <Image
                      src={tool.icon}
                      alt={tool.name}
                      width={45}
                      height={45}
                      className="object-contain"
                    />
                  </motion.div>
                  <span className="text-foreground text-center font-medium">{tool.name}</span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Section Matrice de Compétences Stratégiques */}
        <motion.div
          className="bg-background/80 border border-foreground/10 rounded-2xl p-8 mb-20 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-3xl font-bold mb-12 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00eaff] to-[#00b4d8]">
                Strategic Skills Matrix
              </span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {skillMatrix.map((category, catIndex) => (
                <motion.div
                  key={catIndex}
                  initial={{ opacity: 0, x: catIndex % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: catIndex * 0.2 + 0.3 }}
                  className="bg-gradient-to-br from-background to-background/50 p-6 rounded-2xl border border-foreground/10"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                      {catIndex === 0 && <CodeBracketIcon className="w-6 h-6 text-white" />}
                      {catIndex === 1 && <ServerStackIcon className="w-6 h-6 text-white" />}
                      {catIndex === 2 && <CloudIcon className="w-6 h-6 text-white" />}
                      {catIndex === 3 && <LightBulbIcon className="w-6 h-6 text-white" />}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{category.category}</h3>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: skillIndex * 0.1 }}
                      >
                        <SkillBubble skill={skill} />
                      </motion.div>
                    ))}
                  </div>

            
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-center bg-gradient-to-r from-[#00eaff]/10 to-[#00b4d8]/10 p-8 rounded-2xl border border-foreground/10 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Ready to see my work?
          </h3>
          <motion.a
            href="/projects"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#00eaff] to-[#00b4d8] text-background rounded-lg font-semibold text-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 30px rgba(0, 234, 255, 0.5)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore my projects
          </motion.a>
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