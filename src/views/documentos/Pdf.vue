<script setup lang="ts">
const html = `<p>Un PDF accesible necesita etiquetas estructurales, idioma, título, orden de lectura correcto, texto alternativo, enlaces identificables y formularios navegables por teclado cuando existan.</p>
<p>La accesibilidad del PDF depende en gran parte del documento de origen, por lo que la preparación previa en Word, PowerPoint u otra herramienta resulta clave.</p>`
</script>

<template>
  <div v-html="html" />
</template>
