import { Globe, Briefcase, Mail, Award, BookOpen, Code } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 py-12 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-bold text-xl tracking-tight mb-1 text-neutral-900 dark:text-neutral-100">Elijah Chou</h3>
          <p className="text-neutral-500 text-sm">
            Software Engineer @ JPMorganChase | BS/MS CS Emory '24 | NYU Tandon
          </p>
          <p className="text-neutral-400 text-xs mt-2">
            © {new Date().getFullYear()} Elijah Chou. Built with Next.js, Tailwind CSS & Framer Motion.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <a 
            href="https://github.com/elijah-chou" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
            title="GitHub"
          >
            <Code className="h-5 w-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/elijah-chou/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400"
            title="LinkedIn"
          >
            <Briefcase className="h-5 w-5" />
          </a>
          <a 
            href="mailto:elijah.chou0321@gmail.com" 
            className="p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors text-neutral-600 dark:text-neutral-400 hover:text-red-500"
            title="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a 
            href="https://medium.com/@elijahchou" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors text-neutral-600 dark:text-neutral-400 hover:text-emerald-500"
            title="Medium"
          >
            <BookOpen className="h-5 w-5" />
          </a>
          <a 
            href="https://elijahchou.wordpress.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors text-neutral-600 dark:text-neutral-400 hover:text-blue-500"
            title="WordPress Blog"
          >
            <Globe className="h-5 w-5" />
          </a>
          <a 
            href="https://www.credly.com/users/elijah-chou/badges" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors text-neutral-600 dark:text-neutral-400 hover:text-purple-500"
            title="Credly Badges"
          >
            <Award className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
