<script setup lang="ts">
import type { SubtituloApartado } from '../curso'

defineProps<{
  subheadings: SubtituloApartado[]
  currentHash: string
}>()
</script>

<template>
  <ul class="nav nav-pills flex-column gap-1">
    <li v-for="heading in subheadings" :key="heading.id" class="nav-item">
      <RouterLink
        :to="{ hash: `#${heading.id}` }"
        class="nav-link px-2 py-1"
        :class="{
          active: currentHash === heading.id,
          'ps-4': heading.level === 3,
        }"
      >
        {{ heading.title }}
      </RouterLink>
    </li>
  </ul>
</template>
