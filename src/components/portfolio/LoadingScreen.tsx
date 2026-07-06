'use client';

import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1700);
    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 2200);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0a0a1a 0%, #111128 50%, #0a0a1a 100%)',
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.5s ease',
        pointerEvents: fadeOut ? 'none' : 'all',
      }}
      role="status"
      aria-label="Loading"
    >
      {/* Animated background blobs */}
      <div
        style={{
          position: 'absolute',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(79,143,255,0.15), transparent 70%)',
          top: '20%',
          left: '30%',
          animation: 'blob 8s ease-in-out infinite',
          filter: 'blur(40px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: 250,
          height: 250,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.15), transparent 70%)',
          bottom: '20%',
          right: '25%',
          animation: 'blob 8s ease-in-out infinite reverse',
          filter: 'blur(40px)',
        }}
      />

      {/* Logo */}
      <div
        style={{
          fontSize: '3.5rem',
          fontWeight: 700,
          background: 'linear-gradient(135deg, #4f8fff, #8b5cf6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'logoScale 1s ease forwards',
          position: 'relative',
          zIndex: 1,
        }}
      >
        KA
      </div>

      {/* Subtitle */}
      <p
        style={{
          color: '#a0a0b0',
          fontSize: '0.9rem',
          marginTop: 16,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          animation: 'fadeInUp 0.8s ease 0.3s both',
          position: 'relative',
          zIndex: 1,
        }}
      >
        Kethavath Anil
      </p>

      {/* Loading bar */}
      <div
        style={{
          width: 200,
          height: 3,
          background: 'rgba(255,255,255,0.1)',
          borderRadius: 2,
          marginTop: 32,
          overflow: 'hidden',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, #4f8fff, #8b5cf6)',
            borderRadius: 2,
            animation: 'loadingBar 1.8s ease-in-out forwards',
          }}
        />
      </div>
    </div>
  );
}