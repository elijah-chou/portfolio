"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Globe, Smartphone } from "lucide-react";

const skills = [
  { name: "Frontend Development", icon: <Code2 className="h-6 w-6" />, description: "Building responsive and interactive user interfaces using React and Next.js." },
  { name: "UI/UX Design", icon: <Palette className="h-6 w-6" />, description: "Creating beautiful, intuitive designs with a focus on user experience." },
  { name: "Web Performance", icon: <Globe className="h-6 w-6" />, description: "Optimizing web applications for speed, accessibility, and SEO." },
  { name: "Responsive Design", icon: <Smartphone className="h-6 w-6" />, description: "Ensuring applications look and work perfectly across all devices and screen sizes." },
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
            <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
              I am a software engineer based in the Atlanta Metropolitan Area, currently working at JPMorganChase. I graduated from the NYU Tandon School of Engineering and hold an AWS Certified AI Practitioner certification.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              I am passionate about building intelligent solutions. Recently, my team and I secured 2nd place at the JPMorganChase Global Hackathon by building an MCP focused on making AI prompting more cost-efficient through prompt optimization and vector caching.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-700 hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 mb-4">{skill.icon}</div>
                <h4 className="font-semibold mb-2">{skill.name}</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
