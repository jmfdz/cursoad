<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { buscarEnIndice } from '../busqueda'
import type { EntradaBusqueda } from '../busqueda'

const route = useRoute()
const indice = ref<EntradaBusqueda[]>([])
const estado = ref<'cargando' | 'listo' | 'error'>('cargando')
const consulta = computed(() => typeof route.query.q === 'string' ? route.query.q.trim() : '')
const resultados = computed(() => buscarEnIndice(indice.value, consulta.value))
const titulo = ref<HTMLHeadingElement | null>(null)

async function cargar() {
  estado.value = 'cargando'
  try {
    indice.value = (await import('../generated/indice-busqueda.json')).default
    estado.value = 'listo'
  } catch {
    estado.value = 'error'
  }
}
onMounted(cargar)
watch(consulta, () => titulo.value?.focus(), { flush: 'post' })
</script>

<template>
  <div>
    <h1 ref="titulo" tabindex="-1">Buscar en el curso</h1>
    <div role="status" aria-atomic="true">
      <p v-if="!consulta">Escribe una palabra o frase en el buscador de la franja superior.</p>
      <p v-else-if="estado === 'cargando'">Buscando en el curso…</p>
      <p v-else-if="estado === 'error'">No se ha podido cargar el buscador. Vuelve a intentarlo.</p>
      <p v-else-if="resultados.length">{{ resultados.length }} {{ resultados.length === 1 ? 'apartado encontrado' : 'apartados encontrados' }} para «{{ consulta }}».</p>
      <p v-else>No hay resultados para «{{ consulta }}». Prueba con otras palabras o una búsqueda más corta.</p>
    </div>
    <button v-if="estado === 'error'" class="btn btn-primary" type="button" @click="cargar">Reintentar</button>
    <ul v-if="consulta && estado === 'listo' && resultados.length" class="list-unstyled resultados-busqueda">
      <li v-for="resultado in resultados" :key="resultado.ruta" class="py-4 border-bottom">
        <p class="small text-secondary mb-1">{{ resultado.bloque }}</p>
        <h2 class="h4"><RouterLink :to="resultado.ruta">{{ resultado.titulo }}</RouterLink></h2>
        <p class="mb-0">{{ resultado.fragmento }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.resultados-busqueda { max-width: 75ch; overflow-wrap: anywhere; }
</style>
