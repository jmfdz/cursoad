<script setup lang="ts">
const html = `<p>Las tablas son para estructurar datos, NO para maquetar contenido. Para eso están los div.</p>
<p>No hay que dividir ni combinar celdas. Por lo que las tablas deben ser uniformes.</p>
<p>Deben tener un título que las titule con la etiqueta &lt;caption&gt;. Por defecto, la etiqueta caption se muestra visualmente debajo de la tabla, pero es mejor tocar el CSS para que el título salga encima de la tabla.</p>
<p>Debe diferenciarse claramente cuáles son los encabezados de fila o columna, a poder ser con contraste más alto.</p>
<p>Veamos un ejemplo de tabla:</p>
<pre class="course-code"><code>&lt;table class=”table”&gt;
&lt;caption&gt;Notas de la asignatura de accesibilidad&lt;/caption&gt;
&lt;thead&gt;
&lt;!—Cabecera en azul con texto blanco para resaltar --&gt;
&lt;tr style=”background:blue; color:white;”&gt;
&lt;th&gt;Nombre&lt;/th&gt;
&lt;th&gt;Nota&lt;/th&gt;
&lt;/tr&gt;
&lt;/thead&gt;
&lt;tbody&gt;
&lt;tr&gt;
&lt;th&gt;Alberto&lt;/th&gt;
&lt;th&gt;8&lt;/th&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;th&gt;Alba&lt;/th&gt;
&lt;th&gt;9&lt;/th&gt;
&lt;/tr&gt;
&lt;/tbody&gt;
&lt;/table&gt;</code></pre>
<p>Si la tabla es muy ancha, se recomienda hacerla adaptable con la clase de Bootstrap table-responsive para poder desplazarnos con scroll horizontal en dispositivos móviles:</p>
<pre class="course-code"><code>&lt;div class=”table-responsive”&gt;
&lt;table&gt;</code></pre>
<p>…</p>
<pre class="course-code"><code>&lt;/table&gt;
&lt;/div&gt;</code></pre>`
</script>

<template>
  <div v-html="html" />
</template>
