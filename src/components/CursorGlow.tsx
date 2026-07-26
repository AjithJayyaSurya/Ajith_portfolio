"use client";
import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const animFrame = useRef<number>(0);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const animate = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }
      animFrame.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    animFrame.current = requestAnimationFrame(animate);

    // Scale on click
    const onMouseDown = () => {
      if (dotRef.current) dotRef.current.style.transform = "translate(-50%,-50%) scale(1.8)";
      if (ringRef.current) ringRef.current.style.transform = "translate(-50%,-50%) scale(0.7)";
    };
    const onMouseUp = () => {
      if (dotRef.current) dotRef.current.style.transform = "translate(-50%,-50%) scale(1)";
      if (ringRef.current) ringRef.current.style.transform = "translate(-50%,-50%) scale(1)";
    };
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      cancelAnimationFrame(animFrame.current);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
