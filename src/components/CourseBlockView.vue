<script setup lang="ts">
import { computed } from 'vue'
import { getBlockBySlug, getSectionPath } from '../content/course'

const props = defineProps<{
  slug: string
}>()

const block = computed(() => getBlockBySlug(props.slug))
</script>

<template>
  <div v-if="block" class="row g-4">
    <div class="col-12">
      <header class="rounded-4 border bg-white p-4 p-lg-5 shadow-sm">
        <div class="d-flex flex-column flex-lg-row justify-content-between gap-4">
          <div class="pe-lg-4">
            <h1 class="mb-3">{{ block.title }}</h1>
            <div v-if="block.introHtml" class="lh-lg" v-html="block.introHtml" />
          </div>

          <div class="card border-0 bg-body-tertiary flex-shrink-0" style="max-width: 20rem">
            <div class="card-body">
              <h2 class="mb-3">Resumen del bloque</h2>
              <p class="mb-1">{{ block.menuDescription }}</p>
              <p class="mb-0">{{ block.sections.length }} subapartados</p>
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
              v-for="(section, index) in block.sections"
              :key="section.id"
              class="col-lg-6"
            >
              <article class="card h-100 border">
                <div class="card-body p-4">
                  <p class="mb-2">Tema {{ index + 1 }}</p>
                  <h3 class="mb-3">{{ section.title }}</h3>
                  <RouterLink
                    :to="getSectionPath(block.slug, section.id)"
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
