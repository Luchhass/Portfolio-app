import ContactContent from "@/components/contact/ContactContent";
import ContactHero from "@/components/contact/ContactHero";

export const metadata = {
  title: "Furkan Cosar | Contact",
  description:
    "Get in touch with me! Feel free to contact me regarding projects, collaborations, or any questions about modern web development.",
};

export default function ContactPage() {
  return (
    <main className="m-auto flex min-h-[100vh] flex-col px-8 md:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-22 max-w-[600px] md:max-w-[850px] lg:max-w-[1200px] lg:px-16 lg:mb-2">
      <ContactHero />
      <ContactContent />
    </main>
  );
}
