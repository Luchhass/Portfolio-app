"use client";

import { useEffect, useState } from "react";
import { FaCodeBranch, FaCode, FaUser, FaSpinner } from "react-icons/fa";
import { MdError } from "react-icons/md";

export default function GithubStats({ username = "octocat" }) {
  const [repoCount, setRepoCount] = useState(null);
  const [commitCount, setCommitCount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    if (!username) return;

    setLoading(true);
    setError(null);

    fetch(`/api/github-stats?username=${username}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setRepoCount(data.repoCount);
          setCommitCount(data.commitCount);
        }
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [username]);

  if (loading) {
    return (
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <FaSpinner className="w-8 h-8 text-[#f37a35] animate-spin" />
            <div>
              <h3 className="text-2xl font-bold text-black mb-1">
                Loading GitHub Stats...
              </h3>
              <p className="text-gray-600">Fetching data for @{username}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 p-8 bg-red-50 rounded-lg border border-red-200">
            <div className="p-3 bg-red-100 rounded-lg">
              <MdError className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-red-800 mb-1">
                Error Loading Stats
              </h3>
              <p className="text-red-600">{error}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-20">
      <div className="flex-1 flex flex-col gap-6 md:gap-8 lg:gap-10">
        <div>
          <h1 className="text-black dark:text-white text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.8] tracking-[-0.09em]">
            github
            <br />
            statistics
          </h1>

          <div className="flex items-center gap-1 mt-4">
            <FaUser className="w-4 h-4 text-black/30" />
            <p className="text-black/30 text-lg">@{username}</p>
          </div>
        </div>

        <p className="text-black/90 dark:text-white/90 text-lg md:text-xl lg:text-2xl">
          Real-time insights into development activity. From repository
          management to commit history, these metrics showcase the dedication
          behind building exceptional digital experiences.
        </p>
      </div>

      <section className="flex-1 flex flex-col mt-6 md:mt-8">
        <div
          onMouseEnter={() => setHoveredItem("repositories")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div
            className={`text-black dark:text-white text-xl md:text-2xl py-4 font-black uppercase leading-[0.8] tracking-[-0.09em] ${
              hoveredItem === "repositories"
                ? "border-b-0"
                : "border-b-3 border-[#f37a35]"
            }`}
          >
            repositories
          </div>

          {hoveredItem === "repositories" && (
            <div className="p-4 border-b-3 border-b-[#f37a35]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#f37a35] rounded-full flex items-center justify-center">
                  <FaCodeBranch className="w-4 h-4 text-white" />
                </div>
                <div className="flex gap-4 justify-between items-center">
                  <p className="text-sm text-black dark:text-white">
                    Public Repositories
                  </p>
                  <p className="text-2xl font-bold text-black dark:text-white">
                    {repoCount !== null ? repoCount : "---"}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div
          onMouseEnter={() => setHoveredItem("commits")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div
            className={`text-black dark:text-white text-xl md:text-2xl py-4 font-black uppercase leading-[0.8] tracking-[-0.09em] ${
              hoveredItem === "commits"
                ? "border-b-0"
                : "border-b-3 border-[#f37a35]"
            }`}
          >
            commits
          </div>

          {hoveredItem === "commits" && (
            <div className="p-4 border-b-3 border-b-[#f37a35]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center">
                  <FaCode className="w-4 h-4 text-white dark:text-black" />
                </div>
                <div className="flex gap-4 justify-between items-center">
                  <p className="text-sm text-black dark:text-white">
                    Total Commits
                  </p>
                  <p className="text-2xl font-bold text-black dark:text-white">
                    {commitCount !== null
                      ? commitCount.toLocaleString()
                      : "---"}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
