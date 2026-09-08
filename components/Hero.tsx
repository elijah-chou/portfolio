"use client";

import { motion } from "framer-motion";
import { ArrowDown, Briefcase, GraduationCap } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-850 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
          Software Engineer @ JPMorganChase
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Elijah Chou</span>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-2xl mb-8">
            Software engineer based in Atlanta. BS/MS in CS from Emory University, studying at NYU Tandon. Passionate about AI/ML, distributed systems, and modern web apps.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 text-xs md:text-sm text-neutral-500 mb-10"
        >
          <span className="flex items-center gap-1.5 bg-neutral-100 dark:bg-neutral-800/60 px-3 py-1.5 rounded-lg">
            <GraduationCap className="h-4 w-4 text-blue-500" /> Emory BS/MS in CS (Highest Honors)
          </span>
          <span className="flex items-center gap-1.5 bg-neutral-100 dark:bg-neutral-800/60 px-3 py-1.5 rounded-lg">
            <GraduationCap className="h-4 w-4 text-purple-500" /> NYU Tandon School of Engineering
          </span>
          <span className="flex items-center gap-1.5 bg-neutral-100 dark:bg-neutral-800/60 px-3 py-1.5 rounded-lg">
            <Briefcase className="h-4 w-4 text-emerald-500" /> AWS Certified AI Practitioner
          </span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-sm"
          >
            View Featured Projects
          </a>
          <a
            href="#experience"
            className="px-8 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            Work Experience
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full bg-neutral-100 dark:bg-neutral-800 font-semibold hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 animate-bounce"
        >
          <a href="#about" aria-label="Scroll down to About" className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200">
            <ArrowDown className="h-6 w-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
