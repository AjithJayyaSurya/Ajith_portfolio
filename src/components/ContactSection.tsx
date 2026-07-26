"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { personalInfo } from "@/data/portfolio";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ContactSection() {
  const { ref, inView } = useScrollAnimation();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const contactLinks = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "#e10600",
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:+91${personalInfo.phone}`,
      color: "#10b981",
    },
    {
      icon: <LinkedinIcon size={20} />,
      label: "LinkedIn",
      value: "ajith-jayya-surya-e",
      href: personalInfo.linkedin,
      color: "#0066ff",
    },
    {
      icon: <GithubIcon size={20} />,
      label: "GitHub",
      value: "AjithJayyaSurya",
      href: personalInfo.github,
      color: "#00d4ff",
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: personalInfo.location,
      href: "#",
      color: "#a855f7",
    },
  ];

  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(225,6,0,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-tag">08 — Contact</p>
          <h2 className="section-title">
            Let&apos;s <span className="gradient-text-red">Connect</span>
          </h2>
          <p className="text-white/40 text-base mt-4 max-w-lg mx-auto">
            Open to internships, full-time roles, and interesting conversations
            about AI, sports analytics, and data engineering.
          </p>
          <div className="section-divider mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h3 className="text-white font-bold text-xl mb-2">Get in Touch</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              Whether you&apos;re a recruiter from a top AI firm, a sports analytics
              company, or just someone who loves Formula 1 data — I&apos;d love to hear from you.
            </p>

            <div className="space-y-4 mb-8">
              {contactLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  className="flex items-center gap-4 glass-card p-4 hover:border-white/15 transition-all duration-300 group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all"
                    style={{
                      background: `${link.color}15`,
                      border: `1px solid ${link.color}30`,
                      color: link.color,
                    }}
                  >
                    {link.icon}
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest">{link.label}</p>
                    <p className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">
                      {link.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability badge */}
            <div className="glass-card p-4 flex items-center gap-3">
              <span
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ background: "#10b981", boxShadow: "0 0 10px rgba(16,185,129,0.6)" }}
              />
              <div>
                <p className="text-white/80 text-sm font-medium">Currently Available</p>
                <p className="text-white/40 text-xs">
                  Actively seeking internships &amp; full-time roles in AI/ML/Data Science
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
              <h3 className="text-white font-bold text-lg mb-2">Send a Message</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-white/40 text-xs uppercase tracking-widest block mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="text-white/40 text-xs uppercase tracking-widest block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@company.com"
                    className="form-input"
                  />
                </div>
              </div>

              <div>
                <label className="text-white/40 text-xs uppercase tracking-widest block mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Internship Opportunity / Collaboration"
                  className="form-input"
                />
              </div>

              <div>
                <label className="text-white/40 text-xs uppercase tracking-widest block mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Hi Ajith, I'd like to discuss..."
                  className="form-input resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full flex items-center justify-center gap-2 py-3.5"
              >
                {status === "sent" ? (
                  <>
                    <CheckCircle size={16} />
                    Message Sent!
                  </>
                ) : status === "sending" ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full inline-block"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>

              <p className="text-white/25 text-xs text-center">
                I typically respond within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
