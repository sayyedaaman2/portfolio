import SectionTitle from "@/components/common/SectionTitle";

const architectureCards = [
  {
    title: "JWT Authentication Flow",
    description:
      "Secure authentication pipeline using access tokens, refresh tokens, middleware validation, and protected route handling.",

    steps: [
      "Client Login",
      "Token Generation",
      "Refresh Token",
      "Protected Routes",
      "Middleware Validation",
    ],
  },

  {
    title: "MVC Backend Architecture",
    description:
      "Structured backend separation improving maintainability, scalability, and reusable business logic handling.",

    steps: [
      "Routes",
      "Controllers",
      "Services",
      "Database Layer",
      "Response Handling",
    ],
  },

  {
    title: "Request Lifecycle",
    description:
      "Optimized request processing pipeline with validation, centralized error handling, and modular service architecture.",

    steps: [
      "Request",
      "Validation",
      "Controller",
      "Service",
      "Database",
      "Response",
    ],
  },

  {
    title: "MongoDB Optimization",
    description:
      "Database optimization using indexing, schema structuring, query filtering, and scalable retrieval strategies.",

    steps: [
      "Indexed Queries",
      "Optimized Lookup",
      "Fast Retrieval",
      "Reduced Latency",
    ],
  },
];

export default function ArchitectureSection() {
  return (
    <section
      id="architecture"
      className="py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionTitle title="ARCHITECTURE" />

        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
            Backend architecture designed with scalability in mind.
          </h2>

          <p className="text-lg text-[#9CA3AF] leading-relaxed">
            Production-focused backend systems built using modular architecture,
            secure authentication flows, optimized request handling, and
            scalable database design patterns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {architectureCards.map((card) => (
            <article
              key={card.title}
              className="
                rounded-[32px]
                border border-white/10
                bg-[#111827]
                p-8
                hover:border-white/20
                transition-all duration-300
              "
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                {card.title}
              </h3>

              <p className="text-[#9CA3AF] leading-relaxed mb-8">
                {card.description}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                {card.steps.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-3"
                  >
                    <div
                      className="
                        px-4 py-3
                        rounded-2xl
                        border border-white/10
                        bg-[#0B0F19]
                        text-sm text-[#F9FAFB]
                      "
                    >
                      {step}
                    </div>

                    {index !== card.steps.length - 1 && (
                      <div className="w-6 h-[1px] bg-white/20" />
                    )}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}