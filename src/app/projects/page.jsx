"use client";

import ContactCTA from "@/components/ContactCTA";
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsList from "@/components/projects/ProjectsList";
import { useState } from "react";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [viewMode, setViewMode] = useState("grid");

  return (
    <main>
      <ProjectsHero
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />
      <ProjectsList activeFilter={activeFilter} viewMode={viewMode} />
      <ContactCTA />
    </main>
  );
}
