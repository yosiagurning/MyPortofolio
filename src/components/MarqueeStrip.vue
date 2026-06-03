<template>
  <div class="relative z-[3] border-y border-white/5 bg-black/40 overflow-hidden py-5">
    <div class="flex marquee-track whitespace-nowrap font-display font-black text-3xl md:text-5xl">
      <span v-for="i in 2" :key="i" class="flex items-center">
        <template v-for="(w, idx) in marqueeWords" :key="idx">
          <span class="px-8 text-neutral-200">{{ w }}</span>
          <span class="text-[#d91636]">✦</span>
        </template>
      </span>
    </div>
  </div>
</template>

<script>
import { marqueeWords } from '@/data/portfolio'
export default {
  name: 'MarqueeStrip',
  data() { return { marqueeWords } }
}
</script>
