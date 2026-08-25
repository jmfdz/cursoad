<template>
  <div>
    <p>
      Una presentación accesible se prepara igual que un documento, pero hay que revisar además el
      orden de lectura de cada diapositiva.
    </p>
    <p>
      Esa diferencia merece explicarse, porque es la que causa casi todos los problemas. Un
      documento de Word es una secuencia: un párrafo detrás de otro, y el orden en que se lee es el
      orden en que está escrito. Una diapositiva, en cambio, es un <strong>lienzo</strong> donde los
      objetos se colocan libremente, y su orden de lectura no lo determina la posición visual sino
      el orden en que se insertaron. Un lector de pantalla puede empezar por el pie de página,
      seguir por una imagen decorativa y terminar por el título.
    </p>
    <p>
      A eso se añade una segunda diferencia: una presentación casi siempre se <strong>proyecta</strong>,
      y una sala con luz o un proyector mal calibrado destrozan contrastes que en el monitor se veían
      perfectamente.
    </p>

    <h2 id="disenos-predefinidos">Usar los diseños predefinidos</h2>
    <p>
      Hay que usar los diseños predefinidos de PowerPoint, disponibles en Inicio &rarr; Diseño, en
      lugar de dibujar cuadros de texto sueltos sobre una diapositiva en blanco.
    </p>
    <p>
      El motivo es que los marcadores de posición de un diseño ya vienen identificados: PowerPoint
      sabe cuál es el título, cuál es el contenido y en qué orden se leen. Un cuadro de texto
      insertado a mano no es más que un objeto flotante sin ningún significado, aunque visualmente
      ocupe el lugar del título y tenga su mismo tamaño de letra. Es el mismo problema que simular
      un encabezado con negrita en Word.
    </p>

    <h2 id="titulo-diapositiva">Título único en cada diapositiva</h2>
    <p>
      Hay que poner un título único a cada diapositiva, <strong>incluso cuando no se muestre
      visualmente</strong>.
    </p>
    <p>
      Los títulos de diapositiva son el equivalente a los encabezados de una página web: son el
      mecanismo con el que alguien que usa un lector de pantalla se hace una idea de la presentación
      y salta de una diapositiva a otra. Sin ellos solo quedan «Diapositiva 7», «Diapositiva 8».
    </p>
    <p>
      Si el diseño pide que el título no aparezca en pantalla, no hay que borrarlo: se coloca fuera
      del área visible de la diapositiva, o se oculta desde el panel de selección. El título sigue
      existiendo para las tecnologías de apoyo y para la vista Esquema, que es además la forma más
      rápida de comprobar de un vistazo si todas las diapositivas tienen el suyo.
    </p>

    <h2 id="orden-lectura">El orden de lectura</h2>
    <p>
      Hay que revisar el orden de lectura de los cuadros de texto, imágenes y demás objetos. Es la
      comprobación propia de PowerPoint y la que no tiene equivalente en Word.
    </p>
    <p>
      La forma más fiable de verlo no depende de la versión: en modo edición, con la diapositiva
      abierta y sin nada seleccionado, se pulsa <strong>Tab</strong> repetidamente. El foco va
      recorriendo los objetos <strong>en el mismo orden en que se anunciarán</strong>. Si ese
      recorrido no coincide con el orden en que tú explicarías la diapositiva, hay que corregirlo.
    </p>
    <p>
      Para reordenarlos se usa el <strong>panel de selección</strong> (Inicio &rarr; Organizar
      &rarr; Panel de selección), donde los objetos pueden arrastrarse. Conviene tener presente que
      ese panel lista los objetos en orden de superposición, de manera que el que aparece abajo del
      todo suele ser el primero que se lee; las versiones más recientes incluyen además un panel de
      orden de lectura donde la lista ya va de arriba abajo. Sea cual sea el que tengas, la
      comprobación con <strong>Tab</strong> te dice cuál es el orden real.
    </p>
    <p>
      Un consejo que ahorra la mayor parte de este trabajo: si se insertan los objetos en el orden
      en que se van a leer, el orden de lectura ya sale bien y no hay nada que reordenar.
    </p>

    <h2 id="imagenes">Imágenes, gráficos y diagramas</h2>
    <p>
      Hay que añadir texto alternativo a las imágenes, gráficos y diagramas que aporten información;
      los objetos decorativos se pueden marcar como tales.
    </p>
    <p>
      Se aplica todo lo visto en el apartado de Word, incluida la advertencia sobre SmartArt y las
      formas: en una presentación son aún más frecuentes, y su contenido puede no leerse en un orden
      comprensible.
    </p>
    <p>
      Hay un caso propio de las presentaciones: la <strong>captura de pantalla llena de texto</strong>.
      Es habitual pegar una imagen de una tabla, un panel o un correo y comentarla en voz alta. Ese
      texto no existe para nadie que no vea la imagen, así que o se describe en el texto alternativo
      lo que aporta, o se lleva la información a la diapositiva como texto real.
    </p>

    <h2 id="color-contraste">Color y contraste</h2>
    <p>
      Hay que mantener contraste suficiente y no transmitir la información únicamente con el color.
    </p>
    <p>
      En una presentación conviene ser más exigente que el mínimo, porque el resultado no se ve en
      las condiciones en que se diseñó. Un gris sobre blanco que cumple justo el 4,5:1 en el monitor
      puede resultar ilegible proyectado en una sala iluminada, y lo mismo ocurre con los textos
      colocados encima de una fotografía de fondo.
    </p>
    <p>
      Dos medidas prácticas: usar tamaños de letra generosos, muy por encima del mínimo de 12 puntos
      que vale para un documento impreso, y evitar el texto sobre imágenes salvo que se coloque una
      banda de color sólido detrás. Los umbrales de contraste y la forma de comprobarlos son los del
      apartado «Color y contraste» del bloque de requisitos web.
    </p>

    <h2 id="video-notas">Vídeo, audio y notas del orador</h2>
    <p>
      Si la presentación incluye vídeo o audio, necesita subtítulos y, según el caso, una
      transcripción. Los requisitos concretos se explican en el apartado «Vídeo y audio».
    </p>
    <p>
      Las <strong>notas del orador</strong> merecen una mención aparte. Cuando la presentación se
      reparte como material de estudio, las notas son el sitio natural para recoger lo que se dijo
      en voz alta y no está escrito en la diapositiva. Son texto accesible y viajan con el fichero,
      así que convierten una presentación esquemática en un documento comprensible por sí solo.
    </p>

    <h2 id="comprobar-accesibilidad">Comprobar la accesibilidad</h2>
    <p>
      Antes de compartir la presentación, hay que ejecutar el Comprobador de accesibilidad y revisar
      los problemas detectados.
    </p>
    <figure class="my-4">
      <img
        class="img-fluid"
        src="/curso-media/unican/page_21.png"
        alt="Pestaña Revisar de PowerPoint con la opción Comprobar accesibilidad."
      />
    </figure>
    <figure class="my-4">
      <img
        class="img-fluid"
        src="/curso-media/unican/page_22.png"
        alt="Panel de resultados del Comprobador de accesibilidad de Office, con la lista de problemas detectados y sus recomendaciones."
      />
    </figure>
    <p>
      Como en Word, el comprobador detecta lo que puede verificarse de forma mecánica —imágenes sin
      texto alternativo, diapositivas sin título, orden de lectura sospechoso— pero no juzga si una
      descripción es útil ni si el orden de lectura tiene sentido. Esas dos cosas se revisan a mano
      con la vista Esquema y con la prueba del <strong>Tab</strong>.
    </p>
    <p>
      Si la presentación se va a distribuir, exportarla a PDF con las opciones de accesibilidad
      activadas conserva los títulos y los textos alternativos. Se explica en el apartado «PDF».
    </p>

    <h2 id="mas-informacion">Más información</h2>
    <p>
      Consulta la
      <a href="https://support.microsoft.com/es-ES/accessibility/powerpoint/make-your-powerpoint-presentations-accessible-to-people-with-disabilities">guía de Microsoft para crear presentaciones accesibles</a>.
    </p>
  </div>
</template>
