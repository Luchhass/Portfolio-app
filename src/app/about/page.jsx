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
    <main className="flex flex-col gap-24 md:gap-36 lg:gap-48">
      <AboutHero />

      <section>
        <ScrollTextBand text="FURKAN" repeat={7} />

        <div className="flex flex-col gap-32 m-auto px-8 max-w-[600px] md:px-10 md:max-w-[850px] lg:px-16 lg:max-w-[1200px]">
          <CreatorParagraphs />
        </div>
      </section>

      <section className="flex flex-col gap-24 md:gap-36 lg:gap-48 m-auto px-8 max-w-[600px] md:px-10 md:max-w-[850px] lg:px-16 lg:max-w-[1200px]">
        <GithubStats username="Luchhass" />
        <TechnologiesStats />
      </section>

      <ContactCTA />
    </main>
  );
}
