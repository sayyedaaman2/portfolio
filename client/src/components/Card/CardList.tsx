import Card from "@/components/Card/Card";
import ProjectList from "@/data/projects.json";

export default function CardList() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {ProjectList.map((project) => (
        <Card
          key={project.title}
          {...project}
        />
      ))}
    </div>
  );
}