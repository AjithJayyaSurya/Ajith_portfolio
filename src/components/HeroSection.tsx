"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Mail, Download, ChevronDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { personalInfo, stats } from "@/data/portfolio";

export default function HeroSection() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-12 overflow-hidden"
    >
      {/* Radial glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(225,6,0,0.08) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(0,102,255,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <div className="flex items-center gap-2 glass rounded-full px-4 py-2 border border-white/10">
            <span
              className="w-2 h-2 rounded-full bg-green-400 animate-pulse-glow"
              style={{ boxShadow: "0 0 8px rgba(74,222,128,0.8)" }}
            />
            <span className="text-white/60 text-xs tracking-widest uppercase">
              Open to Internships &amp; Full-time
            </span>
          </div>
        </motion.div>

        {/* Main name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1
            className="font-black tracking-tight mb-4"
            style={{
              fontSize: "clamp(40px, 8vw, 88px)",
              lineHeight: 1.0,
              letterSpacing: "-2px",
            }}
          >
            <span className="text-white">Ajith </span>
            <span className="gradient-text-red">Jayya </span>
            <span className="text-white">Surya</span>
          </h1>
        </motion.div>

        {/* Animated typing role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mb-6"
        >
          <div className="flex items-center justify-center gap-3 text-xl sm:text-2xl font-semibold">
            <span className="text-white/30">I&apos;m a</span>
            <span className="gradient-text-blue">
              <TypeAnimation
                sequence={personalInfo.roles.flatMap((r) => [r, 2200])}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
              />
            </span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Building intelligent systems from{" "}
          <span className="text-white/80 font-medium">Formula 1 telemetry</span> to{" "}
          <span className="text-white/80 font-medium">cricket analytics</span>. B.Tech CSE
          (AI &amp; Data Analytics) @ SRIHER · CGPA{" "}
          <span className="text-red-500 font-bold">8.5</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-wrap gap-3 justify-center mb-16"
        >
          <a href="/resume.pdf" download>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="btn-primary flex items-center gap-2"
              style={{ fontSize: "14px", padding: "13px 28px" }}
            >
              <Download size={16} />
              Download Resume
            </motion.button>
          </a>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-secondary flex items-center gap-2"
            style={{ fontSize: "14px" }}
          >
            <Mail size={16} />
            Get in Touch
          </motion.button>

          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="btn-ghost flex items-center gap-2"
              style={{ fontSize: "14px" }}
            >
              <GithubIcon size={16} />
              GitHub
            </motion.button>
          </a>

          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="btn-ghost flex items-center gap-2"
              style={{ fontSize: "14px" }}
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </motion.button>
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + i * 0.08 }}
              className="glass-card p-4 text-center"
            >
              <div
                className="font-black text-3xl mb-1"
                style={{
                  background: i % 2 === 0
                    ? "linear-gradient(135deg, #e10600, #ff4444)"
                    : "linear-gradient(135deg, #0066ff, #00d4ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
                <span className="text-lg">{stat.suffix}</span>
              </div>
              <div className="text-white/40 text-xs font-medium tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Target companies strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mb-4"
        >
          <p className="text-white/25 text-xs tracking-widest uppercase mb-3">
            Targeting Opportunities At
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Google", "Mercedes-AMG F1", "Tiger Analytics", "SportsMechanics", "Microsoft", "NVIDIA", "Fractal Analytics", "Zoho", "CricHeroes"].map((c) => (
              <span
                key={c}
                className="text-white/30 text-xs px-3 py-1 rounded-full border border-white/8 hover:border-white/20 hover:text-white/60 transition-all"
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 hover:text-white/60 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
