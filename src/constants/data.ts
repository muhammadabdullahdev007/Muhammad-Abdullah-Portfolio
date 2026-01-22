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
export const SUMMARY = `Software Engineer and Lead Full Stack Developer with over 6 years of hands-on professional experience (2019 – Present) designing, building, and scaling production-grade SaaS platforms and AI-powered digital products.

Strong background in full-stack engineering using React 18, Next.js 14, TypeScript, Node.js, PostgreSQL, and cloud-native architectures. Extensive experience designing modular frontend systems, scalable backend services, and secure APIs used by real-world users across multiple domains.

Specialized in AI-driven product development with deep, production-level integrations of OpenAI GPT-4o, Google Gemini, Ideogram, Replicate, and ElevenLabs for conversational AI, generative image pipelines, and intelligent automation. Proven expertise in multi-tenant SaaS architecture, background job processing with BullMQ, Redis-based caching, and real-time systems using WebSockets.

Known for technical leadership, system ownership, clean architecture, and mentoring developers while collaborating closely with product managers, designers, and AI teams to deliver reliable, scalable, and business-aligned solutions.`;

export const SUMMARY_SHORT = `Lead Full Stack Developer & Software Engineer with 6+ years of experience delivering scalable SaaS platforms and AI-powered products using Next.js, Node.js, PostgreSQL, and modern AI integrations.`;

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
      "Leading end-to-end architecture and development of enterprise-grade, multi-tenant SaaS platforms with AI-first capabilities. Responsible for technical decision-making, system scalability, AI workflow design, and maintaining engineering standards across teams.",
    highlights: [
      "Owned system architecture for large-scale SaaS products serving multiple tenants and organizations.",
      "Designed and integrated AI workflows using OpenAI GPT-4o, Google Gemini, Ideogram, and ElevenLabs.",
      "Implemented background processing pipelines using BullMQ and Redis for high-throughput workloads.",
      "Led frontend architecture with Next.js, performance optimization, and design-system consistency.",
      "Mentored developers, reviewed code, and collaborated with product, design, and AI research teams.",
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
      "Worked as a senior contributor on data-intensive and AI-enabled web platforms for international clients, focusing on performance, maintainability, and scalable system design.",
    highlights: [
      "Designed and developed scalable REST APIs and frontend systems used in production environments.",
      "Built analytics dashboards and data visualizations using React, Node.js, and D3.js.",
      "Integrated AI-powered features into business workflows and reporting tools.",
      "Collaborated directly with US-based stakeholders and translated business requirements into technical solutions.",
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
      "Started professional software engineering career working on full-stack web and mobile applications, gaining strong foundations in modern JavaScript frameworks and backend development.",
    highlights: [
      "Developed and deployed full-stack applications using React, Next.js, Node.js, MongoDB, and Firebase.",
      "Implemented authentication and authorization using JWT, OAuth, and Google Login.",
      "Built real-time features using webhooks, Firebase, and event-driven architectures.",
      "Worked closely with senior engineers to follow clean code and scalable design practices.",
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
      "Providing full-cycle software engineering services for global clients, delivering production-ready web applications, SaaS platforms, and AI-integrated systems.",
    highlights: [
      "Delivered scalable React and Next.js applications with modern UI/UX and performance optimization.",
      "Built secure and reliable backends using Node.js and FastAPI.",
      "Integrated Stripe payments, authentication systems, AI assistants, chatbots, and voice AI solutions.",
      "Managed projects independently, from requirements gathering to deployment and post-launch support.",
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
      "Enterprise B2B SaaS platform featuring multi-model AI image generation, background job processing, and scalable multi-tenant architecture.",
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
      "AI-first platform providing conversational coaching, relationship health scoring, and timeline-based guidance using LLMs.",
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
      "Advanced MERN stack training with focus on scalable, production-ready applications.",
  },
  {
    title: "Mobile App Development",
    issuer: "Punjab IT Board (E-Rozgar)",
    duration: "2024",
    description:
      "Hands-on Android and iOS development with real-world project delivery.",
  },
  {
    title: "IELTS Certification",
    issuer: "British Council — Band 7.0",
    duration: "2023",
    description:
      "CEFR C1 level English proficiency demonstrating professional communication skills.",
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
  resumeVersion: "v3.1",
  documentType,
  resumeFileName: `Muhammad-Abdullah-${documentType}-${currentYear}.pdf`,
  greeting: "Hello, I'm",
  profileImage: "/placeholder.png",
  aboutImage: "/about-pic.jpg",
};
