import { getProjects } from "./getProjects";
import { Link } from "next-view-transitions";

export default function Page() {
  const projects = getProjects();

  return (
    <div>
      {projects.map((project) => {
        return (
          <Link
            key={project.meta.displayName}
            href={`/projects/${project.slug}`}
          >
            <h2>{project.meta.displayName}</h2>
          </Link>
        );
      })}
    </div>
  );
}
