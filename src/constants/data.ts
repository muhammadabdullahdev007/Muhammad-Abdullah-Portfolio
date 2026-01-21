// ============================================================
// UNIFIED DATA - Single Source of Truth for Portfolio & PDF
// ============================================================

// ============ PERSONAL INFO ============
export const PERSONAL_INFO = {
  name: "Muhammad Abdullah",
  title: "Full Stack Developer | Associate Software Engineer",
  location: "Pakistan",
  city: "Faisalabad",
  email: "abdullahfalak007@gmail.com",
  phone: "+92 343 3690525",
  portfolio: "https://abdullahfalak007.vercel.app",
  linkedin: "https://www.linkedin.com/in/abdullahfalak007",
  github: "https://github.com/Abdullahfalak007",
  youtube: "https://www.youtube.com/c/FalakTechrary",
  facebook: "https://www.facebook.com/abdullahfalak007",
  instagram: "https://www.instagram.com/Abdullahfalak007/",
};

// ============ SUMMARY / ABOUT ============
export const SUMMARY = `Full Stack Developer specializing in enterprise SaaS platforms, AI-powered solutions, and multi-tenant architectures. Experienced with React 18, Next.js 14, TypeScript, Node.js, and modern databases like PostgreSQL and Supabase. Proficient in AI/ML integrations (OpenAI GPT-4o, Google Gemini, Ideogram), real-time systems with WebSockets and Redis, background job processing with BullMQ, and Framer Motion animations. Known for building scalable, user-centric applications with strong focus on performance, accessibility, and seamless design-to-code implementation. Passionate about leveraging cutting-edge technologies to solve complex business problems and deliver exceptional user experiences.`;

export const SUMMARY_SHORT = `Passionate Full Stack Developer with MERN stack expertise and hands-on experience building scalable web/mobile apps and AI-powered solutions. Skilled in video streaming (Agora), payment integration (Stripe), JWT & OAuth authentication, Google login, webhooks, and AI assistants/chatbots. Proficient in developing dynamic dashboards using D3.js, and integrating voice AI (ElevenLabs) for interactive applications.`;

// ============ EDUCATION ============
export const EDUCATION = {
  degree: "Bachelor of Computer Science",
  degreeShort: "BSCS",
  university: "Riphah International University",
  location: "Faisalabad",
  duration: "2019 – 2023",
  startDate: "10/2019",
  endDate: "10/2023",
  cgpa: "3.60",
};

// ============ EXPERIENCE ============
export interface Experience {
  title: string;
  company: string;
  companyShort?: string;
  location: string;
  duration: string;
  current: boolean;
  website: string;
  // For website (paragraph)
  description: string;
  // For PDF (bullet points)
  highlights: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    title: "Associate Software Engineer",
    company: "StrategistsHub",
    location: "Lahore",
    duration: "Jul 2025 – Present",
    current: true,
    website: "https://strategisthub.com/",
    description:
      "Building enterprise-grade, multi-tenant SaaS platforms with AI-powered ideation and image generation. Tech stack: Next.js, React, Node.js, PostgreSQL, BullMQ, Redis. Implemented background job processing, scalable frontend architecture, and collaborated with design & AI teams.",
    highlights: [
      "Developing scalable web applications using Next.js, Node.js, PostgreSQL, and MongoDB.",
      "Implementing data visualizations (D3.js), video conferencing (Agora), Stripe payment integrations, and AI voice/chat assistants (ElevenLabs) for enterprise solutions.",
    ],
  },
  {
    title: "Junior Developer",
    company: "Cybergen",
    companyShort: "Cybergen",
    location: "Faisalabad",
    duration: "Jun 2024 – Sep 2024",
    current: false,
    website: "https://cybergen.com",
    description:
      "Built AI-integrated web platforms with RESTful APIs and data-driven dashboards for a US-based company.",
    highlights: [
      "Built AI-integrated web platforms with RESTful APIs and data-driven dashboards for a US-based company.",
    ],
  },
  {
    title: "Full Stack Developer Trainee",
    company: "TechloSet Solutions",
    companyShort: "TechloSet Solutions",
    location: "Faisalabad",
    duration: "Feb 2024 – May 2024",
    current: false,
    website: "https://techloset.com",
    description:
      "Completed a 4-month coding bootcamp and built multiple full-stack apps using React, React Native, Next.js, Node.js, MongoDB, and Firebase. Implemented JWT authentication, Google login, and webhooks for real-time features in chat and collaboration apps.",
    highlights: [
      "Completed a 4-month coding bootcamp and built multiple full-stack apps using React, React Native, Next.js, Node.js, MongoDB, and Firebase.",
      "Implemented JWT authentication, Google login, and webhooks for real-time features in chat and collaboration apps.",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company: "Fiverr | Upwork",
    companyShort: "Fiverr | Upwork",
    location: "Remote",
    duration: "Nov 2024 – Present",
    current: true,
    website: "https://www.upwork.com/freelancers/~01c0f8755d4b590d1a",
    description:
      "Delivering responsive web solutions with React, Next.js, and Tailwind CSS for global clients along with REST APIs Integration, authentication modules, and FastAPI backends ensuring reliability and scalability.",
    highlights: [
      "Delivering responsive web solutions with React, Next.js, and Tailwind CSS for global clients along with REST APIs Integration, authentication modules, and FastAPI backends ensuring reliability and scalability.",
    ],
  },
  {
    title: "Intern, Software Engineer",
    company: "AmazeWorks Private Limited",
    companyShort: "AmazeWorks Pvt Ltd.",
    location: "Faisalabad",
    duration: "May 2022 – Aug 2022",
    current: false,
    website: "https://pk.linkedin.com/company/amaze-works",
    description:
      "Contributed to ERP system enhancement through front-end customization and Python/XML module integration.",
    highlights: [
      "Contributed to ERP system enhancement through front-end customization and Python/XML module integration.",
    ],
  },
];

// ============ PROJECTS ============
export interface Project {
  title: string;
  titleShort?: string;
  duration: string;
  image: string;
  description: string;
  github: string | null;
  demo: string | null;
  demoLabel: string | null;
  // For PDF - clean link without https://
  link?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Creator AI – Enterprise AI Product Ideation Platform",
    titleShort: "Creator AI",
    duration: "Jan 2025 – Present",
    image: "/nextfood.ai.webp",
    description:
      "Enterprise B2B SaaS for F&B industry with multi-model AI image generation, background job processing, and multi-tenant architecture.",
    github: null,
    demo: "https://creator-ai-test.onrender.com",
    demoLabel: "Live Demo",
    link: "creator-ai-test.onrender.com",
  },
  {
    title: "FatherForm – AI-Powered Fatherhood & Family Connection Platform",
    titleShort: "FatherForm",
    duration: "Jun 2025 – Present",
    image: "/Fatherform.webp",
    description:
      "AI-first platform for family connection with conversational AI coaching, relationship health scoring, and timeline-based guidance.",
    github: null,
    demo: "https://fatherform.app/",
    demoLabel: "Live Demo",
    link: "fatherform.app",
  },
  {
    title: "Dine With Foody – Multi-Role Restaurant Management System",
    titleShort: "Dine With Foody",
    duration: "Jul 2025 – Sep 2025",
    image: "/dine-with-foody.webp",
    description:
      "Multi-role restaurant management system with Super Admin, Restaurant Owner, Employee, and User roles. Built with Next.js and MongoDB.",
    github: "https://github.com/Abdullahfalak007/dinewithfoody",
    demo: "https://dinewithfoody.vercel.app/",
    demoLabel: "Live Demo",
    link: "dinewithfoody.vercel.app",
  },
  {
    title: "TeChat – Chatting Android App",
    titleShort: "TeChat",
    duration: "Mar 2024",
    image: "/TeChat.webp",
    description:
      "Built with React Native front end and Firebase real‑time back end.",
    github: "https://github.com/Abdullahfalak007/Techloset-TeChat-App.git",
    demo: "https://drive.google.com/file/d/1PB4nJtZRwq1VkrwGOdwO3qIe_5RqIUOs/view?usp=sharing",
    demoLabel: "Download APK",
    link: "drive.google.com/file/d/1PB4nJtZRwq1VkrwGOdwO3qIe_5RqIUOs",
  },
  {
    title: "HR Management System",
    titleShort: "HR Management System",
    duration: "Mar 2024 – May 2024",
    image: "/hr-management-system.webp",
    description: "Next.js + FastAPI + MongoDB & Prisma‑based HR platform.",
    github: "https://github.com/Abdullahfalak007/Techloset-HR-Management.git",
    demo: "https://hrmanagementbyabdullah.vercel.app/",
    demoLabel: "Live Demo",
    link: "hrmanagementbyabdullah.vercel.app",
  },
  {
    title: "Delícias à Mesa – Recipe Finder",
    titleShort: "Recipe Finder",
    duration: "Feb 2024",
    image: "/recipe-finder.webp",
    description: "React front end consuming REST APIs, deployed on Vercel.",
    github: "https://github.com/Abdullahfalak007/Recipe-App.git",
    demo: "https://recipe-app-drab-seven.vercel.app/",
    demoLabel: "Live Demo",
    link: "recipe-app-drab-seven.vercel.app",
  },
  {
    title: "Bright Scholars School",
    titleShort: "Bright Scholars School",
    duration: "Sep 2024",
    image: "/Bright Scholars School (Webpage).webp",
    description:
      "Developed a frontend-based responsive learning management system (LMS).",
    github: "https://github.com/Abdullahfalak007/Bright-Scholars-School",
    demo: "https://abdullahfalak007.github.io/Bright-Scholars-School/",
    demoLabel: "Live Demo",
    link: "abdullahfalak007.github.io/Bright-Scholars-School",
  },
  {
    title: "Dealfinity - E-Commerce Web Application",
    titleShort: "Dealfinity",
    duration: "Mar 2024",
    image: "/DealFinity - Ecommerce Store.webp",
    description:
      "Developed an e-commerce platform using React, Redux, and Tailwind CSS.",
    github: "https://github.com/Abdullahfalak007/Dealfinity.git",
    demo: "https://clever-alpaca-4f51e7.netlify.app/",
    demoLabel: "Live Demo",
    link: "clever-alpaca-4f51e7.netlify.app",
  },
  {
    title: "Gmail Automation",
    titleShort: "Gmail Automation",
    duration: "2024",
    image: "/Gmail Automation.jpg",
    description:
      "Email extraction script from email message body using Python.",
    github:
      "https://github.com/Abdullahfalak007/Email-extraction-script-from-the-body-of-an-email-message-using-python",
    demo: null,
    demoLabel: null,
  },
  {
    title: "Lead tracker (Extension)",
    titleShort: "Lead Tracker",
    duration: "2024",
    image: "/Lead tracker (Extension).jpg",
    description:
      "Chrome extension for tracking and managing leads efficiently.",
    github: "https://github.com/Abdullahfalak007/Lead-Tracker-App.git",
    demo: null,
    demoLabel: null,
  },
];

// ============ CERTIFICATIONS ============
export interface Certification {
  title: string;
  issuer: string;
  duration: string;
  description: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Mobile App Development (E-rozgar)",
    issuer: "E-Rozgar Program, Punjab IT Board",
    duration: "Jan 2024 – Apr 2024",
    description:
      "Android & iOS development with hands‑on UI design and backend integration.",
  },
  {
    title: "Web and Mobile App Development (SMIT)",
    issuer: "Saylani Mass IT Training (SMIT)",
    duration: "Dec 2023 – Dec 2024",
    description:
      "Web/mobile development course using the MERN stack to build responsive apps.",
  },
  {
    title: "React Native (NAVTTC)",
    issuer: "NAVTTC (Govt of Pakistan)",
    duration: "Feb 2024 – Mar 2024",
    description:
      "Recognized by Pakistan's National Vocational and Technical Training Commission.",
  },
  {
    title: "IELTS Certification",
    issuer: "British Council — Band 7.0 (C1 Level)",
    duration: "Nov 2023 – Present",
    description:
      "Scored 7.0 bands, corresponding to a CEFR Level of C1, showing proficiency in English language.",
  },
  {
    title: "Techloset Bootcamp Completion",
    issuer: "TechloSet Solutions",
    duration: "Feb 2024 – May 2024",
    description:
      "Bootcamp completion certificate issued by CEO of Techloset Solutions, Naveed Sarwar.",
  },
];

// ============ SKILLS ============
export const SKILLS = [
  "React.js",
  "Next.js",
  "JavaScript (ES6+)",
  "TypeScript",
  "React Redux / Redux Toolkit",
  "HTML5",
  "CSS3",
  "Bootstrap",
  "Tailwind",
  "Material UI",
  "Daisy UI",
  "Node.js",
  "Express.js",
  "FastAPI",
  "REST API",
  "JWT",
  "OAuth",
  "Webhooks",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
  "Stripe",
  "Agora",
  "ElevenLabs (AI Voice)",
  "Google Login",
  "AI Assistants",
  "Chatbots",
  "D3.js",
  "Git",
  "GitHub",
  "GitLab",
  "Bitbucket",
];

// Categorized skills for website display
export const SKILLS_CATEGORIZED = {
  frontend: [
    "React.js",
    "Next.js 14",
    "TypeScript",
    "Redux Toolkit",
    "Tailwind CSS",
    "Framer Motion",
    "shadcn/ui",
  ],
  backend: ["Node.js", "FastAPI", "Express.js", "REST APIs", "GraphQL"],
  databases: [
    "PostgreSQL",
    "MongoDB",
    "Prisma",
    "Drizzle ORM",
    "Supabase",
    "Firebase",
  ],
  infrastructure: [
    "Redis",
    "BullMQ",
    "Docker",
    "Vercel",
    "AWS S3",
    "Git/GitHub",
  ],
  aiml: [
    "OpenAI GPT-4o",
    "Google Gemini",
    "Ideogram API",
    "Replicate",
    "HuggingFace",
  ],
};

// ============ LANGUAGES ============
export const LANGUAGES = [
  { language: "English", proficiency: "Full Professional Proficiency" },
  { language: "Urdu", proficiency: "Native or Bilingual Proficiency" },
];

// ============ META INFO ============
const currentYear = new Date().getFullYear();
const documentType = "Resume"; // "Resume" or "CV" - changes both filename and button text

export const META = {
  resumeVersion: "v2.0",
  documentType,
  resumeFileName: `Muhammad-Abdullah-${documentType}-${currentYear}.pdf`,
  greeting: "Hello, I'm",
  profileImage: "/placeholder.png",
  aboutImage: "/about-pic.jpg",
};
