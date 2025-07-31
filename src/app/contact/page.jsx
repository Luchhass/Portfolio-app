import ContactForm from "@/components/ContactForm";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="flex flex-col lg:flex-row lg:gap-22 lg:items-center lg:justify-between m-auto px-8 max-w-[600px] md:px-10 md:max-w-[850px] lg:px-16 lg:max-w-[1200px]">
      {/* Contact Page Hero Section */}
      <section className="flex-1 relative flex justify-center m-auto lg:m-0 my-32 md:my-42 lg:my-52">
        <div className="relative -top-10 ml-32 z-0">
          <Image
            src="/images/contact-page-hero.jpg"
            alt="Scenic coastal view with city skyline"
            width={2000}
            height={2000}
            className="w-55 h-38 md:w-62 md:h-45 lg:w-89 lg:h-62 rounded-3xl object-cover shadow-2xl"
            style={{ transform: "rotateZ(-10deg)" }}
          />
        </div>

        <h1 className="absolute top-13 left-0 z-10 text-black dark:text-white font-black text-7xl md:text-8xl lg:text-9xl leading-[0.85] tracking-[-0.07em]">
          get in
          <br />
          <span className="block ml-16 md:ml-20 lg:ml-24">touch</span>
        </h1>
      </section>

      {/* Contact Page Form Section */}
      <section className="flex-1 flex flex-col gap-6 md:gap-8 lg:gap-10 lg:mt-8">
        <div className="flex flex-col gap-4 text-xl md:text-xl lg:text-2xl font-extralight leading-[1.1] text-black dark:text-white">
          <h2>
            I bring your ideas to life with clean, efficient, and modern
            frontend solutions.
          </h2>

          <h2>
            Let’s build fast, responsive, and user-friendly websites tailored
            just for you.
          </h2>

          <p className="text-sm md:text-base font-black">Let’s get to work!</p>
        </div>

        <ContactForm />
      </section>
    </main>
  );
}
