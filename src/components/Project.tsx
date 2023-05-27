import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";

function ProjectCard(props: {
  readonly title: string;
  readonly imgSrc: string;
}) {
  const { imgSrc, title } = props;
  return (
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
          className="left-0 object-fill"
          quality={100}
        />
      </div>
      <div className={clsx("text-[14px]", "mt-1")}>{title}</div>
    </div>
  );
}

export default function ProjectPage() {
  return (
    <motion.div
      key={`Project`}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.5,
        },
      }}
      className="w-[80%] lg:w-[60%] min-h-[100svh] flex justify-center items-center"
    >
      <div className={clsx("flex", "flex-col", "w-full", "max-h-[80svh]")}>
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
          <ProjectCard title="NTUCourse Neo" imgSrc="/Project_Neo.png" />
          <ProjectCard title="Portfolio" imgSrc="/Project_Portfolio.png" />
          <ProjectCard title="DS Tutor" imgSrc="/Project_DSTutor.png" />
        </div>
      </div>
    </motion.div>
  );
}
