import AboutHero from "@/components/about/AboutHero";
import CreatorParagraphs from "@/components/about/CreatorParagraphs";
import GithubStats from "@/components/about/GithubStats";
import TechnologiesStats from "@/components/about/TechnologiesStats";
import ContactCTA from "@/components/ContactCTA";
import ScrollTextBand from "@/components/ScrollTextBand";

export const metadata = {
  title: "Furkan Cosar | About Me",
  description:
    "Hi, I'm Furkan Cosar. I design and develop modern, high-performance websites using Next.js, React, GSAP, and Tailwind CSS. Learn more about my skills, projects, and tools I use.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      <AboutHero />
      <ScrollTextBand text="FURKAN" repeat={7} />

      <section className="flex flex-col gap-32 m-auto px-8 max-w-[600px] md:px-10 md:max-w-[850px] lg:px-16 lg:max-w-[1200px]">
        <CreatorParagraphs />
        <GithubStats username="Luchhass" />
        <TechnologiesStats />
      </section>

      <ContactCTA />
    </main>
  );
}
