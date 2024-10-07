import { getPost } from "./getPost";
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
  const data = getPost({
    slug: params.slug,
  });

  return (
    <div
      className={cn(
        "flex flex-col my-16 gap-y-8",
        "w-[80vw] sm:w-[60vw] md:w-[30vw]",
        "min-h-[70svh]",
      )}
    >
      <div className="flex flex-col gap-y-2 w-full">
        <Text size="5" weight={"medium"} className="text-gray-12">
          {data.frontMatter.title}{" "}
        </Text>
        <span className="text-gray-9 text-[12px]">
          {new Date(data.frontMatter.publishedAt).toLocaleDateString()}
        </span>
        <Text size="3" className="text-gray-10">
          {data.frontMatter.description}
        </Text>
        {data.frontMatter.coverImgSrc ? (
          <div className="relative w-full aspect-[16/9] mt-2">
            <Image
              src={data.frontMatter.coverImgSrc}
              alt={data.frontMatter.title}
              className={cn(`rounded-4 object-cover`, "vt-project")}
              style={
                {
                  "--vt-name": data.frontMatter.slug,
                } as CSSProperties
              }
              fill
              quality={100}
            />
          </div>
        ) : null}
      </div>
      <div>{children}</div>
    </div>
  );
}
