"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactContent() {
  const containerRef = useRef();

  useGSAP(
    () => {
      gsap.set(".text-block", { opacity: 0 });

      const tl = gsap.timeline().delay(2.3);

      tl.to(".text-block", {
        opacity: 1,
        duration: 0.7,
        ease: "power1.out",
        stagger: 0.1,
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="flex flex-1 flex-col gap-6 md:gap-8 lg:gap-10 lg:mt-8"
    >
      <div className="flex flex-col gap-4 text-xl font-extralight leading-[1.1] text-black dark:text-white md:text-xl lg:text-2xl">
        <h2 className="text-block">
          I bring your ideas to life with clean, efficient, and modern frontend
          solutions.
        </h2>
        <h2 className="text-block">
          Let's build fast, responsive, and user-friendly websites tailored just
          for you.
        </h2>
        <p className="text-block text-sm font-black md:text-base">
          Let's get to work!
        </p>
      </div>

      <div>
        <ContactForm />
      </div>
    </section>
  );
}
