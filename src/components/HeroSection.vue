<template>
  <section id="hero" data-testid="section-hero" class="relative min-h-screen flex flex-col overflow-hidden pt-16">
    <!-- Background landscape photo -->
    <div class="absolute inset-0 z-0">
      <img
        src="/assets/yosia-hero.jpg"
        alt="Yosia Yehezkiel Gurning"
        class="hero-bg w-full h-full object-cover"
        data-testid="hero-portrait"
      />
      <!-- Cinematic gradient + vignette overlay -->
      <div class="absolute inset-0 hero-vignette"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-black/85 via-black/10 to-black/85"></div>
    </div>

    <!-- Top meta strip -->
    <div class="relative z-30 px-6 md:px-12 pt-6 flex items-center justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-400" data-testid="hero-meta">
      <span class="flex items-center gap-3">
        <span class="w-1.5 h-1.5 rounded-full bg-[#d91636] shadow-[0_0_10px_2px_#d91636]"></span>
        AVAILABLE FOR 2026 / 2027
      </span>
      <span class="hidden md:inline">PORTFOLIO  /  EST. 2026</span>
      <span>{{ currentTime }}</span>
    </div>

    <!-- Main composition -->
    <div class="relative z-20 flex-1 flex flex-col justify-center px-6 md:px-12 py-10">
      <!-- Outlined typography overlay -->
      <div class="relative w-full select-none pointer-events-none" data-testid="hero-name-overlay">
        <div class="font-display font-black leading-[0.82] tracking-tighter">
          <div class="hero-name-line text-[18vw] md:text-[15vw]">YOSIA</div>
          <div class="hero-name-line text-[15vw] md:text-[12.5vw] -mt-[2vw] md:pl-[14vw]">YEHEZKIEL</div>
        </div>
        <!-- thin divider rule -->
        <div class="mt-4 md:mt-6 flex items-center gap-4">
          <span class="block h-px w-16 md:w-24 bg-[#d91636]"></span>
          <span class="font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase text-neutral-300">
            Software Engineer · Backend · Mobile · Fullstack
          </span>
        </div>
      </div>
    </div>

    <!-- Footer strip -->
    <div class="relative z-30 px-6 md:px-12 pb-10 pt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
      <div class="md:col-span-5 reveal">
        <div class="font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-500 mb-3">— LATEST CHAPTER</div>
        <p class="text-neutral-200 text-base md:text-lg leading-relaxed font-light">
          Engineering resilient backend and mobile systems with
          <span class="text-white font-medium">Go</span>,
          <span class="text-white font-medium">Laravel</span>,
          <span class="text-white font-medium">Flutter</span> and
          <span class="text-white font-medium">FastAPI</span>.
        </p>
      </div>

      <div class="md:col-span-4 hidden md:block reveal">
        <div class="font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-500 mb-3">— SIGNATURE WORK</div>
        <ul class="font-mono text-[11px] tracking-[0.18em] uppercase text-neutral-300 space-y-1.5">
          <li class="flex items-center gap-3"><span class="text-[#d91636]">→</span> Samsung Solve For Tomorrow ‘25 — Semifinalist</li>
          <li class="flex items-center gap-3"><span class="text-[#d91636]">→</span> Huawei HCIA-AI V4.0 — International Track</li>
          <li class="flex items-center gap-3"><span class="text-[#d91636]">→</span> Institut Teknologi Del — Software Eng. Tech.</li>
        </ul>
      </div>

      <div class="md:col-span-3 flex flex-col items-start md:items-end gap-3 reveal">
        <a href="#projects" data-testid="hero-explore-btn" class="btn-noir btn-solid">
          VIEW SELECTED WORK <span class="ml-1">↓</span>
        </a>
        <a href="#contact" class="font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-300 hover:text-white transition-colors">
          OR REACH OUT →
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  data() { return { currentTime: '' } },
  mounted() {
    this.updateClock()
    this._int = setInterval(this.updateClock, 1000)
  },
  beforeUnmount() {
    clearInterval(this._int)
  },
  methods: {
    updateClock() {
      const d = new Date()
      const pad = n => String(n).padStart(2, '0')
      this.currentTime = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())} WIB`
    }
  }
}
</script>

<style scoped>
.hero-bg {
  filter: grayscale(0.55) contrast(1.08) brightness(0.7) saturate(0.8);
  transform: scale(1.04);
  animation: heroBreath 24s ease-in-out infinite alternate;
}
@keyframes heroBreath {
  0%   { transform: scale(1.04) translate(0, 0); }
  100% { transform: scale(1.10) translate(-1%, 0.5%); }
}

.hero-vignette {
  background: radial-gradient(ellipse at 50% 55%, transparent 30%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.92) 100%);
}

.hero-name-line {
  color: transparent;
  -webkit-text-stroke: 1.4px rgba(245, 245, 245, 0.92);
  text-shadow: 0 0 60px rgba(217, 22, 54, 0.18);
  letter-spacing: -0.02em;
}
@media (min-width: 768px) {
  .hero-name-line {
    -webkit-text-stroke: 1.8px rgba(245, 245, 245, 0.95);
  }
}
</style>
