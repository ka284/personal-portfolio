"use client";

import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setFadeOut(true), 1800);
    const timer2 = setTimeout(() => setVisible(false), 2300);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--bg-primary)",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.5s ease",
        pointerEvents: fadeOut ? "none" : "all",
      }}
    >
      <div
        style={{
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: "var(--gradient-primary)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.6rem",
          fontWeight: 800,
          color: "#fff",
          animation: "glow 1.5s ease-in-out infinite",
          marginBottom: 24,
        }}
      >
        KA
      </div>
      <div
        style={{
          width: 200,
          height: 3,
          background: "var(--glass-border)",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "40%",
            height: "100%",
            background: "var(--gradient-primary)",
            borderRadius: 2,
            animation: "shimmer 1.5s ease-in-out infinite",
            backgroundSize: "200% 100%",
          }}
        />
      </div>
    </div>
  );
}