<script setup lang="ts">
const html = `<p>Todos los elementos no textuales como imágenes, gráficos, fórmulas matemáticas, cuadros de texto, etc. Deben disponer de un texto alternativo que describa el contenido o lo que queremos transmitir con ellos, ya que estos elementos no son accesibles mediante los productos de apoyo que utilizan personas con discapacidad.</p>
<p>Debemos introducir una alternativa textual a la imagen, como si estuviésemos describiendo la imagen a otra persona, incluso aquello que nos transmite esa imagen.</p>
<p>En el caso de que un elemento sea meramente decorativo, se deberá dejar la etiqueta de texto alternativo vacía.&nbsp;</p>
<p>Para incluir la descripción de una imagen en una web debemos incluir el atributo alt, que es obligatorio. Veamos dos ejemplos, una imagen con descripción y otra decorativa:</p>
<pre class="course-code"><code>&lt;img src=”mano-ua.png” alt=”Estatua de una mano que sostiene un lápiz apuntando al cielo es un símbolo de la libertad de expresión de la UA”/&gt;
&lt;!— Imagen decorativa --&gt;
&lt;img src=”fondo-decorativo.png” alt=””/&gt;</code></pre>
<p>Si el texto alternativo es útil para todo el mundo, deberíamos incluirlo también con el atributo title:</p>
<pre class="course-code"><code>&lt;img src=”mano-ua.png” alt=”Estatua de una mano que sostiene un lápiz apuntando al cielo es un símbolo de la libertad de expresión de la UA” title=”Estatua de una mano que sostiene un lápiz apuntando al cielo es un símbolo de la libertad de expresión de la UA” /&gt;</code></pre>
<p>No se deben superar los 150 caracteres en el texto alternativo. Si la descripción es muy larga, debemos valorar si incluirla dentro del contenido de la página.</p>
<p>Otra forma de incluir una descripción larga es mediante la etiqueta figcaption dentro de figure en HTML5, veamos un ejemplo:</p>
<pre class="course-code"><code>&lt;figure&gt;
&lt;img src=”mano-ua.png” alt=”Estatua de una mano que sostiene un lápiz apuntando al cielo en el campus de la UA” /&gt;
&lt;figcaption&gt;</code></pre>
<p>Descripción larga</p>
<pre class="course-code"><code>&lt;/figcaption&gt;
&lt;/figure&gt;</code></pre>
<p>Iconos</p>
<p>Los iconos, como otro elemento no textual, debe describirse para proporcionar indicaciones claras de qué propósito tiene ya sea incluyéndolo con una etiqueta &lt;i&gt; &lt;svg&gt; o &lt;img&gt;.</p>
<p>En este caso no hace falta describir, por ejemplo “icono de un lápiz” si el icono tiene la edición de editar, por lo que su descripción será “Editar”.</p>
<p>En el caso de las imágenes es fácil, porque contamos con el atributo alt, pero, ¿y en los iconos? No se puede incluir la etiqeuta alt, entra en juego las atributos ARIA, concretamente veremos el atributo aria-label.</p>
<p>Aria-label permite darle una descripción accesible a cualquier elemento, sobre-escribiendo el texto que haya dentro. Pero además, debe incluirse el atributo title para quién use un ratón pueda descubrir qué propósito tiene.</p>
<p>Veamos un ejemplo de un icono de editar:</p>
<pre class="course-code"><code>&lt;i class=”icon icon-edit”
aria-label=”Editar” title=”Editar”&gt;&lt;/i&gt;</code></pre>
<p>De esta forma, un lector de pantalla, al llegar al elemento leerá “Editar” y si pasamos el ratón por encima podremos ver “Editar”.</p>
<p>En ningún caso podemos dejar solamente el atributo title y ninguna información más, ya que no todos los lectores de pantalla leen ese contenido. Además, obtendremos en los validadores de accesibildiad un error de elemento vacío.</p>`
</script>

<template>
  <div v-html="html" />
</template>
