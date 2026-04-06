<script setup lang="ts">
const html = `<p>Tanto si trabajamos páginas web con varios idiomas o tan solo aparecen términos de otra lengua, deberemos&nbsp;<b>marcar siempre el idioma al que pertenece cada parte del texto</b>. Esto es de vital importancia debido a que los lectores de pantalla que utilizan por ejemplo, las personas ciegas, necesitan conocer el idioma del texto para realizar una correcta pronunciación.</p>
<p>Es el caso, también, de los buscadores como Google, que necesitan saber el idioma de la página para una mejor compresión e indexación de los contenidos.</p>
<p>Pongamos el ejemplo de que escribiendo un texto en castellano, introducimos la palabra People, para referirnos a la revista con dicho nombre. Si no indicamos de una manera correcta que ese texto está en inglés, el lector de pantalla pronunciará 'people' mientras que, si lo hemos marcado correctamente en su idioma, en este caso el inglés, el lector de pantalla pronunciará 'pipol'.</p>
<p>A continuación, veremos como realizar esta tarea de varias formas y con diferente alcance en Word.</p>
<p>Establecer el idioma por defecto de una página web</p>
<p>Para especificar los idiomas en HTML5 disponemos del atributo Lang, que se puede aplicar a cualquier etiqueta. En la etiqueta debemos pasarle el código del idioma o el locale, por ejmplo es-ES para español de España.</p>
<p>Para indicar que el contenido de la web es en español, escribiríamos:</p>
<pre class="course-code"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=”es”&gt;
&lt;head&gt;..&lt;/head&gt;
&lt;body&gt;...&lt;/body&gt;
&lt;/html&gt;</code></pre>
<p>Establecer el idioma por defecto en una parte de la página web</p>
<p>Para marcar que un fragmento de texto está en otro idioma, lo hacemos directamente en el texto deseado. Por ejemplo marcando la palabra “People” como palabra inglesa:</p>
<pre class="course-code"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=”es”&gt;
&lt;head&gt;..&lt;/head&gt;
&lt;body&gt;
&lt;p&gt;Gente en inglés es &lt;span <b>lang=”en”</b>&gt;People&lt;/span&gt;&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>`
</script>

<template>
  <div v-html="html" />
</template>
