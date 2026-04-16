'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { href: '/',           label: 'Home'       },
  { href: '/projects',   label: 'Projects'   },
  { href: '/experience', label: 'Experience' },
  { href: '/about',      label: 'About'      },
  { href: '/contact',    label: 'Contact'    },
];

interface MobileMenuProps {
  onResumeClick?: () => void;
}

export default function MobileMenu({ onResumeClick }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className='md:hidden'>
      <button
        onClick={() => setOpen(!open)}
        className='text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors p-1'
        aria-label='Toggle menu'
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className='absolute top-full left-0 right-0 backdrop-blur-md border-b border-black/8 dark:border-white/6 px-6 py-4 flex flex-col gap-1'
            style={{ background: 'var(--nav-bg)' }}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-slate-900 dark:text-white bg-black/6 dark:bg-white/8'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-black/4 dark:hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {onResumeClick && (
              <button
                onClick={() => {
                  setOpen(false);
                  onResumeClick();
                }}
                className='mt-2 py-2.5 px-3 text-left text-sm font-semibold text-violet-700 dark:text-violet-300 border border-violet-400/30 dark:border-violet-500/35 rounded-lg bg-violet-50 dark:bg-transparent hover:bg-violet-100 dark:hover:bg-violet-500/10 transition-colors'
              >
                Resume
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}