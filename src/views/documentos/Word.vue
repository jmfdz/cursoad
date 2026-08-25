<template>
  <div>
    <p>
      Word es el punto de partida de la mayoría de los documentos institucionales, y también el
      origen de buena parte de los PDF que acaban publicados. Por eso conviene resolver la
      accesibilidad aquí: lo que se hace bien en el documento de Word se conserva al exportarlo, y
      lo que se hace mal es mucho más costoso de arreglar después.
    </p>
    <p>
      Los principios son los mismos que ya hemos visto en la web, solo cambia dónde se pulsa: texto
      legible, estructura marcada de verdad, alternativas para lo que no es texto y color que no sea
      el único portador de la información.
    </p>

    <h2 id="contenido-formato">Contenido y formato</h2>
    <p>El contenido debe ser claro, legible y estar correctamente identificado.</p>
    <ul>
      <li>Crea textos simples con un lenguaje sencillo</li>
      <li>Usa tamaños de letra como mínimo de 12 puntos</li>
      <li>Utiliza fuentes de tipo Sans Serif como Arial o Verdana</li>
      <li>Usa un interlineado suficiente; al menos 1,5 líneas</li>
      <li>No abuses del texto centrado o en MAYÚSCULAS</li>
    </ul>
    <p>
      No justifiques el texto a ambos lados. Dificulta su lectura y por tanto, su comprensión, sobre
      todo a personas con dislexia o baja visión.
    </p>
    <p>
      Son las mismas cifras que en la web, y por el mismo motivo: 12 puntos es el suelo por debajo
      del cual el texto deja de ser cómodo de leer para buena parte de la población, y el
      interlineado de 1,5 es lo que permite seguir el renglón sin perderse.
    </p>

    <h3>Idioma del documento</h3>
    <p>
      Especifica el idioma principal del documento y los cambios de idioma presentes en el texto. En
      caso contrario, la pronunciación no será correcta y perderemos información.
    </p>
    <p>Para el <strong>idioma principal</strong>: Archivo &rarr; Opciones &rarr; Idioma.</p>
    <figure class="my-4">
      <img
        class="img-fluid"
        src="/curso-media/unican/page_6.png"
        alt="Panel de opciones de Word con la sección Idioma seleccionada para fijar el idioma predeterminado del documento."
      />
    </figure>
    <p>
      Para un <strong>fragmento en otra lengua</strong>: se selecciona el texto y se cambia el
      idioma desde la barra de idioma, en la parte inferior de la ventana.
    </p>
    <figure class="my-4">
      <img
        class="img-fluid"
        src="/curso-media/unican/page_7.png"
        alt="Texto seleccionado en Word y barra de idioma inferior desde la que se asigna otro idioma a ese fragmento."
      />
    </figure>

    <h2 id="estructura-navegacion">Estructura y navegación</h2>
    <p>Una estructura clara mejora la comprensión y permite desplazarse por el documento con facilidad.</p>
    <ul>
      <li>Estructura el contenido en apartados, mejora la comprensión y facilita la navegación.</li>
      <li>No simules títulos cambiando el aspecto del texto, utiliza estilos.</li>
    </ul>
    <p>
      Esta es la regla más importante del apartado y la que más se incumple. Poner un párrafo en
      negrita y a 16 puntos produce algo que <em>parece</em> un título, pero para Word sigue siendo
      un párrafo corriente: no aparece en el índice, no se puede navegar hasta él y, al exportar a
      PDF, no genera ninguna estructura. Aplicar el estilo <strong>Título 1</strong> o
      <strong>Título 2</strong> es lo que convierte ese texto en un encabezado real, exactamente
      igual que <code>h1</code> y <code>h2</code> en una página web.
    </p>

    <h3>El panel de navegación como comprobación</h3>
    <p>Vista &rarr; Panel de navegación. Tiene doble función:</p>
    <ol>
      <li>Nos hacemos una idea de qué trata el documento</li>
      <li>Navegamos por él con facilidad</li>
    </ol>
    <p>
      Y una tercera, que resulta muy práctica: sirve de <strong>comprobación inmediata</strong>. Si
      al abrir el panel el documento aparece vacío o faltan apartados que sí se ven en las páginas,
      es que esos títulos están simulados con formato en lugar de marcados con estilos.
    </p>

    <h2 id="elementos-no-textuales">Imágenes y elementos no textuales</h2>
    <p>Los elementos visuales que aportan información deben tener una alternativa textual adecuada.</p>
    <p>Debemos describir:</p>
    <ul>
      <li>Imágenes</li>
      <li>Fórmulas matemáticas</li>
      <li>Gráficas</li>
      <li>Esquemas</li>
      <li>Tablas</li>
    </ul>
    <p>La descripción no debe ser superficial y debe responder a estas preguntas:</p>
    <ol>
      <li>¿Qué es?</li>
      <li>¿Cuál es su propósito?</li>
      <li>¿Qué transmite?</li>
    </ol>
    <p>No es sólo para personas ciegas, también beneficia a quienes tienen:</p>
    <ul>
      <li>Otros problemas de visión</li>
      <li>Problemas cognitivos</li>
    </ul>

    <h3>Cómo se añade el texto alternativo</h3>
    <p>
      Se hace desde el menú contextual del propio elemento, con clic derecho sobre él y la opción de
      texto alternativo. Si el elemento es decorativo, Word permite marcarlo como tal en ese mismo
      panel, y entonces el lector de pantalla lo ignora.
    </p>
    <figure class="my-4">
      <img
        class="img-fluid"
        src="/curso-media/unican/page_10.png"
        alt="Panel de texto alternativo de Word abierto sobre una imagen, con el cuadro donde se escribe la descripción y la casilla para marcarla como decorativa."
      />
    </figure>

    <h3>Formas, SmartArt y esquemas</h3>
    <p>
      Son objetos visuales y su contenido puede no leerse en un orden comprensible. Evitar usarlos
      para información imprescindible o revisar su orden de lectura y añadirles un texto alternativo
      que explique su función. Si son decorativos, se pueden marcar como tales.
    </p>
    <p>
      Al describir un esquema no basta con decir qué elementos contiene: lo que hay que transmitir
      son <strong>las relaciones entre ellos</strong>, que es justo lo que el dibujo comunica y el
      texto no. Un diagrama de tres fases enlazadas necesita que la descripción diga que van en
      secuencia, no solo cómo se llaman.
    </p>
    <figure class="my-4">
      <img
        class="img-fluid"
        src="/curso-media/unican/page_12.png"
        alt="Ejemplo de esquema en Word acompañado de su descripción textual."
      />
    </figure>

    <h3>Gráficas</h3>
    <p>
      Una gráfica plantea la misma pregunta que cualquier otra imagen: ¿es accesible? Y la respuesta
      casi nunca está en cómo se ve, sino en si su información llega por otra vía.
    </p>
    <ul>
      <li>Como elemento no textual, debemos incluir una descripción.</li>
      <li>
        Hay que comprobar que la gráfica tenga título y texto alternativo, y explicar también en
        texto la información o conclusión principal que aporta.
      </li>
    </ul>
    <p>
      Ese último punto es el que marca la diferencia. Describir «gráfico de barras con datos de
      matrícula por curso» no aporta nada: quien no ve la gráfica sigue sin saber qué pasó. La
      descripción útil es la conclusión, «la matrícula creció un 12 % entre 2023 y 2025, con la
      subida mayor en el último año».
    </p>
    <figure class="my-4">
      <img
        class="img-fluid"
        src="/curso-media/unican/page_17.png"
        alt="Gráfica con un diseño accesible: series diferenciadas además de por el color y con etiquetas legibles."
      />
    </figure>

    <h2 id="tablas">Tablas</h2>
    <p>
      Antes de dar una tabla por buena conviene preguntarse si es accesible, y para responder hay
      que mirar cuatro cosas:
    </p>
    <ul>
      <li>Tablas sencillas sin muchas agrupaciones</li>
      <li>Utilizarlas solo para mostrar contenido, no para maquetar contenido</li>
      <li>Tablas uniformes: evitar combinar o dividir celdas salvo que sea imprescindible.</li>
      <li>
        No dejar celdas vacías que oculten información: si la ausencia de un dato es relevante,
        indicarlo con texto, por ejemplo, “No disponible”.
      </li>
    </ul>
    <p>
      Insertar título a tablas (e ilustraciones) facilita la comprensión y el propósito de los
      datos. Y hay que marcar la <strong>fila de encabezado</strong>, que es el equivalente en Word
      a los <code>th</code> de una tabla web: sin ella, el lector de pantalla no puede decir a qué
      columna pertenece cada dato.
    </p>
    <figure class="my-4">
      <img
        class="img-fluid"
        src="/curso-media/unican/page_14.png"
        alt="Opciones de Word para insertar el título de una tabla y para marcar su primera fila como fila de encabezado."
      />
    </figure>
    <p>
      En tablas que ocupan más de una página hay que activar además la repetición del encabezado, de
      modo que los títulos de las columnas vuelvan a aparecer en cada página en lugar de quedarse
      solo en la primera.
    </p>
    <figure class="my-4">
      <img
        class="img-fluid"
        src="/curso-media/unican/page_15.png"
        alt="Propiedades de tabla en Word con la opción de repetir la fila de encabezado en cada página activada."
      />
    </figure>
    <figure class="my-4">
      <img
        class="img-fluid"
        src="/curso-media/unican/page_16.png"
        alt="Resultado final: tabla con título, fila de encabezado marcada y gráfica descrita, ya accesibles."
      />
    </figure>

    <h2 id="uso-color">Uso del color</h2>
    <p>
      El color es el punto donde más fácilmente se cuela un problema, porque el documento se ve
      perfectamente en la pantalla de quien lo escribe. Dos reglas:
    </p>
    <ul>
      <li>Utilizar un contraste suficiente entre color del texto y color del fondo.</li>
      <li>No transmitir información únicamente con el color.</li>
    </ul>
    <p>
      La segunda se aprecia comparando cómo se percibe un mismo documento con visión general y con
      daltonismo: las series que se distinguían por el color pasan a ser indistinguibles, y con
      ellas se pierde la información que dependía de esa diferencia.
    </p>
    <figure class="my-4">
      <img
        class="img-fluid"
        src="/curso-media/unican/page_18.png"
        alt="Comparación del mismo documento con visión general y simulando daltonismo: los colores que lo diferenciaban dejan de distinguirse."
      />
    </figure>
    <p>
      La solución no es renunciar al color, sino <strong>duplicar la señal</strong>: añadir una
      etiqueta de texto, una trama, un símbolo o un grosor distinto, de forma que la información
      siga estando cuando el color no se percibe.
    </p>
    <p>
      Para el contraste, puede usarse la calculadora de contraste, la misma herramienta que se
      explica en el apartado «Color y contraste» del bloque de requisitos web.
    </p>
    <figure class="my-4">
      <img
        class="img-fluid"
        src="/curso-media/unican/page_19.png"
        alt="Calculadora de contraste mostrando el resultado de una combinación de color de texto y de fondo."
      />
    </figure>

    <h2 id="enlaces">Enlaces</h2>
    <ul>
      <li>
        El texto de un enlace debe transmitir claramente su propósito, incluso fuera del contexto del
        texto que lo rodea.
      </li>
      <li>Prohibido: Haz click aquí, En este enlace, etc.</li>
      <li>Hay usuarios que navegan por listas de enlaces.</li>
    </ul>
    <p>
      Toda información es valiosa, así que conviene indicar el formato y el tamaño en el propio
      enlace. Podemos utilizar la herramienta <strong>Info en pantalla</strong> para añadir
      información complementaria.
    </p>
    <p>
      Hay además un detalle propio de Word: pegar una dirección larga deja como texto del enlace la
      URL completa, que el lector de pantalla deletrea carácter a carácter. Conviene sustituirla
      siempre por un texto descriptivo.
    </p>
    <figure class="my-4">
      <img
        class="img-fluid"
        src="/curso-media/unican/page_20.png"
        alt="Cuadro de inserción de hipervínculo en Word con el texto que se muestra y el botón de Info en pantalla."
      />
    </figure>

    <h2 id="comprobar">Comprobar el documento</h2>
    <p>
      Word incluye un revisor propio en <strong>Revisar &rarr; Comprobar accesibilidad</strong>. Es
      el equivalente a las herramientas automáticas que veremos en el bloque de herramientas, con
      las mismas virtudes y las mismas limitaciones: detecta lo que puede comprobarse
      mecánicamente —imágenes sin texto alternativo, tablas sin fila de encabezado, contraste
      insuficiente— y no detecta lo que exige criterio.
    </p>
    <p>
      Dicho de otro modo: el revisor puede decirte que una imagen tiene texto alternativo, pero no
      si ese texto describe lo que la imagen aporta. Por eso, además de pasarlo, conviene una
      revisión manual de tres cosas:
    </p>
    <ol>
      <li>que el <strong>panel de navegación</strong> refleje todos los apartados del documento;</li>
      <li>que las <strong>descripciones</strong> de imágenes y gráficas digan algo útil;</li>
      <li>que el documento se entienda <strong>en blanco y negro</strong>, imprimiéndolo o mirándolo sin color.</li>
    </ol>
    <p>
      Si el documento se va a publicar como PDF, este es además el momento de hacerlo bien: al
      exportar desde Word manteniendo la estructura, los títulos, las tablas y los textos
      alternativos viajan al PDF. Se explica en el apartado «PDF».
    </p>
  </div>
</template>
