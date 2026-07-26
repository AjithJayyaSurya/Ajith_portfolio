"use client";
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  pulse: number;
  pulseSpeed: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const colors = ["#e10600", "#0066ff", "#00d4ff", "#ffffff"];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const init = () => {
      particles.current = [];
      const count = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 14000), 90);
      for (let i = 0; i < count; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 1.8 + 0.4,
          opacity: Math.random() * 0.5 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)],
          pulse: 0,
          pulseSpeed: Math.random() * 0.02 + 0.005,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p, i) => {
        // Mouse attraction
        const dx = mouse.current.x - p.x;
        const dy = mouse.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          p.vx += dx * 0.00005;
          p.vy += dy * 0.00005;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;

        // Dampen velocity
        p.vx *= 0.998;
        p.vy *= 0.998;

        // Boundaries
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const pulsedOpacity = p.opacity * (0.7 + 0.3 * Math.sin(p.pulse));

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle =
          p.color +
          Math.round(pulsedOpacity * 255)
            .toString(16)
            .padStart(2, "0");
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.current.length; j++) {
          const p2 = particles.current[j];
          const dx2 = p2.x - p.x;
          const dy2 = p2.y - p.y;
          const d = Math.sqrt(dx2 * dx2 + dy2 * dy2);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const alpha = (1 - d / 120) * 0.12;
            ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animRef.current = requestAnimationFrame(draw);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", () => { resize(); init(); });

    resize();
    init();
    draw();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
