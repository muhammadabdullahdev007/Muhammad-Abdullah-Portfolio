// ===========================================================
// IMAGES - Website-only image imports (can't be used in PDF)
// ===========================================================

// Company logos for Experience section
import strategistsHubLogo from "../../public/assets/strategistshub-logo.jpg";
import cybergenLogo from "../../public/assets/cybergen-logo.jpg";
import techlosetLogo from "../../public/assets/techloset-logo.jpg";
import freelanceLogo from "../../public/assets/freelance-logo.jpg";
import amazeworksLogo from "../../public/assets/amazeworks-logo.jpg";

// Certificate images
import mobileCert from "../../public/assets/mobile-dev-cert.jpg";
import webMobileCert from "../../public/assets/web-and-mobile-cert.jpg";
import reactNativeCert from "../../public/assets/react-native-cert.jpg";
import bootcampCert from "../../public/assets/bootcamp-cert.jpg";

// Company logo mapping by company name
export const COMPANY_LOGOS: Record<string, any> = {
  StrategistsHub: strategistsHubLogo,
  Cybergen: cybergenLogo,
  "TechloSet Solutions": techlosetLogo,
  "Fiverr | Upwork": freelanceLogo,
  "AmazeWorks Private Limited": amazeworksLogo,
};

// Certificate images for carousel (aligned with data.ts CERTIFICATIONS order)
export const CERTIFICATE_IMAGES = [
  {
    image: mobileCert,
    title: "Mobile App Development (E-rozgar)",
    description: "E-Rozgar Program, Punjab IT Board - Jan 30, 2021 – Apr 12, 2021",
  },
  {
    image: webMobileCert,
    title: "Web and Mobile App Development (SMIT)",
    description: "Saylani Mass IT Training (SMIT) - Dec 2019 – Dec 2020",
  },
  {
    image: reactNativeCert,
    title: "React Native (NAVTTC)",
    description: "NAVTTC (Govt of Pakistan) - Feb 26, 2021 – Mar 26, 2021",
  },
  {
    image: bootcampCert,
    title: "Techloset Bootcamp Completion",
    description: "TechloSet Solutions - Jan 03, 2019 - April 14, 2019",
  },
];

// Export individual logos for direct import if needed
export {
  strategistsHubLogo,
  cybergenLogo,
  techlosetLogo,
  freelanceLogo,
  amazeworksLogo,
  mobileCert,
  webMobileCert,
  reactNativeCert,
  bootcampCert,
};
