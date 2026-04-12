<template>
  <div class="lh-lg">
    <p>
      Antes de comenzar a elaborar un contenido, debemos pensar en el tipo de personas a las que
      se dirige, las ideas más importantes a transmitir y su estructura. Para ello utilizaremos un
      <strong>lenguaje sencillo</strong>, prescindiendo de estructuras gramaticales complejas y
      usando frases cortas. El <strong>mensaje</strong> que queremos transmitir con nuestro texto
      debe ser <strong>detectado de forma clara por los usuarios</strong>.
    </p>

    <h2 class="mt-4 mb-3">Formato del texto</h2>
    <p>
      La tipografía utilizada es un elemento fundamental de nuestro documento. Es aconsejable
      utilizar fuentes de tipo Sans Serif, como por ejemplo <strong>Arial o Verdana</strong>, ya
      que favorecen la legibilidad del texto y por tanto su comprensión por parte de varios
      colectivos de personas con discapacidad.
    </p>
    <p>
      El término <strong>sans serif</strong> procede del francés y significa “sin remates”.
      Debemos utilizar tipos de fuentes que estén presentes en la mayoría de sistemas operativos,
      para garantizar así la interoperabilidad de nuestros contenidos.
    </p>
    <p>
      En el caso de que utilicemos tipos de fuente específicos, como en el caso de la UA que
      utiliza en la nueva web Atkinson Hyperlegible Next y no está instalada en los sistemas por
      defecto, deberemos incluirla como fuente, por ejemplo desde Google Fonts.
    </p>
    <p>Veamos cómo definir la fuente con CSS para toda una página web:</p>
    <pre class="course-code"><code>body {
  font-family: Arial;
}</code></pre>
    <p>
      El <strong>tamaño de la fuente</strong> debe ser suficiente, no aconsejándose bajar de
      12 puntos y recomendándose utilizar el tamaño de <strong>14 puntos</strong>.
    </p>
    <p>
      En el desarrollo web debemos utilizar siempre <strong>unidades relativas</strong> para
      especificar el tamaño. De esta forma el contenido escalará de forma proporcional y se
      respetará la configuración que pueda tener el usuario.
    </p>
    <p>
      En la mayoría de navegadores actuales el tamaño por defecto es de 16px, equivalente a
      12 puntos o `1rem`/`1em`.
    </p>
    <p>
      Como hemos dicho, si quisiéramos cambiar el tamaño y subirlo a 14 puntos, serían
      aproximadamente 18px, pero especificando en unidades relativas serían `1.166rem` o `1.166em`.
    </p>
    <p>Veamos cómo definir el tamaño para todo el contenido:</p>
    <pre class="course-code"><code>html {
  font-size: 1.166rem; /* 14 puntos */
}</code></pre>
    <p>
      Si por ejemplo utilizamos una librería CSS como Bootstrap, al aplicar esta regla todos los
      tamaños de encabezados, listas y demás elementos escalarán al mismo tiempo.
    </p>
    <p>
      Por otro lado, <strong>no es aconsejable abusar del texto en mayúsculas</strong>, debido a
      que su legibilidad es más baja y además, en casos de usuarios de líneas braille como personas
      ciegas, es menos cómoda la lectura de letras mayúsculas que minúsculas.
    </p>
    <p>
      Por último, debemos evitar utilizar los estilos o etiquetas de énfasis `&lt;em&gt;` y el
      tachado `&lt;s&gt;`, ya que, al cambiar la forma del texto, dificulta mucho su lectura.
    </p>

    <h2 class="mt-4 mb-3">Formato de párrafo</h2>
    <p>
      Lo primero que tener en cuenta es que todo texto debe estar incluido en una etiqueta
      semántica, ya sean botones, enlaces, párrafos, encabezados, etc. Esto quiere decir que
      etiquetas de maquetación no deben tener texto directamente, ya que su función es maquetar
      contenido, no texto. Veamos un ejemplo:
    </p>
    <pre class="course-code"><code>&lt;div&gt;¡Hola mundo!&lt;/div&gt; &lt;!-- Mal --&gt;
&lt;div&gt;&lt;p&gt;¡Hola mundo!&lt;/p&gt;&lt;/div&gt; &lt;!-- Bien --&gt;</code></pre>
    <p>
      Tampoco debemos utilizar las etiquetas `&lt;br&gt;` para incluir saltos de línea, ya que
      debemos estructurar el texto con párrafos, listas y otros elementos semánticos. En el caso
      de querer incluir márgenes, debemos realizarlos con reglas CSS.
    </p>
    <p>
      Respecto a la <strong>alineación del texto</strong> debemos tener en cuenta una serie de
      consideraciones:
    </p>
    <ul>
      <li>Si pensamos centrar contenido, este debe ser corto y no ocupar más de un par de líneas. En caso contrario puede resultar más difícil su lectura.</li>
      <li><strong>No se debe justificar el texto del contenido a ambos lados de la pantalla</strong>, este formato dificulta su lectura y por tanto su legibilidad.</li>
      <li>Conviene incluir un <strong>interlineado suficiente</strong> que mejore la lectura de las frases.</li>
      <li>También conviene agregar un espaciado suficiente entre los diferentes bloques de texto.</li>
    </ul>
    <pre class="course-code"><code>p {
  line-height: 1.5;
  text-align: left; /* No usar justify y no abusar de center */
  margin-bottom: 1rem;
}</code></pre>

    <h2 class="mt-4 mb-3">Texto en imágenes</h2>
    <p>
      <strong>No es aconsejable incluir texto en imágenes</strong> debido a que dificulta su
      legibilidad. En este caso podríamos tener problemas con el contraste entre colores de fondo y
      texto de la imagen cuando la imagen se amplía, y por tanto resultará más complicada su
      lectura para personas con baja visión que utilicen un magnificador de pantalla a niveles
      altos de ampliación.
    </p>

    <h2 class="mt-4 mb-3">Idioma del contenido</h2>
    <p>
      Tanto si trabajamos páginas web con varios idiomas o tan solo aparecen términos de otra
      lengua, deberemos <strong>marcar siempre el idioma al que pertenece cada parte del texto</strong>.
      Esto es de vital importancia debido a que los lectores de pantalla necesitan conocer el idioma
      del texto para realizar una correcta pronunciación.
    </p>
    <p>
      Es el caso también de los buscadores como Google, que necesitan saber el idioma de la página
      para una mejor comprensión e indexación de los contenidos.
    </p>
    <p>
      Pongamos el ejemplo de que escribiendo un texto en castellano introducimos la palabra
      <i>People</i>, para referirnos a la revista con dicho nombre. Si no indicamos de una manera
      correcta que ese texto está en inglés, el lector de pantalla pronunciará la palabra como si
      fuera castellano. Si lo hemos marcado correctamente, la pronunciación será la adecuada.
    </p>

    <h2 class="mt-4 mb-3">Establecer el idioma por defecto</h2>
    <p>
      Para especificar los idiomas en HTML5 disponemos del atributo `lang`, que se puede aplicar a
      cualquier etiqueta. En la etiqueta debemos pasarle el código del idioma o el locale, por
      ejemplo `es-ES` para español de España.
    </p>
    <p>Para indicar que el contenido de la web es en español, escribiríamos:</p>
    <pre class="course-code"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="es"&gt;
&lt;head&gt;...&lt;/head&gt;
&lt;body&gt;...&lt;/body&gt;
&lt;/html&gt;</code></pre>

    <h2 class="mt-4 mb-3">Cambios de idioma dentro de la página</h2>
    <p>
      Para marcar que un fragmento de texto está en otro idioma, lo hacemos directamente en el
      texto deseado. Por ejemplo, marcando la palabra <i>People</i> como palabra inglesa:
    </p>
    <pre class="course-code"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="es"&gt;
&lt;head&gt;...&lt;/head&gt;
&lt;body&gt;
  &lt;p&gt;Gente en inglés es &lt;span lang="en"&gt;People&lt;/span&gt;&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
  </div>
</template>
