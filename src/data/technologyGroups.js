// /data/technologyGroups.js

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaBootstrap,
  FaNpm,
  FaYarn,
  FaDocker,
  FaSass,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiVercel,
  SiEslint,
  SiDiscord,
  SiJira,
  SiTailwindcss,
  SiVite,
  SiPrettier,
} from "react-icons/si";

export const technologyGroups = [
  {
    title: "LANGUAGES",
    icon: FaJs,
    color: "#F7DF1E",
    technologies: [
      { icon: FaHtml5, color: "#E34F26", name: "HTML5" },
      { icon: FaCss3Alt, color: "#1572B6", name: "CSS3" },
      { icon: FaJs, color: "#F7DF1E", name: "JavaScript" },
      { icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
      { icon: FaSass, color: "#CC6699", name: "Sass" },
    ],
  },
  {
    title: "LIBRARIES",
    icon: FaReact,
    color: "#61DAFB",
    technologies: [
      { icon: FaReact, color: "#61DAFB", name: "React" },
      { icon: SiNextdotjs, color: "#000000", name: "Next.js" },
      { icon: SiTailwindcss, color: "#38B2AC", name: "TailwindCSS" },
      { icon: FaBootstrap, color: "#7952B3", name: "Bootstrap" },
    ],
  },
  {
    title: "TOOLS",
    icon: FaGitAlt,
    color: "#F05032",
    technologies: [
      { icon: FaGitAlt, color: "#F05032", name: "Git" },
      { icon: FaGithub, color: "#181717", name: "GitHub" },
      { icon: SiVercel, color: "#000000", name: "Vercel" },
      { icon: SiVite, color: "#646CFF", name: "Vite" },
      { icon: SiEslint, color: "#4B32C3", name: "ESLint" },
      { icon: SiPrettier, color: "#F7B93E", name: "Prettier" },
    ],
  },
  {
    title: "PACKAGE MANAGERS",
    icon: FaNpm,
    color: "#CB3837",
    technologies: [
      { icon: FaNpm, color: "#CB3837", name: "npm" },
      { icon: FaYarn, color: "#2C8EBB", name: "Yarn" },
      { icon: FaDocker, color: "#2496ED", name: "Docker" },
    ],
  },
  {
    title: "OTHERS",
    icon: FaFigma,
    color: "#F24E1E",
    technologies: [
      { icon: FaFigma, color: "#F24E1E", name: "Figma" },
      { icon: SiDiscord, color: "#5865F2", name: "Discord" },
      { icon: SiJira, color: "#0052CC", name: "Jira" },
    ],
  },
];
