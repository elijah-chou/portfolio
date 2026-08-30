"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code, BookOpen, Trophy } from "lucide-react";

const projects = [
  {
    title: "AI Prompt Optimization MCP",
    badge: "2nd Place Winner",
    description: "Built for the JPMorganChase Global Hackathon in Atlanta. An MCP server that optimizes prompts by stripping tokens, recommends cost-effective models, and caches prompt embeddings in a vector DB to bypass copilot agent invocations.",
    tags: ["Model Context Protocol", "Vector DB", "LLM Optimization", "Python"],
    githubUrl: "https://github.com/elijah-chou",
    type: "hackathon"
  },
  {
    title: "Project Vibe Validator",
    badge: "AI Startup Evaluation",
    description: "A Next.js App Router application demonstrating real-time web search (Tavily) and experimental LLM reasoning (Gemini 2.5 Flash) to validate and score startup ideas with market insights.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini 2.5 Flash", "Tavily"],
    githubUrl: "https://github.com/elijah-chou/project-vibe-validator",
    type: "project"
  },
  {
    title: "Creativity in Programming: A Code Distance Approach",
    badge: "Published at CSEDU 2024",
    description: "Honors Thesis earning Highest Honors at Emory University. Parsed student code into Abstract Syntax Trees (ASTs) and used tree edit distances (Zhang-Shasha) to calculate creativity metrics in programming education.",
    tags: ["Python", "Abstract Syntax Trees", "Research", "CSEDU 2024"],
    liveUrl: "https://etd.library.emory.edu/concern/etds/b8515p78f",
    githubUrl: "https://github.com/elijah-chou/HonorsThesis-CodeToAST",
    type: "paper"
  },
  {
    title: "ChatGeminiPro & Legion Writing Assistant",
    badge: "Google PaLM & Gemini",
    description: "AI-powered writing and conversational assistant daemon tools. Integrated Google's Gemini Pro and PaLM APIs for real-time prompt feedback, style suggestions, and autonomous assistance daemons.",
    tags: ["React", "Google Gemini Pro", "PaLM API", "Human-AI Interaction"],
    liveUrl: "https://elijah-chou.github.io/humanAIinteraction/",
    githubUrl: "https://github.com/elijah-chou/GeminiPro-chatbot",
    type: "project"
  },
  {
    title: "5GSpear: Naval Base Fuel Ordering System",
    badge: "GTRI Research",
    description: "Developed at the Georgia Tech Research Institute (Aerospace, Transportation & Advanced Systems Lab). Python Flask MVC web application with PostgreSQL schemas and interactive React mapping layers.",
    tags: ["Python Flask", "PostgreSQL", "React", "Docker", "GTRI"],
    githubUrl: "https://github.com/elijah-chou",
    type: "project"
  },
  {
    title: "Bees Knees: Varroa Mite Agent-Based Simulation",
    badge: "Agent-Based Modeling",
    description: "NetLogo simulation modeling complex biological relationships between worker honeybees and varroa mites transmitting Deformed Wing Virus (DWV), evaluating treatment efficacy over time.",
    tags: ["NetLogo", "Agent-Based Simulation", "Complex Systems"],
    githubUrl: "https://github.com/elijah-chou/Bees-Knees-An-Agent-Based-Model-of-Varroa-Mite-Infestation-of-Bee-Hives",
    type: "project"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects & Research</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700/80 flex flex-col h-full hover:shadow-lg transition-all hover:-translate-y-1 p-6"
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                {project.badge && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                    {project.type === "hackathon" && <Trophy className="h-3 w-3" />}
                    {project.type === "paper" && <BookOpen className="h-3 w-3" />}
                    {project.badge}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-neutral-100">{project.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 bg-neutral-100 dark:bg-neutral-700/60 rounded-md text-xs font-medium text-neutral-700 dark:text-neutral-300">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-3 border-t border-neutral-100 dark:border-neutral-700 text-sm font-medium">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <ExternalLink className="h-4 w-4" /> 
                    {project.type === "paper" ? "Read Thesis / Paper" : "Live Demo"}
                  </a>
                )}
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                  >
                    <Code className="h-4 w-4" /> Code / Repo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
