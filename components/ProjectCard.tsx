'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Zap } from 'lucide-react';
import { GithubIcon } from './icons';
import { TechBadge } from './icons';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        onClick={() => setOpen(true)}
        className='group cursor-pointer rounded-2xl overflow-hidden flex flex-col border border-black/8 dark:border-white/8 hover:border-violet-400/50 dark:hover:border-violet-500/40 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(109,40,217,0.1)] dark:hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]'
        style={{ background: 'var(--card-bg)' }}
      >
        {/* Project image / placeholder */}
        <div className='relative w-full h-58 overflow-hidden shrink-0'>
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className='object-cover object-top group-hover:scale-105 transition-transform duration-300'
            />
          ) : (
            <div className='w-full h-full bg-gradient-to-br from-violet-100 via-blue-50 to-slate-100 dark:from-violet-900/40 dark:via-blue-900/30 dark:to-slate-900 flex items-center justify-center'>
              <span className='text-4xl font-bold text-violet-200 dark:text-white/10 select-none'>
                {project.title.split(' ').slice(0, 2).map((w) => w[0]).join('')}
              </span>
            </div>
          )}
          <div className='absolute inset-0 bg-gradient-to-t from-[var(--card-bg)] to-transparent opacity-70' />
        </div>

        <div className='p-6 flex flex-col gap-3 flex-1'>
          <div className='flex items-start justify-between gap-4'>
            <h3 className='text-base font-semibold text-slate-900 dark:text-white leading-snug'>
              {project.title}
            </h3>
            <ExternalLink
              size={15}
              className='text-slate-400 dark:text-slate-600 group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors shrink-0 mt-0.5'
            />
          </div>

          <p className='text-slate-600 dark:text-slate-400 text-sm leading-relaxed'>
            {project.description}
          </p>

          <div className='flex items-start gap-2 text-sm text-emerald-600 dark:text-emerald-400'>
            <Zap size={13} className='shrink-0 mt-0.5' />
            <span className='leading-snug text-xs'>{project.impact}</span>
          </div>

          {/* Tech stack — hidden by default, revealed on hover */}
          <div className='overflow-hidden transition-all duration-300 max-h-0 opacity-0 group-hover:max-h-30 group-hover:opacity-100 mt-auto pt-0 group-hover:pt-2'>
            <div className='flex flex-wrap gap-1.5'>
              {project.tech.map((t) => (
                <TechBadge key={t} tech={t} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Detail modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 dark:bg-black/70 backdrop-blur-sm'
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className='rounded-2xl overflow-hidden max-w-lg w-full shadow-2xl border border-violet-500/20'
              style={{ background: 'var(--card-bg)' }}
            >
              {project.image && (
                <div className='relative w-full h-48'>
                  <Image src={project.image} alt={project.title} fill className='object-cover' />
                  <div className='absolute inset-0 bg-gradient-to-t from-[var(--card-bg)] to-transparent opacity-80' />
                </div>
              )}

              <div className='p-8'>
                <div className='flex items-start justify-between mb-6'>
                  <h2 className='text-xl font-semibold text-slate-900 dark:text-white'>
                    {project.title}
                  </h2>
                  <button
                    onClick={() => setOpen(false)}
                    className='text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors'
                  >
                    <X size={20} />
                  </button>
                </div>

                <p className='text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6'>
                  {project.longDescription}
                </p>

                <div className='flex items-start gap-2 text-sm text-emerald-600 dark:text-emerald-400 mb-6'>
                  <Zap size={14} className='shrink-0 mt-0.5' />
                  <span>{project.impact}</span>
                </div>

                <div className='flex flex-wrap gap-1.5 mb-6'>
                  {project.tech.map((t) => (
                    <TechBadge key={t} tech={t} />
                  ))}
                </div>

                <div className='flex gap-4'>
                  {project.github && (
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-300 transition-colors'
                    >
                      <GithubIcon size={16} /> GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors'
                    >
                      <ExternalLink size={16} /> Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
