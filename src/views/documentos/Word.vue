<script setup lang="ts">
const html = `<p>Los documentos Word deben construirse con estructura real y no solo con formato visual. Es necesario usar estilos de encabezado, listas, tablas correctamente marcadas, texto alternativo en imágenes e idioma definido.</p>
<p>También conviene revisar el orden de lectura, el contraste, el significado de los enlaces y la correcta exportación posterior si el documento se transformará en PDF.</p>`
</script>

<template>
  <div v-html="html" />
</template>
