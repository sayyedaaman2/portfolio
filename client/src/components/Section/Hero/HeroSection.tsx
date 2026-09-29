import CTAButton from "../../CTAButton";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-[var(--border)] bg-surface rounded-full px-4 py-2 mb-8 text-sm text-muted">
              <div className="w-2 h-2 rounded-full bg-[#10B981]" />
              Backend-focused full stack engineer
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight mb-8 text-foreground">
              Building scalable backend systems with Node.js architecture.
            </h1>

            <p className="text-lg md:text-xl text-muted leading-relaxed mb-10 max-w-2xl">
              Backend Developer with 1.6+ years of experience building RESTful APIs,
              authentication systems, and production-ready backends using Node.js,
              Express.js, MongoDB, Redis, Docker, TypeScript, and AWS.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {[
                "REST APIs",
                "JWT / OAuth 2.0",
                "MongoDB",
                "Redis",
                "Docker",
                "AWS",
                "Node.js",
                "TypeScript",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full border border-[var(--border)] bg-surface text-sm text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <CTAButton href="#projects" variant="primary">
                View Projects
              </CTAButton>

              <CTAButton href="/resume.pdf" download>
                Download Resume
              </CTAButton>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="bg-surface border border-[var(--border)] rounded-[32px] p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>

              <div className="space-y-5 font-mono text-sm">
                <div className="bg-background border border-[var(--border-subtle)] rounded-2xl p-4">
                  <p className="text-[#06B6D4] mb-2">
                    POST /api/auth/login
                  </p>

                  <p className="text-muted">
                    JWT + OAuth 2.0 — authenticated in 42ms
                  </p>
                </div>

                <div className="bg-background border border-[var(--border-subtle)] rounded-2xl p-4">
                  <p className="text-[#10B981] mb-2">
                    MongoDB Compound Index
                  </p>

                  <p className="text-muted">
                    Query time reduced by 35–45%
                  </p>
                </div>

                <div className="bg-background border border-[var(--border-subtle)] rounded-2xl p-4">
                  <p className="text-[#3B82F6] mb-2">
                    Redis Cache + Rate Limiter
                  </p>

                  <p className="text-muted">
                    Invalid API calls reduced by 40%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}