"use client";

import { useEffect, useState, useCallback } from "react";
import { FaCodeBranch, FaCode, FaUser, FaSpinner } from "react-icons/fa";
import { MdError } from "react-icons/md";

// Loading Component
const LoadingState = ({ username }) => (
  <section className="bg-white px-6 py-16">
    <div className="mx-auto max-w-4xl">
      <div className="mb-8 flex items-center justify-center gap-4">
        <FaSpinner className="h-8 w-8 animate-spin text-[#f37a35]" />
        <div>
          <h3 className="mb-1 text-2xl font-bold text-black">
            Loading GitHub Stats...
          </h3>
          <p className="text-gray-600">Fetching data for @{username}</p>
        </div>
      </div>
    </div>
  </section>
);

// Error Component
const ErrorState = ({ error }) => (
  <section className="bg-white px-6 py-16">
    <div className="mx-auto max-w-4xl">
      <div className="flex items-center gap-4 rounded-lg border border-red-200 bg-red-50 p-8">
        <div className="rounded-lg bg-red-100 p-3">
          <MdError className="h-8 w-8 text-red-600" />
        </div>
        <div>
          <h3 className="mb-1 text-2xl font-bold text-red-800">
            Error Loading Stats
          </h3>
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    </div>
  </section>
);

// Stat Item Component
const StatItem = ({
  title,
  icon: Icon,
  value,
  label,
  hoveredItem,
  onHover,
  onLeave,
  bgColor,
  iconColor,
}) => {
  const isHovered = hoveredItem === title.toLowerCase();

  return (
    <div onMouseEnter={onHover} onMouseLeave={onLeave}>
      <div
        className={`py-4 text-xl md:text-2xl font-black uppercase leading-[1.1] tracking-[-0.08em] text-black dark:text-white ${
          isHovered ? "border-b-0" : "border-b-3 border-[#f37a35]"
        }`}
      >
        {title}
      </div>

      {isHovered && (
        <div className="border-b-3 border-b-[#f37a35] p-4">
          <div className="flex items-center gap-3">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full ${bgColor}`}
            >
              <Icon className={`h-4 w-4 ${iconColor}`} />
            </div>
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm text-black dark:text-white">{label}</p>
              <p className="text-2xl font-bold text-black dark:text-white">
                {value !== null
                  ? typeof value === "number"
                    ? value.toLocaleString()
                    : value
                  : "---"}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function GithubStats({ username = "octocat" }) {
  const [stats, setStats] = useState({
    repoCount: null,
    commitCount: null,
    loading: false,
    error: null,
  });
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleHover = useCallback((item) => setHoveredItem(item), []);
  const handleLeave = useCallback(() => setHoveredItem(null), []);

  useEffect(() => {
    if (!username) return;
    const controller = new AbortController();

    setStats((prev) => ({ ...prev, loading: true, error: null }));

    (async () => {
      try {
        const res = await fetch(`/api/github-stats?username=${username}`, {
          signal: controller.signal,
        });
        const data = await res.json();

        if (data.error) {
          setStats({
            repoCount: null,
            commitCount: null,
            loading: false,
            error: data.error,
          });
        } else {
          setStats({
            repoCount: data.repoCount,
            commitCount: data.commitCount,
            loading: false,
            error: null,
          });
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          setStats((prev) => ({ ...prev, error: err.message, loading: false }));
        }
      }
    })();

    return () => controller.abort();
  }, [username]);

  if (stats.loading) return <LoadingState username={username} />;
  if (stats.error) return <ErrorState error={stats.error} />;

  const statItems = [
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
  ];

  return (
    <div className="flex flex-col gap-20 lg:flex-row lg:items-start lg:justify-between">
      <div className="flex flex-1 flex-col gap-6 md:gap-8 lg:gap-10">
        <div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.8] tracking-[-0.08em] text-black dark:text-white">
            github
            <br />
            statistics
          </h1>

          <div className="mt-4 flex items-center gap-1">
            <FaUser className="h-4 w-4 text-black/50 dark:text-white/50" />
            <p className="text-lg text-black/50 dark:text-white/50">
              @{username}
            </p>
          </div>
        </div>

        <h2 className="mb-8 text-xl md:text-2xl lg:text-3xl font-extralight leading-[1.1] text-black dark:text-white">
          Real-time insights into development activity.{" "}
          <span className="font-bold">
            From repository management to commit history, these metrics showcase
            the dedication behind building exceptional digital experiences.
          </span>
        </h2>
      </div>

      <section className="mt-6 flex flex-1 flex-col md:mt-8">
        {statItems.map((item) => (
          <StatItem
            key={item.title}
            {...item}
            hoveredItem={hoveredItem}
            onHover={() => handleHover(item.title.toLowerCase())}
            onLeave={handleLeave}
          />
        ))}
      </section>
    </div>
  );
}
