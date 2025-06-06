'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  ClockIcon, 
  CodeBracketIcon,
  CheckCircleIcon,
  PlayCircleIcon,
  CalendarDaysIcon,
  TicketIcon,
  CreditCardIcon,
  UserCircleIcon,
  BellIcon,
  ChartPieIcon,
  MagnifyingGlassIcon,
  UserGroupIcon,
  DocumentArrowDownIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from '@heroicons/react/24/outline';

import reactLogo from '@/public/logos/react.png';
import typescriptLogo from '@/public/logos/typescript.png';
import tailwindLogo from '@/public/logos/tailwindcss.png';
import nodejsLogo from '@/public/logos/nodejs.png';
import expressLogo from '@/public/logos/expressjs.png';
import postgresqlLogo from '@/public/logos/postgresql.png';
import jwtLogo from '@/public/logos/jwt.png';
import stripeLogo from '@/public/logos/stripe.png';

export default function CurrentProject() {
  const [isFeaturesExpanded, setIsFeaturesExpanded] = useState(false);
  const project = {
    title: "EventHub – Event Management Platform",
    description: "Web application enabling event creation, booking, and comprehensive management with online payment, dashboard, notifications, and ticket export features.",
    startDate: "June 2, 2025",
    deadline: "June 18, 2025",
    progress: 25,
    technologies: [
      { name: "React.js", logo: reactLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "Tailwind CSS", logo: tailwindLogo },
      { name: "Node.js", logo: nodejsLogo },
      { name: "Express.js", logo: expressLogo },
      { name: "PostgreSQL", logo: postgresqlLogo },
      { name: "JWT", logo: jwtLogo },
      { name: "Stripe", logo: stripeLogo }
    ],
    features: [
      { name: "Event creation & management", completed: true, icon: CalendarDaysIcon },
      { name: "Online booking and ticketing", completed: false, icon: TicketIcon },
      { name: "Secure payment (Stripe)", completed: false, icon: CreditCardIcon },
      { name: "Authentication (Email + Google)", completed: true, icon: UserCircleIcon },
      { name: "Push and email notifications", completed: false, icon: BellIcon },
      { name: "User dashboard", completed: true, icon: ChartPieIcon },
      { name: "Search engine with filters", completed: false, icon: MagnifyingGlassIcon },
      { name: "Public profile with past events", completed: false, icon: UserGroupIcon },
      { name: "PDF ticket export", completed: false, icon: DocumentArrowDownIcon }
    ]
  };

  const ProgressBar = ({ percentage }: { percentage: number }) => (
    <div className="w-full h-2.5 bg-foreground/5 rounded-full overflow-hidden mt-2">
      <motion.div 
        className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-background border border-foreground/10 rounded-2xl p-6 md:p-7 shadow-lg overflow-hidden"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-gradient-to-r from-red-500 to-rose-600">
            <PlayCircleIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">
              Ongoing Project
            </h2>
            <div className="flex items-center gap-1.5 mt-1 text-sm text-foreground/70">
              <ClockIcon className="w-4 h-4" />
              <span>{project.startDate} - {project.deadline}</span>
            </div>
          </div>
        </div>
        
        <div className="px-3.5 py-1.5 bg-foreground/5 rounded-lg border border-foreground/10">
          <span className="text-sm font-medium text-foreground/80">Progress</span>
          <p className="font-bold text-cyan-600">{project.progress}%</p>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2 text-foreground">
          {project.title}
        </h3>
        <p className="text-foreground/80">{project.description}</p>
      </div>
      
      <div className="mb-6">
        <ProgressBar percentage={project.progress} />
      </div>
      
      <div className="mb-6">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsFeaturesExpanded(!isFeaturesExpanded)}
        >
          <h4 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
            <CheckCircleIcon className="w-5 h-5 text-blue-500" />
            Features
          </h4>
          <motion.div
            animate={{ rotate: isFeaturesExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isFeaturesExpanded ? 
              <ChevronUpIcon className="w-5 h-5 text-foreground/70" /> : 
              <ChevronDownIcon className="w-5 h-5 text-foreground/70" />
            }
          </motion.div>
        </div>

        <AnimatePresence>
          {isFeaturesExpanded && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: "auto",
                opacity: 1,
                transition: { 
                  height: { duration: 0.3, ease: "easeOut" },
                  opacity: { duration: 0.2, delay: 0.1 }
                }
              }}
              exit={{ 
                height: 0,
                opacity: 0,
                transition: { 
                  height: { duration: 0.2, ease: "easeIn" },
                  opacity: { duration: 0.1 }
                }
              }}
              className="overflow-hidden space-y-3"
            >
              {project.features.map((feature, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start gap-3 p-2.5 bg-foreground/3 rounded-lg"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="mt-0.5">
                    <feature.icon className={`w-5 h-5 ${feature.completed ? 'text-green-500' : 'text-foreground/30'}`} />
                  </div>
                  <div>
                    <span className={`font-medium ${feature.completed ? 'text-foreground' : 'text-foreground/80'}`}>
                      {feature.name}
                    </span>
                    <div className="flex items-center gap-1.5 mt-1">
                      <div className={`w-2.5 h-2.5 rounded-full ${feature.completed ? 'bg-green-500' : 'bg-foreground/20'}`} />
                      <span className="text-xs text-foreground/60">
                        {feature.completed ? 'Terminé' : 'En développement'}
                      </span>
                    </div>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
          <CodeBracketIcon className="w-5 h-5 text-purple-500" />
          Technologies
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="px-3 py-1.5 bg-foreground/5 text-foreground/90 rounded-lg text-sm flex items-center gap-2"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(139, 92, 246, 0.1)'
              }}
            >
              <div className="w-5 h-5 flex items-center justify-center relative">
                <Image 
                  src={tech.logo}
                  alt={tech.name}
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
              <span>{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}