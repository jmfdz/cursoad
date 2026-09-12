<script setup lang="ts">
import CodeTabs from '../../components/CodeTabs.vue'
</script>

<template>
  <div>
    <p>
      Los formularios tienen como finalidad proporcionar interactividad a los sitios y aplicaciones
      web, esto es, dados una serie de datos, procesarlos de alguna forma para obtener resultados,
      ya sean filtrar listados, enviar peticiones al servidor o producir cambios en la interfaz.
    </p>
    <p>
      En este apartado nos centramos en los requisitos de accesibilidad del formulario, tanto en
      HTML y JavaScript sencillo como en Vue con <code>v-model</code>. Más adelante, en usabilidad y UX,
      veremos patrones y decisiones de diseño orientadas a mejorar también la experiencia de uso.
    </p>

    <h2>Reglas comunes, sea cual sea la tecnología</h2>
    <p>
      Antes de entrar en ejemplos, conviene fijar cuatro reglas que se cumplen en todos los
      formularios del curso, los escribamos en HTML plano o en un componente Vue:
    </p>
    <ul>
      <li>Los eventos de interacción (<code>click</code>, <code>keyup</code>...) van solo sobre controles interactivos, nunca sobre un <code>&lt;div&gt;</code> que simula un botón.</li>
      <li>Los campos que forman parte de una misma operación se agrupan dentro de un <code>&lt;form&gt;</code>.</li>
      <li>Cada campo lleva su <code>&lt;label&gt;</code> asociado mediante <code>for</code>/<code>id</code>. <code>v-model</code> no da nombre accesible por sí mismo: la asociación label/for/id sigue siendo necesaria en Vue.</li>
      <li>El formulario tiene una acción por defecto con un botón <code>type="submit"</code>; los botones secundarios llevan <code>type="button"</code> para no enviarlo. En JavaScript se evita la recarga con <code>event.preventDefault()</code>; en Vue, con <code>@submit.prevent</code>.</li>
    </ul>
    <p>Los apartados siguientes desarrollan estas reglas con ejemplos, mostrando primero la versión en HTML/JavaScript y después su equivalente en Vue.</p>

    <h2>Campos de formulario con etiqueta asociada</h2>
    <p>
      Cuando los campos forman parte de un envío o una operación conjunta, deben estar dentro de
      una etiqueta de formulario <code>&lt;form&gt;</code>. Hay controles autónomos, como algunos filtros que se
      aplican al cambiar su valor, que no necesitan enviar un formulario.
    </p>
    <p>
      Todo campo de formulario debe estar asociado con una etiqueta <code>&lt;label&gt;</code> que lo
      describa. Para ello, debemos incluir un atributo <code>id="nombreCampoFormulario"</code> en el campo de
      formulario y luego en una etiqueta <code>&lt;label&gt;</code> referenciarla en el atributo
      <code>for="nombreCampoFormulario"</code>. Veamos varios ejemplos:
    </p>
    <CodeTabs label="Implementación de campos con etiqueta asociada">
      <template #js>
        <pre class="course-code" tabindex="0"><code>&lt;form&gt;
  &lt;div class="mb-3"&gt;
    &lt;label for="nombre" class="form-label"&gt;Nombre:&lt;/label&gt;
    &lt;input type="text" id="nombre" class="form-control w-25" /&gt;
  &lt;/div&gt;
  &lt;div class="mb-3"&gt;
    &lt;label for="colectivo" class="form-label"&gt;Colectivo UA&lt;/label&gt;
    &lt;select id="colectivo" class="form-select w-25"&gt;
      &lt;option value="alumno"&gt;Alumno&lt;/option&gt;
      &lt;option value="pdi"&gt;PDI&lt;/option&gt;
      &lt;option value="ptgas"&gt;PTGAS&lt;/option&gt;
    &lt;/select&gt;
  &lt;/div&gt;
&lt;/form&gt;</code></pre>
      </template>
      <template #vue>
        <p>La etiqueta se relaciona con el campo exactamente igual; lo único que cambia es que el valor queda enlazado con <code>v-model</code> en lugar de leerse del DOM al enviar:</p>
        <pre class="course-code" tabindex="0"><code>&lt;script setup lang="ts"&gt;
import { ref } from 'vue'

const nombre = ref('')
const colectivo = ref('alumno')
&lt;/script&gt;

&lt;template&gt;
  &lt;form&gt;
    &lt;div class="mb-3"&gt;
      &lt;label for="nombre" class="form-label"&gt;Nombre:&lt;/label&gt;
      &lt;input id="nombre" v-model="nombre" type="text" class="form-control w-25" /&gt;
    &lt;/div&gt;
    &lt;div class="mb-3"&gt;
      &lt;label for="colectivo" class="form-label"&gt;Colectivo UA&lt;/label&gt;
      &lt;select id="colectivo" v-model="colectivo" class="form-select w-25"&gt;
        &lt;option value="alumno"&gt;Alumno&lt;/option&gt;
        &lt;option value="pdi"&gt;PDI&lt;/option&gt;
        &lt;option value="ptgas"&gt;PTGAS&lt;/option&gt;
      &lt;/select&gt;
    &lt;/div&gt;
  &lt;/form&gt;
&lt;/template&gt;</code></pre>
      </template>
    </CodeTabs>

    <h2>Agrupar campos de formulario</h2>
    <p>Hay dos ocasiones en las que debemos agrupar campos de formulario utilizando <code>fieldset</code> y <code>legend</code>:</p>
    <ul>
      <li>Cuando el formulario es muy largo, para agrupar campos de formulario relacionados.</li>
      <li>Cuando utilizamos campos <code>checkbox</code> o <code>radio</code>, para darles una etiqueta descriptiva en conjunto.</li>
    </ul>
    <CodeTabs label="Implementación de la agrupación de campos">
      <template #js>
        <p>Ejemplo en el caso de un formulario largo, agrupando por relación:</p>
        <pre class="course-code" tabindex="0"><code>&lt;form&gt;
  &lt;fieldset&gt;
    &lt;legend&gt;Datos personales&lt;/legend&gt;
    &lt;div class="mb-3"&gt;
      &lt;label for="nombre" class="form-label"&gt;Nombre:&lt;/label&gt;
      &lt;input type="text" id="nombre" class="form-control" /&gt;
    &lt;/div&gt;
    &lt;div class="mb-3"&gt;
      &lt;label for="apellidos" class="form-label"&gt;Apellidos:&lt;/label&gt;
      &lt;input type="text" id="apellidos" class="form-control" /&gt;
    &lt;/div&gt;
    &lt;div class="mb-3"&gt;
      &lt;label for="dni" class="form-label"&gt;DNI/NIE:&lt;/label&gt;
      &lt;input type="text" id="dni" class="form-control" /&gt;
    &lt;/div&gt;
  &lt;/fieldset&gt;

  &lt;fieldset&gt;
    &lt;legend&gt;Datos académicos&lt;/legend&gt;
    &lt;div class="mb-3"&gt;
      &lt;label for="estudio" class="form-label"&gt;Estudio&lt;/label&gt;
      &lt;input type="text" id="estudio" class="form-control" /&gt;
    &lt;/div&gt;
    &lt;div class="mb-3"&gt;
      &lt;label for="asignatura" class="form-label"&gt;Asignatura&lt;/label&gt;
      &lt;input type="text" id="asignatura" class="form-control" /&gt;
    &lt;/div&gt;
  &lt;/fieldset&gt;

  &lt;div class="mb-3"&gt;
    &lt;button type="submit"&gt;Guardar&lt;/button&gt;
  &lt;/div&gt;
&lt;/form&gt;</code></pre>
        <p>Ejemplo de campos <code>checkbox</code> o <code>radio</code> agrupados:</p>
        <pre class="course-code" tabindex="0"><code>&lt;form&gt;
  &lt;!-- Resto de campos... --&gt;
  &lt;fieldset&gt;
    &lt;legend&gt;Colectivo UA&lt;/legend&gt;
    &lt;div class="mb-3"&gt;
      &lt;div class="form-check"&gt;
        &lt;input class="form-check-input" type="radio" id="ptgas" name="colectivo" /&gt;
        &lt;label class="form-check-label" for="ptgas"&gt;PTGAS&lt;/label&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="mb-3"&gt;
      &lt;div class="form-check"&gt;
        &lt;input class="form-check-input" type="radio" id="pdi" name="colectivo" /&gt;
        &lt;label class="form-check-label" for="pdi"&gt;PDI&lt;/label&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="mb-3"&gt;
      &lt;div class="form-check"&gt;
        &lt;input class="form-check-input" type="radio" id="alu" name="colectivo" /&gt;
        &lt;label class="form-check-label" for="alu"&gt;Alumno/a&lt;/label&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/fieldset&gt;
&lt;/form&gt;</code></pre>
      </template>
      <template #vue>
        <p><code>v-model</code> no sustituye la agrupación mediante <code>fieldset</code> y <code>legend</code>; ambos siguen siendo necesarios:</p>
        <pre class="course-code" tabindex="0"><code>&lt;script setup lang="ts"&gt;
import { ref } from 'vue'

const tipoUsuario = ref('alumno')
&lt;/script&gt;

&lt;template&gt;
  &lt;fieldset class="mb-3"&gt;
    &lt;legend class="h5"&gt;Colectivo UA&lt;/legend&gt;

    &lt;div class="form-check"&gt;
      &lt;input
        id="alu"
        v-model="tipoUsuario"
        class="form-check-input"
        type="radio"
        name="colectivo"
        value="alumno"
      &gt;
      &lt;label class="form-check-label" for="alu"&gt;Alumno/a&lt;/label&gt;
    &lt;/div&gt;

    &lt;div class="form-check"&gt;
      &lt;input
        id="pdi"
        v-model="tipoUsuario"
        class="form-check-input"
        type="radio"
        name="colectivo"
        value="pdi"
      &gt;
      &lt;label class="form-check-label" for="pdi"&gt;PDI&lt;/label&gt;
    &lt;/div&gt;

    &lt;div class="form-check"&gt;
      &lt;input
        id="ptgas"
        v-model="tipoUsuario"
        class="form-check-input"
        type="radio"
        name="colectivo"
        value="ptgas"
      &gt;
      &lt;label class="form-check-label" for="ptgas"&gt;PTGAS&lt;/label&gt;
    &lt;/div&gt;
  &lt;/fieldset&gt;
&lt;/template&gt;</code></pre>
      </template>
    </CodeTabs>

    <h2>Campos obligatorios, opcionales y texto de ayuda</h2>
    <p>
      La primera cuestión que debemos plantearnos es cómo señalizar los campos que son obligatorios
      u opcionales.
    </p>
    <p>En general, según los estudios, hay dos enfoques:</p>
    <ul>
      <li>Poner al inicio del formulario “Todos los campos con * son obligatorios” y en cada etiqueta añadir el asterisco.</li>
      <li>No poner nada al inicio, dando a entender que todos los campos son obligatorios, y los que no lo sean marcarlo en la etiqueta con la palabra “opcional”.</li>
    </ul>
    <p>
      En general, se recomienda la segunda aproximación cuando hay pocos campos o la mayoría son
      obligatorios. De esta forma, se reduce la carga cognitiva a los usuarios. Además, el <code>*</code> a
      un lector de pantalla solo se lee como “asterisco”.
    </p>
    <p>
      Cuando un campo tiene instrucciones adicionales, como un formato concreto, no basta con que
      el texto de ayuda esté cerca visualmente: hay que relacionarlo con el campo de forma
      programática mediante <code>aria-describedby</code>.
    </p>
    <CodeTabs label="Implementación del texto de ayuda de un campo">
      <template #js>
        <pre class="course-code" tabindex="0"><code>&lt;div class="mb-3"&gt;
  &lt;label for="password" class="form-label"&gt;Contraseña&lt;/label&gt;
  &lt;input
    id="password"
    type="password"
    class="form-control"
    required
    aria-describedby="passwordHelp"
  /&gt;
  &lt;div id="passwordHelp" class="form-text"&gt;
    Debe contener al menos ocho caracteres.
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </template>
      <template #vue>
        <pre class="course-code" tabindex="0"><code>&lt;script setup lang="ts"&gt;
import { ref } from 'vue'

const password = ref('')
&lt;/script&gt;

&lt;template&gt;
  &lt;div class="mb-3"&gt;
    &lt;label for="password" class="form-label"&gt;Contraseña&lt;/label&gt;
    &lt;input
      id="password"
      v-model="password"
      type="password"
      class="form-control"
      required
      aria-describedby="passwordHelp"
    /&gt;
    &lt;div id="passwordHelp" class="form-text"&gt;
      Debe contener al menos ocho caracteres.
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
      </template>
    </CodeTabs>
    <p>La clase <code>form-text</code> proporciona la presentación de Bootstrap y <code>aria-describedby</code> establece la relación accesible con la ayuda. Un campo opcional se indica del mismo modo en su propia etiqueta:</p>
    <pre class="course-code" tabindex="0"><code>&lt;label for="email" class="form-label"&gt;Correo electrónico (opcional)&lt;/label&gt;</code></pre>

    <h2>Nombres claros para las acciones</h2>
    <p>
      Los textos de los botones de un formulario deben decir con claridad qué va a ocurrir, con el
      mismo criterio de microcopy que se desarrolla con más ejemplos en «Estados, feedback y
      microcopy», dentro de usabilidad y UX: mejor <strong>Crear usuario</strong> o
      <strong>Guardar cambios</strong> que <strong>Aceptar</strong> o <strong>Continuar</strong>.
      La misma acción debe mantener siempre el mismo texto en toda la aplicación, y las acciones
      destructivas deben nombrarse también de forma explícita, por ejemplo
      <strong>Eliminar usuario</strong> en lugar de un genérico <strong>Eliminar</strong>.
    </p>

    <h2>Validación y errores</h2>
    <p>
      La validación es la parte del formulario donde más fácil resulta dejar fuera a alguien, porque
      un error que solo se percibe por el color o la posición no llega a todo el mundo. Se resuelve
      en tres niveles, que son los tres subapartados siguientes: unos <strong>principios</strong>
      que valen para cualquier formulario, el <strong>error señalado junto al campo</strong> que
      falla, y el <strong>resumen</strong> que agrupa todos los errores del formulario.
    </p>

    <h3>Principios generales</h3>
    <p>
      Es recomendable utilizar el atributo <code>required</code> en los campos de formulario, ya que indica la
      semántica a un lector de pantalla. Aunque usemos el atributo <code>novalidate</code>, hay que validar
      siempre los datos también en el servidor: la validación realizada en el navegador mejora la
      experiencia, pero no es una medida de seguridad.
    </p>
    <p>
      Finalmente, la forma de mostrar los mensajes de error de la validación depende de la
      tipología de la petición:
    </p>
    <ul>
      <li>Si es una petición Ajax, se recomienda mostrar el resumen de errores después del botón de enviar y anunciarlo con <code>role="alert"</code>.</li>
      <li>Si la petición se procesa en el servidor y recarga la página, los errores deben mostrarse antes del formulario.</li>
    </ul>
    <p>De esta forma, nos aseguramos de que siempre se muestran los errores en primer plano.</p>
    <p>
      Además, los mensajes deben ser claros y útiles. No basta con indicar que hay un error: hay
      que explicar qué campo ha fallado y, si es posible, cómo corregirlo. Los dos apartados
      siguientes muestran ambos niveles: el error señalado junto al propio campo, y el resumen que
      agrupa todos los errores del formulario.
    </p>

    <h3>El error junto al campo</h3>
    <p>
      Bootstrap proporciona clases de validación como <code>is-invalid</code> e <code>invalid-feedback</code>, pero su
      propia documentación advierte de que los estilos personalizados de validación en cliente
      tienen limitaciones de accesibilidad con algunas tecnologías de asistencia, y recomienda
      valorar también la validación nativa del navegador o del servidor. En cualquier caso, no
      debemos depender únicamente del borde rojo o del icono para indicar que existe un error: el
      campo debe marcarse con <code>aria-invalid</code> y el mensaje debe asociarse mediante
      <code>aria-describedby</code>. Cuando se produzca un error, los datos introducidos deben conservarse
      siempre que sea posible.
    </p>
    <CodeTabs label="Implementación de la validación de un campo">
      <template #js>
        <pre class="course-code" tabindex="0"><code>&lt;div class="mb-3"&gt;
  &lt;label for="email" class="form-label"&gt;Correo electrónico&lt;/label&gt;
  &lt;input id="email" type="email" class="form-control" required aria-describedby="emailError" /&gt;
  &lt;div id="emailError" class="invalid-feedback"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
        <pre class="course-code" tabindex="0"><code>&lt;script&gt;
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");

function validarEmail() {
  const esValido = email.validity.valid && email.value.trim() !== "";

  email.classList.toggle("is-invalid", !esValido);
  email.setAttribute("aria-invalid", String(!esValido));
  emailError.textContent = esValido ? "" : "Introduce un email válido.";
}

email.addEventListener("blur", validarEmail);
&lt;/script&gt;</code></pre>
      </template>
      <template #vue>
        <pre class="course-code" tabindex="0"><code>&lt;script setup lang="ts"&gt;
import { ref } from 'vue'

const email = ref('')
const errorEmail = ref('')

function validarEmail() {
  errorEmail.value = email.value.trim() ? '' : 'Introduce un email válido.'
}
&lt;/script&gt;

&lt;template&gt;
  &lt;div class="mb-3"&gt;
    &lt;label for="email" class="form-label"&gt;Correo electrónico&lt;/label&gt;
    &lt;input
      id="email"
      v-model="email"
      type="email"
      class="form-control"
      required
      :class="{ 'is-invalid': errorEmail }"
      :aria-invalid="errorEmail ? 'true' : undefined"
      :aria-describedby="errorEmail ? 'emailError' : undefined"
      @blur="validarEmail"
    /&gt;
    &lt;div v-if="errorEmail" id="emailError" class="invalid-feedback" v-text="errorEmail"&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
      </template>
    </CodeTabs>

    <h3>El resumen de errores</h3>
    <p>
      En formularios extensos, además de señalar el error junto a cada campo, resulta útil mostrar
      un resumen cuando la validación falla, situado después del botón de enviar y anunciado con
      <code>role="alert"</code>:
    </p>
    <CodeTabs label="Implementación del resumen de errores">
      <template #js>
        <p>Veamos un ejemplo de validación de un formulario mediante Ajax que efectúa los cambios en el cliente:</p>
        <pre class="course-code" tabindex="0"><code>&lt;form novalidate id="mi-form"&gt;
  &lt;div class="mb-3"&gt;
    &lt;label for="nombre"&gt;Nombre&lt;/label&gt;
    &lt;input type="text" id="nombre" name="nombre" class="form-control" required /&gt;
  &lt;/div&gt;
  &lt;div class="mb-3"&gt;
    &lt;label for="apellidos"&gt;Apellidos&lt;/label&gt;
    &lt;input type="text" id="apellidos" name="apellidos" class="form-control" required /&gt;
  &lt;/div&gt;
  &lt;div class="mb-3"&gt;
    &lt;label for="email"&gt;E-mail (opcional)&lt;/label&gt;
    &lt;input type="email" id="email" name="email" class="form-control" /&gt;
  &lt;/div&gt;
  &lt;div class="mb-3"&gt;
    &lt;button type="submit" class="btn btn-primary"&gt;Enviar&lt;/button&gt;
  &lt;/div&gt;
  &lt;!-- Con role="alert" un lector de pantalla lee el contenido automáticamente cuando se inserte --&gt;
  &lt;div id="mensajealerta" role="alert" tabindex="-1"&gt;&lt;/div&gt;
&lt;/form&gt;</code></pre>
        <pre class="course-code" tabindex="0"><code>&lt;script&gt;
document.getElementById("mi-form").addEventListener("submit", (event) =&gt; {
  event.preventDefault();

  const formulario = event.target;
  const nombre = formulario.nombre.value.trim();
  const apellidos = formulario.apellidos.value.trim();

  const mensajeAlerta = document.getElementById("mensajealerta");
  mensajeAlerta.classList.remove("alert", "alert-danger");
  mensajeAlerta.textContent = "";
  formulario.nombre.removeAttribute("aria-invalid");
  formulario.apellidos.removeAttribute("aria-invalid");

  const errores = [];
  if (!nombre) {
    errores.push("El campo 'Nombre' es obligatorio.");
    formulario.nombre.setAttribute("aria-invalid", "true");
  }
  if (!apellidos) {
    errores.push("El campo 'Apellidos' es obligatorio.");
    formulario.apellidos.setAttribute("aria-invalid", "true");
  }

  if (errores.length &gt; 0) {
    mensajeAlerta.classList.add("alert", "alert-danger");
    let texto = "&lt;p&gt;Error al enviar el formulario, se produjeron los siguientes errores:&lt;/p&gt;&lt;ul&gt;";
    errores.forEach((error) =&gt; {
      texto += "&lt;li&gt;" + error + "&lt;/li&gt;";
    });
    texto += "&lt;/ul&gt;";
    mensajeAlerta.innerHTML = texto;
    mensajeAlerta.focus();
  } else {
    alert("¡Enviado! Hacer algo...");
  }
});
&lt;/script&gt;</code></pre>
      </template>
      <template #vue>
        <p>Con estado reactivo, el resumen se genera con <code>v-for</code> a partir de un array de errores. Añadir un enlace a cada uno, apuntando al <code>id</code> del campo, es una mejora sencilla sobre el patrón anterior que permite saltar directamente al campo problemático:</p>
        <pre class="course-code" tabindex="0"><code>&lt;script setup lang="ts"&gt;
import { ref } from 'vue'

const errores = ref&lt;{ id: string; campo: string; mensaje: string }[]&gt;([])

function guardarCambios() {
  // Se rellena "errores" tras validar el formulario.
}
&lt;/script&gt;

&lt;template&gt;
  &lt;form novalidate @submit.prevent="guardarCambios"&gt;
    &lt;!-- Campos del formulario --&gt;

    &lt;button type="submit" class="btn btn-primary"&gt;Guardar cambios&lt;/button&gt;

    &lt;div role="alert"&gt;
      &lt;div v-if="errores.length &gt; 0" class="alert alert-danger"&gt;
        &lt;h2 class="h5"&gt;Revise los siguientes errores&lt;/h2&gt;

        &lt;ul&gt;
          &lt;li v-for="error in errores" :key="error.id"&gt;
            &lt;a :href="`#${error.campo}`" v-text="error.mensaje"&gt;&lt;/a&gt;
          &lt;/li&gt;
        &lt;/ul&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/form&gt;
&lt;/template&gt;</code></pre>
      </template>
    </CodeTabs>
    <p>
      En ambos casos, el contenedor con <code>role="alert"</code> permanece montado desde el principio y la
      lista solo se genera cuando hay errores, por lo que no queda un <code>&lt;ul&gt;</code> vacío. Mantener
      el contenedor ya presente no es estrictamente necesario para que <code>role="alert"</code> se anuncie
      (a diferencia de <code>role="status"</code>, sí se anuncia igualmente si aparece de golpe con su
      contenido), pero es una forma más conservadora de asegurar que el aviso se detecta de forma
      fiable en distintos lectores de pantalla.
    </p>
    <p>
      En el fichero <code>formularios.html</code> del repositorio GitHub se pueden encontrar más ejemplos de
      validación, como por ejemplo el tamaño máximo de un fichero y su extensión requerida.
    </p>
    <p>En el bloque de usabilidad y UX veremos después cómo reducir también la fricción y mejorar la experiencia general de estos formularios.</p>
  </div>
</template>
