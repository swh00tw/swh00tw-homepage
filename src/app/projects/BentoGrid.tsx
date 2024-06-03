// ref: https://ui.aceternity.com/components/bento-grid
import { cn } from "@/utils/cn";
import { Text, Flex } from "@radix-ui/themes";
import { Link } from "next-view-transitions";

const OptionalLinkWrapper = ({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) =>
  href ? (
    <Link href={href} className={cn("cursor-pointer", className)}>
      {children}
    </Link>
  ) : (
    <div className={className}>{children}</div>
  );

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  href,
  tag,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  tag?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
}) => {
  return (
    <OptionalLinkWrapper
      href={href}
      className={cn(
        "row-span-1 h-fit rounded-4 group/bento hover:shadow-xl transition duration-200 shadow-input bg-offwhite border border-transparent flex flex-col gap-y-4",
        "p-2 border-[1px] border-gray-7 cursor-pointer hover:border-gray-9",
        className,
      )}
    >
      <div className="w-full aspect-[16/9] relative">{header}</div>
      <div className="px-1 group-hover/bento:translate-x-0 transition duration-200 flex flex-col gap-y-1">
        {icon}
        <Flex className="w-full justify-between">
          <Text size="2" className="text-gray-12" weight={"medium"}>
            {title}
          </Text>
          {tag}
        </Flex>
        <Text size="1" className="text-gray-10">
          {description}
        </Text>
      </div>
    </OptionalLinkWrapper>
  );
};
