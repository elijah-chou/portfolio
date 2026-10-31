"use client";

import { motion } from "framer-motion";
import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "JPMorganChase",
    role: "Software Engineer",
    location: "Atlanta, Georgia, United States",
    duration: "August 2024 - Present",
    bullets: [
      "Engineered core capabilities for an internal alert-management platform (Java, Python, Node.js/JavaScript on AWS ECS with Aurora PostgreSQL), building a real-time Grafana alert ingestion pipeline ingesting up to 400 alerts/day.",
      "Led delivery of platform through its first Alpha release, driving requirements and execution for historical alert analytics; championed AI-driven alert analysis while mentoring teammates through knowledge-transfer sessions and code reviews.",
      "Delivered a RAG-powered LLM chatbot full-stack application on AWS, enabling 300+ stakeholders across the Debit organization to retrieve complex product and technical specifications via natural language queries.",
    ],
  },
  {
    company: "Georgia Tech Research Institute (GTRI)",
    role: "Student Software Engineer",
    location: "Smyrna, Georgia, United States",
    duration: "September 2023 - May 2024",
    bullets: [
      "Conducted aircraft maintenance scheduling optimization research by leveraging Google OR-Tools.",
      "Developed unit tests with Pytest and Hypothesis frameworks to validate the outputs of the proposed maintenance scheduling with established baselines.",
      "Managed PostgreSQL database interfacing of schemas shared across collaborating GTRI laboratories.",
    ],
  },
  {
    company: "Emory University",
    role: "Systems Programming Teaching Assistant",
    location: "Atlanta, Georgia, United States",
    duration: "August 2023 - April 2024",
    bullets: [
      "Hosted 5 hours of office hours per week where enrolled undergraduate and graduate students were able to ask questions regarding the material covered in the Systems Programming class or about the assignments assigned in the class.",
    ],
  },
  {
    company: "JPMorganChase",
    role: "Software Engineer Academic Intern",
    location: "Atlanta, Georgia, United States",
    duration: "September 2023 - December 2023",
    bullets: [
      "Created innovative metric counters using Micrometer for a Spring Boot application, visualizing data on a Grafana dashboard.",
      "Updated Prometheus instances in development and QA testing environments to scrape new metrics.",
      "Migrated key card information to an Oracle database using Liquibase, Oracle SQL Developer, and SQL scripts.",
    ],
  },
  {
    company: "JPMorganChase",
    role: "Software Engineer Intern",
    location: "Atlanta, Georgia, United States",
    duration: "June 2023 - August 2023",
    bullets: [
      "Implemented a cost-saving framework for the Chase Debit Platform's backend, reducing annual losses by $5 million.",
      "Orchestrated workflows with private cloud integration and configured inter-application network policies using Python.",
      "Utilized Spring Integration to connect the backend application with existing Kafka topics and on-prem APIs.",
      "Won 1st Place in the JPMC Global Innovation Week Hackathon in the Atlanta Tech Center for brainstorming and developing a new, streamlined onboarding tool for incoming hires.",
    ],
  },
  {
    company: "Georgia Tech Research Institute (GTRI)",
    role: "Software Engineer Intern",
    location: "Smyrna, Georgia, United States",
    duration: "January 2023 - April 2023",
    bullets: [
      "Revamped a Python Flask web application, updating over 30 user features within an MVC architecture framework.",
      "Developed 8 new user screens with HTML/CSS and SQL scripts, updating information in the connected PostgreSQL server.",
      "Automated web application security testing using GitLab CI/CD YML files with GitLab-provided runners.",
    ],
  },
  {
    company: "Emory University",
    role: "Technical Staff",
    location: "Atlanta, Georgia, United States",
    duration: "January 2023 - April 2023",
    bullets: [
      "Engineered new features and debugged existing ones for the Emora Chatbot application to bring the Emory-made chatbot to Emory students and faculty.",
      "Utilized Flutter and Dart to automatically create mobile and web applications for Android, iOS, and web browser compatibility.",
    ],
  },
  {
    company: "Emory Center for Digital Scholarship",
    role: "Digital Scholarship Assistant",
    location: "Atlanta, Georgia, United States",
    duration: "August 2021 - April 2023",
    bullets: [
      "Adapted machine learning Python code to develop geocoders to help map Atlanta historical directories to location data.",
      "Dynamically integrated curated geodatabases stored on Omeka for the OpenWorld Atlanta project using React, JavaScript, and Omeka API.",
      "Curated Python scripts for general text data cleaning for the OpenWorld Atlanta project.",
    ],
  },
  {
    company: "Emory University",
    role: "Systems Programming Teaching Assistant",
    location: "Atlanta, Georgia, United States",
    duration: "August 2022 - December 2022",
    bullets: [
      "Hosted 6 hours of office hours per week where a class of 45 undergraduate and graduate students was able to ask questions regarding the material covered in the Systems Programming class or about the assignments assigned in the class.",
      "Assisted teaching professor with grading assignments and upholding the Emory Honor Code.",
    ],
  },
  {
    company: "AT&T",
    role: "Software Engineer Intern",
    location: "Atlanta, Georgia, United States",
    duration: "June 2022 - August 2022",
    bullets: [
      "Conducted cutting-edge research with AT&T CDO inventive scientists to create a blockchain-based AI transparency proof-of-concept.",
      "Prototyped a VR social media live streaming platform in an Agile scrum team of 5 interns for the annual Intern Innovation Challenge.",
      "Presented my work to the AVP of Inventive Science at the Chief Data Office monthly meeting and at the Intern Expo.",
    ],
  },
  {
    company: "Emory University",
    role: "EPASS Peer Tutor",
    location: "Atlanta, Georgia, United States",
    duration: "September 2020 - July 2022",
    bullets: [
      "Met with undergraduate students individually via 1-hour appointments to clarify and discuss various general/organic chemistry concepts and questions.",
    ],
  },
  {
    company: "Emory University",
    role: "Undergraduate Research Intern at Healthcare Innovation and Translational Informatics (HITI) Lab",
    location: "Atlanta, Georgia, United States",
    duration: "January 2021 - May 2022",
    bullets: [
      "Collaborated with PIs to investigate different ICU scoring systems (with emphasis on the OASIS and SOFA scoring systems) and analyzing their performances among different ethnic groups with public and private ICU datasets to identify potential racial biases in predictive models for ICU mortality.",
      "Organized and presented findings at laboratory meetings and health equity conferences (ex. Emory Department of Medicine's Health Equity Day 2021, SIDM Diagnostic Error in Medicine 14th Annual International Conference).",
      "Developed code with Python, R, and PostgreSQL coding languages for cleaning data, EDA, and maintaining/extracting laboratory databases.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.role}-${exp.duration}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-neutral-50 dark:bg-neutral-800/60 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-700/80 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-colors shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-blue-600" />
                    {exp.company}
                  </h3>
                  <p className="text-base font-semibold text-blue-600 dark:text-blue-400">{exp.role}</p>
                </div>
                <div className="flex flex-col sm:items-end text-sm text-neutral-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" /> {exp.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" /> {exp.location}
                  </span>
                </div>
              </div>
              <ul className="space-y-2 mt-4 text-neutral-600 dark:text-neutral-300 text-sm list-disc list-outside pl-5">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
