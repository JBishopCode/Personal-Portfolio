import { TechKey } from '@/lib/techs';

export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    tech: TechKey[];
    impact: string;
    github?: string;
    live?: string;
    featured: boolean;
    image?: string;
}

export interface Experience {
    id: string;
    role: string;
    company: string;
    location: string;
    period: string;
    current: boolean;
    description: string[];
    tech: TechKey[];
    logo?: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}