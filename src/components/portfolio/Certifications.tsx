'use client';

import { useEffect, useRef } from 'react';

const CERTIFICATIONS = [
  {
    emoji: '📊',
    name: 'HP Data Science & Analytics',
    org: 'HP',
  },
  {
    emoji: '💻',
    name: 'Microsoft Web Development with VS Code',
    org: 'Microsoft',
  },
  {
    emoji: '☁️',
    name: 'AWS Cloud Practitioner Essentials',
    org: 'Amazon Web Services',
  },
  {
    emoji: '🌍',
    name: 'Cambridge Linguaskill',
    org: 'Cambridge Assessment',
  },
  {
    emoji: '🎨',
    name: 'FreeCodeCamp Responsive Web Design',
    org: 'FreeCodeCamp',
  },
];

export default function Certifications() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    el.querySelectorAll('[data-animate]').forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="certifications" style={{ padding: 'var(--section-padding)' }} ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title gradient-underline" data-animate>Certifications</h2>
        <p className="section-subtitle" data-animate>
          Professional certifications that validate my expertise across various domains.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 24,
            maxWidth: 900,
            margin: '0 auto',
          }}
        >
          {CERTIFICATIONS.map((cert, i) => (
            <div
              key={cert.name}
              data-animate
              className={`stagger-${i + 1} glass-card`}
              style={{
                padding: 28,
                textAlign: 'center',
                cursor: 'default',
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid var(--glass-border)',
                borderRadius: 16,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = 'rgba(79,143,255,0.3)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(79,143,255,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--glass-border)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: 16 }} aria-hidden="true">
                {cert.emoji}
              </span>
              <h3
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: 8,
                  lineHeight: 1.4,
                }}
              >
                {cert.name}
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--accent-blue)', fontWeight: 500 }}>
                {cert.org}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}