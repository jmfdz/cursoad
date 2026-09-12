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
    <label for="buscar-curso" class="fw-semibold">Buscar en el curso</label>
    <div class="d-flex gap-2 buscador-controles">
      <input id="buscar-curso" v-model="consulta" name="q" type="search"
        class="form-control form-control-sm" maxlength="200" placeholder="Palabra o frase">
      <button class="btn btn-sm btn-light" type="submit">Buscar</button>
    </div>
  </form>
</template>

<style scoped>
.buscador-curso {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  padding-block: 0.25rem;
}
.buscador-controles { flex: 1; min-width: 0; }
.buscador-controles input { min-width: 0; }
@media (max-width: 575.98px) {
  .buscador-curso { order: 3; width: 100%; }
  .buscador-curso label { width: 100%; }
}
</style>
