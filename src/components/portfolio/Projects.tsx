'use client';

import { useState, useEffect, useRef } from 'react';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  features: string[];
  category: string;
  github: string;
  demo: string;
}

const PROJECTS: Project[] = [
  {
    title: 'Event Management System',
    description:
      'Full-stack event booking platform allowing organizers to create events and users to browse and book them through a responsive interface.',
    image: '/images/project-event.png',
    tech: ['HTML', 'CSS', 'PHP', 'MySQL'],
    features: ['Event creation', 'User booking', 'Responsive design', 'Admin panel'],
    category: 'Web',
    github: '#',
    demo: '#',
  },
  {
    title: 'Multimedia Steganography System',
    description:
      'Secure multimedia steganography application using AES encryption to hide confidential information inside multimedia files.',
    image: '/images/project-steganography.png',
    tech: ['Python', 'HTML', 'CSS', 'JavaScript', 'AES Encryption'],
    features: ['AES encryption', 'File encoding/decoding', 'Secure data hiding', 'User-friendly interface'],
    category: 'Python',
    github: '#',
    demo: '#',
  },
  {
    title: 'Portfolio Website',
    description:
      'Responsive portfolio showcasing projects, skills, certifications, achievements, and contact information with modern UI and smooth animations.',
    image: '/images/project-portfolio.png',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['Dark/Light mode', 'Responsive design', 'Smooth animations', 'SEO optimized'],
    category: 'Web',
    github: '#',
    demo: '#',
  },
  {
    title: 'Autonomous Hazard Mitigation System',
    description:
      'IoT-based laboratory safety system capable of detecting hazardous conditions and triggering alerts automatically.',
    image: '/images/project-iot.png',
    tech: ['Arduino', 'IoT', 'Sensors'],
    features: ['Real-time detection', 'Auto alerts', 'Sensor integration', 'Safety automation'],
    category: 'IoT',
    github: '#',
    demo: '#',
  },
];

const FILTERS = ['All', 'Web', 'Python', 'IoT'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
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

  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      style={{ padding: 'var(--section-padding)', background: 'var(--bg-secondary)' }}
      ref={sectionRef}
    >
      <div className="section-container">
        <h2 className="section-title gradient-underline" data-animate>Featured Projects</h2>
        <p className="section-subtitle" data-animate>
          A selection of projects that showcase my skills in web development, Python, and IoT.
        </p>

        {/* Filter Buttons */}
        <div
          data-animate
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 12,
            marginBottom: 48,
            flexWrap: 'wrap',
          }}
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              style={{
                padding: '10px 24px',
                borderRadius: 10,
                border: '1px solid',
                borderColor: filter === f ? 'rgba(79,143,255,0.5)' : 'var(--glass-border)',
                background: filter === f ? 'rgba(79,143,255,0.15)' : 'var(--glass-bg)',
                color: filter === f ? '#4f8fff' : 'var(--text-secondary)',
                fontWeight: 500,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: 'inherit',
                backdropFilter: 'blur(10px)',
              }}
              onMouseEnter={(e) => {
                if (filter !== f) {
                  e.currentTarget.style.borderColor = 'rgba(79,143,255,0.3)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }
              }}
              onMouseLeave={(e) => {
                if (filter !== f) {
                  e.currentTarget.style.borderColor = 'var(--glass-border)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 28,
          }}
        >
          {filtered.map((project, i) => (
            <article
              key={project.title}
              data-animate
              className={`stagger-${i + 1} glass-card`}
              style={{
                overflow: 'hidden',
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
              {/* Image */}
              <div style={{ overflow: 'hidden', borderRadius: '16px 16px 0 0' }}>
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: 200,
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                    display: 'block',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: 24 }}>
                <h3
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    marginBottom: 10,
                    color: 'var(--text-primary)',
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.875rem',
                    lineHeight: 1.6,
                    marginBottom: 16,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                  {project.tech.map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 6,
                    marginBottom: 20,
                  }}
                >
                  {project.features.map((feat) => (
                    <span
                      key={feat}
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--text-secondary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4,
                      }}
                    >
                      <span
                        style={{
                          width: 4,
                          height: 4,
                          borderRadius: '50%',
                          background: 'var(--accent-purple)',
                          display: 'inline-block',
                        }}
                      />
                      {feat}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div style={{ display: 'flex', gap: 12 }}>
                  <a
                    href={project.github}
                    className="btn-outline"
                    style={{ padding: '8px 20px', fontSize: '0.825rem', borderRadius: 10 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.demo}
                    className="btn-primary"
                    style={{ padding: '8px 20px', fontSize: '0.825rem', borderRadius: 10 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Live Demo</span>
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