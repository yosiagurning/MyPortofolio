<template>
  <div class="w-full md:w-3/5 mx-auto md:mt-5 pb-32">
    <div class="bg-white border border-slate-200 shadow-sm rounded-xl mx-3 p-5 md:p-10 md:mx-0">
      <div v-if="error" class="text-left text-red-700">
        {{ error }}
      </div>

      <div v-else>
        <h1 class="text-xl md:text-4xl text-slate-900 text-left font-bold leading-relaxed">{{ title }}</h1>

        <div class="mt-3 text-left text-slate-600 text-sm flex flex-wrap items-center gap-x-3 gap-y-1">
          <span v-if="repoMeta && repoMeta.updatedAt">Updated {{ repoMeta.updatedAt }}</span>
          <a v-if="repoMeta && repoMeta.htmlUrl" :href="repoMeta.htmlUrl" target="_blank" rel="noreferrer"
            class="text-amber-700 hover:text-amber-800 font-medium"
          >GitHub</a>
          <span v-if="repoMeta && typeof repoMeta.stars === 'number'" class="text-slate-700">★ {{ repoMeta.stars }}</span>
          <span v-if="project && project.tech" class="text-slate-500">{{ project.tech }}</span>
        </div>

        <div class="h-[2px] w-20 my-5 md:my-10 bg-amber-500 md:w-1/3 aos-init aos-animate mr-2"></div>

        <div v-if="image">
          <div class="relative w-full" style="padding-top: 50%;">
            <img :src="image" class="absolute top-0 left-0 rounded-lg w-full h-full object-cover" alt="Thumbnail">
          </div>
        </div>

        <div class="mt-8 grid grid-cols-1 gap-4">
          <div class="bg-slate-50 border border-slate-200 rounded-xl p-5 text-left">
            <div class="text-slate-900 font-semibold mb-2">Apa</div>
            <div v-if="sections.apa" class="readme-content" v-html="sections.apa"></div>
            <div v-else class="text-slate-600 text-sm">
              Belum ada section “Apa” yang terdeteksi di README. Bagian dokumentasi lengkap ada di bawah.
            </div>
          </div>

          <div class="bg-slate-50 border border-slate-200 rounded-xl p-5 text-left">
            <div class="text-slate-900 font-semibold mb-2">Kenapa</div>
            <div v-if="sections.kenapa" class="readme-content" v-html="sections.kenapa"></div>
            <div v-else class="text-slate-600 text-sm">
              Belum ada section “Kenapa/Why” yang terdeteksi di README. Bagian dokumentasi lengkap ada di bawah.
            </div>
          </div>

          <div class="bg-slate-50 border border-slate-200 rounded-xl p-5 text-left">
            <div class="text-slate-900 font-semibold mb-2">Arsitektur</div>
            <div v-if="sections.arsitektur" class="readme-content" v-html="sections.arsitektur"></div>
            <div v-else class="text-slate-600 text-sm">
              Belum ada section “Arsitektur/Architecture” yang terdeteksi di README. Bagian dokumentasi lengkap ada di bawah.
            </div>
          </div>
        </div>

        <div class="mt-10 text-left">
          <div class="text-slate-900 font-semibold text-lg mb-3">Dokumentasi Lengkap (README)</div>
          <div v-if="loading" class="text-slate-500 italic">Memuat README dari GitHub...</div>
          <div v-else class="readme-content" v-html="content"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { useRoute } from 'vue-router';

export default {
    data() {
        return {
            route: useRoute(),
            loading: true,
            error: '',
            title: '',
            image: '',
            date: '',
            content: '',
            repoMeta: null,
            project: null,
            sections: {
              apa: '',
              kenapa: '',
              arsitektur: '',
            },
        }
    },
    mounted() {
        this.getDetails();
    },
    methods: {
        async getDetails() {
            const id = Number(this.route.params.id)

            const projects = [
              {
                id: 1,
                name: 'Agrimatch',
                image: '/img/portfolio-agrimatch.png',
                tech: 'dart,Python',
                github: 'https://github.com/yosiagurning/AgrimatchAI.git',
              },
              {
                id: 2,
                name: 'Partoba Frontend',
                image: '/img/portfolio-partoba.png',
                tech: 'PHP, dart',
                github: 'https://github.com/yosiagurning/Frontend_Laravel.git',
              },
              {
                id: 3,
                name: 'Go-Backend Partoba',
                image: '/img/portfolio-go.png',
                tech: 'Go',
                github: 'https://github.com/yosiagurning/go-backend.git',
              },
              {
                id: 4,
                name: 'Agrimatch FastAPI',
                image: '/img/portfolio-fast.png',
                tech: 'Python',
                github: 'https://github.com/yosiagurning/AgrimatchAI.git',
              },
              {
                id: 5,
                name: 'Aplikasi Perpustakaan',
                image: '/img/portfolio-perpustakaan.png',
                tech: 'C#',
                github: 'https://github.com/yosiagurning/Aplikasi-Perpustakaan.git',
              },
              {
                id: 6,
                name: 'Clean Arsitektur Go',
                image: '/img/portfolio-UTS.png',
                tech: 'Go',
                github: 'https://github.com/yosiagurning/UTS-RPL-APPL-11423049',
              },
              {
                id: 7,
                name: 'Warehouse Project',
                image: '/img/portfolio-warehouse.png',
                tech: 'PHP',
                github: 'https://github.com/yosiagurning/warehouse-project',
              },
              {
                id: 8,
                name: 'DASI & DALIS LAST Project',
                image: '/img/portfolio-DASI.png',
                tech: 'Python',
                github: 'https://github.com/Hyzity/Kelompok-5-DASI-DALIS',
              },
              {
                id: 9,
                name: 'Laravel Field Booking',
                image: '/img/portfolio-field.png',
                tech: 'PHP, Javascript',
                github: 'https://github.com/yosiagurning/boking-lapangan-with-laravel-10',
              }
            ]

            const project = projects.find(p => p.id === id)
            if (!project) {
              this.loading = false
              this.error = 'Project tidak ditemukan.'
              return
            }

            this.project = project
            this.title = project.name
            this.image = project.image
            this.date = ''

            const parsed = this.parseOwnerRepo(project.github)
            if (!parsed) {
              this.loading = false
              this.error = 'Link GitHub tidak valid.'
              return
            }

            try {
              const repoResponse = await axios.get(`https://api.github.com/repos/${parsed.owner}/${parsed.repo}`, {
                headers: { Accept: 'application/vnd.github+json' }
              })

              this.repoMeta = {
                fullName: repoResponse.data.full_name,
                description: repoResponse.data.description,
                stars: repoResponse.data.stargazers_count,
                forks: repoResponse.data.forks_count,
                updatedAt: this.formatDate(repoResponse.data.updated_at),
                defaultBranch: repoResponse.data.default_branch,
                htmlUrl: repoResponse.data.html_url,
              }

              const readmeHtmlResponse = await axios.get(`https://api.github.com/repos/${parsed.owner}/${parsed.repo}/readme`, {
                headers: { Accept: 'application/vnd.github.v3.html' },
                responseType: 'text'
              })

              const branch = this.repoMeta.defaultBranch || 'main'
              const rewritten = this.rewriteReadmeHtml(readmeHtmlResponse.data, parsed.owner, parsed.repo, branch)
              this.content = rewritten
              this.sections = this.extractSectionsFromHtml(rewritten)
              this.loading = false
            } catch (e) {
              this.loading = false
              this.error = 'Gagal mengambil README dari GitHub. Coba refresh atau periksa koneksi internet.'
            }
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
        rewriteReadmeHtml(html, owner, repo, branch) {
          if (!html) return ''
          const parser = new DOMParser()
          const doc = parser.parseFromString(String(html), 'text/html')
          const baseGithub = `https://github.com/${owner}/${repo}`

          doc.querySelectorAll('a[href]').forEach((a) => {
            const href = a.getAttribute('href') || ''
            if (!href) return
            if (href.startsWith('#')) return
            if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:')) return
            if (href.startsWith('/')) {
              a.setAttribute('href', `https://github.com${href}`)
              return
            }
            a.setAttribute('href', `${baseGithub}/blob/${branch}/${href}`)
          })

          doc.querySelectorAll('img[src]').forEach((img) => {
            const src = img.getAttribute('src') || ''
            if (!src) return
            if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) return
            if (src.startsWith('/')) {
              img.setAttribute('src', `https://github.com${src}`)
              return
            }
            img.setAttribute('src', `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${src}`)
          })

          return doc.body.innerHTML || ''
        },
        extractSectionsFromHtml(html) {
          const empty = { apa: '', kenapa: '', arsitektur: '' }
          if (!html) return empty

          const parser = new DOMParser()
          const doc = parser.parseFromString(String(html), 'text/html')
          const headings = Array.from(doc.querySelectorAll('h1, h2, h3, h4'))

          const normalize = (s) => String(s || '').toLowerCase().trim()
          const isApa = (t) => ['apa', 'what', 'overview', 'tentang', 'about'].includes(t)
          const isKenapa = (t) => ['kenapa', 'mengapa', 'why', 'reason', 'motivation'].includes(t)
          const isArsitektur = (t) => ['arsitektur', 'architecture', 'system design', 'design', 'diagram'].includes(t)

          const collectSectionHtml = (headingEl) => {
            const parts = []
            let el = headingEl.nextElementSibling
            while (el) {
              const tag = el.tagName ? el.tagName.toLowerCase() : ''
              if (['h1', 'h2', 'h3', 'h4'].includes(tag)) break
              parts.push(el.outerHTML)
              el = el.nextElementSibling
            }
            return parts.join('') || ''
          }

          for (const h of headings) {
            const t = normalize(h.textContent)
            if (!empty.apa && isApa(t)) empty.apa = collectSectionHtml(h)
            if (!empty.kenapa && isKenapa(t)) empty.kenapa = collectSectionHtml(h)
            if (!empty.arsitektur && isArsitektur(t)) empty.arsitektur = collectSectionHtml(h)
            if (empty.apa && empty.kenapa && empty.arsitektur) break
          }

          return empty
        }
    }
}
</script>

<style scoped>
.readme-content :deep(h1),
.readme-content :deep(h2),
.readme-content :deep(h3),
.readme-content :deep(h4) {
  color: #0f172a;
  font-weight: 700;
  line-height: 1.25;
  margin-top: 1.25rem;
  margin-bottom: 0.75rem;
}

.readme-content :deep(p),
.readme-content :deep(ul),
.readme-content :deep(ol) {
  color: #334155;
  margin: 0.75rem 0;
}

.readme-content :deep(ul),
.readme-content :deep(ol) {
  padding-left: 1.25rem;
}

.readme-content :deep(a) {
  color: #b45309;
  font-weight: 600;
  text-decoration: underline;
}

.readme-content :deep(pre) {
  background: #0b1220;
  color: #e2e8f0;
  border-radius: 0.75rem;
  padding: 1rem;
  overflow: auto;
  margin: 1rem 0;
}

.readme-content :deep(code) {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.9em;
}

.readme-content :deep(img) {
  border-radius: 0.75rem;
  max-width: 100%;
  height: auto;
}
</style>
