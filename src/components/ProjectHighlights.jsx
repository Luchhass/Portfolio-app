"use client";

import { useMemo } from "react";
import deployments from "@/data/deployments.js";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

const formatDate = (dateString) =>
  new Date(dateString).toLocaleDateString("en-EN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default function ProjectHighlights() {
  const highlightedProjects = useMemo(() => deployments.slice(0, 6), []);

  return (
    <div className="flex flex-col gap-20 py-16 md:py-24 lg:py-32">
      <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
        <AnimatedSection animation="about-animation">
          <p className="text-sm uppercase text-[#f37a35] md:text-base">
            PROJECT
            <br />
            HIGHLIGHTS
          </p>
        </AnimatedSection>

        <AnimatedSection animation="about-animation">
          <h2 className="text-xl font-extralight leading-[1.1] text-black dark:text-white md:text-2xl lg:text-3xl">
            Enjoy some of our best work{" "}
            <span className="font-bold">
              in web design, e-commerce, branding & digital marketing.
            </span>
          </h2>
        </AnimatedSection>
      </div>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:gap-14 lg:grid-cols-3 lg:gap-18">
        {highlightedProjects.map((project) => (
          <AnimatedSection animation="card-animation" key={project.id}>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative mb-6 overflow-hidden rounded-4xl bg-black/30 transition-transform duration-300 group-hover:scale-[1.01]">
                <div className="pointer-events-none absolute inset-0 z-10 rounded-4xl shadow-[inset_0_0_20px_rgba(0,0,0,0.15)]" />
                <Image
                  src={project.screenshot}
                  alt={project.name}
                  width={1920}
                  height={879}
                  className="aspect-square w-full object-cover"
                  quality={85}
                  priority
                />
              </div>

              <div className="space-y-2">
                <p className="text-sm uppercase text-[#f37a35] md:text-base">
                  {formatDate(project.date)}
                </p>

                <h3 className="text-4xl font-black uppercase leading-[1.1] tracking-[-0.08em] md:text-5xl lg:text-4xl">
                  {project.name}
                </h3>

                <div className="my-3 h-px w-15 bg-black/50 dark:bg-white/50" />

                <div className="text-sm text-black/50 dark:text-white/50">
                  {project.technologies.join(" • ")}
                </div>
              </div>
            </a>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection animation="card-animation">
        <div className="flex flex-col items-center">
          <Link
            href="/contact"
            className="group relative overflow-hidden rounded-full bg-[#f37a35] px-12 py-5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-95 md:text-md"
          >
            <span className="absolute inset-0 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative z-10">view all projects</span>
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
}
