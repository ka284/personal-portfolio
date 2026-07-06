'use client';

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function LeetCodeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.613 9.21l1.959 2.03a1.38 1.38 0 0 0 1.981-.006 1.38 1.38 0 0 0-.006-1.981l-1.97-2.037 4.168-4.141a1.37 1.37 0 0 0 0-1.954 1.37 1.37 0 0 0-.961-.438h-.261z" />
      <path d="M17.398 5.266a1.376 1.376 0 0 0-1.955.003l-2.395 2.392a1.376 1.376 0 0 0-.003 1.951 1.376 1.376 0 0 0 1.951.003l2.395-2.392a1.376 1.376 0 0 0 .003-1.951 1.376 1.376 0 0 0-.996-.006z" />
    </svg>
  );
}

function HackerRankIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm1.717 13.154h-1.717l.001-3.928h1.717c.564 0 1.018.454 1.018 1.018v1.892c0 .564-.454 1.018-1.018 1.018h-.001zm-4.717-3.928h-2.096v1.892h.96v2.036h-1.974V9.11c0-.564.454-1.018 1.018-1.018h2.092v1.134zm7.014 1.892c0 .564-.454 1.018-1.018 1.018h-.96v-2.036h.96v-1.892h-1.018V8.092h1.018c.564 0 1.018.454 1.018 1.018v2.108z" />
    </svg>
  );
}

const SOCIALS = [
  { icon: <GitHubIcon />, label: 'GitHub', href: '#' },
  { icon: <LinkedInIcon />, label: 'LinkedIn', href: '#' },
  { icon: <LeetCodeIcon />, label: 'LeetCode', href: '#' },
  { icon: <HackerRankIcon />, label: 'HackerRank', href: '#' },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--glass-border)',
        padding: '40px 0',
        marginTop: 'auto',
      }}
    >
      <div className="section-container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 24,
          }}
        >
          {/* Logo & Name */}
          <div style={{ textAlign: 'center' }}>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                fontSize: '1.6rem',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #4f8fff, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textDecoration: 'none',
                display: 'inline-block',
                marginBottom: 8,
              }}
            >
              KA
            </a>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
              Kethavath Anil
            </p>
          </div>

          {/* Social Icons */}
          <div style={{ display: 'flex', gap: 12 }}>
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                style={{
                  width: 40,
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  background: 'var(--glass-bg)',
                  border: '1px solid var(--glass-border)',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#4f8fff';
                  e.currentTarget.style.borderColor = 'rgba(79,143,255,0.3)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.borderColor = 'var(--glass-border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div
            style={{
              width: '100%',
              height: 1,
              background: 'var(--glass-border)',
              maxWidth: 400,
            }}
          />

          {/* Copyright */}
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: 4 }}>
              © 2024 Kethavath Anil. All rights reserved.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', opacity: 0.7 }}>
              Designed &amp; Developed by Kethavath Anil
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}