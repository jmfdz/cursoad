<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import CourseBlockView from '../components/CourseBlockView.vue'

const route = useRoute()
const slug = computed(() => route.params.blockSlug as string)
</script>

<template>
  <CourseBlockView :slug="slug" />
</template>
