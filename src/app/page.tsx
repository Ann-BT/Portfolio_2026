// src/app/page.tsx
"use client";

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsPreview from "@/components/ProjectsPreview";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* 1. Hero Landing Block */}
      <HeroSection />

      {/* 2. Professional Bio Story & Skills Grid */}
      <AboutSection />

      {/* 3. Highlighted Projects */}
      <ProjectsPreview />

      {/* 4. Credentials Lightbox Grid */}
      <CertificationsSection />

      {/* 5. Contact Transmission Form */}
      <ContactSection />

      {/* 6. Monospace Footer */}
      <Footer />
    </>
  );
}
