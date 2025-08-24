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

  const categories = ["All", "Web Design", "Games", "Interactive UI"];

  useGSAP(
    () => {
      gsap.set(titleRefs.current, {
        x: (index) => (index % 2 === 0 ? "-100vw" : "100vw"),
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
          {
            opacity: 1,
            duration: 1.35,
            ease: "elastic.out(1.5, 1.5)",
          },
          "-=1.0"
        )
        .to(
          navItemRefs.current,
          {
            y: 0,
            duration: 1,
            ease: "elastic.out(1.5, 1.5)",
            stagger: 0.15,
          },
          "-=1.2"
        )
        .to(
          buttonsRef.current,
          {
            opacity: 1,
            duration: 0.85,
            ease: "back.out(1.5)",
          },
          "-=0.8"
        );
    },
    { scope: containerRef }
  );

  useGSAP(
    () => {
      const updateTilt = (rotateX, rotateY) => {
        titleRefs.current.forEach((el) => {
          if (el) {
            gsap.to(el, {
              rotateX: rotateX * 0.9,
              rotateY: rotateY * 0.9,
              duration: 0.5,
              ease: "power3.out",
              transformPerspective: 1000,
              transformOrigin: "center",
            });
          }
        });

        if (paragraphRef.current) {
          gsap.to(paragraphRef.current, {
            rotateX: rotateX * 0.9,
            rotateY: rotateY * 0.9,
            duration: 0.5,
            ease: "power3.out",
            transformPerspective: 1000,
            transformOrigin: "center",
          });
        }
      };

      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const xPos = (clientX / innerWidth - 0.5) * 2;
        const yPos = (clientY / innerHeight - 0.5) * 2;
        updateTilt(-yPos * 20, xPos * 20);
      };

      const handleDeviceOrientation = (e) => {
        const { gamma, beta } = e;
        const rotateY = (gamma / 45) * 20;
        const rotateX = -((beta - 45) / 45) * 20;
        updateTilt(rotateX, rotateY);
      };

      window.addEventListener("mousemove", handleMouseMove);
      if (window.DeviceOrientationEvent) {
        window.addEventListener("deviceorientation", handleDeviceOrientation);
      }

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        if (window.DeviceOrientationEvent) {
          window.removeEventListener(
            "deviceorientation",
            handleDeviceOrientation
          );
        }
      };
    },
    { scope: containerRef }
  );

  useGSAP(
    () => {
      const nav = containerRef.current.querySelector("nav");
      const navUl = nav.querySelector("ul");
      let navOffsetTop = nav.offsetTop;

      const getFixedTopOffset = () => {
        if (window.innerWidth >= 1024) return 42;
        if (window.innerWidth >= 768) return 106;
        return 90;
      };

      let fixedTopOffset = getFixedTopOffset();

      const onResize = () => {
        fixedTopOffset = getFixedTopOffset();
        navOffsetTop = nav.offsetTop;
      };

      const onScroll = () => {
        const triggerPoint = navOffsetTop - fixedTopOffset;

        const isAtBottom =
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 10;

        if (window.scrollY >= triggerPoint && !isAtBottom) {
          gsap.set(nav, {
            position: "fixed",
            top: `${fixedTopOffset}px`,
            left: 0,
            right: 0,
            zIndex: 50,
            backgroundColor:
              window.innerWidth < 1024 ? "#ffffff" : "transparent",
            borderBottomWidth: window.innerWidth < 1024 ? "2px" : "0px",
            borderColor: window.innerWidth < 1024 ? "#e5e7eb" : "transparent",
            opacity: 1,
          });
        } else if (isAtBottom) {
          gsap.to(nav, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        } else {
          gsap.set(nav, { clearProps: "all" });
          gsap.set(navUl, { clearProps: "all" });
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
      className="px-8 py-6 md:px-10 md:py-8 lg:px-16 lg:py-8 h-[calc(100vh-90px)] md:h-[calc(100vh-106px)] lg:min-h-[100vh] flex flex-col justify-between overflow-x-hidden"
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
          <ul className="inline-flex flex-wrap gap-x-4 gap-y-2 md:gap-8 lg:gap-10">
            {categories.map((category, index) => (
              <li
                key={category}
                ref={(el) => (navItemRefs.current[index] = el)}
              >
                <button
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

        {/* 
        <div ref={buttonsRef} className="flex flex-1 justify-end gap-2">
          {["grid", "list"].map((mode) => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              className={`p-2 rounded transition-colors duration-300 ${
                viewMode === mode
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-black/10 text-black dark:bg-white/10 dark:text-white"
              }`}
              title={`${mode.charAt(0).toUpperCase() + mode.slice(1)} View`}
              aria-pressed={viewMode === mode}
            >
              {mode === "grid" ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <rect x="3" y="4" width="18" height="2" rx="1" />
                  <rect x="3" y="11" width="18" height="2" rx="1" />
                  <rect x="3" y="18" width="18" height="2" rx="1" />
                </svg>
              )}
            </button>
          ))} 
        </div>
        */}
      </div>
    </section>
  );
}
