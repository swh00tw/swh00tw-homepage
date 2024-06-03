import { getProject } from "./getProject";
import { cn } from "@/utils/cn";
import { Text } from "@radix-ui/themes";
import Image from "next/image";
import { CSSProperties } from "react";

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    slug: string;
  };
}) {
  const data = getProject({
    slug: params.slug,
  });

  return (
    <div
      className={cn(
        "flex flex-col my-16",
        "w-[80vw] sm:w-[60vw] md:w-[30vw] gap-y-4",
        "min-h-[70svh]",
      )}
    >
      <div className="flex flex-col gap-y-2 w-full">
        <Text size="4" weight={"medium"} className="text-gray-12">
          {data.frontMatter.displayName}{" "}
        </Text>
        <span className="text-gray-9 text-[12px]">
          {new Date(data.frontMatter.date).getFullYear()}
        </span>
        <Text size="2" className="text-gray-10">
          {data.frontMatter.desc}
        </Text>
        <div className="relative w-full aspect-[16/9] mt-2">
          <Image
            src={data.frontMatter.coverImageSrc}
            alt={data.frontMatter.displayName}
            className={cn(`rounded-4 object-cover`, "vt-project")}
            style={
              {
                "--vt-name": data.frontMatter.displayName,
              } as CSSProperties
            }
            fill
          />
        </div>
      </div>
      {children}
    </div>
  );
}
