"use client";

import { useMemo } from "react";
import deployments from "@/data/deployments.js";
import Image from "next/image";
import Link from "next/link";

const formatDate = (dateString) =>
  new Date(dateString).toLocaleDateString("en-EN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default function ProjectHighlights() {
  const highlightedProjects = useMemo(() => deployments.slice(0, 4), []);

  return (
    <div className="flex flex-col gap-20 py-16 md:py-24 lg:py-32">
      <div className="flex flex-col gap-8">
        <p className="text-sm md:text-base uppercase text-[#f37a35]">
          PROJECT
          <br />
          HIGHLIGHTS
        </p>

        <h2 className="mb-8 text-xl md:text-2xl lg:text-3xl font-extralight leading-[1.1] text-black dark:text-white">
          Enjoy some of our best work{" "}
          <span className="font-bold">
            in web design, e-commerce, branding & digital marketing.
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-14">
        {highlightedProjects.map((project) => (
          <a
            key={project.id}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="relative mb-6 overflow-hidden rounded-4xl bg-black/30 transition-transform duration-300 group-hover:scale-[1.01]">
              <Image
                src={project.screenshot}
                alt={project.name}
                width={1920}
                height={879}
                className="w-full aspect-square object-cover"
                quality={85}
                priority
              />
            </div>

            <div className="space-y-2">
              <p className="text-sm md:text-base uppercase text-[#f37a35]">
                {formatDate(project.date)}
              </p>

              <h3 className="text-4xl uppercase md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-[-0.08em]">
                {project.name}
              </h3>

              <div className="my-3 h-px w-15 bg-black/50 dark:bg-white/50"></div>

              <div className="text-sm text-black/50 dark:text-white/50">
                {project.technologies.join(" • ")}
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="flex flex-col items-center">
        <Link
          href="/contact"
          className="relative overflow-hidden bg-[#f37a35] px-12 py-5 text-sm font-semibold rounded-full text-white md:text-md group transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
          <span className="relative z-10">view all projects</span>
        </Link>
      </div>
    </div>
  );
}
