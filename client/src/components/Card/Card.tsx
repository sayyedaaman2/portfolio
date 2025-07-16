import Image from "next/image"


interface CardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  projectUrl?: string;
  githubUrl?: string;
}

export default function Card({ 
  title = "Lorem ipsum dolor sit amet consectetur",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum, eaque in voluptatibus quasi deserunt corporis, doloribus accusamus distinctio eos animi necessitatibus mollitia qui cum sapiente? Quae vel doloremque earum!",
  imageUrl = "/Project-default.avif",
  projectUrl="https://www.google.com",
  githubUrl="https://www.github.com"
}: CardProps) {
  return (
    <article className="group border border-gray-200 dark:border-gray-700 p-4 rounded-lg hover:shadow-lg dark:lg:shadow-slate-50 transition-shadow duration-300">
      <div className="space-y-4">
        {/* Image Section */}
        <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
          <Image 
            src={imageUrl} 
            className="object-cover group-hover:scale-105 transition-transform duration-300" 
            fill 
            alt={title}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        
        {/* Content Section */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold line-clamp-2 text-gray-900 dark:text-gray-100">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 line-clamp-3 text-sm">
            {description}
          </p>
          
          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
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
      </div>
    </article>
  );
}