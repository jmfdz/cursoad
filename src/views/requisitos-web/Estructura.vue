<script setup lang="ts">
const html = `<p>Debemos considerar que cada página web es la suma de diferentes elementos, que cada uno tiene una relación y a su vez se relacionan entre sí. Esto es, un documento cuenta con listas ordenadas, párrafos, encabezados, tablas y muchos más tipos de elementos que definen la estructura del mismo.</p>
<p>Para estructurar nuestra página web de manera correcta debemos dotar de semántica a los elementos que lo componen y de esta manera trasmitirán aparte del contenido, su significado y relación con los demás elementos.</p>
<p>Pongamos un ejemplo de lista con los colores corporativos UA, podemos hacerla escribiendo en cada línea:</p>
<pre class="course-code"><code>&lt;p&gt;1. Azul&lt;/p&gt;
&lt;p&gt;2. Naranja&lt;/p&gt;
&lt;p&gt;3. Gris&lt;/p&gt;</code></pre>
<p>El problema es que estaremos simulando una lista, cuando en realidad son tres párrafos. Sin embargo, si utilizamos una lista ordenada, ni si quiera necesitamos escribir los números:</p>
<pre class="course-code"><code>&lt;ol&gt;
&lt;li&gt;Azul&lt;/li&gt;
&lt;li&gt;Naranja&lt;/li&gt;
&lt;li&gt;Gris&lt;/li&gt;
&lt;/ol&gt;</code></pre>
<p>Utilizando los elementos de lista sí estaremos dotando al elemento de semántica, y un lector de pantallas para personas ciegas avisará, antes de leer los elementos, que es una lista.</p>
<p>Otra mala práctica es crear títulos cambiando el aspecto visual, por ejemplo a un párrafo para hacerlo más grande y que visualmente parezca un título en lugar de utilizar las etiquetas de encabezado (h1, h2, h3…)</p>
<p>En definitiva, y como hemos visto en este apartado, nunca debemos simular elementos y deberemos crearlos de la forma correcta para que todos los elementos tengan un significado más allá del contenido que contienen.</p>`
</script>

<template>
  <div v-html="html" />
</template>
