"use client";

import { useState } from "react";
import Image from "next/image";
import deployments from "@/data/deployments.js";
import ContactCTA from "@/components/ContactCTA";

export default function ProjectsPage() {
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

  return (
    <main className="px-8 py-6 md:px-10 md:py-8 lg:px-16 lg:py-8">
      {/* Projects Paragraph Section */}
      <section className="flex flex-col gap-6 md:gap-8 lg:gap-10 m-auto max-w-[600px] md:max-w-[850px] lg:max-w-[1200px]">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.8] tracking-[-0.08em] text-black dark:text-white">
          what I’ve
          <br />
          been building
        </h1>

        <h2 className="text-xl md:text-2xl lg:text-3xl font-extralight leading-[1.1] text-black dark:text-white">
          Each project here reflects my approach to design, code, and
          problem-solving.{" "}
          <span className="font-bold">
            From concept to execution, every detail has been carefully
            considered and built with intent.
          </span>
        </h2>
      </section>

      {/* Projects Section */}
      <section className="flex flex-col gap-10 md:gap-14 lg:gap-18 mt-32 m-auto max-w-[600px] md:max-w-[850px] lg:max-w-[1200px]">
        {/* Projects Navigation */}
        <div className="flex justify-between :items-center items-center">
          <nav className="flex-1 text-center md:text-left">
            <ul className="inline-flex flex-wrap gap-x-4 gap-y-2 md:gap-8 lg:gap-10">
              {categories.map((category) => (
                <li key={category}>
                  <button
                    onClick={() => setActiveFilter(category)}
                    className={`text-lg md:text-xl font-light transition-colors duration-300 ${
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

          <div className="flex-1 flex gap-2 justify-end">
            {["grid", "list"].map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`p-2 rounded transition-colors duration-300 ${
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

        {/* Projects Lists */}
        <div>
          {viewMode === "grid" ? (
            // Grid View
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14 lg:gap-18">
              {filteredDeployments.map((deployment) => (
                <a
                  key={deployment.id}
                  href={deployment.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="relative mb-6 overflow-hidden rounded-4xl bg-black/50 dark:bg-white/50 transition duration-300 group-hover:scale-[1.01]">
                    <div className="absolute inset-0 z-10 pointer-events-none rounded-4xl shadow-[inset_0_0_20px_rgba(0,0,0,0.15)]"></div>
                    <Image
                      src={deployment.screenshot}
                      alt={deployment.name}
                      width={1920}
                      height={879}
                      quality={90}
                      priority
                      className="w-full aspect-square object-cover"
                    />
                  </div>

                  <div className="space-y-2">
                    <p className="text-[#f37a35] uppercase text-sm md:text-base">
                      {formatDate(deployment.date)}
                    </p>

                    <h2 className="text-4xl uppercase md:text-5xl lg:text-4xl font-black leading-[1.1] tracking-[-0.08em]">
                      {deployment.name}
                    </h2>

                    <div className="my-3 w-15 h-px bg-black/50 dark:bg-white/50" />

                    <div className="text-sm text-black/50 dark:text-white/50">
                      {deployment.technologies.join(" • ")}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            // List View
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {filteredDeployments.map((deployment) => (
                <a
                  key={deployment.id}
                  href={deployment.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-6 md:gap-8 group"
                >
                  <div className="flex-shrink-0 w-32 sm:w-40 md:w-48 lg:w-56 overflow-hidden rounded-2xl bg-black/50 dark:bg-white/50 transition duration-300 group-hover:scale-[1.02] relative">
                    <Image
                      src={deployment.screenshot}
                      alt={deployment.name}
                      width={700}
                      height={700}
                      className="w-full aspect-square sm:h-28 md:h-32 lg:h-36 object-cover"
                    />
                  </div>

                  <div className="flex-1 space-y-3">
                    <p className="text-[#f37a35] uppercase text-sm md:text-base">
                      {formatDate(deployment.date)}
                    </p>

                    <h2 className="text-xl uppercase sm:text-2xl md:text-3xl font-black leading-[1.1] tracking-[-0.08em]">
                      {deployment.name}
                    </h2>

                    <div className="w-12 h-px bg-black/50 dark:bg-white/50" />

                    <div className="text-sm text-black/50 dark:text-white/50">
                      {deployment.technologies.join(" • ")}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Empty Projects Container */}
        <div>
          {filteredDeployments.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-lg text-black/50 dark:text-white/50">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section>
        <ContactCTA />
      </section>
    </main>
  );
}
