import { motion } from "framer-motion";
import clsx from "clsx";
import React from "react";
import Image from "next/image";

interface SkillSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly title: string;
}
function SkillSection(props: SkillSectionProps) {
  const { children, className, title, ...rest } = props;
  return (
    <div
      className={clsx(
        "flex",
        "w-full",
        "p-4",
        "flex-col",
        "bg-[#ffffff75]",
        "rounded-lg",
        className
      )}
      {...rest}
    >
      <div className={clsx("font-medium", "text-[#00000060]")}>{title}</div>
      <div className={clsx("mt-[20px]", "w-full", "flex", "flex-wrap")}>
        {children}
      </div>
    </div>
  );
}

interface SkillCardProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly name: string;
  readonly iconPath: string;
}
function SkillCard(props: SkillCardProps) {
  const { children, iconPath, className, name, ...rest } = props;
  return (
    <div
      className={clsx(
        "flex",
        "min-w-[45%]",
        "flex-row",
        "items-center",
        "p-2",
        "gap-4",
        className
      )}
      {...rest}
    >
      <div
        className={clsx("relative", "aspect-square", "h-full", "min-h-[30px]")}
      >
        <Image
          src={iconPath}
          fill
          sizes="(max-width: 768px) 10vw, (max-width: 1200px) 10vw, 10vw"
          className="left-0 top-0 object-fill"
          alt={name}
          quality={100}
          priority
        />
      </div>
      <div className="text-[14px]">{name}</div>
    </div>
  );
}

export default function SkillPage() {
  return (
    <motion.div
      key={`Skill`}
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
      className="w-[80%] lg:w-[60%] min-h-screen flex justify-center items-center"
    >
      <div className={clsx("flex", "flex-col", "w-full", "max-h-[80svh]")}>
        <div
          className={clsx("mt-0", "lg:mt-0", "text-[30px]", "font-semibold")}
        >
          Skills
        </div>
        <div
          className={clsx(
            "md:mt-8",
            "grid",
            "grid-cols-1",
            "md:grid-cols-2",
            "gap-6"
          )}
        >
          <div className={clsx("md:row-span-2")}>
            <SkillSection title="Web development">
              <SkillCard name="React" iconPath="/logos/react.png" />
              <SkillCard name="Next.js" iconPath="/logos/nextjs-original.png" />
              <SkillCard
                name="Tailwind CSS"
                iconPath="/logos/tailwindcss-plain.png"
              />
              <SkillCard name="Node.js" iconPath="/logos/nodejs-original.png" />
              <SkillCard name="GraphQL" iconPath="/logos/graphql-plain.png" />
              <SkillCard
                name="Express.js"
                iconPath="/logos/express-original.png"
              />
              <SkillCard
                name="MongoDB"
                iconPath="/logos/mongodb-original.png"
              />
              <SkillCard
                name="PostgreSQL"
                iconPath="/logos/postgresql-plain-wordmark.png"
              />
            </SkillSection>
          </div>
          <div>
            <SkillSection title="Languages">
              <SkillCard name="JavaScript" iconPath="/logos/javascript.png" />
              <SkillCard name="TypeScript" iconPath="/logos/typescript.png" />
              <SkillCard name="Python" iconPath="/logos/Python3.png" />
            </SkillSection>
          </div>
          <div>
            <SkillSection title="Others">
              <SkillCard name="React Native" iconPath="/logos/react.png" />
              <SkillCard name="Docker" iconPath="/logos/docker-original.png" />
              <SkillCard name="Figma" iconPath="/logos/figma-original.png" />
            </SkillSection>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
