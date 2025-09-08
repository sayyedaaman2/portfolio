'use client'
import Card from "@/components/Card/Card";
import { useEffect, useState } from "react";
import ProjectList from '@/data/projects.json'
import { ProjectT } from "@/types/common";

export default function CardList() {
    const [projects, setProjects] = useState<ProjectT[]>([]);
    const [filter, setFilter] = useState<"all" | "frontend" | "backend">("all");

    useEffect(() => {
        setProjects(ProjectList);
    }, []);

    const filteredProjects = projects.filter((project) => {
        if (filter === "all") return true;
        return project.category === filter;
    });

    return (
        <div className="space-y-6">
            {/* Filter Buttons */}
            <div className="flex items-center gap-3">
                {["all", "frontend", "backend"].map((f) => (
                    <button
                        key={f}
                        onClick={() => setFilter(f as typeof filter)}
                        className={`
                            px-4 py-2 lg:px-4 lg:py-2 rounded-xl text-sm font-medium transition text-nowrap
                            ${filter === f
                                ? "bg-blue-600 text-white dark:bg-blue-500"
                                : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                            }
                        `}
                    >
                        {f === "all" ? "All" : f === "frontend" ? "Front End" : "Back End"}
                    </button>
                ))}
            </div>

            {/* Project List */}
            <div className="project_list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
                {filteredProjects.map((project: ProjectT, key) => (
                    <Card {...project} key={key} />
                ))}
            </div>
        </div>
    );
}
