<script setup lang="ts">
const html = `<p>Los formularios tienen como finalidad proporcionar interactividad a los sitios y aplicaciones web, esto es, dados una serie de datos, procesarlos de alguna forma para obtener resultados. Ya sean filtrar listados, enviar peticiones al servidor, producir cambios en la interfaz, etc.</p>
<p>Campos de formulario con etiqueta asociada</p>
<p>Todo campo de formulario debe estar <b>dentro</b> de una etiqueta de formulario &lt;form&gt;, de la misma forma que un elemento de lista &lt;li&gt; debe de estar dentro de una etiqueta de lista &lt;ul&gt;.</p>
<pre class="course-code"><code>&lt;form&gt;
&lt;!-- Campos de formulario --&gt;
&lt;/form&gt;</code></pre>
<p>Los campos de formulario pueden ser de varios tipos, como texto, número, fecha, archivo, etc. Cada tipo de campo tiene un comportamiento y apariencia diferente, y se pueden personalizar con atributos y estilos.</p>
<p>Campos de formulario con etiqueta asociada</p>
<p>Todo campo de formulario debe estar asociado con una etiqueta &lt;label&gt; que lo describa. Para ello, debemos incluir un atributo id="nombreCampoFormulario" en el campo de formulario y luego en una etiqueta &lt;label&gt; referenciarla en el atributo for="nombreCampoFormulario". Veamos varios ejemplos:</p>
<pre class="course-code"><code>&lt;form&gt;
&lt;div class="mb-3"&gt;
&lt;label for="nombre" class="form-label"&gt;Nombre:&lt;/label&gt;
&lt;input type="text" id="nombre" class="form-control w-25" /&gt;
&lt;/div&gt;
&lt;div class="mb-3"&gt;
&lt;label for="colectivo" class="form-label"&gt;Colectivo UA&lt;/label&gt;
&lt;select id="colectivo" class="form-select w-25"&gt;
&lt;option value="alumno"&gt;Alumno&lt;/option&gt;
&lt;option value="pdi"&gt;PPDI&lt;/option&gt;
&lt;option value="ptgas"&gt;PTGAS&lt;/option&gt;
&lt;/select&gt;
&lt;/div&gt;
&lt;/form&gt;</code></pre>
<p>Agrupar campos de formulario</p>
<p>Hay dos ocasiones en las que debemos agrupar campos de formulario utilizando &lt;fieldset&gt;&lt;legend&gt;:</p>
<ul>
<li>Cuando el formulario es muy largo (más de 5 campos): Debemos agrupar campos de formulario relacionados. Por ejemplo: Datos personales, Datos académicos, etc.</li>
<li>Cuando utilizamos campos checkbox o radio: Para darles una etiqueta descriptiva en conjunto. Por ejemplo: género, colectivo, etc.</li>
</ul>
<p>Ejemplo en caso 1: Campos de formulario agrupados por relación cuando el formulario es muy largo:</p>
<pre class="course-code"><code>&lt;form&gt;
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
&lt;input type="text" id=”dni" class="form-control" /&gt;
&lt;/div&gt;
&lt;/fieldset&gt;
&lt;fieldset&gt;
&lt;legend&gt;Datos académicos&lt;/legend&gt;</code></pre>
<p>div class="mb-3"&gt;</p>
<pre class="course-code"><code>&lt;label for="estudio" class="form-label"&gt;Estudio&lt;/label&gt;
&lt;input type="text" id=”estudio" class="form-control" /&gt;
&lt;/div&gt;</code></pre>
<p>div class="mb-3"&gt;</p>
<pre class="course-code"><code>&lt;label for="asignatura" class="form-label"&gt;Asignatura&lt;/label&gt;
&lt;input type="text" id="asignatura" class="form-control"/&gt;
&lt;/div&gt;
&lt;/fieldset&gt;
&lt;div class=”mb-3”&gt;
&lt;button type=”submit”&gt;Gurdar&lt;/button&gt;
&lt;/div&gt;
&lt;/form&gt;</code></pre>
<p>Ejemplo de caso 2: Campos checkbox/radio agrupados:</p>
<pre class="course-code"><code>&lt;form&gt;
&lt;!—Resto de campos… --&gt;
&lt;fieldset&gt;
&lt;legend&gt;Colectivo UA&lt;/legend&gt;
&lt;div class=”mb-3”&gt;
&lt;div class="form-check"&gt;
&lt;input
class="form-check-input" type="radio" id="ptgas"&gt;
&lt;label
class="form-check-label" for="ptgas"&gt;PTGAS&lt;/label&gt;
&lt;/div&gt;
&lt;/DIV&gt;
&lt;div class=”mb-3”&gt;
&lt;div class="form-check"&gt;
&lt;input
class="form-check-input" type="radio" id="pdi"&gt;
&lt;label
class="form-check-label" for="pdi"&gt;PDI&lt;/label&gt;
&lt;/div&gt;
&lt;/DIV&gt;
&lt;div class=”mb-3”&gt;
&lt;div class="form-check"&gt;
&lt;input
class="form-check-input" type="radio" id="alu”&gt;
&lt;label
class="form-check-label" for="alu"&gt;Alumno/a&lt;/label&gt;
&lt;/div&gt;
&lt;/DIV&gt;
&lt;/fieldset&gt;
&lt;div class=”mb-3”&gt;
&lt;button type=”submit”&gt;Gurdar&lt;/button&gt;
&lt;/div&gt;
&lt;/form&gt;</code></pre>
<p>Validación de formularios</p>
<p>La primera cuestión que debemos plantearnos es cómo señalizar los campos que son obligatorios u opcionales.</p>
<p>En general, según los estudios, hay dos enfoques:</p>
<ul>
<li>Poner al inicio del formulario: “Todos los campos con * son obligatorios”. Y en cada etiqueta label, ponerle el *.</li>
<li>No poner nada al inicio del formulario dando a entender que todos los campos son obligatorios, y los que no lo sean, poner en la etiqeuta, al lado del nombre. La palabra (opcional).</li>
</ul>
<p>En general, se recomienda la segunda aproximación cuando hay pocos campos o la mayoría son obligatorios. De esta forma, se reduce la carga cognitiva a los usuarios. Además que el * por ejemplo, a un lector de pantalla, sólo se lee como “asterisco”.</p>
<p>En esta línea, es recomendable utilizar el atributo required en los campos de formulario, ya que indica la semántica por ejemplo, a un lector de pantalla. Aunque usemos el atributo novalidate=”true” en el formulario hay que volver a validar siempre los datos de los campos del formulario, ya que el atributo required puiede eliminarse desde las propiedades del navegador y nos podría ocasionar un problema de seguridad.</p>
<p>Finalmente, la forma de mostrar los mensajes de error de la validación depende de la tipología de la petición:</p>
<ul>
<li>Si es una petición Ajax, se recomienda mostrar los errores entre el último campo del formulario y y el botón de enviar.<span class="Apple-converted-space"> </span></li>
<li>Si la petición se procesará en el servidor, los errores deben mostrarse al principio del formulario.</li>
</ul>
<p>De esta forma, nos aseguramos que siempre se muestran los errores en primer plano.</p>
<p>Veamos un ejemplo de validación de un formulario mediante Ajax que efectúa los cambios en el cliente.</p>
<pre class="course-code"><code>&lt;form novalidate=”true” id=”mi-form”&gt;
&lt;div class=”mb-3”&gt;
&lt;label for=”nombre”&gt;Nombre&lt;/label&gt;
&lt;input type=”text” id=”nombre” name=”nombre” class=”form-control” /&gt;
&lt;/div&gt;
&lt;div class=”mb-3”&gt;
&lt;label for=”apellidos”&gt;Apellidos&lt;/label&gt;
&lt;input type=”text” id=”apellidos” name=”apellidos” class=”form-control” /&gt;
&lt;/div&gt;
&lt;div class=”mb-3”&gt;
&lt;label for=”email”&gt;E-mail (opcional)&lt;/label&gt;
&lt;input type=”email” id=”email” name=”email” class=”form-control” /&gt;
&lt;/div&gt;
&lt;!—</code></pre>
<p>Con role=”alert” un lector de pantalla lee el contenido automáticamente cuando se inserte, por ejemplos mensajes de error</p>
<p>--&gt;</p>
<pre class="course-code"><code>&lt;div id=”mensajealerta” role=”alert”&gt;&lt;/div&gt;
&lt;div class=”mb-3”&gt;
&lt;button type=”submit” class=”btn btn-primary”&gt;Enviar&lt;/button&gt;
&lt;/div&gt;</code></pre>
<pre class="course-code"><code>&lt;/form&gt;
&lt;!— Código JavaScript --&gt;
&lt;script&gt;
document.getElementById(“mi-form”).addEventListener(“submit”, (event) =&gt; {
event.preventDefault();</code></pre>
<pre class="course-code"><code>const formulario = event.target;
const nombre = formulario.nombre.value.trim();
const apellidos = formulario.apellidos.value.trim();</code></pre>
<pre class="course-code"><code>// Contenedor para los mensajes de error
const mensajeAlerta = document.getElementById("mensajealerta");
mensajeAlerta.classList.remove("alert", "alert-danger");</code></pre>
<p>mensajeAlerta.textContent = "";</p>
<pre class="course-code"><code>// Validación simple
let errores = [];
if (!nombre) errores.push("El campo 'Nombre' es obligatorio.");
if (!apellidos) errores.push("El campo 'Apellidos' es obligatorio.");</code></pre>
<pre class="course-code"><code>// Si hay errores, los mostramos
if (errores.length &gt; 0) {
mensajeAlerta.classList.add("alert", "alert-danger");
let texto = "&lt;p&gt;Error al enviar el formualrio, se produjeron los siguientes errores:&lt;/p&gt;&lt;ul&gt;"</code></pre>
<p>errores.forEach( (error) =&gt; {</p>
<p>texto += "&lt;li&gt;" + error + "&lt;/li&gt;";</p>
<pre class="course-code"><code>})</code></pre>
<p>texto += "&lt;/ul&gt;"</p>
<p>mensajeAlerta.innerHTML = texto;</p>
<pre class="course-code"><code>} else {
// En caso de no haber errores, mostramos un alert de éxito
alert("¡Enviado! Hacer algo.....");
// Aquí podrías implementar la lógica real de envío (fetch, axios, etc.)
}
});
&lt;/script&gt;</code></pre>
<p>En el fichero de formularios.html del repositorio GitHub se pueden encontrar más ejemplos de validación, como, por ejemplo, el tamaño máximo de un fichero y su extensión requerida.</p>
<p>En el apartado de usabilidad, veremos más acciones interesantes para hacer los formularios más usables y accesibles.</p>
<p>Componentes interactivos</p>`
</script>

<template>
  <div v-html="html" />
</template>
