"use client";
import { motion } from "framer-motion";
import { Star, GitFork, Activity } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { personalInfo } from "@/data/portfolio";

export default function GitHubStats() {
  const { ref, inView } = useScrollAnimation();
  const username = "AjithJayyaSurya";

  const languages = [
    { name: "Python", percent: 62, color: "#3776ab" },
    { name: "JavaScript", percent: 14, color: "#f7df1e" },
    { name: "TypeScript", percent: 10, color: "#3178c6" },
    { name: "SQL", percent: 8, color: "#e10600" },
    { name: "Java", percent: 6, color: "#ed8b00" },
  ];

  const statCards = [
    { icon: <Star size={18} />, label: "Total Stars", value: "32", color: "#f59e0b" },
    { icon: <GitFork size={18} />, label: "Forks", value: "18", color: "#0066ff" },
    { icon: <Activity size={18} />, label: "Contributions", value: "280+", color: "#10b981" },
    { icon: <GithubIcon size={18} />, label: "Repositories", value: "14", color: "#e10600" },
  ];

  return (
    <section id="github" className="relative py-28 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(225,6,0,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-tag">06 — GitHub</p>
          <h2 className="section-title">
            Code <span className="gradient-text-red">Activity</span>
          </h2>
          <div className="section-divider mt-4" />
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {statCards.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card p-5 text-center"
              style={{ borderTop: `2px solid ${s.color}50` }}
            >
              <div
                className="flex items-center justify-center mb-3"
                style={{ color: s.color }}
              >
                {s.icon}
              </div>
              <div className="text-white font-black text-2xl mb-1">{s.value}</div>
              <div className="text-white/40 text-xs">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* GitHub Stats Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <GithubIcon size={18} className="text-white/60" />
              <h3 className="text-white font-bold">GitHub Overview</h3>
            </div>
            <div className="rounded-xl overflow-hidden bg-black/30">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&title_color=e10600&text_color=ffffff&icon_color=0066ff&bg_color=00000000&count_private=true`}
                alt="GitHub Stats"
                className="w-full"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Top Languages */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="glass-card p-6"
          >
            <h3 className="text-white font-bold mb-5">Top Languages</h3>
            <div className="space-y-4">
              {languages.map((lang, i) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ background: lang.color }}
                      />
                      <span className="text-white/75 text-sm">{lang.name}</span>
                    </div>
                    <span className="text-white/40 text-xs font-mono">{lang.percent}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="h-full rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${lang.percent}%` } : { width: 0 }}
                      transition={{ duration: 1.2, delay: 0.4 + i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                      style={{ background: lang.color }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Streak stats */}
            <div className="mt-6 rounded-xl overflow-hidden bg-black/20">
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=transparent&hide_border=true&ring=e10600&fire=ff4444&currStreakLabel=ffffff&sideLabels=ffffff55&dates=ffffff30&background=00000000`}
                alt="GitHub Streak"
                className="w-full"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        {/* Contribution graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 glass-card p-6"
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-white font-bold">Contribution Activity</h3>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost py-2 px-4 text-xs flex items-center gap-2"
            >
              <GithubIcon size={13} />
              View Profile
            </a>
          </div>
          <div className="rounded-xl overflow-hidden bg-black/20 p-4">
            <img
              src={`https://ghchart.rshah.org/e10600/${username}`}
              alt="Contribution Graph"
              className="w-full opacity-90"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
