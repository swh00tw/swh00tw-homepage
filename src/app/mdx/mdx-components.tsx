import type { MDXComponents } from "mdx/types";
import { cn } from "@/utils/cn";
import { Text } from "@radix-ui/themes";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";

export const mdxComponents: MDXComponents = {
  h2: (props) => {
    const { children, ...restProps } = props;
    return (
      <h2 {...restProps} className="mb-1 mt-2">
        <Text size="4" as="span" className={cn("text-gray-12 font-medium")}>
          {children}
        </Text>
      </h2>
    );
  },
  h3: (props) => {
    const { children, ...restProps } = props;
    return (
      <h3 {...restProps} className="mb-1 mt-2">
        <Text size="3" as="span" className={cn("text-gray-11 font-medium")}>
          {children}
        </Text>
      </h3>
    );
  },
  p: (props) => {
    const { children, ...restProps } = props;
    return (
      <div className="py-2">
        <p {...restProps}>
          <Text size="3" as="span" className={cn("text-gray-11")}>
            {children}
          </Text>
        </p>
      </div>
    );
  },
  a: (props) => <a {...props} className={cn("text-blue-11")} target="_blank" />,
  ol: (props) => (
    <ol {...props} className="list-decimal pl-6 text-gray-11 my-2" />
  ),
  ul: (props) => <ul {...props} className="list-disc pl-6 text-gray-11 my-2" />,
  code: (props) => (
    <code {...props} className="bg-gray-6 text-gray-11 px-1 rounded-2" />
  ),
  pre: (props) => (
    <pre
      {...props}
      className="p-4 my-4 rounded-4 overflow-x-auto *:bg-transparent"
    />
  ),
  blockquote: (props) => (
    <blockquote
      {...props}
      className="border-l-4 border-gray-11 pl-4 my-4 bg-gray-4 bg-opacity-20"
    />
  ),
  Callout: (props: { type?: string; children: React.ReactNode }) => {
    const { type, children } = props;

    const getIcon = (type: string) => {
      switch (type) {
        case "info":
          return "ℹ️";
        case "warning":
          return "⚠️";
        case "danger":
          return "🚨";
        case "deprecated":
          return "🚨";
        default:
          return "ℹ️";
      }
    };
    const icon = getIcon(type ? type.toLowerCase() : "info");

    return (
      <div className="my-4 border-[1px] border-solid p-4 rounded-4 bg-offwhite bg-opacity-70">
        <div
          className={cn("flex", "flex-row", "gap-x-2", "text-[16px]", "mb-1")}
        >
          <div className="w-fit">{icon}</div>
          <div className={cn("font-bold")}>{type ?? "Info"}</div>
        </div>
        <div className="">{children}</div>
      </div>
    );
  },
  Youtube: (props: { title?: string; id: string }) => {
    const { title, id } = props;
    return (
      <div className="relative h-0 pb-[56.25%]">
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=0&rel=0`}
          title={title}
          allow="picture-in-picture; clipboard-write"
          allowFullScreen
          className="w-full mt-4 mb-2 aspect-video"
        />
      </div>
    );
  },
};

export async function MDXCustom(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={mdxComponents}
      options={{
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [
            [
              rehypePrettyCode,
              {
                theme: "catppuccin-mocha",
              },
            ],
          ],
        },
      }}
    />
  );
}
