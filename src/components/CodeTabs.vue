<script setup lang="ts">
import { nextTick, ref, useId, useSlots } from 'vue'

type TipoPestana = 'js' | 'vue' | 'preview'

withDefaults(defineProps<{ label?: string }>(), {
  label: 'Alternativas del ejemplo de código',
})

const idBase = `code-tabs-${useId().replace(/:/g, '')}`
const slots = useSlots()
const pestanaActiva = ref<TipoPestana>('vue')
const pestanaJs = ref<HTMLButtonElement | null>(null)
const pestanaVue = ref<HTMLButtonElement | null>(null)
const pestanaPreview = ref<HTMLButtonElement | null>(null)

function activarPestana(tipo: TipoPestana, moverFoco = false) {
  pestanaActiva.value = tipo

  if (moverFoco) {
    nextTick(() => {
      const pestanas = {
        js: pestanaJs.value,
        vue: pestanaVue.value,
        preview: pestanaPreview.value,
      }
      const pestana = pestanas[tipo]
      pestana?.focus()
    })
  }
}

function manejarTeclado(evento: KeyboardEvent, actual: TipoPestana) {
  const orden: TipoPestana[] = slots.preview ? ['js', 'vue', 'preview'] : ['js', 'vue']
  const indiceActual = orden.indexOf(actual)
  let siguiente: TipoPestana | undefined

  if (evento.key === 'ArrowRight') {
    siguiente = orden[(indiceActual + 1) % orden.length]
  } else if (evento.key === 'ArrowLeft') {
    siguiente = orden[(indiceActual - 1 + orden.length) % orden.length]
  } else if (evento.key === 'Home') {
    siguiente = orden[0]
  } else if (evento.key === 'End') {
    siguiente = orden[orden.length - 1]
  }

  if (!siguiente) return

  evento.preventDefault()
  activarPestana(siguiente, true)
}
</script>

<template>
  <div class="mb-4">
    <div class="nav nav-tabs" role="tablist" :aria-label="label">
      <button
        :id="`${idBase}-tab-js`"
        ref="pestanaJs"
        type="button"
        class="nav-link"
        :class="{ active: pestanaActiva === 'js' }"
        role="tab"
        :aria-selected="pestanaActiva === 'js'"
        :aria-controls="`${idBase}-panel-js`"
        :tabindex="pestanaActiva === 'js' ? 0 : -1"
        @click="activarPestana('js')"
        @keydown="manejarTeclado($event, 'js')"
      >
        JavaScript
      </button>
      <button
        :id="`${idBase}-tab-vue`"
        ref="pestanaVue"
        type="button"
        class="nav-link"
        :class="{ active: pestanaActiva === 'vue' }"
        role="tab"
        :aria-selected="pestanaActiva === 'vue'"
        :aria-controls="`${idBase}-panel-vue`"
        :tabindex="pestanaActiva === 'vue' ? 0 : -1"
        @click="activarPestana('vue')"
        @keydown="manejarTeclado($event, 'vue')"
      >
        Vue.js + TypeScript
      </button>
      <button
        v-if="slots.preview"
        :id="`${idBase}-tab-preview`"
        ref="pestanaPreview"
        type="button"
        class="nav-link"
        :class="{ active: pestanaActiva === 'preview' }"
        role="tab"
        :aria-selected="pestanaActiva === 'preview'"
        :aria-controls="`${idBase}-panel-preview`"
        :tabindex="pestanaActiva === 'preview' ? 0 : -1"
        @click="activarPestana('preview')"
        @keydown="manejarTeclado($event, 'preview')"
      >
        Previsualización
      </button>
    </div>

    <div
      v-show="pestanaActiva === 'js'"
      :id="`${idBase}-panel-js`"
      class="border border-top-0 rounded-bottom p-3"
      role="tabpanel"
      :aria-labelledby="`${idBase}-tab-js`"
      tabindex="0"
    >
      <slot name="js" />
    </div>
    <div
      v-show="pestanaActiva === 'vue'"
      :id="`${idBase}-panel-vue`"
      class="border border-top-0 rounded-bottom p-3"
      role="tabpanel"
      :aria-labelledby="`${idBase}-tab-vue`"
      tabindex="0"
    >
      <slot name="vue" />
    </div>
    <div
      v-if="slots.preview"
      v-show="pestanaActiva === 'preview'"
      :id="`${idBase}-panel-preview`"
      class="border border-top-0 rounded-bottom p-3"
      role="tabpanel"
      :aria-labelledby="`${idBase}-tab-preview`"
      tabindex="0"
    >
      <slot name="preview" />
    </div>
  </div>
</template>
