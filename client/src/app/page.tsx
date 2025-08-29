import AboutSection from "@/components/Section/About/AboutSection";
import Contact from "@/components/Section/Contact/Contact";
import HeroSection from "@/components/Section/Hero/HeroSection";
import Project from "@/components/Section/Project/Project";
import Skills from "@/components/Section/Skills/Skills";

export default function Home() {

  return <main className="grid grid-cols-1 [&>*]:min-h-screen [&>*]:pt-16">
    <HeroSection />
    <AboutSection />
    <Project/>
    <Skills/>
    <Contact/>

  </main>;
}
