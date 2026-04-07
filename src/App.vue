<template>
  <div class="max-w-7xl mx-auto flex flex-col relative">

    <nav class="site-header sticky top-0 z-[98] w-full bg-white/80 supports-[backdrop-filter]:bg-white/70 backdrop-blur-md border-b border-slate-200/80">
      <div class="flex items-center justify-between h-16 px-4 sm:px-6">
        <button @click="redirectToHome" class="flex items-center" aria-label="Go to Home">
          <span class="text-base sm:text-lg text-slate-900 font-semibold tracking-tight whitespace-nowrap fadein-bot hover:text-amber-700 transition-colors">Yosia Yehezkiel Gurning</span>
        </button>
        <div class="flex items-center gap-2 md:order-2 fadein-bot">
          <a href="https://github.com/yosiagurning" target="_blank" rel="noreferrer" aria-label="GitHub" class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white">
            <svg viewBox="0 0 24 24" class="w-5 h-5 text-slate-800" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.486 2 12.02c0 4.425 2.865 8.18 6.839 9.504.5.093.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.605-3.369-1.343-3.369-1.343-.455-1.158-1.11-1.467-1.11-1.467-.907-.62.069-.607.069-.607 1.003.07 1.531 1.03 1.531 1.03.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.95 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.336 1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.339 4.694-4.566 4.943.359.309.678.92.678 1.854 0 1.337-.012 2.415-.012 2.743 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.02C22 6.486 17.523 2 12 2z"/>
            </svg>
          </a>
        </div>
        <div class="hidden md:flex items-center md:order-1">
          <div class="flex items-center gap-1 bg-slate-50 rounded-full p-1 ring-1 ring-slate-900/5">
            <router-link to="/" class="fadein-bot px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white">Home</router-link>
            <router-link to="/about" class="fadein-bot fadein-1 px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white">About</router-link>
            <router-link to="/portfolio" class="fadein-bot fadein-2 px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white">Portfolio</router-link>
            <router-link to="/blog" class="fadein-bot fadein-3 px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white">Blog</router-link>
          </div>
        </div>
      </div>
    </nav>

    <div class="pt-6 md:pt-8">
      <router-view />
    </div>
  </div>
  <footer class="block md:hidden fixed bottom-0 left-0 right-0 rounded-t-3xl border border-slate-200 bg-white/80 backdrop-blur-md backdrop-opacity-90 shadow-sm">
    <nav class="site-footer-nav flex justify-around py-4 text-xs">
      <router-link to="/" class="text-slate-600 hover:text-slate-900 transition-colors">Home</router-link>
      <router-link to="/about" class="text-slate-600 hover:text-slate-900 transition-colors">About</router-link>
      <router-link to="/portfolio" class="text-slate-600 hover:text-slate-900 transition-colors">Portfolio</router-link>
      <router-link to="/blog" class="text-slate-600 hover:text-slate-900 transition-colors">Blog</router-link>
    </nav>
  </footer>
</template>

<script>
export default {
  methods: {
    redirectToHome() {
      this.$router.push('/')
    }
  },
}
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-track {
  background: #e2e8f0;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: #d97706;
  border-radius: 5px;
}

::-webkit-scrollbar-button { width: 20px; }

body {
  font-family: 'Poppins', sans-serif;
  background: #ffffff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #0f172a;
  min-height: 100vh;
}

.site-header a.router-link-exact-active {
  color: #b45309;
  position: relative;
  transition: color 0.2s;
}

.site-header a.router-link-exact-active::after {
  content: "";
  position: absolute;
  left: 0.9rem;
  right: 0.9rem;
  bottom: 0.35rem;
  height: 2px;
  border-radius: 2px;
  background-color: #d97706;
}

.site-header a.router-link-exact-active:hover {
  color: #92400e;
}

.site-footer-nav a.router-link-exact-active {
  color: #b45309;
  font-weight: 600;
}


@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

</style>
