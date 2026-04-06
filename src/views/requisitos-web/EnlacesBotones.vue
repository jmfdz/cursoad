<script setup lang="ts">
const html = `<p>Los enlaces y botones deben transmitir claramente qué ocurrirá cuando pulsemos en ellos. Deben ser cortos y concisos, por ejemplo: “Procesar imagen”, “Descargar documento”, etc.</p>
<p>No podemos utilizar como texto de enlaces palabras como “aquí”, “pulsa aquí”, “enlace”, etc.</p>
<p>Si van a provocar un cambio de contesto deberíamos indicarlo en el title, por ejemplo, si es un enlace de YouTube, ponerle: title=”Se abrirá en YouTube”.</p>
<p>Si el enlace descargará un fichero, por ejemplo un documento de Word o PowerPoint, es altamente aconsejable incluir la extensión y el tamaño del enlace, por ejemplo para un vídeo MP4:</p>
<pre class="course-code"><code>&lt;a href=”video.mp4” download=”Víde de presentación”&gt;</code></pre>
<p>Vídeo de presentación (MP4 300MB)</p>
<pre class="course-code"><code>&lt;/a&gt;</code></pre>
<p>De esta forma, estamos alertando al usuario del formato del documento, que dependiendo del dispositivo que esté usando, no tenga u nvisor para ese formato y el tamaño, que si es muy grande, si estamos fuera de casa con datos, seguramente deseemos descargarlo cuando estemos en casa con conexión Wi-Fi.</p>
<p>Los enlaces y botones no pueden estar vacíos, siempre deben tener un texto, ya sea visible o no. En este sentido, si el enlace o botón solo incluye una imagen o icono, deben tener texto alternativo o aria-label.</p>
<p>Por último, en aplicaciones que tienen un alto uso de peticiones Ajax, debemos considerar que los botones deben utilizarse en estos casos y utilizar siempre botones para recargar páginas o procesar información. Los enlaces, sin embargo, están pensados para probar cambio de página.</p>`
</script>

<template>
  <div v-html="html" />
</template>
