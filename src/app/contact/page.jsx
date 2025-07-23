import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="flex flex-col lg:flex-row lg:gap-5 lg:items-center lg:justify-between mt-[88px] md:mt-[104px] lg:mt-[104px] px-8 py-6 md:px-10 md:py-8 lg:px-16 lg:py-8">
      <h1 className="text-black font-extrabold text-7xl md:text-8xl lg:text-9xl leading-14 md:leading-20 lg:leading-26 -tracking-widest pb-8 max-w-[450px] lg:min-w-[420px]">
        get in
        <br />
        <span className="block ml-12 md:ml-16 lg:ml-20">touch</span>
      </h1>

      <div>
        <div className="flex max-w-[480px] flex-col gap-6">
          <h2 className="text-sm md:text-base">
            Unleash the full power of your online presence through our
            all-encompassing digital services.
          </h2>

          <p className="text-sm md:text-base">
            Our team of experts is dedicated to propelling your business forward
            with tailor-made strategies.
          </p>

          <p className="text-sm md:text-base font-bold">Let’s get to work</p>
        </div>

        <ContactForm />
      </div>
    </main>
  );
}
