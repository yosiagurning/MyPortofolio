<template>
  <section id="projects" data-testid="section-projects" class="relative z-[3] py-24 md:py-32 px-6 md:px-12 border-t border-white/5">
    <div class="max-w-[1400px] mx-auto">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 reveal">
        <div>
          <div class="eyebrow mb-6">003 // SELECTED WORK</div>
          <h2 class="font-display text-4xl md:text-6xl font-black tracking-tight text-white leading-[0.95]">
            Engineered <span class="text-[#d91636]">in the dark.</span>
          </h2>
        </div>
        <p class="md:max-w-md text-neutral-400">A curated selection of production systems, competition projects and architectural experiments — from agritech AI to enterprise backends.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10" data-testid="projects-grid">
        <article
          v-for="(p, idx) in projects" :key="p.id"
          class="project-card group bg-[#0a0a0a] hover:bg-[#0f0f0f] transition-colors flex flex-col reveal"
          :data-testid="`project-card-${p.id}`"
          :style="{ transitionDelay: (idx * 40) + 'ms' }"
        >
          <div class="relative overflow-hidden aspect-[16/10] border-b border-white/5">
            <img :src="p.image" :alt="p.name"
              class="absolute inset-0 w-full h-full object-cover transition-all duration-[1200ms] grayscale group-hover:grayscale-0 group-hover:scale-[1.06]" loading="lazy" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
            <span class="absolute top-3 left-3 font-mono text-[10px] tracking-[0.25em] uppercase text-neutral-300 bg-black/60 backdrop-blur px-2 py-1 border border-white/10">
              {{ String(idx + 1).padStart(2,'0') }} / {{ p.category }}
            </span>
            <span v-if="p.featured" class="absolute top-3 right-3 font-mono text-[10px] tracking-[0.25em] uppercase text-[#d91636] bg-black/60 backdrop-blur px-2 py-1 border border-[#d91636]/40">
              FEATURED
            </span>
          </div>
          <div class="p-6 md:p-7 flex flex-col gap-4 flex-1">
            <div class="flex items-center justify-between">
              <h3 class="font-display text-xl md:text-2xl font-bold text-white tracking-tight">{{ p.name }}</h3>
              <span class="font-mono text-[10px] tracking-[0.22em] uppercase text-neutral-500">{{ p.role }}</span>
            </div>
            <p class="text-sm md:text-base text-neutral-400 leading-relaxed">{{ p.description }}</p>
            <div class="flex flex-wrap gap-2 mt-1">
              <span v-for="t in p.tech" :key="t"
                class="font-mono text-[10px] tracking-[0.15em] uppercase border border-white/10 text-neutral-300 px-2 py-1">
                {{ t }}
              </span>
            </div>
            <div class="mt-auto pt-4 flex items-center justify-between border-t border-white/5">
              <a v-if="p.github" :href="p.github" target="_blank" rel="noreferrer"
                :data-testid="`project-github-${p.id}`"
                class="font-mono text-[10px] tracking-[0.25em] uppercase text-neutral-300 hover:text-[#d91636] inline-flex items-center gap-2 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.92.58.11.79-.25.79-.56v-1.97c-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.69 1.25 3.34.95.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.17-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.14 1.17.91-.25 1.89-.38 2.86-.39.97.01 1.94.14 2.86.39 2.18-1.48 3.14-1.17 3.14-1.17.62 1.58.23 2.75.11 3.04.73.81 1.17 1.84 1.17 3.1 0 4.43-2.7 5.41-5.26 5.69.41.36.78 1.06.78 2.13v3.15c0 .31.21.68.79.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg>
                CODE →
              </a>
              <span v-else class="font-mono text-[10px] tracking-[0.22em] uppercase text-neutral-700">PRIVATE</span>
              <a v-if="p.demo" :href="p.demo" target="_blank" rel="noreferrer"
                :data-testid="`project-demo-${p.id}`"
                class="font-mono text-[10px] tracking-[0.25em] uppercase text-neutral-300 hover:text-[#d91636] transition-colors">
                LIVE ↗
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import { projects } from '@/data/portfolio'
export default {
  name: 'ProjectsSection',
  data() { return { projects } }
}
</script>

<style scoped>
.project-card {
  transition: background-color 0.3s ease, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}
.project-card:hover { transform: translateY(-4px); }
</style>
