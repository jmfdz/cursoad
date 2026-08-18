<template>
  <div>
    <p>
      Una aplicación desarrollada con Vue puede cumplir perfectamente las WCAG 2.2. El principal
      problema de accesibilidad no es Vue ni Bootstrap, sino el comportamiento característico de
      una <strong>Single Page Application (SPA)</strong>: cómo cambia la navegación cuando el
      documento HTML nunca llega a recargarse.
    </p>

    <h2>Qué cambia en una SPA</h2>
    <p>En una web tradicional, cuando el usuario sigue un enlace:</p>
    <ol>
      <li>el navegador solicita un nuevo documento;</li>
      <li>se carga una página nueva;</li>
      <li>cambia el título del documento;</li>
      <li>el navegador establece un nuevo contexto de navegación;</li>
      <li>el usuario de lector de pantalla percibe con mayor facilidad que se encuentra en una página diferente.</li>
    </ol>
    <p>En una SPA con Vue Router sucede algo distinto: un <code>RouterLink</code> hace que Vue Router cambie el contenido de <code>&lt;RouterView&gt;</code>, pero el documento HTML no se recarga. Visualmente puede cambiar prácticamente toda la pantalla, pero para las tecnologías de asistencia sigue siendo el mismo documento.</p>
    <p>
      El W3C identifica específicamente los cambios de pantalla en Single Page Applications como
      situaciones que requieren una gestión especial del foco, y destaca también la necesidad de
      comunicar adecuadamente las actualizaciones dinámicas generadas mediante JavaScript. Las
      WCAG se aplican tanto a páginas como a aplicaciones web, incluyendo el contenido, el marcado
      y el código que define su estructura y funcionamiento.
    </p>
    <p>Por tanto, una SPA accesible debe resolver explícitamente algunos comportamientos que en una navegación tradicional proporciona el propio navegador:</p>
    <ul>
      <li>estructura semántica;</li>
      <li>título de cada vista;</li>
      <li>gestión del foco al cambiar de ruta;</li>
      <li>comunicación de mensajes dinámicos;</li>
      <li>navegación mediante teclado;</li>
      <li>formularios y errores;</li>
      <li>componentes interactivos;</li>
      <li>estados de carga;</li>
      <li>orden lógico del contenido.</li>
    </ul>

    <h2>Qué aporta Bootstrap 5 y qué sigue siendo responsabilidad de la aplicación</h2>
    <p>
      Bootstrap 5 proporciona una base importante de accesibilidad en sus estilos y componentes
      JavaScript, pero no garantiza por sí mismo que una aplicación sea accesible. Su propia
      documentación señala que la accesibilidad global de un proyecto depende en buena medida del
      marcado, los estilos adicionales y los scripts implementados por quien desarrolla. Bootstrap
      puede utilizarse para crear aplicaciones conformes con las WCAG, pero el resultado depende de
      cómo se utilice.
    </p>
    <p>Podemos repartir las responsabilidades de esta forma:</p>
    <ul>
      <li><strong>HTML</strong>: semántica, encabezados, enlaces y botones, formularios, listas, tablas.</li>
      <li><strong>Bootstrap 5 CSS</strong>: grid y responsive, formularios, alertas, estilos de foco, utilidades, <code>visually-hidden</code>.</li>
      <li><strong>Bootstrap 5 JavaScript</strong>: Modal, Dropdown, Collapse, Accordion, Offcanvas, Tabs.</li>
      <li><strong>Vue</strong>: estado, renderizado condicional, formularios, llamadas AJAX/API, errores, contenido dinámico.</li>
      <li><strong>Vue Router</strong>: navegación SPA, título de documento, ruta activa, gestión del foco.</li>
    </ul>
    <p>La regla general será:</p>
    <p>
      <strong>Utilizar HTML nativo primero, Bootstrap para presentación y componentes, Vue para
      estado y reactividad, y ARIA únicamente cuando sea necesario.</strong>
    </p>
    <p>
      Además: <strong>si Bootstrap JavaScript ya gestiona el comportamiento de un componente, no
      debemos volver a implementar ese mismo estado mediante Vue.</strong> Este principio se
      desarrolla con ejemplos concretos (dropdown, collapse, pestañas, modal) en «Ejemplos de
      componentes».
    </p>

    <h2>HTML semántico antes que ARIA</h2>
    <p>La primera capa de accesibilidad debe ser siempre el HTML. No:</p>
    <pre class="course-code"><code>&lt;div class="btn btn-primary" @click="guardar"&gt;
  Guardar
&lt;/div&gt;</code></pre>
    <p>Sí:</p>
    <pre class="course-code"><code>&lt;button type="button" class="btn btn-primary" @click="guardar"&gt;
  Guardar
&lt;/button&gt;</code></pre>
    <p>
      No necesitamos añadir <code>role="button"</code> ni <code>tabindex="0"</code>, porque
      <code>&lt;button&gt;</code> ya proporciona semántica de botón, entrada en la secuencia de
      foco, activación mediante teclado y nombre accesible a partir de su contenido.
    </p>
    <p>Lo mismo ocurre con la navegación: es preferible</p>
    <pre class="course-code"><code>&lt;RouterLink to="/usuarios" class="nav-link"&gt;
  Usuarios
&lt;/RouterLink&gt;</code></pre>
    <p>a</p>
    <pre class="course-code"><code>&lt;button class="nav-link" @click="router.push('/usuarios')"&gt;
  Usuarios
&lt;/button&gt;</code></pre>
    <p>Regla sencilla: cambiar de lugar es un enlace, ejecutar una acción es un botón.</p>
    <p>
      WAI-ARIA está orientado especialmente a situaciones donde el HTML no proporciona por sí solo
      la semántica necesaria, como los widgets personalizados; no debe utilizarse para sustituir
      innecesariamente controles HTML nativos. Precisamente porque ARIA se reserva para esos casos
      concretos, el conjunto de atributos que realmente hace falta dominar en el día a día es
      reducido.
    </p>

    <h2>Atributos y roles principales</h2>
    <p>
      En la práctica, quien utilice correctamente Vue y Bootstrap debería necesitar principalmente
      conocer estos atributos y roles: <code>aria-label</code>, <code>aria-describedby</code>,
      <code>aria-invalid</code>, <code>aria-current</code>, <code>aria-expanded</code>,
      <code>role="status"</code> y <code>role="alert"</code>, además de utilizar los componentes
      Bootstrap de acuerdo con su marcado oficial. Los apartados siguientes desarrollan, uno a uno,
      cómo aplicar estas ideas: primero a la estructura y la navegación de la aplicación y, en el
      siguiente apartado, al contenido que cambia dinámicamente.
    </p>

    <h2>Estructura principal de la aplicación</h2>
    <p>
      <code>App.vue</code> contiene el <code>template</code> inicial de la aplicación. En él se
      sitúa la estructura común que envuelve el contenido que cambia mediante
      <code>&lt;RouterView /&gt;</code>. Una estructura base recomendable sería:
    </p>
    <pre class="course-code"><code>&lt;template&gt;
  &lt;nav aria-label="Enlaces para saltar"&gt;
    &lt;a href="#contenido-principal" class="visually-hidden-focusable"&gt;
      Saltar al contenido principal
    &lt;/a&gt;
  &lt;/nav&gt;

  &lt;header&gt;
    &lt;AppHeader /&gt;
    &lt;MenuNavegacion /&gt;
  &lt;/header&gt;

  &lt;main id="contenido-principal" tabindex="-1" class="container py-4"&gt;
    &lt;RouterView /&gt;
  &lt;/main&gt;

  &lt;footer class="container py-4"&gt;
    Universidad de Alicante - 2026
  &lt;/footer&gt;

  &lt;Notificaciones /&gt;
&lt;/template&gt;</code></pre>
    <p>
      Vue recomienda proporcionar al principio de la aplicación un enlace que permita saltar
      directamente al contenido principal, evitando que las personas que navegan con teclado
      tengan que recorrer repetidamente la navegación. Bootstrap ya proporciona para este
      propósito la clase <code>visually-hidden-focusable</code>, por lo que no es necesario crear
      estilos CSS propios para ocultar y mostrar el enlace de salto.
    </p>
    <p>
      El <code>&lt;main&gt;</code> tendrá siempre <code>tabindex="-1"</code>. Esto no lo introduce
      en la navegación normal mediante Tab, pero permite llevarle el foco de forma programática
      cuando sea necesario, y será además nuestro destino de seguridad si una vista no contiene un
      <code>H1</code>.
    </p>

    <h2>Encabezados y estructura de cada vista</h2>
    <p>
      Cada vista principal debe disponer de un <code>H1</code> que identifique claramente su
      contenido y tenga <code>tabindex="-1"</code>:
    </p>
    <pre class="course-code"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;h1 tabindex="-1"&gt;Usuarios&lt;/h1&gt;
    ...
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
    <p>El nivel de encabezado se escoge por estructura, no por apariencia:</p>
    <pre class="course-code"><code>&lt;h1 tabindex="-1"&gt;Usuarios&lt;/h1&gt;
&lt;h2&gt;Usuarios activos&lt;/h2&gt;
&lt;h2&gt;Usuarios pendientes&lt;/h2&gt;
&lt;h3&gt;Filtros avanzados&lt;/h3&gt;</code></pre>
    <p>
      Bootstrap permite separar perfectamente ambos conceptos: <code>&lt;h3 class="h5"&gt;Filtros
      avanzados&lt;/h3&gt;</code> sigue siendo semánticamente un <code>H3</code>, aunque
      visualmente utilice el tamaño de un <code>H5</code>.
    </p>

    <h2>Título del documento y gestión del foco al cambiar de ruta</h2>
    <p>
      El criterio WCAG 2.4.2, <i>Page Titled</i>, establece que las páginas deben disponer de
      títulos que describan su tema o propósito, para ayudar a la persona usuaria a identificar
      dónde está y orientarse dentro del contenido. En una SPA el navegador no genera un nuevo
      <code>&lt;title&gt;</code> al cambiar de <code>RouterView</code>, por lo que debemos
      actualizarlo nosotros: si la ruta tiene <code>TITULO</code> en <code>meta</code>, se utiliza
      ese valor; si no, se utiliza su <code>name</code>.
    </p>
    <p>
      Este es uno de los puntos más importantes de accesibilidad específicos de una SPA. Supongamos
      que el usuario tiene el foco en «Usuarios» dentro del menú principal y activa el enlace: Vue
      sustituye el contenido de <code>&lt;RouterView&gt;</code>, pero el navegador no realiza una
      carga de documento nueva, así que el foco puede permanecer en la navegación aunque
      visualmente haya aparecido una pantalla completamente diferente. El W3C señala
      específicamente que los cambios de pantalla en aplicaciones SPA necesitan una gestión
      adecuada del foco, de modo que su orden y posición conserven una navegación lógica y
      comprensible.
    </p>
    <p>
      La solución consiste en llevar el foco al <code>H1</code> de la nueva vista y utilizar el
      <code>&lt;main&gt;</code> como destino alternativo. Cada vista debe declarar su
      <code>H1</code> con <code>tabindex="-1"</code>, y el <code>&lt;main&gt;</code> de
      <code>App.vue</code> también debe tenerlo: esto permite que ambos elementos reciban el foco
      mediante JavaScript sin introducirlos en la secuencia normal de Tab.
    </p>
    <p>
      Después de cada navegación se busca primero el <code>H1</code> situado dentro del contenido
      principal; si no existe, se utiliza el <code>&lt;main&gt;</code>. Como medida de seguridad,
      si el destino no tiene <code>tabindex</code>, se añade <code>tabindex="-1"</code> antes de
      llevarle el foco:
    </p>
    <pre class="course-code"><code>import { nextTick } from 'vue'

let esCargaInicial = true

router.afterEach(async (to) => {
  document.title = `${to.meta.TITULO ?? String(to.name ?? 'Página')} | Accesibilidad`

  if (esCargaInicial) {
    esCargaInicial = false
    return
  }

  await nextTick()

  const target =
    document.querySelector&lt;HTMLElement&gt;('main h1, [role="main"] h1') ??
    document.querySelector&lt;HTMLElement&gt;('main, [role="main"]')

  if (target) {
    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1')
    target.focus()
  }
})</code></pre>
    <p>
      La variable <code>esCargaInicial</code> evita modificar el foco durante la primera carga: la
      navegación comienza de manera normal al principio de la página, y la gestión del foco se
      aplica a partir del siguiente cambio de ruta. El título utiliza primero
      <code>to.meta.TITULO</code>, después el nombre de la ruta y, si ninguno existe, el texto
      «Página».
    </p>
    <p>
      El <code>H1</code> es el destino preferente porque identifica la nueva vista. El
      <code>&lt;main&gt;</code> conserva <code>tabindex="-1"</code> como destino de seguridad
      cuando no se encuentra un <code>H1</code>. La adición dinámica de <code>tabindex="-1"</code>
      es únicamente una medida de seguridad: tanto el <code>H1</code> como el
      <code>&lt;main&gt;</code> deben declararlo ya en sus respectivos <code>template</code>.
    </p>

    <h2>Contenido que desaparece mediante <code>v-if</code></h2>
    <p>Vue puede destruir completamente un nodo del DOM:</p>
    <pre class="course-code"><code>&lt;form v-if="editando"&gt;
  ...
&lt;/form&gt;</code></pre>
    <p>
      Si el foco se encuentra dentro y hacemos <code>editando.value = false</code>, el elemento
      que tenía el foco deja de existir, y la aplicación debe plantearse dónde debe continuar la
      interacción:
    </p>
    <pre class="course-code"><code>editando.value = false

await nextTick()

botonEditar.value?.focus()</code></pre>
    <p>Esto es especialmente importante cuando se eliminan formularios, paneles, filas, editores o controles dinámicos.</p>
    <p>
      La gestión de foco no consiste únicamente en cambiar de ruta: cualquier modificación
      dinámica que elimine el elemento actualmente enfocado puede necesitar una recolocación
      lógica. El W3C incluye estas situaciones dentro de la gestión de teclado y foco necesaria en
      aplicaciones web ricas.
    </p>

    <h3>Edición y eliminación desde una tabla</h3>
    <p>Un caso habitual comienza en un botón con un icono de tres puntos dentro de una fila de la tabla:</p>
    <ol>
      <li>El foco está en el botón de tres puntos.</li>
      <li>El usuario abre las acciones y activa el botón <strong>Editar</strong>.</li>
      <li>Se abre el modal, se modifica la información y se guarda.</li>
      <li>El modal se cierra y la tabla vuelve a renderizarse.</li>
    </ol>
    <p>
      Al volver a renderizarse la tabla, el botón que tenía el foco puede haber sido destruido y
      creado de nuevo. Aunque visualmente la tabla siga en el mismo lugar, la persona usuaria
      pierde el punto en el que estaba. Después de guardar hay que esperar al nuevo renderizado y
      llevar el foco a un destino lógico: si el botón que abrió la edición sigue existiendo, puede
      devolverse el foco a ese botón; si no puede recuperarse, se puede llevar al <code>H1</code>
      de la vista.
    </p>
    <p>
      En una eliminación sucede lo mismo, pero el botón que inició la acción desaparece junto con
      la fila eliminada. En ese caso hay que elegir un destino que continúe existiendo, como el
      <code>H1</code>. El objetivo es que, después de editar o eliminar, la persona usuaria no
      tenga que volver a recorrer toda la página para saber dónde ha quedado la interacción.
    </p>

    <h2>Menú de navegación y ruta activa</h2>
    <p>
      La gestión del foco resuelve dónde continúa la interacción después de un cambio; queda
      todavía otra pregunta relacionada con la navegación: cómo sabe la persona usuaria, mientras
      mira el propio menú, en qué sección se encuentra. El estado visual de Bootstrap
      (<code>class="active"</code>) no debería ser el único mecanismo utilizado para comunicar
      cuál es la página actual: cuando corresponda, el enlace activo debe exponer también
      <code>aria-current="page"</code>.
    </p>
    <p>
      El apartado «Arquitectura de información y navegación», en el bloque de usabilidad y UX, ya
      muestra este mismo patrón completo con <code>useRoute</code>, <code>RouterLink</code> y una
      función <code>esPaginaActual</code>. Aplica exactamente igual a un menú principal que a la
      navegación local o a unas migas de pan.
    </p>
  </div>
</template>
