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
        "text-[16px]",
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
    <ul className="timeline my-4">
      {experiences.map((experience, index) => (
        <li key={`${experience.company}-${index}`}>
          {index === 0 ? null : <hr />}
          <div className="timeline-start">{experience.startDate}</div>
          <div className="timeline-middle">
            <Image
              src={experience.logoImagePath}
              width={40}
              height={40}
              alt={experience.logoImagePath}
              className="aspect-square h-[40px] lg:inline-block"
            />
          </div>
          <div className={clsx("timeline-end", "px-4")}>
            <div className={clsx("flex", "flex-col")}>
              <CompanyName experience={experience} />
            </div>
          </div>
          {index === experiences.length - 1 ? null : <hr />}
        </li>
      ))}
    </ul>
  );
}

export default function CareerPage() {
  return (
    <div className="lg:h-[100lvh] flex justify-center items-center">
      <div
        className={clsx(
          "flex",
          "flex-col",
          "w-[80%]",
          "lg:max-h-[80svh]",
          "py-[5vh]",
          "w-fit"
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
