<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const consulta = ref('')
watch(() => route.query.q, (q) => {
  consulta.value = typeof q === 'string' ? q : ''
}, { immediate: true })

function buscar() {
  void router.push({ name: 'buscar', query: { q: consulta.value.trim() } })
}
</script>

<template>
  <form class="buscador-curso" role="search" aria-label="Buscar en el curso" @submit.prevent="buscar">
    <label for="buscar-curso" class="visually-hidden">Buscar en el curso</label>
    <div class="input-group input-group-sm buscador-controles">
      <input id="buscar-curso" v-model="consulta" name="q" type="search"
        class="form-control" maxlength="200" placeholder="Palabra o frase">
      <button class="btn btn-light" type="submit" aria-label="Buscar">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2" stroke-linecap="round" aria-hidden="true" focusable="false">
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="m16 16 5 5" />
        </svg>
      </button>
    </div>
  </form>
</template>

<style scoped>
.buscador-curso {
  padding-block: 0.25rem;
}
.buscador-controles { flex-wrap: nowrap; }
.buscador-controles input { min-width: 0; }
@media (max-width: 575.98px) {
  .buscador-curso { order: 3; width: 100%; }
}
</style>
