import type { MDXComponents } from "mdx/types";
import { cn } from "@/utils/cn";
import { Text } from "@radix-ui/themes";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";

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
        <Text size="3" as="span" className={cn("text-gray-11")}>
          {children}
        </Text>
      </h3>
    );
  },
  p: (props) => {
    const { children, ...restProps } = props;
    return (
      <div className="pb-4">
        <p {...restProps}>
          <Text size="3" as="span" className={cn("text-gray-11")}>
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
