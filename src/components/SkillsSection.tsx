"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type SkillItem = { name: string; level: number; icon: string };

const categories = [
  { key: "languages", label: "Languages", icon: "🐍", color: "#e10600" },
  { key: "aiml", label: "AI / ML", icon: "🤖", color: "#0066ff" },
  { key: "bigdata", label: "Big Data", icon: "🐘", color: "#00d4ff" },
  { key: "web", label: "Web / API", icon: "⚛️", color: "#a855f7" },
  { key: "databases", label: "Databases", icon: "🗄️", color: "#f59e0b" },
  { key: "tools", label: "Tools", icon: "🛠️", color: "#10b981" },
];

function SkillBar({
  skill,
  color,
  delay,
  animate,
}: {
  skill: SkillItem;
  color: string;
  delay: number;
  animate: boolean;
}) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-base">{skill.icon}</span>
          <span className="text-white/80 text-sm font-medium">{skill.name}</span>
        </div>
        <span className="text-white/40 text-xs font-mono">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-fill"
          initial={{ width: 0 }}
          animate={animate ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.4, delay: delay, ease: [0.4, 0, 0.2, 1] }}
          style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const { ref, inView } = useScrollAnimation();
  const [activeTab, setActiveTab] = useState("languages");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeCategory = categories.find((c) => c.key === activeTab)!;
  const activeSkills = skills[activeTab as keyof typeof skills] as SkillItem[];

  // All tech badges for the bottom
  const allTech = Object.values(skills)
    .flat()
    .map((s) => (s as SkillItem).name);

  return (
    <section id="skills" className="relative py-28 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 80% 50%, rgba(225,6,0,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-tag">02 — Skills</p>
          <h2 className="section-title">
            Technical <span className="gradient-text-blue">Arsenal</span>
          </h2>
          <div className="section-divider mt-4" />
        </motion.div>

        {/* Category tabs — suppress hydration mismatch on button style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 justify-center mb-12"
          suppressHydrationWarning
        >
          {categories.map((cat) => {
            const isActive = mounted && activeTab === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key)}
                suppressHydrationWarning
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300"
                style={
                  mounted
                    ? {
                        background: isActive ? `${cat.color}20` : "rgba(255,255,255,0.04)",
                        border: isActive
                          ? `1px solid ${cat.color}50`
                          : "1px solid rgba(255,255,255,0.08)",
                        color: isActive ? cat.color : "rgba(255,255,255,0.5)",
                      }
                    : {
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "rgba(255,255,255,0.5)",
                      }
                }
              >
                <span>{cat.icon}</span>
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-card p-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
              style={{
                background: `${activeCategory.color}20`,
                border: `1px solid ${activeCategory.color}40`,
              }}
            >
              {activeCategory.icon}
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">{activeCategory.label}</h3>
              <p className="text-white/40 text-xs">{activeSkills.length} skills</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {activeSkills.map((skill, i) => (
              <SkillBar
                key={`${activeTab}-${skill.name}`}
                skill={skill}
                color={activeCategory.color}
                delay={i * 0.06}
                animate={inView && mounted}
              />
            ))}
          </div>
        </motion.div>

        {/* All tech bubbles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-white/30 text-xs uppercase tracking-widest mb-4">
            All Technologies
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {allTech.map((name) => (
              <span key={name} className="tech-badge">
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
