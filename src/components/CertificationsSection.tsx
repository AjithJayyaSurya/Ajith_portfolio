"use client";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CertificationsSection() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="certifications" className="relative py-28 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 80% 50%, rgba(0,212,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-tag">05 — Certifications</p>
          <h2 className="section-title">
            Credentials &{" "}
            <span className="gradient-text-blue">Achievements</span>
          </h2>
          <div className="section-divider mt-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card p-6 group hover:border-white/15 transition-all duration-300"
              style={{
                borderTop: `2px solid ${cert.color}50`,
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{
                    background: `${cert.color}12`,
                    border: `1px solid ${cert.color}30`,
                  }}
                >
                  {cert.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-bold text-sm leading-snug mb-1 group-hover:text-white transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-white/45 text-xs mb-2">{cert.issuer}</p>
                  <div className="flex items-center gap-2">
                    <Award size={11} style={{ color: cert.color }} />
                    <span
                      className="text-[11px] font-semibold"
                      style={{ color: cert.color }}
                    >
                      {cert.date}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
