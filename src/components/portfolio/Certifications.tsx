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

const certs = [
  {
    name: "HP Data Science & Analytics",
    org: "HP",
    icon: "📊",
  },
  {
    name: "Microsoft Web Development with VS Code",
    org: "Microsoft",
    icon: "💻",
  },
  {
    name: "AWS Cloud Practitioner Essentials",
    org: "Amazon Web Services",
    icon: "☁️",
  },
  {
    name: "Cambridge Linguaskill",
    org: "Cambridge Assessment",
    icon: "🌍",
  },
  {
    name: "FreeCodeCamp Responsive Web Design",
    org: "FreeCodeCamp",
    icon: "🎨",
  },
];

export default function Certifications() {
  const ref = useInView();

  return (
    <section
      id="certifications"
      className="section-padding"
      style={{ position: "relative", zIndex: 2 }}
    >
      <div className="section-container" ref={ref}>
        <h2 className="section-title scroll-animate">
          My <span className="highlight gradient-text">Certifications</span>
        </h2>
        <p className="section-subtitle scroll-animate stagger-1">
          Professional credentials and achievements
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          {certs.map((c) => (
            <div
              key={c.name}
              className="glass-card scroll-animate animate-zoom"
              style={{
                padding: "28px 24px",
                display: "flex",
                alignItems: "center",
                gap: 18,
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background: "rgba(79,143,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.6rem",
                  flexShrink: 0,
                }}
              >
                {c.icon}
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    marginBottom: 3,
                    lineHeight: 1.3,
                  }}
                >
                  {c.name}
                </h3>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.85rem",
                  }}
                >
                  {c.org}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}