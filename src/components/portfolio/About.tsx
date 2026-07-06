'use client';

import { useEffect, useRef } from 'react';

const EDUCATION = [
  {
    degree: 'B.Tech in Computer Science Engineering',
    institution: 'Sreenidhi Institute of Science and Technology',
    duration: '2022 – 2026',
    cgpa: '8.2 CGPA',
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Sri Chaitanya Junior College',
    duration: '2020 – 2022',
    cgpa: '95%',
  },
  {
    degree: 'SSC (10th Standard)',
    institution: 'Zilla Parishad High School',
    duration: '2020',
    cgpa: '9.5 GPA',
  },
];

function useScrollAnimate() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
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

  return ref;
}

export default function About() {
  const containerRef = useScrollAnimate();

  return (
    <section
      id="about"
      style={{ padding: 'var(--section-padding)' }}
      ref={containerRef}
    >
      <div className="section-container">
        <h2 className="section-title gradient-underline" data-animate>About Me</h2>
        <p className="section-subtitle" data-animate>
          Get to know more about me, my background, and my journey in Computer Science.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 60,
            alignItems: 'center',
            marginBottom: 80,
          }}
        >
          {/* Profile Image */}
          <div data-animate="left" style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                position: 'relative',
                width: 280,
                height: 280,
                borderRadius: '50%',
                padding: 4,
                background: 'linear-gradient(135deg, #4f8fff, #8b5cf6)',
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '4px solid var(--bg-primary)',
                }}
              >
                <img
                  src="/images/profile.png"
                  alt="Kethavath Anil profile photo"
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              {/* Decorative ring */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: -15,
                  borderRadius: '50%',
                  border: '1px dashed rgba(79,143,255,0.3)',
                  animation: 'spin 20s linear infinite',
                }}
              />
            </div>
          </div>

          {/* Text Content */}
          <div data-animate="right">
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                marginBottom: 16,
                color: 'var(--text-primary)',
              }}
            >
              I&apos;m Kethavath Anil, a{' '}
              <span className="gradient-text">CS Undergraduate</span>
            </h3>
            <p
              style={{
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                fontSize: '0.95rem',
                marginBottom: 16,
              }}
            >
              I am a dedicated Computer Science Engineering student with a strong passion for
              web development, problem solving, and creating impactful digital solutions. With
              a solid foundation in programming and emerging technologies, I continuously
              expand my skill set through hands-on projects and certifications.
            </p>
            <p
              style={{
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                fontSize: '0.95rem',
                marginBottom: 24,
              }}
            >
              My expertise spans front-end development, Python programming, IoT systems, and
              UI/UX design. I believe in the power of technology to transform ideas into
              reality and am always eager to take on new challenges that push the boundaries
              of innovation.
            </p>

            {/* Quick Stats */}
            <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
              {[
                { value: '4+', label: 'Projects' },
                { value: '5+', label: 'Certifications' },
                { value: '1', label: 'Patent' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="gradient-text"
                    style={{ fontSize: '1.8rem', fontWeight: 700, lineHeight: 1.2 }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div>
          <h3
            className="gradient-underline"
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: 48,
              color: 'var(--text-primary)',
              display: 'inline-block',
              width: '100%',
            }}
          >
            Education
          </h3>

          <div style={{ position: 'relative', maxWidth: 700, margin: '0 auto' }}>
            {/* Vertical Line */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: 20,
                top: 0,
                bottom: 0,
                width: 2,
                background: 'linear-gradient(180deg, #4f8fff, #8b5cf6)',
                borderRadius: 1,
              }}
            />

            {EDUCATION.map((edu, i) => (
              <div
                key={i}
                data-animate
                className={`stagger-${i + 1}`}
                style={{
                  display: 'flex',
                  gap: 24,
                  marginBottom: i < EDUCATION.length - 1 ? 40 : 0,
                  alignItems: 'flex-start',
                }}
              >
                {/* Dot */}
                <div
                  aria-hidden="true"
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #4f8fff, #8b5cf6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 0 20px rgba(79,143,255,0.3)',
                  }}
                >
                  <span style={{ color: '#fff', fontSize: '0.75rem', fontWeight: 700 }}>
                    {i + 1}
                  </span>
                </div>

                {/* Content Card */}
                <div className="glass-card" style={{ padding: 24, flex: 1 }}>
                  <h4
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      marginBottom: 4,
                      color: 'var(--text-primary)',
                    }}
                  >
                    {edu.degree}
                  </h4>
                  <p
                    style={{
                      color: 'var(--accent-blue)',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      marginBottom: 4,
                    }}
                  >
                    {edu.institution}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      gap: 16,
                      color: 'var(--text-secondary)',
                      fontSize: '0.85rem',
                    }}
                  >
                    <span>{edu.duration}</span>
                    <span style={{ color: 'var(--accent-purple)', fontWeight: 600 }}>
                      {edu.cgpa}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}