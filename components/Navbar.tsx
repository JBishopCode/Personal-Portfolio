'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import ResumeModal from './ResumeModal';
import ThemeToggle from './ThemeToggle';

const links = [
  { href: '/projects',   label: 'Projects'   },
  { href: '/experience', label: 'Experience' },
  { href: '/about',      label: 'About'      },
  { href: '/contact',    label: 'Contact'    },
];

export default function Navbar() {
  const pathname = usePathname();
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      <header
        className='fixed top-0 left-0 right-0 z-40 backdrop-blur-md border-b border-black/8 dark:border-white/6'
        style={{ background: 'var(--nav-bg)' }}
      >
        <nav className='max-w-5xl mx-auto px-6 h-16 flex items-center justify-between relative'>
          <Link
            href='/'
            className='font-bold text-base tracking-tight bg-gradient-to-r from-violet-600 to-blue-600 dark:from-violet-300 dark:to-blue-300 bg-clip-text text-transparent hover:opacity-80 transition-opacity'
          >
            Jordan Bishop
          </Link>

          <div className='hidden md:flex items-center gap-1'>
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    active
                      ? 'text-slate-900 dark:text-white bg-black/6 dark:bg-white/8'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-black/4 dark:hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className='absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-gradient-to-r from-violet-500 to-blue-500' />
                  )}
                </Link>
              );
            })}

            <button
              onClick={() => setResumeOpen(true)}
              className='ml-2 px-4 py-2 text-sm font-semibold rounded-lg border border-violet-400/30 dark:border-violet-500/35 text-violet-700 dark:text-violet-300 bg-violet-50 dark:bg-transparent hover:bg-violet-100 dark:hover:bg-violet-500/10 hover:border-violet-500/50 dark:hover:border-violet-400/60 transition-all'
            >
              Resume
            </button>

            <div className='ml-2'>
              <ThemeToggle />
            </div>
          </div>

          <div className='flex items-center gap-2 md:hidden'>
            <ThemeToggle />
            <MobileMenu onResumeClick={() => setResumeOpen(true)} />
          </div>
        </nav>
      </header>

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}