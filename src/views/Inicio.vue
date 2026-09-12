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
    <header>
      <h1 class="mb-3" tabindex="-1">{{ tituloCurso }}</h1>
      <p class="mb-1">{{ autorCurso }}</p>
      <p class="mb-0 text-secondary">
        {{ bloquesCurso.length }} bloques y {{ totalApartados }} temas.
        Última revisión: {{ fechaRevisionCurso }}.
      </p>
    </header>

    <article
      v-for="(bloque, indice) in bloquesCurso"
      :key="bloque.slug"
      class="card border"
    >
      <div class="card-body p-4 p-lg-5 pb-lg-4">
        <p class="mb-1 text-secondary">Bloque {{ indice + 1 }} de {{ bloquesCurso.length }}</p>
        <h2 class="mb-3">{{ bloque.title }}</h2>
        <p class="mb-0">{{ bloque.homeSummary ?? bloque.menuDescription }}</p>
      </div>

      <ol class="list-group list-group-flush list-group-numbered">
        <li
          v-for="apartado in bloque.sections"
          :key="apartado.id"
          class="list-group-item px-4 px-lg-5 py-3"
        >
          <RouterLink :to="getRutaApartado(bloque.slug, apartado.id)">
            {{ apartado.title }}
          </RouterLink>
        </li>
      </ol>
    </article>
  </section>
</template>
