# Jordan Bishop — Personal Portfolio

A responsive, full-stack personal portfolio site built with Next.js, TypeScript, and Tailwind CSS. Features dark/light theming, animated UI, project showcases, an experience timeline, and a working contact form.

**Live site:** [jordanbishop.ca](https://jordanbishop.ca) 

---

## Tech Stack

| Category | Technologies |
|---|---|
| Framework | Next.js 15 (App Router), React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4, Framer Motion |
| Email | EmailJS |
| Analytics | Vercel Analytics, Vercel Speed Insights |
| Deployment | Vercel |

---

## Features

- **Dark / Light / System theme** toggle with `next-themes`
- **Animated sections** using Framer Motion scroll-triggered transitions
- **Project cards** with expandable modals, tech badges, impact stats, and GitHub links
- **Experience timeline** with role descriptions, tech stacks, and company logos
- **Resume modal** with inline PDF preview and download
- **Contact form** powered by EmailJS — no backend required
- **Fully responsive** — mobile hamburger menu with smooth animations
- **Data-driven** — all projects and experience defined in `lib/data.ts` for easy updates

---

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables and fill in your EmailJS credentials
cp .env.example .env.local

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view locally.

### Environment Variables

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## Project Structure

```
├── app/                  # Next.js App Router pages
│   ├── page.tsx          # Homepage (hero, featured projects, experience)
│   ├── about/            # About page
│   ├── projects/         # Full project grid
│   ├── experience/       # Experience timeline and education
│   └── contact/          # Contact form
├── components/           # Reusable UI components
├── lib/
│   ├── data.ts           # All project and experience data
│   └── techs.tsx         # Tech stack icon mappings
├── types/                # TypeScript interfaces
└── public/               # Static assets (images, resume PDF, logos)
```

---

## Contact

**Jordan Bishop** — Computer Engineering Student, Memorial University of Newfoundland
St. John's, NL - open to remote and hybrid opportunities

- GitHub: [JBishopCode](https://github.com/JBishopCode)
- LinkedIn: [linkedin.com/in/jordan-bishop](https://www.linkedin.com/in/jordan-bishop)
