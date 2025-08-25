import Hero from "@/components/home/Hero";
import ScrollTextBand from "@/components/ScrollTextBand";
import ProjectHighlights from "@/components/home/ProjectHighlights";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />

      <div className="py-12 md:py-14 lg:py-16">
        <ScrollTextBand text="WELCOME" repeat={7} />
      </div>
      
      <ProjectHighlights />
      <ContactCTA />
    </main>
  );
}
