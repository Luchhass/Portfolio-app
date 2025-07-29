"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Lottie from "lottie-react";
import welcomeText from "/public/animations/welcomeText.json";
import { usePathname } from "next/navigation";

export default function PageIntroAnimation() {
  const lottieRef = useRef();
  const containerRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const tl = gsap.timeline();

    gsap.set(containerRef.current, { pointerEvents: "auto" });

    const fadeStartTime = pathname === "/" ? "3" : "1.1";

    gsap.set(".orange-box", { y: "0%" });
    gsap.set(".black-box", { y: "0%" });
    gsap.set(".white-box", { opacity: 1 });

    tl.to(".orange-box", {
      y: "-100%",
      duration: 1.3,
      ease: "power3.inOut",
    })
      .to(
        ".black-box",
        {
          y: "-100%",
          duration: 1,
          ease: "power2.inOut",
        },
        "0.2"
      )
      .call(
        () => {
          if (pathname === "/" && lottieRef.current) {
            lottieRef.current.play();
          }
        },
        [],
        "1"
      )
      .to(
        ".white-box",
        {
          opacity: 0,
          duration: 1.5,
          ease: "power4.inOut",
        },
        fadeStartTime
      )
      .set(containerRef.current, { pointerEvents: "none" }, fadeStartTime);
  }, [pathname]);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-dvh z-50 overflow-hidden"
    >
      <div className="orange-box absolute w-full h-full z-30 bg-[#f37a35]"></div>
      <div className="black-box absolute w-full h-full z-20 bg-black dark:bg-white"></div>
      <div className="white-box absolute w-full h-full z-10 bg-white dark:bg-black flex items-center justify-center">
        {pathname === "/" && (
          <Lottie
            lottieRef={lottieRef}
            animationData={welcomeText}
            loop={false}
            autoplay={false}
            className="w-100 md:w-120 lg:w-150"
          />
        )}
      </div>
    </div>
  );
}
