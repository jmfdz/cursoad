<script setup lang="ts">
import CodeTabs from '../../components/CodeTabs.vue'
</script>

<template>
  <div>
    <p>
      Una interfaz no solo debe ser visualmente correcta. También tiene que estar bien organizada
      para que el usuario entienda dónde está, qué información tiene delante y qué caminos puede
      seguir.
    </p>

    <h2>Agrupar y jerarquizar</h2>
    <p>
      La arquitectura de información consiste en ordenar contenidos, acciones y rutas de navegación
      de forma coherente. Para ello conviene agrupar lo relacionado, separar lo secundario y dar
      mayor peso visual a lo importante.
    </p>
    <p>
      No se trata solo de estética. Una mala agrupación aumenta la carga cognitiva, hace más lenta
      la búsqueda y obliga al usuario a interpretar demasiado la interfaz.
    </p>

    <h2>Orientación del usuario</h2>
    <p>En cualquier pantalla deberían resolverse con claridad cuatro preguntas básicas:</p>
    <ul>
      <li><strong>Dónde estoy</strong>.</li>
      <li><strong>Qué puedo hacer aquí</strong>.</li>
      <li><strong>Cómo vuelvo atrás o cambio de sección</strong>.</li>
      <li><strong>Qué paso sigue</strong>, si estoy dentro de un proceso.</li>
    </ul>
    <p>
      Cuando esto no está claro, aparecen menús redundantes, títulos ambiguos o pantallas que
      exigen demasiada interpretación antes de actuar.
    </p>
    <p>
      No basta con que existan menús, enlaces o secciones. También deben organizarse de forma
      coherente para que el usuario pueda recorrer la interfaz con facilidad y entienda cómo pasar
      de una zona a otra sin perderse.
    </p>

    <h2>Patrones habituales de navegación</h2>
    <p>Según el tipo de contenido y la complejidad del sistema, pueden utilizarse distintos patrones:</p>
    <ul>
      <li><strong>Navegación principal</strong>, para las secciones globales del sitio o aplicación.</li>
      <li><strong>Navegación local</strong>, para apartados internos de una misma sección.</li>
      <li><strong>Migas de pan</strong>, cuando conviene reflejar una jerarquía de niveles.</li>
      <li><strong>Pestañas o paneles</strong>, cuando varias vistas comparten el mismo contexto.</li>
      <li><strong>Procesos por pasos</strong>, cuando la tarea es larga y conviene dividirla.</li>
    </ul>
    <p>
      El patrón elegido debe ayudar a orientarse, no añadir capas innecesarias. Si una navegación
      requiere demasiados clics o demasiada memoria, probablemente está mal resuelta.
    </p>
    <CodeTabs label="Implementación de la navegación de una sección">
      <template #js>
        <p>Por ejemplo, unas migas de pan pueden marcar la jerarquía y la página actual:</p>
        <pre class="course-code"><code>&lt;!-- La navegación tiene un nombre que indica su finalidad. --&gt;
&lt;nav aria-label="Migas de pan"&gt;
  &lt;ol class="breadcrumb"&gt;
    &lt;!-- Los niveles anteriores son enlaces. --&gt;
    &lt;li class="breadcrumb-item"&gt;&lt;a href="/"&gt;Inicio&lt;/a&gt;&lt;/li&gt;
    &lt;li class="breadcrumb-item"&gt;&lt;a href="/solicitudes"&gt;Solicitudes&lt;/a&gt;&lt;/li&gt;

    &lt;!-- El último elemento identifica la página actual y no es un enlace. --&gt;
    &lt;li class="breadcrumb-item active" aria-current="page"&gt;Detalle&lt;/li&gt;
  &lt;/ol&gt;
&lt;/nav&gt;</code></pre>

        <p>En una navegación local, el enlace activo también debe identificarse en el código:</p>
        <pre class="course-code"><code>&lt;!-- Esta navegación solo contiene apartados de la solicitud. --&gt;
&lt;nav aria-label="Apartados de la solicitud"&gt;
  &lt;ul class="nav nav-pills"&gt;
    &lt;li class="nav-item"&gt;
      &lt;!-- La clase active es visual; aria-current comunica el estado. --&gt;
      &lt;a class="nav-link active" aria-current="page" href="/solicitud/datos"&gt;Datos&lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="nav-item"&gt;
      &lt;a class="nav-link" href="/solicitud/documentos"&gt;Documentos&lt;/a&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;</code></pre>
      </template>

      <template #vue>
        <p>
          En una SPA se utiliza <code>RouterLink</code> para cambiar de vista sin recargar la página.
          La ruta actual permite aplicar el estilo activo y <code>aria-current</code>.
        </p>
        <pre class="course-code"><code>&lt;script setup lang="ts"&gt;
import { useRoute } from 'vue-router'

// Obtiene la ruta reactiva que está mostrando la aplicación.
const ruta = useRoute()

// Comprueba qué enlace corresponde a la vista actual.
function esPaginaActual(nombre: string) {
  return ruta.name === nombre
}
&lt;/script&gt;

&lt;template&gt;
  &lt;!-- RouterLink conserva la navegación propia de una SPA. --&gt;
  &lt;nav aria-label="Apartados de la solicitud"&gt;
    &lt;ul class="nav nav-pills"&gt;
      &lt;li class="nav-item"&gt;
        &lt;RouterLink
          :to="{ name: 'solicitud-datos' }"
          class="nav-link"
          :class="{ active: esPaginaActual('solicitud-datos') }"
          :aria-current="esPaginaActual('solicitud-datos') ? 'page' : undefined"
        &gt;
          Datos
        &lt;/RouterLink&gt;
      &lt;/li&gt;
      &lt;li class="nav-item"&gt;
        &lt;RouterLink
          :to="{ name: 'solicitud-documentos' }"
          class="nav-link"
          :class="{ active: esPaginaActual('solicitud-documentos') }"
          :aria-current="esPaginaActual('solicitud-documentos') ? 'page' : undefined"
        &gt;
          Documentos
        &lt;/RouterLink&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
  &lt;/nav&gt;
&lt;/template&gt;</code></pre>
      </template>
    </CodeTabs>

    <h2>Consistencia entre pantallas</h2>
    <p>
      La arquitectura también depende de la consistencia. Si los menús cambian de sitio, si una
      misma acción aparece con nombres distintos o si cada pantalla tiene una lógica diferente, la
      experiencia se vuelve impredecible.
    </p>
    <p>
      Una buena organización de contenidos y navegación reduce errores, mejora la orientación y
      facilita que el usuario complete tareas con menor esfuerzo.
    </p>
  </div>
</template>
