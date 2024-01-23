import clsx from "clsx";
import React from "react";
import Image from "next/image";
import Link from "next/link";

// in px
interface Experience {
  company: string;
  link?: string;
  roles: string[];
  startDate: string;
  tags: string[];
  logoImagePath: string;
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
    link: "https://course.ntu.edu.tw/en/search/quick",
  },
];

function CompanyName(props: { readonly experience: Experience }) {
  const { experience } = props;
  const { company, link } = experience;
  const body = (
    <div
      className={clsx(
        "text-[20px]",
        "font-medium",
        "text-black",
        link ? "cursor-pointer hover:underline" : ""
      )}
    >
      {`${company}`}
    </div>
  );
  if (link) {
    return (
      <Link href={link} target="_blank">
        {body}
      </Link>
    );
  }
  return body;
}

function Timeline() {
  return (
    <ul className="timeline timeline-snap-icon lg:timeline-horizontal timeline-vertical relative right-[8vw] md:right-0">
      {experiences.map((experience, index) => (
        <li key={`${experience.company}-${index}`}>
          {index === 0 ? null : <hr className="bg-gray-700" />}
          <div
            className={clsx(
              "lg:w-full px-2 text-gray-600 h-full lg:h-fit",
              "py-2",
              "timeline-start"
            )}
          >
            {experience.startDate}
          </div>
          <div className="timeline-middle">
            <Image
              src={experience.logoImagePath}
              width={40}
              height={40}
              alt={experience.logoImagePath}
              className="aspect-square h-[40px] lg:inline-block"
            />
          </div>
          <div className={clsx("pl-2", "pr-8", "timeline-end", "pb-8 lg:pb-0")}>
            <div className={clsx("flex", "flex-col")}>
              <CompanyName experience={experience} />
              <div className={clsx("text-[16px]", "text-gray-600")}>
                {experience.roles.join("/")}
              </div>
              <div
                className={clsx(
                  "text-[12px]",
                  "text-gray-600",
                  "flex",
                  "flex-col",
                  "px-4",
                  "py-1"
                )}
              >
                {experience.tags.map((tag, index) => (
                  <div
                    key={`${tag}-${index}`}
                    className="inline-block whitespace-nowrap"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {index === experiences.length - 1 ? null : (
            <hr className="bg-gray-700" />
          )}
        </li>
      ))}
    </ul>
  );
}

export default function CareerPage() {
  return (
    <div className="lg:h-[100lvh] flex justify-center items-center lg:w-[60vw] w-[80vw]">
      <div
        className={clsx(
          "flex",
          "flex-col",
          "lg:max-h-[80svh]",
          "py-[5vh]",
          "w-full"
        )}
      >
        <div
          className={clsx("mb-6", "lg:mb-0", "text-[30px]", "font-semibold")}
        >
          Career
        </div>
        <Timeline />
      </div>
    </div>
  );
}
