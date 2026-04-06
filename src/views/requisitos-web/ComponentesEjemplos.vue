<script setup lang="ts">
const html = `<p>Como hemos visto en el apartado anterior, crear componentes interactivos accesibles tiene una gran complejidad. En nuestro caso, tenemos la suerte de utilizar la librería Bootstrap, que proporciona unos componentes muy accesibles desde la base.</p>
<p>En el repositorio de GitHub del curso se puede consultar el fichero componentes.html con ejemplos de cuadros modales, acordeones, desplegables, pestañas, etc.</p>`
</script>

<template>
  <div v-html="html" />
</template>
