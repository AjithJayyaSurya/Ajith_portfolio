"use client";
import { motion } from "framer-motion";
import { Briefcase, CheckCircle2, Building2 } from "lucide-react";
import { experience } from "@/data/portfolio";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ExperienceSection() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="experience" className="relative py-28 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 20% 60%, rgba(225,6,0,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-tag">04 — Experience</p>
          <h2 className="section-title">
            Professional <span className="gradient-text-blue">Journey</span>
          </h2>
          <div className="section-divider mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div
            className="absolute left-6 top-8 bottom-0 w-px hidden sm:block"
            style={{
              background: "linear-gradient(180deg, #e10600 0%, #0066ff 50%, transparent 100%)",
            }}
          />

          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="relative sm:pl-16 mb-8"
            >
              {/* Timeline dot */}
              <div
                className="absolute left-3 top-8 w-7 h-7 rounded-full hidden sm:flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #e10600, #b00500)",
                  boxShadow: "0 0 20px rgba(225,6,0,0.4)",
                }}
              >
                <Briefcase size={13} className="text-white" />
              </div>

              <div className="glass-card overflow-hidden">
                {/* Top accent bar */}
                <div
                  className="h-0.5 w-full"
                  style={{
                    background: `linear-gradient(90deg, ${exp.color}, ${exp.color}44)`,
                  }}
                />

                <div className="p-7">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <span
                        className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-2 inline-block"
                        style={{
                          background: `${exp.color}18`,
                          color: exp.color,
                        }}
                      >
                        {exp.type}
                      </span>
                      <h3 className="text-white font-black text-xl mt-1">{exp.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Building2 size={13} className="text-white/40" />
                        <p className="text-white/60 font-semibold text-sm">{exp.company}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p
                        className="text-sm font-semibold px-3 py-1 rounded-full"
                        style={{
                          background: `${exp.color}12`,
                          border: `1px solid ${exp.color}25`,
                          color: exp.color,
                        }}
                      >
                        {exp.duration}
                      </p>
                      <p className="text-white/30 text-xs mt-1">{exp.location}</p>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h4 className="text-white/60 text-xs uppercase tracking-widest mb-3 font-semibold">
                      Responsibilities
                    </h4>
                    <ul className="space-y-2.5">
                      {exp.responsibilities.map((r, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-white/65 text-sm leading-relaxed"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                            style={{ background: exp.color }}
                          />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-white/60 text-xs uppercase tracking-widest mb-3 font-semibold">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((a, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2.5 text-white/70 text-sm"
                        >
                          <CheckCircle2
                            size={14}
                            className="mt-0.5 flex-shrink-0 text-green-400"
                          />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-white/60 text-xs uppercase tracking-widest mb-3 font-semibold">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1.5 rounded-full text-xs font-medium"
                          style={{
                            background: `${exp.color}12`,
                            border: `1px solid ${exp.color}30`,
                            color: exp.color,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
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
