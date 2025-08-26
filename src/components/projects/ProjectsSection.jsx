"use client";

import { useState } from "react";
import ProjectsHero from "./ProjectsHero";
import ProjectsList from "./ProjectsList";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [viewMode, setViewMode] = useState("grid");

  return (
    <>
      <ProjectsHero
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />
      <ProjectsList activeFilter={activeFilter} viewMode={viewMode} />
    </>
  );
}
