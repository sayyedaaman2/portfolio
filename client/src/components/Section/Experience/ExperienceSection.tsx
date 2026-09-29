import SectionTitle from "@/components/common/SectionTitle";

const experiences = [
  {
    role: "Backend Developer",
    company: "Awwaltech",
    location: "Noida, India",
    duration: "Oct 2025 — Present",

    points: [
      "Developed and maintained 10+ RESTful APIs using Node.js and Express.js, supporting core platform features with response times under 200ms.",

      "Optimized MongoDB schemas with compound indexes, reducing average query execution time by 35%.",

      "Implemented JWT, OAuth 2.0, and RBAC with input validation across all backend endpoints.",

      "Integrated Redis caching and rate limiting middleware, reducing invalid API calls by 40%.",

      "Documented all endpoints with Swagger/OpenAPI and collaborated with a 5-member engineering team on production backend modules.",

      "Containerized services with Docker and deployed via CI/CD pipelines to AWS.",
    ],
  },

  {
    role: "Backend Developer",
    company: "Support Lets Talk",
    location: "Delhi, India (Remote)",
    duration: "Apr 2023 — Sept 2023",

    points: [
      "Migrated a legacy Laravel backend to Node.js and Express.js, reducing codebase complexity by 30%.",

      "Built 8+ RESTful APIs with centralized error handling, request validation, and MVC architecture.",

      "Optimized MongoDB queries using compound indexing, reducing average response time by 40% for high-traffic endpoints.",

      "Implemented Passport.js and OAuth 2.0 authentication across all API routes.",
    ],
  },

  {
    role: "Backend Developer Intern",
    company: "ResumerPro",
    location: "Noida, India (Remote)",
    duration: "Jan 2023 — Mar 2023",

    points: [
      "Developed backend services for a Q&A platform serving 500+ users using Node.js and MongoDB.",

      "Built REST APIs following MVC architecture with JWT authentication and role-based access control.",

      "Collaborated with a frontend team to deliver end-to-end features within sprint deadlines.",
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
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-foreground mb-6">
            Production backend engineering experience.
          </h2>

          <p className="text-lg text-muted leading-relaxed">
            Experience designing scalable REST APIs, authentication systems,
            optimized database architectures, caching layers, and production-ready
            backend infrastructure using Node.js, MongoDB, Docker, Redis, and CI/CD workflows.
          </p>
        </div>

        <div className="relative border-l border-[var(--border)] pl-8 space-y-10">
          {experiences.map((experience) => (
            <article
              key={experience.company}
              className="relative"
            >
              <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-[#3B82F6]" />

              <div
                className="
                  rounded-[32px]
                  border border-[var(--border)]
                  bg-surface
                  p-8
                "
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground">
                      {experience.role}
                    </h3>

                    <p className="text-muted mt-2">
                      {experience.company}
                    </p>

                    <p className="text-sm text-muted-dim mt-1">
                      {experience.location}
                    </p>
                  </div>

                  <div
                    className="
                      w-fit
                      rounded-full
                      border border-[var(--border)]
                      bg-surface-secondary
                      px-4 py-2
                      text-sm text-muted
                    "
                  >
                    {experience.duration}
                  </div>
                </div>

                <ul className="space-y-4">
                  {experience.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-muted leading-relaxed"
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