"use client";

import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import AnimatedSection from "@/components/ScrollAnimator";
import deployments from "@/data/deployments.js";
import LoadingSkeleton from "./LoadingSkeleton";

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
                <div
                  className="group"
                  onMouseEnter={handleMagneticEnter}
                  onMouseLeave={handleMagneticLeave}
                  onMouseMove={handleMagneticMove}
                >
                  <a
                    href={deployment.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      viewMode === "grid"
                        ? "magnetic-card block transition-all duration-100 ease-out"
                        : "magnetic-card flex gap-6 md:gap-8 transition-all duration-100 ease-out"
                    }
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div
                      className={
                        viewMode === "grid"
                          ? "relative mb-6 overflow-hidden rounded-4xl transition-all duration-500 ease-out group-hover:ring-2 group-hover:ring-[#f37a35]/50 group-hover:ring-offset-4 group-hover:ring-offset-white dark:group-hover:ring-offset-black"
                          : "relative flex-shrink-0 w-32 sm:w-40 md:w-48 lg:w-56 overflow-hidden rounded-2xl transition-all duration-500 ease-out group-hover:ring-2 group-hover:ring-[#f37a35]/50 group-hover:ring-offset-4 group-hover:ring-offset-white dark:group-hover:ring-offset-black"
                      }
                    >
                      <div
                        className={
                          viewMode === "grid"
                            ? "relative overflow-hidden rounded-4xl bg-black/5 dark:bg-white/5"
                            : "relative overflow-hidden rounded-2xl bg-black/5 dark:bg-white/5"
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

                        <div
                          className={
                            viewMode === "grid"
                              ? "absolute inset-0 rounded-4xl border border-transparent group-hover:border-[#f37a35]/20 transition-all duration-500 ease-out"
                              : "absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#f37a35]/20 transition-all duration-500 ease-out"
                          }
                        />

                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#f37a35]/0 group-hover:bg-[#f37a35]/10 rounded-full blur-md transition-all duration-500 ease-out" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-[#f37a35] text-sm md:text-base uppercase font-medium transition-all duration-300 ease-out group-hover:text-[#ff6b1a] group-hover:tracking-wider">
                        {formatDate(deployment.date)}
                      </p>
                      <h3
                        className={
                          viewMode === "grid"
                            ? "text-4xl md:text-5xl lg:text-5xl font-black leading-[1.1] tracking-[-0.08em] uppercase text-black dark:text-white transition-all duration-500 ease-out group-hover:text-[#f37a35] group-hover:tracking-[-0.02em]"
                            : "text-xl sm:text-2xl md:text-3xl font-black leading-[1.1] tracking-[-0.08em] uppercase text-black dark:text-white transition-all duration-500 ease-out group-hover:text-[#f37a35] group-hover:tracking-[-0.02em]"
                        }
                      >
                        {deployment.name}
                      </h3>
                      <div
                        className={
                          viewMode === "grid"
                            ? "my-3 h-px w-15 bg-black/30 dark:bg-white/30 transition-all duration-500 ease-out group-hover:w-32 group-hover:bg-gradient-to-r group-hover:from-[#f37a35] group-hover:to-[#ff6b1a] group-hover:h-[2px]"
                            : "h-px w-12 bg-black/30 dark:bg-white/30 transition-all duration-500 ease-out group-hover:w-24 group-hover:bg-gradient-to-r group-hover:from-[#f37a35] group-hover:to-[#ff6b1a] group-hover:h-[2px]"
                        }
                      />
                      <div className="text-sm text-black/60 dark:text-white/60 transition-all duration-300 ease-out group-hover:text-black/80 dark:group-hover:text-white/80 group-hover:transform group-hover:translate-x-1">
                        {deployment.technologies.join(" • ")}
                      </div>
                    </div>
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
