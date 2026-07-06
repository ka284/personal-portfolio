"use client";

import LoadingScreen from "@/components/portfolio/LoadingScreen";
import ParticleBackground from "@/components/portfolio/ParticleBackground";
import CursorGlow from "@/components/portfolio/CursorGlow";
import ScrollProgress from "@/components/portfolio/ScrollProgress";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Certifications from "@/components/portfolio/Certifications";
import Achievements from "@/components/portfolio/Achievements";
import Resume from "@/components/portfolio/Resume";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import BackToTop from "@/components/portfolio/BackToTop";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <LoadingScreen />
      <ParticleBackground />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />

      <main style={{ flex: 1 }}>
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

      {/* Responsive overrides */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav-controls {
            display: flex !important;
          }
          .hero-image-wrapper {
            display: none !important;
          }
        }
        @media (min-width: 769px) {
          .mobile-nav-controls {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}