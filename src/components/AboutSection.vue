<template>
  <section id="about" data-testid="section-about" class="relative z-[3] py-24 md:py-32 px-6 md:px-12">
    <div class="max-w-[1400px] mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div class="lg:col-span-5 reveal">
          <div class="eyebrow mb-6">001 // ABOUT</div>
          <h2 class="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tight text-white mb-8">
            The architect<br/>behind quiet<br/><span class="text-[#d91636]">systems.</span>
          </h2>
          <div class="relative aspect-[4/5] overflow-hidden">
            <!-- Soft radial glow behind cutout -->
            <div class="absolute inset-0 about-glow"></div>
            <!-- Faint grid lines for editorial framing -->
            <div class="absolute inset-0 about-grid pointer-events-none"></div>
            <img
              src="/assets/yosia-suit.png"
              alt="Yosia Yehezkiel Gurning — formal portrait"
              data-testid="about-portrait"
              class="about-cutout relative z-10 w-full h-full object-contain object-bottom"
            />
            <!-- bottom crimson tick -->
            <span class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d91636]/60 to-transparent z-20"></span>
          </div>
        </div>

        <div class="lg:col-span-7 reveal">
          <p class="text-lg md:text-xl leading-relaxed text-neutral-300 mb-6">
            I'm <span class="text-white">Yosia Yehezkiel Gurning</span> — a software engineer focused on backend and full-stack systems built with Golang, Laravel, Flutter and FastAPI. My craft sits at the intersection of clean architecture, resilient APIs and product-grade mobile experiences.
          </p>
          <p class="text-base md:text-lg leading-relaxed text-neutral-400 mb-10">
            From warehouse management platforms to AI-assisted agritech and government market-monitoring tools, I design systems that scale silently — observable, modular and ready to migrate from clean architecture into microservices when the moment demands it.
          </p>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
            <div v-for="s in stats" :key="s.label" class="bg-[#0a0a0a] p-5 md:p-6">
              <div class="font-display text-3xl md:text-4xl font-black text-white">{{ s.value }}</div>
              <div class="font-mono text-[10px] tracking-[0.22em] uppercase text-neutral-500 mt-2">{{ s.label }}</div>
            </div>
          </div>

          <dl class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 font-mono text-xs">
            <div class="flex justify-between border-b border-white/5 py-2">
              <dt class="text-neutral-500 tracking-widest uppercase">Location</dt>
              <dd class="text-neutral-200">Sumatera Utara, ID</dd>
            </div>
            <div class="flex justify-between border-b border-white/5 py-2">
              <dt class="text-neutral-500 tracking-widest uppercase">Status</dt>
              <dd class="text-neutral-200">Open to work</dd>
            </div>
            <div class="flex justify-between border-b border-white/5 py-2">
              <dt class="text-neutral-500 tracking-widest uppercase">Focus</dt>
              <dd class="text-neutral-200">Backend · Mobile · AI</dd>
            </div>
            <div class="flex justify-between border-b border-white/5 py-2">
              <dt class="text-neutral-500 tracking-widest uppercase">Languages</dt>
              <dd class="text-neutral-200">ID · EN</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { stats } from '@/data/portfolio'
export default {
  name: 'AboutSection',
  data() { return { stats } }
}
</script>

<style scoped>
.about-glow {
  background:
    radial-gradient(ellipse at 50% 70%, rgba(217, 22, 54, 0.22), transparent 55%),
    radial-gradient(ellipse at 50% 100%, rgba(255, 255, 255, 0.04), transparent 60%);
  filter: blur(20px);
}
.about-grid {
  background-image:
    linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 40px 40px;
  mask-image: radial-gradient(ellipse at center, black 30%, transparent 80%);
}
.about-cutout {
  filter: drop-shadow(0 25px 35px rgba(0,0,0,0.65)) drop-shadow(0 0 22px rgba(217, 22, 54, 0.18));
  transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1), filter 0.7s ease;
}
.about-cutout:hover {
  transform: translateY(-6px) scale(1.015);
  filter: drop-shadow(0 32px 42px rgba(0,0,0,0.75)) drop-shadow(0 0 28px rgba(217, 22, 54, 0.32));
}
</style>
