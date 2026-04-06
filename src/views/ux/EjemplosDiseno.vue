<script setup lang="ts">
const html = `<p>En el repositorio de GitHub del curso, se mostraron diferentes ejemplos de diseños que van más allá de la típica tabla de administración o formulario que ocupa toda la pantalla.</p>
<p>En general, la idea es aprovechar siempre la pantalla, utilizando varias secciones.</p>
<p>Ejemplos de diseños vistos:</p>
<ul>
<li>Utilizar 2 columnas en escritorio y 1 en móvil. En la parte izquierda tenemos la interacción y en la derecha los resultados:</li>
</ul>
<ul>
<li>Formulario en una columna que ocupa menos ancho para que los input no sean tan largos y un panel de más información:</li>
</ul>
<ul>
<li>Formulario centrado en la pantalla para que ocupen menos ancho los campos, al estilo Google / Microsoft Forms:</li>
</ul>
<ul>
<li>Formulario o asistente por pasos:</li>
</ul>
<ul>
<li>Con paneles tipo Trello para las solicitudes uA:</li>
</ul>
<ul>
<li>¿Cómo podría ser Vértice?</li>
</ul>
<ul>
<li>Se proporcionaron hojas de estilo para usar los colores corporativos y mejorar el contraste de Bootstrap 3 y 4 y ser igual de accesibles que Bootstrap 5.</li>
<li>Se proporciona una hoja de estilo que maqueta con colores de la UA los diferentes componetes, así como bordes y espaciados de formularios.</li>
</ul>`
</script>

<template>
  <div v-html="html" />
</template>
