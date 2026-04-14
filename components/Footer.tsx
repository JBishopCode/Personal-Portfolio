import { GithubIcon, LinkedinIcon } from './icons';
import Link from 'next/link';

export default function Footer() {
    return (
    <footer className="border-t border-black/8 dark:border-white/8 mt-20 py-12"
      style={{ background: "var(--bg)" }}>
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Copyright */}
        <p className="text-sm text-slate-500 dark:text-slate-500">
          © {new Date().getFullYear()} Jordan Bishop | Built with Next.js & React.
        </p>

        {/* Right: Social Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/jbishopcode"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 dark:text-slate-500 hover:text-violet-600 dark:hover:text-violet-300 transition-colors"
          >
            <GithubIcon size={22} />
          </a>
          <a
            href="https://linkedin.com/in/jordanbishopp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
          >
            <LinkedinIcon size={22} />

          </a>
          <Link
            href="/contact"
            className="text-slate-400 dark:text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors flex items-center gap-1.5 text-sm font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}