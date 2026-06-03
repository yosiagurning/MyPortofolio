<template>
  <div class="noir-root relative min-h-screen text-neutral-100">
    <!-- Film grain overlay -->
    <div class="film-grain pointer-events-none fixed inset-0 z-[100]" aria-hidden="true"></div>
    <!-- Crimson spotlight glow -->
    <div class="spotlight pointer-events-none fixed inset-0 z-[1]" aria-hidden="true"></div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  background: #030303;
}

body {
  font-family: 'Manrope', sans-serif;
  background: #030303;
  color: #f5f5f5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  overflow-x: hidden;
}

::selection {
  background: rgba(217, 22, 54, 0.35);
  color: #ffffff;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background: #0a0a0a;
}
::-webkit-scrollbar-thumb {
  background: #1f1f1f;
  border-radius: 999px;
}
::-webkit-scrollbar-thumb:hover {
  background: #d91636;
}

.font-display { font-family: 'Unbounded', sans-serif; letter-spacing: -0.02em; }
.font-mono    { font-family: 'JetBrains Mono', monospace; }
.font-body    { font-family: 'Manrope', sans-serif; }

.noir-root {
  background:
    radial-gradient(ellipse at 20% 0%, rgba(217, 22, 54, 0.08), transparent 60%),
    radial-gradient(ellipse at 80% 100%, rgba(217, 22, 54, 0.06), transparent 60%),
    #030303;
}

.spotlight {
  background:
    radial-gradient(600px circle at 50% 18%, rgba(217, 22, 54, 0.18), transparent 60%),
    radial-gradient(800px circle at 90% 60%, rgba(255, 255, 255, 0.03), transparent 60%);
  mix-blend-mode: screen;
  animation: spotlightDrift 18s ease-in-out infinite alternate;
}

@keyframes spotlightDrift {
  0%   { transform: translate3d(0,0,0) scale(1); opacity: 0.85; }
  100% { transform: translate3d(-20px,10px,0) scale(1.05); opacity: 1; }
}

.film-grain {
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.45 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
  mix-blend-mode: overlay;
  opacity: 0.18;
  animation: grainShift 1.2s steps(6) infinite;
}

@keyframes grainShift {
  0%   { transform: translate(0,0); }
  20%  { transform: translate(-5%, 5%); }
  40%  { transform: translate(7%, -3%); }
  60%  { transform: translate(-4%, 4%); }
  80%  { transform: translate(3%, -6%); }
  100% { transform: translate(0,0); }
}

/* Reveal-on-scroll utility */
.reveal {
  opacity: 0;
  transform: translateY(36px);
  transition: opacity 1s cubic-bezier(0.22, 1, 0.36, 1), transform 1s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: opacity, transform;
}
.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Brutalist button */
.btn-noir {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.95rem 1.5rem;
  border: 1px solid rgba(255,255,255,0.18);
  background: rgba(10,10,10,0.6);
  color: #f5f5f5;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  position: relative;
  overflow: hidden;
}
.btn-noir:hover {
  border-color: #d91636;
  color: #ffffff;
  background: rgba(217, 22, 54, 0.08);
  transform: translateY(-2px);
  box-shadow: 0 12px 40px -16px rgba(217, 22, 54, 0.6);
}
.btn-noir.btn-solid {
  background: #d91636;
  border-color: #d91636;
  color: #ffffff;
}
.btn-noir.btn-solid:hover {
  background: #ff1f44;
  box-shadow: 0 12px 40px -8px rgba(217, 22, 54, 0.8);
}

/* Marquee */
@keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.marquee-track {
  animation: marquee 38s linear infinite;
}

/* Eyebrow label */
.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: #a3a3a3;
}
.eyebrow::before {
  content: "";
  width: 1.75rem;
  height: 1px;
  background: #d91636;
}

/* Hide grain & spotlight inside PDF capture */
.pdf-capturing .film-grain,
.pdf-capturing .spotlight {
  display: none !important;
}
</style>
