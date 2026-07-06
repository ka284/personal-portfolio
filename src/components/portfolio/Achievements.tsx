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
          el.querySelectorAll(".scroll-animate").forEach((child, i) => {
            setTimeout(() => child.classList.add("animate-in"), i * 100);
          });
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const achievements = [
  {
    icon: "🏆",
    title: "Patent Granted",
    desc: "Patent granted for Autonomous Hazard Mitigation System — an IoT-based laboratory safety innovation.",
    color: "#f59e0b",
  },
  {
    icon: "🟢",
    title: "Active LeetCode Solver",
    desc: "Consistently solving coding problems on LeetCode to sharpen algorithmic and data-structure skills.",
    color: "#22c55e",
  },
  {
    icon: "⭐",
    title: "HackerRank Practice",
    desc: "Regular coding practice on HackerRank across multiple programming languages and problem domains.",
    color: "#8b5cf6",
  },
];

const profiles = [
  {
    name: "GitHub",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
    ),
    color: "#6e40c9",
    href: "#",
  },
  {
    name: "LinkedIn",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    ),
    color: "#0077b5",
    href: "#",
  },
  {
    name: "LeetCode",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16.102 17.93l-2.697 2.607-.106.053-.105-.053-5.648-5.482a.538.538 0 010-.77l.928-.9a.533.533 0 01.752 0l4.074 3.952 4.073-3.951a.533.533 0 01.752 0l.928.9a.538.538 0 010 .77l-2.697 2.607a.533.533 0 01-.754 0v-.033zM13.405 3.463l2.697 2.607.106.053.105-.053 5.648-5.483a.538.538 0 010-.77l-.928-.9a.533.533 0 00-.752 0L16.102 3.62l-4.074-3.952a.533.533 0 00-.752 0l-.928.9a.538.538 0 000 .77l2.697 2.607a.533.533 0 00.36.125zm-7.55 9.59l1.21-1.172a.533.533 0 000-.77L4.518 8.88a.533.533 0 00-.752 0L.725 11.76a.538.538 0 000 .77l.928.9a.533.533 0 00.752 0l2.697-2.607 1.21 1.172a.533.533 0 00.36.125.533.533 0 00.36-.125l-.183.155zm10.394 0l-1.21-1.172a.533.533 0 010-.77l2.548-2.472a.533.533 0 01.752 0l3.04 2.946a.538.538 0 010 .77l-.928.9a.533.533 0 01-.752 0l-2.697-2.607-1.21 1.172a.533.533 0 01-.36.125.533.533 0 01-.36-.125l.177.155z"/></svg>
    ),
    color: "#ffa116",
    href: "#",
  },
  {
    name: "HackerRank",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L1.75 6v12L12 24l10.25-6V6zm0 2.249L20.25 7v10l-8.25 4.75L3.75 17V7z"/></svg>
    ),
    color: "#00ea64",
    href: "#",
  },
];

export default function Achievements() {
  const ref = useInView();

  return (
    <section
      id="achievements"
      className="section-padding"
      style={{ position: "relative", zIndex: 2 }}
    >
      <div className="section-container" ref={ref}>
        <h2 className="section-title scroll-animate">
          My <span className="highlight gradient-text">Achievements</span>
        </h2>
        <p className="section-subtitle scroll-animate stagger-1">
          Milestones and coding profiles
        </p>

        {/* Achievement cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 24,
            marginBottom: 60,
          }}
        >
          {achievements.map((a) => (
            <div
              key={a.title}
              className="glass-card scroll-animate animate-zoom"
              style={{ padding: "28px 24px", textAlign: "center" }}
            >
              <div
                style={{
                  fontSize: "2.4rem",
                  marginBottom: 14,
                  display: "inline-block",
                  animation: "float 4s ease-in-out infinite",
                }}
              >
                {a.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  marginBottom: 8,
                }}
              >
                {a.title}
              </h3>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.88rem",
                  lineHeight: 1.7,
                }}
              >
                {a.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Coding profiles */}
        <h3
          className="scroll-animate"
          style={{
            textAlign: "center",
            fontSize: "1.4rem",
            fontWeight: 600,
            marginBottom: 30,
          }}
        >
          Coding <span className="gradient-text">Profiles</span>
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 20,
            maxWidth: 1000,
            margin: "0 auto",
          }}
        >
          {profiles.map((p) => (
            <a
              key={p.name}
              href={p.href}
              className="glass-card scroll-animate animate-zoom"
              style={{
                padding: "24px 20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 14,
                  background: `${p.color}18`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: p.color,
                }}
              >
                {p.icon}
              </div>
              <span style={{ fontWeight: 600, fontSize: "0.95rem" }}>
                {p.name}
              </span>
              <span
                style={{
                  fontSize: "0.82rem",
                  color: "var(--accent-blue)",
                  fontWeight: 500,
                }}
              >
                Visit Profile →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}