"use client";

import { useState } from "react";
import Image from "next/image";
import deployments from "@/data/deployments.js";
import Link from "next/link";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [viewMode, setViewMode] = useState("grid");

  const categories = ["All", "Web Design", "Games", "Interactive UI"];

  const filteredDeployments =
    activeFilter === "All"
      ? deployments
      : deployments.filter((d) => d.category === activeFilter);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("tr-TR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen text-black dark:text-white mt-[88px] md:mt-[104px] px-8 py-6 md:px-10 md:py-8 lg:px-16 lg:py-8">
      <div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.8] tracking-[-0.09em] pb-16 md:pb-20 lg:pb-24">
          explore
          <br />
          our creations
        </h1>

        <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:items-center gap-6 md:gap-0 pb-4 md:pb-6 lg:pb-8">
          <nav className="text-center md:text-left">
            <ul className="inline-flex flex-wrap gap-6 md:gap-8 lg:gap-10">
              {categories.map((category) => (
                <li key={category}>
                  <button
                    onClick={() => setActiveFilter(category)}
                    className={`text-lg md:text-xl font-light transition-colors duration-300 ${
                      activeFilter === category
                        ? "text-black/40 dark:text-white/40"
                        : "text-black dark:text-white"
                    }`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded transition-colors duration-300 ${
                viewMode === "grid"
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-black/10 text-black dark:bg-white/10 dark:text-white"
              }`}
              title="Grid View"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded transition-colors duration-300 ${
                viewMode === "list"
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-black/10 text-black dark:bg-white/10 dark:text-white"
              }`}
              title="List View"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <rect x="3" y="4" width="18" height="2" rx="1" />
                <rect x="3" y="11" width="18" height="2" rx="1" />
                <rect x="3" y="18" width="18" height="2" rx="1" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div>
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-14">
            {filteredDeployments.map((deployment) => (
              <a
                key={deployment.id}
                href={deployment.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="relative rounded-4xl overflow-hidden bg-black/30 dark:bg-white/30 mb-6 transition duration-300 group-hover:scale-[1.01]">
                  <Image
                    src={deployment.screenshot}
                    alt={deployment.name}
                    width={1920}
                    height={879}
                    className="object-cover w-full aspect-square"
                    quality={90}
                    priority
                  />
                </div>

                <div className="space-y-2">
                  <p className="text-[#f37a35] text-sm md:text-base uppercase">
                    {formatDate(deployment.date)}
                  </p>

                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[0.8] tracking-[-0.07em]">
                    {deployment.name}
                  </h2>

                  <div className="w-15 h-px bg-black/30 dark:bg-white/30 my-3"></div>

                  <div className="text-sm text-black/40 dark:text-white/40">
                    {deployment.technologies.join(" • ")}
                  </div>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {filteredDeployments.map((deployment, index) => (
              <a
                key={deployment.id}
                href={deployment.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-6 md:gap-8 group"
              >
                <div className="relative rounded-2xl overflow-hidden bg-black/30 dark:bg-white/30 flex-shrink-0 w-32 sm:w-40 md:w-48 lg:w-56 transition duration-300 group-hover:scale-[1.02]">
                  <Image
                    src={deployment.screenshot}
                    alt={deployment.name}
                    width={700}
                    height={700}
                    className="object-cover w-full aspect-square sm:h-28 md:h-32 lg:h-36"
                  />
                </div>

                <div className="flex-1 space-y-3">
                  <p className="text-[#f37a35] text-sm md:text-base uppercase">
                    {formatDate(deployment.date)}
                  </p>

                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-[0.8] tracking-[-0.07em]">
                    {deployment.name}
                  </h2>

                  <div className="w-12 h-px bg-black/30 dark:bg-white/30"></div>

                  <div className="text-sm text-black/40 dark:text-white/40">
                    {deployment.technologies.join(" • ")}
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>

      {filteredDeployments.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-400 dark:text-gray-300 text-lg">
            No projects found in this category.
          </p>
        </div>
      )}

      <Link
        href="/contact"
        className="flex flex-col gap-8 items-center font-sans py-48 md:py-56 lg:py-64"
      >
        <div>
          <h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[120px] xl:text-[140px] font-black leading-[0.8] text-center text-white"
            style={{
              textShadow: `
              1px 1px 0 #f37a35,
              2px 2px 0 #343434,
              3px 3px 0 #f37a35,
              4px 4px 8px rgba(0,0,0,0.3)
            `,
            }}
          >
            let's get
            <br />
            to work
          </h1>
        </div>

        <button className="bg-[#f37a35] text-white px-12 py-5 rounded-full text-xl md:text-2xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/40 shadow-lg shadow-orange-500/25">
          get in touch
        </button>
      </Link>
    </div>
  );
}
