import gsap from "gsap";

export function initialFX() {
  document.body.style.overflowY = "auto";
  document.querySelector("main")?.classList.add("main-active");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  gsap.fromTo(
    ".landing-copy",
    { autoAlpha: 0, y: 20 },
    { autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out" }
  );
}
