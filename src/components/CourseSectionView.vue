<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getBlockBySlug } from '../course'
import type { CourseSection, SectionSubheading } from '../course/types'
import CourseSectionNav from './CourseSectionNav.vue'

const props = defineProps<{
  blockSlug: string
  sectionId: string
}>()

const route = useRoute()
const block = computed(() => getBlockBySlug(props.blockSlug))
const currentSectionIndex = computed(() =>
  block.value?.sections.findIndex((section) => section.id === props.sectionId) ?? -1,
)
const section = computed<CourseSection | undefined>(() =>
  currentSectionIndex.value >= 0 ? block.value?.sections[currentSectionIndex.value] : undefined,
)
const componentContentRef = ref<HTMLElement | null>(null)
const componentSubheadings = ref<SectionSubheading[]>([])

const extractComponentSubheadings = async () => {
  if (!section.value?.component) {
    componentSubheadings.value = []
    return
  }

  await nextTick()

  const root = componentContentRef.value
  if (!root) {
    componentSubheadings.value = []
    return
  }

  const tocMode = section.value.toc ?? 'h2'
  const selector = tocMode === 'h2-h3' ? 'h2, h3' : 'h2'
  const headings = Array.from(root.querySelectorAll<HTMLElement>(selector))

  componentSubheadings.value = headings.map((heading, index) => {
    if (!heading.id) {
      heading.id = `${props.sectionId}-heading-${index + 1}`
    }

    return {
      id: heading.id,
      title: heading.textContent?.trim() ?? '',
      level: heading.tagName === 'H3' ? 3 : 2,
    }
  })
}

const subheadings = computed(() => {
  if (!section.value) {
    return []
  }
  return componentSubheadings.value
})
const currentHash = computed(() => route.hash.replace('#', ''))
const mobileNavId = computed(() => `section-nav-${props.blockSlug}-${props.sectionId}`)

watch(section, () => {
  void extractComponentSubheadings()
})

onMounted(() => {
  void extractComponentSubheadings()
})
</script>

<template>
  <div v-if="block && section" class="row g-4">
    <div class="col-12">
      <header class="border-bottom px-1 px-lg-0">
        <div class="py-3 py-xl-4">
          <h1 class="mb-2">{{ section.title }}</h1>
          <p class="mb-0">{{ block.title }}</p>

          <div v-if="subheadings.length" class="d-lg-none mt-4">
            <button
              class="btn btn-outline-primary w-100 d-flex justify-content-between align-items-center"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="`#${mobileNavId}`"
              aria-expanded="false"
              :aria-controls="mobileNavId"
            >
              <span>Ver índice de la página</span>
              <span>{{ subheadings.length }} apartados</span>
            </button>

            <div v-if="subheadings.length" :id="mobileNavId" class="collapse mt-3">
              <nav class="card border-0 shadow-sm" aria-label="Índice de la página">
                <div class="card-body">
                  <CourseSectionNav
                    :subheadings="subheadings"
                    :current-hash="currentHash"
                  />
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>

    <div v-if="subheadings.length" class="col-lg-4 col-xl-3 d-none d-lg-block">
      <nav
        class="card border-0 shadow-sm sticky-lg-top"
        style="top: 5.5rem"
        aria-label="Índice de la página"
      >
        <div class="card-body">
          <h2 class="h5 mb-3">En esta página</h2>
          <CourseSectionNav
            :subheadings="subheadings"
            :current-hash="currentHash"
          />
        </div>
      </nav>
    </div>

    <div :class="subheadings.length ? 'col-lg-8 col-xl-9' : 'col-12'">
      <article class="card border-0 shadow-sm">
        <div class="card-body p-4 p-xl-5">
          <div v-if="section.figure" class="mb-4">
            <figure class="figure mb-0">
              <img
                :src="section.figure.src"
                :alt="section.figure.alt"
                :title="section.figure.alt"
                class="figure-img img-fluid rounded-4 border shadow-sm"
                loading="lazy"
              />
              <figcaption class="mt-3 mb-0">
                {{ section.figure.caption }}
              </figcaption>
            </figure>
          </div>

          <div
            ref="componentContentRef"
            class="mb-4 lh-lg"
          >
            <component :is="section.component" />
          </div>

          <section
            v-if="section.showcase"
            class="mb-4"
            aria-labelledby="section-showcase"
          >
            <div class="rounded-4 border bg-white p-4 shadow-sm">
              <h2 id="section-showcase" class="mb-2">{{ section.showcase.title }}</h2>
              <p class="mb-4">{{ section.showcase.summary }}</p>

              <div v-if="section.showcase.notes?.length" class="mb-4">
                <h3 class="h5 mb-3">Qué se está usando</h3>
                <ul class="mb-0">
                  <li v-for="note in section.showcase.notes" :key="note">
                    {{ note }}
                  </li>
                </ul>
              </div>

              <div class="mb-4">
                <h3 class="h5 mb-3">Resultado visual</h3>
                <div class="rounded-4 border bg-body-tertiary p-3 p-lg-4">
                  <div v-html="section.showcase.previewHtml" />
                </div>
              </div>

              <div>
                <h3 class="h5 mb-3">Código representativo</h3>
                <pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">{{ section.showcase.code }}</code></pre>
              </div>
            </div>
          </section>

          <section v-if="section.examples?.length" class="mb-4" aria-labelledby="section-examples">
            <div class="rounded-4 border bg-body-tertiary p-4">
              <div class="d-flex flex-column flex-lg-row justify-content-between gap-3 mb-3">
                <div>
                  <h2 id="section-examples" class="mb-2">Ejemplos relacionados</h2>
                  <p class="mb-0">
                    Ejemplos del curso disponibles como páginas independientes dentro de la app.
                  </p>
                </div>
              </div>

              <div class="row g-3">
                <div
                  v-for="example in section.examples"
                  :key="example.href"
                  class="col-lg-6"
                >
                  <a
                    :href="example.href"
                    class="card h-100 border text-decoration-none text-body"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div class="card-body">
                      <p class="mb-2 text-uppercase small">Demo</p>
                      <h3 class="h5 mb-2">{{ example.title }}</h3>
                      <p class="mb-3">{{ example.description }}</p>
                      <span class="btn btn-outline-primary">Abrir ejemplo</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <div v-if="section.gallery" class="mb-4">
            <h2 class="mb-3">Galería de ejemplos</h2>
            <div class="row g-3">
              <div v-for="figure in section.gallery" :key="figure.src" class="col-md-6">
                <figure class="figure mb-0">
                  <img
                    :src="figure.src"
                    :alt="figure.alt"
                    :title="figure.alt"
                    class="figure-img img-fluid rounded-4 border shadow-sm mb-2"
                    loading="lazy"
                  />
                  <figcaption class="mb-0">
                    {{ figure.caption }}
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>

  <div v-else class="card border-0 shadow-sm">
    <div class="card-body p-4 p-lg-5">
      <h1 class="mb-3">Subapartado no encontrado</h1>
      <p class="mb-0">La ruta solicitada no existe dentro del curso.</p>
    </div>
  </div>
</template>
