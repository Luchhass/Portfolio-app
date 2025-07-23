import ContactForm from "@/components/ContactForm";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="flex flex-col gap-18 lg:min-h-[calc(100vh-104px)] lg:flex-row lg:items-center lg:justify-center mt-[88px] md:mt-[104px] px-8 py-6 md:px-10 md:py-8 lg:px-16 lg:py-8">
      <div className="flex justify-center relative py-10 m-auto lg:m-0">
        <div className="ml-32 z-0">
          <Image
            src="/images/contact-page-hero.jpg"
            alt="Scenic coastal view with city skyline"
            width={200}
            height={100}
            className="rounded-3xl object-cover shadow-2xl w-55 h-38 md:w-62 md:h-45 lg:w-89 lg:h-62"
            style={{
              transform: " rotateZ(-10deg)",
            }}
          />
        </div>

        <div className="absolute bottom-0 left-5 z-1 md:left-10 lg:left-0">
          <h1 className="text-white font-black text-7xl md:text-8xl lg:text-9xl leading-[0.85] tracking-[-0.07em]">
            get in
            <br />
            <span className="block ml-16 md:ml-20 lg:ml-24">
              touch
            </span>
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-18 mb-6">
        <div className="flex max-w-[400px] flex-col gap-6">
          <h2 className="text-sm md:text-base">
            Unleash the full power of your online presence through our
            all-encompassing digital services.
          </h2>

          <p className="text-sm md:text-base">
            Our team of experts is dedicated to propelling your business forward
            with tailor-made strategies.
          </p>

          <p className="text-sm md:text-base font-bold">Let’s get to work!</p>
        </div>

        <ContactForm />
      </div>
    </main>
  );
}
