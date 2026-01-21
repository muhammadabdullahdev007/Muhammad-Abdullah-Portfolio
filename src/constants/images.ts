// ============================================================
// IMAGES - Website-only image imports (can't be used in PDF)
// ============================================================

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

// Certificate images for carousel
export const CERTIFICATE_IMAGES = [
  {
    image: bootcampCert,
    title: "Bootcamp Completion Certificate",
    description: "Techloset Solutions - Full Stack Development Bootcamp",
  },
  {
    image: reactNativeCert,
    title: "React Native Certificate",
    description: "NAVTTC - React Native Development Certification",
  },
  {
    image: mobileCert,
    title: "Mobile App Development Certificate",
    description: "E-rozgar Training Program - Android & iOS Development",
  },
  {
    image: webMobileCert,
    title: "Web and Mobile App Development Certificate",
    description: "Saylani Mass IT Training - MERN Stack Development",
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
