<script setup lang="ts">
import CodeTabs from '../../components/CodeTabs.vue'
</script>

<template>
  <div>
    <p>
      Las plantillas y patrones permiten resolver de forma coherente distribuciones e interacciones
      que se repiten. No deben aplicarse de forma automática: hay que elegirlos según la tarea y la
      cantidad de información que necesita el usuario.
    </p>
    <p>
      Los tres que se recogen aquí cubren la mayor parte de los casos de una aplicación de gestión,
      y la elección entre ellos depende sobre todo de <strong>cuánta información necesita ver la
      persona a la vez</strong>: dos columnas cuando hay que comparar o consultar mientras se
      trabaja, formulario centrado cuando la tarea es única y corta, y proceso por pasos cuando es
      larga y conviene trocearla.
    </p>

    <h2>Diseño en dos columnas</h2>
    <p>
      Puede utilizarse para relacionar una entrada con su resultado o para acompañar un formulario
      con ayuda contextual. En pantallas pequeñas, las columnas pasan a mostrarse una debajo de otra.
    </p>
    <CodeTabs label="Implementación del diseño en dos columnas">
      <template #js>
        <pre class="course-code" tabindex="0"><code>&lt;!-- El contenedor limita y centra el contenido general. --&gt;
&lt;div class="container my-4"&gt;
  &lt;!-- La fila crea separación entre las dos zonas. --&gt;
  &lt;div class="row g-4"&gt;
    &lt;!-- Primera columna: ocupa todo el ancho en móvil y 5/12 en escritorio. --&gt;
    &lt;section class="col-12 col-lg-5" aria-labelledby="entrada"&gt;
      &lt;h2 id="entrada"&gt;Texto original&lt;/h2&gt;
      &lt;label for="texto" class="form-label"&gt;Contenido&lt;/label&gt;
      &lt;textarea id="texto" class="form-control" rows="8"&gt;&lt;/textarea&gt;
    &lt;/section&gt;

    &lt;!-- Segunda columna: contiene el resultado que puede actualizarse. --&gt;
    &lt;section class="col-12 col-lg-7" aria-labelledby="resultado"&gt;
      &lt;h2 id="resultado"&gt;Resultado&lt;/h2&gt;
      &lt;div class="border rounded p-3" role="status" aria-live="polite"&gt;
        El resultado aparecerá aquí.
      &lt;/div&gt;
    &lt;/section&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </template>

      <template #vue>
        <p>
          Las clases de Bootstrap se utilizan igual dentro del <code>template</code>. Vue se añade
          para enlazar los campos y actualizar el resultado sin recargar la página.
        </p>
        <pre class="course-code" tabindex="0"><code>&lt;script setup lang="ts"&gt;
import { computed, ref } from 'vue'

// Mantiene sincronizado el contenido del campo.
const texto = ref('')

// Calcula el resultado cada vez que cambia el texto.
const resultado = computed(() =&gt; texto.value.trim().toUpperCase())
&lt;/script&gt;

&lt;template&gt;
  &lt;!-- La cuadrícula de Bootstrap no cambia por utilizar Vue. --&gt;
  &lt;div class="container my-4"&gt;
    &lt;div class="row g-4"&gt;
      &lt;section class="col-12 col-lg-5" aria-labelledby="entrada-vue"&gt;
        &lt;h2 id="entrada-vue"&gt;Texto original&lt;/h2&gt;
        &lt;label for="texto-vue" class="form-label"&gt;Contenido&lt;/label&gt;
        &lt;textarea id="texto-vue" v-model="texto" class="form-control" rows="8"&gt;&lt;/textarea&gt;
      &lt;/section&gt;

      &lt;section class="col-12 col-lg-7" aria-labelledby="resultado-vue"&gt;
        &lt;h2 id="resultado-vue"&gt;Resultado&lt;/h2&gt;
        &lt;div class="border rounded p-3" role="status" aria-live="polite"
          v-text="resultado"&gt;&lt;/div&gt;
      &lt;/section&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
      </template>

      <template #preview>
        <div class="row g-4">
          <section class="col-12 col-lg-5" aria-labelledby="preview-entrada">
            <h3 id="preview-entrada" class="h5">Texto original</h3>
            <label for="preview-texto" class="form-label">Contenido</label>
            <textarea id="preview-texto" class="form-control" rows="4"></textarea>
          </section>
          <section class="col-12 col-lg-7" aria-labelledby="preview-resultado">
            <h3 id="preview-resultado" class="h5">Resultado</h3>
            <div class="border rounded p-3">El resultado aparecerá aquí.</div>
          </section>
        </div>
      </template>
    </CodeTabs>

    <h2>Formulario centrado</h2>
    <p>
      En formularios lineales y sencillos, una anchura limitada mejora la lectura y evita campos
      innecesariamente largos. En Vue se mantienen las mismas clases de Bootstrap.
    </p>
    <pre class="course-code" tabindex="0"><code>&lt;!-- El elemento main suele estar en el layout general de la aplicación. --&gt;
&lt;main class="container my-5"&gt;
  &lt;!-- justify-content-center centra la columna dentro de la fila. --&gt;
  &lt;div class="row justify-content-center"&gt;
    &lt;!-- La anchura aumenta de forma progresiva según la pantalla. --&gt;
    &lt;div class="col-12 col-md-8 col-lg-6"&gt;
      &lt;h1&gt;Enviar solicitud&lt;/h1&gt;
      &lt;form&gt;
        &lt;div class="mb-3"&gt;
          &lt;label for="asunto" class="form-label"&gt;Asunto&lt;/label&gt;
          &lt;input id="asunto" class="form-control" type="text" required&gt;
        &lt;/div&gt;
        &lt;button class="btn btn-primary" type="submit"&gt;Enviar solicitud&lt;/button&gt;
      &lt;/form&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/main&gt;</code></pre>

    <h2>Procesos por pasos y paneles</h2>
    <p>
      Un proceso largo puede dividirse en pasos claros. Los paneles son más adecuados cuando hay
      varios grupos de información que deben consultarse o compararse a la vez.
    </p>
    <CodeTabs label="Implementación de procesos por pasos y paneles">
      <template #js>
        <pre class="course-code" tabindex="0"><code>&lt;!-- La navegación indica que el listado representa el progreso. --&gt;
&lt;nav aria-label="Progreso de la solicitud"&gt;
  &lt;ol class="nav nav-pills gap-2 mb-4"&gt;
    &lt;li class="nav-item"&gt;
      &lt;span class="nav-link"&gt;1. Datos&lt;/span&gt;
    &lt;/li&gt;
    &lt;li class="nav-item"&gt;
      &lt;!-- aria-current identifica el paso en el que se encuentra el usuario. --&gt;
      &lt;span class="nav-link active" aria-current="step"&gt;2. Documentos&lt;/span&gt;
    &lt;/li&gt;
    &lt;li class="nav-item"&gt;
      &lt;span class="nav-link"&gt;3. Confirmación&lt;/span&gt;
    &lt;/li&gt;
  &lt;/ol&gt;
&lt;/nav&gt;</code></pre>
        <p>Para un panel de seguimiento puede utilizarse la misma cuadrícula:</p>
        <pre class="course-code" tabindex="0"><code>&lt;!-- Cada estado se muestra como una columna del panel. --&gt;
&lt;div class="row g-3"&gt;
  &lt;!-- La sección tiene un encabezado que identifica su contenido. --&gt;
  &lt;section class="col-12 col-lg-4" aria-labelledby="pendientes"&gt;
    &lt;div class="card h-100"&gt;
      &lt;div class="card-body"&gt;
        &lt;h2 id="pendientes" class="h5"&gt;Pendientes&lt;/h2&gt;
        &lt;ul class="list-group"&gt;
          &lt;li class="list-group-item"&gt;Solicitud 1248&lt;/li&gt;
          &lt;li class="list-group-item"&gt;Solicitud 1251&lt;/li&gt;
        &lt;/ul&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/section&gt;
  &lt;section class="col-12 col-lg-4" aria-labelledby="revision"&gt;
    &lt;div class="card h-100"&gt;
      &lt;div class="card-body"&gt;
        &lt;h2 id="revision" class="h5"&gt;En revisión&lt;/h2&gt;
        &lt;!-- Solicitudes en revisión --&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/section&gt;
  &lt;section class="col-12 col-lg-4" aria-labelledby="resueltas"&gt;
    &lt;div class="card h-100"&gt;
      &lt;div class="card-body"&gt;
        &lt;h2 id="resueltas" class="h5"&gt;Resueltas&lt;/h2&gt;
        &lt;!-- Solicitudes resueltas --&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/section&gt;
&lt;/div&gt;</code></pre>
      </template>

      <template #vue>
        <p>
          Si los pasos o los paneles proceden del estado de la aplicación, pueden generarse con
          <code>v-for</code> y actualizarse de forma reactiva.
        </p>
        <pre class="course-code" tabindex="0"><code>&lt;script setup lang="ts"&gt;
import { ref } from 'vue'

// Define los pasos en el mismo orden en que se realizan.
const pasos = [
  { id: 1, nombre: 'Datos' },
  { id: 2, nombre: 'Documentos' },
  { id: 3, nombre: 'Confirmación' },
]

// Guarda el identificador del paso que se está mostrando.
const pasoActual = ref(2)

// Agrupa las solicitudes que se mostrarán en cada panel.
const paneles = [
  { id: 'pendientes', titulo: 'Pendientes', solicitudes: ['1248', '1251'] },
  { id: 'revision', titulo: 'En revisión', solicitudes: ['1243'] },
  { id: 'resueltas', titulo: 'Resueltas', solicitudes: [] },
]
&lt;/script&gt;

&lt;template&gt;
  &lt;!-- Vue crea un elemento de lista por cada paso. --&gt;
  &lt;nav aria-label="Progreso de la solicitud"&gt;
    &lt;ol class="nav nav-pills gap-2 mb-4"&gt;
      &lt;li v-for="paso in pasos" :key="paso.id" class="nav-item"&gt;
        &lt;span
          class="nav-link"
          :class="{ active: paso.id === pasoActual }"
          :aria-current="paso.id === pasoActual ? 'step' : undefined"
          v-text="`${paso.id}. ${paso.nombre}`"
        &gt;&lt;/span&gt;
      &lt;/li&gt;
    &lt;/ol&gt;
  &lt;/nav&gt;

  &lt;!-- Cada grupo de datos genera una columna del panel. --&gt;
  &lt;div class="row g-3"&gt;
    &lt;section
      v-for="panel in paneles"
      :key="panel.id"
      class="col-12 col-lg-4"
      :aria-labelledby="`panel-${panel.id}`"
    &gt;
      &lt;div class="card h-100"&gt;
        &lt;div class="card-body"&gt;
          &lt;h2 :id="`panel-${panel.id}`" class="h5" v-text="panel.titulo"&gt;&lt;/h2&gt;
          &lt;ul v-if="panel.solicitudes.length" class="list-group"&gt;
            &lt;li v-for="id in panel.solicitudes" :key="id" class="list-group-item"&gt;
              Solicitud &lt;span v-text="id"&gt;&lt;/span&gt;
            &lt;/li&gt;
          &lt;/ul&gt;
          &lt;p v-else&gt;No hay solicitudes en este estado.&lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/section&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
      </template>
    </CodeTabs>

  </div>
</template>
