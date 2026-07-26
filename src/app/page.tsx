"use client";
import dynamic from "next/dynamic";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

// Dynamic import for cursor (no SSR needed)
const CursorGlow = dynamic(() => import("@/components/CursorGlow"), { ssr: false });
const ParticleBackground = dynamic(() => import("@/components/ParticleBackground"), { ssr: false });

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CursorGlow />
      <ParticleBackground />

      <div className="relative z-10">
        <Navbar />

        <main>
          <HeroSection />
          <div className="section-divider mx-auto" />

          <AboutSection />
          <div className="section-divider mx-auto" />

          <SkillsSection />
          <div className="section-divider mx-auto" />

          <ProjectsSection />
          <div className="section-divider mx-auto" />

          <ExperienceSection />
          <div className="section-divider mx-auto" />

          <ResumeSection />
          <div className="section-divider mx-auto" />

          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  );
}
