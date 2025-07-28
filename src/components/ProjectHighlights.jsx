"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import deployments from "@/data/deployments.js";

export default function ProjectHighlights() {
  const highlightedProjects = deployments.slice(0, 4);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("tr-TR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="flex flex-col gap-24">
      <div className="flex flex-col gap-8">
        <p className="text-[#f37a35] text-sm md:text-base uppercase">
          PROJECT
          <br />
          HIGHLIGHTS
        </p>

        <h2 className="text-3xl md:text-6xl lg:text-7xl font-light leading-[0.8] tracking-[-0.09em] mb-8">
          Enjoy some of our best work{" "}
          <span className="text-black font-bold">
            in web design, e-commerce, branding & digital marketing.
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-14">
        {highlightedProjects.map((project) => (
          <a
            key={project.id}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="relative rounded-4xl overflow-hidden bg-black/30 mb-6 transition duration-300 group-hover:scale-[1.01]">
              <Image
                src={project.screenshot}
                alt={project.name}
                width={1920}
                height={879}
                className="object-cover w-full aspect-square"
                quality={90}
                priority
              />
            </div>

            <div className="space-y-2">
              <p className="text-[#f37a35] text-sm md:text-base uppercase">
                {formatDate(project.date)}
              </p>

              <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[0.8] tracking-[-0.07em]">
                {project.name}
              </h3>

              <div className="w-15 h-px bg-black/30 dark:bg-white/30 my-3"></div>

              <div className="text-sm text-black/40 dark:text-white/40">
                {project.technologies.join(" • ")}
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="text-center">
        <Link
          href="/projects"
          className="inline-block bg-[#f37a35] text-white px-8 py-4 rounded-full text-xl md:text-2xl font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/40 shadow-lg shadow-orange-500/25"
        >
          View All Projects
        </Link>
      </div>
    </div>
  );
}
