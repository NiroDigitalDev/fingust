"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function ParallaxBg({
  children,
  speed = 0.15,
}: {
  children: ReactNode;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (ref.current) {
            const y = window.scrollY * speed;
            ref.current.style.transform = `translateY(${y}px) scale(1.1)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className="absolute inset-0 z-0 will-change-transform">
      {children}
    </div>
  );
}
