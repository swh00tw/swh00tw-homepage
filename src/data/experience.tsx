export interface BaseExperienceInfo {
  startTs: number; // ms
  endTs: number | null; // ms
  type: "Work" | "Project";
  roles: string[];
  location: string | null;
  description: string;
  logoImagePath: string;
  imagePath: string;
  websiteUrl?: string;
  introduction: string;
  achievements: string[];
}
export interface WorkExperienceInfo extends BaseExperienceInfo {
  type: "Work";
  organization: string;
  team?: string;
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
    team: "NTUCourse Neo Team",
    roles: ["Frontend Engineer", "Frontend Lead"],
    location: "Taipei, Taiwan",
    description:
      "The brand new course selection system and course information website",
    logoImagePath: "/ntu.jpeg",
    imagePath: "/ntu_nol_neo.png",
    introduction:
      "The brand new course selection system and course information website for National Taiwan University",
    achievements: [
      "Project initiator: the project was transformed from NTUCourse Neo",
      "Led in implementing frontend features and user interfaces",
      "Designed the RESTful API schema",
    ],
  },
  {
    type: "Work",
    startTs: 1643673634000,
    endTs: 1659225634000,
    organization: "WOD.co",
    roles: ["Software Engineer Intern"],
    location: "Taipei, Taiwan",
    description:
      "The workout-tracking app which aims to provide an intuitive application for tracking performance and aiding coaches to train CrossFit athletes",
    logoImagePath: "/kinetik.png",
    linkedinUrl: "https://www.linkedin.com/company/kinetikathlete/",
    imagePath: "/wodsquad.png",
    introduction:
      "A workout sharing platform to write better workouts and track athlete performance",
    achievements: [
      "Optimized the user experience by implementing a new workout-tracking flow",
      "Visualized user’s historical workout data by designing and developing a new dashboard page",
      "Built a cross-platform (iOS & Android) workout-displaying TV app in two months by React-Native and released in two CrossFit gyms in Taiwan",
      "Implemented a remote-controlling feature to help gym owners communicate with the TV app by mobile devices",
    ],
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
    logoImagePath: "/ncn_logo.png",
    websiteUrl: "https://ncn.pages.dev",
    techStacks: ["React", "Next.js", "Typescript", "PostgreSQL", "Node.js"],
    githubLink: "https://github.com/NTUCourse-Neo",
    imagePath: "/project-ntucourse-neo.png",
    introduction:
      "A redesigned course planning website for students in National Taiwan University",
    achievements: [
      "Assisted 5000+ students in course planning and gained 1500+ registered users",
      "Implemented frontend features, backend APIs, and user interfaces",
      "Won the 2nd best team project of 2021-Fall Web Programming Course",
      "Acquired by Office of Academic Affairs of National Taiwan University in Q3 2022",
    ],
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
    logoImagePath: "/ds_tutor.png",
    techStacks: ["Javascript", "HTML/Canvas", "TweenJS", "EaselJS"],
    githubLink: "https://github.com/swh00tw/DS_Tutor",
    imagePath: "/project-ds-tutor.png",
    introduction:
      "A data structure visualization tool for beginners in Data Structure",
    achievements: [
      "Designed and implemented the animation of the transformation of the data structures by TweenJS and EaselJS",
      "Built the frontend interface for users to manipulate the data structures",
    ],
  },
];
