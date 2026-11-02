/**
 * Portfolio Data File - Abhey Kumar
 * Single source of truth for all portfolio content.
 */

export const personalInfo = {
  name: "Abhey Kumar",
  title: "MERN Stack Developer",
  typingRoles: [
    "MERN Stack Developer",
    "SaaS Builder",
    "Problem Solver"
  ],
  headline: "Hi, I'm Abhey — I build scalable web products",
  summary: "MERN Stack Developer specializing in building scalable web products, robust REST APIs, and responsive user interfaces with clean architecture.",
  email: "unicorn.juz4u@gmail.com",
  phone: "+91 8860105247",
  location: "New Delhi, India",
  availability: "Available for full-time roles & high-impact contracts",
  avatar: "/images/profile.jpg",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/abhey-kumar",
    linkedin: "https://linkedin.com/in/abhey-kumar",
    email: "mailto:unicorn.juz4u@gmail.com",
    phone: "tel:+918860105247"
  }
};

export const aboutStory = {
  title: "Engineering Scalable Web Products with Precision & Empathy",
  paragraphs: [
    "My software engineering journey began at Navgurukul, where I spent two intensive years mastering computer science fundamentals, data structures, algorithms, and full-stack JavaScript architectures.",
    "Currently completing my degree at IGNOU, I build full-stack web applications with React, Node.js, Express, and MongoDB—combining strong engineering fundamentals with human-centered problem solving."
  ],
  highlights: [
    {
      title: "Clean Architecture",
      desc: "Modular, maintainable, and well-documented component hierarchies.",
      icon: "Layers"
    },
    {
      title: "API Excellence",
      desc: "Robust RESTful microservices with JWT auth and rate limiting.",
      icon: "Server"
    },
    {
      title: "Performance First",
      desc: "Optimized bundle sizes, memoized state, and sub-second page loads.",
      icon: "Zap"
    },
    {
      title: "Human Centric",
      desc: "Accessible, responsive layouts tested across all viewports.",
      icon: "Users"
    }
  ],
  stats: [
    { number: 3, suffix: "+", label: "Years Experience", description: "Hands-on software development" },
    { number: 20, suffix: "+", label: "Projects Built", description: "From SaaS to E-Commerce apps" },
    { number: 15, suffix: "+", label: "Core Technologies", description: "Modern MERN & cloud stack" },
    { number: 99, suffix: ".9%", label: "Code Reliability", description: "Performance & security driven" }
  ]
};

export const skillsData = {
  categories: [
    { id: "all", label: "All Skills" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "databases", label: "Databases" },
    { id: "tools", label: "Tools & Deployment" }
  ],
  skills: [
    // Frontend
    { name: "JavaScript (ES6+)", category: "frontend", proficiency: 94, level: "Advanced", icon: "SiJavascript", color: "#F7DF1E" },
    { name: "React", category: "frontend", proficiency: 95, level: "Expert", icon: "SiReact", color: "#61DAFB" },
    { name: "Redux Toolkit", category: "frontend", proficiency: 88, level: "Advanced", icon: "SiRedux", color: "#764ABC" },
    { name: "Tailwind CSS", category: "frontend", proficiency: 96, level: "Expert", icon: "SiTailwindcss", color: "#06B6D4" },
    { name: "HTML5", category: "frontend", proficiency: 98, level: "Expert", icon: "SiHtml5", color: "#E34F26" },
    { name: "CSS3", category: "frontend", proficiency: 92, level: "Advanced", icon: "SiCss3", color: "#1572B6" },

    // Backend
    { name: "Node.js", category: "backend", proficiency: 92, level: "Advanced", icon: "SiNodedotjs", color: "#5FA04E" },
    { name: "Express", category: "backend", proficiency: 93, level: "Advanced", icon: "SiExpress", color: "#68A063" },
    { name: "REST APIs", category: "backend", proficiency: 95, level: "Expert", icon: "Globe", color: "#8B5CF6" },
    { name: "JWT Auth & Security", category: "backend", proficiency: 90, level: "Advanced", icon: "ShieldCheck", color: "#EC4899" },

    // Databases
    { name: "MongoDB", category: "databases", proficiency: 92, level: "Advanced", icon: "SiMongodb", color: "#47A248" },
    { name: "MySQL", category: "databases", proficiency: 85, level: "Proficient", icon: "SiMysql", color: "#4479A1" },

    // Tools & Deployment
    { name: "Git & GitHub", category: "tools", proficiency: 94, level: "Expert", icon: "SiGithub", color: "#F05032" },
    { name: "Netlify", category: "tools", proficiency: 92, level: "Advanced", icon: "SiNetlify", color: "#00C7B7" },
    { name: "Heroku", category: "tools", proficiency: 86, level: "Proficient", icon: "SiHeroku", color: "#79589F" },
    { name: "Hostinger", category: "tools", proficiency: 88, level: "Advanced", icon: "Server", color: "#673AB7" },
    { name: "Postman", category: "tools", proficiency: 90, level: "Advanced", icon: "SiPostman", color: "#FF6C37" },
    { name: "Vite", category: "tools", proficiency: 94, level: "Expert", icon: "SiVite", color: "#646CFF" }
  ]
};

export const projectsData = {
  categories: [
    { id: "all", label: "All Projects" },
    { id: "saas", label: "SaaS" },
    { id: "ecommerce", label: "E-Commerce" },
    { id: "fullstack", label: "Full-Stack" }
  ],
  projects: [
    {
      id: "saasify",
      category: "saas",
      title: "SaaSify — Multi-Tenant SaaS Platform",
      subtitle: "Multi-tenant architecture with RBAC & telemetry",
      shortDesc: "A multi-tenant SaaS platform featuring workspace separation, tier-based billing, role-based access control, and real-time business telemetry.",
      fullDesc: "SaaSify is engineered for businesses requiring strict workspace isolation and scalable member management. It provides role-based permissions (Owner, Admin, Member, Viewer), automated subscription tier tracking, real-time analytics graphs, audit trails, and multi-organization switching without page reloads.",
      image: "/images/saasify.jpg",
      tags: ["React 18", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT", "Chart.js"],
      features: [
        "Multi-tenant database schema architecture with isolated data boundaries",
        "Fine-grained Role-Based Access Control (RBAC) and team invite flows",
        "Subscription lifecycle management with monthly/annual tier overview",
        "Interactive analytics dashboard showing MRR, churn rate, and active users",
        "Dark / light mode support and responsive telemetry visualizations"
      ],
      metrics: [
        { label: "Tenancy Model", value: "Multi-Org" },
        { label: "Lighthouse", value: "96/100" },
        { label: "Security", value: "JWT + RBAC" }
      ],
      liveUrl: "https://saasify-preview.vercel.app",
      githubUrl: "https://github.com/abhey-kumar/saasify",
      featured: true
    },
    {
      id: "ecommerce-lite",
      category: "ecommerce",
      title: "E-Commerce Lite — Modern Storefront",
      subtitle: "Storefront with Razorpay checkout & real-time inventory",
      shortDesc: "Full-stack e-commerce experience with secure Razorpay payment gateway integration, persistent shopping cart, and order tracking.",
      fullDesc: "E-Commerce Lite delivers a smooth consumer shopping journey. Features instant product search with category filters, dynamic inventory badges, an interactive slide-in cart drawer, and complete Razorpay payment integration with HMAC signature verification for reliable order security.",
      image: "/images/ecommerce.jpg",
      tags: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "Razorpay", "Tailwind CSS"],
      features: [
        "Seamless Razorpay checkout modal with server-side signature validation",
        "Centralized cart and catalog state persistence via Redux Toolkit",
        "Product catalog with multifaceted filters (price range, categories, stock)",
        "Customer portal for order tracking, payment receipts, and saved items",
        "Mobile-first responsive drawer and fast checkout flow"
      ],
      metrics: [
        { label: "Payment Gateway", value: "Razorpay" },
        { label: "Checkout Flow", value: "< 3 Steps" },
        { label: "Cart Speed", value: "Instant" }
      ],
      liveUrl: "https://ecommerce-lite-demo.vercel.app",
      githubUrl: "https://github.com/abhey-kumar/ecommerce-lite",
      featured: true
    },
    {
      id: "career-hub",
      category: "fullstack",
      title: "Career Hub — MERN Job Portal",
      subtitle: "Hiring platform with ATS pipeline & candidate tracking",
      shortDesc: "A job board and applicant tracking system (ATS) connecting developers with hiring managers via interactive pipelines.",
      fullDesc: "Career Hub streamlines recruiting through a dual-role architectural model. Job seekers search listings with salary and tech stack filters, attach resumes, and monitor application milestones. Employers access a specialized recruiter dashboard with Kanban-style candidate pipelines and real-time applicant cards.",
      image: "/images/careerhub.jpg",
      tags: ["React 18", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Multer"],
      features: [
        "Dual user portals with distinct dashboards for Job Seekers and Employers",
        "Interactive ATS Kanban board for managing candidates across hiring stages",
        "MongoDB indexing and aggregation pipelines for fast multifaceted filtering",
        "Secure resume file uploading and validation with preview capabilities",
        "Application status notifications and real-time candidate feedback loops"
      ],
      metrics: [
        { label: "Search Index", value: "MongoDB Atlas" },
        { label: "ATS Stages", value: "5 Pipeline Steps" },
        { label: "Resume Parsing", value: "Automated" }
      ],
      liveUrl: "https://careerhub-mern.vercel.app",
      githubUrl: "https://github.com/abhey-kumar/career-hub",
      featured: true
    }
  ]
};

export const experienceData = [
  {
    company: "Brainwave",
    role: "MERN Stack Developer",
    period: "Apr 2026 – Aug 2026",
    type: "Full-Time",
    location: "Remote / Hybrid",
    description: "Led frontend architecture refactoring and modern web applications development.",
    achievements: [
      "Modernized frontend architecture using React 18 and Tailwind CSS, increasing Lighthouse performance score by 38% and eliminating layout shifts.",
      "Engineered reusable design-system components and streamlined global state with Redux Toolkit, reducing client bundle size by 26%.",
      "Integrated RESTful microservices, established resilient Axios error handling interceptors, and enforced JWT token refresh protocols."
    ],
    tech: ["React 18", "Redux Toolkit", "Tailwind CSS", "REST APIs", "Node.js"]
  },
  {
    company: "TechVanz",
    role: "MERN Stack Developer",
    period: "May 2023 – Apr 2026",
    type: "Full-Time",
    location: "New Delhi, India",
    description: "Drove product lifecycle, client-facing dashboard engineering, and cross-functional sprints.",
    achievements: [
      "Directed the end-to-end development of data-intensive analytics dashboards, collaborating with engineers and stakeholders to ship 4 major releases on schedule.",
      "Conceived and implemented telemetry tracking that informed UX improvements, driving a 28% increase in 90-day active user retention.",
      "Authored technical specifications, API data contracts, and UX blueprints, bridging business logic with backend schema designs."
    ],
    tech: ["React Dashboards", "REST APIs", "Node.js", "MongoDB", "Analytics"]
  },
  {
    company: "Appscrip",
    role: "MERN Stack Developer Intern",
    period: "Jan 2022 – Apr 2022",
    type: "Internship",
    location: "Bangalore / Remote",
    description: "Built modular web interfaces, integrated REST APIs, and participated in Agile workflows.",
    achievements: [
      "Constructed modular, responsive React components from Figma designs with pixel accuracy across mobile and desktop devices.",
      "Implemented client-side form validation routines, asynchronous API integrations, and secure JWT authentication headers.",
      "Collaborated actively in daily standups, code reviews, and Git branching workflows following industry best practices."
    ],
    tech: ["React", "JavaScript (ES6+)", "HTML5 / CSS3", "REST APIs", "Git / GitHub"]
  }
];

export const educationData = [
  {
    id: "bsw-ignou",
    degree: "Bachelor of Social Work (BSW)",
    institution: "Indira Gandhi National Open University (IGNOU)",
    period: "2024 – Present",
    badge: "Undergraduate Degree",
    description: "Studying human behavior, community development, social dynamics, and ethical leadership, fostering deep user empathy and collaborative problem-solving.",
    highlights: [
      "Human-Centered Thinking & User Empathy",
      "Organizational Communication & Dynamics",
      "Community Problem Resolution & Ethics"
    ]
  },
  {
    id: "software-navgurukul",
    degree: "Diploma in Software Engineering",
    institution: "Navgurukul",
    period: "2020 – 2022",
    badge: "Intensive Engineering Bootcamp",
    description: "Two-year immersive software engineering and computer science bootcamp with rigorous project-based learning in algorithms, data structures, and full-stack JavaScript.",
    highlights: [
      "Data Structures & Algorithmic Problem Solving",
      "Full-Stack JavaScript (MERN Stack Specialization)",
      "Collaborative Git Workflows & Agile Pair Programming"
    ]
  }
];

export const contactDetails = {
  heading: "Let's build something extraordinary together",
  subtitle: "Whether you're looking for a dedicated MERN Stack Developer, want to consult on SaaS architecture, or simply wish to say hello — my inbox is always open.",
  email: "unicorn.juz4u@gmail.com",
  phone: "+91 8860105247",
  location: "New Delhi, India (IST / UTC+5:30)",
  availability: "Available for Full-time Roles & Contracts",
  responseTime: "Usually responds within 12 hours",
  formspreeEndpoint: "https://formspree.io/f/mwllwaww"
};

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" }
];
