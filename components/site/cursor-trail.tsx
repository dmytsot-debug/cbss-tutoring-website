"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const SYMBOLS = [
  "∫", "∑", "∂", "√", "∞", "π", "∆", "∇",
  "λ", "μ", "Ω", "ψ", "φ", "θ", "α", "β",
  "γ", "σ", "ε", "ρ", "∈", "∀", "∃", "≈",
  "±", "×", "∮", "∏", "ℝ", "ℏ", "⇌", "d/dx",
];

const COLORS = [
  "rgba(96,165,250,",   // blue-400
  "rgba(147,197,253,",  // blue-300
  "rgba(56,189,248,",   // sky-400
  "rgba(34,211,238,",   // cyan-400
  "rgba(125,211,252,",  // sky-300
  "rgba(186,230,253,",  // sky-200
];

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  decay: number;
  symbol: string;
  size: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
};

export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: Particle[] = [];
    let rafId: number;
    let lastSpawn = 0;

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize, { passive: true });

    function heroClearance(clientY: number): boolean {
      const hero = document.querySelector<HTMLElement>('[aria-labelledby="hero-heading"]');
      if (!hero) return true;
      return clientY > hero.getBoundingClientRect().bottom;
    }

    function spawn(x: number, y: number) {
      if (particles.length >= 140) return;
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 2,
        vy: -(Math.random() * 2.5 + 0.8),
        life: 1,
        decay: 0.016 + Math.random() * 0.014,
        symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
        size: 11 + Math.floor(Math.random() * 18),
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        rotation: (Math.random() - 0.5) * 60,
        rotationSpeed: (Math.random() - 0.5) * 4,
      });
    }

    function loop(now: number) {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy *= 0.97;
        p.vx *= 0.98;
        p.life -= p.decay;
        p.rotation += p.rotationSpeed;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx!.save();
        ctx!.globalAlpha = Math.max(0, p.life);
        ctx!.translate(p.x, p.y);
        ctx!.rotate((p.rotation * Math.PI) / 180);
        ctx!.font = `${p.size}px ui-monospace, JetBrains Mono, monospace`;
        ctx!.fillStyle = `${p.color}${p.life.toFixed(2)})`;
        ctx!.textAlign = "center";
        ctx!.textBaseline = "middle";
        ctx!.shadowColor = p.color + "0.6)";
        ctx!.shadowBlur = p.size * 0.6;
        ctx!.fillText(p.symbol, 0, 0);
        ctx!.restore();
      }

      rafId = requestAnimationFrame(loop);
    }

    rafId = requestAnimationFrame(loop);

    function onMouseMove(e: MouseEvent) {
      const now = performance.now();
      if (now - lastSpawn < 28) return; // ~35 spawns/sec max
      if (!heroClearance(e.clientY)) return;
      lastSpawn = now;
      spawn(e.clientX, e.clientY);
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, [reduce]);

  if (reduce) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-50"
    />
  );
}
