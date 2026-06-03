<template>
  <header
    class="fixed top-0 left-0 right-0 z-[90] backdrop-blur-xl bg-black/40 border-b border-white/5"
    data-testid="site-nav"
  >
    <div class="max-w-[1400px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
      <a href="#hero" data-testid="nav-logo" class="flex items-center gap-3 group">
        <span class="block w-2 h-2 rounded-full bg-[#d91636] shadow-[0_0_18px_2px_#d91636] group-hover:scale-125 transition-transform"></span>
        <span class="font-mono text-[11px] tracking-[0.3em] uppercase text-neutral-300 group-hover:text-white">YYG / Software Engineer</span>
      </a>

      <nav class="hidden md:flex items-center gap-7">
        <a
          v-for="link in navLinks" :key="link.id" :href="`#${link.id}`"
          :data-testid="`nav-link-${link.id}`"
          class="font-mono text-[11px] tracking-[0.28em] uppercase text-neutral-400 hover:text-white transition-colors relative nav-link"
          :class="{ 'text-white': activeSection === link.id }"
        >
          <span class="opacity-50 mr-2">0{{ link.idx }}</span>{{ link.label }}
        </a>
      </nav>

      <button
        @click="$emit('download-portfolio')"
        data-testid="nav-download-portfolio-btn"
        class="btn-noir hidden sm:inline-flex !py-2 !px-3 !text-[10px]"
        :disabled="isExporting"
      >
        <span v-if="!isExporting">↓ PORTFOLIO.PDF</span>
        <span v-else>RENDERING…</span>
      </button>

      <button class="md:hidden text-white" @click="mobileOpen = !mobileOpen" data-testid="mobile-nav-toggle" aria-label="Open menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>
    </div>

    <div v-if="mobileOpen" class="md:hidden bg-black/95 border-t border-white/5 px-6 py-5 flex flex-col gap-4" data-testid="mobile-nav-menu">
      <a
        v-for="link in navLinks" :key="link.id" :href="`#${link.id}`"
        @click="mobileOpen = false"
        class="font-mono text-xs tracking-[0.25em] uppercase text-neutral-300 hover:text-white"
      >
        0{{ link.idx }} — {{ link.label }}
      </a>
    </div>
  </header>
</template>

<script>
import { navLinks } from '@/data/portfolio'

export default {
  name: 'SiteNav',
  props: {
    activeSection: { type: String, default: 'hero' },
    isExporting:   { type: Boolean, default: false }
  },
  emits: ['download-portfolio'],
  data() {
    return { navLinks, mobileOpen: false }
  }
}
</script>

<style scoped>
.nav-link.text-white::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -8px;
  height: 2px;
  background: #d91636;
}
</style>
