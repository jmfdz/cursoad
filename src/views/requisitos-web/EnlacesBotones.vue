<template>
  <div>
    <p>
      Los enlaces y botones deben transmitir claramente qué ocurrirá cuando pulsemos en ellos.
      Deben ser cortos y concisos, por ejemplo: “Procesar imagen”, “Descargar documento”, etc.
    </p>
    <p>
      No podemos utilizar como texto de enlaces palabras como “aquí”, “pulsa aquí”, “enlace”,
      etc.
    </p>
    <p>
      Si van a provocar un cambio de contexto debemos indicarlo en el texto del enlace o en su
      nombre accesible. Por ejemplo: “Ver el vídeo en YouTube (se abre en una ventana nueva)”.
    </p>
    <pre class="course-code"><code>&lt;!-- Texto poco descriptivo --&gt;
&lt;a href="admision.html"&gt;Pulsa aquí&lt;/a&gt;

&lt;!-- El destino se entiende al leer el enlace de forma aislada --&gt;
&lt;a href="admision.html"&gt;Consultar información de admisión&lt;/a&gt;

&lt;!-- Se informa del cambio de contexto --&gt;
&lt;a href="video.html" target="_blank" rel="noreferrer"&gt;
  Ver el vídeo de presentación (se abre en una ventana nueva)
&lt;/a&gt;</code></pre>

    <h2>Enlaces a descargas</h2>
    <p>
      Si el enlace descargará un fichero, por ejemplo un documento de Word o PowerPoint, es
      altamente aconsejable incluir la extensión y el tamaño del fichero. Por ejemplo para un vídeo
      MP4:
    </p>
    <pre class="course-code"><code>&lt;a href="video.mp4" download&gt;
  Vídeo de presentación (MP4, 300 MB)
&lt;/a&gt;</code></pre>
    <p>
      De esta forma, estamos alertando al usuario del formato del documento y del tamaño, ya que
      dependiendo del dispositivo que esté usando puede no tener visor para ese formato o no querer
      descargar un archivo grande si está fuera de casa con datos.
    </p>

    <h2>Texto accesible</h2>
    <p>
      Los enlaces y botones no pueden estar vacíos, siempre deben tener un texto, ya sea visible o
      no. En este sentido, si el enlace o botón solo incluye una imagen o icono, deben tener texto
      alternativo o <code>aria-label</code>.
    </p>
    <pre class="course-code"><code>&lt;!-- Enlace formado únicamente por una imagen --&gt;
&lt;a href="inicio.html"&gt;
  &lt;img src="logo-ua.svg" alt="Ir a la página de inicio de la UA"&gt;
&lt;/a&gt;

&lt;!-- Enlace formado únicamente por un icono --&gt;
&lt;a href="configuracion.html" aria-label="Abrir configuración"&gt;
  &lt;svg aria-hidden="true" focusable="false"&gt;...&lt;/svg&gt;
&lt;/a&gt;</code></pre>
    <p>
      Por último, en aplicaciones que tienen un alto uso de peticiones Ajax, debemos considerar que
      los botones deben utilizarse en estos casos y utilizar siempre botones para recargar páginas o
      procesar información. Los enlaces, sin embargo, están pensados para provocar cambio de página.
    </p>
    <pre class="course-code"><code>&lt;!-- Navega a otra página --&gt;
&lt;a href="resultados.html"&gt;Consultar resultados&lt;/a&gt;

&lt;!-- Ejecuta una acción en la página actual --&gt;
&lt;button type="button"&gt;Actualizar resultados&lt;/button&gt;</code></pre>
  </div>
</template>
