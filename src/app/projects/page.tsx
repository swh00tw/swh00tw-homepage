import { getProjects } from "./getProjects";
import { BentoGrid, BentoGridItem } from "./BentoGrid";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { Text } from "@radix-ui/themes";
import { CSSProperties } from "react";

export default function Page() {
  const projects = getProjects();

  return (
    <div
      className={cn(
        "min-h-[70svh] md:min-h-[50svh] my-16 sm:my-12",
        "text-gray-11",
        "w-[60vw] sm:w-[60vw] md:w-[40vw]",
      )}
    >
      <BentoGrid className="w-full">
        {projects.map((project) => {
          return (
            <BentoGridItem
              key={project.slug}
              title={project.meta.displayName}
              description={project.meta.desc}
              href={`/projects/${project.slug}`}
              header={
                <Image
                  src={project.meta.coverImageSrc}
                  alt={project.meta.displayName}
                  fill
                  className={cn(
                    "object-cover w-full h-full aspect-[16/9] rounded-2 grayscale-[50%]",
                    `vt-project`,
                  )}
                  style={
                    {
                      "--vt-name": project.meta.displayName,
                    } as CSSProperties
                  }
                />
              }
              tag={
                <Text size="1" className="">
                  {new Date(project.meta.date).getFullYear()}
                </Text>
              }
            />
          );
        })}
      </BentoGrid>
    </div>
  );
}
