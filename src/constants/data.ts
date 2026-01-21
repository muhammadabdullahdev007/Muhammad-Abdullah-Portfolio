// ============================================================
// UNIFIED DATA - Single Source of Truth for Portfolio & PDF
// ============================================================

// ============ PERSONAL INFO ============
export const PERSONAL_INFO = {
  name: "Muhammad Abdullah",
  title: "Software Engineer | Lead Full Stack Developer (AI & SaaS Architect)",
  location: "Pakistan",
  city: "Lahore",
  email: "muhammadabdullahdev007@gmail.com",
  phone: "+92 343 3690525",
  portfolio: "https://muhammadabdullahdev007.vercel.app",
  linkedin: "https://www.linkedin.com/in/abdullahfalak007",
  github: "https://github.com/muhammadabdullahdev007",
};

// ============ SUMMARY / ABOUT ============
export const SUMMARY = `Software Engineer and Lead Full Stack Developer with 6+ years of professional experience (2019–2026) building scalable, enterprise-grade SaaS platforms and AI-powered products. Specialized in modern web architectures using React 18, Next.js 14, TypeScript, Node.js, PostgreSQL, and cloud-native tooling. 

Extensive hands-on experience integrating cutting-edge AI technologies including OpenAI GPT-4o, Google Gemini, Ideogram, Replicate, and ElevenLabs for conversational AI, image generation, and automation workflows. Proven expertise in multi-tenant system design, background job processing with BullMQ, real-time systems using WebSockets and Redis, and secure authentication using JWT & OAuth.

Recognized for technical leadership, system scalability, clean architecture, and mentoring junior engineers while collaborating cross-functionally with product, design, and AI research teams to deliver high-impact digital solutions.`;

export const SUMMARY_SHORT = `Lead Full Stack Developer & Software Engineer with 6+ years of experience delivering AI-powered SaaS platforms, scalable web/mobile applications, and enterprise systems. Expert in Next.js, Node.js, PostgreSQL, AI integrations, real-time systems, and cloud deployments.`;

// ============ EDUCATION ============
export const EDUCATION = {
  degree: "Bachelor of Computer Science",
  degreeShort: "BSCS",
  university: "Riphah International University",
  location: "Faisalabad",
  duration: "2015 – 2019",
  startDate: "10/2015",
  endDate: "10/2019",
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
  description: string;
  highlights: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    title: "Lead Software Engineer / Full Stack Architect",
    company: "StrategistsHub",
    location: "Lahore",
    duration: "Jul 2023 – Jan 2026",
    current: true,
    website: "https://strategisthub.com/",
    description:
      "Leading the architecture and development of enterprise-grade, multi-tenant SaaS platforms with deep AI integrations. Driving system scalability, AI workflows, and engineering best practices across teams using Next.js, Node.js, PostgreSQL, Redis, and BullMQ.",
    highlights: [
      "Architected and led development of AI-powered SaaS products with multi-tenant architectures.",
      "Integrated OpenAI, Google Gemini, Ideogram, and ElevenLabs for conversational AI, image generation, and automation.",
      "Implemented background job processing, Redis-based caching, and scalable API infrastructure.",
      "Mentored engineers, conducted code reviews, and collaborated with product & design leadership.",
    ],
  },
  {
    title: "Senior Full Stack Software Engineer",
    company: "Cybergen",
    companyShort: "Cybergen",
    location: "Faisalabad",
    duration: "Jun 2021 – Jun 2023",
    current: false,
    website: "https://cybergen.com",
    description:
      "Worked as a senior engineer on AI-driven web platforms and enterprise dashboards for US-based clients, focusing on performance, scalability, and data-intensive systems.",
    highlights: [
      "Designed and implemented scalable REST APIs and frontend architectures.",
      "Built AI-integrated dashboards and analytics tools using React, Node.js, and D3.js.",
      "Collaborated directly with international stakeholders and product owners.",
    ],
  },
  {
    title: "Full Stack Software Engineer",
    company: "TechloSet Solutions",
    companyShort: "TechloSet Solutions",
    location: "Faisalabad",
    duration: "Jan 2019 – May 2021",
    current: false,
    website: "https://techloset.com",
    description:
      "Started professional career building full-stack web and mobile applications, contributing to multiple client projects and internal platforms using modern JavaScript frameworks.",
    highlights: [
      "Developed production-ready applications using React, Next.js, Node.js, MongoDB, and Firebase.",
      "Implemented authentication systems with JWT, OAuth, and Google Login.",
      "Built real-time features using webhooks and Firebase.",
    ],
  },
  {
    title: "Independent Lead Full Stack Developer",
    company: "Fiverr | Upwork",
    companyShort: "Fiverr | Upwork",
    location: "Remote",
    duration: "Jan 2022 – Jan 2026",
    current: true,
    website: "https://www.upwork.com/freelancers/~01c0f8755d4b590d1a",
    description:
      "Providing end-to-end software engineering services for global clients, delivering AI-enabled web platforms, dashboards, and backend systems.",
    highlights: [
      "Delivered scalable React & Next.js applications with Tailwind CSS.",
      "Built FastAPI and Node.js backends with secure authentication and integrations.",
      "Integrated Stripe payments, AI assistants, chatbots, and voice AI solutions.",
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
  link?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Creator AI – Enterprise AI Product Ideation Platform",
    titleShort: "Creator AI",
    duration: "Jan 2024 – Present",
    image: "/nextfood.ai.webp",
    description:
      "Enterprise B2B SaaS platform featuring multi-model AI image generation, background job processing, and robust multi-tenant architecture.",
    github: null,
    demo: "https://creator-ai-test.onrender.com",
    demoLabel: "Live Demo",
    link: "creator-ai-test.onrender.com",
  },
  {
    title: "FatherForm – AI-Powered Family & Coaching Platform",
    titleShort: "FatherForm",
    duration: "Jun 2024 – Present",
    image: "/Fatherform.webp",
    description:
      "AI-first platform offering conversational coaching, relationship health scoring, and timeline-based personal guidance.",
    github: null,
    demo: "https://fatherform.app/",
    demoLabel: "Live Demo",
    link: "fatherform.app",
  },
  {
    title: "Dine With Foody – Restaurant Management SaaS",
    titleShort: "Dine With Foody",
    duration: "2023",
    image: "/dine-with-foody.webp",
    description:
      "Multi-role restaurant management system supporting admins, owners, employees, and customers.",
    github: "https://github.com/Abdullahfalak007/dinewithfoody",
    demo: "https://dinewithfoody.vercel.app/",
    demoLabel: "Live Demo",
    link: "dinewithfoody.vercel.app",
  },
  {
    title: "HR Management System",
    duration: "2022",
    image: "/hr-management-system.webp",
    description:
      "Enterprise HR platform built with Next.js, FastAPI, MongoDB, and Prisma.",
    github: "https://github.com/Abdullahfalak007/Techloset-HR-Management.git",
    demo: "https://hrmanagementbyabdullah.vercel.app/",
    demoLabel: "Live Demo",
    link: "hrmanagementbyabdullah.vercel.app",
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
    title: "Web & Mobile Application Development",
    issuer: "Saylani Mass IT Training (SMIT)",
    duration: "2023 – 2024",
    description:
      "Advanced MERN stack training focused on scalable, production-ready applications.",
  },
  {
    title: "Mobile App Development",
    issuer: "Punjab IT Board (E-Rozgar)",
    duration: "2024",
    description:
      "Hands-on Android & iOS development with real-world project delivery.",
  },
  {
    title: "IELTS Certification",
    issuer: "British Council — Band 7.0",
    duration: "2023",
    description:
      "CEFR C1 level proficiency demonstrating professional English communication skills.",
  },
];

// ============ SKILLS ============
export const SKILLS = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "FastAPI",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "BullMQ",
  "Docker",
  "Stripe",
  "AI Assistants",
  "Chatbots",
  "OpenAI GPT-4o",
  "Google Gemini",
  "Ideogram",
  "ElevenLabs",
  "D3.js",
  "WebSockets",
  "JWT",
  "OAuth",
  "Git",
  "AWS",
];

// ============ LANGUAGES ============
export const LANGUAGES = [
  { language: "English", proficiency: "Full Professional Proficiency" },
  { language: "Urdu", proficiency: "Native or Bilingual Proficiency" },
];

// ============ META INFO ============
const currentYear = new Date().getFullYear();
const documentType = "Resume";

export const META = {
  resumeVersion: "v3.0",
  documentType,
  resumeFileName: `Muhammad-Abdullah-${documentType}-${currentYear}.pdf`,
  greeting: "Hello, I'm",
  profileImage: "/placeholder.png",
  aboutImage: "/about-pic.jpg",
};
