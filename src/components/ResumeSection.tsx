"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Download, FileText, ExternalLink, Maximize2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ResumeSection() {
  const { ref, inView } = useScrollAnimation();
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <section id="resume" className="relative py-28 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(0,102,255,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-tag">05 — Resume</p>
          <h2 className="section-title">
            My <span className="gradient-text-red">Resume</span>
          </h2>
          <div className="section-divider mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-card overflow-hidden"
        >
          {/* Toolbar */}
          <div
            className="px-6 py-4 flex items-center justify-between flex-wrap gap-3"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(225,6,0,0.2), rgba(225,6,0,0.05))",
                  border: "1px solid rgba(225,6,0,0.3)",
                }}
              >
                <FileText size={18} className="text-red-500" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm leading-none">
                  Ajith_Jayya_Surya_Resume.pdf
                </h3>
                <p className="text-white/40 text-xs mt-0.5">
                  AI Engineer · ML Engineer · Data Analyst
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="btn-ghost py-2 px-4 text-xs flex items-center gap-1.5"
                >
                  <Maximize2 size={12} />
                  Full Screen
                </motion.button>
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="btn-ghost py-2 px-4 text-xs flex items-center gap-1.5"
                >
                  <ExternalLink size={12} />
                  Open
                </motion.button>
              </a>
              <a href="/resume.pdf" download="Ajith_Jayya_Surya_Resume.pdf">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="btn-primary py-2 px-4 text-xs flex items-center gap-1.5"
                >
                  <Download size={12} />
                  Download PDF
                </motion.button>
              </a>
            </div>
          </div>

          {/* PDF iframe embed */}
          <div className="relative w-full" style={{ height: "800px", background: "#111" }}>
            {/* Loading skeleton */}
            {!iframeLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10">
                <div className="flex gap-2 items-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                    className="w-6 h-6 border-2 border-white/20 border-t-red-500 rounded-full"
                  />
                  <span className="text-white/40 text-sm">Loading resume...</span>
                </div>
              </div>
            )}

            <iframe
              src="/resume.pdf#toolbar=1&navpanes=0&scrollbar=1&view=FitH"
              title="Ajith Jayya Surya E - Resume"
              className="w-full h-full border-0"
              onLoad={() => setIframeLoaded(true)}
              style={{ display: "block" }}
            />
          </div>

          {/* Footer CTA */}
          <div
            className="px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <p className="text-white/30 text-xs text-center sm:text-left">
              ✓ ATS-optimized · 2 pages · Keyword-rich · Recruiter-friendly
            </p>
            <a href="/resume.pdf" download="Ajith_Jayya_Surya_Resume.pdf">
              <motion.button
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
                className="btn-primary flex items-center gap-2"
              >
                <Download size={15} />
                Download Resume
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
