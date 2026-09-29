import SectionTitle from "@/components/common/SectionTitle";

const stackGroups = [
  {
    title: "Languages",
    items: [
      "JavaScript (ES6+)",
      "TypeScript",
    ],
  },
  {
    title: "Backend Systems",
    items: [
      "Node.js",
      "Express.js",
      "REST API Design",
      "MVC Architecture",
      "Microservices",
      "JWT",
      "OAuth 2.0",
      "RBAC",
      "Passport.js",
      "Rate Limiting",
    ],
  },
  {
    title: "Databases",
    items: [
      "MongoDB",
      "Mongoose",
      "MySQL",
      "Schema Design",
      "Indexing",
      "Query Optimization",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS",
      "Docker",
      "CI/CD",
      "Redis",
      "PM2",
      "Nginx",
      "Linux",
    ],
  },
  {
    title: "Tools",
    items: [
      "Swagger/OpenAPI",
      "Postman",
      "Jest",
      "Git",
      "GitHub",
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            Technologies used to build scalable backend systems.
          </h2>

          <p className="text-lg text-muted leading-relaxed">
            Focused on backend architecture, authentication systems,
            scalable APIs, database design, and production-focused
            engineering workflows using modern JavaScript technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stackGroups.map((group) => (
            <div
              key={group.title}
              className="
                rounded-[32px]
                border border-[var(--border)]
                bg-surface
                p-8
              "
            >
              <h3 className="text-2xl font-semibold text-foreground mb-8">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-full
                      border border-[var(--border)]
                      bg-surface-secondary
                      px-4 py-2
                      text-sm
                      text-muted
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