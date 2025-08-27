Quazar — Atomic Structure Module

Interactive, Class-10 friendly learning built for curiosity.
Next.js + TypeScript + TailwindCSS + Lottie + Framer Motion.

“Before studying anything, ask why. Understanding the purpose makes learning faster, deeper, and more fun.” — Simon Sinek

✨ Features

NatGeo-inspired theme

Light mode: white + yellow accents

Dark mode: deep navy + yellow accents

Auto theme from system (no manual toggle)

Design tokens in CSS (no Tailwind theme hacks)

src/app/globals.css holds tokens & utilities

Sticky Navbar with full-width Lottie “Abstract Waves” overlay

Hero: big “ATOMIC STRUCTURE” heading + tech Lottie icon aligned to text size

Right-side universe image (framed) + 2 smaller supporting images

Atomic module routes ready to wire:

/launch-atomic-structure (simulation entry)

/browse-topic (topic list / cards)

🚀 Quick Start
# 1) Install deps
npm install

# 2) Dev
npm run dev
# -> http://localhost:3000

# 3) Build & run production
npm run build
npm run start


Node: 18+ recommended (Next 15).
Package manager: npm (lockfile included).

🗂 Project Structure (key folders)
/public
  /animations
    Abstract Waves.json
    Technology.json
  /images
    quazaredu_logo.webp
    universe.webp
    # (optional) universe2.webp, universe3.webp
/src
  /app
    /browse-topic
      page.tsx
    /launch-atomic-structure
      page.tsx
    globals.css
    layout.tsx
    page.tsx                # Home (hero + content)
  /components
    Navbar.tsx              # Sticky navbar (with Lottie overlay)
  # (optional) /app/learn/... legacy; safe to remove once migrated

🧭 Routes

Home: /

Browse Topics: /browse-topic

Launch Atomic Structure: /launch-atomic-structure

If you still have legacy pages under /learn, you can safely delete them.
Prefer kebab-case file/folder names so URLs are lowercase.

🎨 Styling & Theme

Do not extend Tailwind theme for colors; we keep Tailwind defaults.

Tokens live in src/app/globals.css (CSS variables: brand yellow, surfaces, text).

Utilities: small helpers (frame border, focus ring) also live in globals.css.

Why this way?

Keeps tailwind.config.ts stable for teams.

Designers/devs can change tokens without touching Tailwind config.

🧱 Components
Navbar (src/components/Navbar.tsx)

Sticky, with NatGeo yellow underline.

Lottie overlay fills the entire bar (client-side only).

Links:

Home → /

Browse Topic → /browse-topic

Launch Atomic → /launch-atomic-structure

Wordmark quazar: black (light) / white (dark).

Home Hero (src/app/page.tsx)

Heading + Technology Lottie sized proportionally to the text (em-based).

Left content (yellow 3D text accents).

Right image: framed universe.webp with subtle glow.

🧩 Data & Animations

Place Lotties under /public/animations and load with fetch + lottie-react (ssr:false).

Images go under /public/images.

🛠 Scripts
"scripts": {
  "dev": "next dev --turbopack",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}

☁️ Deploy (Vercel)

Push the repo to GitHub:

git init
git add .
git commit -m "Initial commit: Quazar atomic structure"
git branch -M main
git remote add origin https://github.com/<you>/quazar.git
git push -u origin main


Go to vercel.com → New Project → Import your GitHub repo.

Framework preset: Next.js → keep defaults → Deploy.

🐛 Troubleshooting

The default export is not a React Component in "/learn/layout"
Remove stray layout.tsx inside nested app/learn/... routes. The root src/app/layout.tsx is enough.

client-only cannot be imported from a Server Component
Do not use styled-jsx or client-only libs in server files.
For Lottie, dynamic(() => import('lottie-react'), { ssr: false }) is correct.

Cannot find module 'framer-motion'
npm i framer-motion

Navbar links go to /BrowseTopic (404)
Use lowercase route paths in the component:

<Link href="/browse-topic">...</Link>
<Link href="/launch-atomic-structure">...</Link>


Colors look wrong / tokens missing
Ensure src/app/globals.css is imported by src/app/layout.tsx, and tokens are defined there.

Windows CRLF warnings
Harmless. To silence:

git config core.autocrlf true

🧭 Roadmap

 Wire /launch-atomic-structure to the simulation component + state hook.

 Add topic cards/grid to /browse-topic.

 Glossary & syllabus sections (JSON driven).

 Basic unit tests for UI interactions.

 Content polish and accessibility pass.