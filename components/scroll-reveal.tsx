"use client";

import { useEffect, useRef, type ReactNode } from "react";

type AnimationType =
  | "reveal"
  | "reveal-scale"
  | "reveal-left"
  | "reveal-right"
  | "reveal-rotate";

export default function ScrollReveal({
  children,
  className = "",
  type = "reveal",
  delay,
  threshold = 0.15,
}: {
  children: ReactNode;
  className?: string;
  type?: AnimationType;
  delay?: number;
  threshold?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("active");
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`${type} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
