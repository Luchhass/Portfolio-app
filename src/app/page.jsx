import HomeHero from "@/components/home/HomeHero";
import ScrollTextBand from "@/components/ScrollTextBand";
import HomeAbout from "@/components/home/HomeAbout";
import ProjectHighlights from "@/components/home/ProjectHighlights";
import Skills from "@/components/home/Skills";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <main className="overflow-x-hidden flex flex-col gap-24 md:gap-36 lg:gap-48">
      <HomeHero />

      <section>
        <ScrollTextBand text="WELCOME" repeat={7} />

        <div className="m-auto px-8 max-w-[600px] md:px-10 md:max-w-[850px] lg:px-16 lg:max-w-[1200px]">
          <HomeAbout />
        </div>
      </section>

      <ProjectHighlights />
      {/* <Skills /> */}
      <ContactCTA />
    </main>
  );
}
