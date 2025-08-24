import ContactContent from "@/components/contact/ContactContent";
import ContactHero from "@/components/contact/ContactHero";

export default function ContactPage() {
  return (
    <main className="m-auto flex min-h-[100vh] flex-col px-8 md:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-22 max-w-[600px] md:max-w-[850px] lg:max-w-[1200px] lg:px-16 lg:mb-2">
      <ContactHero />
      <ContactContent />
    </main>
  );
}
