"use client";

import { useState } from "react";
import { technologyGroups } from "@/data/technologyGroups";
import AnimatedSection from "@/components/ScrollAnimator";

export default function TechnologiesStats() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleGroup = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-22">
      <div className="flex-1 flex flex-col gap-6 md:gap-8 lg:gap-10">
        <AnimatedSection animation="about-paragraph-animations">
          <h1 className="text-black dark:text-white text-6xl md:text-7xl lg:text-8xl font-black leading-[0.8] tracking-[-0.08em]">
            <span className="about-item"> technologies</span>
            <br />
            <span className="about-item">i use</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection animation="about-paragraph-animations">
          <h2 className="mb-8 text-xl md:text-2xl lg:text-3xl font-extralight leading-[1.1] text-black dark:text-white">
            <span className="about-item">
              {" "}
              The right tools for building exceptional digital experiences.{" "}
            </span>
            <span className="about-item font-bold">
              From powerful frameworks to modern design systems, these are the
              technologies that make innovation possible.
            </span>
          </h2>
        </AnimatedSection>
      </div>

      <div className="flex-1 flex flex-col mt-6 md:mt-8">
        {technologyGroups.map((group, index) => {
          const isOpen = openIndex === index;
          return (
            <AnimatedSection animation="about-paragraph-animations" key={index}>
              <div
                className="about-item group relative cursor-pointer bg-transparent py-3"
                onClick={() => toggleGroup(index)}
              >
                <h1
                  className={`relative z-10 m-0 text-xl md:text-2xl font-black uppercase leading-[1.1] tracking-[-0.08em] transition-colors duration-300 ease-in-out
                ${isOpen ? "text-[#f37a35]" : "group-hover:text-[#f37a35]"}`}
                >
                  {group.title}
                </h1>

                <span
                  className={`absolute bottom-0 left-0 w-full h-[3px] bg-[#f37a35] transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]
                ${isOpen ? "translate-y-2" : "group-hover:translate-y-2"}`}
                />

                <div
                  className={`overflow-hidden transition-[height] duration-500 ease-in-out mt-2
                ${isOpen ? "h-28" : "h-0 group-hover:h-28"}`}
                >
                  <div className="flex flex-wrap gap-4">
                    {group.technologies.map((tech, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 rounded-lg px-4 py-2 shadow-md hover:shadow-lg transform hover:scale-[1.05] transition-transform duration-300 cursor-pointer bg-white dark:bg-[#1f1f1f] dark:shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
                        style={{ color: tech.color }}
                      >
                        <tech.icon className="text-2xl" />
                        <span className="font-semibold text-gray-900 dark:text-gray-200">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  );
}
