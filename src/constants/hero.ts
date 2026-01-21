// ============================================================
// HERO CONSTANTS - Re-exports from unified data
// ============================================================

import { Github, Linkedin, Youtube, Facebook, Instagram } from "lucide-react";
import { PERSONAL_INFO, META } from "./data";

export const HERO_PROFILE_IMAGE = META.profileImage;

export const HERO_SOCIAL_LINKS = [
  {
    icon: Linkedin,
    url: PERSONAL_INFO.linkedin,
    label: "LinkedIn",
  },
  {
    icon: Github,
    url: PERSONAL_INFO.github,
    label: "GitHub",
  },
  {
    icon: Youtube,
    url: PERSONAL_INFO.youtube,
    label: "YouTube",
  },
  {
    icon: Facebook,
    url: PERSONAL_INFO.facebook,
    label: "Facebook",
  },
  {
    icon: Instagram,
    url: PERSONAL_INFO.instagram,
    label: "Instagram",
  },
];

export const HERO_RESUME_PATH = "./assets/Muhammad-Abdullah-Resume-2025";

export const HERO_NAME = PERSONAL_INFO.name;
export const HERO_TITLE = PERSONAL_INFO.title;
export const HERO_GREETING = META.greeting;
