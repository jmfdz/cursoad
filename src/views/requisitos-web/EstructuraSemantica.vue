<template>
  <div>
    <p>
      Debemos considerar que cada página web es la suma de diferentes elementos, que cada uno tiene
      una relación y a su vez se relacionan entre sí. Esto es, un documento cuenta con listas
      ordenadas, párrafos, encabezados, tablas y muchos más tipos de elementos que definen la
      estructura del mismo.
    </p>
    <p>
      Para estructurar nuestra página web de manera correcta debemos dotar de semántica a los
      elementos que la componen y de esta manera transmitirán, aparte del contenido, su significado
      y relación con los demás elementos.
    </p>

    <h2>Semántica de los elementos</h2>
    <p>Pongamos un ejemplo de lista con los colores corporativos UA. Podemos hacerla escribiendo en cada línea:</p>
    <pre class="course-code"><code>&lt;p&gt;1. Azul&lt;/p&gt;
&lt;p&gt;2. Naranja&lt;/p&gt;
&lt;p&gt;3. Gris&lt;/p&gt;</code></pre>
    <p>
      El problema es que estaremos simulando una lista, cuando en realidad son tres párrafos. Sin
      embargo, si utilizamos una lista ordenada, ni siquiera necesitamos escribir los números:
    </p>
    <pre class="course-code"><code>&lt;ol&gt;
&lt;li&gt;Azul&lt;/li&gt;
&lt;li&gt;Naranja&lt;/li&gt;
&lt;li&gt;Gris&lt;/li&gt;
&lt;/ol&gt;</code></pre>
    <p>
      Utilizando los elementos de lista sí estaremos dotando al elemento de semántica, y un lector
      de pantallas para personas ciegas avisará, antes de leer los elementos, que es una lista.
    </p>
    <p>
      Otra mala práctica es crear títulos cambiando el aspecto visual, por ejemplo a un párrafo
      para hacerlo más grande y que visualmente parezca un título en lugar de utilizar las
      etiquetas de encabezado (<code>h1</code>, <code>h2</code>, <code>h3</code>...).
    </p>

    <h2>Estructura de una página web</h2>
    <p>
      Siguiendo con la función semántica de las etiquetas HTML, deberíamos especificar un
      esqueleto de nuestra página web que separe las diferentes secciones y elementos de la página.
    </p>
    <p>
      El contenido principal debe identificarse con la etiqueta <code>main</code>. Si la página tiene
      una cabecera común, conviene marcarla con <code>header</code>; también se pueden incluir otras
      etiquetas como <code>footer</code> para el pie de página.
    </p>
    <p>
      Además, si utilizamos menús de navegación, también deberíamos utilizar etiquetas
      <code>nav</code> para especificar que es un menú de navegación.
    </p>
    <p>
      En la etiqueta <code>html</code> también debemos indicar el idioma principal de la página, por
      ejemplo <code>&lt;html lang="es"&gt;</code> para español. Este requisito se explicará con más
      detalle en el apartado de idioma.
    </p>

    <h2>Título de página</h2>
    <p>
      Otro requisito de accesibilidad es que todo documento web tenga definido un título con la
      etiqueta <code>&lt;title&gt;</code> dentro del <code>&lt;head&gt;</code>. Este título se aconseja que:
    </p>
    <ul>
      <li>sea descriptivo y conciso, para no tener que leer mucho contenido,</li>
      <li>sea único en las diferentes páginas del sitio, para saber en qué página estamos,</li>
      <li>coincida con el <code>h1</code> de la página, para evitar confusiones.</li>
    </ul>
    <p>
      Pongamos el ejemplo de una web en la que tiene el mismo título en dos páginas: una es la
      página de inicio de la UA y la otra la de Actualidad Universitaria. ¿Qué ocurre si las dos
      tienen el mismo <code>title</code>, “Universidad de Alicante”?
    </p>
    <figure class="my-4">
      <img
        src="/curso-media/image5.png"
        alt="Dos pestañas del navegador identificadas como Universidad de Alicante y Revista digital de la Universidad de Alicante."
        class="figure-img img-fluid rounded-4 border shadow-sm"
        loading="lazy"
      />
      <figcaption>
        Los títulos diferentes permiten identificar cada página en las pestañas del navegador.
      </figcaption>
    </figure>
    <p>
      En las pestañas del navegador se puede leer el <code>title</code>. Al ser diferentes, podremos
      diferenciarlas; en otro caso, no sabremos en qué pestaña está cada contenido.
    </p>
    <p>Veamos un ejemplo completo con título, cabecera, contenido principal y pie de página:</p>
    <pre class="course-code"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="es"&gt;
&lt;head&gt;
  &lt;title&gt;Bienvenido/a a la UA&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;
    &lt;a href="/"&gt;
      &lt;img src="imagen.png" alt="Universidad de Alicante" /&gt;
    &lt;/a&gt;
    &lt;nav&gt;
      &lt;ul&gt;
        &lt;li&gt;&lt;a href="estudiantes.html"&gt;Estudiantes&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="pdi.html"&gt;PDI&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="ptgas.html"&gt;PTGAS&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/nav&gt;
  &lt;/header&gt;
  &lt;main&gt;
    &lt;h1&gt;Bienvenido/a a la UA&lt;/h1&gt;
    &lt;!-- Contenido de la página --&gt;
  &lt;/main&gt;
  &lt;footer&gt;
    &lt;p&gt;Universidad de Alicante 2025&lt;/p&gt;
  &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

    <h2>Encabezados</h2>
    <p>
      Los encabezados son uno de los elementos más importantes para darle una estructura coherente
      a una página web.
    </p>

    <p>
      Hablamos de las etiquetas <code>h1</code>, <code>h2</code>, <code>h3</code>, <code>h4</code>,
      <code>h5</code> y <code>h6</code>. Debe fomentarse su uso en lugar de otros elementos para
      marcar las diferentes secciones de una web.
    </p>
    <p>
      Como comentábamos en la sección anterior, conviene que cada página tenga un <code>h1</code> que
      identifique su tema principal y, a partir de ahí, incluir los diferentes apartados usando los
      siguientes niveles, por ejemplo el segundo nivel <code>h2</code>.
    </p>
    <p>
      Conviene no saltar niveles sin una relación clara entre apartados. Por ejemplo, después de un
      <code>h1</code> normalmente aparecerá un <code>h2</code>, no un <code>h3</code>.
    </p>
    <p>
      Tampoco se deben crear encabezados consecutivos del mismo nivel y que no tengan elementos
      entre ellos, pues su función es encabezar una sección. Por ejemplo, estaría mal:
    </p>
    <pre class="course-code"><code>&lt;h1&gt;Web UA&lt;/h1&gt;
&lt;p&gt;Descubre la web de la UA…&lt;/p&gt;
&lt;h2&gt;Noticias&lt;/h2&gt;
&lt;h2&gt;Eventos&lt;/h2&gt;</code></pre>
    <p>
      Ahora veamos una estructura de la web de la UA, con la sección de noticias y eventos de
      forma correcta:
    </p>
    <pre class="course-code"><code>&lt;h1&gt;Web UA&lt;/h1&gt;
&lt;p&gt;Descubre la web de la UA…&lt;/p&gt;
&lt;h2&gt;Noticias&lt;/h2&gt;
&lt;h3&gt;Enlace a noticia 1&lt;/h3&gt;
&lt;p&gt;Descripción noticia 1&lt;/p&gt;
&lt;h3&gt;Enlace a noticia 2&lt;/h3&gt;
&lt;p&gt;Descripción noticia 2&lt;/p&gt;
&lt;h3&gt;Enlace a noticia 3&lt;/h3&gt;
&lt;p&gt;Descripción noticia 3&lt;/p&gt;
&lt;h2&gt;Eventos&lt;/h2&gt;
&lt;ul&gt;
  &lt;li&gt;Evento 1&lt;/li&gt;
  &lt;li&gt;Evento 2&lt;/li&gt;
  &lt;li&gt;Evento 3&lt;/li&gt;
&lt;/ul&gt;
&lt;h2&gt;La UA en cifras&lt;/h2&gt;
&lt;p&gt;Datos destacados de la Universidad de Alicante.&lt;/p&gt;</code></pre>

    <p>
      En definitiva, nunca debemos simular elementos y deberemos crearlos de la forma correcta
      para que todos los elementos tengan un significado más allá del contenido que contienen.
    </p>
  </div>
</template>
