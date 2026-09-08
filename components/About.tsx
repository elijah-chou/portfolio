"use client";

import { motion } from "framer-motion";
import { Code2, Server, Award, Brain } from "lucide-react";

const highlights = [
  { 
    name: "Software Engineering", 
    icon: <Server className="h-6 w-6" />, 
    description: "Enterprise Java & Spring Boot microservices, Kafka event streaming, Kubernetes, and Cloud native integrations at JPMorganChase." 
  },
  { 
    name: "AI & LLM Solutions", 
    icon: <Brain className="h-6 w-6" />, 
    description: "AWS Certified AI Practitioner. Building prompt optimization MCPs, Gemini Pro/PaLM integrations, and vector cache architectures." 
  },
  { 
    name: "Full-Stack Development", 
    icon: <Code2 className="h-6 w-6" />, 
    description: "Modern web applications with React, Next.js, TypeScript, Tailwind CSS, Python Flask, PostgreSQL, and Docker." 
  },
  { 
    name: "Research & Academic Excellence", 
    icon: <Award className="h-6 w-6" />, 
    description: "Highest Honors Thesis from Emory University in Code Creativity & AST Distance, published at CSEDU 2024. Active GTRI research alumnus." 
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Background & Passion</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
              I am a Software Engineer at <strong>JPMorganChase</strong> in Atlanta. I completed my combined <strong>BS/MS in Computer Science at Emory University</strong> with Highest Honors and am pursuing further graduate studies at the <strong>NYU Tandon School of Engineering</strong>.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
              My honors thesis on <em>&ldquo;Creativity in Programming: A Code Distance Approach&rdquo;</em> was published and recognized at <strong>CSEDU 2024</strong>. I&apos;ve also contributed to research at the <strong>Georgia Tech Research Institute (GTRI)</strong> and worked with innovative R&D teams at <strong>AT&T CDO</strong> on blockchain AI provenance.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              I love building scalable backend architectures, experimenting with the newest generative AI capabilities, and collaborating in hackathons—securing top podium placements at both internal and global competitions!
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-700 hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 mb-4">{item.icon}</div>
                <h4 className="font-semibold mb-2">{item.name}</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
