<script setup lang="ts">
import { ref } from 'vue'
import DemoComponente from '../../components/DemoComponente.vue'

const ultimaAccion = ref('')

function registrar(accion: string) {
  ultimaAccion.value = accion
}
</script>

<template>
  <div>
    <p>
      Como hemos visto en los apartados anteriores, crear componentes interactivos accesibles tiene
      una gran complejidad. En nuestro caso, utilizar una librería como Bootstrap aporta componentes
      con una buena base, pero hay que mantener su estructura y comprobar su uso en cada caso.
    </p>
    <p>
      Todos los componentes de este apartado comparten un mismo principio de fondo: si el propio
      plugin de Bootstrap JavaScript ya gestiona el estado y lo comunica mediante los atributos
      ARIA correctos, la tarea de Vue es dejarle hacerlo, no reconstruirlo por su cuenta.
    </p>
    <p>
      Cada componente se muestra aquí <strong>funcionando de verdad</strong>, junto al código que lo
      genera. Conviene probarlos con el ratón y después repetir el recorrido solo con el teclado,
      porque es ahí donde se aprecia lo que el plugin está haciendo por nosotros.
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
    <p>
      Los cinco requisitos se repiten en cada uno de los ejemplos que siguen. Al probarlos, merece
      la pena comprobarlos uno a uno en lugar de limitarse a mirar si el componente se abre.
    </p>

    <h2>Dropdown</h2>
    <p>
      Un dropdown despliega un conjunto de acciones asociadas a un elemento. Es el componente más
      habitual para no saturar una tabla con un botón por operación.
    </p>

    <DemoComponente
      label="menú desplegable de acciones"
      prueba="llega al botón con TAB y ábrelo con Intro o con la barra espaciadora. Dentro, recorre las opciones con las flechas y cierra con Escape; el foco vuelve al botón."
    >
      <template #demo>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Acciones
          </button>
          <ul class="dropdown-menu">
            <li>
              <button class="dropdown-item" type="button" @click="registrar('Editar')">
                Editar
              </button>
            </li>
            <li>
              <button class="dropdown-item" type="button" @click="registrar('Eliminar')">
                Eliminar
              </button>
            </li>
          </ul>
        </div>
        <p aria-live="polite" class="mt-3 mb-0">
          <template v-if="ultimaAccion">Última acción elegida: <strong>{{ ultimaAccion }}</strong>.</template>
          <template v-else>Todavía no has elegido ninguna acción.</template>
        </p>
      </template>

      <template #codigo>
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
      </template>
    </DemoComponente>

    <p>
      Si al probarlo abres el menú y miras el HTML con las herramientas de desarrollo, verás que
      <code>aria-expanded</code> pasa de <code>false</code> a <code>true</code> y vuelve a
      <code>false</code> al cerrar. Eso es exactamente lo que anuncia el lector de pantalla, y lo
      hace Bootstrap solo.
    </p>
    <p>
      Por eso, <code>aria-expanded="false"</code> en el código indica únicamente el estado inicial.
      No debemos crear innecesariamente un <code>:aria-expanded="dropdownAbierto"</code> ligado a un
      <code>ref(false)</code> propio para replicar un estado que ya gestiona Bootstrap: acabaríamos
      con dos fuentes de verdad que pueden desincronizarse.
    </p>
    <p>
      Tampoco debemos añadir automáticamente <code>role="menu"</code> y
      <code>role="menuitem"</code> a un dropdown de Bootstrap. Un dropdown puede contener enlaces,
      botones, formularios o controles diversos, y los patrones ARIA <i>menu</i> y
      <i>menuitem</i> implican un modelo de interacción específico. Para un dropdown normal es
      preferible mantener el HTML estándar, como en el ejemplo anterior, salvo que realmente
      estemos desarrollando un verdadero widget de tipo menú.
    </p>
    <p>
      Nótese que el botón que abre el dropdown es un <code>&lt;button&gt;</code> nativo, no un
      <code>div</code> con un manejador de clic. Por eso el mismo control ya responde tanto a un
      clic de ratón como a un toque en pantalla táctil, y recibe foco y se activa con
      <strong>Espacio</strong> o <strong>Intro</strong> sin tener que programarlo aparte. Si en su
      lugar se simulara el desencadenante con un <code>div</code> u otro elemento no interactivo,
      habría que añadir manualmente <code>tabindex="0"</code>, el manejo de teclado y comprobar
      que también responde al toque, con el riesgo de dejar alguna vía de acceso sin cubrir.
    </p>

    <h2>Collapse y Accordion</h2>
    <p>
      Collapse muestra u oculta un bloque de contenido. Accordion es varios Collapse coordinados,
      de modo que al abrir uno se cierra el anterior.
    </p>

    <DemoComponente
      label="bloque plegable"
      prueba="pulsa el botón y observa cómo cambia su texto de estado. Con el teclado se activa con Intro o Espacio, igual que cualquier botón."
    >
      <template #demo>
        <button
          class="btn btn-secondary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#demo-filtros"
          aria-expanded="false"
          aria-controls="demo-filtros"
        >
          Mostrar filtros
        </button>

        <div id="demo-filtros" class="collapse mt-3">
          <div class="card card-body">
            <p class="mb-0">Opciones disponibles para filtrar los resultados.</p>
          </div>
        </div>
      </template>

      <template #codigo>
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
      </template>
    </DemoComponente>

    <p>
      Aquí hay dos atributos que hacen todo el trabajo y conviene no confundir:
      <code>aria-expanded</code> va <strong>en el botón</strong> y dice si el contenido está abierto
      o cerrado; <code>aria-controls</code> también va en el botón y apunta al <code>id</code> del
      bloque que abre. El primero comunica el estado, el segundo la relación.
    </p>
    <p>
      Bootstrap utiliza su plugin <i>Collapse</i> para gestionar el componente, y Accordion está
      construido internamente sobre este mismo comportamiento. No necesitamos añadir
      <code>role="status"</code> al contenido expandido: el propio botón ya comunica su estado
      mediante <code>aria-expanded</code>, y Bootstrap lo actualiza.
    </p>
    <p>
      Un detalle que sí es responsabilidad nuestra: el texto del botón debe seguir teniendo sentido
      en los dos estados. «Mostrar filtros» funciona, porque describe la acción; un botón que solo
      diga «Filtros» deja al usuario sin saber si va a abrirlos o cerrarlos.
    </p>

    <h2>Pestañas</h2>
    <p>
      Las pestañas cambian contenido dentro de la misma vista. Por eso se implementan con botones y
      no como enlaces de navegación. Los roles de pestaña solo deben utilizarse cuando el
      componente cambia paneles de contenido dinámicamente: una navegación que únicamente tenga la
      apariencia visual de pestañas no debe utilizar <code>role="tablist"</code>,
      <code>role="tab"</code> ni <code>role="tabpanel"</code>.
    </p>

    <DemoComponente
      label="pestañas de datos y permisos"
      prueba="tabula hasta la pestaña activa y cambia de pestaña con las flechas izquierda y derecha, no con TAB. Un TAB más te lleva al contenido del panel."
    >
      <template #demo>
        <ul id="demo-usuarioTabs" class="nav nav-tabs" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              id="demo-datos-tab"
              class="nav-link active"
              type="button"
              role="tab"
              data-bs-toggle="tab"
              data-bs-target="#demo-datos-panel"
              aria-controls="demo-datos-panel"
              aria-selected="true"
            >
              Datos
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              id="demo-permisos-tab"
              class="nav-link"
              type="button"
              role="tab"
              data-bs-toggle="tab"
              data-bs-target="#demo-permisos-panel"
              aria-controls="demo-permisos-panel"
              aria-selected="false"
            >
              Permisos
            </button>
          </li>
        </ul>

        <div class="tab-content border border-top-0 p-3">
          <div
            id="demo-datos-panel"
            class="tab-pane fade show active"
            role="tabpanel"
            aria-labelledby="demo-datos-tab"
            tabindex="0"
          >
            <p class="mb-0">Datos generales del usuario.</p>
          </div>
          <div
            id="demo-permisos-panel"
            class="tab-pane fade"
            role="tabpanel"
            aria-labelledby="demo-permisos-tab"
            tabindex="0"
          >
            <p class="mb-0">Permisos asignados al usuario.</p>
          </div>
        </div>
      </template>

      <template #codigo>
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
      </template>
    </DemoComponente>

    <p>
      Al probarlo con teclado se aprecia lo que distingue a este componente: <strong>las pestañas no
      se recorren con <code>TAB</code></strong>. El tabulador entra en el grupo de pestañas y sale
      de él, y el cambio entre pestañas se hace con las flechas. Es el comportamiento que espera
      quien usa un lector de pantalla, y Bootstrap lo implementa por nosotros.
    </p>
    <p>
      El reparto de atributos es el siguiente: el contenedor utiliza <code>role="tablist"</code>.
      Cada botón tiene <code>role="tab"</code>, identifica su panel mediante
      <code>aria-controls</code> y comunica su estado con <code>aria-selected</code>. Cada panel
      utiliza <code>role="tabpanel"</code> y queda relacionado con su pestaña mediante
      <code>aria-labelledby</code>.
    </p>
    <p>
      El <code>tabindex="0"</code> de los paneles tampoco es decorativo: hace que el panel pueda
      recibir el foco, de modo que tras elegir una pestaña el siguiente <code>TAB</code> lleva
      directamente a su contenido. Bootstrap actualiza las clases, <code>aria-selected</code> y el
      orden de foco cuando se cambia de pestaña: no debemos controlar de nuevo el estado activo
      mediante Vue si ya utilizamos <code>data-bs-toggle="tab"</code>.
    </p>

    <h2>Modales</h2>
    <p>
      Un modal interrumpe la tarea para pedir una confirmación o mostrar información. Es el
      componente con más requisitos de accesibilidad, porque mientras está abierto debe capturar el
      foco y no dejar que se escape al contenido de detrás.
    </p>

    <DemoComponente
      label="diálogo modal de confirmación"
      prueba="ábrelo y tabula varias veces: el foco da vueltas dentro del diálogo y no sale al resto de la página. Ciérralo con Escape y comprueba que el foco vuelve al botón que lo abrió."
    >
      <template #demo>
        <button
          type="button"
          class="btn btn-danger"
          data-bs-toggle="modal"
          data-bs-target="#demo-modalEliminar"
        >
          Eliminar usuario
        </button>

        <div
          id="demo-modalEliminar"
          class="modal fade"
          tabindex="-1"
          aria-labelledby="demo-modalEliminarTitulo"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h2 id="demo-modalEliminarTitulo" class="modal-title fs-5">Eliminar usuario</h2>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
              </div>
              <div class="modal-body">
                <p class="mb-0">¿Seguro que desea eliminar este usuario?</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Eliminar</button>
              </div>
            </div>
          </div>
        </div>
      </template>

      <template #codigo>
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
      </template>
    </DemoComponente>

    <p>
      Lo que acabas de comprobar al tabular tiene nombre: <strong>retención del foco</strong>. Es el
      requisito que más se incumple cuando alguien construye un modal a mano, porque de nada sirve
      que el diálogo se vea encima si el teclado sigue paseando por los enlaces de la página que hay
      debajo. Bootstrap lo resuelve, y también devuelve el foco al botón de origen al cerrar, que es
      la otra mitad del problema.
    </p>
    <p>
      El título del diálogo se conecta con el contenedor mediante
      <code>aria-labelledby</code>, de forma que al abrirse el lector de pantalla anuncia de qué
      diálogo se trata. El botón con <code>class="btn-close"</code> no contiene texto visible, por
      lo que utiliza <code>aria-label="Cerrar"</code> para proporcionar su nombre accesible. El
      atributo <code>data-bs-dismiss="modal"</code> indica al plugin de Bootstrap que debe cerrar el
      modal; se usa tanto en el botón gráfico de cierre como en <strong>Cancelar</strong>, que ya
      obtiene su nombre accesible de su texto visible.
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
      Todos ellos tienen algo en común: se detectan en cuanto se aparta el ratón. Por eso conviene
      revisar estos ejemplos no solo desde el punto de vista visual, sino también desde la
      interacción real, la semántica y la percepción de cambios.
    </p>
  </div>
</template>
