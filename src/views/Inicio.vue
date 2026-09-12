<script setup lang="ts">
import { computed } from 'vue'
import {
  autorCurso,
  bloquesCurso,
  fechaRevisionCurso,
  getRutaApartado,
  tituloCurso,
} from '../curso'

const totalApartados = computed(() =>
  bloquesCurso.reduce((total, bloque) => total + bloque.sections.length, 0),
)
</script>

<template>
  <section class="d-flex flex-column gap-4 gap-lg-5">
    <header class="border-bottom pb-4">
      <h1 class="mb-0" tabindex="-1">{{ tituloCurso }}</h1>
      <span class="ua-filete d-block mt-3 mb-4"></span>
      <p class="mb-1">{{ autorCurso }}</p>
      <p class="mb-0 text-secondary">
        {{ bloquesCurso.length }} bloques y {{ totalApartados }} temas.
        Última revisión: {{ fechaRevisionCurso }}.
      </p>
    </header>

    <article
      v-for="(bloque, indiceBloque) in bloquesCurso"
      :key="bloque.slug"
      class="card border"
    >
      <div class="card-header text-bg-primary p-3 p-lg-4">
        <p class="mb-1 small text-uppercase fw-semibold">
          Bloque {{ indiceBloque + 1 }} de {{ bloquesCurso.length }}
        </p>
        <h2 class="h3 mb-0">{{ bloque.title }}</h2>
      </div>

      <div class="card-body p-3 p-lg-4">
        <p class="mb-4">{{ bloque.homeSummary ?? bloque.menuDescription }}</p>

        <ol class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3 list-unstyled mb-0">
          <li v-for="(apartado, indice) in bloque.sections" :key="apartado.id" class="col">
            <RouterLink
              :to="getRutaApartado(bloque.slug, apartado.id)"
              class="enlace-caja d-flex gap-3 h-100 p-3 border rounded-3 text-decoration-none"
            >
              <span class="fw-bold text-secondary" aria-hidden="true">{{ indice + 1 }}</span>
              <span class="fw-semibold">{{ apartado.title }}</span>
            </RouterLink>
          </li>
        </ol>
      </div>
    </article>
  </section>
</template>
