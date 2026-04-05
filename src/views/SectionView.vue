<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import CourseSectionView from '../components/CourseSectionView.vue'

const route = useRoute()
const blockSlug = computed(() => route.params.blockSlug as string)
const sectionId = computed(() => route.params.sectionId as string)
</script>

<template>
  <CourseSectionView :block-slug="blockSlug" :section-id="sectionId" />
</template>
