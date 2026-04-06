<script setup lang="ts">
const html = `<p>Para asegurar de que nuestros diseños son usables y tienen una buena experiencia de usuario, hay diferentes técnicas y herramientas que podemos utilizar:</p>
<ul>
<li><b>Tests de usuario</b>: Observar cómo personas reales interactúan con el sitio.</li>
<li><b>Análisis de tareas</b>: Identificar los pasos necesarios para completar una tarea.</li>
<li><b>Prototipos</b>: Diseño preliminar para probar la estructura antes de desarrollar.</li>
<li><b>Mapas de calor: </b>Visualizar dónde hacen clic y se enfocan los usuarios.</li>
<li><b>Encuestas y entrevistas</b>: Recopilar opiniones y emociones.</li>
<li><b>A/B testing</b>: Comparar dos versiones para ver cuál rinde mejor.</li>
<li><b>Personas</b>: Perfiles ficticios que representan usuarios reales para diseñar pensando en sus necesidades.</li>
</ul>
<p>Usar todas las técnias y herramientas es muy complicado, a no ser que seamos corporaciones muy grandes con equipos específicos. Por ejemplo en empresas como Spotify hay equipos de decenas de personas sólo para estudiar la mejor ubicación de botones, la mejor forma de crear un formulario o simular perfiles de personas para mejorar el proceso de suscripción a su servicio.</p>`
</script>

<template>
  <div v-html="html" />
</template>
