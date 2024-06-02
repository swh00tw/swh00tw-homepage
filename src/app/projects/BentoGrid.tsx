// ref: https://ui.aceternity.com/components/bento-grid
import { cn } from "@/utils/cn";
import { Text } from "@radix-ui/themes";
import { Link } from "next-view-transitions";

const OptionalLinkWrapper = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) =>
  href ? (
    <Link href={href} className="cursor-pointer">
      {children}
    </Link>
  ) : (
    children
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
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
}) => {
  return (
    <OptionalLinkWrapper href={href}>
      <div
        className={cn(
          "row-span-1 rounded-4 group/bento hover:shadow-xl transition duration-200 shadow-input bg-offwhite border border-transparent flex flex-col gap-y-4",
          "p-2 border-[1px] border-gray-8 cursor-pointer",
          className,
        )}
      >
        <div className="w-full aspect-[4/3] relative">{header}</div>
        <div className="group-hover/bento:translate-x-1 transition duration-200 flex flex-col gap-y-1">
          {icon}
          <Text size="2" className="text-gray-12" weight={"medium"}>
            {title}
          </Text>
          <Text size="1" className="text-gray-11">
            {description}
          </Text>
        </div>
      </div>
    </OptionalLinkWrapper>
  );
};
