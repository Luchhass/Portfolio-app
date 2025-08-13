"use client";

import { useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import deployments from "@/data/deployments.js";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "../ScrollAnimator";

gsap.registerPlugin(ScrollTrigger);

const formatDate = (dateString) =>
  new Date(dateString).toLocaleDateString("en-EN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default function ProjectHighlights() {
  const highlightedProjects = useMemo(() => deployments.slice(0, 6), []);
  const wrapperRef = useRef(null);
  const scrollerRef = useRef(null);

  useGSAP(
    () => {
      const wrapper = wrapperRef.current;
      const scroller = scrollerRef.current;
      if (!wrapper || !scroller) return;

      const scrollWidth = scroller.scrollWidth - wrapper.clientWidth;

      gsap.to(scroller, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top 60%",
          end: () => `+=${scrollWidth}`,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: wrapperRef }
  );

  return (
    <section
      ref={wrapperRef}
      className="relative flex flex-col gap-12 md:gap-16 lg:gap-20 py-12 md:py-16 lg:py-20 px-8 md:px-10 lg:px-16"
    >
      <div className="m-auto max-w-[600px] md:max-w-[850px] lg:max-w-[1200px] flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-16">
        <AnimatedSection animation="projects-highlights-animations">
          <p className="highlights-item text-sm uppercase text-[#f37a35] md:text-base flex flex-col lg:flex-row gap-0 lg:gap-1">
            <span>PROJECT</span>
            <span>HIGHLIGHTS</span>
          </p>
        </AnimatedSection>

        <AnimatedSection animation="projects-highlights-animations">
          <h2 className="text-xl font-extralight leading-[1.1] text-black dark:text-white md:text-2xl lg:text-3xl">
            <span className="highlights-item">
              Enjoy a curated showcase of my finest work, where creative web
              design meets distinctive branding.{" "}
            </span>
            <span className="highlights-item font-bold">
              Each project is thoughtfully crafted to inspire, engage, and leave
              a lasting impression, blending aesthetic appeal with strategic
              storytelling.
            </span>
          </h2>
        </AnimatedSection>
      </div>

      <AnimatedSection animation="projects-highlights-animations">
        <div
          className="flex items-start w-max gap-8 md:gap-10 lg:gap-12"
          ref={scrollerRef}
        >
          {highlightedProjects.map((project) => (
            <div
              key={project.id}
              className="highlights-item flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px]"
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative mb-6 overflow-hidden rounded-4xl bg-black/30 transition-transform duration-300 group-hover:scale-[1.02]">
                  <div className="pointer-events-none absolute inset-0 z-10 rounded-4xl shadow-[inset_0_0_20px_rgba(0,0,0,0.15)]" />
                  <Image
                    src={project.screenshot}
                    alt={project.name}
                    width={1920}
                    height={1440}
                    className="aspect-[4/3] w-full object-cover"
                    quality={85}
                    priority
                  />
                </div>
                <div className="space-y-3">
                  <p className="text-sm uppercase text-[#f37a35] font-medium">
                    {formatDate(project.date)}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-black uppercase leading-[0.9] tracking-[-0.05em] text-black dark:text-white">
                    {project.name}
                  </h3>
                  <div className="my-4 h-px w-16 bg-black/30 dark:bg-white/30" />
                  <div className="text-sm text-black/60 dark:text-white/60">
                    {project.technologies.join(" • ")}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection animation="projects-highlights-animations">
        <div className="flex justify-center">
          <Link
            href="/contact"
            className="group relative overflow-hidden rounded-full bg-[#f37a35] px-12 py-5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-95 md:text-md"
          >
            <span className="absolute inset-0 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative z-10">view all projects</span>
          </Link>
        </div>
      </AnimatedSection>
    </section>
  );
}
