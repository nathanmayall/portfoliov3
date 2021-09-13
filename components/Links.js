import ProjectCard from "./projects/ProjectCard";
import projects from "./projects";

export default function Links() {
  return (
    <div className="flex flex-wrap items-center justify-center w-full h-full p-3 m-auto space-y-3 align-middle lg:space-x-8 md:w-auto md:place-content-around">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
