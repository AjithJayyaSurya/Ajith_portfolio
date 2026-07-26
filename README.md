# 🚀 Ajith Jayya Surya E — Premium AI Portfolio

A modern, premium, fully responsive personal portfolio website built with Next.js 16, Tailwind CSS v4, and Framer Motion. Designed to impress recruiters from AI companies, sports analytics firms, and Formula 1 teams.

![Portfolio Preview](./public/og-image.png)

---

## ✨ Features

- **Premium Dark Theme** — Glassmorphism UI with black, white, red & electric blue
- **Particle Background** — Interactive canvas-based particles with mouse attraction
- **Custom Cursor Glow** — Smooth cursor with ring animation
- **Loading Screen** — Animated progress loader on first visit
- **Typing Animation** — Role cycling with react-type-animation
- **Scroll Animations** — Framer Motion reveal animations on scroll
- **Project Modals** — Detailed project deep-dives with architecture, metrics, and tech stack
- **Skills Section** — Animated skill bars with category tabs
- **GitHub Stats** — Live GitHub contribution graphs and stats
- **Contact Form** — Professional form with send animation
- **SEO Optimized** — Full Open Graph, Twitter Cards, JSON-LD structured data
- **Fully Responsive** — Mobile, tablet, and desktop

---

## 🗂️ Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with SEO metadata
│   │   ├── page.tsx            # Main page
│   │   └── globals.css         # Global styles + utility classes
│   ├── components/
│   │   ├── icons/
│   │   │   └── SocialIcons.tsx # SVG social icons (GitHub, LinkedIn)
│   │   ├── CursorGlow.tsx      # Custom cursor with glow ring
│   │   ├── LoadingScreen.tsx   # Animated loading screen
│   │   ├── ParticleBackground.tsx # Canvas particle system
│   │   ├── Navbar.tsx          # Sticky nav with mobile menu
│   │   ├── HeroSection.tsx     # Landing hero with typing animation
│   │   ├── AboutSection.tsx    # About + education + career goal
│   │   ├── SkillsSection.tsx   # Tabbed skill bars
│   │   ├── ProjectsSection.tsx # Project cards + detail modals
│   │   ├── ExperienceSection.tsx # Timeline experience cards
│   │   ├── CertificationsSection.tsx # Certification cards
│   │   ├── GitHubStats.tsx     # Live GitHub stats + charts
│   │   ├── ResumeSection.tsx   # Resume viewer + download
│   │   ├── ContactSection.tsx  # Contact form + links
│   │   └── Footer.tsx          # Footer with back-to-top
│   ├── data/
│   │   └── portfolio.ts        # All portfolio content data
│   └── hooks/
│       ├── useMousePosition.ts
│       └── useScrollAnimation.ts
├── public/
│   ├── resume.pdf              # Your resume (add this file!)
│   ├── robots.txt
│   └── sitemap.xml
├── next.config.ts
├── package.json
└── README.md
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 | React framework with App Router |
| TypeScript | Type safety |
| Tailwind CSS v4 | Utility-first styling |
| Framer Motion | Animations |
| react-type-animation | Typing effect in hero |
| react-intersection-observer | Scroll-triggered animations |
| lucide-react | UI icons |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/ajithjayya/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev -- --webpack
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📦 Adding Your Resume

1. Export your resume as `resume.pdf`
2. Place it at `public/resume.pdf`
3. The download button and viewer will work automatically

---

## 🌐 Deployment on Vercel

### One-click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ajithjayya/portfolio)

### Manual Deploy

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

### Environment Variables (if using EmailJS)

In your Vercel dashboard, add:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## 🔧 Customization

### Update personal info
Edit `src/data/portfolio.ts`:
```typescript
export const personalInfo = {
  name: "Your Name",
  email: "your@email.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  // ...
};
```

### Update GitHub username for stats
In `src/components/GitHubStats.tsx`, change:
```typescript
const username = "yourusername";
```

### Add your photo
Replace the emoji avatar in `AboutSection.tsx` with an `<Image />` component pointing to your photo in `/public/`.

---

## 📈 SEO

- ✅ Open Graph meta tags
- ✅ Twitter Card meta tags
- ✅ JSON-LD structured data (Person schema)
- ✅ robots.txt
- ✅ sitemap.xml
- ✅ Semantic HTML
- ✅ Alt text on images
- ✅ Canonical URLs

Update the domain in `layout.tsx`, `robots.txt`, and `sitemap.xml` with your actual Vercel URL.

---

## 📄 License

MIT © Ajith Jayya Surya E
