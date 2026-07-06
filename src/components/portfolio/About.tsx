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

const education = [
  {
    title: "B.Tech in Computer Science and Engineering",
    place: "Vardhaman College of Engineering",
    period: "2023 – 2027",
    gpa: "7.3",
  },
  {
    title: "Intermediate (MPC)",
    place: "Geetha Junior College",
    period: "2021 – 2023",
    gpa: "8.92",
  },
  {
    title: "SSC",
    place: "Sri Saraswathi Convent High School",
    period: "2020 – 2021",
    gpa: "10",
  },
];

export default function About() {
  const ref = useInView();

  return (
    <section id="about" className="section-padding" style={{ position: "relative", zIndex: 2 }}>
      <div className="section-container" ref={ref}>
        <h2 className="section-title scroll-animate">
          About <span className="highlight gradient-text">Me</span>
        </h2>
        <p className="section-subtitle scroll-animate stagger-1">
          Get to know me better
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: 50,
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Profile image */}
          <div className="scroll-animate animate-left stagger-2" style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: 260,
                height: 260,
                borderRadius: "50%",
                padding: 4,
                background: "var(--gradient-primary)",
                animation: "glow 3s ease-in-out infinite",
              }}
            >
              <img
                src="/images/profile.png"
                alt="Kethavath Anil"
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "4px solid var(--bg-primary)",
                }}
              />
            </div>
          </div>

          {/* Text */}
          <div className="scroll-animate animate-right stagger-2">
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1rem",
                lineHeight: 1.8,
                marginBottom: 16,
              }}
            >
              I&apos;m a <strong style={{ color: "var(--text-primary)" }}>Computer Science undergraduate</strong> at
              Vardhaman College of Engineering, passionate about{" "}
              <strong style={{ color: "var(--text-primary)" }}>Web Development, UI/UX Design, Python, and Django</strong>.
            </p>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1rem",
                lineHeight: 1.8,
                marginBottom: 16,
              }}
            >
              I love building <strong style={{ color: "var(--text-primary)" }}>secure, responsive, and user-friendly web applications</strong>.
              I&apos;m interested in solving real-world problems through software.
            </p>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1rem",
                lineHeight: 1.8,
              }}
            >
              Currently exploring full-stack development and expanding my skills
              in cloud computing and cybersecurity.
            </p>
          </div>
        </div>

        {/* Education Timeline */}
        <div style={{ marginTop: 70 }}>
          <h3
            className="scroll-animate"
            style={{
              textAlign: "center",
              fontSize: "1.5rem",
              fontWeight: 700,
              marginBottom: 40,
            }}
          >
            Education <span className="gradient-text">Timeline</span>
          </h3>
          <div
            style={{
              position: "relative",
              maxWidth: 700,
              margin: "0 auto",
            }}
          >
            {/* Vertical line */}
            <div
              style={{
                position: "absolute",
                left: 24,
                top: 0,
                bottom: 0,
                width: 2,
                background: "var(--gradient-primary)",
                opacity: 0.4,
              }}
            />
            {education.map((item, i) => (
              <div
                key={i}
                className={`scroll-animate animate-left stagger-${i + 1}`}
                style={{
                  display: "flex",
                  gap: 24,
                  marginBottom: 36,
                  position: "relative",
                }}
              >
                {/* Dot */}
                <div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    background: "var(--gradient-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    flexShrink: 0,
                    zIndex: 1,
                    boxShadow: "0 4px 20px rgba(79,143,255,0.3)",
                  }}
                >
                  {i + 1}
                </div>
                {/* Card */}
                <div
                  className="glass-card"
                  style={{ flex: 1, padding: "20px 24px" }}
                >
                  <h4
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      marginBottom: 4,
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      color: "var(--accent-blue)",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      marginBottom: 4,
                    }}
                  >
                    {item.place}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: 16,
                      color: "var(--text-muted)",
                      fontSize: "0.85rem",
                    }}
                  >
                    <span>{item.period}</span>
                    <span>•</span>
                    <span>CGPA: {item.gpa}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
            text-align: center;
          }
          .about-grid > .scroll-animate {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}