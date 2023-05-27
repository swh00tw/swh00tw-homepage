import clsx from "clsx";
import React from "react";
import { RiFireFill, RiHashtag } from "react-icons/ri";
import Image from "next/image";

// in px
interface Experience {
  company: string;
  link?: string;
  roles: string[];
  startDate: string;
  tags: string[];
  logoImagePath?: string;
  customTagColor?: string;
  customTagIcon?: React.ReactNode;
}

const experiences: Experience[] = [
  {
    company: "NTUCourse Neo",
    roles: ["Full Stack Developer", "Cofounder"],
    startDate: "Nov, 2021",
    tags: ["Project Management", "Frontend Development", "Backend Development"],
    logoImagePath: "/ncn_logo.png",
    link: "https://ncn.pages.dev/",
  },
  {
    company: "WOD.co",
    roles: ["Software Engineer Intern"],
    startDate: "Feb, 2022",
    tags: ["TV App Development", "Frontend Development"],
    logoImagePath: "/wodco.png",
    link: "https://www.linkedin.com/company/woddotco/",
  },
  {
    company: "NTU OAA",
    roles: ["Frontend Developer"],
    startDate: "Aug, 2022",
    tags: ["Frontend Development", "API Design"],
    logoImagePath: "/ntuoaa.png",
  },
  {
    company: "???",
    roles: ["??"],
    startDate: "MM, 2024",
    tags: ["Looking for 2024 summer SWE Internship"],
    customTagColor: "bg-[#D4BEE9CC]",
    customTagIcon: <RiFireFill />,
  },
];

function CareerCard(props: {
  readonly experience: Experience;
  readonly isLast?: boolean;
}) {
  const TIMELINE_Y_OFFSET = "top-0 lg:top-[120px]";
  const TIMELINE_HEIGHT = "h-[18px]";
  const TIMELINE_WIDTH = "w-[18px]";
  const TIMELINE_BORDER_RADIUS = "rounded-[28px]";

  const { experience, isLast = false } = props;
  const logo = experience?.logoImagePath ? (
    <Image
      src={experience.logoImagePath}
      width={40}
      height={40}
      alt={experience.logoImagePath}
      className="aspect-square h-[40px] lg:inline-block"
    />
  ) : null;

  return (
    <div
      className={clsx(
        "col-span-1",
        "flex",
        "lg:flex-col",
        "w-full",
        "relative",
        !isLast
          ? "border-b-2 lg:border-b-0 lg:border-r-2 border-[#6060604D] border-dashed"
          : null
      )}
    >
      <div
        className={clsx(
          "absolute",
          TIMELINE_Y_OFFSET,
          TIMELINE_HEIGHT,
          TIMELINE_WIDTH,
          TIMELINE_BORDER_RADIUS,
          "bg-[#D4BEE9]",
          "border-2",
          "border-black"
        )}
      />
      <div
        className={clsx(
          "flex",
          "flex-col",
          "lg:justify-between",
          "w-[50%]",
          "pl-[26px]",
          "lg:pl-1",
          "lg:w-full",
          `lg:h-[120px]`,
          "text-[#808080]",
          "px-2"
        )}
      >
        <div className={clsx("text-[12px]", "lg:hidden", "mb-2")}>
          {experience.startDate}
        </div>
        <div className="lg:hidden my-2">{logo}</div>
        <div
          className={clsx(
            "text-[16px]",
            "font-medium",
            "text-black",
            experience?.link ? "cursor-pointer hover:underline" : ""
          )}
          onClick={() => {
            if (!experience?.link) return;
            window.open(experience.link, "_blank");
          }}
        >
          {`${experience.company}`}
        </div>
        <div className={clsx("flex", "justify-between", "items-center")}>
          <div className={clsx("text-[12px]", "lg:p-1")}>
            {experience.roles.join(" & ")}
          </div>
          <div className="aspect-square min-w-[40px] hidden lg:inline-block">
            {logo}
          </div>
        </div>
        <div className={clsx("text-[12px]", "hidden", "lg:inline-block")}>
          {experience.startDate}
        </div>
      </div>
      <div className={clsx("flex", "flex-col", "mt-[18px]")}>
        {experience.tags.map((tag, index) => (
          <div
            key={`${tag}-${index}`}
            className={clsx(
              "m-2",
              "flex",
              "items-center",
              experience?.customTagColor ?? "bg-[#ffffff80]",
              "text-[14px]",
              "rounded-lg",
              "min-h-[50px]",
              "p-2",
              "shadow-md"
            )}
          >
            <div className="w-[15%] items-center justify-center flex">
              {experience?.customTagIcon ?? <RiHashtag />}
            </div>
            <div className="w-[80%] ml-2">{tag}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CareerPage() {
  const TIMELINE_Y_OFFSET = "top-0 lg:top-[120px]";
  const TIMELINE_BORDER_RADIUS = "rounded-[28px]";
  const GRID_COLS = "grid-cols-1 lg:grid-cols-4";
  return (
    <div className="lg:h-[100lvh] flex justify-center items-center">
      <div
        className={clsx(
          "flex",
          "flex-col",
          "w-[80%]",
          "lg:w-[60%]",
          "lg:max-h-[80svh]",
          "py-[5vh]"
        )}
      >
        <div
          className={clsx("mb-6", "lg:mb-0", "text-[30px]", "font-semibold")}
        >
          Career
        </div>
        <div className={clsx("grid", GRID_COLS, "lg:mt-8", "relative")}>
          <div
            className={clsx(
              "absolute",
              "h-full lg:h-[18px]",
              "w-[18px]",
              "lg:w-full",
              "bg-[#9FAFDF80]",
              "left-0",
              TIMELINE_Y_OFFSET,
              TIMELINE_BORDER_RADIUS
            )}
          />
          {experiences.map((e, i) => (
            <CareerCard
              experience={e}
              isLast={i === experiences.length - 1}
              key={`${e.company}-${e.startDate}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
