"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/helper/gsap";
import { LogoMark } from "./helpers/logo-mark";

export function Loader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        onComplete: () => setIsVisible(false),
      });

      tl.from("[data-logo]", {
        drawSVG: "0%",
        duration: 1.6,
        ease: "power3.inOut",
      });

      tl.to(containerRef.current, {
        yPercent: -100,
        duration: 1,
        ease: "power4.inOut",
        delay: 0.3,
      });
    },
    { scope: containerRef },
  );

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      data-loader
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950 text-red-500"
    >
      <LogoMark />
    </div>
  );
}
