<template>
  <div>
    <p>
      Además de gestionar el foco al cambiar de ruta, una SPA modifica constantemente fragmentos de
      contenido sin que haya ningún cambio de vista de por medio: listas que se cargan, mensajes
      que aparecen, tablas que se actualizan. Ese contenido dinámico necesita su propio tratamiento
      de accesibilidad.
    </p>

    <h2>Renderizado de listas con Vue</h2>
    <p>Las listas deben conservar su semántica HTML:</p>
    <pre class="course-code"><code>&lt;ul v-if="elementos.length > 0"&gt;
  &lt;li v-for="elemento in elementos" :key="elemento.id" v-text="elemento.nombre"&gt;&lt;/li&gt;
&lt;/ul&gt;

&lt;p v-else&gt;
  No hay elementos disponibles.
&lt;/p&gt;</code></pre>
    <p>
      No conviene generar <code>&lt;ul&gt;&lt;/ul&gt;</code> cuando no existen elementos: además de
      no aportar nada, esto permite representar correctamente el estado vacío. Cuando existe carga
      asíncrona podemos diferenciar claramente los tres estados:
    </p>
    <pre class="course-code"><code>&lt;p v-if="loading"&gt;
  Cargando usuarios…
&lt;/p&gt;

&lt;ul v-else-if="usuarios.length > 0"&gt;
  &lt;li v-for="usuario in usuarios" :key="usuario.id" v-text="usuario.nombre"&gt;&lt;/li&gt;
&lt;/ul&gt;

&lt;p v-else&gt;
  No hay usuarios.
&lt;/p&gt;</code></pre>
    <p>
      La misma regla debe aplicarse a <code>&lt;ol&gt;</code> y a cualquier componente que
      semánticamente genere una lista; las listas vacías <code>&lt;ul&gt;&lt;/ul&gt;</code> se
      marcan como error en CADUA. Una lista vacía o un estado de carga mal representado son, en el
      fondo, casos particulares de un problema más general en las SPA: comunicar cambios de
      contenido que no van acompañados de ningún movimiento de foco.
    </p>

    <h2>Contenido dinámico y WCAG 4.1.3</h2>
    <p>
      Las SPA modifican continuamente pequeñas partes de la interfaz sin que la persona usuaria
      cambie de página, por ejemplo al pasar de «Guardar» a «Usuario guardado correctamente», o de
      «Cargar tabla» a «Mostrando del 1 al 10 de 50 resultados». Visualmente estos cambios son
      evidentes, pero para quien usa un lector de pantalla pueden pasar desapercibidos porque el
      foco no se ha movido.
    </p>
    <p>
      El criterio WCAG 2.2 <strong>4.1.3 Status Messages</strong> establece que los mensajes de
      estado deben poder determinarse programáticamente, de forma que las tecnologías de asistencia
      puedan presentarlos sin necesidad de recibir el foco.
    </p>

    <h2><code>role="status"</code> para mensajes cotidianos</h2>
    <p>
      <code>role="status"</code> se utiliza para información que interesa a la persona usuaria pero
      que no necesita interrumpir inmediatamente su actividad: usuario guardado correctamente,
      documento actualizado, búsqueda completada, mostrando del 1 al 10 de 50 resultados, archivo
      subido, cambios aplicados. Con <code>role="status"</code>, el contenedor permanece en el DOM
      y Vue introduce dentro el mensaje dinámico. Patrón recomendado:
    </p>
    <pre class="course-code"><code>&lt;div role="status"&gt;
  &lt;p v-if="mensaje" class="alert alert-success" v-text="mensaje"&gt;&lt;/p&gt;
&lt;/div&gt;</code></pre>
    <p>
      El contenedor existe desde el inicio y permanece en el DOM. Cuando <code>mensaje</code>
      recibe contenido, Vue introduce el párrafo dentro de él y las tecnologías de asistencia
      pueden anunciar la actualización sin mover el foco. WAI-ARIA proporciona a
      <code>role="status"</code> propiedades de región viva predefinidas, por lo que normalmente no
      es necesario repetir manualmente <code>aria-live</code>, <code>aria-atomic</code> y
      <code>aria-relevant</code>.
    </p>

    <h2><code>role="alert"</code> para información urgente</h2>
    <p>
      <code>role="alert"</code> debe reservarse para información suficientemente importante como
      para requerir atención inmediata: se ha producido un error importante, se ha perdido la
      conexión necesaria para continuar, la sesión va a finalizar, una operación crítica no ha
      podido completarse. Una clase visual de alerta y <code>role="alert"</code> son conceptos
      diferentes: la presentación visual no determina que un mensaje deba comunicarse como urgente
      a las tecnologías de asistencia.
    </p>
    <p>
      Con <code>role="alert"</code>, el elemento completo puede aparecer mediante
      <code>v-if</code>: al insertarse en el DOM con su contenido, el lector de pantalla anuncia el
      aviso. Por tanto, no es necesario aplicar a <code>role="alert"</code> la regla de mantener
      previamente un contenedor vacío en el DOM.
    </p>
    <pre class="course-code"><code>&lt;p v-if="errorUrgente" class="alert alert-danger" role="alert" v-text="errorUrgente"&gt;&lt;/p&gt;</code></pre>
    <p>
      En este caso, Vue crea a la vez el elemento con <code>role="alert"</code> y su contenido. El
      aviso se anuncia al insertarse, aunque el elemento no estuviera previamente en el DOM. Esta
      es precisamente la diferencia práctica entre los dos roles: <code>status</code> necesita el
      contenedor ya presente; <code>alert</code> no lo necesita.
    </p>

    <h2>Estados de carga</h2>
    <p>Un spinner visual por sí solo no comunica qué está ocurriendo. Con Bootstrap podemos utilizar:</p>
    <pre class="course-code"><code>&lt;div role="status"&gt;
  &lt;div v-if="loading" class="d-flex align-items-center gap-2"&gt;
    &lt;div class="spinner-border spinner-border-sm" aria-hidden="true"&gt;&lt;/div&gt;
    &lt;p class="mb-0"&gt;Cargando usuarios…&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    <p>
      El spinner es decorativo (<code>aria-hidden="true"</code>) y el texto proporciona la
      información real. Cuando «Cargando usuarios…» desaparece y aparece el resultado, no es
      necesario mover el foco.
    </p>

    <h2>Estado de paginación de una tabla</h2>
    <p>El texto situado junto a los controles de paginación, debajo de una tabla, es un ejemplo típico de mensaje de estado:</p>
    <pre class="course-code"><code>&lt;div class="d-flex justify-content-between align-items-center"&gt;
  &lt;div role="status"&gt;
    &lt;p
      v-if="tablaCargada"
      class="mb-0"
      v-text="`Mostrando del ${primerResultado} al ${ultimoResultado} de ${totalResultados} resultados.`"
    &gt;&lt;/p&gt;
  &lt;/div&gt;

  &lt;nav aria-label="Paginación de resultados"&gt;
    ...
  &lt;/nav&gt;
&lt;/div&gt;</code></pre>
    <p>
      El contenedor con <code>role="status"</code> permanece en el DOM. Después de cargar la tabla,
      Vue introduce el texto «Mostrando del 1 al 10 de 50 resultados.»: la persona usuaria visual
      ve la información junto a los controles de paginación, y quien usa lector de pantalla la
      recibe después de cargar la tabla, sin necesidad de mover el foco. El mismo mensaje se
      actualiza al cambiar de página. Ese es precisamente el objetivo de WCAG 4.1.3.
    </p>

    <h2>Componente <code>Notificaciones</code></h2>
    <p>
      En la estructura común de <code>App.vue</code>, vista en el apartado anterior, se incluyó un
      componente <code>Notificaciones</code>; veamos ahora cómo se resuelve. Un composable
      <code>useNotificaciones</code> expone el estado y los métodos que utiliza el componente:
    </p>
    <pre class="course-code"><code>&lt;script setup lang="ts"&gt;
import { useNotificaciones } from '../composables/useNotificaciones'
import type { INotificacion } from '../composables/useNotificaciones'

const {
  notificaciones,
  mensajePaciente,
  mensajeUrgente,
  cerrarNotificacion,
} = useNotificaciones()

const coloresTipo: Record&lt;INotificacion['tipo'], string&gt; = {
  exito: 'success',
  error: 'danger',
  aviso: 'warning',
  info: 'info',
}
&lt;/script&gt;</code></pre>
    <p>
      Las notificaciones visibles se muestran en una región identificada como «Notificaciones».
      Cada una dispone de un botón de cierre cuyo nombre incluye el título de la notificación:
    </p>
    <pre class="course-code"><code>&lt;div class="toast-container position-fixed top-0 end-0 p-3" role="region" aria-label="Notificaciones"&gt;
  &lt;div
    v-for="item in notificaciones"
    :key="item.id"
    class="toast show"
    :class="`border-${coloresTipo[item.tipo]}`"
  &gt;
    &lt;div class="toast-header"&gt;
      &lt;strong
        class="me-auto"
        :class="`text-${coloresTipo[item.tipo]}-emphasis`"
        v-text="item.titulo"
      &gt;&lt;/strong&gt;
      &lt;time class="text-body-secondary" v-text="item.hora"&gt;&lt;/time&gt;
      &lt;button
        type="button"
        class="btn-close"
        :aria-label="`Cerrar: ${item.titulo}`"
        @click="cerrarNotificacion(item.id)"
      &gt;&lt;/button&gt;
    &lt;/div&gt;
    &lt;div class="toast-body" v-text="item.descripcion"&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    <p>
      La presentación visual y el anuncio a las tecnologías de asistencia se separan. El composable
      distribuye el texto entre dos mensajes: <code>mensajePaciente</code>, para los mensajes
      cotidianos que utiliza <code>role="status"</code>, y <code>mensajeUrgente</code>, para los
      mensajes que requieren atención inmediata y utiliza <code>role="alert"</code>. Los dos
      contenedores permanecen fuera de la presentación visual mediante
      <code>visually-hidden</code>:
    </p>
    <pre class="course-code"><code>&lt;div class="visually-hidden" role="status" v-text="mensajePaciente"&gt;&lt;/div&gt;

&lt;div class="visually-hidden" role="alert" v-text="mensajeUrgente"&gt;&lt;/div&gt;</code></pre>
    <p>
      De este modo, <code>notificaciones</code> genera los <i>toasts</i> visibles, mientras que
      <code>mensajePaciente</code> y <code>mensajeUrgente</code> determinan cómo se anuncia cada
      mensaje. La clase visual <code>toast</code> no decide si el mensaje es cotidiano o urgente:
      esa separación la realiza <code>useNotificaciones</code>.
    </p>
  </div>
</template>
