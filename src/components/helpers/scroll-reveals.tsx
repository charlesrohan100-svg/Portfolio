"use client";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/helper/gsap";

export function ScrollReveals() {
  useGSAP(() => {
    ScrollTrigger.batch("[data-reveal='fade-up']", {
      once: true,
      start: "top 85%",
      onEnter: (elements) => {
        gsap.from(elements, {
          y: 24,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.08,
        });
      },
    });
  });

  return null;
}
