"use client";

import { motion } from "framer-motion";
import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "JPMorganChase",
    role: "Software Engineer I",
    location: "Atlanta, GA",
    duration: "September 2023 - Present",
    bullets: [
      "Engineered a multi-module Spring Boot application to simulate downstream system event consumption from start to deployment.",
      "Composed API acceptance tests with internal automated testing framework to speed up regression testing by over 80%.",
      "Leading scrum team's data modeling efforts to modernize 200+ legacy data elements for over 70 million debit cards."
    ],
  },
  {
    company: "Georgia Tech Research Institute (GTRI)",
    role: "Student Software Engineer",
    location: "Atlanta, GA",
    duration: "September 2023 - May 2024",
    bullets: [
      "Conducted aircraft maintenance scheduling optimization research leveraging Google OR-Tools.",
      "Developed unit tests with Pytest and Hypothesis frameworks to validate the outputs of proposed maintenance scheduling against established baselines.",
      "Managed PostgreSQL database interfacing of schemas shared across collaborating GTRI laboratories."
    ],
  },
  {
    company: "JPMorganChase",
    role: "Software Engineer Academic Intern",
    location: "Atlanta, GA",
    duration: "September 2023 - December 2023",
    bullets: [
      "Created innovative metric counters using Micrometer for a Spring Boot application, visualizing data on a Grafana dashboard.",
      "Updated Prometheus instances in development and QA testing environments to scrape new metrics.",
      "Migrated key card information to an Oracle database using Liquibase, Oracle SQL Developer, and SQL scripts."
    ],
  },
  {
    company: "JPMorganChase",
    role: "Software Engineer Intern",
    location: "Atlanta, GA",
    duration: "June 2023 - August 2023",
    bullets: [
      "Implemented a cost-saving framework for the Chase Debit Platform's backend, reducing annual losses by $5 million.",
      "Orchestrated workflows with private cloud integration and configured inter-application network policies using Python.",
      "Utilized Spring Integration to connect the backend application with existing Kafka topics and on-prem APIs.",
      "Won 1st Place in the JPMC Global Innovation Week Hackathon in the Atlanta Tech Center for developing a streamlined onboarding tool for incoming hires."
    ],
  },
  {
    company: "Georgia Tech Research Institute (GTRI)",
    role: "Software Engineer Intern",
    location: "Atlanta, GA",
    duration: "January 2023 - April 2023",
    bullets: [
      "Revamped a Python Flask web application (5GSpear), updating over 30 user features within an MVC architecture framework.",
      "Developed 8 new user screens with HTML/CSS and SQL scripts, updating information in connected PostgreSQL servers.",
      "Automated web application security testing using GitLab CI/CD pipelines."
    ],
  },
  {
    company: "AT&T",
    role: "Software Developer Intern",
    location: "Atlanta, GA / Remote",
    duration: "June 2022 - August 2022",
    bullets: [
      "Conducted cutting-edge research with AT&T Chief Data Office inventive scientists to create a blockchain-based AI transparency proof-of-concept with Corda.",
      "Prototyped a VR social media live streaming platform in an Agile scrum team of 5 interns for the annual Intern Innovation Challenge.",
      "Presented work directly to the AVP of Inventive Science at the CDO monthly meeting."
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
              transition={{ duration: 0.5, delay: index * 0.08 }}
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
