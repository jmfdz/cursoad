<script setup lang="ts">
import type { SectionSubheading } from './courseContent'

defineProps<{
  subheadings: SectionSubheading[]
  currentHash: string
}>()
</script>

<template>
  <div class="nav nav-pills flex-column gap-1">
    <RouterLink
      v-for="heading in subheadings"
      :key="heading.id"
      :to="{ hash: `#${heading.id}` }"
      class="nav-link px-2 py-1"
      :class="{ active: currentHash === heading.id }"
    >
      {{ heading.title }}
    </RouterLink>
  </div>
</template>
