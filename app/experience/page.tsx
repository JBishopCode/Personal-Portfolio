'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import { TechBadge } from '@/components/icons';
import { experience } from '@/lib/data';

export default function ExperiencePage() {
  return (
    <SectionWrapper>
      <div className='mb-12'>
        <span className='text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest'>
          Background
        </span>
        <h1 className='text-4xl sm:text-5xl font-bold bg-gradient-to-br from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mt-2 mb-4'>
          Experience
        </h1>
        <p className='text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed'>
          Internships and projects where I&apos;ve built real things and shipped them.
        </p>
      </div>

      <div className='relative'>
        {/* Timeline line */}
        <div className='absolute left-3 top-2 bottom-2 w-px hidden sm:block'
          style={{ background: 'linear-gradient(to bottom, rgba(139,92,246,0.5), rgba(59,130,246,0.2), transparent)' }}
        />

        <div className='flex flex-col gap-10'>
          {experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className='sm:pl-12 relative'
            >
              {/* Timeline dot */}
              <div className='absolute left-0 top-5 hidden sm:flex items-center justify-center w-6 h-6'>
                <div className={`w-2.5 h-2.5 rounded-full ${
                  exp.current
                    ? 'bg-violet-500 dark:bg-violet-400 shadow-[0_0_8px_rgba(139,92,246,0.7)]'
                    : 'bg-slate-300 dark:bg-slate-600'
                }`} />
              </div>

              <div
                className='rounded-2xl p-6 border border-black/8 dark:border-white/8 hover:border-violet-400/40 dark:hover:border-violet-500/30 transition-all duration-200 hover:shadow-[0_4px_20px_rgba(109,40,217,0.07)] dark:hover:shadow-[0_0_25px_rgba(139,92,246,0.08)]'
                style={{ background: 'var(--card-bg)' }}
              >
                <div className='flex gap-4 mb-5'>
                  <div className='relative shrink-0 w-14 h-14 rounded-xl overflow-hidden border border-black/8 dark:border-white/10 bg-white flex items-center justify-center'>
                    {exp.logo ? (
                      <Image src={exp.logo} alt={exp.company} fill className='object-contain p-1.5' />
                    ) : (
                      <span className='text-sm font-bold text-slate-400 dark:text-slate-500 select-none'>
                        {exp.company.split(' ').slice(0, 2).map((w) => w[0]).join('')}
                      </span>
                    )}
                  </div>

                  <div className='flex-1 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2'>
                    <div>
                      <div className='flex items-center gap-2 mb-1'>
                        <h2 className='text-lg font-semibold text-slate-900 dark:text-white'>{exp.role}</h2>
                        {exp.current && (
                          <span className='text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-400/10 border border-emerald-300 dark:border-emerald-400/25 px-2 py-0.5 rounded-full'>
                            Current
                          </span>
                        )}
                      </div>
                      <p className='text-slate-600 dark:text-slate-300 font-medium'>{exp.company}</p>
                    </div>
                    <div className='flex flex-col sm:items-end gap-1 shrink-0'>
                      <div className='flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-500'>
                        <Calendar size={13} /> {exp.period}
                      </div>
                      <div className='flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-500'>
                        <MapPin size={13} /> {exp.location}
                      </div>
                    </div>
                  </div>
                </div>

                <ul className='flex flex-col gap-2 mb-5'>
                  {exp.description.map((item, j) => (
                    <li key={j} className='flex gap-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed'>
                      <span className='text-violet-500 dark:text-violet-500 mt-1.5 shrink-0'>—</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className='flex flex-wrap gap-1.5'>
                  {exp.tech.map((t) => <TechBadge key={t} tech={t} />)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className='mt-16 pt-16 border-t border-black/8 dark:border-white/6'>
        <h2 className='text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-8'>
          Education
        </h2>
        <div
          className='rounded-2xl p-6 border border-black/8 dark:border-white/8 hover:border-blue-400/30 dark:hover:border-blue-500/25 transition-all duration-200'
          style={{ background: 'var(--card-bg)' }}
        >
          <div className='flex gap-4'>
            <div className='relative shrink-0 w-14 h-14 rounded-xl overflow-hidden border border-black/8 dark:border-white/10 bg-white flex items-center justify-center'>
              <Image src='/logos/mun_logo.jpg' alt='Memorial University' fill className='object-contain p-1.5' />
            </div>
            <div className='flex-1 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2'>
              <div>
                <h3 className='text-lg font-semibold text-slate-900 dark:text-white mb-1'>
                  B.Eng, Computer Engineering (Co-op)
                </h3>
                <p className='text-slate-600 dark:text-slate-300 font-medium'>Memorial University of Newfoundland</p>
                <p className='text-slate-500 dark:text-slate-500 text-sm mt-1'>St. John&apos;s, NL</p>
              </div>
              <div className='flex flex-col sm:items-end gap-1 shrink-0'>
                <span className='text-sm text-slate-500 dark:text-slate-500'>In Progress</span>
                <span className='text-sm font-semibold text-slate-900 dark:text-white'>Sep 2024 - May 2029</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}