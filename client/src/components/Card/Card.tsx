import { ProjectT } from "@/types/common";
import Image from "next/image";

const TECH_COLOR_MAP: Record<string, string> = {
  "node.js": "bg-emerald-100 text-emerald-800 dark:bg-emerald-800 dark:text-emerald-100",
  "node": "bg-emerald-100 text-emerald-800 dark:bg-emerald-800 dark:text-emerald-100",
  "javascript": "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100",
  "typescript": "bg-sky-100 text-sky-800 dark:bg-sky-800 dark:text-sky-100",
  "react": "bg-sky-100 text-sky-800 dark:bg-sky-800 dark:text-sky-100",
  "next.js": "bg-sky-100 text-sky-800 dark:bg-sky-800 dark:text-sky-100",
  "express.js": "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
  "express": "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
  "mongodb": "bg-emerald-100 text-emerald-800 dark:bg-emerald-800 dark:text-emerald-100",
  "mongoose": "bg-emerald-100 text-emerald-800 dark:bg-emerald-800 dark:text-emerald-100",
  "socket.io": "bg-indigo-100 text-indigo-800 dark:bg-indigo-800 dark:text-indigo-100",
  "html5": "bg-orange-100 text-orange-800 dark:bg-orange-800 dark:text-orange-100",
  "css3": "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100",
  "tailwind": "bg-cyan-100 text-cyan-800 dark:bg-cyan-800 dark:text-cyan-100",
  // fallback handled below
};

export default function Card({ title, description, imageUrl, githubUrl, projectUrl, techStack }: ProjectT) {
  if (!title) return null;

  return (
    <article className="group flex flex-col h-full border border-gray-200 dark:border-gray-700 p-4 rounded-lg transition-shadow duration-300 hover:shadow-lg">
      {/* IMAGE */}
      <div className="relative aspect-video overflow-hidden rounded-md bg-gray-100 dark:bg-gray-800">
        <Image
          src={imageUrl || "/project/default.avif"}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* CONTENT (flex-col, grows) */}
      <div className="flex flex-col flex-1 mt-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 line-clamp-2">
          {title}
        </h2>

        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-3">
          {description}
        </p>

        {/* TECH BADGES */}
        {techStack && techStack.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {techStack.map((tech, idx) => {
              const key = String(tech).toLowerCase().trim();
              const classes = TECH_COLOR_MAP[key] ?? "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
              return (
                <span key={idx} className={`px-2 py-1 text-xs font-medium rounded-md ${classes}`}>
                  {tech}
                </span>
              );
            })}
          </div>
        )}

        {/* ACTIONS: mt-auto pushes this block to the bottom */}
        <div className="mt-auto pt-4 flex gap-3">
          {projectUrl && (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-600 text-white rounded-md hover:bg-slate-700 transition-colors text-sm font-medium"
            >
              View Project
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm font-medium"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
