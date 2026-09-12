<script setup lang="ts">
import { computed } from 'vue'
import { bloquesCurso, getApartadoPorSlug, getRutaApartado, tituloCurso } from '../curso'

const rutasDestacadas: Array<[string, string]> = [
  ['requisitos-web', 'spa-vue-estructura'],
  ['herramientas', 'extension-cadua'],
  ['herramientas', 'skill-ua-accesibilidad'],
]

const destacados = computed(() =>
  rutasDestacadas.map(([bloqueSlug, apartadoId]) => ({
    id: `${bloqueSlug}-${apartadoId}`,
    ruta: getRutaApartado(bloqueSlug, apartadoId),
    titulo: getApartadoPorSlug(bloqueSlug, apartadoId)?.title ?? apartadoId,
  })),
)
</script>

<template>
  <section class="d-flex flex-column gap-4">
    <div class="card border overflow-hidden">
      <div class="card-body p-4 p-md-5">
        <div class="row g-4 g-lg-5">
          <div class="col-lg-8">
            <h1 class="mb-0" tabindex="-1">{{ tituloCurso }}</h1>
            <span class="ua-filete d-block mt-3 mb-4"></span>
            <p>
              Accesibilidad, usabilidad y experiencia de uso están relacionadas, pero no son
              exactamente lo mismo: una interfaz puede ser vistosa o cómoda para parte de sus
              usuarios y seguir excluyendo a otros si no cumple unos mínimos de percepción, manejo y
              comprensión.
            </p>
            <p class="mb-0">
              El curso recorre esos mínimos, desde el marco técnico y normativo hasta los requisitos
              de una página web, los documentos ofimáticos y las herramientas de revisión.
            </p>
          </div>

          <div class="col-lg-4">
            <h2 class="h5 mb-3">Destacados</h2>
            <div class="list-group">
              <RouterLink
                v-for="destacado in destacados"
                :key="destacado.id"
                :to="destacado.ruta"
                class="list-group-item list-group-item-action"
              >
                {{ destacado.titulo }}
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row g-4">
      <div
        v-for="(bloque, indice) in bloquesCurso"
        :key="bloque.slug"
        :class="indice < 3 ? 'col-md-4' : 'col-md-6'"
      >
        <article class="card h-100 border">
          <div class="card-body p-4 d-flex flex-column">
            <h2 class="mb-3">{{ bloque.title }}</h2>

            <p class="mb-4">{{ bloque.homeSummary ?? bloque.menuDescription }}</p>

            <RouterLink
              :to="getRutaApartado(bloque.slug, bloque.sections[0].id)"
              class="btn btn-primary mt-auto align-self-start d-inline-flex text-white"
              :aria-label="`Ir al bloque ${bloque.shortTitle}`"
            >
              {{ `Ir a ${bloque.shortTitle}` }}
            </RouterLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
