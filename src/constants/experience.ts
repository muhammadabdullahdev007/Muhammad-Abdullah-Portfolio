// ============================================================
// EXPERIENCE CONSTANTS - Re-exports from unified data
// ============================================================

import { EXPERIENCES as BASE_EXPERIENCES, CERTIFICATIONS } from "./data";
import { COMPANY_LOGOS, CERTIFICATE_IMAGES } from "./images";

// Enhanced experiences with logos for website display
export const EXPERIENCES = BASE_EXPERIENCES.map((exp) => ({
  ...exp,
  logo: COMPANY_LOGOS[exp.company] || null,
}));

// Re-export certifications
export const CERTIFICATES = CERTIFICATIONS.map((cert) => ({
  title: cert.title,
  duration: cert.duration,
  description: cert.description,
}));

// Re-export certificate images
export { CERTIFICATE_IMAGES };
