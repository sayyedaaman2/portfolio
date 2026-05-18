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
        border border-white/10
        bg-[#111827]
        overflow-hidden
        transition-all duration-300
        hover:border-white/20
        hover:-translate-y-1
      "
    >
      {/* Preview */}
      <div className="relative aspect-video border-b border-white/5 bg-[#0B0F19]">
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
        <h3 className="text-2xl font-semibold text-white mb-4">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[#9CA3AF] leading-relaxed mb-6">
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
                border border-[#3B82F6]/20
                bg-[#3B82F6]/10
                px-4 py-2
                text-sm
                text-[#BFDBFE]
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
                  border border-white/10
                  bg-white/5
                  px-4 py-2
                  text-sm
                  text-[#9CA3AF]
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
                border border-white/10
                bg-white/5
                hover:bg-white/10
                px-5 py-3
                text-sm font-medium text-white
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