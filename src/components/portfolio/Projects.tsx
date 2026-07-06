"use client";

import { useState, useEffect, useRef } from "react";

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".scroll-animate").forEach((child, i) => {
            setTimeout(() => child.classList.add("animate-in"), i * 80);
          });
        }
      },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const projects = [
  {
    title: "Event Management System",
    image: "/images/project-event.png",
    description:
      "A full-stack event booking platform allowing organizers to create events and users to browse and book them through a responsive interface.",
    tech: ["HTML", "CSS", "PHP", "MySQL"],
    features: [
      "Event creation & management",
      "User booking system",
      "Responsive design",
      "Admin dashboard",
    ],
    category: "Web",
    github: "#",
    demo: "#",
  },
  {
    title: "Multimedia Steganography System",
    image: "/images/project-steganography.png",
    description:
      "Secure multimedia steganography application using AES encryption to hide confidential information inside multimedia files.",
    tech: ["Python", "HTML", "CSS", "JavaScript", "AES"],
    features: [
      "AES encryption",
      "File encoding/decoding",
      "Secure data hiding",
      "User-friendly interface",
    ],
    category: "Python",
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    image: "/images/project-portfolio.png",
    description:
      "Responsive portfolio showcasing projects, skills, certifications, achievements, and contact information with modern UI and smooth animations.",
    tech: ["HTML", "CSS", "JavaScript"],
    features: [
      "Dark/Light mode",
      "Responsive design",
      "Smooth animations",
      "SEO optimized",
    ],
    category: "Web",
    github: "#",
    demo: "#",
  },
  {
    title: "Autonomous Hazard Mitigation System",
    image: "/images/project-iot.png",
    description:
      "An IoT-based laboratory safety system capable of detecting hazardous conditions and triggering alerts automatically.",
    tech: ["Arduino", "IoT", "Sensors"],
    features: [
      "Real-time detection",
      "Auto alerts",
      "Sensor integration",
      "Safety automation",
    ],
    category: "IoT",
    github: "#",
    demo: "#",
  },
];

const filters = ["All", "Web", "Python", "IoT"];

/* Arrow SVGs */
const ArrowUpRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
);
const GitHubSmall = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
);

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const ref = useInView();

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding" style={{ position: "relative", zIndex: 2 }}>
      <div className="section-container" ref={ref}>
        <h2 className="section-title scroll-animate">
          My <span className="highlight gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle scroll-animate stagger-1">
          Showcasing my recent work
        </p>

        {/* Filter buttons */}
        <div
          className="scroll-animate stagger-2"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 10,
            marginBottom: 40,
            flexWrap: "wrap",
          }}
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                padding: "8px 22px",
                borderRadius: 30,
                border:
                  activeFilter === f
                    ? "none"
                    : "1px solid var(--glass-border)",
                background:
                  activeFilter === f
                    ? "var(--gradient-primary)"
                    : "var(--glass-bg)",
                color: activeFilter === f ? "#fff" : "var(--text-secondary)",
                fontFamily: "var(--font-poppins)",
                fontSize: "0.88rem",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.3s ease",
                backdropFilter: activeFilter !== f ? "blur(10px)" : "none",
              }}
              onMouseEnter={(e) => {
                if (activeFilter !== f)
                  e.currentTarget.style.borderColor = "var(--accent-blue)";
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== f)
                  e.currentTarget.style.borderColor = "var(--glass-border)";
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 28,
          }}
        >
          {filtered.map((proj) => (
            <article
              key={proj.title}
              className="glass-card scroll-animate animate-zoom"
              style={{
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Image */}
              <div
                style={{
                  height: 190,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.08)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, var(--bg-primary), transparent 60%)",
                    pointerEvents: "none",
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: "22px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    marginBottom: 8,
                  }}
                >
                  {proj.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.88rem",
                    lineHeight: 1.6,
                    marginBottom: 14,
                    flex: 1,
                  }}
                >
                  {proj.description}
                </p>

                {/* Tech badges */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 6,
                    marginBottom: 14,
                  }}
                >
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        padding: "3px 10px",
                        borderRadius: 20,
                        fontSize: "0.75rem",
                        fontWeight: 500,
                        background: "rgba(79,143,255,0.1)",
                        color: "var(--accent-blue)",
                        border: "1px solid rgba(79,143,255,0.15)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    marginBottom: 18,
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 4,
                  }}
                >
                  {proj.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        color: "var(--text-muted)",
                        fontSize: "0.78rem",
                        display: "flex",
                        alignItems: "center",
                        gap: 5,
                      }}
                    >
                      <span style={{ color: "var(--accent-blue)" }}>✦</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div style={{ display: "flex", gap: 10 }}>
                  <a
                    href={proj.github}
                    className="btn-outline"
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      padding: "9px 16px",
                      fontSize: "0.82rem",
                    }}
                  >
                    <GitHubSmall /> GitHub
                  </a>
                  <a
                    href={proj.demo}
                    className="btn-primary"
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      padding: "9px 16px",
                      fontSize: "0.82rem",
                    }}
                  >
                    <ArrowUpRight /> Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}