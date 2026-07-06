'use client';

import LoadingScreen from '@/components/portfolio/LoadingScreen';
import ParticleBackground from '@/components/portfolio/ParticleBackground';
import CursorGlow from '@/components/portfolio/CursorGlow';
import ScrollProgress from '@/components/portfolio/ScrollProgress';
import Navbar from '@/components/portfolio/Navbar';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Skills from '@/components/portfolio/Skills';
import Projects from '@/components/portfolio/Projects';
import Certifications from '@/components/portfolio/Certifications';
import Achievements from '@/components/portfolio/Achievements';
import Resume from '@/components/portfolio/Resume';
import Contact from '@/components/portfolio/Contact';
import Footer from '@/components/portfolio/Footer';
import BackToTop from '@/components/portfolio/BackToTop';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      <LoadingScreen />
      <ParticleBackground />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 2, flex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}