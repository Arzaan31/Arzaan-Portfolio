# Arzaan Mogal — Portfolio Website

A production-ready portfolio web application built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router, Static Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Variables
- **Fonts**: DM Serif Display + DM Sans + JetBrains Mono
- **Icons**: Lucide React

## Pages

| Page | Route |
|------|-------|
| Home | `/` |
| About | `/about` |
| Projects | `/projects` |
| Experience | `/experience` |
| Leadership & Impact | `/leadership` |
| Certifications | `/certifications` |
| Blog | `/blog` |
| Resume | `/resume` |
| Contact | `/contact` |

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This generates a static export in the `/out` directory.

## Deployment Options

### Option 1: Vercel (Recommended — Free)
1. Push repo to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Deploy — Vercel handles everything automatically
5. Set custom domain (optional): `arzaanmogal.com`

### Option 2: Netlify (Free)
1. Push repo to GitHub
2. Go to [netlify.com](https://netlify.com)
3. New Site > Import from Git
4. Build command: `npm run build`
5. Publish directory: `out`

### Option 3: GitHub Pages (Free)
1. Enable GitHub Pages in repo settings
2. Source: GitHub Actions
3. Add `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

## Customisation

### Update Personal Info
Edit `/src/lib/data.ts` — all content is centralised here:
- Personal details, stats
- Education, skills
- Experience, projects
- Leadership, certifications
- Blog posts

### Add Resume PDF
Place your resume at `/public/arzaan-mogal-resume.pdf`

### Update Contact Form
The contact form is currently a demo. To make it functional:
1. Sign up for [Formspree](https://formspree.io) (free)
2. Replace `handleSubmit` in `/src/app/contact/page.tsx` with a fetch to your Formspree endpoint

### Custom Domain
After deploying to Vercel:
1. Buy domain at Namecheap / GoDaddy / Google Domains (~$15/yr for .com)
2. Add domain in Vercel dashboard
3. Update DNS records as instructed

## Design System

| Variable | Light | Dark |
|----------|-------|------|
| `--bg-primary` | #f8f9fc | #070d1a |
| `--bg-secondary` | #ffffff | #0f172a |
| `--accent` | #4a5eff | #6f84ff |
| `--text-primary` | #0f172a | #f1f5f9 |

## Performance

- Static export = zero server costs
- Fonts loaded via Google Fonts with display=swap
- Images: Next.js Image component with unoptimized flag for static export
- Mobile-first responsive design

## SEO

Metadata configured in `/src/app/layout.tsx`:
- Title, description, keywords
- Open Graph tags
- Robots meta

## License

Personal portfolio — all rights reserved.
Built for Arzaan Mogal, Perth, Western Australia.
