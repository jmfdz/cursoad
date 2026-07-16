<template>
  <div>
    <p>Las tablas son para estructurar datos, no para maquetar o colocar contenido visualmente.</p>
    <p>Conviene evitar dividir o combinar celdas cuando no sea necesario, para mantener las tablas sencillas de entender.</p>
    <p>
      Deben tener un título que las titule con la etiqueta `caption`. Por defecto, la etiqueta
      `caption` se muestra visualmente asociado a la tabla. Si el diseño lo necesita, se puede
      ajustar su posición con CSS sin perder esa asociación.
    </p>
    <p>
      Los encabezados de fila o columna deben marcarse con <code>th</code> y asociarse mediante
      <code>scope="row"</code> o <code>scope="col"</code>. También deben diferenciarse visualmente
      con contraste suficiente.
    </p>

    <h2>Ejemplo de tabla</h2>
    <pre class="course-code"><code>&lt;table class="table"&gt;
  &lt;caption&gt;Notas de la asignatura de accesibilidad&lt;/caption&gt;
  &lt;thead&gt;
    &lt;!-- Cabecera en azul con texto blanco para resaltar --&gt;
    &lt;tr style="background: blue; color: white;"&gt;
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

    <h2>Tablas adaptables</h2>
    <p>
      Si la tabla es muy ancha, se recomienda hacerla adaptable con la clase de Bootstrap
      <code>table-responsive</code> para poder desplazarnos con scroll horizontal en dispositivos
      móviles. El contenedor debe poder recibir el foco para que también pueda desplazarse con
      teclado:
    </p>
    <pre class="course-code"><code>&lt;div class="table-responsive" tabindex="0" role="region" aria-label="Notas de la asignatura"&gt;
  &lt;table&gt;
    ...
  &lt;/table&gt;
&lt;/div&gt;</code></pre>
  </div>
</template>
