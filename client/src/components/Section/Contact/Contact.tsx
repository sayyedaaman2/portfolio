import SectionTitle from "@/components/common/SectionTitle";
import ContactForm from "./ContactForm";
import SocialLinks from "@/components/Social/SocialLinks";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 lg:py-32"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <SectionTitle title="CONTACT" />

        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-4 py-2 mb-8 text-sm text-[#9CA3AF]">
            <div className="w-2 h-2 rounded-full bg-[#10B981]" />
            Available for backend engineering opportunities
          </div>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8 text-white">
            Let’s build scalable systems.
          </h2>

          <p className="text-lg md:text-xl text-[#9CA3AF] leading-relaxed">
            Open to backend engineering roles, scalable API development,
            authentication infrastructure, and production-focused full stack
            systems using Node.js, MongoDB, and modern web technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10">
          {/* Left */}
          <div className="bg-[#111827] border border-white/10 rounded-[32px] p-8">
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Contact Information
            </h3>

            <div className="space-y-6 text-[#9CA3AF]">
              <div>
                <p className="text-sm uppercase tracking-wider text-[#6B7280] mb-2">
                  Email
                </p>

                <p className="text-white">
                  sayyedaaman9@gmail.com
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wider text-[#6B7280] mb-2">
                  Current Focus
                </p>

                <p className="text-white">
                  Backend Architecture & Scalable APIs
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wider text-[#6B7280] mb-2">
                  Preferred Work
                </p>

                <p className="text-white">
                  Backend Engineering • Full Stack Systems
                </p>
              </div>
            </div>

            <div className="mt-10">
              <SocialLinks />
            </div>
          </div>

          {/* Right */}
          <div className="bg-[#111827] border border-white/10 rounded-[32px] p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}