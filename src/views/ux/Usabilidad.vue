<script setup lang="ts">
const html = `<p>La usabilidad se refiere cómo de <b>fácil, eficiente y satisfactoria</b> es la interacción del usuario con un sitio web o aplicación. Una interfaz usable permite al usuario lograr sus objetivos con <b>rapidez, sin errores ni frustraciones</b>.</p>
<p>Principios clave de la usabilidad:</p>
<ul>
<li>Facilidad de aprendizaje: El usuario entiende rápidamente cómo usar el sistema.</li>
<li>Eficiencia: Una vez aprendido, el sistema permite realizar tareas rápidamente.</li>
<li>Memorabilidad: El usuario puede recordar cómo usarlo tras un tiempo sin utilizarlo.</li>
<li>Bajo índice de errores: Pocos errores y fáciles de corregir.</li>
<li>Satisfacción: El uso del sistema resulta agradable.</li>
</ul>`
</script>

<template>
  <div v-html="html" />
</template>
