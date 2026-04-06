<script setup lang="ts">
const html = `<p>Los encabezados son uno de los elementos más importantes para darle una estructura coherente a una página web.</p>
<p>Hablamos de las etiquetas h1, h2, h3, h5, h5 y h6. Debe fomentarse su uso en lugar de otros elementos para marcar las diferentes secciones de una web.</p>
<p>Como comentábamos en la sección anterior, toda página debe tener un h1 único dentro de todas las páginas web y a partir de ahí, deberíamos incluir diferentes apartados usando los siguientes niveles, por ejemplo, el segundo nivel, h2.</p>
<p>No se deben saltar niveles, es decir, si tenemos un h1, no podemos poner como siguiente nivel un h3.</p>
<p>Tampoco se deben crear encabezados consecutivos del mismo nivel y que no tengan elementos entre ellos, pues su función es encabezar una sección, por ejemplo,estaría mal:</p>
<pre class="course-code"><code>&lt;h1&gt;Web UA&lt;/h1&gt;
&lt;p&gt;Descubre la web de la UA…&lt;/p&gt;
&lt;h2&gt;Noticias&lt;/h2&gt;
&lt;h2&gt;Eventos&lt;/h2&gt;</code></pre>
<p>Ahora, veamos una estructura de la web de la UA, con la sección de noticias y eventos de forma correcta:</p>
<pre class="course-code"><code>&lt;h1&gt;Web UA&lt;/h1&gt;
&lt;p&gt;Descubre la web de la UA…&lt;/p&gt;
&lt;h2&gt;Noticias&lt;/h2&gt;
&lt;h3&gt;Enlace a noticia 1&lt;/h3&gt;
&lt;p&gt;Descripción noticia 1&lt;/p&gt;
&lt;h3&gt;Enlace a noticia 2&lt;/h3&gt;
&lt;p&gt;Descripción noticia 2&lt;/p&gt;
&lt;h3&gt;Enlace a noticia 3&lt;/h3&gt;
&lt;p&gt;Descripción noticia 3&lt;/p&gt;</code></pre>
<pre class="course-code"><code>&lt;h2&gt;Eventos&lt;/h2&gt;
&lt;ul&gt;
&lt;li&gt;Evento 1&lt;/li&gt;
&lt;li&gt;Evento 2&lt;/li&gt;
&lt;li&gt;Evento 3&lt;/li&gt;
&lt;/ul&gt;
&lt;h2&gt;La UA en Cifras&lt;/h2&gt;</code></pre>`
</script>

<template>
  <div v-html="html" />
</template>
