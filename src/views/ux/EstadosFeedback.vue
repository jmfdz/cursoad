<template>
  <div>
    <p>
      Cuando una persona interactúa con una interfaz necesita saber en todo momento qué está
      ocurriendo, si su acción se ha procesado y qué puede hacer a continuación. Si no hay señales
      claras, aparecen la duda, la repetición de acciones y la sensación de falta de control.
    </p>
    <p>
      Los requisitos técnicos de formularios, etiquetas y validación accesible ya se han tratado en
      el bloque anterior. Aquí nos centramos en cómo responder mejor a las acciones del usuario y
      cómo comunicar lo que ocurre en la interfaz.
    </p>

    <h2>Estados de una interfaz</h2>
    <p>En muchos componentes y pantallas hay al menos cinco estados habituales que conviene diseñar de forma explícita:</p>
    <ul>
      <li><strong>Inicial</strong>: la pantalla todavía no tiene resultados o espera una acción del usuario.</li>
      <li><strong>Cargando</strong>: el sistema está procesando una petición y debe comunicarlo.</li>
      <li><strong>Vacío</strong>: no hay datos, resultados o elementos disponibles.</li>
      <li><strong>Éxito</strong>: la acción se ha completado correctamente.</li>
      <li><strong>Error</strong>: algo ha fallado y hay que explicar qué ha ocurrido o cómo corregirlo.</li>
    </ul>
    <p>
      Si estos estados no están pensados desde el principio, es frecuente acabar mostrando mensajes
      ambiguos, pantallas vacías o cambios de interfaz que el usuario no entiende.
    </p>
    <pre class="course-code"><code>&lt;!-- Estado de carga: informa sin interrumpir --&gt;
&lt;div class="alert alert-info" role="status"&gt;
  Cargando solicitudes…
&lt;/div&gt;

&lt;!-- Estado de éxito: confirma que la acción ha terminado --&gt;
&lt;div class="alert alert-success" role="status"&gt;
  La solicitud se ha guardado correctamente.
&lt;/div&gt;

&lt;!-- Estado de error: se anuncia de forma inmediata --&gt;
&lt;div class="alert alert-danger" role="alert"&gt;
  No se ha podido guardar. Revisa los campos marcados.
&lt;/div&gt;</code></pre>

    <h3>Estados reactivos en Vue 3 y TypeScript</h3>
    <p>
      En Vue, estos mensajes pueden mostrarse según el estado de la petición. El marcado Bootstrap
      sigue siendo el mismo, pero el contenido se actualiza mediante variables reactivas.
    </p>
    <pre class="course-code"><code>&lt;script setup lang="ts"&gt;
import { ref } from 'vue'

// Controla si la petición está en curso.
const guardando = ref(false)

// Guarda por separado los mensajes de éxito y error.
const mensajeExito = ref('')
const mensajeError = ref('')

// Envía los datos y actualiza el estado visible de la interfaz.
async function guardarSolicitud() {
  guardando.value = true
  mensajeExito.value = ''
  mensajeError.value = ''

  try {
    const respuesta = await fetch('/api/solicitudes', { method: 'POST' })
    if (!respuesta.ok) throw new Error('No se ha podido guardar')

    mensajeExito.value = 'La solicitud se ha guardado correctamente.'
  } catch {
    mensajeError.value = 'No se ha podido guardar. Revisa los campos marcados.'
  } finally {
    guardando.value = false
  }
}
&lt;/script&gt;

&lt;template&gt;
  &lt;!-- El botón mantiene su nombre y evita envíos repetidos durante la carga. --&gt;
  &lt;button class="btn btn-primary" type="button"
    :disabled="guardando" @click="guardarSolicitud"&gt;
    Guardar solicitud
  &lt;/button&gt;

  &lt;!-- Los mensajes se incorporan al DOM solo cuando son necesarios. --&gt;
  &lt;p v-if="guardando" class="alert alert-info" role="status"&gt;
    Guardando solicitud…
  &lt;/p&gt;
  &lt;p v-if="mensajeExito" class="alert alert-success" role="status"
    v-text="mensajeExito"&gt;&lt;/p&gt;
  &lt;p v-if="mensajeError" class="alert alert-danger" role="alert"
    v-text="mensajeError"&gt;&lt;/p&gt;
&lt;/template&gt;</code></pre>

    <h2>Feedback inmediato</h2>
    <p>
      Cuando el usuario pulsa un botón, envía un formulario o cambia un filtro, la interfaz debe
      reaccionar de inmediato. A veces basta con deshabilitar un botón y mostrar un indicador de
      carga, manteniendo claro qué acción está en curso; otras veces conviene actualizar una zona
      concreta con un mensaje de éxito o error.
    </p>
    <p>
      Lo importante es evitar que la interfaz parezca bloqueada o silenciosa. Si una acción tarda,
      debe indicarse. Si termina bien, también. Y si falla, el sistema tiene que decirlo con
      claridad.
    </p>

    <h2>Mensajes claros y proporcionados</h2>
    <p>
      No todos los mensajes deben presentarse de la misma forma. Un aviso menor no necesita el
      mismo peso visual que un error que impide continuar.
    </p>
    <p>
      Aquí entra también en juego el <strong>microcopy</strong>, es decir, los textos breves de la
      interfaz: botones, ayudas, mensajes de error, confirmaciones o avisos de estado. Aunque sean
      pequeños, condicionan mucho la claridad de uso.
    </p>
    <p>En general, estos textos deben decir con claridad qué ocurre o qué va a ocurrir. Por ejemplo:</p>
    <ul>
      <li>Es mejor <strong>Guardar cambios</strong> que <strong>Aceptar</strong>, porque la acción queda más clara.</li>
      <li>Es mejor <strong>Enviar solicitud</strong> que <strong>Continuar</strong>, si realmente la acción ya envía el formulario.</li>
      <li>Es mejor <strong>No se ha podido guardar la solicitud. Revisa los campos marcados.</strong> que un mensaje genérico como <strong>Error inesperado</strong>.</li>
      <li>Es mejor <strong>Todavía no tienes solicitudes creadas</strong> que mostrar una pantalla vacía sin explicación.</li>
    </ul>
    <pre class="course-code"><code>&lt;!-- Textos ambiguos --&gt;
&lt;button type="button" class="btn btn-primary"&gt;Aceptar&lt;/button&gt;
&lt;button type="button" class="btn btn-primary"&gt;Continuar&lt;/button&gt;

&lt;!-- Textos que describen la acción --&gt;
&lt;button type="submit" class="btn btn-primary"&gt;Guardar cambios&lt;/button&gt;
&lt;button type="submit" class="btn btn-primary"&gt;Enviar solicitud&lt;/button&gt;</code></pre>
    <p>Además de redactarlos con claridad, conviene decidir cómo y cuándo se mostrarán:</p>
    <ul>
      <li>Los mensajes de éxito deben confirmar la acción realizada y, si procede, orientar sobre el siguiente paso.</li>
      <li>Los mensajes de error deben explicar qué ha fallado y cómo corregirlo.</li>
      <li>Las alertas importantes deben percibirse con facilidad, pero sin interrumpir de manera innecesaria.</li>
      <li>En acciones reversibles, muchas veces es preferible ofrecer una opción de deshacer antes que pedir confirmación previa.</li>
    </ul>

    <h2>Relación con accesibilidad</h2>
    <p>
      Todo esto tiene también un impacto directo en accesibilidad. Si el cambio solo se percibe
      visualmente, una parte de los usuarios no sabrá que algo ha ocurrido.
    </p>
    <p>
      Por eso conviene revisar que el foco se mantenga en un lugar lógico, que los mensajes puedan
      anunciarse cuando sea necesario, que el tiempo de lectura sea suficiente y que el color no
      sea el único recurso para distinguir éxito, aviso o error.
    </p>
  </div>
</template>
