# webprofile

A personal portfolio site built with Next.js (App Router), TypeScript, and Tailwind CSS. Includes a home page (hero, experience, projects, skills, education), a local MDX blog, and a contact form backed by a serverless API route + [Resend](https://resend.com/).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding your own content

All editable content lives in `content/` as plain TypeScript objects — no component code needs to change:

- `content/site.ts` — name, role, tagline, bio, email, social links, resume URL
- `content/experience.ts` — work history
- `content/projects.ts` — projects grid
- `content/skills.ts` — skills, grouped by category
- `content/education.ts` — education history
- `content/blog/*.mdx` — blog posts (frontmatter: `title`, `date`, `excerpt`, `tags`)

## Before you deploy

1. Replace the placeholder values in `content/site.ts` and the other `content/*.ts` files.
2. Add your resume as `public/resume.pdf` (the header's "Resume" button links directly to this file).
3. Set up the contact form (see below).

## Contact form setup

The form at `/contact` posts to `app/api/contact/route.ts`, which sends email via Resend. Copy `.env.example` to `.env.local` and fill in:

- `RESEND_API_KEY` — from [resend.com/api-keys](https://resend.com/api-keys)
- `CONTACT_TO_EMAIL` — the inbox you want messages delivered to
- `CONTACT_FROM_EMAIL` — optional; until you verify a sending domain in Resend, leave this unset and it will fall back to Resend's shared sandbox sender (which only delivers to your own Resend account email)

## Deploying to Vercel

1. Push this repo to GitHub (already configured as `origin`).
2. Import the repo at [vercel.com/new](https://vercel.com/new) — the Next.js preset is auto-detected, no config needed.
3. In the Vercel project's **Settings → Environment Variables**, add `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and (once available) `CONTACT_FROM_EMAIL`.
4. Deploy. Future pushes to `main` auto-deploy.
5. Optional: add a custom domain under **Settings → Domains**.

## Tech stack

- [Next.js](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) v4
- [Framer Motion](https://motion.dev/) for animations
- [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) for the MDX blog
- [Resend](https://resend.com/) for the contact form
- [Vercel Analytics](https://vercel.com/analytics)

