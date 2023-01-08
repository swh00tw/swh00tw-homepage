import React from "react";

export interface BaseExperienceInfo {
  startTs: number; // ms
  endTs: number | null; // ms
  type: "Work" | "Project";
  roles: string[];
  location: string | null;
  description: React.ReactNode;
  imagePath: string;
  websiteUrl?: string;
}
export interface WorkExperienceInfo extends BaseExperienceInfo {
  type: "Work";
  organization: string;
  linkedinUrl?: string;
}
export interface ProjectExperienceInfo extends BaseExperienceInfo {
  type: "Project";
  projectName: string;
  techStacks: string[];
  githubLink?: string;
}
export type ExperienceInfo = WorkExperienceInfo | ProjectExperienceInfo;
export function isWorkExperienceInfo(
  info: ExperienceInfo
): info is WorkExperienceInfo {
  return info.type === "Work";
}
export function isProjectExperienceInfo(
  info: ExperienceInfo
): info is ProjectExperienceInfo {
  return info.type === "Project";
}

export const experienceSource: ExperienceInfo[] = [
  {
    type: "Work",
    startTs: 1659225634000,
    endTs: 1673179196000,
    organization: "National Taiwan University, Office of Academic Affairs",
    roles: ["Frontend Engineer", "Frontend Lead"],
    location: "Taipei, Taiwan",
    description:
      "Developed the brand new course selection system and course information website for NTU",
    imagePath: "/ntu.jpeg",
  },
  {
    type: "Work",
    startTs: 1643673634000,
    endTs: 1659225634000,
    organization: "Kinetik Athlete",
    roles: ["Software Engineer Intern"],
    location: "Taipei, Taiwan",
    description:
      "Developed the workout-tracking app which aims to provide an intuitive application for tracking workout performance and aiding coaches to train CrossFit athletes",
    imagePath: "/kinetik.png",
    linkedinUrl: "https://www.linkedin.com/company/kinetikathlete/",
  },
  {
    type: "Project",
    startTs: 1635724834000,
    endTs: 1659225634000,
    projectName: "NTUCourse Neo",
    roles: ["Fullstack Developer", "Co-founder"],
    location: "Taipei, Taiwan",
    description:
      "A redesigned course-planning web service for students at National Taiwan University.",
    imagePath: "/ncn_logo.png",
    websiteUrl: "https://ncn.pages.dev",
    techStacks: ["React", "Next.js", "Typescript", "PostgreSQL", "Node.js"],
    githubLink: "https://github.com/NTUCourse-Neo",
  },
  {
    type: "Project",
    startTs: 1619827234000,
    endTs: 1622505634000,
    projectName: "DS Tutor",
    roles: ["Frontend Developer"],
    location: "Taipei, Taiwan",
    description:
      "A data structure visualization tool for beginners in Data Structure",
    imagePath: "/ds_tutor.png",
    techStacks: ["Javascript", "HTML/Canvas", "TweenJS", "EaselJS"],
    githubLink: "https://github.com/swh00tw/DS_Tutor",
  },
];
