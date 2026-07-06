'use client';

import { useState } from 'react';

export default function Resume() {
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const handleDownload = () => {
    showToast('Resume download started!');
  };

  return (
    <section id="resume" style={{ padding: 'var(--section-padding)' }}>
      <div className="section-container">
        <h2 className="section-title gradient-underline">My Resume</h2>
        <p className="section-subtitle">
          Download my resume to learn more about my experience, education, and skills.
        </p>

        <div
          style={{
            maxWidth: 600,
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          {/* Resume Preview Card */}
          <div
            className="glass-card"
            style={{
              padding: 48,
              marginBottom: 32,
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid var(--glass-border)',
              borderRadius: 16,
            }}
          >
            <div
              style={{
                width: 80,
                height: 80,
                margin: '0 auto 20px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(79,143,255,0.2), rgba(139,92,246,0.2))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--accent-blue)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>

            <h3
              style={{
                fontSize: '1.3rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: 12,
              }}
            >
              Kethavath Anil — Resume
            </h3>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: 8 }}>
              Computer Science Engineering Student
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
              B.Tech | Web Development | Python | IoT
            </p>
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <button
              onClick={() => showToast('Resume viewer opened!')}
              className="btn-outline"
              style={{ padding: '12px 32px', borderRadius: 12, fontSize: '0.95rem' }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span>View Resume</span>
            </button>
            <button onClick={handleDownload} className="btn-primary" style={{ padding: '12px 32px', borderRadius: 12, fontSize: '0.95rem' }}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download Resume</span>
            </button>
          </div>
        </div>

        {/* Toast */}
        {toast && (
          <div className="portfolio-toast" key={toast}>
            ✅ {toast}
          </div>
        )}
      </div>
    </section>
  );
}