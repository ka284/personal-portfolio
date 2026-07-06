"use client";

import { useState, useEffect, useCallback } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Certifications", href: "certifications" },
  { label: "Achievements", href: "achievements" },
  { label: "Resume", href: "resume" },
  { label: "Contact", href: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Intersection observer for active section */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: "var(--nav-height)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 24px",
        background: scrolled ? "var(--navbar-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--glass-border)"
          : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("home");
          }}
          style={{
            fontSize: "1.5rem",
            fontWeight: 800,
            background: "var(--gradient-primary)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "-0.5px",
          }}
        >
          KA
        </a>

        {/* Desktop links */}
        <div
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
          }}
        >
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-poppins)",
                fontSize: "0.88rem",
                fontWeight: active === l.href ? 600 : 400,
                color:
                  active === l.href
                    ? "var(--accent-blue)"
                    : "var(--text-secondary)",
                position: "relative",
                transition: "color 0.3s ease",
                padding: "4px 0",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent-blue)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color =
                  active === l.href
                    ? "var(--accent-blue)"
                    : "var(--text-secondary)")
              }
            >
              {l.label}
              {active === l.href && (
                <span
                  style={{
                    position: "absolute",
                    bottom: -2,
                    left: 0,
                    width: "100%",
                    height: 2,
                    background: "var(--gradient-primary)",
                    borderRadius: 1,
                  }}
                />
              )}
            </button>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile: toggle + theme */}
        <div
          className="mobile-nav-controls"
          style={{
            display: "none",
            alignItems: "center",
            gap: 12,
          }}
        >
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 4,
              display: "flex",
              flexDirection: "column",
              gap: 5,
            }}
          >
            <span
              style={{
                display: "block",
                width: 24,
                height: 2,
                background: "var(--text-primary)",
                borderRadius: 2,
                transition: "all 0.3s ease",
                transform: open
                  ? "rotate(45deg) translate(5px, 5px)"
                  : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: 24,
                height: 2,
                background: "var(--text-primary)",
                borderRadius: 2,
                transition: "all 0.3s ease",
                opacity: open ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: 24,
                height: 2,
                background: "var(--text-primary)",
                borderRadius: 2,
                transition: "all 0.3s ease",
                transform: open
                  ? "rotate(-45deg) translate(5px, -5px)"
                  : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            position: "fixed",
            top: "var(--nav-height)",
            left: 0,
            right: 0,
            background: "var(--navbar-bg)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--glass-border)",
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            zIndex: 49,
            animation: "fadeInDown 0.3s ease",
          }}
        >
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-poppins)",
                fontSize: "0.95rem",
                fontWeight: active === l.href ? 600 : 400,
                color:
                  active === l.href
                    ? "var(--accent-blue)"
                    : "var(--text-primary)",
                padding: "10px 12px",
                borderRadius: 8,
                textAlign: "left",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "var(--glass-bg)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "none")
              }
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}