import {
  SiCplusplus, SiPython, SiJavascript, SiC, SiJson, SiTypescript,
  SiHtml5, SiCss, SiReact, SiNextdotjs, SiTailwindcss,
  SiSupabase, SiPostgresql, SiDrizzle,
  SiJupyter, SiNumpy, SiPandas, SiPytorch, SiScikitlearn,
  SiGit, SiGithub, SiVercel, SiArduino,
  SiStmicroelectronics,
} from 'react-icons/si';
import { FaLinkedin, FaWindows, FaLinux } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc'
import { IconType } from 'react-icons';

export type TechKey =
    'cplusplus' | 'python' | 'javascript' | 'c' | 'json' | 'typescript'
  | 'html' | 'css' | 'react' | 'nextjs' | 'tailwind'
  | 'supabase' | 'postgresql' | 'drizzle'
  | 'jupyter' | 'numpy' | 'pandas' | 'pytorch' | 'scikitlearn' | 'matplotlib' | 'ml'
  | 'git' | 'github' | 'vercel' | 'arduino'
  | 'vscode' | 'windows' | 'linux'
  | 'linkedin'
  | 'embeddedsys' | 'stm32';

export const techs: Record<TechKey, { label: string; icon: IconType | null; color: string; bg: string }> = {
  // Languages & Syntax
  cplusplus:    { label: 'C++',          icon: SiCplusplus,   color: '#ffffff', bg: '#00599C' },
  python:       { label: 'Python',       icon: SiPython,      color: '#ffdd54', bg: '#3670A0' },
  javascript:   { label: 'JavaScript',   icon: SiJavascript,  color: '#323330', bg: '#F7DF1E' },
  c:            { label: 'C',            icon: SiC,           color: '#ffffff', bg: '#00599C' },
  json:         { label: 'JSON',         icon: SiJson,        color: '#ffffff', bg: '#5E5C5C' },
  typescript:   { label: 'TypeScript',   icon: SiTypescript,  color: '#ffffff', bg: '#3178C6' },

  // Frontend
  html:         { label: 'HTML',         icon: SiHtml5,       color: '#ffffff', bg: '#E34F26' },
  css:          { label: 'CSS',          icon: SiCss,         color: '#ffffff', bg: '#1572B6' },
  react:        { label: 'React',        icon: SiReact,       color: '#61DAFB', bg: '#20232a' },
  nextjs:       { label: 'Next.js',      icon: SiNextdotjs,   color: '#ffffff', bg: '#000000' },
  tailwind:     { label: 'Tailwind CSS', icon: SiTailwindcss, color: '#ffffff', bg: '#06B6D4' },

  // Backend & Database
  supabase:     { label: 'Supabase',     icon: SiSupabase,    color: '#3ECF8E', bg: '#181818' },
  postgresql:   { label: 'PostgreSQL',   icon: SiPostgresql,  color: '#ffffff', bg: '#336791' },
  drizzle:      { label: 'Drizzle',      icon: SiDrizzle,     color: '#1a1a1a', bg: '#C5F74F' },

  // Data Science & ML
  jupyter:      { label: 'Jupyter',      icon: SiJupyter,     color: '#ffffff', bg: '#FA0F00' },
  numpy:        { label: 'NumPy',        icon: SiNumpy,       color: '#4DABCF', bg: '#013243' },
  pandas:       { label: 'Pandas',       icon: SiPandas,      color: '#ffffff', bg: '#150458' },
  pytorch:      { label: 'PyTorch',      icon: SiPytorch,     color: '#ffffff', bg: '#EE4C2C' },
  scikitlearn:  { label: 'Scikit-learn', icon: SiScikitlearn, color: '#ffffff', bg: '#F7931E' },
  matplotlib:   { label: 'Matplotlib',   icon: null,          color: '#000000', bg: '#ffffff' },
  ml:           { label: 'Machine Learning', icon: null,      color: '#000000', bg: '#ffffff' },

  // Dev Tools
  git:          { label: 'Git',          icon: SiGit,         color: '#ffffff', bg: '#F05032' },
  github:       { label: 'GitHub',       icon: SiGithub,      color: '#ffffff', bg: '#121011' },
  vercel:       { label: 'Vercel',       icon: SiVercel,      color: '#ffffff', bg: '#000000' },
  arduino:      { label: 'Arduino',      icon: SiArduino,     color: '#ffffff', bg: '#00878A' },

  // Environments
  vscode:       { label: 'VS Code',      icon: VscVscode,     color: '#ffffff', bg: '#0078d7' },
  windows:      { label: 'Windows',      icon: FaWindows,     color: '#ffffff', bg: '#0078D6' },
  linux:        { label: 'Linux',        icon: FaLinux,       color: '#000000', bg: '#D4CA15' },

  // Social
  linkedin:     { label: 'LinkedIn',     icon: FaLinkedin,    color: '#ffffff', bg: '#0A66C2' },

  // Other
  embeddedsys:   { label: 'Embedded Systems', icon: null,      color: '#000000', bg: '#ffffff' },
  stm32:         { label: 'STM32', icon: SiStmicroelectronics, color: '#ffffff', bg: '#0073C2' },
};