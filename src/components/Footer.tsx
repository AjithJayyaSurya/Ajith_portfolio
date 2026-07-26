"use client";
import { motion } from "framer-motion";
import { Mail, ArrowUp, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const links = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#resume", label: "Resume" },
    { href: "#contact", label: "Contact" },
  ];

  const socials = [
    { href: personalInfo.github, icon: <GithubIcon size={18} />, label: "GitHub" },
    { href: personalInfo.linkedin, icon: <LinkedinIcon size={18} />, label: "LinkedIn" },
    { href: `mailto:${personalInfo.email}`, icon: <Mail size={18} />, label: "Email" },
  ];

  return (
    <footer
      className="relative border-t"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      {/* Gradient top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, #e10600, #0066ff, #00d4ff, transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-white text-lg"
                style={{ background: "linear-gradient(135deg, #e10600, #0066ff)" }}
              >
                A
              </div>
              <div>
                <p className="text-white font-bold text-sm">Ajith Jayya Surya E</p>
                <p className="text-white/35 text-xs">AI Engineer · Sports Analytics</p>
              </div>
            </div>
            <p className="text-white/35 text-sm leading-relaxed">
              Building intelligent systems that decode patterns — from Formula 1
              telemetry to cricket data.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-white/60 text-xs uppercase tracking-widest mb-4 font-semibold">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {links.map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    document
                      .querySelector(link.href)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-white/40 hover:text-white text-sm text-left transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Socials + CTA */}
          <div>
            <h4 className="text-white/60 text-xs uppercase tracking-widest mb-4 font-semibold">
              Connect
            </h4>
            <div className="flex gap-3 mb-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="glass w-10 h-10 rounded-xl flex items-center justify-center text-white/40 hover:text-white border border-white/8 hover:border-white/20 transition-all"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <a href="/resume.pdf" download>
              <button className="btn-primary text-xs py-2.5 px-5">
                Download Resume
              </button>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-white/25 text-xs flex items-center gap-1.5">
            © 2025 Ajith Jayya Surya E. Built with{" "}
            <Heart size={11} className="text-red-500" fill="currentColor" /> using Next.js &amp;
            Tailwind CSS
          </p>

          <div className="flex items-center gap-4">
            <p className="text-white/20 text-xs">
              Designed for AI, Sports Analytics &amp; F1 Recruiters 🏎️
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="glass w-9 h-9 rounded-xl flex items-center justify-center text-white/40 hover:text-white border border-white/8 hover:border-white/20 transition-all"
              aria-label="Back to top"
            >
              <ArrowUp size={15} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
