"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";

const projects = [
  {
    title: "AI Prompt Optimization MCP",
    description: "2nd Place Winner at the JPMorganChase Global Hackathon. An MCP that optimizes prompts by stripping tokens, recommends cost-effective models, and uses a vector DB to cache prompts to bypass the copilot agent.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    tags: ["AI", "Vector DB", "MCP", "Hackathon"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management Dashboard",
    description: "A reactive drag-and-drop task management tool built to increase productivity. Utilizes Framer Motion for smooth animations and local storage for state.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["React", "Framer Motion", "Zustand"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Weather Application",
    description: "Real-time weather application pulling data from open APIs. Features beautiful UI mapping weather conditions to dynamic backgrounds.",
    image: "https://images.unsplash.com/photo-1504608524841-42ce6f12a9a4?w=800&q=80",
    tags: ["Next.js", "API", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 flex flex-col h-full group hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.liveUrl} className="flex items-center gap-2 text-sm font-medium hover:text-blue-600 transition-colors">
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                  <a href={project.githubUrl} className="flex items-center gap-2 text-sm font-medium hover:text-blue-600 transition-colors">
                    <Code className="h-4 w-4" /> Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
