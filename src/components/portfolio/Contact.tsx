"use client";

import { useState, useEffect, useRef, FormEvent } from "react";

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
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

export default function Contact() {
  const ref = useInView();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: 10,
    border: "1px solid var(--glass-border)",
    background: "var(--input-bg)",
    color: "var(--text-primary)",
    fontFamily: "var(--font-poppins)",
    fontSize: "0.92rem",
    outline: "none",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
  };

  const contactInfo = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
      ),
      label: "Phone",
      value: "+91 XXXXX XXXXX",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
      ),
      label: "Email",
      value: "anilkethavath@email.com",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
      ),
      label: "Location",
      value: "Hyderabad, India",
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding"
      style={{ position: "relative", zIndex: 2 }}
    >
      <div className="section-container" ref={ref}>
        <h2 className="section-title scroll-animate">
          Get In <span className="highlight gradient-text">Touch</span>
        </h2>
        <p className="section-subtitle scroll-animate stagger-1">
          Have a project in mind? Let&apos;s talk!
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: 40,
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="glass-card scroll-animate animate-left stagger-2"
            style={{ padding: "32px 28px" }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    marginBottom: 6,
                    color: "var(--text-secondary)",
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent-blue)";
                    e.currentTarget.style.boxShadow =
                      "0 0 0 3px rgba(79,143,255,0.1)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "var(--glass-border)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                  style={inputStyle}
                />
              </div>
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    marginBottom: 6,
                    color: "var(--text-secondary)",
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent-blue)";
                    e.currentTarget.style.boxShadow =
                      "0 0 0 3px rgba(79,143,255,0.1)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "var(--glass-border)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                  style={inputStyle}
                />
              </div>
            </div>

            <div style={{ marginBottom: 16 }}>
              <label
                style={{
                  display: "block",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  marginBottom: 6,
                  color: "var(--text-secondary)",
                }}
              >
                Subject
              </label>
              <input
                type="text"
                required
                placeholder="Subject"
                value={form.subject}
                onChange={(e) =>
                  setForm({ ...form, subject: e.target.value })
                }
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent-blue)";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 3px rgba(79,143,255,0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "var(--glass-border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                style={inputStyle}
              />
            </div>

            <div style={{ marginBottom: 24 }}>
              <label
                style={{
                  display: "block",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  marginBottom: 6,
                  color: "var(--text-secondary)",
                }}
              >
                Message
              </label>
              <textarea
                required
                rows={5}
                placeholder="Your message..."
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent-blue)";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 3px rgba(79,143,255,0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "var(--glass-border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                style={{
                  ...inputStyle,
                  resize: "vertical",
                  minHeight: 120,
                }}
              />
            </div>

            <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              {sent ? "✓ Message Sent!" : "Send Message"}
            </button>
            {sent && (
              <p
                style={{
                  textAlign: "center",
                  color: "#22c55e",
                  fontSize: "0.85rem",
                  marginTop: 10,
                  animation: "fadeInUp 0.4s ease",
                }}
              >
                Thank you! I&apos;ll get back to you soon.
              </p>
            )}
          </form>

          {/* Contact info */}
          <div className="scroll-animate animate-right stagger-3">
            <div
              className="glass-card"
              style={{ padding: "28px 24px", marginBottom: 20 }}
            >
              <h3
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 600,
                  marginBottom: 6,
                }}
              >
                Let&apos;s connect
              </h3>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  marginBottom: 24,
                }}
              >
                Feel free to reach out. I&apos;m always open to discussing new
                projects, creative ideas, or opportunities.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    style={{ display: "flex", alignItems: "center", gap: 14 }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: "rgba(79,143,255,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--accent-blue)",
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--text-muted)",
                          marginBottom: 1,
                        }}
                      >
                        {item.label}
                      </p>
                      <p style={{ fontSize: "0.92rem", fontWeight: 500 }}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}