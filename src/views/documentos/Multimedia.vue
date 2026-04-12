<template>
  <div class="lh-lg">
    <p>
      Adicionalmente veremos las singularidades de los documentos de multimedia y varias
      herramientas para la evaluación automática de la accesibilidad de documentos Word.
    </p>

    <h2 class="mt-4 mb-3">Percepción de lo audiovisual</h2>
    <p>
      Los documentos multimedia están formados por un conjunto de imágenes, sonidos y textos
      simultáneos, unidos entre sí a través de transiciones. Por su composición es muy difícil
      diseñar un video o un audio accesible para todas las personas.
    </p>
    <p>
      Sin embargo, el diseño universal no excluye la adaptación, y disponemos de herramientas para
      asegurar un alto grado de accesibilidad para los documentos multimedia.
    </p>

    <h2 class="mt-4 mb-3">¿Y cómo accede una persona con discapacidad al contenido?</h2>
    <ul>
      <li>Si no puedo escuchar una película, leo los subtítulos.</li>
    </ul>

    <h2 class="mt-4 mb-3">Subtitulado</h2>
    <p>
      El subtitulado es un servicio de apoyo a la comunicación que muestra en pantalla, mediante
      texto y gráficos, los discursos orales, la información suprasegmental y los efectos sonoros
      que se producen en cualquier obra audiovisual.
    </p>
    <p>Podemos distinguir distintos tipos de subtitulado:</p>
    <ul>
      <li>Subtítulos para sordos.</li>
      <li>Subtítulos para oyentes.</li>
      <li>Subtítulos en diferido.</li>
      <li>Subtítulos en directo.</li>
    </ul>
    <p>Por ejemplo, en HTML5 podríamos cargar un vídeo con un fichero de subtítulos `.srt` convertido a `WebVTT` así:</p>
    <pre class="course-code"><code>&lt;video controls width="720"&gt;
  &lt;source src="clase.mp4" type="video/mp4" /&gt;
  &lt;track
    kind="subtitles"
    src="clase-es.vtt"
    srclang="es"
    label="Español"
    default
  /&gt;
  Tu navegador no soporta vídeo HTML5.
&lt;/video&gt;</code></pre>
    <p>
      Si el vídeo está incrustado desde otra plataforma, por ejemplo YouTube, al menos el `iframe`
      debe tener un título que identifique con claridad su contenido:
    </p>
    <pre class="course-code"><code>&lt;iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/xxxxxxxxxxx"
  title="Vídeo de presentación del curso"
  allowfullscreen
&gt;&lt;/iframe&gt;</code></pre>

    <h2 class="mt-4 mb-3">Audiodescripción</h2>
    <p>
      Es un servicio de apoyo a la comunicación. Son un conjunto de técnicas y habilidades
      aplicadas, con objeto de compensar la carencia de captación de la parte visual contenida en
      cualquier tipo de mensaje.
    </p>
    <p>A continuación, se enumeran los pasos de una audiodescripción:</p>
    <ul>
      <li>Preparación del guion de la audiodescripción.</li>
      <li>Audio-introducción.</li>
      <li>Descripción de los actores, la acción y los escenarios.</li>
      <li>Locución.</li>
      <li>Uso del lenguaje.</li>
      <li>Densidad de la audiodescripción, evitando dentro de lo posible que sea alta.</li>
    </ul>

    <h2 class="mt-4 mb-3">Lengua de signos</h2>
    <p>
      Se tiende a pensar que los lenguajes de signos son similares a los idiomas del país en que se
      encuentran, pero no es así. Son idiomas totalmente diferentes y cada uno tiene sus propias
      reglas.
    </p>
    <p>
      Nuestros documentos multimedia deberían estar signados, en la medida de lo posible. Y si no
      es posible, al menos crear resúmenes con la información más importante en este sistema.
    </p>

    <h2 class="mt-4 mb-3">Audio y transcripción</h2>
    <p>
      En documentos de solo audio, la forma más clara de asegurar el acceso al contenido es incluir
      una transcripción visible o enlazada junto al reproductor.
    </p>
    <p>
      Puede hacerse, por ejemplo, enlazando un fichero de texto o una página con la transcripción:
    </p>
    <pre class="course-code"><code>&lt;p id="transcripcion-audio"&gt;
  Transcripción de la entrevista:
  &lt;a href="entrevista.txt"&gt;leer transcripción completa&lt;/a&gt;
&lt;/p&gt;

&lt;audio controls aria-describedby="transcripcion-audio"&gt;
  &lt;source src="entrevista.mp3" type="audio/mpeg" /&gt;
  Tu navegador no soporta el elemento de audio.
&lt;/audio&gt;</code></pre>
    <p>
      En este caso, lo más importante no es tanto el `aria-describedby` como que la transcripción
      exista de forma visible y fácil de localizar. El atributo puede complementar la relación, pero
      no debería ser la única vía para acceder a esa información.
    </p>

    <h3 class="mt-4 mb-3">Referencia</h3>
    <ul>
      <li><a href="https://web.ua.es/es/accesibilidad/documentos-electronicos-accesibles/documentos-multimedia.html" target="_blank" rel="noreferrer">UA: Documentos multimedia</a></li>
    </ul>
  </div>
</template>
