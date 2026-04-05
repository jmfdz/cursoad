<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getBlockBySlug, type Section } from '../content/course'
import CourseSectionNav from './CourseSectionNav.vue'
import { getSectionSubheadings, renderSectionHtml } from './courseContent'

const props = defineProps<{
  blockSlug: string
  sectionId: string
}>()

const route = useRoute()
const block = computed(() => getBlockBySlug(props.blockSlug))
const currentSectionIndex = computed(() =>
  block.value?.sections.findIndex((section) => section.id === props.sectionId) ?? -1,
)
const section = computed<Section | undefined>(() =>
  currentSectionIndex.value >= 0 ? block.value?.sections[currentSectionIndex.value] : undefined,
)
const subheadings = computed(() => (section.value ? getSectionSubheadings(section.value) : []))
const currentHash = computed(() => route.hash.replace('#', ''))
const mobileNavId = computed(() => `section-nav-${props.blockSlug}-${props.sectionId}`)
</script>

<template>
  <div v-if="block && section" class="row g-4">
    <div class="col-12">
      <header class="border-bottom px-1 px-lg-0">
        <div class="py-3 py-xl-4">
          <h1 class="mb-2">{{ section.title }}</h1>
          <p class="mb-0">{{ block.title }}</p>

          <div class="d-lg-none mt-4">
            <button
              class="btn btn-outline-primary w-100 d-flex justify-content-between align-items-center"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="`#${mobileNavId}`"
              aria-expanded="false"
              :aria-controls="mobileNavId"
            >
              <span>Ver navegación del apartado</span>
              <span>{{ block.sections.length }} temas</span>
            </button>

            <div :id="mobileNavId" class="collapse mt-3">
              <nav class="card border-0 shadow-sm" aria-label="Subapartados">
                <div class="card-body">
                  <CourseSectionNav
                    :block="block"
                    :section="section"
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

    <div class="col-lg-4 col-xl-3 d-none d-lg-block">
      <nav
        class="card border-0 shadow-sm sticky-lg-top"
        style="top: 5.5rem"
        aria-label="Subapartados"
      >
        <div class="card-body">
          <CourseSectionNav
            :block="block"
            :section="section"
            :subheadings="subheadings"
            :current-hash="currentHash"
          />
        </div>
      </nav>
    </div>

    <div class="col-lg-8 col-xl-9">
      <article class="card border-0 shadow-sm">
        <div class="card-body p-4 p-xl-5">
          <div v-if="section.figure" class="mb-4">
            <figure class="figure mb-0">
              <img
                :src="section.figure.src"
                :alt="section.figure.alt"
                class="figure-img img-fluid rounded-4 border shadow-sm"
                loading="lazy"
              />
              <figcaption class="mt-3 mb-0">
                {{ section.figure.caption }}
              </figcaption>
            </figure>
          </div>

          <div class="mb-4 lh-lg" v-html="renderSectionHtml(section)" />

          <div v-if="section.gallery" class="mb-4">
            <h2 class="mb-3">Galería de ejemplos</h2>
            <div class="row g-3">
              <div v-for="figure in section.gallery" :key="figure.src" class="col-md-6">
                <figure class="figure mb-0">
                  <img
                    :src="figure.src"
                    :alt="figure.alt"
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
