"use client";
import { useState } from "react";
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
import Image from "next/image";
import Link from "next/link";

const technologyGroups = [
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

export default function AboutPage() {
  const [activeGroups, setActiveGroups] = useState({});

  const toggleGroup = (index) => {
    setActiveGroups((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <main className="mt-[88px] md:mt-[104px] px-8 py-6 md:px-10 md:py-8 lg:px-16 lg:py-8">
      <section className="h-[calc(100vh-88px)] md:h-[calc(100vh-104px)] flex items-center justify-center">
        <div className="relative">
          <div className="text-center relative z-1">
            <h1 className="text-black dark:text-white font-black text-7xl md:text-8xl lg:text-9xl leading-[0.85] tracking-[-0.07em]">
              <span className="ml-26 md:ml-30 lg:ml-34">what</span>
              <br />i build
            </h1>

            <p className="text-black/90 dark:text-white/90 text-xl md:text-2xl font-light max-w-lg mx-auto mt-6 mb-8">
              I design and build digital products that convert.
            </p>

            <div className="flex flex-col items-center gap-2">
              <Link
                href="/"
                className="px-6 py-4 border-2 text-sm md:text-base border-[#f37a35] bg-[#f37a35] text-white font-semibold rounded-4xl transition-all duration-300 hover:bg-transparent hover:text-[#f37a35] hover:shadow-red-500/30 hover:scale-105"
              >
                Check My CV
              </Link>
              <Link
                href="/projects"
                className="px-6 py-4 border-2 text-sm md:text-base border-[#f37a35] bg-[#f37a35] text-white font-semibold rounded-4xl transition-all duration-300 hover:bg-transparent hover:text-[#f37a35] hover:shadow-red-500/30 hover:scale-105"
              >
                See My Work
              </Link>
            </div>
          </div>

          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 left-10 md:-top-30 md:left-4 lg:-top-35 lg:-left-10 w-34 h-42 md:w-44 md:h-52 lg:w-54 lg:h-52 rounded-2xl overflow-hidden shadow-xl transform -rotate-12">
              <Image
                src="/images/screenshots/Tic-Tac-Toe.png"
                alt="Yoga woman"
                width={1920}
                height={879}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -top-5 right-5 md:-top-10 md:right-0 lg:-top-20 lg:-right-20 w-32 h-24 md:w-42 md:h-34 lg:w-52 lg:h-44 rounded-2xl overflow-hidden shadow-xl transform rotate-15">
              <Image
                src="/images/screenshots/Biggy-Burger.png"
                alt="Sky with clouds"
                width={1920}
                height={879}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-40 right-4 md:top-50 md:right-0 lg:top-60 lg:-right-10 w-24 h-28 md:w-34 md:h-38 lg:w-44 lg:h-48 rounded-2xl overflow-hidden shadow-xl transform -rotate-11">
              <Image
                src="/images/screenshots/Calculator.png"
                alt="Green abstract"
                width={1920}
                height={879}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-42 left-22 md:top-52 lg:top-66 lg:left-0 w-36 h-26 md:w-46 md:h-36 lg:w-56 lg:h-46 rounded-2xl overflow-hidden shadow-xl transform rotate-8">
              <Image
                src="/images/screenshots/Shop-Your-Way.png"
                alt="Orange abstract"
                width={1920}
                height={879}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-20">
        <div className="flex-1 flex flex-col gap-6 md:gap-8 lg:gap-10">
          <h1 className="text-black dark:text-white text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.8] tracking-[-0.09em]">
            technologies
            <br />i use
          </h1>

          <p className="text-black/90 dark:text-white/90 text-lg md:text-xl lg:text-2xl">
            The right tools for building exceptional digital experiences. From
            powerful frameworks to modern design systems, these are the
            technologies that make innovation possible.
          </p>
        </div>

        <div className="flex-1 flex flex-col mt-6 md:mt-8">
          {technologyGroups.map((group, index) => (
            <div
              key={index}
              className="cursor-pointer"
              onMouseEnter={() => toggleGroup(index)}
              onMouseLeave={() => toggleGroup(index)}
            >
              <div
                className={`flex items-center gap-3 py-3 ${
                  !activeGroups[index] ? "border-b-3 border-[#f37a35]" : ""
                }`}
              >
                <span className="text-black dark:text-white text-xl md:text-2xl py-2 font-black uppercase leading-[0.8] tracking-[-0.09em]">
                  {group.title}
                </span>
              </div>

              {activeGroups[index] && (
                <div className="p-4 border-b-3 border-[#f37a35]">
                  <div className="flex flex-wrap gap-3">
                    {group.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex items-center gap-2 border border-black/30 dark:border-white/30 rounded-lg px-3 py-2 hover:scale-105 transition-transform"
                      >
                        <tech.icon
                          className="text-lg"
                          style={{ color: tech.color }}
                        />
                        <span
                          className="text-sm font-medium"
                          style={{ color: tech.color }}
                        >
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
