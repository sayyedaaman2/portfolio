import SectionTitle from "@/components/common/SectionTitle";

const experiences = [
  {
    role: "Back-end Developer",
    company: "Awwaltech",
    duration: "Oct 2023 — Present",

    points: [
      "Architected and maintained 10+ RESTful APIs using Node.js and Express.js with response times consistently under 200ms.",

      "Designed MongoDB schemas with compound indexing strategies, reducing average query execution time by 35%.",

      "Implemented JWT authentication, OAuth 2.0, RBAC authorization, and request validation across production APIs.",

      "Integrated Redis caching, rate limiting, and middleware validation, reducing invalid API requests by 40% and improving throughput.",

      "Built Swagger/OpenAPI documentation for backend endpoints, improving API discoverability and onboarding.",

      "Containerized backend services with Docker and deployed scalable production infrastructure using CI/CD workflows.",

      "Collaborated with engineering teams to deliver scalable backend modules across production environments.",
    ],
  },

  {
    role: "Back-end Developer (Node.js)",
    company: "Support Lets Talk",
    duration: "Apr 2023 — Sept 2023",

    points: [
      "Migrated a legacy Laravel backend architecture to Node.js and Express.js, reducing codebase complexity by 30%.",

      "Built 8+ RESTful APIs using modular MVC architecture with centralized validation and error handling.",

      "Optimized MongoDB query performance with compound indexing, reducing API response latency by 40% for high-traffic endpoints.",

      "Secured authentication flows using Passport.js and OAuth 2.0 across protected backend services.",
    ],
  },

  {
    role: "Back-end Developer Intern (Node.js)",
    company: "ResumerPro",
    duration: "Jan 2023 — Mar 2023",

    points: [
      "Led backend development of a Stack Overflow-inspired Q&A platform serving 500+ users using Node.js and MongoDB.",

      "Architected scalable REST APIs following MVC principles for independent frontend/backend deployment.",

      "Implemented JWT authentication and role-based access control for multi-tier user management.",

      "Collaborated with React.js and Next.js frontend teams to deliver production-ready features within sprint timelines.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-24 lg:py-32"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <SectionTitle title="EXPERIENCE" />

        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
            Production backend engineering experience.
          </h2>

          <p className="text-lg text-[#9CA3AF] leading-relaxed">
            Experience designing scalable REST APIs, authentication systems,
            optimized database architectures, caching layers, and production-ready
            backend infrastructure using Node.js, MongoDB, Docker, Redis, and CI/CD workflows.
          </p>
        </div>

        <div className="relative border-l border-white/10 pl-8 space-y-10">
          {experiences.map((experience) => (
            <article
              key={experience.company}
              className="relative"
            >
              <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-[#3B82F6]" />

              <div
                className="
                  rounded-[32px]
                  border border-white/10
                  bg-[#111827]
                  p-8
                "
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {experience.role}
                    </h3>

                    <p className="text-[#9CA3AF] mt-2">
                      {experience.company}
                    </p>
                  </div>

                  <div
                    className="
                      w-fit
                      rounded-full
                      border border-white/10
                      bg-white/5
                      px-4 py-2
                      text-sm text-[#9CA3AF]
                    "
                  >
                    {experience.duration}
                  </div>
                </div>

                <ul className="space-y-4">
                  {experience.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-[#9CA3AF] leading-relaxed"
                    >
                      <span className="text-[#06B6D4] mt-1">
                        •
                      </span>

                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}