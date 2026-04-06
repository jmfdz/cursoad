<script setup lang="ts">
const html = `<p>Antes de comenzar a elaborar un contenido, debemos pensar en el tipo de personas a las que se dirige, las ideas más importantes&nbsp;a transmitir y&nbsp;su estructura.&nbsp;Para ello utilizaremos un <b>lenguaje&nbsp;sencillo</b>,&nbsp;prescindiendo de estructuras gramaticales complejas&nbsp;y usando frases cortas. El&nbsp;<b>mensaje</b>&nbsp;que queremos transmitir con nuestro texto debe ser&nbsp;<b>detectado&nbsp;de forma clara por los usuarios</b>.</p>
<p>Formato del texto</p>
<p>La tipografía utilizada es un elemento fundamental de nuestro documento. Es aconsejable utilizar fuentes de tipo San Serif, como, por ejemplo:&nbsp;<b>Arial o Verdana&nbsp;</b>ya que favorecen la legibilidad del texto y por tanto su comprensión por parte de varios colectivos de personas con discapacidad.</p>
<p>El término&nbsp;<b>“sans serif”</b>&nbsp;procede del francés y significa “sin remates".</p>
<p>Debemos utilizar tipos de fuentes que estén&nbsp;<b>presentes en la mayoría de Sistemas Operativos</b>, para garantizar así la interoperabilidad de nuestros contenidos.</p>
<p>En el caso de que utilicemos tipos de fuente específicos, como en el caso de la UA que utiliza en la nueva web Atkinson Hyperlegible Next y no está instalada en los sistemas por defecto, deberemos incluirla como fuente por ejemplo desde Google Fonts.</p>
<p>Veamos como definir la fuente con CSS para toda una página web:</p>
<pre class="course-code"><code>body {</code></pre>
<p>Font-family: Arial;</p>
<pre class="course-code"><code>}</code></pre>
<p>El<b>&nbsp;tamaño de la fuente</b>&nbsp;debe ser suficiente, no aconsejándose bajar de 12 puntos y recomendándose utilizar el tamaño de&nbsp;<b>14 puntos</b>.</p>
<p>En el desarrollo web debemos utilizar siempre <b>unidades relativas</b> para especificar el tamaño. De esta forma el contenido escalará de forma proporcional y se respetará la configuración que pueda tener el usuario.</p>
<p>En la mayoría de navegadores actuales el tamaño por defecto es de 16px, equivalente a 12 puntos o 1rem/1em.</p>
<p>Como hemos dicho, si quisiéramos cambiar el tamaño y subirlo a 14 puntos, serían aproximadamente 18px, pero especificando en unidades relativas serían 1.166rem/em.</p>
<p>Veamos como definir el tamaño para todo el contenido, en este caso debemos hacerlo sobre la etiqueta HTML:</p>
<pre class="course-code"><code>html {</code></pre>
<p>Font-size: 1.166rem; /* 14 puntos */</p>
<pre class="course-code"><code>}</code></pre>
<p>Si por ejemplo utilizamos una librería CSS como Bootstrap, al aplicar esta regla, todos los tamaños de encabezados, listas, etc., escalarán al mismo tiempo.</p>
<p>Por otro lado,&nbsp;<b>no es aconsejable abusar del texto en mayúsculas,&nbsp;</b>debido a que su legibilidad es más baja y además, en casos de usuarios de líneas braille como personas ciegas es menos cómoda la lectura de letras mayúsculas que minúsculas.</p>
<p>Por último, debemos evitar utilizar los estilos o etiquetas de énfasis &lt;em&gt; y el tachado &lt;s&gt;, ya que, al cambiar la forma del texto, dificulta mucho su lectura.</p>
<p>Formato de párrafo</p>
<p>Lo primero que tener en cuenta es que todo texto debe estar incluido en una etiqueta semántica, ya sean botones, enlaces, párrafos, encabezados, etc. Esto quiere decir que etiquetas de maquetación no deben tener texto directamente, ya que su función es maquetar contenido, no texto, veamos un ejemplo:</p>
<pre class="course-code"><code>&lt;div&gt;¡Hola mundo!&lt;/div&gt; &lt;!—Mal --&gt;
&lt;div&gt;&lt;p&gt;¡Hola mundo!&lt;/p&gt; &lt;/div&gt; &lt;!— Bien --&gt;</code></pre>
<p>Tampoco debemos utilizar las etiquetas &lt;br&gt; para incluir saltos de línea, ya que debemos estructurar el texto con párrafos, listas y otros elementos semánticos. En el caso de querer incluir márgenes, debemos realizarlos con reglas CSS.</p>
<p>Respecto a la&nbsp;<b>alineación del texto&nbsp;</b>debemos tener en cuenta una serie de consideraciones:</p>
<ul>
<li>Si pensamos centrar contenido , este debe ser corto y no ocupar más de un par de líneas, en caso contrario puede resultar más difícil su lectura.</li>
<li><b>No se debe justificar el texto del contenido a ambos lados de la pantalla</b>, este formato dificulta su lectura y por tanto, su legibilidad. Es el caso, por ejemplo, en personas con dislexia, puesto que al alinear el texto justificado a cada extremo del documento se crean una serie de 'ríos' en el contenido que impiden una fácil comprensión.</li>
</ul>
<p>&nbsp;</p>
<ul>
<li>Incluir un <b>interlineado </b>suficiente que mejore la lectura de las frases.  Vamos a poner a los párrafos del contenido un interlineado de 1,5 líneas y además, indicar que el texto debe estar alineado a la izquierda:</li>
</ul>
<pre class="course-code"><code>p {
line-height: 1.5;</code></pre>
<p>text-align: left; /* No usar justify y no abusar de center */</p>
<pre class="course-code"><code>}</code></pre>
<ul>
<li>Agregar un espaciado suficiente entre los diferentes bloques de texto (párrafos, elementos de lista…). Veamos un ejemplo para establecer un espaciado inferior después de cada párrafo:</li>
</ul>
<pre class="course-code"><code>p {</code></pre>
<p>margin-bottom: 1rem;</p>
<pre class="course-code"><code>}</code></pre>
<p>Texto en imágenes</p>
<p><b>No es aconsejable incluir texto en imágenes</b>&nbsp;debido a que dificulta su legibilidad. En este caso, podríamos tener problemas con el contraste entre colores de fondo y texto de la imagen cuando la imagen se amplía, y por tanto, resultará más complicada su lectura para personas con baja visión que utilicen un magnificador de pantalla a niveles altos de ampliación.</p>`
</script>

<template>
  <div v-html="html" />
</template>
