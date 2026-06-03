import { createApp } from 'vue'
import Lenis from 'lenis'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

const app = createApp(App)
app.use(router)

// Buttery smooth scroll across the entire single-page experience.
const lenis = new Lenis({
  duration: 1.25,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  smoothTouch: false,
  wheelMultiplier: 1.0,
  touchMultiplier: 2.0
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

// Hash-anchor smooth scroll via Lenis (hijack default jumps).
const scrollToHash = (hash) => {
  const el = hash ? document.querySelector(hash) : null
  if (el) lenis.scrollTo(el, { offset: -72, duration: 1.4 })
}

router.afterEach((to) => {
  if (to.hash) scrollToHash(to.hash)
})

window.addEventListener('click', (e) => {
  const a = e.target.closest && e.target.closest('a[href^="#"]')
  if (!a) return
  const href = a.getAttribute('href')
  if (href && href.length > 1 && document.querySelector(href)) {
    e.preventDefault()
    scrollToHash(href)
    history.pushState(null, '', href)
  }
})

// Expose for debug / pause during PDF capture.
window.__lenis = lenis

app.mount('#app')
