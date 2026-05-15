"use client";

import { useEffect, useRef } from "react";

const SYMBOLS = [
  "∫", "∑", "∂", "√", "∞", "π", "∆", "∇",
  "λ", "μ", "Ω", "ψ", "φ", "θ", "α", "β",
  "γ", "σ", "ε", "ρ", "∈", "∀", "∃", "≈",
  "±", "×", "∮", "∏", "ℝ", "ℏ", "⇌", "d/dx",
];

const COLORS: [number, number, number][] = [
  [96,  165, 250],
  [147, 197, 253],
  [56,  189, 248],
  [34,  211, 238],
  [125, 211, 252],
];

type Particle = {
  x: number; y: number;
  vx: number; vy: number;
  life: number; decay: number;
  symbol: string; size: number;
  r: number; g: number; b: number;
  rotation: number; rotSpeed: number;
};

export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId = 0;
    let lastSpawn = 0;
    let heroDocBottom = 0;
    const particles: Particle[] = [];

    function cacheHero() {
      const hero = document.querySelector<HTMLElement>('[aria-labelledby="hero-heading"]');
      heroDocBottom = hero ? hero.offsetTop + hero.offsetHeight : 0;
    }

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      canvas!.width  = window.innerWidth  * dpr;
      canvas!.height = window.innerHeight * dpr;
      ctx!.scale(dpr, dpr);
      cacheHero();
    }
    resize();
    window.addEventListener("resize", resize, { passive: true });

    function spawn(x: number, y: number) {
      if (particles.length >= 120) return;
      const col = COLORS[Math.floor(Math.random() * COLORS.length)];
      particles.push({
        x, y,
        vx: (Math.random() - 0.5) * 2.5,
        vy: -(Math.random() * 2 + 1),
        life: 1,
        decay: 0.012 + Math.random() * 0.01,
        symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
        size: 14 + Math.floor(Math.random() * 22),
        r: col[0], g: col[1], b: col[2],
        rotation: (Math.random() - 0.5) * 45,
        rotSpeed: (Math.random() - 0.5) * 3,
      });
    }

    function draw() {
      const w = canvas!.width  / (window.devicePixelRatio || 1);
      const h = canvas!.height / (window.devicePixelRatio || 1);
      ctx!.clearRect(0, 0, w, h);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy;
        p.vy *= 0.97; p.vx *= 0.99;
        p.life -= p.decay; p.rotation += p.rotSpeed;

        if (p.life <= 0) { particles.splice(i, 1); continue; }

        ctx!.save();
        ctx!.globalAlpha = Math.max(0, p.life);
        ctx!.translate(p.x, p.y);
        ctx!.rotate((p.rotation * Math.PI) / 180);
        ctx!.font        = `${p.size}px ui-monospace, "JetBrains Mono", monospace`;
        ctx!.fillStyle   = `rgb(${p.r},${p.g},${p.b})`;
        ctx!.shadowColor = `rgba(${p.r},${p.g},${p.b},0.7)`;
        ctx!.shadowBlur  = p.size * 0.7;
        ctx!.textAlign    = "center";
        ctx!.textBaseline = "middle";
        ctx!.fillText(p.symbol, 0, 0);
        ctx!.restore();
      }

      rafId = requestAnimationFrame(draw);
    }

    rafId = requestAnimationFrame(draw);

    function onMouseMove(e: MouseEvent) {
      const now = performance.now();
      if (now - lastSpawn < 25) return;
      if (e.clientY + window.scrollY <= heroDocBottom) return;
      lastSpawn = now;
      spawn(e.clientX, e.clientY);
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-50"
    />
  );
}
