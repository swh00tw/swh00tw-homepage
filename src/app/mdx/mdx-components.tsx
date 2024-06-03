import type { MDXComponents } from "mdx/types";
import { cn } from "@/utils/cn";
import { Text } from "@radix-ui/themes";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";

export const mdxComponents: MDXComponents = {
  h2: (props) => {
    const { children, ...restProps } = props;
    return (
      <h2 {...restProps}>
        <Text size="3" as="span" className={cn("text-gray-12")}>
          {children}
        </Text>
      </h2>
    );
  },
  p: (props) => {
    const { children, ...restProps } = props;
    return (
      <div className="pb-4">
        <p {...restProps}>
          <Text size="2" as="span" className={cn("text-gray-11")}>
            {children}
          </Text>
        </p>
      </div>
    );
  },
  a: (props) => <a {...props} className={cn("text-blue-11")} target="_blank" />,
};

export function MDXCustom(props: MDXRemoteProps) {
  return <MDXRemote {...props} components={mdxComponents} />;
}
