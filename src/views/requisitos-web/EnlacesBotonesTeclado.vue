<template>
  <div>
    <p>
      Los enlaces y botones son los elementos con los que se maneja una página. De ellos depende
      que alguien pueda moverse por el sitio, enviar un formulario o lanzar una acción, y son
      también los elementos por los que va pasando el foco del teclado.
    </p>
    <p>
      Una página web no debe depender exclusivamente del ratón. Debe poder recorrerse y utilizarse
      también con teclado, ya que muchas personas navegan de esta forma de manera habitual o la
      necesitan como única vía de acceso.
    </p>
    <p>Para que un control cumpla su función, necesita cuatro cosas a la vez:</p>
    <ol>
      <li>estar construido con <strong>el elemento adecuado</strong>, un enlace o un botón;</li>
      <li>tener un <strong>nombre claro</strong> que explique qué hace;</li>
      <li>poder <strong>alcanzarse con el teclado</strong> en un orden lógico;</li>
      <li><strong>verse</strong> cuando recibe el foco.</li>
    </ol>
    <p>
      Si falla cualquiera de las cuatro, el control deja de ser utilizable para una parte de las
      personas. Este apartado las recorre en ese orden, y entre la segunda y la tercera se detiene
      en una técnica que hace falta en varias de ellas: cómo ocultar contenido sin ocultárselo
      también a quien no ve la pantalla.
    </p>

    <h2>Elegir el control adecuado: enlace o botón</h2>
    <p>
      La regla es sencilla y resuelve la mayoría de las dudas: <strong>los enlaces navegan y los
      botones actúan</strong>. Un enlace lleva a otro sitio, ya sea otra página o un punto de la
      página actual; un botón ejecuta algo sin cambiar de dirección.
    </p>
    <pre class="course-code"><code>&lt;!-- Navega a otra página --&gt;
&lt;a href="resultados.html"&gt;Consultar resultados&lt;/a&gt;

&lt;!-- Ejecuta una acción en la página actual --&gt;
&lt;button type="button"&gt;Actualizar resultados&lt;/button&gt;</code></pre>
    <p>
      No es una cuestión de estilo, porque cada uno se comporta de forma distinta: el lector de
      pantalla los anuncia con nombres diferentes («enlace» o «botón»), el enlace se activa con
      <strong>INTRO</strong> y el botón también con la <strong>barra espaciadora</strong>, y el menú
      contextual del enlace ofrece abrirlo en otra pestaña, algo que en un botón no tendría
      sentido. Quien navega con teclado usa esa información para saber qué va a ocurrir antes de
      pulsar.
    </p>
    <p>
      La distinción importa especialmente en aplicaciones que tienen un alto uso de peticiones
      Ajax: para recargar contenido o procesar información se deben utilizar siempre botones. Los
      enlaces, sin embargo, están pensados para provocar cambio de página.
    </p>
    <p>
      Lo que no debemos hacer en ningún caso es usar <code>div</code>, <code>span</code> u otros
      elementos de maquetación para simular su comportamiento. Un <code>div</code> con un
      <code>onclick</code> parece un botón, pero no recibe el foco, no responde al teclado y el
      lector de pantalla no lo anuncia como algo pulsable:
    </p>
    <pre class="course-code"><code>&lt;!-- Evitar: no recibe foco ni funciona con teclado de forma nativa --&gt;
&lt;div onclick="guardar()"&gt;Guardar&lt;/div&gt;

&lt;!-- Correcto: incluye semántica y comportamiento de teclado --&gt;
&lt;button type="button" onclick="guardar()"&gt;Guardar&lt;/button&gt;</code></pre>
    <p>
      Si un elemento parece interactivo, pero no recibe foco, no puede activarse con teclado o no
      muestra su estado de forma clara, parte de los usuarios quedará fuera. El apartado
      «WAI-ARIA» explica qué hacer cuando, por compatibilidad con una interfaz ya construida, no
      es posible sustituir ese <code>div</code> por un control nativo.
    </p>
    <p>
      Un último caso frecuente es el enlace sin destino, <code>&lt;a href="#"&gt;</code>, usado
      para colgar de él una acción de JavaScript. Si no navega a ninguna parte, no es un enlace:
      es un botón mal vestido.
    </p>

    <h2>Texto de enlaces y botones</h2>
    <p>
      Los enlaces y botones deben transmitir claramente qué ocurrirá cuando pulsemos en ellos.
      Deben ser cortos y concisos, por ejemplo: “Procesar imagen”, “Descargar documento”, etc.
    </p>
    <p>
      No podemos utilizar como texto de enlaces palabras como “aquí”, “pulsa aquí”, “enlace”,
      etc.
    </p>
    <p>
      El motivo es que los lectores de pantalla permiten <strong>listar todos los enlaces de una
      página</strong> y recorrerlos fuera de su contexto, saltando de uno a otro. Una lista de diez
      enlaces que dicen «aquí» no orienta a nadie. Por eso la prueba práctica es leer el texto del
      enlace de forma aislada y comprobar si se entiende a dónde lleva.
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

    <h3>Enlaces a descargas</h3>
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

    <h3>Cuando el control solo tiene un icono</h3>
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
      Conviene fijarse en que el icono lleva <code>aria-hidden="true"</code>. Sin él, el lector de
      pantalla podría intentar anunciar también el icono además del nombre del enlace. El nombre se
      pone en el control, y el icono se oculta a los productos de apoyo.
    </p>

    <h2>Ocultar contenido</h2>
    <p>
      Acabamos de ocultar un icono a las tecnologías de apoyo dejándolo visible en pantalla. Esa
      operación tiene tres parientes que se confunden con frecuencia, y elegir mal es uno de los
      errores más habituales. Ocultar algo en una web no es una sola cosa, sino cuatro:
    </p>
    <div class="table-responsive">
      <table class="table table-striped">
        <caption>Qué hace cada forma de ocultar contenido</caption>
        <thead>
          <tr>
            <th scope="col">Técnica</th>
            <th scope="col">¿Se ve?</th>
            <th scope="col">¿Lo anuncia el lector?</th>
            <th scope="col">Para qué sirve</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>display: none</code></td>
            <td>No</td>
            <td>No</td>
            <td>Ocultar para todo el mundo</td>
          </tr>
          <tr>
            <td><code>visibility: hidden</code></td>
            <td>No</td>
            <td>No</td>
            <td>Igual, pero reservando el espacio</td>
          </tr>
          <tr>
            <td><code>aria-hidden="true"</code></td>
            <td>Sí</td>
            <td>No</td>
            <td>Iconos decorativos y texto redundante</td>
          </tr>
          <tr>
            <td><code>.visually-hidden</code></td>
            <td>No</td>
            <td>Sí</td>
            <td>Contexto que solo hace falta al escuchar</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      El atributo <code>hidden</code> de HTML equivale a <code>display: none</code> y oculta para
      todo el mundo. Lo importante es retener que <strong><code>display: none</code> y
      <code>visibility: hidden</code> retiran el contenido también del árbol de
      accesibilidad</strong>, no solo de la pantalla, así que no sirven para ocultar visualmente
      algo que debe seguir anunciándose.
    </p>
    <p>
      Para eso está la última fila de la tabla, que resuelve situaciones como dar contexto a un
      enlace repetido. Bootstrap 5 ya trae la clase <code>.visually-hidden</code> de fábrica, así
      que basta con usarla; si se trabaja sin framework, esta es la implementación habitual:
    </p>
    <pre class="course-code"><code>.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
}</code></pre>
    <p>
      El truco está en que el elemento sigue existiendo y ocupando un punto del documento, pero
      reducido a un píxel recortado, de modo que la pantalla no lo muestra y el lector de pantalla
      sí lo recorre. Aplicado al caso de un enlace repetido:
    </p>
    <pre class="course-code"><code>&lt;!-- Evitar: el enlace, leído de forma aislada, no dice a qué se refiere --&gt;
&lt;a href="/noticia-1"&gt;Leer más&lt;/a&gt;

&lt;!-- Correcto: el complemento se lee pero no se ve --&gt;
&lt;a href="/noticia-1"&gt;
  Leer más&lt;span class="visually-hidden"&gt; sobre la matrícula del curso 2026&lt;/span&gt;
&lt;/a&gt;</code></pre>
    <p>
      Dos advertencias sobre esta técnica. La primera es que <strong>no debe usarse para esconder
      texto que también sería útil ver</strong>: si la información importa, casi siempre es mejor
      mostrarla. La segunda es que <strong>nunca debe ocultarse así un elemento que puede recibir
      el foco</strong>, porque al tabular el foco se iría a un punto invisible de la pantalla. Si un
      enlace o un botón se oculta visualmente, debe hacerse visible al recibir el foco, que es
      justo lo que hace el enlace de salto de «Saltar bloques de navegación», más adelante en este
      mismo apartado.
    </p>

    <h2>Recorrido con teclado</h2>
    <p>
      Al pulsar la tecla <code>TAB</code>, el foco del teclado va avanzando por los enlaces, botones, campos
      de formulario y otros elementos interactivos. Ese recorrido debe seguir una lógica clara y no
      obligar al usuario a saltar de una zona a otra sin sentido.
    </p>
    <p>
      En general, el orden del foco debería corresponderse con el orden natural del contenido en la
      página. Si el usuario ve una secuencia y el teclado sigue otra distinta, la navegación se
      vuelve confusa.
    </p>

    <h3>Cuando CSS reordena lo que el HTML ya había ordenado</h3>
    <p>
      Los frameworks CSS permiten reordenar visualmente elementos (por ejemplo, con clases de
      utilidad de orden en Bootstrap, o con <code>order</code> en Flexbox y Grid) sin tocar el
      HTML. Esto puede provocar que el orden visual difiera del orden en el que el teclado recorre
      esos mismos elementos, porque el foco sigue el orden del documento, no el orden visual
      aplicado por CSS.
    </p>
    <p>
      Por ejemplo, en un grupo de botones <em>Cancelar</em> y <em>Guardar cambios</em>, si CSS
      coloca «Guardar cambios» primero visualmente pero en el HTML aparece después, el teclado
      seguirá pasando primero por «Cancelar»:
    </p>
    <pre class="course-code"><code>&lt;!-- Evitar: el orden visual y el orden de foco no coinciden --&gt;
&lt;div class="d-flex"&gt;
  &lt;button type="button" class="order-2"&gt;Cancelar&lt;/button&gt;
  &lt;button type="submit" class="order-1"&gt;Guardar cambios&lt;/button&gt;
&lt;/div&gt;

&lt;!-- Correcto: el HTML ya está en el orden en que se ve y se tabula --&gt;
&lt;div class="d-flex"&gt;
  &lt;button type="submit"&gt;Guardar cambios&lt;/button&gt;
  &lt;button type="button"&gt;Cancelar&lt;/button&gt;
&lt;/div&gt;</code></pre>
    <p>
      El orden de foco no tiene por qué coincidir estrictamente con la disposición visual, pero
      debe seguir siendo lógico: lo más simple para evitar sorpresas es escribir los elementos en
      el HTML en el mismo orden en que se van a mostrar y recibir el foco. Es lo que exige el
      criterio
      <a href="https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html" rel="noreferrer">1.3.2 Secuencia significativa</a>.
    </p>
    <p>
      El caso se agrava en diseño responsive, porque un mismo bloque puede reordenarse solo en una
      anchura de pantalla. Conviene comprobar el recorrido del tabulador también en móvil, no solo
      en escritorio.
    </p>

    <h2>Saltar bloques de navegación</h2>
    <p>
      Quien navega con ratón llega al contenido de una página de un vistazo. Quien navega con
      teclado, no: tiene que pasar con <code>TAB</code> por todos los elementos que hay antes. En
      un sitio como el de la Universidad de Alicante, eso significa recorrer la cabecera, el menú
      principal, el buscador y los accesos de usuario <strong>en cada una de las páginas que
      visita</strong>, siempre lo mismo, antes de llegar a lo que ha venido a leer. Pueden ser
      decenas de tabulaciones repetidas una y otra vez.
    </p>
    <p>
      El criterio
      <a href="https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html" rel="noreferrer">2.4.1 Evitar bloques</a>,
      de nivel A, exige ofrecer un mecanismo para saltarse esos bloques que se repiten. La forma
      habitual de resolverlo es el <strong>enlace de salto</strong>: un enlace situado como primer
      elemento del <code>body</code> que apunta al contenido principal.
    </p>
    <pre class="course-code"><code>&lt;body&gt;
  &lt;a class="skip-link" href="#contenido"&gt;Saltar al contenido principal&lt;/a&gt;
  &lt;header&gt;...&lt;/header&gt;
  &lt;nav&gt;...&lt;/nav&gt;

  &lt;main id="contenido"&gt;
    ...
  &lt;/main&gt;
&lt;/body&gt;</code></pre>
    <p>
      La particularidad está en el CSS. El enlace normalmente no se ve, porque estorbaría al diseño,
      pero <strong>tiene que aparecer en cuanto recibe el foco</strong>. Y aquí es donde se aplica
      la tabla de «Ocultar contenido»: no puede ocultarse con <code>display: none</code>,
      porque entonces no recibiría el foco y no habría forma de llegar a él. Hay que sacarlo de la
      pantalla dejándolo enfocable. Este es el código real con el que funciona el enlace de salto
      de esta misma web del curso:
    </p>
    <pre class="course-code"><code>.skip-link {
  position: fixed;
  z-index: 1100;
  top: 0.5rem;
  left: 0.5rem;
  padding: 0.75rem 1rem;
  color: #fff;
  background: #005682;
  transform: translateY(-150%); /* Fuera de la pantalla, pero enfocable */
}

.skip-link:focus {
  color: #fff;
  transform: translateY(0); /* Al recibir el foco, entra en pantalla */
}</code></pre>
    <p>
      Puedes comprobarlo ahora mismo: pulsa <code>TAB</code> nada más cargar esta página y el
      enlace aparecerá en la esquina superior izquierda.
    </p>
    <p>Tres detalles que conviene no pasar por alto:</p>
    <ul>
      <li>
        el <strong>destino tiene que existir</strong>. Si el enlace apunta a
        <code>#contenido</code>, debe haber un elemento con ese <code>id</code>, y lo natural es
        que sea el <code>main</code>;
      </li>
      <li>
        debe ser el <strong>primer elemento enfocable</strong> de la página, o dejará de cumplir su
        función;
      </li>
      <li>
        si hay varios bloques repetidos, pueden ofrecerse varios enlaces de salto (al contenido, al
        menú, al buscador), aunque con uno bien puesto suele bastar.
      </li>
    </ul>
    <p>
      En una aplicación de una sola página hay un matiz añadido: como no se recarga el documento al
      cambiar de ruta, el enlace de salto no basta por sí solo y hay que gestionar el foco por
      código. Se explica en el apartado «SPA en Vue.js (I): estructura y navegación accesible».
    </p>

    <h2>Foco visible</h2>
    <p>
      No basta con que el foco exista, también debe verse con claridad. El usuario necesita saber
      en todo momento sobre qué elemento está situado para poder continuar la navegación o activar
      una acción.
    </p>
    <p>
      Por este motivo, no se debe eliminar el contorno de foco que trae el navegador salvo que se
      sustituya por otro estilo claramente visible y con contraste suficiente.
    </p>
    <pre class="course-code"><code>&lt;!-- Evitar: deja sin rastro visible a quien navega con teclado --&gt;
:focus {
  outline: none;
}

/* Correcto: si se sustituye el contorno, el nuevo debe verse igual de bien */
:focus-visible {
  outline: 3px solid #005fcc;
  outline-offset: 3px;
}</code></pre>
    <p>
      Conviene usar <code>:focus-visible</code> en lugar de <code>:focus</code>, porque el navegador
      solo lo aplica cuando el foco llega por teclado y no al pulsar con el ratón, que es
      justamente el motivo por el que muchos diseños acababan eliminando el contorno. El indicador
      necesita además una ratio de contraste de 3:1 frente a lo que lo rodea, como se explica en el
      apartado «Color y contraste».
    </p>

    <h2>Problemas habituales</h2>
    <p>Entre los fallos más frecuentes relacionados con enlaces, botones, teclado y foco están los siguientes:</p>
    <ul>
      <li>enlaces, botones o iconos que solo funcionan con ratón,</li>
      <li>textos de enlace que no se entienden fuera de su contexto,</li>
      <li>focos invisibles o con contraste insuficiente,</li>
      <li>orden de tabulación ilógico,</li>
      <li>cuadros modales o menús desplegables que no gestionan bien el foco,</li>
      <li>componentes creados con JavaScript que visualmente parecen correctos, pero no son utilizables con teclado.</li>
    </ul>
    <p>
      La comprobación más rentable de todo el curso cuesta un minuto: aparta el ratón y recorre la
      página entera con <code>TAB</code>. Si en algún momento no sabes dónde está el foco, no puedes
      llegar a algo o no puedes salir de un componente, ahí hay un fallo. En definitiva, si una
      funcionalidad no puede utilizarse correctamente con teclado, no puede considerarse accesible.
    </p>
  </div>
</template>
