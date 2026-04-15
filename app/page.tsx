'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, Calendar } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons';
import SectionWrapper from '@/components/SectionWrapper';
import ProjectCard from '@/components/ProjectCard';
import { TechBadge } from '@/components/icons';
import ResumeModal from '@/components/ResumeModal';
import { projects, experience, skills } from '@/lib/data';

const featuredProjects = projects.filter((p) => p.featured);

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  function scrollCarousel(dir: 'left' | 'right') {
    if (!carouselRef.current) return;
    const cardWidth = carouselRef.current.firstElementChild
      ? (carouselRef.current.firstElementChild as HTMLElement).offsetWidth + 16
      : 320;
    carouselRef.current.scrollBy({ left: dir === 'right' ? cardWidth : -cardWidth, behavior: 'smooth' });
  }

  return (
    <>
      {/* ── Hero ────────────────────────────────────────── */}
      <section className='relative min-h-[calc(100vh-4rem)] flex items-center px-6 overflow-hidden'>
        {/* Decorative blurred orbs */}
        <div aria-hidden className='pointer-events-none absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-violet-400/8 dark:bg-violet-600/10 blur-[120px]' />
        <div aria-hidden className='pointer-events-none absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-blue-400/8 dark:bg-blue-500/10 blur-[100px]' />

        <div className='relative max-w-5xl mx-auto w-full py-24'>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className='flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16'
          >
            {/* Text */}
            <div className='flex-1 min-w-0'>
              <span className='inline-flex items-center gap-2 text-xs font-semibold mb-6 px-3 py-1.5 rounded-full border border-emerald-400/30 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 tracking-wide uppercase'>
                <span className='w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse' />
                Available for internships &amp; co-ops
              </span>

              <h1 className='text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6 bg-gradient-to-br from-slate-900 via-violet-700 to-blue-600 dark:from-white dark:via-violet-100 dark:to-blue-300 bg-clip-text text-transparent'>
                Jordan Bishop
              </h1>

              <p className='text-xl sm:text-2xl text-slate-500 dark:text-slate-400 font-light mb-6 leading-snug'>
                Software engineer building{' '}
                <span className='text-violet-600 dark:text-violet-300 font-medium'>full-stack apps</span>
                {', '}
                <span className='text-blue-600 dark:text-blue-300 font-medium'>ML pipelines</span>
                {', and '}
                <span className='text-emerald-600 dark:text-emerald-300 font-medium'>embedded systems</span>.
              </p>

              <p className='text-slate-500 dark:text-slate-500 text-lg mb-10 max-w-xl leading-relaxed'>
                Computer Engineering (Co-op) at Memorial University. Currently
                shipping production features with Next.js, TypeScript, and Supabase.
              </p>

              <div className='flex flex-wrap items-center gap-4'>
                <Link
                  href='/projects'
                  className='inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-violet-500/20 dark:shadow-violet-900/40'
                >
                  View Projects <ArrowRight size={16} />
                </Link>
                <button
                  onClick={() => setResumeOpen(true)}
                  className='inline-flex items-center gap-2 border border-violet-400/40 dark:border-violet-500/40 text-violet-700 dark:text-violet-300 bg-violet-50 dark:bg-transparent px-6 py-3 rounded-xl font-semibold text-sm hover:bg-violet-100 dark:hover:bg-violet-500/10 hover:border-violet-500 dark:hover:border-violet-400 transition-all'
                >
                  Resume
                </button>
                <Link
                  href='/contact'
                  className='inline-flex items-center gap-2 border border-black/10 dark:border-white/10 text-slate-600 dark:text-slate-300 px-6 py-3 rounded-xl font-semibold text-sm hover:border-black/20 dark:hover:border-white/25 hover:text-slate-900 dark:hover:text-white transition-colors'
                >
                  Get in Touch
                </Link>
              </div>

              <div className='flex items-center gap-6 mt-10'>
                <a href='https://github.com/jbishopcode' target='_blank' rel='noopener noreferrer'
                  className='text-slate-400 dark:text-slate-500 hover:text-violet-600 dark:hover:text-violet-300 transition-colors'>
                  <GithubIcon size={22} />
                </a>
                <a href='https://linkedin.com/in/jordan-bishop-nl' target='_blank' rel='noopener noreferrer'
                  className='text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-300 transition-colors'>
                  <LinkedinIcon size={22} />
                </a>
              </div>
            </div>

            {/* Profile photo */}
            <div className='shrink-0'>
              <div className='relative w-48 h-48 md:w-64 md:h-64'>
                <div className='absolute inset-0 rounded-full bg-gradient-to-br from-violet-400 via-blue-400 to-emerald-400 opacity-20 dark:opacity-40 blur-xl' />
                <div className='absolute inset-0 rounded-full p-[2px] bg-gradient-to-br from-violet-500 via-blue-400 to-emerald-400'>
                  <div className='w-full h-full rounded-full' style={{ background: 'var(--bg)' }} />
                </div>
                <div className='absolute inset-[2px] rounded-full overflow-hidden'>
                  <Image src='/profile.jpg' alt='Jordan Bishop' fill className='object-cover'
                    onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }} />
                  <div className='w-full h-full bg-gradient-to-br from-violet-200/60 to-blue-200/60 dark:from-violet-900/60 dark:to-blue-900/60 flex items-center justify-center'>
                    <span className='text-4xl font-bold text-violet-400/40 dark:text-white/30 select-none'>JB</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Tech Stack ──────────────────────────────────── */}
      <SectionWrapper>
        <div className='flex items-center gap-3 mb-8'>
          <div className='h-px flex-1 bg-gradient-to-r from-transparent via-violet-400/30 to-transparent' />
          <h2 className='text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest px-3'>
            Tech Stack
          </h2>
          <div className='h-px flex-1 bg-gradient-to-r from-transparent via-violet-400/30 to-transparent' />
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className='text-xs text-slate-500 dark:text-slate-500 uppercase tracking-wider mb-3 font-medium'>
                {category}
              </h3>
              <div className='flex flex-wrap gap-2'>
                {items.map((item) => (
                  <TechBadge key={item} tech={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Featured Projects ────────────────────────────── */}
      <SectionWrapper>
        <div className='flex items-end justify-between mb-10'>
          <div>
            <p className='text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-2'>
              Featured Projects
            </p>
            <h3 className='text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent'>
              Things I&apos;ve Built
            </h3>
          </div>
          <div className='flex items-center gap-3'>
            <button onClick={() => scrollCarousel('left')}
              className='hidden sm:flex w-9 h-9 items-center justify-center rounded-full border border-black/10 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:border-violet-400/50 dark:hover:border-violet-500/50 hover:text-violet-600 dark:hover:text-violet-300 transition-colors'
              aria-label='Scroll left'>
              <ChevronLeft size={18} />
            </button>
            <button onClick={() => scrollCarousel('right')}
              className='hidden sm:flex w-9 h-9 items-center justify-center rounded-full border border-black/10 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:border-violet-400/50 dark:hover:border-violet-500/50 hover:text-violet-600 dark:hover:text-violet-300 transition-colors'
              aria-label='Scroll right'>
              <ChevronRight size={18} />
            </button>
            <Link href='/projects' className='inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-300 transition-colors'>
              View all <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div ref={carouselRef} className='flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth'
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {featuredProjects.map((project) => (
            <div key={project.id} className='snap-start shrink-0 w-[min(80vw,320px)]'>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Experience ───────────────────────────────────── */}
      <SectionWrapper>
        <div className='flex items-end justify-between mb-10'>
          <div>
            <p className='text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2'>
              Experience
            </p>
            <h3 className='text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent'>
              Where I&apos;ve Worked
            </h3>
          </div>
          <Link href='/experience' className='hidden sm:inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors'>
            Full timeline <ArrowRight size={14} />
          </Link>
        </div>

        <div className='flex flex-col gap-3'>
          {experience.map((exp) => (
            <div key={exp.id}
              className='group flex items-start gap-4 rounded-2xl p-5 border border-black/8 dark:border-white/6 hover:border-violet-400/40 dark:hover:border-violet-500/30 transition-all duration-200'
              style={{ background: 'var(--card-bg)' }}
            >
              <div className='relative shrink-0 w-14 h-14 rounded-xl overflow-hidden border border-black/8 dark:border-white/10 bg-white flex items-center justify-center'>
                {exp.logo ? (
                  <Image src={exp.logo} alt={exp.company} fill className='object-contain p-1.5' />
                ) : (
                  <span className='text-sm font-bold text-slate-400 dark:text-slate-500 select-none'>
                    {exp.company.split(' ').slice(0, 2).map((w) => w[0]).join('')}
                  </span>
                )}
              </div>

              <div className='flex-1 min-w-0'>
                <div className='flex flex-wrap items-center gap-2 mb-0.5'>
                  <span className='text-base font-semibold text-slate-900 dark:text-white'>{exp.role}</span>
                  {exp.current && (
                    <span className='text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-400/10 border border-emerald-300 dark:border-emerald-400/25 px-2 py-0.5 rounded-full'>
                      Current
                    </span>
                  )}
                </div>
                <div className='flex flex-wrap gap-x-4 gap-y-1 mb-3'>
                  <span className='text-slate-700 dark:text-slate-300 text-sm font-medium'>{exp.company}</span>
                  <span className='flex items-center gap-1 text-sm text-slate-500 dark:text-slate-500'>
                    <Calendar size={12} /> {exp.period}
                  </span>
                  <span className='flex items-center gap-1 text-sm text-slate-500 dark:text-slate-500'>
                    <MapPin size={12} /> {exp.location}
                  </span>
                </div>
                <div className='flex flex-wrap gap-1.5'>
                  {exp.tech.slice(0, 5).map((t) => <TechBadge key={t} tech={t} />)}
                  {exp.tech.length > 5 && (
                    <span className='text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-500 border border-slate-200 dark:border-white/8'>
                      +{exp.tech.length - 5} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-6 sm:hidden'>
          <Link href='/experience' className='inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors'>
            Full timeline <ArrowRight size={14} />
          </Link>
        </div>
      </SectionWrapper>

      {/* ── CTA ─────────────────────────────────────────── */}
      <SectionWrapper>
        <div className='relative overflow-hidden rounded-2xl border border-violet-300/40 dark:border-violet-500/20 p-10 text-center bg-gradient-to-br from-violet-50 via-blue-50/50 to-emerald-50/30 dark:from-violet-500/8 dark:via-blue-500/5 dark:to-emerald-500/5'>
          <h2 className='relative text-3xl font-bold text-slate-900 dark:text-white mb-3'>
            Let&apos;s Work Together
          </h2>
          <p className='relative text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto'>
            Open to internship and co-op opportunities in software engineering,
            full-stack, or ML roles.
          </p>
          <div className='relative flex flex-wrap items-center justify-center gap-4'>
            <Link href='/contact'
              className='inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-violet-500/20 dark:shadow-violet-900/40'>
              Get in Touch <ArrowRight size={16} />
            </Link>
            <button onClick={() => setResumeOpen(true)}
              className='inline-flex items-center gap-2 border border-violet-400/40 dark:border-violet-500/40 text-violet-700 dark:text-violet-300 bg-violet-50 dark:bg-transparent px-6 py-3 rounded-xl font-semibold text-sm hover:bg-violet-100 dark:hover:bg-violet-500/10 transition-all'>
              Download Resume
            </button>
          </div>
        </div>
      </SectionWrapper>

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}