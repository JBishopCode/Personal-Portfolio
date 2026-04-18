import { Project, Experience } from '@/types';
import { TechKey } from './techs';

export const projects: Project[] = [
    {
        id: 'air-quality',
        title: 'Air Quality Monitoring System',
        description: 'Real time environmental monitoring system with automated alerting and data logging',
        longDescription: 
            'Built an end-to-end air quality monitoring solution using Arduino sensors for data collection, a Python backend for processing and analysis, and a JSON-based logging pipeline. The system triggers alerts when sensor thresholds are exceeded and stores historical data for trend analysis.',
        tech: ['python', 'json', 'arduino', 'matplotlib',] as TechKey[],
        impact: 'Achieved continuous real-time monitoring with < 2s alert latency and 30-day data retention.',
        github: 'https://github.com/JBishopCode/Air-Quality-Monitoring-Sensor',
        featured: true,
        image: '/projects/air-quality.jpg',
    },
    {
        id: 'housing-prices',
        title: 'Housing Prices Prediction Model',
        description: 'Supervised machine learning model for predicting residential housing prices from structured dataset features',
        longDescription:
            'Developed a housing price prediction model as part of the Generalis AI team, using a Jupyter Notebook-based Python workflow. Trained and evaluated regression models on structured real estate training data, covering data preprocessing, feature analysis, and model evaluation as part of an end-to-end ML pipeline, with final predictions exported as a CSV submission.',
        tech: ['python', 'jupyter', 'pandas', 'scikitlearn'] as TechKey[],
        impact: 'Delivered a complete ML pipeline from raw training data to a structured price prediction submission.',
        github: 'https://github.com/JBishopCode/Housing-Prices-Prediction-Model',
        featured: true,
        image: '/projects/housing-prices.jpg'
    },
    {
        id: 'todo-list',
        title: 'To-Do List App',
        description: 'Browser-based task manager built with vanilla HTML, CSS, and JavaScript with client-side persistence',
        longDescription:
            'Built a fully functional to-do application from scratch without any frameworks or external dependencies, using it as a foundation for strengthening core web fundamentals before learning React. Features include adding, completing, and deleting tasks, filtering by status, and persisting data across sessions via localStorage. Implemented a state-driven rendering model with event delegation for efficient DOM management.',
        tech: ['html', 'css', 'javascript'] as TechKey[],
        impact: 'Established a solid foundation in state-driven UI rendering and DOM management without relying on any framework.',
        github: 'https://github.com/JBishopCode/To-Do-List',
        featured: false,
        image: '/projects/todo-list.png',
    },
    {
        id: 'personal-portfolio',
        title: 'Personal Portfolio',
        description: 'Responsive developer portfolio built with Next.js and TypeScript showcasing projects and experience',
        longDescription:
            'Designed and built a personal portfolio site from scratch using Next.js 15 with the App Router, TypeScript, and Tailwind CSS. The project serves as both a showcase and a learning exercise in modern frontend architecture — including type-safe data modelling for projects, component-driven layout, and responsive design. Currently a work in progress with ongoing feature additions.',
        tech: ['react', 'typescript', 'tailwind', 'nextjs', 'vercel'] as TechKey[],
        impact: 'Produced a production-ready personal brand site demonstrating full frontend ownership from design to deployment.',
        github: 'https://github.com/JBishopCode/Personal-Portfolio',
        featured: false,
        image: '/projects/personal-portfolio.jpg'
    },
    {
        id: 'fantasy-hockey-ai',
        title: 'ESPN Fantasy Hockey Agentic AI Assistant',
        description: 'In-progress AI system for real-time fantasy hockey decision support using live data and contextual reasoning',
        longDescription: 
            'Currently developing an Agentic AI assistant as part of the IBM AI Experiential Learning Lab. The system monitors a user’s fantasy hockey team, league settings, and real-time NHL data to generate proactive recommendations for lineup decisions, waiver pickups, and trades. The project applies IBM Design Thinking and Agentic AI concepts to move beyond static projections, focusing on continuous analysis, adaptive reasoning, and clear, explainable insights. Current work includes defining agent workflows, identifying data sources, and prototyping recommendation logic.',
        tech: ['python', 'pandas', 'numpy', 'scikitlearn', 'json', 'react', 'git'] as TechKey[],
        impact: 'Aims to reduce information overload and improve decision quality for ESPN fantasy hockey users through intelligent, real-time guidance.',
        github: '',
        featured: true,
        image: '/projects/fantasy-hockey-ai.jpg',
    },
];


export const experience: Experience[] = [
    {
        id: "swe-nleats",
        role: "Software Engineering Intern",
        company: "NL Eats Community Outreach Inc.",
        location: "Remote",
        period: "Jan 2026 – Apr 2026",
        current: false,
        description: [
          "Delivered a full-stack competitions feature across admin and participant portals, spanning PostgreSQL schema design, REST API routes, and dynamic React UI surfacing live competition data",
          "Diagnosed and resolved a series of failing Playwright E2E tests across judge and participant signup flows, fixing broken selectors, updating test flows to match new UI steps, and resolving CI performance issues caused by uncached browser dependencies",
          "Served as 1 of 4 authorized code reviewers on a 13-person team, conducting 10+ pull request reviews with merge authority and enforcing implementation standards across the codebase",
          "Diagnosed and resolved production-breaking bugs including a recursive stack overflow in an API route and a runtime crash from an invalid field reference on the participant detail page",
        ],
        tech: ["nextjs", "react", "typeScript", "postgresql", "drizzle", "supabase", "git"] as TechKey[],
        logo: '/logos/nl-eats.jpg',
    },
    {
        id: "software-paradigm",
        role: "Software Team Member",
        company: "Paradigm Engineering, Student Design Team",
        location: "St. John's, NL",
        period: "Sep 2025 – Present",
        current: true,
        description: [
          "Designed and implemented an STM32-based closed-loop steering control system for an electric vehicle, interfacing a Pixhawk flight controller with a Teknic ClearPath servo motor over RC PWM",
          "Configured hardware timers in input capture and PWM output modes to measure 1000–2000 µs signals with microsecond precision, ensuring reliable command delivery and eliminating motor timeout faults",
          "Implemented a ±20 µs deadband and input clamping to minimize jitter, and integrated differential I/O wiring with 5 V enable control for the motor's opto-isolated inputs",
          "Refactored CubeIDE-generated code into modular, reusable components validated through oscilloscope measurements and Teknic MSP tooling during live hardware testing",
        ],
        tech: ["c", "embeddedsys", "stm32", "git"] as TechKey[],
        logo: '/logos/paradigm-eng.jpg'
    },
    {
        id: "mle-generalis",
        role: "Machine Learning Team Member",
        company: "Genralis AI, Student Design Team",
        location: "St. John's, NL",
        period: "Apr 2025 – Present",
        current: true,
        description: [
            "Built and compared Decision Tree and Random Forest models in Python to reduce MAE on held-out data and guide model selection",
            "Maintained an automated pipeline for data loading, preprocessing, model training, and CSV export for the Kaggle Home Data for ML competition",
            "Improved result reproducibility and cut manual work by standardizing the end-to-end training workflow",
        ],
        tech: ["python", "pandas", "scikitlearn", "jupyter"] as TechKey[],
        logo: '/logos/genralis-ai.jpg'
    },
    
];

export const skills: Record<string, TechKey[]> = {
    Languages: ['cplusplus', 'python', 'javascript', 'c', 'json', 'typescript'],
    Frontend: ['html', 'css', 'react', 'nextjs', 'tailwind'],
    Database: ['supabase', 'postgresql', 'drizzle'],
    'ML / Data': ['jupyter', 'numpy', 'pandas', 'pytorch', 'scikitlearn', 'matplotlib', 'ml'],
    Development: ['git', 'github', 'vercel', 'arduino'],
    Environments: ['vscode', 'windows', 'linux', 'stm32'],
};
