# GymFit Website

GymFit is a Next.js (App Router) + TypeScript + Tailwind gym marketing site with lead capture, class schedule, memberships, trainers, programs, blog, legal pages, and SEO defaults.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Environment Variables

Create `.env.local`:

```bash
ADMIN_PASSWORD=change-me
```

Use `/admin/leads?password=change-me` to view leads.

## Form Handling

- Contact, join, and trial forms post to `POST /api/leads`
- Leads are stored in `data/leads.json`
- Honeypot field (`website`) provides basic spam protection.

## Deployment

Deploy to Vercel or any Node host:

```bash
npm run build
npm run start
```

## Key Paths

- Pages: `app/*`
- Data models: `data/*`
- Reusable components: `components/*`
- Lead persistence helper: `lib/leads.ts`
