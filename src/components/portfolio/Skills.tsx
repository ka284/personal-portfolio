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
            setTimeout(() => child.classList.add("animate-in"), i * 60);
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

const categories = [
  {
    title: "Languages",
    skills: [
      { name: "HTML", icon: "🟧", color: "#e34f26" },
      { name: "CSS", icon: "🟦", color: "#1572b6" },
      { name: "JavaScript", icon: "🟨", color: "#f7df1e" },
      { name: "Python", icon: "🐍", color: "#3776ab" },
      { name: "SQL", icon: "🗃️", color: "#00758f" },
      { name: "Bash", icon: "💻", color: "#4eaa25" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "Django", icon: "🐍", color: "#092e20" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: "🔀", color: "#f05032" },
      { name: "GitHub", icon: "🐙", color: "#6e40c9" },
      { name: "VS Code", icon: "💎", color: "#007acc" },
      { name: "Figma", icon: "🎨", color: "#f24e1e" },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Problem Solving", icon: "🧩", color: "#4f8fff" },
      { name: "Teamwork", icon: "🤝", color: "#8b5cf6" },
      { name: "Communication", icon: "💬", color: "#06b6d4" },
      { name: "Creativity", icon: "💡", color: "#f59e0b" },
    ],
  },
];

export default function Skills() {
  const ref = useInView();

  return (
    <section id="skills" className="section-padding" style={{ position: "relative", zIndex: 2 }}>
      <div className="section-container" ref={ref}>
        <h2 className="section-title scroll-animate">
          My <span className="highlight gradient-text">Skills</span>
        </h2>
        <p className="section-subtitle scroll-animate stagger-1">
          Technologies &amp; tools I work with
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="glass-card scroll-animate animate-zoom"
              style={{ padding: "28px 24px" }}
            >
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  marginBottom: 20,
                  color: "var(--accent-blue)",
                }}
              >
                {cat.title}
              </h3>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 12,
                }}
              >
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "8px 16px",
                      borderRadius: 10,
                      border: "1px solid var(--glass-border)",
                      background: "var(--glass-bg)",
                      fontSize: "0.88rem",
                      fontWeight: 500,
                      transition: "all 0.3s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = skill.color + "60";
                      e.currentTarget.style.boxShadow = `0 4px 20px ${skill.color}20`;
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--glass-border)";
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <span style={{ fontSize: "1.1rem" }}>{skill.icon}</span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}