"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Lottie from "lottie-react";
import welcomeText from "/public/animations/welcomeText.json";

export default function PageIntroAnimation() {
  const lottieRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

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
          lottieRef.current?.play();
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
        "3"
      );
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-screen z-50 overflow-hidden pointer-events-none">
      <div className="orange-box absolute w-full h-full z-30 bg-[#f37a35]"></div>
      <div className="black-box absolute w-full h-full z-20 bg-black dark:bg-white"></div>
      <div className="white-box absolute w-full h-full z-10 bg-white dark:bg-black flex items-center justify-center">
        <Lottie
          lottieRef={lottieRef}
          animationData={welcomeText}
          loop={false}
          autoplay={false}
          className="w-100 md:w-120 lg:w-150"
        />
      </div>
    </div>
  );
}
