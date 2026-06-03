<template>
  <section id="experience" data-testid="section-experience" class="relative z-[3] py-24 md:py-32 px-6 md:px-12 border-t border-white/5">
    <div class="max-w-[1400px] mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div class="lg:col-span-4 reveal">
          <div class="eyebrow mb-6">004 // JOURNEY</div>
          <h2 class="font-display text-4xl md:text-6xl font-black tracking-tight text-white leading-[0.95] mb-6">
            Education<br/>&amp; <span class="text-neutral-500">milestones.</span>
          </h2>
          <p class="text-neutral-400">A timeline of formal education, international collaborations and recognitions — from Institut Teknologi Del to Singapore Institute of Technology.</p>
        </div>

        <div class="lg:col-span-8">
          <ol class="relative border-l border-white/10 pl-8 space-y-10">
            <li v-for="(e, idx) in experiences" :key="idx" class="relative reveal" data-testid="timeline-item">
              <span class="absolute -left-[37px] top-1 flex h-3 w-3">
                <span class="absolute inset-0 rounded-full bg-[#d91636] opacity-40 animate-ping"></span>
                <span class="relative h-3 w-3 rounded-full bg-[#d91636] border border-black"></span>
              </span>
              <div class="font-mono text-[10px] tracking-[0.28em] uppercase text-[#d91636] mb-2">{{ e.date }}</div>
              <h3 class="font-display text-xl md:text-2xl text-white font-bold tracking-tight">{{ e.title }}</h3>
              <div class="text-neutral-500 text-sm font-mono mt-1">{{ e.org }}</div>
              <p class="text-neutral-400 mt-3 leading-relaxed">{{ e.description }}</p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { experiences } from '@/data/portfolio'
export default {
  name: 'ExperienceSection',
  data() { return { experiences } }
}
</script>
