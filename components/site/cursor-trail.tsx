"use client";

import { useEffect, useRef } from "react";

// Mirrors the symbol set of the hero's floating stream so the cursor trail
// feels like a continuation of it.
const SYMBOLS = [
  "∫", "Σ", "∑", "∂", "√", "∞", "π", "∆", "∇", "Ω",
  "λ", "μ", "ψ", "φ", "θ", "α", "β", "γ", "σ", "ε",
  "ρ", "τ", "∈", "∀", "∃", "≈", "±", "×", "÷", "∮",
  "∏", "ℝ", "ℂ", "ℤ", "ℕ", "ℏ", "⇌", "≡", "⊥", "∝",
  "∩", "∪", "∗", "d/dx",
];

// Blue palette mirroring the hero
const COLORS: ReadonlyArray<readonly [number, number, number]> = [
  [96, 165, 250],
  [147, 197, 253],
  [56, 189, 248],
  [34, 211, 238],
  [125, 211, 252],
  [59, 130, 246],
  [14, 165, 233],
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
  r: number;
  g: number;
  b: number;
  rotation: number;
  rotSpeed: number;
};

const MAX_PARTICLES = 140;
const SPAWN_INTERVAL_MS = 80;

export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Skip on touch-only devices and when the user prefers reduced motion.
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Only run on pages that have the hero (effect is keyed to scrolling past it).
    const hero = document.querySelector<HTMLElement>('[aria-labelledby="hero-heading"]');
    if (!hero) return;

    let rafId = 0;
    let lastSpawn = 0;
    let heroDocBottom = 0;
    let viewportH = 0;
    const particles: Particle[] = [];
    const cursor = { x: -9999, y: -9999, moved: false };

    function cacheGeometry() {
      heroDocBottom = hero!.offsetTop + hero!.offsetHeight;
      viewportH = window.innerHeight;
    }

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = w + "px";
      canvas!.style.height = h + "px";
      // setTransform (not scale) so repeated resizes don't compound.
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      cacheGeometry();
    }
    resize();
    window.addEventListener("resize", resize, { passive: true });

    function spawn(x: number, y: number) {
      if (particles.length >= MAX_PARTICLES) return;
      const col = COLORS[Math.floor(Math.random() * COLORS.length)];
      particles.push({
        x: x + (Math.random() - 0.5) * 10,
        y: y + (Math.random() - 0.5) * 10,
        vx: (Math.random() - 0.5) * 1.6,
        vy: -(Math.random() * 1.8 + 0.6),
        life: 1,
        decay: 0.008 + Math.random() * 0.008,
        symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
        size: 14 + Math.floor(Math.random() * 22),
        r: col[0],
        g: col[1],
        b: col[2],
        rotation: (Math.random() - 0.5) * 40,
        rotSpeed: (Math.random() - 0.5) * 2.4,
      });
    }

    function isPastHero() {
      // Active once the user has scrolled meaningfully past the hero —
      // viewport is half a screen past the hero's bottom edge.
      return window.scrollY > heroDocBottom - viewportH * 0.5;
    }

    function tick(now: number) {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx!.clearRect(0, 0, w, h);

      if (cursor.moved && isPastHero() && now - lastSpawn >= SPAWN_INTERVAL_MS) {
        spawn(cursor.x, cursor.y);
        lastSpawn = now;
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy *= 0.985;
        p.vx *= 0.99;
        p.life -= p.decay;
        p.rotation += p.rotSpeed;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx!.save();
        ctx!.globalAlpha = Math.max(0, p.life);
        ctx!.translate(p.x, p.y);
        ctx!.rotate((p.rotation * Math.PI) / 180);
        ctx!.font = `${p.size}px ui-monospace, "JetBrains Mono", monospace`;
        ctx!.fillStyle = `rgb(${p.r},${p.g},${p.b})`;
        ctx!.shadowColor = `rgba(${p.r},${p.g},${p.b},0.7)`;
        ctx!.shadowBlur = p.size * 0.7;
        ctx!.textAlign = "center";
        ctx!.textBaseline = "middle";
        ctx!.fillText(p.symbol, 0, 0);
        ctx!.restore();
      }

      rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);

    function onMouseMove(e: MouseEvent) {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
      cursor.moved = true;
    }
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    function onVisibility() {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
      } else {
        // Reset spawn timer so we don't burst-emit on resume.
        lastSpawn = performance.now();
        rafId = requestAnimationFrame(tick);
      }
    }
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
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
