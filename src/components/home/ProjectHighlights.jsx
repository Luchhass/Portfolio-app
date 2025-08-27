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

const handleMagneticEnter = (e) => {
  const card = e.currentTarget.querySelector(".magnetic-card");
  card.style.transform = "translateY(-12px) scale(1.05)";
};

const handleMagneticLeave = (e) => {
  const card = e.currentTarget.querySelector(".magnetic-card");
  card.style.transform = "translateY(0px) scale(1)";
  card.style.transition = "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
  setTimeout(() => {
    card.style.transition = "all 0.1s ease-out";
  }, 500);
};

const handleMagneticMove = (e) => {
  const card = e.currentTarget.querySelector(".magnetic-card");
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  const rotateX = (y / rect.height) * -20;
  const rotateY = (x / rect.width) * 20;
  const translateX = (x / rect.width) * 15;
  const translateY = -12 + (y / rect.height) * 15;

  card.style.transform = `translateX(${translateX}px) translateY(${translateY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
};

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
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-1">
          <AnimatedSection animation="projects-highlights-animations">
            <p className="text-sm uppercase text-[#f37a35] md:text-base">
              PROJECT
            </p>
          </AnimatedSection>
          <AnimatedSection animation="projects-highlights-animations">
            <p className="text-sm uppercase text-[#f37a35] md:text-base">
              HIGHLIGHTS
            </p>
          </AnimatedSection>
        </div>

        <h2 className="text-xl font-extralight leading-[1.1] text-black dark:text-white md:text-2xl lg:text-3xl">
          <AnimatedSection animation="projects-highlights-animations" as="span">
            <span>
              Enjoy a curated showcase of my finest work, where creative web
              design meets distinctive branding.{" "}
            </span>
          </AnimatedSection>
          <AnimatedSection animation="projects-highlights-animations" as="span">
            <span className="font-bold">
              Each project is thoughtfully crafted to inspire, engage, and leave
              a lasting impression, blending aesthetic appeal with strategic
              storytelling.
            </span>
          </AnimatedSection>
        </h2>
      </div>

      <div
        className="flex items-start w-max gap-8 md:gap-10 lg:gap-12"
        ref={scrollerRef}
      >
        {highlightedProjects.map((project) => (
          <AnimatedSection
            key={project.id}
            animation="projects-highlights-animations"
          >
            <div
              className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] group"
              onMouseEnter={handleMagneticEnter}
              onMouseLeave={handleMagneticLeave}
              onMouseMove={handleMagneticMove}
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-card block transition-all duration-100 ease-out"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="relative mb-6 overflow-hidden rounded-4xl transition-all duration-500 ease-out group-hover:ring-2 group-hover:ring-[#f37a35]/50 group-hover:ring-offset-4 group-hover:ring-offset-white dark:group-hover:ring-offset-black">
                  <div className="relative overflow-hidden rounded-4xl bg-black/5 dark:bg-white/5">
                    <Image
                      src={project.screenshot}
                      alt={project.name}
                      width={1920}
                      height={1440}
                      className="aspect-[4/3] w-full object-cover"
                      quality={85}
                      priority
                    />

                    <div className="absolute inset-0 rounded-4xl border border-transparent group-hover:border-[#f37a35]/20 transition-all duration-500 ease-out" />

                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#f37a35]/0 group-hover:bg-[#f37a35]/10 rounded-full blur-md transition-all duration-500 ease-out" />
                  </div>
                </div>

                <div className="space-y-3">
                  <AnimatedSection animation="projects-highlights-animations">
                    <p className="text-sm uppercase text-[#f37a35] font-medium transition-all duration-300 ease-out group-hover:text-[#ff6b1a] group-hover:tracking-wider">
                      {formatDate(project.date)}
                    </p>
                  </AnimatedSection>
                  <AnimatedSection animation="projects-highlights-animations">
                    <h3 className="text-3xl md:text-4xl font-black uppercase leading-[0.9] tracking-[-0.05em] text-black dark:text-white transition-all duration-500 ease-out group-hover:text-[#f37a35] group-hover:tracking-[-0.02em]">
                      {project.name}
                    </h3>
                  </AnimatedSection>
                  <AnimatedSection animation="projects-highlights-animations">
                    <div className="my-4 h-px w-16 bg-black/30 dark:bg-white/30 transition-all duration-500 ease-out group-hover:w-32 group-hover:bg-gradient-to-r group-hover:from-[#f37a35] group-hover:to-[#ff6b1a] group-hover:h-[2px]" />
                  </AnimatedSection>
                  <AnimatedSection animation="projects-highlights-animations">
                    <div className="text-sm text-black/60 dark:text-white/60 transition-all duration-300 ease-out group-hover:text-black/80 dark:group-hover:text-white/80 group-hover:transform group-hover:translate-x-1">
                      {project.technologies.join(" • ")}
                    </div>
                  </AnimatedSection>
                </div>
              </a>
            </div>
          </AnimatedSection>
        ))}
      </div>

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
