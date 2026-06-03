<template>
  <div ref="portfolioRoot" data-testid="portfolio-root" class="relative z-[2]">
    <SiteNav :active-section="activeSection" :is-exporting="isExportingPDF" @download-portfolio="downloadPortfolioPDF" />
    <HeroSection />
    <MarqueeStrip />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ExperienceSection />
    <CvSection :is-exporting="isExportingPDF" :export-progress="exportProgress" @download-portfolio="downloadPortfolioPDF" />
    <ContactSection />
  </div>
</template>

<script>
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import SiteNav           from '@/components/SiteNav.vue'
import HeroSection       from '@/components/HeroSection.vue'
import MarqueeStrip      from '@/components/MarqueeStrip.vue'
import AboutSection      from '@/components/AboutSection.vue'
import SkillsSection     from '@/components/SkillsSection.vue'
import ProjectsSection   from '@/components/ProjectsSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import CvSection         from '@/components/CvSection.vue'
import ContactSection    from '@/components/ContactSection.vue'
import { navLinks } from '@/data/portfolio'

export default {
  name: 'HomeView',
  components: {
    SiteNav, HeroSection, MarqueeStrip, AboutSection,
    SkillsSection, ProjectsSection, ExperienceSection, CvSection, ContactSection
  },
  data() {
    return {
      activeSection: 'hero',
      isExportingPDF: false,
      exportProgress: 0
    }
  },
  mounted() {
    this.initReveal()
    this.initScrollSpy()
  },
  beforeUnmount() {
    if (this._io) this._io.disconnect()
    if (this._spyIo) this._spyIo.disconnect()
  },
  methods: {
    initReveal() {
      const els = this.$el.querySelectorAll('.reveal')
      this._io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            this._io.unobserve(e.target)
          }
        })
      }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' })
      els.forEach((el) => this._io.observe(el))
    },
    initScrollSpy() {
      const sectionIds = navLinks.map(l => l.id)
      this._spyIo = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) this.activeSection = e.target.id
        })
      }, { threshold: 0.35 })
      sectionIds.forEach((id) => {
        const el = document.getElementById(id)
        if (el) this._spyIo.observe(el)
      })
    },
    async downloadPortfolioPDF() {
      if (this.isExportingPDF) return
      this.isExportingPDF = true
      this.exportProgress = 5

      const root = document.querySelector('.noir-root')
      const target = this.$refs.portfolioRoot
      if (!target) { this.isExportingPDF = false; return }

      // Pause Lenis smooth-scroll so html2canvas captures real positions.
      const lenis = window.__lenis
      lenis && lenis.stop && lenis.stop()
      window.scrollTo(0, 0)

      root && root.classList.add('pdf-capturing')

      try {
        await this.$nextTick()
        await new Promise(r => setTimeout(r, 250))
        this.exportProgress = 15

        const canvas = await html2canvas(target, {
          backgroundColor: '#030303',
          scale: window.devicePixelRatio > 1 ? 1.4 : 1.25,
          useCORS: true,
          allowTaint: true,
          logging: false,
          windowWidth: target.scrollWidth,
          windowHeight: target.scrollHeight,
          onclone: (doc) => {
            const styleEl = doc.createElement('style')
            styleEl.textContent = 'html,body{background:#030303 !important;} .film-grain,.spotlight{display:none !important;}'
            doc.head.appendChild(styleEl)
          }
        })
        this.exportProgress = 55

        // Multi-page A4 portrait so the PDF stays printable.
        const pdf = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4', compress: true })
        const pageW = pdf.internal.pageSize.getWidth()
        const pageH = pdf.internal.pageSize.getHeight()
        const sliceCanvasH = Math.floor((pageH * canvas.width) / pageW)

        const tmp = document.createElement('canvas')
        const ctx = tmp.getContext('2d')
        tmp.width = canvas.width

        let renderedH = 0
        let pageIndex = 0
        while (renderedH < canvas.height) {
          const sliceH = Math.min(sliceCanvasH, canvas.height - renderedH)
          tmp.height = sliceH
          ctx.fillStyle = '#030303'
          ctx.fillRect(0, 0, tmp.width, tmp.height)
          ctx.drawImage(canvas, 0, renderedH, canvas.width, sliceH, 0, 0, canvas.width, sliceH)
          const imgData = tmp.toDataURL('image/jpeg', 0.9)
          const sliceMm = (sliceH * pageW) / canvas.width
          if (pageIndex > 0) pdf.addPage()
          pdf.setFillColor(3, 3, 3)
          pdf.rect(0, 0, pageW, pageH, 'F')
          pdf.addImage(imgData, 'JPEG', 0, 0, pageW, sliceMm, undefined, 'FAST')
          renderedH += sliceH
          pageIndex += 1
          this.exportProgress = Math.min(92, 55 + Math.round((renderedH / canvas.height) * 35))
          await new Promise(r => setTimeout(r, 0))
        }

        pdf.save('Yosia_Yehezkiel_Gurning_Portfolio.pdf')
        this.exportProgress = 100
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('PDF export failed:', err)
        alert('Could not export the portfolio. Please try again.')
      } finally {
        root && root.classList.remove('pdf-capturing')
        const lenis = window.__lenis
        lenis && lenis.start && lenis.start()
        setTimeout(() => { this.isExportingPDF = false; this.exportProgress = 0 }, 500)
      }
    }
  }
}
</script>
