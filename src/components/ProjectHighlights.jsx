"use client";

import { useMemo } from "react";
import deployments from "@/data/deployments.js";
import Image from "next/image";
import Link from "next/link";

const formatDate = (dateString) =>
  new Date(dateString).toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default function ProjectHighlights() {
  const highlightedProjects = useMemo(() => deployments.slice(0, 4), []);

  return (
    <div className="flex flex-col gap-24">
      {/* Header */}
      <div className="flex flex-col gap-8">
        <p className="text-sm md:text-base uppercase text-[#f37a35]">
          PROJECT
          <br />
          HIGHLIGHTS
        </p>

        <h2 className="mb-8 text-3xl md:text-6xl lg:text-7xl font-light leading-[0.8] tracking-[-0.09em]">
          Enjoy some of our best work{" "}
          <span className="font-bold text-black">
            in web design, e-commerce, branding & digital marketing.
          </span>
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-14">
        {highlightedProjects.map((project) => (
          <a
            key={project.id}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            {/* Image Wrapper */}
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

            {/* Info */}
            <div className="space-y-2">
              <p className="text-sm md:text-base uppercase text-[#f37a35]">
                {formatDate(project.date)}
              </p>

              <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[0.8] tracking-[-0.07em]">
                {project.name}
              </h3>

              <div className="my-3 h-px w-15 bg-black/30 dark:bg-white/30"></div>

              <div className="text-sm text-black/40 dark:text-white/40">
                {project.technologies.join(" • ")}
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center">
        <Link
          href="/projects"
          className="inline-block rounded-full bg-[#f37a35] px-8 py-4 text-xl md:text-2xl font-medium text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/40"
        >
          View All Projects
        </Link>
      </div>
    </div>
  );
}
