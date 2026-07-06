"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const roles = [
  "Computer Science Undergraduate",
  "Front-End Developer",
  "UI/UX Designer",
  "Python Developer",
];

/* SVG icons */
const GitHubIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
);
const LinkedInIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);
const LeetCodeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M16.102 17.93l-2.697 2.607-.106.053-.105-.053-5.648-5.482a.538.538 0 010-.77l.928-.9a.533.533 0 01.752 0l4.074 3.952 4.073-3.951a.533.533 0 01.752 0l.928.9a.538.538 0 010 .77l-2.697 2.607a.533.533 0 01-.754 0v-.033zM13.405 3.463l2.697 2.607.106.053.105-.053 5.648-5.483a.538.538 0 010-.77l-.928-.9a.533.533 0 00-.752 0L16.102 3.62l-4.074-3.952a.533.533 0 00-.752 0l-.928.9a.538.538 0 000 .77l2.697 2.607a.533.533 0 00.36.125zm-7.55 9.59l1.21-1.172a.533.533 0 000-.77L4.518 8.88a.533.533 0 00-.752 0L.725 11.76a.538.538 0 000 .77l.928.9a.533.533 0 00.752 0l2.697-2.607 1.21 1.172a.533.533 0 00.36.125.533.533 0 00.36-.125l-.183.155zm10.394 0l-1.21-1.172a.533.533 0 010-.77l2.548-2.472a.533.533 0 01.752 0l3.04 2.946a.538.538 0 010 .77l-.928.9a.533.533 0 01-.752 0l-2.697-2.607-1.21 1.172a.533.533 0 01-.36.125.533.533 0 01-.36-.125l.177.155z"/></svg>
);
const HackerRankIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L1.75 6v12L12 24l10.25-6V6zm0 2.249L20.25 7v10l-8.25 4.75L3.75 17V7zm-1.5 4.895v3.712l3.2 1.849V8.245zM8.25 9.594v4.812l3.2-1.848V7.746zm7.5 0l-3.2-1.848v4.812l3.2 1.848zM13.5 8.245v6.46l3.2-1.849V8.245zM12 2.25L4.5 6.562v10.876L12 21.75l7.5-4.312V6.562z"/></svg>
);
const DownloadIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
);
const ContactIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
);

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const tick = useCallback(() => {
    const currentRole = roles[roleIndex];

    if (!deleting && text === currentRole) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 2000);
      return;
    }
    if (deleting && text === "") {
      timeoutRef.current = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 0);
      return;
    }

    const speed = deleting ? 40 : 80;
    timeoutRef.current = setTimeout(() => {
      setText(
        deleting
          ? currentRole.substring(0, text.length - 1)
          : currentRole.substring(0, text.length + 1)
      );
    }, speed);
  }, [text, deleting, roleIndex]);

  useEffect(() => {
    tick();
    return () => clearTimeout(timeoutRef.current);
  }, [tick]);

  const socials = [
    { icon: <GitHubIcon />, href: "#", label: "GitHub" },
    { icon: <LinkedInIcon />, href: "#", label: "LinkedIn" },
    { icon: <LeetCodeIcon />, href: "#", label: "LeetCode" },
    { icon: <HackerRankIcon />, href: "#", label: "HackerRank" },
  ];

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "var(--nav-height)",
      }}
    >
      {/* Gradient blobs */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          background: "var(--blob-1)",
          filter: "blur(120px)",
          top: "-10%",
          right: "-5%",
          animation: "blob 8s ease-in-out infinite",
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          background: "var(--blob-2)",
          filter: "blur(100px)",
          bottom: "-5%",
          left: "-5%",
          animation: "blob 10s ease-in-out infinite reverse",
          borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 300,
          height: 300,
          background: "var(--blob-3)",
          filter: "blur(80px)",
          top: "40%",
          left: "30%",
          animation: "blob 12s ease-in-out infinite",
        }}
      />

      <div className="section-container" style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 60,
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {/* Left text */}
          <div style={{ flex: "1 1 480px", maxWidth: 600 }}>
            <p
              style={{
                fontSize: "1.1rem",
                fontWeight: 500,
                color: "var(--text-secondary)",
                marginBottom: 8,
                animation: "fadeInUp 0.8s ease both",
              }}
            >
              Hello, I&apos;m
            </p>
            <h1
              style={{
                fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: 14,
                animation: "fadeInUp 0.8s ease 0.15s both",
              }}
            >
              Kethavath{" "}
              <span className="gradient-text">Anil</span>
            </h1>
            <div
              style={{
                fontSize: "clamp(1rem, 2.2vw, 1.35rem)",
                color: "var(--text-secondary)",
                marginBottom: 20,
                height: 42,
                animation: "fadeInUp 0.8s ease 0.3s both",
              }}
            >
              <span>{text}</span>
              <span
                style={{
                  borderRight: "2px solid var(--accent-blue)",
                  marginLeft: 2,
                  animation: "typing 0.8s ease infinite",
                }}
              />
            </div>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.95rem",
                lineHeight: 1.7,
                marginBottom: 30,
                maxWidth: 500,
                animation: "fadeInUp 0.8s ease 0.4s both",
              }}
            >
              Passionate about crafting beautiful, responsive, and user-friendly
              web experiences. Turning ideas into elegant digital solutions.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                marginBottom: 32,
                animation: "fadeInUp 0.8s ease 0.5s both",
              }}
            >
              <a href="/resume.pdf" download className="btn-primary">
                <DownloadIcon /> Download Resume
              </a>
              <button
                className="btn-outline"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <ContactIcon /> Contact Me
              </button>
            </div>
            <div
              style={{
                display: "flex",
                gap: 16,
                animation: "fadeInUp 0.8s ease 0.6s both",
              }}
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    border: "1px solid var(--glass-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-secondary)",
                    transition: "all 0.3s ease",
                    background: "var(--glass-bg)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--accent-blue)";
                    e.currentTarget.style.borderColor = "var(--accent-blue)";
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 25px rgba(79,143,255,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-secondary)";
                    e.currentTarget.style.borderColor = "var(--glass-border)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right illustration */}
          <div
            style={{
              flex: "1 1 360px",
              display: "flex",
              justifyContent: "center",
              animation: "fadeInRight 1s ease 0.4s both",
            }}
            className="hero-image-wrapper"
          >
            <img
              src="/images/hero-illustration.png"
              alt="Developer illustration"
              loading="eager"
              style={{
                maxWidth: 440,
                width: "100%",
                animation: "float 5s ease-in-out infinite",
                filter: "drop-shadow(0 20px 40px rgba(79,143,255,0.15))",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}