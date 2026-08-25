<script setup lang="ts">
import CodeTabs from '../../components/CodeTabs.vue'
</script>

<template>
  <div>
    <p>
      Evitar un error es casi siempre mejor que explicarlo bien después. Este apartado recoge
      cómo prevenirlos antes de que ocurran y cómo dar margen de reacción cuando una acción es
      difícil o imposible de deshacer.
    </p>
    <p>
      El orden en que se abordan no es casual, porque va de lo más barato a lo más caro para la
      persona usuaria: primero <strong>evitar</strong> que el error se produzca, después
      <strong>proteger</strong> las acciones que no tienen vuelta atrás, y solo entonces plantearse
      cómo <strong>deshacer</strong> lo hecho. Una interfaz que solo trabaja el tercer nivel llega
      siempre tarde.
    </p>

    <h2>Prevenir antes de que ocurra</h2>
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

    <h2>Avisar antes de salir</h2>
    <p>
      Hay una pérdida que no procede de una acción destructiva sino de un descuido: abandonar una
      página con cambios sin guardar. Protegerla es el mismo principio del apartado anterior
      aplicado al trabajo en curso.
    </p>
    <p>
      Si hay cambios sin guardar, puede mostrarse el aviso estándar del navegador antes de
      abandonar la página. Los navegadores actuales no permiten personalizar el texto del diálogo.
    </p>
    <CodeTabs label="Implementación del aviso de cambios sin guardar">
      <template #js>
        <p>
          En una página convencional, <code>beforeunload</code> controla el cierre, la recarga o la
          salida del documento.
        </p>
        <pre class="course-code"><code>// Localiza el formulario que puede contener cambios pendientes.
const formulario = document.querySelector('#solicitud')

// Registra si el usuario ha modificado algún dato.
let cambiosSinGuardar = false

// Marca el formulario como modificado al cambiar cualquier campo.
formulario?.addEventListener('input', () =&gt; {
  cambiosSinGuardar = true
})

// Limpia la marca cuando el formulario se envía correctamente.
formulario?.addEventListener('submit', () =&gt; {
  cambiosSinGuardar = false
})

// Solicita la confirmación estándar al cerrar, recargar o salir de la página.
window.addEventListener('beforeunload', (evento) =&gt; {
  if (!cambiosSinGuardar) return

  evento.preventDefault()
  evento.returnValue = ''
})</code></pre>
      </template>

      <template #vue>
        <p>
          En una SPA hay que controlar dos salidas distintas. <code>beforeunload</code> se ocupa de
          cerrar o recargar la página y <code>onBeforeRouteLeave</code> de Vue Router controla la
          navegación interna.
        </p>
        <pre class="course-code"><code>&lt;script setup lang="ts"&gt;
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'

// Mantiene el estado reactivo de los cambios pendientes.
const cambiosSinGuardar = ref(false)

// Prepara el aviso nativo del navegador para salidas del documento.
function avisarAntesDeSalir(evento: BeforeUnloadEvent) {
  if (!cambiosSinGuardar.value) return

  evento.preventDefault()
  evento.returnValue = ''
}

// Registra el evento cuando el componente ya está montado en el navegador.
onMounted(() =&gt; {
  window.addEventListener('beforeunload', avisarAntesDeSalir)
})

// Elimina el evento cuando el componente deja de existir.
onBeforeUnmount(() =&gt; {
  window.removeEventListener('beforeunload', avisarAntesDeSalir)
})

// Cancela una navegación interna de Vue Router si el usuario no la confirma.
onBeforeRouteLeave(() =&gt; {
  if (!cambiosSinGuardar.value) return true
  return window.confirm('Hay cambios sin guardar. ¿Quieres salir de esta página?')
})

// Simula el guardado y permite abandonar la vista sin mostrar el aviso.
function guardar() {
  cambiosSinGuardar.value = false
}
&lt;/script&gt;

&lt;template&gt;
  &lt;!-- El evento input detecta cambios en cualquier campo del formulario. --&gt;
  &lt;form id="solicitud" @input="cambiosSinGuardar = true" @submit.prevent="guardar"&gt;
    &lt;label for="asunto-vue" class="form-label"&gt;Asunto&lt;/label&gt;
    &lt;input id="asunto-vue" class="form-control" type="text" required&gt;
    &lt;button class="btn btn-primary mt-3" type="submit"&gt;Guardar cambios&lt;/button&gt;
  &lt;/form&gt;
&lt;/template&gt;</code></pre>
      </template>
    </CodeTabs>

    <h2>Ejemplo: eliminar con «deshacer» en lugar de confirmación previa</h2>
    <p>
      Veamos cómo se aplica en la práctica el caso más habitual de acción reversible: eliminar un
      elemento de una lista. En lugar de interrumpir con un cuadro de confirmación, ocultamos el
      elemento de inmediato y ofrecemos unos segundos para deshacer antes de eliminarlo de verdad.
      El aviso usa <code>role="status"</code>, el mismo patrón de mensaje de estado ya visto en
      «SPA en Vue.js (II)», dentro de requisitos web.
    </p>
    <CodeTabs label="Implementación de eliminar con deshacer">
      <template #js>
        <pre class="course-code"><code>&lt;li id="fila-1248" class="list-group-item d-flex justify-content-between align-items-center"&gt;
  Solicitud 1248
  &lt;button type="button" class="btn btn-sm btn-outline-danger" data-id="1248"&gt;
    Eliminar
  &lt;/button&gt;
&lt;/li&gt;

&lt;div id="avisoDeshacer" role="status" class="mt-2"&gt;&lt;/div&gt;</code></pre>
        <pre class="course-code"><code>&lt;script&gt;
let temporizador;

document.querySelectorAll("[data-id]").forEach((boton) =&gt; {
  boton.addEventListener("click", () =&gt; {
    const id = boton.dataset.id;
    const fila = document.getElementById(`fila-${id}`);
    const aviso = document.getElementById("avisoDeshacer");

    fila.hidden = true;
    aviso.innerHTML = `Solicitud ${id} eliminada. &lt;button type="button" class="btn btn-link p-0" id="deshacer-${id}"&gt;Deshacer&lt;/button&gt;`;

    document.getElementById(`deshacer-${id}`).addEventListener("click", () =&gt; {
      clearTimeout(temporizador);
      fila.hidden = false;
      aviso.textContent = "";
    });

    temporizador = setTimeout(() =&gt; {
      fila.remove();
      aviso.textContent = "";
    }, 6000);
  });
});
&lt;/script&gt;</code></pre>
      </template>
      <template #vue>
        <pre class="course-code"><code>&lt;script setup lang="ts"&gt;
import { ref } from 'vue'

const solicitudes = ref([
  { id: '1248', oculta: false },
  { id: '1251', oculta: false },
])
const mensaje = ref('')
const idEnCurso = ref('')
let temporizador: ReturnType&lt;typeof setTimeout&gt;

function eliminar(id: string) {
  const solicitud = solicitudes.value.find((s) =&gt; s.id === id)
  if (!solicitud) return

  solicitud.oculta = true
  mensaje.value = `Solicitud ${id} eliminada.`
  idEnCurso.value = id

  temporizador = setTimeout(() =&gt; {
    solicitudes.value = solicitudes.value.filter((s) =&gt; s.id !== id)
    mensaje.value = ''
  }, 6000)
}

function deshacer() {
  clearTimeout(temporizador)
  const solicitud = solicitudes.value.find((s) =&gt; s.id === idEnCurso.value)
  if (solicitud) solicitud.oculta = false
  mensaje.value = ''
}
&lt;/script&gt;

&lt;template&gt;
  &lt;ul class="list-group"&gt;
    &lt;li
      v-for="solicitud in solicitudes.filter((s) =&gt; !s.oculta)"
      :key="solicitud.id"
      class="list-group-item d-flex justify-content-between align-items-center"
    &gt;
      &lt;span v-text="`Solicitud ${solicitud.id}`"&gt;&lt;/span&gt;
      &lt;button
        type="button"
        class="btn btn-sm btn-outline-danger"
        @click="eliminar(solicitud.id)"
      &gt;
        Eliminar
      &lt;/button&gt;
    &lt;/li&gt;
  &lt;/ul&gt;

  &lt;div role="status" class="mt-2"&gt;
    &lt;p v-if="mensaje" class="mb-0"&gt;
      &lt;span v-text="mensaje"&gt;&lt;/span&gt;
      &lt;button type="button" class="btn btn-link p-0" @click="deshacer"&gt;Deshacer&lt;/button&gt;
    &lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
      </template>
    </CodeTabs>
    <p>
      El contenedor con <code>role="status"</code> permanece montado desde el principio y solo
      cambia su contenido, para que el aviso y el botón «Deshacer» se anuncien sin necesidad de
      mover el foco. Pasado el tiempo de margen, el elemento se elimina definitivamente y el aviso
      desaparece.
    </p>
  </div>
</template>
