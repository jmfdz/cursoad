<template>
  <div>
    <p>
      WAI-ARIA (<i>Web Accessibility Initiative - Accessible Rich Internet Applications</i>) es una
      especificación del W3C. Está pensada para hacer más accesible el contenido dinámico,
      principalmente JavaScript y Ajax, transmitiendo a las APIs de accesibilidad de los
      navegadores web información sobre el comportamiento de la interfaz y su estructura.
    </p>
    <p>
      Ahora bien, ARIA no sustituye al HTML nativo ni corrige por sí sola una interacción mal
      construida. Si un componente no puede usarse bien con teclado o no tiene una estructura
      correcta, añadir atributos ARIA no resolverá el problema de base.
    </p>
    <p>
      Ejemplos de componentes que necesitan atributos WAI-ARIA son los cuadros modales, carruseles,
      áreas interactivas en las que se recarga el contenido dinámicamente, menús desplegables, etc.
    </p>
    <p>
      En los siguientes apartados se describen los principales atributos, propiedades y estados de
      WAI-ARIA.
    </p>

    <h2>Tabindex</h2>
    <p>
      Es conveniente recordar que los enlaces, botones y elementos de formulario, entre otros
      controles nativos, pueden recibir el foco del teclado sin añadir <code>tabindex</code>.
    </p>
    <p>
      Por el contrario, elementos HTML como listas, párrafos, capas `div` o `span` nunca reciben
      el foco del teclado al tratarse de elementos con un propósito diferente: marcar y maquetar el
      contenido.
    </p>
    <p>
      Por este motivo, no se deben incluir eventos JavaScript tales como `onclick` u `onkeypress`
      en elementos de marca y maquetación, puesto que estaríamos dejando fuera a los usuarios que
      acceden sin ratón.
    </p>
    <p>Veamos un ejemplo:</p>
    <pre class="course-code"><code>&lt;div onclick="alert('¡Saludo!');"&gt;Púlsame&lt;/div&gt;</code></pre>
    <p>
      Lo que estamos haciendo es crear una capa `div` que simula el comportamiento de un enlace o
      un botón, que no es su propósito y además jamás se podrá acceder por teclado ya que este
      elemento nunca recibirá el foco.
    </p>
    <p>
      Si por compatibilidad o por una interfaz ya construida no podemos sustituir un `div` o un
      `li` interactivo por un control nativo, hay que completar manualmente su comportamiento:
      foco con `tabindex`, rol, nombre accesible y activación con teclado. Es más trabajo y por eso
      se debe preferir un enlace o botón nativo siempre que sea posible.
    </p>
    <pre class="course-code"><code>&lt;div role="button" tabindex="0" onclick="saludar()"
  onkeydown="if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); saludar(); }"&gt;
  Púlsame
&lt;/div&gt;</code></pre>
    <p>El atributo `tabindex` puede utilizarse para varios cometidos dependiendo del valor asignado:</p>
    <ul>
      <li>`tabindex="0"` permite que un elemento que no puede recibir el foco por defecto pueda recibirlo siguiendo el orden natural del HTML.</li>
      <li>`tabindex="-1"` permite que el elemento pueda coger el foco mediante JavaScript con la función `focus()`, aunque no podamos llegar a él con tabulación normal.</li>
      <li>Un valor positivo, como <code>tabindex="1"</code>, define un orden de tabulación explícito. No se recomienda su uso porque puede crear confusión.</li>
    </ul>

    <h2>Roles</h2>
    <p>
      Incluir información sobre el rol o función de un elemento de nuestra página mediante ARIA es
      tan sencillo como añadir a la etiqueta del elemento `role="[nombre_del_rol]"`.
    </p>
    <p>Por ejemplo:</p>
    <pre class="course-code"><code>&lt;div role="progressbar" aria-label="Progreso" aria-valuemin="0" aria-valuemax="100" aria-valuenow="60"&gt;
  60 %
&lt;/div&gt;

&lt;ul role="tree" aria-label="Contenido"&gt;
  &lt;li role="treeitem" aria-level="1"&gt;Tema 1&lt;/li&gt;
&lt;/ul&gt;</code></pre>
    <p>
      El rol de un elemento debería mantenerse estable. Si una interfaz necesita cambiarlo,
      normalmente conviene revisar el patrón para comprobar si se está usando el elemento adecuado.
    </p>
    <p>
      Existen dos tipos de roles: aquellos que definen elementos de la interfaz y los que definen
      la estructura de la página.
    </p>

    <h2>Landmark roles</h2>
    <p>
      Dentro de los roles que definen la estructura de la página se distinguen los
      <i>landmark roles</i>, que se usan para identificar áreas separadas de la página y
      transmitir la naturaleza de las mismas.
    </p>
    <p>Los roles de estructura y su función son:</p>
    <ul>
      <li>`role="banner"` para la cabecera principal.</li>
      <li>`role="navigation"` para los menús de navegación.</li>
      <li>`role="main"` para marcar dónde está el contenido principal de la página.</li>
      <li>`role="complementary"` para contenidos no imprescindibles, por ejemplo una barra lateral.</li>
      <li>`role="contentinfo"` para la información repetida del pie.</li>
      <li>`role="search"` para las zonas donde hay un buscador.</li>
      <li>`role="form"` para una zona de formulario identificada con un nombre accesible.</li>
      <li>`role="application"` si hay una aplicación web interactiva que cambia las reglas normales de teclado.</li>
    </ul>
    <p>
      En general, es recomendable utilizar las etiquetas nativas de HTML5 para marcar zonas de un
      sitio web como `nav`, `header` o `main`. Si las utilizamos, no se debe poner etiqueta nativa
      y `role` juntos por redundancia.
    </p>
    <pre class="course-code"><code>&lt;nav role="navigation"&gt;...&lt;/nav&gt; &lt;!-- Mal por redundancia --&gt;</code></pre>
    <p>
      Para los roles de estructura, además, puede ser necesario incluir `aria-label` para indicar
      el título de la zona. Por ejemplo:
    </p>
    <pre class="course-code"><code>&lt;div role="navigation" aria-label="Menú principal"&gt;
  &lt;ul&gt;...&lt;/ul&gt;
&lt;/div&gt;</code></pre>

    <h2>aria-label, aria-labelledby y aria-describedby</h2>
    <p>
      Estos atributos nos permiten dar un nombre accesible, etiquetar o dar una descripción a los
      elementos HTML que lo necesiten.
    </p>
    <p>
      `aria-label` sirve para dar nombre accesible a un elemento. Debe usarse solo en ocasiones que
      lo requieran; por defecto, el nombre de un elemento debe ser su contenido.
    </p>
    <pre class="course-code"><code>&lt;button type="button" aria-label="Cerrar"&gt;×&lt;/button&gt;</code></pre>
    <p>
      `aria-labelledby` también sirve para dar un nombre a un elemento HTML, con la diferencia de
      que aquí referenciamos el `id` de otro elemento que actúa como etiqueta.
    </p>
    <pre class="course-code"><code>&lt;section aria-labelledby="titulo-informe"&gt;
  &lt;h3 id="titulo-informe"&gt;Informe de accesibilidad&lt;/h3&gt;
  ...
&lt;/section&gt;</code></pre>
    <p>
      `aria-describedby` permite asociar una descripción larga a un elemento indicando el `id` del
      elemento que proporciona la descripción.
    </p>
    <pre class="course-code"><code>&lt;label for="usuario"&gt;Usuario&lt;/label&gt;
&lt;input id="usuario" aria-describedby="ayuda-usuario"&gt;
&lt;p id="ayuda-usuario"&gt;Escribe tu dirección de correo sin @ua.es.&lt;/p&gt;</code></pre>

    <h2>Estados y propiedades</h2>
    <p>
      Los elementos dinámicos cambian de estado, por ejemplo un menú desplegable puede estar
      plegado o desplegado. ARIA permite definir las propiedades y estados de los elementos.
    </p>
    <pre class="course-code"><code>&lt;ul role="tree" aria-label="Categorías"&gt;
  &lt;li role="treeitem" aria-expanded="false" tabindex="0"&gt;
    Lenguajes
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>
    <p>
      En este ejemplo se indica que el elemento del árbol “Lenguajes” está plegado. Cuando el
      usuario lo despliegue deberás cambiar dinámicamente su estado mediante JavaScript para que los
      productos de apoyo puedan transmitir el cambio al usuario. Un árbol completo también necesita
      implementar su modelo de navegación con teclado.
    </p>
    <pre class="course-code"><code>$id.attr('aria-expanded', 'true');</code></pre>
    <p>
      Por tanto, el rol es fijo, no se cambia; los estados y propiedades son dinámicos y sí deben
      actualizarse.
    </p>
    <p>
      Esto es especialmente importante en componentes interactivos y en cambios parciales de la
      interfaz, por ejemplo al abrir un desplegable, mostrar un panel, actualizar resultados o
      insertar un mensaje de error o confirmación.
    </p>
    <p>Veamos un ejemplo del típico desplegable:</p>
    <pre class="course-code"><code>&lt;button id="toggleButton" aria-expanded="false" aria-controls="panel"&gt;
  Mostrar panel
&lt;/button&gt;
&lt;div id="panel" hidden&gt;
  &lt;p&gt;Este es el contenido del panel desplegable.&lt;/p&gt;
&lt;/div&gt;
&lt;script&gt;
const button = document.getElementById('toggleButton');
const panel = document.getElementById('panel');

button.addEventListener('click', () =&gt; {
  const isExpanded = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!isExpanded));
  panel.hidden = isExpanded;
});
&lt;/script&gt;</code></pre>

    <h2>Live regions: aria-live</h2>
    <p>
      `aria-live` permite identificar una zona dinámica de nuestro contenido que se actualiza
      automáticamente. De esta manera los cambios se anunciarán al usuario de los productos de
      apoyo. En función de su valor (`off`, `polite`, `assertive`) indicaremos cuándo queremos que
      se anuncie la actualización.
    </p>
    <p>
      Se combina con `aria-atomic` para indicar si queremos que se anuncie toda la región o solo
      las partes que cambian, y con `aria-relevant` para indicar el tipo de actualización que
      queremos que se anuncie.
    </p>
    <p>
      <code>role="alert"</code> crea una región de aviso urgente con un comportamiento equivalente
      a <code>aria-live="assertive"</code>.
    </p>
    <pre class="course-code"><code>&lt;!-- Mensaje informativo: se anuncia cuando cambia --&gt;
&lt;p id="estado" aria-live="polite"&gt;&lt;/p&gt;

&lt;!-- Error urgente insertado dinámicamente --&gt;
&lt;div role="alert"&gt;No se ha podido guardar el formulario.&lt;/div&gt;</code></pre>
    <p>
      En cualquier caso, esto debe aplicarse sobre componentes que además sean utilizables con
      teclado, tengan foco visible y una estructura correcta. ARIA complementa la interacción, pero
      no sustituye una base bien construida.
    </p>
  </div>
</template>
