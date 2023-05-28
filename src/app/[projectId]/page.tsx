import projects, { Project } from "@/app/[projectId]/projects";
import Link from "next/link";
import clsx from "clsx";
import { MdKeyboardArrowLeft } from "react-icons/md";

export async function generateStaticParams() {
  const paths = Object.keys(projects).map((id) => ({
    projectId: id,
  }));
  return paths;
}

function ProjectHeading(props: { readonly project: Project }) {
  const { project } = props;
  const getBody = ({ hasLink }: { readonly hasLink: boolean }) => (
    <div className={clsx("flex", "items-center", "gap-x-2")}>
      <div className={clsx(hasLink ? "hover:underline" : null)}>
        {project.name}
      </div>
      <div className="text-[22px] hover:no-underline">
        {project.link === null ? null : "↗"}
      </div>
    </div>
  );

  if (project.link === null) {
    return getBody({
      hasLink: false,
    });
  }
  return (
    <Link href={project.link} target="_blank">
      {getBody({
        hasLink: true,
      })}
    </Link>
  );
}

interface ProjectPageProps {
  params: {
    projectId: string;
  };
}

export default function Page(props: ProjectPageProps) {
  const { params } = props;
  const { projectId } = params;
  const project = projects[projectId];
  return (
    <div className="h-[100svh] flex justify-center items-center">
      <div className="w-[80%] lg:w-[60%] flex flex-col">
        <div
          className={clsx("mt-0", "lg:mt-0", "text-[30px]", "font-semibold")}
        >
          <Link href="/">
            <div
              className={clsx(
                "text-[#00000050]",
                "font-normal",
                "text-[20px]",
                "flex",
                "items-center"
              )}
            >
              <MdKeyboardArrowLeft />
              Go Back
            </div>
          </Link>
          <ProjectHeading project={project} />
        </div>
      </div>
    </div>
  );
}
