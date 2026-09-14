<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

const contenedor = ref<HTMLElement>()
const abierto = ref(false)
let observador: MutationObserver | undefined

function devolverFoco() {
  contenedor.value?.querySelector<HTMLButtonElement>('button')?.focus()
}

onMounted(() => {
  // El panel lo genera el script institucional fuera de Vue.
  observador = new MutationObserver(() => {
    const panel = contenedor.value?.querySelector<HTMLElement>('#optionsPanel')
    const estabaAbierto = abierto.value
    abierto.value = !!panel && panel.style.display !== 'none'
    const encabezado = panel?.querySelector<HTMLElement>('#panelHeader')
    if (encabezado) encabezado.tabIndex = -1
    if (abierto.value && !estabaAbierto) encabezado?.focus()
    if (!abierto.value && estabaAbierto && panel?.contains(document.activeElement)) {
      devolverFoco()
    }
  })
  if (contenedor.value) {
    observador.observe(contenedor.value, {
      childList: true, subtree: true, attributes: true, attributeFilter: ['style'],
    })
  }
})

onBeforeUnmount(() => observador?.disconnect())
</script>

<template>
  <div ref="contenedor" class="accesibilidad-ua me-auto flex-shrink-0" @keydown.esc="devolverFoco">
    <button
      id="pluginAccesibilidad"
      class="btn btn-sm text-white px-1"
      type="button"
      aria-label="Opciones de accesibilidad"
      title="Opciones de accesibilidad"
      aria-controls="optionsPanel"
      :aria-expanded="abierto"
    >
      <i class="bi bi-universal-access-circle fs-5" aria-hidden="true"></i>
    </button>
  </div>
</template>

<style scoped>
.accesibilidad-ua {
  position: relative;
  z-index: 1030;
}

/* El script calcula coordenadas de documento; aquí el panel cuelga del botón. */
.accesibilidad-ua :deep(#optionsPanel) {
  top: calc(100% + 0.25rem) !important;
  left: 0 !important;
  width: 17rem;
  max-width: calc(100vw - 1.5rem);
  max-height: calc(100dvh - 4rem);
}
</style>
