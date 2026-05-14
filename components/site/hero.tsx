"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

type Particle = {
  id: number;
  sym: string;
  top: number;
  sz: number;
  dur: number;
  del: number;
  rx: number;
  rz: number;
  op: number;
  col: string;
};

const PARTICLES: Particle[] = [
  // Top scatter
  { id: 0,  sym: "∫",     top: 8,  sz: 28, dur: 26, del: -8,  rx: 20,  rz: -5,  op: 0.35, col: "#7dd3fc" },
  { id: 1,  sym: "λ",     top: 14, sz: 56, dur: 16, del: -3,  rx: -30, rz: 8,   op: 0.65, col: "#38bdf8" },
  { id: 2,  sym: "∂",     top: 5,  sz: 40, dur: 22, del: -15, rx: 15,  rz: -12, op: 0.45, col: "#93c5fd" },
  { id: 3,  sym: "ℝ",     top: 18, sz: 22, dur: 32, del: -22, rx: -10, rz: 4,   op: 0.28, col: "#3b82f6" },
  { id: 44, sym: "∀",     top: 12, sz: 70, dur: 11, del: -2,  rx: -32, rz: 12,  op: 0.75, col: "#60a5fa" },
  { id: 29, sym: "∩",     top: 10, sz: 54, dur: 15, del: -5,  rx: -22, rz: -7,  op: 0.62, col: "#3b82f6" },
  // Upper-mid
  { id: 4,  sym: "Σ",     top: 26, sz: 80, dur: 12, del: -2,  rx: -25, rz: -10, op: 0.78, col: "#60a5fa" },
  { id: 5,  sym: "∑",     top: 30, sz: 44, dur: 20, del: -12, rx: 32,  rz: 6,   op: 0.52, col: "#0ea5e9" },
  { id: 6,  sym: "π",     top: 24, sz: 32, dur: 28, del: -20, rx: -18, rz: -8,  op: 0.38, col: "#7dd3fc" },
  { id: 7,  sym: "∞",     top: 36, sz: 72, dur: 10, del: -1,  rx: 40,  rz: 12,  op: 0.72, col: "#38bdf8" },
  { id: 8,  sym: "d/dx",  top: 28, sz: 20, dur: 36, del: -28, rx: 8,   rz: -4,  op: 0.25, col: "#93c5fd" },
  { id: 27, sym: "∈",     top: 20, sz: 66, dur: 12, del: -3,  rx: -28, rz: -10, op: 0.72, col: "#22d3ee" },
  { id: 34, sym: "ℂ",     top: 16, sz: 34, dur: 28, del: -21, rx: 10,  rz: 5,   op: 0.38, col: "#93c5fd" },
  { id: 37, sym: "⊥",     top: 22, sz: 48, dur: 18, del: -12, rx: 28,  rz: 6,   op: 0.53, col: "#3b82f6" },
  { id: 31, sym: "ℏ",     top: 32, sz: 58, dur: 16, del: -8,  rx: -25, rz: -6,  op: 0.63, col: "#0ea5e9" },
  { id: 39, sym: "×",     top: 34, sz: 40, dur: 22, del: -17, rx: 20,  rz: 8,   op: 0.45, col: "#93c5fd" },
  // Center (most impactful)
  { id: 9,  sym: "∫",     top: 45, sz: 96, dur: 9,  del: 0,   rx: -35, rz: -14, op: 0.9,  col: "#22d3ee" },
  { id: 10, sym: "∆",     top: 50, sz: 52, dur: 18, del: -9,  rx: 22,  rz: 8,   op: 0.6,  col: "#60a5fa" },
  { id: 11, sym: "∇",     top: 42, sz: 68, dur: 14, del: -5,  rx: -28, rz: -6,  op: 0.7,  col: "#38bdf8" },
  { id: 12, sym: "Ω",     top: 56, sz: 36, dur: 24, del: -16, rx: 15,  rz: 10,  op: 0.42, col: "#7dd3fc" },
  { id: 13, sym: "≈",     top: 48, sz: 28, dur: 30, del: -24, rx: -12, rz: -3,  op: 0.32, col: "#93c5fd" },
  { id: 14, sym: "∮",     top: 53, sz: 84, dur: 11, del: -4,  rx: 38,  rz: -16, op: 0.82, col: "#0ea5e9" },
  { id: 26, sym: "√",     top: 38, sz: 48, dur: 17, del: -10, rx: 20,  rz: 7,   op: 0.55, col: "#38bdf8" },
  { id: 33, sym: "≡",     top: 46, sz: 44, dur: 22, del: -16, rx: -18, rz: -8,  op: 0.5,  col: "#38bdf8" },
  { id: 38, sym: "÷",     top: 54, sz: 72, dur: 13, del: -5,  rx: -36, rz: -11, op: 0.74, col: "#22d3ee" },
  { id: 42, sym: "τ",     top: 40, sz: 30, dur: 26, del: -18, rx: 16,  rz: 7,   op: 0.33, col: "#7dd3fc" },
  // Lower-mid
  { id: 15, sym: "φ",     top: 62, sz: 60, dur: 16, del: -7,  rx: -20, rz: 9,   op: 0.65, col: "#60a5fa" },
  { id: 16, sym: "θ",     top: 68, sz: 44, dur: 21, del: -14, rx: 26,  rz: -7,  op: 0.5,  col: "#38bdf8" },
  { id: 17, sym: "∏",     top: 58, sz: 32, dur: 27, del: -19, rx: -16, rz: 5,   op: 0.36, col: "#7dd3fc" },
  { id: 18, sym: "α",     top: 72, sz: 76, dur: 10, del: -2,  rx: 42,  rz: -13, op: 0.8,  col: "#22d3ee" },
  { id: 19, sym: "β",     top: 64, sz: 24, dur: 34, del: -26, rx: -8,  rz: 3,   op: 0.26, col: "#93c5fd" },
  { id: 20, sym: "γ",     top: 76, sz: 50, dur: 15, del: -6,  rx: 18,  rz: -9,  op: 0.58, col: "#3b82f6" },
  { id: 21, sym: "ψ",     top: 60, sz: 88, dur: 8,  del: -1,  rx: -45, rz: 15,  op: 0.88, col: "#60a5fa" },
  { id: 36, sym: "∝",     top: 74, sz: 56, dur: 14, del: -6,  rx: -24, rz: -9,  op: 0.62, col: "#38bdf8" },
  { id: 32, sym: "⇌",     top: 70, sz: 26, dur: 30, del: -22, rx: 12,  rz: 4,   op: 0.3,  col: "#7dd3fc" },
  { id: 43, sym: "ρ",     top: 66, sz: 54, dur: 15, del: -9,  rx: -20, rz: -8,  op: 0.59, col: "#38bdf8" },
  // Bottom
  { id: 22, sym: "μ",     top: 82, sz: 44, dur: 19, del: -11, rx: 24,  rz: -6,  op: 0.5,  col: "#38bdf8" },
  { id: 23, sym: "σ",     top: 88, sz: 60, dur: 13, del: -4,  rx: -32, rz: 10,  op: 0.67, col: "#0ea5e9" },
  { id: 24, sym: "ε",     top: 92, sz: 30, dur: 25, del: -17, rx: 14,  rz: -8,  op: 0.35, col: "#7dd3fc" },
  { id: 25, sym: "±",     top: 84, sz: 78, dur: 10, del: -2,  rx: -38, rz: -12, op: 0.82, col: "#60a5fa" },
  { id: 28, sym: "∃",     top: 78, sz: 36, dur: 23, del: -15, rx: 16,  rz: 6,   op: 0.4,  col: "#93c5fd" },
  { id: 30, sym: "∪",     top: 94, sz: 42, dur: 20, del: -13, rx: 30,  rz: 9,   op: 0.47, col: "#60a5fa" },
  { id: 35, sym: "ℤ",     top: 86, sz: 68, dur: 11, del: -3,  rx: -40, rz: -14, op: 0.76, col: "#60a5fa" },
  { id: 40, sym: "ℕ",     top: 90, sz: 22, dur: 35, del: -27, rx: -10, rz: -4,  op: 0.25, col: "#60a5fa" },
  // Extremes
  { id: 41, sym: "∗",     top: 2,  sz: 82, dur: 9,  del: 0,   rx: 45,  rz: 15,  op: 0.84, col: "#0ea5e9" },
  { id: 45, sym: "∑",     top: 96, sz: 50, dur: 14, del: -7,  rx: -28, rz: -10, op: 0.55, col: "#38bdf8" },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative min-h-[92vh] overflow-hidden"
      style={{ background: "linear-gradient(160deg, #020d1e 0%, #071428 50%, #030a18 100%)" }}
      aria-labelledby="hero-heading"
    >
      {/* Ambient glow pools */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute"
          style={{
            top: "5%", left: "10%",
            width: "600px", height: "600px",
            background: "radial-gradient(circle, rgba(29,78,216,0.22) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
        <div
          className="absolute"
          style={{
            top: "35%", right: "0%",
            width: "500px", height: "500px",
            background: "radial-gradient(circle, rgba(14,165,233,0.14) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        <div
          className="absolute"
          style={{
            bottom: "0%", left: "35%",
            width: "700px", height: "350px",
            background: "radial-gradient(ellipse, rgba(34,211,238,0.08) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      {/* Floating symbol stream — each particle rendered twice, offset by half its period, for a seamless loop */}
      {!reduce && (
        <div
          aria-hidden
          className="absolute inset-0 overflow-hidden"
          style={{ perspective: "1000px" }}
        >
          {PARTICLES.flatMap((p) => [
            { key: `${p.id}-a`, p, del: p.del },
            { key: `${p.id}-b`, p, del: p.del - p.dur / 2 },
          ]).map(({ key, p, del }) => (
            <div
              key={key}
              className="symbol-flow absolute pointer-events-none select-none leading-none"
              style={{
                top: `${p.top}%`,
                left: 0,
                fontSize: `${p.sz}px`,
                color: p.col,
                opacity: p.op,
                animationDuration: `${p.dur}s`,
                animationDelay: `${del}s`,
                "--sym-rx": `${p.rx}deg`,
                "--sym-rz": `${p.rz}deg`,
                textShadow: `0 0 ${Math.round(p.sz * 0.4)}px ${p.col}70, 0 0 ${Math.round(p.sz * 0.9)}px ${p.col}28`,
                fontFamily: "ui-monospace, SFMono-Regular, monospace",
              } as React.CSSProperties}
            >
              {p.sym}
            </div>
          ))}
        </div>
      )}

      {/* Bottom fade-out to page background */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-36"
        style={{ background: "linear-gradient(to bottom, transparent, var(--background))" }}
      />

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-28 pt-32 md:px-8 md:pb-36 md:pt-40 lg:px-12">
        <motion.p
          className="font-mono text-xs uppercase tracking-[0.28em]"
          style={{ color: "#60a5fa" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          Charles Best Secondary
        </motion.p>

        <motion.h1
          id="hero-heading"
          className="mt-4 leading-none"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.08 }}
        >
          <span
            className="block font-sans font-black uppercase"
            style={{
              fontSize: "clamp(4.5rem, 13vw, 12rem)",
              color: "#ffffff",
              letterSpacing: "-0.04em",
              textShadow: "0 0 100px rgba(96,165,250,0.35), 0 2px 40px rgba(0,0,0,0.8)",
            }}
          >
            CBSS
          </span>
          <span
            className="block font-serif italic"
            style={{
              fontSize: "clamp(2.2rem, 6vw, 5.5rem)",
              color: "#93c5fd",
              letterSpacing: "-0.02em",
              marginTop: "-0.05em",
              textShadow: "0 0 60px rgba(147,197,253,0.3)",
            }}
          >
            Tutoring
          </span>
          <span
            className="block font-sans font-semibold uppercase"
            style={{
              fontSize: "clamp(1.4rem, 3.8vw, 3.2rem)",
              color: "rgba(96,165,250,0.6)",
              letterSpacing: "0.14em",
              marginTop: "0.18em",
            }}
          >
            Services
          </span>
        </motion.h1>

        <motion.p
          className="mt-8 max-w-lg text-base leading-[1.75] sm:text-lg"
          style={{ color: "#94a3b8" }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
        >
          Free peer tutoring across every department at Dr. Charles Best
          Secondary. Run by students. Trusted by teachers.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.32 }}
        >
          <Link
            href="/services/tutor-registry"
            className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #1d4ed8 0%, #0ea5e9 100%)",
              boxShadow: "0 0 28px rgba(29,78,216,0.45), 0 2px 8px rgba(0,0,0,0.4)",
            }}
          >
            Find a Tutor
          </Link>
          <Link
            href="/membership"
            className="inline-flex items-center justify-center rounded-full border px-8 py-3.5 text-sm font-semibold transition-all duration-200 hover:bg-white/5 active:scale-95"
            style={{ color: "#93c5fd", borderColor: "rgba(147,197,253,0.22)" }}
          >
            Join as a Tutor
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
