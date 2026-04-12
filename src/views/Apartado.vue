<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getBloquePorSlug } from '../curso'
import type { ApartadoCurso, SubtituloApartado } from '../curso'
import IndiceApartado from '../components/IndiceApartado.vue'

const props = defineProps<{
  bloqueSlug: string
  apartadoId: string
}>()

const route = useRoute()
const bloque = computed(() => getBloquePorSlug(props.bloqueSlug))
const indiceApartadoActual = computed(
  () => bloque.value?.sections.findIndex((apartado) => apartado.id === props.apartadoId) ?? -1,
)
const apartado = computed<ApartadoCurso | undefined>(() =>
  indiceApartadoActual.value >= 0 ? bloque.value?.sections[indiceApartadoActual.value] : undefined,
)
const contenidoApartadoRef = ref<HTMLElement | null>(null)
const subtitulosDetectados = ref<SubtituloApartado[]>([])

const extraerSubtitulos = async () => {
  if (!apartado.value?.component) {
    subtitulosDetectados.value = []
    return
  }

  await nextTick()

  const raiz = contenidoApartadoRef.value
  if (!raiz) {
    subtitulosDetectados.value = []
    return
  }

  const modoIndice = apartado.value.toc ?? 'h2'
  if (modoIndice === 'none') {
    subtitulosDetectados.value = []
    return
  }

  const selector = modoIndice === 'h2-h3' ? 'h2, h3' : 'h2'
  const headings = Array.from(raiz.querySelectorAll<HTMLElement>(selector))

  subtitulosDetectados.value = headings.map((heading, index) => {
    if (!heading.id) {
      heading.id = `${props.apartadoId}-heading-${index + 1}`
    }

    return {
      id: heading.id,
      title: heading.textContent?.trim() ?? '',
      level: heading.tagName === 'H3' ? 3 : 2,
    }
  })
}

const subtitulos = computed(() => subtitulosDetectados.value)
const hashActual = computed(() => route.hash.replace('#', ''))
const idIndiceMovil = computed(() => `indice-apartado-${props.bloqueSlug}-${props.apartadoId}`)

watch(apartado, () => {
  void extraerSubtitulos()
})

onMounted(() => {
  void extraerSubtitulos()
})
</script>

<template>
  <div v-if="bloque && apartado" class="row g-4">
    <div class="col-12">
      <header class="border-bottom px-1 px-lg-0">
        <div class="py-3 py-xl-4">
          <p class="mb-2">{{ bloque.title }}</p>
          <h1 class="mb-0">{{ apartado.title }}</h1>

          <div v-if="subtitulos.length" class="d-lg-none mt-4">
            <button
              class="btn btn-outline-primary w-100 d-flex justify-content-between align-items-center"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="`#${idIndiceMovil}`"
              aria-expanded="false"
              :aria-controls="idIndiceMovil"
            >
              <span>Ver índice de la página</span>
              <span>{{ subtitulos.length }} apartados</span>
            </button>

            <div :id="idIndiceMovil" class="collapse mt-3">
              <nav class="card border-0 shadow-sm" aria-label="Índice de la página">
                <div class="card-body">
                  <IndiceApartado :subheadings="subtitulos" :current-hash="hashActual" />
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>

    <div v-if="subtitulos.length" class="col-lg-4 col-xl-3 d-none d-lg-block">
      <nav
        class="card border-0 shadow-sm sticky-lg-top"
        style="top: 5.5rem"
        aria-label="Índice de la página"
      >
        <div class="card-body">
          <h2 class="h5 mb-3">En esta página</h2>
          <IndiceApartado :subheadings="subtitulos" :current-hash="hashActual" />
        </div>
      </nav>
    </div>

    <div :class="subtitulos.length ? 'col-lg-8 col-xl-9' : 'col-12'">
      <article class="card border-0 shadow-sm">
        <div class="card-body p-4 p-xl-5">
          <div v-if="apartado.figure" class="mb-4">
            <figure class="figure mb-0">
              <img
                :src="apartado.figure.src"
                :alt="apartado.figure.alt"
                :title="apartado.figure.alt"
                class="figure-img img-fluid rounded-4 border shadow-sm"
                loading="lazy"
              />
              <figcaption class="mt-3 mb-0">
                {{ apartado.figure.caption }}
              </figcaption>
            </figure>
          </div>

          <div ref="contenidoApartadoRef" class="mb-4 lh-lg">
            <component :is="apartado.component" />
          </div>

          <section v-if="apartado.showcase" class="mb-4" aria-labelledby="apartado-showcase">
            <div class="rounded-4 border bg-white p-4 shadow-sm">
              <h2 id="apartado-showcase" class="mb-2">{{ apartado.showcase.title }}</h2>
              <p class="mb-4">{{ apartado.showcase.summary }}</p>

              <div v-if="apartado.showcase.notes?.length" class="mb-4">
                <h3 class="h5 mb-3">Qué se está usando</h3>
                <ul class="mb-0">
                  <li v-for="note in apartado.showcase.notes" :key="note">
                    {{ note }}
                  </li>
                </ul>
              </div>

              <div class="mb-4">
                <h3 class="h5 mb-3">Resultado visual</h3>
                <div class="rounded-4 border bg-body-tertiary p-3 p-lg-4">
                  <div v-html="apartado.showcase.previewHtml" />
                </div>
              </div>

              <div>
                <h3 class="h5 mb-3">Código representativo</h3>
                <pre class="course-code"><code>{{ apartado.showcase.code }}</code></pre>
              </div>
            </div>
          </section>

          <section
            v-if="apartado.examples?.length"
            class="mb-4"
            aria-labelledby="apartado-examples"
          >
            <div class="rounded-4 border bg-body-tertiary p-4">
              <div class="d-flex flex-column flex-lg-row justify-content-between gap-3 mb-3">
                <div>
                  <h2 id="apartado-examples" class="mb-2">Ejemplos relacionados</h2>
                  <p class="mb-0">
                    Ejemplos del curso disponibles como páginas independientes dentro de la app.
                  </p>
                </div>
              </div>

              <div class="row g-3">
                <div
                  v-for="example in apartado.examples"
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

          <div v-if="apartado.gallery" class="mb-4">
            <h2 class="mb-3">Galería de ejemplos</h2>
            <div class="row g-3">
              <div v-for="figure in apartado.gallery" :key="figure.src" class="col-md-6">
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
</template>
