"use client";
import { motion } from "framer-motion";
import { GraduationCap, Target, Code2, CheckCircle2, School } from "lucide-react";
import { personalInfo, softSkills, languages as langData } from "@/data/portfolio";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function AboutSection() {
  const { ref, inView } = useScrollAnimation();

  const careerDomains = [
    { icon: "🤖", label: "Artificial Intelligence" },
    { icon: "🧠", label: "Machine Learning" },
    { icon: "📊", label: "Data Science" },
    { icon: "🏏", label: "Cricket Analytics" },
    { icon: "🏎️", label: "Formula 1 Analytics" },
    { icon: "⚙️", label: "Data Engineering" },
  ];

  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 20% 50%, rgba(0,102,255,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-tag">01 — About</p>
          <h2 className="section-title">
            Who I <span className="gradient-text-red">Am</span>
          </h2>
          <div className="section-divider mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — profile + bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {/* Avatar */}
            <div className="relative mb-8 inline-block">
              <div
                className="w-48 h-48 rounded-3xl flex items-center justify-center text-7xl relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(225,6,0,0.15), rgba(0,102,255,0.15))",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <span>👨‍💻</span>
              </div>
              {/* Status dot */}
              <div className="absolute -bottom-2 -right-2 glass rounded-full px-3 py-1.5 flex items-center gap-1.5 border border-white/10">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white/60 text-xs">Available</span>
              </div>
            </div>

            <h3 className="text-white font-bold text-2xl mb-1">{personalInfo.name}</h3>
            <p className="text-white/40 text-sm font-medium mb-4 tracking-wide">
              {personalInfo.shortBio}
            </p>
            <p className="text-white/65 leading-relaxed text-[15px] mb-6">
              {personalInfo.bio}
            </p>

            {/* Quick info pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                { icon: "📍", text: "Chennai, India" },
                { icon: "🎓", text: "SRIHER" },
                { icon: "⭐", text: "CGPA 8.50" },
                { icon: "📅", text: "Graduating 2027" },
                { icon: "✅", text: "No Backlogs" },
              ].map((item) => (
                <span
                  key={item.text}
                  className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full glass border border-white/10 text-white/60"
                >
                  <span>{item.icon}</span>
                  {item.text}
                </span>
              ))}
            </div>

            {/* Languages */}
            <div className="glass-card p-5 mb-4">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-3 font-semibold">
                Languages
              </p>
              <div className="flex gap-3 flex-wrap">
                {langData.map((l) => (
                  <div
                    key={l.lang}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <span className="text-white/80 text-sm font-medium">{l.lang}</span>
                    <span className="text-white/35 text-xs">{l.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft skills */}
            <div className="glass-card p-5">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-3 font-semibold">
                Soft Skills
              </p>
              <div className="flex gap-3 flex-wrap">
                {softSkills.map((s) => (
                  <div
                    key={s.label}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                    style={{
                      background: "rgba(225,6,0,0.08)",
                      border: "1px solid rgba(225,6,0,0.2)",
                    }}
                  >
                    <span>{s.icon}</span>
                    <span className="text-white/70 text-sm">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — cards */}
          <div className="space-y-5">
            {/* B.Tech Education card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="glass-card p-6"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(225,6,0,0.2), rgba(225,6,0,0.05))",
                    border: "1px solid rgba(225,6,0,0.3)",
                  }}
                >
                  <GraduationCap size={22} className="text-red-500" />
                </div>
                <div className="flex-1">
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">
                    B.Tech (Pursuing)
                  </p>
                  <h4 className="text-white font-bold text-base mb-1">
                    {personalInfo.education.degree}
                  </h4>
                  <p className="text-white/60 text-sm mb-2">
                    {personalInfo.education.institution}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span
                      className="tech-badge"
                      style={{ borderColor: "rgba(225,6,0,0.3)", color: "#ff6666" }}
                    >
                      CGPA: {personalInfo.education.cgpa}/10
                    </span>
                    <span className="tech-badge">
                      Expected: {personalInfo.education.expectedGraduation}
                    </span>
                    <span className="tech-badge">
                      <CheckCircle2 size={10} className="mr-1 text-green-400" />
                      {personalInfo.education.backlogs}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* School Education card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="glass-card p-6"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(0,212,255,0.2), rgba(0,212,255,0.05))",
                    border: "1px solid rgba(0,212,255,0.3)",
                  }}
                >
                  <School size={22} style={{ color: "#00d4ff" }} />
                </div>
                <div className="flex-1">
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">
                    Higher Secondary Education
                  </p>
                  <h4 className="text-white font-bold text-base mb-1">
                    {personalInfo.schoolEducation.school}
                  </h4>
                  <p className="text-white/60 text-sm mb-2">
                    {personalInfo.schoolEducation.board}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="tech-badge" style={{ color: "#00d4ff", borderColor: "rgba(0,212,255,0.3)" }}>
                      {personalInfo.schoolEducation.percentage}
                    </span>
                    <span className="tech-badge">
                      Class of {personalInfo.schoolEducation.year}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Career goal card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.38 }}
              className="glass-card p-6"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(0,102,255,0.2), rgba(0,102,255,0.05))",
                    border: "1px solid rgba(0,102,255,0.3)",
                  }}
                >
                  <Target size={22} className="text-blue-400" />
                </div>
                <div className="flex-1">
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">
                    Career Goal
                  </p>
                  <h4 className="text-white font-bold text-base mb-3">
                    Seeking Internships &amp; Full-time Roles
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {careerDomains.map((d) => (
                      <div
                        key={d.label}
                        className="flex items-center gap-2 text-white/55 text-xs"
                      >
                        <span>{d.icon}</span>
                        {d.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Passions card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.44 }}
              className="glass-card p-6"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(168,85,247,0.2), rgba(168,85,247,0.05))",
                    border: "1px solid rgba(168,85,247,0.3)",
                  }}
                >
                  <Code2 size={22} style={{ color: "#a855f7" }} />
                </div>
                <div className="flex-1">
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">
                    Passions
                  </p>
                  <h4 className="text-white font-bold text-base mb-2">
                    Where Tech Meets Sport
                  </h4>
                  <p className="text-white/55 text-sm leading-relaxed">
                    Obsessed with applying ML to motorsport and cricket — from predicting
                    F1 pit windows using tyre degradation models to building cricket XIs
                    using ball-by-ball analytics.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
