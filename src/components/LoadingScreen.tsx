"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return prev + Math.random() * 18 + 5;
      });
    }, 120);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="loading-screen"
          style={{ zIndex: 100000 }}
        >
          {/* Background grid */}
          <div className="absolute inset-0 grid-bg opacity-30" />

          {/* Animated rings */}
          <div className="relative flex items-center justify-center mb-12">
            {[80, 120, 160].map((size, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border border-white/10"
                style={{ width: size, height: size }}
                animate={{ rotate: 360 * (i % 2 === 0 ? 1 : -1) }}
                transition={{ duration: 6 + i * 2, repeat: Infinity, ease: "linear" }}
              />
            ))}
            {/* Center logo */}
            <motion.div
              className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #e10600, #0066ff)" }}
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-white font-black text-2xl">A</span>
            </motion.div>
          </div>

          {/* Name */}
          <motion.h1
            className="text-white font-bold text-2xl tracking-widest mb-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            AJITH JAYYA SURYA E
          </motion.h1>
          <motion.p
            className="text-white/40 text-xs tracking-[4px] uppercase mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            AI Engineer · Sports Analytics
          </motion.p>

          {/* Progress bar */}
          <div className="w-64 h-px bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, #e10600, #0066ff, #00d4ff)",
                width: `${Math.min(progress, 100)}%`,
              }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <p className="text-white/30 text-xs mt-3 tracking-widest">
            {Math.min(Math.round(progress), 100)}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
