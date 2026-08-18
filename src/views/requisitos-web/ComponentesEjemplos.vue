<template>
  <div>
    <p>
      Como hemos visto en el apartado anterior, crear componentes interactivos accesibles tiene una
      gran complejidad. En nuestro caso, utilizar una librería como Bootstrap aporta componentes
      con una buena base, pero hay que mantener su estructura y comprobar su uso en cada caso.
    </p>
    <p>
      En el repositorio de GitHub del curso se puede consultar el fichero `componentes.html` con
      ejemplos de cuadros modales, acordeones, desplegables, pestañas, etc.
    </p>
    <p>
      Todos los componentes de este apartado comparten un mismo principio de fondo: si el propio
      plugin de Bootstrap JavaScript ya gestiona el estado y lo comunica mediante los atributos
      ARIA correctos, la tarea de Vue es dejarle hacerlo, no reconstruirlo por su cuenta.
    </p>

    <h2>Qué debe cumplir un componente interactivo</h2>
    <p>
      Aunque cada componente tenga sus particularidades, en general todos deberían cumplir una serie
      de requisitos comunes:
    </p>
    <ul>
      <li>poder utilizarse con teclado,</li>
      <li>mostrar un foco visible y mantenerlo en un lugar lógico,</li>
      <li>tener un nombre accesible claro,</li>
      <li>reflejar correctamente su estado, por ejemplo abierto o cerrado,</li>
      <li>y anunciar o hacer perceptibles los cambios importantes cuando el contenido se actualiza.</li>
    </ul>

    <h2>Dropdown de Bootstrap</h2>
    <p>
      Cuando utilizamos Bootstrap JavaScript debemos dejar que Bootstrap gestione el estado del
      componente:
    </p>
    <pre class="course-code"><code>&lt;div class="dropdown"&gt;
  &lt;button
    class="btn btn-secondary dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  &gt;
    Acciones
  &lt;/button&gt;

  &lt;ul class="dropdown-menu"&gt;
    &lt;li&gt;
      &lt;button class="dropdown-item" type="button" @click="editar"&gt;
        Editar
      &lt;/button&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;button class="dropdown-item" type="button" @click="eliminar"&gt;
        Eliminar
      &lt;/button&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;</code></pre>
    <p>
      Aquí, <code>aria-expanded="false"</code> indica el estado inicial. Bootstrap JavaScript se
      encarga después de actualizar el estado al abrir y cerrar el dropdown. Por tanto, no debemos
      crear innecesariamente un <code>:aria-expanded="dropdownAbierto"</code> ligado a un
      <code>ref(false)</code> propio únicamente para replicar un estado que ya gestiona Bootstrap.
    </p>
    <p>
      Tampoco debemos añadir automáticamente <code>role="menu"</code> y
      <code>role="menuitem"</code> a un dropdown de Bootstrap. Un dropdown puede contener enlaces,
      botones, formularios o controles diversos, y los patrones ARIA <i>menu</i> y
      <i>menuitem</i> implican un modelo de interacción específico. Para un dropdown normal es
      preferible mantener el HTML estándar, como en el ejemplo anterior, salvo que realmente
      estemos desarrollando un verdadero widget de tipo menú.
    </p>

    <h2>Collapse y Accordion</h2>
    <p>
      Bootstrap ya proporciona el comportamiento necesario para expandir y contraer contenido:
    </p>
    <pre class="course-code"><code>&lt;button
  class="btn btn-secondary"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#filtros"
  aria-expanded="false"
  aria-controls="filtros"
&gt;
  Mostrar filtros
&lt;/button&gt;

&lt;div id="filtros" class="collapse"&gt;
  &lt;div class="card card-body"&gt;
    &lt;p class="mb-0"&gt;Opciones disponibles para filtrar los resultados.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    <p>
      Bootstrap utiliza su plugin <i>Collapse</i> para gestionar el componente, y Accordion está
      construido internamente sobre este mismo comportamiento. No necesitamos añadir
      <code>role="status"</code> al contenido expandido: el propio botón ya comunica su estado
      mediante <code>aria-expanded</code>, y Bootstrap lo actualiza.
    </p>

    <h2>Pestañas Bootstrap</h2>
    <p>
      Las pestañas cambian contenido dentro de la misma vista. Por eso se implementan con botones y
      no como enlaces de navegación. Los roles de pestaña solo deben utilizarse cuando el
      componente cambia paneles de contenido dinámicamente: una navegación que únicamente tenga la
      apariencia visual de pestañas no debe utilizar <code>role="tablist"</code>,
      <code>role="tab"</code> ni <code>role="tabpanel"</code>.
    </p>
    <pre class="course-code"><code>&lt;ul id="usuarioTabs" class="nav nav-tabs" role="tablist"&gt;
  &lt;li class="nav-item" role="presentation"&gt;
    &lt;button
      id="datos-tab"
      class="nav-link active"
      type="button"
      role="tab"
      data-bs-toggle="tab"
      data-bs-target="#datos-panel"
      aria-controls="datos-panel"
      aria-selected="true"
    &gt;
      Datos
    &lt;/button&gt;
  &lt;/li&gt;
  &lt;li class="nav-item" role="presentation"&gt;
    &lt;button
      id="permisos-tab"
      class="nav-link"
      type="button"
      role="tab"
      data-bs-toggle="tab"
      data-bs-target="#permisos-panel"
      aria-controls="permisos-panel"
      aria-selected="false"
    &gt;
      Permisos
    &lt;/button&gt;
  &lt;/li&gt;
&lt;/ul&gt;

&lt;div id="usuarioTabsContenido" class="tab-content"&gt;
  &lt;div
    id="datos-panel"
    class="tab-pane fade show active"
    role="tabpanel"
    aria-labelledby="datos-tab"
    tabindex="0"
  &gt;
    &lt;p&gt;Datos generales del usuario.&lt;/p&gt;
  &lt;/div&gt;
  &lt;div
    id="permisos-panel"
    class="tab-pane fade"
    role="tabpanel"
    aria-labelledby="permisos-tab"
    tabindex="0"
  &gt;
    &lt;p&gt;Permisos asignados al usuario.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    <p>
      El contenedor utiliza <code>role="tablist"</code>. Cada botón tiene <code>role="tab"</code>,
      identifica su panel mediante <code>aria-controls</code> y comunica su estado con
      <code>aria-selected</code>. Cada panel utiliza <code>role="tabpanel"</code> y queda
      relacionado con su pestaña mediante <code>aria-labelledby</code>. Bootstrap actualiza las
      clases, <code>aria-selected</code> y el orden de foco cuando se cambia de pestaña: no
      debemos controlar de nuevo el estado activo mediante Vue si ya utilizamos
      <code>data-bs-toggle="tab"</code>.
    </p>

    <h2>Modales Bootstrap</h2>
    <p>
      Si utilizamos Bootstrap Modal, no debemos reconstruir manualmente su comportamiento mediante
      Vue. El modal puede declararse al final de la misma vista donde se utiliza:
    </p>
    <pre class="course-code"><code>&lt;button
  type="button"
  class="btn btn-danger"
  data-bs-toggle="modal"
  data-bs-target="#modalEliminar"
&gt;
  Eliminar usuario
&lt;/button&gt;

&lt;div
  id="modalEliminar"
  class="modal fade"
  tabindex="-1"
  aria-labelledby="modalEliminarTitulo"
  aria-hidden="true"
&gt;
  &lt;div class="modal-dialog"&gt;
    &lt;div class="modal-content"&gt;
      &lt;div class="modal-header"&gt;
        &lt;h2 id="modalEliminarTitulo" class="modal-title fs-5"&gt;Eliminar usuario&lt;/h2&gt;
        &lt;button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"&gt;&lt;/button&gt;
      &lt;/div&gt;
      &lt;div class="modal-body"&gt;
        &lt;p&gt;¿Seguro que desea eliminar este usuario?&lt;/p&gt;
      &lt;/div&gt;
      &lt;div class="modal-footer"&gt;
        &lt;button type="button" class="btn btn-secondary" data-bs-dismiss="modal"&gt;Cancelar&lt;/button&gt;
        &lt;button type="button" class="btn btn-danger" @click="eliminar"&gt;Eliminar&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    <p>
      El botón con <code>class="btn-close"</code> no contiene texto visible, por lo que utiliza
      <code>aria-label="Cerrar"</code> para proporcionar su nombre accesible. El atributo
      <code>data-bs-dismiss="modal"</code> indica al plugin de Bootstrap que debe cerrar el modal;
      se usa tanto en el botón gráfico de cierre como en <strong>Cancelar</strong>, que ya obtiene
      su nombre accesible de su texto visible.
    </p>
    <p>
      Bootstrap proporciona un plugin específico para diálogos modales y gestiona su comportamiento
      JavaScript. No debemos añadir manualmente la clase <code>.show</code>, construir nuestro
      propio mecanismo de apertura/cierre, ni duplicar mediante Vue el comportamiento interno de
      Bootstrap. Si necesitamos abrirlo desde código Vue:
    </p>
    <pre class="course-code"><code>import { Modal } from 'bootstrap'

const elemento = document.getElementById('modalEliminar')

if (elemento) {
  const modal = Modal.getOrCreateInstance(elemento)
  modal.show()
}</code></pre>
    <p>Así conservamos todo el comportamiento del componente Bootstrap.</p>

    <h2>Errores frecuentes</h2>
    <ul>
      <li>iconos sin nombre accesible,</li>
      <li>controles simulados que no reciben foco o no funcionan con teclado,</li>
      <li>paneles que se abren sin gestionar bien el foco,</li>
      <li>estados de carga, éxito o error que solo se perciben visualmente,</li>
      <li>y componentes que cambian el contenido, pero no dejan claro qué ha ocurrido.</li>
    </ul>
    <p>
      Por eso conviene revisar estos ejemplos no solo desde el punto de vista visual, sino también
      desde la interacción real, la semántica y la percepción de cambios.
    </p>
  </div>
</template>
