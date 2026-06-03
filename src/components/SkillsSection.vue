<template>
  <section id="skills" data-testid="section-skills" class="relative z-[3] py-24 md:py-32 px-6 md:px-12 border-t border-white/5">
    <div class="max-w-[1400px] mx-auto">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 reveal">
        <div>
          <div class="eyebrow mb-6">002 // ARSENAL</div>
          <h2 class="font-display text-4xl md:text-6xl font-black tracking-tight text-white leading-[0.95]">
            Tools &amp; <span class="text-neutral-500">technologies</span>
          </h2>
        </div>
        <p class="md:max-w-md text-neutral-400">A layered stack assembled from years of academic projects, national competitions and international research collaborations.</p>
      </div>

      <div class="flex items-center gap-2 mb-8 font-mono text-[10px] tracking-[0.25em] uppercase">
        <button @click="skillTab = 'tech'" data-testid="skill-tab-tech"
          :class="skillTab==='tech' ? 'bg-white text-black' : 'text-neutral-400 hover:text-white border border-white/10'"
          class="px-4 py-2 transition-colors">Tech Stack</button>
        <button @click="skillTab = 'tools'" data-testid="skill-tab-tools"
          :class="skillTab==='tools' ? 'bg-white text-black' : 'text-neutral-400 hover:text-white border border-white/10'"
          class="px-4 py-2 transition-colors">Tools</button>
      </div>

      <div v-show="skillTab === 'tech'" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 reveal" data-testid="skills-tech-grid">
        <div v-for="t in tech" :key="t.name"
          class="bg-[#0a0a0a] p-5 md:p-6 group hover:bg-[#121212] transition-colors flex flex-col gap-4 min-h-[140px]">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 flex items-center justify-center bg-black/40 border border-white/10 group-hover:border-[#d91636]/60 transition-colors">
              <img :src="t.icon" :alt="t.name" class="w-6 h-6 object-contain" loading="lazy" />
            </div>
            <span class="font-display text-lg text-white tracking-tight">{{ t.name }}</span>
          </div>
          <div class="flex items-center justify-between font-mono text-[10px] tracking-[0.22em] uppercase">
            <span class="text-neutral-500">{{ t.level }}</span>
            <span class="text-[#d91636]">●</span>
          </div>
        </div>
      </div>

      <div v-show="skillTab === 'tools'" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 reveal" data-testid="skills-tools-grid">
        <div v-for="t in tools" :key="t.name"
          class="bg-[#0a0a0a] p-5 md:p-6 group hover:bg-[#121212] transition-colors flex flex-col gap-4 min-h-[140px]">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 flex items-center justify-center bg-black/40 border border-white/10 group-hover:border-[#d91636]/60 transition-colors">
              <img :src="t.icon" :alt="t.name" class="w-6 h-6 object-contain" loading="lazy" />
            </div>
            <span class="font-display text-lg text-white tracking-tight">{{ t.name }}</span>
          </div>
          <div class="font-mono text-[10px] tracking-[0.22em] uppercase text-neutral-500">{{ t.role }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { tech, tools } from '@/data/portfolio'
export default {
  name: 'SkillsSection',
  data() { return { skillTab: 'tech', tech, tools } }
}
</script>
