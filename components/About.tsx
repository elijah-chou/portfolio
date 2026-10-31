"use client";

import { motion } from "framer-motion";
import { Code2, Server, Award, Brain, GraduationCap, ShieldCheck, Trophy, Languages } from "lucide-react";

const highlights = [
  { 
    name: "Software Engineering", 
    icon: <Server className="h-6 w-6" />, 
    description: "Alert-management platforms & pipelines on AWS ECS with Aurora PostgreSQL, Spring Boot, Apache Kafka, Kubernetes, Terraform, and Jenkins CI/CD at JPMorganChase." 
  },
  { 
    name: "AI & LLM Solutions", 
    icon: <Brain className="h-6 w-6" />, 
    description: "RAG-powered LLM chatbots on AWS, AI-driven alert analysis, Google A2A ADK, Model Context Protocol (MCP) servers, and Gemini/PaLM integrations." 
  },
  { 
    name: "Full-Stack Development", 
    icon: <Code2 className="h-6 w-6" />, 
    description: "7+ years coding in Java, Python, JavaScript, and C. Building modern web & mobile apps with React, Next.js, Node.js, Python Flask, Flutter/Dart, and REST APIs." 
  },
  { 
    name: "Research & Academic Excellence", 
    icon: <Award className="h-6 w-6" />, 
    description: "Phi Beta Kappa & Highest Honors from Emory University. Published code creativity AST distance research at CSEDU 2024; GTRI & Emory HITI Lab research alumnus." 
  },
];

const specialties = [
  "Google A2A ADK",
  "Java",
  "Python",
  "JavaScript",
  "C",
  "HTML/CSS",
  "Agile Software Development",
  "AWS Infrastructure",
  "Terraform",
  "Kubernetes",
  "Apache Kafka",
  "Jenkins CI/CD",
  "Spring Boot",
  "Full-Stack Development",
  "React",
  "Python Flask",
  "REST APIs",
  "Research & Presentations",
];

const strengths = ["Software Developer", "Collaborative", "Intuitive", "Adaptive"];
const topSkills = ["Software Infrastructure", "Engineering", "Software Design"];

const education = [
  {
    school: "NYU Tandon School of Engineering",
    degree: "Master of Science - MS, Cybersecurity (NYU Cyber Fellow)",
    period: "August 2025",
  },
  {
    school: "Emory University",
    degree: "Master of Science - MS, Computer Science",
    period: "August 2023 - May 2024",
  },
  {
    school: "Emory University",
    degree: "Bachelor of Science - BS, Computer Science and Biology (Highest Honors)",
    period: "August 2019 - May 2023",
  },
  {
    school: "International Bilingual School at Hsinchu-Science-Park",
    degree: "High School Diploma",
    period: "2015 - 2019",
  },
];

const certifications = [
  "Certified in Cybersecurity (CC)",
  "SnowPro Associate: Platform Certification",
  "Astronomer Certification for Apache Airflow Fundamentals",
  "Introduction to Distributed SQL and CockroachDB",
  "Advanced React",
  "AWS Certified AI Practitioner",
];

const honorsAwards = [
  "Phi Beta Kappa Member",
  "Best of the Best Oral Abstract Presenter",
  "Emory University Dean's List (4 semesters)",
  "AP Scholar with Distinction",
  "High Honor Roll",
];

const languages = [
  { name: "English", proficiency: "Native or Bilingual" },
  { name: "Chinese", proficiency: "Native or Bilingual" },
  { name: "Japanese", proficiency: "Elementary" },
  { name: "Korean", proficiency: "Elementary" },
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

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Background &amp; Passion</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
              I am a Software Engineer at <strong>JPMorganChase</strong> through the Software Engineer Program based in Atlanta. I am currently pursuing an <strong>MS in Cybersecurity</strong> at <strong>NYU Tandon School of Engineering</strong> as a <strong>Cyber Fellow</strong>. I graduated in May 2024 with an <strong>MS in Computer Science</strong> and in May 2023 with a <strong>BS with Highest Honors in Computer Science and Biology</strong> (completing my combined BS/MS in Computer Science at Emory University).
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
              I have previous experience as a SWE intern at <strong>JPMorganChase</strong>, <strong>Georgia Tech Research Institute (GTRI)</strong>, and <strong>AT&amp;T</strong>, along with research and teaching roles at <strong>Emory University</strong>. My research on <em>&ldquo;Measuring creativity in computer programming: A code distance approach&rdquo;</em> and <em>&ldquo;A Code Distance Approach to Measure Originality in Computer Programming&rdquo;</em> was published at <strong>CSEDU 2024</strong>.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
              I have <strong>7+ years of coding experience</strong> in languages such as Java, Python, JavaScript, and C. My passion is in creating new technologies and functionalities through full-stack development as a software engineer.
            </p>

            <div className="space-y-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block mb-2">
                  Strengths &amp; Top Skills
                </span>
                <div className="flex flex-wrap gap-2">
                  {[...strengths, ...topSkills].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/80 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block mb-2">
                  Specialties
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {specialties.map((spec) => (
                    <span
                      key={spec}
                      className="px-2.5 py-1 bg-neutral-200/70 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-md text-xs font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
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

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-700"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <GraduationCap className="h-6 w-6 text-blue-600" />
              <h3 className="text-lg font-bold">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={`${edu.school}-${edu.degree}`} className="border-l-2 border-blue-500/40 pl-3">
                  <h4 className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">{edu.school}</h4>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">{edu.degree}</p>
                  <p className="text-xs text-neutral-500">{edu.period}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-700"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <ShieldCheck className="h-6 w-6 text-purple-600" />
              <h3 className="text-lg font-bold">Certifications</h3>
            </div>
            <ul className="space-y-2.5 text-sm text-neutral-600 dark:text-neutral-300">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-700 flex flex-col justify-between gap-6"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <Trophy className="h-6 w-6 text-amber-500" />
                <h3 className="text-lg font-bold">Honors &amp; Awards</h3>
              </div>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
                {honorsAwards.map((honor) => (
                  <li key={honor} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                    <span>{honor}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2.5 mb-3 pt-4 border-t border-neutral-100 dark:border-neutral-700">
                <Languages className="h-5 w-5 text-emerald-600" />
                <h3 className="text-base font-bold">Languages</h3>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {languages.map((lang) => (
                  <div key={lang.name} className="bg-neutral-50 dark:bg-neutral-700/50 p-2 rounded-lg">
                    <span className="font-semibold block text-neutral-900 dark:text-neutral-100">{lang.name}</span>
                    <span className="text-neutral-500 dark:text-neutral-400">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
