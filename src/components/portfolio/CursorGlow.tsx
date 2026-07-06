"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

function useIsDesktop() {
  return useSyncExternalStore(
    (cb) => {
      const mql = window.matchMedia("(pointer: coarse)");
      mql.addEventListener("change", cb);
      return () => mql.removeEventListener("change", cb);
    },
    () => !window.matchMedia("(pointer: coarse)").matches,
    () => true
  );
}

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();

  useEffect(() => {
    if (!isDesktop) return;

    const move = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX + "px";
        glowRef.current.style.top = e.clientY + "px";
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        width: 350,
        height: 350,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(79,143,255,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 1,
        transform: "translate(-50%, -50%)",
        willChange: "transform, left, top",
        transition: "left 0.05s linear, top 0.05s linear",
      }}
    />
  );
}