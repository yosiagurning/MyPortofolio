<template>
  <div class="container mx-auto p-3 md:p-8">
    <div class="flex flex-col-reverse md:flex-row relative">
      <div class="w-full md:w-2/3">
        <div class="flex flex-col gap-4 md:px-20 fade-zoom-up">
          <article v-for="project in projects" :key="project.id">
            <router-link
              :to="`/read/${project.slug}/${project.id}`"
              class="flex w-full bg-white border border-slate-200 rounded-xl text-left text-slate-900 p-5 md:py-7 md:px-8 cursor-pointer hover:bg-slate-50 items-center shadow-sm transition-colors"
            >
              <div class="w-full pr-4">
                <div class="text-xs mb-1 text-slate-500 flex items-center italic">
                  <div class="h-[1px] w-20 bg-amber-500 md:w-5 aos-init aos-animate mr-2"></div>
                  <span v-if="project.repo && project.repo.updatedAt">Updated {{ project.repo.updatedAt }}</span>
                  <span v-else>Project</span>
                </div>
                <h1 class="text-sm md:text-md text-amber-700 font-bold mb-2 paraf">{{ project.name }}</h1>
                <div class="text-sm hidden md:block paraf text-slate-700">
                  {{ project.repo?.description || project.status }}
                </div>

                <div class="mt-4 flex flex-wrap items-center gap-2">
                  <span
                    v-for="tech in project.tech.split(',').map(s => s.trim()).filter(Boolean)"
                    :key="tech"
                    class="py-1 px-2 rounded-2xl bg-slate-100 text-slate-700 text-[10px] md:text-xs"
                  >{{ tech }}</span>
                  <span
                    v-if="project.repo && typeof project.repo.stars === 'number'"
                    class="py-1 px-2 rounded-2xl bg-amber-100 text-amber-800 text-[10px] md:text-xs"
                  >★ {{ project.repo.stars }}</span>
                </div>
              </div>

              <div class="hidden md:block">
                <div class="w-28 flex items-center h-28">
                  <img :src="project.image" class="rounded-xl object-cover w-full h-full" alt="">
                </div>
              </div>
            </router-link>
          </article>
        </div>
      </div>

      <div class="w-full md:w-1/3 h-fit p-8 md:sticky md:top-24">
        <div class="flex flex-col text-left">
          <div class="bg-clip-text bg-gradient-to-r from-slate-900 to-amber-600 text-transparent">
            Kumpulan catatan setiap project: isi, apa, kenapa, arsitektur, dan detail lainnya (diambil dari repository GitHub).
          </div>
          <div class="h-[1px] mt-7 mb-7 w-20 bg-amber-500 aos-init aos-animate mr-2"></div>

          <div class="text-slate-900 text-md font-semibold">Sumber</div>
          <div class="mt-3 text-sm text-slate-600">
            Data di halaman ini diambil dari GitHub API (deskripsi repo, update terakhir) dan README untuk detail penjelasan.
          </div>

          <div v-if="loading" class="mt-6 text-sm text-slate-500 italic">
            Memuat metadata repository...
          </div>
          <div v-else-if="error" class="mt-6 text-sm text-red-700">
            {{ error }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import axios from "axios";

const githubRepoCache = new Map();

export default {
  data() {
    return {
      loading: true,
      error: '',
      projects: [
        {
          id: 1,
          name: 'Agrimatch',
          image: '/img/portfolio-agrimatch.png',
          status: 'A mobile application developed using flutter, fast api, CNN and LLM to help novice farmers in starting farming developed with soil analysis technology and consultation with Gen AI',
          tech: 'dart,Python',
          github: 'https://github.com/yosiagurning/AgrimatchAI.git',
        },
        {
          id: 2,
          name: 'Partoba Frontend',
          image: '/img/portfolio-partoba.png',
          status: 'A project that is built completely using Flutter and Laravel as the Frontend, this project is used by the Toba Regency KOPERINDAG Service in monitoring and setting prices in the market.',
          tech: 'PHP, dart',
          github: 'https://github.com/yosiagurning/Frontend_Laravel.git',
        },
        {
          id: 3,
          name: 'Go-Backend Partoba',
          image: '/img/portfolio-go.png',
          status: 'Backend Project used to run Partoba applications and websites with complete JWT token authentication',
          tech: 'Go',
          github: 'https://github.com/yosiagurning/go-backend.git',
        },
        {
          id: 4,
          name: 'Agrimatch FastAPI',
          image: '/img/portfolio-fast.png',
          status: 'Backend project used to connect flutter with CNN and LLM and to connect to PostgreSQL database',
          tech: 'Python',
          github: 'https://github.com/yosiagurning/AgrimatchAI.git',
        },
        {
          id: 5,
          name: 'Aplikasi Perpustakaan',
          image: '/img/portfolio-perpustakaan.png',
          status: 'An application built complete with API and only using C# which is useful for managing book data in a library.',
          tech: 'C#',
          github: 'https://github.com/yosiagurning/Aplikasi-Perpustakaan.git',
        },
        {
          id: 6,
          name: 'Clean Arsitektur Go',
          image: '/img/portfolio-UTS.png',
          status: 'Mid-Semester Project for the Software Design Architecture course, built using the Golang programming language using Clean Architecture to facilitate future changes to a microservice architecture.',
          tech: 'Go',
          github: 'https://github.com/yosiagurning/UTS-RPL-APPL-11423049',
        },
        {
          id: 7,
          name: 'Warehouse Project',
          image: '/img/portfolio-warehouse.png',
          status: 'Warehouse Management Systems play a crucial role in optimizing operations, reducing errors, and increasing overall productivity in supply chain processes Using Laravel Framework',
          tech: 'PHP',
          github: 'https://github.com/yosiagurning/warehouse-project',
        },
        {
          id: 8,
          name: 'DASI & DALIS LAST Project',
          image: '/img/portfolio-DASI.png',
          status: 'Final project for the DASi & DALIS course to implementing concepts in data analysis and system development through a structured and collaborative approach',
          tech: 'Python',
          github: 'https://github.com/Hyzity/Kelompok-5-DASI-DALIS',
        },
        {
          id: 9,
          name: 'Laravel Field Booking',
          image: '/img/portfolio-field.png',
          status: 'field booking website using the Laravel framework in completing the UAS for the Website Development 2 course at the Del Technology Institute',
          tech: 'PHP, Javascript',
          github: 'https://github.com/yosiagurning/boking-lapangan-with-laravel-10',
        }
      ].map(p => ({ ...p, slug: '' , repo: null }))
    }
  },
  mounted() {
    this.projects = this.projects.map(p => ({ ...p, slug: this.slugify(p.name) }))
    this.hydrateRepoMeta()
  },
  methods: {
    slugify(text) {
      return String(text)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
    },
    parseOwnerRepo(url) {
      if (!url) return null
      const normalized = String(url).replace(/\.git$/, '')
      const match = normalized.match(/github\.com\/([^/]+)\/([^/?#]+)/i)
      if (!match) return null
      return { owner: match[1], repo: match[2] }
    },
    formatDate(iso) {
      if (!iso) return ''
      const d = new Date(iso)
      if (Number.isNaN(d.getTime())) return ''
      return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: '2-digit' })
    },
    async hydrateRepoMeta() {
      this.loading = true
      this.error = ''
      const tasks = this.projects.map(async (project) => {
        const parsed = this.parseOwnerRepo(project.github)
        if (!parsed) return { id: project.id, repo: null }

        const key = `${parsed.owner}/${parsed.repo}`
        if (githubRepoCache.has(key)) {
          return { id: project.id, repo: githubRepoCache.get(key) }
        }

        try {
          const response = await axios.get(`https://api.github.com/repos/${parsed.owner}/${parsed.repo}`, {
            headers: { Accept: 'application/vnd.github+json' }
          })
          const repo = {
            fullName: response.data.full_name,
            description: response.data.description,
            stars: response.data.stargazers_count,
            forks: response.data.forks_count,
            updatedAt: this.formatDate(response.data.updated_at),
            defaultBranch: response.data.default_branch,
            htmlUrl: response.data.html_url,
            homepage: response.data.homepage,
          }
          githubRepoCache.set(key, repo)
          return { id: project.id, repo }
        } catch (e) {
          return { id: project.id, repo: null }
        }
      })

      const results = await Promise.all(tasks)
      const repoById = new Map(results.map(r => [r.id, r.repo]))
      this.projects = this.projects.map(p => ({ ...p, repo: repoById.get(p.id) || null }))
      this.loading = false
      if (this.projects.every(p => !p.repo)) {
        this.error = 'Metadata repository tidak bisa dimuat. Coba refresh atau periksa koneksi internet.'
      }
    }
  }
}

</script>

<style scoped>
.paraf {
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
}
@media (min-width: 768px) { 
  .paraf {
    display: -webkit-box;
  }
}
@keyframes fadeZoomUp {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.fade-zoom-up {
  animation: fadeZoomUp 1s ease-in-out;
  /* animation-delay: 1000ms; */
}
</style>
