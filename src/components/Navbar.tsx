"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string, label: string) => {
    setActive(label);
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(0,0,0,0.88)"
            : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => handleNav("#hero", "Home")}
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-white text-lg transition-all duration-300 group-hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #e10600, #0066ff)",
                boxShadow: "0 0 0 rgba(225,6,0,0)",
              }}
            >
              A
            </div>
            <div className="hidden sm:block">
              <p className="text-white font-bold text-sm leading-none">Ajith Jayya Surya</p>
              <p className="text-white/40 text-[10px] tracking-widest uppercase">AI Engineer</p>
            </div>
          </motion.button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href, link.label)}
                className={`nav-link ${active === link.label ? "active" : ""}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="/resume.pdf" download>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="btn-primary flex items-center gap-2 text-sm py-2 px-5"
              >
                <Download size={14} />
                Resume
              </motion.button>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[68px] left-0 right-0 z-40 glass"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href, link.label)}
                  className="text-left py-3 px-4 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-all text-sm font-medium"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2 pb-1">
                <a href="/resume.pdf" download>
                  <button className="btn-primary w-full flex items-center justify-center gap-2 text-sm">
                    <Download size={14} />
                    Download Resume
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
