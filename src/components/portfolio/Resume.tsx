"use client";

import { useEffect, useRef } from "react";

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".scroll-animate").forEach((child) =>
            child.classList.add("animate-in")
          );
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

export default function Resume() {
  const ref = useInView();

  return (
    <section
      id="resume"
      className="section-padding"
      style={{ position: "relative", zIndex: 2 }}
    >
      <div className="section-container" ref={ref}>
        <h2 className="section-title scroll-animate">
          My <span className="highlight gradient-text">Resume</span>
        </h2>
        <p className="section-subtitle scroll-animate stagger-1">
          A snapshot of my professional journey
        </p>

        <div
          className="scroll-animate animate-zoom stagger-2"
          style={{
            maxWidth: 700,
            margin: "0 auto",
          }}
        >
          <div
            className="glass-card"
            style={{
              padding: "40px 32px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: 70,
                height: 70,
                borderRadius: 16,
                background: "rgba(79,143,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
                fontSize: "1.8rem",
              }}
            >
              📄
            </div>
            <h3
              style={{
                fontSize: "1.3rem",
                fontWeight: 600,
                marginBottom: 10,
              }}
            >
              Kethavath Anil
            </h3>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.92rem",
                marginBottom: 8,
              }}
            >
              B.Tech in Computer Science and Engineering
            </p>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.85rem",
                marginBottom: 30,
              }}
            >
              Vardhaman College of Engineering | 2023 – 2027
            </p>

            {/* Preview area */}
            <div
              style={{
                background: "var(--input-bg)",
                borderRadius: 12,
                padding: "32px 24px",
                marginBottom: 28,
                border: "1px dashed var(--glass-border)",
                minHeight: 120,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--text-muted)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              <p style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>
                Resume preview
              </p>
            </div>

            <div
              style={{
                display: "flex",
                gap: 14,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                View Resume
              </a>
              <a href="/resume.pdf" download className="btn-primary">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}