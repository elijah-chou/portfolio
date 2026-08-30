import { Globe, Briefcase, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-bold text-xl tracking-tight mb-2">Portfolio</h3>
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        
        <div className="flex gap-4">
          <a href="#" className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white">
            <Globe className="h-5 w-5" />
          </a>
          <a href="#" className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400">
            <Briefcase className="h-5 w-5" />
          </a>
          <a href="#" className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-600 dark:text-neutral-400 hover:text-blue-400 dark:hover:text-blue-300">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
