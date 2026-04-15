'use client';

import SectionWrapper from '@/components/SectionWrapper';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/data';

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <>
      <SectionWrapper>
        <div className='mb-12'>
          <span className='text-sm font-medium text-emerald-400 uppercase tracking-widest'>
            Work
          </span>
          <h1 className='text-4xl sm:text-5xl font-bold text-white mt-2 mb-4'>
            Projects
          </h1>
          <p className='text-neutral-400 max-w-xl leading-relaxed'>
            A selection of things I&apos;ve built across full-stack web, machine
            learning, and embedded systems. Click any card for details.
          </p>
        </div>

        <div className='mb-12'>
          <h2 className='text-xs font-medium text-neutral-500 uppercase tracking-widest mb-6'>
            Featured
          </h2>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {other.length > 0 && (
          <div>
            <h2 className='text-xs font-medium text-neutral-500 uppercase tracking-widest mb-6'>
              Other Projects
            </h2>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
              {other.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </SectionWrapper>
    </>
  );
}