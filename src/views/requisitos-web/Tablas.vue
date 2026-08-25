<template>
  <div>
    <p>Las tablas son para estructurar datos, no para maquetar o colocar contenido visualmente.</p>
    <p>Conviene evitar dividir o combinar celdas cuando no sea necesario, para mantener las tablas sencillas de entender.</p>
    <p>
      Deben tener un título que las titule con la etiqueta <code>caption</code>. Por defecto, la etiqueta
      <code>caption</code> se muestra visualmente asociado a la tabla. Si el diseño lo necesita, se puede
      ajustar su posición con CSS sin perder esa asociación.
    </p>
    <h2>Encabezados de fila y columna: scope</h2>
    <p>
      Los encabezados de fila o columna deben marcarse con <code>th</code>, nunca con
      <code>td</code>, y asociarse a las celdas de datos mediante el atributo <code>scope</code>:
    </p>
    <ul>
      <li><code>scope="col"</code> cuando el encabezado corresponde a toda una columna.</li>
      <li><code>scope="row"</code> cuando el encabezado corresponde a toda una fila.</li>
    </ul>
    <p>
      Gracias a esta asociación, un lector de pantalla puede anunciar el encabezado
      correspondiente antes de leer cada celda de datos, por ejemplo “Nombre: Alberto, Nota: 8”,
      sin que la persona usuaria tenga que recordar la cabecera al desplazarse por la tabla.
      Además de marcarse con <code>scope</code>, los encabezados deben diferenciarse visualmente
      del resto de celdas con contraste suficiente, no basta con el atributo por sí solo.
    </p>
    <pre class="course-code"><code>&lt;table&gt;
  &lt;tr&gt;
    &lt;th scope="col"&gt;Nombre&lt;/th&gt;
    &lt;th scope="col"&gt;Nota&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;th scope="row"&gt;Alberto&lt;/th&gt;
    &lt;td&gt;8&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</code></pre>

    <h2>Ejemplo de tabla</h2>
    <p>
      En vez de fijar los colores con un atributo <code>style</code> en el propio HTML, es
      preferible llevarlos a una hoja de estilos: resulta más fácil de mantener y de comprobar el
      contraste en un único lugar.
    </p>
    <p>
      También añadimos una <strong>tabla cebra</strong> (filas con fondo alterno) para facilitar
      el seguimiento visual de cada fila en tablas con varias columnas o filas. Es un recurso
      puramente visual, así que no sustituye a <code>scope</code> ni al contraste de la cabecera,
      y el color alterno debe mantener igualmente un contraste suficiente con el texto:
    </p>
    <pre class="course-code"><code>&lt;table class="table table-striped"&gt;
  &lt;caption&gt;Notas de la asignatura de accesibilidad&lt;/caption&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th scope="col"&gt;Nombre&lt;/th&gt;
      &lt;th scope="col"&gt;Nota&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;th scope="row"&gt;Alberto&lt;/th&gt;
      &lt;td&gt;8&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope="row"&gt;Alba&lt;/th&gt;
      &lt;td&gt;9&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
    <pre class="course-code"><code>/* Cabecera con contraste suficiente (blanco sobre azul oscuro, más de 4.5:1) */
.table thead th {
  background-color: #1a3c8f;
  color: #ffffff;
}

/* Filas alternas (tabla cebra), manteniendo contraste suficiente en ambas */
.table-striped tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}</code></pre>

    <h2>Tablas adaptables</h2>
    <p>
      <code>table-responsive</code> sí es recomendable para tablas anchas, ya que evita que la
      tabla rompa el diseño y permite desplazarla horizontalmente en pantallas pequeñas. El
      contenedor debe llevar <code>tabindex="0"</code> para recibir el foco: al añadir
      <code>overflow-x: auto</code>, el contenedor pasa a ser un elemento con scroll propio, y sin
      foco no podría desplazarse con teclado.
    </p>
    <p>La navegación con teclado funciona así:</p>
    <ul>
      <li>Se llega al contenedor pulsando <strong>Tab</strong>.</li>
      <li>Con <strong>← y →</strong> se desplaza horizontalmente el contenido de la tabla.</li>
      <li>Las flechas <strong>↑ y ↓</strong> no sirven para entrar en la tabla ni para desplazarla.</li>
      <li>Los enlaces, botones o campos internos de la tabla se alcanzan pulsando <strong>Tab</strong>, no con las flechas.</li>
      <li>No hay que añadir <code>tabindex</code> a cada celda: basta con el <code>tabindex="0"</code> del contenedor.</li>
    </ul>
    <pre class="course-code"><code>&lt;div class="table-responsive" tabindex="0" role="region" aria-label="Notas de la asignatura"&gt;
  &lt;table&gt;
    ...
  &lt;/table&gt;
&lt;/div&gt;</code></pre>
  </div>
</template>
