'use client';

import { useEffect, useRef } from 'react';

const SKILL_CATEGORIES = [
  {
    title: 'Languages',
    skills: [
      { name: 'HTML', emoji: '🟧', level: 90 },
      { name: 'CSS', emoji: '🟦', level: 85 },
      { name: 'JavaScript', emoji: '🟨', level: 80 },
      { name: 'Python', emoji: '🐍', level: 85 },
      { name: 'SQL', emoji: '🗃️', level: 75 },
      { name: 'Bash', emoji: '💻', level: 70 },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'Django', emoji: '🐍', level: 70 },
      { name: 'React', emoji: '⚛️', level: 75 },
      { name: 'Next.js', emoji: '▲', level: 70 },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', emoji: '🔀', level: 80 },
      { name: 'GitHub', emoji: '🐙', level: 85 },
      { name: 'VS Code', emoji: '💎', level: 90 },
      { name: 'Figma', emoji: '🎨', level: 75 },
      { name: 'Arduino', emoji: '🔌', level: 70 },
    ],
  },
  {
    title: 'Soft Skills',
    skills: [
      { name: 'Problem Solving', emoji: '🧩', level: 90 },
      { name: 'Teamwork', emoji: '🤝', level: 85 },
      { name: 'Communication', emoji: '💬', level: 80 },
      { name: 'Creativity', emoji: '💡', level: 85 },
    ],
  },
];

export default function Skills() {
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
    <section
      id="skills"
      style={{ padding: 'var(--section-padding)' }}
      ref={sectionRef}
    >
      <div className="section-container">
        <h2 className="section-title gradient-underline" data-animate>Skills & Expertise</h2>
        <p className="section-subtitle" data-animate>
          A diverse skill set spanning programming, tools, and interpersonal abilities.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 24,
          }}
        >
          {SKILL_CATEGORIES.map((cat, catIdx) => (
            <div
              key={cat.title}
              data-animate
              className={`stagger-${catIdx + 1} glass-card`}
              style={{
                padding: 28,
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
              <h3
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  marginBottom: 20,
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <span
                  style={{
                    width: 4,
                    height: 20,
                    background: 'linear-gradient(180deg, #4f8fff, #8b5cf6)',
                    borderRadius: 2,
                    display: 'inline-block',
                  }}
                />
                {cat.title}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      padding: '8px 12px',
                      borderRadius: 10,
                      transition: 'all 0.3s ease',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--glass-bg-hover)';
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <span style={{ fontSize: '1.3rem', flexShrink: 0 }} aria-hidden="true">
                      {skill.emoji}
                    </span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: 4,
                        }}
                      >
                        <span
                          style={{
                            fontSize: '0.875rem',
                            fontWeight: 500,
                            color: 'var(--text-primary)',
                          }}
                        >
                          {skill.name}
                        </span>
                        <span
                          style={{
                            fontSize: '0.75rem',
                            color: 'var(--accent-blue)',
                            fontWeight: 600,
                          }}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        style={{
                          height: 4,
                          background: 'rgba(255,255,255,0.06)',
                          borderRadius: 2,
                          overflow: 'hidden',
                        }}
                      >
                        <div
                          style={{
                            height: '100%',
                            width: `${skill.level}%`,
                            background: 'linear-gradient(90deg, #4f8fff, #8b5cf6)',
                            borderRadius: 2,
                            transition: 'width 1s ease',
                          }}
                        />
                      </div>
                    </div>
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