import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Highlights from "./Highlights";
import Landing from "./Landing";
import Navbar from "./Navbar";
import WhatIDo from "./WhatIDo";
import Work from "./Work";

gsap.registerPlugin(ScrollTrigger);

const MainContainer = () => {
  const portfolioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const context = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          }
        );
      });
    }, portfolioRef);

    return () => context.revert();
  }, []);

  return (
    <div className="portfolio-shell" ref={portfolioRef}>
      <Navbar />
      <main className="container-main">
        <Landing />
        <About />
        <WhatIDo />
        <Career />
        <Work />
        <Highlights />
        <Contact />
      </main>
    </div>
  );
};

export default MainContainer;
