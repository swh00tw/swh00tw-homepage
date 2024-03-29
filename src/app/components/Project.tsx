import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

function ProjectCard(props: {
  readonly title: string;
  readonly imgSrc: string;
  readonly projectId: string;
}) {
  const { imgSrc, title, projectId } = props;
  return (
    <Link href={`${projectId}`}>
      <div className={clsx("flex", "flex-col", "cursor-pointer", "relative")}>
        <div
          className={clsx(
            "absolute",
            "top-0",
            "left-0",
            "aspect-project-card",
            "bg-black",
            "w-full",
            "rounded-2xl"
          )}
        />
        <div
          className={clsx(
            "relative",
            "aspect-project-card",
            "hover:-translate-y-1",
            "hover:translate-x-1",
            "duration-200",
            "ease-in-out",
            "border-black",
            "border-2",
            "rounded-2xl",
            "overflow-hidden"
          )}
        >
          <Image
            src={imgSrc}
            fill
            alt={`${title}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
            className="left-0 object-cover"
            quality={100}
          />
        </div>
        <div className={clsx("text-[14px]", "mt-1")}>{title}</div>
      </div>
    </Link>
  );
}

export default function ProjectPage() {
  return (
    <div className="lg:h-[100lvh] flex justify-center items-center w-[80vw] lg:w-[60vw]">
      <div className={clsx("flex", "flex-col", "lg:max-h-[80svh]", "py-[5vh]")}>
        <div
          className={clsx("mt-0", "lg:mt-0", "text-[30px]", "font-semibold")}
        >
          Projects
        </div>
        <div
          className={clsx(
            "md:mt-8",
            "grid",
            "grid-cols-1",
            "md:grid-cols-2",
            "lg:grid-cols-3",
            "lg:grid-rows-2",
            "gap-6"
          )}
        >
          <div
            className={"md:col-span-2 lg:col-span-1 lg:row-span-2 lg:pr-[8%]"}
          >
            <p>
              Side projects are always the best way to explore new technologies
              and showcase creativity and skills. 🧑‍🔬🧪
            </p>
            <div className="h-4" />
            <p>
              Click to see the tech stack and the stories behind each of them.
              💥
            </p>
          </div>
          <ProjectCard
            title="NTUCourse Neo"
            imgSrc="/Project_Neo.png"
            projectId="ntucourse-neo"
          />
          <ProjectCard
            title="swh00tw.dev"
            imgSrc="/Project_swh00tw.png"
            projectId="swh00tw-dev"
          />
          <ProjectCard
            title="Portfolio"
            imgSrc="/Project_Portfolio.png"
            projectId="portfolio"
          />
          <ProjectCard
            title="DS Tutor"
            imgSrc="/Project_DSTutor.png"
            projectId="dstutor"
          />
        </div>
      </div>
    </div>
  );
}
