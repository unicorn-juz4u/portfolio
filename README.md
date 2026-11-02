# Abhey Kumar — Personal Portfolio Website (SPA)

> An award-level, modern, and accessible Single Page Application (SPA) portfolio engineered for **Abhey Kumar**, MERN Stack Developer & Full-Stack Engineer.

![Portfolio Preview](/public/images/profile.jpg)

---

## ⚡ Tech Stack

- **Core**: React 18, Vite 8, JavaScript (ES6+)
- **Styling**: Tailwind CSS (with custom dark-mode theme, glassmorphism utilities & glowing accents)
- **Animations**: Framer Motion (reveal animations, staggered transitions, layout morphing, responsive drawers)
- **Icons**: `react-icons` (Simple Icons & FontAwesome 6) + `lucide-react`
- **Effects**: Lightweight interactive Canvas constellation mesh, spring custom follower cursor, `canvas-confetti`
- **Linting & Quality**: Oxlint (0 warnings, 0 errors)

---

## 🚀 Key Features

1. **Award-Level Aesthetics & Theming**:
   - Dark theme by default (`#080c14` / `#0e1424`) with electric violet and vibrant cyan accents.
   - Smooth light/dark mode toggle with instant persistence in `localStorage` and zero theme flash.
2. **Hero Section**:
   - Animated headline (*"Hi, I'm Abhey — I build scalable web products"*).
   - High-fidelity typewriter effect cycling through multiple engineering roles.
   - Dual Call-to-Actions (*"View Projects"* with smooth scrolling & *"Download Resume"* PDF link).
   - Real-time availability indicator badge with pulsating emerald radar.
3. **About Section**:
   - High-impact career story detailing background at Navgurukul and IGNOU.
   - Framed profile photo with ambient glowing halo and floating experience card.
   - Animated stat counters (Years of Experience, Projects Built, Technologies, Reliability).
   - 4 Core engineering pillars (Clean Architecture, API Excellence, Performance First, Human Centric).
4. **Interactive Skills Showcase**:
   - Categorized by **Frontend**, **Backend**, **Databases**, and **Tools & Deployment**.
   - Category filtering tabs with animated background pills (`layoutId`).
   - Cards with animated proficiency progress bars, level badges (Expert, Advanced, Proficient), and brand icons.
5. **Projects Grid & Deep Dive Modals**:
   - Filterable projects by category (**All**, **SaaS**, **E-Commerce**, **Full-Stack**).
   - Glassmorphism cards with zoom on hover, tech tags, and direct demo & code buttons.
   - **Accessible Modal Dialog**: Full architectural breakdown, multi-tenant/payment features, Lighthouse metric badges, keyboard escape (`ESC`) and backdrop click dismiss.
   - Featured projects:
     - **SaaSify**: Multi-Tenant SaaS Platform with RBAC & telemetry.
     - **E-Commerce Lite**: Modern storefront with Razorpay checkout integration.
     - **Career Hub**: Dual-portal job board and ATS pipeline.
6. **Work Experience**:
   - Vertical animated timeline with glowing central indicator nodes.
   - Career milestones at **Brainwave** (Web Developer), **TechVanz** (Product Associate), and **Appscrip** (Developer Intern) with achievement metrics and tech chips.
7. **Education & Continuous Learning**:
   - Compact cards for **BSW (IGNOU)** (user empathy, social dynamics) and **Software Engineering (Navgurukul)** (intensive CS bootcamp).
8. **Contact & Toast Notification System**:
   - Working validated form (Name, Email, Subject, Message) with instant error feedback.
   - Direct integration support for Formspree (`VITE_FORMSPREE_ENDPOINT`) or email mailto fallback.
   - Celebratory confetti burst on submission.
   - Copy-to-clipboard shortcut for email address with live status feedback.
   - Direct phone, WhatsApp, location, and 12-hour response guarantee.
9. **Single Data File Architecture (`src/data/portfolioData.js`)**:
   - All text, links, stats, skills, projects, and experiences are stored in a single source of truth. Update content without touching component JSX.
10. **SEO & Accessibility**:
    - Semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
    - OpenGraph & Twitter meta tags, favicons, canonical URL, and JSON-LD `Person` schema.
    - Keyboard navigation support, visible focus rings, and `prefers-reduced-motion` compliance.

---

## 📂 Project Structure

```bash
portfolio/
├── index.html                   # HTML entry point, SEO tags, JSON-LD Schema & preconnects
├── package.json                 # Dependencies & build scripts
├── tailwind.config.js           # Design system tokens, color palettes & keyframe animations
├── vite.config.js               # Vite bundler configuration
├── vercel.json                  # SPA rewrite rules for Vercel
├── public/
│   ├── _redirects               # SPA 200 rewrite for Netlify
│   ├── favicon.svg              # Custom monogram favicon
│   ├── resume.pdf               # Downloadable resume document
│   └── images/                  # Project screenshots and profile picture
│       ├── profile.jpg
│       ├── saasify.jpg
│       ├── ecommerce.jpg
│       └── careerhub.jpg
└── src/
    ├── main.jsx                 # React root mount
    ├── App.jsx                  # Main application orchestrator & 404 handler
    ├── index.css                # Tailwind directives & custom glassmorphism utilities
    ├── context/
    │   ├── themeContextInstance.js # React context instance
    │   ├── ThemeContext.jsx        # ThemeProvider component with localStorage
    │   └── useTheme.js             # Custom useTheme hook
    ├── hooks/
    │   ├── useActiveSection.js     # Scroll-spy intersection detector
    │   ├── useTypingEffect.js      # Typewriter effect for role headlines
    │   └── useScrollProgress.js    # Reading progress tracker (0-100%)
    ├── data/
    │   └── portfolioData.js        # Single source of truth for all portfolio content
    └── components/
        ├── common/
        │   ├── Navbar.jsx          # Sticky glassmorphism header & progress bar
        │   ├── MobileMenu.jsx      # Framer Motion animated drawer
        │   ├── ThemeToggle.jsx     # Dark/light animated toggle
        │   ├── CustomCursor.jsx    # Desktop follower glowing cursor
        │   ├── ParticleBackground.jsx # Lightweight canvas constellation
        │   ├── Preloader.jsx       # Brand monogram loading animation
        │   ├── SectionHeading.jsx  # Animated section titles & glowing pills
        │   ├── ProjectModal.jsx    # Project deep-dive dialog
        │   ├── SkillIcon.jsx       # Dynamic SVG logo renderer
        │   ├── Toast.jsx           # Animated floating notifications
        │   ├── Footer.jsx          # Footer & back-to-top button
        │   └── NotFound.jsx        # 404 error fallback
        └── sections/
            ├── Hero.jsx            # Full-screen introduction & CTAs
            ├── About.jsx           # Bio story, photo & animated counters
            ├── Skills.jsx          # Tabbed interactive skills matrix
            ├── Projects.jsx        # Filterable project gallery
            ├── Experience.jsx      # Vertical career timeline
            ├── Education.jsx       # Degree & bootcamp highlights
            └── Contact.jsx         # Validated form & communication channels
```

---

## 🛠️ Local Development Setup

### Prerequisites
- Node.js `18.x` or `20.x` or higher
- npm, pnpm, or yarn

### 1. Clone the repository & Install Dependencies
```bash
git clone https://github.com/abhey-kumar/portfolio.git
cd portfolio
npm install
```

### 2. Configure Environment Variables (Optional)
If you want to receive contact form submissions directly to your email via Formspree, create a `.env` file in the root directory:
```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id_here
```
*(If no endpoint is provided, the form runs in demonstration mode with interactive validation, confetti, and toast feedback).*

### 3. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173` (or the port indicated in terminal) in your browser.

### 4. Run Linter
```bash
npm run lint
```

### 5. Build for Production
```bash
npm run build
```
The optimized bundle will be generated in the `dist/` directory.

### 6. Preview Production Build Locally
```bash
npm run preview
```

---

## 🌐 Deployment Instructions

### Option 1: Deploying to Vercel (Recommended)

#### Method A: Using Git Integration
1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete MERN developer portfolio"
   git push origin main
   ```
2. Navigate to [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New..." > "Project"**.
3. Import your `portfolio` repository.
4. Vercel automatically detects **Vite**:
   - **Framework Preset**: Vite
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. *(Optional)* Under **Environment Variables**, add:
   - Key: `VITE_FORMSPREE_ENDPOINT`
   - Value: `https://formspree.io/f/your_form_id_here`
6. Click **Deploy**. The `vercel.json` file included in this repository handles SPA routing automatically.

#### Method B: Using Vercel CLI
```bash
npm i -g vercel
vercel login
vercel
vercel --prod
```

---

### Option 2: Deploying to Netlify

#### Method A: Using Git Integration
1. Go to [Netlify Dashboard](https://app.netlify.com/) and click **"Add new site" > "Import an existing project"**.
2. Connect your GitHub repository.
3. Configure build settings:
   - **Base directory**: Leave blank (root)
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. The `public/_redirects` file included in the project automatically copies to `dist/_redirects` during build to guarantee SPA routes resolve correctly.
5. Click **Deploy Site**.

#### Method B: Using Netlify CLI
```bash
npm i -g netlify-cli
netlify login
netlify init
netlify deploy --prod --dir=dist
```

---

## 📝 Customization Guide

To personalize the portfolio content:
1. Open [`src/data/portfolioData.js`](src/data/portfolioData.js).
2. Edit `personalInfo` (name, titles, social links, resume URL).
3. Edit `aboutStory` (paragraphs, stats, pillars).
4. Edit `skillsData` (technologies, proficiency percentages, categories).
5. Edit `projectsData` (project titles, images, descriptions, metrics, live/github links).
6. Edit `experienceData` and `educationData`.
7. Replace images in `public/images/` or [`public/resume.pdf`](public/resume.pdf) as needed.
