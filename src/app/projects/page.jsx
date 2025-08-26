import ContactCTA from "@/components/ContactCTA";
import ProjectsSection from "@/components/projects/ProjectsSection";

export const metadata = {
  title: "Furkan Cosar | Projects",
  description:
    "Check out the projects I've built, showcasing modern, responsive, and interactive websites using Next.js, React, GSAP, and Tailwind CSS.",
};

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsSection />
      <ContactCTA />
    </main>
  );
}
