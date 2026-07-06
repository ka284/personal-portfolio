'use client';

import { useEffect, useRef } from 'react';

const ACHIEVEMENTS = [
  {
    emoji: '🏆',
    title: 'Patent Granted',
    description:
      'Patent granted for Autonomous Hazard Mitigation System — an IoT-based laboratory safety system with real-time hazard detection and automated alert mechanisms.',
  },
  {
    emoji: '🟢',
    title: 'Active LeetCode Problem Solver',
    description:
      'Consistently solving problems on LeetCode, improving algorithmic thinking and data structure proficiency across various difficulty levels.',
  },
  {
    emoji: '⭐',
    title: 'HackerRank Coding Practice',
    description:
      'Regular coding practice on HackerRank, earning badges and honing programming skills across multiple languages and domains.',
  },
];

const PROFILES = [
  {
    name: 'GitHub',
    color: '#6e5494',
    bgAlpha: 'rgba(110, 84, 148, 0.1)',
    borderAlpha: 'rgba(110, 84, 148, 0.3)',
    href: '#',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    color: '#0077b5',
    bgAlpha: 'rgba(0, 119, 181, 0.1)',
    borderAlpha: 'rgba(0, 119, 181, 0.3)',
    href: '#',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'LeetCode',
    color: '#ffa116',
    bgAlpha: 'rgba(255, 161, 22, 0.1)',
    borderAlpha: 'rgba(255, 161, 22, 0.3)',
    href: '#',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.613 9.21l1.959 2.03a1.38 1.38 0 0 0 1.981-.006 1.38 1.38 0 0 0-.006-1.981l-1.97-2.037 4.168-4.141a1.37 1.37 0 0 0 0-1.954 1.37 1.37 0 0 0-.961-.438h-.261z" />
        <path d="M17.398 5.266a1.376 1.376 0 0 0-1.955.003l-2.395 2.392a1.376 1.376 0 0 0-.003 1.951 1.376 1.376 0 0 0 1.951.003l2.395-2.392a1.376 1.376 0 0 0 .003-1.951 1.376 1.376 0 0 0-.996-.006z" />
      </svg>
    ),
  },
  {
    name: 'HackerRank',
    color: '#00ea64',
    bgAlpha: 'rgba(0, 234, 100, 0.1)',
    borderAlpha: 'rgba(0, 234, 100, 0.3)',
    href: '#',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm1.717 13.154h-1.717l.001-3.928h1.717c.564 0 1.018.454 1.018 1.018v1.892c0 .564-.454 1.018-1.018 1.018h-.001zm-4.717-3.928h-2.096v1.892h.96v2.036h-1.974V9.11c0-.564.454-1.018 1.018-1.018h2.092v1.134zm7.014 1.892c0 .564-.454 1.018-1.018 1.018h-.96v-2.036h.96v-1.892h-1.018V8.092h1.018c.564 0 1.018.454 1.018 1.018v2.108z" />
      </svg>
    ),
  },
];

export default function Achievements() {
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
      id="achievements"
      style={{ padding: 'var(--section-padding)', background: 'var(--bg-secondary)' }}
      ref={sectionRef}
    >
      <div className="section-container">
        <h2 className="section-title gradient-underline" data-animate>Achievements & Coding Profiles</h2>
        <p className="section-subtitle" data-animate>
          Milestones and coding platforms where I sharpen my skills.
        </p>

        {/* Achievement Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
            marginBottom: 60,
          }}
        >
          {ACHIEVEMENTS.map((ach, i) => (
            <div
              key={ach.title}
              data-animate
              className={`stagger-${i + 1} glass-card`}
              style={{
                padding: 32,
                display: 'flex',
                gap: 20,
                alignItems: 'flex-start',
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
              <span
                style={{ fontSize: '2.2rem', flexShrink: 0, lineHeight: 1 }}
                aria-hidden="true"
              >
                {ach.emoji}
              </span>
              <div>
                <h3
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: 8,
                  }}
                >
                  {ach.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  {ach.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Coding Profiles */}
        <h3
          className="gradient-underline"
          style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: 40,
            color: 'var(--text-primary)',
            display: 'inline-block',
            width: '100%',
          }}
        >
          Coding Profiles
        </h3>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 24,
            maxWidth: 1000,
            margin: '0 auto',
          }}
        >
          {PROFILES.map((profile, i) => (
            <a
              key={profile.name}
              href={profile.href}
              target="_blank"
              rel="noopener noreferrer"
              data-animate
              className={`stagger-${i + 1}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 16,
                padding: 32,
                borderRadius: 16,
                border: `1px solid ${profile.borderAlpha}`,
                background: profile.bgAlpha,
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = `0 15px 30px ${profile.bgAlpha}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ color: profile.color }}>{profile.icon}</div>
              <span style={{ fontWeight: 600, color: profile.color, fontSize: '1rem' }}>
                {profile.name}
              </span>
              <span
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                  padding: '6px 16px',
                  border: `1px solid ${profile.borderAlpha}`,
                  borderRadius: 8,
                  transition: 'all 0.3s ease',
                }}
              >
                Visit Profile →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}