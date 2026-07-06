'use client';

import { useState, useEffect, useCallback } from 'react';
import ThemeToggle from './ThemeToggle';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // IntersectionObserver for active section
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((href: string) => {
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: 'var(--navbar-height)',
        display: 'flex',
        alignItems: 'center',
        transition: 'all 0.3s ease',
        background: scrolled ? 'var(--glass-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
      }}
    >
      <div className="section-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
          aria-label="Go to home"
          style={{
            fontSize: '1.6rem',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #4f8fff, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          KA
        </a>

        {/* Desktop Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
          className="navbar-desktop-links"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              style={{
                color: activeSection === link.href.slice(1) ? '#4f8fff' : 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: 500,
                padding: '8px 14px',
                borderRadius: 8,
                transition: 'all 0.3s ease',
                background: activeSection === link.href.slice(1) ? 'rgba(79,143,255,0.1)' : 'transparent',
              }}
              onMouseEnter={(e) => {
                if (activeSection !== link.href.slice(1)) {
                  e.currentTarget.style.color = 'var(--text-primary)';
                  e.currentTarget.style.background = 'var(--glass-bg)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== link.href.slice(1)) {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.background = 'transparent';
                }
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ marginLeft: 8 }}>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile: Hamburger + Theme */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }} className="navbar-mobile-controls">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            style={{
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(10px)',
              border: '1px solid var(--glass-border)',
              borderRadius: 10,
              width: 40,
              height: 40,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 5,
              cursor: 'pointer',
              padding: 0,
              transition: 'all 0.3s ease',
            }}
          >
            <span
              style={{
                display: 'block',
                width: 18,
                height: 2,
                background: 'var(--text-primary)',
                borderRadius: 1,
                transition: 'all 0.3s ease',
                transform: mobileOpen ? 'rotate(45deg) translateY(7px)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: 18,
                height: 2,
                background: 'var(--text-primary)',
                borderRadius: 1,
                transition: 'all 0.3s ease',
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: 'block',
                width: 18,
                height: 2,
                background: 'var(--text-primary)',
                borderRadius: 1,
                transition: 'all 0.3s ease',
                transform: mobileOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="mobile-menu-overlay"
          style={{
            position: 'fixed',
            top: 'var(--navbar-height)',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(10, 10, 26, 0.95)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            zIndex: 49,
            animation: 'slideDown 0.3s ease',
            overflowY: 'auto',
            padding: '24px 0',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: '0 24px' }}>
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                style={{
                  color: activeSection === link.href.slice(1) ? '#4f8fff' : 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  padding: '14px 20px',
                  borderRadius: 12,
                  transition: 'all 0.3s ease',
                  background: activeSection === link.href.slice(1) ? 'rgba(79,143,255,0.1)' : 'transparent',
                  animation: `fadeInUp 0.3s ease ${i * 0.05}s both`,
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Hide desktop links on mobile, hide mobile controls on desktop */}
      <style jsx global>{`
        @media (max-width: 900px) {
          .navbar-desktop-links {
            display: none !important;
          }
          .navbar-mobile-controls {
            display: flex !important;
          }
        }
        @media (min-width: 901px) {
          .navbar-desktop-links {
            display: flex !important;
          }
          .navbar-mobile-controls {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}