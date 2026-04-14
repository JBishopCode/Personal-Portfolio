'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
];

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose } : MobileMenuProps) {
    const pathname = usePathname();

    return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-black/8 dark:border-white/8"
          style={{ background: "var(--nav-bg)" }}
        >
          <div className="px-6 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`px-4 py-2 rounded-lg transition-all flex items-center justify-between ${
                  pathname === link.href
                    ? "bg-black/6 dark:bg-white/8"
                    : "hover:bg-black/4 dark:hover:bg-white/5"
                }`}
              >
                {link.name}
                {pathname === link.href && <ArrowRight size={16} />}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}