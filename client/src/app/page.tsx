import AboutSection from "@/components/Section/About/AboutSection";
import HeroSection from "@/components/Section/Hero/HeroSection";
import Project from "@/components/Section/Project/Project";
import Skills from "@/components/Section/Skills/Skills";

export default function Home() {

  return <main className="grid grid-cols-1 gap-24 md:gap-32 lg:gap-42 my-24 lg:my-42 ">

    <HeroSection />
    <AboutSection />
    <Project/>
    <Skills/>

  </main>;
}
