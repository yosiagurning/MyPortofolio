<template>
  <section id="cv" data-testid="section-cv" class="relative z-[3] py-24 md:py-32 px-6 md:px-12 border-t border-white/5">
    <div class="max-w-[1400px] mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div class="lg:col-span-5 reveal">
          <div class="eyebrow mb-6">005 // CV</div>
          <h2 class="font-display text-4xl md:text-6xl font-black tracking-tight text-white leading-[0.95] mb-8">
            Read the <span class="text-[#d91636]">full</span> dossier.
          </h2>
          <p class="text-neutral-400 mb-10 leading-relaxed">
            The complete printable curriculum vitae — formal education, technical stack, project ledger and certifications from Huawei, Dicoding, Samsung Solve For Tomorrow and AWS re/Start Microsoft.
          </p>

          <div class="flex flex-col gap-3">
            <a :href="cvUrl" target="_blank" rel="noreferrer" download data-testid="download-cv-btn" class="btn-noir btn-solid w-fit">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"/></svg>
              DOWNLOAD CV (PDF)
            </a>
            <button @click="$emit('download-portfolio')" data-testid="download-portfolio-pdf-btn" class="btn-noir w-fit" :disabled="isExporting">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18"/><path d="M8 12h8M8 16h5M8 8h8"/></svg>
              <span v-if="!isExporting">EXPORT PORTFOLIO AS PDF</span>
              <span v-else>RENDERING PORTFOLIO… {{ exportProgress }}%</span>
            </button>
            <div v-if="isExporting" class="font-mono text-[10px] tracking-[0.25em] uppercase text-neutral-500 mt-1" data-testid="export-progress-label">
              Capturing canvas — please hold.
            </div>
          </div>

          <div class="mt-10 grid grid-cols-2 gap-px bg-white/10 border border-white/10">
            <div class="bg-[#0a0a0a] p-5">
              <div class="font-mono text-[10px] tracking-[0.22em] uppercase text-neutral-500">File</div>
              <div class="font-display text-white mt-1">CV_2026.pdf</div>
            </div>
            <div class="bg-[#0a0a0a] p-5">
              <div class="font-mono text-[10px] tracking-[0.22em] uppercase text-neutral-500">Updated</div>
              <div class="font-display text-white mt-1">Jan 2026</div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-7 reveal">
          <div class="relative border border-white/10 bg-[#0a0a0a]" data-testid="cv-viewer-frame">
            <div class="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/40">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-[#d91636]"></span>
                <span class="w-2 h-2 rounded-full bg-neutral-700"></span>
                <span class="w-2 h-2 rounded-full bg-neutral-700"></span>
              </div>
              <span class="font-mono text-[10px] tracking-[0.25em] uppercase text-neutral-500">YOSIA / CV / PDF</span>
              <a :href="cvUrl" target="_blank" rel="noreferrer" data-testid="cv-open-new-tab" class="font-mono text-[10px] tracking-[0.25em] uppercase text-neutral-300 hover:text-white">OPEN ↗</a>
            </div>
            <object :data="cvUrl + '#toolbar=0&navpanes=0&view=FitH'" type="application/pdf" class="w-full h-[640px] bg-neutral-900">
              <div class="p-10 text-center text-neutral-400">
                Your browser cannot display PDFs inline.
                <a :href="cvUrl" target="_blank" rel="noreferrer" class="text-[#d91636] underline">Open the CV in a new tab.</a>
              </div>
            </object>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { cvUrl } from '@/data/portfolio'

export default {
  name: 'CvSection',
  props: {
    isExporting:    { type: Boolean, default: false },
    exportProgress: { type: Number, default: 0 }
  },
  emits: ['download-portfolio'],
  data() { return { cvUrl } }
}
</script>
