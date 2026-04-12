<template>
  <div>
    <p>
      Los formularios tienen como finalidad proporcionar interactividad a los sitios y aplicaciones
      web, esto es, dados una serie de datos, procesarlos de alguna forma para obtener resultados,
      ya sean filtrar listados, enviar peticiones al servidor o producir cambios en la interfaz.
    </p>
    <p>
      En este apartado nos centramos en los requisitos de accesibilidad del formulario. Más
      adelante, en usabilidad y UX, veremos patrones y decisiones de diseño orientadas a mejorar
      también la experiencia de uso.
    </p>

    <h2>Campos de formulario con etiqueta asociada</h2>
    <p>
      Todo campo de formulario debe estar <strong>dentro</strong> de una etiqueta de formulario
      `&lt;form&gt;`, de la misma forma que un elemento de lista `&lt;li&gt;` debe estar dentro
      de una etiqueta de lista `&lt;ul&gt;`.
    </p>
    <pre class="course-code"><code>&lt;form&gt;
  &lt;!-- Campos de formulario --&gt;
&lt;/form&gt;</code></pre>
    <p>
      Los campos de formulario pueden ser de varios tipos, como texto, número, fecha, archivo,
      etc. Cada tipo de campo tiene un comportamiento y apariencia diferente, y se pueden
      personalizar con atributos y estilos.
    </p>
    <p>
      Todo campo de formulario debe estar asociado con una etiqueta `&lt;label&gt;` que lo
      describa. Para ello, debemos incluir un atributo `id="nombreCampoFormulario"` en el campo de
      formulario y luego en una etiqueta `&lt;label&gt;` referenciarla en el atributo
      `for="nombreCampoFormulario"`. Veamos varios ejemplos:
    </p>
    <pre class="course-code"><code>&lt;form&gt;
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

    <h2>Agrupar campos de formulario</h2>
    <p>Hay dos ocasiones en las que debemos agrupar campos de formulario utilizando `fieldset` y `legend`:</p>
    <ul>
      <li>Cuando el formulario es muy largo, para agrupar campos de formulario relacionados.</li>
      <li>Cuando utilizamos campos `checkbox` o `radio`, para darles una etiqueta descriptiva en conjunto.</li>
    </ul>
    <p>Ejemplo en el caso de un formulario largo, agrupando por relación:</p>
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
    <p>Ejemplo de campos `checkbox` o `radio` agrupados:</p>
    <pre class="course-code"><code>&lt;form&gt;
  &lt;!-- Resto de campos... --&gt;
  &lt;fieldset&gt;
    &lt;legend&gt;Colectivo UA&lt;/legend&gt;
    &lt;div class="mb-3"&gt;
      &lt;div class="form-check"&gt;
        &lt;input class="form-check-input" type="radio" id="ptgas" /&gt;
        &lt;label class="form-check-label" for="ptgas"&gt;PTGAS&lt;/label&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="mb-3"&gt;
      &lt;div class="form-check"&gt;
        &lt;input class="form-check-input" type="radio" id="pdi" /&gt;
        &lt;label class="form-check-label" for="pdi"&gt;PDI&lt;/label&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="mb-3"&gt;
      &lt;div class="form-check"&gt;
        &lt;input class="form-check-input" type="radio" id="alu" /&gt;
        &lt;label class="form-check-label" for="alu"&gt;Alumno/a&lt;/label&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/fieldset&gt;
&lt;/form&gt;</code></pre>

    <h2>Validación de formularios</h2>
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
      obligatorios. De esta forma, se reduce la carga cognitiva a los usuarios. Además, el `*` a
      un lector de pantalla solo se lee como “asterisco”.
    </p>
    <p>
      En esta línea, es recomendable utilizar el atributo `required` en los campos de formulario,
      ya que indica la semántica a un lector de pantalla. Aunque usemos el atributo `novalidate`,
      hay que volver a validar siempre los datos de los campos del formulario, ya que el atributo
      `required` puede eliminarse desde el navegador y nos podría ocasionar un problema de
      seguridad.
    </p>
    <p>
      Finalmente, la forma de mostrar los mensajes de error de la validación depende de la
      tipología de la petición:
    </p>
    <ul>
      <li>Si es una petición Ajax, se recomienda mostrar los errores entre el último campo del formulario y el botón de enviar.</li>
      <li>Si la petición se procesará en el servidor, los errores deben mostrarse al principio del formulario.</li>
    </ul>
    <p>De esta forma, nos aseguramos de que siempre se muestran los errores en primer plano.</p>
    <p>
      Además, los mensajes deben ser claros y útiles. No basta con indicar que hay un error: hay
      que explicar qué campo ha fallado y, si es posible, cómo corregirlo.
    </p>

    <h2>Ejemplo de validación Ajax</h2>
    <p>Veamos un ejemplo de validación de un formulario mediante Ajax que efectúa los cambios en el cliente:</p>
    <pre class="course-code"><code>&lt;form novalidate id="mi-form"&gt;
  &lt;div class="mb-3"&gt;
    &lt;label for="nombre"&gt;Nombre&lt;/label&gt;
    &lt;input type="text" id="nombre" name="nombre" class="form-control" /&gt;
  &lt;/div&gt;
  &lt;div class="mb-3"&gt;
    &lt;label for="apellidos"&gt;Apellidos&lt;/label&gt;
    &lt;input type="text" id="apellidos" name="apellidos" class="form-control" /&gt;
  &lt;/div&gt;
  &lt;div class="mb-3"&gt;
    &lt;label for="email"&gt;E-mail (opcional)&lt;/label&gt;
    &lt;input type="email" id="email" name="email" class="form-control" /&gt;
  &lt;/div&gt;
  &lt;!-- Con role="alert" un lector de pantalla lee el contenido automáticamente cuando se inserte --&gt;
  &lt;div id="mensajealerta" role="alert"&gt;&lt;/div&gt;
  &lt;div class="mb-3"&gt;
    &lt;button type="submit" class="btn btn-primary"&gt;Enviar&lt;/button&gt;
  &lt;/div&gt;
&lt;/form&gt;</code></pre>
    <pre class="course-code"><code>&lt;script&gt;
document.getElementById("mi-form").addEventListener("submit", (event) =&gt; {
  event.preventDefault();

  const formulario = event.target;
  const nombre = formulario.nombre.value.trim();
  const apellidos = formulario.apellidos.value.trim();

  const mensajeAlerta = document.getElementById("mensajealerta");
  mensajeAlerta.classList.remove("alert", "alert-danger");
  mensajeAlerta.textContent = "";

  const errores = [];
  if (!nombre) errores.push("El campo 'Nombre' es obligatorio.");
  if (!apellidos) errores.push("El campo 'Apellidos' es obligatorio.");

  if (errores.length &gt; 0) {
    mensajeAlerta.classList.add("alert", "alert-danger");
    let texto = "&lt;p&gt;Error al enviar el formulario, se produjeron los siguientes errores:&lt;/p&gt;&lt;ul&gt;";
    errores.forEach((error) =&gt; {
      texto += "&lt;li&gt;" + error + "&lt;/li&gt;";
    });
    texto += "&lt;/ul&gt;";
    mensajeAlerta.innerHTML = texto;
  } else {
    alert("¡Enviado! Hacer algo...");
  }
});
&lt;/script&gt;</code></pre>
    <p>
      En el fichero `formularios.html` del repositorio GitHub se pueden encontrar más ejemplos de
      validación, como por ejemplo el tamaño máximo de un fichero y su extensión requerida.
    </p>
    <p>En el bloque de usabilidad y UX veremos después cómo reducir también la fricción y mejorar la experiencia general de estos formularios.</p>
  </div>
</template>
