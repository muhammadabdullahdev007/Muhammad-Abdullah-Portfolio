// ============================================================
// ABOUT CONSTANTS - Re-exports from unified data
// ============================================================

import { Briefcase, GraduationCap, Code2, Brain } from "lucide-react";
import { SUMMARY, EDUCATION, META } from "./data";

export const ABOUT_PROFILE_IMAGE = META.aboutImage;

export const ABOUT_FLOATING_STATS = [
  {
    icon: Code2,
    label: "6+ Years",
    sublabel: "Experience",
    className:
      "absolute -top-6 -right-6 bg-gradient-primary rounded-xl p-4 shadow-glow",
    iconClass: "w-6 h-6 text-primary-foreground mx-auto mb-1",
    labelClass: "text-xs text-primary-foreground font-semibold",
    sublabelClass: "text-xs text-primary-foreground/80",
    animate: { y: [0, -15, 0] },
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
  {
    icon: Brain,
    label: "Full Stack",
    sublabel: "Developer",
    className:
      "absolute -bottom-6 -left-6 bg-gradient-hero rounded-xl p-4 shadow-elegant",
    iconClass: "w-6 h-6 text-hero-foreground mx-auto mb-1",
    labelClass: "text-xs text-hero-foreground font-semibold",
    sublabelClass: "text-xs text-hero-foreground/80",
    animate: { y: [0, 15, 0] },
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1.5,
    },
  },
];

export const ABOUT_CARDS = [
  {
    icon: Briefcase,
    title: "Experience",
    details: [
      { label: "Full Stack Development", value: "6+ Years" },
      { label: "MERN Stack", value: "6+ Years" },
      { label: "SaaS & AI Integration", value: "3+ Years" },
    ],
  },
  {
    icon: GraduationCap,
    title: "Education",
    details: [
      { label: EDUCATION.degree, value: `(${EDUCATION.degreeShort})` },
      { label: EDUCATION.university, value: EDUCATION.duration },
      { label: "CGPA", value: EDUCATION.cgpa },
    ],
  },
];

export const ABOUT_DESCRIPTION = SUMMARY;
