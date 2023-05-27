import { motion } from "framer-motion";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import React from "react";

interface EducationRecordCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  readonly schoolName: string;
  readonly children: React.ReactNode;
  readonly period: string;
}
function EducationRecordCard(props: EducationRecordCardProps) {
  const { schoolName, children, period, className = "", ...rest } = props;
  return (
    <div
      className={clsx("flex", "gap-x-4", "items-center", "p-2", className)}
      {...rest}
    >
      <div>{children}</div>
      <div className={clsx("flex", "flex-col", "text-[14px]")}>
        <div>{schoolName}</div>
        <div className="text-[#808080]">{period}</div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <motion.div
      key={`About`}
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
      className="w-[80%] lg:w-[60%] h-screen flex justify-center items-center"
    >
      <div
        className={clsx(
          "flex",
          "flex-col",
          "lg:flex-row",
          "w-full",
          "lg:justify-center",
          "items-center"
        )}
      >
        <div className={clsx("w-full", "lg:w-[55%]", "pl-[5%]")}>
          <h1 className={clsx("text-[30px]", "font-semibold")}>
            Hi, I am <span className="text-primary">Frank</span>
          </h1>
          <div className={clsx("my-[36px]")}>
            <p>
              I'm a Taiwanese Full Stack Developer with a strong interest in web
              development and UI/UX design.
            </p>
            <div className="h-3" />
            <p>
              Currently, I'm studying Connective Media at{" "}
              <Link href="https://tech.cornell.edu/" target="_blank">
                <span className="text-[#AA162C] hover:underline">
                  Cornell Tech
                </span>
              </Link>{" "}
              in New York City. Feel free to explore my website and check out my
              projects and skills.
            </p>
          </div>
          <div
            className={clsx(
              "flex",
              "flex-wrap",
              "justify-start",
              "gap-x-2",
              "w-full"
            )}
          >
            <EducationRecordCard
              schoolName="National Taiwan University"
              period="Sep, 2018 - Jan, 2023"
            >
              <Image
                src="/ntu_logo.png"
                width={50}
                height={50}
                className="aspect-square"
                alt="NTU Logo"
              />
            </EducationRecordCard>{" "}
            <EducationRecordCard
              schoolName="Cornell Tech"
              period="Aug, 2023 - May, 2025"
            >
              <Image
                src="/cornelltech_logo.png"
                width={50}
                height={50}
                className="aspect-square"
                alt="CT Logo"
              />
            </EducationRecordCard>
          </div>
        </div>
        <div
          className={clsx(
            "hidden",
            "lg:block",
            "lg:w-[45%]",
            "flex",
            "justify-center"
          )}
        >
          <Image
            src="/About.png"
            width={300}
            height={300}
            alt="About me memoji"
            style={{ margin: "0 auto" }}
            priority
          />
        </div>
      </div>
    </motion.div>
  );
}
