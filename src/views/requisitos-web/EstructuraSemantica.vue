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
    <p>
      Conviene entender para qué sirve todo esto, porque explica el resto del apartado. Quien navega
      con un lector de pantalla <strong>no lee la página de arriba abajo</strong>: pide la lista de
      encabezados para hacerse una idea del contenido, salta directamente a la región que le
      interesa y entra a leer solo cuando ha llegado. Es el equivalente a lo que hacemos los demás
      recorriendo la página con la vista.
    </p>
    <p>
      Esas dos operaciones, <strong>listar encabezados</strong> y <strong>saltar entre
      regiones</strong>, solo funcionan si el HTML las hace posibles. Una página maquetada
      íntegramente con <code>div</code> se ve perfectamente y, sin embargo, no ofrece ningún punto
      de agarre: hay que recorrerla entera. Este apartado trata de darle esos puntos de agarre.
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
    <p>
      El principio general es que <strong>cada texto debe incluirse en el elemento que corresponda
      a su función</strong>: párrafo, encabezado, enlace, botón, etc. Un <code>div</code> puede
      contener texto, pero no indica que ese texto sea un párrafo, y por eso un lector de pantalla
      no puede anunciarlo ni permitir saltar de uno a otro. Veamos un ejemplo:
    </p>
    <pre class="course-code"><code>&lt;div&gt;¡Hola mundo!&lt;/div&gt; &lt;!-- Sin semántica de párrafo --&gt;
&lt;p&gt;¡Hola mundo!&lt;/p&gt; &lt;!-- Párrafo --&gt;</code></pre>
    <p>
      Dicho de otro modo: <code>div</code> y <code>span</code> son elementos sin significado,
      pensados para agrupar y maquetar. Son la elección correcta cuando lo único que necesitamos es
      un contenedor al que aplicar estilos, y la incorrecta cuando el contenido tiene una función
      para la que ya existe una etiqueta.
    </p>

    <h2>Regiones de la página: landmarks</h2>
    <p>
      Siguiendo con la función semántica de las etiquetas HTML, deberíamos especificar un
      esqueleto de nuestra página web que separe las diferentes secciones y elementos de la página.
      HTML5 incorpora para ello elementos de <i>sectioning</i> que describen las grandes regiones
      de un documento:
    </p>
    <ul>
      <li><code>header</code>, la cabecera común de la página;</li>
      <li><code>nav</code>, los menús de navegación;</li>
      <li><code>main</code>, el contenido principal;</li>
      <li><code>article</code>, contenido autónomo;</li>
      <li><code>section</code>, agrupaciones temáticas;</li>
      <li><code>aside</code>, contenido complementario;</li>
      <li><code>footer</code>, el pie de página.</li>
    </ul>
    <p>
      Cada uno expone automáticamente un rol de <i>landmark</i>, sin que haga falta añadirlo a
      mano. Eso es lo que permite que una persona que navega con lector de pantalla pida la lista
      de regiones y salte directamente a la que le interesa, en lugar de recorrer todo el contenido
      de forma lineal. Escribir <code>&lt;main&gt;</code> en lugar de
      <code>&lt;div class="main"&gt;</code> no cambia nada visualmente, pero es la diferencia entre
      poder saltar al contenido y no poder.
    </p>
    <p>Algunas reglas prácticas de uso:</p>
    <ul>
      <li>debe haber un único <code>main</code> por página;</li>
      <li>
        si hay varios <code>nav</code> (por ejemplo, navegación principal y migas de pan), cada
        uno necesita un nombre distinto mediante <code>aria-label</code> para poder diferenciarlos;
      </li>
      <li>
        <code>header</code> y <code>footer</code> solo son landmarks de página cuando son hijos
        directos de <code>body</code>, no cuando están anidados dentro de un <code>article</code>
        o una <code>section</code>;
      </li>
      <li>
        <code>article</code> se reserva para contenido que tendría sentido por sí solo fuera de la
        página, mientras que <code>section</code> agrupa contenido relacionado dentro de un mismo
        documento.
      </li>
      <li>
        <code>section</code> solo se comporta como región si tiene nombre accesible, normalmente
        mediante <code>aria-labelledby</code> apuntando a su encabezado; sin nombre, no aparece en
        la lista de regiones.
      </li>
    </ul>
    <p>
      En la etiqueta <code>html</code> también debemos indicar el idioma principal de la página, por
      ejemplo <code>&lt;html lang="es"&gt;</code> para español. Este requisito se explicó con más
      detalle en el apartado «Texto, tipografía e idioma».
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
      Son también la herramienta de navegación más usada por quien emplea un lector de pantalla.
      Todos ellos ofrecen un atajo para <strong>listar los encabezados de la página</strong> y otro
      para <strong>saltar al siguiente</strong>. Dicho de otro modo: los encabezados de una página
      funcionan como su índice, y de ahí salen todas las reglas que vienen a continuación. Un
      índice con niveles desordenados, o con entradas que no corresponden a ninguna sección, es un
      índice inservible.
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
