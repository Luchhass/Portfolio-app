"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function ProjectsHero({
  activeFilter,
  setActiveFilter,
  viewMode,
  setViewMode,
}) {
  const containerRef = useRef(null);
  const titleRefs = useRef([]);
  const paragraphRef = useRef();
  const navItemRefs = useRef([]);
  const buttonsRef = useRef();
  const originalNavOffsetTop = useRef(null);
  const isNavFixed = useRef(false);

  const categories = ["All", "Web Design", "Games", "Interactive UI"];

  // Açılış animasyonu
  useGSAP(
    () => {
      gsap.set(titleRefs.current, {
        x: (i) => (i % 2 === 0 ? "-100vw" : "100vw"),
      });
      gsap.set(paragraphRef.current, { opacity: 0 });
      gsap.set(navItemRefs.current, { y: "20vh" });
      gsap.set(buttonsRef.current, { opacity: 0 });

      const tl = gsap.timeline().delay(1.8);
      tl.to(titleRefs.current, {
        x: "0vw",
        duration: 1.35,
        ease: "elastic.out(1.5, 1.5)",
        stagger: 0.1,
      })
        .to(
          paragraphRef.current,
          { opacity: 1, duration: 1.35, ease: "elastic.out(1.5, 1.5)" },
          "-=0.9"
        )
        .to(
          navItemRefs.current,
          { y: 0, duration: 1, ease: "elastic.out(1.5, 1.5)", stagger: 0.15 },
          "-=1.2"
        )
        .to(
          buttonsRef.current,
          { opacity: 1, duration: 0.85, ease: "back.out(1.5)" },
          "-=0.8"
        );
    },
    { scope: containerRef }
  );

  // Title ve paragraph tilt efekti
  useGSAP(
    () => {
      const tilt = (rotateX, rotateY) => {
        [...titleRefs.current, paragraphRef.current].forEach((el) => {
          if (el)
            gsap.to(el, {
              rotateX: rotateX * 0.9,
              rotateY: rotateY * 0.9,
              duration: 0.5,
              ease: "power3.out",
              transformPerspective: 1000,
              transformOrigin: "center",
            });
        });
      };

      const onMouseMove = (e) => {
        const xPos = (e.clientX / window.innerWidth - 0.5) * 2;
        const yPos = (e.clientY / window.innerHeight - 0.5) * 2;
        tilt(-yPos * 20, xPos * 20);
      };

      const onDeviceOrientation = (e) => {
        const rotateY = (e.gamma / 45) * 20;
        const rotateX = -((e.beta - 45) / 45) * 20;
        tilt(rotateX, rotateY);
      };

      window.addEventListener("mousemove", onMouseMove);
      if (window.DeviceOrientationEvent)
        window.addEventListener("deviceorientation", onDeviceOrientation);

      return () => {
        window.removeEventListener("mousemove", onMouseMove);
        if (window.DeviceOrientationEvent)
          window.removeEventListener("deviceorientation", onDeviceOrientation);
      };
    },
    { scope: containerRef }
  );

  // Navbar sabitleme ve background animasyonu
  useGSAP(
    () => {
      const nav = containerRef.current.querySelector("nav");
      const navUl = nav.querySelector("ul");

      const getFixedTopOffset = () =>
        window.innerWidth >= 1024 ? 110 : window.innerWidth >= 768 ? 130 : 120;

      let fixedTopOffset = getFixedTopOffset();

      const calculateNavPosition = () => {
        if (!isNavFixed.current) {
          gsap.set(nav, { clearProps: "all" });
          gsap.set(navUl, { clearProps: "all" });
          requestAnimationFrame(
            () => (originalNavOffsetTop.current = nav.offsetTop)
          );
        }
      };
      calculateNavPosition();

      const onResize = () => {
        fixedTopOffset = getFixedTopOffset();
        if (isNavFixed.current) {
          isNavFixed.current = false;
          gsap.killTweensOf(nav);
        }
        calculateNavPosition();
      };

      const onScroll = () => {
        if (originalNavOffsetTop.current === null) return;
        const triggerPoint = originalNavOffsetTop.current - fixedTopOffset;
        const currentScrollY = window.scrollY;
        const isAtBottom =
          window.innerHeight + currentScrollY >=
          document.documentElement.scrollHeight - 50;

        if (currentScrollY >= triggerPoint && !isAtBottom) {
          if (!isNavFixed.current) {
            isNavFixed.current = true;
            gsap.set(nav, {
              position: "fixed",
              top: `${fixedTopOffset}px`,
              left: "32px",
              right: "32px",
              margin: "0 auto",
              width: "fit-content",
              zIndex: 50,
              opacity: 1,
              borderRadius: "9999px",
              backgroundColor: "rgba(0,0,0,0)",
              backdropFilter: "blur(0px)",
            });
            gsap.to(nav, {
              backgroundColor: "rgba(0,0,0,0.15)",
              backdropFilter: "blur(20px)",
              duration: 0.5,
              ease: "back.out(1.3)",
            });
          } else gsap.set(nav, { opacity: 1 });
        } else {
          if (isNavFixed.current) {
            isNavFixed.current = false;
            gsap.killTweensOf(nav);
            gsap.set(nav, {
              clearProps: "all",
              opacity: 1,
              backgroundColor: "transparent",
              backdropFilter: "none",
            });
            gsap.set(navUl, { clearProps: "all" });
            requestAnimationFrame(
              () => (originalNavOffsetTop.current = nav.offsetTop)
            );
          }
        }
      };

      window.addEventListener("scroll", onScroll);
      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onResize);
      };
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="px-8 py-6 md:px-10 md:py-8 lg:px-16 lg:py-8 h-[calc(100svh-90px)] md:h-[calc(100svh-106px)] lg:min-h-[100svh] flex flex-col justify-between overflow-x-hidden"
    >
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-[600px] md:max-w-[850px] lg:max-w-[1200px] flex flex-col gap-6 md:gap-8 lg:gap-10 text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.8] tracking-[-0.08em] text-black dark:text-white">
            <span
              ref={(el) => (titleRefs.current[0] = el)}
              className="inline-block"
            >
              what I've
            </span>
            <br />
            <span
              ref={(el) => (titleRefs.current[1] = el)}
              className="inline-block"
            >
              been building
            </span>
          </h1>
          <p
            ref={paragraphRef}
            className="text-xl md:text-2xl lg:text-3xl font-extralight leading-[1.1] text-black dark:text-white"
          >
            Each project here reflects my approach to design, code, and
            problem-solving.{" "}
            <span className="font-bold">
              From concept to execution, every detail has been carefully
              considered and built with intent.
            </span>
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 z-10">
        <nav className="flex-1 flex justify-center">
          <ul className="inline-flex flex-wrap gap-x-4 gap-y-2 md:gap-8 lg:gap-10 px-4 py-4 md:px-12 md:py-6 lg:px-16 justify-center">
            {categories.map((category, index) => (
              <li key={index}>
                <button
                  ref={(el) => (navItemRefs.current[index] = el)}
                  onClick={() => setActiveFilter(category)}
                  className={`text-lg md:text-xl font-light transition-colors duration-300 ${
                    activeFilter === category
                      ? "text-black/30 dark:text-white/30"
                      : "text-black dark:text-white"
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
