import Image from "next/image";
import { ProjectT } from "@/types/common";

export default function Card({
  title,
  description,
  imageUrl,
  githubUrl,
  projectUrl,
  techStack,
}: ProjectT) {
  if (!title) return null;

  return (
    <article
      className="
        group
        flex flex-col
        rounded-[32px]
        border border-[var(--border)]
        bg-surface
        overflow-hidden
        transition-all duration-300
        hover:border-[var(--border-subtle)]
        hover:-translate-y-1
      "
    >
      {/* Preview */}
      <div className="relative aspect-video border-b border-[var(--border-subtle)] bg-background">
        <Image
          src={imageUrl || "/project/default.avif"}
          alt={title}
          fill
          className="object-cover opacity-90 group-hover:scale-[1.02] transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-8">
        {/* Title */}
        <h3 className="text-2xl font-semibold text-foreground mb-4">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted leading-relaxed mb-6">
          {description}
        </p>

        {/* Architecture Tags */}
        <div className="flex flex-wrap gap-3 mb-6">
          {[
            "REST API",
            "JWT Auth",
            "Modular Architecture",
          ].map((tag) => (
            <span
              key={tag}
              className="
                rounded-full
                border border-[var(--border)]
                bg-surface-secondary
                px-4 py-2
                text-sm
                text-muted
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Stack */}
        {techStack && techStack.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-8">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  border border-[var(--border)]
                  bg-surface-secondary
                  px-4 py-2
                  text-sm
                  text-muted
                "
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="mt-auto flex flex-wrap gap-4">
          {projectUrl && (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center
                rounded-2xl
                bg-[#3B82F6]
                hover:bg-[#2563EB]
                px-5 py-3
                text-sm font-medium text-white
                transition-colors
              "
            >
              View Project
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center
                rounded-2xl
                border border-[var(--border)]
                bg-surface-secondary
                hover:bg-surface
                px-5 py-3
                text-sm font-medium text-foreground
                transition-colors
              "
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}