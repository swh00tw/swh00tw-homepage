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
