import { Project, Experience } from '@/types';

export const projects: Project[] = [
    {
        id: 'air-quality',
        title: 'Air Quality Monitoring System',
        description: 'Real time environmental monitoring system with automated alerting and data logging',
        longDescription: 
            'Built an end-to-end air quality monitoring solution using Arduino sensors for data collection, a Python backend for processing and analysis, and a JSON-based logging pipeline. The system triggers alerts when sensor thresholds are exceeded and stores historical data for trend analysis.',
        tech: ['Python', 'JSON', 'Arduino', 'Matplotlib',],
        impact: 'Achieved continuous real-time monitoring with < 2s alert latency and 30-day data retention.',
        github: 'https://github.com/JBishopCode/Air-Quality-Monitoring-Sensor',
        featured: true,
    },
    {
        id: 'housing-prices',
        title: 'Housing Prices Prediction Model',
        description: 'Supervised machine learning model for predicting residential housing prices from structured dataset features',
        longDescription:
            'Developed a housing price prediction model as part of the Generalis AI program, using a Jupyter Notebook-based Python workflow. Trained and evaluated regression models on structured real estate training data, covering data preprocessing, feature analysis, and model evaluation as part of an end-to-end ML pipeline, with final predictions exported as a CSV submission.',
        tech: ['Python', 'Jupyter Notebook', 'Pandas', 'Scikit-learn'],
        impact: 'Delivered a complete ML pipeline from raw training data to a structured price prediction submission.',
        github: 'https://github.com/JBishopCode/Housing-Prices-Prediction-Model',
        featured: true,
    },
    {
        id: 'todo-list',
        title: 'To-Do List App',
        description: 'Browser-based task manager built with vanilla HTML, CSS, and JavaScript with client-side persistence',
        longDescription:
            'Built a fully functional to-do application from scratch without any frameworks or external dependencies, using it as a foundation for strengthening core web fundamentals before learning React. Features include adding, completing, and deleting tasks, filtering by status, and persisting data across sessions via localStorage. Implemented a state-driven rendering model with event delegation for efficient DOM management.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        impact: 'Established a solid foundation in state-driven UI rendering and DOM management without relying on any framework.',
        github: 'https://github.com/JBishopCode/To-Do-List',
        featured: false,
    },
    {
        id: 'personal-portfolio',
        title: 'Personal Portfolio',
        description: 'Responsive developer portfolio built with Next.js and TypeScript showcasing projects and experience',
        longDescription:
            'Designed and built a personal portfolio site from scratch using Next.js 15 with the App Router, TypeScript, and Tailwind CSS. The project serves as both a showcase and a learning exercise in modern frontend architecture — including type-safe data modelling for projects, component-driven layout, and responsive design. Currently a work in progress with ongoing feature additions.',
        tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        impact: 'Produced a production-ready personal brand site demonstrating full frontend ownership from design to deployment.',
        github: 'https://github.com/JBishopCode/Personal-Portfolio',
        featured: false,
    },
    {
        id: 'ibm-ai-model',
        title: 'IBM SkillsBuild AI Model',
        description: 'Applied AI model developed through the IBM SkillsBuild AI Experiential Learning Lab program',
        longDescription:
            'Developing an AI model as part of the IBM SkillsBuild AI Experiential Learning Lab, an industry-partnered program focused on hands-on machine learning and applied AI skills. The project involves designing, training, and evaluating a model using IBM-guided tools and methodologies, with an emphasis on responsible AI practices and real-world problem framing.',
        tech: ['Python', 'IBM Watson', 'Machine Learning'],
        impact: 'Gaining applied AI development experience through an industry-recognized IBM program.',
        github: '',
        featured: true,
    },
];


export const experience: Experience[] = [
    {
        id: "swe-nleats",
        role: "Software Engineering Intern",
        company: "NL Eats Community Outreach Inc.",
        location: "Remote",
        period: "Jan 2026 – Present",
        current: true,
        description: [
            "Built and shipped full-stack features in a production Next.js + TypeScript codebase across judge and participant portals",
            "Designed PostgreSQL schemas using Drizzle ORM, handling migrations, type safety, and stakeholder collaboration on filtering requirements",
            "Wrote Playwright E2E tests to increase coverage by diagnosing and fixing broken selectors across multiple portals",
            "Collaborated with senior engineers on architecture decisions and code reviews",
        ],
        tech: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "Supabase", "Playwright"],
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
        tech: ["Python", "Pandas", "Scikit-learn", "Jupyter Notebook"],
    },
    {
        id: "software-paradigm",
        role: "Software Team Member",
        company: "Paradigm Engineering, Student Design Team",
        location: "St. John's, NL",
        period: "Sep 2025 – Present",
        current: true,
        description: [
            "Expanded RC control from 6 to 10 channels using a Flysky transmitter and receiver, updating Mission Planner configuration for Pixhawk",
            "Added an autonomous mode toggle to support safer and more flexible UAV flight testing",
            "Led firmware test plans and code reviews, and defined high voltage safety requirements to prevent pre-deployment issues",
        ],
        tech: ["C++", "Pixhawk", "Mission Planner", "ArduPilot"],
    },
];

export const skills = {
    Languages: ["TypeScript", "Python", "C++", "C", "JSON"],
    Frontend: ["React", "Next.js", "Tailwind CSS"],
    Database: ["Supabase", "PostgreSQL", "Drizzle ORM",],
    "ML / Data": ["Jupyter","Pandas", "NumPy", "Scikit-learn", "PyTorch", "Matplotlib"],
    Testing: ["Playwright", "E2E Testing", "CI/CD"],
    Development: ["Git", "GitHub", "Windows", "Linux"]
}
