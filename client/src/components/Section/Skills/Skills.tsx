import SectionTitle from "@/components/common/SectionTitle";

const stackGroups = [
  {
    title: "Backend Systems",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "OAuth",
      "WebSockets",
    ],
  },
  {
    title: "Databases",
    items: [
      "MongoDB",
      "Mongoose",
      "MySQL",
      "MariaDB",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Infrastructure & Tooling",
    items: [
      "Docker",
      "Git",
      "Postman",
      "NPM",
    ],
  },
];

export default function StackSection() {
  return (
    <section
      id="stack"
      className="py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionTitle title="STACK" />

        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Technologies used to build scalable backend systems.
          </h2>

          <p className="text-lg text-[#9CA3AF] leading-relaxed">
            Focused on backend architecture, authentication systems,
            scalable APIs, database design, and production-focused
            engineering workflows using modern JavaScript technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {stackGroups.map((group) => (
            <div
              key={group.title}
              className="
                rounded-[32px]
                border border-white/10
                bg-[#111827]
                p-8
              "
            >
              <h3 className="text-2xl font-semibold text-white mb-8">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-full
                      border border-white/10
                      bg-white/5
                      px-4 py-2
                      text-sm
                      text-[#9CA3AF]
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}