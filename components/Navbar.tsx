'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';
import ThemeToggle from './ThemeToggle';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 border-b border-black/8 dark:border-white/8 backdrop-blur-md"
      style={{ background: "var(--nav-bg)" }}>
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-lg bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
          Jordan Bishop
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg transition-all ${
                pathname === link.href
                  ? "bg-black/6 dark:bg-white/8 border-b-2 border-gradient-to-r border-violet-500"
                  : "hover:bg-black/4 dark:hover:bg-white/5"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side: Theme Toggle + Mobile Menu */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-black/4 dark:hover:bg-white/5 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </nav>
  );
}
