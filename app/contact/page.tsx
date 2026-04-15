'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons';
import SectionWrapper from '@/components/SectionWrapper';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'jordanab@mun.ca',
    href: 'mailto:jordanab@mun.ca',
    iconColor: 'text-violet-600 dark:text-violet-300',
    cardClass: 'border-violet-200 dark:border-violet-500/20 hover:border-violet-300 dark:hover:border-violet-400/40',
    iconBg: 'bg-violet-100 dark:bg-violet-500/15',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/jbishopcode',
    href: 'https://github.com/jbishopcode',
    iconColor: 'text-slate-700 dark:text-slate-300',
    cardClass: 'border-black/8 dark:border-white/8 hover:border-slate-300 dark:hover:border-white/20',
    iconBg: 'bg-slate-100 dark:bg-white/8',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/jordanbishopp',
    href: 'https://linkedin.com/in/jordanbishopp',
    iconColor: 'text-blue-600 dark:text-blue-300',
    cardClass: 'border-blue-200 dark:border-blue-500/20 hover:border-blue-300 dark:hover:border-blue-400/40',
    iconBg: 'bg-blue-100 dark:bg-blue-500/15',
  },
];

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('sent');
  }

  return (
    <SectionWrapper>
      <div className='mb-12'>
        <span className='text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest'>
          Contact
        </span>
        <h1 className='text-4xl sm:text-5xl font-bold bg-gradient-to-br from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mt-2 mb-4'>
          Get in Touch
        </h1>
        <p className='text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed'>
          Open to internship and co-op opportunities. Reach out directly or use
          the form below.
        </p>
      </div>

      <div className='grid lg:grid-cols-2 gap-12'>
        {/* Contact links */}
        <div className='flex flex-col gap-3'>
          {contactLinks.map(({ icon: Icon, label, value, href, iconColor, cardClass, iconBg }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.15 }}
              className={`flex items-center gap-4 rounded-xl p-4 border transition-all ${cardClass}`}
              style={{ background: 'var(--card-bg)' }}
            >
              <div className={`w-10 h-10 rounded-lg ${iconBg} flex items-center justify-center shrink-0`}>
                <Icon size={18} className={iconColor} />
              </div>
              <div>
                <p className='text-xs text-slate-500 dark:text-slate-500 mb-0.5'>{label}</p>
                <p className={`text-sm font-medium ${iconColor}`}>{value}</p>
              </div>
            </motion.a>
          ))}

          <div className='mt-2 p-5 rounded-xl border border-black/8 dark:border-white/6' style={{ background: 'var(--card-bg)' }}>
            <p className='text-sm text-slate-500 dark:text-slate-500 leading-relaxed'>
              Based in <span className='text-slate-800 dark:text-slate-300'>St. John&apos;s, NL</span>.
              Open to remote, hybrid, or on-site roles across Canada.
            </p>
          </div>
        </div>

        {/* Form */}
        <div>
          {status === 'sent' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className='h-full flex flex-col items-center justify-center gap-4 rounded-2xl border border-emerald-200 dark:border-emerald-500/20 p-10 text-center'
              style={{ background: 'var(--card-bg)' }}
            >
              <div className='w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-400/10 border border-emerald-300 dark:border-emerald-400/25 flex items-center justify-center'>
                <CheckCircle size={28} className='text-emerald-600 dark:text-emerald-400' />
              </div>
              <h2 className='text-xl font-semibold text-slate-900 dark:text-white'>Message Sent</h2>
              <p className='text-slate-500 dark:text-slate-400 text-sm'>
                Thanks for reaching out. I&apos;ll get back to you soon.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
              {(['name', 'email'] as const).map((field) => (
                <div key={field}>
                  <label htmlFor={field} className='block text-xs font-medium text-slate-500 dark:text-slate-500 mb-1.5 capitalize'>
                    {field === 'email' ? 'Email' : 'Name'}
                  </label>
                  <input
                    id={field} name={field} type={field === 'email' ? 'email' : 'text'}
                    required value={form[field]} onChange={handleChange}
                    placeholder={field === 'email' ? 'your@email.com' : 'Your name'}
                    className='w-full rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 border border-black/10 dark:border-white/8 focus:outline-none focus:border-violet-400 dark:focus:border-violet-500/50 transition-colors'
                    style={{ background: 'var(--card-bg)' }}
                  />
                </div>
              ))}
              <div>
                <label htmlFor='message' className='block text-xs font-medium text-slate-500 dark:text-slate-500 mb-1.5'>
                  Message
                </label>
                <textarea
                  id='message' name='message' required rows={5}
                  value={form.message} onChange={handleChange}
                  placeholder='What&apos;s on your mind?'
                  className='w-full rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 border border-black/10 dark:border-white/8 focus:outline-none focus:border-violet-400 dark:focus:border-violet-500/50 transition-colors resize-none'
                  style={{ background: 'var(--card-bg)' }}
                />
              </div>
              <button type='submit' disabled={status === 'sending'}
                className='inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-violet-500/20 dark:shadow-violet-900/40'>
                {status === 'sending' ? 'Sending...' : <><Send size={15} /> Send Message</>}
              </button>
            </form>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}