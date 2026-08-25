<template>
  <div>
    <p>
      En este apartado veremos los requisitos básicos para que un contenido de audio o vídeo sea
      accesible.
    </p>

    <h2>Percepción de lo audiovisual</h2>
    <p>
      Los documentos multimedia están formados por un conjunto de imágenes, sonidos y textos
      simultáneos, unidos entre sí a través de transiciones. Hay que tener en cuenta a las personas
      que no oyen, las que no ven y quienes no pueden utilizar un reproductor multimedia.
    </p>
    <p>
      Sin embargo, el diseño universal no excluye la adaptación, y disponemos de herramientas para
      asegurar un alto grado de accesibilidad para los documentos multimedia.
    </p>

    <h2>Qué necesita cada persona</h2>
    <p>
      La forma más clara de entender el apartado es partir de la barrera concreta y ver con qué se
      resuelve. Si no puedo escuchar una película, leo los subtítulos; y así con el resto de casos:
    </p>
    <div class="table-responsive">
      <table class="table table-striped">
        <caption>Barreras de acceso al contenido audiovisual y recurso que las resuelve</caption>
        <thead>
          <tr>
            <th scope="col">Barrera</th>
            <th scope="col">Qué se pierde</th>
            <th scope="col">Recurso</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">No oigo</th>
            <td>Los diálogos y los sonidos con significado</td>
            <td>Subtitulado</td>
          </tr>
          <tr>
            <th scope="row">No veo</th>
            <td>Lo que ocurre en pantalla y no se dice en voz alta</td>
            <td>Audiodescripción</td>
          </tr>
          <tr>
            <th scope="row">Ni oigo ni veo</th>
            <td>Todo el contenido</td>
            <td>Transcripción, legible en braille</td>
          </tr>
          <tr>
            <th scope="row">La lengua oral no es mi lengua</th>
            <td>La comprensión del discurso</td>
            <td>Intérprete de lengua de signos</td>
          </tr>
          <tr>
            <th scope="row">No puedo usar el reproductor</th>
            <td>El control sobre la reproducción</td>
            <td>Controles accesibles con teclado</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      Los apartados siguientes desarrollan cada uno de esos recursos, en el mismo orden de la tabla.
      Conviene retener que <strong>no son alternativos sino complementarios</strong>: un vídeo
      subtitulado sigue siendo inaccesible para quien no ve, y uno audiodescrito lo sigue siendo
      para quien no oye.
    </p>

    <h2>Subtitulado</h2>
    <p>
      El subtitulado es un servicio de apoyo a la comunicación que muestra en pantalla, mediante
      texto y gráficos, los discursos orales, la información suprasegmental y los efectos sonoros
      que se producen en cualquier obra audiovisual.
    </p>
    <p>Podemos distinguir distintos tipos de subtitulado:</p>
    <ul>
      <li>
        <strong>Subtítulos para sordos.</strong> Además de los diálogos recogen toda la información
        sonora con significado: quién habla, la música, los efectos y el tono. Son los que exige la
        accesibilidad.
      </li>
      <li>
        <strong>Subtítulos para oyentes.</strong> Recogen únicamente la traducción de los diálogos,
        como los de una película en versión original. No sirven como medida de accesibilidad, porque
        dan por supuesto que se oye el resto.
      </li>
      <li>
        <strong>Subtítulos en diferido.</strong> Se preparan sobre un contenido ya grabado, así que
        pueden revisarse y sincronizarse con precisión.
      </li>
      <li>
        <strong>Subtítulos en directo.</strong> Se generan durante la emisión, con menos precisión y
        cierto retardo inevitable.
      </li>
    </ul>
    <p>
      La distinción entre los dos primeros es la que más se confunde y la que marca la diferencia:
      un subtítulo que solo transcribe los diálogos deja fuera el timbre que suena, la puerta que se
      cierra o el nombre de quien habla fuera de plano.
    </p>
    <p>
      Los subtítulos pueden generarse con herramientas automáticas, pero hay que revisarlos antes de
      publicarlos. Cuando el vídeo está en el mismo idioma, deben incluir también la información
      sonora relevante, como quién habla, música o efectos. El subtitulado automático se equivoca
      justo donde más importa: nombres propios, terminología y cifras.
    </p>
    <p>
      Las WCAG lo recogen en dos criterios: <strong>1.2.2 Subtítulos (grabados)</strong>, de nivel A,
      y <strong>1.2.4 Subtítulos (en directo)</strong>, de nivel AA.
    </p>
    <p>
      Por ejemplo, en HTML5 podríamos cargar un vídeo con un fichero de subtítulos <code>.srt</code>
      convertido a <code>WebVTT</code> así:
    </p>
    <pre class="course-code"><code>&lt;video controls width="720"&gt;
  &lt;source src="clase.mp4" type="video/mp4" /&gt;
  &lt;track
    kind="captions"
    src="clase-es.vtt"
    srclang="es"
    label="Español"
    default
  /&gt;
  Tu navegador no soporta vídeo HTML5.
&lt;/video&gt;</code></pre>
    <p>
      El valor <code>kind="captions"</code> no es intercambiable con
      <code>kind="subtitles"</code>: el primero indica que la pista incluye la información sonora
      además de los diálogos, es decir, los subtítulos para sordos; el segundo, que solo traduce lo
      hablado. Es la misma distinción de la lista anterior, ahora en el código.
    </p>
    <p>
      Si el vídeo está incrustado desde otra plataforma, por ejemplo YouTube, al menos el
      <code>iframe</code> debe tener un título que identifique con claridad su contenido:
    </p>
    <pre class="course-code"><code>&lt;iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/xxxxxxxxxxx"
  title="Vídeo de presentación del curso"
  allowfullscreen
&gt;&lt;/iframe&gt;</code></pre>

    <h2>Audiodescripción</h2>
    <p>
      Es un servicio de apoyo a la comunicación. Es un conjunto de técnicas y habilidades
      aplicadas, con objeto de compensar la carencia de captación de la parte visual contenida en
      cualquier tipo de mensaje.
    </p>
    <p>
      Se locuta en los huecos entre diálogos y cuenta lo que ocurre en pantalla y no se deduce del
      audio. Corresponde a los criterios <strong>1.2.3</strong>, de nivel A, y
      <strong>1.2.5 Audiodescripción (grabada)</strong>, de nivel AA.
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
    <p>
      Hay un caso en el que no hace falta: cuando el vídeo <strong>no aporta información visual que
      no esté ya en el audio</strong>. Una charla grabada a cámara fija, en la que la persona explica
      en voz alta todo lo que se ve, no necesita audiodescripción. Lo que sí la necesita es el vídeo
      donde aparecen rótulos, gráficos o demostraciones en pantalla sin comentar; una alternativa más
      barata en ese caso es <strong>guionizar el vídeo</strong> para que se digan en voz alta, y
      evitar así tener que audiodescribirlo después.
    </p>

    <h2>Lengua de signos</h2>
    <p>
      Se tiende a pensar que los lenguajes de signos son similares a los idiomas del país en que se
      encuentran, pero no es así. Son idiomas totalmente diferentes y cada uno tiene sus propias
      reglas.
    </p>
    <p>
      Esto explica por qué no basta con los subtítulos: para muchas personas sordas de nacimiento la
      lengua de signos es su primera lengua, y el castellano escrito una segunda lengua que leen con
      más esfuerzo.
    </p>
    <p>
      Cuando proceda, se puede incluir un intérprete de lengua de signos en el vídeo. Esto
      complementa, pero no sustituye, a los subtítulos y a la audiodescripción. En las WCAG es el
      criterio <strong>1.2.6</strong>, de nivel AAA.
    </p>

    <h2>Audio y transcripción</h2>
    <p>
      En documentos de solo audio, la forma más clara de asegurar el acceso al contenido es incluir
      una transcripción visible o enlazada junto al reproductor. Es el criterio <strong>1.2.1</strong>,
      de nivel A.
    </p>
    <p>
      La transcripción es además el recurso más completo de todos, porque es el único que sirve a
      quien no oye <em>y</em> no ve: al ser texto, puede leerse con una línea braille. Por eso
      conviene ofrecerla también en los vídeos, no solo en el audio, aunque ya estén subtitulados.
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
      En este caso, lo más importante no es tanto el <code>aria-describedby</code> como que la
      transcripción exista de forma visible y fácil de localizar. El atributo puede complementar la
      relación, pero no debería ser la única vía para acceder a esa información.
    </p>

    <h2>El reproductor</h2>
    <p>
      Queda el último caso de la tabla, el de quien no puede utilizar el reproductor. De poco sirve
      un vídeo bien subtitulado si no se puede llegar al botón de reproducción.
    </p>
    <ul>
      <li>
        Todos los controles deben poder <strong>usarse con teclado</strong>: reproducir, pausar,
        volumen, activar subtítulos y pantalla completa.
      </li>
      <li>
        Los controles nativos de <code>&lt;video&gt;</code> y <code>&lt;audio&gt;</code> ya lo
        cumplen. Si se sustituyen por controles propios, hay que rehacer todo ese trabajo, así que
        conviene partir del atributo <code>controls</code> salvo que haya un motivo de peso.
      </li>
      <li>
        <strong>Nada debe reproducirse solo con sonido.</strong> Un audio que arranca sin permiso se
        superpone al lector de pantalla y deja a esa persona sin poder oír lo que está leyendo. El
        criterio <strong>1.4.2 Control del audio</strong> exige poder pararlo si dura más de tres
        segundos.
      </li>
      <li>
        El vídeo no debe contener <strong>más de tres destellos por segundo</strong>, como se explica
        en el apartado «Imágenes y elementos no textuales».
      </li>
    </ul>

    <p>
      Más información en
      <a href="https://web.ua.es/es/accesibilidad/documentos-electronicos-accesibles/documentos-multimedia.html" target="_blank" rel="noreferrer">UA: Documentos multimedia</a>.
    </p>
  </div>
</template>
