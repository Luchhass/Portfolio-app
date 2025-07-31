"use client";

import { technologyGroups } from "@/data/technologyGroups";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GithubStats from "@/components/GithubStats";
import ScrollTextBand from "@/components/ScrollTextBand";
import ContactCTA from "@/components/ContactCTA";

export default function AboutPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleGroup = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <main className="flex flex-col">
      {/* About Page Hero Section */}
      <section className="h-[calc(100dvh-90px)] md:h-[calc(100dvh-106px)] flex items-center justify-center px-8 md:px-10 lg:px-16">
        <div className="relative">
          {/* About Hero Texts */}
          <div className="flex flex-col gap-6 text-center relative z-10">
            <h1 className="text-black dark:text-white font-black text-7xl md:text-8xl lg:text-9xl leading-[0.85] tracking-[-0.08em]">
              <span className="ml-26 md:ml-30 lg:ml-34">what</span>
              <br />i build
            </h1>

            <p className="text-black dark:text-white text-xl md:text-2xl font-light max-w-lg mx-auto">
              I design and build digital products that convert.
            </p>

            <div className="flex flex-col gap-2 items-center">
              <Link
                href="/pdf/cv.pdf"
                target="_blank"
                className="relative overflow-hidden bg-[#f37a35] px-12 py-5 text-sm font-semibold rounded-full text-white md:text-md group transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <span className="relative z-10">Check My CV</span>
              </Link>

              <Link
                href="/projects"
                className="relative overflow-hidden bg-[#f37a35] px-12 py-5 text-sm font-semibold rounded-full text-white md:text-md group transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <span className="relative z-10">See My Work</span>
              </Link>
            </div>
          </div>

          {/* About Hero Images */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 left-0 md:-top-30 md:left-4 lg:-top-35 lg:-left-10 w-34 h-42 md:w-44 md:h-52 lg:w-54 lg:h-52 rounded-2xl overflow-hidden shadow-xl transform -rotate-12">
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

            <div className="absolute top-42 left-2 md:top-52 lg:top-66 lg:left-0 w-36 h-26 md:w-46 md:h-36 lg:w-56 lg:h-46 rounded-2xl overflow-hidden shadow-xl transform rotate-8">
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

      {/* Band Section */}
      <section>
        <ScrollTextBand text="FURKAN" repeat={7} />
      </section>

      {/* About Me Section */}
      <section className="flex flex-col gap-32 px-8 md:px-10 lg:px-16">
        {/* The Creator Paragraph */}
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
          <h1 className="text-black dark:text-white text-right text-6xl md:text-7xl lg:text-8xl font-black leading-[0.8] tracking-[-0.08em]">
            <span className="mr-22 text-[#f37a35]">the creator</span>
            <br />
            behind code
          </h1>

          <h2 className="mb-8 text-xl md:text-2xl lg:text-3xl font-extralight leading-[1.1] text-black dark:text-white">
            I’m a <span className="font-bold">Frontend Developer</span> and a
            final-year Web Design student at Istanbul University. Throughout my
            journey, I’ve had the opportunity to intern at several companies,
            gaining hands-on experience in building modern and responsive web
            interfaces. To further enhance my skills, I also completed a
            Software Specialization course at Nişantaşı University, where I
            deepened my knowledge of development practices and technologies.
            <span className="font-bold">
              Today, I combine creativity with technical expertise to craft
              seamless digital experiences.
            </span>
          </h2>
        </div>

        {/* Github Statistics */}
        <div>
          <GithubStats username="Luchhass" />
        </div>

        {/* Technologies I Use */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
          {/* Technologies Texts */}
          <div className="flex-1 flex flex-col gap-6 md:gap-8 lg:gap-10">
            <h1 className="text-black dark:text-white text-6xl md:text-7xl lg:text-8xl font-black leading-[0.8] tracking-[-0.08em]">
              technologies
              <br />i use
            </h1>

            <h2 className="mb-8 text-xl md:text-2xl lg:text-3xl font-extralight leading-[1.1] text-black dark:text-white">
              The right tools for building exceptional digital experiences.{" "}
              <span className="font-bold">
                From powerful frameworks to modern design systems, these are the
                technologies that make innovation possible.
              </span>
            </h2>
          </div>

          {/* Technologies */}
          <div className="flex-1 flex flex-col mt-6 md:mt-8">
            {technologyGroups.map((group, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="group relative cursor-pointer bg-transparent py-3"
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section>
        <ContactCTA />
      </section>
    </main>
  );
}
