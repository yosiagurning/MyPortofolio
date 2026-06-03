<template>
  <section id="contact" data-testid="section-contact" class="relative z-[3] py-24 md:py-36 px-6 md:px-12 border-t border-white/5">
    <div class="max-w-[1400px] mx-auto">
      <div class="eyebrow mb-8 reveal">006 // LET'S TALK</div>
      <h2 class="font-display text-[12vw] md:text-[8vw] leading-[0.9] font-black tracking-tight text-white reveal">
        Have a <span class="text-[#d91636]">brief?</span>
      </h2>
      <p class="mt-8 max-w-2xl text-lg md:text-xl text-neutral-400 reveal">
        Currently open to backend, mobile and full-stack engineering roles — internships, freelance briefs and research collaborations are welcome. Reach out and let's build something quietly powerful.
      </p>

      <div class="mt-14 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 reveal">
        <a v-for="c in contacts" :key="c.label" :href="c.href" target="_blank" rel="noreferrer"
          :data-testid="`contact-${c.id}`"
          class="bg-[#0a0a0a] hover:bg-[#0f0f0f] p-6 md:p-8 flex items-center justify-between transition-colors group">
          <div>
            <div class="font-mono text-[10px] tracking-[0.28em] uppercase text-neutral-500 mb-2">{{ c.label }}</div>
            <div class="font-display text-xl md:text-2xl text-white tracking-tight group-hover:text-[#d91636] transition-colors">{{ c.value }}</div>
          </div>
          <span class="font-display text-2xl text-neutral-600 group-hover:text-[#d91636] group-hover:translate-x-2 transition-all">→</span>
        </a>
      </div>

      <footer class="mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-white/5 font-mono text-[10px] tracking-[0.28em] uppercase text-neutral-600">
        <span>© 2026 YOSIA YEHEZKIEL GURNING / ALL RIGHTS RESERVED.</span>
        <span>BUILT WITH VUE · TAILWIND · GRAIN.</span>
      </footer>
    </div>
  </section>
</template>

<script>
import { contacts } from '@/data/portfolio'
export default {
  name: 'ContactSection',
  data() { return { contacts } }
}
</script>
