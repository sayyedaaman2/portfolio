import CardList from "@/components/Card/CardList";
import SectionTitle from "@/components/common/SectionTitle";

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionTitle title="PROJECTS" />

        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
            Backend systems built with production-focused architecture.
          </h2>

          <p className="text-lg text-[#9CA3AF] leading-relaxed">
            A collection of backend-focused projects showcasing scalable APIs,
            authentication systems, modular architecture, request lifecycle
            management, and production-ready engineering practices using
            Node.js, MongoDB, Express.js, Docker, and TypeScript.
          </p>
        </div>

        <CardList />
      </div>
    </section>
  );
}