"use client";

import { useEffect, useState } from "react";
import {
  FaCodeBranch,
  FaCode,
  FaUser,
  FaLanguage,
  FaSpinner,
} from "react-icons/fa";
import { MdError } from "react-icons/md";
import AnimatedSection from "../ScrollAnimator";

export default function GithubStats({ username = "octocat" }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [stats, setStats] = useState({
    repoCount: null,
    commitCount: null,
    mostUsedLanguage: null,
    loading: false,
    error: null,
  });

  const toggleGroup = (index) =>
    setOpenIndex((prev) => (prev === index ? null : index));

  useEffect(() => {
    if (!username) return;
    const controller = new AbortController();

    setStats((prev) => ({ ...prev, loading: true, error: null }));

    async function fetchStats() {
      try {
        const res = await fetch(`/api/github-stats?username=${username}`, {
          signal: controller.signal,
        });
        const data = await res.json();

        if (data.error) {
          setStats({
            repoCount: null,
            commitCount: null,
            mostUsedLanguage: null,
            loading: false,
            error: data.error,
          });
        } else {
          setStats({
            repoCount: data.repoCount,
            commitCount: data.commitCount,
            mostUsedLanguage: data.mostUsedLanguage,
            loading: false,
            error: null,
          });
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          setStats((prev) => ({ ...prev, error: err.message, loading: false }));
        }
      }
    }

    fetchStats();
    return () => controller.abort();
  }, [username]);

  const statGroups = [
    {
      title: "Repositories",
      icon: FaCodeBranch,
      value: stats.repoCount,
      label: "Public Repositories",
      bgColor: "bg-[#f37a35]",
      iconColor: "text-white",
    },
    {
      title: "Commits",
      icon: FaCode,
      value: stats.commitCount,
      label: "Total Commits",
      bgColor: "bg-black dark:bg-white",
      iconColor: "text-white dark:text-black",
    },
    {
      title: "Most Used Language",
      icon: FaLanguage,
      value: stats.mostUsedLanguage,
      label: "Primary Language",
      bgColor: "bg-blue-500",
      iconColor: "text-white",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-22">
      <div className="flex flex-1 flex-col gap-6 md:gap-8 lg:gap-10">
        <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.8] tracking-[-0.08em] text-black dark:text-white">
            <AnimatedSection animation="about-paragraph-animations" as="span">
              <span>github</span>
            </AnimatedSection>
            <br />
            <AnimatedSection animation="about-paragraph-animations" as="span">
              <span>statistics</span>
            </AnimatedSection>
          </h1>

          <AnimatedSection animation="about-paragraph-animations">
            <div className="flex items-center gap-1">
              <FaUser className="h-4 w-4 text-black/50 dark:text-white/50" />
              <p className="text-lg text-black/50 dark:text-white/50">
                @{username}
              </p>
            </div>
          </AnimatedSection>
        </div>

        <h2 className="mb-8 text-xl md:text-2xl lg:text-3xl font-extralight leading-[1.1] text-black dark:text-white">
          <AnimatedSection animation="about-paragraph-animations" as="span">
            <span className="font-bold">
              Real-time insights into development activity.{" "}
            </span>
          </AnimatedSection>
          
          <AnimatedSection animation="about-paragraph-animations" as="span">
            From repository management to commit history, track the development
            flow.{" "}
          </AnimatedSection>

          <AnimatedSection animation="about-paragraph-animations" as="span">
            <span className="font-bold">
              Highlighting the dedication behind exceptional digital
              experiences.
            </span>
          </AnimatedSection>
        </h2>
      </div>

      <div className="flex-1 flex flex-col mt-6 md:mt-8">
        {stats.loading ? (
          <div className="group relative bg-transparent py-3">
            <div className="flex items-center gap-4">
              <FaSpinner className="h-6 w-6 animate-spin text-[#f37a35]" />
              <h1 className="relative z-10 m-0 text-xl md:text-2xl font-black uppercase leading-[1.1] tracking-[-0.08em] text-black/60 dark:text-white/60">
                Loading Stats...
              </h1>
            </div>
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#f37a35]/30" />
          </div>
        ) : stats.error ? (
          <div className="group relative bg-transparent py-3">
            <div className="flex items-center gap-4">
              <MdError className="h-6 w-6 text-red-500" />
              <h1 className="relative z-10 m-0 text-xl md:text-2xl font-black uppercase leading-[1.1] tracking-[-0.08em] text-red-600 dark:text-red-400">
                Error Loading Stats
              </h1>
            </div>
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-red-500/30" />
          </div>
        ) : (
          statGroups.map((group, index) => {
            const isOpen = openIndex === index;
            return (
              <AnimatedSection
                animation="about-paragraph-animations"
                key={group.title}
              >
                <div
                  className="group relative cursor-pointer bg-transparent py-3"
                  onClick={() => toggleGroup(index)}
                >
                  <h1
                    className={`relative z-10 m-0 text-xl md:text-2xl font-black uppercase leading-[1.1] tracking-[-0.08em] transition-colors duration-300 ease-in-out ${
                      isOpen ? "text-[#f37a35]" : "group-hover:text-[#f37a35]"
                    }`}
                  >
                    {group.title}
                  </h1>

                  <span
                    className={`absolute bottom-0 left-0 w-full h-[3px] bg-[#f37a35] transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                      isOpen ? "translate-y-2" : "group-hover:translate-y-2"
                    }`}
                  />

                  <div
                    className={`overflow-hidden transition-[height] duration-500 ease-in-out mt-2 ${
                      isOpen ? "h-35" : "h-0 group-hover:h-34"
                    }`}
                  >
                    <div className="pt-4">
                      <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-[#1f1f1f] dark:shadow-[0_4px_12px_rgba(0,0,0,0.4)] p-6 shadow-lg">
                        <div
                          className={`absolute inset-0 transition-opacity duration-500 ${
                            isOpen
                              ? "opacity-100"
                              : "opacity-0 group-hover:opacity-100"
                          }`}
                        />
                        <div className="relative z-10 flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div
                              className={`flex h-12 w-12 items-center justify-center rounded-xl ${group.bgColor} shadow-lg`}
                            >
                              <group.icon
                                className={`h-6 w-6 ${group.iconColor}`}
                              />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                                {group.label}
                              </span>
                              <span className="text-3xl font-black text-gray-900 dark:text-gray-100 tracking-tight">
                                {group.value !== null
                                  ? typeof group.value === "number"
                                    ? group.value.toLocaleString()
                                    : group.value
                                  : "---"}
                              </span>
                            </div>
                          </div>
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f37a35]/10 dark:bg-[#f37a35]/20">
                            <div className="h-2 w-2 rounded-full bg-[#f37a35] animate-pulse" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })
        )}
      </div>
    </div>
  );
}
