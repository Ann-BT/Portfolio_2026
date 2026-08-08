// src/app/page.tsx
"use client";

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsPreview from "@/components/ProjectsPreview";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* 1. Hero Landing Block */}
      <HeroSection />

      {/* 2. Professional Bio Story */}
      <AboutSection />

      {/* 3. Skill Cards 3D Grid */}
      <SkillsSection />

      {/* 4. Highlighted Projects */}
      <ProjectsPreview />

      {/* 5. Credentials Lightbox Grid */}
      <CertificationsSection />

      {/* 6. Contact Transmission Form */}
      <ContactSection />

      {/* 7. Monospace Footer */}
      <Footer />
    </>
  );
}
