<script setup lang="ts">
const html = `<p>Siguiendo con la función semántica de las etiquetas HTML, deberíamos especificar un esqueleto de nuestra página web que separe las diferentes secciones y elementos de la página.</p>
<p>Es imprescindible al menos, de incluir las secciones de cabecera y contenido principal con las etiquetas header y main. También se pueden incluir otras etiquetas como footer para el pie de página.</p>
<p>Además, si utilizamos menús de navegación, también deberíamos utilizar find</p>
<p>etiquetas nav para especificar que es un menú de navegación.</p>
<p>Título de página</p>
<p>Otro requisito de accesibilidad es que todo documento web tenga definido un título con la etiqueta &lt;title&gt; dentro del &lt;head&gt;. Este título se aconseja que:</p>
<ul>
<li>Sea descriptivo y conciso: Para no tener que leer mucho contenido</li>
<li>Ser único en las diferentes páginas del sitio: Para saber en qué página estamos</li>
<li>Coincida con el h1 de la página: Para evitar confusiones</li>
</ul>
<p>Pongamos el ejemplo de una web en la que tiene el mismo título en las dos páginas: Una es la página de inicio de la UA y la otra, la de Actualidad Universitaria. ¿Qué ocurre si las dos tienen el mismo title “Universidad de Alicante”?</p>
<p>Veamos una captura de pantalla de las pestañas de un navegador, ahí se puede leer el title, al ser diferentes, podremos diferenciarlas, en otro caso, no sabremos en qué pestaña está cada contenido:</p>
<p>Veamos un ejemplo completo con título, cabecera, contenido principal y pie de página.</p>
<pre class="course-code"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=”es”&gt;
&lt;head&gt;
&lt;title&gt;Bienvenido/a a la UA&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;header&gt;
&lt;a href=”/”&gt;
&lt;img src=”imagen.png” alt=”Universidad de Alicante” /&gt;
&lt;/a&gt;
&lt;nav&gt;
&lt;ul&gt;
&lt;li&gt;&lt;a href=”estudiantes.html”&gt;Estudiantes&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href=”pdi.html”&gt;PDI&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href=”ptgas.html”&gt;PTGAS&lt;a&gt;&lt;/li&gt;</code></pre>
<pre class="course-code"><code>&lt;/ul&gt;
&lt;/nav&gt;
&lt;main&gt;
&lt;h1&gt;Bienvenido/a a la UA&lt;/h1&gt;
&lt;!—Contenido de la página --&gt;
&lt;/main&gt;
&lt;footer&gt;
&lt;p&gt;Universidad de Alicante 2025&lt;/p&gt;
&lt;/footer&gt;
&lt;/header&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>`
</script>

<template>
  <div v-html="html" />
</template>
