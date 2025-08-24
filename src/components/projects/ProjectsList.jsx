"use client";

import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import AnimatedSection from "@/components/ScrollAnimator";
import deployments from "@/data/deployments.js";
import LoadingSkeleton from "./LoadingSkeleton";

export default function ProjectsList({ activeFilter, viewMode }) {
  const [isLoading, setIsLoading] = useState(true);

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
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [activeFilter, viewMode]);

  useEffect(() => {
    if (!isLoading) {
      ScrollTrigger.refresh();
    }
  }, [viewMode, activeFilter, isLoading]);

  return (
    <section className="m-auto flex flex-col gap-10 md:gap-14 lg:gap-18 px-8 py-6 md:px-10 md:py-8 lg:px-16 lg:py-8 max-w-[600px] md:max-w-[850px] lg:max-w-[1200px]">
      <div>
        {isLoading ? (
          <LoadingSkeleton
            viewMode={viewMode}
            count={filteredDeployments.length || 6}
          />
        ) : (
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14 lg:gap-18"
                : "grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
            }
          >
            {filteredDeployments.map((deployment) => (
              <AnimatedSection
                animation="project-card-animations"
                key={deployment.id}
              >
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
        )}
      </div>
    </section>
  );
}
