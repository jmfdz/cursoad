<script setup lang="ts">
import { courseBlocks, courseTitle, getSectionPath } from '../course'
</script>

<template>
  <section class="d-flex flex-column gap-4">
    <div class="card border-0 shadow-sm overflow-hidden">
      <div class="row g-0">
        <div class="col-12">
          <div class="card-body p-4 p-md-5">
            <h1 class="mb-3">{{ courseTitle }}</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="row g-4">
      <div v-for="block in courseBlocks" :key="block.slug" class="col-md-6">
        <article class="card h-100 border-0 shadow-sm">
          <div class="card-body p-4 d-flex flex-column">
            <h2 class="mb-3">{{ block.title }}</h2>

            <p class="mb-4">{{ block.homeSummary ?? block.menuDescription }}</p>

            <RouterLink
              :to="getSectionPath(block.slug, block.sections[0].id)"
              class="btn btn-primary mt-auto align-self-start d-inline-flex text-white"
              :aria-label="`Ir al bloque ${block.shortTitle}`"
            >
              {{ `Ir a ${block.shortTitle}` }}
            </RouterLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
