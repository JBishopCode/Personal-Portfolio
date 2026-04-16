import { techs, TechKey } from '@/lib/techs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function GithubIcon({ size = 24 }) {
    return <FaGithub size={size} />
}

export function LinkedinIcon({ size = 24 }) {
    return <FaLinkedin size={size} />
}

export function TechBadge({ tech }: { tech: TechKey }) {
    const entry = techs[tech];
    
    if (!entry) {
      console.warn(`TechBadge: unknown tech key "${tech}"`);
      return null;
    }

    const { label, icon: Icon, color, bg } = techs[tech];
    return (
      <div
        className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm font-medium"
        style={{ backgroundColor: bg, color }}
      >
        {Icon && <Icon size={14} color={color} />}
        <span>{label}</span>
      </div>
  );
}