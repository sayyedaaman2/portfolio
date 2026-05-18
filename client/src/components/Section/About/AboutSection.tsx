import Image from "next/image";

import SectionTitle from "@/components/common/SectionTitle";
import SocialLinks from "@/components/Social/SocialLinks";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionTitle title="ABOUT" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-16">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-white/10 bg-[#111827]">
              <Image
                src="/myimage.jpg"
                alt="Aaman Sayyed"
                fill
                priority
                className="object-cover grayscale hover:grayscale-0 transition duration-500"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-4 py-2 mb-8 text-sm text-[#9CA3AF]">
              <div className="w-2 h-2 rounded-full bg-[#10B981]" />
              Backend-focused engineer
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8 text-white">
              Designing scalable backend systems with production-focused thinking.
            </h2>

            <div className="space-y-6 text-[#9CA3AF] text-lg leading-relaxed">
              <p>
                I specialize in backend-focused full stack development using
                Node.js, Express.js, MongoDB, and Next.js to build modular APIs,
                authentication systems, and scalable web applications.
              </p>

              <p>
                My development approach prioritizes clean architecture,
                maintainability, secure request handling, reusable services, and
                production-ready engineering practices over trend-driven UI
                complexity.
              </p>

              <p>
                Currently focused on improving backend scalability, API
                architecture, Docker workflows, authentication systems, and
                performance optimization for modern web applications.
              </p>
            </div>

            <div className="mt-10">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}