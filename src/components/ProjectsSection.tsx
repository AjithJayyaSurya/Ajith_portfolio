"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ChevronRight, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { projects } from "@/data/portfolio";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass p-3 rounded-xl text-center border border-white/8">
      <div className="text-white font-bold text-lg">{value}</div>
      <div className="text-white/40 text-xs mt-0.5">{label}</div>
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: (typeof projects)[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(12px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93, y: 30 }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        className="glass-card max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
        style={{
          border: `1px solid ${project.color}30`,
          boxShadow: `0 0 80px ${project.color}15`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="p-8 pb-6"
          style={{
            background: `linear-gradient(135deg, ${project.color}10 0%, transparent 60%)`,
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 glass p-2 rounded-xl hover:bg-white/10 transition-colors"
          >
            <X size={18} className="text-white/60" />
          </button>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{project.emoji}</span>
            <div>
              <span
                className="text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full"
                style={{ background: `${project.color}20`, color: project.color }}
              >
                {project.category}
              </span>
              <h2 className="text-white font-black text-2xl mt-2 leading-tight">{project.title}</h2>
              <p style={{ color: project.color }} className="text-sm font-medium mt-1">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metrics.map((m) => (
              <MetricCard key={m.label} label={m.label} value={m.value} />
            ))}
          </div>
        </div>

        <div className="p-8 space-y-8">
          {/* Problem */}
          <div>
            <h3 className="text-white font-bold mb-3 flex items-center gap-2">
              <span style={{ color: project.color }}>◆</span> Problem Statement
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">{project.problem}</p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-white font-bold mb-3 flex items-center gap-2">
              <span style={{ color: project.color }}>◆</span> Key Features
            </h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {project.features.map((f) => (
                <div key={f} className="flex items-start gap-2 text-white/60 text-sm">
                  <ChevronRight size={14} className="mt-0.5 flex-shrink-0" style={{ color: project.color }} />
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* Architecture */}
          <div>
            <h3 className="text-white font-bold mb-3 flex items-center gap-2">
              <span style={{ color: project.color }}>◆</span> System Architecture
            </h3>
            <div className="space-y-2">
              {project.architecture.map((a, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-sm text-white/55 glass p-3 rounded-xl"
                >
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{ background: `${project.color}25`, color: project.color }}
                  >
                    {i + 1}
                  </span>
                  {a}
                </div>
              ))}
            </div>
          </div>

          {/* ML Models */}
          <div>
            <h3 className="text-white font-bold mb-3 flex items-center gap-2">
              <span style={{ color: project.color }}>◆</span> Models / Methods
            </h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {project.models.map((m) => (
                <div key={m} className="flex items-start gap-2 text-white/60 text-sm">
                  <span style={{ color: project.color }} className="text-xs mt-0.5">▸</span>
                  {m}
                </div>
              ))}
            </div>
          </div>

          {/* Tech stack */}
          <div>
            <h3 className="text-white font-bold mb-3 flex items-center gap-2">
              <span style={{ color: project.color }}>◆</span> Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{
                    background: `${project.color}15`,
                    border: `1px solid ${project.color}35`,
                    color: project.color,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 pt-2">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
              <button
                className="w-full btn-ghost flex items-center justify-center gap-2"
                style={{ borderColor: `${project.color}40` }}
              >
                <GithubIcon size={16} />
                View on GitHub
              </button>
            </a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
              <button
                className="w-full btn-primary flex items-center justify-center gap-2"
                style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}bb)` }}
              >
                <ExternalLink size={16} />
                Live Demo
              </button>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const { ref, inView } = useScrollAnimation(0.1);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="project-card glass-card overflow-hidden cursor-pointer group"
        onClick={() => setModalOpen(true)}
      >
        {/* Card top color bar */}
        <div
          className="h-1 w-full"
          style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}55)` }}
        />

        {/* Card header */}
        <div
          className="p-6 pb-4"
          style={{
            background: `linear-gradient(135deg, ${project.color}08 0%, transparent 50%)`,
          }}
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{project.emoji}</span>
              <span
                className="text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full"
                style={{ background: `${project.color}18`, color: project.color }}
              >
                {project.category}
              </span>
            </div>
            <ArrowUpRight
              size={18}
              className="text-white/20 group-hover:text-white/60 transition-colors mt-1"
            />
          </div>

          <h3 className="text-white font-bold text-lg leading-tight mb-1 group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <p className="text-sm font-medium mb-3" style={{ color: project.color }}>
            {project.subtitle}
          </p>
          <p className="text-white/50 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Metrics */}
        <div className="px-6 pb-4">
          <div className="grid grid-cols-2 gap-2">
            {project.metrics.slice(0, 2).map((m) => (
              <div
                key={m.label}
                className="rounded-xl p-3 text-center"
                style={{
                  background: `${project.color}08`,
                  border: `1px solid ${project.color}20`,
                }}
              >
                <div className="text-white font-bold text-base" style={{ color: project.color }}>
                  {m.value}
                </div>
                <div className="text-white/40 text-[10px] mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <div className="px-6 pb-5">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 5).map((t) => (
              <span key={t} className="tech-badge text-[10px]">
                {t}
              </span>
            ))}
            {project.tech.length > 5 && (
              <span className="tech-badge text-[10px]">+{project.tech.length - 5}</span>
            )}
          </div>
        </div>

        {/* Footer */}
        <div
          className="px-6 py-4 flex items-center justify-between"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <span className="text-white/30 text-xs">Click to explore →</span>
          <div className="flex gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="glass p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <GithubIcon size={14} className="text-white/50" />
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="glass p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <ExternalLink size={14} className="text-white/50" />
            </a>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {modalOpen && (
          <ProjectModal project={project} onClose={() => setModalOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

export default function ProjectsSection() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="projects" className="relative py-28 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(0,102,255,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-tag">03 — Projects</p>
          <h2 className="section-title">
            Featured <span className="gradient-text-red">Work</span>
          </h2>
          <p className="text-white/40 text-base mt-4 max-w-xl mx-auto">
            Click any card to explore architecture, models, features, and results.
          </p>
          <div className="section-divider mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
