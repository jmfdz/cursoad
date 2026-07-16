<template>
  <div>
    <p>
      Antes de comenzar a elaborar un contenido, debemos pensar en el tipo de personas a las que
      se dirige, las ideas más importantes a transmitir y su estructura. Para ello utilizaremos un
      <strong>lenguaje sencillo</strong>, prescindiendo de estructuras gramaticales complejas y
      usando frases cortas. El <strong>mensaje</strong> que queremos transmitir con nuestro texto
      debe ser <strong>detectado de forma clara por los usuarios</strong>.
    </p>

    <h2>Formato del texto</h2>
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
      utiliza Atkinson Hyperlegible Next y no está instalada en los sistemas por defecto, debemos
      servirla como recurso web e incluir fuentes alternativas. Puede alojarse en el propio sitio o
      cargarse desde un proveedor de fuentes.
    </p>
    <p>Veamos cómo definir la fuente con CSS para toda una página web:</p>
    <pre class="course-code"><code>body {
  font-family: Arial, sans-serif;
}</code></pre>
    <p>
      El <strong>tamaño de la fuente</strong> debe ser suficiente y permitir que el usuario amplíe
      el contenido sin perder información ni funcionalidad.
    </p>
    <p>
      En el desarrollo web conviene utilizar <strong>unidades relativas</strong>, como
      <code>rem</code>, <code>em</code> o porcentajes, para que el contenido pueda escalar y respete
      la configuración del usuario.
    </p>
    <p>
      En la mayoría de navegadores actuales el tamaño por defecto es de 16px. Si el tamaño de la
      raíz no se ha modificado, equivale a <code>1rem</code>; <code>1em</code> depende en cambio del
      tamaño del elemento padre.
    </p>
    <p>Por ejemplo, para aumentar ligeramente el tamaño base del contenido:</p>
    <pre class="course-code"><code>body {
  font-size: 1.125rem;
}</code></pre>
    <p>
      Por otro lado, <strong>no es aconsejable abusar del texto en mayúsculas</strong>, debido a
      que su legibilidad es más baja y además, en casos de usuarios de líneas braille como personas
      ciegas, es menos cómoda la lectura de letras mayúsculas que minúsculas.
    </p>
    <p>
      Los estilos o etiquetas de énfasis `&lt;em&gt;` y el tachado `&lt;s&gt;` deben usarse solo cuando
      expresen ese significado. No conviene utilizarlos únicamente para dar apariencia visual al
      texto.
    </p>

    <h2>Formato de párrafo</h2>
    <p>
      Lo primero que debemos tener en cuenta es que cada texto debe incluirse en el elemento que
      corresponda a su función: párrafo, encabezado, enlace, botón, etc. Un <code>div</code> puede
      contener texto, pero no indica que ese texto sea un párrafo. Veamos un ejemplo:
    </p>
    <pre class="course-code"><code>&lt;div&gt;¡Hola mundo!&lt;/div&gt; &lt;!-- Sin semántica de párrafo --&gt;
&lt;p&gt;¡Hola mundo!&lt;/p&gt; &lt;!-- Párrafo --&gt;</code></pre>
    <p>
      No debemos utilizar <code>&lt;br&gt;</code> para separar párrafos o crear márgenes. Para ello
      utilizaremos elementos semánticos y reglas CSS. El salto de línea sí puede emplearse cuando
      forma parte del contenido, por ejemplo en una dirección postal.
    </p>
    <p>
      Respecto a la <strong>alineación del texto</strong> debemos tener en cuenta una serie de
      consideraciones:
    </p>
    <figure class="my-4">
      <img
        src="/curso-media/image4.jpeg"
        alt="Ejemplo de texto incorrecto justificado y otro correcto alineado a la izquierda."
        class="figure-img img-fluid rounded-4 border shadow-sm"
        loading="lazy"
      />
      <figcaption>
        Comparación entre texto justificado y texto alineado a la izquierda.
      </figcaption>
    </figure>
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

    <h2>Texto en imágenes</h2>
    <p>
      <strong>No es aconsejable incluir texto en imágenes</strong> debido a que dificulta su
      adaptación y ampliación. También puede impedir que el usuario cambie su presentación o que
      un lector de pantalla acceda al texto si no se proporciona una alternativa.
    </p>

    <h2>Idioma del contenido</h2>
    <p>
      Tanto si trabajamos con páginas web en varios idiomas como si aparecen fragmentos en otra
      lengua, deberemos <strong>marcar el idioma al que pertenece cada parte del texto</strong>.
      Los lectores de pantalla necesitan conocerlo para realizar una pronunciación correcta.
    </p>
    <p>
      Es el caso también de los buscadores como Google, que necesitan saber el idioma de la página
      para una mejor comprensión e indexación de los contenidos.
    </p>
    <p>
      Pongamos el ejemplo de que escribiendo un texto en castellano introducimos la palabra
      <span lang="en">People</span>. Si no indicamos que ese texto está en inglés, el lector de
      pantalla puede pronunciar la palabra como si fuera castellano.
    </p>

    <h2>Establecer el idioma por defecto</h2>
    <p>
      Para especificar los idiomas en HTML5 disponemos del atributo <code>lang</code>, que se puede
      aplicar a cualquier etiqueta. Como valor utilizaremos el código de idioma, por ejemplo
      <code>es</code> para español o <code>es-ES</code> para español de España.
    </p>
    <p>Para indicar que el contenido de la web es en español, escribiríamos:</p>
    <pre class="course-code"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="es"&gt;
&lt;head&gt;...&lt;/head&gt;
&lt;body&gt;...&lt;/body&gt;
&lt;/html&gt;</code></pre>

    <h2>Cambios de idioma dentro de la página</h2>
    <p>
      Para marcar que un fragmento de texto está en otro idioma, lo hacemos directamente en el
      texto deseado. Por ejemplo, marcando la palabra <span lang="en">People</span> como inglesa:
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
