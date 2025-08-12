"use client";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import deployments from "@/data/deployments.js";
import ContactCTA from "@/components/ContactCTA";
import AnimatedSection from "@/components/AnimatedSection";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsPage() {
  const containerRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [viewMode, setViewMode] = useState("grid");

  const categories = ["All", "Web Design", "Games", "Interactive UI"];
  const filteredDeployments =
    activeFilter === "All"
      ? deployments
      : deployments.filter((d) => d.category === activeFilter);

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("en-EN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [viewMode]);

  useGSAP(
    () => {
      gsap.set(".title-animate", { opacity: 0 });
      gsap.set(".paragraph-animate", { opacity: 0 });
      gsap.set(".navigation-animate", { opacity: 0, y: "15vw" });
      gsap.set(".buttons-animate", { opacity: 0 });

      const tl = gsap.timeline().delay(1.8);

      tl.to(".title-animate", {
        opacity: 1,
        duration: 0.6,
        stagger: 0.3,
        ease: "power3.out",
      })
        .to(
          ".paragraph-animate",
          {
            opacity: 1,
            duration: 1.35,
            ease: "elastic.out(1.5, 1.5)",
            stagger: 0.2,
          },
          "-=0.4"
        )
        .to(
          ".navigation-animate",
          {
            opacity: 1,
            y: "0",
            duration: 1.5,
            ease: "elastic.out(1.5, 1.5)",
            stagger: 0.1,
          },
          "-=1.6"
        )
        .to(
          ".buttons-animate",
          {
            opacity: 1,
            duration: 0.85,
            ease: "back.out(1.5)",
            stagger: 0.2,
          },
          "-=1.1"
        );
    },
    { scope: containerRef }
  );

  return (
    <main ref={containerRef}>
      <section className="px-8 py-6 md:px-10 md:py-8 lg:px-16 lg:py-8 h-[calc(100dvh-90px)] md:h-[calc(100dvh-106px)] lg:min-h-[calc(100dvh-106px)] lg:mt-[106px] flex flex-col justify-between">
        <div className="max-w-[600px] md:max-w-[850px] lg:max-w-[1200px] flex flex-col gap-6 md:gap-8 lg:gap-10">
          <h1 className="title-animate text-6xl md:text-7xl lg:text-8xl font-black leading-[0.8] tracking-[-0.08em] text-black dark:text-white">
            <span>what I’ve</span>
            <br />
            <span>been building</span>
          </h1>

          <p className="paragraph-animate text-xl md:text-2xl lg:text-3xl font-extralight leading-[1.1] text-black dark:text-white">
            Each project here reflects my approach to design, code, and
            problem-solving.{" "}
            <span className="font-bold">
              From concept to execution, every detail has been carefully
              considered and built with intent.
            </span>
          </p>
        </div>

        <div className="flex items-center justify-between gap-4">
          <nav className="flex-2 text-center md:text-left">
            <ul className="inline-flex flex-wrap gap-x-4 gap-y-2 md:gap-8 lg:gap-10">
              {categories.map((category) => (
                <li key={category}>
                  <button
                    onClick={() => setActiveFilter(category)}
                    className={`navigation-animate text-lg md:text-xl font-light transition-colors duration-300 ${
                      activeFilter === category
                        ? "text-black/30 dark:text-white/30"
                        : "text-black dark:text-white"
                    }`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-1 justify-end gap-2">
            {["grid", "list"].map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`buttons-animate p-2 rounded transition-colors duration-300 ${
                  viewMode === mode
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "bg-black/10 text-black dark:bg-white/10 dark:text-white"
                }`}
                title={`${mode.charAt(0).toUpperCase() + mode.slice(1)} View`}
                aria-pressed={viewMode === mode}
              >
                {mode === "grid" ? (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                  </svg>
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <rect x="3" y="4" width="18" height="2" rx="1" />
                    <rect x="3" y="11" width="18" height="2" rx="1" />
                    <rect x="3" y="18" width="18" height="2" rx="1" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="m-auto flex flex-col gap-10 md:gap-14 lg:gap-18 px-8 py-6 md:px-10 md:py-8 lg:px-16 lg:py-8 max-w-[600px] md:max-w-[850px] lg:max-w-[1200px]">
        <div>
          {filteredDeployments.length > 0 ? (
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14 lg:gap-18"
                  : "grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
              }
            >
              {filteredDeployments.map((deployment) => (
                <AnimatedSection animation="card-animation" key={deployment.id}>
                  <a
                    href={deployment.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      viewMode === "grid"
                        ? "block group"
                        : "flex group gap-6 md:gap-8"
                    }
                  >
                    <div
                      className={
                        viewMode === "grid"
                          ? "relative mb-6 overflow-hidden rounded-4xl bg-black/50 dark:bg-white/50 transition duration-300 group-hover:scale-[1.01]"
                          : "relative flex-shrink-0 w-32 sm:w-40 md:w-48 lg:w-56 overflow-hidden rounded-2xl bg-black/50 dark:bg-white/50 transition duration-300 group-hover:scale-[1.02]"
                      }
                    >
                      <Image
                        src={deployment.screenshot}
                        alt={deployment.name}
                        width={viewMode === "grid" ? 1920 : 700}
                        height={viewMode === "grid" ? 879 : 700}
                        quality={90}
                        priority
                        className={
                          viewMode === "grid"
                            ? "w-full aspect-[4/3] object-cover"
                            : "w-full aspect-square sm:h-28 md:h-32 lg:h-36 object-cover"
                        }
                      />
                      {viewMode === "grid" && (
                        <div className="absolute inset-0 z-10 pointer-events-none rounded-4xl shadow-[inset_0_0_20px_rgba(0,0,0,0.15)]"></div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <p className="text-[#f37a35] text-sm md:text-base uppercase">
                        {formatDate(deployment.date)}
                      </p>
                      <h3
                        className={
                          viewMode === "grid"
                            ? "text-4xl md:text-5xl lg:text-5xl font-black leading-[1.1] tracking-[-0.08em] uppercase"
                            : "text-xl sm:text-2xl md:text-3xl font-black leading-[1.1] tracking-[-0.08em] uppercase"
                        }
                      >
                        {deployment.name}
                      </h3>
                      <div
                        className={
                          viewMode === "grid"
                            ? "my-3 h-px w-15 bg-black/50 dark:bg-white/50"
                            : "h-px w-12 bg-black/50 dark:bg-white/50"
                        }
                      />
                      <div className="text-sm text-black/50 dark:text-white/50">
                        {deployment.technologies.join(" • ")}
                      </div>
                    </div>
                  </a>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-lg text-black/50 dark:text-white/50">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-32 md:py-42 lg:py-52">
        <ContactCTA />
      </section>
    </main>
  );
}
