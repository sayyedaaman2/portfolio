import HeroSection from "@/components/Section/Hero/HeroSection";
import StackSection from "@/components/Section/Skills/Skills";
import ProjectSection from "@/components/Section/Project/Project";
import ArchitectureSection from "@/components/Section/Architecture/ArchitectureSection";
import ExperienceSection from "@/components/Section/Experience/ExperienceSection";
import AboutSection from "@/components/Section/About/AboutSection";
import ContactSection from "@/components/Section/Contact/Contact";

export default function Home() {
  return (
    <main className="bg-[#0B0F19] text-white overflow-hidden">
      <HeroSection />

      <StackSection />

      <ProjectSection />

      <ArchitectureSection />

      <ExperienceSection />

      <AboutSection />

      <ContactSection />
    </main>
  );
}