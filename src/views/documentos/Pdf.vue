<template>
  <div>
    <p>
      El PDF es el formato en el que acaban publicados la mayoría de los documentos
      administrativos, y también donde con más frecuencia se pierde por el camino todo el trabajo
      hecho en el original.
    </p>
    <p>
      Conviene tener claro de entrada que <strong>un PDF no se hace accesible al final: lo hereda</strong>.
      Prácticamente todo se decide en el documento de origen y en cómo se exporta. Arreglar un PDF ya
      generado exige herramientas de pago y mucho trabajo manual, cuando en el Word original habría
      costado unos minutos.
    </p>

    <h2 id="que-hace-accesible">Qué hace accesible a un PDF</h2>
    <p>
      A diferencia de una página web, un PDF describe por defecto <em>dónde</em> va colocada cada
      cosa, no <em>qué</em> es cada cosa. Sabe que hay un texto en negrita a 18 puntos en la parte
      superior, pero no que ese texto sea un título.
    </p>
    <p>
      Esa información la aportan las <strong>etiquetas</strong> (<i>tags</i>), una estructura oculta
      y paralela al contenido visible que marca qué es un encabezado, qué es un párrafo, qué es una
      tabla y en qué orden se lee todo. Un PDF con etiquetas correctas se recorre con un lector de
      pantalla igual que una página web bien hecha; uno sin etiquetas es un montón de texto suelto,
      o directamente nada.
    </p>
    <p>Hay dos comprobaciones rápidas que no necesitan ninguna herramienta especial:</p>
    <ol>
      <li>
        <strong>Intenta seleccionar el texto</strong> con el ratón. Si no puedes, no hay texto: el
        PDF es una imagen.
      </li>
      <li>
        <strong>Busca una palabra</strong> con <kbd>Ctrl</kbd>+<kbd>F</kbd>. Si no la encuentra
        aunque la estés viendo, ocurre lo mismo.
      </li>
    </ol>

    <h2 id="preparar-documento">Preparar el documento de origen</h2>
    <ul>
      <li>
        Un PDF accesible empieza en el documento de origen: hay que usar títulos, texto alternativo,
        tablas sencillas y un orden de lectura lógico. Al exportarlo se debe conservar esa estructura
        y comprobar el resultado final.
      </li>
      <li>
        Evitar crear el PDF desde la opción de imprimir o mediante controladores genéricos, porque
        pueden perderse las etiquetas. Usar “Guardar como PDF” o “Exportar como PDF” y activar las
        opciones de accesibilidad cuando estén disponibles.
      </li>
    </ul>
    <p>
      El segundo punto es el error más común y el más silencioso: <strong>«Imprimir a PDF» produce un
      documento que se ve idéntico</strong> al exportado correctamente, pero sin ninguna etiqueta
      dentro. No hay forma de notarlo mirándolo, y por eso se repite tanto.
    </p>
    <p>
      Conviene además rellenar el <strong>título del documento</strong> en las propiedades del
      fichero. Es lo que anuncia el lector de pantalla al abrirlo y lo que muestra la ventana del
      visor; si se deja vacío, aparece el nombre del fichero, que suele ser algo como
      <code>doc_final_v3.pdf</code>.
    </p>

    <h2 id="exportar-pdf">Exportar como PDF</h2>
    <p>
      Desde Word, la ruta correcta es Archivo &rarr; Guardar como (o Exportar) eligiendo el formato
      PDF, y entrando en el botón <strong>Opciones</strong> antes de guardar.
    </p>
    <figure class="my-4">
      <img
        class="img-fluid"
        src="/curso-media/unican/page_23.png"
        alt="Cuadro de diálogo de Word para guardar el documento en formato PDF, con el botón Opciones."
      />
    </figure>

    <h3>Opciones de guardado</h3>
    <ul>
      <li>Marcar Crear marcadores usando ➡️ Títulos.</li>
      <li>Marcar Etiquetas de la estructura del documento para accesibilidad.</li>
      <li>Propiedades del documento</li>
      <li>Desmarcar Texto de mapa de bits cuando las fuentes no estén incrustadas.</li>
    </ul>
    <figure class="my-4">
      <img
        class="img-fluid"
        src="/curso-media/unican/page_24.png"
        alt="Panel de opciones de exportación a PDF de Word con las casillas de marcadores, etiquetas de estructura y propiedades del documento."
      />
    </figure>
    <p>Merece la pena entender qué hace cada una, porque no son intercambiables:</p>
    <ul>
      <li>
        <strong>Etiquetas de la estructura del documento</strong> es la casilla imprescindible: es la
        que traslada al PDF los encabezados, las listas, las tablas y los textos alternativos. Sin
        ella, todo lo demás da igual.
      </li>
      <li>
        <strong>Crear marcadores usando Títulos</strong> genera el panel de marcadores lateral del
        visor, que permite saltar entre apartados. Es una ayuda de navegación para todo el mundo,
        especialmente en documentos largos.
      </li>
      <li>
        <strong>Propiedades del documento</strong> lleva al PDF el título y el idioma que hubiera en
        el original.
      </li>
      <li>
        <strong>Texto de mapa de bits</strong> convierte el texto en imagen cuando la fuente no se
        puede incrustar, y por eso hay que desmarcarlo: un texto convertido en imagen deja de poder
        leerse, seleccionarse y ampliarse.
      </li>
    </ul>

    <h2 id="escaneados">El caso de los documentos escaneados</h2>
    <p>
      Un documento escaneado no es un PDF de texto: es una fotografía de una hoja metida dentro de
      un PDF. Para un lector de pantalla está completamente vacío, no se puede buscar, no se puede
      copiar y al ampliarlo se pixela.
    </p>
    <p>
      Es la situación más grave y, a la vez, la más frecuente en la administración, porque afecta
      justamente a los documentos que la gente necesita: impresos, resoluciones y anexos que alguien
      escaneó en su día.
    </p>
    <p>La solución, por orden de preferencia:</p>
    <ol>
      <li>
        <strong>Localizar el original</strong> y volver a exportarlo. Casi siempre existe un fichero
        de Word en alguna parte, y es la única vía que da un resultado realmente bueno.
      </li>
      <li>
        <strong>Aplicar OCR</strong> (reconocimiento óptico de caracteres) si el original se ha
        perdido. Convierte la imagen en texto, pero no genera estructura por sí solo y comete
        errores, así que hay que revisarlo.
      </li>
      <li>
        <strong>Ofrecer una alternativa</strong> en otro formato accesible junto al PDF, cuando no
        se pueda hacer ninguna de las dos cosas anteriores.
      </li>
    </ol>

    <h2 id="comprobar-pdf">Comprobar el PDF</h2>
    <p>
      Después de exportar, hay que abrir el PDF y comprobar, como mínimo, el orden de lectura, los
      títulos, los enlaces, el idioma y el texto alternativo de las imágenes. El comprobador ayuda,
      pero no sustituye esa revisión.
    </p>
    <p>Para hacerlo hay tres niveles, según lo que tengas a mano:</p>
    <ul>
      <li>
        <strong>Sin instalar nada</strong>: las dos pruebas del principio del apartado, seleccionar
        texto y buscar una palabra, más abrir el panel de marcadores del visor para ver si la
        estructura ha viajado.
      </li>
      <li>
        <strong>Con Adobe Acrobat Pro</strong>: incluye una comprobación de accesibilidad completa y
        permite corregir las etiquetas y el orden de lectura. La versión gratuita, Acrobat Reader, no
        trae esa función.
      </li>
      <li>
        <strong>Con PAC</strong> (<i>PDF Accessibility Checker</i>), una herramienta gratuita que
        verifica el documento contra la norma <strong>PDF/UA</strong>, que es el estándar
        internacional de accesibilidad para este formato.
      </li>
    </ul>
    <p>
      Y una última recomendación que resuelve el problema de raíz: si el documento puede publicarse
      como página web en lugar de como PDF, casi siempre es mejor opción. Una página se adapta al
      tamaño de pantalla, respeta las preferencias de texto de la persona usuaria y no obliga a
      descargar nada.
    </p>
  </div>
</template>
