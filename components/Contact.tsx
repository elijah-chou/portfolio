"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Award, BookOpen, Globe, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            I&apos;m always excited to connect regarding software engineering opportunities, AI/ML research collaborations, hackathons, or tech discussions!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <a 
              href="mailto:elijah.chou0321@gmail.com"
              className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/80 hover:border-blue-500 transition-colors group"
            >
              <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded-xl text-blue-600 dark:text-blue-400">
                <Mail className="h-6 w-6" />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">Direct Email</h4>
                  <ArrowUpRight className="h-4 w-4 text-neutral-400 group-hover:text-blue-500 transition-colors" />
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">elijah.chou0321@gmail.com</p>
              </div>
            </a>
            
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/80">
              <div className="bg-emerald-100 dark:bg-emerald-900/40 p-3 rounded-xl text-emerald-600 dark:text-emerald-400">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">Location</h4>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">Atlanta Metropolitan Area, GA</p>
              </div>
            </div>

            <a 
              href="https://www.credly.com/users/elijah-chou/badges"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/80 hover:border-blue-500 transition-colors group"
            >
              <div className="bg-purple-100 dark:bg-purple-900/40 p-3 rounded-xl text-purple-600 dark:text-purple-400">
                <Award className="h-6 w-6" />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">Verified Certifications</h4>
                  <ArrowUpRight className="h-4 w-4 text-neutral-400 group-hover:text-blue-500 transition-colors" />
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">AWS Certified AI Practitioner on Credly</p>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/80">
              <h3 className="text-lg font-bold mb-4 text-neutral-900 dark:text-neutral-100">Publications & Blogs</h3>
              <div className="space-y-4 text-sm">
                <a 
                  href="https://medium.com/@elijahchou" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-blue-500 transition-colors"
                >
                  <span className="flex items-center gap-2 font-medium">
                    <BookOpen className="h-4 w-4 text-blue-500" /> Medium Articles
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-neutral-400" />
                </a>

                <a 
                  href="https://elijahchou.wordpress.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-blue-500 transition-colors"
                >
                  <span className="flex items-center gap-2 font-medium">
                    <Globe className="h-4 w-4 text-indigo-500" /> WordPress Blog
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-neutral-400" />
                </a>

                <a 
                  href="https://www.theforage.com/blog/news/most-in-demand-student-degrees" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-blue-500 transition-colors"
                >
                  <span className="flex items-center gap-2 font-medium">
                    <BookOpen className="h-4 w-4 text-emerald-500" /> Forage Feature Article
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-neutral-400" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
