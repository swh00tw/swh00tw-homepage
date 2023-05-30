import projects, { Project } from "@/app/[projectId]/projects";
import Link from "next/link";
import clsx from "clsx";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export async function generateStaticParams() {
  const paths = Object.keys(projects).map((id) => ({
    projectId: id,
  }));
  return paths;
}

function ProjectHeading(props: { readonly project: Project }) {
  const { project } = props;

  const body = (
    <div className="flex items-center gap-x-2 w-fit">
      <div className={clsx(project.link !== null ? "hover:underline" : null)}>
        {project.name}
      </div>
      <div className="text-[22px] hover:no-underline">
        {project.link === null ? null : "↗"}
      </div>
      {project.github !== null ? (
        <Link href={project.github} target="_blank" className="text-[22px]">
          <FaGithub />
        </Link>
      ) : null}
    </div>
  );

  return (
    <div className={clsx("w-fit")}>
      {project.link ? (
        <Link href={project.link} target="_blank">
          {body}
        </Link>
      ) : (
        body
      )}
    </div>
  );
}

function ProjectStackTag(props: { name: string }) {
  const { name } = props;

  return (
    <div
      className={clsx(
        "flex",
        "items-center",
        "text-[14px]",
        "bg-third",
        "border-2",
        "border-black",
        "rounded-[4px]",
        "px-1"
      )}
    >
      <span>#</span>
      {name}
    </div>
  );
}

interface ProjectPageProps {
  params: {
    projectId: string;
  };
}
export async function generateMetadata(props: ProjectPageProps) {
  const {
    params: { projectId },
  } = props;
  const project = projects[projectId];
  return {
    title: `Frank Hsu - ${project.name}`,
    description: `Story of project: ${project.name}`,
  };
}

export default function Page(props: ProjectPageProps) {
  const { params } = props;
  const { projectId } = params;
  const project = projects?.[projectId];
  if (!project) {
    return null;
  }
  return (
    <div className="my-[15vh] md:my-0 min-h-[100vh] flex justify-center items-center">
      <div className="w-[80%] lg:w-[70%] flex flex-col">
        <div className={clsx("text-[30px]", "font-semibold")}>
          <div
            className={clsx(
              "text-[#00000050]",
              "font-normal",
              "text-[20px]",
              "w-fit"
            )}
          >
            <Link href="/#project" scroll={false} className="flex items-center">
              <MdKeyboardArrowLeft />
              Go Back
            </Link>
          </div>
          <ProjectHeading project={project} />
          <div
            className={clsx(
              "w-full",
              "flex",
              "flex-col",
              "lg:flex-row",
              "lg:justify-between"
            )}
          >
            <div
              className={clsx(
                "w-full",
                "lg:w-[35%]",
                "font-normal",
                "text-[16px]",
                "pr-8"
              )}
            >
              <div className={clsx("flex", "flex-wrap", "gap-1", "lg:mt-8")}>
                {project.stack.map((s) => (
                  <ProjectStackTag name={s} key={s} />
                ))}
              </div>
              {project.description.map((text, index) => (
                <div key={`${index}`} className={clsx("py-4")}>
                  <p>{text}</p>
                </div>
              ))}
            </div>
            <div className={clsx("w-full", "lg:w-[65%]")}>
              <Image
                src={project.imagePath}
                alt={`${project.name}`}
                width={2587}
                height={1618}
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
