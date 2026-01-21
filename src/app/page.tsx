import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";

// Dynamic imports for below-the-fold sections (improves initial page load)
const AboutSection = dynamic(() => import("@/components/AboutSection"), {
  loading: () => <SectionSkeleton />,
});
const SkillsSection = dynamic(() => import("@/components/SkillsSection"), {
  loading: () => <SectionSkeleton />,
});
const ExperienceSection = dynamic(
  () => import("@/components/ExperienceSection"),
  { loading: () => <SectionSkeleton /> }
);
const CertificationsSection = dynamic(
  () => import("@/components/CertificationsSection"),
  { loading: () => <SectionSkeleton /> }
);
const ProjectsSection = dynamic(() => import("@/components/ProjectsSection"), {
  loading: () => <SectionSkeleton />,
});
const HireMeSection = dynamic(() => import("@/components/HireMeSection"), {
  loading: () => <SectionSkeleton />,
});
const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  loading: () => <SectionSkeleton />,
});
const Footer = dynamic(() => import("@/components/Footer"));
const AIAssistantButton = dynamic(
  () => import("@/components/AIAssistantButton"),
  { ssr: false }
);

// Lightweight skeleton for loading states
function SectionSkeleton() {
  return (
    <div className="py-20 px-4 animate-pulse">
      <div className="max-w-6xl mx-auto">
        <div className="h-8 bg-muted/50 rounded w-48 mx-auto mb-4" />
        <div className="h-12 bg-muted/50 rounded w-64 mx-auto mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 bg-muted/30 rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <CertificationsSection />
      <ProjectsSection />
      <HireMeSection />
      <ContactSection />
      <Footer />
      <AIAssistantButton />
    </div>
  );
}
