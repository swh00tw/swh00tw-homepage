import { getProjects } from "./getProjects";

export default function Page() {
  const projects = getProjects();

  return (
    <div>
      {projects.map((project) => {
        return (
          <div key={project.meta.displayName}>
            <h2>{project.meta.displayName}</h2>
          </div>
        );
      })}
    </div>
  );
}
