# Usabilidad y UX

## Diseño inclusivo, usabilidad y experiencia de usuario

El diseño inclusivo, la usabilidad y la experiencia de usuario están muy relacionados, pero no significan exactamente lo mismo. Conviene diferenciarlos porque cada uno aporta un enfoque distinto a la calidad real de una interfaz.

## Diseño inclusivo

El diseño inclusivo busca aprovechar toda la diversidad humana al concebir productos y servicios, de modo que funcionen para personas con diferentes capacidades, contextos y experiencias. Microsoft lo ha desarrollado y difundido mediante su [metodología de diseño inclusivo (Inglés)](https://devblogs.microsoft.com/premier-developer/microsoft-inclusive-design/), que se ha convertido en una referencia para muchos equipos y universidades.

La propuesta parte de entender la discapacidad como un desajuste entre la persona y el entorno, y anima a quienes diseñan a detectar esos desajustes desde el inicio del proceso, no como un añadido posterior, para que la accesibilidad se traduzca en mejores experiencias para todas las personas.

El marco de Microsoft se articula en tres principios clave:

- Reconocer la exclusión: mapear dónde y por qué un sistema deja fuera a alguien.
- Aprender de la diversidad: incorporar las perspectivas de quienes viven esas exclusiones para revelar soluciones creativas.
- Crear para uno, extender a muchos: resolver bien un caso extremo y escalar la solución porque beneficiará a un espectro amplio de usuarios.

A estos se suman pautas operativas como pensar de forma universal y diseñar con múltiples formas de participación, que guían a los equipos durante todo el ciclo de vida del producto.

## Usabilidad

La usabilidad se refiere a cómo de **eficaz, eficiente y satisfactoria** es la interacción de personas concretas con un sitio web o aplicación, en un contexto de uso determinado. Una interfaz usable ayuda a lograr los objetivos con el menor esfuerzo y con errores fáciles de evitar o corregir.

Principios clave de la usabilidad:

- Facilidad de aprendizaje: el usuario entiende rápidamente cómo usar el sistema.
- Eficiencia: una vez aprendido, el sistema permite realizar tareas rápidamente.
- Memorabilidad: el usuario puede recordar cómo usarlo tras un tiempo sin utilizarlo.
- Bajo índice de errores: pocos errores y fáciles de corregir.
- Satisfacción: el uso del sistema resulta agradable.

## Experiencia de usuario (UX)

La experiencia de usuario es más amplia: engloba todas las **emociones, percepciones y reacciones** que una persona tiene al interactuar con una página web o aplicación.

La UX abarca la usabilidad, pero también considera:

- El diseño visual.
- El contenido.
- La accesibilidad.
- La credibilidad.
- El rendimiento.
- Las emociones que genera.

Dicho de otro modo, una interfaz puede ser usable en términos funcionales y, sin embargo, generar una mala experiencia si resulta confusa, poco creíble, visualmente descuidada o excesivamente fría en la interacción.

## Cómo evaluar la usabilidad y la experiencia

Para comprobar si nuestros diseños son usables y ofrecen una buena experiencia de usuario, podemos utilizar diferentes técnicas y herramientas:

- **Tests de usuario**: observar cómo personas reales interactúan con el sitio.
- **Análisis de tareas**: identificar los pasos necesarios para completar una tarea.
- **Prototipos**: probar la estructura antes de desarrollar.
- **Mapas de calor**: visualizar patrones de clic o desplazamiento; no sustituyen la observación directa.
- **Encuestas y entrevistas**: recopilar opiniones y emociones.
- **Pruebas A/B**: comparar dos versiones según un objetivo medible.
- **Personas**: representar necesidades y comportamientos detectados mediante investigación.

No es necesario utilizar todas las técnicas en todos los proyectos. Conviene elegirlas según el objetivo, la fase del diseño y los recursos disponibles.

## Estados, feedback y microcopy

Cuando una persona interactúa con una interfaz necesita saber en todo momento qué está ocurriendo, si su acción se ha procesado y qué puede hacer a continuación. Si no hay señales claras, aparecen la duda, la repetición de acciones y la sensación de falta de control.

Los requisitos técnicos de formularios, etiquetas y validación accesible ya se han tratado en el bloque anterior. Aquí nos centramos en cómo responder mejor a las acciones del usuario y cómo comunicar lo que ocurre en la interfaz.

### Estados de una interfaz

En muchos componentes y pantallas hay al menos cinco estados habituales que conviene diseñar de forma explícita:

- **Inicial**: la pantalla todavía no tiene resultados o espera una acción del usuario.
- **Cargando**: el sistema está procesando una petición y debe comunicarlo.
- **Vacío**: no hay datos, resultados o elementos disponibles.
- **Éxito**: la acción se ha completado correctamente.
- **Error**: algo ha fallado y hay que explicar qué ha ocurrido o cómo corregirlo.

Si estos estados no están pensados desde el principio, es frecuente acabar mostrando mensajes ambiguos, pantallas vacías o cambios de interfaz que el usuario no entiende.

```html
<!-- Estado de carga: informa sin interrumpir -->
<div class="alert alert-info" role="status">Cargando solicitudes…</div>
<!-- Estado de éxito: confirma que la acción ha terminado -->
<div class="alert alert-success" role="status">La solicitud se ha guardado correctamente.</div>
<!-- Estado de error: se anuncia de forma inmediata -->
<div class="alert alert-danger" role="alert">
  No se ha podido guardar. Revisa los campos marcados.
</div>
```

En Vue 3, estos mensajes se muestran según variables reactivas, por ejemplo con `ref`, `v-if` y `v-text`. Bootstrap mantiene la presentación y Vue controla cuándo aparece cada estado.

### Feedback inmediato

Cuando el usuario pulsa un botón, envía un formulario o cambia un filtro, la interfaz debe reaccionar de inmediato. A veces basta con deshabilitar un botón y mostrar un indicador de carga; otras veces conviene actualizar una zona concreta con un mensaje de éxito o error.

Lo importante es evitar que la interfaz parezca bloqueada o silenciosa. Si una acción tarda, debe indicarse. Si termina bien, también. Y si falla, el sistema tiene que decirlo con claridad.

### Mensajes claros y proporcionados

No todos los mensajes deben presentarse de la misma forma. Un aviso menor no necesita el mismo peso visual que un error que impide continuar.

Aquí entra también en juego el **microcopy**, es decir, los textos breves de la interfaz: botones, ayudas, mensajes de error, confirmaciones o avisos de estado. Aunque sean pequeños, condicionan mucho la claridad de uso.

En general, estos textos deben decir con claridad qué ocurre o qué va a ocurrir. Por ejemplo:

- Es mejor **Guardar cambios** que **Aceptar**, porque la acción queda más clara.
- Es mejor **Enviar solicitud** que **Continuar**, si realmente la acción ya envía el formulario.
- Es mejor **No se ha podido guardar la solicitud. Revisa los campos marcados.** que un mensaje genérico como **Error inesperado**.
- Es mejor **Todavía no tienes solicitudes creadas** que mostrar una pantalla vacía sin explicación.

```html
<!-- Textos que describen la acción -->
<button type="submit" class="btn btn-primary">Guardar cambios</button>
<button type="submit" class="btn btn-primary">Enviar solicitud</button>
```

Además de redactarlos con claridad, conviene decidir cómo y cuándo se mostrarán:

- Los mensajes de éxito deben confirmar la acción realizada y, si procede, orientar sobre el siguiente paso.
- Los mensajes de error deben explicar qué ha fallado y cómo corregirlo.
- Las alertas importantes deben percibirse con facilidad, pero sin interrumpir de manera innecesaria.
- En acciones reversibles, muchas veces es preferible ofrecer una opción de deshacer antes que pedir confirmación previa.

### Relación con accesibilidad

Todo esto tiene también un impacto directo en accesibilidad. Si el cambio solo se percibe visualmente, una parte de los usuarios no sabrá que algo ha ocurrido.

Por eso conviene revisar que el foco se mantenga en un lugar lógico, que los mensajes puedan anunciarse cuando sea necesario, que el tiempo de lectura sea suficiente y que el color no sea el único recurso para distinguir éxito, aviso o error.

## Color, contraste y percepción visual

En los siguientes apartados se habla de la percepción del color, el concepto de contraste de luminosidad entre color del texto y del fondo y los tipos de ceguera al color para no cometer el error de transmitir información únicamente mediante el color.

### Contraste de luminosidad

Existe un porcentaje de la población con problemas para percibir los colores, ya sea a la hora de diferenciar determinados colores o porque padece alguna forma de ceguera que solo le permite percibir un espectro reducido de colores.

El contraste de luminosidad **entre el color del fondo y el color del texto** debe ser suficiente para garantizar una buena legibilidad del texto en situaciones desfavorables de mucha luz, pantallas con poco contraste o brillo y para personas con problemas de visión.

Las pautas de accesibilidad del contenido web establecen en su nivel AA los diferentes ratios mínimos de contraste según el tamaño y tipo de texto:

- Ratio de **4.5:1** para texto normal, incluidos los enlaces y botones cuando contienen texto normal.
- Ratio de **3:1** para texto grande: a partir de 18 puntos en peso normal o 14 puntos en negrita.
- Ratio de **3:1** para componentes no textuales necesarios, como el borde, el icono o el indicador de foco de un control.

Un contraste suficiente facilita la lectura, pero no existe una única combinación adecuada para todas las personas. Además de cumplir los mínimos, conviene comprobar el resultado con los colores, tamaños y estados reales de la interfaz.

Por otro lado, no se aconseja utilizar fondos degradados de color o con tramas, ya que los cambios de tono de color podrían dificultar el acceso a la información del documento, sobre todo si se coloca texto sobre ese fondo.

### Uso semántico del color

Es recomendable no utilizar únicamente el color para transmitir información. Siempre se debe incluir esta información mediante otro sistema alternativo, además del uso del color.

Veamos un ejemplo incorrecto:

Nota: La respuesta correcta está en color rojo.

Pregunta 1: Debemos transmitir información únicamente mediante el color.

a) Verdadero

b) Falso

En este ejemplo, una persona ciega será incapaz de saber cuáles son las respuestas correctas, puesto que su lector de pantalla no puede interpretar los colores. Lo mismo ocurriría con una persona con dificultades para distinguir los colores.

Veamos ahora el mismo ejemplo utilizando una forma alternativa de transmitir la información:

Nota: La respuesta correcta se indica también mediante texto.

Pregunta 1: Debemos transmitir información únicamente mediante el color.

a) Verdadero

b) **Respuesta correcta:** Falso

En este ejemplo, la respuesta puede identificarse sin necesidad de percibir el color.

## Arquitectura de información y navegación

La arquitectura de información consiste en ordenar contenidos, acciones y rutas de navegación de forma coherente. En cualquier pantalla debería quedar claro dónde estamos, qué podemos hacer, cómo cambiar de sección y cuál es el siguiente paso.

Las migas de pan pueden mostrar la jerarquía y la página actual:

```html
<!-- La navegación tiene un nombre que indica su finalidad -->
<nav aria-label="Migas de pan">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Inicio</a></li>
    <li class="breadcrumb-item"><a href="/solicitudes">Solicitudes</a></li>
    <li class="breadcrumb-item active" aria-current="page">Detalle</li>
  </ol>
</nav>
```

En una SPA, los enlaces pueden implementarse con `RouterLink`. La ruta obtenida mediante `useRoute()` permite aplicar la clase activa y `aria-current="page"` sin recargar el documento.

## Plantillas y patrones de diseño

Las plantillas y patrones permiten resolver de forma coherente distribuciones e interacciones que se repiten. Deben elegirse según la tarea y la cantidad de información que necesita el usuario.

### Diseño en dos columnas

Puede utilizarse para relacionar una entrada con su resultado o para acompañar un formulario con ayuda contextual. En pantallas pequeñas, las columnas pasan a mostrarse una debajo de otra.

```html
<!-- El contenedor limita y centra el contenido general -->
<div class="container my-4">
  <div class="row g-4">
    <section class="col-12 col-lg-5" aria-labelledby="entrada">
      <h2 id="entrada">Texto original</h2>
      <!-- Controles de entrada -->
    </section>
    <section class="col-12 col-lg-7" aria-labelledby="resultado">
      <h2 id="resultado">Resultado</h2>
      <div class="border rounded p-3" role="status" aria-live="polite"></div>
    </section>
  </div>
</div>
```

### Formulario centrado

En formularios lineales y sencillos, una anchura limitada mejora la lectura y evita campos innecesariamente largos.

```html
<main class="container my-5">
  <div class="row justify-content-center">
    <div class="col-12 col-md-8 col-lg-6">
      <h1>Enviar solicitud</h1>
      <!-- Formulario -->
    </div>
  </div>
</main>
```

### Avisar antes de salir

Si hay cambios sin guardar, puede mostrarse el aviso estándar del navegador antes de abandonar la página. Los navegadores actuales no permiten personalizar el texto del diálogo.

```js
// Localiza el formulario y registra si hay cambios pendientes.
const formulario = document.querySelector('#solicitud')
let cambiosSinGuardar = false

// Marca el formulario como modificado.
formulario?.addEventListener('input', () => {
  cambiosSinGuardar = true
})

// Limpia la marca cuando se envía correctamente.
formulario?.addEventListener('submit', () => {
  cambiosSinGuardar = false
})

// Controla el cierre, la recarga o la salida del documento.
window.addEventListener('beforeunload', (evento) => {
  if (!cambiosSinGuardar) return
  evento.preventDefault()
  evento.returnValue = ''
})
```

En una SPA, `beforeunload` no controla los cambios de ruta internos. En Vue Router debe combinarse con `onBeforeRouteLeave`:

```vue
<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'

// Mantiene el estado de los cambios pendientes.
const cambiosSinGuardar = ref(false)

// Prepara el aviso nativo para cerrar o recargar el documento.
function avisarAntesDeSalir(evento: BeforeUnloadEvent) {
  if (!cambiosSinGuardar.value) return
  evento.preventDefault()
  evento.returnValue = ''
}

// Registra y elimina el evento con el ciclo de vida del componente.
onMounted(() => window.addEventListener('beforeunload', avisarAntesDeSalir))
onBeforeUnmount(() => window.removeEventListener('beforeunload', avisarAntesDeSalir))

// Controla la navegación interna de Vue Router.
onBeforeRouteLeave(() => {
  if (!cambiosSinGuardar.value) return true
  return window.confirm('Hay cambios sin guardar. ¿Quieres salir de esta página?')
})
</script>
```
