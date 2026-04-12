<script setup lang="ts">
import { computed } from 'vue'
import { getBloquePorSlug, getRutaApartado } from '../curso'

const props = defineProps<{
  slug: string
}>()

const bloque = computed(() => getBloquePorSlug(props.slug))
</script>

<template>
  <div v-if="bloque" class="row g-4">
    <div class="col-12">
      <header class="rounded-4 border bg-white p-4 p-lg-5 shadow-sm">
        <div class="d-flex flex-column flex-lg-row justify-content-between gap-4">
          <div class="pe-lg-4">
            <h1 class="mb-3">{{ bloque.title }}</h1>
            <div>
              <p
                v-for="(paragraph, index) in bloque.intro"
                :key="`${bloque.slug}-intro-${index}`"
                :class="{ 'mb-0': index === bloque.intro.length - 1 }"
              >
                {{ paragraph }}
              </p>
            </div>
          </div>

          <div class="card border-0 bg-body-tertiary flex-shrink-0" style="max-width: 20rem">
            <div class="card-body">
              <h2 class="mb-3">Resumen del bloque</h2>
              <p class="mb-1">{{ bloque.menuDescription }}</p>
              <p class="mb-0">{{ bloque.sections.length }} subapartados</p>
            </div>
          </div>
        </div>
      </header>
    </div>

    <div class="col-12">
      <section class="card border-0 shadow-sm">
        <div class="card-body p-4 p-lg-5">
          <div class="d-flex flex-column flex-lg-row justify-content-between gap-3 mb-4">
            <div>
              <h2 class="mb-2">Subapartados del bloque</h2>
              <p class="mb-0">
                Cada tema tiene ahora su propia vista para reducir la longitud de lectura.
              </p>
            </div>
          </div>

          <div class="row g-3">
            <div
              v-for="(apartado, index) in bloque.sections"
              :key="apartado.id"
              class="col-lg-6"
            >
              <article class="card h-100 border">
                <div class="card-body p-4">
                  <p class="mb-2">Tema {{ index + 1 }}</p>
                  <h3 class="mb-3">{{ apartado.title }}</h3>
                  <RouterLink
                    :to="getRutaApartado(bloque.slug, apartado.id)"
                    class="btn btn-outline-primary"
                  >
                    Abrir subapartado
                  </RouterLink>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
