<template>
  <div class="lh-lg">
    <p>
      Los enlaces y botones deben transmitir claramente qué ocurrirá cuando pulsemos en ellos.
      Deben ser cortos y concisos, por ejemplo: “Procesar imagen”, “Descargar documento”, etc.
    </p>
    <p>
      No podemos utilizar como texto de enlaces palabras como “aquí”, “pulsa aquí”, “enlace”,
      etc.
    </p>
    <p>
      Si van a provocar un cambio de contexto deberíamos indicarlo en el `title`; por ejemplo, si
      es un enlace de YouTube, ponerle `title="Se abrirá en YouTube"`.
    </p>

    <h2 class="mt-4 mb-3">Enlaces a descargas</h2>
    <p>
      Si el enlace descargará un fichero, por ejemplo un documento de Word o PowerPoint, es
      altamente aconsejable incluir la extensión y el tamaño del enlace. Por ejemplo para un vídeo
      MP4:
    </p>
    <pre class="course-code"><code>&lt;a href="video.mp4" download="Vídeo de presentación"&gt;
  Vídeo de presentación (MP4 300MB)
&lt;/a&gt;</code></pre>
    <p>
      De esta forma, estamos alertando al usuario del formato del documento y del tamaño, ya que
      dependiendo del dispositivo que esté usando puede no tener visor para ese formato o no querer
      descargar un archivo grande si está fuera de casa con datos.
    </p>

    <h2 class="mt-4 mb-3">Texto accesible</h2>
    <p>
      Los enlaces y botones no pueden estar vacíos, siempre deben tener un texto, ya sea visible o
      no. En este sentido, si el enlace o botón solo incluye una imagen o icono, deben tener texto
      alternativo o `aria-label`.
    </p>
    <p>
      Por último, en aplicaciones que tienen un alto uso de peticiones Ajax, debemos considerar que
      los botones deben utilizarse en estos casos y utilizar siempre botones para recargar páginas o
      procesar información. Los enlaces, sin embargo, están pensados para provocar cambio de página.
    </p>
  </div>
</template>
