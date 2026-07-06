"use client";

import { useState, useEffect } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      style={{
        position: "fixed",
        bottom: 28,
        right: 28,
        zIndex: 40,
        width: 46,
        height: 46,
        borderRadius: "50%",
        border: "1px solid var(--glass-border)",
        background: "var(--glass-bg)",
        backdropFilter: "blur(15px)",
        WebkitBackdropFilter: "blur(15px)",
        color: "var(--accent-blue)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        opacity: show ? 1 : 0,
        pointerEvents: show ? "all" : "none",
        transform: show ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.3s ease",
        boxShadow: "0 4px 20px rgba(79,143,255,0.15)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "var(--accent-blue)";
        e.currentTarget.style.color = "#fff";
        e.currentTarget.style.borderColor = "var(--accent-blue)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "var(--glass-bg)";
        e.currentTarget.style.color = "var(--accent-blue)";
        e.currentTarget.style.borderColor = "var(--glass-border)";
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
      </svg>
    </button>
  );
}