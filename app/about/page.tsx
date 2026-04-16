'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import { TechBadge } from '@/components/icons';
import { skills } from '@/lib/data';

const learning = [
  'Advanced React patterns — compound components, portals, concurrent features',
  'System design fundamentals for scalable backend architecture',
  'PyTorch deep learning — CNNs, transformers, and fine-tuning',
  'Cloud infrastructure and deployment with Vercel + Supabase',
];

const quickFacts = [
  ['Location', "St. John's, NL"],
  ['Program', 'Computer Engineering (Co-op)'],
  ['University', 'Memorial University'],
  ['Status', 'Seeking internships'],
] as const;

export default function AboutPage() {
  return (
    <SectionWrapper>
      <div className='mb-12'>
        <span className='text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest'>
          About
        </span>
        <h1 className='text-4xl sm:text-5xl font-bold bg-gradient-to-br from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mt-2'>
          Who I Am
        </h1>
      </div>

      <div className='grid lg:grid-cols-[1fr_300px] gap-12'>
        <div className='flex flex-col gap-8'>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className='text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4'>
              I&apos;m Jordan — a Computer Engineering student at Memorial University
              in St. John&apos;s, NL with a strong bias toward
              shipping real software.
            </p>
            <p className='text-slate-600 dark:text-slate-400 leading-relaxed mb-4'>
              My background spans the full stack: from low-level firmware and
              embedded systems in C/C++, to ML pipelines in Python, to
              production web apps in Next.js and TypeScript. I care about code
              that works in the real world — not just in isolation.
            </p>
            <p className='text-slate-600 dark:text-slate-400 leading-relaxed'>
              During my internship I shipped features from database schema to
              UI, wrote E2E tests that caught real bugs before they hit
              production, and worked directly in a codebase used by real users.
              That experience permanently changed how I think about quality and
              ownership.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <h2 className='text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-4'>
              What Drives Me
            </h2>
            <p className='text-slate-600 dark:text-slate-400 leading-relaxed'>
              I&apos;m drawn to problems at the intersection of systems and
              products — where the constraint is either hardware or scale. I
              like understanding how things work end-to-end, whether that&apos;s
              tracing a request from UI to database or debugging signal
              integrity on a PCB.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <h2 className='text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4'>
              Currently Learning
            </h2>
            <ul className='flex flex-col gap-3'>
              {learning.map((item, i) => (
                <li key={i} className='flex gap-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed'>
                  <span className='text-violet-500 dark:text-violet-400 mt-0.5 shrink-0'>→</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className='flex gap-4 pt-2'>
            <Link href='/projects'
              className='inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-violet-500/20 dark:shadow-violet-900/40'>
              See My Work <ArrowRight size={15} />
            </Link>
            <Link href='/contact'
              className='inline-flex items-center gap-2 border border-black/10 dark:border-white/10 text-slate-600 dark:text-slate-300 px-5 py-2.5 rounded-xl font-semibold text-sm hover:border-black/20 dark:hover:border-white/25 hover:text-slate-900 dark:hover:text-white transition-colors'>
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Side panel */}
        <div className='flex flex-col gap-4'>
          <div className='rounded-2xl p-6 border border-black/8 dark:border-white/8' style={{ background: 'var(--card-bg)' }}>
            <h3 className='text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-4'>
              Quick Facts
            </h3>
            <dl className='flex flex-col gap-3'>
              {quickFacts.map(([label, value]) => (
                <div key={label}>
                  <dt className='text-xs text-slate-500 dark:text-slate-500 mb-0.5'>{label}</dt>
                  <dd className='text-sm text-slate-800 dark:text-slate-200 font-medium'>{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className='rounded-2xl p-6 border border-black/8 dark:border-white/8' style={{ background: 'var(--card-bg)' }}>
            <h3 className='text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4'>
              Skills
            </h3>
            <div className='flex flex-col gap-3'>
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <p className='text-xs text-slate-500 dark:text-slate-500 mb-2'>{category}</p>
                  <div className='flex flex-wrap gap-1.5'>
                    {items.map((item) => <TechBadge key={item} tech={item} />)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}