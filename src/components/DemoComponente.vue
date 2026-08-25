<script setup lang="ts">
withDefaults(
  defineProps<{
    /** Qué se está demostrando, para dar nombre accesible a la zona de pruebas. */
    label: string
    /** Texto breve bajo el ejemplo, para señalar qué conviene probar con el teclado. */
    prueba?: string
  }>(),
  { prueba: undefined },
)
</script>

<template>
  <div class="demo-componente rounded-4 border bg-white mb-4">
    <div class="demo-cabecera border-bottom px-3 py-2">
      <span class="demo-etiqueta">Ejemplo en vivo</span>
    </div>

    <div class="p-3 p-lg-4" :aria-label="`Ejemplo interactivo: ${label}`" role="group">
      <slot name="demo" />
    </div>

    <p v-if="prueba" class="demo-prueba border-top px-3 py-2 mb-0">
      <strong>Pruébalo:</strong> {{ prueba }}
    </p>

    <div class="demo-cabecera border-top px-3 py-2">
      <span class="demo-etiqueta">Código de este ejemplo</span>
    </div>
    <div class="px-3 pb-3">
      <slot name="codigo" />
    </div>
  </div>
</template>

<style scoped>
.demo-cabecera {
  background: var(--bs-tertiary-bg, #f1f5f8);
}

.demo-etiqueta {
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.demo-prueba {
  background: var(--bs-tertiary-bg, #f1f5f8);
  font-size: 0.95rem;
}

/* El menú desplegable y el tooltip deben poder salirse de la caja. */
.demo-componente {
  overflow: visible;
}
</style>
