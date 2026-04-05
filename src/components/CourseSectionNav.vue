<script setup lang="ts">
import type { Block, Section } from '../content/course'
import type { SectionSubheading } from './courseContent'
import { getSectionPath } from '../content/course'

defineProps<{
  block: Block
  section: Section
  subheadings: SectionSubheading[]
  currentHash: string
}>()
</script>

<template>
  <div class="nav nav-pills flex-column gap-2">
    <div v-for="item in block.sections" :key="item.id">
      <RouterLink
        :to="getSectionPath(block.slug, item.id)"
        class="nav-link"
        :class="{ active: item.id === section.id }"
      >
        {{ item.title }}
      </RouterLink>

      <div v-if="item.id === section.id && subheadings.length" class="mt-2 ms-3">
        <div class="nav nav-pills flex-column gap-1">
          <RouterLink
            v-for="heading in subheadings"
            :key="heading.id"
            :to="{ path: getSectionPath(block.slug, item.id), hash: `#${heading.id}` }"
            class="nav-link px-2 py-1"
            :class="{ active: currentHash === heading.id }"
          >
            {{ heading.title }}
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
