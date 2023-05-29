export interface Project {
  id: string;
  name: string;
  link: string | null;
  github: string | null;
  description: string[];
  stack: string[];
  imagePath: string;
}

const projects: Record<string, Project> = {
  portfolio: {
    id: "portfolio",
    name: "My Portfolio",
    link: null,
    github: "https://github.com/swh00tw/swh00tw-homepage",
    description: [],
    stack: ["Next13", "Tailwind", "Figma"],
    imagePath: "/projects/portfolio.png",
  },
  dstutor: {
    id: "dstutor",
    name: "DS Tutor",
    link: null,
    github: "https://github.com/swh00tw/DS_Tutor",
    description: [
      "DS Tutor is a data structure visualization tool for beginners or learners in Data Structures. The tool shows you how data structures change after operations are performed on them.",
      "It was my very first frontend coding experience. No React or any frameworks, just pure HTML/CSS/JS. ",
    ],
    stack: ["Javascript", "HTML/Canvas", "EaselJS", "TweenJS"],
    imagePath: "/projects/dstutor.png",
  },
  "ntucourse-neo": {
    id: "ntucourse-neo",
    name: "NTUCourse Neo",
    link: "https://ncn.pages.dev",
    github: "https://github.com/NTUCourse-Neo",
    description: [
      "National Taiwan University offers many valuable courses, but the process of planning them can be stressful. We alleviate the challenging course selection experience by organizing scattered information and providing students with an intuitive user interface. 🎉",
      "Our service ended since our team decided to collaborate with NTU for working on the next-gen official course information system. 🔥",
    ],
    stack: ["React", "Node.js", "Next.js", "Typescript", "PostgreSQL"],
    imagePath: "/projects/ncn.png",
  },
};

export default projects;
