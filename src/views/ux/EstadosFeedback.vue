<script setup lang="ts">
import CodeTabs from '../../components/CodeTabs.vue'
</script>

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
    <CodeTabs label="Implementación de los estados de una interfaz">
      <template #js>
        <p>En HTML y JavaScript, los mensajes se incorporan o actualizan al cambiar el estado:</p>
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
      </template>

      <template #vue>
        <p>
          En Vue, los mensajes se muestran según el estado reactivo de la petición. Bootstrap sigue
          controlando su presentación.
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
      </template>

      <template #preview>
        <p class="alert alert-info">Cargando solicitudes…</p>
        <p class="alert alert-success">La solicitud se ha guardado correctamente.</p>
        <p class="alert alert-danger mb-0">No se ha podido guardar. Revisa los campos marcados.</p>
      </template>
    </CodeTabs>

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
    </ul>
    <p>
      Esto conecta con el criterio WCAG de mensajes de estado: cuando un mensaje aparece sin
      recargar la página y sin mover el foco (por ejemplo, un aviso de «Guardado correctamente»
      tras enviar un formulario), quien usa un lector de pantalla y tiene el foco en otro punto de
      la página no se enterará del cambio salvo que se anuncie de forma programática, como ya
      hacen los ejemplos anteriores con <code>role="status"</code> y <code>role="alert"</code>.
    </p>

    <h2>Etiquetas de acciones repetidas en listas y CRUD</h2>
    <p>
      En un listado de tipo CRUD (cursos, expedientes, convocatorias...) es habitual repetir la
      misma acción en cada fila: <em>Crear</em>, <em>Editar</em>, <em>Eliminar</em> o <em>Ver</em>.
      Si el texto es siempre igual de genérico, quien navega con un lector de pantalla por una
      lista de controles escucha elementos idénticos, uno tras otro, sin saber a qué fila se
      refiere cada uno.
    </p>
    <p>
      Por eso el botón debe incluir el nombre del elemento al que afecta: mejor
      <strong>Crear convocatoria</strong> que <strong>Crear</strong>, mejor
      <strong>Editar Aula 12</strong> que <strong>Editar</strong>. Cuando el diseño no permite un
      texto tan largo en cada fila, la forma más simple de dar ese contexto sin cambiar el aspecto
      visual es un <code>aria-label</code> en el propio botón o enlace: el lector de pantalla
      anuncia el <code>aria-label</code> en lugar del texto visible, así que basta con una
      etiqueta para resolverlo, sin necesidad de tocar el HTML visible.
    </p>
    <pre class="course-code"><code>&lt;!-- El lector de pantalla anuncia "Editar Aula 12", no solo "Editar" --&gt;
&lt;button type="button" class="btn btn-sm btn-outline-primary" aria-label="Editar Aula 12"&gt;
  Editar
&lt;/button&gt;</code></pre>
    <p>
      Esto conecta con los criterios WCAG que exigen que las etiquetas describan su propósito y
      que el destino de cada enlace pueda determinarse por su propio texto o contexto.
    </p>

    <h2>Mensajes de error de formulario</h2>
    <p>
      Los requisitos técnicos de validación accesible se han tratado en el apartado de
      formularios. Aquí nos centramos en la redacción: los mensajes de error deben ser
      instrucciones positivas y accionables, no descripciones del fallo.
    </p>
    <ul>
      <li><strong>Introduce el nombre</strong>, mejor que <strong>El campo nombre no puede estar vacío</strong>.</li>
      <li><strong>Introduce un email válido</strong>, mejor que <strong>Formato de email incorrecto</strong>.</li>
    </ul>
    <p>
      Deben sonar a lenguaje humano y evitar términos genéricos como <strong>Entrada no
      válida</strong> cuando se puede indicar cómo corregir el dato. Si el formato esperado ya
      aparece en el texto de ayuda del campo, no hace falta repetir el mismo ejemplo en el error.
      El mensaje junto al campo y el del resumen de errores deben coincidir exactamente. Esto está
      respaldado por los criterios WCAG de identificación de errores (detectar el error y señalar
      el campo en texto) y sugerencia ante errores (indicar cómo corregirlo cuando se conoce la
      solución).
    </p>

    <h2>Prevención y recuperación de errores</h2>
    <p>
      Tres ideas resumen cómo prevenir errores y facilitar su corrección sin que se pierda el
      trabajo ya hecho:
    </p>
    <ul>
      <li>
        <strong>Validación temprana no invasiva.</strong> Avisar del error en cuanto se puede
        detectar con seguridad, pero sin interrumpir mientras la persona todavía está escribiendo
        (por ejemplo, validar un email al perder el foco del campo, no letra a letra).
      </li>
      <li>
        <strong>Sugerencias de corrección.</strong> Si el sistema puede deducir qué se quiso decir
        o qué formato se esperaba, ofrecerlo en el propio mensaje de error.
      </li>
      <li>
        <strong>Revisión antes de envío irreversible.</strong> En trámites largos o con
        consecuencias legales o económicas, mostrar un resumen final editable antes de confirmar,
        para poder corregir datos antes de que dejen de poder cambiarse.
      </li>
    </ul>

    <h2>Acciones reversibles y operaciones destructivas</h2>
    <p>
      La revisión antes del envío no siempre basta. Cuando la acción es irreversible —borrar,
      archivar, enviar un documento de forma definitiva— conviene pedir confirmación explícita
      antes de ejecutarla. En cambio, para una acción reversible suele ser mejor ofrecer un
      «deshacer» justo después de ejecutarla que interrumpir con una confirmación previa:
      interrumpe menos y da el mismo margen de reacción.
    </p>
    <p>
      El texto de los botones en una confirmación debe dejar clara la acción sin necesidad de leer
      nada más:
    </p>
    <ul>
      <li><strong>Crear</strong>: el botón principal dice el verbo y el elemento, por ejemplo «Crear convocatoria», nunca un genérico «Aceptar».</li>
      <li><strong>Guardar cambios</strong>: el botón principal dice «Guardar cambios», no «Aceptar» ni «Continuar».</li>
      <li><strong>Eliminar</strong>: el título del propio diálogo ya identifica el elemento («¿Eliminar Aula 12?»), así que el botón no necesita repetirlo; basta con «Eliminar», destacado visualmente como acción destructiva.</li>
    </ul>
    <p>
      En los tres casos, el botón de cancelar se queda simplemente en «Cancelar», sin ningún aviso
      adicional: si la persona cancela, no ha pasado nada, y avisar de algo que no ha ocurrido solo
      añade ruido.
    </p>
    <p>
      Otras buenas prácticas en confirmaciones: ser específico en el título («¿Eliminar Aula 12?»
      se entiende de un vistazo, «¿Eliminar?» obliga a leer también el cuerpo del mensaje),
      resaltar en el cuerpo lo irreversible («Esta acción no se puede deshacer» o «Se perderán las
      reservas asociadas») y no abusar de la confirmación, porque pedirla para cualquier clic acaba
      entrenando a la persona a pulsar «Aceptar» sin leer.
    </p>
    <p>
      Este patrón —confirmación, revisión o posibilidad de deshacer antes de una operación
      irreversible— es lo que exige el criterio WCAG de prevención de errores para los envíos que
      eliminan o modifican datos de forma permanente: la operación debe ser reversible, o los
      datos deben poder revisarse antes de confirmarla, o debe existir un mecanismo de confirmación
      previo.
    </p>

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
