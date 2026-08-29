"use client";

import { ReactLenis, useLenis } from "lenis/react";
import Snap from "lenis/snap";
import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/helper/gsap";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    lenis.on("scroll", ScrollTrigger.update);

    const update = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.refresh();
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let snap: Snap | undefined;
    if (!prefersReducedMotion) {
      snap = new Snap(lenis, {
        type: "proximity",
        duration: 2,
        easing: (t) => 1 - Math.pow(1 - t, 3),
        debounce: 3000,
      });
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("[data-snap-section]"),
      );
      snap.addElements(sections, { align: "start" });
    }

    return () => {
      gsap.ticker.remove(update);
      snap?.destroy();
    };
  }, [lenis]);

  return (
    <ReactLenis root autoRaf={false}>
      {children}
    </ReactLenis>
  );
}
